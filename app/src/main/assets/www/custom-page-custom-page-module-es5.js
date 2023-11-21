(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-page-custom-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-page/custom-page.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-page/custom-page.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Custom Page')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{page_name ? page_name : 'Custom Page'}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Custom Page')\" slot=\"start\">{{page_name}}</p>\n\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <div class=\"customHTML\" [innerHTML]=\"html_code\"></div>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n"

/***/ }),

/***/ "./src/app/custom-page/custom-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/custom-page/custom-page.module.ts ***!
  \***************************************************/
/*! exports provided: CustomPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPagePageModule", function() { return CustomPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-page.page */ "./src/app/custom-page/custom-page.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








var routes = [
    {
        path: '',
        component: _custom_page_page__WEBPACK_IMPORTED_MODULE_6__["CustomPagePage"]
    }
];
var CustomPagePageModule = /** @class */ (function () {
    function CustomPagePageModule() {
    }
    CustomPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_custom_page_page__WEBPACK_IMPORTED_MODULE_6__["CustomPagePage"]]
        })
    ], CustomPagePageModule);
    return CustomPagePageModule;
}());



/***/ }),

/***/ "./src/app/custom-page/custom-page.page.scss":
/*!***************************************************!*\
  !*** ./src/app/custom-page/custom-page.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1wYWdlL2N1c3RvbS1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/custom-page/custom-page.page.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-page/custom-page.page.ts ***!
  \*************************************************/
/*! exports provided: CustomPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPagePage", function() { return CustomPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");

















var CustomPagePage = /** @class */ (function () {
    function CustomPagePage(route, loader, storage, sermonsService, dom, router, location, common, toast, event_provider, analytics, platform, device, translate, apiService, translateService) {
        var _this = this;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.apiService = apiService;
        this.translateService = translateService;
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
    CustomPagePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // assigning data from URL Params
                this.page_id = this.route.snapshot.paramMap.get('page_id');
                // getting theme from local storage
                // this.event_provider.getChurchData.subscribe(async (res: any) => {
                //     if (!(Object.keys(res).length === 0)) {
                //         this.ch_id = res.church.ch_id;
                //         this.theme = res.church;
                //         const data = {
                //             page_id: this.page_id,
                //             church_id: this.ch_id
                //         }
                //         this.apiService.getPageData(JSON.stringify(data)).subscribe((response: any) => {
                //             if(response.status){
                //                 let app_pages = response.data;
                //                 if (app_pages[0]) {
                //                     this.banner_image = app_pages[0].website_banner;
                //                     this.banner_desc = app_pages[0].banner_description;
                //                     this.banner_title = app_pages[0].banner_title;
                //                     this.page_name = app_pages[0].title;
                //                     let code = app_pages[0].html;
                //                     this.custom_name = app_pages[0].name;
                //
                //                     // sanitizing html code for security purpose
                //                     this.html_code = this.dom.bypassSecurityTrustHtml(code);
                //                 }
                //
                //             }
                //         });
                //
                //     }
                // });
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
                return [2 /*return*/];
            });
        });
    };
    CustomPagePage.prototype.checkLink = function (code) {
        var link = code.match(/href="(.*?)"/);
        if (link && link.length) {
            code = code.replace(link[0], '');
            code.replace('href=' + link[1], '');
            if (link[1].includes('css')) {
                return this.checkLink(code);
            }
            return link;
        }
        else {
            return [];
        }
    };
    CustomPagePage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    CustomPagePage.prototype.gotobackPage = function () {
        this.location.back();
    };
    CustomPagePage.prototype.setAnalytics = function () {
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
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_11__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_11__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
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
    CustomPagePage.prototype.getGradient = function (color_one, bg_color) {
        if (bg_color === '') {
            return this.dom.bypassSecurityTrustStyle("linear-gradient(to bottom,rgba(255,0,0,0), " + color_one);
        }
        else {
            return "" + bg_color;
        }
    };
    CustomPagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        var id = this.route.snapshot.paramMap.get('page_id');
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.id === id; });
                    if (app_pages && app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    CustomPagePage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    CustomPagePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_11__();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    this.ch_id = res.church.ch_id;
                    this.theme = res.church;
                    data = {
                        page_id: this.page_id,
                        church_id: this.ch_id
                    };
                    this.apiService.getPageData(JSON.stringify(data)).subscribe(function (response) {
                        if (response.status) {
                            var app_pages = response.data;
                            if (app_pages[0]) {
                                _this.banner_image = app_pages[0].website_banner;
                                _this.banner_desc = app_pages[0].banner_description;
                                _this.banner_title = app_pages[0].banner_title;
                                _this.page_name = app_pages[0].title;
                                var code = app_pages[0].html;
                                _this.custom_name = app_pages[0].name;
                                if (code.search('<a') != -1 && _this.platform.is('ios')) {
                                    do {
                                        var link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : _this.checkLink(code);
                                        if (link && link.length) {
                                            code = code.replace(link[0], '');
                                            code.replace('href=' + link[1], '');
                                            var new_bypassLink = link[1];
                                            // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                            console.log(new_bypassLink);
                                            code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" id=\"link_tag\"");
                                            code = code.replace('</a>', '</span>');
                                            code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                        }
                                        else {
                                            code = code.replace("<a", "<span id=\"link_tag\"");
                                            code = code.replace('</a>', '</span>');
                                            code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                        }
                                    } while (code.search('<a') != -1);
                                }
                                // sanitizing html code for security purpose
                                _this.html_code = _this.dom.bypassSecurityTrustHtml(code);
                            }
                            if (_this.ch_id === '994') {
                                if (_this.translateService.defaultLang === 'es') {
                                    _this.html_code = _this.dom.bypassSecurityTrustHtml(app_pages[0].html_spanish);
                                }
                            }
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); });
        this.event_provider.hidefooter(true, 'other');
    };
    CustomPagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    CustomPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-page',
            template: __webpack_require__(/*! raw-loader!./custom-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/custom-page/custom-page.page.html"),
            styles: [__webpack_require__(/*! ./custom-page.page.scss */ "./src/app/custom-page/custom-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_10__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            src_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], CustomPagePage);
    return CustomPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=custom-page-custom-page-module-es5.js.map