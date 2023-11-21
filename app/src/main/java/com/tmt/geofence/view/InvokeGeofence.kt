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

package com.tmt.geofence.view

import android.Manifest
import android.annotation.TargetApi
import android.app.PendingIntent
import android.content.Intent
import android.content.IntentSender
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import com.google.android.gms.common.api.ResolvableApiException
import com.google.android.gms.location.*
import com.helpdesk.radiobase.R
import com.tmt.geofence.database.DatabaseHelper
import com.tmt.geofence.model.GeofenceData
import com.tmt.geofence.receiver.GeofenceBroadcastReceiver
import com.tmt.geofence.utils.createChannel

class InvokeGeofence : AppCompatActivity() {

    private lateinit var geofencingClient: GeofencingClient
    private lateinit var myDb: DatabaseHelper

    private val runningQOrLater =
        android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q

    // A PendingIntent for the Broadcast Receiver that handles geofence transitions.
    private val geofencePendingIntent: PendingIntent by lazy {
        val intent = Intent(this, GeofenceBroadcastReceiver::class.java)
        intent.action = ACTION_GEOFENCE_EVENT
        // Use FLAG_UPDATE_CURRENT so that you get the same pending intent back when calling
        // addGeofences() and removeGeofences().
        /*val updatedPendingIntent = PendingIntent.getActivity(
            applicationContext,
            NOTIFICATION_REQUEST_CODE,
            updatedIntent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT // setting the mutability flag
        )*/
        PendingIntent.getBroadcast(this, 0, intent, PendingIntent.FLAG_MUTABLE)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        myDb = DatabaseHelper(applicationContext)

        geofencingClient = LocationServices.getGeofencingClient(this)

        // Create channel for notifications
        createChannel(this )
    }

    override fun onStart() {
        super.onStart()
        checkPermissionsAndStartGeofencing()
    }

    /*
 *  When we get the result from asking the user to turn on device location, we call
 *  checkDeviceLocationSettingsAndStartGeofence again to make sure it's actually on, but
 *  we don't resolve the check to keep the user from seeing an endless loop.
 */
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == REQUEST_TURN_DEVICE_LOCATION_ON) {
            // We don't rely on the result code, but just check the location setting again
            checkDeviceLocationSettingsAndStartGeofence(false)
        }
    }

    /*
     *  When the user clicks on the notification, this method will be called, letting us know that
     *  the geofence has been triggered, and it's time to move to the next one in the treasure
     *  hunt.
     */
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        val extras = intent?.extras
        if(extras != null){
          checkPermissionsAndStartGeofencing()
        }
    }

    /*
     * In all cases, we need to have the location permission.  On Android 10+ (Q) we need to have
     * the background permission as well.
     */
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ) {
      super.onRequestPermissionsResult(requestCode, permissions, grantResults)
      Log.d(TAG, "onRequestPermissionResult")

        if (
            grantResults.isEmpty() ||
            grantResults[LOCATION_PERMISSION_INDEX] == PackageManager.PERMISSION_DENIED ||
            (requestCode == REQUEST_FOREGROUND_AND_BACKGROUND_PERMISSION_RESULT_CODE &&
                    grantResults[BACKGROUND_LOCATION_PERMISSION_INDEX] ==
                    PackageManager.PERMISSION_DENIED))
        {

            val mIntent = Intent(applicationContext, AlertActivity::class.java)
            mIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            mIntent.action = System.currentTimeMillis().toString()
            mIntent.putExtra("titleDecode", "RadioBase")
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                mIntent.putExtra("msgDecode", "You didn't provide the required “Allow all the time” and “Precise location permission” due to which some app features will not work correctly. We highly recommend providing the appropriate permissions for the seamless functionality of this app.")
            } else {
                mIntent.putExtra("msgDecode", "You didn't provide the required “Allow all the time”, due to which some app features will not work correctly. We highly recommend providing the appropriate permissions for the seamless functionality of this app.")
            }
            mIntent.putExtra("positiveBtn", "Change permission")
            mIntent.putExtra("negativeBtn", "Skip for now")
            this.startActivity(mIntent)
          /*Toast.makeText(applicationContext, "Please check 'Allow all the time' for Location", Toast.LENGTH_LONG).show()
          startActivity(Intent().apply {
            action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
            data = Uri.fromParts("package", BuildConfig.APPLICATION_ID, null)
            flags = Intent.FLAG_ACTIVITY_NEW_TASK
          })*/
          // Permission denied.
          /*val gpsOptionsIntent = Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS)
          startActivity(gpsOptionsIntent);*/

/*
            Snackbar.make(
                this@HuntMainActivity,
                R.string.permission_denied_explanation, Snackbar.LENGTH_INDEFINITE
            )
                .setAction(R.string.settings) {
                    // Displays App settings screen.
                    startActivity(Intent().apply {
                        action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
                        data = Uri.fromParts("package", BuildConfig.APPLICATION_ID, null)
                        flags = Intent.FLAG_ACTIVITY_NEW_TASK
                    })
                }.show()
*/
        } else {
            checkDeviceLocationSettingsAndStartGeofence()
        }
    }

    /**
     * This will also destroy any saved state in the associated ViewModel, so we remove the
     * geofences here.
     */
    override fun onDestroy() {
        super.onDestroy()
//        removeGeofences()
    }

    /**
     * Starts the permission check and Geofence process only if the Geofence associated with the
     * current hint isn't yet active.
     */
    private fun checkPermissionsAndStartGeofencing() {
        if (foregroundAndBackgroundLocationPermissionApproved()) {
            checkDeviceLocationSettingsAndStartGeofence()
        } else {
            requestForegroundAndBackgroundLocationPermissions()
        }
    }

    /*
     *  Uses the Location Client to check the current state of location settings, and gives the user
     *  the opportunity to turn on location services within our app.
     */
    private fun checkDeviceLocationSettingsAndStartGeofence(resolve: Boolean = true) {
        val locationRequest = LocationRequest.create().apply {
            priority = LocationRequest.PRIORITY_LOW_POWER
        }
        val builder = LocationSettingsRequest.Builder().addLocationRequest(locationRequest)

        val settingsClient = LocationServices.getSettingsClient(this)
        val locationSettingsResponseTask =
            settingsClient.checkLocationSettings(builder.build())

        locationSettingsResponseTask.addOnFailureListener { exception ->
            if (exception is ResolvableApiException && resolve) {
                // Location settings are not satisfied, but this can be fixed
                // by showing the user a dialog.
                try {
                    // Show the dialog by calling startResolutionForResult(),
                    // and check the result in onActivityResult().
                    exception.startResolutionForResult(
                        this@InvokeGeofence,
                        REQUEST_TURN_DEVICE_LOCATION_ON
                    )
                } catch (sendEx: IntentSender.SendIntentException) {
                    Log.d(TAG, "error_getting_location: " + sendEx.message)
                }
            } else {
                Log.d("GeoFence", "location_required_error")
//                Toast.makeText(applicationContext, "location_required_error", Toast.LENGTH_SHORT).show()
            }
        }
        locationSettingsResponseTask.addOnCompleteListener {
            if (it.isSuccessful) {
                for (geofence in myDb.retriveAllGeofences()) {
                    if (!myDb.isMonitoring(geofence.id)) {
                        addGeofenceForClue(geofence)
                    }
                }

                finish()
            }
        }
    }

    /*
     *  Determines whether the app has the appropriate permissions across Android 10+ and all other
     *  Android versions.
     */
    @TargetApi(29)
    private fun foregroundAndBackgroundLocationPermissionApproved(): Boolean {
        val foregroundLocationApproved = (
                PackageManager.PERMISSION_GRANTED ==
                ActivityCompat.checkSelfPermission(this,
                    Manifest.permission.ACCESS_FINE_LOCATION))
        val backgroundPermissionApproved =
            if (runningQOrLater) {
                PackageManager.PERMISSION_GRANTED ==
                ActivityCompat.checkSelfPermission(
                    this, Manifest.permission.ACCESS_BACKGROUND_LOCATION
                )
            } else {
                true
            }
        return foregroundLocationApproved && backgroundPermissionApproved
    }

    /*
     *  Requests ACCESS_FINE_LOCATION and (on Android 10+ (Q) ACCESS_BACKGROUND_LOCATION.
     */
    @TargetApi(29 )
    private fun requestForegroundAndBackgroundLocationPermissions() {
        if (foregroundAndBackgroundLocationPermissionApproved())
            return

        // Else request the permission
        // this provides the result[LOCATION_PERMISSION_INDEX]
        var permissionsArray = arrayOf(Manifest.permission.ACCESS_FINE_LOCATION)

        val resultCode = when {
            runningQOrLater -> {
                // this provides the result[BACKGROUND_LOCATION_PERMISSION_INDEX]
                permissionsArray += Manifest.permission.ACCESS_BACKGROUND_LOCATION
                REQUEST_FOREGROUND_AND_BACKGROUND_PERMISSION_RESULT_CODE
            }
            else -> REQUEST_FOREGROUND_ONLY_PERMISSIONS_REQUEST_CODE
        }

        Log.d(TAG, "Request foreground only location permission")
        ActivityCompat.requestPermissions(
            this@InvokeGeofence,
            permissionsArray,
            resultCode
        )
    }

    /*
     * Adds a Geofence for the current clue if needed, and removes any existing Geofence. This
     * method should be called after the user has granted the location permission.  If there are
     * no more geofences, we remove the geofence and let the viewmodel know that the ending hint
     * is now "active."
     */
    private fun addGeofenceForClue(mFenceData: GeofenceData) {
        /*if (viewModel.geofenceIsActive()) return
        val currentGeofenceIndex = viewModel.nextGeofenceIndex()
        if(currentGeofenceIndex >= GeofencingConstants.NUM_LANDMARKS) {
            removeGeofences()
            viewModel.geofenceActivated()
            return
        }
        val currentGeofenceData = GeofencingConstants.LANDMARK_DATA[currentGeofenceIndex]*/

        // Build the Geofence Object
        val geofence = Geofence.Builder()
            // Set the request ID, string to identify the geofence.
            .setRequestId(mFenceData.id!!)
            // Set the circular region of this geofence.
            .setCircularRegion(mFenceData.lat!!.toDouble(),
                mFenceData.lon!!.toDouble(),
                mFenceData.radius!!.toFloat()
            )
            .setExpirationDuration(Geofence.NEVER_EXPIRE)
            .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER or Geofence.GEOFENCE_TRANSITION_EXIT)
            .build()

        // Build the geofence request
        val geofencingRequest = GeofencingRequest.Builder()
            // The INITIAL_TRIGGER_ENTER flag indicates that geofencing service should trigger a
            // GEOFENCE_TRANSITION_ENTER notification when the geofence is added and if the device
            // is already inside that geofence. ORCA IMPORTANT
            //.setInitialTrigger(GeofencingRequest.INITIAL_TRIGGER_ENTER)

            // Add the geofences to be monitored by geofencing service.
            .addGeofence(geofence)
            .build()

        // First, remove any existing geofences that use our pending intent
        geofencingClient.removeGeofences(geofencePendingIntent).run {
            // Regardless of success/failure of the removal, add the new geofence
            addOnCompleteListener {
                // Add the new geofence request with the new geofence
                geofencingClient.addGeofences(geofencingRequest, geofencePendingIntent).run {
                    addOnSuccessListener {
                        // Geofences added.
//                        Toast.makeText(this@InvokeGeofence, R.string.geofences_added, Toast.LENGTH_SHORT).show()
//                        Log.e("Add Geofence", geofence.requestId)
                        myDb.updateMonitoring(geofence.requestId, true)
                    }
                    addOnFailureListener {
                        // Failed to add geofences.
//                        Toast.makeText(this@InvokeGeofence, R.string.geofences_not_added, Toast.LENGTH_SHORT).show()
                        /*if ((it.message != null)) {
                            Log.w(TAG, it.message!!)
                        }*/
                    }
                }
            }
        }
    }

    /**
     * Removes geofences. This method should be called after the user has granted the location
     * permission.
     */
    private fun removeGeofences() {
        if (!foregroundAndBackgroundLocationPermissionApproved()) {
            return
        }
        geofencingClient.removeGeofences(geofencePendingIntent)?.run {
            addOnSuccessListener {
                // Geofences removed
                Log.d(TAG, getString(R.string.geofences_removed))
//                Toast.makeText(applicationContext, R.string.geofences_removed, Toast.LENGTH_SHORT).show()
            }
            addOnFailureListener {
                // Failed to remove geofences
                Log.d(TAG, getString(R.string.geofences_not_removed))
            }
        }
    }
    companion object {
        internal const val ACTION_GEOFENCE_EVENT =
            "MainActivity.action.ACTION_GEOFENCE_EVENT"
    }
}

private const val REQUEST_FOREGROUND_AND_BACKGROUND_PERMISSION_RESULT_CODE = 33
private const val REQUEST_FOREGROUND_ONLY_PERMISSIONS_REQUEST_CODE = 34
private const val REQUEST_TURN_DEVICE_LOCATION_ON = 29
private const val TAG = "HuntMainActivity"
private const val LOCATION_PERMISSION_INDEX = 0
private const val BACKGROUND_LOCATION_PERMISSION_INDEX = 1
