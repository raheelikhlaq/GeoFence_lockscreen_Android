(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bible-search-list-bible-search-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bible-search-list/bible-search-list.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bible-search-list/bible-search-list.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n\n            <ion-card *ngIf=\"data && data.length > 0\" class=\"ionCard ionCard--mobile\" style=\"margin: 0 0 150px;\">\n                <ion-card-content class=\"ion-no-padding\">\n                    <div  class=\"event-list-wrap\">\n                        <ion-list lines=\"none\">\n                            <ion-item class=\"ionMedia\" style=\"--inner-padding-end: 0;\" *ngFor=\"let res of data\">\n                                <ion-note slot=\"start\" style=\"margin-right: 10px; font-size: 16px;\">{{res.count}}</ion-note>\n                                <ion-icon (click)=\"selectVerse(res)\" name=\"more\" slot=\"end\" class=\"text-light-gray link-item\"\n                                           routerDirection=\"root\"></ion-icon>\n                                <ion-label class=\"ion-text-wrap\" style=\"margin-left: 0;\">\n                                    <h3 class=\"ionMedia__heading\">{{res.book_name ? res.book_name : 'Book Name N/A'}}&nbsp;{{res.chapter_id }}:{{res.book_order}}&nbsp; verse:{{res.verse_id}}</h3>\n                                    <p class=\"ionMedia__subHeading\" style=\"font-weight: 400 !important;;\">{{res.verse_text ? res.verse_text : 'Verse N/A' }}</p>\n                                </ion-label>\n                            </ion-item>\n                        </ion-list>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card *ngIf=\"!data || data && data.length === 0\" class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\"> {{'BIBLE.no_result' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/bible-search-list/bible-search-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/bible-search-list/bible-search-list.module.ts ***!
  \***************************************************************/
/*! exports provided: BibleSearchListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleSearchListPageModule", function() { return BibleSearchListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bible_search_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bible-search-list.page */ "./src/app/bible-search-list/bible-search-list.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _bible_search_list_page__WEBPACK_IMPORTED_MODULE_6__["BibleSearchListPage"]
    }
];
var BibleSearchListPageModule = /** @class */ (function () {
    function BibleSearchListPageModule() {
    }
    BibleSearchListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bible_search_list_page__WEBPACK_IMPORTED_MODULE_6__["BibleSearchListPage"]]
        })
    ], BibleSearchListPageModule);
    return BibleSearchListPageModule;
}());



/***/ }),

/***/ "./src/app/bible-search-list/bible-search-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/bible-search-list/bible-search-list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpYmxlLXNlYXJjaC1saXN0L2JpYmxlLXNlYXJjaC1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bible-search-list/bible-search-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/bible-search-list/bible-search-list.page.ts ***!
  \*************************************************************/
/*! exports provided: BibleSearchListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleSearchListPage", function() { return BibleSearchListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var BibleSearchListPage = /** @class */ (function () {
    function BibleSearchListPage(modalController, 
    // public events: Events,
    _bibleService, loader, toast, router, storage, event_provider, translate) {
        var _this = this;
        this.modalController = modalController;
        this._bibleService = _bibleService;
        this.loader = loader;
        this.toast = toast;
        this.router = router;
        this.storage = storage;
        this.event_provider = event_provider;
        this.translate = translate;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    BibleSearchListPage.prototype.ngOnInit = function () {
        var _this = this;
        var b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
        if (b) {
            if (b.language) {
                this.selected_language = b.language;
            }
            if (b.volume) {
                this.selected_volume = b.volume;
            }
        }
        this.dam_id = this.selected_volume.dam_id;
        // getting lang and version from local storage
        this.event_provider.searchBible.subscribe(function (value) {
            _this.search_input = value.value;
            _this.loader.presentLoading().then(function () {
                // getting serached data from API through Service
                _this._bibleService.search(_this.dam_id, value.value).subscribe(function (res) {
                    _this.loader.stopLoading();
                    if (res) {
                        _this.data = res[1];
                        var c_1 = 1;
                        _this.data.map(function (x) { return x.count = c_1++; });
                        // this.events.publish('count', this.data.length, this.data);
                        _this.event_provider.countfunc(_this.data.length, _this.data); // calling event
                    }
                });
            });
        });
    };
    // navigating to selected chapter
    BibleSearchListPage.prototype.selectVerse = function (item) {
        if (item) {
            var data = {
                queryParams: {
                    data: JSON.stringify(item),
                    type: 'search',
                    chapter: JSON.stringify(item),
                    book: JSON.stringify(item),
                }
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    };
    BibleSearchListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_3__["BibleService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__["EventProviderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    BibleSearchListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bible-search-list',
            template: __webpack_require__(/*! raw-loader!./bible-search-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/bible-search-list/bible-search-list.page.html"),
            styles: [__webpack_require__(/*! ./bible-search-list.page.scss */ "./src/app/bible-search-list/bible-search-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_bible_service__WEBPACK_IMPORTED_MODULE_3__["BibleService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__["EventProviderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], BibleSearchListPage);
    return BibleSearchListPage;
}());



/***/ })

}]);
//# sourceMappingURL=bible-search-list-bible-search-list-module-es5.js.map