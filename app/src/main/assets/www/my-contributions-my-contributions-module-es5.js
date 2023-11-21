(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-contributions-my-contributions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-contributions/my-contributions.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-contributions/my-contributions.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'MY_STUFF.giving_history' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{'MY_STUFF.contributions' | translate}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{'MY_STUFF.see_what_message' | translate}}.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper ion-justify-content-start\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card class=\"ionCard\">\n                            <ion-card-header class=\"\">\n                                <ion-card-title class=\"heading4\">{{'MY_STUFF.giving_history' | translate}}</ion-card-title>\n                            </ion-card-header>\n                            <hr class=\"ionCard__divider\">\n                            <ion-card-content>\n                                <ion-row class=\"ion-justify-content-center ion-text-center ion-margin-vertical\">\n                                    <ion-col size=\"12\" sizeSm=\"6\">\n                                        <h3 class=\"heading3\" style=\"font-size: 20px;font-weight: 600;\">$<span>{{total_given_year}}</span>\n                                        </h3>\n                                        <ion-label class=\"text-gray\">{{'MY_STUFF.total_given' | translate}}</ion-label>\n                                    </ion-col>\n                                    <ion-col size=\"12\" sizeSm=\"6\">\n                                        <h3 class=\"heading3\" style=\"font-size: 20px;font-weight: 600;\">$<span>{{total_gift}}</span>\n                                        </h3>\n                                        <ion-label class=\"text-gray\">{{'MY_STUFF.total_gifts' | translate}}</ion-label>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-list lines=\"none\">\n                                    <hr class=\"ionCard__divider\">\n                                    <ion-item *ngFor=\"let item of temp_donations\" class=\"ionMedia ion-no-padding\" style=\"--inner-padding-end: 0;\">\n                                        <ion-label class=\"ion-text-wrap\" style=\"margin-left: 0;\">\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.giving_amount' | translate}}:<span class=\"ion-padding-start\"\n                                                                                              style=\"font-size: 14px;\">${{item.amount_total}}</span>\n                                            </h2>\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.type' | translate}}:<span class=\"ion-padding-start\"\n                                                                                        style=\"font-size: 14px;\">{{item.giving_source}}</span>\n                                            </h2>\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.date' | translate}}:<span class=\"ion-padding-start\"\n                                                                                        style=\"font-size: 14px;\">{{item.transaction_date}}</span>\n                                            </h2>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-list>\n                                <div class=\"no-date-div\" *ngIf=\"donations\">\n                                    <hr class=\"ionCard__divider\">\n                                    <p class=\"text-gray ion-text-center\" style=\"margin-top: 16px;\">\n                                        <small>{{'MY_STUFF.currently_message' | translate}}</small>\n                                    </p>\n                                </div>\n                                <ion-button *ngIf=\"temp_donations && temp_donations.length > 0\" (click)=\"see_more_or_less_donations()\" class=\"commonBtn--dark\"> {{(temp_donations.length > 3) ? ('MY_STUFF.seeless' | translate) : ('MY_STUFF.seemore' | translate)}}</ion-button>\n\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card class=\"ionCard\">\n                            <ion-card-header class=\"\">\n                                <ion-card-title class=\"heading4\">{{'MY_STUFF.recurring_gifts' | translate}}</ion-card-title>\n                            </ion-card-header>\n                            <hr class=\"ionCard__divider\">\n                            <ion-card-content>\n                                <ion-row class=\"ion-justify-content-center ion-text-center ion-margin-vertical\">\n                                    <ion-col [size]=\"12\" [sizeSm]=\"6\">\n                                        <h3 class=\"heading3\" style=\"font-size: 20px;font-weight: 600;\">$<span>{{average_gift}}</span>\n                                        </h3>\n                                        <ion-label class=\"text-gray\">{{'MY_STUFF.average_gift' | translate}}</ion-label>\n                                    </ion-col>\n                                    <ion-col [size]=\"12\" [sizeSm]=\"6\">\n                                        <h3 class=\"heading3\" style=\"font-size: 20px;font-weight: 600;\">$<span>{{most_recent}}</span>\n                                        </h3>\n                                        <ion-label class=\"text-gray\">{{'MY_STUFF.recent_gift' | translate}}</ion-label>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-list lines=\"none\">\n                                    <hr class=\"ionCard__divider\">\n                                    <ion-item *ngFor=\"let item of temp_subscriptions\" class=\"ionMedia ion-no-padding\" style=\"--inner-padding-end: 0;\">\n                                        <ion-label class=\"ion-text-wrap\" style=\"margin-left: 0;\">\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.giving_amount' | translate}}:<span class=\"ion-padding-start\"\n                                                                                              style=\"font-size: 14px;\">${{item.amount_total}}</span>\n                                            </h2>\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.frequency' | translate}}:<span class=\"ion-padding-start\"\n                                                                                             style=\"font-size: 14px;\">{{item.frequency}}</span>\n                                            </h2>\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.start_on' | translate}}:<span class=\"ion-padding-start\"\n                                                                                            style=\"font-size: 14px;\">{{item.start_on}}</span>\n                                            </h2>\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.created_at' | translate}}:<span class=\"ion-padding-start\"\n                                                                                         style=\"font-size: 14px;\">{{item.transaction_date}}</span>\n                                            </h2>\n                                        </ion-label>\n                                        <ion-button slot=\"end\" class=\"commonBtn--dark\" (click)=\"presentAlertConfirm(item.id)\"> {{'MY_STUFF.stop' | translate}}</ion-button>\n                                    </ion-item>\n                                </ion-list>\n                                <div class=\"no-date-div\" *ngIf=\"donations\">\n                                    <hr class=\"ionCard__divider\">\n                                    <p class=\"text-gray ion-text-center\" style=\"margin-top: 16px;\">\n                                        <small>{{'MY_STUFF.currently_message' | translate}}</small>\n                                    </p>\n                                </div>\n                                <ion-button *ngIf=\"temp_subscriptions && temp_subscriptions.length > 0\" (click)=\"see_more_or_less_subs()\" class=\"commonBtn--dark\"> {{(temp_subscriptions.length > 3) ? ('MY_STUFF.seeless' | translate) : ('MY_STUFF.seemore' | translate)}}</ion-button>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer *ngIf=\"theme?.ch_id != '1000'\"></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"theme?.ch_id != '1000'\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/my-contributions/my-contributions.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/my-contributions/my-contributions.module.ts ***!
  \*************************************************************/
/*! exports provided: MyContributionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContributionsPageModule", function() { return MyContributionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_contributions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-contributions.page */ "./src/app/my-contributions/my-contributions.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _my_contributions_page__WEBPACK_IMPORTED_MODULE_6__["MyContributionsPage"]
    }
];
var MyContributionsPageModule = /** @class */ (function () {
    function MyContributionsPageModule() {
    }
    MyContributionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_contributions_page__WEBPACK_IMPORTED_MODULE_6__["MyContributionsPage"]]
        })
    ], MyContributionsPageModule);
    return MyContributionsPageModule;
}());



/***/ }),

/***/ "./src/app/my-contributions/my-contributions.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/my-contributions/my-contributions.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNvbnRyaWJ1dGlvbnMvbXktY29udHJpYnV0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-contributions/my-contributions.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/my-contributions/my-contributions.page.ts ***!
  \***********************************************************/
/*! exports provided: MyContributionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContributionsPage", function() { return MyContributionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_logo_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/logo-service.service */ "./src/services/logo-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

















var MyContributionsPage = /** @class */ (function () {
    function MyContributionsPage(apiService, storage, loader, Auth, location, toast, analytics, platform, device, alertController, translate, menu, event_provider, logoService, router) {
        var _this = this;
        this.apiService = apiService;
        this.storage = storage;
        this.loader = loader;
        this.Auth = Auth;
        this.location = location;
        this.toast = toast;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.alertController = alertController;
        this.translate = translate;
        this.menu = menu;
        this.event_provider = event_provider;
        this.logoService = logoService;
        this.router = router;
        this.donations = true;
        this.page_name = "My Contributions";
        this.custom_name = "My Contributions";
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    MyContributionsPage.prototype.ngOnInit = function () {
        // getting user data
        this.getLoginData();
    };
    MyContributionsPage.prototype.presentAlertConfirm = function (subscription_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Confirmation!',
                            message: 'Are you sure you want to stop subscription?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.stopSubscription(subscription_id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyContributionsPage.prototype.getLoginData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.Auth.getUser()];
                    case 1:
                        _a.loginData = _b.sent();
                        if (this.loginData) {
                            // getting user from local storage
                            this.storage.get("theme").then(function (res) {
                                if (res) {
                                    _this.theme = res;
                                    _this.ch_id = _this.theme.ch_id;
                                    // getting contributions of the user
                                    _this.getContributionData();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyContributionsPage.prototype.getTheme = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // getting theme from local storage
                this.storage.get("theme").then(function (res) {
                    if (res) {
                        _this.theme = res;
                        _this.ch_id = _this.theme.ch_id;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MyContributionsPage.prototype.getContributionData = function () {
        var _this = this;
        var auth = {
            authorization: 'Bearer ' + this.loginData.auth.refresh_token
        };
        this.loader.presentLoading().then(function () {
            var body = {
                auth: 'Bearer ' + _this.loginData.auth.access_token,
                id: _this.loginData.user.id,
                ch_id: _this.ch_id
            };
            // fetching contributions of the user
            _this.apiService.getContributions(JSON.stringify(body)).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res.status) {
                        // =================== Assigning Data ================================================================= //
                        if (res.donations.amount_giving_year !== null && res.donations.amount_giving_year !== "") {
                            this.total_given_year = res.donations.amount_giving_year;
                        }
                        else {
                            this.total_given_year = 0.00;
                        }
                        if (res.donations.total_gift !== null && res.donations.total_gift !== "") {
                            this.total_gift = res.donations.total_gift;
                        }
                        else {
                            this.total_gift = 0.00;
                        }
                        if (res.donations.averagegift !== 0) {
                            this.donations = false;
                            this.average_gift = res.donations.averagegift;
                        }
                        else {
                            this.donations = true;
                            this.average_gift = 0;
                        }
                        if (res.donations.amount_recent !== null && res.donations.amount_recent !== "") {
                            this.most_recent = res.donations.amount_recent;
                        }
                        else {
                            this.most_recent = 0.00;
                        }
                        this.allDonations = res.donations.allDonations;
                        this.allSubscriptions = res.donations.subscriptions;
                        if (this.allDonations.length > 3) {
                            this.temp_donations = this.allDonations.slice(0, 3);
                        }
                        else {
                            this.temp_donations = this.allDonations;
                        }
                        if (this.allSubscriptions.length > 3) {
                            this.temp_subscriptions = this.allSubscriptions.slice(0, 3);
                        }
                        else {
                            this.temp_subscriptions = this.allSubscriptions;
                        }
                        // =================== Assigning Data ================================================================= //
                        this.loader.stopLoading();
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); }, function (err) {
                var message = err.message;
                if (err.error.http_code === 401) {
                    // const data = {
                    //     auth: 'Bearer ' + this.loginData.auth.access_token,
                    //     authorization: 'Bearer ' + this.loginData.auth.refresh_token
                    // };
                    // this.apiService.updateToken(data).subscribe(res => {
                    //     this.loginData.auth.access_token = res['access_token'];
                    //     this.loginData.auth.refresh_token = res['refresh_token'];
                    //     this.storage.set('user', this.loginData);
                    //     localStorage.setItem('auth', this.loginData.auth.access_token);
                    //     localStorage.setItem('refresh_token', this.loginData.auth.refresh_token);
                    //     this.getContributionData();
                    // }, (err: any) => {
                    //     this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                    // });
                }
                _this.loader.stopLoading();
            });
        });
    };
    MyContributionsPage.prototype.logOutUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loader.presentLoading().then(function () {
                    _this.Auth.logoutUser();
                    _this.event_provider.userlogout(); // calling event
                    _this.event_provider.refresh_home(); // calling event
                    _this.logoService.setStatus(false);
                    var login_url = '/login';
                    _this.router.navigate([login_url]);
                    _this.loader.stopLoading();
                });
                return [2 /*return*/];
            });
        });
    };
    MyContributionsPage.prototype.stopSubscription = function (id) {
        var _this = this;
        var body = {
            auth: 'Bearer ' + this.loginData.auth.access_token,
            subscriptionid: id
        };
        // Calling API through service to stop subscription
        this.apiService.stopSubscription(JSON.stringify(body)).subscribe(function (res) {
            if (res.status) {
                _this.ngOnInit();
                _this.toast.presentToastWithOptions(res.message, "Success", "success");
            }
            else {
                _this.toast.presentToastWithOptions(res.message, "Warning", "warning");
            }
        });
    };
    // Hides and Shows donations data
    MyContributionsPage.prototype.see_more_or_less_donations = function () {
        if (this.temp_donations.length > 3) {
            this.temp_donations = this.allDonations.slice(0, 3);
        }
        else {
            this.temp_donations = this.allDonations;
        }
    };
    // Hides and Shows subscriptions data
    MyContributionsPage.prototype.see_more_or_less_subs = function () {
        if (this.temp_subscriptions.length > 3) {
            this.temp_subscriptions = this.allSubscriptions.slice(0, 3);
        }
        else {
            this.temp_subscriptions = this.allSubscriptions;
        }
    };
    MyContributionsPage.prototype.gotobackPage = function () {
        if (this.theme.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    };
    MyContributionsPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_8__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_8__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.loginData ? this.loginData.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.ch_id,
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
    MyContributionsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    MyContributionsPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_8__();
        this.event_provider.hidefooter(true, 'other');
    };
    MyContributionsPage.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"] },
        { type: _services_logo_service_service__WEBPACK_IMPORTED_MODULE_14__["LogoServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }
    ]; };
    MyContributionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-contributions',
            template: __webpack_require__(/*! raw-loader!./my-contributions.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-contributions/my-contributions.page.html"),
            styles: [__webpack_require__(/*! ./my-contributions.page.scss */ "./src/app/my-contributions/my-contributions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"],
            _services_logo_service_service__WEBPACK_IMPORTED_MODULE_14__["LogoServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]])
    ], MyContributionsPage);
    return MyContributionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-contributions-my-contributions-module-es5.js.map