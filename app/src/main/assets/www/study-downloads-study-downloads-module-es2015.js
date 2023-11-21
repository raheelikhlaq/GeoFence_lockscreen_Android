(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-downloads-study-downloads-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/study-downloads/study-downloads.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/study-downloads/study-downloads.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"mobile-header customMobileHeader \" no-border>\r\n  <ion-toolbar class=\"header--toolbar\">\r\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\r\n      Downloaded Studies\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"page-wrapper ion-justify-content-start\">\r\n        <div class=\"app-container\">\r\n  <ion-list *ngIf=\"downloadedStudy && downloadedStudy.length > 0\" class=\"studyLists\">\r\n    <ion-item  *ngFor=\"let audio of downloadedStudy;index as i;\" class=\"studyLists__item\">\r\n      <a class=\"studyItem\" (click)=\"openDetail(audio);\">\r\n        <h3 class=\"heading3\">{{audio.name}}</h3>\r\n        <div class=\"timer\">\r\n          <p style=\"display: flex;\">{{audio.timeStamp | date: 'mediumDate' }}\r\n            <ng-container *ngIf=\"downloadService.studyRead(audio)\">\r\n              <span class=\"ion-text-center checkmark-circle-center\">\r\n                <ion-icon class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n              </span>\r\n              <span style=\" color: #eb7f00;\">\r\n                Listened on {{downloadService.studyReadDate(audio).date | date: 'MM/dd/yyyy'}}\r\n              </span>\r\n            </ng-container>\r\n          </p>\r\n          \r\n        </div>\r\n      </a>\r\n      <div class=\"studyIcons\">\r\n        <ion-buttons (click)=\"OpenSharingModal(audio)\">\r\n          <img   src=\"../../assets/share-icon.svg\">\r\n        </ion-buttons>\r\n        <ion-buttons>\r\n            <img class=\"studyIcons__downloadBtn\" src=\"../../assets/img/downloadGreen.svg\">\r\n        </ion-buttons>\r\n        <ion-buttons *ngIf=\"!audioService.downloadedStudy[i]\" (click)=\"playTodayStudy(false, audio , i)\" [class.disabledColors]=\"downloadService.studyRead(audio)\" class=\"commonBtn--dark\"><ion-icon name=\"play\" size=\"large\"></ion-icon></ion-buttons>\r\n        <ion-buttons *ngIf=\"audioService.downloadedStudy[i]\" (click)=\"playTodayStudy(true, audio , i)\" [class.disabledColors]=\"downloadService.studyRead(audio)\" class=\"commonBtn--dark\"><ion-icon name=\"pause\" size=\"large\"></ion-icon></ion-buttons>\r\n      </div>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item class=\"studyLists__item\">\r\n      <div class=\"studyItem\">\r\n        <h3 class=\"heading3\">Mark 12</h3>\r\n        <div class=\"timer\">\r\n          <p style=\"display: flex;\">July 13, 2023\r\n            <span class=\"ion-text-center checkmark-circle-center\">\r\n              <ion-icon class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n            </span>\r\n            Listened on xx/xx/xxxx\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"studyIcons\">\r\n        <ion-buttons (click)=\"OpenSharingModal()\">\r\n          <img src=\"../../assets/share-icon.svg\">\r\n        </ion-buttons>\r\n        <ion-buttons routerLink=\"/study-completed\">\r\n            <img class=\"studyIcons__downloadBtn\" src=\"../../assets/img/downloadGreen.svg\">\r\n        </ion-buttons>\r\n        <ion-buttons class=\"commonBtn--dark\">\r\n          <ion-icon name=\"play\" size=\"large\"></ion-icon>\r\n        </ion-buttons>\r\n      </div>\r\n    </ion-item>   -->\r\n\r\n\r\n\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-list *ngIf=\"!downloadedStudy || downloadedStudy.length == 0\" class=\"studyLists\">\r\n <ion-item class=\"studyLists__item\">\r\n      <div class=\"studyItem\">\r\n        <h3 class=\"heading3\">No Data Found</h3>\r\n      </div>\r\n    </ion-item>    \r\n\r\n  </ion-list>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/study-downloads/study-downloads.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/study-downloads/study-downloads.module.ts ***!
  \***********************************************************/
/*! exports provided: StudyDownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDownloadsPageModule", function() { return StudyDownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _study_downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./study-downloads.page */ "./src/app/study-downloads/study-downloads.page.ts");







const routes = [
    {
        path: '',
        component: _study_downloads_page__WEBPACK_IMPORTED_MODULE_6__["StudyDownloadsPage"]
    }
];
let StudyDownloadsPageModule = class StudyDownloadsPageModule {
};
StudyDownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_study_downloads_page__WEBPACK_IMPORTED_MODULE_6__["StudyDownloadsPage"]]
    })
], StudyDownloadsPageModule);



/***/ }),

/***/ "./src/app/study-downloads/study-downloads.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/study-downloads/study-downloads.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".studyLists {\n  margin: 0 -16px;\n  padding: 8px;\n}\n.studyLists .timer {\n  font-size: 12px;\n  display: -webkit-box;\n  display: flex;\n  font-weight: 300;\n  color: #363636;\n  gap: 4px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.studyLists__item {\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n}\n.studyLists__item .commonBtn--dark {\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: 4px;\n  background-color: var(--primary-color, #302F34);\n}\n.studyLists__item .commonBtn--dark.button-disabled {\n  --opacity: 0.3;\n}\n.studyLists__item .commonBtn--dark ion-icon {\n  color: #fff;\n  width: 18px;\n}\n.studyItem {\n  display: block;\n  text-decoration: none;\n  width: 100%;\n  position: relative;\n  padding: 6px 0 6px 16px;\n}\n.studyItem :is(.heading3, p) {\n  margin: 0;\n}\n.studyItem h3 {\n  font-size: 14px;\n  color: #212121;\n}\n.activeCheck {\n  color: #00C142;\n  height: 18px;\n  width: 18px;\n  margin: 0 2px;\n}\n.studyIcons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 18px;\n  gap: 10px;\n}\n.studyIcons ion-buttons img {\n  max-width: 22px;\n  height: 22px;\n}\n.disabledColors {\n  --background: #b2b2b2 !important;\n  background: #b2b2b2 !important;\n  background-color: #b2b2b2 !important;\n  --border-color: #b2b2b2 !important;\n  border-color: #b2b2b2 !important;\n  --background-hover: #b2b2b2 !important;\n  --background-activated: #b2b2b2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3N0dWR5LWRvd25sb2Fkcy9zdHVkeS1kb3dubG9hZHMucGFnZS5zY3NzIiwic3JjL2FwcC9zdHVkeS1kb3dubG9hZHMvc3R1ZHktZG93bmxvYWRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FDR047QURGTTtFQUNFLGNBQUE7QUNJUjtBREZNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNJUjtBREVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsU0FBQTtBQ0VKO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0VGO0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNFRjtBREFJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFTjtBREVBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWRvd25sb2Fkcy9zdHVkeS1kb3dubG9hZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWR5TGlzdHMge1xyXG4gIG1hcmdpbjogMCAtMTZweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgLnRpbWVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMzNjM2MzY7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICZfX2l0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAmIC5jb21tb25CdG4tLWRhcmsge1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBtaW4td2lkdGg6IDMycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xyXG4gICAgICAmLmJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgLS1vcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG59XHJcbi5zdHVkeUl0ZW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNnB4IDAgNnB4IDE2cHg7XHJcbiAgJiA6aXMoLmhlYWRpbmczLCBwKSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbi5zdHVkeUl0ZW0gaDMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzIxMjEyMTtcclxufVxyXG5cclxuXHJcbi5hY3RpdmVDaGVja3tcclxuICAgIGNvbG9yOiAjMDBDMTQyO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBtYXJnaW46MCAycHg7XHJcbiAgfVxyXG4uc3R1ZHlJY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgaW9uLWJ1dHRvbnMge1xyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAyMnB4O1xyXG4gICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kaXNhYmxlZENvbG9yc3tcclxuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDsgXHJcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNiMmIyYjIgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNiMmIyYjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiIsIi5zdHVkeUxpc3RzIHtcbiAgbWFyZ2luOiAwIC0xNnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc3R1ZHlMaXN0cyAudGltZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzYzNjM2O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdHVkeUxpc3RzX19pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbn1cbi5zdHVkeUxpc3RzX19pdGVtIC5jb21tb25CdG4tLWRhcmsge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBtaW4td2lkdGg6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xufVxuLnN0dWR5TGlzdHNfX2l0ZW0gLmNvbW1vbkJ0bi0tZGFyay5idXR0b24tZGlzYWJsZWQge1xuICAtLW9wYWNpdHk6IDAuMztcbn1cbi5zdHVkeUxpc3RzX19pdGVtIC5jb21tb25CdG4tLWRhcmsgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5zdHVkeUl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2cHggMCA2cHggMTZweDtcbn1cbi5zdHVkeUl0ZW0gOmlzKC5oZWFkaW5nMywgcCkge1xuICBtYXJnaW46IDA7XG59XG5cbi5zdHVkeUl0ZW0gaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG4uYWN0aXZlQ2hlY2sge1xuICBjb2xvcjogIzAwQzE0MjtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLnN0dWR5SWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGdhcDogMTBweDtcbn1cbi5zdHVkeUljb25zIGlvbi1idXR0b25zIGltZyB7XG4gIG1heC13aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uZGlzYWJsZWRDb2xvcnMge1xuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/study-downloads/study-downloads.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/study-downloads/study-downloads.page.ts ***!
  \*********************************************************/
/*! exports provided: StudyDownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDownloadsPage", function() { return StudyDownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/bible-sharing/bible-sharing.component */ "./src/app/common/bible-sharing/bible-sharing.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_bible_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");














let StudyDownloadsPage = class StudyDownloadsPage {
    constructor(modalController, location, audioService, service, router, actionSheetController, toast, downloadService, platform, storage, socialSharing, _bibleService) {
        this.modalController = modalController;
        this.location = location;
        this.audioService = audioService;
        this.service = service;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.toast = toast;
        this.downloadService = downloadService;
        this.platform = platform;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this._bibleService = _bibleService;
        this.downloadedStudy = [];
    }
    ngOnInit() {
        this.downloadedStudy = localStorage.getItem("audioDewnloads") ? JSON.parse(localStorage.getItem("audioDewnloads")) : [];
        this.audioService.downloadedStudy = new Array(this.downloadedStudy.length).fill(false);
        if (this.audioService.fromPage == 'study' && this.audioService.audioIndex > -1) {
            this.audioService.downloadedStudy[this.audioService.audioIndex] = true;
        }
    }
    ionViewWillEnter() {
        this.audioService.downloadedStudy = new Array(this.downloadedStudy.length).fill(false);
        if (this.audioService.fromPage == 'study' && this.audioService.audioIndex > -1) {
            this.audioService.downloadedStudy[this.audioService.audioIndex] = true;
        }
        this.storage.get('app_language').then((res) => {
            this.audio_id = res.audio_id;
            this.bible_id = res.bible_id;
            this.langCode = res.code;
            if (this.bible_id) {
                this.getCMPBooks(this.bible_id);
            }
        });
    }
    OpenSharingModal(audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var flag = (audio.book_id ? audio.book_id : audio.cmp_book_id) ? false : true;
            const modal = yield this.modalController.create({
                component: _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_3__["BibleSharingComponent"],
                componentProps: {
                    todayStudy: JSON.stringify(audio),
                    studyType: "study",
                    passageHide: flag,
                },
                cssClass: "BibleModal ForBibleSharing"
            });
            modal.onDidDismiss()
                .then((data) => {
                const user = data['data']; // Here's your selected user!
                if (user.data === 'passenger') {
                    this.ReadTheBiblePassage(audio);
                }
            });
            return yield modal.present();
        });
    }
    gotobackPage() {
        this.location.back();
    }
    playTodayStudy(isplay, audio, index) {
        var audiourl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cmp_audioLink + audio.uuid;
        if (this.audioService.audioUrl == audiourl) {
            this.audioService.togglePlayer(isplay);
        }
        else {
            this.audioService.clear();
            setTimeout(() => {
                this.audioService.clear();
                audio.image = audio.art_url;
                this.audioService.audioIndex = -1;
                this.service.image = audio.art_url;
                this.audioService.fromPage = "study";
                this.audioService.audioIndex = index;
                this.audioService.title = audio.name;
                this.audioService.isAudioPlayShows = !isplay;
                this.audioService.downloadedStudy[index] = true;
                this.audioService.image = audio.art_url;
                this.service.audioData = audio;
                this.audioService.image = audio.art_url;
                this.service.method = 'study';
                this.audioService.organization = audio.organization;
                this.audioService.is_today_study = true;
                this.audioService.image = audio.art_url;
                this.audioService.study_image = audio.art_url;
                this.audioService.startAudio(audiourl);
            }, 500);
        }
    }
    openDetail(audio) {
        this.router.navigate(['study-download-detail', {
                audioData: JSON.stringify(audio),
            }]);
    }
    shareURL(audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.socialSharing.share(`Study Thru The Bible - ${audio.name} \n` + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cmp_audioLink + audio.uuid).then(data => {
                }, error => {
                });
            }
            else {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Share',
                    buttons: [
                        {
                            text: 'Copy Link',
                            role: 'destructive',
                            icon: 'link',
                            handler: () => {
                                navigator.clipboard.writeText(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cmp_audioLink + audio.uuid);
                                this.toast.presentToastWithOptions(' Copied ', '', 'success');
                            }
                        },
                        {
                            text: 'Cancel',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                            }
                        }
                    ]
                });
                yield actionSheet.present();
            }
        });
    }
    ReadTheBiblePassage(item) {
        console.log(item);
        let item2 = this.books.find(x => x.id === (item.book_id ? item.book_id : item.cmp_book_id));
        console.log(item2);
        if (item2) {
            let data = {
                queryParams: {
                    chapter: JSON.stringify(item2.chapters),
                    book: JSON.stringify(item2),
                    dam_id: this.bible_id,
                    audio_id: this.audio_id,
                    page: 'study-download-detail',
                    // sermonid:this.sermonid,
                    // page_id: this.page_id,
                    start_chapter: (item.start_chapter ? item.start_chapter : item.bible_chapter_start),
                    start_verse: (item.start_verse ? item.start_verse : item.bible_verse_start),
                    end_chapter: (item.end_chapter ? item.end_chapter : item.bible_chapter_end),
                    end_verse: (item.end_verse ? item.end_verse : item.bible_verse_end),
                    bible_id: this.bible_id
                }
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    }
    getCMPBooks(bible_id) {
        let self = this;
        let bible_id2 = bible_id;
        let code = this.langCode;
        this._bibleService.getCMPbibleBooks(bible_id2, this.langCode).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res) {
                let data = [];
                res.forEach(function (x) {
                    let chapter = '';
                    for (let i = 1; i <= x.number_of_chapters; i++) {
                        chapter += i + ",";
                        chapter.slice(0, -1);
                    }
                    x.expanded = false;
                    x.book_name = x.nameLong;
                    x.book_id = x.id;
                    x.book_order = x.bookOrder;
                    x.chapters = chapter,
                        x.lang_code = code;
                    // if(x.testament == 'N') {
                    data.push(x);
                    // }
                });
                this.books = data;
            }
            else if (!res) {
                this.toast.presentToastWithOptions('Something Went Wrong', '', 'danger');
            }
        }));
    }
};
StudyDownloadsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"] },
    { type: src_services_bible_service__WEBPACK_IMPORTED_MODULE_12__["BibleService"] }
];
StudyDownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-study-downloads',
        template: __webpack_require__(/*! raw-loader!./study-downloads.page.html */ "./node_modules/raw-loader/index.js!./src/app/study-downloads/study-downloads.page.html"),
        styles: [__webpack_require__(/*! ./study-downloads.page.scss */ "./src/app/study-downloads/study-downloads.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"], src_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], src_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        src_services_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"], src_services_bible_service__WEBPACK_IMPORTED_MODULE_12__["BibleService"]])
], StudyDownloadsPage);



/***/ })

}]);
//# sourceMappingURL=study-downloads-study-downloads-module-es2015.js.map