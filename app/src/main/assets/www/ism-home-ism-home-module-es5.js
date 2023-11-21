(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-home-ism-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-home/ism-home.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-home/ism-home.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ionCard--mobile\">\n                <P class=\"ion-text-center\">{{'ISM_HOME.find_hope_message' | translate}}</P>\n                <ion-slides [pager]=\"hometop_posts.length > 1\" [options]=\"slideOpts\" class=\"ion-margin-bottom\">\n                    <ion-slide *ngFor=\"let post of hometop_posts\">\n<!--                        [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\"-->\n                        <ion-card class=\"ionCard ion-no-margin ion-margin-bottom ionCard--backGroundBg ionCard--backGroundBg--medium cursor-pointer\"\n                                  Style=\"width: 100%\" [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                            <!--<video *ngIf=\"card.upload_video === 'true'\" class=\"embed-responsive embed-responsive-21by9\" autoplay muted loop id=\"myVideo\">-->\n                            <!--<source class=\"embed-responsive-item\" [src]=\"card.background\" type=\"video/mp4\">-->\n                            <!--</video>-->\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"ion-align-items-end\">\n                                        <ion-col [sizeLg]=\"8\" class=\"ion-text-left\">\n                                            <div style=\"margin-bottom: 5px;\">\n                                                <ion-label *ngIf=\"post.title[0]\" class=\"heading2 ionCard--backGroundBg__heading\">\n                                                    {{post.title[0]}}\n                                                </ion-label>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-slide>\n                    <ion-slide *ngIf=\"hometop_posts.length === 0\">\n                       <p> {{'ISM_HOME.no_post_available' | translate}}</p>\n                    </ion-slide>\n                </ion-slides>\n                <div style=\"margin-top: 60px;\">\n                    <P class=\"ion-text-center\">{{'ISM_HOME.discover_message' | translate}}</P>\n                </div>\n                <ion-card *ngFor=\"let post of homebottom_posts\" class=\"ionCard ion-no-margin ion-margin-bottom ionCard--backGroundBg ionCard--backGroundBg--big cursor-pointer\"\n                         [ngStyle]=\"{'background': 'url(' + ( post.image ? post.image : '../../assets/img/live_stream_bg_2.jpg' ) + ')  no-repeat'}\">\n                    <!--<video *ngIf=\"card.upload_video === 'true'\" class=\"embed-responsive embed-responsive-21by9\" autoplay muted loop id=\"myVideo\">-->\n                        <!--<source class=\"embed-responsive-item\" [src]=\"card.background\" type=\"video/mp4\">-->\n                    <!--</video>-->\n                    <div class=\"ionCard--backGroundBg__footer\">\n                        <ion-grid>\n                            <ion-row class=\"ion-align-items-end\">\n                                <ion-col [sizeLg]=\"8\">\n                                    <div style=\"margin-bottom: 5px;\">\n                                        <ion-label  *ngIf=\"post.title[0]\" class=\"heading2 ionCard--backGroundBg__heading\">\n                                            {{post.title[0]}}\n                                        </ion-label>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-card>\n                    <p class=\"ion-text-center\" *ngIf=\"homebottom_posts.length === 0\"> {{'ISM_HOME.no_post_available' | translate}}</p>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ism-home/ism-home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ism-home/ism-home.module.ts ***!
  \*********************************************/
/*! exports provided: IsmHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmHomePageModule", function() { return IsmHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-home.page */ "./src/app/ism-home/ism-home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _ism_home_page__WEBPACK_IMPORTED_MODULE_6__["IsmHomePage"]
    }
];
var IsmHomePageModule = /** @class */ (function () {
    function IsmHomePageModule() {
    }
    IsmHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ism_home_page__WEBPACK_IMPORTED_MODULE_6__["IsmHomePage"]]
        })
    ], IsmHomePageModule);
    return IsmHomePageModule;
}());



/***/ }),

/***/ "./src/app/ism-home/ism-home.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ism-home/ism-home.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-div {\n  border-radius: 25px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2lzbS1ob21lL2lzbS1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaXNtLWhvbWUvaXNtLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaXNtLWhvbWUvaXNtLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLWRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59IiwiLnNsaWRlLWRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/ism-home/ism-home.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ism-home/ism-home.page.ts ***!
  \*******************************************/
/*! exports provided: IsmHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmHomePage", function() { return IsmHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");







var IsmHomePage = /** @class */ (function () {
    function IsmHomePage(sermonsService, storage, route, idService, loader) {
        this.sermonsService = sermonsService;
        this.storage = storage;
        this.route = route;
        this.idService = idService;
        this.loader = loader;
        this.slideOpts = {
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 15,
            initialSlide: 1,
            speed: 400,
            grabCursor: true,
        };
        this.hometop_posts = [];
        this.homebottom_posts = [];
    }
    IsmHomePage.prototype.ngOnInit = function () {
        this.getTheme();
        this.ch_id = this.route.snapshot.paramMap.get('id');
        // setting latest church ID
        this.idService.setId(this.ch_id);
    };
    IsmHomePage.prototype.getTheme = function () {
        var _this = this;
        // getting theme from local storage
        this.storage.get('theme').then(function (theme) {
            if (theme) {
                _this.theme = theme;
                _this.getHomeTopPosts(_this.theme.wp_site_apollo);
                _this.getHomeBottomPosts(_this.theme.wp_site_apollo);
            }
        });
    };
    IsmHomePage.prototype.getHomeTopPosts = function (url) {
        var self = this;
        // fetch notes by category
        this.sermonsService.getHomeTopPosts(url).subscribe(function (res) {
            // ======= parsing xml into JsSON format =============================
            var parseString = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js").parseString;
            parseString(res, function (err, result) {
                self.hometop_posts = result.rss.channel[0].item;
                if (self.hometop_posts.length > 0) {
                    self.hometop_posts.map(function (x) {
                        var attachment = x['content:encoded'][0];
                        if (attachment) {
                            var check = attachment.split('src="');
                            if (check[1]) {
                                var check2 = check[1].split('"');
                                if (check2[0]) {
                                    x['image'] = check2[0];
                                }
                            }
                        }
                    });
                }
            });
            // ======= parsing xml into JsSON format =============================
        });
    };
    IsmHomePage.prototype.getHomeBottomPosts = function (url) {
        var self = this;
        // fetch notes by category
        this.sermonsService.getHomeBottomPosts(url).subscribe(function (res) {
            // ======= parsing xml into JsSON format =============================
            var parseString = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js").parseString;
            parseString(res, function (err, result) {
                self.homebottom_posts = result.rss.channel[0].item;
                if (self.homebottom_posts.length > 0) {
                    self.homebottom_posts.map(function (x) {
                        var attachment = x['content:encoded'][0];
                        if (attachment) {
                            var check = attachment.split('src="');
                            if (check[1]) {
                                var check2 = check[1].split('"');
                                if (check2[0]) {
                                    x['image'] = check2[0];
                                }
                            }
                        }
                    });
                }
            });
            // ======= parsing xml into JsSON format =============================
        });
    };
    IsmHomePage.ctorParameters = function () { return [
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_2__["SermonService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_5__["IdService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    IsmHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ism-home',
            template: __webpack_require__(/*! raw-loader!./ism-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-home/ism-home.page.html"),
            styles: [__webpack_require__(/*! ./ism-home.page.scss */ "./src/app/ism-home/ism-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_sermon_service__WEBPACK_IMPORTED_MODULE_2__["SermonService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_id_service__WEBPACK_IMPORTED_MODULE_5__["IdService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], IsmHomePage);
    return IsmHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=ism-home-ism-home-module-es5.js.map