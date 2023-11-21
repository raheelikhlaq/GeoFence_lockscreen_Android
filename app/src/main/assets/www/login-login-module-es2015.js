(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col [size]=\"12\" [sizeMd]=\"8\" [sizeLg]=\"6\">\n                        <ion-card class=\"ionCard loginCard\">\n                            <div class=\"imgDiv imgDiv--loginCard\" *ngIf=\"logoURL && theme && theme.ch_id !== '1000'\">\n                                <img [src]=\"logoURL\" class=\"imgDiv__img imgDiv__img--lightMood\">\n                            </div>\n                            <div class=\"imgDiv imgDiv--loginCard\" *ngIf=\"darklogoURL && theme && theme.ch_id !== '1000'\">\n                                <img [src]=\"darklogoURL\" class=\"imgDiv__img imgDiv__img--darkMood\">\n                            </div>\n                            <div class=\"ion-margin-bottom mb-30\">\n                                <h2 *ngIf=\"theme && church_id === '1000'\" class=\"ion-text-center heading2\" style=\"margin-bottom: 0;\">{{'LOGIN.create_your_account' | translate}}</h2>\n                                <h2 *ngIf=\"theme && church_id !== '1000'\" class=\"ion-text-center heading2\" style=\"margin-bottom: 0;\">{{'LOGIN.welcome_back' | translate}}</h2>\n                                <p  *ngIf=\"switch === 'login' \" class=\"ion-text-center text-gray font-weight-normal\" style=\"margin-top: 0;\">{{church_id === '1000' ? ('LOGIN.enter_mobile_email' | translate) : ('LOGIN.enter_mobile' | translate)  }}</p>\n                                <p  *ngIf=\"switch === 'security' \" class=\"ion-text-center text-gray font-weight-normal\" style=\"margin-top: 0;\">{{fromEmail === true ? ('LOGIN.security_code_sent_email' | translate) : ('LOGIN.security_code_sent' | translate)}}</p>\n                            </div>\n                            <div class=\"ion-margin-bottom, mb-30\" >\n                                <ion-item class=\"inputField inputField--gray mb-30\" lines=\"none\">\n                                    <ion-label *ngIf=\"!country_code && switch === 'login'\">Code</ion-label>\n                                    <ion-select *ngIf=\"switch === 'login'\" interface=\"action-sheet\" [(ngModel)]=\"country_code\"\n                                                (ionChange)=\"codeSelected()\"\n                                                name=\"frequency\"\n                                                class=\"inputField__area inputField__area--select\"\n                                                style=\"padding-left: 0;\">\n                                        <ion-select-option *ngFor=\"let code of country_codes\" [value]=\"code\">{{code.iso3}} (+{{code.phonecode}})</ion-select-option>\n\n                                    </ion-select>\n                                    <ion-input class=\"inputField__area\" inputmode=\"tel\" [maxlength]=\"max_digit\"  (keypress)=\"numberOnlyValidation($event)\" [(ngModel)]=\"parsedPhoneNumber\" (ngModelChange)=\"formatPhoneNumber(parsedPhoneNumber)\" placeholder=\"{{'LOGIN.mobile_number' | translate}}\" *ngIf=\"switch === 'login' && church_id !== '1000'\"></ion-input>\n\n                                    <ion-input class=\"inputField__area\" inputmode=\"text\" [(ngModel)]=\"parsedPhoneNumber\" (ngModelChange)=\"formatPhoneNumber(parsedPhoneNumber)\" placeholder=\"{{'LOGIN.mobile_number' | translate}} OR Email\" *ngIf=\"switch === 'login' && church_id === '1000'\"></ion-input>\n                                    <ion-input  maxlength=\"7\"  class=\"inputField__area\"  placeholder=\"{{'LOGIN.security_code' | translate}}\" (keypress)=\"numberOnlyValidation($event)\" [(ngModel)]=\"parsedSecurityCode\" (ngModelChange)=\"addHyphen()\" *ngIf=\"switch === 'security' \" inputmode=\"tel\" ></ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" (click)=\"verifyRecaptcha('login')\"   *ngIf=\"switch === 'login' \">\n                                    {{'LOGIN.next' | translate}}\n                                    <ion-icon name=\"arrow-dropright\"></ion-icon>\n                                </ion-button>\n                                <ng-container  *ngIf=\"page != 'chat'\">\n                                    <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" (click)=\"loginAsGuest()\" *ngIf=\"switch === 'login' \">\n                                        {{'LOGIN.continue_as_guest' | translate}}\n                                    </ion-button>\n                                </ng-container>\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" (click)=\"verifyCode()\" *ngIf=\"switch === 'security' \">\n                                    {{'LOGIN.login' | translate}}\n                                </ion-button>\n\n                                <p class=\"ion-text-center text-gray font-weight-normal\" *ngIf=\"switch === 'security' \">{{'LOGIN.didnt_receive_code' | translate}}?&nbsp;\n                                    <ion-label (click)=\"verifyRecaptcha('sendAgain')\" class=\"text-dark\" style=\"cursor: pointer;outline: none !important;\">\n                                        {{'LOGIN.send_again' | translate}}\n                                    </ion-label>\n                                </p>\n                                <p class=\"ion-text-center text-gray font-weight-normal\" *ngIf=\"switch === 'security' \">{{fromEmail === true ? ('LOGIN.email_not_right' | translate) : ('LOGIN.number_not_right' | translate)}}?&nbsp;\n                                    <ion-label (click)=\"reenterphone()\" class=\"text-dark\" style=\"cursor: pointer;outline: none !important;\">\n                                        {{'LOGIN.reenter' | translate}}\n                                    </ion-label>\n                                </p>\n                            </div>\n                            <div style=\"font-size: small\" class=\"ion-text-center\">\n                                {{'GIVING.site_protected_google' | translate}}\n                                <a (click)=\"openurlinbrowser('https://policies.google.com/privacy')\" style=\"cursor: pointer\">{{'GIVING.privacy_policy' | translate}}</a> {{'GIVING.and' | translate}}\n                                <a (click)=\"openurlinbrowser('https://policies.google.com/terms')\" style=\"cursor: pointer\">{{'GIVING.term_service' | translate}}</a> {{'GIVING.apply' | translate}}.\n                              </div>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer *ngIf=\"show_footer\"></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_logo_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/logo-service.service */ "./src/services/logo-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var src_services_my_contribution_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/my-contribution.service */ "./src/services/my-contribution.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_services_analytics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");






















let LoginPage = class LoginPage {
    constructor(route, router, idService, storage, Auth, loader, toast, logoService, location, device, platform, event_provider, apiService, translate, contribution, recaptchaV3Service, iab, analytics, firebaseService, commonService) {
        this.route = route;
        this.router = router;
        this.idService = idService;
        this.storage = storage;
        this.Auth = Auth;
        this.loader = loader;
        this.toast = toast;
        this.logoService = logoService;
        this.location = location;
        this.device = device;
        this.platform = platform;
        this.event_provider = event_provider;
        this.apiService = apiService;
        this.translate = translate;
        this.contribution = contribution;
        this.recaptchaV3Service = recaptchaV3Service;
        this.iab = iab;
        this.analytics = analytics;
        this.firebaseService = firebaseService;
        this.commonService = commonService;
        this.userPhone = '';
        this.securityCode = '';
        this.guest = false;
        this.switch = 'login';
        this.show_footer = true;
        this.device_id = "";
        this.church_id = "";
        this.fromEmail = false;
        this.deviceID = "";
        this.country_codes = [];
        this.country_code = '';
        this.complete_num = '';
        this.max_digit = 10;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        this.securityOption = true;
        // ======== checking if domain exists for current url =====================================
        let url = new URL(window.location.href);
        this.current_domain = url.host;
        let path = url.pathname.replace("/", "");
        if (this.current_domain !== "builder.churchbase.com") {
            const body = JSON.stringify({ domain_name: this.current_domain });
            this.apiService.get_domain(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    this.church_id = res.church_id;
                    idService.setId(this.church_id);
                }
            }));
        }
        // ===========================================================================================
    }
    codeSelected() {
        this.max_digit = parseInt(this.country_code.max_digits);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting theme from local storage
            yield this.getDesign();
            this.device_id = localStorage.getItem('device_id');
            // this.platform.ready().then(() => {
            //         this.device_id = this.device.uuid;
            // });
            this.logoService.setStatus(false);
            // event subscription to hide header
            this.page = this.route.snapshot.paramMap.get('page');
            this.path = this.route.snapshot.paramMap.get('path');
            this.color = this.route.snapshot.paramMap.get('color');
            this.app_style = this.route.snapshot.paramMap.get('app_style');
            this.showHeaderFooter = this.route.snapshot.paramMap.get('headerFooter');
            this.mode = this.route.snapshot.paramMap.get('mode');
            if (this.showHeaderFooter === "external") {
                this.show_footer = false;
                this.event_provider.hideheaderlogin();
            }
            this.event_provider.updateGivingColor.subscribe(() => {
                if (this.color) {
                    document.documentElement.style.setProperty('--primary-color', this.color);
                }
                if (this.app_style === "2") {
                    // in dark case
                    this.event_provider.darkmodeon(true); // calling event
                }
                else if (this.app_style === "1") {
                    this.event_provider.darkmodeon(false); // calling event
                }
            });
            this.loader.stopLoading();
            this.getCountryCodes();
        });
    }
    getCountryCodes() {
        this.Auth.getcountrycodes().subscribe((res) => {
            if (res) {
                this.country_codes = res.codes;
                this.country_code = this.country_codes.find(x => x.iso3 == 'USA');
            }
        });
    }
    getDesign() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting theme from local storage
            this.theme = yield this.storage.get('theme');
            if (this.theme) {
                this.church_id = this.theme.ch_id;
                if (this.theme.logo !== '' && this.theme.logo !== null && this.theme.app_style === "1") {
                    this.logoURL = this.theme.logo;
                }
                else if (this.theme.dark_logo !== '' && this.theme.dark_logo !== null && this.theme.app_style === "2") {
                    this.darklogoURL = this.theme.dark_logo;
                }
                if (!this.theme.ch_id) {
                    this.theme.ch_id = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].church_id;
                }
                // if (this.color) {
                //     this.loader.presentLoading().then(() => {
                //         let count = 0;
                //         let interval = setInterval(() => {
                //             count++;
                //             if (count === 5) {
                //                 document.documentElement.style.setProperty('--primary-color', this.color);
                //                 this.loader.stopLoading();
                //                 clearInterval(interval);
                //             }
                //         }, 1000)
                //     })
                // }
            }
        });
    }
    loginWithPhoneNumber() {
        if (this.userPhone === '1000000001') {
            this.parsedPhoneNumber = localStorage.getItem('fcm_token');
        }
        if (this.userPhone === '') {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.phone_required : 'Phone number is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            return;
        }
        let isnum = /^\d+$/.test(this.userPhone);
        if (!isnum && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userPhone))) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.incorrect_email : 'Incorrect Email Format'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            return;
        }
        if (isnum) {
            if (this.country_code.phonecode == '') {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.phone_code_required : 'Phone code is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
        }
        if (isnum) {
            this.fromEmail = false;
            this.complete_num = '+' + this.country_code.phonecode + this.userPhone;
            // preparing data for login
            const body = JSON.stringify({
                phone_number: this.complete_num,
                churchid: this.church_id,
                only_number: this.userPhone,
            });
            this.loader.presentLoading().then(() => {
                // saving login data
                this.Auth.loginWithNumber(body).subscribe((res) => {
                    if (res.status === true) {
                        this.switch = 'security'; // changing view to Security Code
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : 'Error: ') + ' ' + res.message ? res.message : (this.alertMessage ? this.alertMessage.InvalidNumber : 'Invalid Number'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
        else {
            this.fromEmail = true;
            // preparing data for login
            const body = JSON.stringify({
                email: this.userPhone,
                churchid: this.church_id
            });
            this.loader.presentLoading().then(() => {
                // saving login data
                this.Auth.loginWithEmail(body).subscribe((res) => {
                    if (res.status === true) {
                        this.switch = 'security'; // changing view to Security Code
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : 'Error: ') + ' ' + res.message ? res.message : (this.alertMessage ? this.alertMessage.InvalidNumber : 'Invalid Number'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
        this.storage.get('theme').then(res => {
            this.theme = res;
        });
    }
    // to Resend code on Phone Number
    sendagain() {
        var body;
        if (this.fromEmail === true) {
            body = JSON.stringify({
                email: this.userPhone
            });
            this.loader.presentLoading().then(() => {
                this.Auth.loginWithEmail(body).subscribe((res) => {
                    if (res.status) {
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
        else {
            body = JSON.stringify({
                phone_number: this.complete_num
            });
            this.loader.presentLoading().then(() => {
                this.Auth.loginWithNumber(body).subscribe((res) => {
                    if (res.status) {
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
    }
    reenterphone() {
        this.switch = 'login';
        this.userPhone = '';
        this.parsedPhoneNumber = '';
    }
    // for verifying enetered code
    verifyCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.securityCode === '') {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.security_required : 'Security code is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
            var body;
            if (this.fromEmail === true) {
                body = JSON.stringify({
                    email: this.userPhone,
                    code: this.securityCode,
                    churchid: this.church_id,
                    fcm_token: localStorage.getItem('fcm_token')
                });
            }
            else {
                body = JSON.stringify({
                    phone_number: this.userPhone,
                    code: this.securityCode,
                    churchid: this.church_id,
                    complete_num: this.complete_num,
                    fcm_token: localStorage.getItem('fcm_token')
                });
            }
            this.loader.presentLoading().then(() => {
                // verifying OTP
                this.Auth.verifyOTP(body, this.fromEmail).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.status) {
                        this.securityOption = false;
                        let token = {
                            access_token: res.access_token,
                            access_token_expires_in: res.access_token_expires_in,
                            refresh_token: res.refresh_token
                        };
                        let data = {
                            auth: token,
                            user: res.account_donor
                        };
                        console.log(res.account_donor, "loginser");
                        this.commonService.geoFancingCalling(res.account_donor.id);
                        if (this.mode === "giving") {
                            // storing user in giving profile
                            yield this.Auth.storeUserGiving(data);
                            this.event_provider.userlogin();
                            this.loader.stopLoading();
                            this.router.navigate([this.page]);
                        }
                        else {
                            yield this.Auth.storeUser(data);
                            this.analytics.startAnalytics();
                            // firing event to update wherever this event is subscribed
                            this.event_provider.updateSideMenu(); // ------------- test
                            this.event_provider.userlogin(); // calling event
                            this.loader.stopLoading();
                            if (this.page !== null) {
                                if (this.page == 'chat') {
                                    this.router.navigate(['home-tabs/chat']);
                                }
                                else {
                                    this.router.navigate([this.page]);
                                }
                            }
                            else {
                                this.location.back(); // after logging in navigate to previous page
                            }
                        }
                        if (this.device_id) {
                            let bodysent = {
                                'church_id': this.theme.ch_id,
                                'device_id': this.device_id,
                                'account_donor_id': res.account_donor.id
                            };
                            this.Auth.createPersonToken(JSON.stringify(bodysent)).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            }));
                        }
                        // this.router.navigate(['/home-tabs/home/' + this.theme.ch_id]);\
                        if (this.platform.is("cordova")) {
                            this.updateTokenOnServer();
                        }
                        this.loader.stopLoading();
                    }
                    else if (!res.status && res.message === 'No Record Found') {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.invalid_code : 'Sorry, Invalid Code. Try again!'), (this.alertMessage ? this.alertMessage.InvalidCode : 'Invalid Code!'), "warning");
                        this.loader.stopLoading();
                    }
                    else {
                        if (this.mode === "giving") {
                            let temp = JSON.parse(body);
                            temp['page'] = this.page;
                            temp['mode'] = this.mode;
                            temp['headerFooter'] = this.showHeaderFooter;
                            temp['color'] = this.color;
                            temp['app_style'] = this.app_style;
                            body = JSON.stringify(temp);
                        }
                        else {
                            if (this.page !== null) {
                                let temp = JSON.parse(body);
                                temp['page'] = this.page;
                                temp['mode'] = this.mode;
                                body = JSON.stringify(temp);
                            }
                        }
                        let tempbody = JSON.parse(body);
                        tempbody['fromEmail'] = this.fromEmail;
                        body = JSON.stringify(tempbody);
                        // if number is not registered, navigating to sign up
                        this.router.navigate(['/signup', { data: body }]);
                        this.loader.stopLoading();
                    }
                }), (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        });
    }
    // only take numbers in phone number field
    formatPhoneNumber(phone) {
        this.userPhone = phone;
        let isnum = /^\d+$/.test(phone);
        // if (phone.length === 10 && isnum === true) {
        //     const cleaned = ('' + phone).replace(/\D/g, '');
        //     const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        //     if (match) {
        //         const intlCode = (match[1] ? '+1 ' : '');
        //         this.parsedPhoneNumber = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        //     }
        //     return null;
        // }
    }
    // adds hyphen between OTP automatically
    addHyphen() {
        this.parsedSecurityCode = this.parsedSecurityCode.split('-').join('');
        this.parsedSecurityCode = this.parsedSecurityCode.split('').join('-');
        if (this.parsedSecurityCode.length === 7) {
            this.securityCode = this.parsedSecurityCode.split('-').join('');
            this.verifyCode();
        }
    }
    // only take numbers in OTP field
    numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    // navigate to donations page
    loginAsGuest() {
        this.Auth.storeGuest("guest");
        this.location.back(); // after logging in as guest navigate to previous page
    }
    ionViewWillLeave() {
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (this.mode === "giving" && page_href !== this.page && !page_href.includes('/signup')) {
            this.event_provider.setdefaultcolormode(); // calling event
            this.event_provider.defaultlogo(); // calling event
        }
    }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(false, 'login');
        // this.event_provider.hidefooter(true, 'other');
    }
    verifyRecaptcha(from) {
        this.loader.presentLoading().then(() => {
            // let current_url = new URL(window.location.href);
            let current_url = JSON.parse(localStorage.getItem("url"));
            this.recaptchaV3Service.execute('payment_giveNew')
                .subscribe((token) => {
                if (token) {
                    this.contribution.checkCaptcha(token).subscribe((res) => {
                        this.loader.stopLoading();
                        if (res && res.status && res.message) {
                            let resp = JSON.parse(res.message);
                            if (resp.success === true && resp.score > 0.3) {
                                if (from === 'login') {
                                    this.newLoginWithPhoneNumber(false);
                                }
                                else {
                                    this.newSendagain(false);
                                }
                            }
                            else if (resp.success === true && resp.score <= 0.3) {
                                this.toast.presentToastWithOptions("User not Verified by reCaptcha, Enter Details again!", "ReCaptcha Alert!", 'warning');
                            }
                            else if (resp.success === false) {
                                this.toast.presentToastWithOptions("Site Not Verified by reCaptcha", "ReCaptcha Alert!", 'warning');
                            }
                        }
                        else {
                            this.toast.presentToastWithOptions("Site Not Verified by reCaptcha!", "ReCaptcha Alert!", 'warning');
                        }
                    }, (err) => {
                        this.loader.stopLoading();
                        this.toast.presentToastWithOptions("Error while verifying by reCaptcha!", "Error", 'warning');
                    });
                }
                else {
                    this.loader.stopLoading();
                    this.toast.presentToastWithOptions("Token not found by reCaptcha!", "ReCaptcha Alert!", 'warning');
                }
            }, error => {
                this.loader.stopLoading();
                if (from === 'login') {
                    this.newLoginWithPhoneNumber(true);
                }
                else {
                    this.newSendagain(true);
                }
            });
        });
    }
    newLoginWithPhoneNumber(bypass) {
        console.log("object");
        if (this.userPhone === '') {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.phone_required : 'Phone number is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            return;
        }
        let isnum = /^\d+$/.test(this.userPhone);
        if (!isnum && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userPhone))) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.incorrect_email : 'Incorrect Email Format'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            return;
        }
        if (isnum) {
            if (this.country_code.phonecode == '') {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.phone_code_required : 'Phone code is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
        }
        if (isnum) {
            this.fromEmail = false;
            this.complete_num = '+' + this.country_code.phonecode + this.userPhone;
            // preparing data for login
            const body = JSON.stringify({
                phone_number: this.complete_num,
                churchid: this.church_id,
                only_number: this.userPhone,
                bypass: bypass
            });
            this.loader.presentLoading().then(() => {
                // saving login data
                localStorage.setItem("sendOTPBody", (body));
                this.Auth.newLoginWithNumber(body).subscribe((res) => {
                    if (res.status === true) {
                        this.switch = 'security'; // changing view to Security Code
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : 'Error: ') + ' ' + res.message ? res.message : (this.alertMessage ? this.alertMessage.InvalidNumber : 'Invalid Number'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    this.loader.stopLoading();
                    if (err.status === 401) {
                        // this.callingfromInterceptor('login');
                    }
                    else {
                        let message = err.message;
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    }
                });
            });
        }
        else {
            this.fromEmail = true;
            // preparing data for login
            const body = JSON.stringify({
                email: this.userPhone,
                churchid: this.church_id,
                bypass: bypass
            });
            this.loader.presentLoading().then(() => {
                // saving login data
                this.Auth.loginWithEmail(body).subscribe((res) => {
                    if (res.status === true) {
                        this.switch = 'security'; // changing view to Security Code
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : 'Error: ') + ' ' + res.message ? res.message : (this.alertMessage ? this.alertMessage.InvalidNumber : 'Invalid Number'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
        this.storage.get('theme').then(res => {
            this.theme = res;
        });
    }
    // to Resend code on Phone Number
    newSendagain(bypass) {
        var body;
        if (this.fromEmail === true) {
            body = JSON.stringify({
                email: this.userPhone,
                bypass: bypass
            });
            this.loader.presentLoading().then(() => {
                this.Auth.loginWithEmail(body).subscribe((res) => {
                    if (res.status) {
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        }
        else {
            body = JSON.stringify({
                phone_number: this.complete_num,
                churchid: this.church_id,
                only_number: this.userPhone,
                bypass: bypass
            });
            this.loader.presentLoading().then(() => {
                this.Auth.newLoginWithNumber(body).subscribe((res) => {
                    this.loader.stopLoading();
                    if (res.status) {
                        this.loader.stopLoading();
                    }
                }, (err) => {
                    this.loader.stopLoading();
                    if (err.status === 401) {
                        // this.callingfromInterceptor('sendAgain');
                    }
                    else {
                        let message = err.message;
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    }
                });
            });
        }
    }
    updateTokenOnServer() {
        let device = this.platform.platforms()[0];
        let body = {
            church_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].church_id,
            device_id: localStorage.getItem('device_id'),
            device_token: localStorage.getItem("fcm_token"),
            device: device,
        };
        this.firebaseService.sendToken(JSON.stringify(body)).subscribe();
    }
    // in external safari/chrome
    openurlinbrowser(url) {
        this.iab.create(url, "_system");
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _services_logo_service_service__WEBPACK_IMPORTED_MODULE_10__["LogoServiceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
    { type: src_services_my_contribution_service__WEBPACK_IMPORTED_MODULE_17__["MyContributionService"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__["ReCaptchaV3Service"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"] },
    { type: src_services_analytics_service__WEBPACK_IMPORTED_MODULE_19__["AnalyticsService"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_20__["FirebaseService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_21__["CommonService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _services_logo_service_service__WEBPACK_IMPORTED_MODULE_10__["LogoServiceService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
        src_services_my_contribution_service__WEBPACK_IMPORTED_MODULE_17__["MyContributionService"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__["ReCaptchaV3Service"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"],
        src_services_analytics_service__WEBPACK_IMPORTED_MODULE_19__["AnalyticsService"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_20__["FirebaseService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_21__["CommonService"]])
], LoginPage);

// callingfromInterceptor(from){
//     this.deviceID = this.getUniqueId(6);
//     if(this.deviceID.length === 35){
//         this.deviceID = this.deviceID + 'a';
//     }
//     var bodies = {
//       string: this.deviceID
//       }
//       console.log(bodies);
//     this.Auth.getToken(bodies).subscribe((res:any)=>{
//       if(res.status){
//         localStorage.setItem("apiAuthToken", res.token)
//         this.verifyRecaptcha(from);
//       }
//     }, (err: any) => {
//       // this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
//     })
// }
// getUniqueId(parts: number): string {
//     const stringArr = [];
//     let ar= ['d','e','r','n','a','g'] 
//     for(let i = 0; i< parts; i++){
//         // tslint:disable-next-line:no-bitwise
//         let S4 = (((1 + Math.random()) * 0x100000000) | 0).toString(36).substring(1);
//         let random_index = Math.random() * parts;
//          S4 = S4.slice(0, random_index) + ar[i] +  S4.slice(random_index, 5);
//         stringArr.push(S4);
//     }
//     return stringArr.join('');
// }


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map