(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/events.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border >\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Events') && !page_in_home_tabs\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon *ngIf=\"page_name\" name=\"arrow-back\"></ion-icon>&nbsp;\n            {{page_name ? page_name : 'EVENTS.events' | translate}}\n\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Events')\" slot=\"start\">{{page_name ? page_name : 'EVENTS.events' | translate}}</p>\n\n\n        <ion-buttons class=\"cursor-pointer\" slot=\"end\" (click)=\"settingsPopover()\">\n            <ion-icon name=\"funnel\"></ion-icon>&nbsp;\n            {{'EVENTS.filter' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_img + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" *ngIf=\"!events && !church_events\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\">{{'EVENTS.no_event_available' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" *ngIf=\"events\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"hide-mobile\">\n                        <ion-card class=\"ionCard\">\n                            <ion-card-header class=\"\">\n                                <ion-card-title class=\"heading4\">{{'EVENTS.filter_events' | translate}}</ion-card-title>\n                            </ion-card-header>\n                            <hr class=\"ionCard__divider\">\n                            <ion-card-content>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"inputField\" lines=\"none\">\n                                        <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                            <ion-icon name=\"calendar\"></ion-icon>\n                                        </ion-buttons>\n                                        <ion-datetime [(ngModel)]=\"filterDate\" name=\"displayDate\"\n                                                      class=\"inputField__area inputField__area--datePicker\" cancelText=\"{{'datetime.cancel' | translate}}\" doneText=\"{{'datetime.done' | translate}}\"\n                                                      displayFormat=\"MM/DD/YY\" placeholder=\"{{'EVENTS.selectdate_placeholder' | translate}}\"></ion-datetime>\n                                    </ion-item>\n                                </div>\n                                <div class=\"ion-margin-top\">\n                                    <ion-button (click)=\"check()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\"\n                                                fill=\"block\">\n                                        {{'EVENTS.filter' | translate}}\n                                    </ion-button>\n                                    <ion-button *ngIf=\"cancel_filter\" (click)=\"discard_filter()\"\n                                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                                        {{'EVENTS.discard_filter' | translate}}\n                                    </ion-button>\n                                </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"8\">\n                        <div *ngFor=\"let event of filtered_events; let i = index\">\n                            <ion-card *ngIf=\"isDateValid(event.start_date)\"  (click)=\"open_Detail_dashboard(event.UID, i)\"\n                            class=\"ionCard ion-margin-bottom cursor-pointer ionCard--mobile\"\n                            routerLink=\"/event-detail\" routerDirection=\"root\">\n                            <div class=\"ionCard__imgDiv\">\n                                <img *ngIf=\"event.photo\"\n                                    [src]=\"event.photo\"/>\n                                <img *ngIf=\"!event.photo\"\n                                    src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                            </div>\n                                <ion-card-content class=\"ion-no-padding\">\n                                    <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                                        <ion-thumbnail class=\"ionMedia__media ionMedia__media--dark ionMedia__media--big\">\n                                            <span *ngIf=\"event.start_date\"\n                                                    style=\"display:block;font-size: 25px;line-height: 20px;\">{{event.thumbnailDatedd}}</span>\n                                            <span *ngIf=\"event.start_date\"\n                                                    class=\"font-weight-normal\">{{event.thumbnailDateMM}}</span>\n\n                                            <span *ngIf=\"!event.start_date\"\n                                                    class=\"font-weight-normal\">N/A</span>\n                                        </ion-thumbnail>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 *ngIf=\"event.SUMMARY\" class=\"ionMedia__heading\">{{event.SUMMARY}}</h2>\n                                            \n                                            <p *ngIf=\"event.start_date && event.all_day === 'false'\"\n                                                class=\"ionMedia__text text-gray\">\n                                                <ion-icon name=\"time\" style=\"position: relative;top: 2px;\"></ion-icon>\n                                                {{'EVENTS.on' | translate}} {{event.start_date | date:  'd/yyyy/mm'}}\n                                                {{'EVENTS.at' | translate}} {{event.start_date | date:  \t'h:mm a'}}\n                                            </p>\n                                            <p *ngIf=\"event.start_date && event.all_day ==='true' \"\n                                                class=\"ionMedia__text text-gray\">\n                                                <ion-icon name=\"time\" style=\"position: relative;top: 2px;\"></ion-icon>\n                                                {{'EVENTS.on' | translate}}  {{event.start_date | date:  'd/yyyy/mm'}}\n                                            </p>\n                                            <!-- <p *ngIf=\"event.start_date\"\n                                                class=\"ionMedia__text text-gray\">\n                                                <ion-icon name=\"time\" style=\"position: relative;top: 2px;\"></ion-icon>\n                                                {{'EVENTS.on' | translate}} {{event.startdate}}\n                                                {{'EVENTS.at' | translate}} {{event.starttime }}\n                                            </p> -->\n\n                                            <h2 *ngIf=\"!event.SUMMARY\" class=\"ionMedia__heading\">{{event.SUMMARY}}</h2>\n                                            <p *ngIf=\"!event.start_date\"\n                                                class=\"ionMedia__text text-gray\">Date & Time not Available </p>\n                                            <p *ngIf=\"event.EVENTCOST && event.EVENTCOST !== 'undefined'\">\n                                                Price: {{event.EVENTCOST}} </p>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n                        \n                        <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                                  style=\"border-radius: 5px;\" *ngIf=\"filtered_events.length === 0\">\n                            <h4 class=\"heading4\">{{'EVENTS.no_event_available' | translate}}</h4>\n                        </ion-card>\n                        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n                            <ion-infinite-scroll-content\n                                    loadingSpinner=\"bubbles\"\n                                    loadingText=\"\">\n                            </ion-infinite-scroll-content>\n                        </ion-infinite-scroll>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n    <!--    CHURCH_MODE_EVENTS-->\n    <div class=\"page-wrapper\" *ngIf=\"church_events\">\n        <div class=\"app-container\">\n            <ion-grid>\n                <ion-row class=\"ion-justify-content-center\">\n                    <ion-col [size]=\"12\" [sizeMd]=\"4\" class=\"hide-mobile\">\n                        <ion-card class=\"ionCard\">\n                            <ion-card-header class=\"\">\n                                <ion-card-title class=\"heading4\">{{'EVENTS.filter_events' | translate}}</ion-card-title>\n                            </ion-card-header>\n                            <hr class=\"ionCard__divider\">\n                            <ion-card-content>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"inputField\" lines=\"none\">\n                                        <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                                            <ion-icon name=\"calendar\"></ion-icon>\n                                        </ion-buttons>\n                                        <ion-datetime [(ngModel)]=\"filterDate\" name=\"displayDate\"\n                                                      class=\"inputField__area inputField__area--datePicker\" cancelText=\"{{'datetime.cancel' | translate}}\" doneText=\"{{'datetime.done' | translate}}\"\n                                                      displayFormat=\"MM/DD/YY\" placeholder=\"{{'EVENTS.selectdate_placeholder' | translate}}\"></ion-datetime>\n                                    </ion-item>\n                                </div>\n                                <div class=\"ion-margin-top\">\n                                    <ion-button (click)=\"check()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\"\n                                                fill=\"block\">\n                                        {{'EVENTS.filter' | translate}}\n                                    </ion-button>\n                                    <ion-button *ngIf=\"cancel_filter\" (click)=\"discard_filter()\"\n                                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                                        {{'EVENTS.discard_filter' | translate}}\n                                    </ion-button>\n                                </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"8\">\n                        <div *ngFor=\"let event of church_filtered_events; let i = index\" >\n                            <ion-card *ngIf=\"isDateValid(event.start_date)\" (click)=\"openDetail(event.id)\"\n                            class=\"ionCard ion-margin-bottom cursor-pointer ionCard--mobile\"\n                            routerLink=\"/event-detail\" routerDirection=\"root\">\n                                <div class=\"ionCard__imgDiv\">\n                                    <img\n                                        [src]=\"event.photo ? event.photo : '../../assets/img/live_stream_bg_2.jpg' \"/>\n                                </div>\n                                <ion-card-content class=\"ion-no-padding\">\n                                    <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                                        <ion-thumbnail class=\"ionMedia__media ionMedia__media--dark ionMedia__media--big\">\n                                            <span *ngIf=\"event.start_date\"\n                                                    style=\"display:block;font-size: 25px;line-height: 20px;\">{{event.startdate}}</span>\n                                            <span *ngIf=\"event.start_date\"\n                                                    class=\"font-weight-normal\">{{event.startdate}}</span>\n\n                                            <span *ngIf=\"!event.start_date\"\n                                                    class=\"font-weight-normal\">N/A</span>\n                                        </ion-thumbnail>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 *ngIf=\"event.name\" class=\"ionMedia__heading\">{{event.name}}</h2>\n                                            <p *ngIf=\"event.start_date || event.start_time\"\n                                                class=\"ionMedia__text text-gray\">\n                                                <ion-icon name=\"time\" style=\"position: relative;top: 2px;\"></ion-icon>\n                                                {{'EVENTS.on' | translate}}  {{event.start_date | date:  'd/yyyy/mm'}}\n                                                {{'EVENTS.at' | translate}}  {{event.start_date | date:  \t'h:mm a'}}\n                                            </p>\n\n                                            <h2 *ngIf=\"!event.name\" class=\"ionMedia__heading\">N/A</h2>\n                                            <p *ngIf=\"!event.start_time && !event.start_time\"\n                                                class=\"ionMedia__text text-gray\">{{'EVENTS.discard_filter' | translate}} </p>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n                        \n                        <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                                  style=\"border-radius: 5px;\" *ngIf=\"church_filtered_events.length === 0\">\n                            <h4 class=\"heading4\">{{'EVENTS.no_event_available' | translate}}</h4>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
    }
];
let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })
], EventsPageModule);



/***/ }),

/***/ "./src/app/events/events.page.scss":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/events.page.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_popover_filter_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-popover/filter-popover.component */ "./src/app/events/filter-popover/filter-popover.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




















let EventsPage = class EventsPage {
    constructor(route, eventsService, storage, loader, router, toast, datepipe, location, poCtrl, common, dom, appService, analytics, eventsCall, platform, device, translate, event_provider) {
        this.route = route;
        this.eventsService = eventsService;
        this.storage = storage;
        this.loader = loader;
        this.router = router;
        this.toast = toast;
        this.datepipe = datepipe;
        this.location = location;
        this.poCtrl = poCtrl;
        this.common = common;
        this.dom = dom;
        this.appService = appService;
        this.analytics = analytics;
        this.eventsCall = eventsCall;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.event_provider = event_provider;
        this.event_area_city = [];
        this.event_area_country = [];
        this.scrollArray = [];
        this.count = 0;
        this.cancel_filter = false;
        this.dashboard_mode = false;
        this.church_mode = false;
        this.dataLoaded = false;
        this.page_in_home_tabs = false;
        this.page = 1;
        this.external_server = false;
        this.is_wordpress_enable = false;
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // assigning data from URL Params
            this.page_id = this.route.snapshot.paramMap.get('page_id');
            this.loader.presentLoading().then(() => { });
            // getting theme from local storage
            // saving app_pages
            this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res && !(Object.keys(res).length === 0)) {
                    this.theme = res.church;
                    this.ch_id = this.theme.ch_id;
                    this.common.store_app_pages(res.apppages, 'Events');
                    this.getUser();
                    let app_pages = res.apppages.filter(x => x.id === this.page_id);
                    if (app_pages[0]) {
                        this._id = app_pages[0].id;
                        this.banner_img = app_pages[0].website_banner;
                        this.banner_desc = app_pages[0].banner_description;
                        this.banner_title = app_pages[0].banner_title;
                        this.page_name = app_pages[0].title;
                        this.custom_name = app_pages[0].name;
                        this.event_dashboard_url = app_pages[0].url;
                        let event_type = app_pages[0].custom_category_url;
                        if (app_pages.password_protection_toggle === 'true') {
                            this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                        }
                        if (event_type === 'true') {
                            this.external_server = true;
                        }
                        if (this.event_dashboard_url.includes("calendar.google.com") || this.event_dashboard_url.includes(".ics") || this.event_dashboard_url.includes("=ics") || res.is_wordpress_enable === '0' || this.event_dashboard_url.includes("?ical=1")) {
                            this.is_wordpress_enable = false;
                            this.getEvents();
                        }
                        else if (res.is_wordpress_enable === '1') {
                            this.is_wordpress_enable = true;
                            this.getDBEvents();
                        }
                    }
                }
            }));
            // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
            this.eventsCall.subscribe('is_home_enable', (is_home_enable) => {
                this.enable_home = is_home_enable;
            });
            if (!this.enable_home) {
                // updating home page status from variable set in common service
                // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
                // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
                this.enable_home = this.common.is_home_enable;
            }
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
    getDBEvents(event = null) {
        let body = {
            'church_id': this.ch_id,
            'page': this.page,
        };
        this.event_type = "dashboard";
        let cmsevents;
        this.eventsService.getCMSEvents(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.total_page_in_pagination = res['pages'];
            cmsevents = res['events'];
            // Saving City in Array
            for (let i = 0; i < cmsevents.length; i++) {
                // REMOVING "/" FROM EVENTS SUMMARY
                cmsevents[i].name = cmsevents[i].title;
                cmsevents[i].description = cmsevents[i].description;
                cmsevents[i].SUMMARY = cmsevents[i].title;
                // Getting City and Country seperately in corresponding Array
                let obj = cmsevents[i];
                let keys = Object.keys(obj);
                for (let j = 0; j < keys.length; j++) {
                    let key = keys[j];
                    if (keys[j].includes("start_date")) {
                        if (cmsevents[i][key].value !== undefined)
                            cmsevents[i].start_date = cmsevents[i][key].value;
                        else
                            cmsevents[i].start_date = cmsevents[i][key];
                    }
                    if (keys[j].includes("end_date")) {
                        if (cmsevents[i][key].value !== undefined)
                            cmsevents[i].end_date = cmsevents[i][key].value;
                        else
                            cmsevents[i].end_date = cmsevents[i][key];
                    }
                    if (keys[j].includes("featuredimageurl")) {
                        //this.bypass_url(cmsevents[i][key])
                        cmsevents[i].photo = cmsevents[i][key] ? cmsevents[i][key] : '';
                        // console.log(' cmsevents[i].photo:      ', cmsevents[i].photo );
                        if (cmsevents[i].photo !== "" && cmsevents[i].photo !== null && cmsevents[i].photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(cmsevents[i].created_at, 'yyyy-MM-dd', 'en_US') >= Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en_US')) {
                            let abc = cmsevents[i].photo.split("/");
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
                            let new_link = cmsevents[i].photo.replace(folder_name, this.deviceType);
                            cmsevents[i]['photo'] = new_link;
                            // console.log('background is: ',card.background,'new link is: ', new_link);
                        }
                    }
                }
            }
            if (cmsevents !== undefined) {
                if (this.page > 1) {
                    this.filtered_events = this.filtered_events.concat(cmsevents);
                    if (event) {
                        event.target.complete();
                    }
                }
                else {
                    this.filtered_events = cmsevents;
                    this.events = this.filtered_events;
                }
            }
            // this.filtered_events = this.events.reverse();
            // display date time with device time zone
            if (this.filtered_events) {
                this.filtered_events.forEach(event => {
                    var new_timeZone = '';
                    Object.keys(event).forEach(key => {
                        if (key.includes(';TZID=')) {
                            let tz = key.split('=');
                            new_timeZone = tz[1];
                        }
                    });
                    let church_data = JSON.parse(localStorage.getItem('church_data'));
                    if (new_timeZone === null) {
                        new_timeZone = church_data.church.timezone;
                    }
                    else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                        new_timeZone = church_data.church.timezone;
                    }
                    if (new_timeZone !== '') {
                        let mytm = moment__WEBPACK_IMPORTED_MODULE_13__(event.start_date).tz(new_timeZone);
                        let x = mytm.format('YYYY-MM-DD HH:mm:ss').toString();
                        let mytime = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                        let time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                        if (time_diff != 0) {
                            event.startdate = this.appService.getDateFormat(mytime);
                            event.starttime = this.appService.getTimeFormat(mytime);
                            event.thumbnailDatedd = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('DD');
                            event.thumbnailDateMM = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('MMM');
                            // event.starttime = moment(event.starttime , "h:mm:ss A").format("HH.mm");
                        }
                        else {
                            event.startdate = this.appService.getDateFormat(mytime);
                            event.starttime = this.appService.getTimeFormat(mytime);
                            event.thumbnailDatedd = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('DD');
                            event.thumbnailDateMM = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('MMM');
                            // event.starttime = moment(event.starttime , "h:mm:ss A").format("HH.mm");
                        }
                        if (event.cost && event.cost !== 'undefined') {
                            if (!event.cost.includes("$")) {
                                event.cost = "$" + event.cost;
                            }
                        }
                    }
                    else {
                        let mytm = moment__WEBPACK_IMPORTED_MODULE_13__(event.start_date);
                        let time = event.starttime_hrs + ':' + event.starttime_mins + ':' + event.starttime_ampm;
                        let x = mytm.format('YYYY-MM-DD').toString();
                        x = x + ' ' + time;
                        let mytime = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                        let time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                        if (time_diff != 0) {
                            event.startdate = this.appService.getDateFormat(mytime);
                            event.starttime = this.appService.getTimeFormat(mytime);
                            event.thumbnailDatedd = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('DD');
                            event.thumbnailDateMM = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('MMM');
                            //  event.starttime = moment(event.starttime , "h:mm:ss A").format("HH.mm");
                        }
                        else {
                            event.startdate = this.appService.getDateFormat(mytime);
                            event.starttime = this.appService.getTimeFormat(mytime);
                            event.thumbnailDatedd = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('DD');
                            event.thumbnailDateMM = moment__WEBPACK_IMPORTED_MODULE_13__(mytime).format('MMM');
                            //  event.starttime = moment(event.starttime , "h:mm:ss A").format("HH.mm");
                        }
                        if (event.cost && event.cost !== 'undefined') {
                            if (!event.cost.includes("$")) {
                                event.EVENTCOST = "$" + event.cost;
                            }
                        }
                    }
                });
            }
            console.log(this.events);
            this.loader.stopLoading();
            this.dataLoaded = true;
        }));
    }
    settingsPopover() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let self = this;
            const popover = yield self.poCtrl.create({
                component: _filter_popover_filter_popover_component__WEBPACK_IMPORTED_MODULE_9__["FilterPopoverComponent"],
                componentProps: {
                    cancel_filter: self.cancel_filter
                }
            });
            popover.onDidDismiss().then(res => {
                if (res.data) {
                    if (res.data.date && res.data.func) {
                        if (res.data.func === 'filter') {
                            this.filterDate = res.data.date;
                            this.check();
                        }
                    }
                    if (res.data.func === 'discard') {
                        this.discard_filter();
                    }
                }
            });
            return yield popover.present();
        });
    }
    // filtering events according to date
    check() {
        if (this.filterDate) {
            this.filterDate = this.datepipe.transform(this.filterDate, 'yyyy-MM-dd');
            if (this.dashboard_mode) {
                this.filtered_events = this.events.filter(x => this.datepipe.transform(x.start_date, 'yyyy-MM-dd') === this.filterDate);
                this.event_area_country = [];
                this.event_area_city = [];
                this.cancel_filter = true;
            }
            else if (this.church_mode) {
                this.church_filtered_events = this.church_events.filter(x => this.datepipe.transform(x.start_date, 'yyyy-MM-dd') === this.filterDate);
                this.cancel_filter = true;
            }
            else {
                this.filtered_events = this.events.filter(x => this.datepipe.transform(x.start_date, 'yyyy-MM-dd') === this.filterDate);
                this.cancel_filter = true;
            }
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.SelectDateFilter : 'Select Date to Filter'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        }
    }
    // removing filter
    discard_filter() {
        if (this.dashboard_mode) {
            this.filtered_events = this.events;
            this.event_area_country = [];
            this.event_area_city = [];
        }
        else if (this.church_mode) {
            this.church_filtered_events = this.church_events;
        }
        else {
            this.filtered_events = this.events;
        }
        this.filterDate = null;
        this.cancel_filter = false;
    }
    addMoreData() {
        let loop = this.count;
        for (let i = loop; i <= (loop + 5); i++) {
            if (this.events !== undefined) {
                if (this.scrollArray.length < this.events.length) {
                    this.scrollArray.push(this.events[i]);
                    this.count++;
                }
            }
        }
    }
    // fetching events from service
    getEvents() {
        if (this.event_dashboard_url.includes("calendar.google.com")) {
            this.event_type = "google";
            let body = {
                'church_id': this.ch_id,
                'id': this.page_id,
                'page_no': 1
            };
            let _body = JSON.stringify(body);
            this.eventsService.getGoogleEvents(_body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.total_page_in_pagination = res['pages'];
                this.events = res['events'];
                this.setEventsData(false);
                this.setEventsDateTimeZone();
                this.loader.stopLoading();
                this.dataLoaded = true;
            }));
        }
        else if (this.event_dashboard_url.includes(".ics") || this.event_dashboard_url.includes("=ics")) {
            this.event_type = "ics";
            let body = {
                'church_id': this.ch_id,
                'id': this.page_id,
                'page_no': 1
            };
            let _body = JSON.stringify(body);
            this.eventsService.getGoogleEvents(_body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.total_page_in_pagination = res['pages'];
                this.events = res['events'];
                this.setEventsData(false);
                this.setEventsDateTimeZone();
                this.loader.stopLoading();
                this.dataLoaded = true;
            }));
        }
        else if (this.event_dashboard_url) {
            this.event_type = "dashboard";
            this.dashboard_mode = true;
            if (this.external_server) {
                let body = {
                    'url': this.event_dashboard_url,
                    'method': 'getEvents'
                };
                let _body = JSON.stringify(body);
                this.eventsService.getDashboardEvent(_body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.events = res['result'];
                    this.filtered_events = this.events;
                    this.addMoreData();
                    this.setDashboardEventsData(false);
                    this.setEventsDateTimeZone();
                    this.loader.stopLoading();
                    this.dataLoaded = true;
                }), (err) => {
                    this.loader.stopLoading();
                    this.dataLoaded = true;
                });
            }
            else {
                this.eventsService.getEvents(this.event_dashboard_url).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.events = yield res.data.VEVENT;
                    this.filtered_events = this.events;
                    this.addMoreData();
                    this.setDashboardEventsData(true);
                    this.setEventsDateTimeZone();
                    this.loader.stopLoading();
                    this.dataLoaded = true;
                }), (err) => {
                    this.loader.stopLoading();
                    this.dataLoaded = true;
                });
            }
        }
        else {
            this.church_mode = true;
            // fetching events with church id
            this.eventsService.getEventsFromChurchId(this.ch_id).subscribe((res) => {
                if (res) {
                    this.events = res.events[0];
                    this.filtered_events = this.events;
                    this.setEventsDateTimeZone();
                }
                this.loader.stopLoading();
                this.dataLoaded = true;
            }, (err) => {
                this.loader.stopLoading();
                this.dataLoaded = true;
            });
        }
    }
    setEventsData(is_loadData) {
        for (let i = 0; i < this.events.length; i++) {
            // REMOVING "/" FROM EVENTS SUMMARY
            this.events[i].name = this.events[i].SUMMARY;
            this.events[i].description = this.events[i].DESCRIPTION;
            // Getting City and Country seperately in corresponding Array
            let obj = this.events[i];
            let keys = Object.keys(obj);
            for (let j = 0; j < keys.length; j++) {
                let key = keys[j];
                if (keys[j].includes("DTSTART")) {
                    if (this.events[i][key].value !== undefined)
                        this.events[i].start_date = this.events[i][key].value;
                    else
                        this.events[i].start_date = this.events[i][key];
                }
                if (keys[j].includes("DTEND")) {
                    if (this.events[i][key].value !== undefined)
                        this.events[i].end_date = this.events[i][key].value;
                    else
                        this.events[i].end_date = this.events[i][key];
                }
                if (keys[j].includes("ATTACH")) {
                    //this.bypass_url(this.events[i][key])
                    this.events[i].photo = this.events[i][key];
                    if (this.events[i].photo !== "" && this.events[i].photo !== null && this.events[i].photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.events[i].created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                        let abc = this.events[i].photo.split("/");
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
                        let new_link = this.events[i].photo.replace(folder_name, this.deviceType);
                        this.events[i]['background'] = new_link;
                        // console.log('background is: ',card.background,'new link is: ', new_link);
                    }
                }
            }
            if (this.events[i].EVENTCOST && this.events[i].EVENTCOST !== 'undefined') {
                if (!this.events[i].EVENTCOST.includes("$")) {
                    this.events[i].EVENTCOST = "$" + this.events[i].EVENTCOST;
                }
            }
            if (is_loadData) {
                this.filtered_events.push(this.events[i]);
                this.setEventsDateTimeZone();
            }
        }
        if (this.filtered_events === undefined) {
            this.filtered_events = this.events;
        }
    }
    setEventsDateTimeZone() {
        if (this.filtered_events) {
            this.filtered_events.forEach(event => {
                var new_timeZone = '';
                if (typeof (event['DTSTART']) === 'object') {
                    new_timeZone = event['DTSTART']['TZID'];
                    event.start_date = event['DTSTART']['value'];
                }
                else {
                    Object.keys(event).forEach(key => {
                        if (key.includes('TZID')) {
                            let tz = key.split('=');
                            new_timeZone = tz[1];
                        }
                    });
                }
                let church_data = JSON.parse(localStorage.getItem('church_data'));
                if (new_timeZone === null) {
                    new_timeZone = church_data.church.timezone;
                }
                else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                    new_timeZone = church_data.church.timezone;
                }
                if (new_timeZone !== '') {
                    let mytm = moment__WEBPACK_IMPORTED_MODULE_13__(event.start_date).tz(new_timeZone);
                    let x = mytm.format('YYYY-MM-DD HH:mm:ss').toString();
                    let mytime = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                    let time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                    if (time_diff != 0) {
                        event.startdate = this.appService.getDateFormat(mytime);
                        event.starttime = this.appService.getTimeFormat(mytime);
                        event.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(event.starttime, "h:mm:ss A").format("HH.mm");
                    }
                    else {
                        event.startdate = this.appService.getDateFormat(mytime);
                        event.starttime = this.appService.getTimeFormat(mytime);
                        event.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(event.starttime, "h:mm:ss A").format("HH.mm");
                    }
                    if (event.EVENTCOST && event.EVENTCOST !== 'undefined') {
                        if (!event.EVENTCOST.includes("$")) {
                            event.EVENTCOST = "$" + event.EVENTCOST;
                        }
                    }
                }
                else {
                    let mytm = moment__WEBPACK_IMPORTED_MODULE_13__(event.start_date);
                    let x = mytm.format('YYYY-MM-DD HH:mm:ss').toString();
                    let mytime = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                    let time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                    if (time_diff != 0) {
                        event.startdate = this.appService.getDateFormat(mytime);
                        event.starttime = this.appService.getTimeFormat(mytime);
                        event.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(event.starttime, "h:mm:ss A").format("HH.mm");
                    }
                    else {
                        event.startdate = this.appService.getDateFormat(mytime);
                        event.starttime = this.appService.getTimeFormat(mytime);
                        event.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(event.starttime, "h:mm:ss A").format("HH.mm");
                    }
                    if (event.EVENTCOST && event.EVENTCOST !== 'undefined') {
                        if (!event.EVENTCOST.includes("$")) {
                            event.EVENTCOST = "$" + event.EVENTCOST;
                        }
                    }
                }
            });
        }
    }
    setDashboardEventsData(is_ical) {
        if (this.events !== undefined) {
            for (let i = 0; i < this.events.length; i++) {
                // REMOVING "/" FROM EVENTS SUMMARY
                this.events[i].name = this.events[i].SUMMARY.replace(/\\/g, '');
                // Getting City and Country seperately in corresponding Array
                let obj = this.events[i];
                let keys = Object.keys(obj);
                for (let j = 0; j < keys.length; j++) {
                    let key = keys[j];
                    if (keys[j].includes("DTSTART")) {
                        this.events[i].start_date = this.events[i][key];
                        if (this.events[i].start_date.length === 8) {
                            this.events[i].start_date = [this.events[i].start_date.slice(0, 4), "/", this.events[i].start_date.slice(4)].join('');
                            this.events[i].start_date = [this.events[i].start_date.slice(0, 7), "/", this.events[i].start_date.slice(7)].join('');
                        }
                    }
                    if (keys[j].includes("DTEND")) {
                        this.events[i].end_date = this.events[i][key];
                    }
                    if (keys[j].includes("ATTACH")) {
                        if (is_ical) {
                            if (this.events[i][key] instanceof Object) {
                                if (this.events[i][key].hasOwnProperty("value")) {
                                    this.events[i].photo = this.events[i][key].value;
                                    // this.bypass_url(this.events[i][key].value)
                                }
                            }
                            else {
                                // this.bypass_url(this.events[i][key])
                                this.events[i].photo = this.events[i][key];
                            }
                        }
                        else {
                            // this.bypass_url(this.events[i][key].value)
                            this.events[i].photo = this.events[i][key].value;
                        }
                        if (this.events[i].photo !== "" && this.events[i].photo !== null && this.events[i].photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.events[i].created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                            let abc = this.events[i].photo.split("/");
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
                            let new_link = this.events[i].photo.replace(folder_name, this.deviceType);
                            this.events[i]['background'] = new_link;
                            // console.log('background is: ',card.background,'new link is: ', new_link);
                        }
                    }
                }
            }
        }
    }
    loadData(event) {
        this.page = this.page + 1;
        if (this.page <= this.total_page_in_pagination) {
            let body = {
                'church_id': this.ch_id,
                'id': this.page_id,
                'page_no': this.page
            };
            let _body = JSON.stringify(body);
            if (this.is_wordpress_enable === true) {
                this.getDBEvents(event);
            }
            else if (this.is_wordpress_enable === false) {
                this.eventsService.getGoogleEvents(_body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.events = res['events'];
                    let index = Object.keys(this.events)[0];
                    let ind = parseInt(index);
                    this.setEventsData(true);
                    this.setEventsDateTimeZone();
                    event.target.complete();
                    this.loader.stopLoading();
                }));
            }
            ``;
        }
        else {
            event.target.complete();
        }
    }
    openDetail(data) {
        let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
        let hashed_id = md5(data); // hashing ID before sending for security purpose
        this.router.navigate(['event-detail', {
                event_id: hashed_id,
                mode: "church"
            }]);
    }
    isDateValid(date) {
        if (moment__WEBPACK_IMPORTED_MODULE_13__(date).isValid()) {
            return true;
        }
        else {
            return false;
        }
    }
    open_Detail_dashboard(data, index) {
        if (this.church_mode === true) {
            this.openDetail(data);
        }
        else {
            let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
            let hashed_id = this.is_wordpress_enable ? this.events[index].id : md5(data); // hashing ID before sending for security purpose
            if (this.event_type != "dashboard") {
                this.router.navigate(['event-detail', {
                        event_id: data,
                        mode: "dashboard",
                        page_id: this.page_id
                    }]);
            }
            else {
                this.router.navigate(['event-detail', {
                        event_id: hashed_id,
                        mode: "dashboard",
                        page_id: this.page_id
                    }]);
            }
        }
    }
    bypass_url(image) {
        // sanitizing image url for security purpose
        return this.dom.bypassSecurityTrustResourceUrl(image);
    }
    gotobackPage() {
        let block_page = this.common.is_home_enable.next_page;
        if (block_page !== "Events") {
            this.location.back();
        }
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
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_13__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.custom_name,
            custom_name: this.page_name,
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
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        this.event_provider.hidefooter(true, 'other');
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_16__["EventProviderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"])
], EventsPage.prototype, "infiniteScroll", void 0);
EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html"),
        styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/events/events.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_12__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_16__["EventProviderService"]])
], EventsPage);



/***/ })

}]);
//# sourceMappingURL=events-events-module-es2015.js.map