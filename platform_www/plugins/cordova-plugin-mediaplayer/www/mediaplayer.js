cordova.define("cordova-plugin-mediaplayer.mediaplayer", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    play: function(input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'play', [input]);
    },
    pause: function(input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'pause', [input]);
    },
    resume: function(input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'resume', [input]);
    },
    seek: function(input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'seek', [input]);
    },
    speed: function(input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'speed', [input]);
    },
    stop: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'stop', []);
    },
    current: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'MediaPlayer', 'current', []);
    }
};
});
