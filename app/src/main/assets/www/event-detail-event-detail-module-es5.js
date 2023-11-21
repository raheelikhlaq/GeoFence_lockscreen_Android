(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-detail-event-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/event-detail/event-detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event-detail/event-detail.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'EVENTS.event_detail' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper\" *ngIf=\"!event_detail\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\">{{'EVENTS.no_event_available' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" *ngIf=\"event_detail\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <ion-card *ngIf=\"event_photo\"\n                          class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big\"\n                          [ngStyle]=\"{'background': 'url(' + event_photo + ')  no-repeat'}\">\n                </ion-card>\n                <ion-card *ngIf=\"!event_photo\"\n                          class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big\"\n                          style=\"background: url('../../assets/img/live_stream_bg_2.jpg') no-repeat;\">\n                    <div class=\"ionCard--backGroundBg__body\">\n                    </div>\n                </ion-card>\n            </div>\n            <!--Start event info for desktop-->\n\n            <div class=\"ion-padding-horizontal\">\n                <div class=\"ion-margin-bottom\">\n                    <h5 class=\"heading5\">{{event_summary}}</h5>\n                </div>\n\n                <div class=\"ion-margin-bottom\" *ngIf=\"event_detail.all_day === 'false' \" >\n                    <p *ngIf=\"start_date && end_date\" class=\"font-weight-normal event-detail-content\">\n                        {{'EVENTS.from' | translate}} {{event_detail.startdate  }}&nbsp;{{event_detail.starttime }}\n                        {{'EVENTS.until' | translate}} {{event_detail.enddate  }}\n                        &nbsp;{{event_detail.endtime}} </p>\n                    <p *ngIf=\"event_detail.form_id !== '0'\"> Do you want to register for this Event? If so, click <a style=\"cursor: pointer;\" (click)=\"registerationForm()\">here</a>.</p>    \n                </div>\n                <div class=\"ion-margin-bottom\" *ngIf=\"event_detail.all_day === 'true' \" >\n                    <p *ngIf=\"start_date && end_date\" class=\"font-weight-normal event-detail-content\">\n                        {{'EVENTS.from' | translate}} {{event_detail.startdate }}&nbsp;\n                        {{'EVENTS.until' | translate}} {{event_detail.enddate }}\n                        &nbsp; \n                    </p>\n                    <p *ngIf=\"event_detail.form_id !== '0'\"> Do you want to register for this Event? If so, click <a style=\"cursor: pointer;\" (click)=\"registerationForm()\">here</a>.</p>\n                </div>\n\n                <div *ngIf=\"event_website_link\" class=\"ion-margin-bottom\">\n                    <p><b>{{'EVENTS.event' | translate}} URL:</b>\n                    <a (click)=\"openurlinapp(event_website_link)\" style=\"cursor: pointer;\">\n                        <span *ngIf=\"event_website_link\" class=\"font-weight-normal event-detail-content\">\n                            {{(event_website_link).toString().replace('|', ':')}}</span>\n                    </a>\n                </p>\n                </div>\n\n                <div *ngIf=\"event_detail.EVENTURL\" class=\"ion-margin-bottom\">\n                    <p><b>{{'EVENTS.event' | translate}} URL:</b></p>\n                    <a (click)=\"openurlinapp(event_detail.EVENTURL)\"><p\n                            *ngIf=\"event_detail.EVENTURL\"\n                            class=\"font-weight-normal event-detail-content\"> {{(event_detail.EVENTURL).toString().replace('|', ':')}}</p>\n                    </a>\n                </div>\n                <div *ngIf=\"event_detail.VENUENAME\" class=\"ion-margin-bottom\">\n                    <p><b>Venue Name:</b></p>\n                    <p [innerHTML]=\"event_detail.VENUENAME\"></p>\n                </div>\n                <div *ngIf=\"event_detail.VENUEURL\" class=\"ion-margin-bottom\">\n                    <p><b>Venue Url:</b></p>\n                    <a (click)=\"openurlinapp(event_detail.VENUEURL)\"><p\n                            *ngIf=\"event_detail.VENUEURL\"\n                            class=\"font-weight-normal event-detail-content\"> {{(event_detail.VENUEURL).toString().replace('|', ':')}}</p>\n                    </a>\n                </div>\n                <div *ngIf=\"event_detail.CATEGORIES\" class=\"ion-margin-bottom\">\n                    <p><b>Categories:</b></p>\n                    <p>{{event_detail.CATEGORIES}}</p>\n                </div>\n                 <div *ngIf=\"event_detail.categories&& event_detail.categories[0] != null\" class=\"ion-margin-bottom\">\n                    <p> \n                        <b>Categories: </b>\n                        <span *ngFor=\"let cat of event_detail.categories let i = index\" style=\"font-weight: 400;\">{{cat}}<span *ngIf=\"event_detail.categories.length > 1 && (event_detail.categories.length - 1 != i)\">, </span> </span>\n                    </p>\n                </div>\n\n                <div class=\"ion-margin-bottom\">\n                    <p *ngIf=\"event_description\" class=\"font-weight-normal event-detail-content\"\n                       [innerHTML]=\"event_description\"></p>\n                </div>\n\n                <!-- <div class=\"ion-margin-bottom\" *ngIf=\"event_website_link\">\n                    <ion-button (click)=\"openurlinapp(event_website_link)\" class=\"commonBtn commonBtn--dark\">\n                        Register\n                    </ion-button>\n                </div> -->\n            </div>\n            <!--End event info for desktop-->\n\n\n            <!--tempory hide for mobile-->\n\n            <ion-grid class=\"ion-no-padding\">\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\"  *ngIf=\"show_map\">\n                        <div class=\"ion-margin-bottom\">\n                            <ion-card *ngIf=\"!chLat && !chLong && ch_id !== '708'\"\n                                    class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--medium ionCard--eventDirect\"\n                                    style=\"background: url('../../assets/img/map_bg.png') no-repeat;\">\n                            </ion-card>\n                            <ion-card class=\"ionCard ionCard--noPadding ionCard--eventDirect\" *ngIf=\"chLat && chLong\">\n                                <agm-map class=\"map-div\"\n                                         [latitude]=+chLat\n                                         [longitude]=+chLong>\n                                    <agm-marker\n                                                latitude=\"{{chLat}}\"\n                                                longitude=\"{{chLong}}\">\n                                    </agm-marker>\n                                </agm-map>\n                            </ion-card>\n                        </div>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card class=\"ionCard ion-margin-bottom\">\n                            <ion-card-content class=\"ion-no-padding\">\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_location' | translate}}</h2>\n                                            <p *ngIf=\"event_detail.venue !== '' \"\n                                               class=\"ionMedia__text\">{{event_detail.venue}}</p>\n                                            <p *ngIf=\"!event_detail.venue === '' \" class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_date' | translate}}</h2>\n                                            <p *ngIf=\"event_detail.startdate\"\n                                               class=\"ionMedia__text\">{{event_detail.startdate}}</p>\n                                            <p *ngIf=\"!event_detail.startdate\" class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                            <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_time' | translate}}</h2>\n                                            <p *ngIf=\"event_detail.starttime\"\n                                               class=\"ionMedia__text\">{{event_detail.starttime}}</p>\n                                            <p *ngIf=\"!event_detail.starttime\" class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <!--event info for mobile-->\n                                <div class=\"ion-margin-bottom\" style=\"display: none\">\n                                    <hr class=\"ionCard__divider\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                            <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">Event Info</h2>\n                                            <p class=\"ionMedia__text\">Child dedications are a time for parents, to\n                                                commit\n                                                themselves to raising their child God’s way. It’s\n                                                a powerful time for parents to embrace the responsibility they’ve been\n                                                given by God and to\n                                                see the\n                                                impact they can make in their child’s life. We make these events special\n                                                by encouraging the\n                                                whole</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <!--end event info for mobile-->\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <!--register button for mobile-->\n                    <ion-col [size]=\"12\" class=\"show-mobile\">\n                        <div *ngIf=\"event_mode === 'church'\" class=\"ion-margin-bottom\">\n                            <ion-button routerLink=\"/leaders-conference\" routerDirection=\"root\"\n                                        class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                                {{'EVENTS.register' | translate}}\n                            </ion-button>\n                        </div>\n                    </ion-col>\n                    <!--end register button for mobile-->\n                </ion-row>\n            </ion-grid>\n\n        </div>\n    </div>\n\n    <!--    CHURCH EVENT-->\n    <div class=\"page-wrapper\" *ngIf=\"church_event_detail\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <ion-card *ngIf=\"event_photo\"\n                          class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big\"\n                          [ngStyle]=\"{'background': 'url(' + event_photo + ')  no-repeat'}\">\n                </ion-card>\n                <ion-card *ngIf=\"!event_photo\"\n                          class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big\"\n                          style=\"background: url('../../assets/img/live_stream_bg_2.jpg') no-repeat;\">\n                    <div class=\"ionCard--backGroundBg__body\">\n                    </div>\n                </ion-card>\n            </div>\n            <!--Start event info for desktop-->\n\n            <div class=\"ion-padding-horizontal\">\n                <div class=\"ion-margin-bottom\">\n                    <h5 class=\"heading5\">{{church_event_detail.name}}</h5>\n                </div>\n                <div class=\"ion-margin-bottom\">\n                    <p *ngIf=\"church_event_detail.start_date && church_event_detail.end_date\"\n                       class=\"font-weight-normal event-detail-content\">\n                        {{'EVENTS.from' | translate}} {{church_event_detail.startdate}}&nbsp;{{church_event_detail.starttime}}\n                        {{'EVENTS.until' | translate}} {{church_event_detail.enddate}}\n                        &nbsp;{{church_event_detail.endtime}}  </p>\n                </div>\n            </div>\n\n            <div class=\"ion-margin-bottom hide-mobile\">\n                <ion-button (click)=\"gotoRegistrationPage()\"\n                        class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                    <span style=\"font-weight: 500\">{{'EVENTS.registration' | translate}}</span>\n                </ion-button>\n            </div>\n\n            <!--register button for mobile-->\n            <ion-col [size]=\"12\" class=\"show-mobile\">\n                <div *ngIf=\"event_mode === 'church'\" class=\"ion-margin-bottom\">\n                    <ion-button (click)=\"gotoRegistrationPage()\" target=\"_blank\"\n                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                        {{'EVENTS.register' | translate}}\n                    </ion-button>\n                </div>\n            </ion-col>\n            <!--end register button for mobile-->\n\n            <!--End event info for desktop-->\n\n\n            <!--tempory hide for mobile-->\n\n            <ion-grid class=\"ion-no-padding hide-mobile\">\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <div class=\"ion-margin-bottom\">\n                            <ion-card\n                                    class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--medium ionCard--eventDirect\"\n                                    style=\"background: url('../../assets/img/map_bg.png') no-repeat;\">\n                                <div class=\"ionCard--backGroundBg__footer\">\n                                    <div class=\"ion-text-right\">\n                                        <ion-button\n                                                class=\"commonBtn commonBtn--btnLarge commonBtn--white commonBtn--round\">\n                                            <ion-icon slot=\"start\" name=\"compass\"></ion-icon>\n                                            {{'EVENTS.direction' | translate}}\n                                        </ion-button>\n                                    </div>\n                                </div>\n                            </ion-card>\n                        </div>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeMd]=\"6\">\n                        <ion-card class=\"ionCard ion-margin-bottom\">\n                            <ion-card-content class=\"ion-no-padding\">\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_location' | translate}}</h2>\n                                            <p class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                             style=\"margin-top:0;\">\n                                            <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_date' | translate}}</h2>\n                                            <p *ngIf=\"church_event_detail.start_date\"\n                                               class=\"ionMedia__text\">{{church_event_detail.startdate }}</p>\n                                            <p *ngIf=\"!church_event_detail.start_date\" class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                    <hr class=\"ionCard__divider\">\n                                </div>\n                                <div class=\"ion-margin-bottom\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                            <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">{{'EVENTS.event_time' | translate}}</h2>\n                                            <p *ngIf=\"church_event_detail.start_time\"\n                                               class=\"ionMedia__text\">{{church_event_detail.start_time }}</p>\n                                            <p *ngIf=\"!church_event_detail.start_time\" class=\"ionMedia__text\">{{'EVENTS.not_available' | translate}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <!--event info for mobile-->\n                                <div class=\"ion-margin-bottom show-mobile\">\n                                    <hr class=\"ionCard__divider\">\n                                    <ion-item class=\"ionMedia\" lines=\"none\">\n                                        <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                            <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\">Event Info</h2>\n                                            <p class=\"ionMedia__text\">Child dedications are a time for parents, to\n                                                commit\n                                                themselves to raising their child God’s way. It’s\n                                                a powerful time for parents to embrace the responsibility they’ve been\n                                                given by God and to\n                                                see the\n                                                impact they can make in their child’s life. We make these events special\n                                                by encouraging the\n                                                whole</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <!--end event info for mobile-->\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <!--register button for mobile-->\n                    <ion-col [size]=\"12\" class=\"show-mobile\">\n                        <div class=\"ion-margin-bottom\">\n                            <ion-button routerLink=\"/leaders-conference\" routerDirection=\"root\"\n                                        class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                                {{'EVENTS.register' | translate}}\n                            </ion-button>\n                        </div>\n                    </ion-col>\n                    <!--end register button for mobile-->\n                </ion-row>\n            </ion-grid>\n\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/event-detail/event-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: EventDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-detail.page */ "./src/app/event-detail/event-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");










var routes = [
    {
        path: '',
        component: _event_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailPage"]
    }
];
var EventDetailPageModule = /** @class */ (function () {
    function EventDetailPageModule() {
    }
    EventDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDSu35Uz1W7h5oYIvB4M3LV0pIkOUoh_bo'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_detail_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailPage"]]
        })
    ], EventDetailPageModule);
    return EventDetailPageModule;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/event-detail/event-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-detail-content {\n  font-size: 14px;\n}\n\n.map-div {\n  width: 100%;\n  height: 308px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1kZXRhaWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxufVxuLm1hcC1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDhweDtcbn0iLCIuZXZlbnQtZGV0YWlsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXAtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/event-detail/event-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/event-detail/event-detail.page.ts ***!
  \***************************************************/
/*! exports provided: EventDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPage", function() { return EventDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");

















var EventDetailPage = /** @class */ (function () {
    function EventDetailPage(storage, route, loader, eventsService, toast, iab, location, router, appService, common, dom, translate, platform, event_provider) {
        var _this = this;
        this.storage = storage;
        this.route = route;
        this.loader = loader;
        this.eventsService = eventsService;
        this.toast = toast;
        this.iab = iab;
        this.location = location;
        this.router = router;
        this.appService = appService;
        this.common = common;
        this.dom = dom;
        this.translate = translate;
        this.platform = platform;
        this.event_provider = event_provider;
        this.is_event_url = '';
        this.external_server = false;
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes'
        };
        this.show_map = true;
        this.deviceType = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    EventDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        // assigning data from URL Params
        this.event_id = this.route.snapshot.paramMap.get('event_id');
        this.event_mode = this.route.snapshot.paramMap.get('mode');
        this.page_id = this.route.snapshot.paramMap.get('page_id');
        this.is_event_url = this.route.snapshot.paramMap.get('is_event_url');
        this.loader.presentLoading().then(function () { });
        // saving app_pages
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages, event_type;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res && !(Object.keys(res).length === 0)) {
                    this.ch_id = res.church.ch_id;
                    this.common.store_app_pages(res.apppages, 'Events');
                    app_pages = res.apppages.filter(function (x) { return x.id === _this.page_id; });
                    if (app_pages[0]) {
                        this._id = app_pages[0].id;
                        this.event_url = app_pages[0].url;
                        event_type = app_pages[0].custom_category_url;
                        if (event_type === 'true') {
                            this.external_server = true;
                        }
                        if (res.is_wordpress_enable === '1') {
                            this.is_wordpress_enable = true;
                            this.getDBEvent();
                        }
                        else {
                            this.is_wordpress_enable = false;
                            this.getEvent();
                        }
                    }
                    else if (this.is_event_url == 'true') {
                        this.getEvent();
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    EventDetailPage.prototype.getDBEvent = function () {
        var _this = this;
        var body = {
            'church_id': this.ch_id,
            'event_id': this.event_id
        };
        this.eventsService.getCMSEvent(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var events, text, sum, obj, keys, j, key, abc, folder_name, new_link, new_timeZone, _start, _end, x, y, start, end, church_data, time_diff;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                events = res['result'];
                this.event_detail = res['event'];
                this.show_map = this.event_detail.show_map === 'true';
                text = this.event_detail.description;
                this.event_description = text.replace(/\\n/g, '');
                this.event_description = this.event_description.replace(/\\/g, '');
                sum = this.event_detail.title;
                this.event_summary = sum.replace(/\\/g, '');
                this.event_photo = this.event_detail.featuredimageurl;
                if (this.event_detail.location_address) {
                    this.event_location = this.event_detail.location_address;
                }
                this.chLat = this.event_detail.latitude ? this.event_detail.latitude : '';
                this.chLong = this.event_detail.longitude ? this.event_detail.longitude : '';
                this.event_website_link = this.event_detail.website ? this.event_detail.website : '';
                obj = this.event_detail;
                keys = Object.keys(obj);
                for (j = 0; j < keys.length; j++) {
                    key = keys[j];
                    if (keys[j].includes("start_date")) {
                        this.event_detail.start_date = this.event_detail[key];
                        if (this.event_detail.start_date.length === 8) {
                            this.event_detail.start_date = [this.event_detail.start_date.slice(0, 4), "/", this.event_detail.start_date.slice(4)].join('');
                            this.event_detail.start_date = [this.event_detail.start_date.slice(0, 7), "/", this.event_detail.start_date.slice(7)].join('');
                        }
                        this.start_date = this.event_detail.start_date;
                    }
                    if (keys[j].includes("end_date")) {
                        this.event_detail.end_date = this.event_detail[key];
                        if (this.event_detail.end_date.length === 8) {
                            this.event_detail.end_date = [this.event_detail.end_date.slice(0, 4), "/", this.event_detail.end_date.slice(4)].join('');
                            this.event_detail.end_date = [this.event_detail.end_date.slice(0, 7), "/", this.event_detail.end_date.slice(7)].join('');
                        }
                        this.end_date = this.event_detail.end_date;
                    }
                    if (keys[j].includes("featuredimageurl")) {
                        this.event_detail.photo = this.event_detail[key];
                        this.event_photo = this.event_detail[key];
                        if (this.church_event_detail) {
                            this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                        }
                        if (this.event_photo !== "" && this.event_photo !== null && this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                            abc = this.event_photo.split("/");
                            folder_name = abc[abc.length - 2];
                            if (this.platform.is("mobile")) {
                                this.deviceType = 'radiobase_mobile';
                            }
                            else if (this.platform.is("tablet")) {
                                this.deviceType = 'radiobase_tablet';
                            }
                            else {
                                this.deviceType = folder_name;
                            }
                            new_link = this.event_photo.replace(folder_name, this.deviceType);
                            this.event_photo = new_link;
                            // console.log('background is: ',card.background,'new link is: ', new_link);
                        }
                    }
                }
                new_timeZone = '';
                if (typeof this.event_detail['DTSTART'] === 'object') {
                    new_timeZone = this.event_detail['DTSTART']['TZID'];
                    this.event_detail.start_date = this.event_detail['DTSTART']['value'];
                    this.event_detail.end_date = this.event_detail['DTEND']['value'];
                }
                else {
                    Object.keys(this.event_detail).forEach(function (key) {
                        if (key.includes('TZID')) {
                            var tz = key.split('=');
                            new_timeZone = tz[1];
                        }
                    });
                }
                _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                console.log(this.event_detail);
                church_data = JSON.parse(localStorage.getItem('church_data'));
                if (new_timeZone === null) {
                    new_timeZone = church_data.church.timezone;
                }
                else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                    new_timeZone = church_data.church.timezone;
                }
                if (new_timeZone != '') {
                    start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                    end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                }
                time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                if (time_diff != 0) {
                    this.event_detail.startdate = this.appService.getDateFormat(start);
                    this.event_detail.starttime = this.appService.getTimeFormat(start);
                    //this.event_detail.starttime = moment(this.event_detail.starttime , "h:mm:ss A").format("HH.mm")
                    this.event_detail.enddate = this.appService.getDateFormat(end);
                    this.event_detail.endtime = this.appService.getTimeFormat(end);
                    //  this.event_detail.endtime = moment(this.event_detail.endtime , "h:mm:ss A").format("HH.mm")
                }
                else {
                    this.event_detail.startdate = this.appService.getDateFormat(start);
                    this.event_detail.starttime = this.appService.getTimeFormat(start);
                    //  this.event_detail.starttime = moment(this.event_detail.starttime , "h:mm:ss A").format("HH.mm")
                    this.event_detail.enddate = this.appService.getDateFormat(end);
                    this.event_detail.endtime = this.appService.getTimeFormat(end);
                    //   this.event_detail.endtime = moment(this.event_detail.endtime , "h:mm:ss A").format("HH.mm")
                }
                this.loader.stopLoading();
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.message;
            _this.loader.stopLoading();
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    EventDetailPage.prototype.getEvent = function () {
        var _this = this;
        if (this.is_event_url == 'true') {
            var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
            this.event_url = this.route.snapshot.paramMap.get('event_url');
            this.eventsService.getEvents(this.event_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var events, ev_des, text, code, link, new_bypassLink, venue_name, code1, link, new_bypassLink, sum, arr, fst, geo, latlong, obj, keys, j, key, abc, folder_name, new_link, new_timeZone, _start, _end, x, y, start, end, church_data, time_diff;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!res.data) return [3 /*break*/, 2];
                            return [4 /*yield*/, res.data.VEVENT];
                        case 1:
                            events = _a.sent();
                            this.event_detail = events[0];
                            ev_des = void 0;
                            text = this.event_detail.DESCRIPTION.toString();
                            ev_des = text.replace(/\\n/g, '');
                            ev_des = ev_des.replace(/\\/g, '');
                            code = ev_des;
                            if (code.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : code.match(/href="(.*?)"/);
                                    code = code.replace(link[0], '');
                                    code.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code = code.replace('</a>', '</span>');
                                    code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_description = this.dom.bypassSecurityTrustHtml(code);
                            venue_name = void 0;
                            venue_name = this.event_detail.VENUENAME;
                            code1 = venue_name;
                            if (code1 && code1.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code1.match(/data-cke-saved-href="(.*?)"/) ? code1.match(/data-cke-saved-href="(.*?)"/) : code1.match(/href="(.*?)"/);
                                    code1 = code1.replace(link[0], '');
                                    code1.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code1 = code1.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code1 = code1.replace('</a>', '</span>');
                                    code1 = code1.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code1.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_venue = this.dom.bypassSecurityTrustHtml(code1);
                            sum = this.event_detail.SUMMARY.toString();
                            this.event_summary = sum.replace(/\\/g, '');
                            if (this.event_detail.LOCATION) {
                                this.event_location = this.event_detail.LOCATION.replace(/\\/g, '');
                                arr = this.event_location.split(",");
                                fst = arr.splice(0, 1).join("");
                                this.event_location = arr.join(",");
                            }
                            if (this.event_detail.GEO && this.event_detail.GEO !== "") {
                                geo = this.event_detail.GEO;
                                latlong = geo.split(";");
                                this.chLat = latlong[0];
                                this.chLong = latlong[1];
                            }
                            else {
                                if (this.event_location !== undefined && this.event_location !== "") {
                                    this.getlocation(this.event_location);
                                }
                            }
                            obj = this.event_detail;
                            keys = Object.keys(obj);
                            for (j = 0; j < keys.length; j++) {
                                key = keys[j];
                                if (keys[j].includes("DTSTART")) {
                                    this.event_detail.start_date = this.event_detail[key];
                                    if (this.event_detail.start_date.length === 8) {
                                        this.event_detail.start_date = [this.event_detail.start_date.slice(0, 4), "/", this.event_detail.start_date.slice(4)].join('');
                                        this.event_detail.start_date = [this.event_detail.start_date.slice(0, 7), "/", this.event_detail.start_date.slice(7)].join('');
                                    }
                                    this.start_date = this.event_detail.start_date;
                                }
                                if (keys[j].includes("DTEND")) {
                                    this.event_detail.end_date = this.event_detail[key];
                                    if (this.event_detail.end_date.length === 8) {
                                        this.event_detail.end_date = [this.event_detail.end_date.slice(0, 4), "/", this.event_detail.end_date.slice(4)].join('');
                                        this.event_detail.end_date = [this.event_detail.end_date.slice(0, 7), "/", this.event_detail.end_date.slice(7)].join('');
                                    }
                                    this.end_date = this.event_detail.end_date;
                                }
                                if (keys[j].includes("ATTACH")) {
                                    this.event_detail.photo = this.event_detail[key];
                                    this.event_photo = this.event_detail[key];
                                    if (this.church_event_detail) {
                                        this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                                    }
                                    if (this.event_photo !== "" && this.event_photo !== null && this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                        abc = this.event_photo.split("/");
                                        folder_name = abc[abc.length - 2];
                                        if (this.platform.is("mobile")) {
                                            this.deviceType = 'radiobase_mobile';
                                        }
                                        else if (this.platform.is("tablet")) {
                                            this.deviceType = 'radiobase_tablet';
                                        }
                                        else {
                                            this.deviceType = folder_name;
                                        }
                                        new_link = this.event_photo.replace(folder_name, this.deviceType);
                                        this.event_photo = new_link;
                                        // console.log('background is: ',card.background,'new link is: ', new_link);
                                    }
                                }
                            }
                            new_timeZone = '';
                            if (typeof this.event_detail['DTSTART'] === 'object') {
                                new_timeZone = this.event_detail['DTSTART']['TZID'];
                                this.event_detail.start_date = this.event_detail['DTSTART']['value'];
                                this.event_detail.end_date = this.event_detail['DTEND']['value'];
                            }
                            else {
                                Object.keys(this.event_detail).forEach(function (key) {
                                    if (key.includes('TZID')) {
                                        var tz = key.split('=');
                                        new_timeZone = tz[1];
                                    }
                                });
                            }
                            _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                            _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                            x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                            y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                            church_data = JSON.parse(localStorage.getItem('church_data'));
                            if (new_timeZone === null) {
                                new_timeZone = church_data.church.timezone;
                            }
                            else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                                new_timeZone = church_data.church.timezone;
                            }
                            if (new_timeZone != '') {
                                start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                                end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                            }
                            time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                            if (time_diff != 0) {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            else {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            _a.label = 2;
                        case 2:
                            this.loader.stopLoading();
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                var message = err.message;
                _this.loader.stopLoading();
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        }
        else {
            if (this.event_mode === 'dashboard') {
                if (this.event_url.includes("calendar.google.com")) {
                    var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                    var body = {
                        'church_id': this.ch_id,
                        'id': this._id,
                        'objid': this.event_id
                    };
                    this.eventsService.oneEvent(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var ev_des, code, link, new_bypassLink, venue_name, code1, link, new_bypassLink, obj, keys, j, key, abc, folder_name, new_link, new_timeZone, _start, _end, x, y, start, end, church_data, time_diff;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.event_detail = res['events'];
                            ev_des = this.event_detail.DESCRIPTION;
                            if (ev_des.includes("&lt;")) {
                                ev_des = ev_des.replaceAll("&lt;", "<");
                                ev_des = ev_des.replaceAll("nbsp\\", "&nbsp");
                                ev_des = ev_des.replaceAll("\\n", "<br>");
                                ev_des = ev_des.replaceAll("\\", "");
                                ev_des = ev_des.replaceAll("&gt;", ">");
                            }
                            code = ev_des;
                            if (code.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : code.match(/href="(.*?)"/);
                                    code = code.replace(link[0], '');
                                    code.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code = code.replace('</a>', '</span>');
                                    code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_description = this.dom.bypassSecurityTrustHtml(code);
                            venue_name = this.event_detail.VENUENAME;
                            code1 = venue_name;
                            if (code1 && code1.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code1.match(/data-cke-saved-href="(.*?)"/) ? code1.match(/data-cke-saved-href="(.*?)"/) : code1.match(/href="(.*?)"/);
                                    code1 = code1.replace(link[0], '');
                                    code1.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code1 = code1.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code1 = code1.replace('</a>', '</span>');
                                    code1 = code1.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code1.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_venue = this.dom.bypassSecurityTrustHtml(code1);
                            // Removing extra Special Characters from Summary
                            this.event_summary = this.event_detail.SUMMARY;
                            this.event_location = this.event_detail.LOCATION;
                            if (this.event_location !== undefined && this.event_location !== "") {
                                this.getlocation(this.event_location);
                            }
                            obj = this.event_detail;
                            keys = Object.keys(obj);
                            for (j = 0; j < keys.length; j++) {
                                key = keys[j];
                                if (keys[j].includes("DTSTART")) {
                                    this.event_detail.start_date = this.event_detail[key];
                                    this.start_date = this.event_detail.start_date;
                                }
                                if (keys[j].includes("DTEND")) {
                                    this.event_detail.end_date = this.event_detail[key];
                                    this.end_date = this.event_detail.end_date;
                                }
                                if (keys[j].includes("ATTACH")) {
                                    this.event_detail.photo = this.event_detail[key];
                                    this.event_photo = this.event_detail[key];
                                    this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                                    if (this.event_photo !== "" && this.event_photo !== null && this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                        abc = this.event_photo.split("/");
                                        folder_name = abc[abc.length - 2];
                                        if (this.platform.is("mobile")) {
                                            this.deviceType = 'radiobase_mobile';
                                        }
                                        else if (this.platform.is("tablet")) {
                                            this.deviceType = 'radiobase_tablet';
                                        }
                                        else {
                                            this.deviceType = folder_name;
                                        }
                                        new_link = this.event_photo.replace(folder_name, this.deviceType);
                                        this.event_photo = new_link;
                                        // console.log('background is: ',card.background,'new link is: ', new_link);
                                    }
                                }
                            }
                            new_timeZone = '';
                            if (typeof this.event_detail['DTSTART'] === 'object') {
                                new_timeZone = this.event_detail['DTSTART']['TZID'];
                                this.event_detail.start_date = this.event_detail['DTSTART']['value'];
                                this.event_detail.end_date = this.event_detail['DTEND']['value'];
                            }
                            else {
                                Object.keys(this.event_detail).forEach(function (key) {
                                    if (key.includes('TZID')) {
                                        var tz = key.split('=');
                                        new_timeZone = tz[1];
                                    }
                                });
                            }
                            _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                            _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                            x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                            y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                            church_data = JSON.parse(localStorage.getItem('church_data'));
                            if (new_timeZone === null) {
                                new_timeZone = church_data.church.timezone;
                            }
                            else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                                new_timeZone = church_data.church.timezone;
                            }
                            if (new_timeZone != '') {
                                start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                                end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                            }
                            time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                            if (time_diff != 0) {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            else {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            this.loader.stopLoading();
                            return [2 /*return*/];
                        });
                    }); }, function (err) {
                        var message = err.message;
                        _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        _this.loader.stopLoading();
                    });
                }
                else if (this.event_url.includes(".ics") || this.event_url.includes("=ics")) {
                    var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                    var body = {
                        'church_id': this.ch_id,
                        'id': this._id,
                        'objid': this.event_id
                    };
                    this.eventsService.oneEvent(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var ev_des, code, link, new_bypassLink, venue_name, code1, link, new_bypassLink, obj, keys, j, key, abc, folder_name, new_link, _start, _end, x, y, start, end, new_timeZone, church_data, time_diff;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            this.event_detail = res['events'];
                            ev_des = this.event_detail.DESCRIPTION;
                            code = ev_des;
                            if (code.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : code.match(/href="(.*?)"/);
                                    code = code.replace(link[0], '');
                                    code.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code = code.replace('</a>', '</span>');
                                    code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_description = this.dom.bypassSecurityTrustHtml(code);
                            venue_name = this.event_detail.VENUENAME;
                            code1 = venue_name;
                            if (code1 && code1.search('<a') != -1 && this.platform.is('ios')) {
                                do {
                                    link = code1.match(/data-cke-saved-href="(.*?)"/) ? code1.match(/data-cke-saved-href="(.*?)"/) : code1.match(/href="(.*?)"/);
                                    code1 = code1.replace(link[0], '');
                                    code1.replace('href=' + link[1], '');
                                    new_bypassLink = link[1];
                                    // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                    console.log(new_bypassLink);
                                    code1 = code1.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                    code1 = code1.replace('</a>', '</span>');
                                    code1 = code1.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                } while (code1.search('<a') != -1);
                            }
                            // sanitizing html code for security purpose
                            this.event_venue = this.dom.bypassSecurityTrustHtml(code1);
                            // Removing extra Special Characters from Summary
                            this.event_summary = this.event_detail.SUMMARY;
                            this.event_location = this.event_detail.LOCATION;
                            if (this.event_location !== undefined && this.event_location !== "") {
                                this.getlocation(this.event_location);
                            }
                            obj = this.event_detail;
                            keys = Object.keys(obj);
                            for (j = 0; j < keys.length; j++) {
                                key = keys[j];
                                if (keys[j].includes("DTSTART")) {
                                    if (this.event_detail[key].value !== undefined) {
                                        this.event_detail.start_date = this.event_detail[key].value;
                                        this.start_date = this.event_detail.start_date;
                                    }
                                    else {
                                        this.event_detail.start_date = this.event_detail[key];
                                        this.start_date = this.event_detail.start_date;
                                    }
                                }
                                if (keys[j].includes("DTEND")) {
                                    if (this.event_detail[key].value !== undefined) {
                                        this.event_detail.end_date = this.event_detail[key].value;
                                        this.end_date = this.event_detail.end_date;
                                    }
                                    else {
                                        this.event_detail.end_date = this.event_detail[key];
                                        this.end_date = this.event_detail.end_date;
                                    }
                                }
                                if (keys[j].includes("ATTACH")) {
                                    this.event_detail.photo = this.event_detail[key];
                                    this.event_photo = this.event_detail[key];
                                    this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                                    if (this.event_photo !== "" && this.event_photo !== null && this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                        abc = this.event_photo.split("/");
                                        folder_name = abc[abc.length - 2];
                                        if (this.platform.is("mobile")) {
                                            this.deviceType = 'radiobase_mobile';
                                        }
                                        else if (this.platform.is("tablet")) {
                                            this.deviceType = 'radiobase_tablet';
                                        }
                                        else {
                                            this.deviceType = folder_name;
                                        }
                                        new_link = this.event_photo.replace(folder_name, this.deviceType);
                                        this.event_photo = new_link;
                                        // console.log('background is: ',card.background,'new link is: ', new_link);
                                    }
                                }
                            }
                            _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                            _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                            x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                            y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                            new_timeZone = '';
                            Object.keys(this.event_detail).forEach(function (key) {
                                if (key.includes(';TZID=')) {
                                    var tz = key.split('=');
                                    new_timeZone = tz[1];
                                }
                            });
                            church_data = JSON.parse(localStorage.getItem('church_data'));
                            if (new_timeZone === null) {
                                new_timeZone = church_data.church.timezone;
                            }
                            else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                                new_timeZone = church_data.church.timezone;
                            }
                            if (new_timeZone != '') {
                                start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                                end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                            }
                            time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                            if (time_diff != 0) {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            else {
                                this.event_detail.startdate = this.appService.getDateFormat(start);
                                this.event_detail.starttime = this.appService.getTimeFormat(start);
                                this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                this.event_detail.enddate = this.appService.getDateFormat(end);
                                this.event_detail.endtime = this.appService.getTimeFormat(end);
                                this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                            }
                            this.loader.stopLoading();
                            return [2 /*return*/];
                        });
                    }); }, function (err) {
                        var message = err.message;
                        _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        _this.loader.stopLoading();
                    });
                }
                else {
                    var md5_1 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                    if (this.external_server) {
                        var body = {
                            'url': this.event_url,
                            'method': 'getEvents'
                        };
                        var _body = JSON.stringify(body);
                        this.eventsService.getDashboardEvent(_body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var events, filtered, _a, ev_des, text, code, link, new_bypassLink, venue_name, code1, link, new_bypassLink, sum, arr, fst, geo, latlong, obj, keys, j, key, abc, folder_name, new_link, new_timeZone, _start, _end, x, y, start, end, church_data, time_diff;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        events = res['result'];
                                        filtered = events.filter(function (x) { return md5_1(x.UID) === _this.event_id; });
                                        _a = this;
                                        return [4 /*yield*/, filtered[0]];
                                    case 1:
                                        _a.event_detail = _b.sent();
                                        text = this.event_detail.DESCRIPTION.toString();
                                        ev_des = text.replace(/\\n/g, '');
                                        ev_des = ev_des.replace(/\\/g, '');
                                        code = ev_des;
                                        if (code.search('<a') != -1 && this.platform.is('ios')) {
                                            do {
                                                link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : code.match(/href="(.*?)"/);
                                                code = code.replace(link[0], '');
                                                code.replace('href=' + link[1], '');
                                                new_bypassLink = link[1];
                                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                                console.log(new_bypassLink);
                                                code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                                code = code.replace('</a>', '</span>');
                                                code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                            } while (code.search('<a') != -1);
                                        }
                                        // sanitizing html code for security purpose
                                        this.event_description = this.dom.bypassSecurityTrustHtml(code);
                                        venue_name = this.event_detail.VENUENAME;
                                        code1 = venue_name;
                                        if (code1 && code1.search('<a') != -1 && this.platform.is('ios')) {
                                            do {
                                                link = code1.match(/data-cke-saved-href="(.*?)"/) ? code1.match(/data-cke-saved-href="(.*?)"/) : code1.match(/href="(.*?)"/);
                                                code1 = code1.replace(link[0], '');
                                                code1.replace('href=' + link[1], '');
                                                new_bypassLink = link[1];
                                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                                console.log(new_bypassLink);
                                                code1 = code1.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                                code1 = code1.replace('</a>', '</span>');
                                                code1 = code1.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                            } while (code1.search('<a') != -1);
                                        }
                                        // sanitizing html code for security purpose
                                        this.event_venue = this.dom.bypassSecurityTrustHtml(code1);
                                        sum = this.event_detail.SUMMARY.toString();
                                        this.event_summary = sum.replace(/\\/g, '');
                                        if (this.event_detail.LOCATION) {
                                            this.event_location = this.event_detail.LOCATION.replace(/\\/g, '');
                                            arr = this.event_location.split(",");
                                            fst = arr.splice(0, 1).join("");
                                            this.event_location = arr.join(",");
                                        }
                                        if (this.event_detail.GEO && this.event_detail.GEO !== "") {
                                            geo = this.event_detail.GEO;
                                            latlong = geo.split(";");
                                            this.chLat = latlong[0];
                                            this.chLong = latlong[1];
                                        }
                                        else {
                                            if (this.event_location !== undefined && this.event_location !== "") {
                                                this.getlocation(this.event_location);
                                            }
                                        }
                                        obj = this.event_detail;
                                        keys = Object.keys(obj);
                                        for (j = 0; j < keys.length; j++) {
                                            key = keys[j];
                                            if (keys[j].includes("DTSTART")) {
                                                this.event_detail.start_date = this.event_detail[key];
                                                if (this.event_detail.start_date.length === 8) {
                                                    this.event_detail.start_date = [this.event_detail.start_date.slice(0, 4), "/", this.event_detail.start_date.slice(4)].join('');
                                                    this.event_detail.start_date = [this.event_detail.start_date.slice(0, 7), "/", this.event_detail.start_date.slice(7)].join('');
                                                }
                                                this.start_date = this.event_detail.start_date;
                                            }
                                            if (keys[j].includes("DTEND")) {
                                                this.event_detail.end_date = this.event_detail[key];
                                                if (this.event_detail.end_date.length === 8) {
                                                    this.event_detail.end_date = [this.event_detail.end_date.slice(0, 4), "/", this.event_detail.end_date.slice(4)].join('');
                                                    this.event_detail.end_date = [this.event_detail.end_date.slice(0, 7), "/", this.event_detail.end_date.slice(7)].join('');
                                                }
                                                this.end_date = this.event_detail.end_date;
                                            }
                                            if (keys[j].includes("ATTACH")) {
                                                this.event_detail.photo = this.event_detail[key].value;
                                                this.event_photo = this.event_detail[key].value;
                                                if (this.church_event_detail) {
                                                    this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                                                }
                                                if (this.event_photo !== "" && this.event_photo !== null && this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(this.event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                                    abc = this.event_photo.split("/");
                                                    folder_name = abc[abc.length - 2];
                                                    if (this.platform.is("mobile")) {
                                                        this.deviceType = 'radiobase_mobile';
                                                    }
                                                    else if (this.platform.is("tablet")) {
                                                        this.deviceType = 'radiobase_tablet';
                                                    }
                                                    else {
                                                        this.deviceType = folder_name;
                                                    }
                                                    new_link = this.event_photo.replace(folder_name, this.deviceType);
                                                    this.event_photo = new_link;
                                                    // console.log('background is: ',card.background,'new link is: ', new_link);
                                                }
                                            }
                                        }
                                        new_timeZone = '';
                                        if (typeof this.event_detail['DTSTART'] === 'object') {
                                            new_timeZone = this.event_detail['DTSTART']['TZID'];
                                            this.event_detail.start_date = this.event_detail['DTSTART']['value'];
                                            this.event_detail.end_date = this.event_detail['DTEND']['value'];
                                        }
                                        else {
                                            Object.keys(this.event_detail).forEach(function (key) {
                                                if (key.includes('TZID')) {
                                                    var tz = key.split('=');
                                                    new_timeZone = tz[1];
                                                }
                                            });
                                        }
                                        _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                                        _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                                        x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                                        y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                                        start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                                        end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                                        console.log(this.event_detail);
                                        church_data = JSON.parse(localStorage.getItem('church_data'));
                                        if (new_timeZone === null) {
                                            new_timeZone = church_data.church.timezone;
                                        }
                                        else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                                            new_timeZone = church_data.church.timezone;
                                        }
                                        if (new_timeZone != '') {
                                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                                        }
                                        time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                                        if (time_diff != 0) {
                                            this.event_detail.startdate = this.appService.getDateFormat(start);
                                            this.event_detail.starttime = this.appService.getTimeFormat(start);
                                            this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                            this.event_detail.enddate = this.appService.getDateFormat(end);
                                            this.event_detail.endtime = this.appService.getTimeFormat(end);
                                            this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                                        }
                                        else {
                                            this.event_detail.startdate = this.appService.getDateFormat(start);
                                            this.event_detail.starttime = this.appService.getTimeFormat(start);
                                            this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                            this.event_detail.enddate = this.appService.getDateFormat(end);
                                            this.event_detail.endtime = this.appService.getTimeFormat(end);
                                            this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                                        }
                                        this.loader.stopLoading();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) {
                            var message = err.message;
                            _this.loader.stopLoading();
                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        });
                    }
                    else {
                        this.eventsService.getEvents(this.event_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var events, filtered, _a, ev_des, text, code, link, new_bypassLink, venue_name, code1, link, new_bypassLink, sum, arr, fst, geo, latlong, obj, keys, j, key, new_timeZone, _start, _end, x, y, start, end, church_data, time_diff;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, res.data.VEVENT];
                                    case 1:
                                        events = _b.sent();
                                        filtered = events.filter(function (x) { return md5_1(x.UID) === _this.event_id; });
                                        _a = this;
                                        return [4 /*yield*/, filtered[0]];
                                    case 2:
                                        _a.event_detail = _b.sent();
                                        text = this.event_detail.DESCRIPTION.toString();
                                        ev_des = text.replace(/\\n/g, '');
                                        ev_des = ev_des.replace(/\\/g, '');
                                        code = ev_des;
                                        if (code.search('<a') != -1 && this.platform.is('ios')) {
                                            do {
                                                link = code.match(/data-cke-saved-href="(.*?)"/) ? code.match(/data-cke-saved-href="(.*?)"/) : code.match(/href="(.*?)"/);
                                                code = code.replace(link[0], '');
                                                code.replace('href=' + link[1], '');
                                                new_bypassLink = link[1];
                                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                                console.log(new_bypassLink);
                                                code = code.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                                code = code.replace('</a>', '</span>');
                                                code = code.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                            } while (code.search('<a') != -1);
                                        }
                                        // sanitizing html code for security purpose
                                        this.event_description = this.dom.bypassSecurityTrustHtml(code);
                                        venue_name = this.event_detail.VENUENAME;
                                        code1 = venue_name;
                                        if (code1 && code1.search('<a') != -1 && this.platform.is('ios')) {
                                            do {
                                                link = code1.match(/data-cke-saved-href="(.*?)"/) ? code1.match(/data-cke-saved-href="(.*?)"/) : code1.match(/href="(.*?)"/);
                                                code1 = code1.replace(link[0], '');
                                                code1.replace('href=' + link[1], '');
                                                new_bypassLink = link[1];
                                                // new_bypassLink = this.dom.bypassSecurityTrustResourceUrl(link[1]);
                                                console.log(new_bypassLink);
                                                code1 = code1.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" expand=\"full\" fill=\"clear\" id=\"link_tag\"");
                                                code1 = code1.replace('</a>', '</span>');
                                                code1 = code1.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                            } while (code1.search('<a') != -1);
                                        }
                                        // sanitizing html code for security purpose
                                        this.event_venue = this.dom.bypassSecurityTrustHtml(code1);
                                        sum = this.event_detail.SUMMARY.toString();
                                        this.event_summary = sum.replace(/\\/g, '');
                                        if (this.event_detail.LOCATION) {
                                            this.event_location = this.event_detail.LOCATION.replace(/\\/g, '');
                                            arr = this.event_location.split(",");
                                            fst = arr.splice(0, 1).join("");
                                            this.event_location = arr.join(",");
                                        }
                                        if (this.event_detail.GEO && this.event_detail.GEO !== "") {
                                            geo = this.event_detail.GEO;
                                            latlong = geo.split(";");
                                            this.chLat = latlong[0];
                                            this.chLong = latlong[1];
                                        }
                                        else {
                                            if (this.event_location !== undefined && this.event_location !== "") {
                                                this.getlocation(this.event_location);
                                            }
                                        }
                                        obj = this.event_detail;
                                        keys = Object.keys(obj);
                                        for (j = 0; j < keys.length; j++) {
                                            key = keys[j];
                                            if (keys[j].includes("DTSTART")) {
                                                this.event_detail.start_date = this.event_detail[key];
                                                if (this.event_detail.start_date.length === 8) {
                                                    this.event_detail.start_date = [this.event_detail.start_date.slice(0, 4), "/", this.event_detail.start_date.slice(4)].join('');
                                                    this.event_detail.start_date = [this.event_detail.start_date.slice(0, 7), "/", this.event_detail.start_date.slice(7)].join('');
                                                }
                                                this.start_date = this.event_detail.start_date;
                                            }
                                            if (keys[j].includes("DTEND")) {
                                                this.event_detail.end_date = this.event_detail[key];
                                                if (this.event_detail.end_date.length === 8) {
                                                    this.event_detail.end_date = [this.event_detail.end_date.slice(0, 4), "/", this.event_detail.end_date.slice(4)].join('');
                                                    this.event_detail.end_date = [this.event_detail.end_date.slice(0, 7), "/", this.event_detail.end_date.slice(7)].join('');
                                                }
                                                this.end_date = this.event_detail.end_date;
                                            }
                                            if (keys[j].includes("ATTACH")) {
                                                this.event_detail.photo = this.event_detail[key];
                                                this.event_photo = this.event_detail[key];
                                                if (this.church_event_detail) {
                                                    this.event_photo = this.church_event_detail.photo.replace(/ /g, "%20");
                                                }
                                            }
                                        }
                                        new_timeZone = '';
                                        if (typeof this.event_detail['DTSTART'] === 'object') {
                                            new_timeZone = this.event_detail['DTSTART']['TZID'];
                                            this.event_detail.start_date = this.event_detail['DTSTART']['value'];
                                            this.event_detail.end_date = this.event_detail['DTEND']['value'];
                                        }
                                        else {
                                            Object.keys(this.event_detail).forEach(function (key) {
                                                if (key.includes('TZID')) {
                                                    var tz = key.split('=');
                                                    new_timeZone = tz[1];
                                                }
                                            });
                                        }
                                        _start = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.start_date);
                                        _end = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.end_date);
                                        x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                                        y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                                        start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                                        end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                                        church_data = JSON.parse(localStorage.getItem('church_data'));
                                        if (new_timeZone === null) {
                                            new_timeZone = church_data.church.timezone;
                                        }
                                        else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                                            new_timeZone = church_data.church.timezone;
                                        }
                                        if (new_timeZone != '') {
                                            console.log(new_timeZone);
                                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                                        }
                                        time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset();
                                        if (time_diff != 0) {
                                            this.event_detail.startdate = this.appService.getDateFormat(start);
                                            this.event_detail.starttime = this.appService.getTimeFormat(start);
                                            this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                            this.event_detail.enddate = this.appService.getDateFormat(end);
                                            this.event_detail.endtime = this.appService.getTimeFormat(end);
                                            this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                                        }
                                        else {
                                            this.event_detail.startdate = this.appService.getDateFormat(start);
                                            this.event_detail.starttime = this.appService.getTimeFormat(start);
                                            this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                                            this.event_detail.enddate = this.appService.getDateFormat(end);
                                            this.event_detail.endtime = this.appService.getTimeFormat(end);
                                            this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                                        }
                                        this.loader.stopLoading();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) {
                            var message = err.message;
                            _this.loader.stopLoading();
                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        });
                    }
                }
            }
            else if (this.event_mode === 'church') {
                // fetching event data from church id
                this.eventsService.getEventsFromChurchId(this.ch_id).subscribe(function (res) {
                    if (res) {
                        var md5_2 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                        var all_events = res.events[0];
                        var filtered = all_events.filter(function (x) { return md5_2(x.id) === _this.event_id; });
                        _this.church_event_detail = filtered[0];
                        if (_this.church_event_detail.photo) {
                            _this.event_photo = _this.church_event_detail.photo.replace(/ /g, "%20");
                        }
                        if (_this.event_photo !== "" && _this.event_photo !== null && _this.event_photo.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(_this.church_event_detail.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                            var abc = _this.event_photo.split("/");
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
                            var new_link = _this.event_photo.replace(folder_name, _this.deviceType);
                            _this.event_photo = new_link;
                            // console.log('background is: ',card.background,'new link is: ', new_link);
                        }
                        var _start = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.start_date);
                        var _end = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.end_date);
                        var x = _start.format('YYYY-MM-DD HH:mm:ss').toString();
                        var y = _end.format('YYYY-MM-DD HH:mm:ss').toString();
                        var start = moment__WEBPACK_IMPORTED_MODULE_13__(x);
                        var end = moment__WEBPACK_IMPORTED_MODULE_13__(y);
                        var new_timeZone = '';
                        Object.keys(_this.event_detail).forEach(function (key) {
                            if (key.includes(';TZID=')) {
                                var tz = key.split('=');
                                new_timeZone = tz[1];
                            }
                        });
                        var church_data = JSON.parse(localStorage.getItem('church_data'));
                        if (new_timeZone === null) {
                            new_timeZone = church_data.church.timezone;
                        }
                        else if (new_timeZone.includes('utc') || new_timeZone.includes('UTC')) {
                            new_timeZone = church_data.church.timezone;
                        }
                        if (new_timeZone != '') {
                            start = moment__WEBPACK_IMPORTED_MODULE_13__(x).tz(new_timeZone);
                            end = moment__WEBPACK_IMPORTED_MODULE_13__(y).tz(new_timeZone);
                        }
                        var time_diff = moment__WEBPACK_IMPORTED_MODULE_13__().utcOffset(); // in minutes
                        if (time_diff != 0) {
                            _this.event_detail.startdate = _this.appService.getDateFormat(start);
                            _this.event_detail.starttime = _this.appService.getTimeFormat(start);
                            _this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                            _this.event_detail.enddate = _this.appService.getDateFormat(end);
                            _this.event_detail.endtime = _this.appService.getTimeFormat(end);
                            _this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                        }
                        else {
                            _this.event_detail.startdate = _this.appService.getDateFormat(start);
                            _this.event_detail.starttime = _this.appService.getTimeFormat(start);
                            _this.event_detail.starttime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.starttime, "h:mm:ss A").format("HH.mm");
                            _this.event_detail.enddate = _this.appService.getDateFormat(end);
                            _this.event_detail.endtime = _this.appService.getTimeFormat(end);
                            _this.event_detail.endtime = moment__WEBPACK_IMPORTED_MODULE_13__(_this.event_detail.endtime, "h:mm:ss A").format("HH.mm");
                        }
                    }
                    _this.loader.stopLoading();
                }, function (err) {
                    _this.loader.stopLoading();
                });
            }
        }
    };
    EventDetailPage.prototype.getlocation = function (data) {
        var _this = this;
        var re = /\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d/;
        var input = data.substring(5);
        var match = re.exec(input);
        if (match !== null) {
            if (match[0] !== "") {
                var postalcode = match[0];
                this.eventsService.getMapLocation(data, postalcode).subscribe(function (res) {
                    _this.chLat = res.results[0].geometry.location.lat;
                    _this.chLong = res.results[0].geometry.location.lng;
                });
            }
            else {
                console.log("zip code not found");
            }
        }
    };
    // inside app on page with done button
    EventDetailPage.prototype.openurlinapp = function (url) {
        if (url.includes("|")) {
            url = url.toString().replace('|', ':');
        }
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(url, '_blank', this.options);
        }
        else {
            this.iab.create(url, '_self', this.options);
        }
    };
    EventDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    EventDetailPage.prototype.gotoRegistrationPage = function () {
        this.router.navigate(['event-giving/' + this.event_id]);
    };
    EventDetailPage.prototype.registerationForm = function () {
        this.router.navigate(['forms/' + this.event_detail.form_id]);
    };
    EventDetailPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
        { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] }
    ]; };
    EventDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! raw-loader!./event-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/event-detail/event-detail.page.html"),
            styles: [__webpack_require__(/*! ./event-detail.page.scss */ "./src/app/event-detail/event-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"],
            src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"]])
    ], EventDetailPage);
    return EventDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-detail-event-detail-module-es5.js.map