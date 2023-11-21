package com.tmt.geofence.view

import android.Manifest
import android.app.AlertDialog
import android.content.Context
import android.content.Intent
import android.content.IntentSender
import android.content.pm.PackageManager
import android.location.LocationManager
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.util.Log
import android.view.Window
import android.view.WindowManager
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.location.LocationManagerCompat
import androidx.lifecycle.MutableLiveData
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.common.api.ResolvableApiException
import com.google.android.gms.location.*
import com.google.android.gms.tasks.OnCanceledListener
import com.google.android.gms.tasks.OnFailureListener
import com.google.android.gms.tasks.OnSuccessListener
import com.tmt.geofence.database.DatabaseHelper
import java.lang.Exception


class InvokeGpsSetting : AppCompatActivity() {

  private val GPS_CODE = 14
  private val PERMISSION_CODE = 34
  private lateinit var myDb: DatabaseHelper

  @RequiresApi(Build.VERSION_CODES.M)
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    myDb = DatabaseHelper(applicationContext)

    this.title = null
    this.requestWindowFeature(Window.FEATURE_NO_TITLE)
    this.window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)

    if (checkSelfPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
      ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.ACCESS_COARSE_LOCATION), PERMISSION_CODE)
    } else {
      if(!isLocationEnabled(applicationContext)) {
        locationAlert()
      } else {
        finish()
      }
    }
  }

  fun locationAlert() {
    val builder = AlertDialog.Builder(this)
    builder.setMessage("Please turn on your device location.").setCancelable(false)
      .setPositiveButton("Ok") { dialog, id ->
        startActivityForResult(Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS), GPS_CODE)
      }
      .setNegativeButton("Cancel") { dialog, id ->
        dialog.cancel()
        finish()
      }
    val alert = builder.create()
    alert.show()
  }

  override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    if (requestCode == PERMISSION_CODE) {
      if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
        if(!isLocationEnabled(applicationContext)) {
          locationAlert()
        } else {
          if(!myDb.isEmpty) {
            val intent = Intent(applicationContext, InvokeGeofence::class.java)
            startActivity(intent)
            finish()
          } else {
            finish()
          }
        }
      }
    }
  }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    if (requestCode == GPS_CODE) {
      val manager = getSystemService(LOCATION_SERVICE) as LocationManager
      if (!manager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
        Toast.makeText(applicationContext, "Please turn on location for Geo fencing", Toast.LENGTH_SHORT).show()
        mResult.postValue("false")
        finish()
      } else {
        mResult.postValue("true")
        if(!myDb.isEmpty) {
          val intent = Intent(applicationContext, InvokeGeofence::class.java)
          startActivity(intent)
          finish()
        }
      }
    }
  }
  private fun isLocationEnabled(context: Context): Boolean {
    val locationManager = context.getSystemService(Context.LOCATION_SERVICE) as LocationManager
    return LocationManagerCompat.isLocationEnabled(locationManager)
  }


  protected fun enableLocationSettings() {
    val locationRequest = LocationRequest.create()
      .setInterval(1L)
      .setFastestInterval(2L)
      .setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY)
    val builder = LocationSettingsRequest.Builder()
      .addLocationRequest(locationRequest)
    LocationServices
      .getSettingsClient(this)
      .checkLocationSettings(builder.build())
      .addOnSuccessListener(this) { response: LocationSettingsResponse? -> }
      .addOnFailureListener(this) { ex ->
        if (ex is ResolvableApiException) {
          // Location settings are NOT satisfied,  but this can be fixed  by showing the user a dialog.
          try {
            // Show the dialog by calling startResolutionForResult(),  and check the result in onActivityResult().
            val resolvable = ex as ResolvableApiException
            resolvable.startResolutionForResult(
              this,
              REQUEST_CHECK_SETTINGS
            )
          } catch (sendEx: IntentSender.SendIntentException) {
            // Ignore the error.
          }
        }
      }
  }

  private lateinit var mLocationSettingsRequest: LocationSettingsRequest

  private lateinit var mSettingsClient: SettingsClient
  private val REQUEST_LOCATION = 1
  private val REQUEST_CHECK_SETTINGS = 214

  private fun locPermission() {
    val builder = LocationSettingsRequest.Builder()
    builder.addLocationRequest(LocationRequest().setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY))
    builder.setAlwaysShow(true)
    mLocationSettingsRequest = builder.build()
    mSettingsClient = LocationServices.getSettingsClient(this.applicationContext)
    mSettingsClient
      .checkLocationSettings(mLocationSettingsRequest)
      .addOnSuccessListener(OnSuccessListener { locationSettingsResponse: LocationSettingsResponse? ->
        try {
          getLocationData()
        } catch (e: Exception) {
          e.printStackTrace()
        }
      })
      .addOnFailureListener(OnFailureListener { e: Exception ->
        val statusCode = (e as ApiException).statusCode
        when (statusCode) {
          LocationSettingsStatusCodes.RESOLUTION_REQUIRED -> try {
            val rae = e as ResolvableApiException
            rae.startResolutionForResult(this, REQUEST_CHECK_SETTINGS)
//                  startIntentSenderForResult(rae.getResolution().getIntentSender(), REQUEST_CHECK_SETTINGS, null, 0, 0, 0, null);
          } catch (sie: Exception) {
            Log.e("GPS", "Unable to execute request.")
          }
          LocationSettingsStatusCodes.SETTINGS_CHANGE_UNAVAILABLE -> Log.e("GPS", "Location settings are inadequate, and cannot be fixed here. Fix in Settings.")
        }
      })
      .addOnCanceledListener(OnCanceledListener {
        Log.e("GPS", "checkLocationSettings -> onCanceled")
      })
  }

  fun getLocationData() {

    //Initialize Location manager
    val locationManager =
      this.getSystemService(Context.LOCATION_SERVICE) as LocationManager
    if (locationManager != null) {
      if (!locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
        locPermission()
      } else if (locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
        if (ActivityCompat.checkSelfPermission(
            this.applicationContext,
            Manifest.permission.ACCESS_FINE_LOCATION
          )
          != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
            this.applicationContext,
            Manifest.permission.ACCESS_COARSE_LOCATION
          ) != PackageManager.PERMISSION_GRANTED
        ) {
          locPermission()
          ActivityCompat.requestPermissions(
            this@InvokeGpsSetting,
            arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
            REQUEST_LOCATION
          )
        } else {

        }
      }
    } else {
      locPermission()
    }
  }

  companion object {
    val mResult = MutableLiveData<String>()
  }
}
