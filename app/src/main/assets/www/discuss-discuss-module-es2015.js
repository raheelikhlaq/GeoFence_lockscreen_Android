(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discuss-discuss-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/discuss/discuss.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/discuss/discuss.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>discuss</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/discuss/discuss.module.ts":
/*!*******************************************!*\
  !*** ./src/app/discuss/discuss.module.ts ***!
  \*******************************************/
/*! exports provided: DiscussPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussPageModule", function() { return DiscussPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discuss_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discuss.page */ "./src/app/discuss/discuss.page.ts");







const routes = [
    {
        path: '',
        component: _discuss_page__WEBPACK_IMPORTED_MODULE_6__["DiscussPage"]
    }
];
let DiscussPageModule = class DiscussPageModule {
};
DiscussPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_discuss_page__WEBPACK_IMPORTED_MODULE_6__["DiscussPage"]]
    })
], DiscussPageModule);



/***/ }),

/***/ "./src/app/discuss/discuss.page.scss":
/*!*******************************************!*\
  !*** ./src/app/discuss/discuss.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2N1c3MvZGlzY3Vzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/discuss/discuss.page.ts":
/*!*****************************************!*\
  !*** ./src/app/discuss/discuss.page.ts ***!
  \*****************************************/
/*! exports provided: DiscussPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussPage", function() { return DiscussPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscussPage = class DiscussPage {
    constructor() { }
    ngOnInit() {
    }
};
DiscussPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discuss',
        template: __webpack_require__(/*! raw-loader!./discuss.page.html */ "./node_modules/raw-loader/index.js!./src/app/discuss/discuss.page.html"),
        styles: [__webpack_require__(/*! ./discuss.page.scss */ "./src/app/discuss/discuss.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DiscussPage);



/***/ })

}]);
//# sourceMappingURL=discuss-discuss-module-es2015.js.map