package com.tmt.mediaplayer.xml

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.util.Xml
import android.widget.Toast
import androidx.core.content.FileProvider
import org.xmlpull.v1.XmlPullParser
import org.xmlpull.v1.XmlPullParserException
import com.tmt.mediaplayer.Keys
import com.helpdesk.radiobase.R
import com.tmt.mediaplayer.database.objects.Podcast
import com.tmt.mediaplayer.helpers.FileHelper
import com.tmt.mediaplayer.helpers.LogHelper
import java.io.IOException
import java.io.InputStream
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine


/*
 * OpmlHelper object
 */
object OpmlHelper {

    /* Define log tag */
    private val TAG: String = LogHelper.makeLogTag(OpmlHelper::class.java)


    /* Main class variables */
    private lateinit var feedUrlList: ArrayList<String>


    /* Share podcast collection as OPML file via share sheet */
    fun shareOpml(activity: Activity) {
        // get OPML content Uri
        val opmlShareUri = getOpmlUri(activity)

        // create share intent
        val shareIntent: Intent = Intent(Intent.ACTION_SEND)
        shareIntent.type = Keys.MIME_TYPE_XML
        shareIntent.data = opmlShareUri
        shareIntent.flags = Intent.FLAG_GRANT_READ_URI_PERMISSION
        shareIntent.putExtra(Intent.EXTRA_STREAM, opmlShareUri)

        // check if file helper is available
        val packageManager: PackageManager? = activity.packageManager
        if (packageManager != null && shareIntent.resolveActivity(packageManager) != null) {
            // show share sheet
            activity.startActivity(Intent.createChooser(shareIntent, null))
        } else {
            Toast.makeText(activity, R.string.toast_message_install_file_helper, Toast.LENGTH_LONG).show()
        }
    }

    /* Get content Uri for OPML file */
    fun getOpmlUri(activity: Activity): Uri {
        val opmlFile = FileHelper.getOpmlFile(activity)
        return FileProvider.getUriForFile(activity, "${activity.applicationContext.packageName}.provider", opmlFile)
    }


    /* Suspend function: Read OPML feed from given input stream - async using coroutine */
    suspend fun readSuspended(context: Context, localFileUri: Uri): Array<String> {
        return suspendCoroutine {cont ->
            LogHelper.v(TAG, "Reading OPML feed - Thread: ${Thread.currentThread().name}")
            // initialize / reset feed url list
            feedUrlList = arrayListOf()
            // try parsing
            val stream: InputStream? = FileHelper.getTextFileStream(context, localFileUri)
            try {
                // create XmlPullParser for InputStream
                val parser: XmlPullParser = Xml.newPullParser()
                parser.setFeature(XmlPullParser.FEATURE_PROCESS_NAMESPACES, false)
                parser.setInput(stream, null)
                parser.nextTag()
                // start reading opml feed
                feedUrlList = parseFeed(parser)
            } catch (exception : Exception) {
                exception.printStackTrace()
            } finally {
                stream?.close()
            }

            // return parsing result
            cont.resume(feedUrlList.toTypedArray())
        }
    }


    /* Parses whole OPML feed */
    @Throws(XmlPullParserException::class, IOException::class)
    private fun parseFeed(parser: XmlPullParser): ArrayList<String> {
        parser.require(XmlPullParser.START_TAG, Keys.XML_NAME_SPACE, Keys.OPML_OPML)
        // loop through all tags within the document
        while (parser.next() != XmlPullParser.END_TAG) {
            // skip this round early if no start tag
            if (parser.eventType != XmlPullParser.START_TAG) {
                continue
            }
            // read only relevant tags
            when (parser.name) {
                // found a body tag
                Keys.OPML_BODY -> readBody(parser, Keys.XML_NAME_SPACE)
                // skip any other un-needed tag within the document
                else -> XmlHelper.skip(parser)
            }
        }
        return feedUrlList
    }


    /* Reads body element - within feed */
    @Throws(XmlPullParserException::class, IOException::class)
    private fun readBody(parser: XmlPullParser, nameSpace: String?) {
        parser.require(XmlPullParser.START_TAG, nameSpace, Keys.OPML_BODY)
        // loop through tags within the body tag
        while (parser.next() != XmlPullParser.END_TAG) {
            // skip this round early if no start tag
            if (parser.eventType != XmlPullParser.START_TAG) {
                continue
            }
            // read only relevant tags
            when (parser.name) {
                // found an outline
                Keys.OPML_OUTLINE -> {
                    // check outline type
                    when (parser.getAttributeValue(null, Keys.OPML_OUTLINE_TEXT)) {
                        // CASE: parent outline tag (with attribute text="feeds")
                        Keys.OPML_OUTLINE_TEXT_FEEDS -> {
                            // just skip to next tag
                            parser.next()
                        }
                        // CASE: child outline tag - usually contains a podcast url (tag -> xmlUrl)
                        else -> {
                            // grab the podcast URL from outline and add it to feed list
                            val feedUrl: String = readOutline(parser, nameSpace)
                            if (feedUrl.isNotEmpty()) { feedUrlList.add(feedUrl) }
                        }
                    }
                }
                // skip any other un-needed tag within body
                else -> {
                    XmlHelper.skip(parser)
                }
            }
        }
    }


    /* Reads podcast URL from child outline element */
    @Throws(IOException::class, XmlPullParserException::class)
    private fun readOutline(parser: XmlPullParser, nameSpace: String?): String {
        parser.require(XmlPullParser.START_TAG, nameSpace, Keys.OPML_OUTLINE)
        var link: String = String()
        val type = parser.getAttributeValue(null, Keys.OPML_OUTLINE_TYPE)
        when (type) {
            // CASE: outline tag has rss attribute (type="rss")
            Keys.OPML_OUTLINE_TYPE_RSS -> {
                // try to get the value of xmlUrl (=podcast url)
                link = parser.getAttributeValue(null, Keys.OPML_OUTLINE_XML_URL) ?: String()
                parser.nextTag()
            }
            else -> {
                parser.nextTag()
            }
        }
        parser.require(XmlPullParser.END_TAG, nameSpace, Keys.OPML_OUTLINE)
        return link
    }


    /* Create OPML string from podcast collection */
    fun createOpmlString(podcastList: List<Podcast>): String {
        val opmlString = StringBuilder()
        // add opening tag
        opmlString.append("<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>\n")
        opmlString.append("<opml version=\"1.0\">\n")

        // add <head> section
        opmlString.append("\t<head>\n")
        opmlString.append("\t\t<title>MediaPlayer</title>\n")
        opmlString.append("\t</head>\n")

        // add opening <body> and <outline> tags
        opmlString.append("\t<body>\n")
        opmlString.append("\t\t<outline text=\"feeds\">\n")

        // add <outline> tags containing name and URL for each podcast
        podcastList.forEach { podcast ->
            opmlString.append("\t\t\t<outline type=\"rss\" text=\"")
            opmlString.append(xmlEscapeText(podcast.name))
            opmlString.append("\" xmlUrl=\"")
            opmlString.append(podcast.remotePodcastFeedLocation)
            opmlString.append("\" />\n")
        }

        // add <outline> and <body> closing tags
        opmlString.append("\t\t</outline>\n")
        opmlString.append("\t</body>\n")

        // add <opml> closing tag
        opmlString.append("</opml>\n")

        return opmlString.toString()
    }


    /* Escapes XML special characters in text. Credit: https://stackoverflow.com/a/10035382 */
    private fun xmlEscapeText(text: String): String {
        val sb = StringBuilder()
        for (element in text) {
            val character: Char = element
            when (character) {
                '<' -> sb.append("&lt;")
                '>' -> sb.append("&gt;")
                '\"' -> sb.append("&quot;")
                '&' -> sb.append("&amp;")
                '\'' -> sb.append("&apos;")
                else -> {
                    if (character.code > 0x7e) { sb.append("&#" + character.code + ";") }
                    else sb.append(character)
                }
            }
        }
        return sb.toString()
    }

}
