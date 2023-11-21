(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-tab-chat-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-tab/chat-tab.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-tab/chat-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-list lines=\"none\" class=\"location-list\">\n        <ion-item class=\"ionMedia\">\n          <div class=\"ionMedia__media\">\n            <ion-avatar slot=\"start\" >\n              <img src=\"../../assets/img/user_icon.png\">\n            </ion-avatar>\n          </div>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-card class=\"ionCard ionCard--chat ionCard--mobile\">\n              <div class=\"ionCard__imgDiv\">\n                <img src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n              </div>\n              <ion-card-content class=\"ion-no-padding\">\n                <ion-card-title class=\"heading4\">Fix Your Focus</ion-card-title>\n                <p>At vero eos et accusamus et iusto odio dignis\u2029simos ducimus qui blanditiis\n                  praesentium volupta\u2029tum deleniti atque corrupti quos..</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-label>\n        </ion-item>\n        <ion-item class=\"ionMedia ionMedia--right\">\n          <div class=\"ionMedia__media ionMedia__media--right\">\n            <ion-avatar slot=\"start\" >\n              <img src=\"../../assets/img/user_icon.png\">\n            </ion-avatar>\n          </div>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-card class=\"ionCard ionCard--chat ionCard--mobile\">\n              <div class=\"ionCard__imgDiv\">\n                <img src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n              </div>\n              <ion-card-content class=\"ion-no-padding ionMedia__text--right\">\n                <ion-card-title class=\"heading4\">Fix Your Focus</ion-card-title>\n                <p>At vero eos et accusamus et iusto odio dignis\u2029simos ducimus qui blanditiis\n                  praesentium volupta\u2029tum deleniti atque corrupti quos..</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/chat-tab/chat-tab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-tab/chat-tab.module.ts ***!
  \*********************************************/
/*! exports provided: ChatTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatTabPageModule", function() { return ChatTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-tab.page */ "./src/app/chat-tab/chat-tab.page.ts");







var routes = [
    {
        path: '',
        component: _chat_tab_page__WEBPACK_IMPORTED_MODULE_6__["ChatTabPage"]
    }
];
var ChatTabPageModule = /** @class */ (function () {
    function ChatTabPageModule() {
    }
    ChatTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_tab_page__WEBPACK_IMPORTED_MODULE_6__["ChatTabPage"]]
        })
    ], ChatTabPageModule);
    return ChatTabPageModule;
}());



/***/ }),

/***/ "./src/app/chat-tab/chat-tab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chat-tab/chat-tab.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtdGFiL2NoYXQtdGFiLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat-tab/chat-tab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chat-tab/chat-tab.page.ts ***!
  \*******************************************/
/*! exports provided: ChatTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatTabPage", function() { return ChatTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatTabPage = /** @class */ (function () {
    function ChatTabPage() {
    }
    ChatTabPage.prototype.ngOnInit = function () {
    };
    ChatTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-tab',
            template: __webpack_require__(/*! raw-loader!./chat-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-tab/chat-tab.page.html"),
            styles: [__webpack_require__(/*! ./chat-tab.page.scss */ "./src/app/chat-tab/chat-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatTabPage);
    return ChatTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-tab-chat-tab-module-es5.js.map