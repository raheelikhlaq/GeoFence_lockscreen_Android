package com.tmt.mediaplayer.database.objects

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.Index
import androidx.room.PrimaryKey
import com.tmt.mediaplayer.xml.RssHelper


/*
 * Episode class
 */
@Entity(tableName = "episode_descriptions", indices = [Index(value = ["media_id"], unique = true), Index(value = ["episode_remote_podcast_feed_location"], unique = false)])
data class EpisodeDescription (

        @PrimaryKey
        @ColumnInfo (name = "media_id")
        val mediaId: String,

        @ColumnInfo (name = "episode_remote_podcast_feed_location")
        val episodeRemotePodcastFeedLocation: String,

        @ColumnInfo (name = "description") val description: String

        ) {


    /* Constructor that uses output from RssHelper */
    constructor(rssEpisode: RssHelper.RssEpisode) : this (

            // use remoteAudioFileLocation as unique media id
            mediaId = rssEpisode.remoteAudioFileLocation,
            //mediaId = (rssEpisode.remoteAudioFileLocation + rssEpisode.guid).hashCode().toString()

            episodeRemotePodcastFeedLocation = rssEpisode.episodeRemotePodcastFeedLocation,

            description = rssEpisode.description
    )

}
