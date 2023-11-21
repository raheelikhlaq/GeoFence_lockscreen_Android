(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wheather-wheather-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wheather/wheather.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wheather/wheather.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            Weather\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n\n<ion-content class=\"weather-page\" *ngIf=\"allow_permission\">\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\" *ngIf=\"allow_permission\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col width-50 offset-25>\n                        <h3 class=\"temp\">{{weather_data?.fahrenheit}} &deg;{{weather_degree === 'Fahrenheit' ? 'F' : 'C'}}</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col width-100>\n                        <ion-list style=\"background: #435D8C; text-align: center;\">\n                            <ion-item class=\"weather-list\" style=\"\">\n                                <p style=\"margin: 0 auto; color: #ffffff;\"><strong>{{'WEATHER.Feels_Like' | translate}}: &nbsp;</strong>{{weather_data?.current.feels_like}}&deg;</p>\n                            </ion-item>\n                            <ion-item class=\"weather-list\">\n                                <p style=\"margin: 0 auto; color: #ffffff;\"><strong>{{'WEATHER.Low' | translate}}: &nbsp;</strong>{{weather_data?.current.temp_min}}&deg;</p>\n                            </ion-item>\n                            <ion-item class=\"weather-list\">\n                                <p style=\"margin: 0 auto; color: #ffffff;\"><strong>{{'WEATHER.Humidity' | translate}}: &nbsp;</strong> {{weather_data?.current.humidity}}%</p>\n                            </ion-item>\n                          </ion-list>\n                    </ion-col>\n                </ion-row>\n\n                <h4>{{'WEATHER.7 Day Forecast' | translate}}</h4>\n                <ion-row style=\"font-size: 14px;\">\n                    <ion-col>\n                        <!-- Title -->\n                    </ion-col>\n                    <ion-col>\n                        {{'WEATHER.High' | translate}}\n                    </ion-col>\n                    <ion-col>\n                        {{'WEATHER.Low' | translate}}\n                    </ion-col>\n                    <ion-col>\n                        {{'WEATHER.Humidity' | translate}}\n                    </ion-col>\n\n                </ion-row>\n                <ion-row style=\"font-size: 14px;\" *ngFor=\"let fc of forecast\">\n                    <ion-col>\n                        {{fc?.weather[0].main}}\n                    </ion-col>\n                    <ion-col>\n                        {{fc?.temp.day}}&deg;\n                    </ion-col>\n                    <ion-col>\n                        {{fc?.temp.min}}&deg;\n                    </ion-col>\n                    <ion-col>\n                        {{fc?.humidity}}%\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n        </div>\n    </div>\n\n</ion-content>\n<ion-content *ngIf=\"!allow_permission\">\n    <div class=\"page-wrapper\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n            style=\"border-radius: 5px;\">\n                <h4 class=\"heading4\">Please Click <a (click)=\"openPermissionSettings()\">Here</a> To Allow Permission</h4>\n            </ion-card>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/wheather/wheather.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wheather/wheather.module.ts ***!
  \*********************************************/
/*! exports provided: WheatherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheatherPageModule", function() { return WheatherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wheather_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wheather.page */ "./src/app/wheather/wheather.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_services_weather_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/weather.service */ "./src/services/weather.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _wheather_page__WEBPACK_IMPORTED_MODULE_5__["WheatherPage"]
    }
];
var WheatherPageModule = /** @class */ (function () {
    function WheatherPageModule() {
    }
    WheatherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_wheather_page__WEBPACK_IMPORTED_MODULE_5__["WheatherPage"]],
            providers: [src_services_weather_service__WEBPACK_IMPORTED_MODULE_7__["WeatherService"]]
        })
    ], WheatherPageModule);
    return WheatherPageModule;
}());



/***/ }),

/***/ "./src/app/wheather/wheather.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wheather/wheather.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weather-page {\n  --background: #6495ED;\n  --color: #fff;\n}\n\n.weather-list {\n  --background: #435D8C;\n  --color: #fff;\n}\n\n.temp {\n  font-size: 60px;\n  text-align: center;\n  font-weight: normal;\n}\n\n.location {\n  text-align: center;\n}\n\n.icon, .desc {\n  text-align: center;\n}\n\n.icon img {\n  width: 100px;\n}\n\n.location {\n  font-sze: 40px;\n}\n\n.desc {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3doZWF0aGVyL3doZWF0aGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2hlYXRoZXIvd2hlYXRoZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3doZWF0aGVyL3doZWF0aGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLXBhZ2V7XG4gIC0tYmFja2dyb3VuZDogIzY0OTVFRDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbi53ZWF0aGVyLWxpc3R7XG4gIC0tYmFja2dyb3VuZDogIzQzNUQ4QztcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbi50ZW1wIHtcbiAgZm9udC1zaXplOjYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb24gLCAuZGVzYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24gaW1nIHtcbiAgd2lkdGg6MTAwcHg7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZvbnQtc3plOjQwcHhcbn1cblxuLmRlc2Mge1xuICBmb250LXNpemU6IDMwcHg7XG59IiwiLndlYXRoZXItcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogIzY0OTVFRDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLndlYXRoZXItbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogIzQzNUQ4QztcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLnRlbXAge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiwgLmRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZm9udC1zemU6IDQwcHg7XG59XG5cbi5kZXNjIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wheather/wheather.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wheather/wheather.page.ts ***!
  \*******************************************/
/*! exports provided: WheatherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheatherPage", function() { return WheatherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/weather.service */ "./src/services/weather.service.ts");
/* harmony import */ var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/admob-pro/ngx */ "./node_modules/@ionic-native/admob-pro/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");













var WheatherPage = /** @class */ (function () {
    function WheatherPage(weatherService, platform, admobPro, location, event_provider, loader, dom, geolocation, diagnostic, openNativeSettings, common) {
        var _this = this;
        this.weatherService = weatherService;
        this.platform = platform;
        this.admobPro = admobPro;
        this.location = location;
        this.event_provider = event_provider;
        this.loader = loader;
        this.dom = dom;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.openNativeSettings = openNativeSettings;
        this.common = common;
        this.forecast = [];
        this.allow_permission = true;
        this.weather_degree = '';
        this.platform.ready().then(function () {
            var bannerConfig = {
                // add your config here
                // for the sake of this example we will just use the test config
                adId: 'ca-app-pub-6533902948762053/1398181345',
                isTesting: true,
                autoShow: true
            };
            _this.admobPro.createBanner(bannerConfig).then(function () {
                _this.admobPro.showBanner(_this.admobPro.AD_POSITION.TOP_CENTER);
            }).catch(function (e) { return console.log('error: ', e); });
            //  this.admobFree.showBanner(1);
            //  this.admobFree.banner.config(bannerConfig);
            //  let interval = setInterval(() => {
            //    this.admobFree.banner.prepare()
            //    .then(() => {
            //     console.log('BANNER LOADED')
            //      // banner Ad is ready
            //      // if we set autoShow to false, then we will need to call the show method here
            //    })
            //    .catch(e => console.log('error: ',e));
            // }, 10000)
            // this.admobFree.banner.show();
        });
    }
    WheatherPage.prototype.ngOnInit = function () {
    };
    WheatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Weather'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
        //this.common.openPagePasswordModal("123456", '');
    };
    WheatherPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.event_provider.hidefooter(true, 'other');
        // saving app_pages
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    this.weather_degree = res.church.weather_degree;
                    this.allow_permission = true;
                    this.loader.presentLoading().then();
                    this.getWeather(this.weather_degree);
                    this.getWeeklyWeather(this.weather_degree);
                    this.getWeatherMap();
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
        }, function () {
        });
    };
    WheatherPage.prototype.getWeather = function (weather_degree) {
        var _this = this;
        var geocoder;
        var city;
        var county;
        geocoder = new window.google.maps.Geocoder();
        this.geolocation.getCurrentPosition().then(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var self = _this;
            self.weatherService.getWeather(lat, lng, weather_degree).subscribe(function (data) {
                self.weather_data = data;
                self.weather_data['fahrenheit'] = self.weather_data['current'].temp.toFixed(0);
                self.weather_data['current'].feels_like = self.weather_data['current'].feels_like.toFixed(0);
                self.weather_data['current']['temp_min'] = self.weather_data.daily[0].temp.min.toFixed(0);
            }, function (err) {
            });
        }).catch(function (error) {
            console.log(error);
            // if(error.PERMISSION_DENIED === 1){
            _this.allow_permission = false;
            _this.diagnostic.requestLocationAuthorization().then(function (res) {
                _this.allow_permission = true;
                _this.loader.presentLoading().then();
                _this.getWeather(_this.weather_degree);
                _this.getWeeklyWeather(_this.weather_degree);
                _this.getWeatherMap();
            }).catch(function (res) {
            });
            // }
        }).finally(function () {
            console.log(_this.diagnostic.permission.ACCESS_FINE_LOCATION);
            _this.diagnostic.requestLocationAuthorization('always').then(function (res) {
                console.log(res);
            });
            if (_this.diagnostic.permission.ACCESS_FINE_LOCATION) { }
            _this.diagnostic.permission.ACCESS_COARSE_LOCATION;
        });
    };
    WheatherPage.prototype.getWeeklyWeather = function (weather_degree) {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            _this.weatherService.getWeeklyWeather(lat, lng, weather_degree).subscribe(function (data) {
                _this.forecast = data.daily;
                _this.forecast.forEach(function (item) {
                    item.temp.day = (item.temp.day).toFixed(0);
                    item.feels_like.day = (item.feels_like.day).toFixed(0);
                    item.temp.min = (item.temp.min).toFixed(0);
                });
                _this.forecast.pop();
                _this.loader.stopLoading().then();
            }, function (err) {
                _this.loader.stopLoading().then();
            });
        });
    };
    WheatherPage.prototype.getWeatherMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.weatherService.getWeatherMap()
                    .subscribe(function (data) {
                    // this.weimg = new Blob([data])
                    var arrayBuffer = data;
                    var bytes = new Uint8Array(arrayBuffer);
                    _this.loader.stopLoading().then();
                    // var image = document.getElementById('image');
                    _this.weimg = 'data:image/png;base64,' + encode(bytes);
                    // var reader = new FileReader();
                    // reader.onload = (event) => {
                    //     var base64 =   event.target.result;
                    //     var image = new Image();
                    //     image.src = base64;
                    //     document.body.appendChild(image);
                    // };
                    function encode(input) {
                        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var output = "";
                        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                        var i = 0;
                        while (i < input.length) {
                            chr1 = input[i++];
                            chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
                            chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here
                            enc1 = chr1 >> 2;
                            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                            enc4 = chr3 & 63;
                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            }
                            else if (isNaN(chr3)) {
                                enc4 = 64;
                            }
                            output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                                keyStr.charAt(enc3) + keyStr.charAt(enc4);
                        }
                        return output;
                    }
                    // reader.readAsDataURL(blob);
                    // this.weimg = data;
                }, function (err) {
                    _this.loader.stopLoading().then();
                });
                return [2 /*return*/];
            });
        });
    };
    WheatherPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    WheatherPage.prototype.openPermissionSettings = function () {
        this.openNativeSettings.open('locations').then(function (res) {
            console.log(res);
        });
    };
    WheatherPage.ctorParameters = function () { return [
        { type: src_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobPro"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"] },
        { type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_10__["OpenNativeSettings"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] }
    ]; };
    WheatherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wheather',
            template: __webpack_require__(/*! raw-loader!./wheather.page.html */ "./node_modules/raw-loader/index.js!./src/app/wheather/wheather.page.html"),
            styles: [__webpack_require__(/*! ./wheather.page.scss */ "./src/app/wheather/wheather.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobPro"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"], _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_10__["OpenNativeSettings"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"]])
    ], WheatherPage);
    return WheatherPage;
}());



/***/ })

}]);
//# sourceMappingURL=wheather-wheather-module-es5.js.map