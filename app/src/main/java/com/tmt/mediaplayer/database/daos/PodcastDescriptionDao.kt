package com.tmt.mediaplayer.database.daos

import androidx.room.*
import com.tmt.mediaplayer.database.objects.PodcastDescription


/*
 * PodcastDescriptionDao interface
 */
@Dao
interface PodcastDescriptionDao {

    @Query("SELECT * FROM podcast_descriptions WHERE remote_podcast_feed_location IS :remotePodcastFeedLocation LIMIT 1")
    fun findByRemotePodcastFeedLocation(remotePodcastFeedLocation: String): PodcastDescription?

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insert(podcastDescription: PodcastDescription): Long

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insertAll(podcastDescriptions: List<PodcastDescription>): List<Long>

    @Update(onConflict = OnConflictStrategy.REPLACE)
    fun update(podcastDescription: PodcastDescription)

    @Delete
    fun delete(podcastDescription: PodcastDescription)

    @Query("DELETE from podcast_descriptions where remote_podcast_feed_location IS :remotePodcastFeedLocation")
    fun delete(remotePodcastFeedLocation: String)

    @Transaction
    fun upsert(podcastDescription: PodcastDescription): Boolean {
        val rowId = insert(podcastDescription)
        if (rowId == -1L) {
            // false = podcast was NOT NEW (= update)
            update(podcastDescription)
            return false
        }
        // true = podcast was NEW (= insert)
        return true
    }

    @Transaction
    fun upsertAll(podcastDescriptions: List<PodcastDescription>) {
        val rowIds = insertAll(podcastDescriptions)
        val podcastDescriptionsToUpdate: List<PodcastDescription> = rowIds.mapIndexedNotNull { index, rowId ->
            if (rowId == -1L) {
                // result -1 means that insert operation was not successful
                podcastDescriptions[index]
            } else {
                null
            }
        }
        podcastDescriptionsToUpdate.forEach { update(it) }
    }

}
