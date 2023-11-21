(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-detail-location-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/location-detail/location-detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/location-detail/location-detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'LOCATIONS.location_detail' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"banner\" style=\"background-image: url('../../assets/img/banner-bg.jpg');\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\"> {{'LOCATIONS.locations' | translate}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{'LOCATIONS.see_what_message' | translate}}.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-row>\n                <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                    <div class=\"ion-margin-bottom\">\n                        <ion-card class=\"ionCard ionCard--noPadding\">\n                            <agm-map *ngIf=\"church_location\"\n                                     [style.height.px]=\"334\"\n                                     [latitude]=+church_location.latitude\n                                     [longitude]=+church_location.longitude>\n                                <agm-marker [latitude]=+church_location.latitude\n                                            [longitude]=+church_location.longitude></agm-marker>\n                            </agm-map>\n                            <!--<iframe width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=4{{latitude}},{{longitude}}&amp;key=AIzaSyDSu35Uz1W7h5oYIvB4M3LV0pIkOUoh_bo\"></iframe>-->\n                        </ion-card>\n                    </div>\n                </ion-col>\n                <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                    <ion-card *ngIf=\"church_location\" class=\"ionCard ion-margin-bottom\">\n                        <ion-card-header class=\"\">\n                            <ion-card-title class=\"heading4\">{{'LOCATIONS.location_info' | translate}}</ion-card-title>\n                        </ion-card-header>\n                        <hr class=\"ionCard__divider\">\n                        <ion-card-content class=\"ion-no-padding\">\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"ionMedia\" lines=\"none\">\n                                    <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                         style=\"margin-top:0;\">\n                                        <ion-icon name=\"pin\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                    </div>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <p class=\"ionMedia__heading text-dark font-weight-semi-bold\">{{'LOCATIONS.locations' | translate}}</p>\n                                        <p class=\"ionMedia__text\">{{church_location.street_address}}</p>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"ionMedia\" lines=\"none\">\n                                    <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\"\n                                         style=\"margin-top:0;\">\n                                        <ion-icon name=\"calendar\" slot=\"start\" class=\"ionMedia__icon\"></ion-icon>\n                                    </div>\n                                    <ion-label class=\"ion-text-wrap\">\n                                        <p class=\"ionMedia__heading text-dark font-weight-semi-bold\">{{'LOCATIONS.postalcode' | translate}}</p>\n                                        <p class=\"ionMedia__text\">{{church_location.postal}}</p>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n                <ion-col size=\"12\" sizeLg=\"6\" *ngIf=\"church_location\">\n                    <ion-row>\n                        <ion-col size=\"6\" sizeLg=\"3\" *ngIf=\"website\">\n                            <a>\n                                <ion-button (click)=\"openurlinbrowser(website)\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                                    {{'LOCATIONS.website' | translate}}\n                                </ion-button>\n                            </a>\n                        </ion-col>\n                        <ion-col size=\"6\" sizeLg=\"3\" *ngIf=\"email\">\n                            <a [href]=\"'mailto:' + email\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                                    {{'LOCATIONS.email' | translate}}\n                                </ion-button>\n                            </a>\n                        </ion-col>\n                        <ion-col size=\"6\" sizeLg=\"3\" *ngIf=\"church_location.phone_no\">\n                            <a href=\"tel:{{church_location.phone_no}}\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                                    {{'LOCATIONS.call' | translate}}\n                                </ion-button>\n                            </a>\n                        </ion-col>\n                        <ion-col size=\"6\" sizeLg=\"3\" *ngIf=\"church_location.latitude && church_location.longitude\">\n<!--                            <a [href]=\"'https://www.google.com/maps/?q='+ church_location.latitude + ',' + church_location.longitude\"-->\n<!--                               target=\"_blank\">-->\n                                <ion-button (click)=\"navigateLocation()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" style=\"width: 100%;\">\n                                    {{'LOCATIONS.directions' | translate}}\n                                </ion-button>\n<!--                            </a>-->\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-card *ngIf=\"extra_info\" class=\"ionCard ion-margin-bottom\">\n                <ion-card-content class=\"ion-no-padding\">\n                        <ion-item lines=\"none\">\n                            <ion-label class=\"ion-text-wrap\">\n                                <div class=\"customHTML\" [innerHTML]=\"extra_info\"></div>\n                            </ion-label>\n                        </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n\n"

/***/ }),

/***/ "./src/app/location-detail/location-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/location-detail/location-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailPageModule", function() { return LocationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-detail.page */ "./src/app/location-detail/location-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










const routes = [
    {
        path: '',
        component: _location_detail_page__WEBPACK_IMPORTED_MODULE_6__["LocationDetailPage"]
    }
];
let LocationDetailPageModule = class LocationDetailPageModule {
};
LocationDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDSu35Uz1W7h5oYIvB4M3LV0pIkOUoh_bo'
            })
        ],
        declarations: [_location_detail_page__WEBPACK_IMPORTED_MODULE_6__["LocationDetailPage"]]
    })
], LocationDetailPageModule);



/***/ }),

/***/ "./src/app/location-detail/location-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/location-detail/location-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWRldGFpbC9sb2NhdGlvbi1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/location-detail/location-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/location-detail/location-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: LocationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailPage", function() { return LocationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
















let LocationDetailPage = class LocationDetailPage {
    constructor(platform, storage, loader, apiService, route, callNumber, iab, launchNavigator, location, toast, translate, event_provider, dom) {
        this.platform = platform;
        this.storage = storage;
        this.loader = loader;
        this.apiService = apiService;
        this.route = route;
        this.callNumber = callNumber;
        this.iab = iab;
        this.launchNavigator = launchNavigator;
        this.location = location;
        this.toast = toast;
        this.translate = translate;
        this.event_provider = event_provider;
        this.dom = dom;
        this.extra_info = '';
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes',
            enableViewportScale: 'yes'
        };
    }
    ngOnInit() {
        // assigning data from URL Params
        this.location_id = this.route.snapshot.paramMap.get('id');
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        if (!this.ch_id) {
            this.ch_id = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].church_id;
        }
        this.getLocationExtraInfo();
        // getting church locations
        this.getLocation();
    }
    getLocationExtraInfo() {
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res && !(Object.keys(res).length === 0)) {
                let app_page = res.apppages.find(x => x.name === 'Locations');
                if (app_page) {
                    let html_ = app_page.feed_type;
                    if (html_ && html_ !== '') {
                        this.extra_info = this.dom.bypassSecurityTrustHtml(html_);
                    }
                    else {
                        this.extra_info = '';
                    }
                }
            }
        }));
    }
    getLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.apiService.get_church_locations(this.ch_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    let filtered = res.locations.filter(x => x.id === this.location_id);
                    this.church_location = yield filtered[0];
                    this.website = this.church_location.website;
                    this.email = this.church_location.email;
                }
                else {
                }
            }), (err) => {
                let message = err.message;
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                // this.loader.stopLoading();
            });
        });
    }
    navigateLocation() {
        this.iab.create('https://www.google.com/maps/?q=' + this.church_location.latitude + ',' + this.church_location.longitude, '_blank', this.options);
        // let options: LaunchNavigatorOptions = {
        //     app: this.launchNavigator.APP.GOOGLE_MAPS,
        // };
        // this.launchNavigator.navigate([this.church_location.latitude, this.church_location.longitude], options)
        //     .then(
        //         success => console.log('Launched navigator'),
        //         error => console.log('Error launching navigator', error)
        //     );
    }
    // used to call on number on device
    call() {
        this.callNumber.callNumber(this.church_location.phone_no, true)
            .then(res => { })
            .catch(err => { });
    }
    openBrowser() {
        this.iab.create(this.church_location.website);
    }
    // in external safari/chrome
    openurlinbrowser(url) {
        this.iab.create(url, '_system');
    }
    gotobackPage() {
        this.location.back();
    }
};
LocationDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] }
];
LocationDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-detail',
        template: __webpack_require__(/*! raw-loader!./location-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/location-detail/location-detail.page.html"),
        styles: [__webpack_require__(/*! ./location-detail.page.scss */ "./src/app/location-detail/location-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_14__["EventProviderService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"]])
], LocationDetailPage);



/***/ })

}]);
//# sourceMappingURL=location-detail-location-detail-module-es2015.js.map