(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsletter-detail-newsletter-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newsletter-detail/newsletter-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newsletter-detail/newsletter-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      Newsletter Detail\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content *ngIf=\"post\">\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <div class=\"ion-margin-bottom\">\n        <ion-card  class=\"ionCard  ionCard--backGroundBg ionCard--backGroundBg--big\"\n        [ngStyle]=\"{'background': 'url(' + ( post.attachment ? post.attachment : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\"\n        >\n          <!-- <div *ngIf=\"post.attachment\" class=\"ionCard__imgDiv\">\n            <img src={{post.attachment}}>\n          </div>\n          <div *ngIf=\"!post.attachment\" class=\"ionCard__imgDiv\">\n            <img src=\"../../assets/img/live_stream_bg_2.jpg\">\n          </div>   -->\n        </ion-card>\n        <!-- <ion-card-content>\n          <ion-card-title class=\"heading4 ion-margin-bottom\" *ngIf=\"post.title\">{{post.title}}</ion-card-title>\n          <div class=\"font-weight-normal event-detail-content ion-margin-bottom\" *ngIf=\"post.subject\"><b>Subject: </b>{{post.subject}}</div>\n          <div class=\"font-weight-normal event-detail-content ion-margin-bottom\" *ngIf=\"post.description\"> <b>Description:</b>\n            {{post.description}}</div>\n            <div class=\"font-weight-normal event-detail-content\" [innerHTML]=\"post.html\"></div>\n        </ion-card-content> -->\n        <div class=\"newsContent-wrapper\">\n          <h2 class=\"heading2 ion-margin-bottom titleBorder\" *ngIf=\"post.title\">{{post.title}}</h2>\n          <p style=\"margin-top: 5;\" class=\"descriptionBorder\" *ngIf=\"post.description\">{{post.description}}</p>\n            <div class=\"font-weight-normal newscontent\" *ngIf=\"post.html !== '<p><br></p>' \" [innerHTML]=\"post.html\"></div>\n          <p>Do you want to receive this newsletter, and others like it, in your email? If so, click <a style=\"cursor: pointer;\" (click)=\"wantSubscription()\">here</a>.</p>\n        </div>\n\n\n\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n\n<ion-content *ngIf=\"post === '' \" >\n  <div class=\"backBtn-wrapper hide-mobile\">\n    <ion-button (click)=\"gotobackPage()\" class=\"commonBtn commonBtn--dark commonBtn--round\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp; Back\n    </ion-button>\n  </div>\n\n  <div class=\"page-wrapper\" *ngIf=\"post=== ''\">\n    <div class=\"app-container\">\n        <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                  style=\"border-radius: 5px;\" >\n            <h4 class=\"heading4\">Page not found</h4>\n        </ion-card>\n    </div>\n</div>\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->"

/***/ }),

/***/ "./src/app/newsletter-detail/newsletter-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/newsletter-detail/newsletter-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: NewsletterDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterDetailPageModule", function() { return NewsletterDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsletter_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter-detail.page */ "./src/app/newsletter-detail/newsletter-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");









var routes = [
    {
        path: '',
        component: _newsletter_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterDetailPage"]
    }
];
var NewsletterDetailPageModule = /** @class */ (function () {
    function NewsletterDetailPageModule() {
    }
    NewsletterDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsletter_detail_page__WEBPACK_IMPORTED_MODULE_6__["NewsletterDetailPage"]]
        })
    ], NewsletterDetailPageModule);
    return NewsletterDetailPageModule;
}());



/***/ }),

/***/ "./src/app/newsletter-detail/newsletter-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/newsletter-detail/newsletter-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsContent-wrapper {\n  padding: 0 15px;\n}\n.newsContent-wrapper .heading2 {\n  margin-bottom: 0;\n}\n.newsContent-wrapper p {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  color: #757575;\n}\n.newscontent {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #000;\n  border-bottom: 1px solid #d2d2d2;\n  padding: 12px 0;\n}\n.titleBorder {\n  border-bottom: 1px solid #d2d2d2;\n  padding: 12px 0;\n  line-height: 19px;\n}\n.descriptionBorder {\n  border-bottom: 1px solid #d2d2d2;\n  padding: 12px 0;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL25ld3NsZXR0ZXItZGV0YWlsL25ld3NsZXR0ZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3c2xldHRlci1kZXRhaWwvbmV3c2xldHRlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKO0FEQUE7RUFDSSxnQkFBQTtBQ0VKO0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFSjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURBQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9uZXdzbGV0dGVyLWRldGFpbC9uZXdzbGV0dGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c0NvbnRlbnQtd3JhcHBlcntcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4mIC5oZWFkaW5nMntcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxucCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG59XG59XG4ubmV3c2NvbnRlbnR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMDAwO1xuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi50aXRsZUJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4uZGVzY3JpcHRpb25Cb3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgcGFkZGluZzogMTJweCAwOyBcbiAgICBsaW5lLWhlaWdodDogMTlweDsgXG59IiwiLm5ld3NDb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4ubmV3c0NvbnRlbnQtd3JhcHBlciAuaGVhZGluZzIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5ld3NDb250ZW50LXdyYXBwZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4ubmV3c2NvbnRlbnQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cblxuLnRpdGxlQm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5kZXNjcmlwdGlvbkJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newsletter-detail/newsletter-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/newsletter-detail/newsletter-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: NewsletterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterDetailPage", function() { return NewsletterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_subcribe_news_subcribe_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../common/subcribe-news/subcribe-news.component */ "./src/app/common/subcribe-news/subcribe-news.component.ts");



















var NewsletterDetailPage = /** @class */ (function () {
    function NewsletterDetailPage(storage, route, loader, api, idService, router, eventsService, apiService, toast, location, common, event_provider, analytics, platform, device, translate, dom, modalController) {
        var _this = this;
        this.storage = storage;
        this.route = route;
        this.loader = loader;
        this.api = api;
        this.idService = idService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.toast = toast;
        this.location = location;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.dom = dom;
        this.modalController = modalController;
        this.ch_id = '';
        this.post_id = '';
        this.post = '';
        this.is_external_url = false;
        this.page_in_home_tabs = false;
        this.deviceType = '';
        this.show_index = '';
        this.topics_clicked = false;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    }
    NewsletterDetailPage.prototype.ngOnInit = function () {
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        this.post_id = this.route.snapshot.paramMap.get('post_id');
        if (this.ch_id) {
            // saving church id in ID Service
            this.idService.setId(this.ch_id);
        }
        if (this.ch_id && this.post_id) {
            this.getNewsLetterbyid();
        }
    };
    NewsletterDetailPage.prototype.getNewsLetterbyid = function () {
        var _this = this;
        this.api.getnewsletterbyid(this.ch_id, this.post_id).subscribe(function (res) {
            if (res && res.status) {
                _this.post = res.posts;
                if (_this.post.subject !== '' && _this.post.subject !== null) {
                    _this.post['subjects_array'] = JSON.parse(_this.post.subject);
                    // ZB changes
                }
                if (_this.post.attachment !== "" && _this.post.attachment !== null && _this.post.attachment.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(_this.post.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                    var abc = _this.post.attachment.split("/");
                    //  let img_name = abc[abc.length-1];
                    var folder_name2 = abc[abc.length - 2];
                    if (_this.platform.is("mobile")) {
                        _this.deviceType = 'radiobase_mobile';
                    }
                    else if (_this.platform.is("tablet")) {
                        _this.deviceType = 'radiobase_tablet';
                    }
                    else {
                        _this.deviceType = folder_name2;
                    }
                    var new_link = _this.post.attachment.replace(folder_name2, _this.deviceType);
                    _this.post.attachment = new_link;
                    _this.post['folder_name'] = folder_name2;
                }
                // if (this.post.attachment){
                //   this.post.attachment = this.dom.bypassSecurityTrustResourceUrl(this.post.attachment);
                // }
            }
        });
    };
    NewsletterDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    // ZB changes
    NewsletterDetailPage.prototype.subjectClicked = function (event, index) {
        event.stopPropagation();
        this.topics_clicked = true;
        this.show_index = index;
    };
    NewsletterDetailPage.prototype.wantSubscription = function () {
        this.subcribeNews();
    };
    NewsletterDetailPage.prototype.subcribeNews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _common_subcribe_news_subcribe_news_component__WEBPACK_IMPORTED_MODULE_17__["SubcribeNewsComponent"],
                            cssClass: 'CommentModal',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NewsletterDetailPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_6__["IdService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"] }
    ]; };
    NewsletterDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter-detail',
            template: __webpack_require__(/*! raw-loader!./newsletter-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/newsletter-detail/newsletter-detail.page.html"),
            styles: [__webpack_require__(/*! ./newsletter-detail.page.scss */ "./src/app/newsletter-detail/newsletter-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _services_id_service__WEBPACK_IMPORTED_MODULE_6__["IdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"]])
    ], NewsletterDetailPage);
    return NewsletterDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=newsletter-detail-newsletter-detail-module-es5.js.map