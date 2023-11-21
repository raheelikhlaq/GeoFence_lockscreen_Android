(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["today-study-card-today-study-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/today-study-card/today-study-card.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/today-study-card/today-study-card.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\r\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\r\n  <ion-toolbar class=\"header--toolbar\">\r\n      <ion-buttons (click)=\"goback()\" class=\"cursor-pointer\" slot=\"start\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;Today Study Card\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!--end mobile header-->\r\n\r\n<ion-content>\r\n  <div style=\"padding: 12px; margin-bottom: 100px;\">\r\n  <ion-row class=\"app-container-custom\">\r\n    <ion-col size=\"12\">\r\n        <ion-card class=\"detailCard\" *ngFor=\"let item of sevenDaysStudy; index as i ;\" >\r\n            <ion-card-header class=\"detailCard__header\">\r\n                <img *ngIf=\"item.art_url\" class=\"detailCard__header--img\" alt=\"Silhouette of mountains\"src= {{item.art_url}} />\r\n                <img *ngIf=\"!item.art_url\"  class=\"detailCard__header--img\" alt=\"Silhouette of mountains\"src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                <div class=\"detailCard__header--headings\">\r\n                    <ion-card-title class=\"title\">{{item.name}}</ion-card-title>\r\n                    <!-- <ion-card-subtitle class=\"subTitle\">{{item.organization}}</ion-card-subtitle> -->\r\n                    <ion-card-subtitle class=\"subTitle\">Thru the Bible</ion-card-subtitle>\r\n                    <ion-card-subtitle class=\"subTitle\">{{item.scheduled_date | date : 'mediumDate'}}</ion-card-subtitle>\r\n                </div>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"detailCard__body\">\r\n                <div class=\"icons\">\r\n                    <div class=\"icons__left\">\r\n                        <!-- (click)=\"openModal(item) \" -->\r\n                        <ion-buttons (click)=\"shareURL(item)\">\r\n                            <img  src=\"../../assets/share-icon.svg\">\r\n                        </ion-buttons>\r\n                        <ion-buttons *ngIf=\"!downloadService.downloadView(item)\" (click)=\"downloadService.downloadsLocalSave(item,'study')\"><img src=\"../../assets/download-icon.svg\"></ion-buttons>\r\n                        <ion-buttons *ngIf=\"downloadService.downloadView(item)\" (click)=\"downloadService.downloadsLocalSave(item,'study')\"><img src=\"../../assets/img/downloadGreen.svg\"></ion-buttons>\r\n                        \r\n                        <!-- <ion-buttons  class=\"activeBtn\" *ngIf=\"!downloadService.isDownloaded[item.audioUrl] && !downloadService.isDownloading[item.audioUrl]\" [class.activeBtn]=\"downloadService.isDownloadActive[item.audioUrl] \"\r\n                        (click)=\"downloadAudio(item)\">\r\n                        <img src=\"../../assets/download-icon.svg\">\r\n                      </ion-buttons> -->\r\n                      <!-- if file start downloading -->\r\n                      <!-- <ion-button *ngIf=\"downloadService.isDownloading[item.audioUrl]\" [disabled]=\"downloadService.isDownloading[item.audioUrl]\"\r\n                      class=\"commonBtn activeBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\r\n                      <img src=\"../../assets/download-icon.svg\">\r\n                    </ion-button> -->\r\n\r\n                    <ion-buttons (click)=\"downloadCompoent(item)\">\r\n                        <img src=\"../../assets/Options-icon.svg\">\r\n                    </ion-buttons>\r\n\r\n                    <ng-container *ngIf=\"!audioService.downloadedStudy[i]\" >\r\n                        <ion-buttons *ngIf=\"downloadService.studyRead(item)\">\r\n                            <div class=\"checkmarkAlign\">\r\n                                <span class=\"ion-text-center checkmark-circle-center\">\r\n                                    <ion-icon class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                  </span>\r\n                                  <span style=\"position: relative;right: 5px;bottom: 2px;  color: #eb7f00;\">\r\n                                      Listened on {{downloadService.studyReadDate(item).date | date: 'MM/dd/yyyy'}}\r\n                                  </span>\r\n                            </div>\r\n                          </ion-buttons>\r\n                    </ng-container>\r\n\r\n                      <div *ngIf=\"audioService.downloadedStudy[i]\"   style=\"width: 100px;\">\r\n                        <ion-range mode=\"ios\" [(ngModel)]=\"audioService.progress\" (touchend)=\"seek()\" #range class=\"range range--audioPlayer\" max=\"100\"></ion-range>\r\n                    </div>\r\n                    <ng-container *ngIf=\"!audioService.downloadedStudy[i]\">\r\n                        <div *ngIf=\"sevenDaysStudy.length > 0 && studyRead(item) && item.completeListner == false\"  style=\"width: 100px;\">\r\n                            <ion-range mode=\"ios\"  [(ngModel)]=\"item.progress\"  class=\"range range--audioPlayer\" max=\"100\"></ion-range>\r\n                        </div>\r\n                    </ng-container>\r\n                    \r\n                    </div>\r\n                    <div class=\"icons__right\" [class.disabledColors]=\"downloadService.studyRead(item)\">\r\n                        <ion-buttons style=\"margin-left: 4px;\" *ngIf=\"!audioService.downloadedStudy[i]\"  (click)=\"playTodayStudy(false, item , i)\"  ><ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                        <ion-buttons *ngIf=\"audioService.downloadedStudy[i]\"   (click)=\"playTodayStudy(true, item , i)\"  ><ion-icon name=\"pause\"></ion-icon></ion-buttons>\r\n                    </div>\r\n                </div>\r\n                <p class=\"detailCard__body--text\">{{item.description}}</p>\r\n                <div class=\"card-btns\">\r\n                    <ion-button  (click)=\"ReadTheBiblePassage(item)\"  *ngIf=\"item.audio_format === 'Daily' \" expand=\"block\" class=\"detailCard__body--btn btnSecondary\">\r\n                        <ion-icon name=\"book\"></ion-icon>\r\n                        Read the Bible Passage\r\n                    </ion-button>\r\n                    <ion-button style=\"--background: #b2b2b2;\"  disabled class=\"detailCard__body--btn btnSecondary\" expand=\"block\">\r\n                        <img src=\"../../assets/img/notes-outline-icon.svg\" class=\"note-icon\">\r\n                        More Resources\r\n                    </ion-button>\r\n                </div>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-col>\r\n</ion-row>\r\n</div>\r\n</ion-content>\r\n "

/***/ }),

/***/ "./src/app/today-study-card/today-study-card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/today-study-card/today-study-card.module.ts ***!
  \*************************************************************/
/*! exports provided: TodayStudyCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayStudyCardPageModule", function() { return TodayStudyCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _today_study_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today-study-card.page */ "./src/app/today-study-card/today-study-card.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








var routes = [
    {
        path: '',
        component: _today_study_card_page__WEBPACK_IMPORTED_MODULE_6__["TodayStudyCardPage"]
    }
];
var TodayStudyCardPageModule = /** @class */ (function () {
    function TodayStudyCardPageModule() {
    }
    TodayStudyCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_today_study_card_page__WEBPACK_IMPORTED_MODULE_6__["TodayStudyCardPage"]]
        })
    ], TodayStudyCardPageModule);
    return TodayStudyCardPageModule;
}());



/***/ }),

/***/ "./src/app/today-study-card/today-study-card.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/today-study-card/today-study-card.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailCard {\n  border-radius: 16px;\n  background: rgba(17, 111, 162, 0.1);\n  margin-right: 0;\n  margin-left: 0;\n  box-shadow: none;\n  padding: 16px;\n  margin-top: 0;\n}\n.detailCard__header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  gap: 16px;\n  padding: 0;\n}\n.detailCard__header--img {\n  width: 72px;\n  height: 72px;\n  border-radius: 16px;\n}\n.detailCard__header--headings .title {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-text, #212121);\n}\n.detailCard__header--headings .subTitle {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.2;\n  color: var(--text-sub-text, #363636);\n}\n.detailCard__header--headings .subTitle:first-child {\n  margin-top: 8px;\n}\n.detailCard__header--headings .subTitle:last-child {\n  color: var(--text-text, #212121);\n  font-size: 15px;\n  font-weight: 700;\n  margin-top: 0;\n}\n.detailCard__body {\n  padding: 0;\n}\n.detailCard__body .icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n  height: 45px;\n}\n.detailCard__body .icons__left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n}\n.detailCard__body .icons__left ion-buttons {\n  cursor: pointer;\n}\n.detailCard__body .icons__left ion-icon {\n  width: 24px;\n  height: 24px;\n  margin-left: 4px;\n  color: #000;\n  margin-right: 6px;\n}\n.detailCard__body .icons__right {\n  margin-left: auto;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: #DD7129;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.detailCard__body .icons__right ion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 0px;\n  color: #ffffff;\n}\n.detailCard__body--text {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  margin-top: 12px;\n}\n.detailCard__body--btn {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.detailCard__body--btn ion-icon {\n  margin-right: 6px;\n}\n.detailCard__body .read--btn {\n  margin-bottom: 8px;\n}\n.btnSecondary {\n  --background: #DD7129;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background-hover: #DD7129;\n}\n.note-icon {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: auto;\n  margin-right: 6px;\n}\n.activeCheck {\n  color: #00C142 !important;\n  height: 18px;\n  width: 18px;\n  margin: 0 2px;\n}\n.listenTxt {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 6px;\n}\n.range--audioPlayer {\n  --bar-height: 3px;\n  margin-top: 0;\n  padding: 0;\n}\n.range {\n  --bar-background: #ACACAC;\n  cursor: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.activeBtn {\n  --color:#ffffff ;\n  --color-activated: #5508c0;\n  --color-hover: #ffffff;\n  --color-focused: #ffffff;\n  --background: var(--primary-color, #302F34);\n  --border-color:var(--primary-color, #302F34);\n  --background-hover:var(--primary-color, #302F34);\n  --background-activated: var(--primary-color, #302F34);\n  --background-focused: var(--primary-color, #302F34);\n}\n.disabledColors {\n  --background: #b2b2b2 !important;\n  background: #b2b2b2 !important;\n  background-color: #b2b2b2 !important;\n  --background-color:#b2b2b2 !important;\n  --border-color: #b2b2b2 !important;\n  border-color: #b2b2b2 !important;\n  --background-hover: #b2b2b2 !important;\n  --background-activated: #b2b2b2 !important;\n}\n.check {\n  color: #fff !important;\n  background: #00C142 !important;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.checkmarkAlign {\n  display: -webkit-box;\n  display: flex;\n  font-size: 12px;\n  white-space: nowrap;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 4px;\n  margin-left: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3RvZGF5LXN0dWR5LWNhcmQvdG9kYXktc3R1ZHktY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RvZGF5LXN0dWR5LWNhcmQvdG9kYXktc3R1ZHktY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDRFI7QURJTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0ZSO0FES007RUFDRSxlQUFBO0FDSFI7QURNTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0pSO0FEUUk7RUFDRSxVQUFBO0FDTk47QURRTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05SO0FEUVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsUUFBQTtBQ05WO0FET1U7RUFDRSxlQUFBO0FDTFo7QURTUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNQVjtBRFVRO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNSVjtBRFVRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSVjtBRFlNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWUjtBRGFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDWFI7QURhTTtFQUNFLGlCQUFBO0FDWFI7QURpQk07RUFDRSxrQkFBQTtBQ2ZSO0FEcUJFO0VBQ0UscUJBQUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNsQkw7QURxQkc7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDbEJMO0FEb0JHO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNqQko7QURtQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCSjtBRG1CRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNoQko7QURrQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ2ZKO0FEbUJFO0VBS0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLG1EQUFBO0FDcEJKO0FEd0JBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtBQ3JCRjtBRHdCQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDckJGO0FEdUJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNwQkoiLCJmaWxlIjoic3JjL2FwcC90b2RheS1zdHVkeS1jYXJkL3RvZGF5LXN0dWR5LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kZXRhaWxDYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTcsIDExMSwgMTYyLCAwLjEwKTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIFxyXG4gICAgJl9faGVhZGVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZ2FwOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgICAmLS1pbWd7XHJcbiAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJi0taGVhZGluZ3MgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXRleHQsICMyMTIxMjEpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc3ViLXRleHQsICMzNjM2MzYpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZTpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJi0taGVhZGluZ3MgLnN1YlRpdGxlOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtdGV4dCwgIzIxMjEyMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYm9keXtcclxuICAgICAgcGFkZGluZzogMDtcclxuICBcclxuICAgICAgLmljb25ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gIFxyXG4gICAgICAgICZfX2xlZnR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgJiBpb24tYnV0dG9uc3tcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmX19sZWZ0IGlvbi1pY29ue1xyXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJl9fcmlnaHR7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RENzEyOTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3JpZ2h0IGlvbi1pY29ue1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtLXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLS1idG4gIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnJlYWQtLWJ0bntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC5idG5TZWNvbmRhcnl7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNERDcxMjk7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNERDcxMjk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5ub3RlLWljb257XHJcbiAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgICB3aWR0aDogYXV0bztcclxuICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgfVxyXG4gICAuYWN0aXZlQ2hlY2t7XHJcbiAgICBjb2xvcjogIzAwQzE0MiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHggO1xyXG4gICAgbWFyZ2luOjAgMnB4O1xyXG4gIH1cclxuICAubGlzdGVuVHh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcblxyXG4gIC5yYW5nZS0tYXVkaW9QbGF5ZXIgIHtcclxuICAgIC0tYmFyLWhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5yYW5nZSB7XHJcbiAgICAtLWJhci1iYWNrZ3JvdW5kOiAjQUNBQ0FDO1xyXG4gICAgY3Vyc29yOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFjdGl2ZUJ0bntcclxuICAgIC8vLS1jb2xvcjojRjFGMUYxO1xyXG4gICAgLy8tLWJhY2tncm91bmQtaG92ZXI6Ymx1ZTtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBibHVlO1xyXG5cclxuICAgIC0tY29sb3I6I2ZmZmZmZiA7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzU1MDhjMDtcclxuICAgIC0tY29sb3ItaG92ZXI6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xyXG4gICAgLS1ib3JkZXItY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcclxufSAgXHJcblxyXG5cclxuLmRpc2FibGVkQ29sb3Jze1xyXG4gIC0tYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50OyBcclxuICBiYWNrZ3JvdW5kOiAjYjJiMmIyICFpbXBvcnRhbnQ7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6I2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvcjojYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6ICNiMmIyYjIgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNiMmIyYjIgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiMmIyYjIgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja3tcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICMwMEMxNDIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAyMHB4IDtcclxuICB3aWR0aDogMjBweCA7XHJcbn1cclxuLmNoZWNrbWFya0FsaWdue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcclxufSIsIi5kZXRhaWxDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNywgMTExLCAxNjIsIDAuMSk7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMDtcbn1cbi5kZXRhaWxDYXJkX19oZWFkZXItLWltZyB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRleHQsICMyMTIxMjEpO1xufVxuLmRldGFpbENhcmRfX2hlYWRlci0taGVhZGluZ3MgLnN1YlRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zdWItdGV4dCwgIzM2MzYzNik7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyAuc3ViVGl0bGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1oZWFkaW5ncyAuc3ViVGl0bGU6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRleHQsICMyMTIxMjEpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAuaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zX19sZWZ0IGlvbi1idXR0b25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zX19sZWZ0IGlvbi1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zX19yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDcxMjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAuaWNvbnNfX3JpZ2h0IGlvbi1pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZGV0YWlsQ2FyZF9fYm9keS0tdGV4dCB7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmRldGFpbENhcmRfX2JvZHktLWJ0biB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5LS1idG4gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5yZWFkLS1idG4ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5idG5TZWNvbmRhcnkge1xuICAtLWJhY2tncm91bmQ6ICNERDcxMjk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0RENzEyOTtcbn1cblxuLm5vdGUtaWNvbiB7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmFjdGl2ZUNoZWNrIHtcbiAgY29sb3I6ICMwMEMxNDIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLmxpc3RlblR4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcbiAgLS1iYXItaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yYW5nZSB7XG4gIC0tYmFyLWJhY2tncm91bmQ6ICNBQ0FDQUM7XG4gIGN1cnNvcjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hY3RpdmVCdG4ge1xuICAtLWNvbG9yOiNmZmZmZmYgO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzU1MDhjMDtcbiAgLS1jb2xvci1ob3ZlcjogI2ZmZmZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJvcmRlci1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xufVxuXG4uZGlzYWJsZWRDb2xvcnMge1xuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjojYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2sge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMDBDMTQyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmNoZWNrbWFya0FsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/today-study-card/today-study-card.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/today-study-card/today-study-card.page.ts ***!
  \***********************************************************/
/*! exports provided: TodayStudyCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayStudyCardPage", function() { return TodayStudyCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_id_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_bible_chapter_sharing_modal_sharing_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/bible-chapter/sharing-modal/sharing-modal.component */ "./src/app/bible-chapter/sharing-modal/sharing-modal.component.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/bible-sharing/bible-sharing.component */ "./src/app/common/bible-sharing/bible-sharing.component.ts");
/* harmony import */ var src_services_bible_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/bible.service */ "./src/services/bible.service.ts");




















var TodayStudyCardPage = /** @class */ (function () {
    function TodayStudyCardPage(translate, loader, toast, apiService, route, event_provider, router, storage, idSer, audioService, service, downloadService, socialSharing, location, modalController, actionSheetController, _bibleService, platform) {
        this.translate = translate;
        this.loader = loader;
        this.toast = toast;
        this.apiService = apiService;
        this.route = route;
        this.event_provider = event_provider;
        this.router = router;
        this.storage = storage;
        this.idSer = idSer;
        this.audioService = audioService;
        this.service = service;
        this.downloadService = downloadService;
        this.socialSharing = socialSharing;
        this.location = location;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this._bibleService = _bibleService;
        this.platform = platform;
        this.week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.showsArray = [];
        this.date_pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
        this.current_date = new Date();
        this.today_date = Number(this.date_pipe.transform(new Date(), 'dd'));
        this.current_month = (Number(this.date_pipe.transform(new Date(), 'MM')));
        this.current_year = (Number(this.date_pipe.transform(new Date(), 'yyyy')));
        this.current_hour = Number(this.date_pipe.transform((new Date), 'H'));
        this.current_minutes = Number(this.date_pipe.transform((new Date), 'mm'));
        this.current_day = new Date().getDay(); // 0(Sunday) to 6(Saturday).
        this.weekly_Calendar = [];
        this.current_show = [];
        this.daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
        this.audioData = {};
        this.old_testament = [];
        this.new_testament = [];
        this.study_order = 'study_order';
        this.is_user_logged_in = false;
        this.sevenDaysStudy = [];
        this.is_cordova = false;
    }
    TodayStudyCardPage.prototype.ngOnInit = function () {
    };
    TodayStudyCardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.ch_id = JSON.parse(localStorage.getItem('church_data')).church.ch_id;
        this.getWhole7daysStudy();
        this.storage.get('app_language').then(function (res) {
            _this.audio_id = res.audio_id;
            _this.bible_id = res.bible_id;
            _this.langCode = res.code;
            if (_this.bible_id) {
                _this.getCMPBooks(_this.bible_id);
            }
        });
    };
    TodayStudyCardPage.prototype.getWhole7daysStudy = function () {
        // Get the current date
        var currentDate = new Date();
        // Create an array to store the previous 6 dates
        var previousDates = [];
        previousDates.push(currentDate);
        this.getTodayStudy(currentDate);
        // Loop to get the previous 6 dates
        for (var i = 1; i <= 6; i++) {
            var previousDate = new Date(currentDate);
            previousDate.setDate(currentDate.getDate() - i);
            previousDates.push(previousDate);
            this.getTodayStudy(previousDate);
        }
        // Now, previousDates array contains the previous 6 dates
    };
    TodayStudyCardPage.prototype.getTodayStudy = function (scheduled_date) {
        var _this = this;
        var prev_date = scheduled_date;
        var body = JSON.stringify({
            language: localStorage.getItem('app_language') == 'en' ?
                localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language') == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language'),
            scheduled_date: this.date_pipe.transform(new Date(scheduled_date), 'yyyy-MM-dd'),
            audio_format: "Daily"
        });
        // this.loader.presentLoading().then(() => {
        this.apiService.getTodayStudy(body).subscribe(function (res) {
            if (res) {
                var obj = {
                    start_chapter: res.bible_chapter_start,
                    end_chapter: res.bible_chapter_end,
                    start_verse: res.bible_verse_start,
                    end_verse: res.bible_verse_end,
                    art_url: res.art_url,
                    organization: res.organization,
                    name: res.name,
                    audioData_title: res.name,
                    audioData_id: res.uuid,
                    scheduled_date: res.scheduled_date,
                    description: res.description,
                    uuid: res.uuid,
                    audioUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + res.uuid,
                    audio_format: res.audio_format,
                    book_id: res.cmp_book_id,
                    listenDuration: "",
                    seekto: 0,
                    listner: "",
                    completeListner: "",
                    date: "",
                    progress: 0
                    //  this.getTtbLanguageAudio(); 
                };
                _this.sevenDaysStudy = _this.sevenDaysStudy.concat(obj);
                _this.sevenDaysStudy.sort(function (a, b) {
                    var dateA = new Date(a.scheduled_date);
                    var dateB = new Date(b.scheduled_date);
                    return dateB.getTime() - dateA.getTime();
                });
                setTimeout(function () {
                    _this.loader.stopLoading();
                }, 3000);
                console.log(_this.sevenDaysStudy);
                // var  read_audios:any=[];
                // read_audios  = localStorage.getItem("listenStudy")? JSON.stringify(localStorage.getItem("listenStudy")):[]
                // // read_audios = read_audios ? read_audios.filter(x=>x.bookname == ttb_audios[0].bible_book && x.completeListner == true):[];
                // // if(read_audios && read_audios.length > 0 ){
                // //   this.audioService.readAudio = read_audios.length;
                // // }else{
                // //   this.audioService.readAudio = 0;
                // // }
                // for(let i=0; i< this.sevenDaysStudy.length-1; i++)
                // this.sevenDaysStudy.forEach(audio => {
                //    var findData = read_audios.find(x => x.id === audio.uuid);
                //    if(findData){
                //     var data = this.sevenDaysStudy[i];
                //     data.duration = findData.duration;
                //     this.sevenDaysStudy[i] = data;
                //    }
                // });
            }
            else {
                // this.loader.stopLoading();
            }
        });
        // });
    };
    TodayStudyCardPage.prototype.downloadAudio = function (item) {
        console.log(item, "item");
        var corsUrl = "https://51.91.147.186:8080/";
        //  http://samplelib.com/lib/preview/mp3/sample-3s.mp3
        // this.downloadService.downloadAudio(item.audioUrl, item.name,item.art_url);
    };
    // opening modal to share
    TodayStudyCardPage.prototype.openModal = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var share_data, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // ====================================================
                        if (this.platform.is('cordova')) {
                            this.is_cordova = true;
                        }
                        if (!this.is_cordova) return [3 /*break*/, 1];
                        share_data = '"' + item.name + '" ' + item.description + ' ' + item.audioUrl;
                        this.socialSharing.share(share_data).then(function (data) {
                        }, function (error) {
                            // console.log("Error: ", error);
                        });
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: src_app_bible_chapter_sharing_modal_sharing_modal_component__WEBPACK_IMPORTED_MODULE_16__["SharingModalComponent"],
                            backdropDismiss: true,
                            cssClass: 'BibleModal',
                            componentProps: {
                                title: item.name,
                                description: item.description,
                                audioUrl: item.audioUrl,
                                from: 'today-study-card',
                            }
                        })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var user = data['data']; // Here's your selected user!
                            console.log(data, user);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TodayStudyCardPage.prototype.shareURL = function (audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is("cordova")) return [3 /*break*/, 1];
                        this.socialSharing.share("Study Thru The Bible - " + audio.name + " \n" + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + audio.uuid).then(function (data) {
                        }, function (error) {
                        });
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Share',
                            buttons: [
                                {
                                    text: 'Copy Link',
                                    role: 'destructive',
                                    icon: 'link',
                                    handler: function () {
                                        navigator.clipboard.writeText(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + audio.uuid);
                                        _this.toast.presentToastWithOptions(' Copied ', '', 'success');
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 2:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TodayStudyCardPage.prototype.ReadTheBiblePassage = function (item) {
        console.log(item);
        var item2 = this.books.find(function (x) { return x.id === item.book_id; });
        console.log(item2);
        if (item2) {
            var data = {
                queryParams: {
                    chapter: JSON.stringify(item.start_chapter),
                    book: JSON.stringify(item2),
                    dam_id: this.bible_id,
                    audio_id: this.audio_id,
                    page: 'today-study-card',
                    // sermonid:this.sermonid,
                    // page_id: this.page_id,
                    start_chapter: item.start_chapter,
                    start_verse: item.start_verse,
                    end_chapter: item.end_chapter,
                    end_verse: item.end_verse,
                    bible_id: this.bible_id
                }
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    };
    TodayStudyCardPage.prototype.playTodayStudy = function (isplay, audio, index) {
        var _this = this;
        var audiourl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + audio.uuid;
        if (this.audioService.audioUrl == audiourl) {
            this.audioService.togglePlayer(isplay);
        }
        else {
            this.audioService.clear();
            setTimeout(function () {
                _this.audioService.clear();
                audio.image = audio.art_url;
                _this.audioService.fromPage = "study";
                _this.service.image = _this.audioData.art_url;
                _this.audioService.audioIndex = index;
                _this.audioService.title = audio.name;
                _this.audioService.isAudioPlayShows = !isplay;
                _this.audioService.downloadedStudy[index] = true;
                _this.audioService.image = audio.art_url;
                _this.service.audioData = audio;
                _this.service.method = 'study';
                _this.audioService.organization = audio.organization;
                _this.audioService.is_today_study = true;
                _this.audioService.image = audio.art_url;
                _this.audioService.study_image = audio.art_url;
                audio.seekto > 0 ? _this.audioService.startAudio(audiourl, audio.seekto) : _this.audioService.startAudio(audiourl);
            }, 500);
        }
    };
    TodayStudyCardPage.prototype.goback = function () {
        this.location.back();
    };
    TodayStudyCardPage.prototype.downloadCompoent = function (today) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_18__["BibleSharingComponent"],
                            componentProps: {
                                todayStudy: JSON.stringify(today),
                                studyType: "study",
                            },
                            cssClass: 'BibleModal ForBibleSharing'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var user = data['data']; // Here's your selected user!
                            if (user.data === 'passenger') {
                                _this.ReadTheBiblePassage(today);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodayStudyCardPage.prototype.seek = function () {
        var _this = this;
        if (this.platform.is('cordova') && !this.platform.is("android")) {
            this.platform.ready().then(function () {
                _this.audioService.audiomedia.getCurrentPosition().then(function (position) {
                    if (position && position >= 0) {
                        // get current playback position
                        var newValue = +_this.range.value;
                        var val = _this.audioService.audiomedia.getDuration() * (newValue / 100) * 1000;
                        if (val) {
                            _this.audioService.audiomedia.seekTo(val);
                        }
                    }
                });
            });
        }
        else if (this.platform.is("cordova") && this.platform.is("android")) {
            var newValue_1 = +this.range.value;
            window.mediaplayer.current(function (success) {
                console.log(success);
                var duration = (Math.floor(success.duration)) / 1000;
                var seekvalue = ((duration * (newValue_1 / 100)));
                console.log("finnal console,", newValue_1, (parseInt(seekvalue) * 1000).toString());
                window.mediaplayer.seek({ seekTo: (parseInt(seekvalue) * 1000).toString() }, function (success) { console.log(success); }, function (fail) { console.log(fail); });
            }, function (fail) { console.log(fail); });
        }
        else {
            if (this.audioService.isPlaying) {
                var newValue = +this.range.value;
                var duration = this.audioService.player.duration();
                this.audioService.player.seek(duration * (newValue / 100));
            }
        }
    };
    TodayStudyCardPage.prototype.getCMPBooks = function (bible_id) {
        var _this = this;
        var self = this;
        var bible_id2 = bible_id;
        var code = this.langCode;
        this._bibleService.getCMPbibleBooks(bible_id2, this.langCode).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    data_1 = [];
                    res.forEach(function (x) {
                        var chapter = '';
                        for (var i = 1; i <= x.number_of_chapters; i++) {
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
                        data_1.push(x);
                        // }
                    });
                    this.books = data_1;
                    // setting if data in params
                    //     if (this.params_book_name2 && this.params_chap_id2) {
                    //             //Geting the chapters
                    //             let item = this.books.find(x =>
                    //                 x.book_name.toLowerCase() === this.params_book_name2.toLowerCase());
                    //         if (item !== null && item !== '' && item !== undefined)
                    //         {
                    //             let data = item.chapters.split(',');
                    //             let finalData: any = [];
                    //             data.forEach(function (e) {
                    //                 let chapter = {
                    //                     id: e,
                    //                     selected: false
                    //                 };
                    //                 finalData.push(chapter);
                    //             });
                    //             this.chapters = finalData;
                    //             this.chapters.map(function (x) {
                    //                 if (x=> x.id !== this.params_chap_id2.toString()) {
                    //                     x.selected = false;
                    //                 } else {
                    //                     x.selected = true;
                    //                 }
                    //                 return x;
                    //             });
                    //             //Expanding Toggle
                    //             this.books.map(function (x) {
                    //                 if (x.book_name !== self.params_book_name) {
                    //                     x.expanded = false;
                    //                 } else {
                    //                     x.expanded = true;
                    //                 }
                    //                 return x;
                    //             });
                    //             this.getCMPBooksText( dam_id );
                    //         }else{
                    //             this.toast.presentToastWithOptions('No bible exist', 'Something Went Wrong', 'warning');
                    //         }
                    // }
                }
                else if (!res) {
                    this.toast.presentToastWithOptions('Something Went Wrong', '', 'danger');
                }
                return [2 /*return*/];
            });
        }); });
    };
    TodayStudyCardPage.prototype.studyRead = function (read) {
        var listenData = localStorage.getItem("listenStudy") ? JSON.parse(localStorage.getItem("listenStudy")) : [];
        if (listenData) {
            var idx = listenData.findIndex(function (x) { return x.id == read.uuid; });
            if (idx > -1) {
                var idxs = this.sevenDaysStudy.findIndex(function (x) { return x.uuid == listenData[idx].id; });
                if (idxs > -1) {
                    this.sevenDaysStudy[idxs].listenDuration = listenData[idx].duration;
                    this.sevenDaysStudy[idxs].listner = true;
                    this.sevenDaysStudy[idxs].completeListner = listenData[idx].completeListner;
                    this.sevenDaysStudy[idxs].date = listenData[idx].date;
                    var timeArray = listenData[idx].duration.split(':');
                    var minutes = parseInt(timeArray[0], 10);
                    var sec = parseInt(timeArray[1], 10);
                    var totalMinutes = minutes * 60 + sec;
                    var seek = Math.floor(totalMinutes);
                    this.sevenDaysStudy[idxs].seekto = seek;
                    this.sevenDaysStudy[idxs].progress = (seek / (this.sevenDaysStudy[idxs].audio_duration ? this.sevenDaysStudy[idxs].audio_duration : 1561)) * 100 || 0;
                    return true;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    };
    TodayStudyCardPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
        { type: src_services_id_service__WEBPACK_IMPORTED_MODULE_12__["IdService"] },
        { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"] },
        { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_13__["DownloadService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["ActionSheetController"] },
        { type: src_services_bible_service__WEBPACK_IMPORTED_MODULE_19__["BibleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('range', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonRange"])
    ], TodayStudyCardPage.prototype, "range", void 0);
    TodayStudyCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-today-study-card',
            template: __webpack_require__(/*! raw-loader!./today-study-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/today-study-card/today-study-card.page.html"),
            styles: [__webpack_require__(/*! ./today-study-card.page.scss */ "./src/app/today-study-card/today-study-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], src_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            src_services_id_service__WEBPACK_IMPORTED_MODULE_12__["IdService"],
            src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"],
            src_services_download_service__WEBPACK_IMPORTED_MODULE_13__["DownloadService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["ActionSheetController"],
            src_services_bible_service__WEBPACK_IMPORTED_MODULE_19__["BibleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["Platform"]])
    ], TodayStudyCardPage);
    return TodayStudyCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=today-study-card-today-study-card-module-es5.js.map