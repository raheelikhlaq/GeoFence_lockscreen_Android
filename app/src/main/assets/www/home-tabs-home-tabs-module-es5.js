(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tabs-home-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home-tabs/home-tabs.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-tabs/home-tabs.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"page-wrapper ion-justify-content-start\">\n    <div class=\"app-container\">\n      <ion-tabs  class=\"ionTabs\">\n        <!-- <ion-tab-bar class=\"ionTabs__bar show-mobile-dFlex\" slot=\"top\">\n          <ion-tab-button *ngIf=\"enable_home\" class=\"ionTabs__btn\" (click)=\"onOpenHome()\" [ngClass]=\"{'tab-selected': activeHome}\">\n            <ion-label class=\"ionTabs__label\">{{home_tabs[0].name | translate}}</ion-label>\n          </ion-tab-button>\n          <ion-tab-button *ngIf=\"home_tabs[1].status === 'false'\" class=\"ionTabs__btn\" (click)=\"onOpenItem()\" [tab]=\"home_tabs[1].full_link\">\n            <ion-label class=\"ionTabs__label\">{{home_tabs[1].name | translate}}</ion-label>\n          </ion-tab-button>\n          <ion-tab-button *ngIf=\"home_tabs[2].status === 'false'\" class=\"ionTabs__btn\" (click)=\"onOpenItem()\" [tab]=\"home_tabs[2].full_link\">\n            <ion-label class=\"ionTabs__label\">{{home_tabs[2].name | translate}}</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar> -->\n      </ion-tabs>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/home-tabs/home-tabs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-tabs/home-tabs.module.ts ***!
  \***********************************************/
/*! exports provided: HomeTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPageModule", function() { return HomeTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-tabs.page */ "./src/app/home-tabs/home-tabs.page.ts");
/* harmony import */ var _home_tabs_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-tabs.router.module */ "./src/app/home-tabs/home-tabs.router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _home_tabs_page__WEBPACK_IMPORTED_MODULE_6__["HomeTabsPage"]
    }
];
var HomeTabsPageModule = /** @class */ (function () {
    function HomeTabsPageModule() {
    }
    HomeTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _home_tabs_router_module__WEBPACK_IMPORTED_MODULE_7__["HomeTabsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_tabs_page__WEBPACK_IMPORTED_MODULE_6__["HomeTabsPage"]]
        })
    ], HomeTabsPageModule);
    return HomeTabsPageModule;
}());



/***/ }),

/***/ "./src/app/home-tabs/home-tabs.page.scss":
/*!***********************************************!*\
  !*** ./src/app/home-tabs/home-tabs.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdGFicy9ob21lLXRhYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-tabs/home-tabs.page.ts":
/*!*********************************************!*\
  !*** ./src/app/home-tabs/home-tabs.page.ts ***!
  \*********************************************/
/*! exports provided: HomeTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPage", function() { return HomeTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/admob-pro/ngx */ "./node_modules/@ionic-native/admob-pro/ngx/index.js");








// import {Events} from "@ionic/angular";
var HomeTabsPage = /** @class */ (function () {
    function HomeTabsPage(storage, router, 
    // public events: Events,
    event_provider, common, nav, admobPro) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.event_provider = event_provider;
        this.common = common;
        this.nav = nav;
        this.admobPro = admobPro;
        this.enable_home = true;
        this.current_page = 'home';
        this.home_tabs = [{
                name: 'Home',
                status: 'false',
                page_name: 'home',
                page_id: '',
                full_link: ''
            }, {
                name: 'Feed',
                status: 'false',
                page_name: 'Feed',
                page_id: '',
                full_link: 'feed-tab'
            }, {
                name: 'Chat',
                status: 'false',
                page_name: 'Chat',
                page_id: '',
                full_link: 'chat'
            }];
        this.activeHome = false;
        var bannerConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            adId: 'ca-app-pub-6533902948762053/1398181345',
            isTesting: true,
            autoShow: true
        };
        this.admobPro.createBanner(bannerConfig).then(function () {
            console.log('BANNER LOADED');
            _this.admobPro.showBanner(_this.admobPro.AD_POSITION.TOP_CENTER);
        }).catch(function (e) { return console.log('error: ', e); });
    }
    HomeTabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkUrl();
        this.getChurch();
        // this.nav.
        this.event_provider.getAppTheme.subscribe(function (res) {
            _this.ch_id = res.ch_id;
        });
        // event subscription to update tabs
        this.event_provider.updateHomeTabs.subscribe(function (value) {
            _this.home_tabs = JSON.parse(value.value);
        });
        this.event_provider.isHomeEnable.subscribe(function (value) {
            _this.enable_home = value.value.is_enable_menu || value.value.is_enable;
        });
        if (this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable.is_enable || this.common.is_home_enable.is_enable_menu;
        }
    };
    HomeTabsPage.prototype.ionViewDidEnter = function () {
        var url = this.router.url;
        var urlParts = url.split('/');
        if (urlParts[2] === 'home') {
            this.activeHome = true;
        }
    };
    HomeTabsPage.prototype.ionViewDidLeave = function () {
        this.activeHome = false;
    };
    HomeTabsPage.prototype.onOpenItem = function () {
        this.activeHome = false;
        // this.router.navigate([`home-tabs/home/${this.ch_id}`]);
    };
    HomeTabsPage.prototype.onOpenHome = function () {
        this.activeHome = true;
        this.router.navigate(["home-tabs/home/" + this.ch_id]);
    };
    HomeTabsPage.prototype.getChurch = function () {
        var _this = this;
        this.storage.get('theme').then(function (theme) {
            if (theme) {
                _this.ch_id = theme.ch_id;
                if (theme.home_tabs) {
                    _this.home_tabs = JSON.parse(theme.home_tabs);
                    // this.updateHomeTabs();
                }
            }
        });
    };
    HomeTabsPage.prototype.updateHomeTabs = function () {
        var _this = this;
        var body = JSON.stringify({ id: this.ch_id });
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                }
                return [2 /*return*/];
            });
        }); });
    };
    HomeTabsPage.prototype.checkUrl = function () {
        var url = this.router.url;
        if (url.includes("home-tabs/home/")) {
            this.current_page = 'home';
        }
        else {
            this.current_page = '';
        }
    };
    HomeTabsPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_4__["EventProviderService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_7__["AdMobPro"] }
    ]; };
    HomeTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-tabs',
            template: __webpack_require__(/*! raw-loader!./home-tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/home-tabs/home-tabs.page.html"),
            styles: [__webpack_require__(/*! ./home-tabs.page.scss */ "./src/app/home-tabs/home-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_4__["EventProviderService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_native_admob_pro_ngx__WEBPACK_IMPORTED_MODULE_7__["AdMobPro"]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());



/***/ }),

/***/ "./src/app/home-tabs/home-tabs.router.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home-tabs/home-tabs.router.module.ts ***!
  \******************************************************/
/*! exports provided: HomeTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPageRoutingModule", function() { return HomeTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-tabs.page */ "./src/app/home-tabs/home-tabs.page.ts");




var routes = [
    {
        path: '',
        component: _home_tabs_page__WEBPACK_IMPORTED_MODULE_3__["HomeTabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
                    }
                ]
            },
            {
                path: 'home/:id',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'feed-tab',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | feed-tab-feed-tab-module */[__webpack_require__.e("default~audio-archive-audio-archive-module~custom-post-detail-custom-post-detail-module~event-detail~c21375fa"), __webpack_require__.e("default~feed-tab-feed-tab-module~profile-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("feed-tab-feed-tab-module")]).then(__webpack_require__.bind(null, /*! ../feed-tab/feed-tab.module */ "./src/app/feed-tab/feed-tab.module.ts")).then(function (m) { return m.FeedTabPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'study',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | ism-bible-ism-bible-module */ "ism-bible-ism-bible-module").then(__webpack_require__.bind(null, /*! ../ism-bible/ism-bible.module */ "./src/app/ism-bible/ism-bible.module.ts")).then(function (m) { return m.IsmBiblePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'chat',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ../chat/chat.module */ "./src/app/chat/chat.module.ts")).then(function (m) { return m.ChatPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'folder',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | folder-folder-module */[__webpack_require__.e("default~folder-folder-module~ism-home-ism-home-module"), __webpack_require__.e("folder-folder-module")]).then(__webpack_require__.bind(null, /*! ../folder/folder.module */ "./src/app/folder/folder.module.ts")).then(function (m) { return m.FolderPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'custom-post',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | custom-post-custom-post-module */[__webpack_require__.e("default~custom-post-custom-post-module~custom-post-detail-custom-post-detail-module~event-detail-eve~b7a28717"), __webpack_require__.e("custom-post-custom-post-module")]).then(__webpack_require__.bind(null, /*! ../custom-post/custom-post.module */ "./src/app/custom-post/custom-post.module.ts")).then(function (m) { return m.CustomPostPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~feed-tab-feed-tab-module~profile-profile-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'my-contribute',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | my-contribute-my-contribute-module */[__webpack_require__.e("common"), __webpack_require__.e("my-contribute-my-contribute-module")]).then(__webpack_require__.bind(null, /*! ../my-contribute/my-contribute.module */ "./src/app/my-contribute/my-contribute.module.ts")).then(function (m) { return m.MyContributePageModule; });
                        }
                    }
                ]
            }, {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | events-events-module */[__webpack_require__.e("default~custom-post-custom-post-module~custom-post-detail-custom-post-detail-module~event-detail-eve~b7a28717"), __webpack_require__.e("default~audio-archive-audio-archive-module~custom-post-detail-custom-post-detail-module~event-detail~c21375fa"), __webpack_require__.e("events-events-module")]).then(__webpack_require__.bind(null, /*! ../events/events.module */ "./src/app/events/events.module.ts")).then(function (m) { return m.EventsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'shows',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | sermons-sermons-module */ "sermons-sermons-module").then(__webpack_require__.bind(null, /*! ../sermons/sermons.module */ "./src/app/sermons/sermons.module.ts")).then(function (m) { return m.SermonsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'audio-archive',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | audio-archive-audio-archive-module */[__webpack_require__.e("default~audio-archive-audio-archive-module~custom-post-detail-custom-post-detail-module~event-detail~c21375fa"), __webpack_require__.e("audio-archive-audio-archive-module")]).then(__webpack_require__.bind(null, /*! ../audio-archive/audio-archive.module */ "./src/app/audio-archive/audio-archive.module.ts")).then(function (m) { return m.AudioArchivePageModule; });
                        }
                    }
                ]
            }, {
                path: 'groups',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | groups-groups-module */ "groups-groups-module").then(__webpack_require__.bind(null, /*! ..//groups/groups.module */ "./src/app/groups/groups.module.ts")).then(function (m) { return m.GroupsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'bible',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | bible-bible-module */ "bible-bible-module").then(__webpack_require__.bind(null, /*! ..//bible/bible.module */ "./src/app/bible/bible.module.ts")).then(function (m) { return m.BiblePageModule; });
                        }
                    }
                ]
            }, {
                path: 'prayer-wall',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | prayer-wall-prayer-wall-module */ "prayer-wall-prayer-wall-module").then(__webpack_require__.bind(null, /*! ..//prayer-wall/prayer-wall.module */ "./src/app/prayer-wall/prayer-wall.module.ts")).then(function (m) { return m.PrayerWallPageModule; });
                        }
                    }
                ]
            }, {
                path: 'live-stream',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | live-stream-live-stream-module */ "live-stream-live-stream-module").then(__webpack_require__.bind(null, /*! ..//live-stream/live-stream.module */ "./src/app/live-stream/live-stream.module.ts")).then(function (m) { return m.LiveStreamPageModule; });
                        }
                    }
                ]
            }, {
                path: 'locations',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | locations-locations-module */[__webpack_require__.e("default~event-detail-event-detail-module~location-detail-location-detail-module~locations-locations-module"), __webpack_require__.e("locations-locations-module")]).then(__webpack_require__.bind(null, /*! ..//locations/locations.module */ "./src/app/locations/locations.module.ts")).then(function (m) { return m.LocationsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ..//notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'today-study',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | today-study-today-study-module */ "today-study-today-study-module").then(__webpack_require__.bind(null, /*! ..//today-study/today-study.module */ "./src/app/today-study/today-study.module.ts")).then(function (m) { return m.TodayStudyPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'show-notes',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | sermon-notes-sermon-notes-module */[__webpack_require__.e("default~custom-post-custom-post-module~custom-post-detail-custom-post-detail-module~event-detail-eve~b7a28717"), __webpack_require__.e("sermon-notes-sermon-notes-module")]).then(__webpack_require__.bind(null, /*! ..//sermon-notes/sermon-notes.module */ "./src/app/sermon-notes/sermon-notes.module.ts")).then(function (m) { return m.SermonNotesPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ..//settings/settings.module */ "./src/app/settings/settings.module.ts")).then(function (m) { return m.SettingsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'in-app-iframe',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | in-app-iframe-in-app-iframe-module */ "in-app-iframe-in-app-iframe-module").then(__webpack_require__.bind(null, /*! ..//in-app-iframe/in-app-iframe.module */ "./src/app/in-app-iframe/in-app-iframe.module.ts")).then(function (m) { return m.InAppIframePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'video-archive',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | video-archive-video-archive-module */ "video-archive-video-archive-module").then(__webpack_require__.bind(null, /*! ..//video-archive/video-archive.module */ "./src/app/video-archive/video-archive.module.ts")).then(function (m) { return m.VideoArchivePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'form',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | form-form-module */ "form-form-module").then(__webpack_require__.bind(null, /*! ..//form/form.module */ "./src/app/form/form.module.ts")).then(function (m) { return m.FormPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'forms/:slug',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | modules-forms-forms-forms-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-forms-forms-forms-module")]).then(__webpack_require__.bind(null, /*! ../modules/forms/forms/forms.module */ "./src/app/modules/forms/forms/forms.module.ts")).then(function (m) { return m.FormsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'event-giving/:event_id',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | event-giving-event-giving-module */[__webpack_require__.e("default~custom-post-custom-post-module~custom-post-detail-custom-post-detail-module~event-detail-eve~b7a28717"), __webpack_require__.e("common"), __webpack_require__.e("event-giving-event-giving-module")]).then(__webpack_require__.bind(null, /*! ..//event-giving/event-giving.module */ "./src/app/event-giving/event-giving.module.ts")).then(function (m) { return m.EventGivingPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'community',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | community-community-module */ "community-community-module").then(__webpack_require__.bind(null, /*! ..//community/community.module */ "./src/app/community/community.module.ts")).then(function (m) { return m.CommunityPageModule; });
                        }
                    }
                ]
            }, {
                path: 'topics',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | topics-topics-module */ "topics-topics-module").then(__webpack_require__.bind(null, /*! ..//topics/topics.module */ "./src/app/topics/topics.module.ts")).then(function (m) { return m.TopicsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'contact-us',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | contact-us-contact-us-module */ "contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ..//contact-us/contact-us.module */ "./src/app/contact-us/contact-us.module.ts")).then(function (m) { return m.ContactUsPageModule; });
                        }
                    }
                ]
            }, {
                path: 'custom-page',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | custom-page-custom-page-module */ "custom-page-custom-page-module").then(__webpack_require__.bind(null, /*! ..//custom-page/custom-page.module */ "./src/app/custom-page/custom-page.module.ts")).then(function (m) { return m.CustomPagePageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'home-tabs/feed-tab',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: 'home-tabs/chat',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home-tabs/home/:id',
        pathMatch: 'full'
    }
];
var HomeTabsPageRoutingModule = /** @class */ (function () {
    function HomeTabsPageRoutingModule() {
    }
    HomeTabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeTabsPageRoutingModule);
    return HomeTabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-tabs-home-tabs-module-es5.js.map