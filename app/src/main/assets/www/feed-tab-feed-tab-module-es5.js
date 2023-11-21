(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-tab-feed-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/feed-tab/feed-tab.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feed-tab/feed-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ion-list lines=\"none\" class=\"location-list\" style=\"margin-top: -15px;\">\n                <ion-item *ngFor=\"let news of news; let i = index\" class=\"ionMedia\" style=\"--inner-padding-end: 0;\">\n                    <div class=\"ionMedia__media\">\n                        <ion-avatar slot=\"start\" *ngIf=\"!news.photo_profile\">\n                            <img src=\"../../assets/img/user_icon.png\">\n                        </ion-avatar>\n                        <ion-avatar slot=\"start\" *ngIf=\"news.photo_profile\">\n                            <img [src]=\"news.photo_profile\">\n                        </ion-avatar>\n                    </div>\n                    <ion-label *ngIf=\"news.type !== 'Campaign'\" class=\"ion-text-wrap\"\n                               (click)=\"gotoPage(news.type_id, news.type)\">\n                        <h4 class=\"heading4\" style=\"padding: 0 10px; font-size: 18px;font-weight: 600;\" *ngIf=\"news.first_last_name\">{{news.first_last_name}}</h4>\n                        <h4 class=\"heading4\" style=\"padding: 0 10px; font-size: 18px;font-weight: 600;\" *ngIf=\"!news.first_last_name\">{{'FEED.Anonymous' | translate}}</h4>\n                        <p style=\"padding: 0 10px; margin-bottom: 10px; font-size: 14px;\">{{news.created_at}}</p>\n                        <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile\" style=\"margin: 0 10px 10px;\">\n                            <div *ngIf=\"news.attachment\" class=\"embed-responsive embed-responsive-16by9\">\n                                <img *ngIf=\"!news.video\" class=\"embed-responsive-item\" [src]=\"news.attachment\"/>\n                                <video *ngIf=\"news.video\" width=\"320\" height=\"240\" controls>\n                                    <source [src]=\"news.attachment\" type=\"video/mp4\">\n                                    {{'NOSUPPORT.video' | translate}}\n                                </video>\n                            </div>\n                            <div *ngIf=\"news.type === 'Sermon'\" class=\"ionCard__topRight\" style=\"top:4px; right: 10px; z-index:2\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\"\n                                            style=\"min-width: 60px; height: 25px;\">{{'FEED.sermon' | translate}}\n                                </ion-button>\n                            </div>\n                            <div *ngIf=\"news.type === 'Event'\" class=\"ionCard__topRight\" style=\"top:4px; right: 10px; z-index:2\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\"\n                                            style=\"min-width: 60px; height: 25px;\">{{'FEED.event' | translate}}\n                                </ion-button>\n                            </div>\n\n                            <ion-card-content>\n                                <ion-card-title class=\"heading4\">{{news.title}}</ion-card-title>\n                                <!-- <p>{{news.description}}</p> -->\n                                <div (click)=\"stopoverwrite($event)\" [innerHTML]=\"news.description\"></div>\n                                <p *ngIf=\"news.who_need\"><b>{{'FEED.in_need_message' | translate}}\n                                    :</b> {{news.who_need}}</p>\n                                <p *ngIf=\"news.deadline_need\"><b>{{'FEED.deadline' | translate}}\n                                    :</b> {{news.deadline_need}}</p>\n                                <p *ngIf=\"news.type === 'Event'\"> {{appService.getDateTimeFormat(news.start_date)}} &nbsp; to\n                                    &nbsp; {{appService.getDateTimeFormat(news.end_date)}}</p>\n                                <div class=\"ionCard__footer\">\n                                    <ion-row class=\"ion-align-items-center\">\n                                        <ion-col [size]=\"12\" [sizeSm]=\"(news.who_need && news.deadline_need) ? 4 : 6\"\n                                                 class=\"ion-no-padding ion-margin-bottom\">\n                                            <ul class=\"list-inline commentAvatars\">\n                                                <li class=\"list-inline-item\">\n                                                    <ion-icon class=\"cursor-pointer\" (click)=\"createLike(i, $event)\"\n                                                              style=\"position: relative;top: 2px; font-size: 20px;\"\n                                                              name=\"thumbs-up\"></ion-icon>\n                                                </li>\n                                                <li class=\"list-inline-item\">\n                                                    <ion-text *ngIf=\"news.likes\">{{news.likes.length}}</ion-text>\n                                                    <ion-text *ngIf=\"!news.likes\">0</ion-text>\n                                                    &nbsp;{{'FEED.likes' | translate}}\n                                                </li>\n                                            </ul>\n                                        </ion-col>\n                                        <ion-col *ngIf=\"news.who_need && news.deadline_need\" [size]=\"12\" [sizeSm]=\"4\"\n                                                 class=\"ion-no-padding ion-margin-bottom\">\n                                            <ul class=\"list-inline commentAvatars\">\n                                                <li class=\"list-inline-item\">\n                                                    <ion-icon (click)=\"meetTheNeed(i)\" class=\"cursor-pointer\"\n                                                              style=\"position: relative;top: 2px; font-size: 20px;\"\n                                                              name=\"heart\"></ion-icon>\n                                                </li>\n                                                <li class=\"list-inline-item\">\n                                                    <ion-text *ngIf=\"news.needs\">{{news.needs.length}}</ion-text>\n                                                    <ion-text *ngIf=\"!news.needs\">0</ion-text>\n                                                    &nbsp;{{'FEED.meet_the_need' | translate}}\n                                                </li>\n                                            </ul>\n                                        </ion-col>\n                                        <ion-col [size]=\"12\" [sizeSm]=\"(news.who_need && news.deadline_need) ? 4 : 6\"\n                                                 class=\"ion-no-padding ion-margin-bottom ion-text-left ion-text-sm-right\">\n                                            <div (click)=\"showComments[i] = !showComments[i]\">\n                                                <ion-icon class=\"cursor-pointer\" name=\"chatboxes\"\n                                                          style=\"position: relative;top: 8px; font-size: 20px;\"></ion-icon>&nbsp;\n                                                <span *ngIf=\"news.comments\">{{news.comments.length}}</span>&nbsp;\n                                                <span *ngIf=\"!news.comments\">0</span>&nbsp;{{'FEED.comments' | translate}}\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </div>\n                                <div *ngIf=\"showComments[i]\" class=\"commentsWrapper\">\n                                    <div class=\"commentsWrapper__list\" lines=\"none\">\n                                        <ion-item *ngFor=\"let comment of news.comments;\" class=\"ionMedia\">\n                                            <div class=\"ionMedia__media\">\n                                                <ion-avatar slot=\"start\">\n                                                    <img [src]=\"comment.photo_profile ? comment.photo_profile : '../../assets/img/user_icon.png'\">\n                                                </ion-avatar>\n                                            </div>\n                                            <ion-label class=\"ion-text-wrap\">\n                                                <h3 class=\"ionMedia__heading\">{{comment.first_last_name}}</h3>\n                                                <p class=\"ionMedia__text\">{{comment.comments ? comment.comments : comment.comment }}</p>\n                                                <ion-row class=\"ion-align-items-center\"\n                                                         style=\"margin-left: -5px; font-size: small\">\n                                                    <ion-col size=\"auto\">\n                                                        <ion-icon\n                                                                name=\"time\"></ion-icon>&nbsp;<span>{{comment.comment_time}}</span>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-label>\n                                        </ion-item>\n                                        <div class=\"ion-margin-bottom ion-margin-top\"\n                                             *ngIf=\"news.comments.length === 0\">\n                                            <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                                <ion-label class=\"ion-text-wrap\">\n                                                    <p>\n                                                        <small>{{'FEED.nocommentsyet' | translate}}\n                                                            .....<br/>{{'FEED.bethefirstone' | translate}}.\n                                                        </small>\n                                                    </p>\n                                                </ion-label>\n                                            </ion-item>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"commentsWrapper__footer\">\n                                    <ion-item class=\"inputField\" lines=\"none\">\n                                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"comment_text[i]\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\"\n                                                   inputmode=\"text\"\n                                                   placeholder=\" {{'FEED.comment_placeholder' | translate}}..\"></ion-input>\n                                                   <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event, i)\">\n                                                        <ion-icon name=\"md-happy\"></ion-icon>\n                                                    </ion-button> -->\n                                        <ion-button [disabled]=\"!comment_text[i]\" (click)=\"createComment(i)\"\n                                                    class=\"commonBtn--transparent text-gray\">\n                                            <ion-icon name=\"send\"></ion-icon>\n                                        </ion-button>\n                                    </ion-item>\n                                </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-label>\n                    <!--                    CAMPAIGN CARD -->\n                    <ion-label (click)=\"gotoCampaign(news.type_id)\" *ngIf=\"news.type === 'Campaign'\"\n                               class=\"ion-text-wrap\">\n                        <h4 class=\"heading4\" style=\"padding: 0 10px; font-size: 18px;font-weight: 600;\" *ngIf=\"news.first_last_name\">{{news.first_last_name}}</h4>\n                        <h4 class=\"heading4\" style=\"padding: 0 10px; font-size: 18px;font-weight: 600;\" *ngIf=\"!news.first_last_name\">{{'FEED.Anonymous' | translate}}</h4>\n                        <p style=\"padding: 0 10px; margin-bottom: 10px; font-size: 14px;\">{{news.created_at}}</p>\n                        <ion-card class=\"ionCard ionCard--chat ionCard--mobile\">\n                            <div class=\"ionCard__topRight\" style=\"top:4px; right: 10px;\">\n                                <ion-button class=\"commonBtn commonBtn--dark commonBtn--round\"\n                                            style=\"min-width: 60px; height: 25px;\">{{'FEED.campaign' | translate}}\n                                </ion-button>\n                            </div>\n                            <ion-card-content class=\"ion-no-padding\">\n                                <ion-card-title class=\"heading4\">{{news.title}}</ion-card-title>\n                                <p>{{news.fund ? news.fund : ''}}</p>\n                                <div class=\"mb-30\">\n                                    <div class=\"progress\">\n                                        <div class=\"progress-bar\" role=\"progressbar\"\n                                             [ngStyle]=\"{'width': ((news.given / news.goal) * 100) + '%'}\"\n                                             aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        <div class=\"progress-bar pledged\" role=\"progressbar\"\n                                             [ngStyle]=\"{'width': ((news.pledged / news.goal) * 100) + '%'}\"\n                                             aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </div>\n                                <ion-row class=\"ion-align-items-center\" style=\"margin: 0 -5px 16px;\">\n                                    <ion-col [size]=\"4\">\n                                        <p class=\"font-weight-normal text-dark ion-no-margin\"><span\n                                                class=\"dot dot--yellow\"></span><b>{{'FEED.given' | translate}}\n                                            : </b>${{news.given}}\n                                        </p>\n                                    </ion-col>\n                                    <ion-col [size]=\"4\" class=\"ion-text-center\">\n                                        <p class=\"font-weight-normal text-dark ion-no-margin\"><span\n                                                class=\"dot dot--red\"></span><b>{{'FEED.pledged' | translate}}\n                                            : </b>${{news.pledged}}\n                                        </p>\n                                    </ion-col>\n                                    <ion-col [size]=\"4\" class=\"ion-text-right\">\n                                        <p class=\"font-weight-normal text-dark ion-no-margin\"><span\n                                                class=\"dot dot--halfWhite\"></span><b>{{'FEED.goal' | translate}}\n                                            : </b>${{news.goal}}</p>\n                                    </ion-col>\n                                    <p *ngIf=\"news.end_date\"><b>{{'FEED.enddate_placeholder' | translate}}:</b>\n                                        &nbsp; {{appService.getDateTimeFormat(news.end_date)}}</p>\n\n                                </ion-row>\n                                <div class=\"ionCard__footer\">\n                                    <ion-row class=\"ion-align-items-center\">\n                                        <ion-col [size]=\"12\" [sizeSm]=\"6\" class=\"ion-no-padding ion-margin-bottom\">\n                                            <ul class=\"list-inline commentAvatars\">\n                                                <li class=\"list-inline-item\">\n                                                    <ion-icon class=\"cursor-pointer\" (click)=\"createLike(i, $event)\"\n                                                              style=\"position: relative;top: 2px; font-size: 20px;\"\n                                                              name=\"thumbs-up\"></ion-icon>\n                                                </li>\n                                                <li class=\"list-inline-item\">\n                                                    <ion-text *ngIf=\"news.likes\">{{news.likes.length}}</ion-text>\n                                                    <ion-text *ngIf=\"!news.likes\">0</ion-text>\n                                                    &nbsp;{{'FEED.likes' | translate}}\n                                                </li>\n                                            </ul>\n                                        </ion-col>\n                                        <ion-col [size]=\"12\" [sizeSm]=\"6\"\n                                                 class=\"ion-no-padding ion-margin-bottom ion-text-left ion-text-sm-right\">\n                                            <div (click)=\"showComments[i] = !showComments[i]\">\n                                                <ion-icon class=\"cursor-pointer\" name=\"chatboxes\"\n                                                          style=\"position: relative;top: 8px; font-size: 20px;\"></ion-icon>&nbsp;\n                                                <span *ngIf=\"news.comments\">{{news.comments.length}}</span>&nbsp;\n                                                <span *ngIf=\"!news.comments\">0</span>&nbsp; {{'FEED.comments' | translate}}\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </div>\n                                <div *ngIf=\"showComments[i]\" class=\"commentsWrapper\">\n                                    <div class=\"commentsWrapper__list\" lines=\"none\">\n                                        <ion-item *ngFor=\"let comment of news.comments;\" class=\"ionMedia\">\n                                            <div class=\"ionMedia__media\">\n                                                <ion-avatar slot=\"start\">\n                                                    <img src=\"../../assets/img/user_icon.png\">\n                                                </ion-avatar>\n                                            </div>\n                                            <ion-label class=\"ion-text-wrap\">\n                                                <h3 class=\"ionMedia__heading\">{{comment.first_last_name}}</h3>\n                                                <p class=\"ionMedia__text\">{{comment.comments}}</p>\n                                                <ion-row class=\"ion-align-items-center\"\n                                                         style=\"margin-left: -5px; font-size: small\">\n                                                    <ion-col size=\"auto\">\n                                                        <ion-icon\n                                                                name=\"time\"></ion-icon>&nbsp;<span>{{appService.getDateTimeFormat(comment.comment_time)}}</span>\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-label>\n                                        </ion-item>\n                                        <div class=\"ion-margin-bottom ion-margin-top\"\n                                             *ngIf=\"news.comments.length === 0\">\n                                            <ion-item class=\"inputField  inputField--gray\" lines=\"none\">\n                                                <ion-label class=\"ion-text-wrap\">\n                                                    <p>\n                                                        <small>{{'FEED.nocommentsyet' | translate}}\n                                                            .....<br/>{{'FEED.bethefirstone' | translate}}.\n                                                        </small>\n                                                    </p>\n                                                </ion-label>\n                                            </ion-item>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"commentsWrapper__footer\">\n                                    <ion-item class=\"inputField\" lines=\"none\">\n                                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"comment_text[i]\" spellcheck=\"true\" autocorrect=\"true\" autocomplete=\"on\" class=\"inputField__area\"\n                                                   inputmode=\"text\"\n                                                   placeholder=\"{{'FEED.comment_placeholder' | translate}}..\"></ion-input>\n                                                   <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event, i)\">\n                                                    <ion-icon name=\"md-happy\"></ion-icon>\n                                                </ion-button> -->\n                                        <ion-button [disabled]=\"!comment_text[i]\" (click)=\"createComment(i)\"\n                                                    class=\"commonBtn--transparent text-gray\">\n                                            <ion-icon name=\"send\"></ion-icon>\n                                        </ion-button>\n                                    </ion-item>\n                                                                    </div>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-label>\n                </ion-item>\n                <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                          style=\"border-radius: 5px;\" *ngIf=\"news.length === 0 && dataLoaded\">\n                    <h4 class=\"heading4\">{{'FEED.no_feed_available' | translate}}</h4>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/feed-tab/feed-tab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feed-tab/feed-tab.module.ts ***!
  \*********************************************/
/*! exports provided: FeedTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedTabPageModule", function() { return FeedTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-tab.page */ "./src/app/feed-tab/feed-tab.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");











var routes = [
    {
        path: '',
        component: _feed_tab_page__WEBPACK_IMPORTED_MODULE_6__["FeedTabPage"]
    }
];
var FeedTabPageModule = /** @class */ (function () {
    function FeedTabPageModule() {
    }
    FeedTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
            ],
            declarations: [_feed_tab_page__WEBPACK_IMPORTED_MODULE_6__["FeedTabPage"]],
            providers: [
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
            ]
        })
    ], FeedTabPageModule);
    return FeedTabPageModule;
}());



/***/ }),

/***/ "./src/app/feed-tab/feed-tab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/feed-tab/feed-tab.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.commentsWrapper {\n  position: relative;\n  border-top: 2px solid #F1F1F1;\n}\n.commentsWrapper__list {\n  max-height: 200px;\n  overflow-y: auto;\n  min-height: 200px;\n}\n.shareWrapper {\n  overflow-y: auto;\n  padding: 15px 0 0;\n  border-top: 2px solid #F3F3F3;\n  max-height: 400px;\n  margin-top: 15px;\n}\n.userName {\n  padding: 0 10px;\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2ZlZWQtdGFiL2ZlZWQtdGFiLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zdGRpbiIsInNyYy9hcHAvZmVlZC10YWIvZmVlZC10YWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLFdBQUE7QUFrRkEsVUFBQTtBQWlGQSxVQUFBO0FBOEJBLGdCQUFBO0FBYUEsWUFBQTtBQVdBLG1CQUFBO0FBTUEsU0FBQTtBQ2pPQTtFQUNFLGtCQUFBO0VBRUEsNkJBQUE7QUNLRjtBREhFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS0o7QURNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE1BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9mZWVkLXRhYi9mZWVkLXRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgdmFyaWFibGVzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogQ29sb3JzICovXG4vL2RlZmF1bHQgcHJpbWFyeS1jb2xvciBpcyAjMzAyRjM0XG5cbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4kZGVmYXVsdC1wcmltYXJ5LWNvbG9yOiAjMzAyRjM0O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGhlYWRlci1iZy1jb2xvcjogI0Q4RDhEODtcbiRoZWFkaW5nLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRoZWFkaW5nLWNvbG9yLWxpZ2h0OiAjMzgzNzNDO1xuJGdyYXktbGlnaHQ6ICNCQUJBQkE7XG4kaGFsZi13aGl0ZTogI0YxRjFGMTtcbiRibHVlLWNvbG9yOiAjNDI2N0IyO1xuJGRhcmstZ3JheS1jb2xvcjogIzI5MjkyOTtcbiRibGFjay0ybmQ6ICMyMDIwMjA7XG4kYm90dG9tLWZvb3Rlci1iZy1jb2xvcjogIzI1MjQyNztcbiRib3R0b20tZm9vdGVyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdHJhbnNwYXJlbnQtY29sb3I6ICMwMDAwMDAwMDtcbiRmb290ZXItYmctY29sb3I6ICRkZWZhdWx0LXByaW1hcnktY29sb3I7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRtYWluLWJnLWNvbG9yOiAkd2hpdGUtY29sb3I7XG5cbiRncmF5LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuXG4vL25ldyBwbGF5ZXIgdmFyaWFibGVzXG5cbiRwbGF5ZXItcHJpbWFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXByaW1hcnktY29sb3IsICNGMkYyRjIpO1xuJHBsYXllci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1zZWNvbmRhcnktY29sb3IsICMyMzIzMjMpO1xuJHBsYXllci10ZXh0LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1jb2xvciwgIzExNkVGRik7XG4kcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMwMDAwMDApO1xuJHBsYXllci1idXR0b24tY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tY29sb3IsICMwQTY1RkYpO1xuJHBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvciwgIzI2MzE0MSk7XG5cbiRjb2xvcnM6IChcbiAgICAgICAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxuICAgICAgICAnaGVhZGVyLWJnLWNvbG9yJzogJGhlYWRlci1iZy1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1iZy1jb2xvcic6ICRmb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLWJnLWNvbG9yJzogJGJvdHRvbS1mb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLXRleHQtY29sb3InOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWhlYWRpbmctY29sb3InOiAkZm9vdGVyLWhlYWRpbmctY29sb3IsXG4gICAgICAgICdtYWluLWJnLWNvbG9yJzogJG1haW4tYmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yJzogJGhlYWRpbmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yLWxpZ2h0JzogJGhlYWRpbmctY29sb3ItbGlnaHQsXG4gICAgICAgICdncmF5LWNvbG9yJzokZ3JheS1jb2xvcixcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAkZ3JheS1saWdodCxcbiAgICAgICAgJ2RhcmstZ3JheSc6ICRkYXJrLWdyYXktY29sb3IsXG4gICAgICAgICdoYWxmLXdoaXRlJzokaGFsZi13aGl0ZSxcbiAgICAgICAgJ2JsdWUtY29sb3InOiRibHVlLWNvbG9yLFxuICAgICAgICAnYmxhY2stMm5kJzogJGJsYWNrLTJuZCxcbiAgICAgICAgJ3RyYW5zcGFyZW50JzogJHRyYW5zcGFyZW50LWNvbG9yLFxuKTtcblxuLy8gQm9keSBmb250XG5cbiRib2R5LWZvbnQtc2l6ZTogMThweDtcbiR4LXNtYWxsLWJvZHktZm9udC1zaXplOiAxNHB4O1xuJGJvZHktZm9udC1zdHlsZTogbm9ybWFsO1xuJGJvZHktZm9udC12YXJpYW50OiBub3JtYWw7XG4kYm9keS1mb250LXdlaWdodDogNjAwO1xuJGxpbmUtaGVpZ2h0OiAxLjY7XG5cbi8vdHlwb2dyYXBoeVxuJGhlYWRpbmctb25lLXNpemU6MzZweDtcbiRoZWFkaW5nLXR3by1zaXplOiAyNHB4O1xuJGhlYWRpbmctdHdvLW1kLXNpemU6IDM2cHg7XG4kaGVhZGluZy10aHJlZS1zaXplOiAxNXB4O1xuJGhlYWRpbmctZm91ci1zaXplOjE0cHg7XG4vLyRoZWFkaW5nLWZpeC1zaXplOjtcbiRoZWFkaW5nLXNpeC1zaXplOiAxNHB4O1xuXG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuJGZvbnQtd2VpZ2h0czogKFxuICAgICAgICAnbGlnaHQnOiAzMDAsXG4gICAgICAgICdub3JtYWwnOjQwMCxcbiAgICAgICAgJ21lZGl1bSc6IDUwMCxcbiAgICAgICAgJ3NlbWlCb2xkJzogNjAwLFxuICAgICAgICAnYm9sZCc6IDcwMCxcbik7XG5cbi8qIGNhcmRzICovXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIC4xNCk7XG5cbi8vQnV0dG9uc1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XG4kYnRuLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi1wYWRkaW5nLXk6IDEwcHg7XG4kYnRuLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcDogNHB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbTogNHB4O1xuJGJ0bi1mb250LXNpemU6IDE0cHg7XG4kYnRuLWxpbmUtaGVpZ2h0OiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4kYnRuLXRleHQtdHJhbnNmb3JtOiAkdGV4dC1sb3dlcmNhc2U7XG4kYnRuLWhlaWdodDogNDBweDtcbiRidG4tbWluLXdpZHRoOiA5MHB4O1xuXG4vL2J1dHRvbnMtd2hpdGVcbiRidG4td2hpdGUtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtaG92ZXI6ICR3aGl0ZS1jb2xvcjtcblxuLy8vYnV0dG9ucy13aGl0ZS1vdXRsaW5lXG4kYnRuLXdoaXRlLW91dGxpbmUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cbi8vL2dyYXlcbiRidG4tZ3JheS10ZXh0LWNvbG9yOiAkZ3JheS1jb2xvcjtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1ib3JkZXItY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtaG92ZXI6ICRoYWxmLXdoaXRlO1xuXG4vLy9kYXJrXG4kYnRuLWRhcmstdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vL2JsdWVcbiRidG4tYmx1ZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYm9yZGVyLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkYmx1ZS1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudFxuJGJ0bi10cmFuc3BhcmVudC10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50IGRhcmstb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLXRleHQtY29sb3I6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG5cbi8vL2JsYWNrIG91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cbi8vQnV0dG9uIGxhcmdlXG4kYnRuLXBhZGRpbmctc3RhcnQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kLWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcC1sZzogNnB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbS1sZzogNnB4O1xuJGJ0bi1mb250LXNpemUtbGc6ICRidG4tZm9udC1zaXplO1xuJGJ0bi1saW5lLWhlaWdodC1sZzogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAzMHB4O1xuJGJ0bi1oZWlnaHQtbGc6IDQ4cHg7XG5cbi8qIEZvcm1zICovXG4kaW5wdXQtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgzNiwgMTEzLCAxODUsIDAuMSk7XG4kaW5wdXQtZm9udC1zaXplOiAyOHB4O1xuJHgtc21hbGwtaW5wdXQtZm9udC1zaXplOiAkeC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTtcbiRpbnB1dC1ib3JkZXI6IG5vbmU7XG4kaW5wdXQtcmFkaXVzOiA0MHB4O1xuJGlucHV0LWJvcmRlci1mb2N1czogbm9uZTtcbiRpbnB1dC1oZWlnaHQ6IDYwcHg7XG4kaW5wdXQtcGFkZGluZzogMCAxNnB4O1xuJGlucHV0LWljb24td2lkdGg6IDIwcHg7XG4kaW5wdXQtaWNvbi1oZWlnaHQ6ICRpbnB1dC1pY29uLXdpZHRoO1xuXG4vL2NoZWNrYm94XG4kY2hlY2tib3gtd2lkdGg6IDI0cHg7XG4kY2hlY2tib3gtaGVpZ2h0OiAkY2hlY2tib3gtd2lkdGg7XG4kY2hlY2tib3gtc21hbGwtd2lkdGg6IDIwcHg7XG4kY2hlY2tib3gtc21hbGwtaGVpZ2h0OiAkY2hlY2tib3gtc21hbGwtd2lkdGg7XG5cbi8vdGV4dFxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbi8vY3JlZGl0IGNhcmRcblxuJGNyZWRpdC1jYXJkLWljb24td2lkdGg6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1oZWlnaHQ6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1yaWdodDogcmlnaHQ7XG4kY3JlZGl0LWNhcmQtaWNvbi1sZWZ0OiBsZWZ0O1xuXG4vKiBIZWFkZXIgSWNvbiAqL1xuXG4kaGVhZGVyLWljb24td2lkdGg6IDMwcHg7XG4kaGVhZGVyLWljb24taGVpZ2h0OiAzMHB4O1xuJGhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiRoZWFkZXItbG9nby1oZWlnaHQ6IDQ4cHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby1oZWlnaHQ6IDQwcHg7XG4keC1zbWFsbC1oZWFkZXItaWNvbi13aWR0aDogMjVweDtcbiRoZWFkZXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtdXBwZXJjYXNlO1xuJGhlYWRlci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8qIFNpZGViYXIgKi9cblxuJHNpZGViYXItbG9nby13aWR0aDogMjAwcHg7XG4kc2lkZWJhci1sb2dvLWhlaWdodDogMTYwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtc2lkZWJhci1pY29uLXdpZHRoOiAyNXB4O1xuJHNpZGViYXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJHNpZGViYXItbGluay1sYWJlbC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRzaWRlYmFyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC1jYXBpdGFsaXplO1xuJHNpZGViYXItbGluay1sYWJlbC1mb250LXdlaWdodDogNTAwO1xuJHNpZGViYXItaWNvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XG4vKiBwcm9maWxlIGF2YXRhciAqL1xuXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogODBweDtcbiRwcm9maWxlLWltYWdlLWhlaWdodDogJHByb2ZpbGUtaW1hZ2Utd2lkdGg7XG5cblxuLyogdGFicyAqL1xuXG4kdGFicy1iYXItYmctY29sb3I6JHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1idG4tdGV4dC1jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1zaXplOiAxNXB4O1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjoycHggc29saWQgJHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yOiRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS1ib3JkZXItY29sb3I6MnB4IHNvbGlkICRoZWFkaW5nLWNvbG9yO1xuXG5cblxuLy8vIGFwcC1jb250YWluZXItd2lkdGhcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJGNvbnRhaW5lci13aWR0aDogKFxuICAgICAgICAnbGFyZ2UnOiAxMDAlLFxuICAgICAgICAnbWVkaXVtJzogMTAwJSxcbiAgICAgICAgJ3NtYWxsJzogMTAwJSxcbiAgICAgICAgJ3gtc21hbGwnOiAxMDAlLFxuKSAhZGVmYXVsdDtcblxuLy8vIEJyZWFrcG9pbnRzIG1hcFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kbWVkaWEtYnJlYWtwb2ludHM6IChcbiAgICAgICAgJ2xhcmdlJzogMTIwMHB4LFxuICAgICAgICAnbWVkaXVtJzogOTkycHgsXG4gICAgICAgICdzbWFsbCc6IDc2OHB4LFxuICAgICAgICAneC1zbWFsbCc6IDU3NnB4LFxuICAgICAgICAneHgtc21hbGwnOiA0MTRweCxcbikgIWRlZmF1bHQ7XG5cbi8vLyBSZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkwgd2hlcmUgYWxsIGFzc2V0cyBhcmUgc2VydmVkIGZyb21cbi8vLyBAdHlwZSBTdHJpbmdcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2hlbiB1c2luZyBhIENETlxuLy8vICAgJGJhc2UtdXJsOiAnaHR0cDovL2Nkbi5leGFtcGxlLmNvbS9hc3NldHMvJztcbiRiYXNlLXVybDogJ2Fzc2V0cy8nICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3Nhc3MvY29uZmlnXCI7XG5cbi5jb21tZW50c1dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRoYWxmLXdoaXRlO1xuXG4gICZfX2xpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAmX19mb290ZXIge1xuICAgIC8vbWFyZ2luLXRvcDogMTVweDtcblxuICAgIC5pbnB1dEZpZWxkIHtcbiAgICAgIC8vbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbi5zaGFyZVdyYXBwZXIge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4IDAgMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNGM0YzRjM7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnVzZXJOYW1le1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIvKiBDb2xvcnMgKi9cbi8qIGNhcmRzICovXG4vKiBGb3JtcyAqL1xuLyogSGVhZGVyIEljb24gKi9cbi8qIFNpZGViYXIgKi9cbi8qIHByb2ZpbGUgYXZhdGFyICovXG4vKiB0YWJzICovXG4uY29tbWVudHNXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI0YxRjFGMTtcbn1cbi5jb21tZW50c1dyYXBwZXJfX2xpc3Qge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG4uc2hhcmVXcmFwcGVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTVweCAwIDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRjNGM0YzO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnVzZXJOYW1lIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/feed-tab/feed-tab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/feed-tab/feed-tab.page.ts ***!
  \*******************************************/
/*! exports provided: FeedTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedTabPage", function() { return FeedTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var src_services_word_press_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/services/word-press.service */ "./src/services/word-press.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _common_images_library_images_library_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../common/images-library/images-library.component */ "./src/app/common/images-library/images-library.component.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");





























var FeedTabPage = /** @class */ (function () {
    function FeedTabPage(idService, route, loader, storage, sermonsService, router, eventsService, apiService, dom, auth, toast, datePipe, appService, location, analytics, formBuilder, platform, device, translate, eventProviderService, iab, popoverController, wordPressSerice, actionSheetController, camera, modalCtrl, common) {
        var _this = this;
        this.idService = idService;
        this.route = route;
        this.loader = loader;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.router = router;
        this.eventsService = eventsService;
        this.apiService = apiService;
        this.dom = dom;
        this.auth = auth;
        this.toast = toast;
        this.datePipe = datePipe;
        this.appService = appService;
        this.location = location;
        this.analytics = analytics;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.eventProviderService = eventProviderService;
        this.iab = iab;
        this.popoverController = popoverController;
        this.wordPressSerice = wordPressSerice;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.news = [];
        this.profilePicBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].profile_img_base_url;
        this.showComments = [];
        this.isUserLoggedIn = false;
        this.comment_text = [];
        this.show_share = false;
        this.live_url = false;
        this.myCommunity = false;
        this.myGroup = false;
        this.everyone = false;
        this.event_page_exist = false;
        this.dataLoaded = false;
        this.toggled = false;
        this.IMAGE_BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].profile_img_base_url;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.type = '';
        this.deviceType = '';
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    }
    FeedTabPage.prototype.ngOnInit = function () {
        // creating object of formBuilder
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
        this.getTheme();
        //  this.storage.get('app_pages').then(res => {
        var appPages = JSON.parse(localStorage.getItem('church_data')).apppages;
        if (appPages) {
            var event_page = appPages.filter(function (x) { return x.name === 'Events'; });
            if (event_page.length > 0) {
                this.event_page_exist = true;
            }
            // getting pagename for analytics
            var feed_page = appPages.find(function (x) { return x.name === 'Feed'; });
            if (feed_page) {
                this.page_name = feed_page.name;
                this.custom_name = feed_page.title;
            }
            else {
                this.page_name = 'Feed';
                this.custom_name = 'Feed';
            }
        }
        // });
    };
    FeedTabPage.prototype.getTheme = function () {
        var _this = this;
        this.eventProviderService.getChurchData.subscribe(function (theme) {
            if (!(Object.keys(theme).length === 0)) {
                _this.ch_id = theme.church.ch_id;
                _this.theme = theme.church;
                _this.getUser();
                _this.getNews(_this.ch_id);
                // getting pagename for analytics
                var feed_page = theme.apppages.find(function (x) { return x.name === 'Feed'; });
                if (feed_page) {
                    _this.page_name = feed_page.name;
                    _this.custom_name = feed_page.title;
                    var id = feed_page.id;
                    var app_pages = theme.apppages.find(function (x) { return x.id === id; });
                    if (app_pages && app_pages.password_protection_toggle === 'true') {
                        _this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                else {
                    _this.page_name = 'Feed';
                    _this.custom_name = 'Feed';
                }
            }
        });
    };
    FeedTabPage.prototype.getUser = function () {
        var _this = this;
        // getting theme from local storage
        this.storage.get('user').then(function (res) {
            if (res != null && res != 'guest') {
                _this.userData = res;
                _this.isUserLoggedIn = true;
            }
        });
    };
    FeedTabPage.prototype.getNews = function (ch_id) {
        var _this = this;
        // fetching news
        console.log('current date: ', Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en_US'));
        // (YYYY, MM, DD) 
        //  var g2 = new Date(2021, 08, 03);
        //console.log('new date is: ', g1);
        this.loader.presentLoading().then(function () {
            _this.apiService.get_news_wall(ch_id).subscribe(function (res) {
                _this.loader.stopLoading();
                if (res.status) {
                    _this.news = res.newswall;
                    if (_this.news.length > 0) {
                        _this.news.map(function (x) {
                            if (x.photo_profile.includes("https://") || x.photo_profile.includes("http://")) {
                                _this.live_url = true;
                            }
                            else {
                                x.photo_profile = x.photo_profile ? _this.dom.bypassSecurityTrustUrl(_this.IMAGE_BASE_URL + x.photo_profile) : '';
                            }
                            if (x.attachment) {
                                if (x.mime_type === 'video' || x.attachment.includes('data:video')) {
                                    x['video'] = true;
                                }
                                else {
                                    x['video'] = false;
                                }
                                if (x.attachment !== "" && x.attachment !== null && x.attachment.includes("s3.wasabisys.com") && x['video'] === false && Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["formatDate"])(x.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                    var abc = x.attachment.split("/");
                                    //  let img_name = abc[abc.length-1];
                                    var folder_name = abc[abc.length - 2];
                                    if (_this.platform.is("mobile")) {
                                        _this.deviceType = 'radiobase_mobile';
                                    }
                                    else if (_this.platform.is("tablet")) {
                                        _this.deviceType = 'radiobase_tablet';
                                    }
                                    else {
                                        _this.deviceType = folder_name;
                                    }
                                    var new_link = x.attachment.replace(folder_name, _this.deviceType);
                                    x.attachment = new_link;
                                    // console.log('background is: ',card.background,'new link is: ', new_link);
                                }
                                // sanitizing attachment url for security purpose
                                x.attachment = _this.dom.bypassSecurityTrustResourceUrl(x.attachment);
                            }
                            // reversing news data so that latest news comes on top
                            x.comments = x.comments.slice().reverse();
                            x.comments.map(function (item) {
                                try {
                                    item.photo_profile = item.photo_profile ? _this.dom.bypassSecurityTrustUrl(item.photo_profile) : '';
                                    item.comments = JSON.parse(item.comments);
                                }
                                catch (_a) {
                                    item.comments = item.comments;
                                }
                                var localTimeZone = moment__WEBPACK_IMPORTED_MODULE_14__["tz"].guess(true);
                                item.comment_time = moment__WEBPACK_IMPORTED_MODULE_14__(item.comment_time).tz(localTimeZone);
                                item.comment_time = _this.appService.getDateTimeFormat(item.comment_time);
                            });
                            if (x.created_at) {
                                var mytime = moment__WEBPACK_IMPORTED_MODULE_14__(x.created_at);
                                var time_diff = moment__WEBPACK_IMPORTED_MODULE_14__().utcOffset(); // in minutes
                                if (time_diff != 0) {
                                    x.created_at = moment__WEBPACK_IMPORTED_MODULE_14__(mytime).add((time_diff), 'minutes');
                                    x.created_at = _this.appService.getDateTimeFormat(x.created_at);
                                }
                                else {
                                    x.created_at = _this.appService.getDateTimeFormat(x.created_at);
                                }
                            }
                        });
                        //========= posting PINNED news on TOP =================
                        var pinned = _this.news.filter(function (x) { return x.pin === 'Yes'; });
                        var unpinned = _this.news.filter(function (x) { return x.pin !== 'Yes'; });
                        _this.news = pinned.reverse().concat(unpinned.reverse());
                        //========= posting PINNED news on TOP =================
                        _this.news.forEach(function (_new) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, _b;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = _new;
                                        if (!(_new.description != null)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.dom.bypassSecurityTrustHtml(this.urlify(_new.description))];
                                    case 1:
                                        _b = _c.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _b = '';
                                        _c.label = 3;
                                    case 3:
                                        _a.description = _b;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                }
                _this.loader.stopLoading();
                _this.dataLoaded = true;
            }, function (err) {
                var message = err.message;
                _this.loader.stopLoading();
                _this.dataLoaded = true;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        });
        setTimeout(function () {
            _this.loader.stopLoading();
        }, 2000);
    };
    FeedTabPage.prototype.createComment = function (i) {
        var _this = this;
        if (this.isUserLoggedIn) {
            // comment box validation
            if (!this.comment_text[i]) {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.enter_comment : 'Enter Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                return;
            }
            var live = new Date().toString();
            live = this.datePipe.transform(live, 'MMM d, y h:mm a');
            var date = new Date(live);
            var body = JSON.stringify({
                auth: 'Bearer ' + this.userData.auth.access_token,
                newswall_id: this.news[i].id,
                account_donor_id: this.userData.user.id,
                church_id: this.ch_id,
                comments: this.comment_text[i],
                comment_time: date,
            });
            // saving comment
            this.apiService.create_newsWall_comment(body).subscribe(function (res) {
                _this.comment_text[i] = '';
                _this.ngOnInit();
            }, function (err) {
                if (err.error.http_code === 401) {
                    // const data = {
                    //     auth: 'Bearer ' + this.userData.auth.access_token,
                    //     authorization: 'Bearer ' + this.userData.auth.refresh_token
                    // };
                    // this.apiService.updateToken(data).subscribe(res => {
                    //     this.userData.auth.access_token = res['access_token'];
                    //     this.userData.auth.refresh_token = res['refresh_token'];
                    //     this.storage.set('user', this.userData);
                    //     localStorage.setItem('auth', this.userData.auth.access_token);
                    //     localStorage.setItem('refresh_token', this.userData.auth.refresh_token);
                    //     this.createComment(i);
                    // }, (err: any) => {
                    //     this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                    // });
                }
                else {
                    var message = err.message;
                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                }
            });
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_comment : 'Login to Comment'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            this.router.navigate(['/login']);
        }
    };
    FeedTabPage.prototype.createLike = function (i, ev) {
        var _this = this;
        ev.stopPropagation();
        if (this.isUserLoggedIn) {
            var body = JSON.stringify({
                auth: 'Bearer ' + this.userData.auth.access_token,
                newswall_id: this.news[i].id,
                account_donor_id: this.userData.user.id,
                church_id: this.ch_id
            });
            // saving LIKE data
            this.apiService.create_newsWall_like(body).subscribe(function (res) {
                if (res.status) {
                    _this.ngOnInit();
                }
                else {
                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.already_liked : 'You already Liked!'), (_this.alertMessage ? _this.alertMessage.Info : 'Info'), 'success');
                    return;
                }
            }, function (err) {
                // if (err.error.http_code === 401){
                //     const data = {
                //         auth: 'Bearer ' + this.userData.auth.access_token,
                //         authorization: 'Bearer ' + this.userData.auth.refresh_token
                //     };
                //     this.apiService.updateToken(data).subscribe(res => {
                //         this.userData.auth.access_token = res['access_token'];
                //         this.userData.auth.refresh_token = res['refresh_token'];
                //         this.storage.set('user', this.userData);
                //         localStorage.setItem('auth', this.userData.auth.refresh_token);
                //         this.createLike(i);
                //     }, (err: any) => {
                //         this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                //     });
                // } else {
                //     let message = err.message;
                //     this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                // }
            });
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_like : 'Login to Like'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            this.router.navigate(['/login']);
        }
    };
    FeedTabPage.prototype.onFileChanged = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.attachment = reader.result;
            if (_this.attachment.includes('data:video')) {
                _this.mime_type = 'video';
            }
            else {
                _this.mime_type = 'image';
            }
        };
    };
    FeedTabPage.prototype.stopoverwrite = function (ev) {
        ev.stopPropagation();
    };
    FeedTabPage.prototype.urlify = function (text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        if (this.platform.is('cordova')) {
            var str_1 = text;
            text.replace(urlRegex, function (url) {
                str_1 = '';
                str_1 = text.replace(urlRegex, "<a href=\"" + url + "\" target=\"_blank\" onclick=\"openInNewBrowser('" + url + "', this)\">" + url + "</a>");
            });
            return str_1;
        }
        else {
            return text.replace(urlRegex, function (url) {
                return "<a href=\"" + url + "\" target=\"_blank\">" + url + "</a>";
            });
        }
    };
    FeedTabPage.prototype.getPicture = function (opts) {
        var _this = this;
        this.camera.getPicture(opts).then(function (imageData) {
            imageData = 'data:image/jpeg;base64,' + imageData;
            _this.attachment = imageData ? imageData : "";
            if (_this.attachment.includes('data:video')) {
                _this.mime_type = 'video';
            }
            else {
                _this.mime_type = 'image';
            }
            // this.type = 'camera';
        }, function (err) {
            console.log("ERROR", err);
            // Handle error
        });
    };
    FeedTabPage.prototype.getCameraOptions = function (sourceType) {
        if (sourceType === 'camera') {
            this.cameraOptions.sourceType = this.camera.PictureSourceType.CAMERA;
        }
        else if (sourceType === 'library') {
            this.cameraOptions.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        return this.cameraOptions;
    };
    FeedTabPage.prototype.libraryPopover = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _common_images_library_images_library_component__WEBPACK_IMPORTED_MODULE_27__["ImagesLibraryComponent"],
                            cssClass: 'BibleModal',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            if (res.data.selected_image) {
                                var image_data = res.data.selected_image;
                                _this.attachment = image_data.url;
                                // this.profile_picture_file = image_data.filename;
                                _this.type = 'photo_library';
                                _this.mime_type = 'image';
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedTabPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, remove_button, actionSheet, role;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            {
                                text: 'Camera',
                                icon: 'camera',
                                handler: function () {
                                    var options = _this.getCameraOptions('camera');
                                    _this.getPicture(options);
                                }
                            }, {
                                text: 'Upload',
                                icon: 'folder',
                                handler: function () {
                                    var options = _this.getCameraOptions('library');
                                    _this.getPicture(options);
                                }
                            },
                            {
                                text: 'Library',
                                icon: 'images',
                                handler: function () {
                                    _this.libraryPopover();
                                    // let options = this.getCameraOptions('library');
                                    // this.getPicture(options);
                                }
                            }, {
                                text: 'Cancel',
                                icon: 'close',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ];
                        remove_button = {
                            text: 'Remove',
                            role: 'destructive',
                            icon: 'trash',
                            handler: function () {
                                _this.removeAttachment();
                            }
                        };
                        if (this.attachment) {
                            buttons.unshift(remove_button);
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                cssClass: 'my-custom-class',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, actionSheet.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedTabPage.prototype.removeAttachment = function () {
        this.attachment = '';
        this.mime_type = '';
    };
    FeedTabPage.prototype.postNews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.isUserLoggedIn) {
                    if (this.news_input) {
                        this.loader.presentLoading().then(function (res) { });
                        if (this.attachment && this.type !== 'photo_library') {
                            data = {
                                file: this.attachment
                            };
                            // upload file on wasabi
                            this.wordPressSerice.saveFiles(data).subscribe(function (res) {
                                if (res.status) {
                                    _this.attachment = res.file_name[0];
                                    // preparing data for news post
                                    var body = JSON.stringify({
                                        auth: 'Bearer ' + _this.userData.auth.access_token,
                                        church_id: _this.ch_id,
                                        title: (_this.who_input && _this.deadline_input) ? 'Need' : 'News',
                                        description: _this.news_input,
                                        attachment: _this.attachment,
                                        type: 'Regular',
                                        donor_id: _this.userData.user.id,
                                        who_need: _this.who_input,
                                        deadline_need: _this.deadline_input,
                                        my_group: _this.myGroup,
                                        my_community: _this.myCommunity,
                                        everyone: _this.everyone,
                                        mime_type: _this.mime_type
                                    });
                                    // saving news post data
                                    _this.apiService.save_news(body).subscribe(function (res) {
                                        _this.loader.stopLoading();
                                        if (res && res.status) {
                                            _this.news_input = '';
                                            _this.show_share = false;
                                            _this.attachment = '';
                                            _this.who_input = '';
                                            _this.deadline_input = '';
                                            _this.myCommunity = false;
                                            _this.myGroup = false;
                                            _this.everyone = false;
                                            _this.mime_type = '';
                                            // refreshing data after save
                                            _this.getNews(_this.ch_id);
                                        }
                                    }, function (err) {
                                        _this.loader.stopLoading();
                                        if (err.error.http_code === 401) {
                                            // const data = {
                                            //     auth: 'Bearer ' + this.userData.auth.access_token,
                                            //     authorization: 'Bearer ' + this.userData.auth.refresh_token
                                            // };
                                            // this.apiService.updateToken(data).subscribe(res => {
                                            //     this.userData.auth.access_token = res['access_token'];
                                            //     this.userData.auth.refresh_token = res['refresh_token'];
                                            //     this.storage.set('user', this.userData);
                                            //     localStorage.setItem('auth', this.userData.auth.access_token);
                                            //     localStorage.setItem('refresh_token', this.userData.auth.refresh_token);
                                            //     this.postNews();
                                            // }, (err: any) => {
                                            //     this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                                            // });
                                        }
                                        else {
                                            var message = err.message;
                                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            body = JSON.stringify({
                                auth: 'Bearer ' + this.userData.auth.access_token,
                                church_id: this.ch_id,
                                title: (this.who_input && this.deadline_input) ? 'Need' : 'News',
                                description: (this.news_input),
                                attachment: this.attachment,
                                type: 'Regular',
                                donor_id: this.userData.user.id,
                                who_need: this.who_input,
                                deadline_need: this.deadline_input,
                                my_group: this.myGroup,
                                my_community: this.myCommunity,
                                everyone: this.everyone,
                            });
                            // saving news post data
                            this.apiService.save_news(body).subscribe(function (res) {
                                _this.loader.stopLoading();
                                if (res && res.status) {
                                    _this.news_input = '';
                                    _this.show_share = false;
                                    _this.attachment = '';
                                    _this.mime_type = '';
                                    _this.who_input = '';
                                    _this.deadline_input = '';
                                    _this.myCommunity = false;
                                    _this.myGroup = false;
                                    _this.everyone = false;
                                    // refreshing data after save
                                    _this.getNews(_this.ch_id);
                                }
                            }, function (err) {
                                _this.loader.stopLoading();
                                if (err.error.http_code === 401) {
                                    // const data = {
                                    //     auth: 'Bearer ' + this.userData.auth.access_token,
                                    //     authorization: 'Bearer ' + this.userData.auth.refresh_token
                                    // };
                                    // this.apiService.updateToken(data).subscribe(res => {
                                    //     this.userData.auth.access_token = res['access_token'];
                                    //     this.userData.auth.refresh_token = res['refresh_token'];
                                    //     this.storage.set('user', this.userData);
                                    //     localStorage.setItem('auth', this.userData.auth.access_token);
                                    //     localStorage.setItem('refresh_token', this.userData.auth.refresh_token);
                                    //     this.postNews();
                                    // }, (err: any) => {
                                    //     this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                                    // });
                                }
                                else {
                                    var message = err.message;
                                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                                }
                            });
                        }
                    }
                    else {
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.missing_required_fields : 'Missing Required Fields'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    }
                }
                else {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_post_news : 'Login to Post News'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
                    this.router.navigate(['/login']);
                }
                return [2 /*return*/];
            });
        });
    };
    FeedTabPage.prototype.gotoCampaign = function (camp_id) {
        if (camp_id) {
            this.router.navigate(['/campaign-registration/' + this.ch_id + '/' + camp_id]);
        }
    };
    FeedTabPage.prototype.gotoPage = function (id, type) {
        if (type === 'Event') {
            if (this.event_page_exist) {
                if (!id.includes('http')) {
                    this.router.navigate(['events/', {
                            page_id: id
                        }]);
                }
                else {
                    this.router.navigate(['event-detail', {
                            event_url: id,
                            is_event_url: 'true'
                        }]);
                }
            }
        }
    };
    FeedTabPage.prototype.meetTheNeed = function (i) {
        var _this = this;
        if (this.isUserLoggedIn) {
            var body = JSON.stringify({
                auth: 'Bearer ' + this.userData.auth.access_token,
                newswall_id: this.news[i].id,
                account_donor_id: this.userData.user.id,
                church_id: this.ch_id
            });
            // saving meet the need data
            this.apiService.meet_the_need(body).subscribe(function (res) {
                if (res.status) {
                    _this.ngOnInit();
                }
                else {
                    _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.already_met : 'You already Met!'), (_this.alertMessage ? _this.alertMessage.Info : 'Info'), 'success');
                    return;
                }
            }, function (err) {
                var message = err.message;
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occurred, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            });
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_meet : 'Login to Meet'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            this.router.navigate(['/login']);
        }
    };
    FeedTabPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    FeedTabPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_14__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_14__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.isUserLoggedIn ? this.userData.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.ch_id,
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
        this.analytics.setAnalytics(body).subscribe(function (res) {
        });
    };
    FeedTabPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    FeedTabPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_14__();
        this.getUser();
    };
    FeedTabPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.eventProviderService.userLogin.subscribe(function (data) {
            _this.getUser();
        });
        this.eventProviderService.userLogout.subscribe(function (data) {
            _this.getUser();
        });
    };
    FeedTabPage.prototype.presentPopover = function (ev, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_23__["EmojiComponent"],
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
                                if (_this.comment_text[index] === undefined) {
                                    _this.comment_text[index] = '';
                                }
                                _this.comment_text[index] += res.data.event.char;
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedTabPage.ctorParameters = function () { return [
        { type: _services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_22__["AppService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_15__["AnalyticsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_20__["EventProviderService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["PopoverController"] },
        { type: src_services_word_press_service__WEBPACK_IMPORTED_MODULE_25__["WordPressService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ActionSheetController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_26__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_28__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fileInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], FeedTabPage.prototype, "fileInput", void 0);
    FeedTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-feed-tab',
            template: __webpack_require__(/*! raw-loader!./feed-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/feed-tab/feed-tab.page.html"),
            styles: [__webpack_require__(/*! ./feed-tab.page.scss */ "./src/app/feed-tab/feed-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_id_service__WEBPACK_IMPORTED_MODULE_3__["IdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_7__["SermonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"],
            _app_service__WEBPACK_IMPORTED_MODULE_22__["AppService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_15__["AnalyticsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_20__["EventProviderService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["PopoverController"],
            src_services_word_press_service__WEBPACK_IMPORTED_MODULE_25__["WordPressService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_26__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_28__["CommonService"]])
    ], FeedTabPage);
    return FeedTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=feed-tab-feed-tab-module-es5.js.map