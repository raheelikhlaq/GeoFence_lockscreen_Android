(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audio-archive-audio-archive-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-archive/audio-archive.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-archive/audio-archive.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons\n      *ngIf=\"enable_home && (enable_home.next_page !== 'Audio')\"\n      (click)=\"gotobackPage()\"\n      class=\"cursor-pointer\"\n      slot=\"start\"\n    >\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp; {{page_name}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'Audio')\" slot=\"start\">\n      {{page_name}}\n    </p>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div\n    *ngIf=\"banner_img || banner_desc || banner_title\"\n    class=\"banner\"\n    [ngStyle]=\"{'background': 'url(' + banner_img + ')  no-repeat'}\"\n  >\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-card\n        class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n        style=\"border-radius: 5px\"\n        *ngIf=\"newFeeds && newFeeds.length === 0\"\n      >\n        <h4 class=\"heading4\">\n          &nbsp;{{'AUDIO_ARCHIVE.noaudioavailable' | translate}}\n        </h4>\n      </ion-card>\n      <ion-row class=\"align-items-stretch\">\n        <ion-col\n          [size]=\"12\"\n          [sizeLg]=\"4\"\n          *ngFor=\"let feed of newFeeds; let i = index\"\n        >\n          <ion-card class=\"ionCard ionCard--audio ion-margin-bottom\">\n            <ion-card-content class=\"ion-no-padding\">\n              <ion-item\n                class=\"ionMedia\"\n                lines=\"none\"\n                style=\"\n                  margin-bottom: 0;\n                  margin-top: 10px;\n                  --inner-padding-end: 0;\n                \"\n              >\n                <div\n                  class=\"ionMedia__media ionMedia__media--big\"\n                  style=\"top: 4px\"\n                  *ngIf=\"feed.get_podcast_image === null || !feed.get_podcast_image\"\n                >\n                  <div\n                    *ngIf=\"theme.ch_id != '1547'\"\n                    class=\"imgDiv\"\n                    style=\"width: 25px; height: 25px\"\n                  >\n                    <svg\n                      class=\"imgDiv__img\"\n                      version=\"1.0\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      width=\"450.000000pt\"\n                      height=\"450.000000pt\"\n                      viewBox=\"0 0 450.000000 450.000000\"\n                      preserveAspectRatio=\"xMidYMid meet\"\n                    >\n                      <g\n                        transform=\"translate(0.000000,450.000000) scale(0.100000,-0.100000)\"\n                        fill=\"#fff\"\n                        stroke=\"none\"\n                      >\n                        <path\n                          d=\"M4220 4470 c-184 -48 -1765 -449 -2480 -629 l-265 -67 -3 -1197 -2\n-1196 -65 45 c-69 48 -186 106 -250 123 -129 34 -321 30 -444 -10 -346 -111\n-567 -429 -548 -789 7 -132 25 -201 83 -318 105 -209 309 -366 539 -413 358\n-74 714 104 871 436 77 162 74 119 74 1249 l0 1005 33 9 c17 5 221 57 452 116\n231 58 739 187 1129 286 390 99 715 180 723 180 11 0 13 -111 13 -640 0 -352\n-2 -640 -5 -640 -3 0 -26 16 -52 36 -61 46 -160 96 -248 124 -94 30 -272 38\n-371 17 -435 -93 -707 -504 -618 -935 56 -273 263 -503 529 -588 118 -38 297\n-44 420 -15 241 58 447 231 543 458 65 155 62 60 62 1801 0 870 -3 1581 -7\n1581 -5 -1 -55 -14 -113 -29z\"\n                        />\n                      </g>\n                    </svg>\n                  </div>\n\n                  <img *ngIf=\"theme.ch_id == '1547'\" alt=\"icon\" src=\"../../assets/img/kolelketab.jpg\"/>\n                </div>\n\n                  <div [style.background-image]=\"'url('+feed.get_podcast_image+')'\"\n                       class=\"ionMedia__media ionMedia__media--big\"\n                       style=\"top: 4px;background-size: cover;\"\n                       *ngIf=\"theme.ch_id != '1547' && feed.get_podcast_image != null\">\n                  </div>\n\n                <ion-label style=\"margin-top: 0\">\n                  <h3 class=\"ionMedia__heading ion-text-uppercase ion-text-center\" style=\"white-space: initial\" *ngIf=\"feed.name  && is_wordpress_enable\">\n                    {{feed.name}}\n                  </h3>\n                  <h3 class=\"ionMedia__heading ion-text-uppercase ion-text-center\" style=\"white-space: initial\" *ngIf=\"feed.title  && !is_wordpress_enable\">\n                    {{feed.title}}\n                  </h3>\n                  <p class=\"ionMedia__text ion-text-center\" *ngIf=\"feed.creator\">\n                    {{feed.creator}}\n                  </p>\n                  <p class=\"ionMedia__text ion-text-center\" *ngIf=\"feed.pubDate\">\n                    {{appService.getDateTimeFormat(feed.pubDate)}}\n                  </p>\n\n                  <!-- <app-audio-player [pageName]=\"cardIndex\" [fromPage]=\"'audio_archive'\" [audioData]=\"feed\" [method]=\"'getAllSermons'\" [audioTitle]=\"feed.name\"\n                    [audioUrl]=\"feed.audio_link\" [isSermon]=\"false\" [index]=\"i\" *ngIf=\"hasAudioLink(feed.audio_link)\">\n                  </app-audio-player> -->\n                  <app-audio-player [pageName]=\"cardIndex\"  [page_id]=\"page_id\" [pageTitle]=\"page_name\" [fromPage] = \"'audio_archive'\" [audioData]=\"feed\" [method]=\"'getAllSermons'\" [audioTitle]=\"feed.name\" [ch_id]=\"feed.church_id\"  [author]=\"feed.author\" [user_id]=\"account_donor_id\" [gender]=\"gender\" [age]=\"age\" [audioUrl]=\"feed.audio_link\" [isSermon]=\"false\" [page_id]=\"page_id\" [index]=\"i\" *ngIf=\"hasAudioLink(feed.audio_link)\" >\n                  </app-audio-player>\n                </ion-label>\n              </ion-item>\n\n              <!--                                    COMMENT SECTION-->\n              <div class=\"ion-margin-bottom ion-text-center\">\n                <ion-button [class.activeBtn]=\"isSharingActive[i] && index === i\" class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\"\n                  (click)=\"openSharingModal(feed.share_link,i)\">\n                  <ion-icon name=\"share\"></ion-icon>\n                </ion-button>\n                <ion-button *ngIf=\"!feed.isDownloaded && !isDownloading[i]\" [class.activeBtn]=\"isDownloadActive[i] && index === i \"\n                  class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\" (click)=\"download(feed,i)\">\n                  <ion-icon name=\"download\"></ion-icon>\n                </ion-button>\n                <!-- if file start downloading -->\n                <ion-button *ngIf=\"isDownloading[i]\" [disabled]=\"isDownloading[i]\"\n                  class=\"commonBtn activeBtn commonBtn--gray commonBtn--fullRound commonBtn--small\" (click)=\"download(feed,i)\">\n                  <ion-icon name=\"download\"></ion-icon>\n                </ion-button>\n                <ion-button\n                  *ngIf=\"feed.isDownloaded\"\n                  class=\"commonBtn activeBtn commonBtn--gray commonBtn--fullRound commonBtn--small\"\n                >\n                  <ion-icon name=\"checkmark\"></ion-icon>\n                </ion-button>\n                <ion-button\n                  [class.activeBtn]=\"showComments[i] && index === i\"\n                  (click)=\" commentsActive(i)\"\n                  class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\"\n                >\n                  <ion-icon\n                    style=\"margin-right: -5px\"\n                    slot=\"start\"\n                    name=\"chatbubbles\"\n                  ></ion-icon>\n                </ion-button>\n                <ng-container *ngIf=\"feed.audio_link\">\n                  <ion-button\n                  [class.activeBtn]=\"casting.isCastingActive[i] && casting.castingPage == 'audio-archieve' \"\n                    (click)=\"castAud(feed.audio_link, i)\"\n                    class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\"\n                  >\n                    <ion-icon\n                      style=\"font-size: 24px\"\n                      src=\"../../../assets/img/castingchrome.svg\"\n                    ></ion-icon>\n                  </ion-button>\n                </ng-container>\n              </div>\n              <hr\n                class=\"ionCard__divider hide-mobile\"\n                *ngIf=\"showComments[i]\"\n              />\n\n              <ion-list\n                *ngIf=\"showComments[i]\"\n                lines=\"none\"\n                class=\"ion-no-margin ion-no-padding\"\n              >\n                <ion-item\n                  class=\"ionMedia\"\n                  *ngFor=\"let comment of feed.comments\"\n                >\n                  <div class=\"ionMedia__media\">\n                    <ion-avatar slot=\"start\">\n                      <img src=\"../../assets/img/user_icon.png\" />\n                    </ion-avatar>\n                  </div>\n                  <ion-label class=\"ion-text-wrap\">\n                    <h3 class=\"ionMedia__heading\" *ngIf=\"comment.name && is_wordpress_enable\"> {{comment.name}}</h3>\n                    <h3 class=\"ionMedia__heading\" *ngIf=\"!comment.name && is_wordpress_enable\"> {{'Anonymous'}}</h3>\n                    <p>{{comment.comment}}</p>\n                    <p style=\"font-size: x-small\" class=\"ionMedia__text\">\n                      {{comment.comment_time}}\n                    </p>\n                  </ion-label>\n                </ion-item>\n                <ion-item\n                  *ngIf=\"feed.comments.length === 0\"\n                  class=\"inputField inputField&#45;&#45;gray\"\n                  lines=\"none\"\n                >\n                  <ion-label class=\"ion-text-wrap\">\n                    <p>\n                      <small\n                        >{{'AUDIO_ARCHIVE.nocommentsyet' | translate}}<br />{{'AUDIO_ARCHIVE.bethefirstone'\n                        | translate}}</small\n                      >\n                    </p>\n                  </ion-label>\n                </ion-item>\n              </ion-list>\n              <div class=\"chat-card-footer\" *ngIf=\"showComments[i]\">\n                <ion-item class=\"inputField inputField--chatBox\" lines=\"none\">\n                  <ion-avatar slot=\"start\">\n                    <img src=\"../../assets/img/user_icon.png\" />\n                  </ion-avatar>\n                  <ion-input\n                    autocapitalize=\"sentences\"\n                    [(ngModel)]=\"comments[i]\"\n                    spellcheck=\"true\"\n                    autocorrect=\"true\"\n                    autocomplete=\"on\"\n                    class=\"inputField__area\"\n                    inputmode=\"text\"\n                    placeholder=\"{{'AUDIO_ARCHIVE.commentplaceholder' | translate}}\"\n                  ></ion-input>\n                  <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event, i)\">\n                                                <ion-icon name=\"md-happy\"></ion-icon>\n                                            </ion-button> -->\n                  <ion-button\n                    (click)=\"create_comment(feed.id, i)\"\n                    class=\"commonBtn--transparent text-gray\"\n                  >\n                    <ion-icon name=\"send\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-row>\n    </div>\n  </div>\n  <!-- <app-footer></app-footer> -->\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->\n"

/***/ }),

/***/ "./src/app/audio-archive/audio-archive.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/audio-archive/audio-archive.module.ts ***!
  \*******************************************************/
/*! exports provided: AudioArchivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioArchivePageModule", function() { return AudioArchivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audio_archive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio-archive.page */ "./src/app/audio-archive/audio-archive.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _audio_archive_page__WEBPACK_IMPORTED_MODULE_6__["AudioArchivePage"]
    }
];
let AudioArchivePageModule = class AudioArchivePageModule {
};
AudioArchivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_audio_archive_page__WEBPACK_IMPORTED_MODULE_6__["AudioArchivePage"]]
    })
], AudioArchivePageModule);



/***/ }),

/***/ "./src/app/audio-archive/audio-archive.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/audio-archive/audio-archive.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n@media screen and (max-width: 992px) {\n  .ionCard--audio .ionCard__topRight {\n    display: none;\n  }\n  .ionCard--audio .ionMedia {\n    margin-bottom: 10px;\n  }\n}\n.audioImg {\n  width: 120px;\n  height: 120px;\n  margin: 30px auto;\n}\n@media screen and (max-width: 992px) {\n  .audioImg {\n    display: none;\n  }\n}\n.activeBtn {\n  --color: #ffffff;\n  --color-activated: #ffffff;\n  --color-hover: #ffffff;\n  --color-focused: #ffffff;\n  --background: var(--primary-color, #302f34);\n  --border-color: var(--primary-color, #302f34);\n  --background-hover: var(--primary-color, #302f34);\n  --background-activated: var(--primary-color, #302f34);\n  --background-focused: var(--primary-color, #302f34);\n}\n.ionMedia ion-label {\n  margin-left: 80px;\n}\n@media screen and (max-width: 992px) {\n  .ionMedia ion-label {\n    margin-left: 60px;\n  }\n}\n.commonBtn--transparent {\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  --color-hover: #000;\n  --background-activated: transparent;\n  --background-hover: transparent;\n  --background-focused: transparent;\n  --background: transparent;\n  --ripple-color: transparent;\n}\n.commonBtn--transparent.commonBtn--small {\n  height: 35px;\n  width: 35px;\n  min-width: 35px;\n}\n.commonBtn--transparent.commonBtn--small ion-icon {\n  font-size: 20px;\n}\n.commonBtn--transparent.outline {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: #c7c5c5;\n}\n.commonBtn--transparent.rounded {\n  --border-radius: 50%;\n}\n.range--audioPlayer {\n  padding: 0;\n}\n.audioPlayer__text {\n  font-size: 14px;\n}\n@media screen and (max-width: 992px) {\n  .ionMedia ion-label {\n    margin-left: 80px;\n  }\n}\n.ionMedia__media--big {\n  background: var(--primary-color, #302f34);\n}\n.ionMedia__media--big ion-icon path {\n  color: #ffffff;\n  font-size: 30px;\n}\n@media screen and (max-width: 992px) {\n  .ionMedia__media--big {\n    height: 72px;\n    width: 72px;\n    margin-left: 5px;\n    background-color: #3880ff;\n  }\n}\n@media screen and (max-width: 992px) {\n  .ionMedia__media--img {\n    height: 72px;\n    width: 72px;\n    margin-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2F1ZGlvLWFyY2hpdmUvYXVkaW8tYXJjaGl2ZS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zdGRpbiIsInNyYy9hcHAvYXVkaW8tYXJjaGl2ZS9hdWRpby1hcmNoaXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUM2Q0U7RUM3UUU7SUFDRSxhQUFBO0VDTUo7RURKRTtJQUNFLG1CQUFBO0VDTUo7QUFDRjtBREhBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ01GO0FGNFBFO0VDclFGO0lBS0ksYUFBQTtFQ1FGO0FBQ0Y7QURMQTtFQUtFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSxtREFBQTtBQ0lGO0FERkE7RUFDRSxpQkFBQTtBQ0tGO0FGdU9FO0VDN09GO0lBR0ksaUJBQUE7RUNPRjtBQUNGO0FETEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ1FGO0FETkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNRSjtBRFBJO0VBQ0UsZUFBQTtBQ1NOO0FETkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNRSjtBRE5FO0VBQ0Usb0JBQUE7QUNRSjtBRExBO0VBQ0UsVUFBQTtBQ1FGO0FETkE7RUFDRSxlQUFBO0FDU0Y7QUY4TEU7RUNuTUE7SUFFSSxpQkFBQTtFQ1FKO0FBQ0Y7QURKQTtFQUNFLHlDQUFBO0FDT0Y7QURORTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDUUo7QUZnTEU7RUM1TEY7SUFRSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUNRRjtBQUNGO0FGd0tFO0VDMUtGO0lBRUksWUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdWRpby1hcmNoaXZlL2F1ZGlvLWFyY2hpdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xuLmlvbkNhcmQtLWF1ZGlvIHtcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xuICAgIC5pb25DYXJkX190b3BSaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaW9uTWVkaWEge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5hdWRpb0ltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5hY3RpdmVCdG4ge1xuICAvLy0tY29sb3I6I0YxRjFGMTtcbiAgLy8tLWJhY2tncm91bmQtaG92ZXI6Ymx1ZTtcbiAgLy8tLWJhY2tncm91bmQ6IGJsdWU7XG5cbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItaG92ZXI6ICNmZmZmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJmMzQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJmMzQpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJmMzQpO1xufVxuLmlvbk1lZGlhIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBAaW5jbHVkZSBtZWRpYS1tZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIH1cbn1cbi5jb21tb25CdG4tLXRyYW5zcGFyZW50IHtcbiAgLS1jb2xvcjogIzAwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDA7XG4gIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcbiAgLS1jb2xvci1ob3ZlcjogIzAwMDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICYuY29tbW9uQnRuLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIG1pbi13aWR0aDogMzVweDtcbiAgICAmIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2M3YzVjNTtcbiAgfVxuICAmLnJvdW5kZWQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcbiAgcGFkZGluZzogMDtcbn1cbi5hdWRpb1BsYXllcl9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlvbk1lZGlhe1xuICAmIGlvbi1sYWJlbHtcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XG4gICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICB9XG4gIH1cbn1cblxuLmlvbk1lZGlhX19tZWRpYS0tYmlnIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMmYzNCk7XG4gICYgaW9uLWljb24gcGF0aCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xuICAgIGhlaWdodDogNzJweDtcbiAgICB3aWR0aDogNzJweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIH1cbn1cblxuLy8gaW9uLWxhYmVsIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbi8vIH1cbi5pb25NZWRpYV9fbWVkaWEtLWltZyB7XG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmlvbkNhcmQtLWF1ZGlvIC5pb25DYXJkX190b3BSaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW9uQ2FyZC0tYXVkaW8gLmlvbk1lZGlhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi5hdWRpb0ltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXVkaW9JbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmFjdGl2ZUJ0biB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWhvdmVyOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMmYzNCk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMmYzNCk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbn1cblxuLmlvbk1lZGlhIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmlvbk1lZGlhIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIH1cbn1cblxuLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQge1xuICAtLWNvbG9yOiAjMDAwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzAwMDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjMDAwO1xuICAtLWNvbG9yLWhvdmVyOiAjMDAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29tbW9uQnRuLS10cmFuc3BhcmVudC5jb21tb25CdG4tLXNtYWxsIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xufVxuLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQuY29tbW9uQnRuLS1zbWFsbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb21tb25CdG4tLXRyYW5zcGFyZW50Lm91dGxpbmUge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYzdjNWM1O1xufVxuLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQucm91bmRlZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmF1ZGlvUGxheWVyX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW9uTWVkaWEgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgfVxufVxuXG4uaW9uTWVkaWFfX21lZGlhLS1iaWcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyZjM0KTtcbn1cbi5pb25NZWRpYV9fbWVkaWEtLWJpZyBpb24taWNvbiBwYXRoIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pb25NZWRpYV9fbWVkaWEtLWJpZyB7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW9uTWVkaWFfX21lZGlhLS1pbWcge1xuICAgIGhlaWdodDogNzJweDtcbiAgICB3aWR0aDogNzJweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/audio-archive/audio-archive.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/audio-archive/audio-archive.page.ts ***!
  \*****************************************************/
/*! exports provided: AudioArchivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioArchivePage", function() { return AudioArchivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _listening_modal_listening_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../listening-modal/listening-modal.component */ "./src/app/listening-modal/listening-modal.component.ts");
/* harmony import */ var src_services_casting_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/services/casting.service */ "./src/services/casting.service.ts");

























let AudioArchivePage = class AudioArchivePage {
    constructor(location, storage, loader, sermonsService, router, toast, common, appService, analytics, dom, event_provider, platform, socialSharing, device, translate, route, modalController, popoverController, downloadService, file, transfer, downloads, casting) {
        this.location = location;
        this.storage = storage;
        this.loader = loader;
        this.sermonsService = sermonsService;
        this.router = router;
        this.toast = toast;
        this.common = common;
        this.appService = appService;
        this.analytics = analytics;
        this.dom = dom;
        this.event_provider = event_provider;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.device = device;
        this.translate = translate;
        this.route = route;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.downloadService = downloadService;
        this.file = file;
        this.transfer = transfer;
        this.downloads = downloads;
        this.casting = casting;
        this.showComments = [];
        this.isUserLoggedIn = false;
        this.comments = [];
        this.page_in_home_tabs = false;
        this.page = 1;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_13__;
        this.external_server = false;
        this.is_wordpress_enable = false;
        this.isDownloaded = false;
        this.lastSeekArray = [];
        this.Downloaded = [];
        this.isDownloading = [];
        this.isPlaying = false;
        this.resumeSeek = [];
        this.player = null;
        this.progress = 0;
        this.activeTrack = null;
        this.isSharingActive = [];
        this.isDownloadActive = [];
        this.isCommentsActive = [];
        this.isCastingActive = [];
        this.resumableArray = [];
        this.fileTransfer = this.transfer.create();
        this.country = '';
        this.latitude = '';
        this.longitude = '';
        this.ip = '';
        this.appConfig = {
            sessionRequest: {
                appId: "F8D04591",
            },
            autoJoinPolicy: "TAB_AND_ORIGIN_SCOPED",
            defaultActionPolicy: "CREATE_SESSION",
        };
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get("ALERTS").subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (page_href.includes("home-tabs")) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
        // this.event_provider.chromeCasting.subscribe((res) => {
        //   if (res.flag == "startCasting" && res.page == "audio-archieve") {
        //     this.chrtomeCast(res.value, true);
        //   }
        // });
        this.event_provider.lastSeekValue.subscribe((res) => {
            this.resumableArray[this.cardIndex].seekValues.splice(res.index, 1, { value: res.value, name: res.name, progress: res.progress, duration: res.duration, pubDate: res.pubDate });
            localStorage.setItem('resumableValues', JSON.stringify(this.resumableArray));
        });
    }
    ngOnInit() {
        // assigning data from URL Params
        this.page_id = this.route.snapshot.paramMap.get("page_id");
        this.event_provider.page("audio-archieve");
        // Calling function to prepare data for page
        this.preparePageData();
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        this.event_provider.isHomeEnable.subscribe((value) => {
            // listening event
            this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
    }
    // opening modal to share
    openSharingModal(url, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.index = index;
            this.isSharingActive[index] = !this.isSharingActive[index];
            this.isCastingActive[index] = false;
            this.isDownloadActive[index] = false;
            this.showComments[index] = false;
            // const modal = await this.modalController.create({
            //     component: SharingModalComponent,
            //     cssClass: 'BibleModal',
            //     backdropDismiss: true,
            //     componentProps: {
            //         selected_verse: url,
            //         selected_verse_id: '',
            //         have_teaching: '',
            //         teaching_link: '',
            //     }
            // });
            // return await modal.present();
            if (this.isSharingActive[index] === true) {
                this.socialSharing.share(url).then((res) => {
                    if (res) {
                        this.isSharingActive[index] === false;
                    }
                }, (err) => {
                    if (err) {
                        this.isSharingActive[index] === false;
                    }
                });
            }
        });
    }
    hasAudioLink(link) {
        if (this.ch_id == "1124") {
            if (/.aif|.cda|.mid|.midi|.mp3|.mpa|.ogg|.wav|.wma|.wpl/.test(link)) {
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    }
    preparePageData() {
        // --------------- Getting theme from local storage ----------------//
        // this.storage.get('theme').then(res => {
        let theme = JSON.parse(localStorage.getItem("church_data")).church;
        this.ch_id = theme.ch_id;
        // getting app_pages to get latest data
        const body = JSON.stringify({ id: this.ch_id });
        // this.common.getTheme(body).subscribe(async (res: any) => {
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                this.theme = res.church;
                // saving app pages in local storage through service
                this.common.store_app_pages(res.apppages, "Audio");
                // calling function to get User Data
                this.getUser();
                // Filtering out AUDIO page from app pages
                let app_pages = res.apppages.find((x) => x.id === this.page_id);
                if (app_pages) {
                    // saving data from AUDIO Page
                    this.apppage_id = app_pages.id;
                    this.banner_img = app_pages.website_banner;
                    this.banner_desc = app_pages.banner_description;
                    this.banner_title = app_pages.banner_title;
                    this.page_name = app_pages.title;
                    this.custom_name = app_pages.name;
                    let event_type = app_pages.custom_category_url;
                    //////////////////////////////////////////////////// Seek values  setting in local Storage ///////////////////////////////////////////////////////////////
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                    if (JSON.parse(localStorage.getItem('resumableValues'))) { //setting default seek values from localStorage
                        this.resumableArray = JSON.parse(localStorage.getItem('resumableValues'));
                        this.resumableArray.forEach((e, i) => {
                            if (JSON.parse(localStorage.getItem('resumableValues'))[i].id === this.page_id) {
                                this.resumableArray.splice(i, 1, JSON.parse(localStorage.getItem('resumableValues'))[i]);
                            }
                        });
                        var found = false;
                        for (let i = 0; i < this.resumableArray.length; i++) { //check if page id already exist or not
                            if (this.page_id === this.resumableArray[i].id) {
                                found = true;
                                break;
                            }
                        }
                        if (found === false) {
                            this.resumableArray.push({ id: this.page_id, title: this.page_name, seekValues: [] });
                        }
                    }
                    else {
                        this.resumableArray.push({ id: this.page_id, title: this.page_name, seekValues: [] });
                    }
                    localStorage.setItem('resumableValues', JSON.stringify(this.resumableArray));
                    this.resumableArray = JSON.parse(localStorage.getItem('resumableValues'));
                    if (event_type === "true") {
                        this.external_server = true;
                    }
                    this.sermon_url = app_pages.url;
                    if (res.is_wordpress_enable === "1") {
                        this.is_wordpress_enable = true;
                        this.getDBAudio();
                    }
                    else {
                        this.is_wordpress_enable = false;
                        if (this.sermon_url.includes(".rss") ||
                            this.sermon_url.includes("/rss") ||
                            this.sermon_url.includes("-rss")) {
                            // if url is .rss feed, calling this function with app page id and church id as parameters
                            this.page = 1;
                            this.getRss();
                        }
                        else if (this.sermon_url.includes(".xml")) {
                            // if url is .xml feed
                            this.getXMLRss(this.sermon_url);
                        }
                        else {
                            this.page = 1;
                            // if url is not .xml nor .rss, calling this function to fetch sermon Data
                            this.getSermonsFromWordpress(this.sermon_url);
                        }
                    }
                }
            }
        }));
        // });
    }
    getDBAudio() {
        this.loader.presentLoading().then(() => {
            let self = this;
            let data = {
                church_id: this.ch_id,
                page: this.page,
            };
            // fetching data through service
            self.sermonsService.getCMSAudioVideo(data).subscribe((res) => {
                if (res.status) {
                    // Assigning data to variable
                    this.allSermons = res.sermons;
                    this.total_page_in_pagination = res.pages;
                    if (self.allSermons.length != 0) {
                        // filtering out data which have URL
                        self.allSermons = self.allSermons.filter((x) => x.sermon_audio && x.sermon_audio != "");
                        self.allSermons.map((y) => {
                            y["audio_link"] = this.dom.bypassSecurityTrustUrl(y.sermon_audio);
                            y["share_link"] = y.sermon_audio;
                            y["feed_id"] = y.id;
                            y["isPlaying"] = false;
                            y['isDownloaded'] = false;
                            y['get_podcast_image'] = y.featured_media;
                            y['name'] = y.title;
                        });
                        self.newFeeds = self.allSermons;
                        self.newFeeds.map((x) => {
                            x.comments = x.audio_comments;
                            x.comments.map((item) => {
                                try {
                                    item.comment = JSON.parse(item.comment);
                                }
                                catch (_a) {
                                    item.comment = item.comment;
                                }
                            });
                        });
                        // self.newFeeds = self.allSermons;
                        this.settingSeek();
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.NoAudio
                            : "No Audio Available", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                        this.loader.stopLoading();
                    }
                }
            });
        });
    }
    getRss() {
        this.loader.presentLoading().then(() => {
            let self = this;
            let data = {
                church_id: this.ch_id,
                page_no: this.page,
                page_id: this.page_id,
            };
            // fetching data through service
            self.sermonsService.getPodsDataWithPagintion(JSON.stringify(data)).subscribe((res) => {
                this.fetchMethod = 'rss';
                if (res.audio) {
                    // Assigning data to variable
                    this.allSermons = res.audio;
                    this.total_page_in_pagination = res.pages;
                    if (self.allSermons.length != 0) {
                        // filtering out data which have URL
                        self.allSermons = self.allSermons.filter((x) => x.enclosure && x.enclosure["@attributes"].url != "");
                        self.allSermons.map((y) => {
                            y["audio_link"] = this.dom.bypassSecurityTrustUrl(y.enclosure["@attributes"].url);
                            y["share_link"] = y.enclosure["@attributes"].url;
                            y["isPlaying"] = false;
                            y['isDownloaded'] = false;
                        });
                        self.newFeeds = self.allSermons;
                        self.newFeeds.map((x) => {
                            // x.comments = x.comments;
                            x.comments.map((item) => {
                                try {
                                    item.comment = JSON.parse(item.comment);
                                    let localTimeZone = moment__WEBPACK_IMPORTED_MODULE_13__["tz"].guess(true);
                                    item.comment_time = moment__WEBPACK_IMPORTED_MODULE_13__(item.comment_time).tz(localTimeZone);
                                    item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                                }
                                catch (_a) {
                                    item.comment = item.comment;
                                }
                            });
                        });
                        this.settingSeek();
                        this.loader.stopLoading();
                    }
                    else {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.NoAudio
                            : "No Audio Available", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                        this.loader.stopLoading();
                    }
                }
            });
        });
    }
    loadData(event) {
        this.page = this.page + 1;
        if (this.fetchMethod === 'wordpress') { //pagination check if method is from world press
            if (this.page <= this.total_page_in_pagination) {
                this.sermonsService.getAllSermons(this.sermon_url, this.page).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let data = res.data;
                    this.allSermons = data.item;
                    this.total_page_in_pagination = res.total_pages;
                    this.allSermons.forEach((e, i) => {
                        this.newFeeds.push(this.allSermons[i]);
                    });
                    if (this.allSermons.length != 0) {
                        // filtering out sermon with the sermon id from url
                        this.allSermons = this.allSermons.filter(x => x.enclosure.link != '');
                        // this.newFeeds = this.allSermons;
                        this.allSermons.map(y => {
                            y['a_link'] = y.audio_link || "";
                            y['title'] = y.title;
                            y['audio_link'] = this.dom.bypassSecurityTrustUrl(y.enclosure['@attributes'].url);
                            y['share_link'] = y.enclosure['@attributes'].url;
                        });
                        this.settingSeek();
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every Audio Post
                        // const body = JSON.stringify({
                        //   church_id: this.ch_id,
                        //   apppage_id: this.apppage_id,
                        //   feed_type: 'audio',
                        //   feed_array: this.allSermons,
                        // });
                        // console.log(JSON.parse(body))
                        // this.sermonsService.create_Audio_Feeds_array(body).subscribe(async (res: any) => {
                        //   if (res && res.status) {
                        //     // if loop iteration is equal to length of data, its time to fetch what we have saved
                        //     // this.load_xml_rss();
                        //     this.load_feed()
                        //   }
                        // });
                        event.target.complete();
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.NoAudio : 'No Audio Available'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    }
                    // this.loader.stopLoading();
                }), (err) => {
                    // If API Call receives any error
                    let message = err.message;
                    this.loader.stopLoading();
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                });
            }
            else {
                event.target.complete();
            }
        }
        else if (this.fetchMethod === 'rss') { //pagination check if method is from rss
            if (this.page <= this.total_page_in_pagination) {
                let data = {
                    church_id: this.ch_id,
                    page_no: this.page,
                    page_id: this.page_id,
                };
                this.sermonsService
                    .getPodsDataWithPagintion(JSON.stringify(data))
                    .subscribe((res) => {
                    if (res.audio) {
                        // Assigning data to variable
                        // this.allSermons = res.audio;
                        res.audio.forEach((element) => {
                            this.allSermons.push(element);
                        });
                        if (this.allSermons.length != 0) {
                            // filtering out data which have URL
                            this.allSermons = this.allSermons.filter((x) => x.enclosure["@attributes"].url != "");
                            this.allSermons.map((y) => {
                                y["audio_link"] = this.dom.bypassSecurityTrustUrl(y.enclosure["@attributes"].url);
                                y["share_link"] = y.enclosure["@attributes"].url;
                                y["isPlaying"] = false;
                                y['isDownloaded'] = false;
                            });
                            this.newFeeds = this.allSermons;
                            this.newFeeds.map((x) => {
                                x.comments.map((item) => {
                                    try {
                                        item.comment = JSON.parse(item.comment);
                                    }
                                    catch (_a) {
                                        item.comment = item.comment;
                                    }
                                });
                            });
                            this.settingSeek();
                            event.target.complete();
                        }
                        else {
                            this.toast.presentToastWithOptions(this.alertMessage
                                ? this.alertMessage.NoAudio
                                : "No Audio Available", this.alertMessage
                                ? this.alertMessage.WarningMessage
                                : "Warning Message", "warning");
                        }
                    }
                });
                ``;
            }
            else {
                event.target.complete();
            }
        }
        else {
            event.target.complete();
        }
    }
    getXMLRss(sermon_url) {
        this.loader.presentLoading().then(() => {
            let self = this;
            // fetching data through service
            this.sermonsService.getrss(sermon_url).subscribe((res) => {
                this.fetchMethod = 'rss';
                if (res && res.status === true && res.data && res.data.status === "ok") {
                    // Assigning data to variable
                    this.allSermons = res.data.items;
                    if (self.allSermons.length != 0) {
                        // filtering out data which have URL
                        self.allSermons = self.allSermons.filter((x) => x.enclosure.link != "");
                        self.allSermons.map((y) => {
                            y["a_link"] = y.link;
                        });
                        // Saving all feeds in database through API call in service
                        // so that we can also save comments for every Audio Post
                        const body = JSON.stringify({
                            church_id: self.ch_id,
                            apppage_id: self.apppage_id,
                            feed_type: "audio",
                            feed_array: this.allSermons,
                        });
                        self.sermonsService
                            .create_Audio_Feeds_array(body)
                            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (res && res.status) {
                                // if loop iteration is equal to length of data, its time to fetch what we have saved
                                self.load_xml_rss();
                            }
                        }));
                    }
                    this.loader.stopLoading();
                }
            }, (err) => {
                // If API Call receives any error
                let message = err.message;
                this.loader.stopLoading();
                this.toast.presentToastWithOptions(this.alertMessage
                    ? this.alertMessage.AudioURLNotWorking
                    : "Audio URL not working, Try Again", this.alertMessage
                    ? this.alertMessage.WarningMessage
                    : "Warning Message", "warning");
            });
        });
    }
    getSermonsFromWordpress(base_url) {
        this.loader.presentLoading().then(() => { });
        let self = this;
        if (this.external_server) {
            let body = {
                url: base_url,
                method: "getFeed",
            };
            let _body = JSON.stringify(body);
            // fetching sermon data through service
            this.sermonsService.getFeed(_body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.fetchMethod = 'wrodpress';
                // parsing fetched sermon data from XML to JSON format
                let all = res.result.channel.item;
                let sermons = [];
                if (all.length != 0) {
                    // filtering out sermon with the sermon id from url
                    for (let x = 0; x < all.length; x++) {
                        var obj = {};
                        if (all[x].audio_link &&
                            all[x].audio_link != "" &&
                            JSON.stringify(all[x].audio_link) != "{}") {
                            sermons.push(all[x]);
                        }
                        else if (all[x].enclosure &&
                            all[x].enclosure["@attributes"]["url"] &&
                            all[x].enclosure["@attributes"]["url"] != "") {
                            sermons.push(all[x]);
                        }
                    }
                    self.allSermons = sermons;
                    self.allSermons.map((y) => {
                        y["a_link"] = y.link;
                        y["title"] = y.title;
                        y["isPlaying"] = false;
                        y['isDownloaded'] = false;
                    });
                    // Saving all feeds in database through API call in service
                    // so that we can also save comments for every Audio Post
                    const body = JSON.stringify({
                        church_id: self.ch_id,
                        apppage_id: self.apppage_id,
                        feed_type: "audio",
                        feed_array: this.allSermons,
                    });
                    self.sermonsService
                        .create_Audio_Feeds_array(body)
                        .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (res && res.status) {
                            // if loop iteration is equal to length of data, its time to fetch what we have saved
                            self.load_feed();
                        }
                    }));
                }
                this.loader.stopLoading();
            }), (err) => {
                // If API Call receives any error
                let message = err.message;
                this.loader.stopLoading();
                this.toast.presentToastWithOptions(this.alertMessage
                    ? this.alertMessage.error_occured_try_again
                    : "Error Occured, Try Again", this.alertMessage
                    ? this.alertMessage.WarningMessage
                    : "Warning Message", "warning");
            });
        }
        else {
            // fetching sermon data through service
            this.sermonsService.getAllSermons(base_url, this.page).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = res.data;
                self.allSermons = data.item;
                this.total_page_in_pagination = res.total_pages;
                this.fetchMethod = 'wordpress';
                if (self.allSermons.length != 0) {
                    // filtering out sermon with the sermon id from url
                    self.allSermons = self.allSermons.filter(x => x.enclosure.link != '');
                    this.newFeeds = this.allSermons;
                    self.allSermons.map(y => {
                        y['a_link'] = y.audio_link || "";
                        y["title"] = y.title;
                        y['audio_link'] = this.dom.bypassSecurityTrustUrl(y.enclosure['@attributes'].url);
                        y['share_link'] = y.enclosure['@attributes'].url;
                    });
                    this.settingSeek();
                    // Saving all feeds in database through API call in service
                    // so that we can also save comments for every Audio Post
                    const body = JSON.stringify({
                        church_id: self.ch_id,
                        apppage_id: self.apppage_id,
                        feed_type: "audio",
                        feed_array: this.allSermons,
                    });
                    self.sermonsService
                        .create_Audio_Feeds_array(body)
                        .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (res && res.status) {
                            // if loop iteration is equal to length of data, its time to fetch what we have saved
                            self.load_feed();
                        }
                    }));
                }
                this.loader.stopLoading();
            }), (err) => {
                // If API Call receives any error
                let message = err.message;
                this.loader.stopLoading();
                this.toast.presentToastWithOptions(this.alertMessage
                    ? this.alertMessage.error_occured_try_again
                    : "Error Occured, Try Again", this.alertMessage
                    ? this.alertMessage.WarningMessage
                    : "Warning Message", "warning");
            });
        }
    }
    load_feed() {
        let self = this;
        // Loading all saved Feeds
        self.sermonsService
            .get_feeds(this.apppage_id, "audio")
            .subscribe((res) => {
            if (res && res.feed) {
                let new_feed = res.feed;
                if (new_feed.length > 0) {
                    // filtering out data fetched from database one by one which matches the data we fetched from rss feed
                    // so that we only get data which we want, not the whole table
                    new_feed.map((x) => {
                        x["isPlaying"] = false;
                        x['isDownloaded'] = false;
                        x.comments.map((item) => {
                            try {
                                item.comment = JSON.parse(item.comment);
                            }
                            catch (_a) {
                                item.comment = item.comment;
                            }
                            let mytime = moment__WEBPACK_IMPORTED_MODULE_13__(item.comment_time);
                            let time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                            if (time_diff != 0) {
                                item.comment_time = this.appService.getDateTimeFormat(mytime);
                            }
                            else {
                                item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                            }
                        });
                        if (this.external_server) {
                            // filtering data matching url and title
                            let audio = this.allSermons.filter((y) => y.link === x.link && y.title === x.name);
                            if (audio.length > 0) {
                                // passing audio url from dom sanitizer for security purpose
                                if (audio[0].audio_link &&
                                    audio[0].audio_link != "" &&
                                    JSON.stringify(audio[0].audio_link) != "{}") {
                                    x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].audio_link);
                                }
                                else if (audio[0].enclosure["@attributes"]["url"] &&
                                    audio[0].enclosure["@attributes"]["url"] != "") {
                                    x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].enclosure["@attributes"]["url"]);
                                }
                                x["share_link"] = x.link;
                                x["creator"] = audio[0]["dc:creator"];
                                x["pubDate"] = audio[0]["pubDate"];
                                x["isPlaying"] = false;
                                x['isDownloaded'] = false;
                            }
                            else {
                                // if current data does not match, we set status to false, by which we can filter data later
                                x["status"] = false;
                            }
                        }
                        else {
                            // filtering data matching url and title
                            let audio = this.allSermons.filter((y) => y.link === x.link && y.title === x.name);
                            if (audio.length > 0) {
                                // passing audio url from dom sanitizer for security purpose
                                x["isPlaying"] = false;
                                x['isDownloaded'] = false;
                                if (audio[0].audio_link &&
                                    audio[0].audio_link != "" &&
                                    JSON.stringify(audio[0].audio_link) != "{}") {
                                    if (audio[0].audio_link instanceof Array) {
                                        x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].audio_link[0]);
                                    }
                                    else {
                                        x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].audio_link);
                                    }
                                }
                                else if (audio[0].enclosure["@attributes"]["url"] &&
                                    audio[0].enclosure["@attributes"]["url"] != "") {
                                    x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].enclosure["@attributes"]["url"]);
                                }
                                x["share_link"] = x.link;
                                x["creator"] = audio[0]["dc:creator"];
                                x["pubDate"] = audio[0]["pubDate"];
                                x['get_podcast_image'] = audio[0]['get_podcast_image'];
                            }
                            else {
                                // if current data does not match, we set status to false, by which we can filter data later
                                x["status"] = false;
                            }
                        }
                    });
                }
                // assigning only data whose status is not FALSE
                this.newFeeds = new_feed.filter((x) => x.status !== false);
                this.checkDownloads();
            }
        });
    }
    checkDownloads() {
        //Checking files which already downloaded
        if (this.platform.is('android')) {
            this.newFeeds.forEach((e, i) => {
                this.file.checkFile(this.file.externalApplicationStorageDirectory + 'radioBase/', e.name + '.mp3').then((result) => {
                    this.newFeeds[i].isDownloaded = result;
                }).catch((err) => {
                });
            });
        }
        else if (this.platform.is('ios')) {
            this.newFeeds.forEach((e, i) => {
                this.file.checkFile(this.file.documentsDirectory + 'radioBase/', e.name + '.mp3').then((result) => {
                    this.newFeeds[i].isDownloaded = result;
                }).catch((err) => {
                });
            });
        }
    }
    settingSeek() {
        this.cardIndex = this.resumableArray.findIndex(elem => {
            if (elem.id === this.page_id) {
                return true;
            }
        });
        if (this.resumableArray[this.cardIndex].seekValues.length < 1) { //check if seekValues array have data or not
            this.newFeeds.forEach((e, i) => {
                this.lastSeekArray.push({ value: 0, name: e.name, progress: 0, duration: 0, pubDate: e.pubDate });
                this.resumableArray.splice(this.cardIndex, 1, { id: this.resumableArray[this.cardIndex].id, title: this.resumableArray[this.cardIndex].title, seekValues: this.lastSeekArray });
            });
        }
        else {
            this.newFeeds.forEach((e, i) => {
                this.resumeSeek = this.resumableArray[this.cardIndex].seekValues;
                e['progress'] = 0;
                e['duration'] = 0;
                e['value'] = 0;
                this.resumeSeek.forEach((value, ind) => {
                    if (e.pubDate === value.pubDate) {
                        e['progress'] = value.progress;
                        e['duration'] = value.duration;
                        e['value'] = value.value;
                    }
                });
                this.lastSeekArray.push({ value: e['value'], name: e.name, progress: e['progress'], duration: e['duration'], pubDate: e.pubDate });
                this.resumableArray.splice(this.cardIndex, 1, { id: this.resumableArray[this.cardIndex].id, title: this.resumableArray[this.cardIndex].title, seekValues: this.lastSeekArray });
            });
        }
        localStorage.setItem('resumableValues', JSON.stringify(this.resumableArray));
    }
    load_rss_feed() {
        let self = this;
        // Loading all saved Feeds
        self.sermonsService
            .get_feeds(this.apppage_id, "audio")
            .subscribe((res) => {
            if (res && res.feed) {
                let new_feed = res.feed;
                if (new_feed.length > 0) {
                    // Matching data we got from RSS and from Database
                    // so that we only get data which we want, not the whole table
                    new_feed.map((x) => {
                        x.comments.map((item) => {
                            try {
                                item.comment = JSON.parse(item.comment);
                            }
                            catch (_a) {
                                item.comment = item.comment;
                            }
                        });
                        let audio;
                        // filtering data matching url and title
                        if (x.name === "") {
                            audio = this.allSermons.find((y) => y.enclosure["@attributes"].url === x.link);
                        }
                        else {
                            audio = this.allSermons.find((y) => y.enclosure["@attributes"].url === x.link &&
                                y.title === x.name);
                        }
                        if (audio) {
                            // passing audio url from dom sanitizer for security purpose
                            x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio.enclosure["@attributes"].url);
                            x["isPlaying"] = false;
                            x['isDownloaded'] = false;
                        }
                        else {
                            // if current data does not match, we set status to false, by which we can filter required data later
                            x["status"] = false;
                        }
                    });
                }
                // assigning only data whose status is not FALSE
                this.newFeeds = new_feed.filter((x) => x.status !== false);
                this.checkDownloads();
            }
        });
    }
    load_xml_rss() {
        let self = this;
        // Loading all saved Feeds
        self.sermonsService
            .get_feeds(this.apppage_id, "audio")
            .subscribe((res) => {
            if (res && res.feed) {
                let new_feed = res.feed;
                // Matching data we got from RSS and from Database
                // so that we only get data which we want, not the whole table
                new_feed.map((x) => {
                    x.comments.map((item) => {
                        try {
                            item.comment = JSON.parse(item.comment);
                        }
                        catch (_a) {
                            item.comment = item.comment;
                        }
                    });
                    let audio = this.allSermons.filter((y) => y.link === x.link && y.title === x.name);
                    if (audio.length > 0) {
                        // passing audio url from dom sanitizer for security purpose
                        x["audio_link"] = this.dom.bypassSecurityTrustUrl(audio[0].enclosure.link);
                        x["share_link"] = audio[0].enclosure.link;
                        x["creator"] = audio[0].author;
                        x["isPlaying"] = false;
                        x['isDownloaded'] = false;
                    }
                    else {
                        // if current data does not match, we set status to false, by which we can filter required data later
                        x["status"] = false;
                    }
                });
                // assigning only data whose status is not FALSE
                this.newFeeds = new_feed.filter((x) => x.status !== false);
                this.checkDownloads();
            }
        });
    }
    getUser() {
        // Getting User from local storage
        this.storage.get("user").then((res) => {
            if (res != null && res != "guest") {
                this.isUserLoggedIn = true;
                this.account_donor_id = res.user.id;
                this.auth = res.auth;
                this.gender = res.user.gender;
                this.age = res.user.birthday;
                this.user = res;
            }
        });
        this.device_id = localStorage.getItem('device_id');
    }
    create_comment(feed_id, index) {
        if (!this.comments[index]) {
            // show message if Comment box is empty
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.comment_field_empty
                : "Comment field is empty", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
        }
        else {
            var date;
            if (this.theme.timezone) {
                date = moment__WEBPACK_IMPORTED_MODULE_13__().format("YYYY-MM-DD HH:mm:ss");
            }
            else {
                if (this.theme.timezone) {
                    date = moment__WEBPACK_IMPORTED_MODULE_13__();
                }
                else {
                    date = moment__WEBPACK_IMPORTED_MODULE_13__().format("YYYY-MM-DD HH:mm:ss");
                }
            }
            if (this.isUserLoggedIn) {
                if (this.is_wordpress_enable) {
                    // preparing data for creating comment
                    const body = JSON.stringify({
                        auth: "Bearer " + this.auth.access_token,
                        church_id: this.ch_id,
                        sermon_id: feed_id,
                        page_type: "audio",
                        account_donor_id: this.account_donor_id,
                        comment: this.comments[index],
                        comment_time: date,
                    });
                    // calling service to save comment data
                    this.sermonsService
                        .create_Audio_Feed_comment_DB(body)
                        .subscribe((res) => {
                        // Calling ngOnInit() function to load the page so that latest data is loaded which will have saved comment too
                        this.ngOnInit();
                        // emptying comment variable after comment has been saved
                        this.comment = "";
                    });
                }
                else {
                    // preparing data for creating comment
                    const body = JSON.stringify({
                        auth: "Bearer " + this.auth.access_token,
                        church_id: this.ch_id,
                        feed_id: feed_id,
                        account_donor_id: this.account_donor_id,
                        comment: this.comments[index],
                        comment_time: date,
                    });
                    // calling service to save comment data
                    this.sermonsService
                        .create_Audio_Feed_comment(body)
                        .subscribe((res) => {
                        // Calling ngOnInit() function to load the page so that latest data is loaded which will have saved comment too
                        this.ngOnInit();
                        // emptying comment variable after comment has been saved
                        this.comment = "";
                    });
                }
            }
            else {
                // showing message when user is not logged In
                this.toast.presentToastWithOptions(this.alertMessage
                    ? this.alertMessage.login_to_comment
                    : "Login to Comment", this.alertMessage ? this.alertMessage.warning : "Warning", "warning");
                // and user is navigated to Login Page
                this.router.navigate(["/login"]);
            }
        }
    }
    gotobackPage() {
        this.location.back();
    }
    setAnalytics() {
        let dev_id = "";
        let device = "web";
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_13__["duration"](end_time_analytics.diff(this.start_time_analytics))
            .asSeconds();
        // preparing user data
        let userId = this.isUserLoggedIn ? this.account_donor_id : "guest";
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.custom_name,
            custom_name: this.page_name,
            ip_address: "",
            device: device,
            device_id: dev_id,
            client_type: userId,
            event_type: "",
        });
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe((res) => { });
    }
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    ionViewDidLeave() {
        this.setAnalytics();
        this.event_provider.setAudioPlayer(true);
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
    }
    presentPopover(ev, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_18__["EmojiComponent"],
                cssClass: "emji-popover",
                componentProps: {
                    show_emoji: true,
                },
                event: ev,
                translucent: true,
            });
            popover.onDidDismiss().then((res) => {
                if (res.data && res.data.event) {
                    if (this.comments[index] === undefined) {
                        this.comments[index] = "";
                    }
                    this.comments[index] += res.data.event.char;
                }
            });
            return yield popover.present();
        });
    }
    download(data, index) {
        // console.log('downlaoding: ', data,);
        const url = data.audio_link['changingThisBreaksApplicationSecurity'];
        this.index = index;
        this.isDownloadActive[index] = !this.isDownloadActive[index];
        this.isSharingActive[index] = false;
        this.isCastingActive[index] = false;
        // this.isDownloadActive = true;
        this.showComments[index] = false;
        if (this.isDownloadActive[index] === true) {
            // if(this.isUserLoggedIn) {
            const dataBody = {
                device_id: this.device_id,
                user_id: this.account_donor_id ? this.account_donor_id : '',
                file_url: data.audio_link['changingThisBreaksApplicationSecurity'],
                file_type: 'audio',
                file_name: data.name,
                file_description: '',
                file_thumbnail_url: data.audio_link['changingThisBreaksApplicationSecurity']
            };
            this.downloadService.addFileToDownloads(dataBody).subscribe((res) => {
                if (res.status) {
                    // this.alertMessage = 'File added to downloads'
                    // this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Success'), (this.alertMessage), 'Success');
                }
            });
            // if(this.platform.is('mobileweb')) {
            //     this.toast.presentToastWithOptions('You must be log in for downloading from web' , 'Sorry' , 'warning')
            //     this.isDownloadActive[index] = false;
            // }
            if (this.platform.is('android')) {
                this.file.checkDir(this.file.externalApplicationStorageDirectory, 'radioBase').then(e => {
                    if (e === true) {
                        this.file.checkFile(this.file.externalApplicationStorageDirectory + 'radioBase/', data.name + '.mp3').then((result) => {
                            this.toast.presentToastWithOptions('File Already Downloaded', 'Sorry', 'warning');
                            this.isDownloadActive[index] = false;
                        }).catch((err) => {
                            this.isDownloading[index] = true;
                            this.toast.presentToastWithOptions('Downloading is in progress', 'Please Wait...', 'success');
                            this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + 'radioBase/' + data.name + '.mp3').then((entry) => {
                                if (entry) {
                                    this.isDownloading[index] = false;
                                    this.toast.presentToastWithOptions('Download Succeed', 'Thanks', 'success');
                                    this.newFeeds[index].isDownloaded = true;
                                    this.isDownloadActive[index] = false;
                                }
                            }).catch((err) => {
                                this.isDownloading[index] = false;
                                this.toast.presentToastWithOptions(err, 'Sorry', 'danger');
                            });
                        });
                    }
                }).catch((err) => {
                    this.file.createDir(this.file.externalApplicationStorageDirectory, 'radioBase', false).then(e => {
                        this.isDownloading[index] = true;
                        this.toast.presentToastWithOptions('Downloading is in progress', 'Please Wait...', 'success');
                        this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + 'radioBase/' + data.name + '.mp3').then((entry) => {
                            if (entry) { //If file downloaded
                                this.isDownloading[index] = false;
                                this.toast.presentToastWithOptions('Download Succeed', 'Thanks', 'success');
                                this.newFeeds[index].isDownloaded = true;
                                this.isDownloadActive[index] = false;
                            }
                        }).catch((err) => {
                            this.isDownloading[index] = false;
                            this.toast.presentToastWithOptions(err, 'Sorry', 'danger');
                        });
                    });
                });
            }
            else if (this.platform.is('ios')) {
                this.file.checkDir(this.file.documentsDirectory, 'radioBase').then(e => {
                    if (e === true) {
                        this.file.checkFile(this.file.documentsDirectory + 'radioBase/', data.name + '.mp3').then((result) => {
                            this.toast.presentToastWithOptions('File Already Downloaded', 'Sorry', 'warning');
                            this.isDownloadActive[index] = false;
                        }).catch((err) => {
                            this.isDownloading[index] = true;
                            this.toast.presentToastWithOptions('Downloading is in progress', 'Please Wait...', 'success');
                            this.fileTransfer.download(url, this.file.documentsDirectory + 'radioBase/' + data.name + '.mp3').then((entry) => {
                                if (entry) {
                                    this.isDownloading[index] = false;
                                    this.toast.presentToastWithOptions('Download Succeed', 'Thanks', 'success');
                                    this.newFeeds[index].isDownloaded = true;
                                    this.isDownloadActive[index] = false;
                                }
                            }).catch((err) => {
                                this.isDownloading[index] = false;
                                this.toast.presentToastWithOptions(err, 'Sorry', 'danger');
                            });
                        });
                    }
                }).catch((err) => {
                    this.file.createDir(this.file.documentsDirectory, 'radioBase', false).then(e => {
                        this.isDownloading[index] = true;
                        this.toast.presentToastWithOptions('Downloading is in progress', 'Please Wait...', 'success');
                        this.fileTransfer.download(url, this.file.documentsDirectory + 'radioBase/' + data.name + '.mp3').then((entry) => {
                            if (entry) { //If file downloaded
                                this.isDownloading[index] = false;
                                this.toast.presentToastWithOptions('Download Succeed', 'Thanks', 'success');
                                this.newFeeds[index].isDownloaded = true;
                                this.isDownloadActive[index] = false;
                            }
                        }).catch((err) => {
                            this.isDownloading[index] = false;
                            this.toast.presentToastWithOptions(err, 'Sorry', 'danger');
                        });
                    });
                });
            }
            // } else {
            //   this.toast.presentToastWithOptions('You must have to login for download this audio', 'sorry', 'warning')
            //   this.isDownloadActive[index] = false;
            // }
        }
    }
    commentsActive(index) {
        this.index = index;
        this.showComments[index] = !this.showComments[index];
        this.isSharingActive[index] = false;
        this.isCastingActive[index] = false;
        this.isDownloadActive[index] = false;
        // this.isCommentsActive = true
    }
    successCallback(result) {
        console.log(result); // true - enabled, false - disabled
    }
    errorCallback(error) {
        console.log(error);
    }
    castingModel(audio, session) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.newFeeds.length; i++) {
                if (this.newFeeds[i].audio_link["changingThisBreaksApplicationSecurity"] ==
                    audio["changingThisBreaksApplicationSecurity"]) {
                    const modal = yield this.modalController.create({
                        component: _listening_modal_listening_modal_component__WEBPACK_IMPORTED_MODULE_23__["ListeningModalComponent"],
                        componentProps: {
                            audioList: this.newFeeds,
                            index: i,
                            session: session,
                        },
                    });
                    return yield modal.present();
                }
            }
        });
    }
    // async name(){
    //     const modal = await this.modalController.create({
    //         component: ListeningModalComponent,
    //         componentProps: {
    //             'audioList': this.newFeeds,
    //             'index': "i",
    //             "session":"session",
    //           }
    //     });
    //     return await modal.present();
    // }
    castAud(url, index) {
        console.log(url, index);
        if (url["changingThisBreaksApplicationSecurity"]) {
            url = url["changingThisBreaksApplicationSecurity"];
        }
        if (url["changingThisBreaksApplicationSecurity"] && url["changingThisBreaksApplicationSecurity"].includes("soundcloud.com")) {
            // url = "https://w.soundcloud.com/player/?url=" + url['changingThisBreaksApplicationSecurity'];
            // url = this.dom.bypassSecurityTrustResourceUrl(url);
            alert("Soundcloud audio is not supported");
        }
        else {
            this.casting.createChromeCasting(url);
            setTimeout(() => {
                console.log("else");
                if ((this.casting.session && this.casting.session != '') && (this.casting._media || this.casting._media !== '') && (this.casting.playURl === url)) {
                    this.casting.requestSession(url, "audio-archieve", index);
                }
                else if ((this.casting.session && this.casting.session != '') && (this.casting._media || this.casting._media !== '') && (this.casting.playURl !== url)) {
                    this.casting.changeAudio(url, "audio-archieve", index);
                }
                else {
                    this.casting.requestSession(url, "audio-archieve", index);
                }
            }, 3000);
        }
    }
};
AudioArchivePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"] },
    { type: src_services_casting_service__WEBPACK_IMPORTED_MODULE_24__["CastingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonInfiniteScroll"])
], AudioArchivePage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("range", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonRange"])
], AudioArchivePage.prototype, "range", void 0);
AudioArchivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-audio-archive",
        template: __webpack_require__(/*! raw-loader!./audio-archive.page.html */ "./node_modules/raw-loader/index.js!./src/app/audio-archive/audio-archive.page.html"),
        styles: [__webpack_require__(/*! ./audio-archive.page.scss */ "./src/app/audio-archive/audio-archive.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["PopoverController"],
        src_services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"],
        src_services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"],
        src_services_casting_service__WEBPACK_IMPORTED_MODULE_24__["CastingService"]])
], AudioArchivePage);



/***/ })

}]);
//# sourceMappingURL=audio-archive-audio-archive-module-es2015.js.map