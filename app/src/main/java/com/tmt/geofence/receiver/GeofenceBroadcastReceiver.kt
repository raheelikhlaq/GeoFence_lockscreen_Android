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

package com.tmt.geofence.receiver

import android.app.NotificationManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import androidx.core.content.ContextCompat
import com.google.android.gms.location.Geofence
import com.google.android.gms.location.GeofencingEvent
import com.tmt.geofence.database.DatabaseHelper
import com.tmt.geofence.utils.sendGeofenceNotification
import com.tmt.geofence.view.InvokeGeofence.Companion.ACTION_GEOFENCE_EVENT

/*
 * Triggered by the Geofence.  Since we only have one active Geofence at once, we pull the request
 * ID from the first Geofence, and locate it within the registered landmark data in our
 * GeofencingConstants within GeofenceUtils, which is a linear string search. If we had  very large
 * numbers of Geofence possibilities, it might make sense to use a different data structure.  We
 * then pass the Geofence index into the notification, which allows us to have a custom "found"
 * message associated with each Geofence.
 */
class GeofenceBroadcastReceiver : BroadcastReceiver() {

  private lateinit var myDb: DatabaseHelper

  override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == ACTION_GEOFENCE_EVENT) {
            val geofencingEvent = GeofencingEvent.fromIntent(intent)
            if (geofencingEvent != null) {
                if(geofencingEvent.geofenceTransition == Geofence.GEOFENCE_TRANSITION_ENTER || geofencingEvent.geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {
                    val fenceId = when {
                        geofencingEvent.triggeringGeofences!!.isNotEmpty() ->
                            geofencingEvent.triggeringGeofences!![0].requestId
                        else -> {
                            Log.e(TAG, "No Geofence Trigger Found! Abort mission!")
                            return
                        }
                    }
                    myDb = DatabaseHelper(context)
                    val mData = myDb.getGeofence(fenceId)
                    val notificationManager = ContextCompat.getSystemService(context, NotificationManager::class.java) as NotificationManager

                    if (geofencingEvent.geofenceTransition == Geofence.GEOFENCE_TRANSITION_ENTER) {
                        notificationManager.sendGeofenceNotification(context, mData, true)
                    } else if (geofencingEvent.geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {
                        notificationManager.sendGeofenceNotification(context, mData, false)
                    }
                }
            }
        }
    }
}

private const val TAG = "GeofenceReceiver"
