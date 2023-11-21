package com.tmt.mediaplayer.database.objects

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.Index
import androidx.room.PrimaryKey
import com.tmt.mediaplayer.xml.RssHelper

/*
 * PodcastDescription class
 */
@Entity(tableName = "podcast_descriptions", indices = [Index(value = ["remote_podcast_feed_location"], unique = true)])
data class PodcastDescription(

        @PrimaryKey
        @ColumnInfo (name = "remote_podcast_feed_location") val remotePodcastFeedLocation: String,
        @ColumnInfo (name = "description") val description: String,

) {

    /* Constructor that uses output from RssHelper*/
    constructor(rssPodcast: RssHelper.RssPodcast) : this (
            remotePodcastFeedLocation = rssPodcast.remotePodcastFeedLocation,
            description = rssPodcast.description
    )
}
