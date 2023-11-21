package com.tmt.mediaplayer.collection

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import com.tmt.mediaplayer.database.CollectionDatabase
import com.tmt.mediaplayer.database.objects.Episode
import com.tmt.mediaplayer.database.wrappers.PodcastWithAllEpisodesWrapper
import com.tmt.mediaplayer.database.wrappers.PodcastWithRecentEpisodesWrapper
import com.tmt.mediaplayer.helpers.CollectionHelper
import com.tmt.mediaplayer.helpers.LogHelper
import com.tmt.mediaplayer.helpers.PreferencesHelper


/*
 * CollectionViewModel.class
 */
class CollectionViewModel(application: Application) : AndroidViewModel(application) {

    /* Define log tag */
    private val TAG: String = LogHelper.makeLogTag(CollectionViewModel::class.java)


    /* Main class variables */
    val collectionLiveData: LiveData<List<PodcastWithRecentEpisodesWrapper>>
    val numberOfPodcastsLiveData: LiveData<Int>
    //val initializedTimestamp: Long = System.currentTimeMillis() // used for debugging in CollectionAdapter.observeCollectionViewModel()

    private val backgroundJob = Job()
    private var collectionDatabase: CollectionDatabase = CollectionDatabase.getInstance(application)

    /* Init constructor */
    init {
        // initialize live data - note: no need for async/background thread execution, because LiveData updating already asynchronous
        collectionLiveData = collectionDatabase.podcastDao().getAllPodcastsWithMostRecentEpisodeLiveData()
        numberOfPodcastsLiveData = collectionDatabase.podcastDao().getSize()
    }


    /* Overrides onCleared */
    override fun onCleared() {
        super.onCleared()
        backgroundJob.cancel()
    }


    /* Delete a podcast and all its episodes from database */
    fun removePodcast(remotePodcastFeedLocation: String) {
        CoroutineScope(IO).launch {
            val podcast: PodcastWithAllEpisodesWrapper? = collectionDatabase.podcastDao().getWithRemotePodcastFeedLocation(remotePodcastFeedLocation)
            if (podcast != null) {
                // reset media id in player state if necessary
                val currentMediaId: String = PreferencesHelper.loadCurrentMediaId()
                podcast.episodes.forEach { episode ->
                    if (episode.mediaId == currentMediaId) {
                        PreferencesHelper.resetPlayerState()
                    }
                }
                // remove all relevant entries for given podcast
                collectionDatabase.episodeDao().deleteAll(podcast.data.remotePodcastFeedLocation)
                collectionDatabase.episodeDescriptionDao().deleteAll(podcast.data.remotePodcastFeedLocation)
                collectionDatabase.podcastDao().delete(podcast.data)
                collectionDatabase.podcastDescriptionDao().delete(podcast.data.remotePodcastFeedLocation)
            }
        }
    }


    /* Marks an episode as played */
    fun markEpisodePlayed(mediaId: String) {
        CoroutineScope(IO).launch {
            // mark as played
            collectionDatabase.episodeDao().markPlayed(mediaId = mediaId)
            // reset media id in player state if necessary
            if (PreferencesHelper.loadCurrentMediaId() == mediaId) {
                PreferencesHelper.resetPlayerState()
            }
        }
    }


    /* Remove local audio reference within an episode */
    fun deleteEpisodeAudio(mediaId: String) {
        CoroutineScope(IO).launch {
            val episode: Episode? = collectionDatabase.episodeDao().findByMediaId(mediaId)
            if (episode != null) {
                // update episode (remove audio reference and mark as not downloaded)
                collectionDatabase.episodeDao().update(CollectionHelper.deleteEpisodeAudioFile(episode = episode, manuallyDeleted = true))
                // update media id in player state if necessary
                if (PreferencesHelper.loadCurrentMediaId() == mediaId) {
                    PreferencesHelper.resetPlayerState()
                }
            }
        }
    }

}
