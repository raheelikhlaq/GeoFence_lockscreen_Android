(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n  <ion-toolbar class=\"header--toolbar\">\n    <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n      <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'SETTINGS.Settings' |\n      translate}}\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n  <div\n    class=\"banner\"\n    style=\"background-image: url('../../assets/img/banner-bg.jpg')\"\n  >\n    <div class=\"banner__layer\"></div>\n    <div class=\"banner__content\">\n      <div class=\"app-container ion-text-center\">\n        <h1 class=\"ion-no-margin heading1 banner__heading\">\n          {{'SETTINGS.Settings' | translate}}\n        </h1>\n        <p class=\"ion-no-margin banner__text\"></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-row class=\"ion-align-items-center mb-30\">\n        <ion-col size=\"6\">\n          <h3 class=\"heading3 ion-no-margin\">\n            {{'SETTINGS.DARKMODE' | translate}}\n          </h3>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          <ion-toggle\n            style=\"position: relative; top: 5px\"\n            color=\"light\"\n            (ionChange)=\"setMode()\"\n            [checked]=\"darkmode\"\n          >\n            Dark Mode\n          </ion-toggle>\n        </ion-col>\n      </ion-row>\n      <div *ngIf=\"topics\" style=\"padding: 0 5px\">\n        <h3 class=\"heading3 ion-no-margin\">Topics</h3>\n        <ion-list lines=\"none\" class=\"chat-list\">\n          <ion-item\n            *ngFor=\"let topic of topics\"\n            class=\"ionMedia ionMedia--medium\"\n          >\n            <div slot=\"end\" class=\"ionMedia__topRight\">\n              <ion-toggle\n                (ionChange)=\"topicToggle(topic)\"\n                [(ngModel)]=\"topic.status\"\n                style=\"position: relative; top: 5px\"\n              >\n                Topic\n              </ion-toggle>\n            </div>\n            <!--<ion-thumbnail slot=\"start\" class=\"ionMedia__media\">-->\n            <!--<img src=\"../../assets/img/user_icon.png\">-->\n            <!--</ion-thumbnail>-->\n            <ion-label class=\"ion-text-wrap\">\n              <h2 class=\"ionMedia__heading\">{{topic?.name}}</h2>\n              <p class=\"ionMedia__text\">{{topic?.description}}</p>\n              <!--              <p class=\"ionMedia__text text-dark\">13 Oct 19</p>-->\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <!--      Prayer wall notifications switch-->\n      <ion-row class=\"ion-align-items-center mb-30\">\n        <ion-col size=\"9\">\n          <h3 class=\"heading3 ion-no-margin\" *ngIf=\"ch_id != '1000'\">\n            {{'SETTINGS.PrayerwallNotifications' | translate}}\n          </h3>\n          <h3 class=\"heading3 ion-no-margin\" *ngIf=\"ch_id == '1000'\">\n            {{'Notifications' | translate}}\n          </h3>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-text-right\">\n          <ion-toggle\n            style=\"position: relative; top: 5px\"\n            color=\"light\"\n            (ionChange)=\"setPrayerwallNotifications()\"\n            [checked]=\"prayerwall_notofication_enable\"\n          >\n            Prayer Wall\n          </ion-toggle>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"ion-align-items-center mb-10\"\n        *ngIf=\"ch_id && ch_id !== '1000' && ch_id !== '1233'\"\n      >\n        <ion-col size=\"12\">\n          <ion-item (click)=\"languageSearching()\" class=\"inputField\" lines=\"none\">\n            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n              <ion-icon name=\"options\"></ion-icon>\n            </ion-buttons>\n            <ion-label>{{'SETTINGS.Language' | translate}}</ion-label>\n            <ion-label class=\"languageText\">{{lang}}</ion-label>\n            <!-- <ion-select\n              interface=\"action-sheet\"\n              [(ngModel)]=\"lang\"\n              name=\"lang\"\n              class=\"inputField__area inputField__area--select\"\n              (ionChange)=\"changeLang(lang)\"\n            >\n              <ion-select-option\n                value=\"offering\"\n                *ngFor=\"let item of languages\"\n                [value]=\"item.lang\"\n                >{{item.lang}}\n              </ion-select-option>\n            </ion-select> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"ch_id && ch_id === '1000'\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"openTranslationsModalTwo()\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <div _ngcontent-nwg-c2=\"\" class=\"imgDiv lang-img cursor-pointer\">\n              <img\n                _ngcontent-nwg-c2=\"\"\n                class=\"imgDiv__img\"\n                src=\"assets/img/translations.png\"\n              />\n            </div>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.app_language' | translate}}</ion-label\n            >\n            <p style=\"float: right; font-size: small\">{{lang}}</p>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-align-items-center mb-10\">\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"locationSetting()\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n              <ion-icon name=\"pin\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.location_setting' | translate}}</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!--      // for ISM-->\n      <ion-row\n        *ngIf=\"ch_id && ch_id === '1000'\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"openabouturlinapp('https://pb.connect.unitelife.com/')\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons class=\"inputField__icon\">\n              <ion-icon name=\"search\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.find_a_church' | translate}}</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"ch_id && ch_id === '1000'\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"shareApp()\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n              <ion-icon name=\"share\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.share_the_app' | translate}} PressBible\n              App</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row\n        *ngIf=\"ch_id && ch_id != '1000' && android_url || ios_url\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"shareApp(ch_id)\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n              <ion-icon name=\"share\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.share_this_app' | translate}}</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row\n        *ngIf=\"ch_id && ch_id === '1000'\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"openModal(ch_id)\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons class=\"inputField__icon\">\n              <ion-icon name=\"thumbs-up\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >PressBible {{'SETTINGS.feedback' | translate}}</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"ch_id && ch_id === '1000'\"\n        class=\"ion-align-items-center mb-10\"\n      >\n        <ion-col size=\"12\">\n          <ion-item\n            (click)=\"openabouturlinapp('https://ism.bible/about/')\"\n            class=\"inputField ion-text-left\"\n            lines=\"none\"\n          >\n            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </ion-buttons>\n            <ion-label style=\"font-size: small\"\n              >{{'SETTINGS.about' | translate}} ISM.bible</ion-label\n            >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"userLoggedIn\"\n        class=\"ion-align-items-center mb-10 cursor-pointer\"\n        (click)=\"openDeleteAccount()\"\n      >\n        <ion-col size=\"9\">\n          <h3 class=\"heading3 ion-no-margin\">\n            {{'SETTINGS.account_settings' | translate}}\n          </h3>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-text-right\">\n          <ion-icon\n            mode=\"ios\"\n            style=\"font-size: 22px; position: relative; top: 4px\"\n            name=\"arrow-dropright\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <app-footer *ngIf=\"ch_id != '1000'\"></app-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");










const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]],
        providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lang-img {\n  width: 44px;\n  height: 46px;\n  border-radius: 50%;\n  padding: 0 6px;\n}\n\n.languageText {\n  text-align: end;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmctaW1ne1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMCA2cHg7XG59XG4ubGFuZ3VhZ2VUZXh0e1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLmxhbmctaW1nIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuLmxhbmd1YWdlVGV4dCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dark-mode.service */ "./src/services/dark-mode.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./email/email.component */ "./src/app/settings/email/email.component.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _common_bible_translations_bible_translations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/bible-translations/bible-translations.component */ "./src/app/common/bible-translations/bible-translations.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/open-native-settings/ngx */ "./node_modules/@ionic-native/open-native-settings/ngx/index.js");
/* harmony import */ var _common_languagepopup_languagepopup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/languagepopup/languagepopup.component */ "./src/app/common/languagepopup/languagepopup.component.ts");




















let SettingsPage = class SettingsPage {
    constructor(location, darkModeService, statusBar, apiService, storage, common, device, platform, modalController, event_provider, translate, iab, alertController, menu, socialSharing, loader, router, nativeSetting) {
        this.location = location;
        this.darkModeService = darkModeService;
        this.statusBar = statusBar;
        this.apiService = apiService;
        this.storage = storage;
        this.common = common;
        this.device = device;
        this.platform = platform;
        this.modalController = modalController;
        this.event_provider = event_provider;
        this.translate = translate;
        this.iab = iab;
        this.alertController = alertController;
        this.menu = menu;
        this.socialSharing = socialSharing;
        this.loader = loader;
        this.router = router;
        this.nativeSetting = nativeSetting;
        this.darkmode = false;
        this.type = false;
        this.is_mobile = false;
        this.prayerwall_notofication_enable = false;
        this.isprayerwallnotifyenable = 'false';
        this.languages = [];
        this.languageCodes = [];
        this.lang = '';
        this.userLoggedIn = false;
        this.options = {
            closebuttoncaption: 'Close',
            closebuttoncolor: '#FFFFFF',
            disallowoverscroll: 'no',
            hidenavigationbuttons: 'no',
            toolbar: 'yes',
            toolbarposition: 'top',
            location: 'yes'
        };
    }
    ionViewDidEnter() {
        this.event_provider.hidefooter(true, 'other');
    }
    ngOnInit() {
        this.getUser();
        this.darkmode = this.darkModeService.getDark_mode();
        if (localStorage.getItem('is_prayerwall_notofication_enable') == 'true') {
            this.prayerwall_notofication_enable = true;
        }
        else {
            this.prayerwall_notofication_enable = false;
        }
        this.storage.get('app_url').then((res) => {
            if (res && res.appStoreUrl) {
                this.ios_url = res.appStoreUrl;
                this.android_url = res.playStoreUrl;
            }
        });
        // getting theme from local storage
        this.storage.get("theme").then(res => {
            if (res) {
                this.ch_id = res.ch_id;
                if (this.ch_id === '1000') {
                    let lang = JSON.parse(localStorage.getItem('ism_app_language'));
                    this.lang = lang.name;
                }
                if (this.ch_id == 1186 || this.ch_id == '1186') {
                    this.languages.push("Chinese");
                }
                this.platform.ready().then(() => {
                    if (localStorage.getItem('device_id')) {
                        this.device_id = localStorage.getItem('device_id');
                    }
                    if (this.ch_id == "1265" || this.ch_id == "54") {
                        this.languages.push("Chinese");
                        this.languages.push("Hindi");
                        this.languages.push("Tamil");
                        this.languages.push("Telugu");
                    }
                    this.storage.get('app_language').then((res) => {
                        if (res) {
                            this.languages = res.languages;
                            this.lang = res.name;
                        }
                        else {
                            this.languages = [{
                                    bible_id: '78a9f6124f344018-01',
                                    lang: 'English',
                                    lang_code: 'en'
                                }, {
                                    bible_id: '',
                                    lang: 'Spanish',
                                    lang_code: 'es'
                                }, {
                                    bible_id: '',
                                    lang: 'Arabic',
                                    lang_code: 'ar'
                                }, {
                                    bible_id: '',
                                    lang: 'French',
                                    lang_code: 'fr'
                                }];
                            this.lang = 'English';
                        }
                    });
                    // this.apiService.getAllLanguages({church_id : this.ch_id}).subscribe((res : any) => {
                    //     const lang: any = localStorage.getItem('app_language');
                    //     if(res.status) {
                    //         this.languages = res.languages;
                    //         const result = this.languages.some(item => 
                    //             item.lang_code === lang
                    //           )                       
                    //         this.languages.forEach((elem) => {                           
                    //             this.languageCodes.push(elem.lang_code);
                    //             if(result) {
                    //                 if(lang == elem.lang_code){
                    //                     this.lang = elem.lang;
                    //                     let app_language = {
                    //                         code: elem.lang_code,
                    //                         name: elem.lang,
                    //                         bible_id : elem.bible_id,
                    //                         languages : this.languages
                    //                       };
                    //                       this.storage.set('app_language', app_language);          
                    //                 }
                    //             } else {
                    //                 this.lang = 'English';
                    //             }                         
                    //         })
                    //     } else {
                    //         this.languages = [{
                    //              bible_id : '78a9f6124f344018-01' ,
                    //              lang : 'English' ,
                    //              lang_code : 'en'
                    //             },{
                    //              bible_id : '' ,
                    //              lang : 'Spanish' ,
                    //              lang_code : 'es'
                    //             },{
                    //              bible_id : '' ,
                    //              lang : 'Arabic' ,
                    //              lang_code : 'ar'
                    //             },{
                    //              bible_id : '' ,
                    //              lang : 'French' ,
                    //              lang_code : 'fr'
                    //             }];
                    //         this.languages.forEach((elem) => {
                    //             this.languageCodes.push(elem.lang_code);
                    //             if(lang == elem.lang_code){
                    //                 this.lang = elem.lang;
                    //                 let app_language = {
                    //                     code: elem.lang_code,
                    //                     name: elem.lang,
                    //                     bible_id : elem.bible_id,
                    //                     languages : this.languages
                    //                   };
                    //                   this.storage.set('app_language', app_language);          
                    //             }
                    //         })
                    //     }
                    //     this.translate.addLangs(this.languageCodes);                
                    // })
                    // getting toggle status
                    if (this.is_mobile) {
                        this.getPrayerWallToggleStatus();
                    }
                    this.getPrayerWallToggleStatus();
                    this.getTopics(this.ch_id);
                });
            }
        });
        // this.translate.setDefaultLang('en');
        // getting lang
        // this.storage.get('app_language').then( (res: any) => {
        //     if (res){
        //         this.lang = res.name;
        //     } else {
        //         this.lang = 'English';
        //     }
        // })
    }
    getUser() {
        // getting user from local storage
        this.storage.get('user').then(res => {
            if (res != null && res != 'guest') {
                this.userLoggedIn = true;
            }
        });
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal;
            modal = yield this.modalController.create({
                component: _email_email_component__WEBPACK_IMPORTED_MODULE_12__["EmailComponent"],
                cssClass: 'CommentModal',
                componentProps: {}
            });
            modal.onDidDismiss().then(res => {
            });
            return yield modal.present();
        });
    }
    openTranslationsModalTwo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.getItem('ism_app_language')) {
                let lang = JSON.parse(localStorage.getItem('ism_app_language'));
                this.lang = lang.name;
            }
            else {
                let app_language = {
                    code: 'en',
                    name: 'English'
                };
                localStorage.setItem('ism_app_language', JSON.stringify(app_language));
                document.dir = "ltr";
                this.lang = app_language.name;
            }
            const modal = yield this.modalController.create({
                component: _common_bible_translations_bible_translations_component__WEBPACK_IMPORTED_MODULE_14__["BibleTranslationsComponent"],
                cssClass: 'TranslationModel',
                componentProps: {
                    filtered_volumes: '',
                    selected_lang: '',
                    selected_vol: '',
                    all_langs: '',
                    app_lang: this.lang
                }
            });
            modal.onDidDismiss().then((res) => {
                if (res) {
                    let lang = JSON.parse(localStorage.getItem('ism_app_language'));
                    this.lang = lang.name;
                }
            });
            return yield modal.present();
        });
    }
    changeLang(lang) {
        this.languages.forEach((elem) => {
            if (lang === elem.lang) {
                this.translate.setDefaultLang(elem.lang_code);
                let app_language = {
                    code: elem.lang_code,
                    name: elem.lang,
                    bible_id: elem.bible_id,
                    languages: this.languages
                };
                this.storage.set('app_language', app_language);
                localStorage.setItem('app_language', app_language.code);
                this.event_provider.changeapplanguage(true);
                document.dir = "ltr";
            }
        });
    }
    // setting mobile mode on toggle change
    setMode() {
        if (this.darkmode === false) {
            this.statusBar.backgroundColorByHexString("#292929");
            // this.events.publish('change-darkmode');
            this.event_provider.changedarkmode(); // calling event
            this.event_provider.changedarkmodeagain(true); // calling event
            this.darkmode = true;
            this.darkModeService.setDark_mode(this.darkmode);
            localStorage.setItem('app_style', '2');
        }
        else {
            this.darkmode = false;
            if (!this.platform.is('android')) {
                this.statusBar.backgroundColorByHexString("#FFFFFF");
            }
            // this.events.publish('change-darkmode');
            this.event_provider.changedarkmode(); // calling event
            this.event_provider.changedarkmodeagain(false); // calling event
            this.darkModeService.setDark_mode(this.darkmode);
            localStorage.setItem('app_style', '1');
        }
    }
    getTopics(ch_id) {
        this.apiService.get_topics(ch_id, this.device_id).subscribe((res) => {
            if (res) {
                if (res.status) {
                    this.topics = res.topics;
                }
            }
        });
    }
    topicToggle(topic) {
        const body = JSON.stringify({
            church_id: this.ch_id,
            device_id: this.device_id,
            topic_id: topic.id,
            topic_name: topic.name,
            type: topic.status,
            sub_id: topic.subscribe_id
        });
        this.apiService.topic_subscribe(body).subscribe((res) => {
            if (res && res.status) {
                this.getTopics(this.ch_id);
            }
        });
    }
    // subscription to prayer wall notifications
    setPrayerwallNotifications() {
        // this.loader.presentLoading().then(() => {});
        this.prayerwall_notofication_enable = !this.prayerwall_notofication_enable;
        if (this.prayerwall_notofication_enable) {
            localStorage.setItem('is_prayerwall_notofication_enable', 'true');
        }
        else {
            localStorage.setItem('is_prayerwall_notofication_enable', 'false');
        }
        const body = JSON.stringify({
            church_id: this.ch_id,
            device_id: this.device_id,
            type: this.prayerwall_notofication_enable
        });
        this.apiService.prayerwall_notification_subscribe(body).subscribe((res) => {
            if (res && res.status) {
            }
            // this.loader.stopLoading();
        }, (err) => {
            // this.loader.stopLoading();
        });
    }
    // get Status of prayer wall notification subscription of current device
    getPrayerWallToggleStatus() {
        // this.loader.presentLoading().then(() => {});
        const body = JSON.stringify({
            church_id: this.ch_id,
            device_id: this.device_id,
        });
        this.apiService.getPrayerWallToggleStatus(body).subscribe((res) => {
            if (res && res.status) {
                this.prayerwall_notofication_enable = res.toggle_value;
            }
            // this.loader.stopLoading();
        }, (err) => {
            // this.loader.stopLoading();
        });
    }
    // inside app on page with done button
    openabouturlinapp(url) {
        // about url
        let link = url;
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(link, '_blank', this.options);
        }
        else {
            this.iab.create(link, '_self', this.options);
        }
        // this.iab.create(url, '_blank');
    }
    // inside app on page with done button
    openshareurlinapp() {
        // share url
        let url = "https://pressbible.com/";
        if (this.platform.is('android') || this.platform.is('iphone')) {
            this.iab.create(url, '_blank', this.options);
        }
        else {
            this.iab.create(url, '_self', this.options);
        }
        // this.iab.create(url, '_blank');
    }
    showcontact() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Contact Us',
                message: "For Technical Support Queries, contact at (+1 214 494 1147) or Email at (info@ism.com)"
            });
            yield alert.present();
        });
    }
    openDeleteAccount() {
        this.router.navigate(['/account-setting']);
    }
    // navigating to back page
    gotobackPage() {
        if (this.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    }
    shareApp(ch_id) {
        if (ch_id === "1000") {
            this.socialSharing.share('PressBible is an easy way to press into the Word and learn more about the Bible. Download it at, https://pressbible.com').then(data => {
            }, error => {
            });
        }
        else {
            this.share_text = "Learn_more";
            this.translate.get(this.share_text).subscribe((res) => {
                this.share_text = res;
                this.socialSharing.share(this.share_text + (this.android_url ? this.android_url + '(Play Store) ,' : '') + (this.ios_url ? this.ios_url + '(App Store)' : '')).then(data => {
                }, error => {
                });
            });
        }
    }
    locationSetting() {
        this.nativeSetting.open('locations').then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    languageSearching() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.languages, "add lang ");
            const modal = yield this.modalController.create({
                component: _common_languagepopup_languagepopup_component__WEBPACK_IMPORTED_MODULE_19__["LanguagepopupComponent"],
                cssClass: 'BibleModal',
                componentProps: {
                    languages: this.languages
                }
            });
            modal.onDidDismiss().then((res) => {
                console.log(res);
                if (res.data.selectLang) {
                    this.translate.setDefaultLang(res.data.selectLang.lang_code);
                    let app_language = {
                        code: res.data.selectLang.lang_code,
                        name: res.data.selectLang.lang,
                        bible_id: res.data.selectLang.bible_id,
                        languages: this.languages,
                        dam_id: res.data.selectLang.dam_id,
                        audio_id: res.data.selectLang.audio_id
                    };
                    this.lang = res.data.selectLang.lang;
                    this.storage.set('app_language', app_language);
                    localStorage.setItem('app_language', app_language.code);
                    this.event_provider.changeapplanguage(true);
                    document.dir = "ltr";
                }
            });
            return yield modal.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_3__["DarkModeService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] },
    { type: _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__["OpenNativeSettings"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _email_email_component__WEBPACK_IMPORTED_MODULE_12__["EmailComponent"]],
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_dark_mode_service__WEBPACK_IMPORTED_MODULE_3__["DarkModeService"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"],
        src_services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"],
        _ionic_native_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_18__["OpenNativeSettings"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map