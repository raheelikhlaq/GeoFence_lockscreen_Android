(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-teachings-ism-teachings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-teachings/ism-teachings.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-teachings/ism-teachings.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'SETTINGS.Teachings' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div class=\"page-wrapper ion-justify-content-start\">\n    <div class=\"app-container\">\n      <ion-tabs  class=\"ionTabs\">\n        <ion-tab-bar class=\"ionTabs__bar\" slot=\"top\">\n          <ion-tab-button class=\"ionTabs__btn\" tab=\"bible\">\n            <ion-label class=\"ionTabs__label\">{{'SETTINGS.Bible' | translate}}</ion-label>\n          </ion-tab-button>\n<!--          <ion-tab-button class=\"ionTabs__btn\" tab=\"topic\">-->\n<!--            <ion-label class=\"ionTabs__label\">Topic</ion-label>-->\n<!--          </ion-tab-button>-->\n        </ion-tab-bar>\n      </ion-tabs>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ism-teachings/ism-teachings-router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ism-teachings/ism-teachings-router.module.ts ***!
  \**************************************************************/
/*! exports provided: IsmTeachingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsPageRoutingModule", function() { return IsmTeachingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ism_teachings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ism-teachings.page */ "./src/app/ism-teachings/ism-teachings.page.ts");




const routes = [
    {
        path: '',
        component: _ism_teachings_page__WEBPACK_IMPORTED_MODULE_3__["IsmTeachingsPage"],
        children: [
            {
                path: 'bible',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | ism-bible-ism-bible-module */ "ism-bible-ism-bible-module").then(__webpack_require__.bind(null, /*! ../ism-bible/ism-bible.module */ "./src/app/ism-bible/ism-bible.module.ts")).then(m => m.IsmBiblePageModule)
                    }
                ]
            },
            {
                path: 'topic',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | ism-teachings-videos-ism-teachings-videos-module */ "ism-teachings-videos-ism-teachings-videos-module").then(__webpack_require__.bind(null, /*! ../ism-teachings-videos/ism-teachings-videos.module */ "./src/app/ism-teachings-videos/ism-teachings-videos.module.ts")).then(m => m.IsmTeachingsVideosPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'ism-teachings/bible',
        pathMatch: 'full'
    }
];
let IsmTeachingsPageRoutingModule = class IsmTeachingsPageRoutingModule {
};
IsmTeachingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IsmTeachingsPageRoutingModule);



/***/ }),

/***/ "./src/app/ism-teachings/ism-teachings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ism-teachings/ism-teachings.module.ts ***!
  \*******************************************************/
/*! exports provided: IsmTeachingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsPageModule", function() { return IsmTeachingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_teachings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-teachings.page */ "./src/app/ism-teachings/ism-teachings.page.ts");
/* harmony import */ var _ism_teachings_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ism-teachings-router.module */ "./src/app/ism-teachings/ism-teachings-router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _ism_teachings_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsPage"]
    }
];
let IsmTeachingsPageModule = class IsmTeachingsPageModule {
};
IsmTeachingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ism_teachings_router_module__WEBPACK_IMPORTED_MODULE_7__["IsmTeachingsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ism_teachings_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsPage"]]
    })
], IsmTeachingsPageModule);



/***/ }),

/***/ "./src/app/ism-teachings/ism-teachings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/ism-teachings/ism-teachings.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionTabs__btn.tab-selected {\n  color: var(--primary-color, #302F34);\n  border-bottom: 2px solid var(--primary-color, #302F34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2lzbS10ZWFjaGluZ3MvaXNtLXRlYWNoaW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL2lzbS10ZWFjaGluZ3MvaXNtLXRlYWNoaW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pc20tdGVhY2hpbmdzL2lzbS10ZWFjaGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvblRhYnNfX2J0bi50YWItc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbn1cbiIsIi5pb25UYWJzX19idG4udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/ism-teachings/ism-teachings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/ism-teachings/ism-teachings.page.ts ***!
  \*****************************************************/
/*! exports provided: IsmTeachingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsPage", function() { return IsmTeachingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");








let IsmTeachingsPage = class IsmTeachingsPage {
    constructor(location, router, menu, translate, audioService, event_provider) {
        this.location = location;
        this.router = router;
        this.menu = menu;
        this.translate = translate;
        this.audioService = audioService;
        this.event_provider = event_provider;
    }
    ngOnInit() {
        // this.event_provider.hidefooter(false, 'other');
    }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(false, 'other');
    }
    // navigating to back page
    gotobackPage() {
        //  this.menu.toggle();
        // this.audioService.setLiveSteam();
        // this.event_provider.hidefooter(true, 'other');
        this.location.back();
    }
    ionViewDidLeave() {
        // this.audioService.setLiveSteam();
        // this.event_provider.hidefooter(true, 'other');
    }
};
IsmTeachingsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_6__["AudioplayerService"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] }
];
IsmTeachingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ism-teachings',
        template: __webpack_require__(/*! raw-loader!./ism-teachings.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-teachings/ism-teachings.page.html"),
        styles: [__webpack_require__(/*! ./ism-teachings.page.scss */ "./src/app/ism-teachings/ism-teachings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_6__["AudioplayerService"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"]])
], IsmTeachingsPage);



/***/ })

}]);
//# sourceMappingURL=ism-teachings-ism-teachings-module-es2015.js.map