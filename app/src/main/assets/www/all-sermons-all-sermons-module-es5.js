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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_sermons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-sermons.page */ "./src/app/all-sermons/all-sermons.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _all_sermons_page__WEBPACK_IMPORTED_MODULE_6__["AllSermonsPage"]
    }
];
var AllSermonsPageModule = /** @class */ (function () {
    function AllSermonsPageModule() {
    }
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
    return AllSermonsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











var AllSermonsPage = /** @class */ (function () {
    function AllSermonsPage(route, router, loader, storage, sermonsService, dom, location, event_provider, apiService, platform) {
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
    AllSermonsPage.prototype.ngOnInit = function () {
        var _this = this;
        // getting sermon_id from url
        this.sermonid = this.route.snapshot.paramMap.get('id');
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        this.event_provider.getChurchData.subscribe(function (obj) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.is_wordpress_enable = false;
                if ((Object.keys(obj).length === 0)) {
                    return [2 /*return*/];
                }
                // Getting app_pages data from local storage
                // Getting app_pages data from local storage
                this.storage.get('app_pages').then(function (res) {
                    // filtering out Sermons page data
                    var sermon_page = res.find(function (x) { return x.page_type === 'page' && x.name === 'Shows'; });
                    if (sermon_page) {
                        //saving url, banner image, desc, title and page name
                        _this.sermons_url = sermon_page.url;
                        _this.banner_image = sermon_page.website_banner;
                        _this.banner_desc = sermon_page.banner_description;
                        _this.banner_title = sermon_page.banner_title;
                        _this.page_name = sermon_page.title;
                        _this.ch_id = sermon_page.church_id;
                        _this.page_id = sermon_page.id;
                        if (obj.is_wordpress_enable === '1') {
                            _this.is_wordpress_enable = true;
                            _this.apiService.getSermons(_this.ch_id, _this.sermonid, _this.page).subscribe(function (res) {
                                console.log(res);
                                _this.sermons = res.sermons;
                                _this.sermons.forEach(function (eachSermon) {
                                    if (eachSermon.featured_media !== "" && eachSermon.featured_media !== null && eachSermon.featured_media.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(eachSermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                        var abc = eachSermon.featured_media.split("/");
                                        var folder_name = abc[abc.length - 2];
                                        if (_this.platform.is("mobile")) {
                                            _this.deviceType = 'radiobase_mobile';
                                        }
                                        else if (_this.platform.is("tablet")) {
                                            _this.deviceType = 'radiobase_tablet';
                                        }
                                        else {
                                            _this.deviceType = folder_name;
                                        }
                                        var new_link = eachSermon.featured_media.replace(folder_name, _this.deviceType);
                                        // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                                        eachSermon['featured_media'] = new_link;
                                    }
                                });
                                _this.loader.stopLoading();
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            // fetching sermon data from given url
                            _this.getSermonsFromWordpress(_this.sermons_url);
                        }
                    }
                });
                return [2 /*return*/];
            });
        }); });
        this.loader.stopLoading();
    };
    AllSermonsPage.prototype.getSermonsFromWordpress = function (base_url) {
        var _this = this;
        var self = this;
        this.loader.presentLoading().then(function () {
            // fetching sermon data through service
            _this.sermonsService.getAllSermons(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var data, all, x;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    data = res.data;
                    self.allSermons = data.item;
                    if (this.ch_id == '1125') {
                        self.allSermons = self.allSermons.reverse();
                    }
                    all = self.allSermons.filter(function (x) { return x.id_series === _this.sermonid; });
                    for (x = 0; x < all.length; x++) {
                        if (all[x]['itunes:image']) {
                            all[x].img = all[x]['itunes:image']['$']['href'];
                        }
                        else {
                            all[x].img = all[x].img_series;
                        }
                    }
                    self.seriesSermon = all;
                    this.loader.stopLoading();
                    return [2 /*return*/];
                });
            }); });
        });
    };
    AllSermonsPage.prototype.gettingSermon = function () {
        var _this = this;
        var self = this;
        // filtering out sermon with the sermon id from url
        var all = self.allSermons.filter(function (x) { return x.id_series === _this.sermonid; });
        for (var x = 0; x < all.length; x++) {
            if (all[x]['itunes:image']) {
                all[x].img = all[x]['itunes:image']['$']['href'];
            }
            else {
                all[x].img = all[x].img_series;
            }
        }
        self.seriesSermon = all;
    };
    AllSermonsPage.prototype.getsermon = function (id_series, item, date) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            // navigating to detail page
            _this.router.navigate(['/show-detail', { id: item, idseries: id_series, date: date }]);
            _this.loader.stopLoading();
        });
    };
    AllSermonsPage.prototype.getsermonpwa = function (id_series) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            // navigating to detail page
            _this.router.navigate(['/show-detail', { id: id_series, page_id: _this.page_id }]);
            _this.loader.stopLoading();
        });
    };
    AllSermonsPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    AllSermonsPage.prototype.loadData = function (event) {
        var _this = this;
        this.page = this.page + 1;
        this.apiService.getSermons(this.ch_id, this.sermonid, this.page).subscribe(function (res) {
            console.log(res);
            if (res.sermons.length > 0) {
                res.sermons.forEach(function (item) {
                    if (item.featured_media !== "" && item.featured_media !== null && item.featured_media.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(item.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                        var abc = item.featured_media.split("/");
                        var folder_name = abc[abc.length - 2];
                        if (_this.platform.is("mobile")) {
                            _this.deviceType = 'radiobase_mobile';
                        }
                        else if (_this.platform.is("tablet")) {
                            _this.deviceType = 'radiobase_tablet';
                        }
                        else {
                            _this.deviceType = folder_name;
                        }
                        var new_link = item.featured_media.replace(folder_name, _this.deviceType);
                        // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                        item['featured_media'] = new_link;
                    }
                    _this.sermons.push(item);
                });
                event.target.complete();
            }
            else {
                event.target.disabled = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AllSermonsPage.ctorParameters = function () { return [
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
    ]; };
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
    return AllSermonsPage;
}());



/***/ })

}]);
//# sourceMappingURL=all-sermons-all-sermons-module-es5.js.map