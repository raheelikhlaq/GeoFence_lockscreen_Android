package com.tmt.mediaplayer.helpers

import android.app.Activity
import android.content.Context
import android.content.res.Configuration
import android.view.View
import androidx.appcompat.app.AppCompatDelegate
import com.tmt.mediaplayer.Keys


/*
 * AppThemeHelper object
 */
object AppThemeHelper {

    /* Define log tag */
    private val TAG: String = LogHelper.makeLogTag(AppThemeHelper::class.java)


    /* Sets app theme */
    fun setTheme(nightModeState: String) {
        when (nightModeState) {
            Keys.STATE_THEME_DARK_MODE -> {
                if (AppCompatDelegate.getDefaultNightMode() != AppCompatDelegate.MODE_NIGHT_YES) {
                    // turn on dark mode
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
                    LogHelper.i(TAG, "Dark Mode activated.")
                }
            }
            Keys.STATE_THEME_LIGHT_MODE -> {
                if (AppCompatDelegate.getDefaultNightMode() != AppCompatDelegate.MODE_NIGHT_NO) {
                    // turn on light mode
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
                    LogHelper.i(TAG, "Theme: Light Mode activated.")
                }
            }
            Keys.STATE_THEME_FOLLOW_SYSTEM -> {
                if (AppCompatDelegate.getDefaultNightMode() != AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM) {
                    // turn on mode "follow system"
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
                    LogHelper.i(TAG, "Theme: Follow System Mode activated.")
                }
            }
            else -> {
                // turn on mode "follow system"
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
                LogHelper.i(TAG, "Theme: Follow System Mode activated.")
            }
        }
    }


    /* Return weather Night Mode is on, or not  */
    fun isDarkModeOn(context: Context): Boolean {
        val nightMode = context.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK
        return nightMode == Configuration.UI_MODE_NIGHT_YES
    }


    /* Displays the default status bar */
    private fun displayDefaultStatusBar(activity: Activity) {
        val decorView = activity.window.decorView
        decorView.systemUiVisibility = 0
    }


    /* Displays the light (inverted) status bar */
    private fun displayLightStatusBar(activity: Activity) {
        val decorView = activity.window.decorView
        decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
    }

}
