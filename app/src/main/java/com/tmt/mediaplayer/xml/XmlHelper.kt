package com.tmt.mediaplayer.xml

import org.xmlpull.v1.XmlPullParser
import org.xmlpull.v1.XmlPullParserException
import com.tmt.mediaplayer.helpers.LogHelper
import java.io.IOException


/*
 * XmlHelper object
 */
object XmlHelper {

    /* Define log tag */
    private val TAG: String = LogHelper.makeLogTag(XmlHelper::class.java.name)


    /* GENERAL: Skips tags that are not needed */
    @Throws(XmlPullParserException::class, IOException::class)
    fun skip(parser: XmlPullParser) {
        if (parser.eventType != XmlPullParser.START_TAG) {
            throw IllegalStateException()
        }
        var depth = 1
        while (depth != 0) {
            when (parser.next()) {
                XmlPullParser.END_TAG -> depth--
                XmlPullParser.START_TAG -> depth++
            }
        }
    }


    /* Reads text */
    @Throws(IOException::class, XmlPullParserException::class)
    fun readText(parser: XmlPullParser): String {
        var result = ""
        if (parser.next() == XmlPullParser.TEXT) {
            result = parser.text
            parser.nextTag()
        }
        return result
    }

}
