(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-setting-account-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account-setting/account-setting.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account-setting/account-setting.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>{{'SETTINGS.account_settings' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"backBtn-wrapper hide-mobile\">\n        <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\">\n            <ion-icon name=\"arrow-back\"></ion-icon>{{'SIGNUP.back' | translate}}\n        </ion-button>\n    </div>\n    <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{'SETTINGS.account_settings' | translate}}</h1>\n                <p class=\"ion-no-margin banner__text\"></p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper ion-justify-content-center\">\n        <div class=\"app-container\">\n            <div class=\"mb-10\">\n                <h4 class=\"heading5 ion-no-margin ion-text-center mb-30\">{{'SETTINGS.delete_account_1' | translate}} <br/> {{'SETTINGS.delete_account_2' | translate}}</h4>\n                <ion-button (click)=\"openModal()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                    {{'SETTINGS.delete_account' | translate}}\n                </ion-button>\n            </div>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account-setting/account-setting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/account-setting/account-setting.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageModule", function() { return AccountSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-setting.page */ "./src/app/account-setting/account-setting.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _account_setting_page__WEBPACK_IMPORTED_MODULE_6__["AccountSettingPage"]
    }
];
var AccountSettingPageModule = /** @class */ (function () {
    function AccountSettingPageModule() {
    }
    AccountSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_account_setting_page__WEBPACK_IMPORTED_MODULE_6__["AccountSettingPage"]]
        })
    ], AccountSettingPageModule);
    return AccountSettingPageModule;
}());



/***/ }),

/***/ "./src/app/account-setting/account-setting.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/account-setting/account-setting.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtc2V0dGluZy9hY2NvdW50LXNldHRpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account-setting/account-setting.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/account-setting/account-setting.page.ts ***!
  \*********************************************************/
/*! exports provided: AccountSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPage", function() { return AccountSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-account-modal/delete-account-modal.component */ "./src/app/delete-account-modal/delete-account-modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AccountSettingPage = /** @class */ (function () {
    function AccountSettingPage(modalController, translate, location) {
        this.modalController = modalController;
        this.translate = translate;
        this.location = location;
    }
    AccountSettingPage.prototype.ngOnInit = function () {
    };
    AccountSettingPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteAccountModalComponent"],
                            cssClass: 'CommentModal',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // navigating to back page
    AccountSettingPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    AccountSettingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AccountSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-setting',
            template: __webpack_require__(/*! raw-loader!./account-setting.page.html */ "./node_modules/raw-loader/index.js!./src/app/account-setting/account-setting.page.html"),
            styles: [__webpack_require__(/*! ./account-setting.page.scss */ "./src/app/account-setting/account-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AccountSettingPage);
    return AccountSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-setting-account-setting-module-es5.js.map