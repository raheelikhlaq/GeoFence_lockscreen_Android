(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["in-app-iframe-in-app-iframe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/in-app-iframe/in-app-iframe.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/in-app-iframe/in-app-iframe.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'iFrame')\"\n                 (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{page_name ? page_name : 'iFrame'}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'iFrame')\" slot=\"start\">{{page_name}}</p>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-card class=\"ionCard ionCard--mobile ion-no-margin\" style=\"padding: 15px 0;\">\n        <div class=\"embed-responsive embed-responsive-1by1\">\n          <iframe *ngIf=\"iframe_url\" class=\"embed-responsive-item\"\n                  [src]=\"iframe_url\"\n                  frameborder=\"0\" allowfullscreen=\"\"></iframe>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/in-app-iframe/in-app-iframe.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/in-app-iframe/in-app-iframe.module.ts ***!
  \*******************************************************/
/*! exports provided: InAppIframePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppIframePageModule", function() { return InAppIframePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _in_app_iframe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-app-iframe.page */ "./src/app/in-app-iframe/in-app-iframe.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _in_app_iframe_page__WEBPACK_IMPORTED_MODULE_6__["InAppIframePage"]
    }
];
let InAppIframePageModule = class InAppIframePageModule {
};
InAppIframePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_in_app_iframe_page__WEBPACK_IMPORTED_MODULE_6__["InAppIframePage"]]
    })
], InAppIframePageModule);



/***/ }),

/***/ "./src/app/in-app-iframe/in-app-iframe.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/in-app-iframe/in-app-iframe.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luLWFwcC1pZnJhbWUvaW4tYXBwLWlmcmFtZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/in-app-iframe/in-app-iframe.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/in-app-iframe/in-app-iframe.page.ts ***!
  \*****************************************************/
/*! exports provided: InAppIframePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InAppIframePage", function() { return InAppIframePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

















let InAppIframePage = class InAppIframePage {
    constructor(route, loader, storage, sermonsService, dom, router, location, common, toast, analytics, event_provider, platform, device, iab, translate) {
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this.analytics = analytics;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.iab = iab;
        this.translate = translate;
        this.page_in_home_tabs = false;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    }
    ngOnInit() {
        // assigning data from URL Params
        this.page_id = this.route.snapshot.paramMap.get('page_id');
        if (this.page_id) {
            this.getTheme();
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.pageIdNot : 'Page id don\'t exist'), (this.alertMessage ? this.alertMessage.warning : 'Warning'), 'warning');
        }
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        this.event_provider.isHomeEnable.subscribe(value => {
            this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
    }
    getTheme() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let theme = yield this.storage.get('theme');
            if (theme) {
                this.ch_id = theme.ch_id;
                // saving app_pages
                const body = JSON.stringify({ id: this.ch_id });
                this.common.getTheme(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res) {
                        this.theme = res;
                        this.common.store_app_pages(res.apppages, 'iFrame');
                        this.common.storeTheme(res.church);
                        let app_pages = res.apppages.filter(x => x.id === this.page_id);
                        if (app_pages[0]) {
                            this.banner_image = app_pages[0].website_banner;
                            this.banner_desc = app_pages[0].banner_description;
                            this.banner_title = app_pages[0].banner_title;
                            this.page_name = app_pages[0].title;
                            this.iframe_url = app_pages[0].url;
                            this.custom_name = app_pages[0].name;
                            // sanitizing iframe url for security purpose
                            this.iframe_url = this.dom.bypassSecurityTrustResourceUrl(this.iframe_url);
                            this.getUser();
                        }
                    }
                }));
            }
        });
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then((val) => {
            if (val != null && val != 'guest') {
                this.user = val;
            }
        });
    }
    gotobackPage() {
        this.location.back();
    }
    ionViewWillEnter() {
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                var id = this.route.snapshot.paramMap.get('page_id');
                let app_pages = res.apppages.find(x => x.id === id);
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
        }));
    }
    setAnalytics() {
        let dev_id = '';
        let device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_12__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.church.longitude ? this.theme.church.longitude : "",
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
        this.analytics.setAnalytics(body).subscribe((res) => {
        });
    }
    ionViewDidLeave() {
        this.setAnalytics();
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        this.event_provider.hidefooter(true, 'other');
    }
};
InAppIframePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] }
];
InAppIframePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-in-app-iframe',
        template: __webpack_require__(/*! raw-loader!./in-app-iframe.page.html */ "./node_modules/raw-loader/index.js!./src/app/in-app-iframe/in-app-iframe.page.html"),
        styles: [__webpack_require__(/*! ./in-app-iframe.page.scss */ "./src/app/in-app-iframe/in-app-iframe.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]])
], InAppIframePage);



/***/ })

}]);
//# sourceMappingURL=in-app-iframe-in-app-iframe-module-es2015.js.map