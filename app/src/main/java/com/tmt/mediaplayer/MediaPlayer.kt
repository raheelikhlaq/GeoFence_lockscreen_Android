package com.tmt.mediaplayer

import android.content.ComponentName
import android.content.Context
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.session.MediaController
import androidx.media3.session.SessionToken
import com.google.common.util.concurrent.MoreExecutors
import com.tmt.mediaplayer.PlayerService.Companion.controllerFuture
import com.tmt.mediaplayer.PlayerService.Companion.mDuration
import com.tmt.mediaplayer.PlayerService.Companion.mPlayerState
import com.tmt.mediaplayer.PlayerService.Companion.mSeekPos
import com.tmt.mediaplayer.database.objects.Episode
import com.tmt.mediaplayer.extensions.changePlaybackSpeed
import com.tmt.mediaplayer.extensions.continuePlayback
import com.tmt.mediaplayer.extensions.hasMediaItems
import com.tmt.mediaplayer.extensions.play
import com.tmt.mediaplayer.ui.PlayerState
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import java.util.Date

class MediaPlayer : CordovaPlugin() {

    protected var mCallbackContext: CallbackContext? = null
    private var mContext: Context? = null

    private val controller: MediaController?
        get() = if (controllerFuture.value!!.isDone) controllerFuture.value!!.get() else null // defines the Getter for the MediaController

    private var playerState: PlayerState = PlayerState()
    private val handler: Handler = Handler(Looper.getMainLooper())

    private lateinit var title: String
    private lateinit var audio: String
    private lateinit var cover: String
    private lateinit var isPlaying: String
    private lateinit var streaming: String
    private lateinit var playbackPosition: String
    private lateinit var duration: String

    @RequiresApi(Build.VERSION_CODES.M)
    @Throws(JSONException::class)
    override fun execute(
            action: String,
            data: JSONArray,
            callbackContext: CallbackContext
    ): Boolean {
        mContext = cordova.activity.applicationContext
        mCallbackContext = callbackContext

        var result = true

        try {
            if (action == "play") {
//                cordova.threadPool.execute {
                cordova.activity.runOnUiThread {
                    val mData = data.getJSONObject(0) as JSONObject

                    title = mData.getString("title") as String
                    audio = mData.getString("audio") as String
                    cover = mData.getString("cover") as String
                    isPlaying = mData.getString("isPlaying") as String
                    streaming = mData.getString("streaming") as String
                    playbackPosition = mData.getString("playbackPosition") as String
                    duration = mData.getString("duration") as String

                    playerState = PlayerState(
                            currentEpisodeMediaId = audio,
                            isPlaying = isPlaying.toBoolean(),
                            playbackSpeed = 1.0f,
                            sleepTimerRunning = false,
                            streaming = streaming.toBoolean(),
                            upNextEpisodeMediaId = ""
                    )

                    initializePlayer()
                    result = true
                }
            } else if (action == "pause") {
                Thread {
                    Handler(Looper.getMainLooper()).post {
                        controllerFuture.value!!.get().pause()
                      mPlayerState.value = "PAUSE"
                    }
                }.start()
                result = true
            } else if (action == "resume") {
                Thread {
                    Handler(Looper.getMainLooper()).post {
                        controllerFuture.value!!.get().continuePlayback()
                    }
                }.start()
                result = true
            } else if (action == "seek") {
                Thread {
                    Handler(Looper.getMainLooper()).post {
                        val mData = data.getJSONObject(0) as JSONObject
                        val seekTo = mData.getString("seekTo").toLong()
                        if(controllerFuture.value != null) {
                            controllerFuture.value!!.get().seekTo(seekTo)
                        }
                    }
                }.start()
                result = true
            } else if (action == "stop") {
                Thread {
                    Handler(Looper.getMainLooper()).post {
                        mPlayerState.value = "STOP"
                        controllerFuture.value!!.get().stop()
                        controllerFuture.value!!.get().clearMediaItems()
//                        controllerFuture.value!!.get().stop()
                    }
                }.start()
                result = true
            } else if (action == "current") {
                val mData = JSONObject()

                mData.put("state", mPlayerState.value.toString())
                mData.put("position", mSeekPos.value.toString())
                mData.put("duration", mDuration.value.toString())
                mCallbackContext!!.success(mData)
                result = true
            } else if (action == "speed") {
                val mData = data.getJSONObject(0) as JSONObject
                val mVal = mData.getString("value")
                Thread {
                    Handler(Looper.getMainLooper()).post {
                        controllerFuture.value!!.get().setPlaybackSpeed(mVal.toFloat())
//                        controllerFuture.value!!.get().stop()
                    }
                }.start()
                result = true
            }
            else {
                handleError("Invalid action")
                result = false
            }
        } catch (e: Exception) {
            handleException(e)
            result = false
        }

        return result
    }

    /* Initializes the MediaController - handles connection to PlayerService under the hood */
    private fun initializePlayer() {
        controllerFuture.value = MediaController.Builder(
                mContext!!,
                SessionToken(mContext!!, ComponentName(mContext!!, PlayerService::class.java))
        ).buildAsync()
        controllerFuture.value!!.addListener({ setupController() }, MoreExecutors.directExecutor())

        mPlayerState.value = "STOP"
    }

    /* Sets up the MediaController  */
    private fun setupController() {
        val controller: MediaController = this.controller ?: return

        // update playback progress state
        togglePeriodicProgressUpdateRequest()

        controller.addListener(playerListener)

        val selectedEpisode = Episode(
                mediaId = audio,
                guid = "",
                title = title,
                audio = audio,
                cover = cover,
                smallCover = cover,
                publicationDate = Date(),
                isPlaying = isPlaying.toBoolean(),
                playbackPosition = 0L,
                duration = 0L,
                manuallyDeleted = false,
                manuallyDownloaded = false,
                podcastName = "",
                remoteAudioFileLocation = "",
                remoteAudioFileName = "",
                remoteCoverFileLocation = "",
                episodeRemotePodcastFeedLocation = ""
        )

        playerState.currentEpisodeMediaId = selectedEpisode.mediaId
        // start playback
        CoroutineScope(Dispatchers.IO).launch {
            val position = 0L // reset position, if episode is finished
            withContext(Dispatchers.Main) {
                controller.play(
                        Episode(selectedEpisode, playbackPosition = position),
                        playerState.streaming
                )
            }
        }
    }

    /*
    * Runnable: Periodically requests playback position (and sleep timer if running)
    */
    private val periodicProgressUpdateRequestRunnable: Runnable = object : Runnable {
        override fun run() {

            // update progress bar - only if controller is prepared with a media item
            if (controller?.hasMediaItems() == true) {
                mSeekPos.value = controller!!.currentPosition.toString()
                PlayerService.mDuration.value = controller!!.duration.toString()
            }
            // use the handler to start runnable again after specified delay
            handler.postDelayed(this, 500)
        }
    }

    private fun togglePeriodicProgressUpdateRequest() {
        when (controller?.isPlaying) {
            true -> {
                handler.removeCallbacks(periodicProgressUpdateRequestRunnable)
                handler.postDelayed(periodicProgressUpdateRequestRunnable, 0)
            }

            else -> {
                handler.removeCallbacks(periodicProgressUpdateRequestRunnable)
            }
        }
    }

    /*
     * Player.Listener: Called when one or more player states changed.
     */
    private var playerListener: Player.Listener = object : Player.Listener {

        override fun onMediaItemTransition(mediaItem: MediaItem?, reason: Int) {
            super.onMediaItemTransition(mediaItem, reason)
            // store new episode
            playerState.currentEpisodeMediaId = mediaItem?.mediaId ?: String()
            // update episode specific views4
//            updatePlayerViews()
            // clear up next, if necessary
            if (playerState.upNextEpisodeMediaId == mediaItem?.mediaId) {
//                updateUpNext(String())
            }
        }

        override fun onIsPlayingChanged(isPlaying: Boolean) {
            super.onIsPlayingChanged(isPlaying)
            // store state of playback
            playerState.isPlaying = isPlaying

            // turn on/off periodic playback position updates
            togglePeriodicProgressUpdateRequest()

            if (isPlaying) {
                // playback is active
            } else {
                // playback is not active

                playerState.sleepTimerRunning = false
                // Not playing because playback is paused, ended, suppressed, or the player
                // is buffering, stopped or failed. Check player.getPlayWhenReady,
                // player.getPlaybackState, player.getPlaybackSuppressionReason and
                // player.getPlaybackError for details.
                when (controller?.playbackState) {
                // player is able to immediately play from its current position
                    Player.STATE_READY -> {

                    }
                // buffering - data needs to be loaded
                    Player.STATE_BUFFERING -> {

                    }
                // player finished playing all media
                    Player.STATE_ENDED -> {
                      mPlayerState.value = "STOP"
                    }
                // initial state or player is stopped or playback failed
                    Player.STATE_IDLE -> {
                      mPlayerState.value = "STOP"
                    }
                }
            }
        }

        override fun onPlayWhenReadyChanged(playWhenReady: Boolean, reason: Int) {
            super.onPlayWhenReadyChanged(playWhenReady, reason)

            if (!playWhenReady) {
                if (controller?.mediaItemCount == 0) {
                    // stopSelf()
                }
                when (reason) {
                    Player.PLAY_WHEN_READY_CHANGE_REASON_END_OF_MEDIA_ITEM -> {
                        // playback reached end: stop / end playback
                    }

                    else -> {
                        // playback has been paused by user or OS: update media session and save state
                        // PLAY_WHEN_READY_CHANGE_REASON_USER_REQUEST or
                        // PLAY_WHEN_READY_CHANGE_REASON_AUDIO_FOCUS_LOSS or
                        // PLAY_WHEN_READY_CHANGE_REASON_AUDIO_BECOMING_NOISY or
                        // PLAY_WHEN_READY_CHANGE_REASON_REMOTE
                        // handlePlaybackChange(PlaybackStateCompat.STATE_PAUSED)
                    }
                }
            }

        }


    }

    private fun handleError(errorMsg: String) {
        try {
            Log.e(TAG, errorMsg)
            mCallbackContext!!.error(errorMsg)
        } catch (e: Exception) {
            Log.e(TAG, e.toString())
        }
    }

    private fun handleException(exception: Exception) {
        handleError(exception.toString())
    }

    companion object {
        protected const val TAG = "MediaPlayer"
    }
}
