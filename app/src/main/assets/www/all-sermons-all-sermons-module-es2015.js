(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-sermons-all-sermons-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/all-sermons/all-sermons.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-sermons/all-sermons.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{page_name ? page_name : 'Shows'}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n<!--     banner data on browser only      -->\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <!--     banner data on browser only      -->\n\n    <div class=\"page-wrapper ion-justify-content-start\">\n        <div class=\"app-container\">\n                    <div class=\"event-list-wrap\">\n                        <ion-grid class=\"ion-no-padding\">\n                            <ion-row>\n                                <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let item of seriesSermon; let i = index\">\n                                    <ion-card class=\"ionCard ion-text-left cursor-pointer ion-no-margin\" (click)=\"getsermon(item.id_series, i, item.pubDate)\">\n                                        <div class=\"ionCard__imgDiv\">\n                                            <img *ngIf=\"item.img !== ''\" [src]=\"item.img\"/>\n                                            <img *ngIf=\"item.img === ''\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                        </div>\n                                        <ion-card-content class=\"ion-no-padding\">\n                                            <ion-card-title class=\"heading4\" [innerHtml]=\"item.title\"></ion-card-title>\n                                            <p [innerHtml]=\"item['dc:creator']\"></p>\n                                        </ion-card-content>\n                                    </ion-card>\n                                </ion-col>\n\n                                <!-- new pwa content -->\n\n                                <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let item of sermons; let i = index\">\n                                    <ion-card class=\"ionCard ion-text-left cursor-pointer ion-no-margin\" (click)=\"getsermonpwa(item.id)\">\n                                        <div class=\"ionCard__imgDiv\">\n                                            <img *ngIf=\"item.featured_media !== ''\" [src]=\"item.featured_media\"/>\n                                            <img *ngIf=\"item.featured_media === '' || item.featured_media === null\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                        </div>\n                                        <ion-card-content class=\"ion-no-padding\">\n                                            <ion-card-title class=\"heading4\" [innerHtml]=\"item.title\"></ion-card-title>\n                                            <p> {{item.wpfc_preacher}}</p>\n                                        </ion-card-content>\n                                    </ion-card>\n                                </ion-col>\n                                <!-- <ion-col *ngIf=\"sermons.length === 0\">\n                                    <div class=\"ion-margin-bottom\">\n                                        <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                                                  style=\"border-radius: 5px;\">\n                                            <h4 class=\"heading4\">{{'SERMONS.no_sermon_available' | translate}}</h4>\n                                        </ion-card>\n                                    </div>\n                                </ion-col> -->\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n        </div>\n    </div>\n    <div class=\"ion-justify-content-start\">\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/all-sermons/all-sermons.module.ts":
/*!***************************************************!*\
  !*** ./src/app/all-sermons/all-sermons.module.ts ***!
  \***************************************************/
/*! exports provided: AllSermonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSermonsPageModule", function() { return AllSermonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_sermons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-sermons.page */ "./src/app/all-sermons/all-sermons.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _all_sermons_page__WEBPACK_IMPORTED_MODULE_6__["AllSermonsPage"]
    }
];
let AllSermonsPageModule = class AllSermonsPageModule {
};
AllSermonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_all_sermons_page__WEBPACK_IMPORTED_MODULE_6__["AllSermonsPage"]]
    })
], AllSermonsPageModule);



/***/ }),

/***/ "./src/app/all-sermons/all-sermons.page.scss":
/*!***************************************************!*\
  !*** ./src/app/all-sermons/all-sermons.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1zZXJtb25zL2FsbC1zZXJtb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/all-sermons/all-sermons.page.ts":
/*!*************************************************!*\
  !*** ./src/app/all-sermons/all-sermons.page.ts ***!
  \*************************************************/
/*! exports provided: AllSermonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSermonsPage", function() { return AllSermonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











let AllSermonsPage = class AllSermonsPage {
    constructor(route, router, loader, storage, sermonsService, dom, location, event_provider, apiService, platform) {
        this.route = route;
        this.router = router;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.location = location;
        this.event_provider = event_provider;
        this.apiService = apiService;
        this.platform = platform;
        this.sermons = [];
        this.page = 1;
        this.deviceType = '';
    }
    ngOnInit() {
        // getting sermon_id from url
        this.sermonid = this.route.snapshot.paramMap.get('id');
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        this.event_provider.getChurchData.subscribe((obj) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.is_wordpress_enable = false;
            if ((Object.keys(obj).length === 0)) {
                return;
            }
            // Getting app_pages data from local storage
            // Getting app_pages data from local storage
            this.storage.get('app_pages').then(res => {
                // filtering out Sermons page data
                let sermon_page = res.find(x => x.page_type === 'page' && x.name === 'Shows');
                if (sermon_page) {
                    //saving url, banner image, desc, title and page name
                    this.sermons_url = sermon_page.url;
                    this.banner_image = sermon_page.website_banner;
                    this.banner_desc = sermon_page.banner_description;
                    this.banner_title = sermon_page.banner_title;
                    this.page_name = sermon_page.title;
                    this.ch_id = sermon_page.church_id;
                    this.page_id = sermon_page.id;
                    if (obj.is_wordpress_enable === '1') {
                        this.is_wordpress_enable = true;
                        this.apiService.getSermons(this.ch_id, this.sermonid, this.page).subscribe((res) => {
                            console.log(res);
                            this.sermons = res.sermons;
                            this.sermons.forEach(eachSermon => {
                                if (eachSermon.featured_media !== "" && eachSermon.featured_media !== null && eachSermon.featured_media.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(eachSermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                    let abc = eachSermon.featured_media.split("/");
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
                                    let new_link = eachSermon.featured_media.replace(folder_name, this.deviceType);
                                    // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                                    eachSermon['featured_media'] = new_link;
                                }
                            });
                            this.loader.stopLoading();
                        }, (err) => {
                            console.log(err);
                        });
                    }
                    else {
                        // fetching sermon data from given url
                        this.getSermonsFromWordpress(this.sermons_url);
                    }
                }
            });
        }));
        this.loader.stopLoading();
    }
    getSermonsFromWordpress(base_url) {
        let self = this;
        this.loader.presentLoading().then(() => {
            // fetching sermon data through service
            this.sermonsService.getAllSermons(base_url).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = res.data;
                self.allSermons = data.item;
                if (this.ch_id == '1125') {
                    self.allSermons = self.allSermons.reverse();
                }
                // filtering out sermon with the sermon id from url
                let all = self.allSermons.filter(x => x.id_series === this.sermonid);
                for (let x = 0; x < all.length; x++) {
                    if (all[x]['itunes:image']) {
                        all[x].img = all[x]['itunes:image']['$']['href'];
                    }
                    else {
                        all[x].img = all[x].img_series;
                    }
                }
                self.seriesSermon = all;
                this.loader.stopLoading();
            }));
        });
    }
    gettingSermon() {
        let self = this;
        // filtering out sermon with the sermon id from url
        let all = self.allSermons.filter(x => x.id_series === this.sermonid);
        for (let x = 0; x < all.length; x++) {
            if (all[x]['itunes:image']) {
                all[x].img = all[x]['itunes:image']['$']['href'];
            }
            else {
                all[x].img = all[x].img_series;
            }
        }
        self.seriesSermon = all;
    }
    getsermon(id_series, item, date) {
        this.loader.presentLoading().then(() => {
            // navigating to detail page
            this.router.navigate(['/show-detail', { id: item, idseries: id_series, date: date }]);
            this.loader.stopLoading();
        });
    }
    getsermonpwa(id_series) {
        this.loader.presentLoading().then(() => {
            // navigating to detail page
            this.router.navigate(['/show-detail', { id: id_series, page_id: this.page_id }]);
            this.loader.stopLoading();
        });
    }
    gotobackPage() {
        this.location.back();
    }
    loadData(event) {
        this.page = this.page + 1;
        this.apiService.getSermons(this.ch_id, this.sermonid, this.page).subscribe((res) => {
            console.log(res);
            if (res.sermons.length > 0) {
                res.sermons.forEach(item => {
                    if (item.featured_media !== "" && item.featured_media !== null && item.featured_media.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(item.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                        let abc = item.featured_media.split("/");
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
                        let new_link = item.featured_media.replace(folder_name, this.deviceType);
                        // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                        item['featured_media'] = new_link;
                    }
                    this.sermons.push(item);
                });
                event.target.complete();
            }
            else {
                event.target.disabled = true;
            }
        }, (err) => {
            console.log(err);
        });
    }
};
AllSermonsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
    { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] }
];
AllSermonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-sermons',
        template: __webpack_require__(/*! raw-loader!./all-sermons.page.html */ "./node_modules/raw-loader/index.js!./src/app/all-sermons/all-sermons.page.html"),
        styles: [__webpack_require__(/*! ./all-sermons.page.scss */ "./src/app/all-sermons/all-sermons.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
        src_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]])
], AllSermonsPage);



/***/ })

}]);
//# sourceMappingURL=all-sermons-all-sermons-module-es2015.js.map