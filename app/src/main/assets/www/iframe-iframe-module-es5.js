(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iframe-iframe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/iframe/iframe.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/iframe/iframe.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"mobile-header customMobileHeader \" no-border >\n<ion-toolbar class=\"header--toolbar\">\n  <ion-buttons\n               (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n    <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n    back\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-card class=\"ionCard ionCard--mobile ion-no-margin\" style=\"padding: 15px 0;\">\n        <div class=\"embed-responsive embed-responsive-16by9\" style=\"height: 1000px\">\n          <iframe *ngIf=\"iframe_url\" class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\n                  [src]=\"iframe_url\"\n                  frameborder=\"0\" allowfullscreen=\"\"></iframe>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/iframe/iframe.module.ts":
/*!*****************************************!*\
  !*** ./src/app/iframe/iframe.module.ts ***!
  \*****************************************/
/*! exports provided: IframePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframePageModule", function() { return IframePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _iframe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iframe.page */ "./src/app/iframe/iframe.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








var routes = [
    {
        path: '',
        component: _iframe_page__WEBPACK_IMPORTED_MODULE_6__["IframePage"]
    }
];
var IframePageModule = /** @class */ (function () {
    function IframePageModule() {
    }
    IframePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_iframe_page__WEBPACK_IMPORTED_MODULE_6__["IframePage"]]
        })
    ], IframePageModule);
    return IframePageModule;
}());



/***/ }),

/***/ "./src/app/iframe/iframe.page.scss":
/*!*****************************************!*\
  !*** ./src/app/iframe/iframe.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lmcmFtZS9pZnJhbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/iframe/iframe.page.ts":
/*!***************************************!*\
  !*** ./src/app/iframe/iframe.page.ts ***!
  \***************************************/
/*! exports provided: IframePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframePage", function() { return IframePage; });
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
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
















var IframePage = /** @class */ (function () {
    function IframePage(route, loader, storage, sermonsService, dom, router, location, common, toast, analytics, event_provider, platform, device, iab, translate) {
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
        this.iframe_url = '';
    }
    IframePage.prototype.ionViewDidEnter = function () {
        this.event_provider.hidefooter(true, 'other');
    };
    IframePage.prototype.ngOnInit = function () {
        var url = this.route.snapshot.paramMap.get('url');
        if (url) {
            // sanitizing iframe url for security purpose
            this.iframe_url = this.dom.bypassSecurityTrustResourceUrl(url);
        }
    };
    IframePage.prototype.gotobackPage = function () {
        this.location.back();
    };
    IframePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    IframePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iframe',
            template: __webpack_require__(/*! raw-loader!./iframe.page.html */ "./node_modules/raw-loader/index.js!./src/app/iframe/iframe.page.html"),
            styles: [__webpack_require__(/*! ./iframe.page.scss */ "./src/app/iframe/iframe.page.scss")]
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
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], IframePage);
    return IframePage;
}());



/***/ })

}]);
//# sourceMappingURL=iframe-iframe-module-es5.js.map