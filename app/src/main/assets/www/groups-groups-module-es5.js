(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Groups')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{page_name ? page_name : 'Groups'}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Groups')\" slot=\"start\">{{page_name}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n\n            <ion-row class=\"ion-justify-content-center\" *ngIf=\"groups\">\n                <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let group of groups\">\n                    <ion-card (click)=\"openDetail(group.id)\"\n                              class=\"ionCard ion-no-margin cursor-pointer ionCard--mobile\"\n                              routerLink=\"/group-detail\" routerDirection=\"root\">\n                        <div class=\"ionCard__imgDiv\">\n                            <img *ngIf=\"group.group_image\" [src]=\"baseUrl + group.group_image\"/>\n                            <img *ngIf=\"!group.group_image\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                        </div>\n                        <ion-card-content class=\"ion-no-padding\">\n                            <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                                <ion-thumbnail\n                                        class=\"ionMedia__media ionMedia__media--dark ionMedia__media--big\">\n                                                <span *ngIf=\"group.start_date\"\n                                                      style=\"display:block;font-size: 25px;line-height: 20px;\">{{ group.start_date | date:'dd'}}</span>\n                                    <span *ngIf=\"group.start_date\" class=\"font-weight-normal\">{{ group.start_date | date:'MMM'}}</span>\n                                    <span *ngIf=\"!group.start_date\"\n                                          class=\"font-weight-normal\">N/A</span>\n                                </ion-thumbnail>\n                                <ion-label class=\"ion-text-wrap\">\n                                    <h2 class=\"ionMedia__heading\">{{ group.name}}</h2>\n                                    <p class=\"ionMedia__text text-gray\">{{ group.description}}</p>\n                                    <p *ngIf=\"!group.description\" class=\"ionMedia__text text-gray\">{{'GROUPS.description' | translate}} N/A</p>\n                                </ion-label>\n                            </ion-item>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/groups/groups.module.ts":
/*!*****************************************!*\
  !*** ./src/app/groups/groups.module.ts ***!
  \*****************************************/
/*! exports provided: GroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups.page */ "./src/app/groups/groups.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
    }
];
var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());



/***/ }),

/***/ "./src/app/groups/groups.page.scss":
/*!*****************************************!*\
  !*** ./src/app/groups/groups.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/groups.page.ts":
/*!***************************************!*\
  !*** ./src/app/groups/groups.page.ts ***!
  \***************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
















var GroupsPage = /** @class */ (function () {
    function GroupsPage(api, storage, loader, router, toast, location, common, analytics, event_provider, platform, device, translate) {
        var _this = this;
        this.api = api;
        this.storage = storage;
        this.loader = loader;
        this.router = router;
        this.toast = toast;
        this.location = location;
        this.common = common;
        this.analytics = analytics;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.count = 0;
        this.scrollArray = [];
        this.page_in_home_tabs = false;
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
    GroupsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.baseUrl = "https://devmanage.churchbase.com/uploads/groupsimage/";
                this.baseUrl = "https://manage.churchbase.com/uploads/groupsimage/";
                // getting theme from local storage
                this.storage.get('theme').then(function (theme) {
                    _this.ch_id = theme.ch_id;
                    // saving app_pages
                    var body = JSON.stringify({ id: _this.ch_id });
                    _this.common.getTheme(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var app_pages;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (res) {
                                this.theme = res;
                                this.common.store_app_pages(res.apppages, 'Groups');
                                app_pages = res.apppages.filter(function (x) { return x.name === 'Groups'; });
                                if (app_pages[0]) {
                                    this.banner_image = app_pages[0].website_banner;
                                    this.banner_desc = app_pages[0].banner_description;
                                    this.banner_title = app_pages[0].banner_title;
                                    this.page_name = app_pages[0].title;
                                    this.custom_name = app_pages[0].name;
                                    this.getUser();
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                });
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
                this.getGroupDetails();
                return [2 /*return*/];
            });
        });
    };
    GroupsPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    GroupsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.addMoreData();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.scrollArray.length === _this.groups.length) {
                event.target.complete();
                // event.target.disabled = true;
            }
        }, 2000);
    };
    GroupsPage.prototype.addMoreData = function () {
        var loop = this.count;
        for (var i = loop; i <= (loop + 5); i++) {
            if (this.scrollArray.length < this.groups.length) {
                this.scrollArray.push(this.groups[i]);
                this.count++;
            }
        }
    };
    GroupsPage.prototype.getGroupDetails = function () {
        var _this = this;
        this.loader.presentLoading().then(function () { });
        setTimeout(function () {
            _this.loader.stopLoading();
        }, 1500);
        this.storage.get('theme').then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    this.ch_id = res.ch_id;
                    this.client_id = res.client_id;
                    if (this.ch_id) {
                        // fetching groups by church ID
                        this.api.getAllGroups(this.ch_id).subscribe(function (res) {
                            _this.groups = res.groups;
                            _this.addMoreData();
                            _this.loader.stopLoading();
                        }, function (err) {
                            var message = err.message;
                            _this.loader.stopLoading();
                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        });
                    }
                    else {
                        this.loader.stopLoading();
                    }
                }
                else {
                    this.loader.stopLoading();
                }
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.error.message;
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            _this.loader.stopLoading();
        });
    };
    GroupsPage.prototype.openDetail = function (data) {
        this.router.navigate(['group-detail', {
                ch_id: this.ch_id,
                group_id: data,
                client_id: this.client_id
            }]);
    };
    GroupsPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    GroupsPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        if (this.platform.is('android') || this.platform.is('iphone')) {
            dev_id = this.device.uuid;
            if (dev_id) {
                device = this.platform.platforms()[0];
            }
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_12__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
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
    GroupsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Groups'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    GroupsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    GroupsPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        this.event_provider.hidefooter(true, 'other');
    };
    GroupsPage.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
    ], GroupsPage.prototype, "infiniteScroll", void 0);
    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.page.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.page.html"),
            styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/app/groups/groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
    ], GroupsPage);
    return GroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=groups-groups-module-es5.js.map