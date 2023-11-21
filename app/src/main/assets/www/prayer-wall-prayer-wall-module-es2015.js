(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayer-wall-prayer-wall-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/prayer-wall/prayer-wall.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/prayer-wall/prayer-wall.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Prayer Wall')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'PRAYER_WALL.prayer_wall' | translate}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Prayer Wall')\" slot=\"start\">{{'PRAYER_WALL.prayer_wall' | translate}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\" [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ionCard--PrayerWall ion-margin-bottom\">\n                <ion-card-content class=\"ion-no-padding\">\n                    <div class=\"ion-margin-bottom\">\n                        <label class=\"heading3\">{{'PRAYER_WALL.prayers' | translate}}</label>\n                    </div>\n                    <ion-row>\n                        <ion-col *ngIf=\"!isUserLoggedIn\" [size]=\"12\" [sizeLg]=\"6\">\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                    <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\"\n                                               placeholder=\"{{'PRAYER_WALL.firstname_placeholder' | translate}}\" [(ngModel)]=\"name\"></ion-input>\n                                </ion-item>\n                            </div>\n                        </ion-col>\n                        <ion-col *ngIf=\"!isUserLoggedIn\" [size]=\"12\" [sizeLg]=\"6\">\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                    <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\"\n                                               placeholder=\"{{'PRAYER_WALL.lastname_placeholder' | translate}}\" [(ngModel)]=\"last_name\"></ion-input>\n                                </ion-item>\n                            </div>\n                        </ion-col>\n                        <ion-col [size]=\"12\">\n                            <div class=\"ion-margin-bottom\">\n                                <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                    <ion-textarea class=\"inputField__area inputField__area--textarea\"\n                                                  placeholder=\"{{'PRAYER_WALL.post_prayer' | translate}}...*\" [(ngModel)]=\"content\"></ion-textarea>\n                                </ion-item>\n                            </div>\n                        </ion-col>\n                        <ion-col [size]=\"12\" class=\"ion-margin-bottom ion-text-right\">\n                            <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\" (click)=\"createPrayer()\">{{'PRAYER_WALL.post' | translate}}</ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n            <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\"  (ionInfinite)=\"loadData($event)\">\n                <ion-infinite-scroll-content loading-spinner=\"bubbles\" loading-text=\"Loading more data...\">\n                    <ion-card *ngFor=\"let prayer of prayers;let i = index\" class=\"ionCard ionCard--PrayerWall ion-margin-bottom ion-text-left\">\n                        <ion-card-content class=\"ion-no-padding\">\n\n                            <div class=\"ion-margin-bottom\">\n                                <label *ngIf=\"prayer.name || prayer.last_name\" class=\"heading4\">{{prayer.name}} {{prayer.last_name}}</label>\n                                <label *ngIf=\"!prayer.name && !prayer.last_name\" class=\"heading4\">{{'FEED.Anonymous' | translate}}</label>\n                            <div>\n                                <ion-note style=\"font-size: small\" class=\"text-dark\">{{appService.getDateTimeFormat(prayer.created)}}</ion-note>\n                            </div>                   \n                                <p class=\"ion-text-wrap\">{{prayer.content}}</p>\n                            </div>\n                            <div class=\"ion-margin-bottom\">\n<!--                                <ion-button class=\"commonBtn commonBtn&#45;&#45;dark commonBtn&#45;&#45;round\" (click)=\"iAmPraying(prayer._id)\">{{'PRAYER_WALL.i_am_praying' | translate}} <span style=\"font-family: monospace;\">({{prayer.count}})</span>-->\n<!--                                </ion-button>-->\n                                <ion-button (click)=\"this.showComments[i] = !this.showComments[i];\" class=\"commonBtn commonBtn--gray commonBtn--round\">\n                                    <ion-icon slot=\"start\" name=\"chatbubbles\"></ion-icon>\n                                    {{'PRAYER_WALL.comments' | translate}} <span style=\"font-family: monospace;\">({{prayer.comments.length}})</span>\n                                </ion-button>\n                            </div>\n                            <div *ngIf=\"showComments[i]\" class=\"commentArea\">\n                                <div  class=\"ion-margin-bottom\"  *ngIf=\"prayer.comments.length > 0\">\n                                    <ion-item *ngFor=\" let comment of prayer.comments.slice().reverse()\" class=\"inputField  inputField--gray\" lines=\"none\">\n                                        <div style=\"position: absolute; top: 5px; right: 5px;\">\n                                            <ion-note style=\"font-size: small\" class=\"text-dark\">{{comment.date}}</ion-note>\n                                        </div>\n                                        <ion-label class=\"ion-text-wrap\" style=\"margin-top:25px;\">\n                                            <p style=\"display: block;\"><b>{{comment.name}} {{comment.last_name}} </b></p>\n                                            <p><small>{{comment.message}}</small></p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <div  class=\"ion-margin-bottom\" *ngIf=\"prayer.comments.length === 0\">\n                                    <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                        <ion-label class=\"ion-text-wrap\" >\n                                            <p><small>{{'PRAYER_WALL.nocommentsyet' | translate}}.....<br/>{{'PRAYER_WALL.bethefirstone' | translate}}.</small></p>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                <div class=\"ion-text-right ion-margin-bottom\">\n                                    <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\" (click)=\"openModal(prayer._id)\">{{'PRAYER_WALL.comment' | translate}}</ion-button>\n                                </div>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

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

/***/ "./src/app/prayer-wall/prayer-wall.module.ts":
/*!***************************************************!*\
  !*** ./src/app/prayer-wall/prayer-wall.module.ts ***!
  \***************************************************/
/*! exports provided: PrayerWallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerWallPageModule", function() { return PrayerWallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prayer_wall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayer-wall.page */ "./src/app/prayer-wall/prayer-wall.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _prayer_wall_page__WEBPACK_IMPORTED_MODULE_6__["PrayerWallPage"]
    }
];
let PrayerWallPageModule = class PrayerWallPageModule {
};
PrayerWallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_prayer_wall_page__WEBPACK_IMPORTED_MODULE_6__["PrayerWallPage"]]
    })
], PrayerWallPageModule);



/***/ }),

/***/ "./src/app/prayer-wall/prayer-wall.page.scss":
/*!***************************************************!*\
  !*** ./src/app/prayer-wall/prayer-wall.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n@media screen and (max-width: 992px) {\n  .ionCard--PrayerWall {\n    border-bottom: 2px solid #F1F1F1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3ByYXllci13YWxsL3ByYXllci13YWxsLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvc2Fzcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3N0ZGluIiwic3JjL2FwcC9wcmF5ZXItd2FsbC9wcmF5ZXItd2FsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsV0FBQTtBQWtGQSxVQUFBO0FBaUZBLFVBQUE7QUE4QkEsZ0JBQUE7QUFhQSxZQUFBO0FBV0EsbUJBQUE7QUFNQSxTQUFBO0FDNkNFO0VDOVFGO0lBRUksZ0NBQUE7RUNNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJheWVyLXdhbGwvcHJheWVyLXdhbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xuXG4uaW9uQ2FyZC0tUHJheWVyV2FsbCB7XG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGhhbGYtd2hpdGU7XG4gIH1cbn1cbiIsIi8qIENvbG9ycyAqL1xuLyogY2FyZHMgKi9cbi8qIEZvcm1zICovXG4vKiBIZWFkZXIgSWNvbiAqL1xuLyogU2lkZWJhciAqL1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cbi8qIHRhYnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pb25DYXJkLS1QcmF5ZXJXYWxsIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0YxRjFGMTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/prayer-wall/prayer-wall.page.ts":
/*!*************************************************!*\
  !*** ./src/app/prayer-wall/prayer-wall.page.ts ***!
  \*************************************************/
/*! exports provided: PrayerWallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerWallPage", function() { return PrayerWallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comment_modal_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-modal/comment-modal.component */ "./src/app/prayer-wall/comment-modal/comment-modal.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



















let PrayerWallPage = class PrayerWallPage {
    constructor(modalController, apiService, storage, loader, datePipe, appService, toast, location, common, event_provider, analytics, platform, device, translate, dom) {
        this.modalController = modalController;
        this.apiService = apiService;
        this.storage = storage;
        this.loader = loader;
        this.datePipe = datePipe;
        this.appService = appService;
        this.toast = toast;
        this.location = location;
        this.common = common;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.dom = dom;
        this.churchName = '';
        this.showComments = [];
        this.isUserLoggedIn = false;
        this.page_in_home_tabs = false;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    ngOnInit() {
        // chekcing if page is opened in home tabs or simple
        let current_url = new URL(window.location.href);
        let page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
        // getting theme from local storage
        // this.storage.get('theme').then(async res => {
        let res = JSON.parse(localStorage.getItem('church_data'));
        let theme = JSON.parse(localStorage.getItem('church_data')).church;
        this.churchName = theme.church_name;
        this.client_id = 'church_' + theme.client_id;
        this.clientEmail = res.client_email;
        this.churchId = theme.ch_id;
        // saving app_pages
        const body = JSON.stringify({ id: this.churchId });
        // this.common.getTheme(body).subscribe(async (res: any) => {
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        }));
        // });
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
    }
    getGradient(color_one, bg_color) {
        if (bg_color === '') {
            return this.dom.bypassSecurityTrustStyle(`linear-gradient(to bottom,rgba(255,0,0,0), ${color_one}`);
        }
        else {
            return `${bg_color}`;
        }
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then(res => {
            if (res != null && res != 'guest') {
                this.isUserLoggedIn = true;
                this.user = res;
                // seperating first and last name
                this.name = (res.user.first_last_name).split(' ')[0];
                this.last_name = (res.user.first_last_name).split(' ')[1];
            }
        });
    }
    getPrayers() {
        console.log('iii');
        this.loader.presentLoading().then(() => { });
        // getting ID by church name
        if (this.churchName.indexOf('/') !== -1) {
            this.churchName = this.churchName.replace('/', '');
        }
        if (this.churchName === 'Calvary Rising Sun' && this.churchId === '905') {
            this.churchName = 'Calvary Missionary Baptist Church';
        }
        this.apiService.getPrayers(this.churchName).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getUser();
            if (res) {
                this.prayer_id = yield res._id;
                if (this.prayer_id) {
                    // getting all prayers of church through ID
                    this.apiService.getAllPrayers(this.prayer_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.prayers = yield res.result;
                        // reversing prayers so that latest comes at top
                        let all = this.prayers.slice().reverse();
                        this.prayers = all.filter(x => x.is_moderated === true);
                        this.prayers.map((item) => {
                            item.comments.map((items) => {
                                if (!items.name && !items.last_name) {
                                    items.name = "Anonymous";
                                }
                                if (items.date) {
                                    let mytime;
                                    let church_data = JSON.parse(localStorage.getItem('church_data'));
                                    if (church_data.church.timezone) {
                                        mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                    }
                                    else {
                                        mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                    }
                                    let time_diff = moment__WEBPACK_IMPORTED_MODULE_12__().utcOffset(); // in minutes
                                    if (time_diff != 0) {
                                        items.date = this.appService.getDateTimeFormat(mytime);
                                    }
                                    else {
                                        items.date = this.appService.getDateTimeFormat(items.date);
                                    }
                                }
                            });
                        });
                        this.loader.stopLoading();
                    }), (err) => {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                        this.loader.stopLoading();
                    });
                }
            }
            else {
                // getting ID by client_id
                this.apiService.getPrayers(this.client_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res) {
                        this.prayer_id = yield res._id;
                        if (this.prayer_id) {
                            // getting all prayers of church
                            this.apiService.getAllPrayers(this.prayer_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                this.prayers = yield res.result;
                                this.prayers.map((item) => {
                                    item.comments.map((items) => {
                                        if (!items.name && !items.last_name) {
                                            items.name = "Anonymous";
                                        }
                                        if (items.date) {
                                            let mytime;
                                            let church_data = JSON.parse(localStorage.getItem('church_data'));
                                            if (church_data.church.timezone) {
                                                mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                            }
                                            else {
                                                mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                            }
                                            let time_diff = moment__WEBPACK_IMPORTED_MODULE_12__().utcOffset(); // in minutes
                                            if (time_diff != 0) {
                                                items.date = this.appService.getDateTimeFormat(mytime);
                                            }
                                            else {
                                                items.date = this.appService.getDateTimeFormat(items.date);
                                            }
                                        }
                                    });
                                });
                                // reversing prayers so that latest comes at top
                                let all = this.prayers.slice().reverse();
                                this.prayers = all.filter(x => x.is_moderated === true);
                                this.loader.stopLoading();
                            }), (err) => {
                                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                                this.loader.stopLoading();
                            });
                        }
                    }
                    else {
                        // this.loader.stopLoading();
                        this.apiService.getChurchName(this.clientEmail).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (res) {
                                this.prayer_id = yield res[0]._id;
                                if (this.prayer_id) {
                                    // getting all prayers of church
                                    this.apiService.getAllPrayers(this.prayer_id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        this.prayers = yield res.result;
                                        this.prayers.map((item) => {
                                            item.comments.map((items) => {
                                                if (!items.name && !items.last_name) {
                                                    items.name = "Anonymous";
                                                }
                                                if (items.date) {
                                                    let mytime;
                                                    let church_data = JSON.parse(localStorage.getItem('church_data'));
                                                    if (church_data.church.timezone) {
                                                        mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                                    }
                                                    else {
                                                        mytime = moment__WEBPACK_IMPORTED_MODULE_12__(items.date);
                                                    }
                                                    let time_diff = moment__WEBPACK_IMPORTED_MODULE_12__().utcOffset(); // in minutes
                                                    if (time_diff != 0) {
                                                        items.date = this.appService.getDateTimeFormat(mytime);
                                                    }
                                                    else {
                                                        items.date = this.appService.getDateTimeFormat(items.date);
                                                    }
                                                }
                                            });
                                        });
                                        // reversing prayers so that latest comes at top
                                        let all = this.prayers.slice().reverse();
                                        this.prayers = all.filter(x => x.is_moderated === true);
                                        this.loader.stopLoading();
                                    }), (err) => {
                                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                                        this.loader.stopLoading();
                                    });
                                }
                            }
                            else {
                                this.loader.stopLoading();
                            }
                        }), (err) => {
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                            this.loader.stopLoading();
                        });
                    }
                }));
            }
        }), (err) => {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            this.loader.stopLoading();
        });
        // });
    }
    openModal(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal;
            if (this.isUserLoggedIn) {
                modal = yield this.modalController.create({
                    component: _comment_modal_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__["CommentModalComponent"],
                    cssClass: 'CommentModal',
                    componentProps: {
                        prayer_id: id,
                        isUserLoggedIn: this.isUserLoggedIn,
                        name: this.name,
                        last_name: this.last_name
                    }
                });
            }
            else {
                modal = yield this.modalController.create({
                    component: _comment_modal_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__["CommentModalComponent"],
                    cssClass: 'CommentModal',
                    componentProps: {
                        prayer_id: id,
                        isUserLoggedIn: this.isUserLoggedIn
                    }
                });
            }
            modal.onDidDismiss().then(res => {
                if (res.data.submitted) {
                    this.getPrayers();
                }
                else {
                    return;
                }
            });
            return yield modal.present();
        });
    }
    createPrayer() {
        if (!this.content) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.enter_all_required_fields : 'Please Enter all required Fields'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            return;
        }
        const body = {
            name: this.name,
            last_name: this.last_name,
            content: this.content
        };
        this.loader.presentLoading().then(() => {
            // saving prayer data
            this.apiService.createPrayer(body, this.prayer_id).subscribe(res => {
                if (res) {
                    // ======= Trigger Notification =============================================================== //
                    const notification_body = {
                        church_id: this.churchId,
                        title: "NEW POST",
                        message: "There was a new Post in Prayer Wall. Click to view!",
                        timezone: "-300"
                    };
                    this.apiService.prayerwall_notification_send(JSON.stringify(notification_body)).subscribe((result) => {
                    });
                    // ======= Trigger Notification ================================================================ //
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.request_submitted : 'Your Request has been submitted!'), (this.alertMessage ? this.alertMessage.Success : 'Success'), 'success');
                    this.content = '';
                    this.getPrayers();
                }
                this.loader.stopLoading();
            }, (err) => {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    iAmPraying(id) {
        this.loader.presentLoading().then(() => {
            // checking if user has already prayed for the prayer or not
            this.apiService.iAmPraying(id).subscribe((res) => {
                if (res.success === true) {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.already_prayed : 'You have already prayed for this prayer'), (this.alertMessage ? this.alertMessage.Message : 'Message'), 'success');
                    this.loader.stopLoading();
                    return;
                }
                // saving i am praying data
                this.apiService.pray(id).subscribe(res => {
                    this.getPrayers();
                    this.loader.stopLoading();
                });
            }, (err) => {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                this.loader.stopLoading();
            });
        });
    }
    loadData(event) {
        setTimeout(() => {
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.prayers.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    // navigating to back page
    gotobackPage() {
        this.location.back();
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
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_12__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        let userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.churchId,
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
    ionViewWillEnter() {
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(Object.keys(res).length === 0)) {
                // asking for password
                let app_pages = res.apppages.find(x => x.name === 'Prayer Wall');
                if (app_pages.password_protection_toggle === 'true') {
                    this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                }
            }
            if (!(Object.keys(res).length === 0)) {
                this.theme = res.church;
                this.common.store_app_pages(res.apppages, 'prayer-wall');
                // getting app pages from local storage
                // this.storage.get('app_pages').then(res => {
                // filtering prayer wall page data
                let app_pages = res.apppages.find(x => x.name === 'Prayer Wall');
                if (app_pages) {
                    this.banner_image = app_pages.website_banner;
                    this.banner_desc = app_pages.banner_description;
                    this.banner_title = app_pages.banner_title;
                    this.page_name = app_pages.name;
                    this.custom_name = app_pages.title;
                    this.grad_color = app_pages.grad_color_1;
                    this.opacity_color = app_pages.opacity_color;
                    console.log('yahann');
                    this.getPrayers();
                }
                // });
                // getting prayers
            }
        }));
    }
    ionViewDidLeave() {
        this.setAnalytics();
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_12__();
        this.event_provider.hidefooter(true, 'other');
    }
};
PrayerWallPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], PrayerWallPage.prototype, "infiniteScroll", void 0);
PrayerWallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer-wall',
        template: __webpack_require__(/*! raw-loader!./prayer-wall.page.html */ "./node_modules/raw-loader/index.js!./src/app/prayer-wall/prayer-wall.page.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _comment_modal_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__["CommentModalComponent"]],
        styles: [__webpack_require__(/*! ./prayer-wall.page.scss */ "./src/app/prayer-wall/prayer-wall.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
        _app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
], PrayerWallPage);



/***/ })

}]);
//# sourceMappingURL=prayer-wall-prayer-wall-module-es2015.js.map