(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Profile')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n            {{'PROFILE.profile' | translate}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Profile')\" slot=\"start\">{{'PROFILE.profile' | translate}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper\" *ngIf=\"profile_detail\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col size=\"12\" [sizeLg]=\"8\">\n                        <ion-card class=\"ionCard profile--card\">\n                            <div class=\"ion-margin-bottom mb-40\">\n                                <h2 class=\"ion-text-center heading2\" *ngIf=\"theme && theme.ch_id === '1000'\">{{'PROFILE.my_profile_message' | translate}}</h2>\n                                <h2 class=\"ion-text-center heading2\" *ngIf=\"theme && theme.ch_id !== '1000'\">{{'PROFILE.your_profile_message' | translate}}</h2>\n                                <ion-avatar (click)=\"presentActionSheet()\" *ngIf=\"theme && theme.ch_id !=='1000' && !is_cordova\" style=\"margin: 0 auto; width: 80px; height: 80px; position: relative; overflow: visible;\">\n                                    <img [src]=\"profile_picture ? profile_picture : '../../assets/img/user_icon.png'\">\n                                    <!--                                    ../../assets/img/user_icon.png  https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y okokokokokoko-->\n                                    <input style=\"display: none\"\n                                           type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*, video/* \"\n                                           #fileIn>\n                                    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                                    <ion-button  *ngIf=\"!profile_picture\" class=\"commonBtn commonBtn--dark commonBtn--small\" style=\"position: absolute; bottom: 0;right: 0;height: 25px;min-width: 25px;\">\n                                        <ion-icon style=\"font-size: 16px;\" name=\"create\"></ion-icon>\n                                    </ion-button>\n                                    <ion-button (click)=\"removeProfileImagePwa($event)\" *ngIf=\"profile_picture\" class=\"commonBtn commonBtn--dark commonBtn--small\" style=\"position: absolute; bottom: 0;right: 0;height: 25px;min-width: 25px;\">\n                                        <ion-icon name=\"trash\"></ion-icon>\n                                    </ion-button>\n                                </ion-avatar>\n\n                                <!--                                FOR MOBILE-->\n                                <ion-avatar (click)=\"presentActionSheet()\" *ngIf=\"theme && theme.ch_id !=='1000' && is_cordova\" style=\"margin: 0 auto; width: 80px; height: 80px;\">\n                                    <img [src]=\"profile_picture ? profile_picture : '../../assets/img/user_icon.png'\">\n                                    <input style=\"display: none\"\n                                           type=\"file\"\n                                    >\n                                    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                                </ion-avatar>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label position=\"stacked\">{{'GIVING.firstname_placeholder' | translate}}</ion-label>\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\" style=\"margin-top: 25px;\">\n                                        <ion-icon name=\"person\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"first_name\" class=\"inputField__area\" inputmode=\"text\"\n                                               > </ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label position=\"stacked\">{{'GIVING.firstname_placeholder' | translate}}</ion-label>\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\" style=\"margin-top: 25px;\">\n                                        <ion-icon name=\"person\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"last_name\" class=\"inputField__area\"  inputmode=\"text\">\n                                     </ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"call\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input  [readonly]=\"phone\" [(ngModel)]=\"phone\" class=\"inputField__area\" inputmode=\"phone\"\n                                               ></ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"mail\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-input [(ngModel)]=\"email\" class=\"inputField__area\" inputmode=\"email\"\n                                               ></ion-input>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\" *ngIf=\"theme && theme.ch_id !== '1000'\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"people\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-label>{{'PROFILE.gender' | translate}}</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"gender\" class=\"inputField__area inputField__area--select\" style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"male\">{{'PROFILE.male' | translate}}</ion-select-option>\n                                        <ion-select-option value=\"Female\">{{'PROFILE.female' | translate}}</ion-select-option>\n<!--                                        <ion-select-option value=\"other\">{{'PROFILE.other' | translate}}</ion-select-option>-->\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                        <ion-icon name=\"calendar\"></ion-icon>\n                                    </ion-buttons>\n                                    <ion-datetime [(ngModel)]=\"dob\" class=\"inputField__area inputField__area--datePicker\" displayFormat=\"MM/DD/YY\" cancelText=\"{{'datetime.cancel' | translate}}\" doneText=\"{{'datetime.done' | translate}}\"\n                                                  placeholder=\"{{'PROFILE.date_of_birth' | translate}}\"></ion-datetime>\n                                </ion-item>\n                            </div>\n                            <div *ngIf=\"theme && theme.ch_id !== '1000'\" class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label>{{'PROFILE.life_stage' | translate}}</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"life_stage\" class=\"inputField__area inputField__area--select\"  style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"adult\">{{'PROFILE.adult' | translate}}</ion-select-option>\n                                        <ion-select-option value=\"child\">{{'PROFILE.child' | translate}}</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div *ngIf=\"theme && theme.ch_id !== '1000'\" class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-label>{{'PROFILE.are_you_volunteer' | translate}}?</ion-label>\n                                    <ion-select interface=\"action-sheet\" [(ngModel)]=\"is_volunteer\" class=\"inputField__area inputField__area--select\"  style=\"padding-left: 0;\">\n                                        <ion-select-option value=\"Y\">{{'PROFILE.yes' | translate}}</ion-select-option>\n                                        <ion-select-option value=\"N\">{{'PROFILE.no' | translate}}</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-button (click)=\"update_profile()\" routerLink=\"/profile\" routerDirection=\"root\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                                    {{'PROFILE.update' | translate}}\n                                </ion-button>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"theme && theme.ch_id !== '1000'\"></app-footer-mobile>-->\n\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]],
            providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.my-custom-class {\n  --background: #e5e5e5;\n}\n.profile--card {\n  padding: 40px 60px;\n}\n@media screen and (max-width: 992px) {\n  .profile--card {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3RkaW4iLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUNqT0E7RUFDRSxxQkFBQTtBQ01GO0FESkE7RUFDRSxrQkFBQTtBQ09GO0FDbVFFO0VGM1FGO0lBR0ksYUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuLnByb2ZpbGUtLWNhcmQge1xuICBwYWRkaW5nOiA0MHB4IDYwcHg7XG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59IiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLnByb2ZpbGUtLWNhcmQge1xuICBwYWRkaW5nOiA0MHB4IDYwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJvZmlsZS0tY2FyZCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _common_images_library_images_library_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/images-library/images-library.component */ "./src/app/common/images-library/images-library.component.ts");




















// import {clearInterval} from "timers";
var ProfilePage = /** @class */ (function () {
    function ProfilePage(storage, loader, router, toast, apiService, authService, location, common, event_provider, analytics, platform, device, translate, menu, dom, actionSheetController, camera, 
    // private base64: Base64,
    modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.loader = loader;
        this.router = router;
        this.toast = toast;
        this.apiService = apiService;
        this.authService = authService;
        this.location = location;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.menu = menu;
        this.dom = dom;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.guest = true;
        this.page_in_home_tabs = false;
        this.is_cordova = false;
        this.image_uploaded_from_app = false;
        this.image_uploaded_from_pwa = false;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.type = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if ((val != null) && (val.user != null && val.user != "guest")) {
                    // ============= assigning DATA if user is logged IN ==================== //
                    this.auth_obj = val;
                    this.auth = val.auth;
                    this.profile_detail = val.user;
                    this.first_name = this.profile_detail.first_name;
                    this.last_name = this.profile_detail.last_name;
                    this.phone = this.profile_detail.phone;
                    this.email = this.profile_detail.email;
                    this.gender = this.profile_detail.gender;
                    this.dob = this.profile_detail.birthday;
                    this.life_stage = this.profile_detail.life_stage;
                    this.is_volunteer = this.profile_detail.is_volunteer;
                    this.profile_picture_file = this.profile_detail.photo_profile ? this.profile_detail.photo_profile : '';
                    this.profile_picture = this.profile_detail.photo_profile ? this.dom.bypassSecurityTrustUrl(this.profile_detail.photo_profile) : '';
                    // ============= assigning DATA if user is logged IN ==================== //
                }
                else {
                    this.guest = true;
                    // navigating to login if not Logged IN
                    this.router.navigate(['/login']);
                }
                return [2 /*return*/];
            });
        }); });
        if (this.platform.is('cordova')) {
            this.is_cordova = true;
        }
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        this.event_provider.isHomeEnable.subscribe(function (value) {
            _this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
        this.getDesign();
    };
    // onImgError
    // onImgError(event){
    //     event.target.src = this.dom.bypassSecurityTrustUrl(this.IMAGE_BASE_URL + this.profile_detail.photo_profile);
    //    //Do other stuff with the event.target
    //    }
    ProfilePage.prototype.getPicture = function (opts) {
        var _this = this;
        this.camera.getPicture(opts).then(function (imageData) {
            imageData = 'data:image/jpeg;base64,' + imageData;
            _this.image_uploaded_from_app = true;
            _this.profile_picture = imageData ? _this.dom.bypassSecurityTrustResourceUrl(imageData) : "";
            _this.type = 'camera';
        }, function (err) {
            console.log("ERROR", err);
            // Handle error
        });
    };
    ProfilePage.prototype.getCameraOptions = function (sourceType) {
        if (sourceType === 'camera') {
            this.cameraOptions.sourceType = this.camera.PictureSourceType.CAMERA;
        }
        else if (sourceType === 'library') {
            this.cameraOptions.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        return this.cameraOptions;
    };
    ProfilePage.prototype.removeProfileImage = function () {
        this.profile_picture = '';
        this.profile_picture_file = '';
    };
    ProfilePage.prototype.removeProfileImagePwa = function (event) {
        event.stopPropagation();
        this.profile_picture = '';
        this.profile_picture_file = '';
    };
    ProfilePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, remove_button, actionSheet, role;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [{
                                text: 'Camera',
                                icon: 'camera',
                                handler: function () {
                                    var options = _this.getCameraOptions('camera');
                                    _this.getPicture(options);
                                }
                            }, {
                                text: 'Upload',
                                icon: 'folder',
                                handler: function () {
                                    var options = _this.getCameraOptions('library');
                                    _this.getPicture(options);
                                }
                            },
                            {
                                text: 'Library',
                                icon: 'images',
                                handler: function () {
                                    _this.libraryPopover();
                                    // let options = this.getCameraOptions('library');
                                    // this.getPicture(options);
                                }
                            }, {
                                text: 'Cancel',
                                icon: 'close',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ];
                        remove_button = {
                            text: 'Remove',
                            role: 'destructive',
                            icon: 'trash',
                            handler: function () {
                                _this.removeProfileImage();
                            }
                        };
                        if (this.profile_picture) {
                            buttons.unshift(remove_button);
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                cssClass: 'my-custom-class',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, actionSheet.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.libraryPopover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _common_images_library_images_library_component__WEBPACK_IMPORTED_MODULE_18__["ImagesLibraryComponent"],
                            cssClass: 'BibleModal',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            console.log(res.data);
                            if (res.data.selected_image) {
                                var image_data = res.data.selected_image;
                                _this.profile_picture = image_data.url;
                                _this.profile_picture_file = image_data.filename;
                                _this.type = 'photo_library';
                                console.log("ttttt", _this.type, image_data, _this.profile_picture, _this.profile_picture_file);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.onFileChanged = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.profile_picture = reader.result ? reader.result : '';
            console.log(_this.profile_picture);
            _this.image_uploaded_from_pwa = true;
            _this.type = 'pwa';
        };
    };
    ProfilePage.prototype.update_profile = function () {
        var _this = this;
        var prof_pic;
        if (this.type != "photo_library") {
            if (this.profile_picture && this.is_cordova && this.image_uploaded_from_app) { // Image uploaded from app
                prof_pic = this.profile_picture['changingThisBreaksApplicationSecurity'];
            }
            else if (this.profile_picture && this.image_uploaded_from_pwa) { // Image uploaded from PWA
                prof_pic = this.profile_picture;
            }
            else if (!this.image_uploaded_from_pwa && !this.image_uploaded_from_app) { // Image not uploaded at all
                prof_pic = this.profile_picture_file;
            }
        }
        // preparing data to update profile
        var body = JSON.stringify({
            auth: 'Bearer ' + this.auth.access_token,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            gender: this.gender,
            life_stage: this.life_stage,
            birthday: this.dob,
            is_volunteer: this.is_volunteer,
            account_donor_id: this.profile_detail.id,
            photo_profile: this.type == "photo_library" ? this.profile_picture : prof_pic,
            church_id: this.theme.ch_id,
            type: this.type
        });
        this.loader.presentLoading().then(function () {
            _this.apiService.update_profile(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res.status) {
                        this.auth_obj.user = res.account_donor;
                        // updating user data in local storage
                        localStorage.setItem('auth', this.auth_obj.auth.access_token);
                        localStorage.setItem('refresh_token', this.auth_obj.auth.refresh_token);
                        this.storage.set('user', this.auth_obj).then(function () {
                            _this.ngOnInit();
                            _this.analytics.startAnalytics();
                            _this.event_provider.updateSideMenu();
                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.profile_updated : 'Profile Updated Successfully'), (_this.alertMessage ? _this.alertMessage.Success : 'Success'), 'success');
                        });
                        this.image_uploaded_from_pwa = false;
                        this.image_uploaded_from_app = false;
                    }
                    else if (!res.status) {
                        this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    }
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    // navigating to back page
    ProfilePage.prototype.gotobackPage = function () {
        if (this.theme.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    };
    ProfilePage.prototype.getDesign = function () {
        var _this = this;
        // getting theme from local storage
        this.storage.get('theme').then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.theme = res;
                this.getAppPages();
                return [2 /*return*/];
            });
        }); });
    };
    ProfilePage.prototype.getAppPages = function () {
        var _this = this;
        this.storage.get('app_pages').then(function (res) {
            if (res) {
                // getting pagename for analytics
                var feed_page = res.find(function (x) { return x.name === 'Profile'; });
                if (feed_page) {
                    _this.page_name = feed_page.name;
                    _this.custom_name = feed_page.title;
                }
                else {
                    _this.page_name = 'Profile';
                    _this.custom_name = 'Profile';
                }
            }
        });
    };
    ProfilePage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.profile_detail ? this.profile_detail.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.theme.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.page_name,
            custom_name: this.custom_name,
            ip_address: "",
            device: device,
            device_id: dev_id,
            client_type: userId,
            event_type: ""
        });
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe(function (res) {
        });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Profile'; });
                    if (app_pages && app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    ProfilePage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        this.event_provider.hidefooter(true, 'other');
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileIn', { read: false, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfilePage.prototype, "fileIn", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map