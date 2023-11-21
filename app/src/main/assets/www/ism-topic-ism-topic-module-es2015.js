(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-topic-ism-topic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-topic/ism-topic.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-topic/ism-topic.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"ion-padding\">\n    <ion-list lines=\"none\" class=\"location-list\">\n      <ion-item class=\"link-item\" detail>\n        <ion-label class=\"ion-text-wrap\">\n          <h3 class=\"ionMedia__heading\">Bible name</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item class=\"link-item\" detail>\n        <ion-label class=\"ion-text-wrap\">\n          <h3 class=\"ionMedia__heading\">Bible name</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ism-topic/ism-topic.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ism-topic/ism-topic.module.ts ***!
  \***********************************************/
/*! exports provided: IsmTopicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTopicPageModule", function() { return IsmTopicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_topic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-topic.page */ "./src/app/ism-topic/ism-topic.page.ts");







const routes = [
    {
        path: '',
        component: _ism_topic_page__WEBPACK_IMPORTED_MODULE_6__["IsmTopicPage"]
    }
];
let IsmTopicPageModule = class IsmTopicPageModule {
};
IsmTopicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ism_topic_page__WEBPACK_IMPORTED_MODULE_6__["IsmTopicPage"]]
    })
], IsmTopicPageModule);



/***/ }),

/***/ "./src/app/ism-topic/ism-topic.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ism-topic/ism-topic.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzbS10b3BpYy9pc20tdG9waWMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ism-topic/ism-topic.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ism-topic/ism-topic.page.ts ***!
  \*********************************************/
/*! exports provided: IsmTopicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTopicPage", function() { return IsmTopicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IsmTopicPage = class IsmTopicPage {
    constructor() { }
    ngOnInit() {
    }
};
IsmTopicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ism-topic',
        template: __webpack_require__(/*! raw-loader!./ism-topic.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-topic/ism-topic.page.html"),
        styles: [__webpack_require__(/*! ./ism-topic.page.scss */ "./src/app/ism-topic/ism-topic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IsmTopicPage);



/***/ })

}]);
//# sourceMappingURL=ism-topic-ism-topic-module-es2015.js.map