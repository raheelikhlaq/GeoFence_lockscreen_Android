package com.tmt.mediaplayer.database.wrappers

import androidx.room.DatabaseView
import androidx.room.Embedded
import com.tmt.mediaplayer.database.objects.Episode


/*
 * DatabaseView class
 * Credit: https://stackoverflow.com/questions/64025864/android-room-looking-for-dao-that-limits-the-number-of-elements-in-embedded-li/64026959
 * ...and: https://stackoverflow.com/questions/64250896/sqlite-query-five-most-recent-episode-of-each-podcast/64250926
 */
@DatabaseView("SELECT * FROM episodes e WHERE ( SELECT count(*) from episodes e1 WHERE e1.episode_remote_podcast_feed_location = e.episode_remote_podcast_feed_location AND e1.publication_date >= e.publication_date ) <= 5")
data class EpisodeMostRecentView (
        @Embedded
        val data: Episode
)
