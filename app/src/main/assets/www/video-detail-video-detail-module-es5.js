(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-detail-video-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video-detail/video-detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-detail/video-detail.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{'VIDEO.video_detail' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <div class=\"mb-30\">\n        <ion-row class=\"align-items-stretch\">\n          <ion-col size=\"12\" *ngIf=\"youtube_video\">\n            <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-margin-bottom\">\n              <!--<video width=\"100%\" height=\"100%\" controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\">-->\n              <!--<source  src=\"https://s3.wasabisys.com/churchbase.site/churchchurch-site/mov_bbb.mp4\" type=\"video/mp4\">-->\n              <!--</video>-->\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\n                        [src]=\"video_url\"\n                        frameborder=\"0\" allowfullscreen=\"\"></iframe>\n              </div>\n              <ion-card-content>\n                <ion-card-title class=\"heading4\">{{youtube_video[0].snippet.title}}</ion-card-title>\n                <p><b>{{appService.getDateTimeFormat(youtube_video[0].contentDetails.videoPublishedAt)}}</b></p>\n                <p>{{youtube_video[0].snippet.description}}</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n\n          <ion-col size=\"12\" *ngIf=\"vimeo_video\">\n            <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-margin-bottom\">\n              <!--<video width=\"100%\" height=\"100%\" controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\">-->\n              <!--<source  src=\"https://s3.wasabisys.com/churchbase.site/churchchurch-site/mov_bbb.mp4\" type=\"video/mp4\">-->\n              <!--</video>-->\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\n                        [src]=\"video_url\"\n                        frameborder=\"0\" allowfullscreen=\"\"></iframe>\n              </div>\n              <ion-card-content>\n                <ion-card-title class=\"heading4\">{{vimeo_video.name}}</ion-card-title>\n                <p><b>{{appService.getDateTimeFormat(vimeo_video.created_time)}}</b></p>\n                <p>{{vimeo_video.description}}</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var AppService = /** @class */ (function () {
    function AppService() {
    }
    // getDateTimeFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date).format('dddd, MM/DD/YY, hh:mm A');
    //   } else {
    //     return moment(date).format('MMMM DD, YYYY, hh:mm A');
    //   }
    // }
    // getDateFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date).format('dddd, MM/DD/YY');
    //   } else {
    //     return moment(date).format('MMMM DD, YYYY');
    //   }
    // }
    // getTimeFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date, 'HH:MM').format('hh:mm A');
    //   } else {
    //     return moment(date, 'HH:MM').format('hh:mm A');
    //   }
    // }
    // getGroupsTimeFormat(date) {
    //   let time = moment(date, 'hh:mm A');
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(time, 'HH:MM').format('hh:mm A');
    //   } else {
    //     return moment(time, 'HH:MM').format('hh:mm A');
    //   }
    // }
    AppService.prototype.getGroupsTimeFormat = function (date) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format('HH:mm');
        }
        // let time = moment(date, 'hh:mm A');
        // if (localStorage.getItem('isDateTimeFormat') == 'true') {
        //   return moment(time, 'HH:MM').format('hh:mm A');
        // } else {
        //   return moment(time, 'HH:MM').format('hh:mm A');
        // }
    };
    AppService.prototype.getTimeFormat = function (time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    };
    AppService.prototype.getDateFormat = function (date) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    };
    AppService.prototype.getDateTimeFormat = function (dateAndTime) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(dateAndTime).format(dateFormat + ' ' + 'hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(dateAndTime).format(dateFormat + ' ' + 'HH:mm');
        }
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/video-detail/video-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/video-detail/video-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailPageModule", function() { return VideoDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-detail.page */ "./src/app/video-detail/video-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _video_detail_page__WEBPACK_IMPORTED_MODULE_6__["VideoDetailPage"]
    }
];
var VideoDetailPageModule = /** @class */ (function () {
    function VideoDetailPageModule() {
    }
    VideoDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_detail_page__WEBPACK_IMPORTED_MODULE_6__["VideoDetailPage"]]
        })
    ], VideoDetailPageModule);
    return VideoDetailPageModule;
}());



/***/ }),

/***/ "./src/app/video-detail/video-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/video-detail/video-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWRldGFpbC92aWRlby1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-detail/video-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/video-detail/video-detail.page.ts ***!
  \***************************************************/
/*! exports provided: VideoDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailPage", function() { return VideoDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");












var VideoDetailPage = /** @class */ (function () {
    function VideoDetailPage(route, loader, dom, storage, appService, sermonsService, common, location, event_provider) {
        this.route = route;
        this.loader = loader;
        this.dom = dom;
        this.storage = storage;
        this.appService = appService;
        this.sermonsService = sermonsService;
        this.common = common;
        this.location = location;
        this.event_provider = event_provider;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_8__;
        this.page_title = "";
    }
    VideoDetailPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // assigning data from URL Params
                this.id = this.route.snapshot.paramMap.get('id');
                this.page_id = this.route.snapshot.paramMap.get('page_id');
                this.loader.presentLoading().then(function () {
                });
                this.event_provider.getChurchData.subscribe(function (res) {
                    if (!(Object.keys(res).length === 0)) {
                        _this.ch_id = res.church.ch_id;
                        _this.common.store_app_pages(res.apppages, 'Video');
                        // let app_pages = res.apppages.filter(x => x.name === 'Video');
                        var app_pages = res.apppages.filter(function (x) { return x.id === _this.page_id; });
                        if (app_pages[0]) {
                            _this.page_title = app_pages[0].title;
                            // getting data according to platform
                            if (app_pages[0].feed_type === "youtube_channel") {
                                _this.source = "youtube_channel";
                                _this.getYoutubeChannelVideos(app_pages[0].url);
                            }
                            else if (app_pages[0].feed_type === "youtube_playlist") {
                                _this.source = "youtube_channel";
                                _this.getYoutubePlaylistVideos(app_pages[0].url);
                            }
                            else if (app_pages[0].feed_type === "youtube_user") {
                                _this.source = "youtube_channel";
                                _this.getYoutubeUserVideos(app_pages[0].url);
                            }
                            else if (app_pages[0].feed_type === "vimeo_channel" || app_pages[0].feed_type === "vimeo_showcase") {
                                _this.source = "vimeo_channel";
                                _this.getVimeoChannelVideos(_this.id);
                            }
                            else if (app_pages[0].feed_type === "vimeo_user") {
                                _this.source = "vimeo_user";
                                _this.getVimeoChannelVideos(_this.id);
                            }
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    // fetching youtube channel data
    VideoDetailPage.prototype.getYoutubeChannelVideos = function (base_url) {
        var _this = this;
        //ZB changes 
        if (base_url.includes('@')) {
            this.sermonsService.getChannelId(base_url).subscribe(function (res) {
                base_url = res;
            });
        }
        setTimeout(function () {
            _this.sermonsService.getYoutubeChannel(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var youtube_playlist;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    youtube_playlist = res.data.items[0].contentDetails.relatedPlaylists.uploads;
                    this.sermonsService.getYoutubePlaylist(youtube_playlist).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var video, parse;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            video = res.result.items.filter(function (x) { return x.id === _this.id; });
                            if (video.length > 0) {
                                this.video_url = "https://www.youtube.com/embed/" + video[0].contentDetails.videoId;
                                this.video_url = this.dom.bypassSecurityTrustResourceUrl(this.video_url);
                                this.youtube_video = video;
                                if (this.youtube_video[0].contentDetails.videoPublishedAt) {
                                    parse = this.youtube_video[0].contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                                    this.youtube_video[0].contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_8__(parse, "YYYY-MM-DD HH:mm:ss");
                                }
                            }
                            this.loader.stopLoading();
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        }, 3000);
        // ZB changes end
    };
    // fetching yourube playlist data
    VideoDetailPage.prototype.getYoutubePlaylistVideos = function (base_url) {
        var _this = this;
        this.sermonsService.getYoutubePlaylist(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var video, parse;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                video = res.result.items.filter(function (x) { return x.id === _this.id; });
                if (video.length > 0) {
                    this.video_url = "https://www.youtube.com/embed/" + video[0].contentDetails.videoId;
                    this.video_url = this.dom.bypassSecurityTrustResourceUrl(this.video_url);
                    this.youtube_video = video;
                    if (this.youtube_video[0].contentDetails.videoPublishedAt) {
                        parse = this.youtube_video[0].contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                        this.youtube_video[0].contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_8__(parse, "YYYY-MM-DD HH:mm:ss");
                    }
                }
                this.loader.stopLoading();
                return [2 /*return*/];
            });
        }); });
    };
    VideoDetailPage.prototype.getYoutubeUserVideos = function (user_id) {
        var _this = this;
        this.sermonsService.getYoutubeUserPlaylist(user_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var youtube_playlist;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                youtube_playlist = res.data.items[0].contentDetails.relatedPlaylists.uploads;
                this.sermonsService.getYoutubePlaylist(youtube_playlist).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var video, parse;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        video = res.result.items.filter(function (x) { return x.id === _this.id; });
                        if (video.length > 0) {
                            this.video_url = "https://www.youtube.com/embed/" + video[0].contentDetails.videoId;
                            this.video_url = this.dom.bypassSecurityTrustResourceUrl(this.video_url);
                            this.youtube_video = video;
                            if (this.youtube_video[0].contentDetails.videoPublishedAt) {
                                parse = this.youtube_video[0].contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                                this.youtube_video[0].contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_8__(parse, "YYYY-MM-DD HH:mm:ss");
                            }
                        }
                        this.loader.stopLoading();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    // fetching vimeo channel data
    VideoDetailPage.prototype.getVimeoChannelVideos = function (id) {
        var _this = this;
        var url = "https://api.vimeo.com/videos/" + id;
        this.sermonsService.getVimeoChannel(url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var parse;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.video_url = "https://player.vimeo.com/video/" + id;
                this.video_url = this.dom.bypassSecurityTrustResourceUrl(this.video_url);
                this.vimeo_video = res.result;
                if (this.vimeo_video.created_time) {
                    parse = this.vimeo_video.created_time.replace('T', ' ').replace('Z', '');
                    this.vimeo_video.created_time = moment__WEBPACK_IMPORTED_MODULE_8__(parse, "YYYY-MM-DD HH:mm:ss");
                }
                this.loader.stopLoading();
                return [2 /*return*/];
            });
        }); });
    };
    // navigating to back page
    VideoDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    VideoDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__["EventProviderService"] }
    ]; };
    VideoDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-detail',
            template: __webpack_require__(/*! raw-loader!./video-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/video-detail/video-detail.page.html"),
            styles: [__webpack_require__(/*! ./video-detail.page.scss */ "./src/app/video-detail/video-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__["EventProviderService"]])
    ], VideoDetailPage);
    return VideoDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-detail-video-detail-module-es5.js.map