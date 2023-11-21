(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sermon-notes-detail-sermon-notes-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sermon-notes-detail/sermon-notes-detail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sermon-notes-detail/sermon-notes-detail.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\" routerLink=\"/sermon-notes\" routerDirection=\"root\"></ion-icon>&nbsp;\n            {{'SERMONS.sermon_note_detail' | translate}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content *ngIf=\"note_detail\">\n    <!-- <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <h2 class=\"heading2\" *ngIf=\"note_detail\">{{note_detail.title[0]}}</h2>\n            </div> -->\n            <!--  DESCRIPTION-->\n            <div class=\"font-weight-normal event-detail-content\" [innerHTML]=\"inner_html_content\"></div>\n            <!-- <iframe src=\"https://s4374.churchbase.site/sermonnotes/new-normal-2-new-spiritual-life/\" height=\"100%\" width=\"100%\"></iframe> -->\n            <!-- <iframe #iframe id=\"iframe\" [src]=\"frame_link\" \n                frameBorder=\"0\" \n                width=\"100%\" \n                height=\"100%\" \n                ></iframe> -->\n            <!--  FOLLOW US-->\n            <ion-card class=\"ionCard ionCard--mobile ion-margin-bottom\">\n                <ion-card-header>\n                    <ion-card-title class=\"heading4\">{{'SERMONS.follow_us' | translate}}</ion-card-title>\n                </ion-card-header>\n                <hr class=\"ionCard__divider\">\n                <ion-card-content style=\"padding-bottom: 0;\">\n                    <ul class=\"list-inline\">\n                        <li class=\"list-inline-item\">\n                            <ion-icon (click)=\"copyLink()\" name=\"copy\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a [href]=\"fbUrl\" target=\"_blank\">\n                                <ion-icon name=\"logo-facebook\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a [href]=\"twitterUrl\" target=\"_blank\">\n                                <ion-icon name=\"logo-twitter\" slot=\"start\" class=\"text-light-gray\" size=\"large\"></ion-icon>\n                            </a>\n                        </li>\n                    </ul>\n                </ion-card-content>\n            </ion-card>\n        <!-- </div>\n    </div> -->\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n\n\n"

/***/ }),

/***/ "./src/app/sermon-notes-detail/sermon-notes-detail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sermon-notes-detail/sermon-notes-detail.module.ts ***!
  \*******************************************************************/
/*! exports provided: SermonNotesDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonNotesDetailPageModule", function() { return SermonNotesDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sermon_notes_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sermon-notes-detail.page */ "./src/app/sermon-notes-detail/sermon-notes-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _sermon_notes_detail_page__WEBPACK_IMPORTED_MODULE_6__["SermonNotesDetailPage"]
    }
];
var SermonNotesDetailPageModule = /** @class */ (function () {
    function SermonNotesDetailPageModule() {
    }
    SermonNotesDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sermon_notes_detail_page__WEBPACK_IMPORTED_MODULE_6__["SermonNotesDetailPage"]]
        })
    ], SermonNotesDetailPageModule);
    return SermonNotesDetailPageModule;
}());



/***/ }),

/***/ "./src/app/sermon-notes-detail/sermon-notes-detail.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/sermon-notes-detail/sermon-notes-detail.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-detail-content {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3Nlcm1vbi1ub3Rlcy1kZXRhaWwvc2VybW9uLW5vdGVzLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nlcm1vbi1ub3Rlcy1kZXRhaWwvc2VybW9uLW5vdGVzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VybW9uLW5vdGVzLWRldGFpbC9zZXJtb24tbm90ZXMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1kZXRhaWwtY29udGVudHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59IiwiLmV2ZW50LWRldGFpbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sermon-notes-detail/sermon-notes-detail.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sermon-notes-detail/sermon-notes-detail.page.ts ***!
  \*****************************************************************/
/*! exports provided: SermonNotesDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonNotesDetailPage", function() { return SermonNotesDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










// import {Events} from '@ionic/angular';



var SermonNotesDetailPage = /** @class */ (function () {
    function SermonNotesDetailPage(idService, route, loader, storage, sermonsService, router, eventsService, apiService, toast, 
    // public events: Events,
    location, dom, translate) {
        var _this = this;
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.toast = toast;
        this.location = location;
        this.dom = dom;
        this.translate = translate;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    SermonNotesDetailPage.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : '';
        this.pubDate = this.route.snapshot.paramMap.get('pubDate') ? this.route.snapshot.paramMap.get('pubDate') : '';
        this.sermon_url = this.route.snapshot.paramMap.get('url') ? this.route.snapshot.paramMap.get('url') : '';
        this.page_id = this.route.snapshot.paramMap.get('page_id') ? this.route.snapshot.paramMap.get('page_id') : '';
        this.note_id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
        this.ch_id = this.route.snapshot.paramMap.get('ch') ? this.route.snapshot.paramMap.get('ch') : '';
        this.is_wordpress_enable = this.route.snapshot.paramMap.get('local') ? this.route.snapshot.paramMap.get('local') : 'false';
        if (this.is_wordpress_enable === 'true') {
            this.is_wordpress_enable = 'true';
            this.getDBNote();
        }
        else if (this.is_wordpress_enable === 'false') {
            this.is_wordpress_enable = 'false';
            if (this.sermon_url) {
                this.getNotes(this.sermon_url);
            }
        }
    };
    SermonNotesDetailPage.prototype.getDBNote = function () {
        var _this = this;
        var self = this;
        var body = {
            church_id: this.ch_id,
            note_id: this.note_id
        };
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getCMSSermonNote(body).subscribe(function (res) {
                // ============ parsing xml into JSON format =============//
                // let parseString = require('xml2js').parseString;
                // parseString(res, function (err, result) {
                //     let md5 = require('md5');
                //     let data = result.rss.channel[0].item;
                //     let filtered = data.filter(x => md5(x.title[0]) === self.title);
                //     filtered = filtered.filter(x => md5(x.pubDate[0]) === self.pubDate);
                //     self.note_detail = filtered[0];
                //     // ===== assigning link for ifram ==== /
                //     self.frame_link = self.dom.bypassSecurityTrustResourceUrl(self.note_detail.link[0]);
                //     let link = self.note_detail.link[0];
                //     link = link.split('//')[1];
                //     self.fbUrl = 'https://facebook.com/sharer/sharer.php?u=' + link;
                //     self.twitterUrl = 'https://twitter.com/intent/tweet?text=' + link;
                //     self.loader.stopLoading();
                // });
                var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                // if(data ArrayType)
                self.note_detail = res.sermons;
                self.note_detail['description'] = self.note_detail.content;
                self.note_detail['pubDate'] = self.note_detail.date;
                self.title = self.note_detail.title;
                self.pubDate = self.note_detail.pubDate;
                // ===== assigning link for ifram ==== /
                self.frame_link = self.dom.bypassSecurityTrustResourceUrl(self.note_detail.link);
                var link = self.note_detail.link;
                link = link ? link.split('//')[1] : '';
                var jq_code = self.note_detail.content.split('<script>');
                jq_code.forEach(function (element, index) {
                    if (index != 0) {
                        _this.createJqueryCode(element);
                    }
                });
                self.inner_html_content = self.dom.bypassSecurityTrustHtml(self.note_detail.content);
                console.log(self.title);
                self.fbUrl = 'https://facebook.com/sharer/sharer.php?u=' + link;
                self.twitterUrl = 'https://twitter.com/intent/tweet?text=' + link;
                self.loader.stopLoading();
            }, function (err) {
                var message = err.message;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                _this.loader.stopLoading();
            });
        });
    };
    SermonNotesDetailPage.prototype.getNotes = function (url) {
        var _this = this;
        var self = this;
        this.loader.presentLoading().then(function () {
            _this.sermonsService.getSermonNotes(url).subscribe(function (res) {
                // ============ parsing xml into JSON format =============//
                // let parseString = require('xml2js').parseString;
                // parseString(res, function (err, result) {
                //     let md5 = require('md5');
                //     let data = result.rss.channel[0].item;
                //     let filtered = data.filter(x => md5(x.title[0]) === self.title);
                //     filtered = filtered.filter(x => md5(x.pubDate[0]) === self.pubDate);
                //     self.note_detail = filtered[0];
                //     // ===== assigning link for ifram ==== /
                //     self.frame_link = self.dom.bypassSecurityTrustResourceUrl(self.note_detail.link[0]);
                //     let link = self.note_detail.link[0];
                //     link = link.split('//')[1];
                //     self.fbUrl = 'https://facebook.com/sharer/sharer.php?u=' + link;
                //     self.twitterUrl = 'https://twitter.com/intent/tweet?text=' + link;
                //     self.loader.stopLoading();
                // });
                var md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                var data = res.result.channel.item;
                // if(data ArrayType)
                var filtered = data.filter(function (x) { return md5(x.title) === self.title; });
                filtered = filtered.filter(function (x) { return md5(x.pubDate) === self.pubDate; });
                self.note_detail = filtered[0];
                // ===== assigning link for ifram ==== /
                self.frame_link = self.dom.bypassSecurityTrustResourceUrl(self.note_detail.link);
                var link = self.note_detail.link;
                link = link.split('//')[1];
                var jq_code = self.note_detail.content.split('<script>');
                jq_code.forEach(function (element, index) {
                    if (index != 0) {
                        _this.createJqueryCode(element);
                    }
                });
                self.inner_html_content = self.dom.bypassSecurityTrustHtml(self.note_detail.content);
                self.fbUrl = 'https://facebook.com/sharer/sharer.php?u=' + link;
                self.twitterUrl = 'https://twitter.com/intent/tweet?text=' + link;
                self.loader.stopLoading();
            }, function (err) {
                var message = err.message;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                _this.loader.stopLoading();
            });
        });
    };
    SermonNotesDetailPage.prototype.createJqueryCode = function (code) {
        if (code.includes("jQuery('.field_fill")) {
            var new_code_1 = code.split('.field_fill');
            new_code_1 = new_code_1[1].split("'");
            $(document).ready(function () {
                $('.field_fill' + new_code_1[0]).keyup(function () {
                    localStorage.setItem('textinput_fill' + new_code_1[0], $(this).val());
                    var value2 = $(this).width();
                    $(this).css('width', localStorage.setItem('width_fill' + new_code_1[0], ($(this).val().length * 14).toString()));
                    $(this).css('width', localStorage.getItem('width_fill' + new_code_1[0]));
                });
                $('.field_fill' + new_code_1[0]).each(function () {
                    var key = $(this).attr('id');
                    var value2 = $(this).width();
                    if (localStorage.getItem('textinput_fill' + new_code_1[0])) {
                        $(this).val(localStorage.getItem('textinput_fill' + new_code_1[0]));
                    }
                    $(this).css('width', localStorage.getItem('width_fill' + new_code_1[0]));
                });
                $(this).keyup(function () {
                    $(this).css('width', localStorage.getItem('width_fill' + new_code_1[0]));
                });
            });
        }
    };
    // to copy link in clipboard
    SermonNotesDetailPage.prototype.copyLink = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.note_detail.link[0];
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.link_copied_to_clipboard : 'Link Copied to Clipboard'), (this.alertMessage ? this.alertMessage.LinkCopied : 'Link Copied'), 'success');
    };
    // navigating to back page
    SermonNotesDetailPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    SermonNotesDetailPage.ctorParameters = function () { return [
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    SermonNotesDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sermon-notes-detail',
            template: __webpack_require__(/*! raw-loader!./sermon-notes-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/sermon-notes-detail/sermon-notes-detail.page.html"),
            styles: [__webpack_require__(/*! ./sermon-notes-detail.page.scss */ "./src/app/sermon-notes-detail/sermon-notes-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_2__["IdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_6__["SermonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], SermonNotesDetailPage);
    return SermonNotesDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=sermon-notes-detail-sermon-notes-detail-module-es5.js.map