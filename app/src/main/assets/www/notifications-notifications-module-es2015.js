(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons class=\"cursor-pointer\" slot=\"start\" (click)=\"gotobackPage()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'SETTINGS.Notifications' | translate}} \n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div class=\"page-wrapper ion-justify-content-start\">\n        <div class=\"app-container\">\n            <ion-tabs class=\"ionTabs\">\n                <ion-tab-bar class=\"ionTabs__bar\" slot=\"top\">\n<!--                    <ion-tab-button class=\"ionTabs__btn\" tab=\"topics\">-->\n<!--                        <ion-label class=\"ionTabs__label\">Topics</ion-label>-->\n<!--                    </ion-tab-button>-->\n                    <ion-tab-button class=\"ionTabs__btn\" tab=\"history\">\n                        <ion-label class=\"ionTabs__label\">{{'SETTINGS.Histroy' | translate}}</ion-label>\n                    </ion-tab-button>\n                </ion-tab-bar>\n            </ion-tabs>\n        </div>\n    </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _notifications_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.router.module */ "./src/app/notifications/notifications.router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _notifications_router_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let NotificationsPage = class NotificationsPage {
    constructor(location, event_provider, menu, translate) {
        this.location = location;
        this.event_provider = event_provider;
        this.menu = menu;
        this.translate = translate;
    }
    ngOnInit() {
        this.event_provider.getChurchData.subscribe(value => {
            if (!(Object.keys(value).length === 0)) {
                let church = value.church;
                if (church) {
                    this.ch_id = church.ch_id;
                }
            }
        });
    }
    ionViewDidEnter() {
        this.event_provider.hidefooter(true, 'other');
    }
    gotobackPage() {
        if (this.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_3__["EventProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html"),
        styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_3__["EventProviderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], NotificationsPage);



/***/ }),

/***/ "./src/app/notifications/notifications.router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/notifications/notifications.router.module.ts ***!
  \**************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




const routes = [
    {
        path: 'notifications',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"],
        children: [
            // {
            //   path: 'topics',
            //   children: [
            //     {
            //       path: '',
            //       loadChildren: () =>
            //         import('../topics/topics.module').then(m => m.TopicsPageModule)
            //     }
            //   ]
            // },
            {
                path: 'history',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | history-history-module */ "history-history-module").then(__webpack_require__.bind(null, /*! ../history/history.module */ "./src/app/history/history.module.ts")).then(m => m.HistoryPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'notifications/history',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'notifications/history',
        pathMatch: 'full'
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map