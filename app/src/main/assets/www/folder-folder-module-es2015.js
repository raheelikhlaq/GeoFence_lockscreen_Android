(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/folder/folder.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/folder/folder.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Folder')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\" *ngIf=\"custom_name\"></ion-icon>&nbsp;\n            {{custom_name}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Folder')\" slot=\"start\">{{custom_name}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n<!--        ISM LAYOUT-->\n        <div class=\"app-container\" *ngIf=\"ism_layout_enable\">\n            <ion-card class=\"ionCard ionCard--mobile\">\n                <P class=\"ion-text-center\">{{ism_top_card_header}}</P>\n                <ion-slides [pager]=\"hometop_posts.length > 1\" [options]=\"slideOpts\" class=\"ion-margin-bottom\">\n                    <ion-slide *ngFor=\"let post of hometop_posts\">\n                        <!--                        [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\"-->\n                        <ion-card (click)=\"goToIframe(post.page_link)\" class=\"ionCard ion-no-margin ion-margin-bottom ionCard--backGroundBg ionCard--backGroundBg--medium cursor-pointer\"\n                                  Style=\"width: 100%\" [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                            <!--<video *ngIf=\"card.upload_video === 'true'\" class=\"embed-responsive embed-responsive-21by9\" autoplay muted loop id=\"myVideo\">-->\n                            <!--<source class=\"embed-responsive-item\" [src]=\"card.background\" type=\"video/mp4\">-->\n                            <!--</video>-->\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"ion-align-items-end\">\n                                        <ion-col [sizeLg]=\"8\" class=\"ion-text-left\">\n                                            <div style=\"margin-bottom: 5px;\">\n                                                <ion-label *ngIf=\"post.title[0]\" class=\"heading2 ionCard--backGroundBg__heading\">\n                                                    {{post.title[0]}}\n                                                </ion-label>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-slide>\n                    <ion-slide *ngIf=\"hometop_posts.length === 0\">\n                        <p> {{'ISM_HOME.no_post_available' | translate}}</p>\n                    </ion-slide>\n                </ion-slides>\n                <div style=\"margin-top: 60px;\">\n                    <P class=\"ion-text-center\">{{ism_bottom_card_header}}</P>\n                </div>\n                <ion-card *ngFor=\"let post of homebottom_posts\" (click)=\"goToIframe(post.page_link)\" class=\"ionCard ion-no-margin ion-margin-bottom ionCard--backGroundBg ionCard--backGroundBg--big cursor-pointer\"\n                          [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                    <!--<video *ngIf=\"card.upload_video === 'true'\" class=\"embed-responsive embed-responsive-21by9\" autoplay muted loop id=\"myVideo\">-->\n                    <!--<source class=\"embed-responsive-item\" [src]=\"card.background\" type=\"video/mp4\">-->\n                    <!--</video>-->\n                    <div class=\"ionCard--backGroundBg__footer\">\n                        <ion-grid>\n                            <ion-row class=\"ion-align-items-end\">\n                                <ion-col [sizeLg]=\"8\">\n                                    <div style=\"margin-bottom: 5px;\">\n                                        <ion-label  *ngIf=\"post.title[0]\" class=\"heading2 ionCard--backGroundBg__heading\">\n                                            {{post.title[0]}}\n                                        </ion-label>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-card>\n                <p class=\"ion-text-center\" *ngIf=\"homebottom_posts.length === 0\"> {{'ISM_HOME.no_post_available' | translate}}</p>\n            </ion-card>\n        </div>\n\n<!--        NON ISM LAYOUT-->\n        <div class=\"app-container\" *ngIf=\"!ism_layout_enable\">\n            <!--      COUNTDOWN CARD-->\n            <div *ngFor=\"let card of cards; let i = index\">\n                <ion-row  class=\"\" style=\"margin-bottom: 5px;\">\n                    <ion-col [size]=\"12\" [sizeLg]=\"8\" *ngIf=\"card.card_type === 'countdown'\" [class]=\"card.div_class ? card.div_class : ''\">\n                        <ion-card (click)=\"goToPage(card.page_link, card.page_id , $event)\"\n                                  class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--medium ionCard--stream cursor-pointer\"\n                                  [ngStyle]=\"{'background': 'url(' + ( card.background ? card.background : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                            <div class=\"layer\" [style.background]=\"getGradient(card.grad_color_1, card.opacity_color)\"></div>\n                            <div class=\"ionCard--backGroundBg__body\">\n                                <div class=\"ion-text-right\">\n                                    <ion-button *ngIf=\"card.badge && card.transparent_badge === 'false'\" routerDirection=\"root\" (click)=\"goToPage(card.badge_link, card.id , $event)\"\n                                                class=\"commonBtn commonBtn--white commonBtn--round\"\n                                                shape=\"round\">{{card.badge}}\n                                    </ion-button>\n                                    <ion-button *ngIf=\"card.badge && card.transparent_badge === 'true'\" routerDirection=\"root\" (click)=\"goToPage(card.badge_link, card.id , $event)\"\n                                                class=\"commonBtn commonBtn--whiteOutline commonBtn--round\"\n                                                shape=\"round\" fill=\"outline\">{{card.badge}}\n                                    </ion-button>\n                                </div>\n                            </div>\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"ion-align-items-end\">\n                                        <ion-col [sizeLg]=\"8\">\n                                            <div>\n                                                <ion-card-subtitle\n                                                        class=\"ionCard--backGroundBg__subheading ionCard--stream__subheading\" *ngIf=\"card.hide_title_on_card !== 'true'\">\n                                                    {{card.title}}\n                                                </ion-card-subtitle>\n                                            </div>\n                                            <ion-label  *ngIf=\"card.current_timeline && card.current_timeline.days > 0\"\n                                                        class=\"heading1 ionCard--backGroundBg__heading ionCard--stream__heading\">\n                                                        {{card.current_timeline.days}} {{ch_id !== '2226' ? 'days' : 'Dias'}}\n                                            </ion-label>\n                                            <br>\n                                            <ion-label *ngIf=\"card.current_timeline\"\n                                                       class=\"heading1 ionCard--backGroundBg__heading ionCard--stream__heading\">\n                                                {{card.current_timeline.hours > 0 ? card.current_timeline.hours : 0}} : {{card.current_timeline.minutes > 0 ? card.current_timeline.minutes : 0}} : {{card.current_timeline.seconds > 0 ? card.current_timeline.seconds : 0}}\n                                            </ion-label>\n                                            <ion-button *ngIf=\"card.highlighted_button\"  (click)=\"goToPage(card.highlighted_link, card.id, $event)\"\n                                                        class=\"commonBtn commonBtn--btnLarge commonBtn--white\">\n                                                {{card.highlighted_button}}\n                                            </ion-button>&nbsp;&nbsp;\n                                            <ion-button *ngIf=\"card.outlined_button\" (click)=\"goToPage(card.outlined_link, card.id, $event)\"  router-direction=\"root\"\n                                                        class=\"commonBtn commonBtn--btnLarge commonBtn--whiteOutline\"\n                                                        fill=\"outline\">{{card.outlined_button}}\n                                            </ion-button>\n                                        </ion-col>\n                                        <ion-col [sizeLg]=\"4\" class=\"ion-text-right hide-mobile\">\n                                            <ion-button routerDirection=\"root\"\n                                                        class=\"commonBtn commonBtn--btnLarge commonBtn--whiteOutline\"\n                                                        fill=\"outline\">{{'ISM_HOME.watchnow' | translate}}!\n                                            </ion-button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                    <!--        Quote Card-->\n                    <ion-col [sizeLg]=\"8\" class=\"ion-no-padding\">\n                        <div *ngIf=\"card.card_type === 'quote'\" [class]=\"card.div_class ? card.div_class : 'ion-margin-bottom'\">\n                            <ion-card (click)=\"goToPage(card.page_link, card.page_id, $event)\"\n                                      class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--medium ionCard--sermon cursor-pointer\"\n                                      [ngStyle]=\"{'background': 'url(' + ( card.background ? card.background : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                                <div class=\"layer\" [style.background]=\"getGradient(card.grad_color_1, card.opacity_color)\"></div>\n                                <div class=\"ionCard--backGroundBg__body\">\n                                    <div class=\"ion-text-right\">\n                                        <ion-button *ngIf=\"card.badge && card.transparent_badge === 'false'\" (click)=\"goToPage(card.badge_link, card.id, $event)\"\n                                                    class=\"commonBtn commonBtn--white commonBtn--round\">{{card.badge}}\n                                        </ion-button>\n                                        <ion-button *ngIf=\"card.badge && card.transparent_badge === 'true'\" (click)=\"goToPage(card.badge_link, card.id, $event)\"\n                                                    class=\"commonBtn commonBtn--whiteOutline commonBtn--round\" fill=\"outline\">{{card.badge}}\n                                        </ion-button>\n                                    </div>\n                                </div>\n                                <div class=\"ionCard--backGroundBg__footer\">\n                                    <ion-grid>\n                                        <ion-row class=\" align-items-end\">\n                                            <ion-col size=\"12\">\n                                                <div style=\"margin-bottom: 5px;\">\n                                                    <ion-label\n                                                            class=\"heading2 ionCard--backGroundBg__heading\" *ngIf=\"card.hide_title_on_card !== 'true'\"> {{card.title}}\n                                                    </ion-label>\n                                                    <br/>\n                                                    <ion-label *ngIf=\"card.quote\"\n                                                               class=\"heading4 ionCard--backGroundBg__heading\"> \"{{card.quote}}\"\n                                                    </ion-label>\n                                                    <ion-card-subtitle\n                                                            class=\"ionCard--backGroundBg__subheading\"> {{card.subtitle}}\n                                                    </ion-card-subtitle>\n                                                </div>\n                                                <ion-button *ngIf=\"card.highlighted_button\" (click)=\"goToPage(card.highlighted_link, card.id, $event)\"\n                                                            class=\"commonBtn commonBtn--btnLarge commonBtn--white\">\n                                                    {{card.highlighted_button}}\n                                                </ion-button>&nbsp;&nbsp;\n                                                <ion-button *ngIf=\"card.outlined_button\" (click)=\"goToPage(card.outlined_link, card.id, $event)\" router-direction=\"root\"\n                                                            class=\"commonBtn commonBtn--btnLarge commonBtn--whiteOutline\"\n                                                            fill=\"outline\">{{card.outlined_button}}\n                                                </ion-button>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </div>\n                            </ion-card>\n                        </div>\n                        <!--          STANDARD CARD-->\n                        <ion-col *ngIf=\"card.card_type === 'standard'\" [size]=\"12\" [sizeLg]=\"12\" [class]=\"card.div_class ? card.div_class : 'ion-no-padding'\">\n                            <div class=\"ion-margin-bottom\">\n                                <ion-card (click)=\"goToPage(card.page_link, card.page_id, $event)\"\n                                          class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--medium ionCard--giving cursor-pointer\"\n                                          [ngStyle]=\"{'background': 'url(' + ( card.background ? card.background : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                                    <div class=\"layer\" [style.background]=\"getGradient(card.grad_color_1, card.opacity_color)\"></div>\n                                    <div class=\"ionCard--backGroundBg__body\">\n                                        <div class=\"ion-text-right\">\n                                            <ion-button *ngIf=\"card.badge && card.transparent_badge === 'false'\" (click)=\"goToPage(card.badge_link, card.id, $event)\"\n                                                        class=\"commonBtn commonBtn--white commonBtn--round\">{{card.badge}}\n                                            </ion-button>\n                                            <ion-button *ngIf=\"card.badge && card.transparent_badge === 'true'\" (click)=\"goToPage(card.badge_link, card.id, $event)\"\n                                                        class=\"commonBtn commonBtn--whiteOutline commonBtn--round\" fill=\"outline\">{{card.badge}}\n                                            </ion-button>\n                                        </div>\n                                    </div>\n                                    <div class=\"ionCard--backGroundBg__footer\">\n                                        <ion-grid>\n                                            <ion-row class=\" align-items-end\">\n                                                <ion-col size=\"12\">\n                                                    <div style=\"margin-bottom: 5px;\">\n                                                        <ion-label\n                                                                class=\"heading2 ionCard--backGroundBg__heading\" *ngIf=\"card.hide_title_on_card !== 'true'\"> {{card.title}}\n                                                        </ion-label>\n                                                        <ion-card-subtitle\n                                                                class=\"ionCard--backGroundBg__subheading\"> {{card.subtitle}}\n                                                        </ion-card-subtitle>\n                                                    </div>\n                                                    <ion-button *ngIf=\"card.highlighted_button\"\n                                                                (click)=\"goToPage(card.highlighted_link, card.id, $event)\"\n                                                                class=\"commonBtn commonBtn--btnLarge commonBtn--white\">\n                                                        {{card.highlighted_button}}\n                                                    </ion-button>\n                                                    <ion-button *ngIf=\"card.outlined_button\" (click)=\"goToPage(card.outlined_link, card.id, $event)\" router-direction=\"root\"\n                                                                class=\"commonBtn commonBtn--btnLarge commonBtn--whiteOutline\"\n                                                                fill=\"outline\">{{card.outlined_button}}\n                                                    </ion-button>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </div>\n                                </ion-card>\n                            </div>\n                        </ion-col>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]
    }
];
let FolderPageModule = class FolderPageModule {
};
FolderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


















let FolderPage = class FolderPage {
    constructor(route, loader, storage, sermonsService, dom, router, location, common, toast, analytics, event_provider, platform, device, iab, translate) {
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this.analytics = analytics;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.iab = iab;
        this.translate = translate;
        this.slideOpts = {
            slidesPerView: 1.3,
            centeredSlides: true,
            spaceBetween: 15,
            initialSlide: 1,
            speed: 400,
            grabCursor: true,
        };
        this.page_in_home_tabs = false;
        this.ism_layout_enable = false;
        this.hometop_posts = [];
        this.homebottom_posts = [];
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes'
        };
        this.path_origin = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].domain_name;
        this.ism_top_card_links = '';
        this.ism_bottom_card_links = '';
        this.ism_top_card_header = 'Find Hope Today';
        this.ism_bottom_card_header = 'Discover the bible';
        this.deviceType = '';
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    }
    getGradient(color_one, bg_color) {
        if (bg_color === '') {
            return this.dom.bypassSecurityTrustStyle(`linear-gradient(to bottom,rgba(255,0,0,0), ${color_one}`);
        }
        else {
            return `${bg_color}`;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // assigning data from URL Params
            this.folder_id = this.route.snapshot.paramMap.get('folder_id');
            // fetching latest theme
            this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!(Object.keys(res).length === 0)) {
                    this.theme = res;
                    this.ch_id = this.theme.ch_id;
                    if (!this.ch_id || this.ch_id === "") {
                        this.ch_id = res.church.ch_id;
                    }
                    this.common.store_app_pages(res.apppages, 'Folder');
                    this.common.storeTheme(res.church);
                    // to check which tab is active
                    if (this.theme.church.home_tabs) {
                        this.home_tabs = JSON.parse(this.theme.church.home_tabs);
                    }
                    // saving app pages ======================================
                    this.app_pages = res.apppages;
                    let app_pages = res.apppages.find(x => x.id === this.folder_id);
                    if (app_pages) {
                        // layout for ISM =========================================
                        if (this.ch_id === '994' && app_pages.id === '3459') {
                            this.ism_layout_enable = true;
                            if (app_pages.side_menu_data) {
                                let data = JSON.parse(app_pages.side_menu_data);
                                this.ism_top_card_links = data.top;
                                this.ism_bottom_card_links = data.bottom;
                            }
                            if (app_pages.contact_email) { // top title ism card
                                this.ism_top_card_header = app_pages.contact_email;
                            }
                            if (app_pages.contact_phone) { // bottom card ism
                                this.ism_bottom_card_header = app_pages.contact_phone;
                            }
                            this.getHomeTopPosts(this.theme.church.wp_site_apollo);
                            this.getHomeBottomPosts(this.theme.church.wp_site_apollo);
                        }
                        // ===========================================================
                        this.folder_name = app_pages.name;
                        this.custom_name = app_pages.title;
                        this.getUser();
                        this.cards = app_pages.cards;
                        this.cards.forEach(card => {
                            if (card.background !== "" && card.background !== null && card.background.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(card.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                let abc = card.background.split("/");
                                //  let img_name = abc[abc.length-1];
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
                                let new_link = card.background.replace(folder_name, this.deviceType);
                                card['background'] = new_link;
                                // console.log('background is: ',card.background,'new link is: ', new_link);
                            }
                        });
                        this.cards.map(x => {
                            if (x.show_in_app === 'true' && x.show_in_pwa === 'false') {
                                if (x.card_type === 'countdown') {
                                    x['div_class'] = "show-mobile";
                                }
                                else if (x.card_type === 'quote') {
                                    x['div_class'] = "ion-margin-bottom show-mobile";
                                }
                                else if (x.card_type === 'standard') {
                                    x['div_class'] = "ion-no-padding show-mobile";
                                }
                            }
                            else if (x.show_in_app === 'false' && x.show_in_pwa === 'true') {
                                if (x.card_type === 'countdown') {
                                    x['div_class'] = "hide-mobile";
                                }
                                else if (x.card_type === 'quote') {
                                    x['div_class'] = "ion-margin-bottom hide-mobile";
                                }
                                else if (x.card_type === 'standard') {
                                    x['div_class'] = "ion-no-padding hide-mobile";
                                }
                            }
                            else if (x.show_in_app === 'true' && x.show_in_pwa === 'true') {
                                if (x.card_type === 'countdown') {
                                    x['div_class'] = "";
                                }
                                else if (x.card_type === 'quote') {
                                    x['div_class'] = "ion-margin-bottom";
                                }
                                else if (x.card_type === 'standard') {
                                    x['div_class'] = "ion-no-padding";
                                }
                            }
                            else if (x.show_in_app === 'false' && x.show_in_pwa === 'false') {
                                if (x.card_type === 'countdown') {
                                    x['div_class'] = "ion-hide";
                                }
                                else if (x.card_type === 'quote') {
                                    x['div_class'] = "ion-margin-bottom ion-hide";
                                }
                                else if (x.card_type === 'standard') {
                                    x['div_class'] = "ion-no-padding ion-hide";
                                }
                            }
                        });
                    }
                    // filtering countdown cards
                    let countdown_card = this.cards.filter(x => x.card_type === 'countdown');
                    countdown_card.forEach(function (card) {
                        card.count = 0;
                    });
                    if (app_pages) {
                        this.banner_image = app_pages.website_banner;
                        this.banner_desc = app_pages.banner_description;
                        this.banner_title = app_pages.banner_title;
                        // =====================  setting TIMER on countdown Cards and updating every second ==================================
                        // setInterval(() => {
                        //     let countdown_card = this.cards.filter(x => x.card_type === 'countdown');
                        //     countdown_card.map(x => {
                        //         let temp = [];
                        //         if (x.time) {
                        //             for (let i = 0; i < JSON.parse(x.time).length; i++) {
                        //                 temp.push(this.diff_minutes(JSON.parse(x.time)[i].time));
                        //             }
                        //             x.timeleft = temp;
                        //             x.current_timeline = temp[x.count];
                        //             if (x.current_timeline) {
                        //                 if (x.current_timeline.days < 1 && x.current_timeline.hours < 1 && x.current_timeline.minutes < 1 && x.current_timeline.seconds < 1) {
                        //                     if (x.count < temp.length) {
                        //                         x.count = x.count + 1;
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     });
                        // }, 1000);
                        setInterval(() => {
                            let countdown_card = this.cards.filter(x => x.card_type === 'countdown');
                            countdown_card.map(x => {
                                let temp = [];
                                if (x.time) {
                                    for (let i = 0; i < JSON.parse(x.time).length; i++) {
                                        temp.push(this.diff_minutes(JSON.parse(x.time)[i].time));
                                    }
                                    x.timeleft = temp;
                                    x.current_timeline = temp[x.count];
                                    if (x.current_timeline) {
                                        if (x.current_timeline.days > 0) {
                                            x.current_timeline.hours = x.current_timeline.hours;
                                        }
                                        if (x.current_timeline.days < 1 && x.current_timeline.hours < 1 && x.current_timeline.minutes < 1 && x.current_timeline.seconds < 1) {
                                            if (x.count < temp.length) {
                                                x.count = x.count + 1;
                                            }
                                        }
                                    }
                                }
                            });
                        }, 1000);
                        // =====================  setting TIMER on countdown Cards and updating every second ==================================
                    }
                }
            }));
            // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
            // this.events.subscribe('is_home_enable', (is_home_enable) => {
            //     this.enable_home = is_home_enable;
            // });
            this.event_provider.isHomeEnable.subscribe(value => {
                this.enable_home = value.value;
            });
            if (!this.enable_home) {
                // updating home page status from variable set in common service
                // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
                // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
                this.enable_home = this.common.is_home_enable;
            }
        });
    }
    ionViewWillEnter() {
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                var id = this.route.snapshot.paramMap.get('folder_id');
                let app_pages = res.apppages.find(x => x.id === id);
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
        }));
    }
    getHomeTopPosts(url) {
        let self = this;
        // fetch notes by category
        this.sermonsService.getHomeTopPosts(url).subscribe((res) => {
            // ======= parsing xml into JsSON format =============================
            let parseString = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js").parseString;
            parseString(res, function (err, result) {
                if (result.rss.channel[0].item !== undefined) {
                    self.hometop_posts = result.rss.channel[0].item;
                }
                else {
                    self.hometop_posts = [];
                }
                if (self.hometop_posts.length > 0) {
                    self.hometop_posts.map(x => {
                        let attachment = x['content:encoded'][0];
                        if (attachment) {
                            let check = attachment.split('src="');
                            if (check[1]) {
                                let check2 = check[1].split('"');
                                if (check2[0]) {
                                    x['image'] = check2[0];
                                }
                            }
                        }
                        if (self.ism_top_card_links.length) {
                            self.ism_top_card_links.map(y => {
                                if (y.title == x.title[0] && y.link_match == x.link[0]) {
                                    x['page_link'] = y.link;
                                }
                            });
                        }
                    });
                }
            });
            // ======= parsing xml into JsSON format =============================
        });
    }
    getHomeBottomPosts(url) {
        let self = this;
        // fetch notes by category
        this.sermonsService.getHomeBottomPosts(url).subscribe((res) => {
            // ======= parsing xml into JsSON format =============================
            let parseString = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js").parseString;
            parseString(res, function (err, result) {
                if (result.rss.channel[0].item !== undefined) {
                    self.homebottom_posts = result.rss.channel[0].item;
                }
                else {
                    self.homebottom_posts = [];
                }
                if (self.homebottom_posts.length > 0) {
                    self.homebottom_posts.map(x => {
                        let attachment = x['content:encoded'][0];
                        if (attachment) {
                            let check = attachment.split('src="');
                            if (check[1]) {
                                let check2 = check[1].split('"');
                                if (check2[0]) {
                                    x['image'] = check2[0];
                                }
                            }
                        }
                        if (self.ism_bottom_card_links.length) {
                            self.ism_bottom_card_links.map(y => {
                                if (y.title == x.title[0] && y.link_match == x.link[0]) {
                                    x['page_link'] = y.link;
                                }
                            });
                        }
                    });
                }
            });
            // ======= parsing xml into JsSON format =============================
        });
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then((val) => {
            if (val != null && val != 'guest') {
                this.user = val;
            }
        });
    }
    // calculating time left in Hrs, Mins, Secs
    diff_minutes(date) {
        let myMoment = moment__WEBPACK_IMPORTED_MODULE_10__(date, "YYYY-MM-DD HH:mm:ss");
        let ok = moment__WEBPACK_IMPORTED_MODULE_10__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](myMoment.diff(ok));
        var total = duration.asMilliseconds();
        var t = total;
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    gotobackPage() {
        this.location.back();
    }
    goToIframe(url) {
        if (url) {
            this.router.navigate(['iframe', {
                    url: url
                }]);
        }
    }
    // navigating CARDS to Pages
    goToPage(pageName, pageId, event) {
        if (event !== '') {
            event.stopPropagation();
        }
        if (pageName && pageId) {
            if (pageName === 'Audio') {
                pageName = 'audio-archive';
                this.router.navigate(['audio-archive', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'Video') {
                pageName = 'video-archive';
                this.router.navigate(['video-archive', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'study') {
                this.router.navigate(['ism-teachings/bible', {
                        data: this.ch_id
                    }]);
            }
            else if (pageName === 'Home') {
                if (this.ch_id === '1000') {
                    pageName = 'ism-home/' + this.ch_id;
                    this.router.navigate([pageName]);
                }
                else {
                    pageName = 'home-tabs/home/' + this.ch_id;
                    this.router.navigate([pageName]);
                }
            }
            else if (pageName === 'Donations') {
                let link_page = this.app_pages.find(x => x.id === pageId);
                if (link_page) {
                    let open_external = link_page.open_external;
                    if (open_external === 'true') {
                        let donations_url = _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].domain_name + "/give-new/" + link_page.html;
                        this.openurlinbrowser(donations_url);
                    }
                    else {
                        this.router.navigate(['my-contribute']);
                    }
                }
            }
            else if (pageName === 'Bible') {
                if (this.ch_id == '1000') {
                    this.router.navigate(['/bible-chapter']);
                }
                else {
                    pageName = pageName.replace(' ', '-');
                    pageName = pageName.toLowerCase();
                    this.router.navigate([pageName]);
                }
            }
            else if (pageName === 'Feed') {
                if ((this.home_tabs && this.home_tabs[1].status === 'true') || this.ch_id === '1000') {
                    this.router.navigate(['/feed-tab']);
                }
                else {
                    this.router.navigate(['home-tabs/feed-tab']);
                }
            }
            if (pageName === 'Today Study') {
                console.log(pageName);
                if (this.ch_id === '1246') {
                    // this.slug.setSlugName( 'today-study-card' , pageData.slug);
                    this.router.navigate(['today-study-card']);
                    // this.location.replaceState(this.router.serializeUrl(this.router.createUrlTree([pageData.slug])));
                }
                else {
                    this.router.navigate([pageName]);
                }
            }
            else if (pageName === 'Study' || pageName === 'study') {
                if (this.ch_id === '1246') {
                    this.router.navigate(['journey']);
                }
                else {
                    this.router.navigate(['ism-teachings/bible', {
                            data: this.ch_id
                        }]);
                }
            }
            else if (pageName === 'Events') {
                this.router.navigate(['events/', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'Chat') {
                if ((this.home_tabs && this.home_tabs[2].status === 'true') || this.ch_id === '1000') {
                    this.router.navigate(['/chat']);
                }
                else {
                    this.router.navigate(['home-tabs/chat']);
                }
            }
            else if (pageName === 'Custom Post') {
                this.router.navigate(['custom-post/', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'Live Stream') {
                this.router.navigate(['live-stream', {
                        ch_id: this.ch_id,
                    }]);
            }
            else if (pageName === 'Shows') {
                this.router.navigate(['/shows', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'Form') {
                if (localStorage.getItem('is_wordpress_enable') === 'true') {
                    let form_page = this.app_pages.filter(x => x.id === pageId);
                    if (form_page.length > 0) {
                        this.router.navigateByUrl('/forms/' + form_page[0].html);
                    }
                }
                else {
                    this.router.navigate(['/form', {
                            form_id: pageId
                        }]);
                }
            }
            else if (pageName === 'Folder') {
                this.router.navigate(['folder', {
                        folder_id: pageId
                    }]);
            }
            else if (pageName === 'Custom Page') {
                this.router.navigate(['custom-page', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'iFrame') {
                this.router.navigate(['in-app-iframe/', {
                        page_id: pageId
                    }]);
            }
            else if (pageName === 'Link') {
                let link_page = this.app_pages.find(x => x.id === pageId);
                if (link_page) {
                    let open_external = link_page.open_external;
                    if (open_external === 'true') {
                        this.openurlinbrowser(link_page.url);
                    }
                    else {
                        this.openurlinapp(link_page.url);
                    }
                }
            }
            else if (pageName === 'Newsletter') {
                this.router.navigate(['/newsletter/' + this.ch_id]);
            }
            else {
                pageName = pageName.replace(' ', '-');
                pageName = pageName.toLowerCase();
                this.router.navigate([pageName]);
            }
        }
    }
    // inside app on page with done button
    openurlinapp(url) {
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(url, '_blank', this.options);
        }
        else {
            this.iab.create(url, '_self', this.options);
        }
    }
    // in external safari/chrome
    openurlinbrowser(url) {
        this.iab.create(url, '_system');
    }
    setAnalytics() {
        let dev_id = '';
        let device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_10__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.folder_name,
            custom_name: this.custom_name,
            ip_address: "",
            device: device,
            device_id: dev_id,
            client_type: userId,
            event_type: ""
        });
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe((res) => {
        });
    }
    ionViewDidLeave() {
        this.setAnalytics();
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_10__();
        this.event_provider.hidefooter(true, 'other');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"] }
];
FolderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: __webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/index.js!./src/app/folder/folder.page.html"),
        styles: [__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]])
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map