(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bible-bible-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bible/bible.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bible/bible.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader  biblePage-mobile-header\" *ngIf=\"theme && theme.ch_id !== '1000'\" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Shows')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'BIBLE.Back' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n    <!-- <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons style=\"margin-left:15px;\" class=\"cursor-pointer\" routerLink=\"/bible-search\" routerDirection=\"root\" slot=\"end\">\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-buttons> -->\n        <!--        Without ISM-->\n        <!-- <div *ngIf=\"theme && theme.ch_id !== '1000'\" class=\"ionTabs__bar__icon show-mobile\">\n            <ion-item class=\"inputField\" lines=\"none\">\n                <ion-label>{{'BIBLE.language' | translate}}</ion-label>\n                <ion-select interface=\"alert\" [(ngModel)]=\"selected_language\"\n                            [selectedText]=\"selected_language.language_family_name\"\n                            name=\"Select Language\"\n                            class=\"inputField__area inputField__area--select\">\n                    <ion-select-option [value]=\"lang\" *ngFor=\"let lang of language_families\">\n                        {{lang.language_family_name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item style=\"margin-bottom: 0;\" class=\"inputField\" lines=\"none\"\n                      *ngIf=\"filtered_volumes || filtered_volumes.length > 0 || selected_volume\">\n                <ion-label>{{'BIBLE.volume' | translate}}</ion-label>\n                <ion-select interface=\"alert\" [(ngModel)]=\"selected_volume\" [selectedText]=\"selected_volume.volume_name\"\n                            name=\"Select Volume\"\n                            class=\"inputField__area inputField__area--select\">\n                    <ion-select-option class=\"ion-text-wrap\" style=\"white-space: pre-wrap !important;\" [value]=\"vol\"\n                                       *ngFor=\"let vol of filtered_volumes\">{{vol.volume_name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n        </div> -->\n        <!--FOR ISM-->\n        <!-- <div *ngIf=\"theme && theme.ch_id === '1000'\" class=\"ionTabs__bar__icon ismBarIcon show-mobile\">\n            <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\"\n                        shape=\"round\" (click)=\"openTranslationsModal()\">{{selected_language.language_family_name}}\n            </ion-button>\n            <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\"\n                        shape=\"round\" (click)=\"openTranslationsModal()\">{{selected_volume.volume_name}}\n            </ion-button>\n        </div> -->\n    <!-- </ion-toolbar> -->\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <div class=\"backBtn-wrapper hide-mobile\">\n                <ion-button (click)=\"gotobackPage()\" class=\"commonBtn commonBtn--dark commonBtn--round\">\n                    <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;  {{'BIBLE.Back' | translate}}\n                </ion-button>\n            </div>\n            <ion-tabs class=\"ionTabs ionTabs--bible\">\n                <ion-tab-bar class=\"ionTabs__bar\" slot=\"top\">\n                    <!-- <div class=\"ionTabs__bar__icon hide-mobile\">\n                        <ion-item class=\"inputField\" lines=\"none\">\n                            <ion-label>{{'BIBLE.language' | translate}}</ion-label>\n                            <ion-select interface=\"action-sheet\" [(ngModel)]=\"selected_language\"\n                                        (ionChange)=\"set_dam_id_lang()\"\n                                        name=\"Select Language\" [selectedText]=\"selected_language.language_family_name\"\n                                        class=\"inputField__area inputField__area--select\">\n                                <ion-select-option [value]=\"lang\" *ngFor=\"let lang of language_families\">\n                                    {{lang.language_family_name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>&nbsp;\n                        <ion-item class=\"inputField\" lines=\"none\"\n                                  *ngIf=\"filtered_volumes || filtered_volumes.length > 0 || selected_volume\">\n                            <ion-label>{{'BIBLE.volume' | translate}}</ion-label>\n                            <ion-select interface=\"action-sheet\" [(ngModel)]=\"selected_volume\"\n                                        (ionChange)=\"set_dam_id_version()\"\n                                        name=\"Select Volume\" [selectedText]=\"selected_volume.volume_name\"\n                                        class=\"inputField__area inputField__area--select\">\n                                <ion-select-option [value]=\"vol\" *ngFor=\"let vol of filtered_volumes\">\n                                    {{vol.volume_name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>&nbsp;\n                        <ion-buttons class=\"cursor-pointer\" routerLink=\"/bible-search\" routerDirection=\"root\">\n                            <ion-icon class=\"text-dark\" name=\"search\"></ion-icon>\n                        </ion-buttons>\n                    </div> -->\n\n                    <ion-tab-button class=\"ionTabs__btn tab-selected\" selected=\"true\" tab=\"old-testament\" style=\"margin: 0 10px 0 15px;\">\n                       {{'BIBLE.old_testament' | translate}}\n                    </ion-tab-button>\n                    <ion-tab-button class=\"ionTabs__btn\" tab=\"new-testament\" style=\"margin-right:15px;\">\n                        {{'BIBLE.new_testament' | translate}}\n                    </ion-tab-button>\n                </ion-tab-bar>\n            </ion-tabs>\n        </div>\n    </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/bible/bible-tabs.router.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bible/bible-tabs.router.module.ts ***!
  \***************************************************/
/*! exports provided: BibleTabsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleTabsRouterModule", function() { return BibleTabsRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bible_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bible.page */ "./src/app/bible/bible.page.ts");




const routes = [
    {
        path: '',
        component: _bible_page__WEBPACK_IMPORTED_MODULE_3__["BiblePage"],
        children: [
            {
                path: 'old-testament',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | old-testament-old-testament-module */ "old-testament-old-testament-module").then(__webpack_require__.bind(null, /*! ../old-testament/old-testament.module */ "./src/app/old-testament/old-testament.module.ts")).then(m => m.OldTestamentPageModule)
                    }
                ]
            },
            {
                path: 'new-testament',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | new-testament-new-testament-module */ "new-testament-new-testament-module").then(__webpack_require__.bind(null, /*! ../new-testament/new-testament.module */ "./src/app/new-testament/new-testament.module.ts")).then(m => m.NewTestamentPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/bible/new-testament',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/bible/new-testament',
        pathMatch: 'full'
    }
];
let BibleTabsRouterModule = class BibleTabsRouterModule {
};
BibleTabsRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BibleTabsRouterModule);



/***/ }),

/***/ "./src/app/bible/bible.module.ts":
/*!***************************************!*\
  !*** ./src/app/bible/bible.module.ts ***!
  \***************************************/
/*! exports provided: BiblePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblePageModule", function() { return BiblePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bible_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bible.page */ "./src/app/bible/bible.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _bible_tabs_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bible-tabs.router.module */ "./src/app/bible/bible-tabs.router.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











const routes = [
    {
        path: '',
        component: _bible_page__WEBPACK_IMPORTED_MODULE_6__["BiblePage"]
    }
];
let BiblePageModule = class BiblePageModule {
};
BiblePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _bible_tabs_router_module__WEBPACK_IMPORTED_MODULE_8__["BibleTabsRouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]
        ],
        declarations: [_bible_page__WEBPACK_IMPORTED_MODULE_6__["BiblePage"]]
    })
], BiblePageModule);



/***/ }),

/***/ "./src/app/bible/bible.page.scss":
/*!***************************************!*\
  !*** ./src/app/bible/bible.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.biblePage-mobile-header {\n  height: auto;\n}\n.ionTabs--bible .ionTabs__bar {\n  padding: 20px 0;\n  --border: none;\n  position: relative;\n}\n@media screen and (max-width: 768px) {\n  .ionTabs--bible .ionTabs__bar {\n    padding: 10px 0;\n  }\n}\n.ionTabs--bible .ionTabs__btn {\n  color: #000000;\n  border: 2px solid #000000;\n  height: 40px;\n  min-width: 90px;\n  border-radius: 50px;\n  font-size: 16px;\n  line-height: 18px;\n}\n@media screen and (max-width: 768px) {\n  .ionTabs--bible .ionTabs__btn {\n    font-size: 14px;\n    line-height: 16px;\n  }\n}\n.ionTabs--bible .ionTabs__btn.tab-selected {\n  color: #ffffff;\n  background: #000000;\n}\n.ionTabs__bar__icon {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n@media screen and (max-width: 576px) {\n  .ionTabs__bar__icon {\n    position: relative;\n    top: 0;\n    right: 0;\n    display: block;\n    margin-right: -20px;\n  }\n}\n.ionTabs__bar__icon.ismBarIcon {\n  position: relative;\n  top: 0;\n  right: 0;\n  display: block;\n}\n.ismBarIcon .commonBtn--dark {\n  --color: var(--primary-color, #302F34);\n  --color-activated:#ffffff;\n  --color-focused:#ffffff;\n  --color-hover:#ffffff;\n  --background: none;\n  --border-color: var(--primary-color, #302F34);\n  --background-hover: var(--primary-color, #302F34);\n  --background-activated: var(--primary-color, #302F34);\n  --background-focused: var(--primary-color, #302F34);\n  --border-radius: 50px;\n  --border-width: 2px;\n  --border-style: solid;\n  height: 40px;\n  min-width: 164px;\n  margin-right: 10px;\n}\n.ionTabs__bar__icon.hide-mobile .inputField {\n  width: 200px;\n}\n@media screen and (max-width: 992px) {\n  .ionTabs__bar__icon.hide-mobile {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 576px) {\n  .ionTabs__bar__icon.show-mobile .inputField {\n    width: 90%;\n    margin: 0 auto 15px;\n  }\n}\n.alert-radio-label.sc-ion-alert-md {\n  padding-left: 52px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  color: var(--ion-color-step-850, #262626);\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: pre-line;\n}\n.backBtn-wrapper .commonBtn--dark {\n  --color: #ffffff;\n  --background: #000;\n  --border-color: #000;\n  --background-hover: #000;\n  --color-activated: #ffffff;\n  --background-activated: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2JpYmxlL2JpYmxlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zdGRpbiIsInNyYy9hcHAvYmlibGUvYmlibGUucGFnZS5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3NyYy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsV0FBQTtBQWtGQSxVQUFBO0FBaUZBLFVBQUE7QUE4QkEsZ0JBQUE7QUFhQSxZQUFBO0FBV0EsbUJBQUE7QUFNQSxTQUFBO0FDbE9BO0VBQ0UsWUFBQTtBQ09GO0FESkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDT0o7QUN1UUU7RUZqUkE7SUFLSSxlQUFBO0VDU0o7QUFDRjtBRFBFO0VBRUUsY0FBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ09KO0FDeVBFO0VGelFBO0lBV0ksZUFBQTtJQUNBLGlCQUFBO0VDU0o7QUFDRjtBRFBFO0VBQ0UsY0RuQlU7RUNxQlYsbUJBQUE7QUNRSjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtBQ09GO0FDMk9FO0VGelBGO0lBU0ksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQ1NGO0FBQ0Y7QURSRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDVUo7QURMRTtFQUNFLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSxtREFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUUo7QURIRTtFQUNFLFlBQUE7QUNNSjtBQzBMRTtFRmxNRjtJQUtJLHdCQUFBO0VDT0Y7QUFDRjtBQ2lNRTtFRnBNRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ09KO0FBQ0Y7QURIQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ01GO0FESEE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2JpYmxlL2JpYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyB2YXJpYWJsZXMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBDb2xvcnMgKi9cbi8vZGVmYXVsdCBwcmltYXJ5LWNvbG9yIGlzICMzMDJGMzRcblxuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLCAjQURBQ0FFKTtcbiRkZWZhdWx0LXByaW1hcnktY29sb3I6ICMzMDJGMzQ7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kaGVhZGVyLWJnLWNvbG9yOiAjRDhEOEQ4O1xuJGhlYWRpbmctY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGhlYWRpbmctY29sb3ItbGlnaHQ6ICMzODM3M0M7XG4kZ3JheS1saWdodDogI0JBQkFCQTtcbiRoYWxmLXdoaXRlOiAjRjFGMUYxO1xuJGJsdWUtY29sb3I6ICM0MjY3QjI7XG4kZGFyay1ncmF5LWNvbG9yOiAjMjkyOTI5O1xuJGJsYWNrLTJuZDogIzIwMjAyMDtcbiRib3R0b20tZm9vdGVyLWJnLWNvbG9yOiAjMjUyNDI3O1xuJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0cmFuc3BhcmVudC1jb2xvcjogIzAwMDAwMDAwO1xuJGZvb3Rlci1iZy1jb2xvcjogJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjtcbiRmb290ZXItaGVhZGluZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJG1haW4tYmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcblxuJGdyYXktY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG5cbi8vbmV3IHBsYXllciB2YXJpYWJsZXNcblxuJHBsYXllci1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItcHJpbWFyeS1jb2xvciwgI0YyRjJGMik7XG4kcGxheWVyLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXNlY29uZGFyeS1jb2xvciwgIzIzMjMyMyk7XG4kcGxheWVyLXRleHQtY29sb3I6IHZhcigtLXBsYXllci10ZXh0LWNvbG9yLCAjMTE2RUZGKTtcbiRwbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvciwgIzAwMDAwMCk7XG4kcGxheWVyLWJ1dHRvbi1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1jb2xvciwgIzBBNjVGRik7XG4kcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yLCAjMjYzMTQxKTtcblxuJGNvbG9yczogKFxuICAgICAgICAnd2hpdGUnOiAkd2hpdGUtY29sb3IsXG4gICAgICAgICdoZWFkZXItYmctY29sb3InOiAkaGVhZGVyLWJnLWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWJnLWNvbG9yJzogJGZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItYmctY29sb3InOiAkYm90dG9tLWZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItdGV4dC1jb2xvcic6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3IsXG4gICAgICAgICdmb290ZXItaGVhZGluZy1jb2xvcic6ICRmb290ZXItaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ21haW4tYmctY29sb3InOiAkbWFpbi1iZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3InOiAkaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3ItbGlnaHQnOiAkaGVhZGluZy1jb2xvci1saWdodCxcbiAgICAgICAgJ2dyYXktY29sb3InOiRncmF5LWNvbG9yLFxuICAgICAgICAnZ3JheS1saWdodCc6ICRncmF5LWxpZ2h0LFxuICAgICAgICAnZGFyay1ncmF5JzogJGRhcmstZ3JheS1jb2xvcixcbiAgICAgICAgJ2hhbGYtd2hpdGUnOiRoYWxmLXdoaXRlLFxuICAgICAgICAnYmx1ZS1jb2xvcic6JGJsdWUtY29sb3IsXG4gICAgICAgICdibGFjay0ybmQnOiAkYmxhY2stMm5kLFxuICAgICAgICAndHJhbnNwYXJlbnQnOiAkdHJhbnNwYXJlbnQtY29sb3IsXG4pO1xuXG4vLyBCb2R5IGZvbnRcblxuJGJvZHktZm9udC1zaXplOiAxOHB4O1xuJHgtc21hbGwtYm9keS1mb250LXNpemU6IDE0cHg7XG4kYm9keS1mb250LXN0eWxlOiBub3JtYWw7XG4kYm9keS1mb250LXZhcmlhbnQ6IG5vcm1hbDtcbiRib2R5LWZvbnQtd2VpZ2h0OiA2MDA7XG4kbGluZS1oZWlnaHQ6IDEuNjtcblxuLy90eXBvZ3JhcGh5XG4kaGVhZGluZy1vbmUtc2l6ZTozNnB4O1xuJGhlYWRpbmctdHdvLXNpemU6IDI0cHg7XG4kaGVhZGluZy10d28tbWQtc2l6ZTogMzZweDtcbiRoZWFkaW5nLXRocmVlLXNpemU6IDE1cHg7XG4kaGVhZGluZy1mb3VyLXNpemU6MTRweDtcbi8vJGhlYWRpbmctZml4LXNpemU6O1xuJGhlYWRpbmctc2l4LXNpemU6IDE0cHg7XG5cbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4kZm9udC13ZWlnaHRzOiAoXG4gICAgICAgICdsaWdodCc6IDMwMCxcbiAgICAgICAgJ25vcm1hbCc6NDAwLFxuICAgICAgICAnbWVkaXVtJzogNTAwLFxuICAgICAgICAnc2VtaUJvbGQnOiA2MDAsXG4gICAgICAgICdib2xkJzogNzAwLFxuKTtcblxuLyogY2FyZHMgKi9cbiRjYXJkLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzgsIDM2LCAzNSwgLjE0KTtcblxuLy9CdXR0b25zXG5cbiRidG4tZm9udC13ZWlnaHQ6IDYwMDtcbiRidG4tdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXBhZGRpbmcteTogMTBweDtcbiRidG4tcGFkZGluZy1zdGFydDogMjBweDtcbiRidG4tcGFkZGluZy1lbmQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wOiA0cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tOiA0cHg7XG4kYnRuLWZvbnQtc2l6ZTogMTRweDtcbiRidG4tbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1czogNDBweDtcbiRidG4tdGV4dC10cmFuc2Zvcm06ICR0ZXh0LWxvd2VyY2FzZTtcbiRidG4taGVpZ2h0OiA0MHB4O1xuJGJ0bi1taW4td2lkdGg6IDkwcHg7XG5cbi8vYnV0dG9ucy13aGl0ZVxuJGJ0bi13aGl0ZS10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1ob3ZlcjogJHdoaXRlLWNvbG9yO1xuXG4vLy9idXR0b25zLXdoaXRlLW91dGxpbmVcbiRidG4td2hpdGUtb3V0bGluZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuLy8vZ3JheVxuJGJ0bi1ncmF5LXRleHQtY29sb3I6ICRncmF5LWNvbG9yO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJvcmRlci1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1ob3ZlcjogJGhhbGYtd2hpdGU7XG5cbi8vL2RhcmtcbiRidG4tZGFyay10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8vYmx1ZVxuJGJ0bi1ibHVlLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1ib3JkZXItY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtaG92ZXI6ICRibHVlLWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50XG4kYnRuLXRyYW5zcGFyZW50LXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnQgZGFyay1vdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtdGV4dC1jb2xvcjogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cblxuLy8vYmxhY2sgb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuLy9CdXR0b24gbGFyZ2VcbiRidG4tcGFkZGluZy1zdGFydC1sZzogMjBweDtcbiRidG4tcGFkZGluZy1lbmQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wLWxnOiA2cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tLWxnOiA2cHg7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJGJ0bi1mb250LXNpemU7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDMwcHg7XG4kYnRuLWhlaWdodC1sZzogNDhweDtcblxuLyogRm9ybXMgKi9cbiRpbnB1dC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDM2LCAxMTMsIDE4NSwgMC4xKTtcbiRpbnB1dC1mb250LXNpemU6IDI4cHg7XG4keC1zbWFsbC1pbnB1dC1mb250LXNpemU6ICR4LXNtYWxsLWJvZHktZm9udC1zaXplO1xuJGlucHV0LWJvcmRlcjogbm9uZTtcbiRpbnB1dC1yYWRpdXM6IDQwcHg7XG4kaW5wdXQtYm9yZGVyLWZvY3VzOiBub25lO1xuJGlucHV0LWhlaWdodDogNjBweDtcbiRpbnB1dC1wYWRkaW5nOiAwIDE2cHg7XG4kaW5wdXQtaWNvbi13aWR0aDogMjBweDtcbiRpbnB1dC1pY29uLWhlaWdodDogJGlucHV0LWljb24td2lkdGg7XG5cbi8vY2hlY2tib3hcbiRjaGVja2JveC13aWR0aDogMjRweDtcbiRjaGVja2JveC1oZWlnaHQ6ICRjaGVja2JveC13aWR0aDtcbiRjaGVja2JveC1zbWFsbC13aWR0aDogMjBweDtcbiRjaGVja2JveC1zbWFsbC1oZWlnaHQ6ICRjaGVja2JveC1zbWFsbC13aWR0aDtcblxuLy90ZXh0XG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuLy9jcmVkaXQgY2FyZFxuXG4kY3JlZGl0LWNhcmQtaWNvbi13aWR0aDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLWhlaWdodDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLXJpZ2h0OiByaWdodDtcbiRjcmVkaXQtY2FyZC1pY29uLWxlZnQ6IGxlZnQ7XG5cbi8qIEhlYWRlciBJY29uICovXG5cbiRoZWFkZXItaWNvbi13aWR0aDogMzBweDtcbiRoZWFkZXItaWNvbi1oZWlnaHQ6IDMwcHg7XG4kaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJGhlYWRlci1sb2dvLWhlaWdodDogNDhweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLWhlaWdodDogNDBweDtcbiR4LXNtYWxsLWhlYWRlci1pY29uLXdpZHRoOiAyNXB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC11cHBlcmNhc2U7XG4kaGVhZGVyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDYwMDtcblxuLyogU2lkZWJhciAqL1xuXG4kc2lkZWJhci1sb2dvLXdpZHRoOiAyMDBweDtcbiRzaWRlYmFyLWxvZ28taGVpZ2h0OiAxNjBweDtcbiR4LXNtYWxsLXNpZGViYXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWljb24td2lkdGg6IDI1cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHNpZGViYXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LWNhcGl0YWxpemU7XG4kc2lkZWJhci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA1MDA7XG4kc2lkZWJhci1pY29uLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbi8qIHByb2ZpbGUgYXZhdGFyICovXG5cbiRwcm9maWxlLWltYWdlLXdpZHRoOiA4MHB4O1xuJHByb2ZpbGUtaW1hZ2UtaGVpZ2h0OiAkcHJvZmlsZS1pbWFnZS13aWR0aDtcblxuXG4vKiB0YWJzICovXG5cbiR0YWJzLWJhci1iZy1jb2xvcjokdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWJ0bi10ZXh0LWNvbG9yOiAkdGFicy1iYXItdGV4dC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LXNpemU6IDE1cHg7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLXRleHQtY29sb3I6JGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLWJvcmRlci1jb2xvcjoycHggc29saWQgJGhlYWRpbmctY29sb3I7XG5cblxuXG4vLy8gYXBwLWNvbnRhaW5lci13aWR0aFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kY29udGFpbmVyLXdpZHRoOiAoXG4gICAgICAgICdsYXJnZSc6IDEwMCUsXG4gICAgICAgICdtZWRpdW0nOiAxMDAlLFxuICAgICAgICAnc21hbGwnOiAxMDAlLFxuICAgICAgICAneC1zbWFsbCc6IDEwMCUsXG4pICFkZWZhdWx0O1xuXG4vLy8gQnJlYWtwb2ludHMgbWFwXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRtZWRpYS1icmVha3BvaW50czogKFxuICAgICAgICAnbGFyZ2UnOiAxMjAwcHgsXG4gICAgICAgICdtZWRpdW0nOiA5OTJweCxcbiAgICAgICAgJ3NtYWxsJzogNzY4cHgsXG4gICAgICAgICd4LXNtYWxsJzogNTc2cHgsXG4gICAgICAgICd4eC1zbWFsbCc6IDQxNHB4LFxuKSAhZGVmYXVsdDtcblxuLy8vIFJlbGF0aXZlIG9yIGFic29sdXRlIFVSTCB3aGVyZSBhbGwgYXNzZXRzIGFyZSBzZXJ2ZWQgZnJvbVxuLy8vIEB0eXBlIFN0cmluZ1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaGVuIHVzaW5nIGEgQ0ROXG4vLy8gICAkYmFzZS11cmw6ICdodHRwOi8vY2RuLmV4YW1wbGUuY29tL2Fzc2V0cy8nO1xuJGJhc2UtdXJsOiAnYXNzZXRzLycgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vc2Fzcy9jb25maWdcIjtcbi5iaWJsZVBhZ2UtbW9iaWxlLWhlYWRlcntcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmlvblRhYnMtLWJpYmxlIHtcbiAgLmlvblRhYnNfX2JhciB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIC0tYm9yZGVyOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSBtZWRpYS1zbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgfVxuICB9XG4gIC5pb25UYWJzX19idG4ge1xuICAgIC8vIGNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgQGluY2x1ZGUgbWVkaWEtc20ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG4gIC5pb25UYWJzX19idG4udGFiLXNlbGVjdGVkIHtcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIC8vIGJhY2tncm91bmQ6ICRoZWFkaW5nLWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIH1cbn1cblxuLmlvblRhYnNfX2Jhcl9faWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgQGluY2x1ZGUgbWVkaWEteHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgfVxuICAmLmlzbUJhckljb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICB9XG59XG4uaXNtQmFySWNvbntcbiAgLmNvbW1vbkJ0bi0tZGFya3tcbiAgICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDojZmZmZmZmO1xuICAgIC0tY29sb3ItZm9jdXNlZDojZmZmZmZmO1xuICAgIC0tY29sb3ItaG92ZXI6I2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLXdpZHRoOiAxNjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuLmlvblRhYnNfX2Jhcl9faWNvbi5oaWRlLW1vYmlsZSB7XG4gIC5pbnB1dEZpZWxkIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLmlvblRhYnNfX2Jhcl9faWNvbi5zaG93LW1vYmlsZSB7XG4gIEBpbmNsdWRlIG1lZGlhLXhzIHtcbiAgICAuaW5wdXRGaWVsZCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmctbGVmdDogNTJweDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmbGV4OiAxO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCAjMjYyNjI2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uYmFja0J0bi13cmFwcGVyIC5jb21tb25CdG4tLWRhcmsge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDAwO1xufVxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmJpYmxlUGFnZS1tb2JpbGUtaGVhZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW9uVGFicy0tYmlibGUgLmlvblRhYnNfX2JhciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgLS1ib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pb25UYWJzLS1iaWJsZSAuaW9uVGFic19fYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cbi5pb25UYWJzLS1iaWJsZSAuaW9uVGFic19fYnRuIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIGhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmlvblRhYnMtLWJpYmxlIC5pb25UYWJzX19idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxufVxuLmlvblRhYnMtLWJpYmxlIC5pb25UYWJzX19idG4udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5pb25UYWJzX19iYXJfX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW9uVGFic19fYmFyX19pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIH1cbn1cbi5pb25UYWJzX19iYXJfX2ljb24uaXNtQmFySWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pc21CYXJJY29uIC5jb21tb25CdG4tLWRhcmsge1xuICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZmZmZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiNmZmZmZmY7XG4gIC0tY29sb3ItaG92ZXI6I2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogMTY0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmlvblRhYnNfX2Jhcl9faWNvbi5oaWRlLW1vYmlsZSAuaW5wdXRGaWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pb25UYWJzX19iYXJfX2ljb24uaGlkZS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW9uVGFic19fYmFyX19pY29uLnNob3ctbW9iaWxlIC5pbnB1dEZpZWxkIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XG4gIH1cbn1cblxuLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmctbGVmdDogNTJweDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmbGV4OiAxO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCAjMjYyNjI2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uYmFja0J0bi13cmFwcGVyIC5jb21tb25CdG4tLWRhcmsge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwMDA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDAwO1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bible/bible.page.ts":
/*!*************************************!*\
  !*** ./src/app/bible/bible.page.ts ***!
  \*************************************/
/*! exports provided: BiblePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblePage", function() { return BiblePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_bible_translations_bible_translations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/bible-translations/bible-translations.component */ "./src/app/common/bible-translations/bible-translations.component.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");



















// import { Globalization } from '@ionic-native/globalization/ngx';
let BiblePage = class BiblePage {
    constructor(route, loader, storage, sermonsService, dom, router, location, common, toast, _bibleService, analytics, event_provider, platform, device, alertController, translate, modalController, audioService) {
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this._bibleService = _bibleService;
        this.analytics = analytics;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.alertController = alertController;
        this.translate = translate;
        this.modalController = modalController;
        this.audioService = audioService;
        this.language_families = [
            {
                language_family_code: 'ENG',
                language_family_name: 'English'
            },
            {
                language_family_code: 'CHN',
                language_family_name: '中文'
            },
            {
                language_family_code: 'SPN',
                language_family_name: 'Español'
            },
            {
                language_family_code: 'HND',
                language_family_name: 'हिंदी'
            },
            {
                language_family_code: 'FRN',
                language_family_name: 'FranÃ§ais'
            },
            {
                language_family_code: 'ARA',
                language_family_name: 'العربية'
            },
            {
                language_family_code: 'BNG',
                language_family_name: 'Bengali'
            },
            {
                language_family_code: 'RUS',
                language_family_name: 'Русский'
            },
            {
                language_family_code: 'POR',
                language_family_name: 'Português'
            },
            {
                language_family_code: 'IND',
                language_family_name: 'Indonesian'
            }
        ];
        this.selected_language = { language_family_code: 'ENG', language_family_name: 'English', selection_type: 'default' };
        this.selected_volume = { dam_id: 'EN1WEB', volume_name: 'WEB - Winfred Henson', version_code: 'WEB' };
        this.filtered_volumes = [];
        this.modal_is_on = false;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
        if (b) {
            if (b.language) {
                this.selected_language = b.language;
            }
            if (b.volume) {
                this.selected_volume = b.volume;
            }
        }
        let bible_obj = {
            language: this.selected_language,
            volume: this.selected_volume
        };
        // storing in local storage
        localStorage.setItem("bible", JSON.stringify(bible_obj));
        //   this.set_dam_id_lang();
        // getting bible status from local storage
        this.event_provider.updateBibleLanguage.subscribe(value => {
            let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
            if (b) {
                if (b.language) {
                    this.selected_language = b.language;
                }
                if (b.volume) {
                    this.selected_volume = b.volume;
                }
            }
            let bible_obj = {
                language: this.selected_language,
                volume: this.selected_volume
            };
            localStorage.setItem("bible", JSON.stringify(bible_obj));
            // // storing in local storage
            //this.set_dam_id_lang();
            this.ngOnInit();
            this.modal_is_on = false;
        });
    }
    ionViewWillEnter() {
        // this.event_provider.settranslationsicon(true);
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                let app_pages = res.apppages.find(x => x.name === 'Bible');
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting bible status from local storage
            let theme = yield this.storage.get('theme');
            if (theme) {
                this.ch_id = theme.ch_id;
                // saving app_pages
                const body = JSON.stringify({ id: this.ch_id });
                this.common.getTheme(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res) {
                        this.theme = res.church;
                        // storing latest app pages data in storage
                        this.common.store_app_pages(res.apppages, 'Bible');
                        this.common.storeTheme(res.church);
                        // getting user data
                        this.getUser();
                        // getting theme status from local storage
                        this.storage.get('app_pages').then(res => {
                            let app_pages = res.filter(x => x.name === 'Bible');
                            if (app_pages[0]) {
                                this.banner_image = app_pages[0].website_banner;
                                this.banner_desc = app_pages[0].banner_description;
                                this.banner_title = app_pages[0].banner_title;
                                this.page_name = app_pages[0].title;
                                this.custom_name = app_pages[0].name;
                            }
                        });
                    }
                }));
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
            // this.getLang_Version();
        });
    }
    openTranslationsModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_bible_translations_bible_translations_component__WEBPACK_IMPORTED_MODULE_17__["BibleTranslationsComponent"],
                cssClass: 'BibleModal',
                componentProps: {
                    filtered_volumes: this.filtered_volumes,
                    selected_lang: this.selected_language,
                    selected_vol: this.selected_volume,
                    all_langs: this.allLangs
                }
            });
            modal.onDidDismiss().then((res) => {
                let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
                if (b) {
                    if (b.language) {
                        this.selected_language = b.language;
                    }
                    if (b.volume) {
                        this.selected_volume = b.volume;
                    }
                }
                let bible_obj = {
                    language: this.selected_language,
                    volume: this.selected_volume
                };
                // storing in local storage
                localStorage.setItem("bible", JSON.stringify(bible_obj));
                //  this.set_dam_id_lang();
                // getting bible status from local storage
                this.ngOnInit();
                this.modal_is_on = false;
            });
            return yield modal.present();
        });
    }
    selectvolumealert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Translation',
                message: 'Select volume to translate',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    novolumealert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Translation',
                message: 'No Volume for this Language',
                buttons: ['OK']
            });
            yield alert.present();
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
    // getLang_Version() {
    //     this.storage.get('bible_languages').then( (langs: any) => {
    //         if (langs){
    //             this.allLangs = langs;
    //             this.language_families = this.language_families.concat(langs);
    //         } else {
    //             // getting volumelanguagefamily from API through Service
    //             // this._bibleService.volumelanguagefamily().subscribe((res: any) => {
    //             //     if (res) {
    //             //         this.allLangs = res;
    //             //         // concatinating created language families with the one received
    //             //         this.language_families = this.language_families.concat(res);
    //             //         this.storage.set('bible_languages', res);
    //             //     }
    //             // });
    //         }
    //     });
    // }
    //     set_dam_id_lang() {
    // // getting Volumes from API through Service
    //                 // this._bibleService.getVolumes(this.selected_language.language_family_code).subscribe(res => {
    //                 //     if (res) {
    //                 //         this.volumes = res;
    //                 //         let filtered_volumes: any = [];
    //                 //         // ======   filtering volumes according to DAM Id ====================
    //                 //         if (this.volumes && this.volumes.length > 0) {
    //                 //             let current_obj = this.volumes[0];
    //                 //             let current_dam_id = this.volumes[0].dam_id;
    //                 //             current_dam_id = current_dam_id.substring(0, 6);
    //                 //             current_obj.dam_id = current_dam_id;
    //                 //             filtered_volumes.push(current_obj);
    //                 //             for (let i = 0; i < this.volumes.length; i++) {
    //                 //                 if (this.volumes[i].dam_id.includes(current_dam_id)) {
    //                 //                 } else {
    //                 //                     current_dam_id = this.volumes[i].dam_id.substring(0, 6);
    //                 //                     current_obj = this.volumes[i];
    //                 //                     current_obj.dam_id = current_dam_id;
    //                 //                     filtered_volumes.push(current_obj);
    //                 //                 }
    //                 //             }
    //                 //             this.filtered_volumes = filtered_volumes;
    //                 //             let res = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
    //                 //             if (res && res.language) {
    //                 //                 if (res.language.language_family_code !== this.selected_language.language_family_code) {
    //                 //                     this.selectvolumealert();
    //                 //                 }
    //                 //             }
    //                 //         } else {
    //                 //             this.filtered_volumes = [];
    //                 //             this.novolumealert();
    //                 //         }
    //                 //         // ============================================================
    //                 //     }
    //                 //     let bible_obj = {
    //                 //         language: this.selected_language,
    //                 //         volume: this.selected_volume
    //                 //     };
    //                 //     // storing bible lang and volume in storage
    //                 //     localStorage.setItem("bible", JSON.stringify(bible_obj));
    //                 // });
    //     }
    set_dam_id_version() {
        let bible_obj = {
            language: this.selected_language,
            volume: this.selected_volume
        };
        localStorage.setItem("bible", JSON.stringify(bible_obj));
        // firing event
        this.event_provider.updateoldtest(bible_obj); // calling event
        this.event_provider.updatenewtest(bible_obj.volume.dam_id); // calling event
        // storing bible lang and volume in storage
    }
    showLoader() {
        this.loader.presentLoading().then(() => {
            setTimeout(() => {
                this.loader.stopLoading();
            }, 2000);
        });
    }
    gotobackPage() {
        this.location.back();
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
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_13__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
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
        this.analytics.setAnalytics(body).subscribe((res) => {
        });
    }
    ionViewDidLeave() {
        this.setAnalytics();
        // this.audioService.setLiveSteam();
        // hide the translations icon from header
        // this.event_provider.settranslationsicon(false);
    }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(false, 'bible');
        // setting start time for analytics
        // this.event_provider.settranslationsicon(true);
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
    }
};
BiblePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_10__["BibleService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__["AudioplayerService"] }
];
BiblePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bible',
        template: __webpack_require__(/*! raw-loader!./bible.page.html */ "./node_modules/raw-loader/index.js!./src/app/bible/bible.page.html"),
        styles: [__webpack_require__(/*! ./bible.page.scss */ "./src/app/bible/bible.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_bible_service__WEBPACK_IMPORTED_MODULE_10__["BibleService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__["AudioplayerService"]])
], BiblePage);



/***/ })

}]);
//# sourceMappingURL=bible-bible-module-es2015.js.map