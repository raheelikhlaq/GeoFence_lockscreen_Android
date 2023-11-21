(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bible-search-bible-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bible-search/bible-search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bible-search/bible-search.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'BIBLE.bible_search' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n<div class=\"page-wrapper ion-justify-content-start\">\n    <div class=\"app-container\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-searchbar [(ngModel)]=\"search_input\" style=\"margin-bottom: 10px;\" class=\"inputField inputField--searchBar\" placeholder=\"{{'BIBLE.enter_keyword' | translate}}\"></ion-searchbar>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n            <ion-col size=\"4\">\n                <p class=\"font-weight-normal ion-no-margin\" style=\"font-size: 13px;\"><span>{{count ? count : '0'}}</span>&nbsp;{{'BIBLE.search_results' | translate}}</p>\n            </ion-col>\n            <ion-col size=\"8\" class=\"ion-text-right\">\n                <ion-button (click)=\"filterModal();\" class=\"commonBtn commonBtn--dark commonBtn--round\">\n                    {{'BIBLE.filter' | translate}}\n            </ion-button>\n\n                <ion-button (click)=\"search()\" class=\"commonBtn commonBtn--dark commonBtn--round\">\n                    {{'BIBLE.search' | translate}}\n                </ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-tabs class=\"ionTabs\" style=\"top: 160px;\">\n            <ion-tab-bar class=\"ionTabs__bar\" slot=\"top\">\n                <ion-tab-button class=\"ionTabs__btn\" tab=\"bible\">\n                    <ion-label class=\"ionTabs__label\">{{'BIBLE.bible' | translate}}</ion-label>\n                </ion-tab-button>\n            </ion-tab-bar>\n        </ion-tabs>\n    </div>\n</div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/bible-search/bible-search.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bible-search/bible-search.module.ts ***!
  \*****************************************************/
/*! exports provided: BibleSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleSearchPageModule", function() { return BibleSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bible_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bible-search.page */ "./src/app/bible-search/bible-search.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _bible_search_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bible-search.router.module */ "./src/app/bible-search/bible-search.router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










const routes = [
    {
        path: '',
        component: _bible_search_page__WEBPACK_IMPORTED_MODULE_6__["BibleSearchPage"]
    }
];
let BibleSearchPageModule = class BibleSearchPageModule {
};
BibleSearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _bible_search_router_module__WEBPACK_IMPORTED_MODULE_8__["BibleSearchRouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bible_search_page__WEBPACK_IMPORTED_MODULE_6__["BibleSearchPage"]]
    })
], BibleSearchPageModule);



/***/ }),

/***/ "./src/app/bible-search/bible-search.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/bible-search/bible-search.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpYmxlLXNlYXJjaC9iaWJsZS1zZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bible-search/bible-search.page.ts":
/*!***************************************************!*\
  !*** ./src/app/bible-search/bible-search.page.ts ***!
  \***************************************************/
/*! exports provided: BibleSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleSearchPage", function() { return BibleSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_bible_filter_modal_bible_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/bible-filter-modal/bible-filter-modal.component */ "./src/app/common/bible-filter-modal/bible-filter-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");







let BibleSearchPage = class BibleSearchPage {
    constructor(modalController, location, _bibleService, event_provider) {
        this.modalController = modalController;
        this.location = location;
        this._bibleService = _bibleService;
        this.event_provider = event_provider;
        this.search_input = '';
    }
    filterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_bible_filter_modal_bible_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__["BibleFilterModalComponent"],
                cssClass: 'BibleModal',
                componentProps: {
                    old_data: this.old_data,
                    new_data: this.new_data,
                    total_data: this.filtered_data
                }
            });
            modal.onDidDismiss().then(res => {
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        // event subscription
        this.event_provider.count.subscribe(value => {
            this.count = value.count;
            this.filtered_data = value.data;
            // Seperating Old testament data and New Testament Data ============================
            this.old_data = this.filtered_data.filter(x => {
                let check = x.dam_id.toString();
                if (check[6] === 'O') {
                    return x;
                }
            });
            this.new_data = this.filtered_data.filter(x => {
                let check = x.dam_id.toString();
                if (check[6] === 'N') {
                    return x;
                }
            });
            // ===============================================================================
        });
    }
    search() {
        if (this.search_input && this.search_input !== '') {
            this.event_provider.searchbible(this.search_input); // calling event
        }
    }
    gotobackPage() {
        this.location.back();
    }
};
BibleSearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_5__["BibleService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_6__["EventProviderService"] }
];
BibleSearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bible-search',
        template: __webpack_require__(/*! raw-loader!./bible-search.page.html */ "./node_modules/raw-loader/index.js!./src/app/bible-search/bible-search.page.html"),
        styles: [__webpack_require__(/*! ./bible-search.page.scss */ "./src/app/bible-search/bible-search.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_bible_service__WEBPACK_IMPORTED_MODULE_5__["BibleService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_6__["EventProviderService"]])
], BibleSearchPage);



/***/ }),

/***/ "./src/app/bible-search/bible-search.router.module.ts":
/*!************************************************************!*\
  !*** ./src/app/bible-search/bible-search.router.module.ts ***!
  \************************************************************/
/*! exports provided: BibleSearchRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleSearchRouterModule", function() { return BibleSearchRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bible_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bible-search.page */ "./src/app/bible-search/bible-search.page.ts");




const routes = [
    {
        path: '',
        component: _bible_search_page__WEBPACK_IMPORTED_MODULE_3__["BibleSearchPage"],
        children: [
            {
                path: 'teachings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | teachings-search-list-teachings-search-list-module */ "teachings-search-list-teachings-search-list-module").then(__webpack_require__.bind(null, /*! ../teachings-search-list/teachings-search-list.module */ "./src/app/teachings-search-list/teachings-search-list.module.ts")).then(m => m.TeachingsSearchListPageModule)
                    }
                ]
            },
            {
                path: 'bible',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | bible-search-list-bible-search-list-module */ "bible-search-list-bible-search-list-module").then(__webpack_require__.bind(null, /*! ../bible-search-list/bible-search-list.module */ "./src/app/bible-search-list/bible-search-list.module.ts")).then(m => m.BibleSearchListPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/bible-search/bible',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/bible-search/teachings',
        pathMatch: 'full'
    }
];
let BibleSearchRouterModule = class BibleSearchRouterModule {
};
BibleSearchRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BibleSearchRouterModule);



/***/ })

}]);
//# sourceMappingURL=bible-search-bible-search-module-es2015.js.map