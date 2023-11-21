(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-completed-study-completed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/study-completed/study-completed.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/study-completed/study-completed.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>study-completed</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n    <div class=\"page-wrapper ion-justify-content-start\">\r\n        <div class=\"app-container\">\r\n  <div class=\"completedStudy\">\r\n    <ion-label>You finished</ion-label>\r\n    <h1>{{bookData.complete_bookname}}</h1>\r\n    <img class=\"completeImage\" alt=\"Study Completed\" src=\"../../assets/img/studyComplete.svg\">\r\n\r\n    <div class=\"card-btns\">\r\n      <ion-button expand=\"block\" routerLink=\"/journey\" class=\"detailCard__body--btn btnSecondary\">\r\n        Next Book\r\n      </ion-button>\r\n      <ion-button (click)=\"goback()\" class=\"detailCard__body--btn btnSecondary\" style=\"opacity: .4;margin-top: 12px;\" expand=\"block\">\r\n        Close\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/study-completed/study-completed.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/study-completed/study-completed.module.ts ***!
  \***********************************************************/
/*! exports provided: StudyCompletedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyCompletedPageModule", function() { return StudyCompletedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _study_completed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./study-completed.page */ "./src/app/study-completed/study-completed.page.ts");







var routes = [
    {
        path: '',
        component: _study_completed_page__WEBPACK_IMPORTED_MODULE_6__["StudyCompletedPage"]
    }
];
var StudyCompletedPageModule = /** @class */ (function () {
    function StudyCompletedPageModule() {
    }
    StudyCompletedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_study_completed_page__WEBPACK_IMPORTED_MODULE_6__["StudyCompletedPage"]]
        })
    ], StudyCompletedPageModule);
    return StudyCompletedPageModule;
}());



/***/ }),

/***/ "./src/app/study-completed/study-completed.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/study-completed/study-completed.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnSecondary {\n  --background: #dd7129;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background-hover: #dd7129;\n}\n\n.card-btns {\n  width: 100%;\n  margin-top: 8px;\n}\n\n.note-icon {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: auto;\n  margin-right: 6px;\n}\n\n.completedStudy {\n  padding: 40px 20px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.completedStudy ion-label {\n  color: #000;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.completedStudy h1 {\n  color: #116FA2;\n  font-size: 36px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 40px;\n}\n\n.completedStudy .completeImage {\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3N0dWR5LWNvbXBsZXRlZC9zdHVkeS1jb21wbGV0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9zdHVkeS1jb21wbGV0ZWQvc3R1ZHktY29tcGxldGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREVJO0VBQ0ksbUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWNvbXBsZXRlZC9zdHVkeS1jb21wbGV0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0blNlY29uZGFyeSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkZDcxMjk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZGQ3MTI5O1xyXG59XHJcblxyXG4uY2FyZC1idG5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubm90ZS1pY29uIHtcclxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uY29tcGxldGVkU3R1ZHkge1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJiBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgICYgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjMTE2RkEyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuICAgICYgLmNvbXBsZXRlSW1hZ2V7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxufSIsIi5idG5TZWNvbmRhcnkge1xuICAtLWJhY2tncm91bmQ6ICNkZDcxMjk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2RkNzEyOTtcbn1cblxuLmNhcmQtYnRucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5ub3RlLWljb24ge1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5jb21wbGV0ZWRTdHVkeSB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb21wbGV0ZWRTdHVkeSBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbXBsZXRlZFN0dWR5IGgxIHtcbiAgY29sb3I6ICMxMTZGQTI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5jb21wbGV0ZWRTdHVkeSAuY29tcGxldGVJbWFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/study-completed/study-completed.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/study-completed/study-completed.page.ts ***!
  \*********************************************************/
/*! exports provided: StudyCompletedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyCompletedPage", function() { return StudyCompletedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StudyCompletedPage = /** @class */ (function () {
    function StudyCompletedPage(route, location) {
        this.route = route;
        this.location = location;
    }
    StudyCompletedPage.prototype.ngOnInit = function () {
        this.bookData = JSON.parse(this.route.snapshot.paramMap.get('bookData'));
        this.audioData = JSON.parse(this.route.snapshot.paramMap.get('audioData'));
        console.log(this.audioData);
    };
    StudyCompletedPage.prototype.goback = function () {
        this.location.back();
    };
    StudyCompletedPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    StudyCompletedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-study-completed',
            template: __webpack_require__(/*! raw-loader!./study-completed.page.html */ "./node_modules/raw-loader/index.js!./src/app/study-completed/study-completed.page.html"),
            styles: [__webpack_require__(/*! ./study-completed.page.scss */ "./src/app/study-completed/study-completed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], StudyCompletedPage);
    return StudyCompletedPage;
}());



/***/ })

}]);
//# sourceMappingURL=study-completed-study-completed-module-es5.js.map