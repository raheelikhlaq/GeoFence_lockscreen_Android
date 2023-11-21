(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thankyou/thankyou.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-row class=\"ion-justify-content-center\">\n                <ion-col [size]=\"12\" [sizeMd]=\"8\" [sizeLg]=\"6\">\n                    <ion-card class=\"ionCard loginCard\">\n\n                        <div class=\"ion-text-center ion-margin-bottom\">\n                            <h3 class=\"heading3\">{{'THANKYOU.thank_you' | translate}}!</h3>\n                          <div class=\"ion-margin ion-text-center\">\n                            <ion-icon name=\"checkmark-circle-outline\" size=\"large\" style=\"zoom:3.0;\"></ion-icon>\n                          </div>\n                          <p>{{'THANKYOU.congrats_message' | translate}}</p>\n                        </div>\n                        <p></p>\n                        <div class=\"ion-margin-bottom\">\n                            <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" (click)=\"gotobackPage()\" expand=\"block\">\n                                {{'THANKYOU.donate_again' | translate}}\n                            </ion-button>\n                        </div>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/thankyou/thankyou.module.ts":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.module.ts ***!
  \*********************************************/
/*! exports provided: ThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]
    }
];
var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]]
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.ts":
/*!*******************************************!*\
  !*** ./src/app/thankyou/thankyou.page.ts ***!
  \*******************************************/
/*! exports provided: ThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPage", function() { return ThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ThankyouPage.prototype.ngOnInit = function () {
    };
    // navigating to back page
    ThankyouPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    ThankyouPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    ThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! raw-loader!./thankyou.page.html */ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html"),
            styles: [__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ThankyouPage);
    return ThankyouPage;
}());



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module-es5.js.map