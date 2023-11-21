package com.tmt.geofence

import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.fragment.app.DialogFragment
import com.google.gson.Gson
import com.helpdesk.radiobase.R
import com.tmt.geofence.database.DatabaseHelper
import com.tmt.geofence.helper.PrefUtils
import com.tmt.geofence.model.GeofenceData
import com.tmt.geofence.view.AlertActivity
import com.tmt.geofence.view.TutorialActivity
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONException

class Geofence : CordovaPlugin() {

    protected var mCallbackContext: CallbackContext? = null
    private var mContext: Context? = null
    var serviceIntent: Intent? = null
    private lateinit var myDb: DatabaseHelper

    @RequiresApi(Build.VERSION_CODES.M)
    @Throws(JSONException::class)
    override fun execute(
            action: String,
            data: JSONArray,
            callbackContext: CallbackContext
    ): Boolean {
        mContext = cordova.activity.applicationContext
        mCallbackContext = callbackContext
        myDb = DatabaseHelper(mContext)

        if(!PrefUtils(cordova.activity).checkObject("FirstStart")) {
            PrefUtils(cordova.activity).putBoolean("FirstStart", false)
        }
        if(!PrefUtils(cordova.activity).checkObject("DeniedCounter")) {
            PrefUtils(cordova.activity).putInt("DeniedCounter", 0)
        }
        if(!PrefUtils(cordova.activity).checkObject("LocationSetting")) {
            PrefUtils(cordova.activity).putBoolean("LocationSetting", false)
        }

        var result = true

        try {
            if (action == "startGeofence") {
                cordova.threadPool.execute {
                    val gson = Gson()

                    val listdata = ArrayList<GeofenceData>()
                    val fenceArr = data.getJSONObject(0).get("fence") as JSONArray

                    for (i in 0..fenceArr.length() - 1) {
                        val fenceObj = fenceArr.getJSONObject(i)
                        if (!myDb.checkGeofenceExists(fenceObj.getString("id"))) {
                            fenceObj.put("monitor", "false")
                            val responseModel = gson.fromJson(fenceObj.toString(), GeofenceData::class.java)
                            listdata.add(responseModel)
                        }
                    }

                    if (listdata.isNotEmpty()) {
                        myDb.insertGeoFence(listdata)
                    }

                    if(!PrefUtils(cordova.activity).getBoolean("FirstStart")!!) {
                        val mIntent = Intent(this.cordova.context, TutorialActivity::class.java)
                        this.cordova.activity.startActivity(mIntent)
                    } else {
                        if (cordova.activity.checkSelfPermission(android.Manifest.permission.ACCESS_BACKGROUND_LOCATION) == PackageManager.PERMISSION_DENIED) {
                            val mIntent = Intent(this.cordova.context, AlertActivity::class.java)
                            mIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                            mIntent.action = System.currentTimeMillis().toString()
                            mIntent.putExtra("titleDecode", "RadioBase")
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                                mIntent.putExtra("msgDecode", mContext!!.getString(R.string.geofences_custom_msg_s))
                            } else {
                                mIntent.putExtra("msgDecode", mContext!!.getString(R.string.geofences_custom_msg_r))
                            }
                            mIntent.putExtra("positiveBtn", "Allow")
                            mIntent.putExtra("negativeBtn", "Skip for now")
                            this.cordova.activity.startActivity(mIntent)
                        }
                    }


                    /*if (cordova.activity.checkSelfPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                        val intent = Intent(mContext, InvokeGpsSetting::class.java)
                        this.cordova.activity.startActivity(intent)
                    } else {
                        val intent = Intent(mContext, InvokeGeofence::class.java)
                        this.cordova.activity.startActivity(intent)
                    }*/

                    result = true
                }
            } else {
                handleError("Invalid action")
                result = false
            }
        } catch (e: Exception) {
            handleException(e)
            result = false
        }

        return result
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
        protected const val TAG = "GeoFence"
    }
}
