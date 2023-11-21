(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history/history.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"ionCard ion-no-margin\" style=\"box-shadow: none; overflow-y: scroll\">\n  <ion-card-content class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <!-- <ion-icon size=\"small\" (click)=\"getNotifications()\" name=\"refresh\" style=\"font-size:25px;\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"6\">\n        <a *ngIf=\"notifications.length > 0\" (click)=\"clearHistory()\"><p class=\"ion-text-right\">{{'HISTORY.clear_history' | translate}}</p></a>\n        <!-- <a (click)=\"clearHistory()\"><p class=\"ion-text-right\">clear</p></a> -->\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let item of notifications\">\n      <ion-col [size]=\"12\" [sizeLg]=\"6\">\n        <ion-card  class=\"ionCard ionCard--chat ionCard--mobile cursor-pointer\">\n          <ion-card-content class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <ion-card-title (click)=\"goToPage(item)\"  class=\"heading4\">{{item.title}}</ion-card-title>\n                <p class=\"show-mobile\" > {{item.message}}</p>\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-right\">\n                <ion-button (click)=\"removeNotification(item.id)\" class=\"ion-no-padding commonBtn--transparent\">\n                  <ion-icon name=\"close\" style=\"font-size:25px;\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <div class=\"ionCard__footer\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                  <ul class=\"list-inline commentAvatars\">\n                    <li class=\"list-inline-item\">\n                      <ion-icon name=\"calendar\" size=\"small\"></ion-icon>\n                    </li>\n                    <li class=\"list-inline-item\">\n                      <ion-text>{{appService.getDateTimeFormat(item.created_at)}}</ion-text>\n                    </li>\n                  </ul>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-card *ngIf=\"notifications.length === 0\" class=\"ionCard ionCard--chat ionCard--mobile cursor-pointer\">\n      <h4>{{'HISTORY.no_notifications' | translate}}</h4>\n    </ion-card>\n  </ion-card-content>\n</ion-card>\n"

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

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








// const routes: Routes = [
//   {
//     path: '',
//     component: HistoryPage
//   }
// ];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"] }])
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dark-mode.service */ "./src/services/dark-mode.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");













let HistoryPage = class HistoryPage {
    constructor(location, darkModeService, apiService, storage, common, device, appService, platform, modalController, event_provider, router, firebasex) {
        this.location = location;
        this.darkModeService = darkModeService;
        this.apiService = apiService;
        this.storage = storage;
        this.common = common;
        this.device = device;
        this.appService = appService;
        this.platform = platform;
        this.modalController = modalController;
        this.event_provider = event_provider;
        this.router = router;
        this.firebasex = firebasex;
        this.notifications = [];
        this.is_mobile = false;
    }
    ionViewDidEnter() {
        this.event_provider.hidefooter(true, 'other');
        localStorage.setItem('notification_count', "0");
        this.firebasex.setBadgeNumber(0);
    }
    ionViewWillEnter() {
        this.myDevice_id = localStorage.getItem('device_id');
        // getting theme from local storage
        this.event_provider.getChurchData.subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(data).length === 0)) {
                let res = data.church;
                this.ch_id = res.ch_id;
                // to check which tab is active
                if (res.home_tabs) {
                    this.home_tabs = JSON.parse(res.home_tabs);
                }
                let dev_id = localStorage.getItem('device_id');
                if (dev_id !== null) {
                    this.is_mobile = true;
                    this.myDevice_id = dev_id;
                    this.getNotifications();
                }
            }
        }));
    }
    ngOnInit() {
        // this.getNotifications();
    }
    getNotifications() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = JSON.stringify({
                church_id: this.ch_id,
                device_id: this.myDevice_id,
                device_token: localStorage.getItem('fcm_token')
            });
            // fetching notifications of current device
            this.apiService.getNotifications(body).subscribe((res) => {
                if (res && res.status) {
                    this.notifications = res.notifications.filter(x => x.status === 'true').reverse();
                }
            });
        });
    }
    removeNotification(id) {
        this.apiService.removeNotification(id).subscribe(res => {
            if (res) {
                this.getNotifications();
            }
        });
    }
    clearHistory() {
        this.storage.remove('notifications_data');
        this.notifications = [];
        let body = JSON.stringify({
            church_id: this.ch_id,
            deevice_id: this.myDevice_id
        });
        this.apiService.clearHistory(body).subscribe((res) => {
            if (res.status) {
                this.getNotifications();
            }
        });
    }
    // navigating notification to Pages
    goToPage(notification) {
        if (notification.url && notification.url !== 'null') {
            let item = JSON.parse(notification.url);
            let pageName = item.pageName;
            let pageId = item.pageId;
            let pageType = item.pageType;
            if (pageName && pageId) {
                if (pageName === 'Audio') {
                    pageName = 'audio-archive';
                    this.router.navigate([pageName]);
                }
                else if (pageName === 'Video') {
                    pageName = 'video-archive';
                    this.router.navigate([pageName]);
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
                else if (pageName === 'Donations') {
                    pageName = 'my-contribute';
                    this.router.navigate([pageName]);
                }
                else if (pageName === 'Feed') {
                    if ((this.home_tabs && this.home_tabs[1].status === 'true') || this.ch_id === '1000') {
                        this.router.navigate(['/feed-tab']);
                    }
                    else {
                        this.router.navigate(['home-tabs/feed-tab']);
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
                else if (pageName === 'Form') {
                    this.router.navigate(['form', {
                            form_id: pageId
                        }]);
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
                else {
                    pageName = pageName.replace(' ', '-');
                    pageName = pageName.toLowerCase();
                    this.router.navigate([pageName]);
                }
            }
        }
    }
};
HistoryPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_5__["DarkModeService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/history/history.page.html"),
        styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_5__["DarkModeService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"],
        _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_12__["FirebaseX"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map