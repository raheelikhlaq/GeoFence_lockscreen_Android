(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-archive-video-archive-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video-archive/video-archive.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-archive/video-archive.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Video')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{page_name}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Video')\" slot=\"start\">{{page_name}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" *ngIf=\"source === 'feed' && !newFeeds\">\n                <h4 class=\"heading4\">{{'VIDEO.no_video_available' | translate}}</h4>\n            </ion-card>\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" *ngIf=\"source === 'youtube_channel' && !youtube_videos\">\n                <h4 class=\"heading4\">{{'VIDEO.no_video_available' | translate}}</h4>\n            </ion-card>\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" *ngIf=\"source === 'vimeo_channel' && !vimeo_videos\">\n                <h4 class=\"heading4\">{{'VIDEO.no_video_available' | translate}}</h4>\n            </ion-card>\n\n            <ion-infinite-scroll threshold=\"100px\" *ngIf=\"next_page_availble\" (ionInfinite)=\"loadData($event,source)\">\n                <ion-infinite-scroll-content\n                        loadingSpinner=\"bubbles\"\n                        loadingText=\"\">\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n\n            <ion-row class=\"align-items-stretch\" *ngIf=\"newFeeds\">\n                <ion-col [size]=\"12\" [sizeLg]=\"4\" *ngFor=\"let feed of newFeeds\">\n                    <ion-card (click)=\"gotoDetail(feed.id_series, feed.pubDate, feed.id)\"\n                              class=\"ionCard ionCard--audio ion-margin-bottom\">\n                        <div *ngIf=\"feed.thumbnail\" class=\"ionCard__imgDiv\">\n                            <img  [src]=\"feed.thumbnail\"/>\n                        </div>\n                        <ion-card-content class=\"ion-no-padding\">\n                            <ion-item class=\"ionMedia\" lines=\"none\">\n                                <div\n                                        class=\"ionMedia__media ionMedia__media--dark ionMedia__media--small\">\n                                    <ion-icon name=\"videocam\" size=\"small\"\n                                              class=\"ionMedia__icon\"></ion-icon>\n                                </div>\n                                <ion-label>\n                                    <h3 class=\"ionMedia__heading ion-text-uppercase\">\n                                        {{feed.name}}\n                                    </h3>\n                                    <p class=\"ionMedia__text\">{{appService.getDateTimeFormat(feed.created_at)}}</p>\n                                    <p class=\"ionMedia__text\">{{feed.creator ? feed.creator : \"\"}}</p>\n                                </ion-label>\n                            </ion-item>\n                            <div class=\"ionCard__topRight\">\n                            </div>\n                            <div class=\"imgDiv audioImg\">\n                                <img src=\"../../assets/img/audio_icon.png\" class=\"imgDiv__img\">\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"align-items-stretch\" *ngIf=\"youtube_videos\">\n                <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngFor=\"let video of youtube_videos\">\n                    <ion-card class=\"ionCard cursor-pointer ion-margin-bottom\" (click)=\"gotoYoutubeDetail(video.id)\">\n                        <div class=\"ionCard__imgDiv\">\n                            <img *ngIf=\"video.snippet.thumbnails\" [src]=\"video.snippet.thumbnails.high.url\"/>\n                        </div>\n                        <ion-card-content class=\"ion-no-padding\">\n                            <ion-card-title class=\"heading4\">{{video.snippet.title}}</ion-card-title>\n                            <p><b>{{appService.getDateTimeFormat(video.contentDetails.videoPublishedAt)}}</b></p>\n                            <p>{{video.snippet.description}}</p>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"align-items-stretch\" *ngIf=\"vimeo_videos\">\n                <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngFor=\"let video of vimeo_videos\">\n                    <ion-card class=\"ionCard cursor-pointer ion-margin-bottom\" (click)=\"gotoVimeoDetail(video.uri)\">\n                        <div class=\"ionCard__imgDiv\">\n                            <img *ngIf=\"video.pictures.sizes\" [src]=\"video.pictures.sizes[5].link\"/>\n                        </div>\n                        <ion-card-content class=\"ion-no-padding\">\n                            <ion-card-title class=\"heading4\">{{video.name}}</ion-card-title>\n                            <p><b>{{appService.getDateTimeFormat(video.created_time)}}</b></p>\n                            <p>{{video.description}}</p>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->\n"

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

/***/ "./src/app/video-archive/video-archive.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/video-archive/video-archive.module.ts ***!
  \*******************************************************/
/*! exports provided: VideoArchivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoArchivePageModule", function() { return VideoArchivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_archive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-archive.page */ "./src/app/video-archive/video-archive.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _video_archive_page__WEBPACK_IMPORTED_MODULE_6__["VideoArchivePage"]
    }
];
var VideoArchivePageModule = /** @class */ (function () {
    function VideoArchivePageModule() {
    }
    VideoArchivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_archive_page__WEBPACK_IMPORTED_MODULE_6__["VideoArchivePage"]]
        })
    ], VideoArchivePageModule);
    return VideoArchivePageModule;
}());



/***/ }),

/***/ "./src/app/video-archive/video-archive.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/video-archive/video-archive.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWFyY2hpdmUvdmlkZW8tYXJjaGl2ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-archive/video-archive.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/video-archive/video-archive.page.ts ***!
  \*****************************************************/
/*! exports provided: VideoArchivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoArchivePage", function() { return VideoArchivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


















var VideoArchivePage = /** @class */ (function () {
    function VideoArchivePage(location, storage, loader, sermonsService, router, appService, toast, common, dom, event_provider, analytics, platform, device, translate, route, http) {
        this.location = location;
        this.storage = storage;
        this.loader = loader;
        this.sermonsService = sermonsService;
        this.router = router;
        this.appService = appService;
        this.toast = toast;
        this.common = common;
        this.dom = dom;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.route = route;
        this.http = http;
        this.vimeo_videos = [];
        this.moment = moment__WEBPACK_IMPORTED_MODULE_9__;
        this.page_in_home_tabs = false;
        this.next_page_availble = false;
        this.page = 1;
        this.pageCount = 1;
        this.videos = [];
        this.stopLoader = false;
        this.getAlertTranslation();
        this.checkIfPageOpenedInTab();
    }
    VideoArchivePage.prototype.ngOnInit = function () {
        var _this = this;
        // assigning data from URL Params
        this.page_id = this.route.snapshot.paramMap.get('page_id');
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    this.checkUrlAndFetchData(res);
                }
                return [2 /*return*/];
            });
        }); });
        this.event_provider.isHomeEnable.subscribe(function (value) {
            _this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
        this.getUser();
    };
    VideoArchivePage.prototype.checkUrlAndFetchData = function (res) {
        var _this = this;
        this.ch_id = res.church.ch_id;
        if (res.is_wordpress_enable === '1') {
            this.is_wordpress_enable = true;
        }
        else {
            this.is_wordpress_enable = false;
        }
        this.theme = res.church;
        // saving app pages in local storage through service
        this.common.store_app_pages(res.apppages, 'Video');
        this.storage.get('app_pages').then(function (res) {
            var app_pages = res.find(function (x) { return x.id === _this.page_id; }); //  // Filtering out VIDEO page from app pages
            if (app_pages) {
                _this.apppage_id = app_pages.id;
                _this.banner_image = app_pages.website_banner;
                _this.banner_desc = app_pages.banner_description;
                _this.banner_title = app_pages.banner_title;
                _this.page_name = app_pages.title;
                _this.custom_name = app_pages.name;
                _this.app_pagesURL = app_pages.url;
                _this.app_pagesShowcase = app_pages.home_menu_image;
                if (app_pages.password_protection_toggle === 'true') {
                    _this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
                // getting data according to platform
                if (app_pages.feed_type === "youtube_channel") {
                    _this.source = "youtube_channel";
                    _this.getYoutubeChannelVideos(app_pages.url);
                }
                else if (app_pages.feed_type === "youtube_playlist") {
                    _this.source = "youtube_channel";
                    _this.getYoutubePlaylistVideos(app_pages.url);
                }
                else if (app_pages.feed_type === "youtube_user") {
                    _this.source = "youtube_channel";
                    _this.getYoutubeUserVideos(app_pages.url);
                }
                else if (app_pages.feed_type === "vimeo_channel") {
                    _this.source = "vimeo_channel";
                    _this.getVimeoChannelVideos(app_pages.url, 1);
                }
                else if (app_pages.feed_type === "vimeo_user") {
                    _this.source = "vimeo_user";
                    _this.getVimeoUserVideos(app_pages.url, 1);
                }
                else if (app_pages.feed_type === "vimeo_showcase") {
                    _this.source = "vimeo_showcase";
                    _this.getVimeoShowcaseVideos(app_pages.url, app_pages.home_menu_image, 1);
                }
                else {
                    _this.source = "feed";
                    var sermon_url = app_pages.url;
                    if (sermon_url.includes('.rss')) {
                        // if url is .rss feed
                        _this.getRss(_this.apppage_id, _this.ch_id);
                    }
                    else if (sermon_url.includes('.xml')) {
                        // if url is .xml feed
                        _this.getXMLRss(sermon_url);
                    }
                    else {
                        if (!app_pages.url.includes("wasabisys")) {
                            if (_this.is_wordpress_enable) {
                                _this.getDBAudio();
                            }
                            else if (!_this.is_wordpress_enable) {
                                _this.getSermonsFromWordpress(sermon_url);
                            }
                        }
                    }
                }
            }
        });
    };
    VideoArchivePage.prototype.getDBAudio = function () {
        var _this = this;
        this.loader.presentLoading().then(function () {
            var self = _this;
            var data = {
                church_id: _this.ch_id,
                page: _this.page,
            };
            // fetching data through service
            self.sermonsService.getCMSAudioVideo(data).subscribe(function (res) {
                if (res.status) {
                    // Assigning data to variable
                    _this.allSermons = res.sermons;
                    _this.total_page_in_pagination = res.pages;
                    if (self.allSermons.length != 0) {
                        self.allSermons = self.allSermons.filter(function (x) { return x.sermon_video_url != null; });
                        var count = 1;
                        var _loop_1 = function (i) {
                            var body = JSON.stringify({
                                church_id: self.ch_id,
                                apppage_id: self.apppage_id,
                                name: self.allSermons[i].title,
                                link: self.allSermons[i].sermon_video_url,
                                feed_type: 'video',
                                pageorder: i
                            });
                            _this.allSermons = _this.allSermons.filter(function (y) { return self.allSermons[i].sermon_video_url != null; });
                            _this.newFeeds = _this.allSermons;
                            _this.newFeeds.map(function (x) {
                                x['video_link'] = _this.dom.bypassSecurityTrustUrl(x.sermon_video_url); // passing video url from dom sanitizer for security purpose
                                x['creator'] = x.author ? x.author : '';
                                x['pubDate'] = x.date;
                                x['name'] = x.title;
                                x['thumbnail'] = x.featured_media ? x.featured_media : '';
                            });
                        };
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every Video Post
                        for (var i = 0; i < self.allSermons.length; i++) {
                            _loop_1(i);
                        }
                        _this.loader.stopLoading();
                    }
                    else {
                        _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.NoAudio : 'No Audio Available'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        _this.loader.stopLoading();
                    }
                }
            });
        });
    };
    VideoArchivePage.prototype.checkIfPageOpenedInTab = function () {
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    };
    VideoArchivePage.prototype.getAlertTranslation = function () {
        var _this = this;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    };
    // navigating to detail page for feed
    VideoArchivePage.prototype.gotoDetail = function (item, publishDate, feed_id) {
        var _this = this;
        if (item === void 0) { item = null; }
        if (publishDate === void 0) { publishDate = null; }
        this.loader.presentLoading().then(function () {
            _this.router.navigate(['/video-archive-detail', {
                    idseries: item ? item : '',
                    date: publishDate ? publishDate : '',
                    feed_id: feed_id,
                    apppage_id: _this.apppage_id
                }]);
            _this.loader.stopLoading();
        });
    };
    // navigating to detail page for youtube
    VideoArchivePage.prototype.gotoYoutubeDetail = function (id) {
        var _this = this;
        if (id === void 0) { id = null; }
        this.loader.presentLoading().then(function () {
            _this.router.navigate(['/video-detail', { id: id, page_id: _this.page_id }]);
            _this.loader.stopLoading();
        });
    };
    // fetching yourube playlist data
    VideoArchivePage.prototype.getYoutubePlaylistVideos = function (base_url) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getYoutubePlaylist(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (!(Object.keys(res.result).length === 0)) {
                        res.result.items.map(function (x) {
                            if (x.contentDetails.videoPublishedAt) {
                                var parse = x.contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                                x.contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                            }
                            if (Array.isArray(x.snippet.thumbnails)) {
                                x.snippet.thumbnails = {};
                                x.snippet.thumbnails['high'] = {};
                                x.snippet.thumbnails.high['url'] = "../../assets/img/live_stream_bg_2.jpg";
                            }
                        });
                        this.youtube_videos = res.result.items;
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    // navigating to detail page
    VideoArchivePage.prototype.gotoVimeoDetail = function (id) {
        var _this = this;
        if (id === void 0) { id = null; }
        var video_id = id.split("/");
        this.loader.presentLoading().then(function () {
            _this.router.navigate(['/video-detail', { id: video_id[2], page_id: _this.page_id }]);
            _this.loader.stopLoading();
        });
    };
    VideoArchivePage.prototype.getYoutubeUserVideos = function (user_id) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getYoutubeUserPlaylist(user_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var youtube_playlist;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res && res.status === true) {
                        youtube_playlist = res.data.items[0].contentDetails.relatedPlaylists.uploads;
                        this.sermonsService.getYoutubePlaylist(youtube_playlist).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (!(Object.keys(res.result).length === 0)) {
                                    this.youtube_videos = res.result.items;
                                    this.youtube_videos.map(function (x) {
                                        if (x.contentDetails.videoPublishedAt) {
                                            var parse = x.contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                                            x.contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                                        }
                                    });
                                }
                                this.loader.stopLoading();
                                return [2 /*return*/];
                            });
                        }); });
                    }
                    else {
                        this.loader.stopLoading();
                    }
                    return [2 /*return*/];
                });
            }); });
        });
    };
    //  getChannelId(url) {
    //     console.log('inside the get chnnel id');
    //     let  channelid;
    //     var subject = new Subject<string>();
    //     this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${url}&type=channel&key=${environment.youtube_api_key}`).subscribe(async(res:any)=>{
    //     if(res.items.length === 0){
    //           throw new Error(`Channel not found: ${url}`);
    //     }
    //     channelid = res.items[0].id.channelId;
    //     subject.next(channelid);
    //     });
    //     return subject.asObservable();
    // }
    // fetching youtube channel data
    VideoArchivePage.prototype.getYoutubeChannelVideos = function (base_url) {
        var _this = this;
        //ZB changes 
        this.loader.presentLoading().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                            if (res && res.status === true) {
                                youtube_playlist = res.data.items[0].contentDetails.relatedPlaylists.uploads;
                                this.sermonsService.getYoutubePlaylist(youtube_playlist).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        if (!(Object.keys(res.result).length === 0)) {
                                            this.youtube_videos = res.result.items;
                                            this.youtube_videos.map(function (x) {
                                                if (x.contentDetails.videoPublishedAt) {
                                                    var parse = x.contentDetails.videoPublishedAt.replace('T', ' ').replace('Z', '');
                                                    x.contentDetails.videoPublishedAt = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                                                }
                                            });
                                        }
                                        this.loader.stopLoading();
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                            else {
                                this.loader.stopLoading();
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }, 3000);
                return [2 /*return*/];
            });
        }); });
    };
    VideoArchivePage.prototype.loadData = function (event, source) {
        this.page = this.page + 1;
        if (this.next_page_availble) {
            if (source === 'vimeo_channel') {
                this.getVimeoChannelVideos(this.app_pagesURL, this.page);
                event.target.complete();
            }
            if (source === 'vimeo_user') {
                this.getVimeoUserVideos(this.app_pagesURL, this.page);
                event.target.complete();
            }
            if (source === 'vimeo_showcase') {
                this.getVimeoShowcaseVideos(this.app_pagesURL, this.app_pagesShowcase, this.page);
                event.target.complete();
            }
        }
        else {
            event.target.complete();
        }
    };
    // fetching vimeo user data
    VideoArchivePage.prototype.getVimeoChannelVideos = function (base_url, pages) {
        var _this = this;
        var page = pages;
        var url = null;
        if (page === 1) {
            url = "https://api.vimeo.com/channels/" + base_url + "/videos?per_page=20";
        }
        else {
            url = "https://api.vimeo.com/channels/" + base_url + "/videos?per_page=20&page=" + page;
        }
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getVimeoChannel(url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res.result.error && res.result.error !== "") {
                        this.toast.presentToastWithOptions((res.result.error ? res.result.error : 'No Audio Available'), 'Warning Message', 'warning');
                        this.loader.stopLoading();
                    }
                    else {
                        this.vimeo_videos = this.vimeo_videos.concat(res.result.data);
                        this.vimeo_videos.map(function (x) {
                            if (x.created_time) {
                                if (x.created_time.length !== 0) {
                                    var parse = x.created_time;
                                    x.created_time = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                                }
                            }
                        });
                        if (res.result.paging.next !== null) {
                            this.next_page_availble = true;
                        }
                        else {
                            this.loader.stopLoading();
                        }
                        this.loader.stopLoading();
                    }
                    return [2 /*return*/];
                });
            }); });
        });
    };
    // fetching vimeo channel data
    VideoArchivePage.prototype.getVimeoUserVideos = function (base_url, pages) {
        var _this = this;
        var page = pages;
        var url = null;
        if (page === 1) {
            url = "https://api.vimeo.com/users/" + base_url + "/videos?per_page=20";
        }
        else {
            url = "https://api.vimeo.com/users/" + base_url + "/videos?per_page=20&page=" + page;
        }
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getVimeoUser(url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.vimeo_videos = this.common.checkData(res.result);
                    this.vimeo_videos.map(function (x) {
                        if (x.created_time) {
                            if (x.created_time.length !== 0) {
                                var parse = x.created_time;
                                x.created_time = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                            }
                        }
                    });
                    if (res.result.paging.next !== null) {
                        this.next_page_availble = true;
                    }
                    else {
                        this.loader.stopLoading();
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    // fetching vimeo showcase data
    VideoArchivePage.prototype.getVimeoShowcaseVideos = function (user_id, showcase_id, pages) {
        var _this = this;
        var page = pages;
        var url = null;
        if (page === 1) {
            url = "https://api.vimeo.com/users/" + user_id + "/albums/" + showcase_id + "/videos";
        }
        else {
            url = "https://api.vimeo.com/users/" + user_id + "/albums/" + showcase_id + "/videos?per_page=20&page=" + page;
        }
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getVimeoUser(url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.vimeo_videos = this.common.checkData(res.result);
                    this.vimeo_videos.map(function (x) {
                        if (x.created_time) {
                            if (x.created_time.length !== 0) {
                                var parse = x.created_time;
                                x.created_time = moment__WEBPACK_IMPORTED_MODULE_9__(parse, "YYYY-MM-DD HH:mm:ss");
                            }
                        }
                    });
                    if (res.result.paging.next !== null) {
                        this.next_page_availble = true;
                    }
                    else {
                        this.loader.stopLoading();
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    VideoArchivePage.prototype.getRss = function (id, church_id) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "rss";
            var self = _this;
            // fetching data through service
            _this.sermonsService.get_rss(id, church_id).subscribe(function (res) {
                if (res.audio) {
                    _this.allSermons = res.audio.channel.item;
                    if (self.allSermons.length != 0) {
                        self.allSermons = self.allSermons.filter(function (x) { return x.link != ''; });
                        var count = 1;
                        var _loop_2 = function (i) {
                            var body = JSON.stringify({
                                church_id: self.ch_id,
                                apppage_id: self.apppage_id,
                                name: self.allSermons[i].title,
                                link: self.allSermons[i].enclosure['@attributes'].url,
                                feed_type: 'video',
                                pageorder: i
                            });
                            self.sermonsService.create_Audio_Feed_Rss(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (i === (self.allSermons.length - 1)) {
                                        // if loop iteration is equal to length of data, its time to fetch what we have saved
                                        self.load_rss_feed();
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                            count++;
                        };
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every Video Post
                        for (var i = 0; i < self.allSermons.length; i++) {
                            _loop_2(i);
                        }
                        _this.loader.stopLoading();
                    }
                }
            });
        });
    };
    VideoArchivePage.prototype.load_rss_feed = function () {
        var _this = this;
        var self = this;
        // Loading all saved Feeds
        var type = 'video';
        var body = type + '/' + this.apppage_id;
        self.sermonsService.get_feedsrss(body).subscribe(function (res) {
            if (res && res.feed) {
                var new_feed = res.feed;
                // Matching data we got from RSS and from Database
                // so that we only get data which we want, not the whole table
                new_feed.map(function (x) {
                    var video = _this.allSermons.filter(function (y) { return y.enclosure['@attributes'].url === x.link && y.title === x.name; });
                    if (video.length > 0) {
                        x['video_link'] = _this.dom.bypassSecurityTrustUrl(video[0].enclosure['@attributes'].url); // passing video url from dom sanitizer for security purpose
                        x['creator'] = video[0].author;
                    }
                    else {
                        x['status'] = false; //  // if current data does not match, we set status to false, by which we can filter required data later
                    }
                });
                // assigning only data whose status is not FALSE
                _this.newFeeds = new_feed.filter(function (x) { return x.status !== false; });
            }
        });
    };
    VideoArchivePage.prototype.getXMLRss = function (sermon_url) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "xml";
            var self = _this;
            _this.sermonsService.getrss(sermon_url).subscribe(function (res) {
                if (res && res.status === true && res.data && res.data.status === 'ok') {
                    _this.allSermons = res.data.items;
                    if (self.allSermons.length != 0) {
                        // filtering out data which have URL
                        self.allSermons = self.allSermons.filter(function (x) { return x.link != ''; });
                        var _loop_3 = function (i) {
                            var body = JSON.stringify({
                                church_id: self.ch_id,
                                apppage_id: self.apppage_id,
                                name: self.allSermons[i].title,
                                link: self.allSermons[i].link,
                                feed_type: 'video',
                                pageorder: i
                            });
                            self.sermonsService.create_Audio_Feeds(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (i === (self.allSermons.length - 1)) {
                                        // if loop iteration is equal to length of data, its time to fetch what we have saved
                                        self.load_xml_rss();
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        };
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every video Post
                        for (var i = 0; i < self.allSermons.length; i++) {
                            _loop_3(i);
                        }
                        _this.loader.stopLoading();
                    }
                }
            });
        });
    };
    VideoArchivePage.prototype.load_xml_rss = function () {
        var _this = this;
        var self = this;
        // Loading all saved Feeds
        self.sermonsService.get_feeds(this.apppage_id, 'video').subscribe(function (res) {
            if (res && res.feed) {
                var new_feed = res.feed;
                // Matching data we got from RSS and from Database
                // so that we only get data which we want, not the whole table
                new_feed.map(function (x) {
                    var audio = _this.allSermons.filter(function (y) { return y.link === x.link && y.title === x.name; });
                    if (audio.length > 0) {
                        x['link'] = _this.dom.bypassSecurityTrustUrl(audio[0].link); //  passing video url from dom sanitizer for security purpose
                        if (audio[0].thumbnail) {
                            x['thumbnail'] = _this.dom.bypassSecurityTrustUrl(audio[0].thumbnail);
                        }
                        x['creator'] = audio[0].author;
                    }
                    else {
                        x['status'] = false;
                    }
                });
                // assigning only data whose status is not FALSE
                _this.newFeeds = new_feed.filter(function (x) { return x.status !== false; });
            }
        });
    };
    VideoArchivePage.prototype.getSermonsFromWordpress = function (base_url) {
        var _this = this;
        this.link_type = "sermon";
        var self = this;
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getAllSermons(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var data, _loop_4, i;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    data = res.data;
                    self.allSermons = data.item;
                    if (self.allSermons.length != 0) {
                        self.allSermons = self.allSermons.filter(function (x) { return x.video_link != ''; });
                        _loop_4 = function (i) {
                            var body = JSON.stringify({
                                church_id: self.ch_id,
                                apppage_id: self.apppage_id,
                                name: self.allSermons[i].title,
                                link: self.allSermons[i].link,
                                feed_type: 'video',
                                pageorder: i
                            });
                            self.sermonsService.create_Video_Feeds(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    // iteration
                                    if (i === (self.allSermons.length - 1)) {
                                        // if loop iteration is equal to length of data, its time to fetch what we have saved
                                        self.load_feed();
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        };
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every video Post
                        for (i = 0; i < self.allSermons.length; i++) {
                            _loop_4(i);
                        }
                        this.loader.stopLoading();
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); }, function (err) {
                var message = err.message;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                _this.loader.stopLoading();
            });
        });
    };
    VideoArchivePage.prototype.load_feed = function () {
        var _this = this;
        var self = this;
        // Loading all saved Feeds
        self.sermonsService.get_feeds(this.apppage_id, 'video').subscribe(function (res) {
            var new_feed = res.feed;
            new_feed.map(function (x) {
                var video = _this.allSermons.find(function (y) { return y.link === x.link && y.title === x.name; });
                if (video) {
                    // sanitizing video url for security purpose
                    x['video_link'] = _this.dom.bypassSecurityTrustUrl(video.video_link);
                    x['creator'] = video['dc:creator'];
                    x['id_series'] = video['id_series'];
                    x['pubDate'] = video['pubDate'];
                    x['thumbnail'] = video['img_series'] ? video['img_series'] : '../../assets/img/live_stream_bg_2.jpg';
                }
                else {
                    x['status'] = false;
                }
            });
            // assigning only data whose status is not FALSE
            _this.newFeeds = new_feed.filter(function (x) { return x.status !== false; });
        });
    };
    // navigating to back page
    VideoArchivePage.prototype.gotobackPage = function () {
        this.location.back();
    };
    VideoArchivePage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    VideoArchivePage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.custom_name,
            custom_name: this.page_name,
            ip_address: "",
            device: device,
            device_id: dev_id,
            client_type: userId,
            event_type: ""
        });
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe(function (res) {
        });
    };
    VideoArchivePage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    VideoArchivePage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        this.event_provider.hidefooter(true, 'other');
    };
    VideoArchivePage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"] }
    ]; };
    VideoArchivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-archive',
            template: __webpack_require__(/*! raw-loader!./video-archive.page.html */ "./node_modules/raw-loader/index.js!./src/app/video-archive/video-archive.page.html"),
            styles: [__webpack_require__(/*! ./video-archive.page.scss */ "./src/app/video-archive/video-archive.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]])
    ], VideoArchivePage);
    return VideoArchivePage;
}());



/***/ })

}]);
//# sourceMappingURL=video-archive-video-archive-module-es5.js.map