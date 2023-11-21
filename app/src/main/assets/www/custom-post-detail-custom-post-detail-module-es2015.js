(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-post-detail-custom-post-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/custom-post-detail/custom-post-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custom-post-detail/custom-post-detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{note_detail?.title ? note_detail?.title :'CUSTOM_POST.custom_post_detail' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content *ngIf=\"note_detail\">\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <div class=\"ion-margin-bottom\">\n        <h2 class=\"heading2\" *ngIf=\"note_detail\">{{note_detail.title}}</h2>\n      </div>\n      <!--  DESCRIPTION-->\n      <div class=\"font-weight-normal event-detail-content\"   *ngIf=\"inner_html_content['changingThisBreaksApplicationSecurity'] && inner_html_content['changingThisBreaksApplicationSecurity'] !== undefined\"  [innerHTML]=\"inner_html_content\"></div>\n\n<!--      COMMENTS-->\n      <ion-card class=\"ionCard\">\n        <ion-card-header>\n          <ion-card-title class=\"heading4\">{{'CUSTOM_POST.Comments' | translate}}</ion-card-title>\n        </ion-card-header>\n        <hr class=\"ionCard__divider\">\n        <div>\n          <div id=\"comment_section\">\n          <ion-list lines=\"none\" class=\"ion-margin-top ion-no-padding chat-card-body\">\n            <ion-item class=\"ionMedia\" *ngFor=\"let comment of comments\">\n              <div class=\"ionMedia__media\">\n                <ion-avatar slot=\"start\">\n                  <img src=\"../../assets/img/user_icon.png\">\n                </ion-avatar>\n              </div>\n              <ion-label class=\"ion-text-wrap\">\n                <h3 class=\"ionMedia__heading\" *ngIf=\"!is_wordpress_enable\"> {{comment.first_last_name ?\n                        comment.first_last_name : 'Anonymous'}}</h3>\n                <h3 class=\"ionMedia__heading\" *ngIf=\"is_wordpress_enable\"> {{comment.name ?\n                        comment.name : 'Anonymous'}}</h3>\n                <p>{{comment.comment}} </p>\n                <p style=\" font-size: x-small\"\n                   class=\"ionMedia__text\">{{comment.comment_time }} </p>\n              </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"comments.length === 0\"\n                      class=\"inputField  inputField&#45;&#45;gray\" lines=\"none\">\n              <ion-label class=\"ion-text-wrap\">\n                <p>\n                  <small>{{'SERMONS.nocommentsyet' | translate}}\n                    .....<br/>{{'SERMONS.bethefirstone' | translate}}.\n                  </small>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          </div>\n          <div class=\"chat-card-footer\">\n            <ion-item class=\"inputField\" lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <img src=\"../../assets/img/user_icon.png\">\n              </ion-avatar>\n              <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"comment\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\" inputmode=\"text\"\n                         placeholder=\"{{'SERMONS.comment' | translate}}\"></ion-input>\n              <!-- <ion-button class=\"commonBtn--transparent text-dark\" (click)=\"presentPopover($event)\">\n                <ion-icon name=\"md-happy\"></ion-icon>\n              </ion-button> -->\n              <ion-button (click)=\"create_comment()\"\n                          class=\"commonBtn--transparent text-dark\">\n                <ion-icon name=\"send\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </div>\n        </div>\n      </ion-card>\n\n\n      <!--  FOLLOW US-->\n      <ion-card class=\"ionCard ionCard--mobile ion-margin-bottom\">\n        <ion-card-header>\n          <ion-card-title class=\"heading4\">{{'CUSTOM_POST.share_now' | translate}}</ion-card-title>\n        </ion-card-header>\n        <hr class=\"ionCard__divider\">\n        <ion-card-content style=\"padding-bottom: 0;\">\n          <ul class=\"list-inline\">\n            <li class=\"list-inline-item\">\n              <ion-icon (click)=\"copyLink()\" name=\"copy\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n            </li>\n            <li class=\"list-inline-item\">\n              <a (click)=\"openFacebook(note_detail.link)\">\n                <ion-icon name=\"logo-facebook\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a (click)=\"openTwitter(note_detail.link)\">\n                <ion-icon name=\"logo-twitter\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n              </a>\n            </li>\n          </ul>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n\n"

/***/ }),

/***/ "./src/app/custom-post-detail/custom-post-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/custom-post-detail/custom-post-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustomPostDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPostDetailPageModule", function() { return CustomPostDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _custom_post_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-post-detail.page */ "./src/app/custom-post-detail/custom-post-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _custom_post_detail_page__WEBPACK_IMPORTED_MODULE_6__["CustomPostDetailPage"]
    }
];
let CustomPostDetailPageModule = class CustomPostDetailPageModule {
};
CustomPostDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_custom_post_detail_page__WEBPACK_IMPORTED_MODULE_6__["CustomPostDetailPage"]]
    })
], CustomPostDetailPageModule);



/***/ }),

/***/ "./src/app/custom-post-detail/custom-post-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/custom-post-detail/custom-post-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.chat-card-body {\n  max-height: 300px;\n  overflow-y: auto;\n  border-bottom: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 992px) {\n  .chat-card-body {\n    max-height: 300px;\n    overflow-y: auto;\n    padding: 0;\n    border: none;\n  }\n}\n.event-detail-content {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2N1c3RvbS1wb3N0LWRldGFpbC9jdXN0b20tcG9zdC1kZXRhaWwucGFnZS5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3N0ZGluIiwic3JjL2FwcC9jdXN0b20tcG9zdC1kZXRhaWwvY3VzdG9tLXBvc3QtZGV0YWlsLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvc2Fzcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLFdBQUE7QUFrRkEsVUFBQTtBQWlGQSxVQUFBO0FBOEJBLGdCQUFBO0FBYUEsWUFBQTtBQVdBLG1CQUFBO0FBTUEsU0FBQTtBQ2pPQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNNRjtBQ21RRTtFRjlRRjtJQU9JLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ1FGO0FBQ0Y7QURMQTtFQUNFLGNBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1wb3N0LWRldGFpbC9jdXN0b20tcG9zdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xuXG4uY2hhdC1jYXJkLWJvZHkge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgQGluY2x1ZGUgbWVkaWEtbWR7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG4uZXZlbnQtZGV0YWlsLWNvbnRlbnR7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmNoYXQtY2FyZC1ib2R5IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2hhdC1jYXJkLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLmV2ZW50LWRldGFpbC1jb250ZW50IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIG1peGlucy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vZm9udCBzaXplXG5cbkBtaXhpbiBmb250LXNpemUoJGZvbnQtc2l6ZSkge1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG59XG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvKiAxICovXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDIgKi9cbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4vLyBXZWJLaXQtc3R5bGUgZm9jdXNcbkBtaXhpbiB0YWItZm9jdXMoKSB7XG4gIC8vIERlZmF1bHRcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcbiAgLy8gV2ViS2l0XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cbi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcbkBtaXhpbiBjZW50ZXItYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4vLyBTaXppbmcgc2hvcnRjdXRzXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuQG1peGluIHNxdWFyZSgkc2l6ZSkge1xuICBAaW5jbHVkZSBzaXplKCRzaXplLCAkc2l6ZSk7XG59XG5cbi8vIFBsYWNlaG9sZGVyIHRleHRcbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3I6ICRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcikge1xuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCA0LTE4XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBGaXJlZm94IDE5K1xuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTArXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBTYWZhcmkgYW5kIENocm9tZVxufVxuXG4vLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5AbWl4aW4gdGV4dC1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWl4aW4gaGlkZS10ZXh0KCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbkBtaXhpbiB0ZXh0LWhpZGUoKSB7XG4gIGZvbnQ6ICN7MC8wfSBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBTaW5nbGUgc2lkZSBib3JkZXItcmFkaXVzXG5AbWl4aW4gYm9yZGVyLXRvcC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItcmlnaHQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1ib3R0b20tcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93KSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuXG4vLyBHUkFESUVOVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsICRzdGFydC1wZXJjZW50IHRvcCwgJGVuZC1wZXJjZW50IHRvcCwgZnJvbSgkc3RhcnQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7IC8vIFNhZmFyaSA0KywgQ2hyb21lIDIrXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIGNvbG9yLXN0b3AoJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50KSwgY29sb3Itc3RvcCgkZW5kLWNvbG9yICRlbmQtcGVyY2VudCkpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0ICRzdGFydC1wZXJjZW50LCBsZWZ0ICRlbmQtcGVyY2VudCwgZnJvbSgkc3RhcnQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7IC8vIFNhZmFyaSA0KywgQ2hyb21lIDIrXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6ICAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTdGFuZGFyZCwgSUUxMFxufVxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxlZnQsIGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgkc3RhcnQtY29sb3IpLCBjb2xvci1zdG9wKCRjb2xvci1zdG9wLCAkbWlkLWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAjNTU1LCAkb3V0ZXItY29sb3I6ICMzMzMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDAsIGNlbnRlciBjZW50ZXIsIDQ2MCwgZnJvbSgkaW5uZXItY29sb3IpLCB0bygkb3V0ZXItY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWl4aW4gZ3JhZGllbnQtc3RyaXBlZCgkY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAxMDAlLCAxMDAlIDAsIGNvbG9yLXN0b3AoLjI1LCAkY29sb3IpLCBjb2xvci1zdG9wKC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsICRjb2xvciksIGNvbG9yLXN0b3AoLjc1LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgdHJhbnNwYXJlbnQpLCB0byh0cmFuc3BhcmVudCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cblxuLy8gUmVzZXQgZmlsdGVycyBmb3IgSUVcbi8vXG4vLyBXaGVuIHlvdSBuZWVkIHRvIHJlbW92ZSBhIGdyYWRpZW50IGJhY2tncm91bmQsIGRvIG5vdCBmb3JnZXQgdG8gdXNlIHRoaXMgdG8gcmVzZXRcbi8vIHRoZSBJRSBmaWx0ZXIgZm9yIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xufVxuXG4vLyBBbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBhbGVydC12YXJpYW50KCRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkdGV4dC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkYm9yZGVyLCA1JSk7XG4gIH1cbiAgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiBkYXJrZW4oJHRleHQtY29sb3IsIDEwJSk7XG4gIH1cbn1cblxuXG4vLyBCdXR0b24gdmFyaWFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVhc2lseSBwdW1wIG91dCBkZWZhdWx0IHN0eWxlcywgYXMgd2VsbCBhcyA6aG92ZXIsIDpmb2N1cywgOmFjdGl2ZSxcbi8vIGFuZCBkaXNhYmxlZCBvcHRpb25zIGZvciBhbGwgYnV0dG9uc1xuQG1peGluIGJ1dHRvbi12YXJpYW50KCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXItY29sb3IsICRiYWNrZ3JvdW5kLWhvdmVyKSB7XG4gIC0tY29sb3I6ICN7JGNvbG9yfTtcbiAgLS1iYWNrZ3JvdW5kOiAjeyRiYWNrZ3JvdW5kfTtcbiAgLS1ib3JkZXItY29sb3I6ICN7JGJvcmRlci1jb2xvcn07XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojeyRiYWNrZ3JvdW5kLWhvdmVyfTtcblxufVxuXG4vLyBCdXR0b24gc2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBidXR0b24tc2l6ZSgkYnRuLXBhZGRpbmctc3RhcnQsICRidG4tcGFkZGluZy1lbmQsICRidG4tcGFkZGluZy10b3AsICRidG4tcGFkZGluZy1ib3R0b20sICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJ0bi1oZWlnaHQsICRidG4tbWluLXdpZHRoKSB7XG4gIC0tcGFkZGluZy1zdGFydDojeyRidG4tcGFkZGluZy1zdGFydH07XG4gIC0tcGFkZGluZy1lbmQ6ICN7JGJ0bi1wYWRkaW5nLWVuZH07XG4gIC0tcGFkZGluZy10b3A6ICN7JGJ0bi1wYWRkaW5nLXRvcH07XG4gIC0tcGFkZGluZy1ib3R0b206ICN7JGJ0bi1wYWRkaW5nLWJvdHRvbX07XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgaGVpZ2h0OiAkYnRuLWhlaWdodDtcbiAgbWluLXdpZHRoOiAkYnRuLW1pbi13aWR0aDtcbn1cblxuLy8gUGFnaW5hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGJvcmRlci1yYWRpdXMpIHtcbiAgPiBsaSB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTGFiZWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbGFiZWwtdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAmW2hyZWZdIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTGlzdHNcblxuLy8gVW5zdHlsZWQga2VlcHMgbGlzdCBpdGVtcyBibG9jayBsZXZlbCwganVzdCByZW1vdmVzIGRlZmF1bHQgYnJvd3NlciBwYWRkaW5nIGFuZCBsaXN0LXN0eWxlXG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuXG5cbi8vbWVkaWEgYnJlYWtwb2ludHNcblxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChsYXJnZSkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtbWQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KG1lZGl1bSkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtc20ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeC1zbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHhzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludCh4eC1zbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/custom-post-detail/custom-post-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/custom-post-detail/custom-post-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: CustomPostDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPostDetailPage", function() { return CustomPostDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_20__);










// import {Events} from "@ionic/angular";












let CustomPostDetailPage = class CustomPostDetailPage {
    constructor(idService, route, loader, storage, socialSharing, sermonsService, router, eventsService, apiService, toast, 
    // public events: Events,
    iab, location, dom, translate, platform, popoverController, event_provider, appService) {
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.sermonsService = sermonsService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.toast = toast;
        this.iab = iab;
        this.location = location;
        this.dom = dom;
        this.translate = translate;
        this.platform = platform;
        this.popoverController = popoverController;
        this.event_provider = event_provider;
        this.appService = appService;
        this.comments = [];
        this.comment = "";
        this.isLoggedIn = false;
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes',
            enableViewportScale: 'yes'
        };
        this.deviceType = '';
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ionViewDidEnter() {
        this.getUser();
        this.event_provider.hidefooter(true, 'other');
    }
    ngOnInit() {
        //============= assigning data from URL Params ========================
        this.title = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : '';
        this.pubDate = this.route.snapshot.paramMap.get('pubDate') ? this.route.snapshot.paramMap.get('pubDate') : '';
        this.post_url = this.route.snapshot.paramMap.get('url') ? this.route.snapshot.paramMap.get('url') : '';
        this.is_external_url = this.route.snapshot.paramMap.get('is_external') ? this.route.snapshot.paramMap.get('is_external') : '';
        this.page_id = this.route.snapshot.paramMap.get('page_id') ? this.route.snapshot.paramMap.get('page_id') : '';
        this.ch_id = this.route.snapshot.paramMap.get('ch') ? this.route.snapshot.paramMap.get('ch') : '';
        this.post_id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
        this.is_wordpress_enable = this.route.snapshot.paramMap.get('lc') ? this.route.snapshot.paramMap.get('lc') : 'false';
        //============= assigning data from URL Params ========================
        if (this.is_wordpress_enable === 'true') {
            this.is_wordpress_enable = 'true';
            this.getDBPost();
        }
        else if (this.is_wordpress_enable === 'false') {
            this.is_wordpress_enable = 'false';
            if (this.post_url) {
                if (this.is_external_url === 'false') {
                    this.getNotes(this.post_url);
                }
                else if (this.is_external_url === 'true') {
                    this.getNotes(this.post_url);
                }
            }
        }
        // firing event when user logs out
        this.event_provider.userLogout.subscribe(value => {
            this.getUser();
        });
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then(res => {
            if (res != null && res != 'guest') {
                this.isLoggedIn = true;
                this.donor_id = res.user.id;
                this.auth = res.auth;
            }
            else {
                this.isLoggedIn = false;
                this.donor_id = '';
                this.auth = '';
            }
        });
    }
    getDBPost() {
        let self = this;
        let refresh_comments = false;
        let body = {
            'church_id': this.ch_id,
            'page': this.page_id,
            'post_id': this.post_id
        };
        this.loader.presentLoading().then(() => {
            this.sermonsService.getCMSSermonPost(body).subscribe((res) => {
                self.loader.stopLoading();
                let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                let data = res.sermons;
                self.note_detail = res.sermons;
                self.note_detail.link = self.note_detail.post_link;
                self.note_detail.comments = JSON.stringify(res.comments);
                // this.setComments();
                this.title = self.note_detail.title;
                this.pubDate = self.note_detail.date ? self.note_detail.date : self.note_detail.created_at;
                if (self.note_detail) {
                    if (refresh_comments === false) {
                        if (self.note_detail['content']) {
                            self.inner_html_content = self.note_detail['content'];
                        }
                        else {
                            self.inner_html_content = self.note_detail['description'];
                        }
                        if (self.inner_html_content && self.inner_html_content.includes("<input")) {
                            self.inner_html_content = self.inner_html_content.replace(/<input/gi, "<br><textarea");
                            self.inner_html_content = self.inner_html_content.replace(/width: 90px;"/gi, "width: 100%; height: 40px; min-height: 40px;\" onkeypress=\"this.style.height = ((this.value.length + 1) * 1.7) + 'px';\"");
                            self.inner_html_content = self.inner_html_content.replace(/\/>/gi, "></textarea>");
                        }
                        if (self.inner_html_content && self.inner_html_content.includes("<img width=")) {
                            self.inner_html_content = self.inner_html_content.replace(/(width)="\d*"\s/, '');
                            self.inner_html_content = self.inner_html_content.replace(/(height)="\d*"\s/, '');
                            if (self.inner_html_content.includes("srcset=")) {
                                let link = self.inner_html_content.match(/srcset="(.*?)"/);
                                self.inner_html_content = self.inner_html_content.replace(link[0], '');
                            }
                            if (self.inner_html_content.includes("150x150")) {
                                if (self.inner_html_content.includes("-150x150")) {
                                    self.inner_html_content = self.inner_html_content.replace("-150x150", '');
                                }
                                else {
                                    self.inner_html_content = self.inner_html_content.replace("150x150", '');
                                }
                            }
                            else if (self.inner_html_content.includes("300x300")) {
                                if (self.inner_html_content.includes("-300x300")) {
                                    self.inner_html_content = self.inner_html_content.replace("-300x300", '');
                                }
                                else {
                                    self.inner_html_content = self.inner_html_content.replace("300x300", '');
                                }
                            }
                            if (self.inner_html_content !== "" && self.inner_html_content !== null && self.inner_html_content.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(self.note_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                // console.log('insid e the cropping feature');
                                let abc = self.inner_html_content.split("/");
                                //  let img_name = abc[abc.length-1];
                                let folder_name = abc[abc.length - 2];
                                if (this.platform.is("mobile")) {
                                    this.deviceType = 'radiobase_mobile';
                                }
                                else if (this.platform.is("tablet")) {
                                    this.deviceType = 'radiobase_tablet';
                                }
                                else {
                                    this.deviceType = folder_name;
                                }
                                let new_link = self.inner_html_content.replace(folder_name, this.deviceType);
                                self.inner_html_content = new_link;
                                // console.log('background is: ',card.background,'new link is: ', new_link);
                            }
                        }
                        if (self.inner_html_content.search('<a') != -1) {
                            //console.log('inside the content');
                            do {
                                let link = this.checkLink(self.inner_html_content);
                                self.inner_html_content = self.inner_html_content.replace(link[0], '');
                                self.inner_html_content.replace('href=' + link[1], '');
                                var new_bypassLink = link[1];
                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                // console.log(new_bypassLink);
                                self.inner_html_content = self.inner_html_content.replace(`<a`, `<span style="color: blue; cursor: pointer; text-decoration: underline;" onclick="openInNewBrowser('${new_bypassLink}', this)" fill="clear" id="link_tag" target="_blank"`);
                                self.inner_html_content = self.inner_html_content.replace('</a>', '</span>');
                                self.inner_html_content = self.inner_html_content.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                            } while (self.inner_html_content.search('<a') != -1);
                        }
                        self.inner_html_content = self.dom.bypassSecurityTrustHtml(self.inner_html_content);
                        if (self.note_detail.comments != '[]') {
                            this.comments = JSON.parse(self.note_detail.comments);
                            this.setComments();
                        }
                    }
                    else if (refresh_comments === true) {
                        if (self.note_detail.comments != '[]') {
                            this.comments = JSON.parse(self.note_detail.comments);
                            this.setComments();
                        }
                    }
                }
                let link = self.note_detail.link ? self.note_detail.link : '';
                link = link.split('//')[1];
                self.fbUrl = 'https://facebook.com/sharer/sharer.php?u=' + link;
                self.twitterUrl = 'https://twitter.com/intent/tweet?text=' + link;
            }, (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
        // console.log(this.note_detail)
    }
    // getting sermon notes
    getNotes(url, refresh_comments = false) {
        let self = this;
        this.loader.presentLoading().then(() => {
            this.sermonsService.getSermonNotes(url, this.page_id).subscribe((res) => {
                self.loader.stopLoading();
                let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                let data = res.result.channel.item;
                let filtered = data.filter(x => md5(x.title) === self.title);
                filtered = filtered.filter(x => md5(x.pubDate) === self.pubDate);
                self.note_detail = filtered[0];
                if (self.note_detail) {
                    if (refresh_comments === false) {
                        if (self.note_detail['content']) {
                            self.inner_html_content = self.note_detail['content'];
                        }
                        else {
                            self.inner_html_content = self.note_detail['description'];
                        }
                        if (self.inner_html_content && self.inner_html_content.includes("<input")) {
                            self.inner_html_content = self.inner_html_content.replace(/<input/gi, "<br><textarea");
                            self.inner_html_content = self.inner_html_content.replace(/width: 90px;"/gi, "width: 100%; height: 40px; min-height: 40px;\" onkeypress=\"this.style.height = ((this.value.length + 1) * 1.7) + 'px';\"");
                            self.inner_html_content = self.inner_html_content.replace(/\/>/gi, "></textarea>");
                        }
                        if (self.inner_html_content && self.inner_html_content.includes("<img width=")) {
                            self.inner_html_content = self.inner_html_content.replace(/(width)="\d*"\s/, '');
                            self.inner_html_content = self.inner_html_content.replace(/(height)="\d*"\s/, '');
                            if (self.inner_html_content.includes("srcset=")) {
                                let link = self.inner_html_content.match(/srcset="(.*?)"/);
                                self.inner_html_content = self.inner_html_content.replace(link[0], '');
                            }
                            if (self.inner_html_content.includes("150x150")) {
                                if (self.inner_html_content.includes("-150x150")) {
                                    self.inner_html_content = self.inner_html_content.replace("-150x150", '');
                                }
                                else {
                                    self.inner_html_content = self.inner_html_content.replace("150x150", '');
                                }
                            }
                            else if (self.inner_html_content.includes("300x300")) {
                                if (self.inner_html_content.includes("-300x300")) {
                                    self.inner_html_content = self.inner_html_content.replace("-300x300", '');
                                }
                                else {
                                    self.inner_html_content = self.inner_html_content.replace("300x300", '');
                                }
                            }
                            if (self.inner_html_content !== "" && self.inner_html_content !== null && self.inner_html_content.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(self.note_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                // console.log('insid e the cropping feature');
                                let abc = self.inner_html_content.split("/");
                                //  let img_name = abc[abc.length-1];
                                let folder_name = abc[abc.length - 2];
                                if (this.platform.is("mobile")) {
                                    this.deviceType = 'radiobase_mobile';
                                }
                                else if (this.platform.is("tablet")) {
                                    this.deviceType = 'radiobase_tablet';
                                }
                                else {
                                    this.deviceType = folder_name;
                                }
                                let new_link = self.inner_html_content.replace(folder_name, this.deviceType);
                                self.inner_html_content = new_link;
                                // console.log('background is: ',card.background,'new link is: ', new_link);
                            }
                        }
                        if (self.inner_html_content.search('<a') != -1) {
                            do {
                                let link = this.checkLink(self.inner_html_content);
                                self.inner_html_content = self.inner_html_content.replace(link[0], '');
                                self.inner_html_content.replace('href=' + link[1], '');
                                var new_bypassLink = link[1];
                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                //console.log('new bypasas link is: ',new_bypassLink);
                                self.inner_html_content = self.inner_html_content.replace(`<a`, `<span style="color: blue; text-decoration: underline;" onclick="openInNewBrowser('${new_bypassLink}', this)" fill="clear" id="link_tag" target="_blank"`);
                                self.inner_html_content = self.inner_html_content.replace('</a>', '</span>');
                                self.inner_html_content = self.inner_html_content.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                            } while (self.inner_html_content.search('<a') != -1);
                        }
                        self.inner_html_content = self.dom.bypassSecurityTrustHtml(self.inner_html_content);
                        if (self.note_detail.comments != '[]') {
                            this.comments = JSON.parse(self.note_detail.comments);
                            this.setComments();
                        }
                    }
                    else if (refresh_comments === true) {
                        if (self.note_detail.comments != '[]') {
                            this.comments = JSON.parse(self.note_detail.comments);
                            this.setComments();
                        }
                    }
                }
                if (self.note_detail) {
                    let link = self.note_detail.link;
                    link = link.split('//')[1];
                    self.fbUrl = link;
                    self.twitterUrl = link;
                    self.loader.stopLoading();
                }
            }, (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    setComments() {
        this.comments.map((item) => {
            try {
                item.comment = JSON.parse(item.comment);
            }
            catch (_a) {
                item.comment = item.comment;
            }
            let mytime = moment__WEBPACK_IMPORTED_MODULE_16__(item.comment_time);
            let church_data = JSON.parse(localStorage.getItem('church_data'));
            // if (church_data.church.timezone) {
            // mytime = mytime.tz(moment.tz.guess());
            // }
            let localTimeZone = moment__WEBPACK_IMPORTED_MODULE_16__["tz"].guess(true);
            mytime = moment__WEBPACK_IMPORTED_MODULE_16__(item.comment_time).tz(localTimeZone);
            mytime = this.appService.getDateTimeFormat(mytime);
            let time_diff = moment__WEBPACK_IMPORTED_MODULE_16__().utcOffset(); // in minutes
            if (time_diff != 0) {
                item.comment_time = this.appService.getDateTimeFormat(mytime);
            }
            else {
                item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
            }
        });
    }
    refresh_comments() {
        if (this.is_wordpress_enable === 'false') {
            this.getNotes(this.post_url, true);
        }
        else {
            this.getDBPost();
        }
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_13__["EmojiComponent"],
                cssClass: 'emji-popover',
                componentProps: {
                    show_emoji: true
                },
                event: ev,
                translucent: true
            });
            popover.onDidDismiss().then(res => {
                if (res.data && res.data.event) {
                    if (this.comment === undefined) {
                        this.comment = '';
                    }
                    this.comment += res.data.event.char;
                }
            });
            return yield popover.present();
        });
    }
    create_comment() {
        if (!this.comment) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.comment_field_empty : 'Comment field is empty'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        }
        else {
            if (this.isLoggedIn) {
                const body = JSON.stringify({
                    auth: 'Bearer ' + this.auth.access_token,
                    custom_post_id: this.note_detail.id,
                    account_donor_id: this.donor_id,
                    comment: this.comment,
                    church_id: this.note_detail.church_id,
                    comment_time: moment__WEBPACK_IMPORTED_MODULE_16__().format('YYYY-MM-DD HH:mm:ss')
                });
                if (this.is_wordpress_enable === 'true') {
                    this.sermonsService.create_custom_post_comment_cms(body).subscribe(res => {
                        // refreshing sermons data after comment added
                        this.refresh_comments();
                        this.comment = '';
                    });
                }
                if (this.is_wordpress_enable === 'false') {
                    this.sermonsService.create_custom_post_comment(body).subscribe(res => {
                        // refreshing sermons data after comment added
                        this.refresh_comments();
                        this.comment = '';
                    });
                }
            }
            else {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_comment : 'Login to Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.router.navigate(['/login']);
            }
        }
    }
    checkLink(code) {
        let link = code.match(/href="(.*?)"/);
        code = code.replace(link[0], '');
        code.replace('href=' + link[1], '');
        if (link[1].includes('css')) {
            return this.checkLink(code);
        }
        return link;
    }
    copyLink() {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.note_detail.link;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.link_copied_to_clipboard : 'Link Copied to Clipboard'), (this.alertMessage ? this.alertMessage.LinkCopied : 'Link Copied'), 'success');
    }
    gotobackPage() {
        this.location.back();
    }
    openInBrowser(url) {
        if (this.platform.is('iphone') || this.platform.is('android')) {
            if (url.includes('.pdf')) {
                window.open(encodeURI(url), '_self', 'location=yes,EnableViewPortScale=yes');
            }
            else {
                this.iab.create(url, '_blank', this.options);
            }
        }
        else {
            this.iab.create(url, '_self', this.options);
        }
    }
    openTwitter(url) {
        this.socialSharing.shareViaTwitter(url).then(data => {
        }, error => {
            this.socialSharing.share(url);
        });
    }
    openFacebook(url) {
        if (this.platform.is('android')) {
            this.socialSharing.shareVia('com.facebook.katana', url).then(data => {
            }, error => {
                this.socialSharing.share(url);
            });
        }
        else if (this.platform.is('ios')) {
            this.socialSharing.shareViaFacebook(url).then(data => {
            }, error => {
                this.socialSharing.share(url);
            });
        }
    }
};
CustomPostDetailPage.ctorParameters = () => [
    { type: _services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_15__["EventProviderService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"] }
];
CustomPostDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-post-detail',
        template: __webpack_require__(/*! raw-loader!./custom-post-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/custom-post-detail/custom-post-detail.page.html"),
        styles: [__webpack_require__(/*! ./custom-post-detail.page.scss */ "./src/app/custom-post-detail/custom-post-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__["InAppBrowser"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_15__["EventProviderService"],
        _app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"]])
], CustomPostDetailPage);



/***/ })

}]);
//# sourceMappingURL=custom-post-detail-custom-post-detail-module-es2015.js.map