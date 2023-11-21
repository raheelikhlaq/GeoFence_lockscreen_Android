(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-detail/chat-detail.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\r\n<ion-header no-border>\r\n    <ion-toolbar class=\"header--toolbar\">\r\n        <ion-buttons class=\"cursor-pointer\">\r\n            <ion-icon (click)=\"gotoBackPage()\" slot=\"start\" routerDirection=\"root\" name=\"arrow-back\"></ion-icon>\r\n            <span style=\"margin-left: 6px;\" *ngIf=\"conversation\">\r\n                {{conversation.name}}\r\n                <ion-icon *ngIf=\"ch_id == 1265 || ch_id =='1265'\" class=\"infoIcon\" (click)=\"membersDetails()\" style=\"\"\r\n                    mode=\"md\" name=\"information-circle\"></ion-icon>\r\n            </span>\r\n        </ion-buttons>\r\n        <!-- <ion-item *ngIf=\"conversation\" class=\"ionMedia\" lines=\"none\" style=\"margin-left:10px;\">\r\n            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\r\n                <ion-icon name=\"people\" slot=\"start\" class=\"ionMedia__icon text-dark\"></ion-icon>\r\n            </div>\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <h3 class=\"ionMedia__heading\">{{conversation.name}}<ion-icon *ngIf=\"ch_id == 1265 || ch_id =='1265'\"\r\n                        (click)=\"membersDetails()\" style=\"margin-left:4px;\" mode=\"md\"\r\n                        name=\"information-circle\"></ion-icon></h3>\r\n                <p class=\"ionMedia__text\">{{conversation.description}}</p>\r\n            </ion-label>\r\n        </ion-item> -->\r\n        <!-- <ion-buttons class=\"cursor-pointer\" slot=\"end\">\r\n            <ion-icon name=\"more\"></ion-icon>\r\n        </ion-buttons> -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-progress-bar *ngIf=\"msg_spinner\" type=\"indeterminate\"></ion-progress-bar>\r\n<!--end mobile header-->\r\n<ion-content #content>\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"app-container\">\r\n            <ion-card class=\"ionCard\" id=\"msg_scroll\">\r\n                <ion-text color=\"medium\" class=\"ion-text-center\">\r\n                    <p *ngIf=\"currentUser\">{{'CHAT.joined_chat_message' | translate}} {{\r\n                        currentUser?.user?.first_last_name }}</p>\r\n                    <p *ngIf=\"!currentUser\">{{'CHAT.login_to_join' | translate}}</p>\r\n                </ion-text>\r\n                <ion-list *ngIf=\"messages && currentUser\" class=\"chatbox--body\" lines=\"none\">\r\n                    <!-- <p class=\"chatbox&#45;&#45;body__alert\">{{'CHAT.today' | translate}}</p>  -->\r\n\r\n                    <ng-container *ngFor=\"let message of messages; let last = last;index as i\">\r\n                        <ng-container *ngIf=\"ch_id == 1265 || ch_id =='1265'\">\r\n                            <p *ngIf=\"i == messages.length - count_message\" class=\"chatbox--newMessage\">New Messages</p>\r\n                        </ng-container>\r\n                        <ion-item class=\"ionMedia\">\r\n                            <!-- [ngClass]=\"message.account_donor_id === currentUser.user.id ? '' : 'ionMedia--right'\" -->\r\n                            <div class=\"chatBox__actions\" *ngIf=\"ch_id == 1265 || ch_id =='1265'\"\r\n                                (click)=\"actionPopup(message,message.account_donor_id === currentUser.user.id ? 'true': 'false' ,i)\">\r\n                                <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n                            </div>\r\n                            <div class=\"ionMedia__media\">\r\n                                <!-- [ngClass]=\"message.account_donor_id === currentUser.user.id ? '' : 'ionMedia__media--right'\" -->\r\n                                <ion-avatar slot=\"start\">\r\n                                    <img\r\n                                        [src]=\"message.photo_profile ? message.photo_profile : '../../assets/img/user_icon.png'\">\r\n                                </ion-avatar>\r\n                                <!-- <div class=\"chatLikes\">\r\n                                <span>1</span>\r\n                                <ion-icon name=\"thumbs-up\"></ion-icon>\r\n                            </div> -->\r\n                            </div>\r\n\r\n                            <ion-label class=\"ion-text-wrap\">\r\n                                <h3 class=\"ionMedia__heading\">{{ message.account_donor_id === currentUser.user.id ?\r\n                                    currentUser.user.first_last_name : message.first_last_name }} <small\r\n                                        class=\"chat_date\">{{appService.getDateTimeFormat(message.created_at)}}</small>\r\n                                </h3>\r\n                                <p class=\"ionMedia__text\"\r\n                                    [ngClass]=\"message.account_donor_id === currentUser.user.id ? 'ionMedia__text--left' : 'ionMedia__text--right'\">\r\n                                    {{ message.message_text }}</p>\r\n\r\n                                <div class=\"msgAction\">\r\n                                    <!-- <ng-container *ngFor=\"let emoji of message.react\">\r\n                                            <p class=\"msgAction__action\">{{ emoji.react }} </p>\r\n                                        </ng-container> -->\r\n                                    <ng-container *ngFor=\"let emoji of message.countEveyReacts\">\r\n                                        <p class=\"msgAction__action\" [ngClass]=\"{'active': isUserReacted(emoji.id)}\"\r\n                                            (click)=\"emojiReact(message,emoji.react,i)\">\r\n                                            {{ emoji.react }} {{ emoji.count }} </p>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ng-container>\r\n                    <ng-container *ngFor=\"let message of messages; let last = last;index as i\">\r\n                        <ng-container *ngIf=\"ch_id != 1265 || ch_id != '1265'\">\r\n                            <ion-item class=\"ionMedia\"\r\n                                [ngClass]=\"message.account_donor_id === currentUser.user.id ? '' : 'ionMedia--right'\">\r\n\r\n                                <!-- <div class=\"chatBox__actions\" *ngIf=\"ch_id == 1265 || ch_id =='1265'\"\r\n                                    (click)=\"actionPopup(message,message.account_donor_id === currentUser.user.id ? 'true': 'false' ,i)\">\r\n                                    <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n                                </div> -->\r\n                                <div class=\"ionMedia__media\"\r\n                                    [ngClass]=\"message.account_donor_id === currentUser.user.id ? '' : 'ionMedia__media--right'\">\r\n\r\n                                    <ion-avatar slot=\"start\">\r\n                                        <img\r\n                                            [src]=\"message.photo_profile ? message.photo_profile : '../../assets/img/user_icon.png'\">\r\n                                    </ion-avatar>\r\n                                    <!-- <div class=\"chatLikes\">\r\n                            <span>1</span>\r\n                            <ion-icon name=\"thumbs-up\"></ion-icon>\r\n                        </div> -->\r\n                                </div>\r\n\r\n                                <ion-label class=\"ion-text-wrap\">\r\n                                    <h3 class=\"ionMedia__heading\">{{ message.account_donor_id === currentUser.user.id ?\r\n                                        'Me:' : message.first_last_name }} <small\r\n                                            class=\"chat_date\">{{appService.getDateTimeFormat(message.created_at)}}</small>\r\n                                    </h3>\r\n                                    <p class=\"ionMedia__text\"\r\n                                        [ngClass]=\"message.account_donor_id === currentUser.user.id ? 'ionMedia__text--left' : 'ionMedia__text--right'\">\r\n                                        {{ message.message_text }}</p>\r\n\r\n                                    <div class=\"msgAction\">\r\n                                        <!-- <ng-container *ngFor=\"let emoji of message.react\">\r\n                                        <p class=\"msgAction__action\">{{ emoji.react }} </p>\r\n                                    </ng-container> -->\r\n                                        <!-- <ng-container *ngFor=\"let emoji of message.countEveyReacts\">\r\n                                            <p class=\"msgAction__action\"\r\n                                                (click)=\"emojiAdd(message,message.account_donor_id !== currentUser.user.id ? 'true':'false',emoji.react,i)\">\r\n                                                {{ emoji.react }} {{ emoji.count }} </p>\r\n                                        </ng-container> -->\r\n                                    </div>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ion-list>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer>\r\n    <div class=\"chatbox--footer\">\r\n        <ion-item class=\"inputField inputField--chatBox\" lines=\"none\">\r\n            <ion-avatar slot=\"start\" *ngIf=\"currentUser\">\r\n                <img\r\n                    [src]=\"profile_picture ? profile_picture : '../../assets/img/user_icon.png'\">\r\n            </ion-avatar>\r\n            <ion-input autocapitalize=\"sentences\" class=\"inputField__area\" inputmode=\"text\"\r\n                placeholder=\"{{'CHAT.message_placeholder' | translate}} \" [(ngModel)]=\"message\"\r\n                (keydown.enter)=\"sendMessage()\"></ion-input>\r\n            <!-- <ion-button class=\"commonBtn--transparent text-gray\" (click)=\"presentPopover($event)\">\r\n                <ion-icon name=\"md-happy\"></ion-icon>\r\n            </ion-button> -->\r\n            <ion-button class=\"commonBtn--dark commonBtn--small commonBtn--fullRound\" [disabled]=\"message == ''\"\r\n                (click)=\"sendMessage()\">\r\n                <ion-icon name=\"arrow-round-up\" mode=\"md\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </div>\r\n</ion-footer>"

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

/***/ "./src/app/chat-detail/chat-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]
    }
];
let ChatDetailPageModule = class ChatDetailPageModule {
};
ChatDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
    })
], ChatDetailPageModule);



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.chatbox--body__alert {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 8px 0 15px;\n  text-align: center;\n}\n.chatbox--footer {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  box-shadow: 0 0 10px 0 rgba(38, 36, 35, 0.14);\n  text-align: center;\n  padding-bottom: 20px;\n}\n.chatbox--footer .commonBtn--small {\n  min-width: 25px;\n  height: 25px;\n}\n.chat_date {\n  font-size: 10px;\n  font-weight: 400;\n  padding-left: 4px;\n  color: #CACACA;\n}\n.chatbox--newMessage {\n  position: relative;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--primary-color, #302F34);\n}\n.chatbox--newMessage:before,\n.chatbox--newMessage:after {\n  content: \"\";\n  display: inline-block;\n  width: 25%;\n  height: 2px;\n  background: var(--primary-color, #302F34);\n  top: 50%;\n}\n.chatbox--newMessage:before {\n  margin-right: 15px;\n}\n.chatbox--newMessage:after {\n  margin-left: 15px;\n}\n.chatBox__actions {\n  position: absolute;\n  right: 0;\n  top: 15px;\n  display: inline-block;\n  cursor: pointer;\n}\n.chatBox__actions ion-icon {\n  font-size: 22px;\n  color: #CACACA;\n}\n.ionMedia--right .chatBox__actions {\n  left: 0;\n  right: auto;\n}\n.msgAction {\n  margin-top: 10px;\n}\n.msgAction__action {\n  border-radius: 30px;\n  background: #EDEEF0;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  padding: 4px;\n  min-width: 45px;\n  min-height: 25px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  font-size: 16px;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.msgAction__action:not(last-child) {\n  margin-right: 5px;\n}\n.msgAction__action.active {\n  border: 1px solid #0000cd;\n}\n.chatLikes {\n  cursor: pointer;\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--secondary-color, #ADACAE);\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.chatLikes ion-icon {\n  font-size: 20px;\n  margin-left: 5px;\n}\n.chatLikes .active, .chatLikes :focus, .chatLikes :focus-visible {\n  color: var(--primary-color, #302F34);\n}\n.infoIcon {\n  color: #cacaca;\n  margin-left: 6px;\n  font-size: 20px;\n  position: relative;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zdGRpbiIsInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLFdBQUE7QUFrRkEsVUFBQTtBQWlGQSxVQUFBO0FBOEJBLGdCQUFBO0FBYUEsWUFBQTtBQVdBLG1CQUFBO0FBTUEsU0FBQTtBQ2hPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNLSjtBRERBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0lGO0FESEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0tKO0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0NBQUE7QUNJRjtBRERBOztFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxRQUFBO0FDSUY7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QURBQTtFQUNFLGlCQUFBO0FDR0Y7QURBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNHRjtBRERFO0VBQ0UsZUFBQTtFQUVBLGNBQUE7QUNFSjtBREVBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUNDRjtBRENBO0VBRUUsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNFSjtBRERJO0VBQ0UsaUJBQUE7QUNHTjtBRERJO0VBQ0UseUJBQUE7QUNHTjtBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxvQ0FBQTtBQ0VKO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWRldGFpbC9jaGF0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgdmFyaWFibGVzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogQ29sb3JzICovXG4vL2RlZmF1bHQgcHJpbWFyeS1jb2xvciBpcyAjMzAyRjM0XG5cbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4kZGVmYXVsdC1wcmltYXJ5LWNvbG9yOiAjMzAyRjM0O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGhlYWRlci1iZy1jb2xvcjogI0Q4RDhEODtcbiRoZWFkaW5nLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRoZWFkaW5nLWNvbG9yLWxpZ2h0OiAjMzgzNzNDO1xuJGdyYXktbGlnaHQ6ICNCQUJBQkE7XG4kaGFsZi13aGl0ZTogI0YxRjFGMTtcbiRibHVlLWNvbG9yOiAjNDI2N0IyO1xuJGRhcmstZ3JheS1jb2xvcjogIzI5MjkyOTtcbiRibGFjay0ybmQ6ICMyMDIwMjA7XG4kYm90dG9tLWZvb3Rlci1iZy1jb2xvcjogIzI1MjQyNztcbiRib3R0b20tZm9vdGVyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdHJhbnNwYXJlbnQtY29sb3I6ICMwMDAwMDAwMDtcbiRmb290ZXItYmctY29sb3I6ICRkZWZhdWx0LXByaW1hcnktY29sb3I7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRtYWluLWJnLWNvbG9yOiAkd2hpdGUtY29sb3I7XG5cbiRncmF5LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuXG4vL25ldyBwbGF5ZXIgdmFyaWFibGVzXG5cbiRwbGF5ZXItcHJpbWFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXByaW1hcnktY29sb3IsICNGMkYyRjIpO1xuJHBsYXllci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1zZWNvbmRhcnktY29sb3IsICMyMzIzMjMpO1xuJHBsYXllci10ZXh0LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1jb2xvciwgIzExNkVGRik7XG4kcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMwMDAwMDApO1xuJHBsYXllci1idXR0b24tY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tY29sb3IsICMwQTY1RkYpO1xuJHBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvciwgIzI2MzE0MSk7XG5cbiRjb2xvcnM6IChcbiAgICAgICAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxuICAgICAgICAnaGVhZGVyLWJnLWNvbG9yJzogJGhlYWRlci1iZy1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1iZy1jb2xvcic6ICRmb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLWJnLWNvbG9yJzogJGJvdHRvbS1mb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLXRleHQtY29sb3InOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWhlYWRpbmctY29sb3InOiAkZm9vdGVyLWhlYWRpbmctY29sb3IsXG4gICAgICAgICdtYWluLWJnLWNvbG9yJzogJG1haW4tYmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yJzogJGhlYWRpbmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yLWxpZ2h0JzogJGhlYWRpbmctY29sb3ItbGlnaHQsXG4gICAgICAgICdncmF5LWNvbG9yJzokZ3JheS1jb2xvcixcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAkZ3JheS1saWdodCxcbiAgICAgICAgJ2RhcmstZ3JheSc6ICRkYXJrLWdyYXktY29sb3IsXG4gICAgICAgICdoYWxmLXdoaXRlJzokaGFsZi13aGl0ZSxcbiAgICAgICAgJ2JsdWUtY29sb3InOiRibHVlLWNvbG9yLFxuICAgICAgICAnYmxhY2stMm5kJzogJGJsYWNrLTJuZCxcbiAgICAgICAgJ3RyYW5zcGFyZW50JzogJHRyYW5zcGFyZW50LWNvbG9yLFxuKTtcblxuLy8gQm9keSBmb250XG5cbiRib2R5LWZvbnQtc2l6ZTogMThweDtcbiR4LXNtYWxsLWJvZHktZm9udC1zaXplOiAxNHB4O1xuJGJvZHktZm9udC1zdHlsZTogbm9ybWFsO1xuJGJvZHktZm9udC12YXJpYW50OiBub3JtYWw7XG4kYm9keS1mb250LXdlaWdodDogNjAwO1xuJGxpbmUtaGVpZ2h0OiAxLjY7XG5cbi8vdHlwb2dyYXBoeVxuJGhlYWRpbmctb25lLXNpemU6MzZweDtcbiRoZWFkaW5nLXR3by1zaXplOiAyNHB4O1xuJGhlYWRpbmctdHdvLW1kLXNpemU6IDM2cHg7XG4kaGVhZGluZy10aHJlZS1zaXplOiAxNXB4O1xuJGhlYWRpbmctZm91ci1zaXplOjE0cHg7XG4vLyRoZWFkaW5nLWZpeC1zaXplOjtcbiRoZWFkaW5nLXNpeC1zaXplOiAxNHB4O1xuXG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuJGZvbnQtd2VpZ2h0czogKFxuICAgICAgICAnbGlnaHQnOiAzMDAsXG4gICAgICAgICdub3JtYWwnOjQwMCxcbiAgICAgICAgJ21lZGl1bSc6IDUwMCxcbiAgICAgICAgJ3NlbWlCb2xkJzogNjAwLFxuICAgICAgICAnYm9sZCc6IDcwMCxcbik7XG5cbi8qIGNhcmRzICovXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIC4xNCk7XG5cbi8vQnV0dG9uc1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XG4kYnRuLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi1wYWRkaW5nLXk6IDEwcHg7XG4kYnRuLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcDogNHB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbTogNHB4O1xuJGJ0bi1mb250LXNpemU6IDE0cHg7XG4kYnRuLWxpbmUtaGVpZ2h0OiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4kYnRuLXRleHQtdHJhbnNmb3JtOiAkdGV4dC1sb3dlcmNhc2U7XG4kYnRuLWhlaWdodDogNDBweDtcbiRidG4tbWluLXdpZHRoOiA5MHB4O1xuXG4vL2J1dHRvbnMtd2hpdGVcbiRidG4td2hpdGUtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtaG92ZXI6ICR3aGl0ZS1jb2xvcjtcblxuLy8vYnV0dG9ucy13aGl0ZS1vdXRsaW5lXG4kYnRuLXdoaXRlLW91dGxpbmUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cbi8vL2dyYXlcbiRidG4tZ3JheS10ZXh0LWNvbG9yOiAkZ3JheS1jb2xvcjtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1ib3JkZXItY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtaG92ZXI6ICRoYWxmLXdoaXRlO1xuXG4vLy9kYXJrXG4kYnRuLWRhcmstdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vL2JsdWVcbiRidG4tYmx1ZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYm9yZGVyLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkYmx1ZS1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudFxuJGJ0bi10cmFuc3BhcmVudC10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50IGRhcmstb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLXRleHQtY29sb3I6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG5cbi8vL2JsYWNrIG91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cbi8vQnV0dG9uIGxhcmdlXG4kYnRuLXBhZGRpbmctc3RhcnQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kLWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcC1sZzogNnB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbS1sZzogNnB4O1xuJGJ0bi1mb250LXNpemUtbGc6ICRidG4tZm9udC1zaXplO1xuJGJ0bi1saW5lLWhlaWdodC1sZzogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAzMHB4O1xuJGJ0bi1oZWlnaHQtbGc6IDQ4cHg7XG5cbi8qIEZvcm1zICovXG4kaW5wdXQtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgzNiwgMTEzLCAxODUsIDAuMSk7XG4kaW5wdXQtZm9udC1zaXplOiAyOHB4O1xuJHgtc21hbGwtaW5wdXQtZm9udC1zaXplOiAkeC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTtcbiRpbnB1dC1ib3JkZXI6IG5vbmU7XG4kaW5wdXQtcmFkaXVzOiA0MHB4O1xuJGlucHV0LWJvcmRlci1mb2N1czogbm9uZTtcbiRpbnB1dC1oZWlnaHQ6IDYwcHg7XG4kaW5wdXQtcGFkZGluZzogMCAxNnB4O1xuJGlucHV0LWljb24td2lkdGg6IDIwcHg7XG4kaW5wdXQtaWNvbi1oZWlnaHQ6ICRpbnB1dC1pY29uLXdpZHRoO1xuXG4vL2NoZWNrYm94XG4kY2hlY2tib3gtd2lkdGg6IDI0cHg7XG4kY2hlY2tib3gtaGVpZ2h0OiAkY2hlY2tib3gtd2lkdGg7XG4kY2hlY2tib3gtc21hbGwtd2lkdGg6IDIwcHg7XG4kY2hlY2tib3gtc21hbGwtaGVpZ2h0OiAkY2hlY2tib3gtc21hbGwtd2lkdGg7XG5cbi8vdGV4dFxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbi8vY3JlZGl0IGNhcmRcblxuJGNyZWRpdC1jYXJkLWljb24td2lkdGg6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1oZWlnaHQ6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1yaWdodDogcmlnaHQ7XG4kY3JlZGl0LWNhcmQtaWNvbi1sZWZ0OiBsZWZ0O1xuXG4vKiBIZWFkZXIgSWNvbiAqL1xuXG4kaGVhZGVyLWljb24td2lkdGg6IDMwcHg7XG4kaGVhZGVyLWljb24taGVpZ2h0OiAzMHB4O1xuJGhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiRoZWFkZXItbG9nby1oZWlnaHQ6IDQ4cHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby1oZWlnaHQ6IDQwcHg7XG4keC1zbWFsbC1oZWFkZXItaWNvbi13aWR0aDogMjVweDtcbiRoZWFkZXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtdXBwZXJjYXNlO1xuJGhlYWRlci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8qIFNpZGViYXIgKi9cblxuJHNpZGViYXItbG9nby13aWR0aDogMjAwcHg7XG4kc2lkZWJhci1sb2dvLWhlaWdodDogMTYwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtc2lkZWJhci1pY29uLXdpZHRoOiAyNXB4O1xuJHNpZGViYXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJHNpZGViYXItbGluay1sYWJlbC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRzaWRlYmFyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC1jYXBpdGFsaXplO1xuJHNpZGViYXItbGluay1sYWJlbC1mb250LXdlaWdodDogNTAwO1xuJHNpZGViYXItaWNvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XG4vKiBwcm9maWxlIGF2YXRhciAqL1xuXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogODBweDtcbiRwcm9maWxlLWltYWdlLWhlaWdodDogJHByb2ZpbGUtaW1hZ2Utd2lkdGg7XG5cblxuLyogdGFicyAqL1xuXG4kdGFicy1iYXItYmctY29sb3I6JHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1idG4tdGV4dC1jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1zaXplOiAxNXB4O1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjoycHggc29saWQgJHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yOiRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS1ib3JkZXItY29sb3I6MnB4IHNvbGlkICRoZWFkaW5nLWNvbG9yO1xuXG5cblxuLy8vIGFwcC1jb250YWluZXItd2lkdGhcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJGNvbnRhaW5lci13aWR0aDogKFxuICAgICAgICAnbGFyZ2UnOiAxMDAlLFxuICAgICAgICAnbWVkaXVtJzogMTAwJSxcbiAgICAgICAgJ3NtYWxsJzogMTAwJSxcbiAgICAgICAgJ3gtc21hbGwnOiAxMDAlLFxuKSAhZGVmYXVsdDtcblxuLy8vIEJyZWFrcG9pbnRzIG1hcFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kbWVkaWEtYnJlYWtwb2ludHM6IChcbiAgICAgICAgJ2xhcmdlJzogMTIwMHB4LFxuICAgICAgICAnbWVkaXVtJzogOTkycHgsXG4gICAgICAgICdzbWFsbCc6IDc2OHB4LFxuICAgICAgICAneC1zbWFsbCc6IDU3NnB4LFxuICAgICAgICAneHgtc21hbGwnOiA0MTRweCxcbikgIWRlZmF1bHQ7XG5cbi8vLyBSZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkwgd2hlcmUgYWxsIGFzc2V0cyBhcmUgc2VydmVkIGZyb21cbi8vLyBAdHlwZSBTdHJpbmdcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2hlbiB1c2luZyBhIENETlxuLy8vICAgJGJhc2UtdXJsOiAnaHR0cDovL2Nkbi5leGFtcGxlLmNvbS9hc3NldHMvJztcbiRiYXNlLXVybDogJ2Fzc2V0cy8nICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3Nhc3MvY29uZmlnXCI7XHJcblxyXG4uY2hhdGJveC0tYm9keSB7XHJcbiAgJl9fYWxlcnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogOHB4IDAgMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5jaGF0Ym94LS1mb290ZXIge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIDAuMTQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAuY29tbW9uQnRuLS1zbWFsbHtcclxuICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG59XHJcblxyXG4uY2hhdF9kYXRlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBjb2xvcjogI0NBQ0FDQTtcclxufVxyXG5cclxuLmNoYXRib3gtLW5ld01lc3NhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcclxufVxyXG5cclxuLmNoYXRib3gtLW5ld01lc3NhZ2U6YmVmb3JlLFxyXG4uY2hhdGJveC0tbmV3TWVzc2FnZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcclxuICB0b3A6IDUwJTtcclxuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNoYXRib3gtLW5ld01lc3NhZ2U6YmVmb3JlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0Ym94LS1uZXdNZXNzYWdlOmFmdGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNoYXRCb3hfX2FjdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgLy8gY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XHJcbiAgICBjb2xvcjogI0NBQ0FDQTtcclxuICB9XHJcbn1cclxuXHJcbi5pb25NZWRpYS0tcmlnaHQgLmNoYXRCb3hfX2FjdGlvbnMge1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1zZ0FjdGlvblxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAmX19hY3Rpb257XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VERUVGMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWluLXdpZHRoOiA0NXB4O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICY6bm90KGxhc3QtY2hpbGQpe1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgICYuYWN0aXZle1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMGNkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuLmNoYXRMaWtlc3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICAuYWN0aXZlLCA6Zm9jdXMsIDpmb2N1cy12aXNpYmxle1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xyXG4gIH1cclxufVxyXG4uaW5mb0ljb24ge1xyXG4gIGNvbG9yOiNjYWNhY2E7XHJcbiAgbWFyZ2luLWxlZnQ6NnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmNoYXRib3gtLWJvZHlfX2FsZXJ0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDhweCAwIDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoYXRib3gtLWZvb3RlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzgsIDM2LCAzNSwgMC4xNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY2hhdGJveC0tZm9vdGVyIC5jb21tb25CdG4tLXNtYWxsIHtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5jaGF0X2RhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogI0NBQ0FDQTtcbn1cblxuLmNoYXRib3gtLW5ld01lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbn1cblxuLmNoYXRib3gtLW5ld01lc3NhZ2U6YmVmb3JlLFxuLmNoYXRib3gtLW5ld01lc3NhZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgdG9wOiA1MCU7XG59XG5cbi5jaGF0Ym94LS1uZXdNZXNzYWdlOmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNoYXRib3gtLW5ld01lc3NhZ2U6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNoYXRCb3hfX2FjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXRCb3hfX2FjdGlvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjQ0FDQUNBO1xufVxuXG4uaW9uTWVkaWEtLXJpZ2h0IC5jaGF0Qm94X19hY3Rpb25zIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5tc2dBY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1zZ0FjdGlvbl9fYWN0aW9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogI0VERUVGMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBtaW4taGVpZ2h0OiAyNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLm1zZ0FjdGlvbl9fYWN0aW9uOm5vdChsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1zZ0FjdGlvbl9fYWN0aW9uLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwY2Q7XG59XG5cbi5jaGF0TGlrZXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGF0TGlrZXMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY2hhdExpa2VzIC5hY3RpdmUsIC5jaGF0TGlrZXMgOmZvY3VzLCAuY2hhdExpa2VzIDpmb2N1cy12aXNpYmxlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xufVxuXG4uaW5mb0ljb24ge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.ts ***!
  \*************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ "./src/services/chat.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/emoji/emoji.component */ "./src/app/common/emoji/emoji.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _common_chat_members_chat_members_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/chat-members/chat-members.component */ "./src/app/common/chat-members/chat-members.component.ts");



















// import { map } from 'rxjs/internal/operators/map';
let ChatDetailPage = class ChatDetailPage {
    // recentmsg_id: any;
    // @ViewChild('content') private content: any;
    constructor(platform, socket, toastCtrl, route, router, appService, chatService, storage, loader, actionSheetController, modalController, toast, location, dom, translate, popoverController, apiService, alertController, event_provider) {
        this.platform = platform;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.chatService = chatService;
        this.storage = storage;
        this.loader = loader;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.toast = toast;
        this.location = location;
        this.dom = dom;
        this.translate = translate;
        this.popoverController = popoverController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.event_provider = event_provider;
        this.message = '';
        this.msg_spinner = false;
        this.IMAGE_BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].profile_img_base_url;
        this.edited = false;
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get('ALERTS').subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        if (this.platform.is('cordova')) {
            window.addEventListener("keyboardDidShow", () => {
                // console.log("Keyboard is Shown",event);
                // this.event_provider.hidefooter(false, 'other');
            });
            window.addEventListener("keyboardDidHide", () => {
                // console.log("Keyboard is Hidden",event);
                // this.event_provider.hidefooter(true, 'other');
            });
        }
    }
    ngOnInit() {
    }
    getRooms(id) {
        // getting chat rooms for church
        var uid = this.currentUser ? this.currentUser.user.id : "guest";
        this.chatService.getChats(id, uid).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.status) {
                this.allRooms = res.conversation[0];
            }
        }), (err) => {
        });
    }
    load_messages() {
        let self = this;
        // getting all chats in chatbox
        this.chatService.get_messages(this.conversation.id).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.messages = res.messages[0];
            this.messages.forEach(element => {
                try {
                    element.photo_profile = element.photo_profile ? this.dom.bypassSecurityTrustUrl(element.photo_profile) : '';
                    element.message_text = JSON.parse(element.message_text);
                    element.react.forEach(reaction => {
                        reaction.react = JSON.parse(reaction.react);
                    });
                    if (element.countEveyReacts.length > 0) {
                        element.countEveyReacts.forEach(emoji => {
                            emoji.react = JSON.parse(emoji.react);
                        });
                    }
                }
                catch (_a) {
                    element.message_text = element.message_text;
                }
            });
            this.msg_spinner = false;
            let interval = setInterval(() => {
                this.scrollToBottom();
                clearInterval(interval);
            }, 500);
            // this.messages = this.messages.map( x => {
            //    x.created_at = moment(x.created_at , 'M/d/yy h:mm a');
            // });
        }), (err) => {
        });
    }
    // saving and sending message
    save_message() {
        // message field validation
        if (this.message && this.message != '') {
            const body = {
                auth: 'Bearer ' + this.currentUser.auth.access_token,
                chatroom_id: this.conversation.id,
                account_donor_id: this.currentUser.user.id,
                status: '1',
                message: this.message
            };
            // emitting event to socket
            this.chatService.save_message(JSON.stringify(body)).subscribe((res) => {
                // this.recentmsg_id = res.msg_id
                this.socket.emit('send-message', { text: body.message, id: res.msg_id, user_id: this.currentUser.user.id, conversation_id: this.conversation.id, church_id: this.ch_id, photo_profile: this.profile_picture["changingThisBreaksApplicationSecurity"], first_last_name: this.currentUser.user.first_last_name });
                this.scrollToBottom();
                return true;
            }, (err) => {
                // this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error_sending_message : 'Error sending message!'), (this.alertMessage ? this.alertMessage.error : 'ERROR'), "warning");
                this.msg_spinner = false;
                return;
            });
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.type_message_first : 'Type Message first'), (this.alertMessage ? this.alertMessage.missing_required_fields : 'Missing Required Fields'), "warning");
        }
    }
    socketInitialization(user) {
        this.socket.connect();
        let room = this.conversation.unique_id;
        let name = user.first_last_name;
        // emmitted to set socket
        this.socket.emit('set-socket', name);
        // emiited to checin in chat room
        this.socket.emit('check-in', room);
        // emmited to set name
        this.socket.emit('set-name', name);
        this.socket.fromEvent('users-changed').subscribe(data => {
            let user = data['user'];
            if (user) {
                if (data['event'] === 'left') {
                    this.showToast('User left: ' + user);
                }
                else {
                    this.showToast('User joined: ' + user);
                }
            }
        });
        this.socket.fromEvent('message').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((data) => console.log()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(0))
            .subscribe((message) => {
            // debugger;
            this.socket.emit('receive-message', message);
        });
        this.socket.fromEvent('group').subscribe(room => {
        });
        this.socket.fromEvent('receive-message').subscribe(room => {
            if (JSON.stringify(this.messages[this.messages.length - 1]) != JSON.stringify(room)) {
                this.messages.push(room);
            }
            else {
            }
            // this.load_messages();
        });
        this.socket.fromEvent('on_delete_message').subscribe((message) => {
            var idx = this.messages.findIndex(x => x.id == message.message.id);
            if (idx > -1) {
                this.messages.splice(idx, 1);
            }
            // this.load_messages();
        });
        this.socket.fromEvent('on_edit_message').subscribe((message) => {
            var idx = this.messages.findIndex(x => x.id == message.message.id);
            if (idx > -1) {
                this.messages[idx].message_text = message.message.message;
            }
            // this.load_messages();
        });
        this.socket.fromEvent('show-notification').subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: data.user + ': ' + data.msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }));
        this.socket.fromEvent('joined').subscribe(room => {
        });
    }
    getCurrentUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting user from local storage
            yield this.storage.get('user').then(value => {
                if (value != null && value != "guest") {
                    this.currentUser = value;
                    this.profile_picture = this.currentUser.user.photo_profile ? this.dom.bypassSecurityTrustUrl(this.currentUser.user.photo_profile) : ''; // to save profile pic
                    this.socketInitialization(this.currentUser.user);
                }
            });
        });
    }
    sendMessage() {
        if (this.currentUser != null && this.currentUser != "guest") {
            if (this.edited) {
                this.editMsg();
            }
            else {
                this.save_message();
                this.scrollToBottom();
                this.message = '';
            }
        }
        else {
            this.router.navigate(['/login']);
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.login_to_message : 'Login to Message'), (this.alertMessage ? this.alertMessage.LoginRequired : 'Login Required'), "warning");
            return;
        }
    }
    scrollToBottom() {
        this.content.scrollToBottom(300);
    }
    ionViewDidEnter() {
        this.event_provider.hidefooter(false, 'other');
    }
    ionViewWillLeave() {
        // disconnecting socket on PAGE LEAVE
        this.socket.disconnect();
        const body = JSON.stringify({
            chatroom_id: this.conversation.id,
            account_donor_id: this.currentUser.user.id,
        });
        this.apiService.readMsg(body).subscribe((res) => {
        }, (err) => {
        });
        this.event_provider.hidefooter(true, 'other');
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    ionViewWillEnter() {
        // this.ngOnInit();
        // this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        // if(this.platform.is('android') || this.platform.is('iphone')) {
        //     if (!this.ch_id) {
        //         this.ch_id = environment.church_id;
        //     }
        // }
        // let conversation = this.route.snapshot.paramMap.get('conversation');
        this.ch_id = this.route.snapshot.paramMap.get('ch_id');
        let conversation = this.route.snapshot.paramMap.get('conversation');
        if (conversation) {
            this.conversation = JSON.parse(conversation);
            // getting user from local storage
            this.getCurrentUser();
            // getting chat rooms for church
            let time = setTimeout(() => {
                this.getRooms(this.ch_id);
            }, 1000);
            // loading all chats in chatbox
            this.load_messages();
        }
        this.count_message = this.conversation.message_count;
    }
    gotoBackPage() {
        this.location.back();
        // this.router.navigateByUrl('/chat');
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _common_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_14__["EmojiComponent"],
                cssClass: 'emji-popover',
                componentProps: {
                    show_emoji: true
                },
                event: ev,
                translucent: true
            });
            popover.onDidDismiss().then(res => {
                if (res.data && res.data.event) {
                    if (this.message === undefined) {
                        this.message = '';
                    }
                    this.message += res.data.event.char;
                }
            });
            return yield popover.present();
        });
    }
    isUserReacted(user_ids) {
        let return_value = false;
        user_ids.forEach(element => {
            if (this.currentUser.user.id === element) {
                return_value = true;
            }
        });
        return return_value;
    }
    emojiReact(message, emoji, index) {
        const body = JSON.stringify({
            message_id: message.id,
            account_donor_id: this.currentUser.user.id,
            chatroom_id: this.conversation.id,
            react: '' + emoji
        });
        this.apiService.reactMsg(body).subscribe((res) => {
            if (res) {
                var getEmojidata = JSON.parse(body);
                if (this.messages[index].countEveyReacts) {
                    var findIndex = this.messages[index].countEveyReacts ? this.messages[index].countEveyReacts.findIndex(re => re.react == getEmojidata.react) : -1;
                    if (findIndex > -1) {
                        // console.log(findIndex, this.messages[index].countEveyReacts[findIndex].id, getEmojidata);
                        if (this.messages[index].countEveyReacts[findIndex].id.includes(getEmojidata.account_donor_id)) {
                            if (this.messages[index].countEveyReacts[findIndex].count > 1) {
                                this.messages[index].countEveyReacts[findIndex].count = this.messages[index].countEveyReacts[findIndex].count - 1;
                                var idx2 = this.messages[index].countEveyReacts[findIndex].id.findIndex(ids => ids == getEmojidata.account_donor_id);
                                this.messages[index].countEveyReacts[findIndex].id.splice(idx2, 1);
                            }
                            else {
                                this.messages[index].countEveyReacts.splice(findIndex, 1);
                            }
                        }
                        else {
                            this.messages[index].countEveyReacts[findIndex].count = this.messages[index].countEveyReacts[findIndex].count + 1;
                            this.messages[index].countEveyReacts[findIndex].id.push(getEmojidata.account_donor_id);
                        }
                    }
                    else {
                        var usr = [];
                        usr.push(getEmojidata.account_donor_id);
                        var newReact = {
                            count: 1,
                            id: usr,
                            react: getEmojidata.react
                        };
                        // countEveyReacts.push(newReact);
                        this.messages[index].countEveyReacts.push(newReact);
                    }
                }
                else {
                    var usr = [];
                    var countEveyReacts = [];
                    usr.push(getEmojidata.account_donor_id);
                    var newReact = {
                        count: 1,
                        id: usr,
                        react: getEmojidata.react
                    };
                    // countEveyReacts.push(newReact);
                    countEveyReacts.push(newReact);
                    this.messages[index].countEveyReacts = countEveyReacts;
                }
            }
        });
    }
    // emojiAdd(message, emoji, index) {
    //     this.emojiReact(message, emoji, index)
    // }
    cheatReportAction(message, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                mode: 'ios',
                cssClass: 'cActionSheet forEmoji',
                buttons: [{
                        // text:JSON.stringify(`"\\"\\\ud83d\\\ude00\\""`),
                        text: '\ud83d\ude00',
                        handler: () => {
                            const emoji = '\ud83d\ude00';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude03',
                        handler: () => {
                            const emoji = '\ud83d\ude03';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude04',
                        handler: () => {
                            const emoji = '\ud83d\ude04';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude01',
                        handler: () => {
                            const emoji = '\ud83d\ude01';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude06',
                        handler: () => {
                            const emoji = '\ud83d\ude06';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83e\udd23',
                        handler: () => {
                            const emoji = '\ud83e\udd23';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: 'Copy',
                        handler: () => {
                            this.copyMsg(message);
                        }
                    }, {
                        text: 'Report',
                        handler: () => {
                            this.reportMsg(message);
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    membersDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_chat_members_chat_members_component__WEBPACK_IMPORTED_MODULE_18__["ChatMembersComponent"],
                backdropDismiss: true,
                cssClass: 'BibleModal',
                componentProps: {
                    conversations: this.conversation,
                }
            });
            return yield modal.present();
        });
    }
    reportMsg(message) {
        const body = JSON.stringify({
            message_id: message.id,
            account_donor_id: this.currentUser.user.id,
            chatroom_id: this.conversation.id,
            message: 'Message Reported'
        });
        this.apiService.repMsg(body).subscribe((res) => {
            if (res) {
                this.toast.presentToastWithOptions(res.message, 'Thanks', 'success');
            }
        });
    }
    copyMsg(message) {
        navigator.clipboard.writeText(message.message_text);
        this.toast.presentToastWithOptions(' Copied ', '', 'success');
    }
    editMsg() {
        const body = JSON.stringify({
            id: this.previous_message.id,
            message: this.message,
        });
        this.socket.emit('edit_message', { id: this.previous_message.id, message: JSON.parse(body).message });
        this.apiService.editMsg(body).subscribe((res) => {
            if (res) {
                var idx = this.messages.findIndex(x => x.id == this.previous_message.id);
                if (idx > -1) {
                    this.messages[idx].message_text = this.message;
                    this.edited = false;
                    this.previous_message = null;
                    this.message = '';
                }
            }
        });
    }
    presentAlertConfirm(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmation!',
                subHeader: 'Are you sure you want to delete this message?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.deleteMsg(message);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteMsg(message) {
        const body = JSON.stringify({
            id: message.id
        });
        this.apiService.delMsg(body).subscribe((res) => {
            if (res) {
                // this.toast.presentToastWithOptions(res.message, 'Thanks', 'success');
                // var idx = this.messages.findIndex(x => x.id == message.id)
                // if (idx > -1) {
                //     this.messages.splice(idx, 1);
                // }
                this.toast.presentToastWithOptions('Deleted Successfully', 'Thanks', 'success');
                this.socket.emit('delete_message', message);
            }
        });
    }
    actionPopup(message, action, index) {
        if (action == 'true') {
            this.cheatAction(message, index);
        }
        else {
            this.cheatReportAction(message, index);
        }
    }
    cheatAction(message, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                mode: 'ios',
                cssClass: 'cActionSheet forEmoji',
                buttons: [{
                        text: '\ud83d\ude00',
                        handler: () => {
                            const emoji = '\ud83d\ude00';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude03',
                        handler: () => {
                            const emoji = '\ud83d\ude03';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude04',
                        handler: () => {
                            const emoji = '\ud83d\ude04';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude01',
                        handler: () => {
                            const emoji = '\ud83d\ude01';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83d\ude06',
                        handler: () => {
                            const emoji = '\ud83d\ude06';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: '\ud83e\udd23',
                        handler: () => {
                            const emoji = '\ud83e\udd23';
                            this.emojiReact(message, emoji, index);
                        }
                    }, {
                        text: 'Copy',
                        handler: () => {
                            navigator.clipboard.writeText(message.message_text);
                            // this.clipboard.copy(message.message_text)
                            this.toast.presentToastWithOptions(' Copied ', '', 'success');
                        }
                    }, {
                        text: 'Edit Message',
                        handler: () => {
                            this.message = message.message_text;
                            this.edited = true;
                            this.previous_message = message;
                        }
                    }, {
                        text: 'Delete Message',
                        handler: () => {
                            this.presentAlertConfirm(message);
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ChatDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__["EventProviderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatDetailPage.prototype, "content", void 0);
ChatDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-detail',
        template: __webpack_require__(/*! raw-loader!./chat-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-detail/chat-detail.page.html"),
        styles: [__webpack_require__(/*! ./chat-detail.page.scss */ "./src/app/chat-detail/chat-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        src_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__["EventProviderService"]])
], ChatDetailPage);



/***/ })

}]);
//# sourceMappingURL=chat-detail-chat-detail-module-es2015.js.map