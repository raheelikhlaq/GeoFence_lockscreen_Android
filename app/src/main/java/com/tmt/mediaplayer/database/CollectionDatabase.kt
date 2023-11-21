package com.tmt.mediaplayer.database

import android.content.Context
import androidx.room.*
import androidx.room.migration.AutoMigrationSpec
import androidx.sqlite.db.SupportSQLiteDatabase
import com.tmt.mediaplayer.database.daos.EpisodeDao
import com.tmt.mediaplayer.database.daos.EpisodeDescriptionDao
import com.tmt.mediaplayer.database.daos.PodcastDao
import com.tmt.mediaplayer.database.daos.PodcastDescriptionDao
import com.tmt.mediaplayer.database.objects.Episode
import com.tmt.mediaplayer.database.objects.EpisodeDescription
import com.tmt.mediaplayer.database.objects.Podcast
import com.tmt.mediaplayer.database.objects.PodcastDescription
import com.tmt.mediaplayer.database.wrappers.EpisodeMostRecentView


/*
 * CollectionDatabase class
 */
@Database(version = 2, entities = [Podcast::class, PodcastDescription::class, Episode::class, EpisodeDescription::class], views = [EpisodeMostRecentView::class], autoMigrations = [AutoMigration (from = 1, to = 2, spec = CollectionDatabase.CustomMigrationSpec::class)], exportSchema = true)
@TypeConverters(Converters::class)
abstract class CollectionDatabase : RoomDatabase() {

    abstract fun podcastDao(): PodcastDao

    abstract fun podcastDescriptionDao(): PodcastDescriptionDao

    abstract fun episodeDao(): EpisodeDao

    abstract fun episodeDescriptionDao(): EpisodeDescriptionDao

    /* Specifies the database changes from version 1 to version 2 */
    @RenameColumn(fromColumnName = "playback_state", toColumnName = "is_playing", tableName = "episodes")
    class CustomMigrationSpec: AutoMigrationSpec {
        override fun onPostMigrate(db: SupportSQLiteDatabase) {
            super.onPostMigrate(db)
            db.execSQL("UPDATE episodes SET is_playing = 0")
        }
    }

    /* Object used to create an offer an instance of the collection database */
    companion object {

        var INSTANCE: CollectionDatabase? = null

        fun getInstance(context: Context): CollectionDatabase {
            synchronized(this) {
                var instance: CollectionDatabase? = INSTANCE

                if (instance == null) {
                    instance = Room.databaseBuilder(context.applicationContext, CollectionDatabase::class.java, "collection_database").apply {
                        fallbackToDestructiveMigration()
                    }.build()
                    INSTANCE = instance
                }
                return instance
            }
        }
    }

}
