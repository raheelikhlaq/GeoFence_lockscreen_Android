(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-post-custom-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-post/custom-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-post/custom-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Custom Post')\"\n                 class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{custom_name}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'Custom Post')\" slot=\"start\">{{custom_name}}</p>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\" *ngIf=\"allNotes && allNotes.length < 1\">\n    <div class=\"app-container\">\n      <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                style=\"border-radius: 5px;\" >\n        <h4 class=\"heading4\">{{'CUSTOM_POST.no_post_message' | translate}}</h4>\n      </ion-card>\n    </div>\n  </div>\n  <div class=\"page-wrapper\" *ngIf=\"allNotes && allNotes.length > 0\">\n    <div class=\"app-container\">\n      <ion-card *ngFor=\"let notes of allNotes; let i = index\" (click)=\"openDetail(i)\" class=\"ionCard ionCard--chat ionCard--mobile cursor-pointer\">\n        <div class=\"ionCard__imgDiv\" *ngIf=\"notes.image_url\">\n          <img src={{notes.image_url}}>\n        </div>\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-card-title class=\"heading4\">{{notes.title ? notes.title : \"Title N/A\" }}</ion-card-title>\n          <div class=\"ionCard__footer\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                <ul class=\"list-inline commentAvatars\">\n                  <li class=\"list-inline-item\">\n                    <ion-icon name=\"calendar\" size=\"small\"></ion-icon>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <ion-text>{{appService.getDateTimeFormat(notes.pubDate)}} </ion-text>\n                  </li>\n                </ul>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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

/***/ "./src/app/custom-post/custom-post.module.ts":
/*!***************************************************!*\
  !*** ./src/app/custom-post/custom-post.module.ts ***!
  \***************************************************/
/*! exports provided: CustomPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPostPageModule", function() { return CustomPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-post.page */ "./src/app/custom-post/custom-post.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _custom_post_page__WEBPACK_IMPORTED_MODULE_6__["CustomPostPage"]
    }
];
var CustomPostPageModule = /** @class */ (function () {
    function CustomPostPageModule() {
    }
    CustomPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_custom_post_page__WEBPACK_IMPORTED_MODULE_6__["CustomPostPage"]]
        })
    ], CustomPostPageModule);
    return CustomPostPageModule;
}());



/***/ }),

/***/ "./src/app/custom-post/custom-post.page.scss":
/*!***************************************************!*\
  !*** ./src/app/custom-post/custom-post.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1wb3N0L2N1c3RvbS1wb3N0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-post/custom-post.page.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-post/custom-post.page.ts ***!
  \*************************************************/
/*! exports provided: CustomPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPostPage", function() { return CustomPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



















var CustomPostPage = /** @class */ (function () {
    function CustomPostPage(idService, route, loader, storage, sermonsService, router, eventsService, apiService, toast, appService, location, common, event_provider, analytics, platform, device, translate) {
        var _this = this;
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.toast = toast;
        this.appService = appService;
        this.location = location;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.allNotes = [];
        this.is_external_url = false;
        this.page_in_home_tabs = false;
        this.page = 0;
        this.deviceType = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    }
    CustomPostPage.prototype.ngOnInit = function () {
        var _this = this;
        // assigning data from URL Params
        // this.page_id = this.route.snapshot.paramMap.get('id');
        this.page_id = this.route.snapshot.paramMap.get('page_id');
        this.getTheme();
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
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
    CustomPostPage.prototype.getTheme = function () {
        var _this = this;
        // getting theme from local storage
        // this.storage.get('theme').then(theme => {
        if (localStorage.getItem('church_data')) {
            var theme = JSON.parse(localStorage.getItem('church_data')).church;
            // getting app_pages
            var body = JSON.stringify({ id: theme.ch_id });
            this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var custom_post_page;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if ((Object.keys(res).length === 0)) {
                        return [2 /*return*/];
                    }
                    this.theme = res.church;
                    if (res.apppages.length > 0) {
                        custom_post_page = res.apppages.find(function (x) { return x.id === _this.page_id; });
                        if (custom_post_page) {
                            this.banner_image = custom_post_page.website_banner;
                            this.banner_desc = custom_post_page.banner_description;
                            this.banner_title = custom_post_page.banner_title;
                            this.post_url = custom_post_page.url;
                            this.post_category_url = custom_post_page.custom_category_url;
                            this.page_name = custom_post_page.name;
                            this.custom_name = custom_post_page.title;
                        }
                        if (this.post_url) {
                            this.is_wordpress_enable = false;
                            this.getNotes(this.post_url);
                        }
                        else if (this.post_category_url && this.post_category_url.indexOf("https://") != -1) {
                            this.is_wordpress_enable = false;
                            this.getCategoryNotes(this.post_category_url);
                        }
                        else if (this.post_category_url && this.post_category_url.indexOf("https://") == -1)
                            if (res.is_wordpress_enable === '1') {
                                this.is_wordpress_enable = true;
                                this.getDBPosts();
                            }
                        // if(res.is_wordpress_enable === '1'){
                        //   this.is_wordpress_enable = true;
                        //   if (this.post_url) {
                        //     this.getNotes(this.post_url);
                        //   } else if (this.post_category_url) {
                        //    this.getCategoryNotes(this.post_category_url);
                        //   }{
                        //     this.getDBPosts();
                        //   }
                        // } else {
                        //   this.is_wordpress_enable = false;
                        //   if (this.post_url) {
                        //     this.getNotes(this.post_url);
                        //   } else if (this.post_category_url) {
                        //     this.getCategoryNotes(this.post_category_url);
                        //   }
                        // }
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            this.storage.get('theme').then(function (theme) {
                // getting app_pages
                var body = JSON.stringify({ id: theme.ch_id });
                _this.common.getTheme(body).subscribe(function (res) {
                    // this.event_provider.getChurchData.subscribe(async (res: any) => {
                    _this.theme = res.church;
                    if (res.apppages.length > 0) {
                        var custom_post_page = res.apppages.find(function (x) { return x.id === _this.page_id; });
                        if (custom_post_page) {
                            _this.banner_image = custom_post_page.website_banner;
                            _this.banner_desc = custom_post_page.banner_description;
                            _this.banner_title = custom_post_page.banner_title;
                            _this.post_url = custom_post_page.url;
                            _this.post_category_url = custom_post_page.custom_category_url;
                            _this.page_name = custom_post_page.name;
                            _this.custom_name = custom_post_page.title;
                        }
                        if (_this.post_url) {
                            _this.getNotes(_this.post_url);
                        }
                        else if (_this.post_category_url) {
                            _this.getCategoryNotes(_this.post_category_url);
                        }
                    }
                });
            });
        }
    };
    CustomPostPage.prototype.getDBPosts = function () {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.is_external_url = true;
            var self = _this;
            var body = {
                'church_id': _this.theme.ch_id,
                'page_id': _this.page_id,
                'page': _this.page + 1
            };
            setTimeout(function () {
                _this.loader.stopLoading();
            }, 2000);
            _this.sermonsService.getCMSSermonPosts(body).subscribe(function (res) {
                // ======= parsing xml into JsSON format =============================
                // let parseString = require('xml2js').parseString;
                // parseString(res, function(err, result) {
                //   self.allNotes = result.rss.channel[0].item;
                //   self.loader.stopLoading();
                // });
                // ======= parsing xml into JsSON format =============================
                self.allNotes = res.notes;
                self.allNotes.map(function (x) {
                    x['pubDate'] = x.created_at;
                });
                _this.loader.stopLoading();
            }, function (err) {
                var message = err.message;
                _this.loader.stopLoading();
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
            _this.loader.stopLoading();
        });
        this.loader.stopLoading();
    };
    CustomPostPage.prototype.getNotes = function (url) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            _this.is_external_url = true;
            var self = _this;
            setTimeout(function () {
                _this.loader.stopLoading();
            }, 2000);
            // fetch sermon notes
            _this.sermonsService.getSermonNotes(url, _this.page_id).subscribe(function (res) {
                // ======= parsing xml into JsSON format =============================
                // let parseString = require('xml2js').parseString;
                // parseString(res, function(err, result) {
                //   self.allNotes = result.rss.channel[0].item;
                //   self.loader.stopLoading();
                // });
                // ======= parsing xml into JsSON format =============================
                self.allNotes = res.result.channel.item;
                self.allNotes.map(function (res) {
                    if (res.description && JSON.stringify(res.description) != '{}') {
                        if (res.description.includes("<img")) {
                            res.image_url = (res.description.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]).slice(1, -1);
                            if (res.image_url.includes("150x150")) {
                                if (res.image_url.includes("-150x150")) {
                                    res.image_url = res.image_url.replace("-150x150", '');
                                }
                                else {
                                    res.image_url = res.image_url.replace("150x150", '');
                                }
                            }
                            else if (res.image_url.includes("300x300")) {
                                if (res.image_url.includes("-300x300")) {
                                    res.image_url = res.image_url.replace("-300x300", '');
                                }
                                else {
                                    res.image_url = res.image_url.replace("300x300", '');
                                }
                            }
                            if (res.image_url !== "" && res.image_url !== null && res.image_url.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                var abc = res.image_url.split("/");
                                //  let img_name = abc[abc.length-1];
                                var folder_name = abc[abc.length - 2];
                                if (_this.platform.is("mobile")) {
                                    _this.deviceType = 'radiobase_mobile';
                                }
                                else if (_this.platform.is("tablet")) {
                                    _this.deviceType = 'radiobase_tablet';
                                }
                                else {
                                    _this.deviceType = folder_name;
                                }
                                var new_link = res.image_url.replace(folder_name, _this.deviceType);
                                res.image_url = new_link;
                                // console.log('background is: ',card.background,'new link is: ', new_link);
                            }
                        }
                    }
                });
                _this.loader.stopLoading();
            }, function (err) {
                var message = err.message;
                _this.loader.stopLoading();
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        });
    };
    CustomPostPage.prototype.getCategoryNotes = function (url) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            var self = _this;
            setTimeout(function () {
                _this.loader.stopLoading();
            }, 2000);
            // fetch notes by category
            _this.sermonsService.getCategoryNotes(url, _this.page_id).subscribe(function (res) {
                // ======= parsing xml into JsSON format =============================
                // let parseString = require('xml2js').parseString;
                // parseString(res, function (err, result) {
                //   self.allNotes = result.rss.channel[0].item;
                //   self.loader.stopLoading();
                // });
                // ======= parsing xml into JsSON format =============================
                self.allNotes = res.result.channel.item;
                self.allNotes.map(function (res) {
                    if (res.description && JSON.stringify(res.description) != '{}') {
                        if (res.description.includes("<img")) {
                            res.image_url = (res.description.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]).slice(1, -1);
                            if (res.image_url.includes("150x150")) {
                                if (res.image_url.includes("-150x150")) {
                                    res.image_url = res.image_url.replace("-150x150", '');
                                }
                                else {
                                    res.image_url = res.image_url.replace("150x150", '');
                                }
                            }
                            else if (res.image_url.includes("300x300")) {
                                if (res.image_url.includes("-300x300")) {
                                    res.image_url = res.image_url.replace("-300x300", '');
                                }
                                else {
                                    res.image_url = res.image_url.replace("300x300", '');
                                }
                            }
                            if (res.image_url !== "" && res.image_url !== null && res.image_url.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                var abc = res.image_url.split("/");
                                //  let img_name = abc[abc.length-1];
                                var folder_name = abc[abc.length - 2];
                                if (_this.platform.is("mobile")) {
                                    _this.deviceType = 'radiobase_mobile';
                                }
                                else if (_this.platform.is("tablet")) {
                                    _this.deviceType = 'radiobase_tablet';
                                }
                                else {
                                    _this.deviceType = folder_name;
                                }
                                var new_link = res.image_url.replace(folder_name, _this.deviceType);
                                res.image_url = new_link;
                                // console.log('background is: ',card.background,'new link is: ', new_link);
                            }
                        }
                    }
                });
                self.loader.stopLoading();
            }, function (err) {
                var message = err.message;
                self.loader.stopLoading();
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        });
    };
    CustomPostPage.prototype.openDetail = function (i) {
        var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
        var hashed_date;
        hashed_date = this.allNotes[i].pubDate ? md5(this.allNotes[i].pubDate) : ''; // hashed Date before sending
        var hashed_title = this.allNotes[i].title ? md5(this.allNotes[i].title) : ''; // hashed title before sending
        if (!this.is_wordpress_enable) {
            this.router.navigate(['custom-post-detail', {
                    title: hashed_title,
                    pubDate: hashed_date,
                    url: this.is_external_url ? this.post_url : this.post_category_url,
                    is_external: this.is_external_url,
                    page_id: this.page_id,
                    lc: this.is_wordpress_enable
                }]);
        }
        else {
            this.router.navigate(['custom-post-detail', {
                    ch: this.theme.ch_id,
                    id: this.allNotes[i].id,
                    page_id: this.page_id,
                    lc: this.is_wordpress_enable
                }]);
        }
    };
    CustomPostPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    CustomPostPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    CustomPostPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_13__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.theme.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.page_name,
            custom_name: this.custom_name,
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
    CustomPostPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    CustomPostPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        this.event_provider.hidefooter(true, 'other');
    };
    CustomPostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var id, app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    id = this.route.snapshot.paramMap.get('page_id');
                    app_pages = res.apppages.find(function (x) { return x.id === id; });
                    if (app_pages && app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    CustomPostPage.ctorParameters = function () { return [
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateService"] }
    ]; };
    CustomPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-post',
            template: __webpack_require__(/*! raw-loader!./custom-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/custom-post/custom-post.page.html"),
            styles: [__webpack_require__(/*! ./custom-post.page.scss */ "./src/app/custom-post/custom-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateService"]])
    ], CustomPostPage);
    return CustomPostPage;
}());



/***/ })

}]);
//# sourceMappingURL=custom-post-custom-post-module-es5.js.map