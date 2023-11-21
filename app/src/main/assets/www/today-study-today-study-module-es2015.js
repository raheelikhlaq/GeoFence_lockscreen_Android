(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["today-study-today-study-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/today-study/today-study.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/today-study/today-study.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<!-- <ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"!home_tabs\" (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{book_name}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<!--end mobile header-->\n<ion-content>\n\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <!--      <div *ngIf=\"environment.is_ttb_language_app\" class=\"ion-text-center\">-->\n      <!--        <ion-label class=\"ion-text-wrap\">{{chap_id}} </ion-label>-->\n      <!--      </div>-->\n      <div class=\"mb-30\">\n        <div  *ngIf=\"scheduled_date\" class=\"ion-text-center calendarNav\">\n          <ion-button style=\"--background-hover: #fff; --background-focused:#fff; --background-activated:#fff;\" (click)=\"previousStudy()\" [disabled]=\"!backBtn\" class=\"commonBtn--transparent-blackOutline commonBtn--fullRound\">\n            <!-- <ion-icon     name=\"arrow-back\"></ion-icon> -->\n            <ion-icon class=\"text-white-on-dark\" name=\"arrow-back\"></ion-icon>\n          </ion-button>\n          <label *ngIf=\"scheduled_date == today\" class=\"text-white-on-dark\" >Today</label>\n          <label *ngIf=\"scheduled_date != today\" class=\"text-white-on-dark\" >{{scheduled_date | date: 'MMM d'}}</label>\n          <ion-button style=\"--background-hover: #fff; --background-focused:#fff; --background-activated:#fff;\" (click)=\"nextStudy()\" [disabled]=\"!nextBtn\" class=\"commonBtn--transparent-blackOutline commonBtn--fullRound\">\n            <!-- <ion-icon      name=\"arrow-forward\"></ion-icon> -->\n            <ion-icon class=\"text-white-on-dark\" name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n         \n        </div>\n        <ion-row class=\"align-items-stretch\" *ngIf=\"video\">\n          <ion-col size=\"12\">\n            <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-margin-bottom\">\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <img *ngIf=\"video.video_url == ''\" src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                <iframe *ngIf=\"video.video_url !== '' && page_type === 'bible'\" class=\"embed-responsive-item\"\n                  width=\"100%\" height=\"100%\" [src]=\"video.video_url\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                <video *ngIf=\"page_type != 'bible'\" width=\"100%\" height=\"100%\" controls>\n                  <source [src]=\"video.video_url\" type=\"video/mp4\">\n                </video>\n              </div>\n              <ion-card-content>\n                <ion-card-title class=\"heading4\">{{video.video_title ? video.video_title : 'Title N/A'}}\n                </ion-card-title>\n                <p *ngIf=\"page_type !== 'bible'\">{{video.created_at | date: 'medium'}}</p>\n              </ion-card-content>\n            </ion-card>\n            <p *ngIf=\"show_bible_project_line\" style=\"font-size: x-small; text-align: center\">Video content provided by\n              The BibleProject. Learn more at <a (click)=\"openabouturlinapp()\"> BibleProject.com</a></p>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-text-center teaching_img\">\n          <!--          <div class=\"\" [ngStyle]=\"{'background': '#000 url(' + ttb_badge + ')'}\"></div>-->\n          <div class=\"embed-responsive embed-responsive-4by3\" style=\"border-radius: 10px\">\n            <img *ngIf=\"ttb_badge\" [src]=\" ttb_badge\" class=\"embed-responsive-item\"  alt=\"\">\n          </div>\n\n          <h4 *ngIf=\"chap_id\" style=\"text-align: initial;margin-bottom: 0px; margin-top: 24px;\" class=\"ion-text-wrap text-white-on-dark\">{{chap_id}} </h4>\n          <h6  class=\"ion-text-wrap dattaActive text-white-on-dark\">{{scheduled_date | date: 'mediumDate'}} </h6>\n          <small class=\"smallText ion-float-left ion-text-left text-white-on-dark\">{{description}}</small>\n          <!-- <ion-spinner align=\"center\" *ngIf=\"!video_loaded\" name=\"bubbles\"></ion-spinner> -->\n        </div>\n        <app-audio-player *ngIf=\"audioUrl\" [audioData]=\"audioData\"  [fromPage] = \"'study'\" [method]=\"'study'\" [is_today_study]=\"true\" [audioTitle]=\"chap_id\" [audioUrl]=\"audioUrl\" [isSermon]=\"false\"  >\n        </app-audio-player>\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"ion-text-left\" size=\"6\">\n            <!-- <div (click)=\"previousStudy()\" *ngIf=\"backBtn\" class=\"back_next_Icon\" >\n                <ion-icon style=\"margin-right:2px;\"   class=\"ion-text-wrap text-white-on-dark\" name=\"arrow-back\"></ion-icon>\n                <label class=\"ion-text-wrap text-white-on-dark\">Previous</label>\n            </div> -->\n            <div (click)=\"seemore()\" *ngIf=\"!backBtn\" class=\"back_next_Icon\" >\n              <label style=\"text-decoration-line: underline;\" class=\"ion-text-wrap text-white-on-dark\">Show more</label>\n            </div>\n\n          </ion-col>\n          <!-- <ion-col size=\"6\">\n            <small class=\"smallText ion-float-left ion-text-left\">{{description}}</small>\n          </ion-col> -->\n          <!-- <ion-col class=\"ion-text-right\" size=\"6\">\n            <div *ngIf=\"nextBtn\" class=\"back_next_Icon\" (click)=\"nextStudy()\">\n            <label style=\"margin-left:2px;\" class=\"ion-text-wrap text-white-on-dark\" >Next</label>\n            <ion-icon  class=\"ion-text-wrap text-white-on-dark\" name=\"arrow-forward\"></ion-icon>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </div>\n\n      <!--        <ion-spinner align=\"center\" *ngIf=\"!testAudio\" name=\"bubbles\"></ion-spinner>-->\n\n      <!--        <ion-button *ngIf=\"testAudio && !isPlaying\" (click)=\"playTestAudio()\">PLAY TEST</ion-button>-->\n      <!--        <ion-button *ngIf=\"testAudio && isPlaying\" (click)=\"pauseTestAudio()\">  PAUSE TEST </ion-button>-->\n\n      <!--        <ion-toolbar color=\"primary\" padding>-->\n      <!--        <div class=\"ion-text-center\">-->\n      <!--            <ion-button (click)=\"play()\" size=\"large\" fill=\"clear\" color=\"light\">-->\n      <!--                <ng-container *ngIf=\"isLoading; else loaded\">Loading</ng-container>-->\n\n      <!--                <ng-template #loaded>-->\n      <!--                    &lt;!&ndash; <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\">-->\n      <!--                    </ion-icon> &ndash;&gt;-->\n      <!--                    {{ isPlaying ? 'pause' : 'play' }}-->\n      <!--                </ng-template>-->\n      <!--            </ion-button>-->\n      <!--        </div>-->\n\n      <!--        <ion-range-->\n      <!--                min=\"0\"-->\n      <!--                [max]=\"duration\"-->\n      <!--                [value]=\"currentTime\"-->\n      <!--                (ionChange)=\"seekTest($event)\"-->\n      <!--                color=\"light\">-->\n      <!--            <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label>-->\n      <!--            <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>-->\n      <!--        </ion-range>-->\n      <!--        </ion-toolbar>-->\n      <!--        <audio #player src=\"http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\"></audio>-->\n\n    </div>\n  </div>\n \n</ion-content>\n\n<!-- <ion-footer *ngIf=\"footerEnable\" class=\"bible-footer\">\n  <div>\n    <div class=\"audioPlayer\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n          <ion-text class=\"audioPlayer__text\">{{current_duration ?\n                    current_duration\n                    : '0:00'}}\n          </ion-text>\n         </ion-col>\n        <ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">\n          <ion-range style=\"margin-top: 0;\" class=\"range range--audioPlayer\" #range [(ngModel)]=\"progress\" max=\"100\"\n            (touchend)=\"seek('chapter')\" (mouseup)=\"seek('chapter')\"></ion-range>\n        </ion-col>\n        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n          <ion-text *ngIf=\"!isPlaying || audioPlay\" class=\"audioPlayer__text\">{{current_total_duration ?\n                    current_total_duration : '00:00'}}\n          </ion-text>\n          <ion-spinner *ngIf=\"isPlaying && !audioPlay\" style=\"position: relative;top: 6px;\" align=\"center\" name=\"dots\">\n          </ion-spinner>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"padding-bottom: 15px;\" class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n         \n        </ion-col>\n        <ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">\n          <ion-button (click)=\"backward('chapter')\" class=\"commonBtn--transparent commonBtn--small\">\n            <ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>\n          </ion-button>\n          \n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n            (click)=\"togglePlayer('chapter', false)\" *ngIf=\"!isPlaying\">\n            <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n          </ion-button>\n\n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n            (click)=\"togglePlayer('chapter',true)\" *ngIf=\"isPlaying && audioPlay\">\n            <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\" *ngIf=\"isPlaying && !audioPlay\">\n            <ion-spinner align=\"center\" name=\"bubbles\"></ion-spinner>\n          </ion-button>\n          \n          <ion-button (click)=\"forward('chapter')\" class=\"commonBtn--transparent commonBtn--small\">\n            <ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n         \n        </ion-col>\n      </ion-row>\n    </div>\n   </div>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/today-study/today-study.module.ts":
/*!***************************************************!*\
  !*** ./src/app/today-study/today-study.module.ts ***!
  \***************************************************/
/*! exports provided: TodayStudyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayStudyPageModule", function() { return TodayStudyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _today_study_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./today-study.page */ "./src/app/today-study/today-study.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _today_study_page__WEBPACK_IMPORTED_MODULE_6__["TodayStudyPage"]
    }
];
let TodayStudyPageModule = class TodayStudyPageModule {
};
TodayStudyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_today_study_page__WEBPACK_IMPORTED_MODULE_6__["TodayStudyPage"]]
    })
], TodayStudyPageModule);



/***/ }),

/***/ "./src/app/today-study/today-study.page.scss":
/*!***************************************************!*\
  !*** ./src/app/today-study/today-study.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendarNav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 15px;\n}\n.calendarNav ion-icon {\n  cursor: pointer;\n  font-size: 20px;\n}\n.calendarNav ion-icon.disabled {\n  cursor: none;\n  opacity: 0.5;\n}\n.dattaActive {\n  margin: 0;\n  text-align: left;\n  font-size: 12px !important;\n  position: relative;\n  left: 1px;\n  top: 8px;\n  margin-bottom: 12px;\n}\n.smallText {\n  font-weight: 100;\n  font-size: 12px !important;\n  margin-bottom: 16px;\n}\n.back_next_Icon {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3RvZGF5LXN0dWR5L3RvZGF5LXN0dWR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG9kYXktc3R1ZHkvdG9kYXktc3R1ZHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0daO0FERUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0csMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL3RvZGF5LXN0dWR5L3RvZGF5LXN0dWR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhck5hdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAmLmRpc2FibGVke1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGF0dGFBY3RpdmV7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIFxufVxuLnNtYWxsVGV4dHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5iYWNrX25leHRfSWNvbntcbiAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIuY2FsZW5kYXJOYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jYWxlbmRhck5hdiBpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNhbGVuZGFyTmF2IGlvbi1pY29uLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub25lO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXR0YUFjdGl2ZSB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnNtYWxsVGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYmFja19uZXh0X0ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/today-study/today-study.page.ts":
/*!*************************************************!*\
  !*** ./src/app/today-study/today-study.page.ts ***!
  \*************************************************/
/*! exports provided: TodayStudyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayStudyPage", function() { return TodayStudyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/music-controls/ngx */ "./node_modules/@ionic-native/music-controls/ngx/index.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");

















let TodayStudyPage = class TodayStudyPage {
    constructor(apiService, route, location, dom, router, platform, iab, event_provider, musicControls, media, datePipe, loader, analyticsFirebase, toast, audioService) {
        this.apiService = apiService;
        this.route = route;
        this.location = location;
        this.dom = dom;
        this.router = router;
        this.platform = platform;
        this.iab = iab;
        this.event_provider = event_provider;
        this.musicControls = musicControls;
        this.media = media;
        this.datePipe = datePipe;
        this.loader = loader;
        this.analyticsFirebase = analyticsFirebase;
        this.toast = toast;
        this.audioService = audioService;
        this.player = null;
        this.video_loaded = false;
        this.chapter_audio_file_loaded = false;
        this.ttb_badge = '';
        this.audioPlay = false;
        this.isPlaying = false;
        this.audioData = {};
        this.teaching_player = null;
        this.chapter_audio_first_load = true;
        this.display_media_player_loader = false;
        this.progress = 0;
        this.progress_teachings = 0;
        this.isPlaying_teachings = false;
        this.footerEnable = false;
        this.home_tabs = false;
        this.nextBtn = false;
        this.backBtn = true;
        this.show_bible_project_line = false;
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes'
        };
    }
    ngOnInit() {
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // Filtering out AUDIO page from app pages
                let app_page = res.apppages.find((x) => x.name === "Today Study");
                console.log(app_page);
                this.page_id = app_page.id;
                this.seemoreUrl = app_page.url;
            }
        }));
    }
    ionViewDidEnter(scheduled_date) {
        this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.event_provider.hidefooter(true, 'other');
        this.from = this.router.url.split('/');
        // this.chapter_audio_first_load = false;
        // this.display_media_player_loader = false;
        this.current_total_duration = '0:00';
        // this.event_provider.hidefooter(true, '');
        if (this.from[1] == 'today-study' || this.from[2] == 'today-study') {
            this.home_tabs = true;
            let body = JSON.stringify({
                language: localStorage.getItem('app_language') == 'en' ?
                    localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language'),
                scheduled_date: scheduled_date ? scheduled_date : this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
                audio_format: "Daily"
            });
            if (scheduled_date && scheduled_date != this.datePipe.transform(new Date(), 'yyyy-MM-dd')) {
                this.nextBtn = true;
                console.log("false");
            }
            else {
                console.log("entyer");
                this.nextBtn = false;
            }
            if (scheduled_date && scheduled_date == this.datePipe.transform((Date.now() - (86400000 * 7)), 'yyyy-MM-dd')) {
                this.backBtn = false;
                console.log("false last day");
            }
            else {
                console.log("entye last day");
                this.backBtn = true;
            }
            console.log(body, "bodsyyyyyy");
            this.loader.presentLoading().then(() => {
                this.apiService.getTodayStudy(body).subscribe((res) => {
                    console.log(res);
                    if (res) {
                        this.book_id = res.bible_book;
                        this.book_name = res.bible_book;
                        this.book_name_eng = res.bible_book;
                        this.chap_id = res.name;
                        this.id = res.uuid;
                        this.audioData.title = this.chap_id;
                        this.audioData.id = this.id;
                        this.scheduled_date = res.scheduled_date;
                        this.description = res.description,
                            this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink + this.id;
                        this.getTtbLanguageAudio();
                        this.loader.stopLoading();
                    }
                    else {
                        this.loader.stopLoading();
                    }
                });
            });
        }
        else {
            this.book_id = this.route.snapshot.paramMap.get('book_id');
            this.book_name = this.route.snapshot.paramMap.get('book_name');
            this.book_name_eng = this.route.snapshot.paramMap.get('book_name_eng');
            this.chap_id = this.route.snapshot.paramMap.get('chap_id');
            this.verse_id = this.route.snapshot.paramMap.get('verse_id');
            this.page_type = this.route.snapshot.paramMap.get('type');
            this.id = this.route.snapshot.paramMap.get('id');
            if (this.id) {
                this.show_bible_project_line = (this.id > 0 && this.id < 14);
            }
            this.getTtbLanguageAudio();
        }
        this.footerEnable = true;
    }
    getVideo() {
        if ((this.book_id && this.verse_id && this.chap_id) || this.page_type === 'topic') {
            let body = JSON.stringify({
                book_id: this.book_id,
                chap_id: this.chap_id,
                verse_id: this.page_type === 'bible' ? this.verse_id : 0,
                page_type: this.page_type,
                video_id: this.page_type === 'topic' ? this.verse_id : 0,
                id: this.page_type === 'bible' ? this.id : 0
            });
            this.apiService.getBibleVideo(body).subscribe((res) => {
                if (res && res.status === true) {
                    this.video_loaded = true;
                    this.video = res.result;
                    if (this.page_type === 'bible') {
                        this.video['video_url'] = this.video.original_app_video_address ? this.dom.bypassSecurityTrustResourceUrl(this.video.original_app_video_address) : '';
                    }
                    else {
                        this.video = this.video[0];
                        this.video['video_title'] = this.video.post_title.replaceAll('-', ' ').replace('.mp4', '');
                        this.video['book_id'] = 0;
                        this.video['chapter_id'] = 0;
                        this.video['verse'] = 0;
                        this.video['created_at'] = this.video.post_date;
                        this.video['book_name'] = this.video['video_title'];
                        this.video['video_url'] = this.dom.bypassSecurityTrustResourceUrl(this.video.guid);
                        this.video.not_vimeo = true;
                    }
                }
            });
        }
    }
    getTtbLanguageAudio() {
        this.chapter_audio_file_loaded = true;
        this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].cmp_audioLink + this.id;
        // this.start('chapter', environment.cmp_audioLink + this.id);
        let body = JSON.stringify({
            book_id: this.id
        });
        let badge_image = this.getTeachingImagesCache(this.book_name_eng);
        this.ttb_badge = badge_image ? badge_image.image_path : 'https://devmanage.radiobase.org/uploads/thrubible.PNG';
        this.audioData.url = this.audioUrl;
        this.audioData.image = this.ttb_badge;
        // this.apiService.getTtbLanguageAudioById(body).subscribe( (res: any) => {
        //   if (res && res.status === true){
        //     let ttb_audio = res.result;
        //     this.ttb_badge = ttb_audio.image_path ? ttb_audio.image_path : '../../assets/img/thrubible.PNG';
        //     if (ttb_audio){
        //       this.video_loaded = true;
        //       this.ttb_audio = ttb_audio;
        //       // this.start('chapter', this.ttb_audio.folder_path);
        //       this.start('chapter', environment.cmp_audioLink + this.id);
        //     }
        //   }
        // })
    }
    getTeachingImagesCache(book_name) {
        if (localStorage.getItem('teaching_images')) {
            if (book_name !== null) {
                let images = JSON.parse(localStorage.getItem('teaching_images'));
                let found = images.find(x => x.bible_book_eng === book_name);
                return found ? found : '';
            }
        }
        else {
            this.apiService.getTeachingImages().subscribe((res) => {
                if (res && res.status) {
                    localStorage.setItem('teaching_images', JSON.stringify(res.result));
                    if (book_name !== null) {
                        let images = JSON.parse(localStorage.getItem('teaching_images'));
                        let found = images.find(x => x.bible_book_eng === book_name);
                        return found ? found : '';
                    }
                }
            });
        }
    }
    // ==================== STARTING the audio player ==================================================================
    start(type, track) {
        console.log('start');
        let self = this;
        this.audioPlay = false;
        track = track.replaceAll(/ /g, '%20');
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    this.chapterMediaAudio = this.media.create(track);
                    this.chapter_audio_file_loaded = true;
                    this.chapterMediaAudio.onStatusUpdate.subscribe(status => {
                        if (status === 1) {
                            if (this.chapter_audio_first_load) {
                                this.display_media_player_loader = true;
                                this.isPlaying = true;
                            }
                        }
                        if (status === 2) {
                            if (this.chapter_audio_first_load) {
                                self.createAnalytics('onFirstPlay', track);
                                this.display_media_player_loader = true;
                                let interval = setInterval(() => {
                                    if (this.chapterMediaAudio.getDuration() > 0) {
                                        // this.zone.run( () => {
                                        this.current_total_duration = this.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
                                        this.chapter_audio_first_load = false;
                                        this.display_media_player_loader = false;
                                        this.isPlaying = true;
                                        this.audioPlay = true;
                                        // });
                                        clearInterval(interval);
                                    }
                                }, 2000);
                            }
                            if (!this.router.url.includes('teachings-video-detail') && !this.router.url.includes('today-study')) {
                                this.chapterMediaAudio.stop();
                            }
                        }
                        if (status === 3) {
                        }
                        if (status === 4) {
                            // self.createAnalytics('durationOfPlay' , track)
                        }
                    }); // fires when file status changes
                    this.isPlaying = false;
                    this.updateProgress("chapter");
                    this.chapterMediaAudio.onError.subscribe(error => console.log('Error!', error));
                });
            }
            else {
                if (this.player) {
                    this.player.stop();
                }
                this.player = new howler__WEBPACK_IMPORTED_MODULE_8__["Howl"]({
                    src: [track],
                    html5: true,
                    format: ['wav', 'mp3', 'WAV', 'mp4', 'dolby', 'm4a'],
                    onplay: () => {
                        this.isPlaying = true;
                        this.audioPlay = true;
                        this.updateProgress("chapter");
                    },
                    onend: () => {
                    },
                    onerror: (er) => {
                        console.log("error: ", er);
                    }
                });
                self.display_media_player_loader = true;
                this.player.once('load', function () {
                    // self.createAnalytics('onFirstPlay' , track)
                    //self.current_sound_id = self.player.play();
                    let interval = setInterval(() => {
                        if (self.player.duration(self.current_sound_id) > 0) {
                            self.current_total_duration = self.intoMinutesTotalDuration(self.player.duration(self.current_sound_id));
                            self.chapter_audio_first_load = false;
                            self.display_media_player_loader = false;
                            clearInterval(interval);
                        }
                    }, 2000);
                    // self.current_total_duration = self.intoMinutesTotalDuration(self.player.duration(self.current_sound_id));
                    self.player.stop(self.current_sound_id);
                    self.isPlaying = false;
                    if (self.player) {
                        self.player.stop();
                    }
                });
            }
        }
    }
    //  =================================================================================================================
    intoMinutesTotalDuration(second) {
        var minutes = Math.floor(second / 60);
        var seconds = Math.floor(second - minutes * 60);
        let sec;
        sec = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + sec;
    }
    intoMinutes(second) {
        // returns rounded off minutes and seconds
        var minutes = Math.floor(second / 60) || 0;
        var seconds = Math.floor(second - minutes * 60) || 0;
        let min;
        let sec;
        if (minutes < 10) {
            min = minutes;
        }
        else {
            min = minutes.toFixed(0);
        }
        if (seconds < 10) {
            sec = '0' + seconds;
        }
        else {
            sec = seconds;
        }
        return min + ':' + sec;
    }
    // play and pause audio
    // play and pause audio
    togglePlayer(type, pause) {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.isPlaying = !pause;
                if (pause) {
                    this.chapterMediaAudio.pause();
                    this.musicControls.updateIsPlaying(false);
                }
                else {
                    this.chapterMediaAudio.play({ playAudioWhenScreenIsLocked: true });
                    // this.createLockScreenPlayer();
                }
            });
        }
        else {
            this.isPlaying = !pause;
            if (this.player) {
                if (pause) {
                    this.player.pause(this.current_sound_id);
                    this.musicControls.updateIsPlaying(false);
                }
                else {
                    this.current_sound_id = this.player.play();
                    // this.createLockScreenPlayer();
                }
            }
        }
    }
    // moving the audio forward or backward
    seek(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    this.chapterMediaAudio.getCurrentPosition().then((position) => {
                        if (position && position >= 0) {
                            // get current playback position
                            let newValue = +this.range.value;
                            let val = this.chapterMediaAudio.getDuration() * (newValue / 100) * 1000;
                            if (val) {
                                this.chapterMediaAudio.seekTo(val);
                            }
                        }
                    });
                });
            }
            else {
                let newValue = +this.range.value;
                let duration = this.player.duration();
                this.player.seek(duration * (newValue / 100));
            }
        }
    }
    // update the progress bar for audio
    updateProgress(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    this.chapterMediaAudio.getCurrentPosition().then((position) => {
                        if (position >= 0) {
                            let seek = Math.floor(position);
                            this.current_duration = seek > 1 ? this.intoMinutes(seek) : '';
                            this.progress = (seek / this.chapterMediaAudio.getDuration()) * 100 || 0;
                        }
                        else {
                            this.current_duration = '';
                            this.progress = 0;
                        }
                        setTimeout(() => {
                            this.updateProgress("chapter");
                        }, 1000);
                    });
                });
            }
            else {
                let seek = Math.floor(this.player.seek());
                this.current_duration = this.intoMinutes(seek);
                this.progress = (seek / this.player.duration()) * 100 || 0;
                setTimeout(() => {
                    this.updateProgress("chapter");
                }, 1000);
            }
        }
    }
    // forward audio by 10 seconds
    forward(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    // get current playback position
                    this.chapterMediaAudio.getCurrentPosition().then((position) => {
                        let seek = Math.floor(position);
                        seek = seek * 1000;
                        this.chapterMediaAudio.seekTo(seek + 10000);
                    });
                });
            }
            else {
                let seek = Math.floor(this.player.seek());
                this.player.seek(seek + 10);
            }
        }
        else if (type === "teachings") {
            let seek = Math.floor(this.teaching_player.seek());
            this.teaching_player.seek(seek + 10);
        }
    }
    // backward audio by 10 seconds
    backward(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    // get current playback position
                    this.chapterMediaAudio.getCurrentPosition().then((position) => {
                        let seek = Math.floor(position);
                        seek = seek * 1000;
                        this.chapterMediaAudio.seekTo(seek - 10000);
                    });
                });
            }
            else {
                let seek = Math.floor(this.player.seek());
                let duration = 10;
                if (seek <= 10) {
                    duration = seek;
                }
                this.player.seek(seek - duration);
            }
        }
        else if (type === "teachings") {
            let seek = Math.floor(this.teaching_player.seek());
            this.teaching_player.seek(seek - 10);
        }
    }
    stopAudioForTtb() {
        // this.event_provider.stopAudioPlayer(-1);
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                if (this.chapterMediaAudio) {
                    this.togglePlayer("chapter", true);
                }
            });
        }
        else {
            if (this.player) {
                this.togglePlayer("chapter", true);
            }
        }
    }
    previousStudy() {
        var date = this.timeStamp ? this.timeStamp : Date.now();
        var newdate = date - 86400000;
        console.log(this.datePipe.transform(date, 'yyyy-MM-dd'), " ------- ", this.datePipe.transform(newdate, 'yyyy-MM-dd'));
        this.timeStamp = newdate;
        this.ionViewDidEnter(this.datePipe.transform(newdate, 'yyyy-MM-dd'));
    }
    nextStudy() {
        var date = this.timeStamp ? this.timeStamp : Date.now();
        var newdate = date + 86400000;
        console.log(this.datePipe.transform(date, 'yyyy-MM-dd'), " ------- ", this.datePipe.transform(newdate, 'yyyy-MM-dd'));
        this.timeStamp = newdate;
        this.ionViewDidEnter(this.datePipe.transform(newdate, 'yyyy-MM-dd'));
    }
    seemore() {
        // window.open(this.seemoreUrl)
        this.router.navigate(['ism-teachings/bible', {
                data: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].church_id
            }]);
        // if(this.seemoreUrl){
        //   this.iab.create(this.seemoreUrl, '_system', this.options);
        // }else{
        //   this.toast.presentToastWithOptions( "No data found", 'Today Study', 'warning');
        // }
    }
    // // moving the audio forward or backward
    // seek(type) {
    //     if (type === "chapter") {
    //         let newValue = +this.range.value;
    //         let duration = this.player.duration();
    //         this.player.seek(duration * (newValue / 100));
    //     } else if (type === "teachings") {
    //         let newValue = +this.range_teachings.value;
    //         let duration = this.teaching_player.duration();
    //         this.teaching_player.seek(duration * (newValue / 100));
    //     }
    // }
    // // update the progress bar for audio
    // updateProgress(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         this.current_duration = this.intoMinutes(seek);
    //         this.progress = (seek / this.player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //             this.updateProgress("chapter");
    //         }, 1000)
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.current_duration_teaching = this.intoMinutes(seek);
    //         this.progress_teachings = (seek / this.teaching_player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //             this.updateProgress("teachings");
    //         }, 1000)
    //     }
    // }
    // // forward audio by 10 seconds
    // forward(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         this.player.seek(seek + 10);
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.teaching_player.seek(seek + 10);
    //     }
    // }
    // // backward audio by 10 seconds
    // backward(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         let duration = 10;
    //         if (seek <= 10){
    //             duration = seek
    //         }
    //         this.player.seek(seek - duration);
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.teaching_player.seek(seek - 10);
    //     }
    // }
    // inside app on page with done button
    openabouturlinapp() {
        // about url
        let link = 'https://bibleproject.com';
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(link, '_blank', this.options);
        }
        else {
            this.iab.create(link, '_self', this.options);
        }
    }
    //fire firebase analytics event function according to metrics 
    createAnalytics(metricType, trackUrl) {
        const object = {
            title: this.chap_id,
            teaching_Type: 'Daily',
            app_section: this.home_tabs ? 'Today Study' : 'Study_Section',
            media_format: 'Audio',
            duration: this.current_duration
        };
        console.log(object);
        if (metricType == 'onFirstPlay') {
            delete object.duration;
            console.log("trigger", "study_program_start", object);
            this.analyticsFirebase.logEvent('study_program_start', object);
        }
        else if (metricType == 'durationOfPlay') {
            console.log("trigger", "study_program_duration", object);
            this.analyticsFirebase.logEvent('study_program_duration', object);
        }
    }
    ionViewDidLeave() {
        this.home_tabs = false;
        //   if (this.player) {
        //     this.togglePlayer("chapter", true);
        // }
        // if(this.chapterMediaAudio){
        //   this.chapterMediaAudio.stop();
        // }
        // if (this.teaching_player) {
        //     this.togglePlayer("teachings", true);
        // }
        // this.audioService.setLiveSteam();
    }
    // navigating to back page
    gotobackPage() {
        // if(this.chapterMediaAudio){
        //   this.chapterMediaAudio.stop();
        // }
        this.location.back();
    }
};
TodayStudyPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
    { type: _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_12__["MusicControls"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_11__["Media"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseX"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_16__["ToastService"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_15__["AudioplayerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRange"])
], TodayStudyPage.prototype, "range", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range_teachings', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRange"])
], TodayStudyPage.prototype, "range_teachings", void 0);
TodayStudyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-today-study',
        template: __webpack_require__(/*! raw-loader!./today-study.page.html */ "./node_modules/raw-loader/index.js!./src/app/today-study/today-study.page.html"),
        styles: [__webpack_require__(/*! ./today-study.page.scss */ "./src/app/today-study/today-study.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
        _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_12__["MusicControls"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_11__["Media"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseX"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_16__["ToastService"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_15__["AudioplayerService"]])
], TodayStudyPage);



/***/ })

}]);
//# sourceMappingURL=today-study-today-study-module-es2015.js.map