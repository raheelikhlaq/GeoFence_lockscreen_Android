(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["call-studio-call-studio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/call-studio/call-studio.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/call-studio/call-studio.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{custom_name ? custom_name : \"Call Studio\"}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{page?.banner_title ? page?.banner_title : 'Call Studio'}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{page?.banner_description ? page?.banner_description : 'See WHat God Can Do Through You'}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-row *ngFor=\"let call of calls\" class=\"ion-align-items-center mb-30\">\n        <ion-col size=\"6\">\n          <h3 class=\"heading3 ion-no-margin\"> {{call?.name}} </h3>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n\n          <ion-button [href]=\"'tel:' + call.phone\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\"><ion-icon name=\"call\"></ion-icon>  {{call?.phone}} </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </div>\n  </div>\n  <!-- <app-footer></app-footer> -->\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->\n\n\n"

/***/ }),

/***/ "./src/app/call-studio/call-studio.module.ts":
/*!***************************************************!*\
  !*** ./src/app/call-studio/call-studio.module.ts ***!
  \***************************************************/
/*! exports provided: CallStudioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallStudioPageModule", function() { return CallStudioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _call_studio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-studio.page */ "./src/app/call-studio/call-studio.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");









const routes = [
    {
        path: '',
        component: _call_studio_page__WEBPACK_IMPORTED_MODULE_6__["CallStudioPage"]
    }
];
let CallStudioPageModule = class CallStudioPageModule {
};
CallStudioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_call_studio_page__WEBPACK_IMPORTED_MODULE_6__["CallStudioPage"]]
    })
], CallStudioPageModule);



/***/ }),

/***/ "./src/app/call-studio/call-studio.page.scss":
/*!***************************************************!*\
  !*** ./src/app/call-studio/call-studio.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGwtc3R1ZGlvL2NhbGwtc3R1ZGlvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/call-studio/call-studio.page.ts":
/*!*************************************************!*\
  !*** ./src/app/call-studio/call-studio.page.ts ***!
  \*************************************************/
/*! exports provided: CallStudioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallStudioPage", function() { return CallStudioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");











let CallStudioPage = class CallStudioPage {
    constructor(location, storage, common, eventProvider, analytics, platform, device, translate, api) {
        this.location = location;
        this.storage = storage;
        this.common = common;
        this.eventProvider = eventProvider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.api = api;
        this.page_in_home_tabs = false;
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
    }
    ionViewWillEnter() {
        this.getTheme();
    }
    getTheme() {
        // get theme from local storage
        this.storage.get('theme').then(res => {
            if (res) {
                this.ch_id = res.ch_id;
                // preparing data to call API through service to get latest data
                const body = JSON.stringify({ id: this.ch_id });
                this.common.getTheme(body).subscribe((theme) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.theme = theme.church;
                    // getting app_pages to get latest data
                    if (theme && theme.status) {
                        // Filtering out CONTACT US page from app pages
                        let page = theme.apppages.find(x => x.activated === 'true' && x.name === "Call Studio");
                        let myPage = page;
                        this.page = myPage;
                        this.page_name = myPage.name;
                        this.custom_name = myPage.title;
                        this.getCalls();
                    }
                }));
            }
        });
    }
    getCalls() {
        this.api.getCallStudio(this.ch_id).subscribe((res) => {
            if (res && res.status === true) {
                this.calls = res.groups;
            }
        });
    }
    gotobackPage() {
        this.location.back();
    }
};
CallStudioPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }
];
CallStudioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-call-studio',
        template: __webpack_require__(/*! raw-loader!./call-studio.page.html */ "./node_modules/raw-loader/index.js!./src/app/call-studio/call-studio.page.html"),
        styles: [__webpack_require__(/*! ./call-studio.page.scss */ "./src/app/call-studio/call-studio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]])
], CallStudioPage);



/***/ })

}]);
//# sourceMappingURL=call-studio-call-studio-module-es2015.js.map