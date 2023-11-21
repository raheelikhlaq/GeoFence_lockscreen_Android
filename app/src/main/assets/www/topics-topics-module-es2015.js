(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topics-topics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/topics/topics.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topics/topics.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"page-wrapper with-mobileHeader\">\n    <div class=\"app-container\">\n      <ion-list lines=\"none\" class=\"chat-list\">\n        <ion-item class=\"ionMedia ionMedia--medium\">\n          <p slot=\"end\" class=\"ionMedia__topRight ionMedia__text text-dark\">13 Oct 19</p>\n          <ion-thumbnail slot=\"start\" class=\"ionMedia__media\">\n            <img src=\"../../assets/img/user_icon.png\">\n          </ion-thumbnail>\n          <ion-label class=\"ion-text-wrap\">\n            <h2 class=\"ionMedia__heading\">Church eleven32</h2>\n            <p class=\"ionMedia__text\">It is a long established fact that a reader will\u2029be distracted by the readable..</p>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ionMedia ionMedia--medium\">\n          <p slot=\"end\" class=\"ionMedia__topRight ionMedia__text text-dark\">13 Oct 19</p>\n          <ion-thumbnail slot=\"start\" class=\"ionMedia__media\">\n            <img src=\"../../assets/img/user_icon.png\">\n          </ion-thumbnail>\n          <ion-label class=\"ion-text-wrap\">\n            <h2 class=\"ionMedia__heading\">Church eleven32</h2>\n            <p class=\"ionMedia__text\">It is a long established fact that a reader will\u2029be distracted by the readable..</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <!--<app-footer></app-footer>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/topics/topics.module.ts":
/*!*****************************************!*\
  !*** ./src/app/topics/topics.module.ts ***!
  \*****************************************/
/*! exports provided: TopicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsPageModule", function() { return TopicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _topics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topics.page */ "./src/app/topics/topics.page.ts");







const routes = [
    {
        path: '',
        component: _topics_page__WEBPACK_IMPORTED_MODULE_6__["TopicsPage"]
    }
];
let TopicsPageModule = class TopicsPageModule {
};
TopicsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_topics_page__WEBPACK_IMPORTED_MODULE_6__["TopicsPage"]]
    })
], TopicsPageModule);



/***/ }),

/***/ "./src/app/topics/topics.page.scss":
/*!*****************************************!*\
  !*** ./src/app/topics/topics.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy90b3BpY3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/topics/topics.page.ts":
/*!***************************************!*\
  !*** ./src/app/topics/topics.page.ts ***!
  \***************************************/
/*! exports provided: TopicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsPage", function() { return TopicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopicsPage = class TopicsPage {
    constructor() { }
    ngOnInit() {
    }
};
TopicsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topics',
        template: __webpack_require__(/*! raw-loader!./topics.page.html */ "./node_modules/raw-loader/index.js!./src/app/topics/topics.page.html"),
        styles: [__webpack_require__(/*! ./topics.page.scss */ "./src/app/topics/topics.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopicsPage);



/***/ })

}]);
//# sourceMappingURL=topics-topics-module-es2015.js.map