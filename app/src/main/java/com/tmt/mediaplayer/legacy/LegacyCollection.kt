package com.tmt.mediaplayer.legacy

import androidx.annotation.Keep
import com.google.gson.annotations.Expose
import com.tmt.mediaplayer.Keys
import java.util.*


/*
 * LegacyCollection class
 */
@Keep
data class LegacyCollection(@Expose val version: Int = Keys.CURRENT_LEGACY_COLLECTION_CLASS_VERSION_NUMBER,
                            @Expose var podcasts: MutableList<LegacyPodcast> = mutableListOf<LegacyPodcast>(),
                            @Expose var modificationDate: Date = Date()) {

    /* overrides toString method */
    override fun toString(): String {
        val stringBuilder: StringBuilder = StringBuilder()
        stringBuilder.append("Format version: $version\n")
        stringBuilder.append("Number of legacyPodcasts in collection: ${podcasts.size}\n\n")
        podcasts.forEach {
            stringBuilder.append("${it.toString()}\n")
        }
        return stringBuilder.toString()
    }


    /* Creates a deep copy of a LegacyCollection */
    fun deepCopy(): LegacyCollection {
        val podcastsCopy: MutableList<LegacyPodcast> = mutableListOf<LegacyPodcast>()
        podcasts.forEach { podcastsCopy.add(it.deepCopy()) }
        return LegacyCollection(version = version,
                          podcasts = podcastsCopy,
                          modificationDate = modificationDate)
    }

}

