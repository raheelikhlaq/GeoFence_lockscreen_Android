(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-teachings-videos-ism-teachings-videos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-teachings-videos/ism-teachings-videos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-teachings-videos/ism-teachings-videos.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\r\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"page_type === 'bible'\">\r\n    <ion-toolbar class=\"header--toolbar\">\r\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\" >\r\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\r\n            {{book_name ? book_name : ''}}\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!--end mobile header-->\r\n<ion-content >\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"app-container\">\r\n          <!-- <ion-card *ngIf=\"ttb_audios.length < 1 && !videos_loaded\" class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\r\n                    style=\"border-radius: 5px;\"> -->\r\n            <!-- <h4 class=\"heading4\">{{'BIBLE.no_teachings_available' | translate}}</h4> -->\r\n            \r\n            <ng-container *ngIf=\"ttb_audios.length < 1 && !videos_loaded\">\r\n            <div class=\"skelton\">\r\n                <div>\r\n                    <ion-skeleton-text  style=\"height: 140px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                </div>\r\n                 <div style=\"padding: 0 12px;\">\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\" height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\" height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                     <ion-skeleton-text  style=\"height: 7px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n                 </div>\r\n             </div>\r\n           <div>\r\n               <ion-skeleton-text  style=\"width:90%; height: 10px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n               <ion-skeleton-text  style=\"width:100%; height: 40px;\"  [animated]=\"true\"></ion-skeleton-text>\r\n           </div>\r\n        </ng-container>\r\n          <!-- </ion-card> -->\r\n\r\n                <div *ngFor=\"let video of videos; let i = index\" (click)=\"openVideo(video.book_id, video.chapter_id, video.verse, i, video.video_url, video.id, video)\">\r\n                    <ion-card class=\"ionCard cursor-pointer ion-margin-bottom\">\r\n                        <div class=\"ionCard__imgDiv ismTeachingVideos\">\r\n                            <div  class=\"layer\" [ngClass]=\"{'video': video.not_vimeo}\">\r\n                                <ion-icon name=\"play\" size=\"large\"></ion-icon>\r\n                            </div>\r\n                            <img *ngIf=\"video.image_preview !== '' && page_type === 'bible'\" [src]=\"video.image_preview\"/>\r\n                            <img *ngIf=\"video.image_preview == '' && video.video_url == '' && page_type === 'bible'\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\r\n                             <img *ngIf=\"video.video_url == '' && page_type != 'bible'\" src=\"../../assets/img/error2.PNG\"/>\r\n                                 <iframe *ngIf=\"video.image_preview == '' && video.video_url !== '' && !video.not_vimeo\" id=\"\" class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"\r\n                            [src]=\"video.video_url\"\r\n                            frameborder=\"0\" allowfullscreen=\"\"></iframe>\r\n                            <video *ngIf=\"video.image_preview == '' && video.video_url && video.not_vimeo\" width=\"100%\" height=\"100%\" preload=\"metadata\">\r\n                                <source [src]=\"video.video_url\" type=\"video/mp4\">\r\n                            </video>\r\n                        </div>\r\n                        <ion-card-content class=\"ion-no-padding\">\r\n                            <ion-card-title class=\"heading4\">{{video.video_title ? video.video_title : 'Title N/A'}}</ion-card-title>\r\n                            <p *ngIf=\"page_type === 'bible'\"><b>{{video.book_name}} {{video.chapter_id}}{{video.verse === ' ' ? '' : (':' + video.verse) }}</b></p>\r\n                            <p *ngIf=\"page_type === 'bible'\">Duration: {{video.video_length ? video.video_length : 'N/A'}}</p>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </div>\r\n\r\n\r\n<!--                <ion-col *ngFor=\"let video of ttb_audios; let i = index\" [size]=\"12\" [sizeLg]=\"6\"   (click)=\"openVideo(video.bible_book, video.name, video.original_bible_reference, i, video.folder_path, video.uuid , video)\">-->\r\n<!--                    <ion-card class=\"ionCard cursor-pointer ion-margin-bottom\">-->\r\n\r\n<!--                        <div *ngIf=\"studyRead(video)\" class=\"ribbon\">-->\r\n<!--                            <span class=\"ribbon4\">Listened</span>-->\r\n<!--                        </div>-->\r\n\r\n<!--                        <div *ngIf=\"ttb_image\" class=\"ionCard__imgDiv ismTeachingVideos\"> -->\r\n<!--                            <div  class=\"layer\"> -->\r\n<!--                                <img src=\"{{ttb_image}}\"/>-->\r\n<!--                            </div> -->\r\n<!--                        </div>-->\r\n<!--                        <ion-card-title class=\"heading4\">{{video.name ? video.name : 'Title N/A'}}</ion-card-title>-->\r\n<!--                        -->\r\n<!--                       <ion-card-content class=\"ion-no-padding\">-->\r\n<!--                          <p [class.limitLine]=\"showFullDescription[i]\" *ngIf=\"video.description\">{{video.description}}  </p>-->\r\n<!--                       </ion-card-content>-->\r\n<!--                       <span *ngIf=\"showFullDescription[i]\" (click)=\"toggleDescription(i)\"> See more</span>-->\r\n<!--                       <span *ngIf=\"!showFullDescription[i]\" (click)=\"toggleDescription(i)\"> Hide</span>-->\r\n<!--                        <div class=\"audioComponent\">-->\r\n<!--                            <app-audio-player [audioData]=\"video\" [image]=\"ttb_image\" [index]=\"i\" [method]=\"'ism-study'\" [fromPage]=\"'ism-study'\"  [audioUrl]=\"video.uuid\" [isSermon]=\"false\"  >-->\r\n<!--                            </app-audio-player>-->\r\n<!--                        </div>-->\r\n<!--                    </ion-card>-->\r\n<!--                </ion-col>-->\r\n\r\n        <ng-container *ngIf=\"ttb_audios.length > 0\">\r\n            <div class=\"studyMedia\">\r\n                    <!-- <img alt=\"\" class=\"studyMedia__thumb\" [src]=\"ttb_image? ttb_image : '../../assets/img/live_stream_bg_2.jpg'\"> -->\r\n                    <img alt=\"\" class=\"studyMedia__thumb\" [src]=\"ttb_audios[0].art_url ?ttb_audios[0].art_url  : '../../assets/img/live_stream_bg_2.jpg'\">\r\n                    <div class=\"studyMedia__content limitLine\"  [class.limitLine]=\"showFullDescription\"  *ngIf=\"ttb_audios && ttb_audios.length > 0\">\r\n                        <ng-container *ngIf=\"ttb_audios[index].description\">\r\n                            {{ttb_audios[index].description}}\r\n                        </ng-container>\r\n                            \r\n                        \r\n                    </div>\r\n                <div  *ngIf=\"ttb_audios[index].description\" style=\"display: inline;\" class=\"ion-text-right\">\r\n                    <span  *ngIf=\"showFullDescription\"  (click)=\"toggleDescription();\">See more</span>\r\n                    <span *ngIf=\"!showFullDescription\" (click)=\"toggleDescription();\">Hide</span>\r\n                </div>\r\n           \r\n            </div>\r\n\r\n                <div style=\"display: flex;\" class=\"ion-justify-content-center ion-align-items-center\">\r\n                    <div style=\"width: 20%\" class=\"ion-text-center\">\r\n                        <span *ngIf=\"ttb_audios.length > 0\" class=\"number-of-studies\" style=\"font-size: 14px;\">{{audioService.readAudio +' of ' + ttb_audios.length}}</span>\r\n                    </div>\r\n                    <div style=\"width: 65%\" class=\"ion-text-center\">\r\n                      <ion-range mode=\"ios\" class=\"range  range--audioPlayer\" disabled [(ngModel)]=\"audioService.progressForChapter\" max=\"100\" ></ion-range>\r\n                    </div>\r\n                    <div style=\"width: 20%\"  class=\"ion-text-center checkmark-circle-center\">\r\n                        <ion-icon class=\"activeCheck\"    name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                    </div>\r\n                   </div>\r\n\r\n                <ion-list class=\"studyLists\">\r\n                    <ion-item class=\"studyLists__item\" *ngFor=\"let video of ttb_audios; let i = index\" >\r\n                        <div class=\"studyItem\">\r\n                            <h3 class=\"heading3\">{{video.name ? video.name : 'Title N/A'}}</h3>\r\n                            <div style=\"display: flex; align-items: center;\" class=\"\">\r\n                                <p  class=\"timer\">\r\n                                    <!-- <ng-container *ngIf=\"studyRead(video)\">\r\n                                    <ion-icon *ngIf=\"video.completeListner\" class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                    </ng-container> -->\r\n                                    \r\n                                    <ng-container *ngIf=\"!audioService.study_ttbAudios[i]\">\r\n                                        <ng-container *ngIf=\"studyRead(video) && !video.completeListner\"> {{video.listenDuration}} </ng-container>\r\n                                        <!-- <ng-container *ngIf=\"studyRead(video) && video.completeListner && i != audioService.index\"> {{video.duraionInMints}} </ng-container> -->\r\n                                        <!-- <ng-container *ngIf=\"studyRead(video) && video.completeListner && i == audioService.index\"> {{audioService.current_duration}} </ng-container> -->\r\n                                        <ng-container *ngIf=\"studyRead(video) && video.completeListner\"> {{video.duraionInMints}} </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"!studyRead(video)\"> {{video.duraionInMints}} </ng-container>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"audioService.study_ttbAudios[i]\">\r\n                                        {{audioService.current_duration == 0 ? '00:00' : audioService.current_duration}} \r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"studyRead(video) && video.completeListner && !audioService.study_ttbAudios[i]\" >\r\n                                        <p style=\"display: flex;white-space: nowrap;\">\r\n                                            <span class=\"ion-text-center checkmark-circle-center\">\r\n                                              <ion-icon class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                            </span>\r\n                                            <span style=\" color: #eb7f00;\">\r\n                                                Listened on {{video.date | date: 'MM/dd/yyyy' }}\r\n                                            </span>\r\n                                          </p>\r\n                                    </ng-container>\r\n\r\n                                </p> \r\n                                 <div *ngIf=\"studyRead(video)\" style=\"width: 40%\" class=\"ion-text-center\">\r\n                                     <ion-range mode=\"ios\" *ngIf=\"!audioService.study_ttbAudios[i] && !video.completeListner\" class=\"range range--audioPlayer\" disabled [(ngModel)]=\"video.progress\" max=\"100\" ></ion-range>\r\n                                     <ion-range mode=\"ios\" *ngIf=\"audioService.study_ttbAudios[i]\" class=\"range range--audioPlayer\" #range (touchend)=\"seek()\" [(ngModel)]=\"audioService.progress\" max=\"100\" ></ion-range>\r\n                                 </div>\r\n\r\n                                 <div *ngIf=\"!studyRead(video)\" style=\"width: 40%\" class=\"ion-text-center\">\r\n                                    <ion-range mode=\"ios\" *ngIf=\"audioService.study_ttbAudios[i]\" class=\"range range--audioPlayer\" #range (touchend)=\"seek()\" [(ngModel)]=\"audioService.progress\" max=\"100\" ></ion-range>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <ng-container *ngIf=\"studyRead(video)\">\r\n                            <div class=\"studyIcons\">\r\n                                <img style=\"z-index: 9999 !important;\" (click)=\"downloadCompoent(video)\" src=\"../../assets/share-icon.svg\">\r\n                                <img *ngIf=\"!downloadService.downloadView(video)\" (click)=\"downloadService.downloadsLocalSave(video,'ism-study')\"  class=\"studyIcons__downloadBtn\" src=\"../../assets/download-icon.svg\">\r\n                                <img *ngIf=\"downloadService.downloadView(video)\" (click)=\"downloadService.downloadsLocalSave(video,'ism-study')\"  class=\"studyIcons__downloadBtn\" src=\"../../assets/img/downloadGreen.svg\">\r\n                            </div>\r\n                            <ion-button *ngIf=\"!audioService.study_ttbAudios[i]\" [class.disabledColors]=\"video.completeListner\"  slot=\"end\" (click)=\"playStudy(video, i, false, video.listenDuration)\" class=\"commonBtn--dark \">\r\n                                <ion-icon slot=\"icon-only\"  name=\"play\" style=\"padding-left: 2px; font-size: 24px;\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-button *ngIf=\"audioService.study_ttbAudios[i]\" [class.disabledColors]=\"video.completeListner\" slot=\"end\" (click)=\"playStudy(video, i, true , video.listenDuration)\" class=\"commonBtn--dark \">\r\n                                <ion-icon slot=\"icon-only\"  name=\"pause\" style=\"padding: 3px; font-size: 24px;\"></ion-icon>\r\n \r\n                            </ion-button>\r\n                        </ng-container>\r\n                        <!-- <ng-container *ngIf=\"!studyRead(video)\"> -->\r\n                        <ng-container *ngIf=\"!studyRead(video)\"> \r\n                            <div class=\"studyIcons\">\r\n                                <img style=\"z-index: 9999 !important;\" (click)=\"downloadCompoent(video)\" src=\"../../assets/share-icon.svg\">\r\n                                <img *ngIf=\"!downloadService.downloadView(video)\" (click)=\"downloadService.downloadsLocalSave(video,'ism-study')\"  class=\"studyIcons__downloadBtn\" src=\"../../assets/download-icon.svg\">\r\n                                <img *ngIf=\"downloadService.downloadView(video)\" (click)=\"downloadService.downloadsLocalSave(video,'ism-study')\"  class=\"studyIcons__downloadBtn\" src=\"../../assets/img/downloadGreen.svg\">\r\n                            </div>\r\n                            <ion-button *ngIf=\"!audioService.study_ttbAudios[i]\" (click)=\"playStudy(video, i, false)\"  slot=\"end\" class=\"commonBtn--dark\">\r\n                                <ion-icon slot=\"icon-only\" name=\"play\"   style=\"padding-left: 2px; font-size: 24px;\"></ion-icon>\r\n                                </ion-button>\r\n                                <ion-button *ngIf=\"audioService.study_ttbAudios[i]\" (click)=\"playStudy(video, i, true)\"  slot=\"end\" class=\"commonBtn--dark\">\r\n                                    <ion-icon slot=\"icon-only\" name=\"pause\" style=\"font-size: 24px;\"></ion-icon>\r\n                                    </ion-button>\r\n                        </ng-container>\r\n  \r\n                    </ion-item>\r\n                </ion-list>\r\n            </ng-container>\r\n\r\n\r\n\r\n\r\n                <!-- <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadData($event)\">\r\n                    <ion-infinite-scroll-content\r\n                            loadingSpinner=\"bubbles\"\r\n                            loadingText=\"\">\r\n                    </ion-infinite-scroll-content>\r\n                </ion-infinite-scroll> -->\r\n\r\n            <div class=\"ion-text-center\">\r\n                <ion-spinner align=\"center\" *ngIf=\"!videos_loaded && church_id === 1000\" name=\"bubbles\"></ion-spinner>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/ism-teachings-videos/ism-teachings-videos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ism-teachings-videos/ism-teachings-videos.module.ts ***!
  \*********************************************************************/
/*! exports provided: IsmTeachingsVideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsVideosPageModule", function() { return IsmTeachingsVideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_teachings_videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-teachings-videos.page */ "./src/app/ism-teachings-videos/ism-teachings-videos.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _ism_teachings_videos_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsVideosPage"]
    }
];
let IsmTeachingsVideosPageModule = class IsmTeachingsVideosPageModule {
};
IsmTeachingsVideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ism_teachings_videos_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsVideosPage"]]
    })
], IsmTeachingsVideosPageModule);



/***/ }),

/***/ "./src/app/ism-teachings-videos/ism-teachings-videos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ism-teachings-videos/ism-teachings-videos.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ismTeachingVideos .player .vp-title {\n  display: none !important;\n}\n\n.video {\n  background: rgba(25, 28, 31, 0.2) !important;\n}\n\nion-card-content p {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: 100;\n  min-height: 40px;\n}\n\nion-card-content p.limitLine {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.audioComponent {\n  margin: 6px;\n}\n\n.studyLists {\n  margin: 0 -16px;\n}\n\n.studyLists .timer {\n  font-size: 12px;\n  display: -webkit-box;\n  display: flex;\n  gap: 4px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.studyLists__item {\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n}\n\n.studyLists__item .commonBtn--dark {\n  height: 35px;\n  width: 35px;\n  min-width: 35px;\n  --border-radius: 50%;\n  margin-right: 16px;\n}\n\n.studyLists__item .commonBtn--dark.button-disabled {\n  --opacity: .3;\n}\n\n.activeCheck {\n  color: #46990d;\n  height: 18px;\n  width: 18px;\n}\n\n.disabledColors {\n  --background: #b2b2b2 !important;\n  --border-color: #b2b2b2 !important;\n  --background-hover: #b2b2b2 !important;\n  --background-activated: #b2b2b2 !important;\n}\n\n.studyItem {\n  display: block;\n  width: 100%;\n  position: relative;\n  padding: 6px 0 6px 16px;\n}\n\n.studyItem :is(.heading3, p) {\n  margin: 0;\n}\n\n.checkmark-circle-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 3px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.studyItem h3 {\n  font-size: 14px;\n}\n\n.studyIcons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 18px;\n  gap: 10px;\n}\n\n.studyMedia {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n\n.studyMedia__thumb {\n  width: 140px;\n  height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 16px;\n  margin-right: 15px;\n  float: left;\n}\n\n.studyMedia__content {\n  padding-right: 4px;\n}\n\n.studyMedia__content.limitLine {\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  min-height: 135px;\n}\n\n.range {\n  --bar-background: #c7c5c5;\n  padding: 0 6px;\n  --height: 4px;\n  --bar-height: 4px;\n  margin-top: 0;\n}\n\n.range--audioPlayer {\n  --bar-background-active: #46990d;\n}\n\n.skelton {\n  display: -webkit-box;\n  display: flex;\n  gap: 12px;\n}\n\n.skelton > * {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2lzbS10ZWFjaGluZ3MtdmlkZW9zL2lzbS10ZWFjaGluZ3MtdmlkZW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaXNtLXRlYWNoaW5ncy12aWRlb3MvaXNtLXRlYWNoaW5ncy12aWRlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURDQTtFQUNFLDRDQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREhFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0o7O0FESEU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FDS0o7O0FESkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDTU47O0FETE07RUFDRSxhQUFBO0FDT1I7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURERTtFQUNFLFNBQUE7QUNHSjs7QURBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FERkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7QUNJSjs7QURDSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDTjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNBLGdDQUFBO0FDREE7O0FES0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxTQUFBO0FDRkY7O0FESUE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2lzbS10ZWFjaGluZ3MtdmlkZW9zL2lzbS10ZWFjaGluZ3MtdmlkZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpc21UZWFjaGluZ1ZpZGVvcyAucGxheWVyIC52cC10aXRsZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi52aWRlb3tcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1LCAyOCwgMzEsIDAuMikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCBwIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICAmLmxpbWl0TGluZXtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbi5hdWRpb0NvbXBvbmVudHtcclxuICBtYXJnaW46IDZweDtcclxufVxyXG4uc3R1ZHlMaXN0c3tcclxuICBtYXJnaW46IDAgLTE2cHg7XHJcbiAgLnRpbWVye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgJl9faXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgJiAuY29tbW9uQnRuLS1kYXJrIHtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAmLmJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgLS1vcGFjaXR5OiAuMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuLmFjdGl2ZUNoZWNre1xyXG4gIGNvbG9yOiAjNDY5OTBkO1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweDtcclxufVxyXG4uZGlzYWJsZWRDb2xvcnN7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYjJiMmIyICFpbXBvcnRhbnQ7IFxyXG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYjJiMmIyICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZHlJdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNnB4IDAgNnB4IDE2cHg7XHJcbiAgJiA6aXMoLmhlYWRpbmczLCBwKSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbi5jaGVja21hcmstY2lyY2xlLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdHVkeUl0ZW0gaDN7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zdHVkeUljb25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5zdHVkeU1lZGlhe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiBcclxuXHJcbiAgJl9fdGh1bWIge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAmX19jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIC8vZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy9mb250LXdlaWdodDogMTAwO1xyXG4gICAgLy9taW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgLy90ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgJi5saW1pdExpbmV7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEzNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJhbmdle1xyXG4gIC0tYmFyLWJhY2tncm91bmQ6ICNjN2M1YzU7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgLS1oZWlnaHQ6IDRweDtcclxuICAtLWJhci1oZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcclxuLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICM0Njk5MGQ7XHJcblxyXG59XHJcblxyXG4uc2tlbHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxufVxyXG4uc2tlbHRvbiA+ICp7XHJcbiAgZmxleDogMTtcclxufSIsIiNpc21UZWFjaGluZ1ZpZGVvcyAucGxheWVyIC52cC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnZpZGVvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNSwgMjgsIDMxLCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBwLmxpbWl0TGluZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hdWRpb0NvbXBvbmVudCB7XG4gIG1hcmdpbjogNnB4O1xufVxuXG4uc3R1ZHlMaXN0cyB7XG4gIG1hcmdpbjogMCAtMTZweDtcbn1cbi5zdHVkeUxpc3RzIC50aW1lciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3R1ZHlMaXN0c19faXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG59XG4uc3R1ZHlMaXN0c19faXRlbSAuY29tbW9uQnRuLS1kYXJrIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLnN0dWR5TGlzdHNfX2l0ZW0gLmNvbW1vbkJ0bi0tZGFyay5idXR0b24tZGlzYWJsZWQge1xuICAtLW9wYWNpdHk6IC4zO1xufVxuXG4uYWN0aXZlQ2hlY2sge1xuICBjb2xvcjogIzQ2OTkwZDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLmRpc2FibGVkQ29sb3JzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2IyYjJiMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG59XG5cbi5zdHVkeUl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNnB4IDAgNnB4IDE2cHg7XG59XG4uc3R1ZHlJdGVtIDppcyguaGVhZGluZzMsIHApIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hlY2ttYXJrLWNpcmNsZS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdHVkeUl0ZW0gaDMge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdHVkeUljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zdHVkeU1lZGlhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnN0dWR5TWVkaWFfX3RodW1iIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5zdHVkeU1lZGlhX19jb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLnN0dWR5TWVkaWFfX2NvbnRlbnQubGltaXRMaW5lIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMTM1cHg7XG59XG5cbi5yYW5nZSB7XG4gIC0tYmFyLWJhY2tncm91bmQ6ICNjN2M1YzU7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICAtLWhlaWdodDogNHB4O1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnJhbmdlLS1hdWRpb1BsYXllciB7XG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjNDY5OTBkO1xufVxuXG4uc2tlbHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbn1cblxuLnNrZWx0b24gPiAqIHtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ism-teachings-videos/ism-teachings-videos.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ism-teachings-videos/ism-teachings-videos.page.ts ***!
  \*******************************************************************/
/*! exports provided: IsmTeachingsVideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsVideosPage", function() { return IsmTeachingsVideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/bible-sharing/bible-sharing.component */ "./src/app/common/bible-sharing/bible-sharing.component.ts");
















let IsmTeachingsVideosPage = class IsmTeachingsVideosPage {
    constructor(route, location, apiService, dom, router, event_provider, storage, audioService, service, downloadService, platform, actionSheetController, socialSharing, toast, modalController) {
        this.route = route;
        this.location = location;
        this.apiService = apiService;
        this.dom = dom;
        this.router = router;
        this.event_provider = event_provider;
        this.storage = storage;
        this.audioService = audioService;
        this.service = service;
        this.downloadService = downloadService;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.socialSharing = socialSharing;
        this.toast = toast;
        this.modalController = modalController;
        this.videos = [];
        this.videos_loaded = false;
        this.page = 1;
        this.data_ended = false;
        this.not_vimeo = false;
        this.ttb_audios = [];
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink;
        this.showFullDescription = true;
        this.readAudio = 0;
        this.index = 0;
    }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(true, '');
        this.event_provider.hidefooter(true, 'other');
    }
    ngOnInit() {
        this.book_id = this.route.snapshot.paramMap.get('book_id');
        this.book_name = this.route.snapshot.paramMap.get('book_name');
        this.book_name_eng = this.route.snapshot.paramMap.get('book_name_eng');
        this.church_id = this.route.snapshot.paramMap.get('church_id');
        this.data_ended = false;
        this.getTeachingImagesCache(this.book_name_eng);
        this.page = 1;
        if (this.book_name && this.book_id) {
            this.page_type = 'bible';
            if (this.church_id === 1000) {
                this.getVideos(true, '');
            }
            else {
                this.getTtbLanguageAudios(true, '');
            }
        }
        else {
            this.page_type = 'topic';
            this.getVideos(true, '');
        }
    }
    getTtbLanguageAudios(first_load, event) {
        let body;
        // let body = JSON.stringify({
        //   book_name: this.book_name,
        //   page_no: this.page,
        // });
        this.storage.get('app_language').then((res) => {
            console.log(res);
            if (res.bible_id) {
                body = JSON.stringify({
                    language: res.code == 'en' ? 'en_US' : res.code,
                    bible_book: this.book_id,
                    audio_format: "Daily"
                });
                this.apiService.getTtbLanguageAudios(body).subscribe((res) => {
                    if (res && res.length) {
                        if (event != '') {
                            event.target.complete();
                        }
                        this.videos_loaded = true;
                        this.total_page_in_pagination = res.total_pages;
                        this.setCmpData(first_load, res);
                        this.total_page_in_pagination = res.total_pages;
                        // let ttb_audios = res;
                        // ttb_audios.map( x => x['audio_link'] = x.transcoder_audio_path ? this.dom.bypassSecurityTrustUrl(x.transcoder_audio_path) : '');
                        // this.data_ended = ttb_audios.length < 5;
                        // if (first_load === true){
                        //   this.ttb_audios = ttb_audios;
                        // } else {
                        //   this.ttb_audios = this.ttb_audios.concat(ttb_audios);
                        // }
                    }
                });
            }
            else {
                body = JSON.stringify({
                    language: 'en_US',
                    bible_book: this.book_id,
                    audio_format: "Daily"
                });
                this.apiService.getTtbLanguageAudios(body).subscribe((res) => {
                    if (res && res.length) {
                        if (event != '') {
                            event.target.complete();
                        }
                        this.videos_loaded = true;
                        this.total_page_in_pagination = res.total_pages;
                        this.setCmpData(first_load, res);
                        this.total_page_in_pagination = res.total_pages;
                        // let ttb_audios = res;
                        // ttb_audios.map( x => x['audio_link'] = x.transcoder_audio_path ? this.dom.bypassSecurityTrustUrl(x.transcoder_audio_path) : '');
                        // this.data_ended = ttb_audios.length < 5;
                        // if (first_load === true){
                        //   this.ttb_audios = ttb_audios;
                        // } else {
                        //   this.ttb_audios = this.ttb_audios.concat(ttb_audios);
                        // }
                    }
                });
            }
        });
        //     if(localStorage.getItem('app_language') === 'en') {
        //        body = JSON.stringify({
        //         language: 'en_US',
        //         bible_book: this.book_id,
        //         audio_format:"Daily"
        //       });
        //     } else if (localStorage.getItem('app_language') === 'ml') {
        //        body = JSON.stringify({
        //         language: 'ml',
        //         bible_book: this.book_id,
        //         audio_format:"Daily"
        //       });
        //     }
        //     else if (localStorage.getItem('app_language') === 'hi') {
        //       body = JSON.stringify({
        //        language: 'hi',
        //        bible_book: this.book_id,
        //        audio_format:"Daily"
        //      });
        //    }
        //    else if (localStorage.getItem('app_language') === 'ta') {
        //     body = JSON.stringify({
        //      language: 'ta',
        //      bible_book: this.book_id,
        //      audio_format:"Daily"
        //    });
        //  }
        //  else if (localStorage.getItem('app_language') === 'te_IN') {
        //   body = JSON.stringify({
        //    language: 'te_IN',
        //    bible_book: this.book_id,
        //    audio_format:"Daily"
        //  });
        // } else {
        //        body = JSON.stringify({
        //         language: 'en_US',
        //         bible_book: this.book_id,
        //         audio_format:"Daily"
        //       });
        //     }
    }
    // setCmpData(first_load,res){
    //   let ttb_audios = res;
    //   ttb_audios.map( x => {
    //     x['sort_number'] = new Date(x.created).valueOf();
    //   })
    //   ttb_audios.sort( function (a,b) {   // sort according to verse id
    //     var textA = parseInt(a.sort_number);
    //     var textB = parseInt(b.sort_number);
    //     return textA - textB
    //   });
    //   if (first_load === true){
    //         this.ttb_audios = ttb_audios;
    //       } else {
    //         this.ttb_audios = this.ttb_audios.concat(ttb_audios);
    //       }
    //       this.showFullDescription =  new Array(this.ttb_audios.length).fill(true)
    // }
    setCmpData(first_load, res) {
        let ttb_audios = res;
        ttb_audios.map(x => {
            x['sort_number'] = new Date(x.created).valueOf();
        });
        ttb_audios.sort(function (a, b) {
            var textA = parseInt(a.sort_number);
            var textB = parseInt(b.sort_number);
            return textA - textB;
        });
        ttb_audios.forEach(audio => {
            audio.duraionInMints = this.intoMinutes(audio.audio_duration);
            audio.listner = false;
            audio.completeListner = false;
            audio.listenDuration = "0:0";
            audio.seekto = 0;
        });
        if (first_load === true) {
            this.ttb_audios = ttb_audios;
        }
        else {
            this.ttb_audios = this.ttb_audios.concat(ttb_audios);
        }
        this.audioService.study_ttbAudios = new Array(this.ttb_audios.length).fill(false);
        if ((this.audioService.fromPage && this.audioService.fromPage == 'ism-study') && this.audioService.isPlaying && this.audioService.title == (this.audioService.audioIndex > -1 ? this.ttb_audios[this.audioService.audioIndex].name : "")) {
            this.audioService.study_ttbAudios[this.audioService.index] = true;
            this.index = this.audioService.index > -1 ? this.audioService.index : 0;
        }
        // var read_audios = JSON.parse(localStorage.getItem("listenStudy"));
        // read_audios = read_audios ? read_audios.filter(x=>x.bookname == ttb_audios[0].bible_book):[];
        // if(read_audios && read_audios.length > 0 ){
        //   this.readAudio = read_audios.length;
        // }else{
        //   this.readAudio = 0;
        // }
        var read_audios = JSON.parse(localStorage.getItem("listenStudy"));
        read_audios = read_audios ? read_audios.filter(x => x.bookname == ttb_audios[0].bible_book && x.completeListner == true) : [];
        if (read_audios && read_audios.length > 0) {
            this.audioService.readAudio = read_audios.length;
        }
        else {
            this.audioService.readAudio = 0;
        }
        this.audioService.progressForChapter = (this.audioService.readAudio / this.ttb_audios.length) * 100 || 0;
        console.log(this.ttb_audios, "all audiossssss");
    }
    intoMinutes(second) {
        var minutes = Math.floor(second / 60);
        var seconds = Math.floor(second - minutes * 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    }
    playStudy(audioData, index, isplay, duration) {
        this.audioService.clear();
        setTimeout(() => {
            this.audioService.clear();
            this.audioService.tt_all_audios = this.ttb_audios;
            console.log(this.book_name, " book name ", this.book_name_eng);
            this.index = index;
            var audio = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink + audioData.uuid;
            if (isplay == true) {
                this.audioService.study_ttbAudios[index] = false;
                this.audioService.togglePlayer(isplay);
            }
            else {
                if (this.audioService.audioIndex == index) {
                    this.audioService.study_ttbAudios[index] = true;
                    if (this.audioService.audioUrl == audio) {
                        this.audioService.togglePlayer(isplay);
                    }
                    else {
                        if (this.audioService.fromPage && this.audioService.fromPage == "ism-study") {
                            this.audioService.heardStudy(this.audioService.current_duration, this.service.audioData, 'ism-study');
                        }
                        ;
                        this.audioService.study_ttbAudios = new Array(this.ttb_audios.length).fill(false);
                        this.audioService.audioIndex = index;
                        this.audioService.study_ttbAudios[index] = true;
                        this.audioService.fromPage = 'ism-study';
                        this.audioService.title = audioData.name;
                        this.audioService.image = audioData.art_url;
                        // this.audioService.isAudioPlayShows = !pause;
                        this.audioService.liveStreaming = false;
                        audioData.title = audioData.name;
                        audioData.book_id = this.book_id;
                        audioData.image = audioData.art_url;
                        this.service.method = 'ism-study';
                        this.audioService.index = index;
                        this.audioService.audioUrl = audio;
                        this.service.audioData = audioData;
                        this.audioService.bibleBook_name = this.book_name;
                        this.audioService.audioUrl = audio;
                        this.audioService.fromPage = 'ism-study';
                        audioData.seekto > 0 ? this.audioService.startAudio(audio, audioData.seekto) : this.audioService.startAudio(audio);
                    }
                }
                else {
                    if (this.audioService.fromPage && this.audioService.fromPage == "ism-study") {
                        this.audioService.heardStudy(this.audioService.current_duration, this.service.audioData, 'ism-study');
                    }
                    ;
                    this.audioService.study_ttbAudios = new Array(this.ttb_audios.length).fill(false);
                    this.audioService.audioIndex = index;
                    this.audioService.study_ttbAudios[index] = true;
                    this.audioService.fromPage = 'ism-study';
                    this.audioService.title = audioData.name;
                    this.audioService.image = audioData.art_url;
                    // this.audioService.isAudioPlayShows = !pause;
                    this.audioService.liveStreaming = false;
                    audioData.title = audioData.name;
                    audioData.image = audioData.art_url;
                    audioData.book_id = this.book_id;
                    this.service.method = 'ism-study';
                    this.audioService.index = index;
                    this.audioService.bibleBook_name = this.book_name;
                    this.audioService.audioUrl = audio;
                    this.service.audioData = audioData;
                    this.audioService.audioUrl = audio;
                    this.audioService.fromPage = 'ism-study';
                    audioData.seekto > 0 ? this.audioService.startAudio(audio, audioData.seekto) : this.audioService.startAudio(audio);
                }
            }
        }, 500);
    }
    ionViewDidLeave() {
        // this.audioService.setLiveSteam();
    }
    getVideos(first_load, event) {
        let body = JSON.stringify({
            book_id: this.book_id,
            page_no: this.page,
            page_type: this.page_type
        });
        this.apiService.getBibleVideoByBookId(body).subscribe((res) => {
            if (res && res.status === true) {
                if (event != '') {
                    event.target.complete();
                }
                this.videos_loaded = true;
                this.total_page_in_pagination = res.total_pages;
                let videos = res.result;
                this.data_ended = videos.length < 10;
                videos.forEach(item => {
                    if (this.page_type === 'bible') {
                        item['image_preview'] = item.original_app_video_image_url ? item.original_app_video_image_url : '';
                        if (item.vimeo_video_link) {
                            if (item.vimeo_video_link.includes('vimeo.com')) {
                                let vid_id = item.vimeo_video_link.match(/\d+/)[0];
                                let url = "https://player.vimeo.com/video/" + vid_id;
                                item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(url);
                                item.not_vimeo = false;
                            }
                            else {
                                item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(item.vimeo_video_link);
                                item.not_vimeo = true;
                            }
                        }
                        else {
                            item['video_url'] = item.original_app_video_address ? this.dom.bypassSecurityTrustResourceUrl(item.original_app_video_address + '#t0.2') : '';
                            item.not_vimeo = true;
                        }
                    }
                    else {
                        item['video_title'] = item.post_title.replaceAll('-', ' ').replace('.mp4', '');
                        item['book_id'] = 0;
                        item['chapter_id'] = 0;
                        item['verse'] = 0;
                        item['book_name'] = item['video_title'];
                        item['image_preview'] = '';
                        if (item.guid) {
                            if (item.guid.includes('vimeo.com')) {
                                let vid_id = item.guid.match(/\d+/)[0];
                                let url = "https://player.vimeo.com/video/" + vid_id;
                                item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(url);
                                item.not_vimeo = false;
                            }
                            else {
                                item.not_vimeo = true;
                                if (item.guid.includes('wasabisys')) {
                                    this.apiService.checkVideo(item.guid).subscribe(res => {
                                        item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(item.guid + '#t0.6');
                                        item.not_vimeo = true;
                                    }, error => {
                                        if (error.status === 200) {
                                            item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(item.guid + '#t0.6');
                                            item.not_vimeo = true;
                                        }
                                        else {
                                            item.not_vimeo = true;
                                            item['video_url'] = '';
                                        }
                                    });
                                }
                                else {
                                    item['video_url'] = this.dom.bypassSecurityTrustResourceUrl(item.guid + '#t0.6');
                                    item.not_vimeo = true;
                                }
                            }
                        }
                        else {
                            item['video_url'] = '';
                            item.not_vimeo = true;
                        }
                    }
                });
                if (first_load === true) {
                    this.videos = videos;
                }
                else {
                    this.videos = this.videos.concat(videos);
                }
            }
        });
    }
    openVideo(book_id, chapter_id, verse, index, video_url, id, video) {
        if (video_url != '') {
            if (this.page_type === 'topic') {
                this.book_name = this.videos[index].video_title;
            }
            // this.router.navigate(['ism-teachings-video-detail', {
            //   book_id: book_id,
            //   chap_id: chapter_id,
            //   book_name_eng : this.book_name_eng,
            //   verse_id: this.page_type === 'bible' ? verse : this.videos[index].video_id,
            //   book_name: this.book_name,
            //   type : this.page_type,
            //   id: id
            // }]);
        }
    }
    loadData(event) {
        this.page = this.page + 1;
        if (!this.data_ended) {
            this.getTtbLanguageAudios(false, event);
        }
        else {
            event.target.complete();
        }
    }
    // navigating to back page
    gotobackPage() {
        this.location.back();
    }
    getTeachingImagesCache(book_name) {
        if (localStorage.getItem('teaching_images')) {
            if (book_name !== null) {
                book_name = book_name == "Psalms" ? "Psalm" : book_name;
                let images = JSON.parse(localStorage.getItem('teaching_images'));
                let found = images.find(x => x.bible_book_eng === book_name);
                this.ttb_image = found ? found.bible_badge_image : "https://devmanage.radiobase.org/uploads/thrubible.PNG";
            }
        }
        else {
            this.apiService.getTeachingImages().subscribe((res) => {
                if (res && res.status) {
                    localStorage.setItem('teaching_images', JSON.stringify(res.result));
                    if (book_name !== null) {
                        book_name = book_name == "Psalms" ? "Psalm" : book_name;
                        let images = JSON.parse(localStorage.getItem('teaching_images'));
                        let found = images.find(x => x.bible_book_eng === book_name);
                        this.ttb_image = found ? found.bible_badge_image : "https://devmanage.radiobase.org/uploads/thrubible.PNG";
                    }
                }
            });
        }
    }
    toggleDescription() {
        this.showFullDescription = !this.showFullDescription;
    }
    studyRead(read) {
        var listenData = localStorage.getItem("listenStudy") ? JSON.parse(localStorage.getItem("listenStudy")) : [];
        if (listenData && listenData.length > -1) {
            var idx = listenData.findIndex(x => x.id == read.uuid);
            if (idx > -1) {
                var idxs = this.ttb_audios.findIndex(x => x.uuid == listenData[idx].id);
                if (idxs > -1) {
                    this.ttb_audios[idxs].listenDuration = listenData[idx].duration;
                    this.ttb_audios[idxs].listner = true;
                    this.ttb_audios[idxs].completeListner = listenData[idx].completeListner;
                    this.ttb_audios[idxs].date = listenData[idx].date;
                    var timeArray = listenData[idx].duration.split(':');
                    var minutes = parseInt(timeArray[0], 10);
                    var sec = parseInt(timeArray[1], 10);
                    var totalMinutes = minutes * 60 + sec;
                    let seek = Math.floor(totalMinutes);
                    this.ttb_audios[idxs].seekto = seek;
                    this.ttb_audios[idxs].progress = (seek / this.ttb_audios[idxs].audio_duration) * 100 || 0;
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
    }
    seek() {
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
    shareURL(audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.socialSharing.share(`Study Thru The Bible - ${audio.name} \n` + src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink + audio.uuid).then(data => {
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
                                navigator.clipboard.writeText(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink + audio.uuid);
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
    downloadCompoent(video) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(video, "next");
            const modal = yield this.modalController.create({
                component: _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_15__["BibleSharingComponent"],
                componentProps: {
                    todayStudy: JSON.stringify(video),
                    studyType: "ism-study",
                    length: this.ttb_audios.length,
                    passageHide: true,
                },
                cssClass: 'BibleModal ForBibleSharing'
            });
            modal.onDidDismiss()
                .then((data) => {
                const user = data['data']; // Here's your selected user!
                if (user && user.data === 'passenger') {
                    // this.ReadTheBiblePassage(this.today);
                }
            });
            return yield modal.present();
        });
    }
};
IsmTeachingsVideosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_9__["AudioplayerService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_12__["DownloadService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"])
], IsmTeachingsVideosPage.prototype, "range", void 0);
IsmTeachingsVideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ism-teachings-videos',
        template: __webpack_require__(/*! raw-loader!./ism-teachings-videos.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-teachings-videos/ism-teachings-videos.page.html"),
        styles: [__webpack_require__(/*! ./ism-teachings-videos.page.scss */ "./src/app/ism-teachings-videos/ism-teachings-videos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_9__["AudioplayerService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
        src_services_download_service__WEBPACK_IMPORTED_MODULE_12__["DownloadService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], IsmTeachingsVideosPage);



/***/ })

}]);
//# sourceMappingURL=ism-teachings-videos-ism-teachings-videos-module-es2015.js.map