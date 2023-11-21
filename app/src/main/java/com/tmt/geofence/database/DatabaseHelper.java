package com.tmt.geofence.database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.tmt.geofence.model.Enter;
import com.tmt.geofence.model.Exit;
import com.tmt.geofence.model.GeofenceData;

import java.util.ArrayList;

public class DatabaseHelper extends SQLiteOpenHelper {

  public Context mContext = null;

  public static final String DATABASE_NAME = "geofence_data";

  public static final String GEOFENCE = "geofence";

  public static final String GID = "ID";
  public static final String LAT = "LAT";
  public static final String LON = "LON";
  public static final String RADIUS = "RADIUS";
  public static final String INTITLE = "INTITLE";
  public static final String INDESC = "INDESC";
  public static final String INURL = "INURL";
  public static final String OUTTITLE = "OUTTITLE";
  public static final String OUTDESC = "OUTDESC";
  public static final String OUTURL = "OUTURL";
  public static final String MONITOR = "MONITORING";

  public DatabaseHelper(Context context) {
    super(context, DATABASE_NAME, null, 1);
    mContext = context;
  }

  @Override
  public void onCreate(SQLiteDatabase db) {
    db.execSQL(" CREATE TABLE " + GEOFENCE + " (" + GID + " INTEGER, " + LAT + " TEXT, " + LON + " TEXT, " + RADIUS + " TEXT, " + INTITLE + " TEXT, " + INDESC + " TEXT, " + INURL + " TEXT, " + OUTTITLE + " TEXT, " + OUTDESC + " TEXT, " + OUTURL + " TEXT, " + MONITOR + " TEXT);");
  }

  @Override
  public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
    db.execSQL("DROP TABLE IF EXISTS " + GEOFENCE);
    onCreate(db);
  }

  public void insertGeoFence(ArrayList<GeofenceData> geofences) {
    SQLiteDatabase db = this.getWritableDatabase();
    for (GeofenceData geofence : geofences) {
      ContentValues contentValues = new ContentValues();
      contentValues.put(GID, geofence.getId());
      contentValues.put(LAT, geofence.getLat());
      contentValues.put(LON, geofence.getLon());
      contentValues.put(RADIUS, geofence.getRadius());
      contentValues.put(INTITLE, geofence. component5().getTitle());
      contentValues.put(INDESC, geofence.component5().getDescription());
      contentValues.put(INURL, geofence.component5().getUrl());
      contentValues.put(OUTTITLE, geofence.component6().getTitle());
      contentValues.put(OUTDESC, geofence.component6().getDescription());
      contentValues.put(OUTURL, geofence.component6().getUrl());
      contentValues.put(MONITOR, geofence.getMonitor());
      db.insertWithOnConflict(GEOFENCE, null, contentValues, SQLiteDatabase.CONFLICT_REPLACE);
    }
  }

  public boolean isEmpty() {
    SQLiteDatabase db = this.getWritableDatabase();
    Cursor cursor = db.rawQuery("Select * from " + GEOFENCE, null);
    return !(cursor.getCount() > 0);
  }

  public Cursor getAllData(String tableName) {
    SQLiteDatabase db = this.getWritableDatabase();
    Cursor res = db.rawQuery("select * from " + tableName, null);
    return res;
  }

  public boolean updateData(String id, String name, String surname, String marks) {
    SQLiteDatabase db = this.getWritableDatabase();
    ContentValues contentValues = new ContentValues();
    contentValues.put(LAT, id);
    contentValues.put(LON, name);
    contentValues.put(RADIUS, surname);
    db.update(GEOFENCE, contentValues, "ID = ?", new String[]{id});
    return true;
  }

  public Integer deleteData(String tableName, String id) {
    SQLiteDatabase db = this.getWritableDatabase();
    return db.delete(tableName, "ID = ?", new String[]{id});
  }

  public boolean checkGeofenceExists(String id) {
    SQLiteDatabase db = this.getWritableDatabase();
    Cursor cursor = db.rawQuery("Select * from " + GEOFENCE + " WHERE " + GID + "=?", new String[]{id});
    if (cursor.getCount() <= 0) {
      cursor.close();
      db.close();
      return false;
    }
    cursor.close();
    db.close();
    return true;
  }

  public ArrayList<GeofenceData> retriveAllGeofences() {
    ArrayList<GeofenceData> receivedMessageArray = new ArrayList<GeofenceData>();

    SQLiteDatabase db = this.getWritableDatabase();

    Cursor cursor = db.rawQuery("SELECT ID,LAT,LON,RADIUS,INTITLE,INDESC,INURL,OUTTITLE,OUTDESC,OUTURL,MONITORING from " + GEOFENCE, null);

    if (cursor.moveToFirst()) {
      while (!cursor.isAfterLast()) {
        Enter mEnter = new Enter(cursor.getString(7), cursor.getString(8), cursor.getString(9));
        Exit mExit = new Exit(cursor.getString(4), cursor.getString(5), cursor.getString(6));
        receivedMessageArray.add(new GeofenceData(cursor.getString(0), cursor.getString(1), cursor.getString(2), cursor.getString(3), mEnter, mExit, cursor.getString(10)));
        cursor.moveToNext();
      }
    }
    db.close();
    return receivedMessageArray;
  }


  public GeofenceData getGeofence(String id) {
    GeofenceData mUrls = null;
    SQLiteDatabase db = this.getWritableDatabase();
    Cursor cursor = db.rawQuery("Select * from " + GEOFENCE + " WHERE " + GID + "=?", new String[]{id});
    if (cursor != null && cursor.moveToFirst()) {
      Exit mExit = new Exit(cursor.getString(7), cursor.getString(8), cursor.getString(9));
      Enter mEnter = new Enter(cursor.getString(4), cursor.getString(5), cursor.getString(6));
      mUrls = new GeofenceData(cursor.getString(0), cursor.getString(1), cursor.getString(2), cursor.getString(3), mEnter, mExit, cursor.getString(10));
    }
    cursor.close();
    return mUrls;
  }

  public boolean isMonitoring(String id) {
    boolean isMonitoring = false;
    SQLiteDatabase db = this.getWritableDatabase();
    Cursor cursor = db.rawQuery("Select * from " + GEOFENCE + " WHERE " + GID + "=?", new String[]{id});
    if (cursor.moveToFirst()) {
      if (cursor.getString(cursor.getColumnIndex(MONITOR)).equals("true")) {
        isMonitoring = true;
      }
    }
    db.close();
    return isMonitoring;
  }


  public void updateMonitoring(String id, boolean isMonitoring) {
    String isMonitor = "false";
    if (isMonitoring) {
      isMonitor = "true";
    }
    SQLiteDatabase db = this.getWritableDatabase();
    db.execSQL("UPDATE " + GEOFENCE + " SET " + MONITOR + " = '" + isMonitor + "' WHERE " + GID + " = '" + id + "'");

  }
}
