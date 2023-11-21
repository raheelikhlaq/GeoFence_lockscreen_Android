package com.tmt.mediaplayer.database.wrappers

import androidx.room.Embedded
import androidx.room.Relation
import com.tmt.mediaplayer.database.objects.Podcast


/*
 * PodcastWithRecentEpisodesWrapper class
 */
data class PodcastWithRecentEpisodesWrapper(
    @Embedded
        val data: Podcast,

    @Relation(parentColumn = "remote_podcast_feed_location", entityColumn = "episode_remote_podcast_feed_location")
        val episodes: List<EpisodeMostRecentView>
)
