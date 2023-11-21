cordova.define("cordova-plugin-geofence.geofence", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    startGeofence: function (input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Geofence", "startGeofence", [input]);
    }
};
});
