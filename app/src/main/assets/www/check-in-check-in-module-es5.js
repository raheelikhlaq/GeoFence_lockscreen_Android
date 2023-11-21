(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-in-check-in-module"],{

/***/ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm5/ngx-webcam.js ***!
  \*****************************************************/
/*! exports provided: WebcamComponent, WebcamImage, WebcamInitError, WebcamMirrorProperties, WebcamModule, WebcamUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamImage", function() { return WebcamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamInitError", function() { return WebcamInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamMirrorProperties", function() { return WebcamMirrorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamModule", function() { return WebcamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamUtil", function() { return WebcamUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    WebcamImage.getDataFromDataUrl = function (dataUrl, mimeType) {
        return dataUrl.replace("data:" + mimeType + ";base64,", '');
    };
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        /**
         * Get the base64 encoded image data
         * @returns base64 data of the image
         */
        get: function () {
            return this._imageAsBase64 ? this._imageAsBase64
                : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        /**
         * Get the encoded image as dataUrl
         * @returns the dataUrl of the image
         */
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageData", {
        /**
         * Get the ImageData object associated with the canvas' 2d context.
         * @returns the ImageData of the canvas's 2d context.
         */
        get: function () {
            return this._imageData;
        },
        enumerable: true,
        configurable: true
    });
    return WebcamImage;
}());

var WebcamUtil = /** @class */ (function () {
    function WebcamUtil() {
    }
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    WebcamUtil.getAvailableVideoInputs = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                resolve(devices.filter(function (device) { return device.kind === 'videoinput'; }));
            })
                .catch(function (err) {
                reject(err.message || err);
            });
        });
    };
    return WebcamUtil;
}());

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent_1.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    WebcamComponent_1 = WebcamComponent;
    Object.defineProperty(WebcamComponent.prototype, "trigger", {
        /**
         * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
         */
        set: function (trigger) {
            var _this = this;
            if (this.triggerSubscription) {
                this.triggerSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to take snapshots
            this.triggerSubscription = trigger.subscribe(function () {
                _this.takeSnapshot();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "switchCamera", {
        /**
         * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
         * @param switchCamera Indicates which webcam to switch to
         *   true: cycle forwards through available webcams
         *   false: cycle backwards through available webcams
         *   string: activate the webcam with the given id
         */
        set: function (switchCamera) {
            var _this = this;
            if (this.switchCameraSubscription) {
                this.switchCameraSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to switch video device
            this.switchCameraSubscription = switchCamera.subscribe(function (value) {
                if (typeof value === 'string') {
                    // deviceId was specified
                    _this.switchToVideoInput(value);
                }
                else {
                    // direction was specified
                    _this.rotateVideoInput(value !== false);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    WebcamComponent.getMediaConstraintsForDevice = function (deviceId, baseMediaTrackConstraints) {
        var result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    };
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    WebcamComponent.getDeviceIdFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            var deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent_1.getValueFromConstrainDOMString(deviceIdObj);
        }
    };
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    WebcamComponent.getFacingModeFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                var facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent_1.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    };
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    WebcamComponent.isUserFacing = function (mediaStreamTrack) {
        var facingMode = WebcamComponent_1.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    };
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    WebcamComponent.getValueFromConstrainDOMString = function (constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    };
    WebcamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.detectAvailableDevices()
            .then(function () {
            // start video
            _this.switchToVideoInput(null);
        })
            .catch(function (err) {
            _this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            _this.switchToVideoInput(null);
        });
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    };
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    WebcamComponent.prototype.takeSnapshot = function () {
        // set canvas size to actual video size
        var _video = this.nativeVideoElement;
        var dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        var _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        var context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        var mimeType = this.imageType ? this.imageType : WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        var quality = this.imageQuality ? this.imageQuality : WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        var dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        var imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    };
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    WebcamComponent.prototype.rotateVideoInput = function (forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            var increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            var nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    };
    /**
     * Switches the camera-view to the specified video device
     */
    WebcamComponent.prototype.switchToVideoInput = function (deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    };
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    WebcamComponent.prototype.videoResize = function () {
        // here to trigger Angular change detection
    };
    Object.defineProperty(WebcamComponent.prototype, "videoWidth", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.width, this.height * videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoHeight", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.height, this.width / videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoStyleClasses", {
        get: function () {
            var classes = '';
            if (this.isMirrorImage()) {
                classes += 'mirrored ';
            }
            return classes.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "nativeVideoElement", {
        get: function () {
            return this.video.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the video aspect ratio of the active video stream
     */
    WebcamComponent.prototype.getVideoAspectRatio = function () {
        // calculate ratio from video element dimensions if present
        var videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    };
    /**
     * Init webcam live view
     */
    WebcamComponent.prototype.initWebcam = function (deviceId, userVideoTrackConstraints) {
        var _this = this;
        var _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            var videoTrackConstraints = WebcamComponent_1.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then(function (stream) {
                _this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                _this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                var activeDeviceId = WebcamComponent_1.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                _this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                _this.detectAvailableDevices()
                    .then(function () {
                    _this.activeVideoInputIndex = activeDeviceId ? _this.availableVideoInputs
                        .findIndex(function (mediaDeviceInfo) { return mediaDeviceInfo.deviceId === activeDeviceId; }) : -1;
                    _this.videoInitialized = true;
                })
                    .catch(function () {
                    _this.activeVideoInputIndex = -1;
                    _this.videoInitialized = true;
                });
            })
                .catch(function (err) {
                _this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    };
    WebcamComponent.prototype.getActiveVideoTrack = function () {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    };
    WebcamComponent.prototype.isMirrorImage = function () {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            var mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent_1.isUserFacing(this.getActiveVideoTrack());
    };
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    WebcamComponent.prototype.stopMediaTracks = function () {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach(function (track) { return track.stop(); });
        }
    };
    /**
     * Unsubscribe from all open subscriptions
     */
    WebcamComponent.prototype.unsubscribeFromSubscriptions = function () {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    };
    /**
     * Reads available input devices
     */
    WebcamComponent.prototype.detectAvailableDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            WebcamUtil.getAvailableVideoInputs()
                .then(function (devices) {
                _this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(function (err) {
                _this.availableVideoInputs = [];
                reject(err);
            });
        });
    };
    var WebcamComponent_1;
    WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
    WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
    WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "videoOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "allowCameraSwitch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "mirrorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "captureImageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WebcamComponent.prototype, "imageType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "imageQuality", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "initError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "cameraSwitched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "trigger", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "switchCamera", null);
    WebcamComponent = WebcamComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'webcam',
            template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
            styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scale(-1,1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
        })
    ], WebcamComponent);
    return WebcamComponent;
}());

var COMPONENTS = [
    WebcamComponent
];
var WebcamModule = /** @class */ (function () {
    function WebcamModule() {
    }
    WebcamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS
            ]
        })
    ], WebcamModule);
    return WebcamModule;
}());

var WebcamInitError = /** @class */ (function () {
    function WebcamInitError() {
        this.message = null;
        this.mediaStreamError = null;
    }
    return WebcamInitError;
}());

var WebcamMirrorProperties = /** @class */ (function () {
    function WebcamMirrorProperties() {
    }
    return WebcamMirrorProperties;
}());


//# sourceMappingURL=ngx-webcam.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/check-in/check-in.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/check-in/check-in.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\" *ngIf=\"!checkin_detail\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\">No Check-In Data Available</h4>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" *ngIf=\"checkin_detail\">\n        <div class=\"app-container\">\n            <ion-row class=\"ion-justify-content-center\">\n                <ion-col [size]=\"12\" [sizeMd]=\"8\">\n                    <ion-card class=\"ionCard ionCard--mobile loginCard\">\n                        <h1 class=\"ion-text-center heading2\"> Check-In</h1>\n                        <h3 *ngIf=\"checkin_detail\"\n                            class=\"ion-text-center heading3\"> {{checkin_detail.checkin_name}} </h3>\n                        <div *ngIf=\"!show_create_fields\">\n                            <ion-row class=\"ion-align-items-center\">\n\n<!--                                <webcam *ngIf=\"camera\"></webcam>-->\n                                <div>\n                                <qr-scanner *ngIf=\"scan_done\"\n                                            [debug]=\"false\"\n                                            [canvasWidth]=\"500\"\n                                            [canvasHeight]=\"500\"\n                                            [stopAfterScan]=\"true\"\n                                            [updateTime]=\"500\">\n                                </qr-scanner>\n                                </div>\n\n                                <ion-col size=\"9\" class=\"ion-no-padding\">\n                                    <ion-item class=\"inputField\" lines=\"none\">\n                                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_input\" (ionChange)=\"filter_people()\"\n                                                   class=\"inputField__area \" inputmode=\"text\"\n                                                   placeholder=\"Search a Name or Number\"\n                                                   name=\"guest\"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col size=\"3\" class=\"ion-no-padding\">\n                                    <ion-button style=\"margin-bottom: 15px;\" (click)=\"camera = !camera;  launcgQrScanner()\"\n                                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                                            <span style=\"font-weight: 500\"><ion-icon *ngIf=\"!camera\" size=\"large\"\n                                                                                     name=\"camera\"></ion-icon><p\n                                                    style=\"color: white\" *ngIf=\"camera\">Back</p></span>\n                                    </ion-button>\n                                </ion-col>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-button class=\"commonBtn commonBtn--dark\"\n                                                (click)=\"show_create_fields = true; add_family = false;\"\n                                                *ngIf=\"search_input\">Create &nbsp;\n                                        <mark><b>{{search_input}}</b></mark>&nbsp;\n                                        as a new Person ?\n                                    </ion-button>\n                                </div>\n\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">\n                                        <table>\n                                            <tr>\n                                                <th></th>\n                                                <th>Name</th>\n                                                <th>Life stage</th>\n                                                <th>Email</th>\n                                                <th>Phone</th>\n                                            </tr>\n                                            <tr *ngFor=\"let item of filtered_people | filter: search_input\"\n                                                (click)=\"set_confirmation( item )\">\n                                                <td>\n                                                    <ion-icon name=\"person\"></ion-icon>\n                                                </td>\n                                                <td>{{item.first_last_name}}</td>\n                                                <td>{{item.life_stage ? item.life_stage : 'N/A'}}</td>\n                                                <td>{{item.email}}</td>\n                                                <td>{{item.phone}}</td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <h6 class=\"ion-text-center heading5\">Confirmation</h6>\n                                </ion-col>\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">\n                                        <table>\n                                            <tr>\n                                                <th>Check-In</th>\n                                                <th>Type</th>\n                                                <th>Name</th>\n                                            </tr>\n                                            <tr *ngIf=\"confirmation\">\n                                                <td>\n                                                    <ion-toggle [(ngModel)]=\"confirmation['checkin_toggle']\"\n                                                                style=\"position: relative;top: 5px;\"\n                                                                color=\"success\"></ion-toggle>\n                                                </td>\n                                                <td>\n                                                    <ion-select placeholder=\"Type\" interface=\"action-sheet\"\n                                                                [(ngModel)]=\"confirmation['type']\"\n                                                                [name]=\"audience_options[0].name\"\n                                                                class=\"inputField__area inputField__area--select\"\n                                                                style=\"padding-left: 0;\">\n                                                        <ion-select-option *ngFor=\"let type of audience_options\"\n                                                                           [value]=\"type.name\">{{type.name}}\n                                                        </ion-select-option>\n                                                    </ion-select>\n                                                </td>\n                                                <td>{{confirmation.first_last_name}}</td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <h6 class=\"ion-text-center heading5\">Household</h6>\n                                </ion-col>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-button class=\"commonBtn commonBtn--dark\"\n                                                (click)=\"show_create_fields = true; add_family = true;\"\n                                                *ngIf=\"confirmation\">Create new family member?\n                                    </ion-button>\n                                </div>\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">\n                                        <table>\n                                            <tr>\n                                                <th>Check-In</th>\n                                                <th>Type</th>\n                                                <th>Name</th>\n                                                <th>Relation</th>\n                                            </tr>\n                                            <tr *ngFor=\"let member of household; let i = index\">\n                                                <td>\n                                                    <ion-toggle [(ngModel)]=\"member['checkin_toggle']\"\n                                                                style=\"position: relative;top: 5px;\"\n                                                                color=\"success\"></ion-toggle>\n                                                </td>\n                                                <td>\n                                                    <ion-select placeholder=\"Type\" interface=\"action-sheet\"\n                                                                [(ngModel)]=\"member['type']\"\n                                                                [name]=\"audience_options[0].name\"\n                                                                class=\"inputField__area inputField__area--select\"\n                                                                style=\"padding-left: 0;\">\n                                                        <ion-select-option *ngFor=\"let type of audience_options\"\n                                                                           [value]=\"type.name\">{{type.name}}\n                                                        </ion-select-option>\n                                                    </ion-select>\n                                                </td>\n                                                <td>{{member.first_last_name}}</td>\n                                                <td>{{member.relation_name}}</td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"12\" class=\"ion-no-padding mb-30\">\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField\" lines=\"none\">\n                                            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                                <ion-icon name=\"time\"></ion-icon>\n                                            </ion-buttons>\n                                            <ion-label>Times</ion-label>\n                                            <ion-select [(ngModel)]=\"time\" interface=\"action-sheet\"\n                                                        name=\"time\"\n                                                        class=\"inputField__area inputField__area--select\">\n                                                <ion-select-option\n                                                        *ngFor=\"let time of checkin_time\"\n                                                        [value]=\"time.name\">{{time.name}}\n                                                </ion-select-option>\n                                            </ion-select>\n                                        </ion-item>\n                                    </div>\n                                </ion-col>\n                                <ion-col size=\"12\" class=\"ion-no-padding\">\n                                    <ion-button (click)=\"checkin()\"\n                                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                                        <span style=\"font-weight: 500\">Checkin</span>\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n\n                        <!--                            CREATE MEMBER-->\n                        <div *ngIf=\"show_create_fields\">\n                            <ion-buttons (click)=\"show_create_fields = !show_create_fields\"\n                                         class=\"cursor-pointer\">\n                                <ion-icon name=\"arrow-back\" routerDirection=\"root\"></ion-icon>&nbsp;\n                                Back\n                            </ion-buttons>\n                            <h1 *ngIf=\"!add_family\" class=\"ion-text-center heading4\"> New Person </h1>\n                            <h1 *ngIf=\"add_family\" class=\"ion-text-center heading4\"> New Family Member </h1>\n\n                            <p *ngIf=\"add_family\"> Related with {{name_for_relation}}</p>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"person\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"name\" class=\"inputField__area\" placeholder=\"Name\"\n                                               inputmode=\"text\"\n                                    ></ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label>life stage</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"life_stage\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"adult\">adult</ion-select-option>\n                                        <ion-select-option value=\"child\">child</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"people\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-label>gender</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"gender\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"male\">male</ion-select-option>\n                                        <ion-select-option value=\"Female\">female</ion-select-option>\n                                        <ion-select-option value=\"other\">other</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"call\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input [(ngModel)]=\"phone\" placeholder=\"Phone\"\n                                               class=\"inputField__area\" inputmode=\"phone\"\n                                    ></ion-input>\n                                </ion-item>\n                            </div>\n                            <div *ngIf=\"add_family\" class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"people\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-label>Relation with {{name_for_relation}}</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"relation\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"Other+0\">Other</ion-select-option>\n                                        <ion-select-option value=\"Father+1\">Father</ion-select-option>\n                                        <ion-select-option value=\"Mother+2\">Mother</ion-select-option>\n                                        <ion-select-option value=\"Son+3\">Son</ion-select-option>\n                                        <ion-select-option value=\"Daughter+4\">Daughter</ion-select-option>\n                                        <ion-select-option value=\"Brother+5\">Brother</ion-select-option>\n                                        <ion-select-option value=\"Sister+6\">Sister</ion-select-option>\n                                        <ion-select-option value=\"Wife+16\">Wife</ion-select-option>\n                                        <ion-select-option value=\"Husband+17\">Husband</ion-select-option>\n                                        <ion-select-option value=\"Uncle+7\">Uncle</ion-select-option>\n                                        <ion-select-option value=\"Aunt+8\">Aunt</ion-select-option>\n                                        <ion-select-option value=\"Nephew+9\">Nephew</ion-select-option>\n                                        <ion-select-option value=\"Niece+10\">Niece</ion-select-option>\n                                        <ion-select-option value=\"Cousin+11\">Cousin</ion-select-option>\n                                        <ion-select-option value=\"Grand Father+12\">Grand Father</ion-select-option>\n                                        <ion-select-option value=\"Grand Mother+13\">Grand Mother</ion-select-option>\n                                        <ion-select-option value=\"Grand Son+14\">Grand Son</ion-select-option>\n                                        <ion-select-option value=\"Grand Daughter+15\">Grand Daughter</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"mail\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input [(ngModel)]=\"email\" class=\"inputField__area\" placeholder=\"Email\"\n                                               inputmode=\"email\"\n                                    ></ion-input>\n                                </ion-item>\n                            </div>\n\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"calendar\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-datetime [(ngModel)]=\"dob\" cancelText=\"{{'datetime.cancel' | translate}}\" doneText=\"{{'datetime.done' | translate}}\"\n                                                  class=\"inputField__area inputField__area--datePicker\"\n                                                  displayFormat=\"MM/DD/YY\"\n                                                  placeholder=\"date of birth\"></ion-datetime>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label>Are you a volunteer?</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"is_volunteer\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"Y\">Yes</ion-select-option>\n                                        <ion-select-option value=\"N\">No</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div *ngIf=\"is_volunteer === 'N'\" class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label>Are you interested in Volunteering?</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"interested_volunteer\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"Y\">Yes</ion-select-option>\n                                        <ion-select-option value=\"N\">No</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <!--                                <ion-col *ngIf=\"!add_family\" size=\"12\" class=\"ion-no-padding\">-->\n                            <!--                                    <p><b>Family</b></p>-->\n                            <!--                                    <ion-button class=\"commonBtn commonBtn&#45;&#45;dark mb-20\"-->\n                            <!--                                                (click)=\"add_family = true; name_for_relation = name\">Add Family member-->\n                            <!--                                    </ion-button>-->\n                            <!--                                </ion-col>-->\n                            <!--                                <ion-col *ngIf=\"!add_family\" size=\"12\" class=\"ion-no-padding\">-->\n                            <!--                                    <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">-->\n                            <!--                                        <table>-->\n                            <!--                                            <tr>-->\n                            <!--                                                <th>Name</th>-->\n                            <!--                                                <th>Phone</th>-->\n                            <!--                                                <th>Email</th>-->\n                            <!--                                                <th>Relation</th>-->\n                            <!--                                            </tr>-->\n                            <!--                                            <tr *ngFor=\" let member of existing_family_members\">-->\n                            <!--                                                <td>{{member.name}}</td>-->\n                            <!--                                                <td>{{member.phone}}</td>-->\n                            <!--                                                <td>{{member.email}}</td>-->\n                            <!--                                                <td>{{member.relation}}</td>-->\n                            <!--                                            </tr>-->\n                            <!--                                        </table>-->\n                            <!--                                    </div>-->\n                            <!--                                </ion-col>-->\n\n                            <ion-col size=\"3\" class=\"ion-no-padding\">\n                                <ion-button (click)=\"createUser()\"\n                                            class=\"commonBtn commonBtn--dark commonBtn--mdblock mb-30\"\n                                            expand=\"block\">\n                                    <span style=\"font-weight: 500\">Create</span>\n                                </ion-button>\n                            </ion-col>\n                        </div>\n\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/check-in/check-in.module.ts":
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.module.ts ***!
  \*********************************************/
/*! exports provided: CheckInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPageModule", function() { return CheckInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-in.page */ "./src/app/check-in/check-in.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");












var routes = [
    {
        path: '',
        component: _check_in_page__WEBPACK_IMPORTED_MODULE_6__["CheckInPage"]
    }
];
var CheckInPageModule = /** @class */ (function () {
    function CheckInPageModule() {
    }
    CheckInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                angular2_qrscanner__WEBPACK_IMPORTED_MODULE_10__["NgQrScannerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_9__["WebcamModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_check_in_page__WEBPACK_IMPORTED_MODULE_6__["CheckInPage"]]
        })
    ], CheckInPageModule);
    return CheckInPageModule;
}());



/***/ }),

/***/ "./src/app/check-in/check-in.page.scss":
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-bottom-color: white;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2NoZWNrLWluL2NoZWNrLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hlY2staW4vY2hlY2staW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGVjay1pbi9jaGVjay1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuIiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/check-in/check-in.page.ts":
/*!*******************************************!*\
  !*** ./src/app/check-in/check-in.page.ts ***!
  \*******************************************/
/*! exports provided: CheckInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInPage", function() { return CheckInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var _qrcode_modal_qrcode_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./qrcode-modal/qrcode-modal.component */ "./src/app/check-in/qrcode-modal/qrcode-modal.component.ts");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");

















var CheckInPage = /** @class */ (function () {
    function CheckInPage(platform, route, loader, storage, sermonsService, dom, router, location, common, toast, api, scannerModal, modalController, idService, translate) {
        var _this = this;
        this.platform = platform;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this.api = api;
        this.scannerModal = scannerModal;
        this.modalController = modalController;
        this.idService = idService;
        this.translate = translate;
        this.camera = false;
        this.show_create_fields = false;
        this.confirmation_checkin_toggle = true;
        this.household_checkin_toggle = [];
        this.add_family = false;
        this.household = [];
        this.scan_done = true;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    CheckInPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var camp_id, link_code;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                camp_id = this.route.snapshot.paramMap.get('id');
                link_code = this.route.snapshot.paramMap.get('link_code');
                this.ch_id = this.route.snapshot.paramMap.get('ch_id');
                if (!this.ch_id) {
                    this.ch_id = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].church_id;
                }
                this.idService.setId(this.ch_id);
                this.getCheckInData(camp_id, link_code);
                return [2 /*return*/];
            });
        });
    };
    CheckInPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _qrcode_modal_qrcode_modal_component__WEBPACK_IMPORTED_MODULE_13__["QrcodeModalComponent"],
                            cssClass: 'scannerModal',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckInPage.prototype.launcgQrScanner = function () {
        var _this = this;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (result) {
            if (result) {
                _this.loadProfileQR(result);
            }
            _this.camera = !_this.camera;
        });
    };
    CheckInPage.prototype.getCheckInData = function (id, link_code) {
        var _this = this;
        this.api.get_checkin(id, link_code).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.status) {
                    this.checkin_detail = res.checkin;
                    this.checkin_time = res.checkin.times;
                    this.checkin_time = JSON.parse(this.checkin_time);
                    this.checkin_church_id = res.checkin.church_id;
                    this.audience_options = JSON.parse(res.checkin.audience_options);
                    this.getPeople(res.checkin.church_id);
                }
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.message;
            _this.loader.stopLoading();
            _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    CheckInPage.prototype.getPeople = function (church_id) {
        var _this = this;
        this.api.get_people(church_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.people = res.people;
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.message;
            _this.loader.stopLoading();
            _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    CheckInPage.prototype.filter_people = function () {
        if (this.search_input.length !== 0) {
            this.filtered_people = this.people;
        }
        else {
            this.filtered_people = [];
        }
    };
    CheckInPage.prototype.set_confirmation = function (obj) {
        var _this = this;
        if (this.confirmation && obj.first_last_name === this.confirmation.first_last_name) {
            this.confirmation = obj;
            this.filtered_people = [];
            this.confirmation_user_type = this.audience_options[0].name;
        }
        else {
            this.confirmation = obj;
            this.confirmation['checkin_toggle'] = 1;
            this.confirmation['type'] = '';
            this.filtered_people = [];
            this.household = [];
            // getting its family members
            var body = JSON.stringify({
                //people_id: 2008,
                people_id: this.confirmation.id,
            });
            this.api.get_household(body).subscribe(function (res) {
                if (res.status) {
                    _this.household = res.family;
                    for (var i = 0; i < _this.household.length; i++) {
                        _this.household[i]['checkin_toggle'] = 0;
                        _this.household[i]['type'] = '';
                        _this.household[i]['relation_name'] = _this.household[i].relation.name;
                    }
                }
            });
            this.confirmation_user_type = this.audience_options[0].name;
        }
        this.name_for_relation = this.confirmation.first_last_name;
    };
    CheckInPage.prototype.createUser = function () {
        this.show_create_fields = !this.show_create_fields;
        if (this.add_family) {
            var rel = this.relation.split('+');
            var familyUserData = {
                first_last_name: this.name,
                life_stage: this.life_stage,
                gender: this.gender,
                phone: this.phone,
                email: this.email,
                dob: this.dob,
                membership: this.membership,
                is_volunteer: this.is_volunteer,
                interest_volunteer: this.interested_volunteer,
                relation_id: rel[1],
                relation_name: rel[0],
                checkin_toggle: 0,
                type: ''
            };
            this.household.push(familyUserData);
        }
        else {
            var userData = {
                name: this.name,
                life_stage: this.life_stage,
                gender: this.gender,
                phone: this.phone,
                email: this.email,
                dob: this.dob,
                membership: this.membership,
                is_volunteer: this.is_volunteer,
                interest_volunteer: this.interested_volunteer,
            };
        }
        this.createPerson();
    };
    CheckInPage.prototype.createPerson = function () {
        var _this = this;
        var body = JSON.stringify({
            church_id: this.checkin_detail.church_id,
            campus_id: this.checkin_detail.campus_id,
            checkin_id: this.checkin_detail.id,
            first_last_name: this.name,
            life_stage: this.life_stage,
            gender: this.gender,
            phone: this.phone,
            email: this.email,
            birthday: this.dob,
            membership: this.membership,
            is_volunteer: this.is_volunteer,
            interest_volunteer: this.interested_volunteer,
            create_household: this.add_family
        });
        this.api.create_person(body).subscribe(function (res) {
            if (res.status) {
                _this.ngOnInit();
                // clearing input data
                _this.name = '';
                _this.phone = '';
                _this.email = '';
                _this.gender = '';
                _this.dob = '';
                _this.life_stage = '';
                _this.membership = '';
                _this.is_volunteer = '';
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.PersonSuccessfully : 'Person Created Successfully'), (_this.alertMessage ? _this.alertMessage.Success : 'Success'), 'success');
            }
        });
    };
    CheckInPage.prototype.checkin = function () {
        var checked = {
            id: this.confirmation.id,
            type: this.confirmation.type
        };
        var time;
        if (this.checkin_detail.times) {
            time = JSON.stringify(this.checkin_detail.times);
        }
        var body = JSON.stringify({
            checkin_id: this.checkin_detail.id,
            time: time[0],
            people_checked: checked,
            church_id: this.checkin_detail.church_id,
            require_checkout: this.checkin_detail.require_checkout
        });
        // this.api.checkin(body).subscribe((res: any) => {
        //     if (res.status){
        //         this.toast.presentToastWithOptions('Checked In Successfully', 'Success', 'success');
        //     }
        // });
        // if (this.time) {
        //     if (this.confirmation || this.household) {
        //         this.toast.presentToastWithOptions('Person Checked In Successfully', 'Success', 'success');
        //     }
        // } else {
        //     this.toast.presentToastWithOptions('Select Time', 'Warning', 'warning');
        // }
    };
    CheckInPage.prototype.loadProfileQR = function (qr_id) {
        var _this = this;
        var body = JSON.stringify({
            checkin_id: this.checkin_detail.id,
            qr_id: qr_id
        });
        this.api.load_profileQR(body).subscribe(function (res) {
            if (res.status) {
                _this.confirmation = res.data;
                _this.scan_done = false;
            }
        });
    };
    CheckInPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    CheckInPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
        { type: _qrcode_modal_qrcode_modal_component__WEBPACK_IMPORTED_MODULE_13__["QrcodeModalComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_14__["IdService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2_qrscanner__WEBPACK_IMPORTED_MODULE_12__["QrScannerComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_qrscanner__WEBPACK_IMPORTED_MODULE_12__["QrScannerComponent"])
    ], CheckInPage.prototype, "qrScannerComponent", void 0);
    CheckInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-in',
            template: __webpack_require__(/*! raw-loader!./check-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/check-in/check-in.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _qrcode_modal_qrcode_modal_component__WEBPACK_IMPORTED_MODULE_13__["QrcodeModalComponent"]],
            styles: [__webpack_require__(/*! ./check-in.page.scss */ "./src/app/check-in/check-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
            _qrcode_modal_qrcode_modal_component__WEBPACK_IMPORTED_MODULE_13__["QrcodeModalComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_id_service__WEBPACK_IMPORTED_MODULE_14__["IdService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]])
    ], CheckInPage);
    return CheckInPage;
}());



/***/ })

}]);
//# sourceMappingURL=check-in-check-in-module-es5.js.map