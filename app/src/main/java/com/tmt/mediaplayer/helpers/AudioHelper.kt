package com.tmt.mediaplayer.helpers

import android.content.Context
import android.media.MediaMetadataRetriever
import android.net.Uri


/*
 * AudioHelper object
 */
object AudioHelper {

    /* Define log tag */
    private val TAG: String = LogHelper.makeLogTag(AudioHelper::class.java)


    /* Extract duration metadata from audio file - used with file uris */
    fun getDuration(context: Context, audioFileUri: Uri): Long {
        val metadataRetriever: MediaMetadataRetriever = MediaMetadataRetriever()
        var duration: Long = 0L
        try {
            metadataRetriever.setDataSource(context, audioFileUri)
            val durationString = metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION) ?: String()
            duration = durationString.toLong()
        } catch (exception: Exception) {
            LogHelper.e(TAG, "Unable to extract duration metadata from audio file: $exception")
        }
        return duration
    }


    /* Extract duration metadata from audio file - used for http file paths */
    fun getDuration(audioFilePath: String): Long {
        val metadataRetriever: MediaMetadataRetriever = MediaMetadataRetriever()
        var duration: Long = 0L
        try {
            metadataRetriever.setDataSource(audioFilePath)
            val durationString = metadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION) ?: String()
            duration = durationString.toLong()
        } catch (exception: Exception) {
            LogHelper.e(TAG, "Unable to extract duration metadata from audio file: $exception")
        }
        return duration
    }


}
