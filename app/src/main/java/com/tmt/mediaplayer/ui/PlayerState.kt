package com.tmt.mediaplayer.ui

import com.google.gson.annotations.Expose


/*
 * PlayerState class
 */
data class PlayerState (@Expose var currentEpisodeMediaId: String = String(),
                        @Expose var isPlaying: Boolean = false,
                        @Expose var streaming: Boolean = false,
                        @Expose var playbackSpeed: Float = 1f,
                        @Expose var sleepTimerRunning: Boolean = false,
                        @Expose var upNextEpisodeMediaId: String = String())
