(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["downloads-downloads-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/downloads/downloads.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/downloads/downloads.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n        Downloads\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n        <ion-row class=\"align-items-stretch\">\n            <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngFor=\"let video of downloads\">\n              <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-margin-bottom\" (click)=\"openPdf(video.file_url)\">\n                <!--<video width=\"100%\" height=\"100%\" controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\">-->\n                <!--<source  src=\"https://s3.wasabisys.com/churchbase.site/churchchurch-site/mov_bbb.mp4\" type=\"video/mp4\">-->\n                <!--</video>-->\n                <div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"video.file_type !=='pdf' \" >\n                  <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"100%\" *ngIf=\"video.file_type === 'ifram'\"\n                          [src]=\"video.file_url\"\n                          frameborder=\"0\" allowfullscreen=\"\">\n                  </iframe>\n                          <video *ngIf=\"video.file_type === 'video'\" width=\"100%\" height=\"100%\" controls=\"controls\">\n                            <source  [src]=\"video.file_url\" type=\"video/mp4\">\n                          </video>\n                          <audio controls *ngIf=\"video.file_type === 'audio'\">\n                            <source [src]=\"video.file_url\"\n                                    type=\"audio/ogg\">\n                            <source [src]=\"video.file_url\"\n                                    type=\"audio/mpeg\">\n                            Your browser does not support the audio element.\n                        </audio>\n                </div>\n                <ion-card-content>\n                  <ion-card-title class=\"heading4\">{{video.file_name}}</ion-card-title>\n                  <p><b>{{moment(video.created_at).format('LL')}}</b></p>\n                  <p *ngIf=\"video.file_description != ''\">{{video.file_description}}</p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n        </ion-row>\n    </div>\n</div>\n</ion-content>\n<!-- <app-footer-mobile></app-footer-mobile> -->"

/***/ }),

/***/ "./src/app/downloads/downloads.module.ts":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.module.ts ***!
  \***********************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloads.page */ "./src/app/downloads/downloads.page.ts");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");









var routes = [
    {
        path: '',
        component: _downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]
    }
];
var DownloadsPageModule = /** @class */ (function () {
    function DownloadsPageModule() {
    }
    DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"]
            ],
            declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]],
            providers: [src_services_download_service__WEBPACK_IMPORTED_MODULE_7__["DownloadService"]]
        })
    ], DownloadsPageModule);
    return DownloadsPageModule;
}());



/***/ }),

/***/ "./src/app/downloads/downloads.page.scss":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/downloads/downloads.page.ts":
/*!*********************************************!*\
  !*** ./src/app/downloads/downloads.page.ts ***!
  \*********************************************/
/*! exports provided: DownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPage", function() { return DownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

















var DownloadsPage = /** @class */ (function () {
    function DownloadsPage(ft, file, platform, dowloadService, dom, loader, location, storage, toast, event_provider, documentviewer, fileOpener, iab, common) {
        this.ft = ft;
        this.file = file;
        this.platform = platform;
        this.dowloadService = dowloadService;
        this.dom = dom;
        this.loader = loader;
        this.location = location;
        this.storage = storage;
        this.toast = toast;
        this.event_provider = event_provider;
        this.documentviewer = documentviewer;
        this.fileOpener = fileOpener;
        this.iab = iab;
        this.common = common;
        this.downloads = [];
        this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
        this.isUserLoggedIn = false;
        this.options = {
            closebuttoncaption: "Close",
            closebuttoncolor: "#FFFFFF",
            disallowoverscroll: "no",
            hidenavigationbuttons: "no",
            toolbar: "yes",
            toolbarposition: "top",
            location: "yes",
        };
    }
    DownloadsPage.prototype.ngOnInit = function () {
    };
    DownloadsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getUser();
        this.loader.presentLoading().then(function () {
            // if(this.isUserLoggedIn && this.account_donor_id) {
            // api/Builder/churchs/favorite/device-fca134-e1ee3e-1a1c88-03c593-898db5/en: 
            _this.dowloadService.getDownloads(_this.device_id).subscribe(function (res) {
                if (res.status) {
                    _this.downloads = res.favorites;
                    _this.downloads.forEach(function (item) {
                        item['file_url'] = item['file_url'];
                        // item['file_url'] = this.dom.bypassSecurityTrustResourceUrl(item['file_url']);
                    });
                }
                else {
                    _this.toast.presentToastWithOptions('No download exist for this user', 'Sorry', 'warning');
                }
                _this.loader.stopLoading();
            });
            // } else {
            //   this.loader.stopLoading();
            //   this.toast.presentToastWithOptions('User must be logged in' , 'Sorry' , 'warning')
            // }
        });
    };
    DownloadsPage.prototype.getUser = function () {
        var _this = this;
        // Getting User from local storage
        this.storage.get('user').then(function (res) {
            if (res != null && res != 'guest') {
                _this.isUserLoggedIn = true;
                _this.account_donor_id = res.user.id;
                _this.auth = res.auth;
            }
        });
        this.device_id = localStorage.getItem('device_id');
    };
    DownloadsPage.prototype.bypassUrl = function (url) {
        return this.dom.bypassSecurityTrustResourceUrl(url);
    };
    DownloadsPage.prototype.openPdf = function (newBypassLink) {
        var _this = this;
        //this.loader.presentLoading();
        //console.log('clickedddddd', newBypassLink);
        if (this.platform.is('cordova')) {
            var path = this.file.dataDirectory;
            var transfer = this.ft.create();
            // console.log('trnasfer created: ', transfer);
            transfer.download(newBypassLink, path + "myfile.pdf").then(function (res) {
                //  console.log('response from download: ', res);
                var url2 = res.toURL();
                // console.log('to url is: ', url2);
                if (_this.platform.is('ios' || false)) {
                    _this.documentviewer.viewDocument(encodeURI(url2), 'application/pdf', {});
                }
                else if (_this.platform.is('android')) {
                    // console.log('inside the esle: ');
                    _this.fileOpener.open(url2, 'application/pdf');
                }
            });
        }
        else {
            this.iab.create(newBypassLink, '_blank', this.options);
        }
    };
    DownloadsPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    DownloadsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Download'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    DownloadsPage.ctorParameters = function () { return [
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
        { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__["DocumentViewer"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__["FileOpener"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] }
    ]; };
    DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! raw-loader!./downloads.page.html */ "./node_modules/raw-loader/index.js!./src/app/downloads/downloads.page.html"),
            styles: [__webpack_require__(/*! ./downloads.page.scss */ "./src/app/downloads/downloads.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"], src_services_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_14__["DocumentViewer"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__["FileOpener"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])
    ], DownloadsPage);
    return DownloadsPage;
}());



/***/ })

}]);
//# sourceMappingURL=downloads-downloads-module-es5.js.map