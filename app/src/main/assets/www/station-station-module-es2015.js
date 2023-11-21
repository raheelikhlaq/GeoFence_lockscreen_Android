(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-station-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/station.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/station.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\"> -->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n\n    <!-- <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Sermons')\" (click)=\"gotobackPage()\"\n      class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{page_name}}\n    </ion-buttons> -->\n\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{station_page.name}}\n    </ion-buttons>\n\n    <!-- <p slot=\"start\">Station</p> -->\n\n    <!-- <p *ngIf=\"enable_home && (enable_home.next_page === 'Sermons')\" slot=\"start\">{{page_name}}</p> -->\n\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n\n  <!-- <div class=\"page-wrapper\" *ngIf=\"!recentSermons && !popularSermons && !latestSermon\">\n    <div class=\"app-container\">\n      <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\" style=\"border-radius: 5px;\">\n        <h4 class=\"heading4\" *ngIf=\"ch_id != '1000'\">{{'SERMONS.no_sermon_available' | translate}}</h4>\n        <h4 class=\"heading4\" *ngIf=\"ch_id == '1000'\">{{'No Teachings Available' | translate}}</h4>\n      </ion-card>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"page-wrapper\" *ngIf=\"recentSermons || popularSermons || latestSermon\"> -->\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <div class=\"ion-margin-bottom\">\n        <!-- <h2 class=\"heading2\" *ngIf=\"ch_id != '1000'\"> {{'SERMONS.sermons' | translate}}</h2>\n        <h2 class=\"heading2\" *ngIf=\"ch_id == '1000'\"> {{'Teachings' | translate}}</h2> -->\n        <!-- <h2 class=\"heading2\">Station</h2> -->\n      </div>\n\n      <!-- <div class=\"mb-30\" *ngIf=\"latestSermon\">\n        <ion-row>\n          <ion-col [size]=\"12\">\n            <ion-card\n              class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big ionCard--sermon cursor-pointer ion-no-margin\"\n              [ngStyle]=\"{'background': 'url(' + latestimage + ')  no-repeat'}\" (click)=\"getlatestsermon()\">\n              <div class=\"ionCard--backGroundBg__body\">\n                <div class=\"ion-text-right\">\n                  <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id != '1000'\">\n                    {{'SERMONS.latest_sermon' | translate}}\n                  </ion-button>\n                  <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1000'\">\n                    {{'Latest Teachings' | translate}}\n                  </ion-button>\n                </div>\n              </div>\n              <div class=\"ionCard--backGroundBg__footer\">\n                <ion-grid>\n                  <ion-row class=\"align-items-end\">\n                    <ion-col size=\"12\">\n                      <div style=\"margin-bottom: 5px;\">\n                        <ion-label class=\"heading2 ionCard--backGroundBg__heading\" [innerHtml]=\"latestspeaker\">\n                        </ion-label>\n                        <ion-card-subtitle class=\"ionCard--backGroundBg__subheading\" [innerHtml]=\"latesttitle\">\n                        </ion-card-subtitle>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div> -->\n\n      <!-- <div class=\"ion-margin-bottom\">\n        <ion-item class=\"inputField\" lines=\"none\">\n          <ion-input [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id != '1000'\" class=\"inputField__area \" inputmode=\"search\"\n            type=\"search\" placeholder=\"{{'SERMONS.search_sermon' | translate}}\" name=\"guest\"></ion-input>\n          <ion-input [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1000'\" class=\"inputField__area \" inputmode=\"search\"\n            type=\"search\" placeholder=\"{{'Search Teachings' | translate}}\" name=\"guest\"></ion-input>\n        </ion-item>\n      </div> -->\n\n      <div *ngIf=\"stations.length > 0\" class=\"mb-30\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col [size]=\"8\">\n            <!-- <h3 class=\"heading3\" *ngIf=\"ch_id != '1000'\">{{'SERMONS.popular_sermons' | translate}}</h3>\n            <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Popular Teachings' | translate}}</h3> -->\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"ion-text-right\">\n            <!-- <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showPopularSermons\"\n              (click)=\"showPopularSermons = !showPopularSermons\">{{'SERMONS.see_all' | translate}}\n            </ion-button>\n            <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showPopularSermons\"\n              (click)=\"showPopularSermons = !showPopularSermons\">{{'SERMONS.see_less' | translate}}\n            </ion-button> -->\n          </ion-col>\n        </ion-row>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let station of stations; let i = index\">\n              <div *ngIf=\"station.audio_url\">\n\n                <!-- <ion-card class=\"ionCard cursor-pointer ion-no-margin\" (click)=\"getlatestsermon(item.id_series[0])\"> -->\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img [src]=\"station.photo\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\">{{station.church_name}}\n                    </ion-card-title>\n                    <p>{{station.website}}</p>\n                  </ion-card-content>\n                  <!-- <ion-icon name=\"play\" size=\"large\" style=\"font-size: 36px;\" (click)=\"playAudio(station.audio_url)\">\n                  </ion-icon> -->\n                  <app-audio-player [page_id]=\"page_id\" [audioData]=\"station\"  [fromPage] = \"'station'\" [method]=\"'station'\" [audioTitle]=\"station.church_name\" [audioUrl]=\"station.audio_url\" [isSermon]=\"false\" [index]=\"i\" *ngIf=\"hasAudioLink(station.audio_url)\" >\n                  </app-audio-player>\n                  <ion-icon name=\"heart\" size=\"large\" *ngIf=\"!station.favourite && this.userId\" (click)=\"makeFavourite(station.ch_id)\">\n                  </ion-icon>\n                  <ion-icon name=\"heart\" *ngIf=\"station.favourite && this.userId\" style=\"color: red;\" size=\"large\"></ion-icon>\n                </ion-card>\n              </div>\n\n              <!-- <div *ngIf=\"showPopularSermons\">\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\" (click)=\"getlatestsermon(item.id_series[0])\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img [src]=\"item.img_series[0] ? item.img_series[0] : '../../assets/img/live_stream_bg_2.jpg'\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"item.series[0] ? item.series[0] : item.title[0]\">\n                    </ion-card-title>\n                    <p [innerHtml]=\"item['dc:creator'][0]\"></p>\n                  </ion-card-content>\n                </ion-card>\n                <div *ngIf=\"i === popularSermons.length - 1\">\n                  <ion-card *ngFor=\"let other of otherSermons\" class=\"ionCard cursor-pointer ion-no-margin\"\n                    (click)=\"getlatestsermon(null, other.pubDate[0])\">\n                    <div class=\"ionCard__imgDiv\">\n                      <img\n                        [src]=\"other.img_series[0] ? other.img_series[0] : '../../assets/img/live_stream_bg_2.jpg'\" />\n                    </div>\n                    <ion-card-content class=\"ion-no-padding\">\n                      <ion-card-title class=\"heading4\" [innerHtml]=\"other.title[0] ? other.title[0] : other.title[0]\">\n                      </ion-card-title>\n                      <p [innerHtml]=\"other['dc:creator'][0]\"></p>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </div> -->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <!-- <div *ngIf=\"otherSermons && otherSermons.length > 0\" class=\"mb-30\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col [size]=\"8\">\n            <h3 class=\"heading3\" *ngIf=\"ch_id != '1000'\">{{'SERMONS.other_sermons' | translate}}</h3>\n            <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Other Teachings' | translate}}</h3>\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"ion-text-right\">\n            <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showOtherSermons\"\n              (click)=\"showOtherSermons = !showOtherSermons\"> {{'SERMONS.see_all' | translate}}\n            </ion-button>\n            <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showOtherSermons\"\n              (click)=\"showOtherSermons = !showOtherSermons\"> {{'SERMONS.see_less' | translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-grid class=\"ion-no-padding\" *ngIf=\"link_type === 'sermon'\">\n          <ion-row>\n            <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let other of otherSermons | filter: search_sermon; let i = index\">\n              <div *ngIf=\"!showOtherSermons && i < 2\">\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                  (click)=\"getlatestsermon(null, other.pubDate[0])\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img *ngIf=\"other.img_series[0] !== ''\" [src]=\"other.img_series[0]\">\n                    <img *ngIf=\"other.img_series[0] === '' && other['itunes:image']\"\n                      [src]=\"other['itunes:image'][0]['$'].href\" />\n                    <img *ngIf=\"other.img_series[0] === '' && !other['itunes:image']\"\n                      src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"other.title[0] ? other.title[0] : other.title[0]\">\n                    </ion-card-title>\n                    <p [innerHtml]=\"other['dc:creator'][0]\"></p>\n                  </ion-card-content>\n                </ion-card>\n              </div>\n              <div *ngIf=\"showOtherSermons\">\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                  (click)=\"getlatestsermon(null, other.pubDate[0])\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img *ngIf=\"other.img_series[0] !== ''\" [src]=\"other.img_series[0]\">\n                    <img *ngIf=\"other.img_series[0] === '' && other['itunes:image']\"\n                      [src]=\"other['itunes:image'][0]['$'].href\" />\n                    <img *ngIf=\"other.img_series[0] === '' && !other['itunes:image']\"\n                      src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"other.title[0] ? other.title[0] : other.title[0]\">\n                    </ion-card-title>\n                    <p [innerHtml]=\"other['dc:creator'][0]\"></p>\n                  </ion-card-content>\n                </ion-card>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid class=\"ion-no-padding\" *ngIf=\"link_type === 'rss'\">\n          <ion-row>\n            <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let other of otherSermons | filter: search_sermon; let i = index\">\n              <div *ngIf=\"!showOtherSermons && i < 2\">\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\" (click)=\"getlatestsermon(other.guid)\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"other.title ? other.title : other.title\">\n                    </ion-card-title>\n                    <p [innerHtml]=\"\"></p>\n                  </ion-card-content>\n                </ion-card>\n              </div>\n              <div *ngIf=\"showOtherSermons\">\n                <ion-card class=\"ionCard cursor-pointer ion-no-margin\" (click)=\"getlatestsermon(other.guid)\">\n                  <div class=\"ionCard__imgDiv\">\n                    <img src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                  </div>\n                  <ion-card-content class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\" [innerHtml]=\"other.title ? other.title : other.title\">\n                    </ion-card-title>\n                    <p [innerHtml]=\"\"></p>\n                  </ion-card-content>\n                </ion-card>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n      </div> -->\n\n      <!-- <div class=\"mb-30\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col [size]=\"9\">\n            <h3 class=\"heading3\" *ngIf=\"ch_id !== '1000'\">{{'SERMONS.recent_sermons' | translate}}</h3>\n            <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Recent Teachings' | translate}}</h3>\n            <h3 class=\"heading3\">Recent Station</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"12\" [sizeMd]=\"4\" *ngFor=\"let item of recentSermons; let i = index\">\n          <ion-col [size]=\"12\" [sizeMd]=\"4\">\n            <div>\n              <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                (click)=\"getlatestsermon(item.id_series[0], item.pubDate[0])\">\n              <ion-card class=\"ionCard cursor-pointer ion-no-margin\">\n                <ion-card-content class=\"ion-no-padding\">\n                  <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                    <ion-thumbnail slot=\"start\" class=\"ionMedia__media ionMedia__media--big\">\n                      <img *ngIf=\"item.img_series[0] !== ''\" [src]=\"item.img_series[0]\">\n                      <img *ngIf=\"item.img_series[0] === '' && item['itunes:image']\"\n                        [src]=\"item['itunes:image'][0]['$'].href\" />\n                      <img *ngIf=\"item.img_series[0] === '' && !item['itunes:image']\"\n                        src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                      <img src=\"../../assets/img/live_stream_bg_2.jpg\" />\n                    </ion-thumbnail>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h2 class=\"ionMedia__heading\" [innerHtml]=\"item.title[0]\"></h2>\n                      <h2 class=\"ionMedia__heading\">Title</h2>\n                      <p class=\"ionMedia__text\" [innerHtml]=\"item['dc:creator'][0]\"></p>\n                      <p class=\"ionMedia__text\">Date</p>\n                    </ion-label>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div> -->\n\n    </div>\n  </div>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getStations($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- <app-footer></app-footer> -->\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->"

/***/ }),

/***/ "./src/app/station/station.module.ts":
/*!*******************************************!*\
  !*** ./src/app/station/station.module.ts ***!
  \*******************************************/
/*! exports provided: StationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationPageModule", function() { return StationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _station_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station.page */ "./src/app/station/station.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








const routes = [
    {
        path: '',
        component: _station_page__WEBPACK_IMPORTED_MODULE_6__["StationPage"]
    }
];
let StationPageModule = class StationPageModule {
};
StationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_station_page__WEBPACK_IMPORTED_MODULE_6__["StationPage"]]
    })
], StationPageModule);



/***/ }),

/***/ "./src/app/station/station.page.scss":
/*!*******************************************!*\
  !*** ./src/app/station/station.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vc3RhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/station/station.page.ts":
/*!*****************************************!*\
  !*** ./src/app/station/station.page.ts ***!
  \*****************************************/
/*! exports provided: StationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationPage", function() { return StationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var src_services_sermon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");















let StationPage = class StationPage {
    // allSermons: any;
    // latestSermon: any;
    // popularSermons: any;
    // recentSermons: any;
    // otherSermons: any;
    // showOtherSermons: boolean = false;
    // latestspeaker: any;
    // latesttitle: any;
    // latestimage: any;
    // showPopularSermons: any = false;
    // sermons_url: any;
    // search_sermon: any;
    // enable_home: any;
    // start_time_analytics: any;
    // custom_name: any;
    // ch_id: any;
    // user: any;
    // theme: any;
    // show_popular_sermons: any;
    // apppage_id: any;
    // link_type: any;
    // alertMessage: any;
    // page_in_home_tabs: any = false;
    constructor(storage, loader, sermonsService, router, location, toast, common, event_provider, platform, device, analytics, translate, menu, route, apiService) {
        this.storage = storage;
        this.loader = loader;
        this.sermonsService = sermonsService;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this.common = common;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.analytics = analytics;
        this.translate = translate;
        this.menu = menu;
        this.route = route;
        this.apiService = apiService;
        this.station_page = {};
        this.stations = [];
        this.userId = '';
        this.pageno = 1;
        this.storage.get('user').then(res => {
            console.log(res);
            if (res) {
                this.userId = res.user.id;
            }
        });
        this.loader.presentLoading().then(() => { });
        // getting theme from local storage
        this.page_id = this.route.snapshot.queryParams.page_id;
        this.storage.get('theme').then(res => {
            // getting app_pages
            const body = JSON.stringify({ id: res.ch_id });
            this.common.getTheme(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(res);
                this.loader.stopLoading();
                this.theme = res.church;
                this.ch_id = res.church.ch_id;
                let page = res.apppages.filter(x => x.page_type === 'page' && x.id === this.route.snapshot.queryParams.page_id);
                if (page.length > 0) {
                    this.station_page = page[0];
                    this.getStations();
                    //   this.apppage_id = sermon_page[0].id;
                    //   this.sermons_url = sermon_page[0].url;
                    //   this.page_name = sermon_page[0].title;
                    //   this.custom_name = sermon_page[0].name;
                    //   this.show_popular_sermons = sermon_page[0].show_popular_sermons;
                    //   // getting sermons from URL
                    //   if (this.sermons_url.includes('.rss') || this.sermons_url.includes('-rss')) {
                    //     // if url is .rss feed
                    //     // this.getRss(this.apppage_id, this.ch_id)
                    //   } else {
                    //     // this.getSermonsFromWordpress(this.sermons_url);
                    //   }
                }
            }));
        });
    }
    // navigating to back page
    gotobackPage() {
        if (this.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    }
    ionViewWillEnter() {
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                var id = this.route.snapshot.queryParams.page_id;
                let app_pages = res.apppages.find(x => x.id === id);
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
        }));
    }
    ionViewDidEnter() {
        this.pageno = 1;
        this.event_provider.hidefooter(true, 'other');
    }
    ngOnInit() {
    }
    getStations(ev) {
        if (ev) {
            this.pageno = this.pageno + 1;
            this.apiService.getStations(this.pageno, this.ch_id).subscribe((res) => {
                console.log(res);
                ev.target.complete();
                if (res.status) {
                    this.stations.push(...res.data);
                }
            }, (err) => {
                console.log(err);
            });
        }
        else {
            this.apiService.getStations(this.pageno, this.ch_id).subscribe((res) => {
                console.log(res);
                if (res.status) {
                    this.stations = res.data;
                }
            }, (err) => {
                console.log(err);
            });
        }
    }
    playAudio(url) {
        this.event_provider.setAudioUrl({ url: url, autoPlay: true, dateTime: Date.now() });
    }
    makeFavourite(church_id) {
        this.apiService.makeStationFavourite(this.userId, church_id).subscribe((res) => {
            console.log(res);
            if (res.status) {
                this.getStations();
            }
        }, (err) => {
            console.log(err);
        });
    }
    hasAudioLink(link) {
        if (this.ch_id == '1124') {
            if (/.aif|.cda|.mid|.midi|.mp3|.mpa|.ogg|.wav|.wma|.wpl/.test(link)) {
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    }
};
StationPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
    { type: src_services_sermon_service__WEBPACK_IMPORTED_MODULE_10__["SermonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
    { type: src_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] }
];
StationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-station',
        template: __webpack_require__(/*! raw-loader!./station.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/station.page.html"),
        styles: [__webpack_require__(/*! ./station.page.scss */ "./src/app/station/station.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
        src_services_sermon_service__WEBPACK_IMPORTED_MODULE_10__["SermonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_8__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"],
        src_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]])
], StationPage);



/***/ })

}]);
//# sourceMappingURL=station-station-module-es2015.js.map