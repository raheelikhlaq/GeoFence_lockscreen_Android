(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-stream-live-stream-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/live-stream/live-stream.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/live-stream/live-stream.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Live Stream')\"\n                     class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n            <ion-icon name=\"arrow-back\" routerDirection=\"root\"></ion-icon>&nbsp;\n            {{'LIVE_STREAM.livestream' | translate}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Live Stream')\" slot=\"start\">{{'LIVE_STREAM.livestream' | translate}}</p>\n\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper\" *ngIf=\"!liveStreamData\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\">\n                <h4 class=\"heading4\">{{'LIVE_STREAM.nolivestream_message' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" *ngIf=\"liveStreamData\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom hide-mobile\">\n                <ion-title class=\"heading2\">{{'LIVE_STREAM.livestream' | translate}}</ion-title>\n            </div>\n            <div class=\"mb-30\">\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeLg]=\"8\">\n                        <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile LiveStreamLayer\">\n                            <div class=\"ion-text-right ion-padding\">\n                                <ion-button [class.activeBtn]=\"common.castingActive\" (click)=\"startCasting(liveStream.url , false)\" class=\"commonBtn commonBtn--gray commonBtn--fullRound commonBtn--small\">\n                                    <ion-icon style=\"font-size: 24px;\" src=\"../../../assets/img/cast.svg\"></ion-icon>\n                                </ion-button>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"isStarted\">\n                                <!-- <div class=\"layer\" (click)=\"playYouTubeVideo(liveUrl)\"></div> -->\n                                <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"375\" frameborder=\"0\" *ngIf=\"liveStream.live_stream_type == 'video'\"\n                                        [src]=\"liveUrl\" allow=\"autoplay;\" allowFullScreen=\"false\"\n                                        allowTransparency=\"true\" allow=\"encrypted-media\" allowAutoPlay=\"true\"\n                                        ></iframe>\n                                <div *ngIf=\"soundcloud && liveStream.live_stream_type == 'audio'\">\n                                    <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" [src]=\"liveUrl\"></iframe>\n                                </div>\n\n                                <app-audio-player [page_id]=\"page_id\" [audioData]=\"liveStreamData\" [fromPage] = \"'live_streaming'\" [method]=\"'livestream'\" *ngIf=\"!soundcloud && liveStream.live_stream_type == 'audio'\" [audioUrl]=\"liveUrl\" [isSermon]=\"false\"  >\n                                </app-audio-player>\n\n                            </div>\n                            <img [src]=\"streamPoster\" alt=\"poster\" width=\"100%\" height=\"250\" *ngIf=\"!isStarted\"/>\n                            <ion-card-content>\n                                <ion-card-title class=\"heading4\">{{'LIVE_STREAM.livestreaming' | translate}}</ion-card-title>\n                                <p *ngIf=\"liveStream.allow_scheduling != '0'\">{{'LIVE_STREAM.started_message' | translate}} {{liveStream.schedule }} </p>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-col>\n                    <ion-col [size]=\"12\" [sizeLg]=\"4\" *ngIf=\"comments.length != 0\">\n                        <ion-card class=\"ionCard\" *ngIf=\"isStarted\">\n                            <ion-card-header class=\"hide-mobile\">\n                                <ion-card-title class=\"heading4\">{{'LIVE_STREAM.livechat' | translate}}</ion-card-title>\n                            </ion-card-header>\n                            <hr class=\"ionCard__divider hide-mobile\">\n                            <ion-card-content class=\"chat-card-body\">\n                                <ion-list lines=\"none\" class=\"ion-no-margin ion-no-padding\">\n                                    <ion-item *ngFor=\"let comment of comments\" class=\"ionMedia\">\n                                        <div class=\"ionMedia__media\">\n                                            <ion-avatar slot=\"start\">\n                                                <img src=\"../../assets/img/user_icon.png\">\n                                            </ion-avatar>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h3 class=\"ionMedia__heading\">{{comment.first_last_name}}</h3>\n                                            <p> {{comment.comments}} </p>\n                                            <p style=\" font-size: x-small\" class=\"ionMedia__text\">{{comment.comment_time}}</p>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-list>\n                            </ion-card-content>\n                            <!--chat inputbox for mobile-->\n                            <div class=\"chat-card-footer hide-mobile\" *ngIf=\"isStarted\">\n                                <ion-item class=\"inputField inputField--chatBox\" lines=\"none\">\n                                    <ion-avatar slot=\"start\">\n                                        <img src=\"../../assets/img/user_icon.png\">\n                                    </ion-avatar>\n                                    <ion-input [(ngModel)]=\"comment_input\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\" inputmode=\"text\"\n                                               placeholder=\"{{'LIVE_STREAM.commentplaceholder' | translate}}\"></ion-input>\n                                               <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event)\">\n                                                <ion-icon name=\"md-happy\"></ion-icon>\n                                            </ion-button> -->\n                                    <ion-button (click)=\"createComment()\" class=\"commonBtn--transparent text-gray\">\n                                        <ion-icon name=\"send\"></ion-icon>\n                                    </ion-button>\n                                </ion-item>\n                            </div>\n                            <!--chat inputbox for mobile-->\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n<!--chat inputbox for mobile-->\n<!--<div class=\"chat-card-footer show-mobile\" *ngIf=\"isStarted\">\n    <ion-item class=\"inputField inputField--chatBox\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"../../assets/img/user_icon.png\">\n        </ion-avatar>\n        <ion-input [(ngModel)]=\"comment_input\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\" inputmode=\"text\"\n                   placeholder=\"{{'LIVE_STREAM.commentplaceholder' | translate}}\"></ion-input>\n                -->   <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event)\">\n                    <ion-icon name=\"md-happy\"></ion-icon>\n                </ion-button> -->\n        <!--<ion-button (click)=\"createComment()\" class=\"commonBtn--transparent text-gray\">\n            <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n    </ion-item>\n</div>-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var AppService = /** @class */ (function () {
    function AppService() {
    }
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
    AppService.prototype.getGroupsTimeFormat = function (date) {
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
    };
    AppService.prototype.getTimeFormat = function (time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    };
    AppService.prototype.getDateFormat = function (date) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    };
    AppService.prototype.getDateTimeFormat = function (dateAndTime) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
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
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/live-stream/live-stream.module.ts":
/*!***************************************************!*\
  !*** ./src/app/live-stream/live-stream.module.ts ***!
  \***************************************************/
/*! exports provided: LiveStreamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamPageModule", function() { return LiveStreamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _live_stream_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live-stream.page */ "./src/app/live-stream/live-stream.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");










var routes = [
    {
        path: '',
        component: _live_stream_page__WEBPACK_IMPORTED_MODULE_6__["LiveStreamPage"]
    }
];
var LiveStreamPageModule = /** @class */ (function () {
    function LiveStreamPageModule() {
    }
    LiveStreamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_live_stream_page__WEBPACK_IMPORTED_MODULE_6__["LiveStreamPage"]],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]]
        })
    ], LiveStreamPageModule);
    return LiveStreamPageModule;
}());



/***/ }),

/***/ "./src/app/live-stream/live-stream.page.scss":
/*!***************************************************!*\
  !*** ./src/app/live-stream/live-stream.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.chat-card-body {\n  height: 300px;\n  overflow-y: auto;\n  border-bottom: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 992px) {\n  .chat-card-body {\n    padding: 0;\n    height: auto;\n    border: none;\n  }\n}\n@media screen and (max-width: 992px) {\n  .chat-card-footer {\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    box-shadow: 0 0 10px 0 rgba(38, 36, 35, 0.14);\n  }\n}\n.activeBtn {\n  --color:#ffffff ;\n  --color-activated: #ffffff;\n  --color-hover: #ffffff;\n  --color-focused: #ffffff;\n  --background: var(--primary-color, #302F34);\n  --border-color:var(--primary-color, #302F34);\n  --background-hover:var(--primary-color, #302F34);\n  --background-activated: var(--primary-color, #302F34);\n  --background-focused: var(--primary-color, #302F34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2xpdmUtc3RyZWFtL2xpdmUtc3RyZWFtLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zdGRpbiIsInNyYy9hcHAvbGl2ZS1zdHJlYW0vbGl2ZS1zdHJlYW0ucGFnZS5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3NyYy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsV0FBQTtBQWtGQSxVQUFBO0FBaUZBLFVBQUE7QUE4QkEsZ0JBQUE7QUFhQSxZQUFBO0FBV0EsbUJBQUE7QUFNQSxTQUFBO0FDbE9BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDT0Y7QUNtUUU7RUYvUUY7SUFPSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNTRjtBQUNGO0FDNFBFO0VGblFGO0lBRUksNkJBQUE7SUFDQSw0QkFBQTtJQUNBLDZDQUFBO0VDVUY7QUFDRjtBRFJBO0VBS0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLG1EQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9saXZlLXN0cmVhbS9saXZlLXN0cmVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgdmFyaWFibGVzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogQ29sb3JzICovXG4vL2RlZmF1bHQgcHJpbWFyeS1jb2xvciBpcyAjMzAyRjM0XG5cbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4kZGVmYXVsdC1wcmltYXJ5LWNvbG9yOiAjMzAyRjM0O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGhlYWRlci1iZy1jb2xvcjogI0Q4RDhEODtcbiRoZWFkaW5nLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRoZWFkaW5nLWNvbG9yLWxpZ2h0OiAjMzgzNzNDO1xuJGdyYXktbGlnaHQ6ICNCQUJBQkE7XG4kaGFsZi13aGl0ZTogI0YxRjFGMTtcbiRibHVlLWNvbG9yOiAjNDI2N0IyO1xuJGRhcmstZ3JheS1jb2xvcjogIzI5MjkyOTtcbiRibGFjay0ybmQ6ICMyMDIwMjA7XG4kYm90dG9tLWZvb3Rlci1iZy1jb2xvcjogIzI1MjQyNztcbiRib3R0b20tZm9vdGVyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdHJhbnNwYXJlbnQtY29sb3I6ICMwMDAwMDAwMDtcbiRmb290ZXItYmctY29sb3I6ICRkZWZhdWx0LXByaW1hcnktY29sb3I7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRtYWluLWJnLWNvbG9yOiAkd2hpdGUtY29sb3I7XG5cbiRncmF5LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuXG4vL25ldyBwbGF5ZXIgdmFyaWFibGVzXG5cbiRwbGF5ZXItcHJpbWFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXByaW1hcnktY29sb3IsICNGMkYyRjIpO1xuJHBsYXllci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1zZWNvbmRhcnktY29sb3IsICMyMzIzMjMpO1xuJHBsYXllci10ZXh0LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1jb2xvciwgIzExNkVGRik7XG4kcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMwMDAwMDApO1xuJHBsYXllci1idXR0b24tY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tY29sb3IsICMwQTY1RkYpO1xuJHBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvciwgIzI2MzE0MSk7XG5cbiRjb2xvcnM6IChcbiAgICAgICAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxuICAgICAgICAnaGVhZGVyLWJnLWNvbG9yJzogJGhlYWRlci1iZy1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1iZy1jb2xvcic6ICRmb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLWJnLWNvbG9yJzogJGJvdHRvbS1mb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLXRleHQtY29sb3InOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWhlYWRpbmctY29sb3InOiAkZm9vdGVyLWhlYWRpbmctY29sb3IsXG4gICAgICAgICdtYWluLWJnLWNvbG9yJzogJG1haW4tYmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yJzogJGhlYWRpbmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yLWxpZ2h0JzogJGhlYWRpbmctY29sb3ItbGlnaHQsXG4gICAgICAgICdncmF5LWNvbG9yJzokZ3JheS1jb2xvcixcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAkZ3JheS1saWdodCxcbiAgICAgICAgJ2RhcmstZ3JheSc6ICRkYXJrLWdyYXktY29sb3IsXG4gICAgICAgICdoYWxmLXdoaXRlJzokaGFsZi13aGl0ZSxcbiAgICAgICAgJ2JsdWUtY29sb3InOiRibHVlLWNvbG9yLFxuICAgICAgICAnYmxhY2stMm5kJzogJGJsYWNrLTJuZCxcbiAgICAgICAgJ3RyYW5zcGFyZW50JzogJHRyYW5zcGFyZW50LWNvbG9yLFxuKTtcblxuLy8gQm9keSBmb250XG5cbiRib2R5LWZvbnQtc2l6ZTogMThweDtcbiR4LXNtYWxsLWJvZHktZm9udC1zaXplOiAxNHB4O1xuJGJvZHktZm9udC1zdHlsZTogbm9ybWFsO1xuJGJvZHktZm9udC12YXJpYW50OiBub3JtYWw7XG4kYm9keS1mb250LXdlaWdodDogNjAwO1xuJGxpbmUtaGVpZ2h0OiAxLjY7XG5cbi8vdHlwb2dyYXBoeVxuJGhlYWRpbmctb25lLXNpemU6MzZweDtcbiRoZWFkaW5nLXR3by1zaXplOiAyNHB4O1xuJGhlYWRpbmctdHdvLW1kLXNpemU6IDM2cHg7XG4kaGVhZGluZy10aHJlZS1zaXplOiAxNXB4O1xuJGhlYWRpbmctZm91ci1zaXplOjE0cHg7XG4vLyRoZWFkaW5nLWZpeC1zaXplOjtcbiRoZWFkaW5nLXNpeC1zaXplOiAxNHB4O1xuXG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuJGZvbnQtd2VpZ2h0czogKFxuICAgICAgICAnbGlnaHQnOiAzMDAsXG4gICAgICAgICdub3JtYWwnOjQwMCxcbiAgICAgICAgJ21lZGl1bSc6IDUwMCxcbiAgICAgICAgJ3NlbWlCb2xkJzogNjAwLFxuICAgICAgICAnYm9sZCc6IDcwMCxcbik7XG5cbi8qIGNhcmRzICovXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIC4xNCk7XG5cbi8vQnV0dG9uc1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XG4kYnRuLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi1wYWRkaW5nLXk6IDEwcHg7XG4kYnRuLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcDogNHB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbTogNHB4O1xuJGJ0bi1mb250LXNpemU6IDE0cHg7XG4kYnRuLWxpbmUtaGVpZ2h0OiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4kYnRuLXRleHQtdHJhbnNmb3JtOiAkdGV4dC1sb3dlcmNhc2U7XG4kYnRuLWhlaWdodDogNDBweDtcbiRidG4tbWluLXdpZHRoOiA5MHB4O1xuXG4vL2J1dHRvbnMtd2hpdGVcbiRidG4td2hpdGUtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtaG92ZXI6ICR3aGl0ZS1jb2xvcjtcblxuLy8vYnV0dG9ucy13aGl0ZS1vdXRsaW5lXG4kYnRuLXdoaXRlLW91dGxpbmUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cbi8vL2dyYXlcbiRidG4tZ3JheS10ZXh0LWNvbG9yOiAkZ3JheS1jb2xvcjtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1ib3JkZXItY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtaG92ZXI6ICRoYWxmLXdoaXRlO1xuXG4vLy9kYXJrXG4kYnRuLWRhcmstdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vL2JsdWVcbiRidG4tYmx1ZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYm9yZGVyLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkYmx1ZS1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudFxuJGJ0bi10cmFuc3BhcmVudC10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50IGRhcmstb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLXRleHQtY29sb3I6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG5cbi8vL2JsYWNrIG91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cbi8vQnV0dG9uIGxhcmdlXG4kYnRuLXBhZGRpbmctc3RhcnQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kLWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcC1sZzogNnB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbS1sZzogNnB4O1xuJGJ0bi1mb250LXNpemUtbGc6ICRidG4tZm9udC1zaXplO1xuJGJ0bi1saW5lLWhlaWdodC1sZzogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAzMHB4O1xuJGJ0bi1oZWlnaHQtbGc6IDQ4cHg7XG5cbi8qIEZvcm1zICovXG4kaW5wdXQtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgzNiwgMTEzLCAxODUsIDAuMSk7XG4kaW5wdXQtZm9udC1zaXplOiAyOHB4O1xuJHgtc21hbGwtaW5wdXQtZm9udC1zaXplOiAkeC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTtcbiRpbnB1dC1ib3JkZXI6IG5vbmU7XG4kaW5wdXQtcmFkaXVzOiA0MHB4O1xuJGlucHV0LWJvcmRlci1mb2N1czogbm9uZTtcbiRpbnB1dC1oZWlnaHQ6IDYwcHg7XG4kaW5wdXQtcGFkZGluZzogMCAxNnB4O1xuJGlucHV0LWljb24td2lkdGg6IDIwcHg7XG4kaW5wdXQtaWNvbi1oZWlnaHQ6ICRpbnB1dC1pY29uLXdpZHRoO1xuXG4vL2NoZWNrYm94XG4kY2hlY2tib3gtd2lkdGg6IDI0cHg7XG4kY2hlY2tib3gtaGVpZ2h0OiAkY2hlY2tib3gtd2lkdGg7XG4kY2hlY2tib3gtc21hbGwtd2lkdGg6IDIwcHg7XG4kY2hlY2tib3gtc21hbGwtaGVpZ2h0OiAkY2hlY2tib3gtc21hbGwtd2lkdGg7XG5cbi8vdGV4dFxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbi8vY3JlZGl0IGNhcmRcblxuJGNyZWRpdC1jYXJkLWljb24td2lkdGg6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1oZWlnaHQ6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1yaWdodDogcmlnaHQ7XG4kY3JlZGl0LWNhcmQtaWNvbi1sZWZ0OiBsZWZ0O1xuXG4vKiBIZWFkZXIgSWNvbiAqL1xuXG4kaGVhZGVyLWljb24td2lkdGg6IDMwcHg7XG4kaGVhZGVyLWljb24taGVpZ2h0OiAzMHB4O1xuJGhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiRoZWFkZXItbG9nby1oZWlnaHQ6IDQ4cHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby1oZWlnaHQ6IDQwcHg7XG4keC1zbWFsbC1oZWFkZXItaWNvbi13aWR0aDogMjVweDtcbiRoZWFkZXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtdXBwZXJjYXNlO1xuJGhlYWRlci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8qIFNpZGViYXIgKi9cblxuJHNpZGViYXItbG9nby13aWR0aDogMjAwcHg7XG4kc2lkZWJhci1sb2dvLWhlaWdodDogMTYwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtc2lkZWJhci1pY29uLXdpZHRoOiAyNXB4O1xuJHNpZGViYXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJHNpZGViYXItbGluay1sYWJlbC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRzaWRlYmFyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC1jYXBpdGFsaXplO1xuJHNpZGViYXItbGluay1sYWJlbC1mb250LXdlaWdodDogNTAwO1xuJHNpZGViYXItaWNvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XG4vKiBwcm9maWxlIGF2YXRhciAqL1xuXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogODBweDtcbiRwcm9maWxlLWltYWdlLWhlaWdodDogJHByb2ZpbGUtaW1hZ2Utd2lkdGg7XG5cblxuLyogdGFicyAqL1xuXG4kdGFicy1iYXItYmctY29sb3I6JHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1idG4tdGV4dC1jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1zaXplOiAxNXB4O1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjoycHggc29saWQgJHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yOiRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS1ib3JkZXItY29sb3I6MnB4IHNvbGlkICRoZWFkaW5nLWNvbG9yO1xuXG5cblxuLy8vIGFwcC1jb250YWluZXItd2lkdGhcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJGNvbnRhaW5lci13aWR0aDogKFxuICAgICAgICAnbGFyZ2UnOiAxMDAlLFxuICAgICAgICAnbWVkaXVtJzogMTAwJSxcbiAgICAgICAgJ3NtYWxsJzogMTAwJSxcbiAgICAgICAgJ3gtc21hbGwnOiAxMDAlLFxuKSAhZGVmYXVsdDtcblxuLy8vIEJyZWFrcG9pbnRzIG1hcFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kbWVkaWEtYnJlYWtwb2ludHM6IChcbiAgICAgICAgJ2xhcmdlJzogMTIwMHB4LFxuICAgICAgICAnbWVkaXVtJzogOTkycHgsXG4gICAgICAgICdzbWFsbCc6IDc2OHB4LFxuICAgICAgICAneC1zbWFsbCc6IDU3NnB4LFxuICAgICAgICAneHgtc21hbGwnOiA0MTRweCxcbikgIWRlZmF1bHQ7XG5cbi8vLyBSZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkwgd2hlcmUgYWxsIGFzc2V0cyBhcmUgc2VydmVkIGZyb21cbi8vLyBAdHlwZSBTdHJpbmdcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2hlbiB1c2luZyBhIENETlxuLy8vICAgJGJhc2UtdXJsOiAnaHR0cDovL2Nkbi5leGFtcGxlLmNvbS9hc3NldHMvJztcbiRiYXNlLXVybDogJ2Fzc2V0cy8nICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3Nhc3MvY29uZmlnXCI7XG4uY2hhdC1jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBAaW5jbHVkZSBtZWRpYS1tZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbi5jaGF0LWNhcmQtZm9vdGVye1xuICBAaW5jbHVkZSBtZWRpYS1tZHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAwLjE0KTtcbiAgfVxufVxuLmFjdGl2ZUJ0bntcbiAgLy8tLWNvbG9yOiNGMUYxRjE7XG4gIC8vLS1iYWNrZ3JvdW5kLWhvdmVyOmJsdWU7XG4gIC8vLS1iYWNrZ3JvdW5kOiBibHVlO1xuXG4gIC0tY29sb3I6I2ZmZmZmZiA7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAtLWNvbG9yLWhvdmVyOiAjZmZmZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYm9yZGVyLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG59IiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmNoYXQtY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jaGF0LWNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jaGF0LWNhcmQtZm9vdGVyIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAwLjE0KTtcbiAgfVxufVxuXG4uYWN0aXZlQnRuIHtcbiAgLS1jb2xvcjojZmZmZmZmIDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tY29sb3ItaG92ZXI6ICNmZmZmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgLS1ib3JkZXItY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgbWl4aW5zLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9mb250IHNpemVcblxuQG1peGluIGZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuQG1peGluIGNsZWFyZml4KCkge1xuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7IC8qIDEgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzO1xuICAvLyBXZWJLaXRcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi8vIFNpemluZyBzaG9ydGN1dHNcbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBGaXJlZm94IDQtMThcbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggMTkrXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6ICN7MC8wfSBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBEcm9wIHNoYWRvd3NcbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5cbi8vIEdSQURJRU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgJHN0YXJ0LXBlcmNlbnQgdG9wLCAkZW5kLXBlcmNlbnQgdG9wLCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgY29sb3Itc3RvcCgkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQpLCBjb2xvci1zdG9wKCRlbmQtY29sb3IgJGVuZC1wZXJjZW50KSk7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgJHN0YXJ0LXBlcmNlbnQsIGxlZnQgJGVuZC1wZXJjZW50LCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogIC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93blxufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkZGVnOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFN0YW5kYXJkLCBJRTEwXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGVmdCwgbGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgkc3RhcnQtY29sb3IpLCBjb2xvci1zdG9wKCRjb2xvci1zdG9wLCAkbWlkLWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICM1NTUsICRvdXRlci1jb2xvcjogIzMzMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMCwgY2VudGVyIGNlbnRlciwgNDYwLCBmcm9tKCRpbm5lci1jb2xvciksIHRvKCRvdXRlci1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCguMjUsICRjb2xvciksIGNvbG9yLXN0b3AoLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsICRjb2xvciksIGNvbG9yLXN0b3AoLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4vLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiByZXNldC1maWx0ZXIoKSB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XG59XG5cbi8vIEFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICR0ZXh0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkdGV4dC1jb2xvciwgMTAlKTtcbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiB2YXJpYW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlci1jb2xvciwgJGJhY2tncm91bmQtaG92ZXIpIHtcbiAgLS1jb2xvcjogI3skY29sb3J9O1xuICAtLWJhY2tncm91bmQ6ICN7JGJhY2tncm91bmR9O1xuICAtLWJvcmRlci1jb2xvcjogI3skYm9yZGVyLWNvbG9yfTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiN7JGJhY2tncm91bmQtaG92ZXJ9O1xuXG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy1zdGFydCwgJGJ0bi1wYWRkaW5nLWVuZCwgJGJ0bi1wYWRkaW5nLXRvcCwgJGJ0bi1wYWRkaW5nLWJvdHRvbSwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYnRuLWhlaWdodCwgJGJ0bi1taW4td2lkdGgpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiN7JGJ0bi1wYWRkaW5nLXN0YXJ0fTtcbiAgLS1wYWRkaW5nLWVuZDogI3skYnRuLXBhZGRpbmctZW5kfTtcbiAgLS1wYWRkaW5nLXRvcDogI3skYnRuLXBhZGRpbmctdG9wfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skYnRuLXBhZGRpbmctYm90dG9tfTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBoZWlnaHQ6ICRidG4taGVpZ2h0O1xuICBtaW4td2lkdGg6ICRidG4tbWluLXdpZHRoO1xufVxuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMYWJlbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICZbaHJlZl0ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMaXN0c1xuXG4vLyBVbnN0eWxlZCBrZWVwcyBsaXN0IGl0ZW1zIGJsb2NrIGxldmVsLCBqdXN0IHJlbW92ZXMgZGVmYXVsdCBicm93c2VyIHBhZGRpbmcgYW5kIGxpc3Qtc3R5bGVcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cblxuLy9tZWRpYSBicmVha3BvaW50c1xuXG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KGxhcmdlKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobWVkaXVtKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludCh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS14eHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/live-stream/live-stream.page.ts":
/*!*************************************************!*\
  !*** ./src/app/live-stream/live-stream.page.ts ***!
  \*************************************************/
/*! exports provided: LiveStreamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveStreamPage", function() { return LiveStreamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _listening_modal_listening_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../listening-modal/listening-modal.component */ "./src/app/listening-modal/listening-modal.component.ts");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/services/ipaddress.service */ "./src/services/ipaddress.service.ts");
/* harmony import */ var src_services_socket_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/services/socket.service */ "./src/services/socket.service.ts");

























var LiveStreamPage = /** @class */ (function () {
    // isStarted = false;
    function LiveStreamPage(route, loader, storage, router, apiService, dom, auth, toast, datePipe, location, appService, analytics, common, event_provider, translate, popoverController, modalController, youtube, geoLocation, device, socket, socket2, ipservice) {
        var _this = this;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.router = router;
        this.apiService = apiService;
        this.dom = dom;
        this.auth = auth;
        this.toast = toast;
        this.datePipe = datePipe;
        this.location = location;
        this.appService = appService;
        this.analytics = analytics;
        this.common = common;
        this.event_provider = event_provider;
        this.translate = translate;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.youtube = youtube;
        this.geoLocation = geoLocation;
        this.device = device;
        this.socket = socket;
        this.socket2 = socket2;
        this.ipservice = ipservice;
        this.comments = [];
        this.streamPoster = '';
        this.liveUrl = 'https://www.youtube.com/embed/FeslT2Gb7Ac?rel=0&amp;controls=0&amp;showinfo=0';
        this.userLoggedIn = false;
        this.isStarted = false;
        this.facebook = false;
        this.page_in_home_tabs = false;
        this.is_youtube_video = false;
        this.soundcloud = false;
        this.country = '';
        this.latitude = '';
        this.longitude = '';
        this.ip = '';
        this.page_title = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
        this.event_provider.chromeCasting.subscribe(function (res) {
            console.log(res);
            if (res.flag == "startCasting" && res.page == "live-stream") {
                console.log(res.value);
                _this.startCasting(res.value, true);
            }
        });
    }
    LiveStreamPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Live Stream'; });
                    this.page_name = app_pages.name;
                    this.page_id = app_pages.id;
                    this.page_title = app_pages.title;
                    this.event_provider.hidefooter(app_pages.remove_listen_live === 'true' ? false : true, 'other');
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
        //this.common.openPagePasswordModal("123456", '');
    };
    // convert local time to UTC time
    LiveStreamPage.prototype.convertLocalToUTC = function (dt) {
        return moment__WEBPACK_IMPORTED_MODULE_15__(dt).utc().format('YYYY-MM-DD HH:mm').toString();
    };
    LiveStreamPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.ipservice.getIpAddress().subscribe(function (res) {
            // console.log('ip ser ice response: ',res);
            _this.ip = res['ip'];
            _this.ipservice.getGEOLocation(_this.ip).subscribe(function (res2) {
                // console.log('response from getgeolocation is: ', res2);
                _this.country = res2['country'];
                _this.latitude = res2['lat'];
                _this.longitude = res2['lon'];
            });
        });
        this.event_provider.page("live-stream");
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        this.event_provider.isHomeEnable.subscribe(function (value) {
            _this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
    };
    LiveStreamPage.prototype.ionViewDidEnter = function () {
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_15__();
        // fetching live stream data
        this.getLatLang();
        this.getLiveStream();
        this.event_provider.hidefooter(true, 'other');
    };
    LiveStreamPage.prototype.getLiveStream = function () {
        var _this = this;
        // fetching live stream data
        this.apiService.liveStream(this.ch_id).subscribe(function (res) {
            if (res.status) {
                _this.liveStream = res.livestream;
                if (_this.liveStream.poster) {
                    _this.streamPoster = _this.liveStream.poster;
                }
                if (_this.liveStream.schedule) {
                    var mytime = moment__WEBPACK_IMPORTED_MODULE_15__(_this.liveStream.schedule);
                    var church_data = JSON.parse(localStorage.getItem('church_data'));
                    if (church_data.church.timezone) {
                        mytime = mytime.tz(church_data.church.timezone);
                    }
                    var time_diff = moment__WEBPACK_IMPORTED_MODULE_15__().utcOffset(); // in minutes
                    if (time_diff != 0) {
                        _this.liveStream.schedule = _this.appService.getDateTimeFormat(mytime);
                    }
                    else {
                        _this.liveStream.schedule = _this.appService.getDateTimeFormat(mytime);
                    }
                }
                _this.comments = res.comments;
                _this.comments.map(function (item) {
                    try {
                        item.comments = JSON.parse(item.comments);
                    }
                    catch (_a) {
                        item.comments = item.comments;
                    }
                    var mytime = moment__WEBPACK_IMPORTED_MODULE_15__(item.comment_time);
                    var church_data = JSON.parse(localStorage.getItem('church_data'));
                    if (church_data.church.timezone) {
                        mytime = mytime.tz(moment__WEBPACK_IMPORTED_MODULE_15__["tz"].guess());
                    }
                    var time_diff = moment__WEBPACK_IMPORTED_MODULE_15__().utcOffset(); // in minutes
                    if (time_diff != 0) {
                        item.comment_time = _this.appService.getDateTimeFormat(mytime);
                    }
                    else {
                        item.comment_time = _this.appService.getDateTimeFormat(item.comment_time);
                    }
                });
                _this.is_youtube_video = false;
                // LIVESTREAM VIDEO URL YOUTUBE, VIMEO DETECTION AND URL EMBEDDING
                if (_this.liveStream.url != '' && _this.liveStream.live_stream_type === 'video') {
                    if (_this.liveStream.url.includes('facebook.com')) {
                        // let matches = this.liveStream.url.match(/(\d*)/g);
                        // let fb_video_id = '';
                        // matches.forEach(element => {
                        //     if(element != ''){
                        //         fb_video_id = element;
                        //     }
                        // });
                        _this.liveStream.url = "https://www.facebook.com/plugins/video.php?href=" + _this.liveStream.url + "&show_text=false&height=375&appId";
                    }
                    else if (_this.liveStream.url.includes('youtube')) {
                        _this.is_youtube_video = true;
                        if (_this.liveStream.url.includes('watch?v=')) {
                            _this.liveStream.url = _this.liveStream.url.replace('watch?v=', 'embed/');
                        }
                        else {
                            _this.liveStream.url = _this.liveStream.url.replace('youtube.com', 'youtube.com/embed');
                        }
                    }
                    else if (_this.liveStream.url.includes('youtu.be')) {
                        _this.liveStream.url = _this.liveStream.url.replace('youtu.be/', 'www.youtube.com/embed/');
                    }
                    else if (_this.liveStream.url.includes('vimeo')) {
                        if (_this.liveStream.url.includes('www.vimeo')) {
                            _this.liveStream.url = _this.liveStream.url.replace('www.vimeo.com/', 'player.vimeo.com/video/');
                        }
                        else if (_this.liveStream.url.includes('player.vimeo')) {
                            _this.liveStream.url.includes = _this.liveStream.url.replace('player.vimeo', 'player.vimeo');
                        }
                        else {
                            _this.liveStream.url = _this.liveStream.url.replace('vimeo.com/', 'player.vimeo.com/video/');
                        }
                    }
                    else if (_this.liveStream.url.includes('yourstreamlive.com')) {
                        // this.liveStream.url = this.liveStream.url.replace('https://yourstreamlive.com/embed/iframe/live/',  'https://origin2-edge2.ord.yourstreamlive.com/live/yourstreamlive/amlst:out')
                        _this.liveStream.url = _this.liveStream.url + "?responsive=yes";
                    }
                }
                if (_this.liveStream.url != '' && _this.liveStream.live_stream_type === 'audio') {
                    if (_this.liveStream.url.includes("soundcloud.com")) {
                        _this.soundcloud = true;
                        _this.liveStream.url = "https://w.soundcloud.com/player/?url=" + _this.liveStream.url;
                    }
                }
                _this.liveStream.url = _this.liveStream.url;
                _this.liveUrl = _this.dom.bypassSecurityTrustResourceUrl(_this.liveStream.url);
                // this.liveUrl = this.dom.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=806184096810431&show_text=false&width=734&height=413&appId');
                _this.liveStreamData = res;
                console.log("livestream Data", _this.liveStreamData, "------", _this.liveStream);
                if (_this.liveUrl !== "") {
                    _this.isStarted = true;
                }
                if (moment__WEBPACK_IMPORTED_MODULE_15__(_this.liveStream.schedule.toString()).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_15__())) {
                    _this.isStarted = true;
                    clearInterval(_this.liveStreamingInterval);
                }
                else {
                    _this.isStarted = false;
                    _this.isLiveStreamingStarted();
                }
                // this.setStreamingAnalytics();
                _this.getUser();
            }
        }, function (err) {
            var message = err.message;
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    LiveStreamPage.prototype.isLiveStreamingStarted = function () {
        var _this = this;
        this.liveStreamingInterval = setInterval(function () {
            if (moment__WEBPACK_IMPORTED_MODULE_15__(_this.liveStream.schedule.toString()).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_15__())) {
                _this.isStarted = true;
                clearInterval(_this.liveStreamingInterval);
                // this.getLiveStream();
            }
            else {
                _this.isStarted = false;
            }
        }, 1000 * 30);
    };
    LiveStreamPage.prototype.playYouTubeVideo = function (url) {
        var new_url = url.split('/');
        this.youtube.openVideo(new_url[new_url.length - 1]);
    };
    LiveStreamPage.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.storage.get('user').then(function (val) {
                            if (val != null && val != 'guest') {
                                _this.user = val;
                                // console.log('user is: ', this.user);
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, this.auth.getUser()];
                    case 1:
                        _a.userData = _b.sent();
                        if (this.userData != null && this.userData != 'guest') {
                            this.userLoggedIn = true;
                            this.getTheme(this.userData.user.id);
                        }
                        else {
                            this.getTheme("guest");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LiveStreamPage.prototype.getTheme = function (userType) {
        var _this = this;
        // this.storage.get('theme').then(res => {
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    this.theme = res.church;
                }
                else {
                    // this.getTheme(userType)
                }
                return [2 /*return*/];
            });
        }); });
    };
    LiveStreamPage.prototype.setAnalytics = function () {
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_15__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_15__["duration"](end_time_analytics.diff(this.start_time_analytics)).asMilliseconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        var body = {
            timespent: moment__WEBPACK_IMPORTED_MODULE_15__(duration).format('mm:ss'),
            module: 'Live Stream',
            custom_name: this.page_name,
            event_type: "",
            page_id: this.page_id,
        };
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe(function (res) {
        });
    };
    LiveStreamPage.prototype.createComment = function () {
        var _this = this;
        if (this.userLoggedIn) {
            if (!this.comment_input) {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.enter_comment : 'Enter Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
            var church_data = JSON.parse(localStorage.getItem('church_data'));
            var date;
            if (this.theme.timezone) {
                date = moment__WEBPACK_IMPORTED_MODULE_15__().tz(this.theme.timezone);
            }
            else {
                date = moment__WEBPACK_IMPORTED_MODULE_15__().format('YYYY-MM-DD HH:mm:ss');
            }
            var body_1 = JSON.stringify({
                auth: 'Bearer ' + this.userData.auth.access_token,
                livestream_id: this.liveStream.id,
                account_donor_id: this.userData.user.id,
                church_id: this.ch_id,
                comments: this.comment_input,
                comment_time: date,
            });
            this.loader.presentLoading().then(function () {
                // saving comment data
                _this.apiService.create_liveStream_comment(body_1).subscribe(function (res) {
                    // refreshing data after comment save
                    _this.refreshComments();
                    _this.comment_input = '';
                    _this.loader.stopLoading();
                }, function (err) {
                    var message = err.message;
                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    _this.loader.stopLoading();
                });
            });
        }
        else {
            this.loader.stopLoading();
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_comment : 'Login to Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            this.router.navigate(['/login']);
        }
    };
    LiveStreamPage.prototype.refreshComments = function () {
        var _this = this;
        this.apiService.liveStream(this.ch_id).subscribe(function (res) {
            if (res.status) {
                _this.comments = res.comments;
                _this.comments.map(function (item) {
                    try {
                        item.comments = JSON.parse(item.comments);
                    }
                    catch (_a) {
                        item.comments = item.comments;
                    }
                    var mytime = moment__WEBPACK_IMPORTED_MODULE_15__(item.comment_time);
                    if (_this.theme.timezone) {
                        mytime = mytime.tz(moment__WEBPACK_IMPORTED_MODULE_15__["tz"].guess());
                    }
                    var time_diff = moment__WEBPACK_IMPORTED_MODULE_15__().utcOffset(); // in minutes
                    if (time_diff != 0) {
                        item.comment_time = _this.appService.getDateTimeFormat(mytime);
                    }
                    else {
                        item.comment_time = _this.appService.getDateTimeFormat(item.comment_time);
                    }
                });
                if (moment__WEBPACK_IMPORTED_MODULE_15__(_this.liveStream.schedule.toString()).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_15__())) {
                    _this.isStarted = true;
                    clearInterval(_this.liveStreamingInterval);
                }
                else {
                    _this.isStarted = false;
                    _this.isLiveStreamingStarted();
                }
                _this.getUser();
            }
        }, function (err) {
            var message = err.message;
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    LiveStreamPage.prototype.convertToEST = function (time) {
        //EST
        var offset = -5.0;
        // clientDate = new Date();
        var utc = time.getTime() + (time.getTimezoneOffset() * 60000);
        var serverDate = new Date(utc + (3600000 * offset));
        // console.log("converted time", serverDate.toLocaleString());
        return serverDate.toLocaleString();
    };
    LiveStreamPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    LiveStreamPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.liveStreamingInterval);
    };
    LiveStreamPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_17__["EmojiComponent"],
                            cssClass: 'emji-popover',
                            componentProps: {
                                show_emoji: true
                            },
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (res) {
                            if (res.data && res.data.event) {
                                if (_this.comment_input === undefined) {
                                    _this.comment_input = '';
                                }
                                _this.comment_input += res.data.event.char;
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LiveStreamPage.prototype.intoMinutes = function (second) {
        var minutes = Math.floor(second / 60);
        var seconds = Math.floor(second - minutes * 60);
        return minutes + ':' + seconds;
    };
    LiveStreamPage.prototype.getLatLang = function () {
        var _this = this;
        this.geoLocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            _this.lat = resp.coords.latitude;
            _this.lang = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // setStreamingAnalytics(){
    //     let lat = this.lat;
    //     let long = this.lang;
    //     console.log('location', lat + '    ' + long);
    //     let body = {
    //         church_id: this.ch_id,
    //         latitude: this.lat,
    //         longitude: this.lang,
    //         timespent: 1,
    //         module: this.liveStream.live_stream_type,
    //         custom_name:'Jamestown, NY, the US,',
    //         ip_address:123456789,
    //         device:this.device.platform ? this.device.platform : 'web',
    //         client_type:'user',
    //         event_type:'show',
    //         device_id:this.device.uuid ? this.device.uuid : 0,
    //         count:1,
    //         user_id:this.userLoggedIn ? this.userData.user.id : 0,
    //         video_id:this.liveStream.url,
    //         is_login:this.userLoggedIn ? 1 : 0,
    //     }
    //     this.analytics.setStreamingAnalytics(body).subscribe((res: any) => {
    //         console.log(res);
    //     }, error => {
    //         console.log(error);
    //     })
    // }
    LiveStreamPage.prototype.startCasting = function (audio, flag) {
        var obj = this;
        if (obj.common.castingActive && obj.common.session != '') {
            // obj.common.changeAudio(audio, flag);
        }
        else {
            // obj.newchrtomeCast(audio ,flag)
            this.toast.presentToastWithOptions("failed to join selected route undifine", 'Chrome Cast', 'warning');
        }
    };
    LiveStreamPage.prototype.castingModel = function (audio, session) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var stream, liveStrem, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stream = [];
                        liveStrem = this.liveStream;
                        liveStrem.title = "Live Stream";
                        liveStrem.audio_link = this.liveStream.url;
                        stream.push(liveStrem);
                        return [4 /*yield*/, this.modalController.create({
                                component: _listening_modal_listening_modal_component__WEBPACK_IMPORTED_MODULE_20__["ListeningModalComponent"],
                                componentProps: {
                                    'audioList': stream,
                                    'index': 0,
                                    "session": session,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LiveStreamPage.prototype.ionViewDidLeave = function () {
        // this.setAnalytics();
        this.sendLiveStreamingAnalytics();
        this.setAnalytics();
    };
    LiveStreamPage.prototype.sendLiveStreamingAnalytics = function () {
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_15__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_15__["duration"](end_time_analytics.diff(this.start_time_analytics)).asMilliseconds();
        // preparing user data
        var body = {
            duration: moment__WEBPACK_IMPORTED_MODULE_15__(duration).format('mm:ss'),
            page_name: this.page_name,
            page_title: this.page_title ? this.page_title : 'Live Stream',
            module: 'live-stream',
            current_show_name: this.page_name,
            current_show_host: this.author ? this.author : '',
            current_song_name: this.page_name,
            current_song_artist: this.author ? this.author : '',
            live_streaming: true,
            page_id: this.page_id,
        };
        this.analytics.setliveStreamingAnalytics(body).subscribe(function (res) {
        });
    };
    LiveStreamPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"] },
        { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_21__["YoutubeVideoPlayer"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"] },
        { type: src_services_socket_service__WEBPACK_IMPORTED_MODULE_24__["SocketService"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["Socket"] },
        { type: src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_23__["IpaddressService"] }
    ]; };
    LiveStreamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-live-stream',
            template: __webpack_require__(/*! raw-loader!./live-stream.page.html */ "./node_modules/raw-loader/index.js!./src/app/live-stream/live-stream.page.html"),
            styles: [__webpack_require__(/*! ./live-stream.page.scss */ "./src/app/live-stream/live-stream.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_13__["EventProviderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"],
            _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_21__["YoutubeVideoPlayer"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"],
            src_services_socket_service__WEBPACK_IMPORTED_MODULE_24__["SocketService"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["Socket"],
            src_services_ipaddress_service__WEBPACK_IMPORTED_MODULE_23__["IpaddressService"]])
    ], LiveStreamPage);
    return LiveStreamPage;
}());



/***/ })

}]);
//# sourceMappingURL=live-stream-live-stream-module-es5.js.map