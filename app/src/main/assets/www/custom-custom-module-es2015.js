(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-custom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom/custom.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom/custom.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Custom Page')\"\n                 (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{page_name ? page_name : 'Custom Page'}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'Custom Page')\" slot=\"start\">{{page_name}}</p>\n\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-card class=\"ionCard ionCard--mobile ion-no-margin\" style=\"padding: 15px 0;\">\n        <div class=\"embed-responsive embed-responsive-16by9\" style=\"height: 1000px\">\n          <iframe *ngIf=\"iframe_url\" class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\n                  [src]=\"iframe_url\"\n                  frameborder=\"0\" allowfullscreen=\"\"></iframe>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/custom/custom.module.ts":
/*!*****************************************!*\
  !*** ./src/app/custom/custom.module.ts ***!
  \*****************************************/
/*! exports provided: CustomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageModule", function() { return CustomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.page */ "./src/app/custom/custom.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _custom_page__WEBPACK_IMPORTED_MODULE_6__["CustomPage"]
    }
];
let CustomPageModule = class CustomPageModule {
};
CustomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_custom_page__WEBPACK_IMPORTED_MODULE_6__["CustomPage"]]
    })
], CustomPageModule);



/***/ }),

/***/ "./src/app/custom/custom.page.scss":
/*!*****************************************!*\
  !*** ./src/app/custom/custom.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS9jdXN0b20ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/custom/custom.page.ts":
/*!***************************************!*\
  !*** ./src/app/custom/custom.page.ts ***!
  \***************************************/
/*! exports provided: CustomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPage", function() { return CustomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








// import {Events} from "@ionic/angular";

let CustomPage = class CustomPage {
    constructor(location, apiService, storage, dom, common, 
    // public events: Events,
    event_provider, modalController) {
        this.location = location;
        this.apiService = apiService;
        this.storage = storage;
        this.dom = dom;
        this.common = common;
        this.event_provider = event_provider;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.iframe_url = this.dom.bypassSecurityTrustResourceUrl("https://www.bible.com/bible/1/JHN.2.kjv");
        // getting theme from local storage
        this.storage.get('theme').then(theme => {
            this.ch_id = theme.ch_id;
            // saving app_pages
            const body = JSON.stringify({ id: this.ch_id });
            this.common.getTheme(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res) {
                    this.common.store_app_pages(res.apppages, 'Custom Page');
                    let app_pages = res.apppages.filter(x => x.name === 'Custom Page');
                    if (app_pages[0]) {
                        this.banner_image = app_pages[0].website_banner;
                        this.banner_desc = app_pages[0].banner_description;
                        this.banner_title = app_pages[0].banner_title;
                        this.page_name = app_pages[0].title;
                    }
                }
            }));
        });
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        // this.events.subscribe('is_home_enable', (is_home_enable) => {
        //     this.enable_home = is_home_enable;
        // });
        this.event_provider.isHomeEnable.subscribe(value => {
            this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
        this.getTheme();
    }
    ionViewWillEnter() {
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                let app_pages = res.apppages.find(x => x.name === 'Custom Page');
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
        }));
    }
    ionViewDidEnter() {
        this.event_provider.hidefooter(true, 'other');
    }
    loadUrl(ch_id) {
        let body = ch_id;
        this.apiService.get_custom_url(body).subscribe((res) => {
            // ------------------TESTING PURPOSE-------------
            // this.iframe_url = "https://www.bible.com/bible/1/JHN.2.kjv";
            // this.iframe_url = this.dom.bypassSecurityTrustResourceUrl(this.iframe_url);
            // ------------------TESTING PURPOSE-------------
        });
    }
    getTheme() {
        this.storage.get('theme').then(res => {
            if (res) {
                this.ch_id = res.ch_id;
                this.loadUrl(this.ch_id);
            }
        });
    }
    gotobackPage() {
        this.location.back();
    }
};
CustomPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
CustomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom',
        template: __webpack_require__(/*! raw-loader!./custom.page.html */ "./node_modules/raw-loader/index.js!./src/app/custom/custom.page.html"),
        styles: [__webpack_require__(/*! ./custom.page.scss */ "./src/app/custom/custom.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]])
], CustomPage);



/***/ })

}]);
//# sourceMappingURL=custom-custom-module-es2015.js.map