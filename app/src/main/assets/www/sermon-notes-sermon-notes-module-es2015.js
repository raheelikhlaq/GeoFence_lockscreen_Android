(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sermon-notes-sermon-notes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sermon-notes/sermon-notes.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sermon-notes/sermon-notes.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Sermon Notes')\"\n                 class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n      {{'SERMONS.sermon_notes' | translate}}\n    </ion-buttons>\n    <p *ngIf=\"enable_home && (enable_home.next_page === 'Show Notes')\" slot=\"start\">{{'SERMONS.sermon_notes' | translate}}</p>\n\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n        <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\" *ngIf=\"!allNotes && loading_data\">\n  <div class=\"app-container\">\n    <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n              style=\"border-radius: 5px;\" >\n      <h4 class=\"heading4\">{{'SERMONS.no_sermon_notes' | translate}}</h4>\n    </ion-card>\n  </div>\n</div>\n  <div class=\"page-wrapper\" *ngIf=\"allNotes\">\n    <div class=\"app-container\">\n      <ion-card *ngFor=\"let notes of allNotes; let i = index\" (click)=\"openDetail(i)\" class=\"ionCard ionCard--chat ionCard--mobile cursor-pointer\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-card-title class=\"heading4\">{{notes.title}}</ion-card-title>\n          <p class=\"show-mobile\" *ngIf=\"notes.description.length != 0\" [innerHTML]=\"(notes.description[0]).substring(0 , 85) + '[...]'\"></p>\n          <p class=\"hide-mobile\" *ngIf=\"notes.description.length != 0\" [innerHTML]=\"(notes.description[0]).substring(0 , 200) + '[...]'\"></p>\n          <div class=\"ionCard__footer\">\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                <ul class=\"list-inline commentAvatars\">\n                  <li class=\"list-inline-item\">\n                    <ion-icon name=\"calendar\" size=\"small\"></ion-icon>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <ion-text>{{appService.getDateTimeFormat(notes.pubDate)}}</ion-text>\n                  </li>\n                </ul>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let AppService = class AppService {
    constructor() { }
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
    getGroupsTimeFormat(date) {
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
    }
    getTimeFormat(time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    }
    getDateFormat(date) {
        let dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    }
    getDateTimeFormat(dateAndTime) {
        let dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
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
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/sermon-notes/sermon-notes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sermon-notes/sermon-notes.module.ts ***!
  \*****************************************************/
/*! exports provided: SermonNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonNotesPageModule", function() { return SermonNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sermon_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sermon-notes.page */ "./src/app/sermon-notes/sermon-notes.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _sermon_notes_page__WEBPACK_IMPORTED_MODULE_6__["SermonNotesPage"]
    }
];
let SermonNotesPageModule = class SermonNotesPageModule {
};
SermonNotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sermon_notes_page__WEBPACK_IMPORTED_MODULE_6__["SermonNotesPage"]]
    })
], SermonNotesPageModule);



/***/ }),

/***/ "./src/app/sermon-notes/sermon-notes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/sermon-notes/sermon-notes.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcm1vbi1ub3Rlcy9zZXJtb24tbm90ZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sermon-notes/sermon-notes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/sermon-notes/sermon-notes.page.ts ***!
  \***************************************************/
/*! exports provided: SermonNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonNotesPage", function() { return SermonNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



















let SermonNotesPage = class SermonNotesPage {
    constructor(idService, route, loader, storage, sermonsService, router, eventsService, apiService, appService, toast, location, common, event_provider, analytics, platform, device, translate) {
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.appService = appService;
        this.toast = toast;
        this.location = location;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.page_in_home_tabs = false;
        this.loading_data = false;
        this.page = 0;
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
        // getting theme
        this.getTheme();
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        this.event_provider.isHomeEnable.subscribe(value => {
            this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
        this.getUser();
    }
    getTheme() {
        // getting theme from local storage
        // this.storage.get('theme').then(theme => {
        let theme = JSON.parse(localStorage.getItem('church_data')).church;
        // getting app_pages
        const body = JSON.stringify({ id: theme.ch_id });
        // this.common.getTheme(body).subscribe(async (res: any) => {
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((Object.keys(res).length === 0)) {
                return;
            }
            this.theme = res.church;
            if (res.apppages.length > 0) {
                // filtering out Sermon-Notes page data
                let sermon_page = res.apppages.filter(x => x.page_type === 'page' && x.name === 'Show Notes');
                if (sermon_page.length > 0) {
                    this.sermons_url = sermon_page[0].url;
                    if (sermon_page[0]) {
                        this.banner_image = sermon_page[0].website_banner;
                        this.banner_desc = sermon_page[0].banner_description;
                        this.banner_title = sermon_page[0].banner_title;
                        this.page_name = sermon_page[0].name;
                        this.custom_name = sermon_page[0].title;
                        this.grad_color = sermon_page[0].grad_color_1;
                        this.opacity_color = sermon_page[0].opacity_color;
                        this.page_id = sermon_page[0].id;
                        let app_pages = res.apppages.find(x => x.id === this.page_id);
                        if (app_pages && app_pages.password_protection_toggle === 'true') {
                            this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                        }
                    }
                    if (res.is_wordpress_enable === '1') {
                        this.is_wordpress_enable = true;
                        this.getDBNotes();
                    }
                    else {
                        this.is_wordpress_enable = false;
                        if (this.sermons_url) {
                            this.getNotes(this.sermons_url);
                        }
                    }
                }
            }
        }));
        // });
    }
    getDBNotes() {
        this.loading_data = false;
        this.loader.presentLoading().then(() => { });
        let self = this;
        let body = {
            'church_id': this.theme.ch_id,
            'page': this.page + 1
        };
        this.sermonsService.getCMSSermonNotes(body).subscribe((res) => {
            // ============ parsing xml into JSON format =============//
            // let parseString = require('xml2js').parseString;
            // parseString(res, function (err, result) {
            //     self.allNotes = result.rss.channel[0].item;
            // });
            // ============ parsing xml into JSON format =============//
            self.allNotes = res.notes;
            self.allNotes.forEach(element => {
                element['description'] = [];
                element['description'].push(element.content);
                element['pubDate'] = element.date;
            });
            console.log(self.allNotes);
            this.loader.stopLoading();
        }, (err) => {
            this.loading_data = true;
            let message = err.message;
            this.loader.stopLoading();
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    }
    getNotes(url) {
        this.loading_data = false;
        this.loader.presentLoading().then(() => {
            let self = this;
            this.sermonsService.getSermonNotes(url).subscribe((res) => {
                // ============ parsing xml into JSON format =============//
                // let parseString = require('xml2js').parseString;
                // parseString(res, function (err, result) {
                //     self.allNotes = result.rss.channel[0].item;
                // });
                // ============ parsing xml into JSON format =============//
                self.allNotes = res.result.channel.item;
                this.loader.stopLoading();
            }, (err) => {
                this.loading_data = true;
                let message = err.message;
                this.loader.stopLoading();
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        });
    }
    openDetail(i) {
        let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
        // hashing data before sending
        let hashed_date = md5(this.allNotes[i].pubDate);
        let hashed_title = md5(this.allNotes[i].title);
        if (!this.is_wordpress_enable) {
            this.router.navigate(['show-notes-detail', {
                    title: hashed_title,
                    pubDate: hashed_date,
                    url: this.sermons_url,
                    page_id: this.page_id,
                }]);
        }
        else {
            this.router.navigate(['show-notes-detail', {
                    id: this.allNotes[i].id,
                    local: this.is_wordpress_enable,
                    ch: this.theme.ch_id
                }]);
        }
    }
    // navigating to back page
    gotobackPage() {
        this.location.back();
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then((val) => {
            if (val != null && val != 'guest') {
                this.user = val;
            }
        });
    }
    setAnalytics() {
        let dev_id = '';
        let device = 'web';
        // preparing device data
        if (this.platform.is('android') || this.platform.is('iphone')) {
            dev_id = this.device.uuid;
            if (dev_id) {
                device = this.platform.platforms()[0];
            }
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_13__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.theme.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.page_name,
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
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_13__();
        this.event_provider.hidefooter(true, 'other');
    }
};
SermonNotesPage.ctorParameters = () => [
    { type: _services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateService"] }
];
SermonNotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sermon-notes',
        template: __webpack_require__(/*! raw-loader!./sermon-notes.page.html */ "./node_modules/raw-loader/index.js!./src/app/sermon-notes/sermon-notes.page.html"),
        styles: [__webpack_require__(/*! ./sermon-notes.page.scss */ "./src/app/sermon-notes/sermon-notes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateService"]])
], SermonNotesPage);



/***/ })

}]);
//# sourceMappingURL=sermon-notes-sermon-notes-module-es2015.js.map