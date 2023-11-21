(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-download-detail-study-download-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/study-download-detail/study-download-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/study-download-detail/study-download-detail.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"mobile-header customMobileHeader \" no-border>\r\n  <ion-toolbar class=\"header--toolbar\">\r\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\r\n      Downloaded Studies\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"padding-bottom: 115px;\">\r\n    <div class=\"page-wrapper ion-justify-content-start\">\r\n        <div class=\"app-container\">\r\n  <ion-row class=\"app-container-custom\">\r\n    <div style=\"margin: 20px  auto 0\">\r\n      <ion-col size=\"6\" align-self-center >\r\n        <img *ngIf=\"audioData.art_url\" class=\"detailCard__header--img\" alt=\"Silhouette of mountains\"src=\"{{audioData.art_url}}\"/>\r\n        <img *ngIf=\"!audioData.art_url\" class=\"detailCard__header--img\" alt=\"Silhouette of mountains\"src=\"https://ionicframework.com/docs/img/demos/card-media.png\"/>\r\n      \r\n      </ion-col>\r\n    </div>\r\n    <ion-col size=\"12\">\r\n        <ion-card class=\"detailCard\">\r\n            <ion-card-header class=\"detailCard__header\">\r\n                <div class=\"detailCard__header--headings\">\r\n                    <ion-card-title class=\"title\">{{audioData.name}}</ion-card-title>\r\n                   <ion-row>\r\n                    <ion-col size=\"6\">\r\n                      <!-- <ion-card-subtitle class=\"subTitleName\">{{audioData.organization}}</ion-card-subtitle> -->\r\n                      <ion-card-subtitle class=\"subTitleName\">Thru the Bible</ion-card-subtitle>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" align-self-end >\r\n                      <ion-card-subtitle class=\"subTitleDate\">{{audioData.timeStamp | date: 'mediumDate'}}</ion-card-subtitle>\r\n                    </ion-col>\r\n                   </ion-row>\r\n                </div>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"detailCard__body\">\r\n                <div class=\"icons\">\r\n                    <div class=\"icons__left\">\r\n                        <ion-buttons>\r\n                            <img (click)=\"shareURL(audioData)\" src=\"../../assets/share-icon.svg\">\r\n                        </ion-buttons>\r\n                        <ion-buttons *ngIf=\"!downloadService.downloadView(audioData)\" (click)=\"downloadService.downloadsLocalSave(audioData,'ism-study')\"><img src=\"../../assets/download-icon.svg\"></ion-buttons>\r\n                        <ion-buttons *ngIf=\"downloadService.downloadView(audioData)\" (click)=\"downloadService.downloadsLocalSave(audioData,'ism-study')\"><img  src=\"../../assets/img/downloadGreen.svg\"> </ion-buttons>\r\n                       <ion-buttons (click)=\"downloadCompoent(audioData)\">\r\n                         <img src=\"../../assets/Options-icon.svg\">\r\n                       </ion-buttons>\r\n                      <div style=\"width: 120px;\">\r\n                        <ion-range mode=\"ios\" #range (touch)=\"seek()\"  [(ngModel)]=\"audioService.progress\" class=\"range range--audioPlayer\"   max=\"100\" \r\n                        ></ion-range>\r\n                      </div>\r\n                    </div>\r\n                    <div  [class.disabledColors]=\"downloadService.studyRead(audioData)\" class=\"icons__right\">\r\n                        <ion-buttons *ngIf=\"!audioService.isAudioPlayShows\"  (click)=\"playTodayStudy(false)\" ><ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                        <ion-buttons *ngIf=\"audioService.isAudioPlayShows\"   (click)=\"playTodayStudy(true)\"><ion-icon name=\"pause\"></ion-icon></ion-buttons>\r\n                    </div>\r\n                </div>\r\n                <p class=\"detailCard__body--text\">{{audioData.description}}</p>\r\n                <div class=\"card-btns\">\r\n                    <ion-button *ngIf=\"audioData.audio_format === 'Daily'\" (click)=\"ReadTheBiblePassage(audioData)\" expand=\"block\" class=\"detailCard__body--btn btnSecondary\">\r\n                        <ion-icon name=\"book\"></ion-icon>\r\n                        Read the Bible Passage\r\n                    </ion-button>\r\n                    <ion-button style=\"--background: #b2b2b2;\"  disabled  class=\"detailCard__body--btn btnSecondary\" expand=\"block\">\r\n                        <img src=\"../../assets/img/notes-outline-icon.svg\" class=\"note-icon\">\r\n                        More Resources\r\n                    </ion-button>\r\n                </div>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-col>\r\n</ion-row>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/study-download-detail/study-download-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/study-download-detail/study-download-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: StudyDownloadDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDownloadDetailPageModule", function() { return StudyDownloadDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _study_download_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./study-download-detail.page */ "./src/app/study-download-detail/study-download-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _study_download_detail_page__WEBPACK_IMPORTED_MODULE_6__["StudyDownloadDetailPage"]
    }
];
let StudyDownloadDetailPageModule = class StudyDownloadDetailPageModule {
};
StudyDownloadDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_study_download_detail_page__WEBPACK_IMPORTED_MODULE_6__["StudyDownloadDetailPage"]]
    })
], StudyDownloadDetailPageModule);



/***/ }),

/***/ "./src/app/study-download-detail/study-download-detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/study-download-detail/study-download-detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.detailCard {\n  border-radius: 16px;\n  margin-right: 0;\n  margin-left: 0;\n  box-shadow: none;\n  margin-top: 0;\n  padding: 16px;\n}\n.detailCard__header {\n  gap: 16px;\n  padding: 0;\n}\n.detailCard__header--img {\n  width: 120px;\n  height: 120px;\n  border-radius: 16px;\n}\n.detailCard__header--headings .title {\n  font-size: 20px;\n  font-weight: 500;\n  color: #212121;\n}\n.detailCard__header--headings ion-col {\n  padding-inline: 0;\n}\n.detailCard__header--headings .subTitle {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.2;\n  color: #363636;\n}\n.detailCard__header--headings .subTitleName {\n  font-size: 14px;\n  color: #363636;\n  font-weight: 300;\n}\n.detailCard__header--headings .subTitleDate {\n  color: #212121;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: end;\n}\n.detailCard__body {\n  padding: 0;\n}\n.detailCard__body .icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n  height: 45px;\n}\n.detailCard__body .icons__left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n}\n.detailCard__body .icons__left ion-buttons {\n  cursor: pointer;\n}\n.detailCard__body .icons__left ion-icon {\n  width: 24px;\n  height: 24px;\n  margin-left: 4px;\n  color: #000;\n  margin-right: 6px;\n}\n.detailCard__body .icons__right {\n  margin-left: auto;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: #dd7129;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.detailCard__body .icons__right ion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 4px;\n  color: #ffffff;\n}\n.detailCard__body--text {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  margin-top: 12px;\n}\n.detailCard__body--btn {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.detailCard__body--btn ion-icon {\n  margin-right: 6px;\n}\n.detailCard__body .read--btn {\n  margin-bottom: 8px;\n}\n.btnSecondary {\n  --background: #dd7129;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background-hover: #dd7129;\n}\n.note-icon {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: auto;\n  margin-right: 6px;\n}\n.range--audioPlayer {\n  --bar-height: 4px;\n  margin-top: 0;\n}\n.range--audioPlayer {\n  --bar-height: 3px;\n  margin-top: 0;\n  padding: 0;\n}\n.range {\n  --bar-background: #acacac;\n  cursor: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.disabledColors {\n  --background: #b2b2b2 !important;\n  background: #b2b2b2 !important;\n  background-color: #b2b2b2 !important;\n  --border-color: #b2b2b2 !important;\n  border-color: #b2b2b2 !important;\n  --background-hover: #b2b2b2 !important;\n  --background-activated: #b2b2b2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3N0dWR5LWRvd25sb2FkLWRldGFpbC9zdHVkeS1kb3dubG9hZC1kZXRhaWwucGFnZS5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3N0ZGluIiwic3JjL2FwcC9zdHVkeS1kb3dubG9hZC1kZXRhaWwvc3R1ZHktZG93bmxvYWQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUNqT0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ01GO0FESkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ01KO0FESkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTU47QURISTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNLTjtBREhJO0VBQ0UsaUJBQUE7QUNLTjtBREZJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJTjtBRERJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dOO0FEQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VOO0FERUU7RUFDRSxVQUFBO0FDQUo7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FOO0FERU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsUUFBQTtBQ0FSO0FEQ1E7RUFDRSxlQUFBO0FDQ1Y7QURHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGUjtBRElNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGUjtBRE1JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBRE9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTE47QURPTTtFQUNFLGlCQUFBO0FDTFI7QURTSTtFQUNFLGtCQUFBO0FDUE47QURZQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNURjtBRFdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDUkY7QURVQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNQRjtBRFNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNORjtBRFFBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsMENBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWRvd25sb2FkLWRldGFpbC9zdHVkeS1kb3dubG9hZC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xyXG5cclxuLmRldGFpbENhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmLS1pbWcge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taGVhZGluZ3MgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIH1cclxuICAgICYtLWhlYWRpbmdzIGlvbi1jb2wge1xyXG4gICAgICBwYWRkaW5nLWlubGluZTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1oZWFkaW5ncyAuc3ViVGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGNvbG9yOiAjMzYzNjM2O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZU5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjMzYzNjM2O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZURhdGUge1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gICAgICAmX19sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgJiBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19sZWZ0IGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNzEyOTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICZfX3JpZ2h0IGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLXRleHQge1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1idG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVhZC0tYnRuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0blNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGQ3MTI5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZGQ3MTI5O1xyXG59XHJcblxyXG4ubm90ZS1pY29uIHtcclxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5yYW5nZS0tYXVkaW9QbGF5ZXIge1xyXG4gIC0tYmFyLWhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLnJhbmdlLS1hdWRpb1BsYXllciB7XHJcbiAgLS1iYXItaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5yYW5nZSB7XHJcbiAgLS1iYXItYmFja2dyb3VuZDogI2FjYWNhYztcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmRpc2FibGVkQ29sb3Jze1xyXG4gIC0tYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50OyBcclxuICBiYWNrZ3JvdW5kOiAjYjJiMmIyICFpbXBvcnRhbnQ7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6I2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG59IiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmRldGFpbENhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmRldGFpbENhcmRfX2hlYWRlciB7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMDtcbn1cbi5kZXRhaWxDYXJkX19oZWFkZXItLWltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5kZXRhaWxDYXJkX19oZWFkZXItLWhlYWRpbmdzIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyBpb24tY29sIHtcbiAgcGFkZGluZy1pbmxpbmU6IDA7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyAuc3ViVGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjMzYzNjM2O1xufVxuLmRldGFpbENhcmRfX2hlYWRlci0taGVhZGluZ3MgLnN1YlRpdGxlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzNjM2MzY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyAuc3ViVGl0bGVEYXRlIHtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmRldGFpbENhcmRfX2JvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAuaWNvbnNfX2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fbGVmdCBpb24tYnV0dG9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fbGVmdCBpb24taWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fcmlnaHQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ3MTI5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zX19yaWdodCBpb24taWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRldGFpbENhcmRfX2JvZHktLXRleHQge1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5LS1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGV0YWlsQ2FyZF9fYm9keS0tYnRuIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAucmVhZC0tYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uYnRuU2Vjb25kYXJ5IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZGQ3MTI5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNkZDcxMjk7XG59XG5cbi5ub3RlLWljb24ge1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5yYW5nZS0tYXVkaW9QbGF5ZXIge1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnJhbmdlLS1hdWRpb1BsYXllciB7XG4gIC0tYmFyLWhlaWdodDogM3B4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmFuZ2Uge1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjYWNhY2FjO1xuICBjdXJzb3I6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGlzYWJsZWRDb2xvcnMge1xuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/study-download-detail/study-download-detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/study-download-detail/study-download-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: StudyDownloadDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDownloadDetailPage", function() { return StudyDownloadDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/bible-sharing/bible-sharing.component */ "./src/app/common/bible-sharing/bible-sharing.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_services_bible_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/bible.service */ "./src/services/bible.service.ts");














let StudyDownloadDetailPage = class StudyDownloadDetailPage {
    constructor(location, route, audioService, service, actionSheetController, toast, downloadService, platform, modalController, storage, socialSharing, _bibleService, router) {
        this.location = location;
        this.route = route;
        this.audioService = audioService;
        this.service = service;
        this.actionSheetController = actionSheetController;
        this.toast = toast;
        this.downloadService = downloadService;
        this.platform = platform;
        this.modalController = modalController;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this._bibleService = _bibleService;
        this.router = router;
    }
    ngOnInit() {
        this.audioData = JSON.parse(this.route.snapshot.paramMap.get('audioData'));
        console.log(this.audioData, this.audioData);
        this.storage.get('app_language').then((res) => {
            this.audio_id = res.audio_id;
            this.bible_id = res.bible_id;
            this.langCode = res.code;
            if (this.bible_id) {
                this.getCMPBooks(this.bible_id);
            }
        });
    }
    gotobackPage() {
        this.location.back();
    }
    playTodayStudy(isplay) {
        var audiourl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cmp_audioLink + this.audioData.uuid;
        if (this.audioService.audioUrl == audiourl) {
            this.audioService.togglePlayer(isplay);
        }
        else {
            this.audioService.clear();
            setTimeout(() => {
                this.audioService.clear();
                this.audioData['image'] = this.audioData.art_url;
                this.audioService.fromPage = "study";
                this.service.method = "study";
                this.audioService.audioIndex = -1;
                this.service.image = this.audioData.art_url;
                this.audioService.title = this.audioData.name;
                this.audioService.isAudioPlayShows = !isplay;
                this.audioService.image = this.audioData.art_url;
                this.service.audioData = this.audioData;
                this.audioService.organization = this.audioData.organization;
                this.audioService.is_today_study = true;
                this.audioService.study_image = this.audioData.art_url;
                this.audioService.startAudio(audiourl);
            }, 500);
        }
    }
    seek() {
        if (this.audioService.isPlaying) {
            if (this.platform.is('cordova') && !this.platform.is("android")) {
                this.platform.ready().then(() => {
                    this.audioService.audiomedia.getCurrentPosition().then((position) => {
                        if (position && position >= 0) {
                            // get current playback position
                            let newValue = +this.range.value;
                            let val = this.audioService.audiomedia.getDuration() * (newValue / 100) * 1000;
                            if (val) {
                                this.audioService.audiomedia.seekTo(val);
                            }
                        }
                    });
                });
            }
            else if (this.platform.is("cordova") && this.platform.is("android")) {
                let newValue = +this.range.value;
                window.mediaplayer.current(success => {
                    console.log(success);
                    let duration = (Math.floor(success.duration)) / 1000;
                    let seekvalue = ((duration * (newValue / 100)));
                    console.log("finnal console,", newValue, (parseInt(seekvalue) * 1000).toString());
                    window.mediaplayer.seek({ seekTo: (parseInt(seekvalue) * 1000).toString() }, success => { console.log(success); }, fail => { console.log(fail); });
                }, fail => { console.log(fail); });
            }
            else {
                if (this.audioService.isPlaying) {
                    let newValue = +this.range.value;
                    let duration = this.audioService.player.duration();
                    this.audioService.player.seek(duration * (newValue / 100));
                }
            }
        }
    }
    downloadCompoent(today) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var flag = (today.book_id ? today.book_id : today.cmp_book_id) ? false : true;
            const modal = yield this.modalController.create({
                component: _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_11__["BibleSharingComponent"],
                componentProps: {
                    todayStudy: JSON.stringify(today),
                    studyType: today.studyType,
                    passageHide: flag,
                },
                cssClass: 'BibleModal ForBibleSharing'
            });
            modal.onDidDismiss()
                .then((data) => {
                const user = data['data']; // Here's your selected user!
                if (user.data === 'passenger') {
                    this.ReadTheBiblePassage(today);
                }
            });
            return yield modal.present();
        });
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
StudyDownloadDetailPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_7__["AudioplayerService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"] },
    { type: src_services_bible_service__WEBPACK_IMPORTED_MODULE_13__["BibleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('range', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRange"])
], StudyDownloadDetailPage.prototype, "range", void 0);
StudyDownloadDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-download-detail',
        template: __webpack_require__(/*! raw-loader!./study-download-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/study-download-detail/study-download-detail.page.html"),
        styles: [__webpack_require__(/*! ./study-download-detail.page.scss */ "./src/app/study-download-detail/study-download-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_7__["AudioplayerService"], src_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], src_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"], src_services_download_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"], src_services_bible_service__WEBPACK_IMPORTED_MODULE_13__["BibleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], StudyDownloadDetailPage);



/***/ })

}]);
//# sourceMappingURL=study-download-detail-study-download-detail-module-es2015.js.map