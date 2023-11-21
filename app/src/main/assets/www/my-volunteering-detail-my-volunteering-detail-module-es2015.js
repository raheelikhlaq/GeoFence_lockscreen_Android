(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-volunteering-detail-my-volunteering-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-volunteering-detail/my-volunteering-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-volunteering-detail/my-volunteering-detail.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'MY_STUFF.my_volunteering_detail' | translate}}\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content *ngIf=\"vol_data\">\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <h2 class=\"heading2\" *ngIf=\"vol_data\">{{vol_data.church_name}}</h2>\n            </div>\n            <ion-card class=\"ionCard ion-no-margin\">\n                <ion-card-content class=\"ion-no-padding\">\n                    <div class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                 style=\"margin-top:0;\">\n                                <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.church' | translate}}</h2>\n                                <p *ngIf=\"vol_data.church_name\">{{vol_data.church_name}}</p>\n                                <p *ngIf=\"!vol_data.church_name\">{{'MY_STUFF.not_available' | translate}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n\n                    <div class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                 style=\"margin-top:0;\">\n                                <ion-icon name=\"school\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.campus' | translate}}</h2>\n                                <p *ngIf=\"vol_data.campus_name\">{{vol_data.campus_name}}</p>\n                                <p *ngIf=\"!vol_data.campus_name\">{{'MY_STUFF.not_available' | translate}}</p>\n                            </ion-label>\n\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"trophy\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.position' | translate}}</h2>\n                                <p *ngIf=\"vol_data.position_name\">{{vol_data.position_name}}</p>\n                                <p *ngIf=\"!vol_data.position_name\">{{'MY_STUFF.not_available' | translate}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.date' | translate}}</h2>\n                                <p *ngIf=\"vol_data.date\">{{appService.getDateFormat(vol_data.date)}}</p>\n                                <p *ngIf=\"vol_data.actual_date_of_service\">{{appService.getDateFormat(vol_data.actual_date_of_service)}}</p>\n                                <p *ngIf=\"!vol_data.date && !vol_data.actual_date_of_service\">{{'MY_STUFF.not_available' | translate}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div class=\"ion-margin-bottom\" *ngIf=\"vol_data.time_of_service\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"time\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.time' | translate}}</h2>\n                                <p>{{vol_data.time_of_service}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div *ngIf=\"vol_data.department_name\" class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"home\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.department' | translate}}</h2>\n                                <p>{{vol_data.department_name}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div *ngIf=\"vol_data.is_recurring === 'Y'\" class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"repeat\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.recurring_type' | translate}}</h2>\n                                <p>{{vol_data.recurring_type}}</p>\n                            </ion-label>\n                        </ion-item>\n                        <hr class=\"ionCard__divider\">\n                    </div>\n                    <div *ngIf=\"vol_data.confirmed === 'Y'\" class=\"ion-margin-bottom\">\n                        <ion-item class=\"ionMedia\" lines=\"none\">\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\n                                <ion-icon name=\"link\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h2 class=\"ionMedia__heading\">{{'MY_STUFF.confirmation_link' | translate}}</h2>\n                                <a [href]=\"'https://manage.churchbase.com/index.php?plan/view/' + vol_data.confirmation_key \"\n                                   target=\"_blank\"><p>{{'https://manage.churchbase.com/index.php?plan/view/' +\n                                    vol_data.confirmation_key}}</p></a>\n                            </ion-label>\n                        </ion-item>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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

/***/ "./src/app/my-volunteering-detail/my-volunteering-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/my-volunteering-detail/my-volunteering-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: MyVolunteeringDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVolunteeringDetailPageModule", function() { return MyVolunteeringDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_volunteering_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-volunteering-detail.page */ "./src/app/my-volunteering-detail/my-volunteering-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _my_volunteering_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyVolunteeringDetailPage"]
    }
];
let MyVolunteeringDetailPageModule = class MyVolunteeringDetailPageModule {
};
MyVolunteeringDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_volunteering_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyVolunteeringDetailPage"]]
    })
], MyVolunteeringDetailPageModule);



/***/ }),

/***/ "./src/app/my-volunteering-detail/my-volunteering-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/my-volunteering-detail/my-volunteering-detail.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXZvbHVudGVlcmluZy1kZXRhaWwvbXktdm9sdW50ZWVyaW5nLWRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-volunteering-detail/my-volunteering-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/my-volunteering-detail/my-volunteering-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: MyVolunteeringDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyVolunteeringDetailPage", function() { return MyVolunteeringDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");













let MyVolunteeringDetailPage = class MyVolunteeringDetailPage {
    constructor(idService, route, loader, appService, storage, sermonsService, router, apiService, toast, 
    // public events: Events,
    Auth, location, translate) {
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.appService = appService;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.router = router;
        this.apiService = apiService;
        this.toast = toast;
        this.Auth = Auth;
        this.location = location;
        this.translate = translate;
        this.record_id = null;
        this.id = null;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ngOnInit() {
        // assigning data from URL Params
        this.record_id = this.route.snapshot.paramMap.get('record_id');
        this.id = this.route.snapshot.paramMap.get('id');
        // getting user data
        this.getLoginData();
    }
    getLoginData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loginData = yield this.Auth.getUser();
            if (this.loginData) {
                // getting volunteering data
                this.getVolunteering();
            }
        });
    }
    // getting volunteering data
    getVolunteering() {
        this.loader.presentLoading().then(() => {
            const body = {
                auth: 'Bearer ' + this.loginData.auth.access_token,
                id: this.loginData.user.id
            };
            // fetching volunteering data
            this.apiService.getVolunteering(JSON.stringify(body)).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = res.volunteering[0];
                let record_id_data = data.filter(x => x.record_id);
                let id_data = data.filter(x => x.id);
                let filtered;
                if (this.record_id != "null") {
                    filtered = record_id_data.filter(x => x.record_id === this.record_id);
                }
                else if (this.id != "null") {
                    filtered = id_data.filter(x => x.id === this.id);
                }
                this.vol_data = filtered[0];
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    // navigating to back page
    gotobackPage() {
        this.location.back();
    }
};
MyVolunteeringDetailPage.ctorParameters = () => [
    { type: _services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
];
MyVolunteeringDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-volunteering-detail',
        template: __webpack_require__(/*! raw-loader!./my-volunteering-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-volunteering-detail/my-volunteering-detail.page.html"),
        styles: [__webpack_require__(/*! ./my-volunteering-detail.page.scss */ "./src/app/my-volunteering-detail/my-volunteering-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])
], MyVolunteeringDetailPage);



/***/ })

}]);
//# sourceMappingURL=my-volunteering-detail-my-volunteering-detail-module-es2015.js.map