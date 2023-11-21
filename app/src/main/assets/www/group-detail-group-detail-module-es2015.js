(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-detail-group-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/group-detail/group-detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group-detail/group-detail.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"  routerDirection=\"root\"></ion-icon>&nbsp;\n      {{'GROUPS.group_detail' | translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div *ngIf=\"group_detail\" class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col [size]=\"12\" [sizeMd]=\"6\">\n            <ion-card *ngIf=\"group_detail.group_image\"\n                      class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\">\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <img class=\"embed-responsive-item\" [src]=\"baseUrl + group_detail.group_image\"/>\n              </div>\n              <ion-card-content>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\">{{group_detail.name}}</ion-card-title>\n                    <p *ngIf=\"group_detail.description\">{{group_detail.description}}</p>\n                    <p *ngIf=\"!group_detail.description\">{{'GROUPS.description_not_available' | translate}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n            <ion-card *ngIf=\"!group_detail.group_image\"\n                      class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\">\n              <div class=\"embed-responsive embed-responsive-16by9\">\n                <img class=\"embed-responsive-item\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n              </div>\n              <ion-card-content>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col [size]=\"12\" [sizeMd]=\"8\" class=\"ion-no-padding\">\n                    <ion-card-title class=\"heading4\">{{group_detail.name}}</ion-card-title>\n                    <p *ngIf=\"group_detail.description\">{{group_detail.description}}</p>\n                    <p *ngIf=\"!group_detail.description\">{{'GROUPS.description_not_available' | translate}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col [size]=\"12\" [sizeMd]=\"6\">\n            <ion-card class=\"ionCard ion-no-margin\">\n              <ion-card-content class=\"ion-no-padding\">\n                <div class=\"ion-margin-bottom\">\n                  <ion-item class=\"ionMedia\" lines=\"none\">\n                    <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                         style=\"margin-top:0;\">\n                      <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                    </div>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h2 class=\"ionMedia__heading\">{{'GROUPS.location' | translate}}</h2>\n                      <p *ngIf=\"group_detail.address\" class=\"ionMedia__text\">{{group_detail.address}}</p>\n                      <p *ngIf=\"!group_detail.address\" class=\"ionMedia__text\">{{'GROUPS.not_available' | translate}} </p>\n                    </ion-label>\n                  </ion-item>\n                  <hr class=\"ionCard__divider\">\n                </div>\n                <div class=\"ion-margin-bottom\">\n                  <ion-item class=\"ionMedia\" lines=\"none\">\n                    <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                         style=\"margin-top:0;\">\n                      <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                    </div>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h2 class=\"ionMedia__heading\"> {{'GROUPS.date' | translate}}</h2>\n                      <p *ngIf=\"group_detail.start_date && !group_detail.end_date\" class=\"ionMedia__text\">{{appService.getDateFormat(group_detail.start_date)}}</p>\n                      <p *ngIf=\"group_detail.start_date && group_detail.end_date\" class=\"ionMedia__text\">{{appService.getDateFormat(group_detail.start_date)}} - {{appService.getDateFormat(group_detail.end_date)}}</p>\n                      <p *ngIf=\"!group_detail.start_date\" class=\"ionMedia__text\">{{'GROUPS.not_available' | translate}}</p>\n                    </ion-label>\n                  </ion-item>\n                  <hr class=\"ionCard__divider\">\n                </div>\n                <div class=\"ion-margin-bottom\">\n                  <ion-item class=\"ionMedia\" lines=\"none\">\n                    <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                      <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                    </div>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h2 class=\"ionMedia__heading\"> {{'GROUPS.time' | translate}}</h2>\n                      <p *ngIf=\"group_detail.start_time && !group_detail.end_time\" class=\"ionMedia__text\">{{appService.getGroupsTimeFormat(group_detail.start_time)}}</p>\n                      <p *ngIf=\"group_detail.start_time && group_detail.end_time\" class=\"ionMedia__text\">{{appService.getGroupsTimeFormat(group_detail.start_time)}} - {{appService.getGroupsTimeFormat (group_detail.end_time)}}</p>\n                      <p *ngIf=\"!group_detail.start_time\" class=\"ionMedia__text\">{{'GROUPS.not_available' | translate}}</p>\n                    </ion-label>\n                  </ion-item>\n                </div>\n              </ion-card-content>\n            </ion-card>\n            <div class=\"ion-margin-top\">\n              <ion-button  [disabled]=\"!isRegistered\"   (click)=\"register()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                {{'GROUPS.register' | translate}}\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n<!--  <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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

/***/ "./src/app/group-detail/group-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/group-detail/group-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: GroupDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPageModule", function() { return GroupDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _group_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-detail.page */ "./src/app/group-detail/group-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _group_detail_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPage"]
    }
];
let GroupDetailPageModule = class GroupDetailPageModule {
};
GroupDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_group_detail_page__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPage"]]
    })
], GroupDetailPageModule);



/***/ }),

/***/ "./src/app/group-detail/group-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/group-detail/group-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwLWRldGFpbC9ncm91cC1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/group-detail/group-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/group-detail/group-detail.page.ts ***!
  \***************************************************/
/*! exports provided: GroupDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPage", function() { return GroupDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");












let GroupDetailPage = class GroupDetailPage {
    constructor(platform, api, storage, route, loader, appService, apiService, toast, location, router, translate) {
        this.platform = platform;
        this.api = api;
        this.storage = storage;
        this.route = route;
        this.loader = loader;
        this.appService = appService;
        this.apiService = apiService;
        this.toast = toast;
        this.location = location;
        this.router = router;
        this.translate = translate;
        this.isRegistered = true;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ngOnInit() {
        this.church_id = this.route.snapshot.paramMap.get('ch_id');
        if (!this.church_id) {
            this.church_id = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].church_id;
        }
        this.group_id = this.route.snapshot.paramMap.get('group_id');
        this.client_id = this.route.snapshot.paramMap.get('client_id');
        // this.baseUrl = "https://devmanage.churchbase.com/uploads/groupsimage/";
        this.baseUrl = "https://manage.churchbase.com/uploads/groupsimage/";
        this.checkExistence();
        this.getGroupDetails();
    }
    getGroupDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.apiService.getAllGroups(this.church_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    let data = res.groups;
                    let filtered = data.filter(x => x.id === this.group_id);
                    this.group_detail = yield filtered[0];
                }
            }), (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        });
    }
    checkExistence() {
        // getting user from local storage
        this.storage.get('user').then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (val != null && val != "guest") {
                let body = {
                    church_id: this.church_id,
                    group_id: this.group_id,
                    donor_id: val.user.id
                };
                this.apiService.checkExcistence(body).subscribe((res) => {
                    if (res.message === "Registered") {
                        this.isRegistered = false;
                    }
                });
            }
            else {
                let body = {
                    church_id: this.church_id,
                    group_id: this.group_id,
                    donor_id: "guest"
                };
                this.apiService.checkExcistence(body).subscribe((res) => {
                }, (err) => {
                    let message = err.message;
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    // this.loader.stopLoading();
                });
            }
        }));
    }
    register() {
        this.storage.get('user').then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (val != null && val != "guest") {
                const body = JSON.stringify({
                    client_id: this.client_id,
                    group_people_id: this.group_id,
                    account_donor_id: val.user.id,
                    church_id: this.church_id
                });
                this.loader.presentLoading().then(() => {
                    this.apiService.register_group(body).subscribe((res) => {
                        if (res.status) {
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.added_to_group : 'Added to group Successfully!'), (this.alertMessage ? this.alertMessage.Message : 'Message'), 'success');
                            this.ngOnInit();
                        }
                        else {
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : 'ERROR'), (this.alertMessage ? this.alertMessage.warning : 'Warning'), 'warning');
                        }
                        this.loader.stopLoading();
                    }, (err) => {
                        let message = err.message;
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    });
                });
            }
            else {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_register_group : 'Login to Register in Group'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.router.navigate(['/login']);
            }
        }));
    }
    gotobackPage() {
        this.location.back();
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
};
GroupDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
GroupDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-detail',
        template: __webpack_require__(/*! raw-loader!./group-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/group-detail/group-detail.page.html"),
        styles: [__webpack_require__(/*! ./group-detail.page.scss */ "./src/app/group-detail/group-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
], GroupDetailPage);



/***/ })

}]);
//# sourceMappingURL=group-detail-group-detail-module-es2015.js.map