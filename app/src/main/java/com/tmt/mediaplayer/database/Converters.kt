package com.tmt.mediaplayer.database

import androidx.room.TypeConverter
import java.util.*


/*
 * Converters interface
 */
class Converters {

    @TypeConverter
    fun fromTimestamp(value: Long?): Date? {
        return value?.let { Date(it) }
    }

    @TypeConverter
    fun dateToTimestamp(date: Date?): Long? {
        return date?.time
    }

}
