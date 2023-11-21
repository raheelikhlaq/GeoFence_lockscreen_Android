package com.tmt.geofence.view

import android.Manifest.permission
import android.app.AlertDialog
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.text.Html
import android.view.Window
import android.view.WindowManager
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.view.ContextThemeWrapper
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.helpdesk.radiobase.R
import com.tmt.geofence.helper.PrefUtils
import com.tmt.geofence.utils.PermissionUtils

class AlertActivity : AppCompatActivity() {

    private var msgId: String = ""
    private val REQUEST_LOCATION = 1

    private val LOCATION_PERMISSION_CODE = 1
    private val BACKGROUND_LOCATION_PERMISSION_CODE = 2

    private var msgTxt: String = ""
    private var TitleTxt: String = ""
    private var PosTxt: String = ""
    private var NegTxt: String = ""

    private lateinit var alertDialog: AlertDialog
    private lateinit var mAlertDialog: androidx.appcompat.app.AlertDialog

    override fun onResume() {
        super.onResume()
        if (!PrefUtils(this).getBoolean("LocationSetting")!! && (PrefUtils(this).getInt("DeniedCounter")!!) >= 1 && checkSelfPermission(
                android.Manifest.permission.ACCESS_BACKGROUND_LOCATION
            ) == PackageManager.PERMISSION_DENIED
        ) {
            try {
                alertDialog.let {
                    it.dismiss()
                }
            } catch (e: Exception) {

            }
            alertAgain()
//            openSettingsForApp(this)
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.title = null
        this.requestWindowFeature(Window.FEATURE_NO_TITLE)
        this.window.setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        )
//        setContentView(R.layout.activity_alert)
        onNewIntent(intent)
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        val extras = intent.extras
        if (extras != null) {
            if (extras.containsKey("type")) {
                msgTxt = extras.getString("msgDecode")!!
                TitleTxt = extras.getString("titleDecode")!!
                PosTxt = extras.getString("positiveBtn")!!
                NegTxt = extras.getString("negativeBtn")!!
                checkPermission()
            } else if (extras.containsKey("msgDecode")) {
                // extract the extra-data in the Notification
                val msg = extras.getString("msgDecode")
                msg?.let {
                    showDialog(
                        extras.getString("titleDecode")!!,
                        it,
                        extras.getString("positiveBtn")!!,
                        extras.getString("negativeBtn")!!
                    )
                    msgTxt = it
                    TitleTxt = extras.getString("titleDecode")!!
                    PosTxt = extras.getString("positiveBtn")!!
                    NegTxt = extras.getString("negativeBtn")!!
                }

                if (extras.containsKey("msgId")) {
                    msgId = extras.getString("msgId")!!
                }
            }
        }
    }

    fun showDialog(title: String, message: String, posStr: String, negStr: String) {
//        alertDialog = AlertDialog.Builder(ContextThemeWrapper(this, android.R.style.ThemeOverlay_Material_Dialog)).create()

        val nightModeFlags: Int = applicationContext.resources.configuration.uiMode and
                Configuration.UI_MODE_NIGHT_MASK
        when (nightModeFlags) {
            Configuration.UI_MODE_NIGHT_YES -> {
                alertDialog = AlertDialog.Builder(this).create()
                alertDialog.setButton(
                    AlertDialog.BUTTON_POSITIVE, posStr
                ) { dialog, which ->
                    dialog.dismiss()
                    checkPermission()
                }
                alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, negStr) { dialog, which ->
                    dialog.dismiss()
                    finish()
                }
                alertDialog.setTitle(title)
                alertDialog.setMessage(Html.fromHtml(message))
                alertDialog.setIcon(R.mipmap.ic_launcher)
//                alertDialog.getButton(AlertDialog.BUTTON_POSITIVE).setTextColor(resources.getColor(android.R.color.white))
//                alertDialog.getButton(AlertDialog.BUTTON_NEGATIVE).setTextColor(resources.getColor(android.R.color.white))
                alertDialog.show()
            }
            Configuration.UI_MODE_NIGHT_NO -> {
                val context: Context = ContextThemeWrapper(this@AlertActivity, R.style.AlertTheme)
                val dialogBuilder = MaterialAlertDialogBuilder(context)
                mAlertDialog = dialogBuilder.create()
                mAlertDialog.setTitle(title)
                mAlertDialog.setMessage(Html.fromHtml(message))
                mAlertDialog.setIcon(R.mipmap.ic_launcher)
                mAlertDialog.setButton(
                    AlertDialog.BUTTON_POSITIVE, posStr
                ) { dialog, which ->
                    dialog.dismiss()
                    checkPermission()
                }
                mAlertDialog.setButton(AlertDialog.BUTTON_NEGATIVE, negStr) { dialog, which ->
                    dialog.dismiss()
                    finish()
                }
                mAlertDialog.show()
            }
            Configuration.UI_MODE_NIGHT_UNDEFINED -> {
            }
        }
//        alertDialog.setOnDismissListener {
//            finish()
//        }
    }


    private fun checkPermission() {
        if (ContextCompat.checkSelfPermission(
                this@AlertActivity,
                permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
        ) {
            // Fine Location permission is granted
            // Check if current android version >= 11, if >= 11 check for Background Location permission
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                if (ContextCompat.checkSelfPermission(
                        this@AlertActivity,
                        permission.ACCESS_BACKGROUND_LOCATION
                    ) == PackageManager.PERMISSION_GRANTED
                ) {
                    // Background Location Permission is granted so do your work here
                    val intent = Intent(applicationContext, InvokeGeofence::class.java)
                    startActivity(intent)
                    finish()
                } else {
                    // Ask for Background Location Permission
                    askPermissionForBackgroundUsage()
                }
            }
        } else {
            // Fine Location Permission is not granted so ask for permission
            askForLocationPermission()
        }
    }

    private fun askForLocationPermission() {
        if (ActivityCompat.shouldShowRequestPermissionRationale(
                this@AlertActivity,
                permission.ACCESS_FINE_LOCATION
            )
        ) {
            ActivityCompat.requestPermissions(
                this@AlertActivity,
                arrayOf(permission.ACCESS_FINE_LOCATION),
                LOCATION_PERMISSION_CODE
            )
        } else {
            if (PrefUtils(this).getInt("DeniedCounter") == 1) {
                if (!PrefUtils(this).getBoolean("LocationSetting")!!) {
                    try {
                        alertDialog.let {
                            it.dismiss()
                        }
                    } catch (e: Exception) { }
                    openSettingsForApp(this)
                }
                return
            }

            ActivityCompat.requestPermissions(
                this,
                arrayOf(permission.ACCESS_FINE_LOCATION),
                LOCATION_PERMISSION_CODE
            )
        }
    }

    private fun askPermissionForBackgroundUsage() {
        if (ActivityCompat.shouldShowRequestPermissionRationale(
                this@AlertActivity,
                permission.ACCESS_BACKGROUND_LOCATION
            )
        ) {
            // ORCA Critical If Your click Only This time, it jumps directly to setting screen without feed
//            alertAgain()
            ActivityCompat.requestPermissions(
                this@AlertActivity,
                arrayOf(permission.ACCESS_BACKGROUND_LOCATION),
                BACKGROUND_LOCATION_PERMISSION_CODE
            )
        } else {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(permission.ACCESS_BACKGROUND_LOCATION),
                BACKGROUND_LOCATION_PERMISSION_CODE
            )
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String?>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == LOCATION_PERMISSION_CODE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // User granted location permission
                // Now check if android version >= 11, if >= 11 check for Background Location Permission
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                    if (ContextCompat.checkSelfPermission(
                            this@AlertActivity,
                            permission.ACCESS_BACKGROUND_LOCATION
                        ) == PackageManager.PERMISSION_GRANTED
                    ) {
                        val intent = Intent(applicationContext, InvokeGeofence::class.java)
                        startActivity(intent)
                        finish()
                        // Background Location Permission is granted so do your work here
                    } else {
                        // Ask for Background Location Permission
                        askPermissionForBackgroundUsage()
                    }
                } else {
                    val intent = Intent(applicationContext, InvokeGeofence::class.java)
                    startActivity(intent)
                    finish()
                }
            } else {
                // User denied location permission

//                Log.d("NeverAskAgainSelected", "" + PermissionUtils.neverAskAgainSelected(this, permission.ACCESS_FINE_LOCATION))

                if (!PermissionUtils.neverAskAgainSelected(
                        this,
                        permission.ACCESS_FINE_LOCATION
                    ) && (PrefUtils(this).getInt("DeniedCounter")!!) < 3
                ) {
                    PrefUtils(this).putInt(
                        "DeniedCounter",
                        (PrefUtils(this).getInt("DeniedCounter")!!) + 1
                    )
                    alertAgain()
                }

                if (PrefUtils(this).getInt("DeniedCounter") == 0) {
                    alertAgain()
                    return
                }

                if (PrefUtils(this).getInt("DeniedCounter") == 3) {
                    if (!PrefUtils(this).getBoolean("LocationSetting")!!) {
                        openSettingsForApp(this)
                    }
                    alertAgain()
                    return
                }
                if (PrefUtils(this).getInt("DeniedCounter") == 2) {
                    PrefUtils(this).putInt(
                        "DeniedCounter",
                        (PrefUtils(this).getInt("DeniedCounter")!!) + 1
                    )
                    alertAgain()
                    return
                }

                /*if(!ActivityCompat.shouldShowRequestPermissionRationale(this@AlertActivity, permission.ACCESS_FINE_LOCATION)) {
                    openSettingsForApp(this)
                }*/
            }
        } else if (requestCode == BACKGROUND_LOCATION_PERMISSION_CODE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // User granted for Background Location Permission.
                val intent = Intent(applicationContext, InvokeGeofence::class.java)
                startActivity(intent)
                finish()
            } else {
                // User declined for Background Location Permission.
                if (!PrefUtils(this).getBoolean("LocationSetting")!!) {
                    openSettingsForApp(this)
                }

            }
        }
    }


    private fun openSettingsForApp(context: Context) {
        val intent = Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
        val uri: Uri =
            Uri.fromParts("package", context.packageName, null)
        intent.data = uri
        context.startActivity(intent)
        // ORCA Critical
//        PrefUtils(this).putBoolean("LocationSetting", true)
    }

    private fun alertAgain() {

        showDialog(
            TitleTxt,
            msgTxt,
            PosTxt,
            NegTxt
        )
    }
}
