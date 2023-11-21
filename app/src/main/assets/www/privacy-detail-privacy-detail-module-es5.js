(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-detail-privacy-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy-detail/privacy-detail.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy-detail/privacy-detail.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header [dir]=\"text_direction\" class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n      <ion-buttons\n                   (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n          <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'BIBLE.bible' | translate}}\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div class=\"page-wrapper\">\n      <div class=\"app-container\" *ngIf=\"content\">\n<!--            <p *ngIf=\"show_text_on_top\" style=\"font-size: xx-small; color: #9c9c94\" class=\"customHTML\"><b>Copyright Statements</b></p>-->\n<!--            <div *ngIf=\"show_text_on_top\" [innerHTML]=\"copyright_top_text\" class=\"customHTMLtext\"></div>-->\n<!--            <div *ngIf=\"show_text_on_top\" [innerHTML]=\"audio_copyright_top_text\" class=\"customHTMLtext\"></div>-->\n<!--            <div style=\"font-size: xx-small;line-height: normal\" class=\"customHTML\" [innerHTML]=\"html_code\"></div>-->\n          <div class=\"customHTMLtext\" [innerHTML]=\"content\"></div>\n      </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy-detail/privacy-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/privacy-detail/privacy-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyDetailPageModule", function() { return PrivacyDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-detail.page */ "./src/app/privacy-detail/privacy-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _privacy_detail_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyDetailPage"]
    }
];
var PrivacyDetailPageModule = /** @class */ (function () {
    function PrivacyDetailPageModule() {
    }
    PrivacyDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_privacy_detail_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyDetailPage"]]
        })
    ], PrivacyDetailPageModule);
    return PrivacyDetailPageModule;
}());



/***/ }),

/***/ "./src/app/privacy-detail/privacy-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/privacy-detail/privacy-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customHTMLtext ::ng-deep p {\n  font-size: xx-small;\n  color: #9c9c94;\n  padding: 0px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3ByaXZhY3ktZGV0YWlsL3ByaXZhY3ktZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJpdmFjeS1kZXRhaWwvcHJpdmFjeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktZGV0YWlsL3ByaXZhY3ktZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21IVE1MdGV4dCA6Om5nLWRlZXAgcHtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgIGNvbG9yOiAjOWM5Yzk0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gIFxuICB9XG4gICIsIi5jdXN0b21IVE1MdGV4dCA6Om5nLWRlZXAgcCB7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIGNvbG9yOiAjOWM5Yzk0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/privacy-detail/privacy-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacy-detail/privacy-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyDetailPage", function() { return PrivacyDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");





var PrivacyDetailPage = /** @class */ (function () {
    function PrivacyDetailPage(activateRoute, audioService, location) {
        this.activateRoute = activateRoute;
        this.audioService = audioService;
        this.location = location;
    }
    PrivacyDetailPage.prototype.ngOnInit = function () {
        console.log(this.activateRoute.snapshot.paramMap.get('data'));
        this.content = this.activateRoute.snapshot.paramMap.get('data');
        // this.audioStop()
    };
    // audioStop(){
    //   const playing = setInterval( () => {
    //     if(this.audioService.isAudioPlay == "Play"){
    //      this.audioService.togglePlayer(true);
    //       (<any>window).clearTimeout(playing)
    //     }
    //   }, 500)
    // }
    PrivacyDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    PrivacyDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__["AudioplayerService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    PrivacyDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-privacy-detail',
            template: __webpack_require__(/*! raw-loader!./privacy-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/privacy-detail/privacy-detail.page.html"),
            styles: [__webpack_require__(/*! ./privacy-detail.page.scss */ "./src/app/privacy-detail/privacy-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__["AudioplayerService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PrivacyDetailPage);
    return PrivacyDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacy-detail-privacy-detail-module-es5.js.map