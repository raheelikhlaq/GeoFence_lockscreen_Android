package com.tmt.mediaplayer.database.daos

import androidx.room.*
import com.tmt.mediaplayer.database.objects.EpisodeDescription


/*
 * EpisodeDescriptionDao interface
 */
@Dao
interface EpisodeDescriptionDao {

    @Query("SELECT * FROM episode_descriptions WHERE media_id IS :mediaId LIMIT 1")
    fun findByMediaId(mediaId: String): EpisodeDescription?


    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insert(episodeDescription: EpisodeDescription): Long


    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insertAll(episodeDescriptions: List<EpisodeDescription>): List<Long>


    @Update(onConflict = OnConflictStrategy.REPLACE)
    fun update(episodeDescription: EpisodeDescription)


    @Delete
    fun delete(episodeDescription: EpisodeDescription)

    @Query("DELETE from episode_descriptions where episode_remote_podcast_feed_location IS :episodeRemotePodcastFeedLocation")
    fun deleteAll(episodeRemotePodcastFeedLocation: String): Int


    @Transaction
    fun upsert(episode: EpisodeDescription): Boolean {
        val rowId = insert(episode)
        if (rowId == -1L) {
            update(episode)
            // false = episode was NOT NEW (= update)
            return false
        }
        // true = episode was NEW (= insert)
        return true
    }


    @Transaction
    fun upsertAll(episodeDescriptions: List<EpisodeDescription>) {
        val rowIds = insertAll(episodeDescriptions)
        val episodeDescriptionsToUpdate = rowIds.mapIndexedNotNull { index, rowId ->
            if (rowId == -1L) {
                // result -1 means that insert operation was not successful
                episodeDescriptions[index]
            } else {
                null
            }
        }
        episodeDescriptionsToUpdate.forEach { update(it) }
    }

}
