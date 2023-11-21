(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-teachings-video-detail-ism-teachings-video-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"!home_tabs\" (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{book_name}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <!--      <div *ngIf=\"environment.is_ttb_language_app\" class=\"ion-text-center\">-->\n      <!--        <ion-label class=\"ion-text-wrap\">{{chap_id}} </ion-label>-->\n      <!--      </div>-->\n      <div class=\"mb-30\">\n        <ion-row class=\"align-items-stretch\" *ngIf=\"video\">\n          <ion-col size=\"12\">\n            <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-margin-bottom\">\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <img *ngIf=\"video.video_url == ''\" src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                <iframe *ngIf=\"video.video_url !== '' && page_type === 'bible'\" class=\"embed-responsive-item\"\n                  width=\"100%\" height=\"100%\" [src]=\"video.video_url\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                <video *ngIf=\"page_type != 'bible'\" width=\"100%\" height=\"100%\" controls>\n                  <source [src]=\"video.video_url\" type=\"video/mp4\">\n                </video>\n              </div>\n              <ion-card-content>\n                <ion-card-title class=\"heading4\">{{video.video_title ? video.video_title : 'Title N/A'}}\n                </ion-card-title>\n                <p *ngIf=\"page_type !== 'bible'\">{{video.created_at | date: 'medium'}}</p>\n              </ion-card-content>\n            </ion-card>\n            <p *ngIf=\"show_bible_project_line\" style=\"font-size: x-small; text-align: center\">Video content provided by\n              The BibleProject. Learn more at <a (click)=\"openabouturlinapp()\"> BibleProject.com</a></p>\n          </ion-col>\n        </ion-row>\n        <div class=\"ion-text-center teaching_img\">\n          <!--          <div class=\"\" [ngStyle]=\"{'background': '#000 url(' + ttb_badge + ')'}\"></div>-->\n          <div class=\"embed-responsive embed-responsive-4by3\" style=\"border-radius: 10px\">\n            <img *ngIf=\"ttb_badge\" [src]=\" ttb_badge\" class=\"embed-responsive-item\" style=\"height: auto;\" alt=\"\">\n          </div>\n\n          <h4 *ngIf=\"chap_id\" class=\"ion-text-wrap text-white-on-dark\">{{chap_id}} </h4>\n          <!-- <ion-spinner align=\"center\" *ngIf=\"!video_loaded\" name=\"bubbles\"></ion-spinner> -->\n        </div>\n      </div>\n      <app-audio-player *ngIf=\"audioUrl\" [page_id]=\"page_id\" [audioData]=\"audioData\" [study_image]=\"true\"  [fromPage] = \"'study'\" [is_today_study]=\"false\"  [method]=\"'study'\" [audioTitle]=\"chap_id\" [audioUrl]=\"audioUrl\" [isSermon]=\"false\"  >\n      </app-audio-player>\n\n      <!--        <ion-spinner align=\"center\" *ngIf=\"!testAudio\" name=\"bubbles\"></ion-spinner>-->\n\n      <!--        <ion-button *ngIf=\"testAudio && !isPlaying\" (click)=\"playTestAudio()\">PLAY TEST</ion-button>-->\n      <!--        <ion-button *ngIf=\"testAudio && isPlaying\" (click)=\"pauseTestAudio()\">  PAUSE TEST </ion-button>-->\n\n      <!--        <ion-toolbar color=\"primary\" padding>-->\n      <!--        <div class=\"ion-text-center\">-->\n      <!--            <ion-button (click)=\"play()\" size=\"large\" fill=\"clear\" color=\"light\">-->\n      <!--                <ng-container *ngIf=\"isLoading; else loaded\">Loading</ng-container>-->\n\n      <!--                <ng-template #loaded>-->\n      <!--                    &lt;!&ndash; <ion-icon [name]=\"isPlaying ? 'pause' : 'play'\">-->\n      <!--                    </ion-icon> &ndash;&gt;-->\n      <!--                    {{ isPlaying ? 'pause' : 'play' }}-->\n      <!--                </ng-template>-->\n      <!--            </ion-button>-->\n      <!--        </div>-->\n\n      <!--        <ion-range-->\n      <!--                min=\"0\"-->\n      <!--                [max]=\"duration\"-->\n      <!--                [value]=\"currentTime\"-->\n      <!--                (ionChange)=\"seekTest($event)\"-->\n      <!--                color=\"light\">-->\n      <!--            <ion-label color=\"light\" slot=\"start\">{{ currentTime }}</ion-label>-->\n      <!--            <ion-label color=\"light\" slot=\"end\">{{ duration }}</ion-label>-->\n      <!--        </ion-range>-->\n      <!--        </ion-toolbar>-->\n      <!--        <audio #player src=\"http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\"></audio>-->\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"footerEnable\" class=\"bible-footer\">\n  <!--  <div class=\"app-container\">-->\n  <!--    <ion-toolbar class=\"bible-footer__toolbar\">-->\n  <!--      <app-audio-player [audioUrl]=\"ttb_audio.audio_link\" *ngIf=\"ttb_audio.audio_link\">-->\n  <!--      </app-audio-player>-->\n  <!--    </ion-toolbar>-->\n  <!--  </div>-->\n\n  <!-- <div>\n    <div class=\"audioPlayer\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n          <ion-text class=\"audioPlayer__text\">{{audioService.current_duration ? audioService.current_duration : '0:00'}}\n          </ion-text>\n         </ion-col>\n        <ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">\n          <ion-range style=\"margin-top: 0;\" class=\"range range--audioPlayer\" #range [(ngModel)]=\"audioService.progress\" max=\"100\"\n            (touchend)=\"seek('chapter')\" (mouseup)=\"seek('chapter')\"></ion-range>\n        </ion-col>\n        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n          <ion-text *ngIf=\"!isPlaying || audioPlay\" class=\"audioPlayer__text\">{{audioService.current_total_duration ?\n            audioService.current_total_duration : '00:00'}}\n          </ion-text>\n          <ion-spinner *ngIf=\"isPlaying && !audioPlay\" style=\"position: relative;top: 6px;\" align=\"center\" name=\"dots\">\n          </ion-spinner>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"padding-bottom: 15px;\" class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n          \n        </ion-col>\n        <ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">\n          <ion-button (click)=\"audioService.backward('chapter')\" class=\"commonBtn--transparent commonBtn--small\">\n            <ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>\n          </ion-button>\n          \n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n            (click)=\"togglePlayer('chapter', false)\"  *ngIf=\"!audioService.isAudioPlayShows\">\n            <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n          </ion-button>\n\n          <ng-container *ngIf=\"audioService.isAudioPlayShows\">\n            \n            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n            (click)=\"togglePlayer('chapter', false)\"  *ngIf=\"audioService.isAudioPlayShows && audioService.title != chap_id\">\n            <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n          </ion-button>\n\n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n          (click)=\"togglePlayer('chapter',true)\" *ngIf=\"audioService.isAudioPlayShows && audioService.title == chap_id \">\n          <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n        </ion-button>\n          </ng-container>\n         \n          <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\" *ngIf=\"isPlaying && !audioPlay\">\n            <ion-spinner align=\"center\" name=\"bubbles\"></ion-spinner>\n          </ion-button>\n          \n          <ion-button (click)=\"audioService.forward('chapter')\" class=\"commonBtn--transparent commonBtn--small\">\n            <ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n          \n        </ion-col>\n      </ion-row>\n    </div>\n   </div> -->\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/ism-teachings-video-detail/ism-teachings-video-detail.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ism-teachings-video-detail/ism-teachings-video-detail.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IsmTeachingsVideoDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsVideoDetailPageModule", function() { return IsmTeachingsVideoDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_teachings_video_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-teachings-video-detail.page */ "./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _ism_teachings_video_detail_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsVideoDetailPage"]
    }
];
let IsmTeachingsVideoDetailPageModule = class IsmTeachingsVideoDetailPageModule {
};
IsmTeachingsVideoDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ism_teachings_video_detail_page__WEBPACK_IMPORTED_MODULE_6__["IsmTeachingsVideoDetailPage"]]
    })
], IsmTeachingsVideoDetailPageModule);



/***/ }),

/***/ "./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzbS10ZWFjaGluZ3MtdmlkZW8tZGV0YWlsL2lzbS10ZWFjaGluZ3MtdmlkZW8tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.ts ***!
  \*******************************************************************************/
/*! exports provided: IsmTeachingsVideoDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmTeachingsVideoDetailPage", function() { return IsmTeachingsVideoDetailPage; });
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/music-controls/ngx */ "./node_modules/@ionic-native/music-controls/ngx/index.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
















let IsmTeachingsVideoDetailPage = class IsmTeachingsVideoDetailPage {
    constructor(apiService, route, location, dom, router, platform, iab, 
    // private event_provider: EventProviderService,
    musicControls, media, datePipe, zone, loader, analyticsFirebase, audioService, service) {
        this.apiService = apiService;
        this.route = route;
        this.location = location;
        this.dom = dom;
        this.router = router;
        this.platform = platform;
        this.iab = iab;
        this.musicControls = musicControls;
        this.media = media;
        this.datePipe = datePipe;
        this.zone = zone;
        this.loader = loader;
        this.analyticsFirebase = analyticsFirebase;
        this.audioService = audioService;
        this.service = service;
        this.player = null;
        this.video_loaded = false;
        this.chapter_audio_file_loaded = false;
        this.ttb_badge = '';
        this.audioPlay = false;
        this.isPlaying = false;
        this.teaching_player = null;
        this.chapter_audio_first_load = true;
        this.display_media_player_loader = false;
        this.progress = 0;
        this.progress_teachings = 0;
        this.isPlaying_teachings = false;
        this.footerEnable = false;
        this.home_tabs = false;
        this.fromPage = "study";
        this.audioData = {};
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
    }
    ionViewDidEnter() {
        this.from = this.router.url.split('/');
        // this.chapter_audio_first_load = false;
        // this.display_media_player_loader = false;
        this.current_total_duration = '0:00';
        // this.event_provider.hidefooter(true, '');
        this.book_id = this.route.snapshot.paramMap.get('book_id');
        this.book_name = this.route.snapshot.paramMap.get('book_name');
        this.book_name_eng = this.route.snapshot.paramMap.get('book_name_eng');
        this.chap_id = this.route.snapshot.paramMap.get('chap_id');
        this.verse_id = this.route.snapshot.paramMap.get('verse_id');
        this.page_type = this.route.snapshot.paramMap.get('type');
        this.id = this.route.snapshot.paramMap.get('id');
        this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].cmp_audioLink + this.id;
        this.audioData.title = this.chap_id;
        this.audioData.id = this.id;
        if (this.id) {
            this.show_bible_project_line = (this.id > 0 && this.id < 14);
        }
        this.getTtbLanguageAudio();
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
        // this.start('chapter', environment.cmp_audioLink + this.id);
        this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].cmp_audioLink + this.id;
        let body = JSON.stringify({
            book_id: this.id
        });
        let badge_image = this.getTeachingImagesCache(this.book_name_eng);
        this.ttb_badge = badge_image ? badge_image.image_path : "";
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
                        this.ttb_badge = found ? found.image_path : "";
                        this.audioData.image = this.ttb_badge;
                        return found ? found : '';
                    }
                }
            });
        }
    }
    aduioplayerIni(track) {
        var self = this;
        this.platform.ready().then(() => {
            this.chapterAudio = this.media.create(track);
            this.chapter_audio_file_loaded = true;
            this.chapterAudio.onStatusUpdate.subscribe(status => {
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
                        // this.zone.run( () => {
                        // this.chapter_audio_first_load = false;
                        // this.display_media_player_loader = false;
                        // this.isPlaying = true;
                        // this.audioPlay = true;
                        // })
                        let interval = setInterval(() => {
                            console.log(this.chapterAudio.getDuration());
                            if (this.chapterAudio.getDuration() > 0) {
                                this.zone.run(() => {
                                    this.current_total_duration = this.intoMinutesTotalDuration(this.chapterAudio.getDuration());
                                    this.chapter_audio_first_load = false;
                                    this.display_media_player_loader = false;
                                    this.isPlaying = true;
                                    this.audioPlay = true;
                                });
                                clearInterval(interval);
                            }
                        }, 2000);
                    }
                    if (!this.router.url.includes('teachings-video-detail') && !this.router.url.includes('today-study')) {
                        this.chapterAudio.stop();
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
            this.chapterAudio.onError.subscribe(error => console.log('Error!', error));
        });
    }
    // ==================== STARTING the audio player ==================================================================
    start(type, track) {
        this.loader.presentLoading().then(re => { });
        setTimeout(() => {
            this.loader.stopLoading();
            console.log('start');
            let self = this;
            this.audioPlay = false;
            track = track.replaceAll(/ /g, '%20');
            console.log("type", type);
            if (type === "chapter") {
                if (this.platform.is('cordova')) {
                    this.audioService.audiomedia.stop();
                    this.audioService.clear();
                    this.aduioplayerIni(track);
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
        }, 4000);
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
    togglePlayyer(type, pause) {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.isPlaying = !pause;
                if (pause) {
                    this.chapterAudio.pause();
                    this.musicControls.updateIsPlaying(false);
                }
                else {
                    this.chapterAudio.play({ playAudioWhenScreenIsLocked: true });
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
    togglePlayer(type, pause) {
        // if (this.platform.is('cordova')) {
        //   this.platform.ready().then(() => {
        if (pause) {
            this.isPlaying = !pause;
            // this.player.pause();
            this.audioService.togglePlayer(pause);
        }
        else {
            if (this.returenURL(this.audioService.audioUrl) != this.returenURL(this.audioUrl)) {
                this.audioService.clear();
                this.service.display_media_player_loader = true;
                if (this.audioService.isPlaying) {
                    this.audioService.togglePlayer(true);
                }
                setTimeout(() => {
                    this.audioService.audioUrl = this.audioUrl;
                    this.audioService.startAudio(this.audioUrl);
                    this.audioService.fromPage = this.fromPage;
                    this.audioService.title = this.chap_id;
                    this.audioService.isAudioPlayShows = !pause;
                    this.audioService.image = this.ttb_badge;
                }, 2500);
            }
            else {
                this.audioService.togglePlayer(pause);
                console.log("object from ", this.audioService.isAudioPlayShows = !pause);
            }
            // }
            // })
        }
        // else {
        //   this.start('chapter' , this.audioUrl);
        //   setTimeout(() => {
        //     this.isPlaying = !pause;
        //     if (this.player) {
        //       if (pause) {
        //         this.player.pause(this.current_sound_id);
        //         this.musicControls.updateIsPlaying(false);
        //       } else {
        //         this.current_sound_id = this.player.play();
        //         this.createLockScreenPlayer();
        //       }
        //     }
        //   }, 2500);
        // }
    }
    // moving the audio forward or backward
    seek(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
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
            else {
                let newValue = +this.range.value;
                let duration = this.player.duration();
                this.player.seek(duration * (newValue / 100));
            }
        }
    }
    seeeeek(type) {
        if (type === "chapter") {
            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {
                    this.chapterAudio.getCurrentPosition().then((position) => {
                        if (position && position >= 0) {
                            // get current playback position
                            let newValue = +this.range.value;
                            let val = this.chapterAudio.getDuration() * (newValue / 100) * 1000;
                            if (val) {
                                this.chapterAudio.seekTo(val);
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
                    // this.current_total_duration = this.intoMinutesTotalDuration(this.chapterAudio.getDuration());
                    this.chapterAudio.getCurrentPosition().then((position) => {
                        if (position >= 0) {
                            let seek = Math.floor(position);
                            this.current_duration = seek > 1 ? this.intoMinutes(seek) : '';
                            this.progress = (seek / this.chapterAudio.getDuration()) * 100 || 0;
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
                    this.chapterAudio.getCurrentPosition().then((position) => {
                        let seek = Math.floor(position);
                        seek = seek * 1000;
                        this.chapterAudio.seekTo(seek + 10000);
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
                    this.chapterAudio.getCurrentPosition().then((position) => {
                        let seek = Math.floor(position);
                        seek = seek * 1000;
                        this.chapterAudio.seekTo(seek - 10000);
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
                if (this.chapterAudio) {
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
            app_section: this.home_tabs ? 'Today Study' : 'Study Section',
            media_format: 'Audio',
            track_url: trackUrl,
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
        // if (this.player) {
        //   this.togglePlayer("chapter", true);
        // }
        // if (this.chapterAudio) {
        //   this.chapterAudio.stop();
        // }
        // if (this.teaching_player) {
        //   this.togglePlayer("teachings", true);
        // }
        // this.audioService.setLiveSteam();
    }
    // navigating to back page
    gotobackPage() {
        // if (this.chapterAudio) {
        //   this.chapterAudio.stop();
        // }
        this.location.back();
    }
    returenURL(url) {
        if (url["changingThisBreaksApplicationSecurity"]) {
            return (url = url["changingThisBreaksApplicationSecurity"]);
        }
        else {
            return url;
        }
    }
};
IsmTeachingsVideoDetailPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_11__["MusicControls"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseX"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_14__["AudioplayerService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRange"])
], IsmTeachingsVideoDetailPage.prototype, "range", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range_teachings', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRange"])
], IsmTeachingsVideoDetailPage.prototype, "range_teachings", void 0);
IsmTeachingsVideoDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ism-teachings-video-detail',
        template: __webpack_require__(/*! raw-loader!./ism-teachings-video-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.html"),
        styles: [__webpack_require__(/*! ./ism-teachings-video-detail.page.scss */ "./src/app/ism-teachings-video-detail/ism-teachings-video-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_native_music_controls_ngx__WEBPACK_IMPORTED_MODULE_11__["MusicControls"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_10__["Media"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseX"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_14__["AudioplayerService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"]])
], IsmTeachingsVideoDetailPage);



/***/ })

}]);
//# sourceMappingURL=ism-teachings-video-detail-ism-teachings-video-detail-module-es2015.js.map