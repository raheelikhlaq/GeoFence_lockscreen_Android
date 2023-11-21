package com.tmt.geofence.model


import com.google.gson.annotations.SerializedName

data class GeofenceData(
  @SerializedName("id")
  val id: String?,
  @SerializedName("lat")
  val lat: String?,
  @SerializedName("lon")
  val lon: String?,
  @SerializedName("radius")
  val radius: String?,
  @SerializedName("enter")
  val enter: Enter?,
  @SerializedName("exit")
  val exit: Exit?,
  @SerializedName("monitor")
  val monitor: String?
)

data class Exit(
  @SerializedName("description")
  val description: String?,
  @SerializedName("title")
  val title: String?,
  @SerializedName("url")
  val url: String?
)

data class Enter(
  @SerializedName("description")
  val description: String?,
  @SerializedName("title")
  val title: String?,
  @SerializedName("url")
  val url: String?
)
