(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["old-testament-old-testament-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/old-testament/old-testament.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/old-testament/old-testament.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-card *ngIf=\"books && books.length > 0\" class=\"ionCard ionCard--mobile\">\n                <ion-card-content class=\"ion-no-padding\">\n                    <div *ngFor=\"let item of books\" (click)=\"expandItem(item)\">\n                        <div class=\"accordionHeader\" [class.collapsed]=\"item.expanded\">\n                            <ion-row class=\"ion-align-items-center\">\n                                <ion-col size=\"10\">\n                                    <ion-card-title class=\"heading4 accordionHeader__heading\">{{item?.book_name}}</ion-card-title>\n                                </ion-col>\n                                <ion-col size=\"2\" class=\"ion-text-right\">\n                                    <ion-icon name=\"arrow-dropright\" class=\"accordionHeader__icon accordionHeader__icon--right\"></ion-icon>\n                                    <ion-icon name=\"arrow-dropdown\" class=\"accordionHeader__icon accordionHeader__icon--down\"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                        <div class=\"accordionBody\" style=\"padding-bottom: 0;\">\n                            <app-expandable [expanded]=\"item.expanded\">\n                                <div routerDirection=\"root\">\n                                    <ul class=\"list-inline bibleVerses\" *ngIf=\"chapters\">\n                                        <li class=\"list-inline-item bibleVerses__count\" *ngFor=\"let chapter of chapters\" (click)=\"selectVerse(chapter, item)\" [class.active]=\"chapter.selected\">\n                                            {{chapter?.id}}\n                                        </li>\n                                    </ul>\n                                </div>\n                            </app-expandable>\n                        </div>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-card *ngIf=\" books && books.length === 0\" class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\">{{'BIBLE.no_bible' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n<!--    <app-footer *ngIf=\"ch_id != '1000'\" ></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"ch_id != '1000'\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/old-testament/old-testament.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/old-testament/old-testament.module.ts ***!
  \*******************************************************/
/*! exports provided: OldTestamentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldTestamentPageModule", function() { return OldTestamentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _old_testament_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./old-testament.page */ "./src/app/old-testament/old-testament.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _old_testament_page__WEBPACK_IMPORTED_MODULE_6__["OldTestamentPage"]
    }
];
let OldTestamentPageModule = class OldTestamentPageModule {
};
OldTestamentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_old_testament_page__WEBPACK_IMPORTED_MODULE_6__["OldTestamentPage"]]
    })
], OldTestamentPageModule);



/***/ }),

/***/ "./src/app/old-testament/old-testament.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/old-testament/old-testament.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL29sZC10ZXN0YW1lbnQvb2xkLXRlc3RhbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsV0FBQTtBQWtGQSxVQUFBO0FBaUZBLFVBQUE7QUE4QkEsZ0JBQUE7QUFhQSxZQUFBO0FBV0EsbUJBQUE7QUFNQSxTQUFBIiwiZmlsZSI6InNyYy9hcHAvb2xkLXRlc3RhbWVudC9vbGQtdGVzdGFtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyB2YXJpYWJsZXMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBDb2xvcnMgKi9cbi8vZGVmYXVsdCBwcmltYXJ5LWNvbG9yIGlzICMzMDJGMzRcblxuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLCAjQURBQ0FFKTtcbiRkZWZhdWx0LXByaW1hcnktY29sb3I6ICMzMDJGMzQ7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kaGVhZGVyLWJnLWNvbG9yOiAjRDhEOEQ4O1xuJGhlYWRpbmctY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGhlYWRpbmctY29sb3ItbGlnaHQ6ICMzODM3M0M7XG4kZ3JheS1saWdodDogI0JBQkFCQTtcbiRoYWxmLXdoaXRlOiAjRjFGMUYxO1xuJGJsdWUtY29sb3I6ICM0MjY3QjI7XG4kZGFyay1ncmF5LWNvbG9yOiAjMjkyOTI5O1xuJGJsYWNrLTJuZDogIzIwMjAyMDtcbiRib3R0b20tZm9vdGVyLWJnLWNvbG9yOiAjMjUyNDI3O1xuJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0cmFuc3BhcmVudC1jb2xvcjogIzAwMDAwMDAwO1xuJGZvb3Rlci1iZy1jb2xvcjogJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjtcbiRmb290ZXItaGVhZGluZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJG1haW4tYmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcblxuJGdyYXktY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG5cbi8vbmV3IHBsYXllciB2YXJpYWJsZXNcblxuJHBsYXllci1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItcHJpbWFyeS1jb2xvciwgI0YyRjJGMik7XG4kcGxheWVyLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXNlY29uZGFyeS1jb2xvciwgIzIzMjMyMyk7XG4kcGxheWVyLXRleHQtY29sb3I6IHZhcigtLXBsYXllci10ZXh0LWNvbG9yLCAjMTE2RUZGKTtcbiRwbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvciwgIzAwMDAwMCk7XG4kcGxheWVyLWJ1dHRvbi1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1jb2xvciwgIzBBNjVGRik7XG4kcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yLCAjMjYzMTQxKTtcblxuJGNvbG9yczogKFxuICAgICAgICAnd2hpdGUnOiAkd2hpdGUtY29sb3IsXG4gICAgICAgICdoZWFkZXItYmctY29sb3InOiAkaGVhZGVyLWJnLWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWJnLWNvbG9yJzogJGZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItYmctY29sb3InOiAkYm90dG9tLWZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItdGV4dC1jb2xvcic6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3IsXG4gICAgICAgICdmb290ZXItaGVhZGluZy1jb2xvcic6ICRmb290ZXItaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ21haW4tYmctY29sb3InOiAkbWFpbi1iZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3InOiAkaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3ItbGlnaHQnOiAkaGVhZGluZy1jb2xvci1saWdodCxcbiAgICAgICAgJ2dyYXktY29sb3InOiRncmF5LWNvbG9yLFxuICAgICAgICAnZ3JheS1saWdodCc6ICRncmF5LWxpZ2h0LFxuICAgICAgICAnZGFyay1ncmF5JzogJGRhcmstZ3JheS1jb2xvcixcbiAgICAgICAgJ2hhbGYtd2hpdGUnOiRoYWxmLXdoaXRlLFxuICAgICAgICAnYmx1ZS1jb2xvcic6JGJsdWUtY29sb3IsXG4gICAgICAgICdibGFjay0ybmQnOiAkYmxhY2stMm5kLFxuICAgICAgICAndHJhbnNwYXJlbnQnOiAkdHJhbnNwYXJlbnQtY29sb3IsXG4pO1xuXG4vLyBCb2R5IGZvbnRcblxuJGJvZHktZm9udC1zaXplOiAxOHB4O1xuJHgtc21hbGwtYm9keS1mb250LXNpemU6IDE0cHg7XG4kYm9keS1mb250LXN0eWxlOiBub3JtYWw7XG4kYm9keS1mb250LXZhcmlhbnQ6IG5vcm1hbDtcbiRib2R5LWZvbnQtd2VpZ2h0OiA2MDA7XG4kbGluZS1oZWlnaHQ6IDEuNjtcblxuLy90eXBvZ3JhcGh5XG4kaGVhZGluZy1vbmUtc2l6ZTozNnB4O1xuJGhlYWRpbmctdHdvLXNpemU6IDI0cHg7XG4kaGVhZGluZy10d28tbWQtc2l6ZTogMzZweDtcbiRoZWFkaW5nLXRocmVlLXNpemU6IDE1cHg7XG4kaGVhZGluZy1mb3VyLXNpemU6MTRweDtcbi8vJGhlYWRpbmctZml4LXNpemU6O1xuJGhlYWRpbmctc2l4LXNpemU6IDE0cHg7XG5cbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4kZm9udC13ZWlnaHRzOiAoXG4gICAgICAgICdsaWdodCc6IDMwMCxcbiAgICAgICAgJ25vcm1hbCc6NDAwLFxuICAgICAgICAnbWVkaXVtJzogNTAwLFxuICAgICAgICAnc2VtaUJvbGQnOiA2MDAsXG4gICAgICAgICdib2xkJzogNzAwLFxuKTtcblxuLyogY2FyZHMgKi9cbiRjYXJkLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzgsIDM2LCAzNSwgLjE0KTtcblxuLy9CdXR0b25zXG5cbiRidG4tZm9udC13ZWlnaHQ6IDYwMDtcbiRidG4tdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXBhZGRpbmcteTogMTBweDtcbiRidG4tcGFkZGluZy1zdGFydDogMjBweDtcbiRidG4tcGFkZGluZy1lbmQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wOiA0cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tOiA0cHg7XG4kYnRuLWZvbnQtc2l6ZTogMTRweDtcbiRidG4tbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1czogNDBweDtcbiRidG4tdGV4dC10cmFuc2Zvcm06ICR0ZXh0LWxvd2VyY2FzZTtcbiRidG4taGVpZ2h0OiA0MHB4O1xuJGJ0bi1taW4td2lkdGg6IDkwcHg7XG5cbi8vYnV0dG9ucy13aGl0ZVxuJGJ0bi13aGl0ZS10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1ob3ZlcjogJHdoaXRlLWNvbG9yO1xuXG4vLy9idXR0b25zLXdoaXRlLW91dGxpbmVcbiRidG4td2hpdGUtb3V0bGluZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuLy8vZ3JheVxuJGJ0bi1ncmF5LXRleHQtY29sb3I6ICRncmF5LWNvbG9yO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJvcmRlci1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1ob3ZlcjogJGhhbGYtd2hpdGU7XG5cbi8vL2RhcmtcbiRidG4tZGFyay10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8vYmx1ZVxuJGJ0bi1ibHVlLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1ib3JkZXItY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtaG92ZXI6ICRibHVlLWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50XG4kYnRuLXRyYW5zcGFyZW50LXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnQgZGFyay1vdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtdGV4dC1jb2xvcjogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cblxuLy8vYmxhY2sgb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuLy9CdXR0b24gbGFyZ2VcbiRidG4tcGFkZGluZy1zdGFydC1sZzogMjBweDtcbiRidG4tcGFkZGluZy1lbmQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wLWxnOiA2cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tLWxnOiA2cHg7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJGJ0bi1mb250LXNpemU7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDMwcHg7XG4kYnRuLWhlaWdodC1sZzogNDhweDtcblxuLyogRm9ybXMgKi9cbiRpbnB1dC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDM2LCAxMTMsIDE4NSwgMC4xKTtcbiRpbnB1dC1mb250LXNpemU6IDI4cHg7XG4keC1zbWFsbC1pbnB1dC1mb250LXNpemU6ICR4LXNtYWxsLWJvZHktZm9udC1zaXplO1xuJGlucHV0LWJvcmRlcjogbm9uZTtcbiRpbnB1dC1yYWRpdXM6IDQwcHg7XG4kaW5wdXQtYm9yZGVyLWZvY3VzOiBub25lO1xuJGlucHV0LWhlaWdodDogNjBweDtcbiRpbnB1dC1wYWRkaW5nOiAwIDE2cHg7XG4kaW5wdXQtaWNvbi13aWR0aDogMjBweDtcbiRpbnB1dC1pY29uLWhlaWdodDogJGlucHV0LWljb24td2lkdGg7XG5cbi8vY2hlY2tib3hcbiRjaGVja2JveC13aWR0aDogMjRweDtcbiRjaGVja2JveC1oZWlnaHQ6ICRjaGVja2JveC13aWR0aDtcbiRjaGVja2JveC1zbWFsbC13aWR0aDogMjBweDtcbiRjaGVja2JveC1zbWFsbC1oZWlnaHQ6ICRjaGVja2JveC1zbWFsbC13aWR0aDtcblxuLy90ZXh0XG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuLy9jcmVkaXQgY2FyZFxuXG4kY3JlZGl0LWNhcmQtaWNvbi13aWR0aDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLWhlaWdodDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLXJpZ2h0OiByaWdodDtcbiRjcmVkaXQtY2FyZC1pY29uLWxlZnQ6IGxlZnQ7XG5cbi8qIEhlYWRlciBJY29uICovXG5cbiRoZWFkZXItaWNvbi13aWR0aDogMzBweDtcbiRoZWFkZXItaWNvbi1oZWlnaHQ6IDMwcHg7XG4kaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJGhlYWRlci1sb2dvLWhlaWdodDogNDhweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLWhlaWdodDogNDBweDtcbiR4LXNtYWxsLWhlYWRlci1pY29uLXdpZHRoOiAyNXB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC11cHBlcmNhc2U7XG4kaGVhZGVyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDYwMDtcblxuLyogU2lkZWJhciAqL1xuXG4kc2lkZWJhci1sb2dvLXdpZHRoOiAyMDBweDtcbiRzaWRlYmFyLWxvZ28taGVpZ2h0OiAxNjBweDtcbiR4LXNtYWxsLXNpZGViYXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWljb24td2lkdGg6IDI1cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHNpZGViYXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LWNhcGl0YWxpemU7XG4kc2lkZWJhci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA1MDA7XG4kc2lkZWJhci1pY29uLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbi8qIHByb2ZpbGUgYXZhdGFyICovXG5cbiRwcm9maWxlLWltYWdlLXdpZHRoOiA4MHB4O1xuJHByb2ZpbGUtaW1hZ2UtaGVpZ2h0OiAkcHJvZmlsZS1pbWFnZS13aWR0aDtcblxuXG4vKiB0YWJzICovXG5cbiR0YWJzLWJhci1iZy1jb2xvcjokdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWJ0bi10ZXh0LWNvbG9yOiAkdGFicy1iYXItdGV4dC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LXNpemU6IDE1cHg7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLXRleHQtY29sb3I6JGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLWJvcmRlci1jb2xvcjoycHggc29saWQgJGhlYWRpbmctY29sb3I7XG5cblxuXG4vLy8gYXBwLWNvbnRhaW5lci13aWR0aFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kY29udGFpbmVyLXdpZHRoOiAoXG4gICAgICAgICdsYXJnZSc6IDEwMCUsXG4gICAgICAgICdtZWRpdW0nOiAxMDAlLFxuICAgICAgICAnc21hbGwnOiAxMDAlLFxuICAgICAgICAneC1zbWFsbCc6IDEwMCUsXG4pICFkZWZhdWx0O1xuXG4vLy8gQnJlYWtwb2ludHMgbWFwXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRtZWRpYS1icmVha3BvaW50czogKFxuICAgICAgICAnbGFyZ2UnOiAxMjAwcHgsXG4gICAgICAgICdtZWRpdW0nOiA5OTJweCxcbiAgICAgICAgJ3NtYWxsJzogNzY4cHgsXG4gICAgICAgICd4LXNtYWxsJzogNTc2cHgsXG4gICAgICAgICd4eC1zbWFsbCc6IDQxNHB4LFxuKSAhZGVmYXVsdDtcblxuLy8vIFJlbGF0aXZlIG9yIGFic29sdXRlIFVSTCB3aGVyZSBhbGwgYXNzZXRzIGFyZSBzZXJ2ZWQgZnJvbVxuLy8vIEB0eXBlIFN0cmluZ1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaGVuIHVzaW5nIGEgQ0ROXG4vLy8gICAkYmFzZS11cmw6ICdodHRwOi8vY2RuLmV4YW1wbGUuY29tL2Fzc2V0cy8nO1xuJGJhc2UtdXJsOiAnYXNzZXRzLycgIWRlZmF1bHQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/old-testament/old-testament.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/old-testament/old-testament.page.ts ***!
  \*****************************************************/
/*! exports provided: OldTestamentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldTestamentPage", function() { return OldTestamentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");











let OldTestamentPage = class OldTestamentPage {
    constructor(_bibleService, loader, toast, router, storage, event_provider, route, translate, common, audioService) {
        this._bibleService = _bibleService;
        this.loader = loader;
        this.toast = toast;
        this.router = router;
        this.storage = storage;
        this.event_provider = event_provider;
        this.route = route;
        this.translate = translate;
        this.common = common;
        this.audioService = audioService;
        this.selectedChapter = {
            dam_id: '',
            book_id: '',
            book_name: '',
            book_order: '',
            number_of_chapters: '',
            chapters: '',
            expanded: ''
        };
        this.selected_version = 'WEB';
        // selected_language: any = 'EN1';
        this.selected_language = { language_family_code: 'ENG', language_family_name: 'English', selection_type: 'default' };
        // selected_volume: any = 'EN1WEB';
        this.selected_volume = { dam_id: 'EN1WEB', volume_name: 'WEB - Winfred Henson', version_code: 'WEB' };
        this.chapters = [];
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        this.event_provider.updateOldTest.subscribe(value => {
            this.bible_id = value.value.volume.dam_id;
            //  this.getBooks( this.dam_id );
            this.getCMPBooks(this.bible_id);
            this.event_provider.updatenewtest(this.bible_id); // calling event
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let current_url = new URL(window.location.href);
            this.params_book_id = this.route.snapshot.paramMap.get('book_id');
            this.params_chap_id = this.route.snapshot.paramMap.get('chapter_id');
            this.params_book_id = this._bibleService.book_id;
            this.params_chap_id = this._bibleService.chapter_id;
            this.storage.get('app_language').then((res) => {
                this.langCode = res.code;
                if (res.bible_id) {
                    this.audio_id = res.audio_id;
                    this.bible_id = res.bible_id;
                    // var lastWord = this.dam_id.charAt(this.dam_id.length-1);
                    // lastWord != 'O' ? this.dam_id =  this.dam_id + 'O' : ''; 
                    // getting books of selected volume
                    this.getCMPBooks(this.bible_id);
                }
                else {
                    this.toast.presentToastWithOptions('No Bible exist', 'Something Went Wrong', 'danger');
                }
            });
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
            // getting lang and version from local storage
            this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!(Object.keys(res).length === 0)) {
                    this.ch_id = res.church.ch_id;
                }
            }));
        });
    }
    // async ngOnInit() {
    //     let current_url = new URL(window.location.href);
    //         this.params_book_id = this.route.snapshot.paramMap.get('book_id');
    //         this.params_chap_id = this.route.snapshot.paramMap.get('chapter_id');
    //         this.storage.get('app_language').then((res) => {
    //             if(localStorage.getItem('app_language') == 'ml') {
    //                 if(res.bible_id) {
    //                     if (!this.books) {
    //                         this.dam_id = res.bible_id;
    //                         // getting books of selected volume
    //                         console.log(this.dam_id)
    //                         this.getCMPBooks(this.dam_id);
    //                     }
    //                 } else {
    //                     if (!this.books) {
    //                         this.dam_id = 'ENGESHN';
    //                         // getting books of selected volume
    //                         this.getBooks(this.dam_id);
    //                     }
    //                 }
    //             } else {
    //                 if(res.dam_id) {
    //                     if (!this.books) {
    //                         this.dam_id = res.dam_id;
    //                         var lastWord = this.dam_id.charAt(this.dam_id.length-1);
    //                         lastWord != 'O' ? this.dam_id =  this.dam_id + 'O' : ''; 
    //                         // getting books of selected volume
    //                         this.getBooks(this.dam_id);
    //                     }
    //                 } else {
    //                     if (!this.books) {
    //                         this.dam_id = 'ENGESHO';
    //                         // getting books of selected volume
    //                         this.getBooks(this.dam_id);
    //                     }
    //                 }
    //             }
    //         })
    //     let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
    //     if (b) {
    //         if (b.language) {
    //             this.selected_language = b.language;
    //         }
    //         if (b.volume) {
    //             this.selected_volume = b.volume;
    //         }
    //     }
    //     let bible_obj = {
    //         language: this.selected_language,
    //         volume: this.selected_volume
    //     };
    //     localStorage.setItem("bible", JSON.stringify(bible_obj));
    //     // getting lang and version from local storage
    //     this.event_provider.getChurchData.subscribe(async (res: any) => {
    //         if (!(Object.keys(res).length === 0)) {
    //             this.ch_id = res.church.ch_id;
    //         }
    //     });
    // }
    // called when verse is selected
    // set data and navigate to chapter
    selectVerse(item, book) {
        if (item) {
            this.chapters.map(function (x) {
                if (x.id !== item.id) {
                    x.selected = false;
                }
                else {
                    x.selected = true;
                }
                return x;
            });
            let selectedBook = this.books.find(s => s.book_id === book.book_id);
            // setting data to take to chapter page
            let data = {
                queryParams: {
                    chapter: JSON.stringify(item),
                    book: JSON.stringify(selectedBook),
                    dam_id: this.bible_id,
                    audio_id: this.audio_id,
                    page: 'O'
                }
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    }
    expandItem(item) {
        if (item && item.book_id !== this.selectedChapter.book_id) {
            this.selectedChapter = item;
            //Geting the chapters
            let data = item.chapters.split(',');
            let finalData = [];
            data.forEach(function (e) {
                if (e != '') {
                    let chapter = {
                        id: e,
                        selected: false
                    };
                    finalData.push(chapter);
                }
            });
            this.chapters = finalData;
            //Expanding Toggle
            this.books.map(function (x) {
                if (x.book_id !== item.book_id) {
                    x.expanded = false;
                }
                else {
                    x.expanded = true;
                }
                return x;
            });
        }
    }
    // getBooks( current_dam_id ) {
    //     let self = this;
    //     let dam_id = current_dam_id + 'O';
    //         this._bibleService.getbibleBooks( dam_id ).subscribe(async (res: any) => {
    //             if (res) {
    //                 let data: any = [];
    //                 res.forEach(function(x) {
    //                     x.expanded = false;
    //                     data.push(x);
    //                 });
    //                 this.books = data;
    //                 // setting if data in params
    //                 if (this.params_book_id && this.params_chap_id){
    //                 //Geting the chapters
    //                     let item = this.books.find(x => x.book_id === this.params_book_id);
    //                     if (item){
    //                 let data = item.chapters.split(',');
    //                 let finalData: any = [];
    //                 data.forEach(function(e) {
    //                     let chapter = {
    //                         id: e,
    //                         selected: false
    //                     };
    //                     finalData.push(chapter);
    //                 });
    //                 this.chapters = finalData;
    //                     this.chapters.map(function(x) {
    //                         if (x.id !== self.params_chap_id) {
    //                             x.selected = false;
    //                         } else {
    //                             x.selected = true;
    //                         }
    //                         return x;
    //                     });
    //                 //Expanding Toggle
    //                 this.books.map(function(x) {
    //                     if (x.book_id !== self.params_book_id) {
    //                         x.expanded = false;
    //                     } else {
    //                         x.expanded = true;
    //                     }
    //                     return x;
    //                 });
    //                 }
    //                     }
    //                 if (this.books.length === 0){
    //                     this.router.navigate(['/bible/new-testament']);
    //                 }
    //                 //get & Map Text Book DAM ID
    //                 this.getBooksText( dam_id);
    //             } else if (!res) {
    //                 this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //             }
    //         });
    // }
    getCMPBooks(curr_dam_id) {
        console.log(curr_dam_id);
        let self = this;
        let dam_id = curr_dam_id;
        let lang_code = this.langCode;
        this._bibleService.getCMPbibleBooks(dam_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res) {
                let data = [];
                res.forEach(function (x) {
                    let chapter = '';
                    for (let i = 1; i <= x.number_of_chapters; i++) {
                        chapter += i + ",";
                        chapter.slice(0, -1);
                    }
                    x.expanded = false;
                    x.book_name = x.name;
                    x.book_id = x.id;
                    x.book_order = x.bookOrder;
                    x.chapters = chapter,
                        x.lang_code = lang_code;
                    if (x.testament == 'O') {
                        data.push(x);
                    }
                });
                this.books = data;
                // setting if data in params
                if (this.params_book_id && this.params_chap_id) {
                    //Geting the chapters
                    let item = this.books.find(x => x.book_id === this.params_book_id);
                    if (item) {
                        let data = item.chapters.split(',');
                        let finalData = [];
                        data.forEach(function (e) {
                            if (e != '') {
                                let chapter = {
                                    id: e,
                                    selected: false
                                };
                                finalData.push(chapter);
                            }
                        });
                        this.chapters = finalData;
                        console.log(this.chapters);
                        this.chapters.map(function (x) {
                            if (x.id !== self.params_chap_id) {
                                x.selected = false;
                            }
                            else {
                                x.selected = true;
                            }
                            return x;
                        });
                        //Expanding Toggle
                        this.books.map(function (x) {
                            if (x.book_id !== self.params_book_id) {
                                x.expanded = false;
                            }
                            else {
                                x.expanded = true;
                            }
                            return x;
                        });
                    }
                }
                //get & Map Text Book DAM ID
                // this.getBooksText( dam_id );
                this.getCMPBooksText(dam_id);
            }
            else if (!res) {
                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
            }
        }));
    }
    getCMPBooksText(cur_dam_id) {
        let dam_id = cur_dam_id;
        // this.loader.presentLoading().then(() => {
        this._bibleService.getCMPbibleBooksText(dam_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res) {
                let newBooksData = [];
                this.books.forEach(function (x) {
                    let bookText = res.find(z => z.book_id === x.book_id);
                    if (bookText) {
                        x.text_dam_id = bookText.dam_id;
                    }
                    newBooksData.push(x);
                });
                this.books = newBooksData;
            }
            else if (!res) {
                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
            }
            // this.loader.stopLoading();
        }));
        // });
    }
    // feching text
    // getBooksText( current_dam_id) {
    //     let dam_id = current_dam_id + '2ET';
    //         this._bibleService.getbibleBooksText( dam_id ).subscribe(async (res: any) => {
    //             if (res) {
    //                 let newBooksData: any = [];
    //                 this.books.forEach(function(x) {
    //                     let bookText = res.find(z => z.book_id === x.book_id);
    //                     if (bookText) {
    //                         x.text_dam_id = bookText.dam_id;
    //                     }
    //                     newBooksData.push(x);
    //                 });
    //                 this.books = newBooksData;
    //             } else if (!res) {
    //                 this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //             }
    //         });
    // }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(false, 'old');
        // if(this.audioService.isAudioPlay == "Play"){
        //     this.audioService.togglePlayer(true)
        //     }  
        // this.common.biblePageEnable = false;
        // this.common.oldSong = ''
        // this.event_provider.playingFlags("Pause");
    }
    ionViewWillEnter() {
        // this.event_provider.hidefooter(false, 'old');
        // if(this.audioService.isAudioPlay == "Play"){
        //     this.audioService.togglePlayer(true)
        //     } 
    }
    ionViewDidLeave() {
        // this.event_provider.hidefooter(true, 'new');
    }
};
OldTestamentPage.ctorParameters = () => [
    { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_2__["BibleService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__["AudioplayerService"] }
];
OldTestamentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-old-testament',
        template: __webpack_require__(/*! raw-loader!./old-testament.page.html */ "./node_modules/raw-loader/index.js!./src/app/old-testament/old-testament.page.html"),
        styles: [__webpack_require__(/*! ./old-testament.page.scss */ "./src/app/old-testament/old-testament.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bible_service__WEBPACK_IMPORTED_MODULE_2__["BibleService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__["AudioplayerService"]])
], OldTestamentPage);



/***/ })

}]);
//# sourceMappingURL=old-testament-old-testament-module-es2015.js.map