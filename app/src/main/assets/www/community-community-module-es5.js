(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-community-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/community/community.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/community/community.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border>\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon *ngIf=\"page_name\" name=\"arrow-back\"></ion-icon>&nbsp;{{page_name}}\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <div *ngIf=\"banner_image || banner_desc || banner_title\" class=\"banner\"\n         [ngStyle]=\"{'background': 'url(' + banner_image + ')  no-repeat'}\">\n        <div class=\"banner__layer\"></div>\n        <div class=\"banner__content\">\n            <div class=\"app-container ion-text-center\">\n                <h1 class=\"ion-no-margin heading1 banner__heading\">{{banner_title}}</h1>\n                <p class=\"ion-no-margin banner__text\">{{banner_desc}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n<!--                <ion-item class=\"inputField\" lines=\"none\">-->\n<!--                    <ion-buttons slot=\"start\" class=\"inputField__icon\">-->\n<!--                        <ion-icon name=\"person\"></ion-icon>-->\n<!--                    </ion-buttons>-->\n<!--                    <ion-label>All People</ion-label>-->\n<!--                    <ion-select [(ngModel)]=\"friend_id\" interface=\"action-sheet\"-->\n<!--                                name=\"friend\"-->\n<!--                                class=\"inputField__area inputField__area&#45;&#45;select\">-->\n<!--                        <ion-select-option-->\n<!--                                *ngFor=\"let item of community\"-->\n<!--                                [value]=\"item.id\">{{item.first_last_name}}-->\n<!--                        </ion-select-option>-->\n<!--                    </ion-select>-->\n<!--                </ion-item>-->\n\n                <div class=\"ion-margin-bottom\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_input\"\n                                   class=\"inputField__area \" inputmode=\"text\"\n                                   placeholder=\"{{'COMMUNITY.search_placeholder' | translate}}\"\n                                   name=\"guest\"></ion-input>\n                    </ion-item>\n                </div>\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\n                        <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">\n                            <table class=\"peopleTable\">\n                                <tr>\n                                    <th></th>\n                                    <th>Name</th>\n                                    <th>Email</th>\n                                    <th>Phone</th>\n                                </tr>\n                                <tr class=\"peopleTable__tr\" *ngFor=\"let row of community | filter: search_input\" (click)=\"show_person(row)\">\n                                    <td>\n                                        <ion-icon name=\"person\"></ion-icon>\n                                    </td>\n                                    <td>{{row.first_last_name ? row.first_last_name : 'N/A'}}</td>\n                                    <td>{{row.email ? row.email : 'N/A'}}</td>\n                                    <td>{{row.phone ? row.phone : 'N/A'}}</td>\n                                </tr>\n                            </table>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row  class=\"ion-align-items-center mt-40\" *ngIf=\"person\">\n                  <h4 class=\"ion-no-margin heading4\">Add Person</h4>\n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                        <div style=\"overflow:auto; max-height: 250px\" class=\"mb-30\">\n                            <table class=\"peopleTable\">\n                                <tr>\n                                    <th></th>\n                                    <th>Name</th>\n                                    <th>Email</th>\n                                    <th>Phone</th>\n                                </tr>\n                                <tr class=\"peopleTable__tr\">\n                                    <td>\n                                        <ion-icon name=\"person\"></ion-icon>\n                                    </td>\n                                    <td>{{person.first_last_name}}</td>\n                                    <td>{{person.email}}</td>\n                                    <td>{{person.phone}}</td>\n                                </tr>\n                            </table>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <ion-col [size]=\"12\">\n                <div class=\"ion-margin-bottom\">\n                    <ion-button [disabled]=\"!friend_id\" (click)=\"addInCommunity()\" routerDirection=\"root\"\n                                class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\n                        {{'COMMUNITY.add_to_community' | translate}}\n                    </ion-button>\n                </div>\n            </ion-col>\n\n            <!--        <div class=\"embed-responsive embed-responsive-16by9\" style=\"height: 1000px\">-->\n            <!--          <iframe class=\"embed-responsive-item\" width=\"100%\" height=\"100%\"-->\n            <!--                  src=\"https://www.bible.com/bible/1/JHN.2.kjv\"-->\n            <!--                  frameborder=\"0\" allowfullscreen=\"\"></iframe>-->\n            <!--        </div>-->\n        </div>\n    </div>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/community/community.module.ts":
/*!***********************************************!*\
  !*** ./src/app/community/community.module.ts ***!
  \***********************************************/
/*! exports provided: CommunityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community.page */ "./src/app/community/community.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var routes = [
    {
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]
    }
];
var CommunityPageModule = /** @class */ (function () {
    function CommunityPageModule() {
    }
    CommunityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
            ],
            declarations: [_community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]]
        })
    ], CommunityPageModule);
    return CommunityPageModule;
}());



/***/ }),

/***/ "./src/app/community/community.page.scss":
/*!***********************************************!*\
  !*** ./src/app/community/community.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".peopleTable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-bottom-color: white;\n}\n.peopleTable__tr {\n  text-align: left;\n  padding: 8px;\n  height: 50px;\n}\n.peopleTable__tr--active {\n  background: #eae5e5;\n}\n.peopleTable__tr:hover {\n  background: #eae5e5;\n}\nth, td {\n  text-align: left;\n  padding: 8px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic3JjL2FwcC9jb21tdW5pdHkvY29tbXVuaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNFLG1CQUFBO0FDR047QURBRTtFQUNFLG1CQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlb3BsZVRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgJl9fdHJ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgICYtLWFjdGl2ZXtcbiAgICAgIGJhY2tncm91bmQ6ICNlYWU1ZTU7XG4gICAgfVxuICB9XG4gICZfX3RyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNlYWU1ZTU7XG4gIH1cbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbiIsIi5wZW9wbGVUYWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG59XG4ucGVvcGxlVGFibGVfX3RyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ucGVvcGxlVGFibGVfX3RyLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWFlNWU1O1xufVxuLnBlb3BsZVRhYmxlX190cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlYWU1ZTU7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/community/community.page.ts":
/*!*********************************************!*\
  !*** ./src/app/community/community.page.ts ***!
  \*********************************************/
/*! exports provided: CommunityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPage", function() { return CommunityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");













var CommunityPage = /** @class */ (function () {
    function CommunityPage(route, loader, storage, sermonsService, dom, router, location, common, toast, apiService, translate, event_provider) {
        var _this = this;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.dom = dom;
        this.router = router;
        this.location = location;
        this.common = common;
        this.toast = toast;
        this.apiService = apiService;
        this.translate = translate;
        this.event_provider = event_provider;
        this.isLoggedIn = false;
        this.selected_class_table = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    CommunityPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.event_provider.getChurchData.subscribe(function (res) {
                    if (!(Object.keys(res).length === 0)) {
                        _this.ch_id = res.church.ch_id;
                        // saving app_pages
                        _this.common.store_app_pages(res.apppages, 'Community');
                        _this.common.storeTheme(res.church);
                        var app_pages = res.apppages.find(function (x) { return x.id === _this.route.snapshot.queryParams.page_id; });
                        if (app_pages) {
                            _this.banner_image = app_pages.website_banner;
                            _this.banner_desc = app_pages.banner_description;
                            _this.banner_title = app_pages.banner_title;
                            _this.page_name = app_pages.title;
                            _this.link_code = app_pages.url;
                            _this.grad_color = app_pages.grad_color_1;
                            _this.opacity_color = app_pages.opacity_color;
                            if (app_pages.password_protection_toggle === 'true') {
                                _this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                            }
                        }
                        _this.getAllPeople();
                    }
                });
                this.storage.get('user').then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (val != null && val != 'guest') {
                            this.isLoggedIn = true;
                            this.acc_donor_id = val.user.id;
                            this.auth = val.auth;
                            this.getRequestedPeople();
                        }
                        else {
                            // FOR GUEST
                            this.isLoggedIn = false;
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    CommunityPage.prototype.getChurchDetails = function (churchId) {
        var _this = this;
        var body = JSON.stringify({ id: churchId });
        this.common.getTheme(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // storing app pages
                    return [4 /*yield*/, this.common.store_app_pages(res.apppages, 'GCD from app.ts')];
                    case 1:
                        // storing app pages
                        _a.sent();
                        return [4 /*yield*/, this.common.storeTheme(res.church)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            var message = err.message;
            _this.loader.stopLoading();
            _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    CommunityPage.prototype.getAllPeople = function () {
        var _this = this;
        console.log(this.link_code);
        if (this.link_code !== undefined && this.link_code !== '') {
            var body = JSON.stringify({
                linkcode: this.link_code
            });
            this.apiService.get_community(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.community = res.friend;
                    return [2 /*return*/];
                });
            }); }, function (err) {
                var message = err.message;
                _this.loader.stopLoading();
                _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        }
    };
    CommunityPage.prototype.addInCommunity = function () {
        var _this = this;
        if (this.isLoggedIn) {
            var result = void 0;
            if (this.requested_people) {
                result = this.requested_people.filter(function (x) { return x.friend_id === _this.friend_id; });
            }
            else {
                result = [];
            }
            if (result.length === 0) {
                var body = JSON.stringify({
                    auth: 'Bearer ' + this.auth.access_token,
                    church_id: this.ch_id,
                    account_donor_id: this.acc_donor_id,
                    friend_id: this.friend_id
                });
                this.apiService.add_in_community(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (res.status) {
                            this.friend_id = '';
                            this.person = '';
                            this.getRequestedPeople();
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.AddedCommunity : 'Added to Community'), (this.alertMessage ? this.alertMessage.Success : 'Success'), 'success');
                        }
                        return [2 /*return*/];
                    });
                }); }, function (err) {
                    var message = err.message;
                    _this.loader.stopLoading();
                    _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                });
            }
            else {
                this.friend_id = '';
                this.person = '';
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.already_in_community : 'Already in your community'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            }
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_add_in_community : 'Login to add in community'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        }
    };
    CommunityPage.prototype.getRequestedPeople = function () {
        var _this = this;
        this.apiService.get_requested_people(this.acc_donor_id, this.ch_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.requested_people = res.friend;
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.message;
            _this.loader.stopLoading();
            _this.toast.presentToastWithOptions(message, (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        });
    };
    CommunityPage.prototype.show_person = function (obj) {
        this.person = obj;
        this.friend_id = obj.id;
    };
    CommunityPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    CommunityPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] }
    ]; };
    CommunityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! raw-loader!./community.page.html */ "./node_modules/raw-loader/index.js!./src/app/community/community.page.html"),
            styles: [__webpack_require__(/*! ./community.page.scss */ "./src/app/community/community.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_5__["SermonService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"]])
    ], CommunityPage);
    return CommunityPage;
}());



/***/ })

}]);
//# sourceMappingURL=community-community-module-es5.js.map