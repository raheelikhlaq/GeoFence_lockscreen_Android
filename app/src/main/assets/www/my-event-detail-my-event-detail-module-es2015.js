(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-event-detail-my-event-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-event-detail/my-event-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-event-detail/my-event-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\" routerLink=\"/my-events\" routerDirection=\"root\"></ion-icon>&nbsp;\n      {{'MY_STUFF.event_detail' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"event_data\" class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-grid class=\"ion-no-padding\">\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card *ngIf=\"!qr_img\"\n                                  class=\"ionCard ionCard--noPadding ionCard--mobile\">\n                            <div class=\"embed-responsive embed-responsive-16by9\">\n                                <img class=\"embed-responsive-item\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                            </div>\n                            <ion-card-content>\n                                <ion-row class=\"ion-align-items-center\">\n                                    <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"></ion-card-title>\n                                        <p></p>\n                                        <p>{{'MY_STUFF.description_not_available' | translate}}</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n                        <ion-card *ngIf=\"qr_img\"\n                                  class=\"ionCard ionCard--noPadding ionCard--mobile\">\n                            <div class=\"imgDiv qrCode-img\">\n                                <img style=\"width: auto\" class=\"imgDiv__img\" [src]=\"qr_img\"/>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card class=\"ionCard\">\n                            <ion-card-content class=\"ion-no-padding\">\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'MY_STUFF.name' | translate}}</h2>\n                                            <p class=\"ionMedia__text\"></p>\n                                            <p class=\"ionMedia__text\">{{event_data.church_name}} </p>\n                                        </ion-label>\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\"> {{'MY_STUFF.start_date' | translate}}</h2>\n                                            <p class=\"ionMedia__text\"></p>\n                                            <p class=\"ionMedia__text\"></p>\n                                            <p class=\"ionMedia__text\">{{appService.getDateTimeFormat(event_data.start_date)}}</p>\n                                        </ion-label>\n\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                            <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\"> {{'MY_STUFF.end_date' | translate}}</h2>\n                                            <p class=\"ionMedia__text\"></p>\n                                            <p class=\"ionMedia__text\"></p>\n                                            <p class=\"ionMedia__text\">{{appService.getDateTimeFormat(event_data.end_date)}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col size=\"12\">\n                        <ion-card class=\"ionCard\">\n                            <h3 class=\"heading3\"  style=\"margin-top: 0;\">{{'MY_STUFF.check_in_link' | translate}}:</h3>\n                            <a class=\"hide-mobile\" [href]=\"qr_url\" target=\"_blank\"> {{qr_url}}</a>\n                            <!--             for mobile-->\n                            <a class=\"show-mobile\" (click)=\"openBrowser()\"> {{qr_url}}</a>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let AppService = class AppService {
    constructor() { }
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
    getGroupsTimeFormat(date) {
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
    }
    getTimeFormat(time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    }
    getDateFormat(date) {
        let dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    }
    getDateTimeFormat(dateAndTime) {
        let dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
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
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/my-event-detail/my-event-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/my-event-detail/my-event-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: MyEventDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventDetailPageModule", function() { return MyEventDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_event_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-event-detail.page */ "./src/app/my-event-detail/my-event-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _my_event_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyEventDetailPage"]
    }
];
let MyEventDetailPageModule = class MyEventDetailPageModule {
};
MyEventDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_event_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyEventDetailPage"]]
    })
], MyEventDetailPageModule);



/***/ }),

/***/ "./src/app/my-event-detail/my-event-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/my-event-detail/my-event-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qrCode-img {\n  height: 293px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL215LWV2ZW50LWRldGFpbC9teS1ldmVudC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9teS1ldmVudC1kZXRhaWwvbXktZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL215LWV2ZW50LWRldGFpbC9teS1ldmVudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFyQ29kZS1pbWcge1xuICBoZWlnaHQ6IDI5M3B4O1xufSIsIi5xckNvZGUtaW1nIHtcbiAgaGVpZ2h0OiAyOTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-event-detail/my-event-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-event-detail/my-event-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: MyEventDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventDetailPage", function() { return MyEventDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");










let MyEventDetailPage = class MyEventDetailPage {
    constructor(route, apiService, loader, Auth, appService, iab, toast, translate) {
        this.route = route;
        this.apiService = apiService;
        this.loader = loader;
        this.Auth = Auth;
        this.appService = appService;
        this.iab = iab;
        this.toast = toast;
        this.translate = translate;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ngOnInit() {
        // assigning data from URL Params
        this.event_id = this.route.snapshot.paramMap.get('event_id');
        // getting user data
        this.getLoginData();
    }
    getLoginData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting user from service
            this.loginData = yield this.Auth.getUser();
            if (this.loginData) {
                // getting event data
                this.getEvent_data();
            }
        });
    }
    // getting event data
    getEvent_data() {
        this.loader.presentLoading().then(() => {
            const body = {
                auth: 'Bearer ' + this.loginData.auth.access_token,
                id: this.loginData.user.id
            };
            // fetching events
            this.apiService.getEvents(JSON.stringify(body)).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = res.events[0];
                let filtered = data.filter(x => x.id === this.event_id); // filtering out selected event
                this.event_data = yield filtered[0];
                this.qr_url = "https://manage.churchbase.com/index.php?checkin/add/" + this.event_data.id + "/" + this.event_data.link_code;
                this.qr_img = "https://manage.churchbase.com/index.php?files/get/comm_qr/" + this.event_data.qr_id + ".png";
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    openBrowser() {
        this.iab.create((this.qr_url));
    }
};
MyEventDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
MyEventDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-event-detail',
        template: __webpack_require__(/*! raw-loader!./my-event-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-event-detail/my-event-detail.page.html"),
        styles: [__webpack_require__(/*! ./my-event-detail.page.scss */ "./src/app/my-event-detail/my-event-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
], MyEventDetailPage);



/***/ })

}]);
//# sourceMappingURL=my-event-detail-my-event-detail-module-es2015.js.map