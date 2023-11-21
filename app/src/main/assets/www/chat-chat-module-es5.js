(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"backBtn-wrapper hide-mobile\">\r\n        <ion-button *ngIf=\"!event_provider.savedChangesVisibleHeaderValue\" (click)=\"gotobackPage()\" class=\"commonBtn commonBtn--dark commonBtn--round\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp; {{'Back' | translate}}\r\n        </ion-button>\r\n    </div>\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"app-container\">\r\n            <!-- <div class=\"ion-margin-bottom ion-text-right\">\r\n                <ion-button (click)=\"enter_password()\" class=\"commonBtn commonBtn--dark commonBtn--round\"><span\r\n                        style=\"font-family: monospace;\"></span>{{'CHAT.privatechatroom' | translate}}\r\n                </ion-button>\r\n            </div> -->\r\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\" style=\"border-radius: 5px;\"\r\n                *ngIf=\"conversations && conversations.length === 0 && is_show_no_record\">\r\n                <h4 class=\"heading4\"> {{'CHAT.no_group_message' | translate}}</h4>\r\n            </ion-card>\r\n            <ion-card class=\"ionCard\">\r\n                <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n                    <ion-refresher-content refreshingSpinner=\"circles\" refreshingText=\"\">\r\n                    </ion-refresher-content>\r\n                </ion-refresher>\r\n                <ng-container *ngIf=\"conversations && conversations.length > 0\">\r\n                    <ion-list  class=\"chat-list\">\r\n\r\n                        <ion-item class=\"ionMedia  link-item\" detail routerDirection=\"root\"\r\n                            *ngFor=\"let c of conversations;index as i\" (click)=\"loadChatBox(c)\">\r\n                            <div class=\"ionMedia__media ionMedia__media--gray ionMedia__media--small\">\r\n                                <ng-container *ngIf=\"ch_id == 1265 || ch_id =='1265'\">\r\n                                    <span *ngIf=\"c.message_count != '0'\" class=\"noti-badge\">\r\n                                        {{c.message_count}}\r\n                                    </span>\r\n                                </ng-container>\r\n                                <ion-icon name=\"people\" slot=\"start\" class=\"ionMedia__icon text-dark\"></ion-icon>\r\n                            </div>\r\n                            <ion-label class=\"ion-text-wrap\" (touchstart)=\"onTouchStart($event,c,i)\"\r\n                                (touchend)=\"onTouchEnd($event,c,i)\">\r\n                                <h3 class=\"ionMedia__heading\">{{c.name}}\r\n                                    <ng-container *ngIf=\"ch_id == 1265 || ch_id =='1265'\">\r\n                                        <ion-icon *ngIf=\"c.muted != '0'\" name=\"notifications-off\"\r\n                                            style=\"margin-left: 5px;\"></ion-icon>\r\n                                    </ng-container>\r\n                                </h3>\r\n                                <p class=\"ionMedia__text\">{{c.description}}</p>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </ng-container>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<!--<app-footer-mobile></app-footer-mobile>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/create-chat/create-chat.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/create-chat/create-chat.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"ionCard\" style=\"border-radius: 0; margin-bottom: 0;\">\r\n    <ion-card-header class=\"\">\r\n        <ion-card-title class=\"heading6\">{{'CHAT.enterpassword' | translate}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n        <div class=\"ion-margin-bottom\">\r\n            <ion-item class=\"inputField\" lines=\"none\">\r\n                <ion-input [(ngModel)]=\"chatroom_password\" placeholder=\"{{'CHAT.password' | translate}}\"\r\n                    class=\"inputField__area\" inputmode=\"text\"> </ion-input>\r\n            </ion-item>\r\n        </div>\r\n        <div class=\"ion-margin-top\">\r\n            <ion-button (click)=\"dismiss()\" class=\"commonBtn commonBtn--dark commonBtn--mdblock\" fill=\"block\">\r\n                {{'CHAT.save' | translate}}\r\n            </ion-button>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _create_chat_create_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-chat/create-chat.component */ "./src/app/chat/create-chat/create-chat.component.ts");










var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"], _create_chat_create_chat_component__WEBPACK_IMPORTED_MODULE_9__["CreateChatComponent"]],
            entryComponents: [_create_chat_create_chat_component__WEBPACK_IMPORTED_MODULE_9__["CreateChatComponent"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.chat-list {\n  height: 80vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: none;\n  border-top: 1px solid #dadada;\n  padding-top: 15px;\n}\n.chat-list .ionMedia__media .noti-badge {\n  top: -5px;\n  right: -5px;\n  left: auto;\n}\n.chat-list .ionMedia__heading {\n  text-transform: capitalize;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.chat-list .ionMedia__heading ion-icon {\n  font-size: 20px;\n  fill: rgba(0, 0, 0, 0.5);\n}\n@media screen and (max-width: 992px) {\n  .chat-list .chat-list {\n    height: 70vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3RkaW4iLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUNqT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ01GO0FEREk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNHTjtBREFFO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQ0dOO0FDb1BFO0VGblBFO0lBQ0UsWUFBQTtFQ0VKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xyXG5cclxuLmNoYXQtbGlzdCB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgLmlvbk1lZGlhOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYTtcclxuICB9XHJcbiAgLmlvbk1lZGlhX19tZWRpYXtcclxuICAgIC5ub3RpLWJhZGdlIHtcclxuICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICByaWdodDogLTVweDtcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLmlvbk1lZGlhX19oZWFkaW5ne1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC41MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcclxuICAgIC5jaGF0LWxpc3Qge1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qIENvbG9ycyAqL1xuLyogY2FyZHMgKi9cbi8qIEZvcm1zICovXG4vKiBIZWFkZXIgSWNvbiAqL1xuLyogU2lkZWJhciAqL1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cbi8qIHRhYnMgKi9cbi5jaGF0LWxpc3Qge1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNoYXQtbGlzdCAuaW9uTWVkaWFfX21lZGlhIC5ub3RpLWJhZGdlIHtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTVweDtcbiAgbGVmdDogYXV0bztcbn1cbi5jaGF0LWxpc3QgLmlvbk1lZGlhX19oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2hhdC1saXN0IC5pb25NZWRpYV9faGVhZGluZyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNoYXQtbGlzdCAuY2hhdC1saXN0IHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgbWl4aW5zLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9mb250IHNpemVcblxuQG1peGluIGZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuQG1peGluIGNsZWFyZml4KCkge1xuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7IC8qIDEgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzO1xuICAvLyBXZWJLaXRcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi8vIFNpemluZyBzaG9ydGN1dHNcbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBGaXJlZm94IDQtMThcbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggMTkrXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6ICN7MC8wfSBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBEcm9wIHNoYWRvd3NcbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5cbi8vIEdSQURJRU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgJHN0YXJ0LXBlcmNlbnQgdG9wLCAkZW5kLXBlcmNlbnQgdG9wLCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgY29sb3Itc3RvcCgkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQpLCBjb2xvci1zdG9wKCRlbmQtY29sb3IgJGVuZC1wZXJjZW50KSk7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgJHN0YXJ0LXBlcmNlbnQsIGxlZnQgJGVuZC1wZXJjZW50LCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogIC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93blxufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkZGVnOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFN0YW5kYXJkLCBJRTEwXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGVmdCwgbGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgkc3RhcnQtY29sb3IpLCBjb2xvci1zdG9wKCRjb2xvci1zdG9wLCAkbWlkLWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICM1NTUsICRvdXRlci1jb2xvcjogIzMzMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMCwgY2VudGVyIGNlbnRlciwgNDYwLCBmcm9tKCRpbm5lci1jb2xvciksIHRvKCRvdXRlci1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCguMjUsICRjb2xvciksIGNvbG9yLXN0b3AoLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsICRjb2xvciksIGNvbG9yLXN0b3AoLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4vLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiByZXNldC1maWx0ZXIoKSB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XG59XG5cbi8vIEFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICR0ZXh0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkdGV4dC1jb2xvciwgMTAlKTtcbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiB2YXJpYW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlci1jb2xvciwgJGJhY2tncm91bmQtaG92ZXIpIHtcbiAgLS1jb2xvcjogI3skY29sb3J9O1xuICAtLWJhY2tncm91bmQ6ICN7JGJhY2tncm91bmR9O1xuICAtLWJvcmRlci1jb2xvcjogI3skYm9yZGVyLWNvbG9yfTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiN7JGJhY2tncm91bmQtaG92ZXJ9O1xuXG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy1zdGFydCwgJGJ0bi1wYWRkaW5nLWVuZCwgJGJ0bi1wYWRkaW5nLXRvcCwgJGJ0bi1wYWRkaW5nLWJvdHRvbSwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYnRuLWhlaWdodCwgJGJ0bi1taW4td2lkdGgpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiN7JGJ0bi1wYWRkaW5nLXN0YXJ0fTtcbiAgLS1wYWRkaW5nLWVuZDogI3skYnRuLXBhZGRpbmctZW5kfTtcbiAgLS1wYWRkaW5nLXRvcDogI3skYnRuLXBhZGRpbmctdG9wfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skYnRuLXBhZGRpbmctYm90dG9tfTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBoZWlnaHQ6ICRidG4taGVpZ2h0O1xuICBtaW4td2lkdGg6ICRidG4tbWluLXdpZHRoO1xufVxuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMYWJlbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICZbaHJlZl0ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMaXN0c1xuXG4vLyBVbnN0eWxlZCBrZWVwcyBsaXN0IGl0ZW1zIGJsb2NrIGxldmVsLCBqdXN0IHJlbW92ZXMgZGVmYXVsdCBicm93c2VyIHBhZGRpbmcgYW5kIGxpc3Qtc3R5bGVcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cblxuLy9tZWRpYSBicmVha3BvaW50c1xuXG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KGxhcmdlKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobWVkaXVtKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludCh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS14eHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_chat_create_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-chat/create-chat.component */ "./src/app/chat/create-chat/create-chat.component.ts");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ "./src/services/chat.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");

















var ChatPage = /** @class */ (function () {
    function ChatPage(toastCtrl, popoverController, loader, chatService, storage, router, analytics, platform, device, toast, event_provider, translate, location, common, actionSheetController, apiService) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.popoverController = popoverController;
        this.loader = loader;
        this.chatService = chatService;
        this.storage = storage;
        this.router = router;
        this.analytics = analytics;
        this.platform = platform;
        this.device = device;
        this.toast = toast;
        this.event_provider = event_provider;
        this.translate = translate;
        this.location = location;
        this.common = common;
        this.actionSheetController = actionSheetController;
        this.apiService = apiService;
        this.conversations = [];
        this.private_chatrooms = [];
        this.is_show_no_record = false;
        // preparing device data
        // if(this.platform.is('android') || this.platform.is('iphone')) {
        //     let dev_id = this.device.uuid;
        //     if (dev_id){
        //         // this.device_id =  dev_id;
        //         this.device_id =  'church';
        //     }
        // }
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        this.location.subscribe(function (res) {
            _this.doRefresh();
        });
    }
    ChatPage.prototype.ngOnInit = function () {
        // let dev_id = this.device.uuid;
        // if (dev_id){
        //     this.device_id = dev_id;
        //     this.getTheme();
        // } else {
        //     this.getTheme();
        // }
        // this.event_provider.userLogout.subscribe(value => {              // listening event
        //     this.ngOnInit()
        // });
    };
    ChatPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    ChatPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    ChatPage.prototype.getTheme = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL(window.location.href);
                        console.log(url.pathname);
                        // getting theme from local storage
                        return [4 /*yield*/, this.event_provider.getChurchData.subscribe(function (value) {
                                if (!(Object.keys(value).length === 0)) {
                                    _this.theme = value.church;
                                    _this.ch_id = _this.theme.ch_id;
                                    _this.getUser();
                                    var timer = setTimeout(function () {
                                        if (_this.user) {
                                            _this.getChats(_this.theme.ch_id);
                                        }
                                        else {
                                            _this.router.navigate(['/login', {
                                                    page: "chat",
                                                    path: url.pathname,
                                                }]);
                                            _this.getChats(_this.theme.ch_id);
                                            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.login_to_message : 'Login to Message'), (_this.alertMessage ? _this.alertMessage.LoginRequired : 'Login Required'), "warning");
                                            // return;
                                        }
                                    }, 1000);
                                    // this.getChats(this.theme.ch_id);
                                }
                            })];
                    case 1:
                        // getting theme from local storage
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.getChats = function (id) {
        var _this = this;
        // getting chat rooms
        var uid = this.user ? this.user.user.id : "guest";
        this.loader.presentLoading().then(function () { });
        setTimeout(function () {
            _this.loader.stopLoading();
        }, 1000);
        this.chatService.getChats(id, uid).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var my_private_rooms, my_private_rooms, my_private_rooms;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.status) {
                    this.conversations = res.conversation[0].filter(function (x) { return x.private_chatroom !== 'true'; });
                    this.private_chatrooms = res.conversation[0].filter(function (x) { return x.private_chatroom === 'true'; });
                    if (this.private_chatrooms.length > 0) {
                        if (this.device_id && this.user) {
                            my_private_rooms = this.private_chatrooms.filter(function (x) {
                                var check_device = x.devices.find(function (y) { return y.device_id === _this.device_id; });
                                var check_member = x.members.find(function (y) { return y.account_donor_id === _this.user.user.id; });
                                if (check_device || check_member) {
                                    return x;
                                }
                            });
                            if (my_private_rooms.length > 0) {
                                this.conversations = this.conversations.concat(my_private_rooms);
                            }
                        }
                        else if (this.device_id) {
                            my_private_rooms = this.private_chatrooms.filter(function (x) {
                                var check = x.devices.find(function (y) { return y.device_id === _this.device_id; });
                                if (check) {
                                    return x;
                                }
                            });
                            if (my_private_rooms.length > 0) {
                                this.conversations = this.conversations.concat(my_private_rooms);
                            }
                        }
                        else if (this.user) {
                            my_private_rooms = this.private_chatrooms.filter(function (x) {
                                var check = x.members.find(function (y) { return y.account_donor_id === _this.user.user.id; });
                                if (check) {
                                    return x;
                                }
                            });
                            if (my_private_rooms.length > 0) {
                                this.conversations = this.conversations.concat(my_private_rooms);
                            }
                        }
                    }
                }
                this.is_show_no_record = true;
                this.conversations = this.conversations.sort(function (a, b) { return new Date(a.last_message_date) >= new Date(b.last_message_date) ? -1 : 1; });
                this.private_chatrooms = this.private_chatrooms.sort(function (a, b) { return new Date(a.last_message_date) >= new Date(b.last_message_date) ? -1 : 1; });
                this.loader.stopLoading();
                return [2 /*return*/];
            });
        }); }, function (err) {
            _this.loader.stopLoading();
        });
        // })
    };
    // loadChatBox(conversation) {
    //     let data = JSON.stringify(conversation);
    //     this.router.navigate(['/chat-detail',
    //         {
    //             conversation: data,
    //             ch_id: this.theme.ch_id
    //         }
    //     ]);
    // }
    ChatPage.prototype.loadChatBox = function (conversation) {
        var data = JSON.stringify(conversation);
        this.router.navigate(['/chat-detail',
            {
                conversation: data,
                ch_id: this.theme.ch_id
            }
        ]);
    };
    ChatPage.prototype.enter_password = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.popoverController.create({
                                component: _create_chat_create_chat_component__WEBPACK_IMPORTED_MODULE_3__["CreateChatComponent"],
                                translucent: true,
                                cssClass: 'privateChatPopover'
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (res) {
                            if (res.data) {
                                if (res.data.pass) {
                                    _this.enter_private_chatroom(res.data.pass);
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.LogintoEnterPrivateChatroom : 'Login to Enter Private Chatroom'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Login!'), 'warning');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.enter_private_chatroom = function (pass) {
        var private_room = this.private_chatrooms.find(function (x) { return x.password === pass; });
        if (private_room) {
            var check = this.conversations.find(function (x) { return (x.password === private_room.password) && (x.name === private_room.name); });
            if (check) {
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.YouAreAlreadyMemberOfThisChatRoom : 'You are already member of this chat room'), (this.alertMessage ? this.alertMessage.Alreadyexists : 'Already exists!'), 'warning');
            }
            else {
                this.conversations.push(private_room);
                this.loadChatBox(private_room);
                this.savingGroupMember(private_room.id);
                this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.Successfullyjoinedchatroom : 'Successfully joined chatroom'), (this.alertMessage ? this.alertMessage.Success : 'Success'), 'success');
            }
        }
        else {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.Chatroomnotfound : 'Chatroom not found'), (this.alertMessage ? this.alertMessage.NotFound + '!' : 'Not Found!'), 'warning');
        }
    };
    ChatPage.prototype.savingGroupMember = function (chatroom_id) {
        var body;
        // preparing data for saving group member
        if (this.device_id) {
            body = JSON.stringify({
                auth: 'Bearer ' + this.user.auth.access_token,
                chatrooms_id: chatroom_id,
                account_donor_id: this.user.user.id,
                device_id: this.device_id,
            });
        }
        else {
            body = JSON.stringify({
                auth: 'Bearer ' + this.user.auth.access_token,
                chatrooms_id: chatroom_id,
                account_donor_id: this.user.user.id
            });
        }
        this.chatService.savegroupmember(body).subscribe(function (res) {
            if (res) {
                //
            }
        });
    };
    ChatPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        if (this.platform.is('android') || this.platform.is('iphone')) {
            dev_id = this.device.uuid;
            if (dev_id) {
                device = this.platform.platforms()[0];
            }
        }
        this.page_name = 'Chat';
        this.custom_name = 'Chat';
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
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
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.getTheme();
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Chat'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.event_provider.userLogin.subscribe(function (res) {
            // setting start time for analytics
            console.log(res);
            _this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_9__();
            _this.is_show_no_record = false;
            var dev_id = _this.device.uuid;
            if (dev_id) {
                _this.device_id = dev_id;
                _this.getTheme();
            }
            else {
                _this.getTheme();
            }
            _this.event_provider.userLogout.subscribe(function (value) {
                _this.ngOnInit();
            });
        });
    };
    ChatPage.prototype.onTouchStart = function (event, c, index) {
        var _this = this;
        this.pressTimer = setTimeout(function () {
            if (_this.ch_id == 1265 || _this.ch_id == '1265') {
                _this.presentActionSheet(c, index);
            }
        }, 1000);
    };
    ChatPage.prototype.onTouchEnd = function (evet) {
        clearTimeout(this.pressTimer);
    };
    ChatPage.prototype.mutechat = function (c, index) {
        var _this = this;
        var body = JSON.stringify({
            chatroom_id: c.id,
            account_donor_id: this.user.user.id,
            mute: '1',
            church_id: this.ch_id,
        });
        this.apiService.getmute(body).subscribe(function (res) {
            if (res) {
                if (c.muted == "0") {
                    _this.conversations[index].muted = "1";
                }
                else {
                    _this.conversations[index].muted = "0";
                }
            }
        });
    };
    ChatPage.prototype.markasRead = function (c, index) {
        var _this = this;
        var body = JSON.stringify({
            chatroom_id: c.id,
            account_donor_id: this.user.user.id,
        });
        this.apiService.readMsg(body).subscribe(function (res) {
            if (res) {
                if (c.message_count > "0") {
                    _this.conversations[index].message_count = "0";
                }
            }
        });
    };
    ChatPage.prototype.presentActionSheet = function (c, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (c.muted == '0') {
                            str = "Mute Chat";
                        }
                        else {
                            str = "Unmute Chat";
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                mode: 'ios',
                                cssClass: 'cActionSheet',
                                buttons: [{
                                        text: 'Mark As Read',
                                        handler: function () {
                                            _this.markasRead(c, index);
                                        }
                                    }, {
                                        text: str,
                                        handler: function () {
                                            _this.mutechat(c, index);
                                        }
                                    }, {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.doRefresh = function (event) {
        this.getTheme();
        if (event) {
            setTimeout(function () {
                event.target.complete();
            }, 2000);
        }
    };
    ChatPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_8__["AnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_8__["AnalyticsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            src_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/chat/create-chat/create-chat.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/chat/create-chat/create-chat.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY3JlYXRlLWNoYXQvY3JlYXRlLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/create-chat/create-chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/create-chat/create-chat.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChatComponent", function() { return CreateChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/services/toast.service.ts");




var CreateChatComponent = /** @class */ (function () {
    function CreateChatComponent(popoverController, toast) {
        this.popoverController = popoverController;
        this.toast = toast;
        this.chatroom_password = '';
    }
    CreateChatComponent.prototype.ngOnInit = function () {
    };
    CreateChatComponent.prototype.dismiss = function () {
        if (this.chatroom_password) {
            this.popoverController.dismiss({
                pass: this.chatroom_password
            });
        }
        else {
            this.toast.presentToastWithOptions("Password field is empty.", 'Enter Password!', 'warning');
        }
    };
    CreateChatComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
    ]; };
    CreateChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-chat',
            template: __webpack_require__(/*! raw-loader!./create-chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/create-chat/create-chat.component.html"),
            styles: [__webpack_require__(/*! ./create-chat.component.scss */ "./src/app/chat/create-chat/create-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], CreateChatComponent);
    return CreateChatComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es5.js.map