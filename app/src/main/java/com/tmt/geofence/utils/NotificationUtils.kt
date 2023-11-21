/*
 * Copyright (C) 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tmt.geofence.utils

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.os.Build
import androidx.core.app.NotificationCompat
import com.tmt.geofence.model.GeofenceData
import com.helpdesk.radiobase.MainActivity
import com.helpdesk.radiobase.R
import com.tmt.geofence.database.DatabaseHelper

private lateinit var myDb : DatabaseHelper
/*
 * We need to create a NotificationChannel associated with our CHANNEL_ID before sending a
 * notification.
 */
fun createChannel(context: Context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val notificationChannel = NotificationChannel(
            CHANNEL_ID,
            context.getString(R.string.channel_name),

            NotificationManager.IMPORTANCE_HIGH
        )
            .apply {
                setShowBadge(false)
            }

        notificationChannel.enableLights(true)
        notificationChannel.lightColor = Color.RED
        notificationChannel.enableVibration(true)
        notificationChannel.description = context.getString(R.string.notification_channel_description)

        val notificationManager = context.getSystemService(NotificationManager::class.java)
        notificationManager.createNotificationChannel(notificationChannel)

        myDb = DatabaseHelper(context)
    }
}

/*
 * A Kotlin extension function for AndroidX's NotificationCompat that sends our Geofence
 * entered notification.  It sends a custom notification based on the name string associated
 * with the LANDMARK_DATA from GeofencingConstatns in the GeofenceUtils file.
 */
fun NotificationManager.sendGeofenceNotification(context: Context, mGeoFenceData: GeofenceData, mEnter: Boolean) {

    val contentIntent = Intent(context, MainActivity::class.java)
//    contentIntent.putExtra(GeofencingConstants.ORCA, mGeoFenceData.id)
    val contentPendingIntent = PendingIntent.getActivity(context, NOTIFICATION_ID, contentIntent, PendingIntent.FLAG_IMMUTABLE)

    /*val mapImage = BitmapFactory.decodeResource(
        context.resources,
        R.drawable.map_small
    )
    val bigPicStyle = NotificationCompat.BigPictureStyle()
        .bigPicture(mapImage)
        .bigLargeIcon(null)*/

    // We use the name resource ID from the LANDMARK_DATA along with content_text to create
    // a custom message when a Geofence triggers.
    val builder = NotificationCompat.Builder(context, CHANNEL_ID)
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setContentIntent(contentPendingIntent)
        .setSmallIcon(R.mipmap.ic_launcher)
        .setAutoCancel(true)
//        .setStyle(bigPicStyle)
//        .setLargeIcon(mapImage)

    if(mEnter) {
        builder.setContentTitle(mGeoFenceData.enter!!.description)
        builder.setContentText(mGeoFenceData.enter.title)
    } else {
        builder.setContentTitle(mGeoFenceData.exit!!.description)
        builder.setContentText(mGeoFenceData.exit.title)
    }
    notify(NOTIFICATION_ID, builder.build())
//    myDb.updateMonitoring(mGeoFenceData.id, false)
}

private const val NOTIFICATION_ID = 33
private const val CHANNEL_ID = "GeofenceChannel"


