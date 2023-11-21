package com.tmt.geofence.view

import android.content.Intent
import android.content.res.Configuration
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.text.Html
import android.view.View
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatImageView
import androidx.appcompat.widget.AppCompatTextView
import androidx.constraintlayout.widget.ConstraintLayout
import com.bumptech.glide.Glide
import com.helpdesk.radiobase.R
import com.tmt.geofence.helper.PrefUtils


class TutorialActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_tutorial)

        PrefUtils(this).putBoolean("FirstStart", true)

        val tutBack = findViewById<View>(R.id.tutBack) as ConstraintLayout

        val mFirst = findViewById<View>(R.id.first) as AppCompatImageView
        val mSecond = findViewById<View>(R.id.second) as AppCompatImageView

        val tutTitle = findViewById<View>(R.id.tutTitle) as AppCompatTextView
        val tutDesc = findViewById<View>(R.id.tutDesc) as AppCompatTextView

        val btnAllow = findViewById<View>(R.id.btnAllow) as AppCompatButton
        val btnSkip = findViewById<View>(R.id.btnSkip) as AppCompatButton

        val nightModeFlags: Int = applicationContext.resources.configuration.uiMode and
                Configuration.UI_MODE_NIGHT_MASK
        when (nightModeFlags) {
            Configuration.UI_MODE_NIGHT_YES -> {
                tutBack.setBackgroundColor(resources.getColor(android.R.color.background_dark))
                mFirst.setBackgroundDrawable(resources.getDrawable(R.drawable.tut_border_white))
                mSecond.setBackgroundDrawable(resources.getDrawable(R.drawable.tut_border_white))
                tutTitle.setTextColor(resources.getColor(android.R.color.white))
                tutDesc.setTextColor(resources.getColor(android.R.color.white))
//                btnSkip.setTextColor(Color.parseColor("#455C99"))
//                btnAllow.setTextColor(Color.parseColor("#455C99"))
                btnSkip.setTextColor(resources.getColor(android.R.color.white))
                btnAllow.setTextColor(resources.getColor(android.R.color.white))
            }
            Configuration.UI_MODE_NIGHT_NO -> {
                tutBack.setBackgroundColor(resources.getColor(android.R.color.white))
                mFirst.setBackgroundDrawable(resources.getDrawable(R.drawable.tut_border_black))
                mSecond.setBackgroundDrawable(resources.getDrawable(R.drawable.tut_border_black))
                tutTitle.setTextColor(resources.getColor(android.R.color.black))
                tutDesc.setTextColor(resources.getColor(android.R.color.black))
//                btnSkip.setTextColor(Color.parseColor("#D9E2FF"))
//                btnAllow.setTextColor(Color.parseColor("#D9E2FF"))
                btnSkip.setTextColor(resources.getColor(android.R.color.black))
                btnAllow.setTextColor(resources.getColor(android.R.color.black))
            }
            Configuration.UI_MODE_NIGHT_UNDEFINED -> {

            }
        }

        /*if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            tutDesc.text = Html.fromHtml(this.getString(R.string.tutorial_custom_msg_s), Html.FROM_HTML_MODE_COMPACT)
        } else {
            tutDesc.text = Html.fromHtml(this.getString(R.string.tutorial_custom_msg_r))
        }*/

        tutDesc.text = resources.getString(R.string.tutorial_custom_msg_s)

        val first = findViewById<View>(R.id.first) as ImageView
        Glide.with(this).asGif().load(R.raw.first).override(600, 600).into(first)

        val second = findViewById<View>(R.id.second) as ImageView
        Glide.with(this).asGif().load(R.raw.second).override(600, 600).into(second)

        btnSkip.setOnClickListener {
            finish()
        }

        btnAllow.setOnClickListener {
            val mIntent = Intent(this, AlertActivity::class.java)
            mIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            mIntent.action = System.currentTimeMillis().toString()
            mIntent.putExtra("titleDecode", "RadioBase")
            mIntent.putExtra("type", "Tutorial")
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                mIntent.putExtra("msgDecode", this.getString(R.string.geofences_custom_msg_s))
            } else {
                mIntent.putExtra("msgDecode", this.getString(R.string.geofences_custom_msg_r))
            }
            mIntent.putExtra("positiveBtn", "Allow")
            mIntent.putExtra("negativeBtn", "Skip for now")
            startActivity(mIntent)
            finish()
        }
    }
}