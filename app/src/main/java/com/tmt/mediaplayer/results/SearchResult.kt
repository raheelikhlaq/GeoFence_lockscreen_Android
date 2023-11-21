package com.tmt.mediaplayer.results

import androidx.annotation.Keep
import com.google.gson.annotations.Expose


/*
 * SearchResult class
 */
// NOTE: This class needs to be excepted from Obfuscation to work with GSON
// therefore it is added to proguard-rules.pro with "-keep public class ..."
@Keep
data class SearchResult (@Expose val url: String,
                         @Expose val title: String,
                         @Expose val description: String)
