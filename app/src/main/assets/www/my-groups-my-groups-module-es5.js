(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-groups-my-groups-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-groups/my-groups.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-groups/my-groups.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n        {{'MY_STUFF.my_groups' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{'MY_STUFF.my_groups' | translate}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{'MY_STUFF.see_what_message' | translate}}.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper ion-justify-content-start\">\n        <div class=\"app-container\">\n            <div class=\"event-list-wrap\" *ngIf=\"dataLoaded\">\n                <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                          style=\"border-radius: 5px;\" *ngIf=\"groupsdata\">\n                    <h4 class=\"heading4\">{{'MY_STUFF.no_groups_message' | translate}}</h4>\n                </ion-card>\n            </div>\n            <div class=\"event-list-wrap\">\n                <ion-card class=\"ionCard ion-margin-bottom ionCard--mobile cursor-pointer\" style=\"border-radius: 5px;\"\n                          *ngFor=\"let item of data\">\n                    <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                        <div class=\"ionMedia__media ionMedia__media--dark ionMedia__media--big\">\n                            <span style=\"display:block;font-size: 25px;line-height: 20px;\">{{item.start_date.dd}}</span>\n                            <span class=\"font-weight-normal\">{{item.start_date.mm}}</span>\n                        </div>\n                        <ion-label class=\"ion-text-wrap\">\n                            <h2 class=\"ionMedia__heading\">{{item.name}}</h2>\n                            <p class=\"ionMedia__text text-gray\">{{item.church_name}}</p>\n                            <p class=\"ionMedia__text text-gray\" *ngIf=\"item.end_date\">{{item.end_date}}</p>\n                        </ion-label>\n                    </ion-item>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n<!--    <app-footer *ngIf=\"theme?.ch_id != '1000'\"></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"theme?.ch_id != '1000'\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/my-groups/my-groups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-groups/my-groups.module.ts ***!
  \***********************************************/
/*! exports provided: MyGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGroupsPageModule", function() { return MyGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-groups.page */ "./src/app/my-groups/my-groups.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _my_groups_page__WEBPACK_IMPORTED_MODULE_6__["MyGroupsPage"]
    }
];
var MyGroupsPageModule = /** @class */ (function () {
    function MyGroupsPageModule() {
    }
    MyGroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_groups_page__WEBPACK_IMPORTED_MODULE_6__["MyGroupsPage"]]
        })
    ], MyGroupsPageModule);
    return MyGroupsPageModule;
}());



/***/ }),

/***/ "./src/app/my-groups/my-groups.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-groups/my-groups.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWdyb3Vwcy9teS1ncm91cHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-groups/my-groups.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-groups/my-groups.page.ts ***!
  \*********************************************/
/*! exports provided: MyGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGroupsPage", function() { return MyGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");














var MyGroupsPage = /** @class */ (function () {
    function MyGroupsPage(apiService, storage, loader, Auth, toast, location, analytics, platform, device, translate, menu, event_provider) {
        var _this = this;
        this.apiService = apiService;
        this.storage = storage;
        this.loader = loader;
        this.Auth = Auth;
        this.toast = toast;
        this.location = location;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.menu = menu;
        this.event_provider = event_provider;
        this.groupsdata = false;
        this.dataLoaded = false;
        this.data = [];
        this.page_name = "My Groups";
        this.custom_name = "My Groups";
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    MyGroupsPage.prototype.ngOnInit = function () {
        // // getting user data
        // this.getLoginData();
        var _this = this;
        // getting theme from local storage
        this.storage.get('theme').then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.theme = res;
                return [2 /*return*/];
            });
        }); });
    };
    MyGroupsPage.prototype.getLoginData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.Auth.getUser()];
                    case 1:
                        _a.loginData = _b.sent();
                        if (this.loginData) {
                            // getting groups data
                            this.getGroupData();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // getting groups data
    MyGroupsPage.prototype.getGroupData = function () {
        var _this = this;
        var body = {
            auth: 'Bearer ' + this.loginData.auth.access_token,
            id: this.loginData.user.id
        };
        this.loader.presentLoading().then(function () {
            // fetching groups data
            _this.apiService.getGroups(JSON.stringify(body)).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var test, today, dd, mm, monthNames, date, x;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res.groups && res.groups.length === 0) {
                        this.groupsdata = true;
                    }
                    else {
                        this.groupsdata = false;
                        this.data = res.groups;
                        test = void 0;
                        today = void 0;
                        dd = void 0;
                        mm = void 0;
                        monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        date = [];
                        for (x = 0; x < this.data.length; x++) {
                            test = this.data[x].start_date;
                            today = new Date(test);
                            dd = today.getDate();
                            mm = monthNames[today.getMonth()];
                            date.push({ dd: dd, mm: mm });
                            this.data[x].start_date = date[x];
                        }
                    }
                    this.loader.stopLoading();
                    this.dataLoaded = true;
                    return [2 /*return*/];
                });
            }); }, function (err) {
                var message = err.message;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                _this.loader.stopLoading();
                _this.dataLoaded = true;
            });
        });
    };
    // navigating to back page
    MyGroupsPage.prototype.gotobackPage = function () {
        if (this.theme.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    };
    MyGroupsPage.prototype.setAnalytics = function () {
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
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_8__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_8__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.loginData ? this.loginData.user.id : 'guest';
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
    MyGroupsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    MyGroupsPage.prototype.ionViewDidEnter = function () {
        // getting user data
        this.getLoginData();
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_8__();
        this.event_provider.hidefooter(true, 'other');
    };
    MyGroupsPage.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] },
        { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"] }
    ]; };
    MyGroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-groups',
            template: __webpack_require__(/*! raw-loader!./my-groups.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-groups/my-groups.page.html"),
            styles: [__webpack_require__(/*! ./my-groups.page.scss */ "./src/app/my-groups/my-groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"],
            src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"]])
    ], MyGroupsPage);
    return MyGroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-groups-my-groups-module-es5.js.map