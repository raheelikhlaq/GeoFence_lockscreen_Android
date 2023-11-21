package com.tmt.mediaplayer.database.daos

import androidx.lifecycle.LiveData
import androidx.room.*
import com.tmt.mediaplayer.database.objects.Podcast
import com.tmt.mediaplayer.database.wrappers.PodcastWithAllEpisodesWrapper
import com.tmt.mediaplayer.database.wrappers.PodcastWithRecentEpisodesWrapper


/*
 * PodcastDao interface
 */
@Dao
interface PodcastDao {
    @Query("SELECT COUNT(*) FROM podcasts")
    fun getSize(): LiveData<Int>

    @Query("SELECT * FROM podcasts")
    fun getAll(): List<Podcast>

    @Query("SELECT * FROM podcasts WHERE remote_image_file_location IS :remoteImageFileLocation LIMIT 1")
    fun findByRemoteImageFileLocation(remoteImageFileLocation: String): Podcast?

    @Query("SELECT * FROM podcasts WHERE remote_podcast_feed_location = :remotePodcastFeedLocation LIMIT 1")
    fun findByRemotePodcastFeedLocation(remotePodcastFeedLocation: String): Podcast?

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insert(podcast: Podcast): Long

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insertAll(podcasts: List<Podcast>): List<Long>

    @Update(onConflict = OnConflictStrategy.REPLACE)
    fun update(podcast: Podcast)

    @Delete
    fun delete(podcast: Podcast)

    @Transaction
    fun upsert(podcast: Podcast): Boolean {
        val rowId = insert(podcast)
        if (rowId == -1L) {
            // false = podcast was NOT NEW (= update)
            update(podcast)
            return false
        }
        // true = podcast was NEW (= insert)
        return true
    }

    @Transaction
    fun upsertAll(podcasts: List<Podcast>) {
        val rowIds = insertAll(podcasts)
        val podcastsToUpdate: List<Podcast> = rowIds.mapIndexedNotNull { index, rowId ->
            if (rowId == -1L) {
                // result -1 means that insert operation was not successful
                podcasts[index]
            } else {
                null
            }
        }
        podcastsToUpdate.forEach { update(it) }
    }


    /**
     * This query will tell Room to query both the podcast and episode tables and handle
     * the object mapping.
     */
    @Transaction
    @Query("SELECT * FROM podcasts")
    fun getAllPodcastsWithAllEpisodesLiveData(): LiveData<List<PodcastWithAllEpisodesWrapper>>


    @Transaction
    @Query("SELECT * FROM podcasts ORDER BY latest_episode_date")
    fun getAllPodcastsWithMostRecentEpisodeLiveData(): LiveData<List<PodcastWithRecentEpisodesWrapper>>

    //@Transaction
    //@Query("SELECT * FROM episodes ORDER BY publication_date DESC LIMIT 10")
    //fun getCollectionLiveData2(): LiveData<List<PodcastWrapper>>

    /**
     * This query will tell Room to query both the podcast and episode tables and handle
     * the object mapping.
     */
    @Transaction
    @Query("SELECT * FROM podcasts WHERE remote_podcast_feed_location = :remotePodcastFeedLocation LIMIT 1")
    fun getWithRemotePodcastFeedLocation(remotePodcastFeedLocation: String): PodcastWithAllEpisodesWrapper?


    /* Updates podcast cover and small cover */
    @Query("UPDATE podcasts SET cover = :cover , small_cover = :smallCover WHERE remote_image_file_location = :remoteImageFileLocation")
    fun updateCover(remoteImageFileLocation: String, cover: String, smallCover: String): Int

}
