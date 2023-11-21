(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader  inner-page\" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons class=\"cursor-pointer\" slot=\"start\" routerLink=\"/\" routerDirection=\"root\">\n            <ion-icon name=\"arrow-back\" size=\"large\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col [size]=\"12\" [sizeMd]=\"8\" [sizeLg]=\"6\">\n                        <ion-card class=\"ionCard loginCard\">\n                            <div class=\"imgDiv imgDiv--loginCard\" *ngIf=\"logoURL\">\n                                <img [src]=\"logoURL\" class=\"imgDiv__img\">\n                            </div>\n                            <div class=\"ion-margin-bottom mb-30\">\n                                <h2 class=\"ion-text-center heading2\" style=\"margin-bottom: 0;\">{{'SIGNUP.hey_there' | translate}}!</h2>\n                                <p class=\"ion-text-center text-gray font-weight-normal\" style=\"margin-top: 0;\">{{'SIGNUP.tell_about' | translate}}</p>\n                            </div>\n                            <form #form=\"ngForm\" novalidate>\n                                <div [hidden]=\"register\">\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\" name=\"user_first_name\" (keyup)=\"step1Validation()\" [(ngModel)]=\"user_first_name\" placeholder=\"{{'SIGNUP.first_name' | translate}}\"></ion-input>\n                                        </ion-item>\n                                    </div>\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\" name=\"user_last_name\" [(ngModel)]=\"user_last_name\" placeholder=\"{{'SIGNUP.last_name' | translate}}\"></ion-input>\n                                        </ion-item>\n                                    </div>\n                                    <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"inputField inputField--gray\" lines=\"none\">\n                                        <ion-datetime name=\"user_age\" [(ngModel)]=\"user_age\" class=\"inputField__area inputField__area--datePicker\"  displayFormat=\"MM/DD/YY\" cancelText=\"{{'datetime.cancel' | translate}}\" doneText=\"{{'datetime.done' | translate}}\"\n                                                      placeholder=\"{{'PROFILE.date_of_birth' | translate}}\"></ion-datetime>\n                                    </ion-item>\n                                    </div>\n                                    <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"inputField inputField--gray\" lines=\"none\">\n                                        <ion-select interface=\"action-sheet\" placeholder=\"{{'PROFILE.gender' | translate}}\" [(ngModel)]=\"user_gender\"  name=\"user_gender\" class=\"inputField__area inputField__area--select\" style=\"padding-left: 0;\">\n                                            <ion-select-option value=\"male\">{{'PROFILE.male' | translate}}</ion-select-option>\n                                            <ion-select-option value=\"Female\">{{'PROFILE.female' | translate}}</ion-select-option>\n    <!--                                        <ion-select-option value=\"other\">{{'PROFILE.other' | translate}}</ion-select-option>-->\n                                        </ion-select>\n                                    </ion-item>\n                                    </div>\n                                    <div *ngIf=\"!fromEmail\" class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input class=\"inputField__area\" inputmode=\"email\" name=\"user_email\" (keyup)=\"step1Validation()\" [(ngModel)]=\"user_email\" placeholder=\"Email\"></ion-input>\n                                        </ion-item>\n                                    </div>\n                                    <div *ngIf=\"fromEmail === true\" class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-label *ngIf=\"!country_code\">Code</ion-label>\n                                            <ion-select interface=\"action-sheet\" [(ngModel)]=\"country_code\"\n                                                        name=\"frequency\"\n                                                        class=\"inputField__area inputField__area--select\"\n                                                        style=\"padding-left: 0;\">\n                                                <ion-select-option *ngFor=\"let code of country_codes\" [value]=\"code.phonecode\">{{code.iso3}} (+{{code.phonecode}})</ion-select-option>\n\n                                            </ion-select>\n                                            <ion-input class=\"inputField__area\" inputmode=\"tel\" name=\"phone\" maxlength=\"10\" (keyup)=\"step1Validation()\" [(ngModel)]=\"user_email\" placeholder=\"Phone\"></ion-input>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                                <!--            page 2                -->\n                                <div [hidden]=\"!register\">\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\" name=\"user_address\" [(ngModel)]=\"user_address\" placeholder=\"{{'SIGNUP.address' | translate}}\"></ion-input>\n                                        </ion-item>\n                                    </div>\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\" name=\"user_city\" [(ngModel)]=\"user_city\" placeholder=\"{{'SIGNUP.city' | translate}}\"></ion-input>\n                                        </ion-item>\n                                    </div>\n<!--                                    <div class=\"ion-margin-bottom\">-->\n\n                                        <div class=\"ion-margin-bottom\">\n                                            <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                                <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\" name=\"user_state\" [(ngModel)]=\"user_state\" placeholder=\"{{'SIGNUP.state' | translate}}\"></ion-input>\n                                            </ion-item>\n                                        </div>\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                            <ion-input class=\"inputField__area\" inputmode=\"tel\" name=\"user_postal_code\" [(ngModel)]=\"user_postal_code\" placeholder=\"Postal Code/ZIP\"></ion-input>\n                                        </ion-item>\n                                    </div>\n<!--                                    </div>-->\n                                </div>\n                                <div class=\"ion-margin-bottom mb-30\">\n                                    <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" (click)=\"nextPage('step1')\" [disabled]=\"submitButtonDisable\" [hidden]=\"register\">\n                                        {{'SIGNUP.submit' | translate}}\n                                        <ion-icon name=\"arrow-dropright\"></ion-icon>\n                                    </ion-button>\n\n                                    <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" (click)=\"nextPage()\" [hidden]=\"!register\">\n                                        {{'SIGNUP.back' | translate}}\n                                    </ion-button>\n\n                                    <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" (click)=\"registerUser()\" expand=\"block\" [hidden]=\"!register\">\n                                        {{'SIGNUP.register' | translate}}\n                                    </ion-button>\n                                </div>\n                            </form>\n                            <p *ngIf=\"!page\" class=\"ion-text-center text-gray font-weight-normal\">{{'SIGNUP.already_message' | translate}}?&nbsp;\n                                <ion-label [routerLink]=\"'/login/'\" routerDirection=\"root\" class=\"text-dark\" style=\"cursor: pointer;outline: none !important;\">\n                                    {{'SIGNUP.login' | translate}}\n                                </ion-label>\n                            </p>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer *ngIf=\"show_footer\"></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"show_footer\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var src_services_firebase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/firebase.service */ "./src/services/firebase.service.ts");














let SignupPage = class SignupPage {
    constructor(route, router, idService, storage, Auth, loader, toast, 
    //   public events: Events,
    event_provider, translate, menu, analytics, platform, firebaseService) {
        this.route = route;
        this.router = router;
        this.idService = idService;
        this.storage = storage;
        this.Auth = Auth;
        this.loader = loader;
        this.toast = toast;
        this.event_provider = event_provider;
        this.translate = translate;
        this.menu = menu;
        this.analytics = analytics;
        this.platform = platform;
        this.firebaseService = firebaseService;
        this.register = false;
        this.submitButtonDisable = true;
        //SignUp
        this.user_first_name = '';
        this.user_last_name = '';
        this.user_email = '';
        this.user_city = '';
        this.user_address = '';
        this.user_postal_code = '';
        this.user_state = '';
        this.user_age = '';
        this.user_gender = '';
        this.show_footer = true;
        this.fromEmail = false;
        this.country_codes = [];
        this.country_code = '';
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
        this.loginData = this.route.snapshot.paramMap.get('data');
        this.page = JSON.parse(this.loginData).page; // if coming from giving page
        this.mode = JSON.parse(this.loginData).mode; // if coming from giving page
        this.headerFooter = JSON.parse(this.loginData).headerFooter; // if coming from giving page
        this.color = JSON.parse(this.loginData).color; // if coming from giving page
        this.app_style = JSON.parse(this.loginData).app_style; // if coming from giving page
        this.fromEmail = JSON.parse(this.loginData).fromEmail;
        if (this.headerFooter === "external") {
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
        // getting theme
        this.getDesign();
        this.getCountryCodes();
    }
    getCountryCodes() {
        this.Auth.getcountrycodes().subscribe((res) => {
            if (res) {
                this.country_codes = res.codes;
            }
        });
    }
    getDesign() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting theme from local storage
            this.theme = yield this.storage.get('theme');
            if (this.theme) {
                if (this.theme.logo !== '' && this.theme.logo !== null && this.theme.app_style === "1") {
                    this.logoURL = this.theme.logo;
                }
                else if (this.theme.dark_logo !== '' && this.theme.dark_logo !== null && this.theme.app_style === "2") {
                    this.logoURL = this.theme.dark_logo;
                }
                if (this.theme.ch_id === '1000') {
                    this.show_footer = false;
                }
            }
        });
    }
    registerUser() {
        if (this.user_first_name === '' && this.user_email === '' && this.user_city === '' && this.user_address === '' && this.user_postal_code === '' && this.user_state === '') {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.missing_required_fields : 'Missing Required Fields'), (this.alertMessage ? this.alertMessage.WarningMessage : (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message')), 'warning');
            return;
        }
        if (this.fromEmail == true) {
            if (this.country_code == '') {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.phone_code_required : 'Phone code is required'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
        }
        var body;
        let loginData = JSON.parse(this.loginData);
        if (this.fromEmail === true) {
            body = JSON.stringify({
                churchid: this.theme.ch_id,
                phone_number: this.user_email,
                first_name: this.user_first_name,
                last_name: this.user_last_name,
                email: loginData.email,
                city: this.user_city,
                state: this.user_state,
                address: this.user_address,
                postal_code: this.user_postal_code,
                gender: this.user_gender,
                birthday: this.user_age,
            });
        }
        else {
            body = JSON.stringify({
                churchid: this.theme.ch_id,
                phone_number: loginData.phone_number,
                first_name: this.user_first_name,
                last_name: this.user_last_name,
                email: this.user_email,
                city: this.user_city,
                state: this.user_state,
                address: this.user_address,
                postal_code: this.user_postal_code,
                gender: this.user_gender,
                birthday: this.user_age,
            });
        }
        this.loader.presentLoading().then(() => {
            // saving register data
            this.Auth.registerUser(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    let token = {
                        access_token: res.access_token,
                        access_token_expires_in: res.access_token_expires_in,
                        refresh_token: res.refresh_token
                    };
                    let data = {
                        auth: token,
                        user: res.account_donor
                    };
                    if (this.mode === "giving") {
                        // storing user in giving profile
                        yield this.Auth.storeUserGiving(data);
                        this.event_provider.userlogin(); // calling event
                        this.router.navigate([this.page]);
                    }
                    else {
                        yield this.Auth.storeUser(data);
                        // firing event to update wherever this event is subscribed
                        this.event_provider.updateSideMenu(); // ------------- test
                        this.event_provider.userlogin(); // calling event
                        if (this.page) {
                            this.router.navigate([this.page]);
                        }
                        else {
                            let pageName;
                            if (this.theme.ch_id === '1000') {
                                pageName = 'bible-chapter';
                                this.router.navigate([pageName]);
                                this.analytics.startAnalytics();
                                // this.menu.toggle();
                                this.event_provider.expandmyaccountsidebar(); // calling event to expand my account
                            }
                            else {
                                pageName = 'home-tabs/home/' + this.theme.ch_id;
                                this.router.navigate([pageName]);
                            }
                        }
                    }
                    if (this.platform.is("cordova")) {
                        this.updateTokenOnServer();
                    }
                    this.loader.stopLoading();
                }
                else {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.error : 'Error'), 'danger');
                    this.loader.stopLoading();
                }
            }));
        });
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
    // move to next detail section
    nextPage(step = null) {
        if (this.register === false) {
            this.register = true;
        }
        else {
            this.register = false;
        }
    }
    // disable submit button until required fields filled
    step1Validation() {
        if (this.user_first_name != '' && this.user_email != '') {
            this.submitButtonDisable = false;
        }
        else {
            this.submitButtonDisable = true;
        }
    }
    ionViewWillEnter() {
        this.event_provider.hidefooter(false, 'signup');
    }
    ionViewWillLeave() {
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (this.mode === "giving" && page_href !== this.page && !page_href.includes('/login')) {
            this.event_provider.setdefaultcolormode(); // calling event
            this.event_provider.defaultlogo(); // calling event
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"] },
    { type: src_services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: src_services_firebase_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseService"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        src_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"],
        src_services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
        src_services_firebase_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseService"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map