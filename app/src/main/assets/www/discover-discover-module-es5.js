(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/discover/discover.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/discover/discover.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>discover</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/discover/discover.module.ts":
/*!*********************************************!*\
  !*** ./src/app/discover/discover.module.ts ***!
  \*********************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/discover/discover.page.ts");







var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/discover/discover.page.scss":
/*!*********************************************!*\
  !*** ./src/app/discover/discover.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2NvdmVyL2Rpc2NvdmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/discover/discover.page.ts":
/*!*******************************************!*\
  !*** ./src/app/discover/discover.page.ts ***!
  \*******************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscoverPage = /** @class */ (function () {
    function DiscoverPage() {
    }
    DiscoverPage.prototype.ngOnInit = function () {
    };
    DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/index.js!./src/app/discover/discover.page.html"),
            styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/discover/discover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module-es5.js.map