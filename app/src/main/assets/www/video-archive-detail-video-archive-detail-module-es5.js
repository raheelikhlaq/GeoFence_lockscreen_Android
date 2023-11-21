(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-archive-detail-video-archive-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video-archive-detail/video-archive-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-archive-detail/video-archive-detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{'VIDEO.video_archive' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div class=\"page-wrapper\" >\n    <div class=\"app-container\" *ngIf=\"selectedSermon\">\n      <div class=\"ion-margin-bottom\">\n        <h2 class=\"heading2\">{{'VIDEO.video_archive' | translate}}</h2>\n      </div>\n      <div class=\"mb-30\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <!-- CARD FOR VIDEO-->\n            <ion-card\n                    class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\">\n              <div *ngIf=\"sermon_video_url\">\n                <video webkit-playsinline playsinline autoplay muted controls=\"controls\" preload=\"metadata\" *ngIf=\"wasabi\" width=\"100%\" height=\"100%\">\n                  <source  [src]=\"sermon_video_url\" type=\"video/mp4\">\n                </video>\n                <div *ngIf=\"!wasabi\" class=\"embed-responsive embed-responsive-16by9\">\n                  <iframe  class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\n                           [src]=\"sermon_video_url\"\n                           frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                </div>\n              </div>\n              <ion-card-content>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"sermon_title\"></ion-card-title>\n                    <p><b>{{sermon_speaker}}</b></p>\n                    <p>{{sermon_pubdate}}</p>\n                  </ion-col>\n                </ion-row>\n                <!--                                    COMMENT SECTION-->\n                <div class=\"ion-margin-bottom\">\n                  <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\"><span\n                          style=\"font-family: monospace;\">   </span>\n                    <ion-icon name=\"share\"></ion-icon>\n                  </ion-button>\n                  <ion-button (click)=\"showComments = !showComments;\" style=\"float: right\"\n                              class=\"commonBtn commonBtn--gray commonBtn--round\">\n                    <ion-icon slot=\"start\" name=\"chatbubbles\"></ion-icon>\n                    <span style=\"font-family: monospace;\"> </span>\n                  </ion-button>\n                </div>\n                <hr class=\"ionCard__divider hide-mobile\">\n                <ion-list lines=\"none\" class=\"ion-no-margin ion-no-padding\">\n                  <ion-item class=\"ionMedia\" *ngFor=\"let comment of comments\">\n                    <div class=\"ionMedia__media\">\n                      <ion-avatar slot=\"start\">\n                        <img src=\"../../assets/img/user_icon.png\">\n                      </ion-avatar>\n                    </div>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h3 class=\"ionMedia__heading\" *ngIf=\"comment.name && is_wordpress_enable\"> {{comment.name}}</h3>\n                      <h3 class=\"ionMedia__heading\" *ngIf=\"!comment.name && is_wordpress_enable\"> {{'Anonymous'}}</h3>\n                      <p>{{comment.comment}} </p>\n                      <p style=\" font-size: x-small\"\n                         class=\"ionMedia__text\">{{comment.comment_time}}</p>\n                    </ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"comments.length === 0\"\n                            class=\"inputField  inputField&#45;&#45;gray\" lines=\"none\">\n                    <ion-label class=\"ion-text-wrap\">\n                      <p><small>{{'VIDEO.nocommentsyet' | translate}}.....<br/>{{'VIDEO.bethefirstone' | translate}}.</small></p>\n                    </ion-label>\n                  </ion-item>\n                </ion-list>\n                <div class=\"chat-card-footer\">\n                  <ion-item class=\"inputField inputField--chatBox\" lines=\"none\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"../../assets/img/user_icon.png\">\n                    </ion-avatar>\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"comment\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\" inputmode=\"text\"\n                               placeholder=\"{{'VIDEO.comment' | translate}}\"></ion-input>\n                    <ion-button (click)=\"create_comment()\"\n                                class=\"commonBtn--transparent text-gray\">\n                      <ion-icon name=\"send\"></ion-icon>\n                    </ion-button>\n                  </ion-item>\n                </div>\n                <!--                                    COMMENT SECTION-->\n              </ion-card-content>\n            </ion-card>\n            <!-- CARD FOR Image-->\n            <ion-card *ngIf=\"!sermon_video_url && sermon_image\"\n                      class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\">\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <img class=\"embed-responsive-item\" [src]=\"sermon_image\"/>\n              </div>\n              <ion-card-content>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"sermon_title\"></ion-card-title>\n                    <p><b>{{sermon_speaker}}</b></p>\n                    <p>{{sermon_pubdate}}</p>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"ion-no-padding ion-text-md-right\">\n                    <ul class=\"list-inline ion-no-margin\">\n                      <li class=\"list-inline-item\" *ngIf=\"sermon_audio\">\n                        <ion-button [href]=\"sermon_audio\" target=\"_blank\"\n                                    class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                          <ion-icon name=\"headset\"></ion-icon>\n                        </ion-button>\n                      </li>\n                      <li class=\"list-inline-item\" *ngIf=\"sermon_notes\">\n                        <ion-button [href]=\"sermon_notes\" target=\"_blank\"\n                                    class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                          <ion-icon name=\"journal\"></ion-icon>\n                        </ion-button>\n                      </li>\n                    </ul>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <p class=\"font-weight-normal event-detail-content\" *ngIf=\"sermon_description\"\n               [innerHtml]=\"sermon_description\"></p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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

/***/ "./src/app/video-archive-detail/video-archive-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/video-archive-detail/video-archive-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: VideoArchiveDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoArchiveDetailPageModule", function() { return VideoArchiveDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_archive_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-archive-detail.page */ "./src/app/video-archive-detail/video-archive-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _video_archive_detail_page__WEBPACK_IMPORTED_MODULE_6__["VideoArchiveDetailPage"]
    }
];
var VideoArchiveDetailPageModule = /** @class */ (function () {
    function VideoArchiveDetailPageModule() {
    }
    VideoArchiveDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_archive_detail_page__WEBPACK_IMPORTED_MODULE_6__["VideoArchiveDetailPage"]]
        })
    ], VideoArchiveDetailPageModule);
    return VideoArchiveDetailPageModule;
}());



/***/ }),

/***/ "./src/app/video-archive-detail/video-archive-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/video-archive-detail/video-archive-detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWFyY2hpdmUtZGV0YWlsL3ZpZGVvLWFyY2hpdmUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-archive-detail/video-archive-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/video-archive-detail/video-archive-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: VideoArchiveDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoArchiveDetailPage", function() { return VideoArchiveDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_analytics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/ipaddress.service */ "./src/services/ipaddress.service.ts");
/* harmony import */ var src_services_socket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/socket.service */ "./src/services/socket.service.ts");



















var VideoArchiveDetailPage = /** @class */ (function () {
    function VideoArchiveDetailPage(route, loader, storage, sermonsService, dom, router, appService, location, toast, common, translate, event_provider, apiService, socket, analytics, platform, ipservice) {
        var _this = this;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.appService = appService;
        this.location = location;
        this.toast = toast;
        this.common = common;
        this.translate = translate;
        this.event_provider = event_provider;
        this.apiService = apiService;
        this.socket = socket;
        this.analytics = analytics;
        this.platform = platform;
        this.ipservice = ipservice;
        this.wasabi = false;
        this.recentSermons = [];
        this.isUserLoggedIn = false;
        this.showComments = false;
        this.comments = [];
        this.country = '';
        this.latitude = '';
        this.longitude = '';
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    VideoArchiveDetailPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var done;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // assigning data from URL Params
                        this.idseries = this.route.snapshot.paramMap.get('idseries');
                        this.urlPubDate = this.route.snapshot.paramMap.get('date');
                        this.feed_id = this.route.snapshot.paramMap.get('feed_id');
                        this.apppage_id = this.route.snapshot.paramMap.get('apppage_id');
                        this.apppage_id = +this.apppage_id;
                        // this.feed_id = +this.feed_id;
                        // getting theme from local storage
                        this.storage.get('theme').then(function (res) {
                            _this.ch_id = res.ch_id;
                            // saving app_pages
                            var body = JSON.stringify({ id: _this.ch_id });
                            _this.common.getTheme(body).subscribe(function (resa) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (resa) {
                                        this.common.store_app_pages(resa.apppages, 'Video');
                                        this.storage.get('app_pages').then(function (res) {
                                            var app_pages = res.filter(function (x) { return x.name === 'Video'; });
                                            if (app_pages[0]) {
                                                if (resa.is_wordpress_enable === '1') {
                                                    _this.is_wordpress_enable = true;
                                                    _this.getDBAudio();
                                                }
                                                else {
                                                    _this.is_wordpress_enable = false;
                                                    var sermon_url = app_pages[0].url;
                                                    if (sermon_url.includes('.rss') || sermon_url.includes('-rss')) {
                                                        // this.getRss(this.apppage_id, this.ch_id)
                                                        _this.getOneRss();
                                                    }
                                                    else if (sermon_url.includes('.xml')) {
                                                        _this.getXMLRss(sermon_url);
                                                    }
                                                    else {
                                                        _this.getSermonsFromWordpress(sermon_url);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                        });
                        // getting user data
                        this.getUser();
                        this.ipservice.getIpAddress().subscribe(function (res) {
                            // console.log('response from ip service is: ', res);
                            _this.ip = res['ip'];
                            _this.ipservice.getGEOLocation(_this.ip).subscribe(function (res2) {
                                // console.log('response from getgeolocation is: ', res2);
                                _this.country = res2['country'];
                                _this.latitude = res2['lat'];
                                _this.longitude = res2['lon'];
                            });
                        });
                        return [4 /*yield*/, this.sermonsService.getRecentSermons()];
                    case 1:
                        done = _a.sent();
                        if (done) {
                            this.recentSermons = done;
                        }
                        else {
                            this.recentSermons = this.recentSermons || [];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoArchiveDetailPage.prototype.getDBAudio = function () {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "rss";
            var self = _this;
            var data = {
                church_id: _this.ch_id,
                page: _this.apppage_id,
            };
            // fetching data through service
            self.apiService.getVideo(_this.ch_id, _this.feed_id).subscribe(function (res) {
                if (res.sermons) {
                    _this.selectedSermon = res.sermons;
                    _this.selectedSermon.link = _this.selectedSermon.sermon_video_url;
                    _this.comments = _this.selectedSermon.comments;
                    _this.UpdateTime();
                    self.setRssData();
                    _this.loader.stopLoading();
                }
            });
        });
    };
    VideoArchiveDetailPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (res) {
            if (res != null && res != 'guest') {
                _this.isUserLoggedIn = true;
                _this.account_donor_id = res.user.id;
                _this.auth = res.auth;
            }
        });
    };
    VideoArchiveDetailPage.prototype.getOneRss = function () {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "rss";
            var body = {
                church_id: _this.ch_id,
                apppage_id: _this.apppage_id,
                feed_id: _this.feed_id
            };
            _this.sermonsService.get_one_rss(JSON.stringify(body)).subscribe(function (res) {
                if (res.status) {
                    _this.selectedSermon = res.feed;
                    _this.comments = _this.selectedSermon.comments;
                    _this.setRssData();
                }
                _this.loader.stopLoading();
            });
        });
    };
    VideoArchiveDetailPage.prototype.getRss = function (id, church_id) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "rss";
            var self = _this;
            _this.sermonsService.get_rss(id, church_id).subscribe(function (res) {
                if (res.audio) {
                    _this.allSermons = res.audio.channel.item;
                    if (self.allSermons.length != 0) {
                        self.allSermons = self.allSermons.filter(function (x) { return x.enclosure['@attributes'].url != ''; });
                        var count = 1;
                        var _loop_1 = function (i) {
                            var body = JSON.stringify({
                                church_id: self.ch_id,
                                apppage_id: self.apppage_id,
                                name: self.allSermons[i].title,
                                link: self.allSermons[i].enclosure['@attributes'].url,
                                eed_type: 'video',
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
                            _loop_1(i);
                        }
                        _this.loader.stopLoading();
                    }
                }
            });
        });
    };
    //set Time Zone For Comments
    VideoArchiveDetailPage.prototype.UpdateTime = function () {
        var _this = this;
        this.comments.map(function (item) {
            var mytime = moment__WEBPACK_IMPORTED_MODULE_12__(item.comment_time);
            var time_diff = moment__WEBPACK_IMPORTED_MODULE_12__().utcOffset(); // in minutes
            if (time_diff != 0) {
                item.comment_time = moment__WEBPACK_IMPORTED_MODULE_12__(mytime).add((time_diff), 'minutes');
                item.comment_time = _this.appService.getDateTimeFormat(item.comment_time);
            }
            else {
                item.comment_time = _this.appService.getDateTimeFormat(item.comment_time);
            }
        });
    };
    VideoArchiveDetailPage.prototype.load_rss_feed = function () {
        var _this = this;
        var self = this;
        // Loading all saved Feeds
        self.sermonsService.get_feeds(this.apppage_id, 'video').subscribe(function (res) {
            if (res && res.feed) {
                var new_feed = res.feed;
                var video_1 = new_feed.find(function (x) { return x.id === _this.feed_id; });
                if (video_1) {
                    _this.selectedSermon = _this.allSermons.find(function (y) { return y.link === video_1.link && y.title === video_1.name; });
                    _this.comments = video_1.comments;
                    _this.UpdateTime();
                    self.setRssData();
                }
            }
        });
    };
    VideoArchiveDetailPage.prototype.getXMLRss = function (sermon_url) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.link_type = "xml";
            var self = _this;
            _this.sermonsService.getrss(sermon_url).subscribe(function (res) {
                if (res && res.status === true && res.data && res.data.status === 'ok') {
                    _this.allSermons = res.data.items;
                    if (self.allSermons.length != 0) {
                        self.allSermons = self.allSermons.filter(function (x) { return x.link != ''; });
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every video Post
                        self.sermonsService.get_feeds(_this.apppage_id, 'video').subscribe(function (res) {
                            if (res && res.feed) {
                                var new_feed = res.feed;
                                var video_2 = new_feed.find(function (x) { return x.id === _this.feed_id.toString(); });
                                if (video_2) {
                                    _this.selectedSermon = _this.allSermons.find(function (y) { return y.link === video_2.link && y.title === video_2.name; });
                                    _this.comments = video_2.comments;
                                    _this.UpdateTime();
                                    self.setRssData();
                                }
                            }
                        });
                        _this.loader.stopLoading();
                    }
                }
            });
        });
    };
    VideoArchiveDetailPage.prototype.getSermonsFromWordpress = function (base_url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, index;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.link_type = "sermon";
                self = this;
                index = 0;
                //  this.loader.presentLoading().then(() => {
                this.sermonsService.getAllSermons(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var data;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        data = res.data;
                        self.allSermons = data.item;
                        self.selectiveSermons = self.allSermons.filter(function (x) { return x.id_series === _this.idseries; });
                        self.selectedSermon = self.selectiveSermons.find(function (x) { return x.pubDate === _this.urlPubDate; });
                        this.setData();
                        // Loading all saved Feeds
                        self.sermonsService.get_feeds(this.apppage_id, 'video').subscribe(function (res) {
                            var new_feed = res.feed;
                            _this.newFeeds = new_feed.filter(function (x) { return x.id === _this.feed_id.toString(); });
                            _this.comments = _this.newFeeds[0].comments;
                            _this.UpdateTime();
                        });
                        return [2 /*return*/];
                    });
                }); }, function (err) {
                    var message = err.message;
                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    //    this.loader.stopLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    // setting data according to platform ( youtube, vimeo, wasabi)
    VideoArchiveDetailPage.prototype.setData = function () {
        var self = this;
        var youtube = 'youtube';
        var youtube2 = 'youtu.be';
        var vimeo = 'vimeo';
        var vimeo2 = 'www.vimeo';
        var vimeo3 = 'player.vimeo';
        if (self.selectedSermon.video_link != '') {
            if (self.selectedSermon.video_link.includes(youtube)) {
                this.sermon_video_url = self.selectedSermon.video_link.replace('watch?v=', 'embed/');
            }
            else if (self.selectedSermon.video_link.includes(youtube2)) {
                this.sermon_video_url = self.selectedSermon.video_link.replace('youtu.be/', 'www.youtube.com/embed/');
            }
            else if (self.selectedSermon.video_link.includes(vimeo)) {
                if (self.selectedSermon.video_link.includes(vimeo2)) {
                    this.sermon_video_url = self.selectedSermon.video_link.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                }
                else if (self.selectedSermon.video_link.includes(vimeo3)) {
                    if (!self.selectedSermon.video_link.includes("/video")) {
                        this.sermon_video_url = self.selectedSermon.video_link.replace('player.vimeo.com/', 'player.vimeo.com/video/');
                    }
                    else {
                        this.sermon_video_url = self.selectedSermon.video_link.replace('player.vimeo.com/', 'player.vimeo.com/');
                    }
                }
                else {
                    this.sermon_video_url = self.selectedSermon.video_link.replace('vimeo.com/', 'player.vimeo.com/video/');
                }
            }
            else {
                this.wasabi = true;
                this.sermon_video_url = self.selectedSermon.video_link;
            }
            // sanitizing video url for security purpose
            this.sermon_video_url = this.dom.bypassSecurityTrustResourceUrl(this.sermon_video_url);
        }
        self.sermon_title = self.selectedSermon.title;
        self.sermon_speaker = self.selectedSermon['dc:creator'];
        if (self.selectedSermon.pubDate != '') {
            self.sermon_pubdate = self.selectedSermon.pubDate.slice(0, 16);
        }
        if (self.selectedSermon.description != '') {
            self.sermon_description = self.selectedSermon.description;
        }
        if (self.selectedSermon.sermon_note) {
            if (self.selectedSermon.sermon_note != '') {
                self.sermon_notes = self.selectedSermon.sermon_note;
            }
        }
        if (self.selectedSermon.audio_link != '') {
            self.sermon_audio = self.selectedSermon.audio_link;
        }
        this.sermon_image = self.selectedSermon.img_series;
    };
    // setting RSS data according to platform ( youtube, vimeo, wasabi)
    VideoArchiveDetailPage.prototype.setRssData = function () {
        var self = this;
        var youtube = 'youtube';
        var youtube2 = 'youtu.be';
        var vimeo = 'vimeo';
        var vimeo2 = 'www.vimeo';
        var vimeo3 = 'player.vimeo';
        if (self.selectedSermon.link != '') {
            if (self.selectedSermon.link.includes(youtube)) {
                this.sermon_video_url = self.selectedSermon.link.replace('watch?v=', 'embed/');
            }
            else if (self.selectedSermon.link.includes(youtube2)) {
                this.sermon_video_url = self.selectedSermon.link.replace('youtu.be/', 'www.youtube.com/embed/');
            }
            else if (self.selectedSermon.link.includes(vimeo)) {
                if (self.selectedSermon.link.includes(vimeo2)) {
                    this.sermon_video_url = self.selectedSermon.link.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                }
                else if (self.selectedSermon.link.includes(vimeo3)) {
                    if (!self.selectedSermon.link.includes("/video")) {
                        this.sermon_video_url = self.selectedSermon.link.replace('player.vimeo.com/', 'player.vimeo.com/video/');
                    }
                    else {
                        this.sermon_video_url = self.selectedSermon.link.replace('player.vimeo.com/', 'player.vimeo.com/');
                    }
                }
                else {
                    this.sermon_video_url = self.selectedSermon.link.replace('vimeo.com/', 'player.vimeo.com/video/');
                }
            }
            else {
                this.wasabi = true;
                this.sermon_video_url = self.selectedSermon.link;
            }
            // sanitizing video url for security purpose
            this.sermon_video_url = this.dom.bypassSecurityTrustResourceUrl(this.sermon_video_url);
        }
        self.sermon_title = self.selectedSermon.title;
        if (this.is_wordpress_enable) {
            self.sermon_speaker = self.selectedSermon.wpfc_preacher;
        }
        else {
            self.sermon_speaker = self.selectedSermon.description;
        }
        if (self.selectedSermon.pubDate) {
            self.sermon_pubdate = self.selectedSermon.pubDate.slice(0, 16);
        }
        if (self.selectedSermon.description != '') {
            self.sermon_description = self.selectedSermon.description;
        }
    };
    VideoArchiveDetailPage.prototype.create_comment = function () {
        var _this = this;
        if (!this.comment) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.comment_field_empty : 'Comment field is empty'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        }
        else {
            if (this.isUserLoggedIn) {
                if (this.is_wordpress_enable) {
                    // preparing data for creating comment
                    var body = JSON.stringify({
                        auth: 'Bearer ' + this.auth.access_token,
                        church_id: this.ch_id,
                        sermon_id: this.feed_id,
                        page_type: 'video',
                        account_donor_id: this.account_donor_id,
                        comment: this.comment
                    });
                    // calling service to save comment data
                    this.sermonsService.create_Audio_Feed_comment_DB(body).subscribe(function (res) {
                        // Calling ngOnInit() function to load the page so that latest data is loaded which will have saved comment too
                        _this.ngOnInit();
                        // emptying comment variable after comment has been saved
                        _this.comment = '';
                    });
                }
                else {
                    var body = JSON.stringify({
                        auth: 'Bearer ' + this.auth.access_token,
                        church_id: this.ch_id,
                        feed_id: this.feed_id,
                        account_donor_id: this.account_donor_id,
                        comment: this.comment
                    });
                    this.sermonsService.create_Audio_Feed_comment(body).subscribe(function (res) {
                        // refreshing sermons data after comment added
                        _this.ngOnInit();
                        _this.comment = '';
                    });
                }
            }
            else {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_comment : 'Login to Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.router.navigate(['/login']);
            }
        }
    };
    // navigating to back page
    VideoArchiveDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    VideoArchiveDetailPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // setting start time for analytics
                this.getUser();
                this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
                return [2 /*return*/];
            });
        });
    };
    VideoArchiveDetailPage.prototype.ionViewDidLeave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sendLiveStreamingAnalytics();
                return [2 /*return*/];
            });
        });
    };
    VideoArchiveDetailPage.prototype.sendLiveStreamingAnalytics = function () {
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_12__["duration"](end_time_analytics.diff(this.start_time_analytics)).asMilliseconds();
        var body = {
            duration: moment__WEBPACK_IMPORTED_MODULE_12__(duration).format('mm:ss'),
            page_name: this.page_name,
            module: 'video-archive',
            current_show_name: this.sermon_title,
            current_show_host: this.sermon_speaker ? this.sermon_speaker : '',
            current_song_name: this.sermon_title,
            current_song_artist: this.sermon_speaker ? this.sermon_speaker : '',
            live_streaming: false,
            page_id: this.page_id,
        };
        // this.analytics.setliveStreamingAnalytics(body).subscribe((res: any) => {
        // })
    };
    VideoArchiveDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] },
        { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
        { type: src_services_socket_service__WEBPACK_IMPORTED_MODULE_18__["SocketService"] },
        { type: src_services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"] },
        { type: src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_17__["IpaddressService"] }
    ]; };
    VideoArchiveDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-video-archive-detail',
            template: __webpack_require__(/*! raw-loader!./video-archive-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/video-archive-detail/video-archive-detail.page.html"),
            styles: [__webpack_require__(/*! ./video-archive-detail.page.scss */ "./src/app/video-archive-detail/video-archive-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"],
            src_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
            src_services_socket_service__WEBPACK_IMPORTED_MODULE_18__["SocketService"],
            src_services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"],
            src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_17__["IpaddressService"]])
    ], VideoArchiveDetailPage);
    return VideoArchiveDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-archive-detail-video-archive-detail-module-es5.js.map