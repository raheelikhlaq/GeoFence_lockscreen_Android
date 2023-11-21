(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sermon-detail-sermon-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sermon-detail/sermon-detail.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sermon-detail/sermon-detail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'SERMONS.sermon_detail' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div _ngcontent-asy-c9=\"\" class=\"backBtn-wrapper hide-mobile\">\n        <ion-button _ngcontent-asy-c9=\"\" class=\"commonBtn commonBtn--dark commonBtn--round md button button-solid ion-activatable ion-focusable hydrated\" (click)=\"gotobackPage()\">\n            <ion-icon _ngcontent-asy-c9=\"\" name=\"arrow-back\" ng-reflect-name=\"arrow-back\" role=\"img\" class=\"md hydrated\" aria-label=\"arrow back\"></ion-icon>\n            &nbsp; Back\n         </ion-button></div>\n    <div class=\"page-wrapper\" *ngIf=\"selectedSermon\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <h2 class=\"heading2\">{{title}}</h2>\n            </div>\n            <div class=\"mb-30\">\n                <ion-row>\n                    <ion-col [size]=\"12\">\n                        <!-- CARD FOR VIDEO-->\n                        <ion-card\n                                class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\"\n                                *ngIf=\"sermon_video_url && !isAudioOnly\">\n                            <div class=\"ion-padding-horizontal\" *ngIf=\"sermon_video_url\">\n                                <div *ngIf=\"wasabi\">\n                                    <video  width=\"100%\" crossOrigin=\"anonymous\" height=\"100%\" controls=\"controls\"\n                                    autoplay=\"autoplay\" [src]=\"sermon_video_url\" type=\"video/mp4\">\n                                 <!-- <source [src]=\"sermon_video_url\" type=\"video/mp4\"> -->\n                             </video>\n                                </div>\n                                <div *ngIf=\"!wasabi\" class=\"embed-responsive embed-responsive-16by9\">\n                                    <iframe class=\"embed-responsive-item\" \n                                            [src]=\"sermon_video_url\"\n                                            frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                                </div>\n                            </div>\n                            <ion-card-content>\n                                <ion-row class=\"ion-align-items-center\">\n                                    <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\" [innerHtml]=\"sermon_title\"></ion-card-title>\n                                        <p><b>{{sermon_speaker}}</b></p>\n                                        <p>{{appService.getDateTimeFormat(sermon_pubdate)}}</p>\n                                    </ion-col>\n                                    <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"ion-no-padding ion-text-md-right\">\n                                        <ul class=\"list-inline ion-no-margin\">\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_audio\">\n                                                <ion-button (click)=\"openAudio()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\" [ngClass]=\"{'activeBtn': audio_player}\">\n                                                    <ion-icon name=\"headset\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_notes\">\n                                                <ion-button (click)=\"openInBrowser()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"journal\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li *ngIf=\"notes_icon\" class=\"list-inline-item\">\n                                                <ion-button (click)=\"openNotes()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"book\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\">\n                                                <ion-button (click)=\"openModal()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"share-alt\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\">\n                                                <ion-button [class.activeBtn]=\"casting.castingActive && casting.castingPage == 'sermon-detail' \"    (click)=\"startCasting(sermon_audio , false)\" class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon style=\"font-size: 24px;\" src=\"../../../assets/img/cast.svg\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\" *ngIf=\"isLoggedIn\">\n                                                <ion-button (click)=\"download()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"cloud-download-outline\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                        </ul>\n                                        <div class=\"ion-padding-horizontal\" *ngIf=\"audio_player\">\n                                            <div class=\"ion-padding-horizontal\" *ngIf=\"soundcloud\">\n                                                <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\"\n                                                        allow=\"autoplay\" [src]=\"sermon_audio\"></iframe>\n                                            </div>\n                                            <app-audio-player [page_id]=\"page_id\" [fromPage] = \"'shows'\" [audioData]=\"selectedSermon\" [method]=\"'getAllSermons'\" [audioTitle]=\"sermon_title\" [audioUrl]=\"sermon_audio\" [isSermon]=\"true\"\n                                                              *ngIf=\"!soundcloud && sermon_audio\"></app-audio-player>\n                                            <!-- <audio *ngIf=\"!soundcloud\" controls>\n                                            <source [src]=\"sermon_audio\"\n                                                    type=\"audio/ogg\">\n                                            <source [src]=\"sermon_audio\"\n                                                    type=\"audio/mpeg\">\n                                            Your browser does not support the audio element.\n                                            </audio> -->\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n\n                        <!-- Card For Audio Only Files -->\n                        <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\" *ngIf=\"isAudioOnly\">\n\n\n\n                            <ion-card-content>\n\n\n                                <div style=\"margin: 10px 0 auto;\">\n                                    <div *ngIf=\"soundcloud\">\n                                        <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\"\n                                                allow=\"autoplay\" [src]=\"sermon_audio\"></iframe>\n                                    </div>\n                                    <audio *ngIf=\"!soundcloud\" controls>\n                                        <source [src]=\"sermon_audio\" type=\"audio/ogg\">\n                                        <source [src]=\"sermon_audio\" type=\"audio/mpeg\">\n                                        Your browser does not support the audio element.\n                                    </audio>\n                                </div>\n\n                                <ion-row class=\"ion-align-items-center\">\n                                    <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\" [innerHtml]=\"sermon_title\"></ion-card-title>\n                                        <p><b>{{sermon_speaker}}</b></p>\n                                        <p>{{sermon_pubdate}}</p>\n                                    </ion-col>\n                                    <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"ion-no-padding ion-text-md-right\">\n                                        <ul class=\"list-inline ion-no-margin\">\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_audio\">\n                                                <ion-button (click)=\"openAudio()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"headset\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_notes\">\n                                                <ion-button [href]=\"sermon_notes\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"journal\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li *ngIf=\"notes_icon\" class=\"list-inline-item\">\n                                                <ion-button (click)=\"openNotes()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"book\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\">\n                                                <ion-button (click)=\"openModal()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"share-alt\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n\n                                        </ul>\n                                        <div *ngIf=\"audio_player\">\n                                            <div *ngIf=\"soundcloud\">\n                                                <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\"\n                                                        allow=\"autoplay\" [src]=\"sermon_audio\"></iframe>\n                                            </div>\n                                            <audio *ngIf=\"!soundcloud\" controls>\n                                                <source [src]=\"sermon_audio\" type=\"audio/ogg\">\n                                                <source [src]=\"sermon_audio\" type=\"audio/mpeg\">\n                                                Your browser does not support the audio element.\n                                            </audio>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n\n\n                        <!-- CARD FOR Image-->\n                        <ion-card *ngIf=\"!sermon_video_url\"\n                                  class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\">\n                            <div *ngIf=\"sermon_image\" class=\"embed-responsive embed-responsive-16by9\">\n                                <img class=\"embed-responsive-item\" [src]=\"sermon_image\"/>\n                            </div>\n                            <div *ngIf=\"!sermon_image\" class=\"embed-responsive embed-responsive-16by9\">\n                                <img class=\"embed-responsive-item\" src=\"assets/img/live_stream_bg_2.jpg\"/>\n                            </div>\n                            <ion-card-content>\n                                <ion-row class=\"ion-align-items-center\">\n                                    <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\" [innerHtml]=\"sermon_title\"></ion-card-title>\n                                        <p><b>{{sermon_speaker}}</b></p>\n                                        <p>{{appService.getDateTimeFormat(sermon_pubdate)}}</p>\n                                    </ion-col>\n                                    <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"ion-no-padding ion-text-md-right\">\n                                        <ul class=\"list-inline ion-no-margin\">\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_audio\">\n                                                <ion-button (click)=\"openAudio()\" target=\"_blank\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small audioBtn\" [ngClass]=\"{'activeBtn': audio_player}\">\n                                                    <ion-icon name=\"headset\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_notes\">\n                                                <ion-button (click)=\"openInBrowser()\"\n                                                class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                <ion-icon name=\"journal\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\">\n                                                <ion-button (click)=\"openModal()\"\n                                                            class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"share-alt\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\">\n                                                <ion-button   [class.activeBtn]=\"casting.castingActive && casting.castingPage == 'sermon-detail' \"  (click)=\"startCasting(sermon_audio ,false)\" class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small audioBtn\">\n                                                    <ion-icon style=\"font-size: 24px;\" src=\"../../../assets/img/cast.svg\"></ion-icon>\n                                                </ion-button>\n                                            </li>\n                                            <li class=\"list-inline-item\" *ngIf=\"sermon_notes\">\n                                                <ion-button *ngIf=\"!downloadService.isDownloaded[sermon_notes] && !downloadService.isDownloading[sermon_notes]\" [class.activeBtn]=\"downloadService.isDownloadActive[sermon_notes] \"\n                                                class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\" (click)=\"downloadNotes()\">\n                                                <ion-icon name=\"download\"></ion-icon>\n                                              </ion-button>\n                                              <!-- if file start downloading -->\n                                              <ion-button *ngIf=\"downloadService.isDownloading[sermon_notes]\" [disabled]=\"downloadService.isDownloading[sermon_notes]\"\n                                                class=\"commonBtn activeBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                <ion-icon name=\"download\"></ion-icon>\n                                              </ion-button>\n                                              <ion-button\n                                                *ngIf=\"downloadService.isDownloaded[sermon_notes]\"\n                                                class=\"commonBtn activeBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                <ion-icon name=\"checkmark\"></ion-icon>\n                                              </ion-button>\n                                                <!-- <ion-button (click)=\"downloadNotes()\"\n                                                    class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                                    <ion-icon name=\"download\"></ion-icon>\n                                                </ion-button> -->\n                                            </li>\n                                        </ul>\n                                    </ion-col>\n                                    <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\" *ngIf=\"audio_player\">\n                                        <app-audio-player [fromPage] = \"'shows'\" [page_id]=\"page_id\" [audioData]=\"selectedSermon\" [method]=\"'getAllSermons'\" [audioTitle]=\"sermon_title\" *ngIf=\"sermon_audio\" [audioUrl]=\"sermon_audio\"></app-audio-player>\n                                        <!-- <audio *ngIf=\"audio_player\" controls>\n                                            <source [src]=\"sermon_audio\"\n                                                    type=\"audio/ogg\">\n                                            <source [src]=\"sermon_audio\"\n                                                    type=\"audio/mpeg\">\n                                            Your browser does not support the audio element.\n                                        </audio> -->\n                                    </ion-col>\n                                </ion-row>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\">\n                        <p class=\"font-weight-normal event-detail-content\" *ngIf=\"sermon_description\"\n                           [innerHtml]=\"sermon_description\"></p>\n                    </ion-col>\n\n                    <h2 class=\"heading2\" style=\"margin-bottom: 0;\"  *ngIf=\"bible_reference_array.length > 0\">{{'SERMONS.Bible_reference' | translate}}</h2>\n                    <ul class=\"tags\" *ngIf=\"bible_reference_array\">\n                        <ng-container  *ngFor=\"let item of bible_reference_array index as i\" >\n                            <li *ngIf=\"i<5 && !bible_reference_clicked\" style=\"cursor: pointer;\" >\n                                <span (click)=\"bibleReferencedItemClicked(item)\">{{item.book_name}} {{item.start_chapter}}:{{item.start_verse}}-{{item.end_chapter}}:{{item.end_verse}}</span>\n                            </li>\n                            <li *ngIf=\"bible_reference_clicked\" (click)=\"bibleReferencedItemClicked(item)\" style=\"cursor: pointer;\" >\n                                {{item.book_name}} {{item.start_chapter}}:{{item.start_verse}}-{{item.end_chapter}}:{{item.end_verse}}\n                            </li>\n                        </ng-container>\n                        <span *ngIf=\"bible_reference_array.length > 5 && !bible_reference_clicked\"  (click)=\"bibleReferenceClicked()\">\n                            <!-- <ul class=\"tags\"> -->\n                                <li>+{{bible_reference_array.length - 5}}</li>\n                            <!-- </ul> -->\n                        </span>\n                    </ul>\n\n                    <ion-col [size]=\"12\">\n                        <div class=\"seroms-commit-section\">\n                            <ion-list lines=\"none\" class=\"ion-margin-top ion-no-padding\">\n                                <ion-item class=\"ionMedia\" *ngFor=\"let comment of selected_comments\">\n                                    <div class=\"ionMedia__media\">\n                                        <ion-avatar slot=\"start\">\n                                            <img src=\"../../assets/img/user_icon.png\">\n                                        </ion-avatar>\n                                    </div>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <h3 class=\"ionMedia__heading\" *ngIf=\"comment.comment_name && !is_wordpress_enable\"> {{comment.comment_name.first_last_name ?\n                                            comment.comment_name.first_last_name : ''}}</h3>\n                                        <h3 class=\"ionMedia__heading\" *ngIf=\"!comment.comment_name && !is_wordpress_enable\"> {{'Anonymous'}}</h3>\n                                        <h3 class=\"ionMedia__heading\" *ngIf=\"!comment.name && is_wordpress_enable\"> {{'Anonymous'}}</h3>\n                                        <h5 class=\"ionMedia__heading\" *ngIf=\"comment.name && is_wordpress_enable\"> {{comment.name}}</h5>\n                                        <p>{{comment.comment}} </p>\n                                        <p style=\" font-size: x-small\"\n                                           class=\"ionMedia__text\">{{appService.getDateTimeFormat(comment.comment_time) }}</p>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item *ngIf=\"selected_comments && selected_comments.length === 0\"\n                                          class=\"inputField  inputField&#45;&#45;gray\" lines=\"none\">\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <p>\n                                            <small>{{'SERMONS.nocommentsyet' | translate}}\n                                                .....<br/>{{'SERMONS.bethefirstone' | translate}}.\n                                            </small>\n                                        </p>\n                                    </ion-label>\n                                </ion-item>\n                            </ion-list>\n                            <div class=\"chat-card-footer\">\n                                <ion-item class=\"inputField\" lines=\"none\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"../../assets/img/user_icon.png\">\n                                    </ion-avatar>\n                                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"comment\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\" inputmode=\"text\"\n                                               placeholder=\"{{'SERMONS.comment' | translate}}\"></ion-input>\n                                               <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event)\">\n                                                <ion-icon name=\"md-happy\"></ion-icon>\n                                            </ion-button> -->\n                                    <ion-button (click)=\"create_comment()\"\n                                                class=\"commonBtn--transparent text-gray\">\n                                        <ion-icon name=\"send\"></ion-icon>\n                                    </ion-button>\n                                </ion-item>\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"mb-30\" *ngIf=\"recentSermons\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"8\">\n                        <h3 *ngIf=\"ch_id !='1577'\" class=\"heading3\">{{'SERMONS.recent_sermons' | translate}}</h3>\n                        <h3 *ngIf=\"ch_id =='1577'\" class=\"heading3\">{{'SERMONS.recent_songs' | translate}}</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"4\" *ngFor=\"let item of recentSermons; let i = index \">\n                        <ion-card class=\"ionCard  cursor-pointer ion-no-margin\"\n                                  (click)=\"getrecentsermon(is_wordpress_enable ? item.id : item.id_series, item.pubDate)\">\n                            <ion-card-content class=\"ion-no-padding\">\n                                <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                                    <ion-thumbnail slot=\"start\" class=\"ionMedia__media ionMedia__media--big\">\n                                        <img *ngIf=\"item.img_series && item.img_series !== ''\" [src]=\"item.img_series\">\n                                        <img *ngIf=\"item.thumbnail &&item.thumbnail !== ''\" [src]=\"item.thumbnail\">\n                                        <img *ngIf=\"item.img_series === '' && item['itunes:image']\" [src]=\"item['itunes:image']['$'].href\"/>\n                                        <img *ngIf=\"item.img_series === '' && !item['itunes:image']\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                    </ion-thumbnail>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <h2 class=\"ionMedia__heading\">{{item.title}}</h2>\n                                        <p class=\"ionMedia__text\">{{item.author}}</p>\n                                    </ion-label>\n                                </ion-item>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n\n\n    <!-- new pwa content -->\n\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/sermon-detail/sermon-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/sermon-detail/sermon-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: SermonDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonDetailPageModule", function() { return SermonDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sermon_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sermon-detail.page */ "./src/app/sermon-detail/sermon-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _sermon_detail_page__WEBPACK_IMPORTED_MODULE_6__["SermonDetailPage"]
    }
];
let SermonDetailPageModule = class SermonDetailPageModule {
};
SermonDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sermon_detail_page__WEBPACK_IMPORTED_MODULE_6__["SermonDetailPage"]]
    })
], SermonDetailPageModule);



/***/ }),

/***/ "./src/app/sermon-detail/sermon-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/sermon-detail/sermon-detail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".audioBtn.active {\n  --color:#F1F1F1;\n  --background-hover:blue;\n  --background: blue;\n}\n\n.activeBtn {\n  --color:#ffffff ;\n  --color-activated: #ffffff;\n  --color-hover: #ffffff;\n  --color-focused: #ffffff;\n  --background: var(--primary-color, #302F34);\n  --border-color:var(--primary-color, #302F34);\n  --background-hover:var(--primary-color, #302F34);\n  --background-activated: var(--primary-color, #302F34);\n  --background-focused: var(--primary-color, #302F34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3Nlcm1vbi1kZXRhaWwvc2VybW9uLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nlcm1vbi1kZXRhaWwvc2VybW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBS0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLG1EQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zZXJtb24tZGV0YWlsL3Nlcm1vbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1ZGlvQnRuLmFjdGl2ZXtcbiAgICAtLWNvbG9yOiNGMUYxRjE7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOmJsdWU7XG4gICAgLS1iYWNrZ3JvdW5kOiBibHVlO1xufVxuLmFjdGl2ZUJ0bntcbiAgICAvLy0tY29sb3I6I0YxRjFGMTtcbiAgICAvLy0tYmFja2dyb3VuZC1ob3ZlcjpibHVlO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiBibHVlO1xuXG4gICAgLS1jb2xvcjojZmZmZmZmIDtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWhvdmVyOiAjZmZmZmZmO1xuICAgIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAgIC0tYm9yZGVyLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG59IiwiLmF1ZGlvQnRuLmFjdGl2ZSB7XG4gIC0tY29sb3I6I0YxRjFGMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOmJsdWU7XG4gIC0tYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmFjdGl2ZUJ0biB7XG4gIC0tY29sb3I6I2ZmZmZmZiA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWhvdmVyOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYm9yZGVyLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/sermon-detail/sermon-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/sermon-detail/sermon-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: SermonDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonDetailPage", function() { return SermonDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_casting_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/casting.service */ "./src/services/casting.service.ts");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_services_bible_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/services/bible.service */ "./src/services/bible.service.ts");




























// import { saveAs } from 'file-saver';
let SermonDetailPage = class SermonDetailPage {
    constructor(route, loader, storage, socialSharing, sermonsService, dom, apiService, router, location, appService, toast, modalController, translate, iab, event_provider, popoverController, platform, common, downloadService, casting, document, file, ft, fileOpener, http, _bibleService) {
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.apiService = apiService;
        this.router = router;
        this.location = location;
        this.appService = appService;
        this.toast = toast;
        this.modalController = modalController;
        this.translate = translate;
        this.iab = iab;
        this.event_provider = event_provider;
        this.popoverController = popoverController;
        this.platform = platform;
        this.common = common;
        this.downloadService = downloadService;
        this.casting = casting;
        this.document = document;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.http = http;
        this._bibleService = _bibleService;
        this.wasabi = false;
        this.audio_player = false;
        this.recentSermons = [];
        this.selected_comments = [];
        this.isLoggedIn = false;
        this.notes_icon = false;
        this.soundcloud = false;
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
        this.title = "";
        this.isAudioOnly = false;
        this.deviceType = '';
        this.isDownloadActive = false;
        this.topics_array = [];
        this.bible_reference_array = [];
        this.topics_clicked = false;
        this.bible_reference_clicked = false;
        this.sermonid = this.route.snapshot.paramMap.get('id');
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // assigning data from URL Params
        this.pageid = this.route.snapshot.paramMap.get('page_id');
        this.event_provider.getChurchData.subscribe((obj) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.is_wordpress_enable = false;
            if ((Object.keys(obj).length === 0)) {
                return;
            }
            // setting sermon url
            this.storage.get('app_pages').then(res => {
                // filtering out SERMONS page
                let sermon_page = res.filter(x => x.id === this.pageid);
                this.apppage_id = sermon_page[0].id;
                this.sermons_url = sermon_page[0].url;
                this.page_id = sermon_page[0].id;
                this.ch_id = sermon_page[0].church_id;
                this.title = sermon_page[0].title;
                let notes = res.filter(x => x.page_type === 'page' && x.name === 'Show Notes');
                if (notes.length > 0) {
                    this.notes_icon = true;
                }
                if (obj.is_wordpress_enable == '1') {
                    this.is_wordpress_enable = true;
                    this.getSermonsFromCMS();
                }
                else {
                    // getting sermons from URL
                    // assigning data from URL Params
                    this.sermonid = this.route.snapshot.paramMap.get('id');
                    this.idseries = this.route.snapshot.paramMap.get('idseries');
                    this.urlPubDate = this.route.snapshot.paramMap.get('date');
                    if (this.sermons_url.includes('.rss') || this.sermons_url.includes('-rss')) {
                        // if url is .rss feed
                        this.getRss(this.apppage_id, this.ch_id);
                    }
                    else {
                        this.getSermonsFromWordpress(this.sermons_url);
                    }
                }
            });
        }));
        // this.event_provider.chromeCasting.subscribe(
        //     (res) => {
        //         if(res.flag == "startCasting" && res.page == "sermon-detail" ){
        //             this.startCasting(res.value , true)
        //         }
        //     }
        // );
    }
    getSermonsFromCMS() {
        //  console.log('inside the cmsssss');
        this.apiService.getSermon(this.ch_id, this.sermonid).subscribe((res) => {
            this.link_type = "sermon";
            this.selectedSermon = res.sermons;
            this.selectedSermon['video_link'] = this.selectedSermon.sermon_video_url;
            this.sermon_pubdate = this.selectedSermon.date;
            this.sermon_speaker = this.selectedSermon.wpfc_preacher;
            this.sermon_title = this.selectedSermon.title;
            // this.selectedSermon['img_series'] = this.selectedSermon.featured_media;
            this.selectedSermon['itunes:author'] = this.selectedSermon.wpfc_preacher;
            this.selectedSermon.des = this.selectedSermon.sermon_description;
            this.selectedSermon.sermon_note = this.selectedSermon.sermon_note_url != null ? this.selectedSermon.sermon_note_url : '';
            this.selectedSermon.audio_link = this.selectedSermon.sermon_audio != null ? this.selectedSermon.sermon_audio : '';
            this.selectedSermon['img_series'] = this.selectedSermon.featured_media ? this.selectedSermon.featured_media : '';
            this.selected_comments = this.selectedSermon.comments;
            this.sermon_image = this.selectedSermon.featured_media ? this.selectedSermon.featured_media : '';
            if (this.sermon_image !== "" && this.sermon_image !== null && this.sermon_image.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.selectedSermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                let abc = this.sermon_image.split("/");
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
                let new_link = this.sermon_image.replace(folder_name, this.deviceType);
                this.sermon_image = new_link;
                // console.log('background is: ',this.sermon_image,'new link is: ', new_link);
            }
            this.selectedSermon['thumbnail'] = this.selectedSermon.featured_media ? this.selectedSermon.featured_media : '';
            if (this.selectedSermon.wpfc_bible_book !== '' && this.selectedSermon.wpfc_bible_book !== null) {
                this.bible_reference_array = this.selectedSermon.wpfc_bible_book;
            }
            if (this.selectedSermon.audio_url) {
                this.audio_player = true;
            }
            this.setData();
            this.loader.stopLoading();
        }, (err) => {
            console.log(err);
        });
    }
    ionViewDidLeave() {
        this.event_provider.setAudioPlayer(true);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.getItem('is_wordpress_enable') !== 'true') {
                let done = yield this.sermonsService.getRecentSermons();
                if (done) {
                    this.recentSermons = done;
                }
                else {
                    this.recentSermons = this.recentSermons || [];
                }
            }
            this.getUser();
            this.event_provider.page("sermon-detail");
            this.transfer = this.ft.create();
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
        });
    }
    checkPermissions() {
        window.cordova.plugins.permissions.requestPermissions([
            window.cordova.plugins.permissions.PERMISSION.READ_EXTERNAL_STORAGE,
            window.cordova.plugins.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        ]);
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const modal = await this.modalController.create({
            //     component: SharingModalSermonComponent,
            //     cssClass: 'BibleModal',
            //     backdropDismiss: true,
            //     componentProps: {
            //         link: this.selected_link
            //     }
            // });
            // return await modal.present();
            if (this.selected_link) {
                this.socialSharing.share(this.selected_link).then((res) => {
                }, (err) => {
                });
            }
        });
    }
    getRss(id, church_id) {
        this.loader.presentLoading().then(() => { });
        this.link_type = "rss";
        let self = this;
        // fetching data through service
        this.sermonsService.get_rss(id, church_id).subscribe((res) => {
            self.allSermons = res.audio.channel.item;
            if (this.sermonid === 'latest') {
                self.selectedSermon = self.allSermons;
            }
            else if (this.urlPubDate) {
                self.selectedSermon = self.allSermons.find(x => x.pubDate === this.urlPubDate);
            }
            else {
                self.selectedSermon = self.allSermons.filter(x => x.guid === this.sermonid);
            }
            // setting data according to platform ( youtube, vimeo, wasabi)
            this.setData();
            // Saving sermon
            const body = JSON.stringify({
                church_id: self.ch_id,
                apppage_id: self.page_id,
                name: this.selectedSermon.title,
                link: this.selectedSermon.guid
            });
            self.sermonsService.create_sermon(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            }));
            // Loading all saved sermons
            self.sermonsService.get_sermons(this.page_id).subscribe((res) => {
                if (res && res.status) {
                    let check = res.sermons.filter(x => x.link === this.selectedSermon.guid && x.name === this.selectedSermon.title);
                    if (check.length > 0) {
                        this.selected_comments = check.comments;
                        this.selected_comments.map((item) => {
                            item.comment = JSON.parse(item.comment);
                            try {
                                item.comment = JSON.parse(item.comment);
                                ;
                            }
                            catch (_a) {
                                item.comment = item.comment;
                            }
                            let mytime = this.appService.getDateTimeFormat(item.comment_time);
                            let time_diff = moment__WEBPACK_IMPORTED_MODULE_11__().utcOffset(); // in minutes
                            if (time_diff != 0) {
                                item.comment_time = moment__WEBPACK_IMPORTED_MODULE_11__(mytime).add((time_diff), 'minutes');
                                item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                            }
                            else {
                                item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                            }
                            // item.comment_time = moment(item.comment_time);
                        });
                        this.selected_id = check.id;
                        this.selected_link = check.link;
                    }
                }
            }, error => {
                this.loader.stopLoading();
            });
        }, error => {
            this.loader.stopLoading();
        });
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_11__(date).format('DD MM YYYY');
    }
    // getting sermons from URL
    getSermonsFromWordpress(base_url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.link_type = "sermon";
            let self = this;
            let index = 0;
            this.loader.presentLoading().then(() => {
                this.sermonsService.getAllSermons(base_url).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let data = res.data;
                    self.allSermons = data.item;
                    //  console.log(self.allSermons, "------- ---- semon result")
                    if (self.sermonid === 'latest') {
                        self.selectedSermon = self.allSermons[0];
                    }
                    else if (this.urlPubDate) {
                        if (this.idseries === null) {
                            self.selectedSermon = self.allSermons.find(x => x.pubDate === this.urlPubDate);
                        }
                        else {
                            self.selectiveSermons = self.allSermons.filter(x => x.id_series === this.idseries);
                            self.selectedSermon = self.selectiveSermons.find(x => x.pubDate === this.urlPubDate);
                        }
                    }
                    else {
                        self.selectiveSermons = self.allSermons.filter(x => x.id_series === this.idseries);
                        self.selectedSermon = self.selectiveSermons[this.sermonid];
                    }
                    // setting data according to platform ( youtube, vimeo, wasabi)
                    this.setData();
                    // Saving sermon
                    const body = JSON.stringify({
                        church_id: self.ch_id,
                        apppage_id: self.page_id,
                        name: this.selectedSermon.title,
                        link: this.selectedSermon.link
                    });
                    self.sermonsService.create_sermon(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    }));
                    // Loading all saved sermons
                    self.sermonsService.get_sermons(this.page_id).subscribe((res) => {
                        if (res && res.status) {
                            let check = res.sermons.filter(x => x.link === this.selectedSermon.link && x.name === this.selectedSermon.title);
                            if (check.length > 0) {
                                this.selected_comments = check.comments;
                                if (this.selected_comments) {
                                    this.selected_comments.map((item) => {
                                        try {
                                            item.comment = JSON.parse(item.comment);
                                            ;
                                        }
                                        catch (_a) {
                                            item.comment = item.comment;
                                        }
                                        let mytime = this.appService.getDateTimeFormat(item.comment_time);
                                        let time_diff = moment__WEBPACK_IMPORTED_MODULE_11__().utcOffset(); // in minutes
                                        if (time_diff != 0) {
                                            item.comment_time = moment__WEBPACK_IMPORTED_MODULE_11__(mytime).add((time_diff), 'minutes');
                                            item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                                        }
                                        else {
                                            item.comment_time = this.appService.getDateTimeFormat(item.comment_time);
                                        }
                                    });
                                }
                                this.selected_id = check.id;
                                this.selected_link = check.link;
                            }
                        }
                    }, (err) => {
                        this.loader.stopLoading();
                    });
                }), (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.loader.stopLoading();
                });
            });
        });
    }
    changeTimezone(date, ianatz) {
        // suppose the date is 12:00 UTC
        var invdate = new Date(date.toLocaleString('en-US', {
            timeZone: ianatz
        }));
        // then invdate will be 07:00 in Toronto
        // and the diff is 5 hours
        var diff = date.getTime() - invdate.getTime();
        // so 12:00 in Toronto is 17:00 UTC
        return new Date(date.getTime() + diff);
    }
    // setting data according to platform ( youtube, vimeo, wasabi)
    setData() {
        let self = this;
        let youtube = 'youtube';
        let youtube2 = 'youtu.be';
        let vimeo = 'vimeo';
        let vimeo2 = 'www.vimeo';
        this.loader.stopLoading();
        if (this.link_type === "sermon") {
            if (self.selectedSermon.video_link != '' && self.selectedSermon.video_link != null) {
                this.sermon_video_url = '';
                if (self.selectedSermon.video_link.includes(youtube)) {
                    this.sermon_video_url = self.selectedSermon.video_link.replace('watch?v=', 'embed/');
                }
                else if (self.selectedSermon.video_link.includes(youtube2)) {
                    this.sermon_video_url = self.selectedSermon.video_link.replace('youtu.be/', 'www.youtube.com/embed/');
                }
                else if (self.selectedSermon.video_link.includes(vimeo)) {
                    if (self.selectedSermon.video_link.includes(vimeo2)) {
                        this.sermon_video_url = self.selectedSermon.video_link.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                    }
                    else {
                        if (!(self.selectedSermon.video_link[0].includes('player.vimeo.com/video/'))) {
                            this.sermon_video_url = self.selectedSermon.video_link[0].replace('vimeo.com/', 'player.vimeo.com/video/');
                        }
                        else {
                            this.sermon_video_url = self.selectedSermon.video_link[0];
                        }
                    }
                }
                else if (self.selectedSermon.video_link.includes('facebook.com')) {
                    // let matches = self.selectedSermon.video_link[0].match(/(\d*)/g);
                    // let fb_video_id = '';
                    // matches.forEach(element => {
                    //     if(element != ''){
                    //         fb_video_id = element;
                    //     }
                    // });
                    this.sermon_video_url = "https://www.facebook.com/plugins/video.php?href=" + self.selectedSermon.video_link + "&show_text=false&height=375&appId";
                }
                else {
                    this.wasabi = true;
                    this.sermon_video_url = self.selectedSermon.video_link;
                }
                // sanitizing video url for security purpose
                this.sermon_video_url = this.dom.bypassSecurityTrustResourceUrl(this.sermon_video_url);
            }
            self.sermon_title = self.selectedSermon.title;
            self.sermon_speaker = self.selectedSermon['itunes:author'];
            if (this.is_wordpress_enable === false && self.selectedSermon.pubDate != '') {
                self.sermon_pubdate = self.selectedSermon.pubDate.slice(0, 16);
            }
            if (self.selectedSermon.des != '' && self.selectedSermon.des != null) {
                self.sermon_description = self.selectedSermon.des;
            }
            if (self.selectedSermon.sermon_note_url) {
                if (self.selectedSermon.sermon_note_url != '') {
                    if (Array.isArray(self.selectedSermon.sermon_note_url)) {
                        self.sermon_notes = self.selectedSermon.sermon_note_url[0];
                    }
                    else {
                        self.sermon_notes = self.selectedSermon.sermon_note_url;
                    }
                }
            }
            if (self.selectedSermon.audio_link != '' && self.selectedSermon.audio_link != null) {
                self.sermon_audio = self.selectedSermon.audio_link;
                if (self.selectedSermon.audio_link.includes("soundcloud.com")) {
                    self.soundcloud = true;
                    self.sermon_audio = "https://w.soundcloud.com/player/?url=" + self.sermon_audio;
                    self.sermon_audio = this.dom.bypassSecurityTrustResourceUrl(this.sermon_audio);
                }
                // this.event_provider.setAudioUrl(self.sermon_audio);
            }
            this.sermon_image = self.selectedSermon.img_series;
            self.selectedSermon.thumbnail ? self.selectedSermon.thumbnail : "assets/img/live_stream_bg_2.jpg";
            // Recent Sermons
            let allrecent = [];
            // only storing unique objects in array
            this.recentSermons = this.recentSermons.filter(x => x.title != this.sermon_title);
            this.recentSermons.push(self.selectedSermon);
            allrecent = this.recentSermons.filter(x => x.id_series === this.idseries);
            if (this.recentSermons.length === 4) {
                this.recentSermons.splice(0, 1);
            }
            // reversing recent sermons so that most recent comes at top
            this.recentSermons = this.recentSermons.slice().reverse();
            this.sermonsService.storeRecentSermons(this.recentSermons);
        }
        else {
            if (this.sermonid === 'latest') {
                let type = self.selectedSermon.enclosure['@attributes'].type;
                if (type.indexOf("video") >= 0) {
                    if (self.selectedSermon.enclosure['@attributes'].url.includes(youtube)) {
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('watch?v=', 'embed/');
                    }
                    else if (self.selectedSermon.enclosure['@attributes'].url.includes(youtube2)) {
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('youtu.be/', 'www.youtube.com/embed/');
                    }
                    else if (self.selectedSermon.enclosure['@attributes'].url.includes(vimeo)) {
                        if (self.selectedSermon.enclosure['@attributes'].url.includes(vimeo2)) {
                            this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                        }
                        else {
                            this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('vimeo.com/', 'player.vimeo.com/video/');
                        }
                    }
                    else {
                        this.wasabi = true;
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url;
                    }
                    // sanitizing video url for security purpose
                    this.sermon_video_url = this.dom.bypassSecurityTrustResourceUrl(this.sermon_video_url);
                }
                self.sermon_title = self.selectedSermon.title;
                self.sermon_speaker = "";
                if (self.selectedSermon.pubDate != '') {
                    self.sermon_pubdate = self.selectedSermon.pubDate.slice(0, 16);
                }
                if (type.indexOf("audio") >= 0) {
                    self.sermon_audio = this.dom.bypassSecurityTrustResourceUrl(self.selectedSermon.enclosure['@attributes'].url);
                    // this.event_provider.setAudioUrl(self.sermon_audio);
                }
                this.sermon_image = "../../assets/img/live_stream_bg_2.jpg";
                this.sermon_image = self.selectedSermon.thumbnail ? self.selectedSermon.thumbnail : "../../assets/img/live_stream_bg_2.jpg";
            }
            else {
                let type = self.selectedSermon.enclosure['@attributes'].type;
                if (type.indexOf("video") >= 0) {
                    if (self.selectedSermon.enclosure['@attributes'].url.includes(youtube)) {
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('watch?v=', 'embed/');
                    }
                    else if (self.selectedSermon.enclosure['@attributes'].url.includes(youtube2)) {
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('youtu.be/', 'www.youtube.com/embed/');
                    }
                    else if (self.selectedSermon.enclosure['@attributes'].url.includes(vimeo)) {
                        if (self.selectedSermon.enclosure['@attributes'].url.includes(vimeo2)) {
                            this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                        }
                        else {
                            this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url.replace('vimeo.com/', 'player.vimeo.com/video/');
                        }
                    }
                    else {
                        this.wasabi = true;
                        this.sermon_video_url = self.selectedSermon.enclosure['@attributes'].url;
                    }
                    // sanitizing video url for security purpose
                    this.sermon_video_url = this.dom.bypassSecurityTrustResourceUrl(this.sermon_video_url);
                }
                self.sermon_title = self.selectedSermon.title;
                self.sermon_speaker = "";
                if (self.selectedSermon.pubDate != '') {
                    self.sermon_pubdate = self.selectedSermon.pubDate.slice(0, 16);
                }
                if (type.indexOf("audio") >= 0) {
                    self.sermon_audio = this.dom.bypassSecurityTrustResourceUrl(self.selectedSermon.enclosure['@attributes'].url);
                    // this.event_provider.setAudioUrl(self.sermon_audio);
                }
                this.sermon_image = "../../assets/img/live_stream_bg_2.jpg";
                self.selectedSermon.thumbnail ? self.selectedSermon.thumbnail : "../../assets/img/live_stream_bg_2.jpg";
            }
        }
        this.loader.stopLoading();
    }
    getrecentsermon(idseries, pubdate) {
        this.loader.presentLoading().then(() => {
            if (this.wasabi === true) {
                this.wasabi = false;
            }
            let self = this;
            self.selectiveSermons = self.recentSermons.filter(x => this.is_wordpress_enable ? x.id : x.id_series === idseries);
            self.selectedSermon = self.selectiveSermons.find(x => x.pubDate === pubdate);
            this.ionContent.scrollToTop(300); //300 for animate the scroll effect.
            this.setData();
        });
    }
    create_comment() {
        if (!this.comment) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.comment_field_empty : 'Comment field is empty'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        }
        else {
            if (this.isLoggedIn) {
                if (this.is_wordpress_enable) {
                    // preparing data for creating comment
                    const body = JSON.stringify({
                        auth: 'Bearer ' + this.auth.access_token,
                        church_id: this.ch_id,
                        sermon_id: this.sermonid,
                        account_donor_id: this.donor_id,
                        comment: this.comment
                    });
                    // calling service to save comment data
                    this.sermonsService.create_sermon_comment_DB(body).subscribe(res => {
                        // Calling ngOnInit() function to load the page so that latest data is loaded which will have saved comment too
                        this.getSermonsFromCMS();
                        // emptying comment variable after comment has been saved
                        this.comment = '';
                    });
                }
                else {
                    const body = JSON.stringify({
                        auth: 'Bearer ' + this.auth.access_token,
                        church_id: this.ch_id,
                        sermon_id: this.selected_id,
                        account_donor_id: this.donor_id,
                        comment: this.comment
                    });
                    this.sermonsService.create_sermon_comment(body).subscribe(res => {
                        // refreshing sermons data after comment added
                        this.getSermonsFromWordpress(this.sermons_url);
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
    openAudio() {
        this.audio_player = this.audio_player === false;
    }
    // navigating to back page
    gotobackPage() {
        //this.location.back();
        // console.log('page id is: ', this.pageid);
        this.router.navigate(['/shows', { page_id: this.pageid }]);
    }
    // navigating to sermon-notes page
    openNotes() {
        this.router.navigate(['/show-notes']);
    }
    openInBrowser() {
        // (this.platform.is('iphone') || this.platform.is('android'))
        if (this.platform.is('cordova')) {
            // console.log('inside the iphone');
            if (this.sermon_notes.includes('.pdf')) {
                let path = this.file.dataDirectory;
                const transfer = this.ft.create();
                // console.log('trnasfer created: ', transfer);
                transfer.download(this.sermon_notes, `${path}myfile.pdf`).then((res) => {
                    //  console.log('response from download: ', res);
                    let url2 = res.toURL();
                    // console.log('to url is: ', url2);
                    if (this.platform.is('ios')) {
                        this.document.viewDocument(encodeURI(url2), 'application/pdf', {});
                    }
                    else {
                        //  console.log('inside the esle: ');
                        this.fileOpener.open(url2, 'application/pdf');
                    }
                });
                //this.document.viewDocument(this.sermon_notes, 'application/pdf',{});
                //window.open(encodeURI(this.sermon_notes), '_self', 'location=yes,EnableViewPortScale=yes');
            }
            else {
                this.iab.create(this.sermon_notes, '_blank', this.options);
            }
        }
        else {
            this.iab.create(this.sermon_notes, '_top', this.options);
        }
    }
    // openInBrowser() {
    //     if (this.platform.is('iphone') || this.platform.is('android')) {
    //         if (this.sermon_notes.includes('.pdf')) {
    //             let path = this.file.dataDirectory;
    //             const transfer = this.ft.create();
    //             transfer.download(this.sermon_notes, `${path}myfile.pdf`).then((res: any)=>{
    //                 let url2 = res.toURL();
    //                 if(this.platform.is('ios')){
    //                     this.document.viewDocument(encodeURI(url2), 'application/pdf', {});
    //                 }else{
    //                     this.fileOpener.open(url2, 'application/pdf');
    //                 }
    //             });
    //             //this.document.viewDocument(encodeURI(this.sermon_notes), 'application/pdf', {});
    //             // document.addEventListener('deviceready',function(){
    //             //     cordova.plugins.Sitewaer
    //             // },false);
    //           //  window.open(encodeURI(this.sermon_notes), '_self', 'location=yes,EnableViewPortScale=yes');
    //         } else {
    //             console.log('inside the elseee');
    //             this.iab.create(this.sermon_notes, '_blank', this.options);
    //         }
    //     }
    //     else {
    //         this.iab.create(this.sermon_notes, '_self', this.options);
    //     }
    // }
    downloadNotes() {
        this.downloadService.downloadNotes(this.sermon_notes);
    }
    download() {
        if (this.isLoggedIn) {
            const dataBody = {
                user_id: this.donor_id,
                file_url: this.sermon_video_url ? this.sermon_video_url['changingThisBreaksApplicationSecurity'] : this.sermon_audio['changingThisBreaksApplicationSecurity'],
                file_type: this.sermon_video_url ? 'video' : 'audio',
                file_name: this.sermon_title,
                file_description: '',
                file_thumbnail_url: this.sermon_video_url ? this.sermon_video_url['changingThisBreaksApplicationSecurity'] : this.sermon_audio['changingThisBreaksApplicationSecurity']
            };
            this.downloadService.addFileToDownloads(dataBody).subscribe((res) => {
                if (res.status) {
                    this.alertMessage = 'File added to downloads';
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Success'), (this.alertMessage), 'Success');
                }
            });
        }
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_16__["EmojiComponent"],
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
    startCasting(audio, flag, index) {
        let obj = this;
        // if(obj.common.castingActive && obj.common.session != ''){
        //     obj.common.changeAudio(audio, flag);
        // }else{
        //     // if(!obj.common.castingActive){
        //         obj.newchrtomeCast(audio ,flag)
        //     // }
        // }
        if (audio["changingThisBreaksApplicationSecurity"]) {
            audio = audio["changingThisBreaksApplicationSecurity"];
        }
        this.casting.createChromeCasting(audio);
        setTimeout(() => {
            if ((this.casting.session && this.casting.session != '') && (this.casting._media || this.casting._media !== '') && (this.casting.playURl === audio)) {
                this.casting.requestSession(audio, 'sermon-detail', 0);
            }
            else if ((this.casting.session && this.casting.session != '') && (this.casting._media || this.casting._media !== '') && (this.casting.playURl !== audio)) {
                this.casting.changeAudio(audio, "audio-archieve", 0);
            }
            else {
                this.casting.requestSession(audio, 'sermon-detail', 0);
            }
        }, 3000);
    }
    // ZB changes
    topicsClicked() {
        this.topics_clicked = true;
    }
    bibleReferenceClicked() {
        this.bible_reference_clicked = true;
    }
    bibleReferencedItemClicked(item) {
        if (item !== '' && item != null) {
            if (item.book_name[item.book_name.length - 1].includes(" ")) {
                let newName = item.book_name.replace(item.book_name[item.book_name.length - 1], '');
                this.params_book_name2 = newName;
            }
            else if (item.book_name === 'Song of Solomon') {
                this.params_book_name2 = 'The Song of Solomon';
            }
            else {
                this.params_book_name2 = item.book_name;
            }
            this.params_chap_id2 = item.start_chapter;
            this.start_verse = item.start_verse;
            this.end_chapter = item.end_chapter;
            this.end_verse = item.end_verse;
            this.storage.get('app_language').then((res) => {
                this.langCode = res.code;
                this.bible_id = res.bible_id;
                //   if(JSON.parse(localStorage.getItem('church_data')).church.ch_id == '54') {
                if (res.bible_id) {
                    this.audio_id = res.audio_id;
                    this.dam_id = res.bible_id;
                    // getting books of selected volume
                    this.getCMPBooks(this.dam_id);
                }
                // } 
            });
        }
        else {
            this.toast.presentToastWithOptions('No bible exist', 'Something Went Wrong', 'danger');
        }
    }
    getCMPBooks(curr_dam_id) {
        let self = this;
        let dam_id = curr_dam_id;
        let code = this.langCode;
        // console.log(dam_id)
        this._bibleService.getCMPbibleBooks(dam_id, this.langCode).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                // setting if data in params
                if (this.params_book_name2 && this.params_chap_id2) {
                    //Geting the chapters
                    let item = this.books.find(x => x.book_name.toLowerCase() === this.params_book_name2.toLowerCase());
                    if (item !== null && item !== '' && item !== undefined) {
                        let data = item.chapters.split(',');
                        let finalData = [];
                        data.forEach(function (e) {
                            let chapter = {
                                id: e,
                                selected: false
                            };
                            finalData.push(chapter);
                        });
                        this.chapters = finalData;
                        this.chapters.map(function (x) {
                            if (x => x.id !== this.params_chap_id2.toString()) {
                                x.selected = false;
                            }
                            else {
                                x.selected = true;
                            }
                            return x;
                        });
                        //Expanding Toggle
                        this.books.map(function (x) {
                            if (x.book_name !== self.params_book_name) {
                                x.expanded = false;
                            }
                            else {
                                x.expanded = true;
                            }
                            return x;
                        });
                        this.getCMPBooksText(dam_id);
                    }
                    else {
                        this.toast.presentToastWithOptions('No bible exist', 'Something Went Wrong', 'warning');
                    }
                }
            }
            else if (!res) {
                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
            }
        }));
    }
    // getting text
    getCMPBooksText(cur_dam_id) {
        let dam_id = cur_dam_id;
        this.loader.presentLoading().then(() => {
            this._bibleService.getCMPbibleBooksText(dam_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res) {
                    let newBooksData = [];
                    this.books.forEach(function (x) {
                        let bookText = res.find(z => z.book_id === x.book_id);
                        if (bookText) {
                            x.text_dam_id = bookText.dam_id;
                        }
                        newBooksData.push(x);
                    });
                    this.books = newBooksData;
                    let selectedBook = this.books.find(s => s.book_name.toLowerCase() === this.params_book_name2.toLowerCase());
                    if (selectedBook !== '' && selectedBook !== null && selectedBook !== undefined) {
                        let data = {
                            queryParams: {
                                chapter: JSON.stringify(this.params_chap_id2),
                                book: JSON.stringify(selectedBook),
                                dam_id: this.dam_id,
                                audio_id: this.audio_id,
                                page: 'sermon-detail',
                                sermonid: this.sermonid,
                                page_id: this.page_id,
                                start_chapter: this.params_chap_id2,
                                start_verse: this.start_verse,
                                end_chapter: this.end_chapter,
                                end_verse: this.end_verse,
                                bible_id: this.bible_id
                            }
                        };
                        this.router.navigate(['/bible-chapter'], data);
                    }
                    else {
                        this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.NoBibleExist : 'No bible exist'), 'danger');
                    }
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                this.loader.stopLoading();
            }));
        });
    }
};
SermonDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_20__["CommonService"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_19__["DownloadService"] },
    { type: src_services_casting_service__WEBPACK_IMPORTED_MODULE_21__["CastingService"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__["DocumentViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_25__["FileTransfer"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__["FileOpener"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"] },
    { type: src_services_bible_service__WEBPACK_IMPORTED_MODULE_27__["BibleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"])
], SermonDetailPage.prototype, "ionContent", void 0);
SermonDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sermon-detail',
        template: __webpack_require__(/*! raw-loader!./sermon-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/sermon-detail/sermon-detail.page.html"),
        styles: [__webpack_require__(/*! ./sermon-detail.page.scss */ "./src/app/sermon-detail/sermon-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        src_services_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_20__["CommonService"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_19__["DownloadService"],
        src_services_casting_service__WEBPACK_IMPORTED_MODULE_21__["CastingService"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_22__["DocumentViewer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_24__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_25__["FileTransfer"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_23__["FileOpener"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"],
        src_services_bible_service__WEBPACK_IMPORTED_MODULE_27__["BibleService"]])
], SermonDetailPage);



/***/ })

}]);
//# sourceMappingURL=sermon-detail-sermon-detail-module-es2015.js.map