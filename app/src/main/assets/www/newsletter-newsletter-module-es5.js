(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsletter-newsletter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newsletter/newsletter.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newsletter/newsletter.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons\n    class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n<ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\nNewsletter\n</ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Banner -->\n  <div class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_img + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">News Letter</h1>\n        <p class=\"ion-no-margin banner__text\"></p>\n      </div>\n    </div>\n  </div>\n  <!-- News Letters -->\n\n  <div class=\"page-wrapper\" *ngIf=\"news\">\n    <div class=\"app-container\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n\n          <ion-col [size]=\"12\" [sizeMd]=\"12\"  *ngFor=\"let news of news; let i = index\" [class]=\"news.div_class ? news.div_class : ''\">\n\n            <ion-card  (click)=\"open_Detail_dashboard(news)\" class=\"ionCard ion-no-margin cursor-pointer\"  style=\"height: 100%;\">\n              <div class=\"ionCard__imgDiv\" *ngIf=\"news.attachment\">\n                <img *ngIf=\"news.attachment\" [src]=\"news.attachment\" />\n                <!-- <img *ngIf=\"!news.attachment\" src=\"../../assets/img/live_stream_bg_2.jpg\" /> -->\n              </div>\n              <ion-card-content class=\"ion-no-padding\">\n                <ng-container>\n                  <h2 *ngIf=\"news.title\" class=\"ionMedia__heading\">{{news.title}}</h2>\n                </ng-container>  \n                <div class=\"imgDetails\">\n                  <ion-icon name=\"calendar\" style=\"margin-right: 6px;\"></ion-icon><span>{{appService.getDateTimeFormat(news.created_at)}}</span>\n                </div>\n\n\n                <!-- <ion-item  lines=\"none\"  >\n\n                  <ion-label class=\"ion-text-wrap\">\n                    <h2 *ngIf=\"news.title\" class=\"ionMedia__heading\">{{news.title}}</h2>\n                    <h2 *ngIf=\"news.subject\" class=\"ionMedia__heading\">\n                      Subject:  {{news.description}}\n                    </h2>\n                    <p *ngIf=\"news.description\" class=\"ionMedia__text text-gray\">\n                      {{news.description}}\n                    </p>\n\n\n                  </ion-label>\n                </ion-item> -->\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n\n\n        </ion-row>\n      </ion-grid>\n\n    </div>\n  </div>\n\n\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->\n"

/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var AppService = /** @class */ (function () {
    function AppService() {
    }
    // getDateTimeFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date).format('dddd, MM/DD/YY, hh:mm A');
    //   } else {
    //     return moment(date).format('MMMM DD, YYYY, hh:mm A');
    //   }
    // }
    // getDateFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date).format('dddd, MM/DD/YY');
    //   } else {
    //     return moment(date).format('MMMM DD, YYYY');
    //   }
    // }
    // getTimeFormat(date) {
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(date, 'HH:MM').format('hh:mm A');
    //   } else {
    //     return moment(date, 'HH:MM').format('hh:mm A');
    //   }
    // }
    // getGroupsTimeFormat(date) {
    //   let time = moment(date, 'hh:mm A');
    //   if (localStorage.getItem('isDateTimeFormat') == 'true') {
    //     return moment(time, 'HH:MM').format('hh:mm A');
    //   } else {
    //     return moment(time, 'HH:MM').format('hh:mm A');
    //   }
    // }
    AppService.prototype.getGroupsTimeFormat = function (date) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format('HH:mm');
        }
        // let time = moment(date, 'hh:mm A');
        // if (localStorage.getItem('isDateTimeFormat') == 'true') {
        //   return moment(time, 'HH:MM').format('hh:mm A');
        // } else {
        //   return moment(time, 'HH:MM').format('hh:mm A');
        // }
    };
    AppService.prototype.getTimeFormat = function (time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    };
    AppService.prototype.getDateFormat = function (date) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    };
    AppService.prototype.getDateTimeFormat = function (dateAndTime) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(dateAndTime).format(dateFormat + ' ' + 'hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(dateAndTime).format(dateFormat + ' ' + 'HH:mm');
        }
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/newsletter/newsletter.module.ts":
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.module.ts ***!
  \*************************************************/
/*! exports provided: NewsletterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterPageModule", function() { return NewsletterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsletter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter.page */ "./src/app/newsletter/newsletter.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");








var routes = [
    {
        path: '',
        component: _newsletter_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterPage"]
    }
];
var NewsletterPageModule = /** @class */ (function () {
    function NewsletterPageModule() {
    }
    NewsletterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsletter_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterPage"]]
        })
    ], NewsletterPageModule);
    return NewsletterPageModule;
}());



/***/ }),

/***/ "./src/app/newsletter/newsletter.page.scss":
/*!*************************************************!*\
  !*** ./src/app/newsletter/newsletter.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgDetails {\n  border-top: 1px solid #F3F3F3;\n  padding: 10px 0;\n  margin-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL25ld3NsZXR0ZXIvbmV3c2xldHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3NsZXR0ZXIvbmV3c2xldHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25ld3NsZXR0ZXIvbmV3c2xldHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nRGV0YWlsc3tcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0YzRjNGMztcbiAgICBwYWRkaW5nOiAxMHB4IDA7IFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIi5pbWdEZXRhaWxzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGM0YzRjM7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/newsletter/newsletter.page.ts":
/*!***********************************************!*\
  !*** ./src/app/newsletter/newsletter.page.ts ***!
  \***********************************************/
/*! exports provided: NewsletterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterPage", function() { return NewsletterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");













var NewsletterPage = /** @class */ (function () {
    function NewsletterPage(sermonsService, storage, route, loader, api, router, event_provider, dom, location, common, platform, appService) {
        this.sermonsService = sermonsService;
        this.storage = storage;
        this.route = route;
        this.loader = loader;
        this.api = api;
        this.router = router;
        this.event_provider = event_provider;
        this.dom = dom;
        this.location = location;
        this.common = common;
        this.platform = platform;
        this.appService = appService;
        this.ch_id = '';
        this.page = 1;
        // folder_name: any;
        this.deviceType = '';
        this.show_index = '';
        this.topics_clicked = false;
    }
    NewsletterPage.prototype.ionViewDidEnter = function () {
        this.event_provider.hidefooter(true, 'other');
    };
    NewsletterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        this.getNewsLetters();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res && !(Object.keys(res).length === 0)) {
                    this.theme = res.church;
                    this.ch_id = this.theme.ch_id;
                    app_pages = res.apppages.find(function (x) { return x.name === 'Newsletter'; });
                    if (app_pages) {
                        this.banner_img = app_pages.website_banner;
                        this.banner_desc = app_pages.banner_description;
                        this.banner_title = app_pages.banner_title;
                        this.grad_color = app_pages.grad_color_1;
                        this.opacity_color = app_pages.opacity_color;
                        if (app_pages.password_protection_toggle === 'true') {
                            this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    NewsletterPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    NewsletterPage.prototype.getGradient = function (color_one, bg_color) {
        if (bg_color === '') {
            return this.dom.bypassSecurityTrustStyle("linear-gradient(to bottom,rgba(255,0,0,0), " + color_one);
        }
        else {
            return "" + bg_color;
        }
    };
    NewsletterPage.prototype.getNewsLetters = function () {
        var _this = this;
        this.api.getnewsletter(this.ch_id).subscribe(function (res) {
            if (res.message === 'Successfully fetched') {
                _this.news = res.posts;
                _this.news.forEach(function (eachNews) {
                    if (eachNews.attachment !== "" && eachNews.attachment !== null && eachNews.attachment.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(eachNews.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                        var abc = eachNews.attachment.split("/");
                        //  let img_name = abc[abc.length-1];
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
                        var new_link = eachNews.attachment.replace(folder_name, _this.deviceType);
                        eachNews['attachment'] = new_link;
                        eachNews['folder_name'] = folder_name;
                        // console.log('background is: ',card.background,'new link is: ', new_link);
                    }
                });
                _this.news.map(function (x) {
                    if (x.subject !== '' && x.subject !== null) {
                        // x['subjects_array'] =  x.subject.split(",");
                        x['subjects_array'] = JSON.parse(x.subject);
                        //console.log('subjects array is: ', x);
                    }
                    if (x.show_in_app === 'true' && x.show_in_pwa === 'false') {
                        x['div_class'] = "show-mobile";
                    }
                    else if (x.show_in_app === 'false' && x.show_in_pwa === 'true') {
                        x['div_class'] = "hide-mobile ";
                    }
                    else if (x.show_in_app === 'true' && x.show_in_pwa === 'true') {
                        x['div_class'] = "";
                    }
                    else if (x.show_in_app === 'false' && x.show_in_pwa === 'false') {
                        x['div_class'] = "ion-hide";
                    }
                });
            }
        });
    };
    NewsletterPage.prototype.open_Detail_dashboard = function (news) {
        this.router.navigate(["newsletter-detail/" + news.church_id + "/" + news.id]);
    };
    NewsletterPage.prototype.loadData = function (event) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page <= this.total_page_in_pagination) {
            this.api.getnewsletter(this.ch_id).subscribe(function (res) {
                if (res.message === 'Successfully fetched') {
                    _this.news = res.posts;
                    _this.news.forEach(function (eachNews) {
                        if (eachNews.attachment !== "" && eachNews.attachment !== null && eachNews.attachment.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(eachNews.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                            var abc = eachNews.attachment.split("/");
                            //  let img_name = abc[abc.length-1];
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
                            var new_link = eachNews.attachment.replace(folder_name, _this.deviceType);
                            eachNews['attachment'] = new_link;
                            eachNews['folder_name'] = folder_name;
                            // console.log('background is: ',card.background,'new link is: ', new_link);
                        }
                    });
                    _this.news.map(function (x) {
                        if (x.subject !== '' && x.subject !== null) {
                            // x['subjects_array'] =  x.subject.split(",");
                            x['subjects_array'] = JSON.parse(x.subject);
                            //  console.log('subjects array is: ', x);
                        }
                        if (x.show_in_app === 'true' && x.show_in_pwa === 'false') {
                            x['div_class'] = "show-mobile ionCard ion-margin-bottom cursor-pointer ionCard--mobile";
                        }
                        else if (x.show_in_app === 'false' && x.show_in_pwa === 'true') {
                            x['div_class'] = "hide-mobile ionCard ion-margin-bottom cursor-pointer ionCard--mobile";
                        }
                        else if (x.show_in_app === 'true' && x.show_in_pwa === 'true') {
                            x['div_class'] = "ionCard ion-margin-bottom cursor-pointer ionCard--mobile";
                        }
                        else if (x.show_in_app === 'false' && x.show_in_pwa === 'false') {
                            x['div_class'] = "ion-hide";
                        }
                    });
                }
            });
        }
        else {
            event.target.complete();
        }
    };
    NewsletterPage.ctorParameters = function () { return [
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_2__["SermonService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"] }
    ]; };
    NewsletterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! raw-loader!./newsletter.page.html */ "./node_modules/raw-loader/index.js!./src/app/newsletter/newsletter.page.html"),
            styles: [__webpack_require__(/*! ./newsletter.page.scss */ "./src/app/newsletter/newsletter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sermon_service__WEBPACK_IMPORTED_MODULE_2__["SermonService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
            _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"]])
    ], NewsletterPage);
    return NewsletterPage;
}());



/***/ })

}]);
//# sourceMappingURL=newsletter-newsletter-module-es5.js.map