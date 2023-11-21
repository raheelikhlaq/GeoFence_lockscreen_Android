(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-volunteering-my-volunteering-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-volunteering/my-volunteering.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-volunteering/my-volunteering.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>{{'Volunteering' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n    <ion-content>\n        <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n            <div class=\"banner__layer\"></div>\n            <div class=\"banner__content\">\n                <div class=\"app-container ion-text-center\">\n                    <h1 class=\"ion-no-margin heading1 banner__heading\">{{'Volunteering' | translate}}</h1>\n                    <p class=\"ion-no-margin banner__text\">{{'MY_STUFF.see_what_message' | translate}}.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"page-wrapper ion-justify-content-start\">\n            <div class=\"app-container\">\n\n                <div class=\"event-list-wrap\">\n                    <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                              style=\"border-radius: 5px;\" *ngIf=\"volunteeringdata\">\n                        <h4 class=\"heading4\">{{'MY_STUFF.no_volunteer' | translate}}</h4>\n                    </ion-card>\n                </div>\n                <div class=\"event-list-wrap\">\n                    <ion-card class=\"ionCard ion-margin-bottom ionCard--mobile cursor-pointer\" style=\"border-radius: 5px;\"\n                              *ngFor=\"let item of data; let i = index\" (click)=\"openDetail(i)\">\n                        <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--dark ionMedia__media--big\">\n                                <span style=\"display:block;font-size: 25px;line-height: 20px;\" *ngIf=\"item.start_date\">{{item.start_date.dd}}</span>\n                                <span style=\"display:block;font-size: 25px;line-height: 20px;\"\n                                      *ngIf=\"item.actual_date_of_service\">{{item.actual_date_of_service | date:\"d\"}}</span>\n                                <span class=\"font-weight-normal\" *ngIf=\"item.start_date\">{{item.start_date.mm}}</span>\n                                <span class=\"font-weight-normal\" *ngIf=\"item.actual_date_of_service\">{{item.actual_date_of_service | date:\"MMM\"}}</span>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{item.position_name}}</h2>\n                                <p class=\"ionMedia__text text-gray\" *ngIf=\"item.department_name\">\n                                    {{item.department_name}}</p>\n                                <p class=\"ionMedia__text text-gray\" *ngIf=\"item.subdepartment_name\">\n                                    {{item.subdepartment_name}}</p>\n                                <p class=\"ionMedia__text text-gray\" *ngIf=\"item.name\">{{item.name}}</p>\n                                <p class=\"ionMedia__text text-gray\">{{item.church_name}}</p>\n                            </ion-label>\n                        </ion-item>\n                    </ion-card>\n\n                </div>\n            </div>\n        </div>\n<!--        <app-footer></app-footer>-->\n    </ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/my-volunteering/my-volunteering.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/my-volunteering/my-volunteering.module.ts ***!
  \***********************************************************/
/*! exports provided: MyVolunteeringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVolunteeringPageModule", function() { return MyVolunteeringPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_volunteering_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-volunteering.page */ "./src/app/my-volunteering/my-volunteering.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _my_volunteering_page__WEBPACK_IMPORTED_MODULE_6__["MyVolunteeringPage"]
    }
];
let MyVolunteeringPageModule = class MyVolunteeringPageModule {
};
MyVolunteeringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_volunteering_page__WEBPACK_IMPORTED_MODULE_6__["MyVolunteeringPage"]]
    })
], MyVolunteeringPageModule);



/***/ }),

/***/ "./src/app/my-volunteering/my-volunteering.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/my-volunteering/my-volunteering.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXZvbHVudGVlcmluZy9teS12b2x1bnRlZXJpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-volunteering/my-volunteering.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-volunteering/my-volunteering.page.ts ***!
  \*********************************************************/
/*! exports provided: MyVolunteeringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVolunteeringPage", function() { return MyVolunteeringPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");















let MyVolunteeringPage = class MyVolunteeringPage {
    constructor(apiService, storage, loader, Auth, router, location, toast, analytics, platform, device, translate, event_provider) {
        this.apiService = apiService;
        this.storage = storage;
        this.loader = loader;
        this.Auth = Auth;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.event_provider = event_provider;
        this.volunteeringdata = false;
        this.page_name = "My Volunteering";
        this.custom_name = "My Volunteering";
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ngOnInit() {
        // getting user data
        this.getLoginData();
        // getting theme from local storage
        this.storage.get('theme').then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.theme = res;
        }));
    }
    getLoginData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loginData = yield this.Auth.getUser();
            if (this.loginData) {
                // getting Volunteering data
                this.getGroupData();
            }
        });
    }
    // getting Volunteering data
    getGroupData() {
        this.loader.presentLoading().then(() => {
            const body = {
                auth: 'Bearer ' + this.loginData.auth.access_token,
                id: this.loginData.user.id
            };
            // fetching Volunteering data
            this.apiService.getVolunteering(JSON.stringify(body)).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.volunteering) {
                    if (res.volunteering[0].length === 0) {
                        this.volunteeringdata = true;
                    }
                    else {
                        this.volunteeringdata = false;
                        this.data = res.volunteering[0];
                        let test;
                        let today;
                        let dd;
                        let mm;
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        // formatting date
                        let date = [];
                        for (let x = 0; x < this.data.length; x++) {
                            if (this.data[x].date) {
                                test = this.data[x].date;
                                today = new Date(test);
                                dd = today.getDate();
                                mm = monthNames[today.getMonth()];
                                date.push({ dd, mm });
                                this.data[x].start_date = date[x];
                            }
                            else if (this.data[x].date_of_service) {
                                test = this.data[x].date_of_service;
                                this.data[x].service_date = test;
                                today = new Date(test);
                                dd = today.getDate();
                                mm = monthNames[today.getMonth()];
                                date.push({ dd, mm });
                                this.data[x].date_of_service = date[x];
                            }
                        }
                    }
                }
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    // navigating to detail page
    openDetail(i) {
        let record_id = null;
        let id = null;
        if (this.data[i].record_id) {
            record_id = this.data[i].record_id;
        }
        else if (this.data[i].id) {
            id = this.data[i].id;
        }
        this.router.navigate(['my-volunteering-detail', {
                record_id: record_id,
                id: id
            }]);
    }
    // navigating to back page
    gotobackPage() {
        this.location.back();
    }
    setAnalytics() {
        let dev_id = '';
        let device = 'web';
        // preparing device data
        if (this.platform.is('android') || this.platform.is('iphone')) {
            dev_id = this.device.uuid;
            if (dev_id) {
                device = this.platform.platforms()[0];
            }
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.loginData ? this.loginData.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
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
        this.analytics.setAnalytics(body).subscribe((res) => {
        });
    }
    ionViewDidLeave() {
        this.setAnalytics();
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        this.event_provider.hidefooter(true, 'other');
    }
};
MyVolunteeringPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] }
];
MyVolunteeringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-volunteering',
        template: __webpack_require__(/*! raw-loader!./my-volunteering.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-volunteering/my-volunteering.page.html"),
        styles: [__webpack_require__(/*! ./my-volunteering.page.scss */ "./src/app/my-volunteering/my-volunteering.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"]])
], MyVolunteeringPage);



/***/ })

}]);
//# sourceMappingURL=my-volunteering-my-volunteering-module-es2015.js.map