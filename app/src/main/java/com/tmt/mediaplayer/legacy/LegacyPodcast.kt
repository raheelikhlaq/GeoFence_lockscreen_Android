package com.tmt.mediaplayer.legacy

import androidx.annotation.Keep
import com.google.gson.annotations.Expose
import com.tmt.mediaplayer.Keys
import java.util.*


/*
 * podcast class
 */
@Keep
data class LegacyPodcast(@Expose var name: String = String(),
                         @Expose var description: String = String(),
                         @Expose var website: String = String(),
                         @Expose var cover: String = Keys.LOCATION_DEFAULT_COVER,
                         @Expose var smallCover: String = Keys.LOCATION_DEFAULT_COVER,
                         @Expose var episodes: MutableList<LegacyEpisode> = mutableListOf<LegacyEpisode>(),
                         @Expose var lastUpdate: Date = Calendar.getInstance().time,
                         @Expose var remoteImageFileLocation: String = String(),
                         @Expose var remotePodcastFeedLocation: String = String()) {


    /* overrides toString method */
    override fun toString(): String {
        val descriptionLength: Int = 50
        val stringBuilder: StringBuilder = StringBuilder()
        val shortDescriptionLength: Int = if (description.length <= descriptionLength) description.length -1 else descriptionLength
        val shortDescription: String = description.trim().substring(0, shortDescriptionLength)
        stringBuilder.append("Name: $name\n")
        stringBuilder.append("Cover: $cover\n")
        stringBuilder.append("Cover URL: $remoteImageFileLocation\n")
        stringBuilder.append("Feed URL: $remotePodcastFeedLocation\n")
        stringBuilder.append("Update: ${lastUpdate.toString()}\n")
        stringBuilder.append("Episodes: ${episodes.size}\n")
        stringBuilder.append("$shortDescription ...\n")
        episodes.forEachIndexed { index, episode ->
            // print out three episodes
            if (index < 3) {
                stringBuilder.append(episode.toString())
            }
        }
        return stringBuilder.toString()
    }


    /* Returns a unique podcast id - currently just the remotePodcastFeedLocation */
    fun getPodcastId(): String = remotePodcastFeedLocation


    /* Creates a deep copy of a podcast */
    fun deepCopy(): LegacyPodcast {
        val episodesCopy: MutableList<LegacyEpisode> = mutableListOf<LegacyEpisode>()
        episodes.forEach { episodesCopy.add(it.deepCopy()) }
        return LegacyPodcast(name = name,
                       description = description,
                       website = website,
                       cover = cover,
                       smallCover = smallCover,
                       episodes = episodesCopy,
                       lastUpdate = lastUpdate,
                       remoteImageFileLocation = remoteImageFileLocation,
                       remotePodcastFeedLocation = remotePodcastFeedLocation)
    }

}
