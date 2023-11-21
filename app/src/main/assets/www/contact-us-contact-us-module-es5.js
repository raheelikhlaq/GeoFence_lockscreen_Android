(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Contact Us')\"\n                 (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{custom_name ? custom_name : 'Contact Us'}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'Contact Us')\" slot=\"start\">{{custom_name}}</p>\n\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col [size]=\"12\" [sizeLg]=\"8\">\n          <ion-card class=\"ionCard ion-margin-bottom\">\n            <ion-card-header>\n              <ion-card-title class=\"heading4\">{{custom_name}}</ion-card-title>\n            </ion-card-header>\n            <hr class=\"ionCard__divider\">\n            <ion-card-content>\n              <div *ngIf=\"email\" class=\"ion-margin-bottom\">\n                <ion-button  [href]=\"'mailto:' + email\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                  <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n                  {{'CONTACT_US.email' | translate}}\n                </ion-button>\n              </div>\n              <div *ngIf=\"phone\" class=\"ion-margin-bottom\">\n                <ion-button [href]=\"'tel:' + phone\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                  <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                  {{'CONTACT_US.phone' | translate}}\n                </ion-button>\n              </div>\n              <div *ngIf=\"address\" class=\"ion-margin-bottom\">\n                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%; white-space: pre-line;\">\n                  <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n                  <address> {{address}} </address>\n                </ion-button>\n              </div>\n              <div *ngIf=\"website\" class=\"ion-margin-bottom\" (click)=\"openshareurlinapp(website)\">\n                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%; white-space: pre-line;\">\n                  <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n                </ion-button>\n              </div>\n              <div *ngIf=\"facebook\" class=\"ion-margin-bottom\" (click)=\"openshareurlinapp(facebook)\">\n                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%; white-space: pre-line;\">\n                  <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n                </ion-button>\n              </div>\n              <div *ngIf=\"instagram\" class=\"ion-margin-bottom\" (click)=\"openshareurlinapp(instagram)\">\n                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%; white-space: pre-line;\">\n                  <ion-icon slot=\"start\" name=\"logo-instagram\"></ion-icon>\n                </ion-button>\n              </div>\n              <div *ngIf=\"twitter\" class=\"ion-margin-bottom\" (click)=\"openshareurlinapp(twitter)\">\n                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%; white-space: pre-line;\">\n                  <ion-icon slot=\"start\" name=\"logo-twitter\"></ion-icon>\n                </ion-button>\n              </div>\n              <h6 *ngIf=\"!email && !phone && !address && !website && !facebook && !instagram && !twitter\"> {{'CONTACT_US.no_info_message' | translate}}</h6>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/contact-us/contact-us.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");













var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(location, storage, common, event_provider, analytics, platform, device, translate, dom, iab) {
        this.location = location;
        this.storage = storage;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.dom = dom;
        this.iab = iab;
        this.page_in_home_tabs = false;
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes'
        };
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
    ContactUsPage.prototype.ngOnInit = function () {
        var _this = this;
        // get theme from local storage
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
    ContactUsPage.prototype.getTheme = function () {
        var _this = this;
        // get theme from local storage
        this.storage.get('theme').then(function (res) {
            if (res) {
                _this.ch_id = res.ch_id;
                // preparing data to call API through service to get latest data
                var body = JSON.stringify({ id: _this.ch_id });
                _this.common.getTheme(body).subscribe(function (theme) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var page, myPage;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.theme = theme.church;
                        // getting app_pages to get latest data
                        if (theme && theme.status) {
                            page = theme.apppages.find(function (x) { return x.activated === 'true' && x.name === "Contact Us"; });
                            myPage = page;
                            this.banner_image = myPage.website_banner;
                            this.banner_desc = myPage.banner_description;
                            this.banner_title = myPage.banner_title;
                            this.address = myPage.contact_mailing_address ? myPage.contact_mailing_address : '';
                            this.phone = myPage.contact_phone ? myPage.contact_phone : '';
                            this.email = myPage.contact_email ? myPage.contact_email : '';
                            this.website = myPage.contact_website ? myPage.contact_website : '';
                            this.facebook = myPage.contact_facebook ? myPage.contact_facebook : '';
                            this.instagram = myPage.contact_instagram ? myPage.contact_instagram : '';
                            this.twitter = myPage.contact_twitter ? myPage.contact_twitter : '';
                            this.page_name = myPage.name;
                            this.custom_name = myPage.title;
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
        });
    };
    // inside app on page with done button
    ContactUsPage.prototype.openshareurlinapp = function (url) {
        // share url
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(url, '_blank', this.options);
        }
        else {
            this.iab.create(url, '_self', this.options);
        }
    };
    ContactUsPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    ContactUsPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    ContactUsPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_6__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
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
    ContactUsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    ContactUsPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_6__();
    };
    ContactUsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Contact Us'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    ContactUsPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"] }
    ]; };
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/contact-us/contact-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es5.js.map