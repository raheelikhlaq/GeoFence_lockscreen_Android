(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locations-locations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/locations/locations.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/locations/locations.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Locations')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;\n            {{'LOCATIONS.locations' | translate}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Locations')\" slot=\"start\">{{'LOCATIONS.locations' | translate}}</p>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content>\n    <ion-row class=\"location-section\">\n        <ion-col [size]=\"12\" [sizeLg]=\"4\" class=\"ion-no-padding\">\n            <div class=\"ion-padding\">\n                <hr class=\"ionCard__divider\">\n                <ion-card *ngIf=\"!churchDetails\" class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                          style=\"border-radius: 5px;\" >\n                    <h4 class=\"heading4\">{{'LOCATIONS.no_location' | translate}}</h4>\n                </ion-card>\n                <ion-list lines=\"none\" class=\"location-list\">\n                    <div *ngFor=\"let church of churchDetails\">\n                        <ion-item class=\"ionMedia link-item\" detail (click)=\"openDetail(church.id, church.ch_id)\">\n                            <div class=\"ionMedia__media\">\n                                <ion-avatar slot=\"start\">\n                                    <img *ngIf=\"!church.logo\"\n                                         src=\"../../assets/img/user_icon.png\">\n                                    <img *ngIf=\"church.logo\" [src]=\"church.logo\">\n                                </ion-avatar>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <h3 class=\"ionMedia__heading\">{{church.church_name}}</h3>\n                                <p class=\"ionMedia__text\">{{church.street_address}},\n                                    {{church.postal}}</p>\n                            </ion-label>\n                        </ion-item>\n                    </div>\n\n                </ion-list>\n            </div>\n        </ion-col>\n        <ion-col [size]=\"12\" [sizeLg]=\"8\" class=\"ion-no-padding\">\n            <agm-map *ngIf=\"churchDetails\" class=\"map-div\"\n                     [latitude]=+chLat\n                     [longitude]=+chLong>\n                <agm-marker *ngFor=\"let marker of churchDetails\"\n                            latitude=\"{{marker.latitude}}\"\n                            longitude=\"{{marker.longitude}}\">\n                </agm-marker>\n            </agm-map>\n        </ion-col>\n    </ion-row>\n<!--    <app-footer></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/locations/locations.module.ts":
/*!***********************************************!*\
  !*** ./src/app/locations/locations.module.ts ***!
  \***********************************************/
/*! exports provided: LocationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPageModule", function() { return LocationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _locations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locations.page */ "./src/app/locations/locations.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var routes = [
    {
        path: '',
        component: _locations_page__WEBPACK_IMPORTED_MODULE_6__["LocationsPage"]
    }
];
var LocationsPageModule = /** @class */ (function () {
    function LocationsPageModule() {
    }
    LocationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                // AgmCoreModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDSu35Uz1W7h5oYIvB4M3LV0pIkOUoh_bo'
                })
            ],
            declarations: [_locations_page__WEBPACK_IMPORTED_MODULE_6__["LocationsPage"]]
        })
    ], LocationsPageModule);
    return LocationsPageModule;
}());



/***/ }),

/***/ "./src/app/locations/locations.page.scss":
/*!***********************************************!*\
  !*** ./src/app/locations/locations.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.location-list {\n  height: 80vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.map-div {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 992px) {\n  .location-section {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n\n  .map-div {\n    height: 30vh;\n  }\n\n  .location-list {\n    height: 70vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbnMucGFnZS5zY3NzIiwiL1VzZXJzL25vdW1hbmFuanVtL0Rlc2t0b3AvcmFkaW9iYXNlL2lvbmljL3Byb2QvVW50aXRsZWQvaW9uaWNfbW9iaWxlL3N0ZGluIiwic3JjL2FwcC9sb2NhdGlvbnMvbG9jYXRpb25zLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvc2Fzcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLFdBQUE7QUFrRkEsVUFBQTtBQWlGQSxVQUFBO0FBOEJBLGdCQUFBO0FBYUEsWUFBQTtBQVdBLG1CQUFBO0FBTUEsU0FBQTtBQ2pPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTUY7QUNnUUU7RUZsUUE7SUFDRSw0QkFBQTtJQUFBLDhCQUFBO1lBQUEsOEJBQUE7RUNNRjs7RURKQTtJQUNFLFlBQUE7RUNPRjs7RURMQTtJQUNFLFlBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgdmFyaWFibGVzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogQ29sb3JzICovXG4vL2RlZmF1bHQgcHJpbWFyeS1jb2xvciBpcyAjMzAyRjM0XG5cbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4kZGVmYXVsdC1wcmltYXJ5LWNvbG9yOiAjMzAyRjM0O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGhlYWRlci1iZy1jb2xvcjogI0Q4RDhEODtcbiRoZWFkaW5nLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRoZWFkaW5nLWNvbG9yLWxpZ2h0OiAjMzgzNzNDO1xuJGdyYXktbGlnaHQ6ICNCQUJBQkE7XG4kaGFsZi13aGl0ZTogI0YxRjFGMTtcbiRibHVlLWNvbG9yOiAjNDI2N0IyO1xuJGRhcmstZ3JheS1jb2xvcjogIzI5MjkyOTtcbiRibGFjay0ybmQ6ICMyMDIwMjA7XG4kYm90dG9tLWZvb3Rlci1iZy1jb2xvcjogIzI1MjQyNztcbiRib3R0b20tZm9vdGVyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdHJhbnNwYXJlbnQtY29sb3I6ICMwMDAwMDAwMDtcbiRmb290ZXItYmctY29sb3I6ICRkZWZhdWx0LXByaW1hcnktY29sb3I7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRtYWluLWJnLWNvbG9yOiAkd2hpdGUtY29sb3I7XG5cbiRncmF5LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuXG4vL25ldyBwbGF5ZXIgdmFyaWFibGVzXG5cbiRwbGF5ZXItcHJpbWFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXByaW1hcnktY29sb3IsICNGMkYyRjIpO1xuJHBsYXllci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1zZWNvbmRhcnktY29sb3IsICMyMzIzMjMpO1xuJHBsYXllci10ZXh0LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1jb2xvciwgIzExNkVGRik7XG4kcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMwMDAwMDApO1xuJHBsYXllci1idXR0b24tY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tY29sb3IsICMwQTY1RkYpO1xuJHBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvciwgIzI2MzE0MSk7XG5cbiRjb2xvcnM6IChcbiAgICAgICAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxuICAgICAgICAnaGVhZGVyLWJnLWNvbG9yJzogJGhlYWRlci1iZy1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1iZy1jb2xvcic6ICRmb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLWJnLWNvbG9yJzogJGJvdHRvbS1mb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLXRleHQtY29sb3InOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWhlYWRpbmctY29sb3InOiAkZm9vdGVyLWhlYWRpbmctY29sb3IsXG4gICAgICAgICdtYWluLWJnLWNvbG9yJzogJG1haW4tYmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yJzogJGhlYWRpbmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yLWxpZ2h0JzogJGhlYWRpbmctY29sb3ItbGlnaHQsXG4gICAgICAgICdncmF5LWNvbG9yJzokZ3JheS1jb2xvcixcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAkZ3JheS1saWdodCxcbiAgICAgICAgJ2RhcmstZ3JheSc6ICRkYXJrLWdyYXktY29sb3IsXG4gICAgICAgICdoYWxmLXdoaXRlJzokaGFsZi13aGl0ZSxcbiAgICAgICAgJ2JsdWUtY29sb3InOiRibHVlLWNvbG9yLFxuICAgICAgICAnYmxhY2stMm5kJzogJGJsYWNrLTJuZCxcbiAgICAgICAgJ3RyYW5zcGFyZW50JzogJHRyYW5zcGFyZW50LWNvbG9yLFxuKTtcblxuLy8gQm9keSBmb250XG5cbiRib2R5LWZvbnQtc2l6ZTogMThweDtcbiR4LXNtYWxsLWJvZHktZm9udC1zaXplOiAxNHB4O1xuJGJvZHktZm9udC1zdHlsZTogbm9ybWFsO1xuJGJvZHktZm9udC12YXJpYW50OiBub3JtYWw7XG4kYm9keS1mb250LXdlaWdodDogNjAwO1xuJGxpbmUtaGVpZ2h0OiAxLjY7XG5cbi8vdHlwb2dyYXBoeVxuJGhlYWRpbmctb25lLXNpemU6MzZweDtcbiRoZWFkaW5nLXR3by1zaXplOiAyNHB4O1xuJGhlYWRpbmctdHdvLW1kLXNpemU6IDM2cHg7XG4kaGVhZGluZy10aHJlZS1zaXplOiAxNXB4O1xuJGhlYWRpbmctZm91ci1zaXplOjE0cHg7XG4vLyRoZWFkaW5nLWZpeC1zaXplOjtcbiRoZWFkaW5nLXNpeC1zaXplOiAxNHB4O1xuXG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuJGZvbnQtd2VpZ2h0czogKFxuICAgICAgICAnbGlnaHQnOiAzMDAsXG4gICAgICAgICdub3JtYWwnOjQwMCxcbiAgICAgICAgJ21lZGl1bSc6IDUwMCxcbiAgICAgICAgJ3NlbWlCb2xkJzogNjAwLFxuICAgICAgICAnYm9sZCc6IDcwMCxcbik7XG5cbi8qIGNhcmRzICovXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIC4xNCk7XG5cbi8vQnV0dG9uc1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XG4kYnRuLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi1wYWRkaW5nLXk6IDEwcHg7XG4kYnRuLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcDogNHB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbTogNHB4O1xuJGJ0bi1mb250LXNpemU6IDE0cHg7XG4kYnRuLWxpbmUtaGVpZ2h0OiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4kYnRuLXRleHQtdHJhbnNmb3JtOiAkdGV4dC1sb3dlcmNhc2U7XG4kYnRuLWhlaWdodDogNDBweDtcbiRidG4tbWluLXdpZHRoOiA5MHB4O1xuXG4vL2J1dHRvbnMtd2hpdGVcbiRidG4td2hpdGUtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtaG92ZXI6ICR3aGl0ZS1jb2xvcjtcblxuLy8vYnV0dG9ucy13aGl0ZS1vdXRsaW5lXG4kYnRuLXdoaXRlLW91dGxpbmUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cbi8vL2dyYXlcbiRidG4tZ3JheS10ZXh0LWNvbG9yOiAkZ3JheS1jb2xvcjtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1ib3JkZXItY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtaG92ZXI6ICRoYWxmLXdoaXRlO1xuXG4vLy9kYXJrXG4kYnRuLWRhcmstdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vL2JsdWVcbiRidG4tYmx1ZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYm9yZGVyLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkYmx1ZS1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudFxuJGJ0bi10cmFuc3BhcmVudC10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50IGRhcmstb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLXRleHQtY29sb3I6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG5cbi8vL2JsYWNrIG91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cbi8vQnV0dG9uIGxhcmdlXG4kYnRuLXBhZGRpbmctc3RhcnQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kLWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcC1sZzogNnB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbS1sZzogNnB4O1xuJGJ0bi1mb250LXNpemUtbGc6ICRidG4tZm9udC1zaXplO1xuJGJ0bi1saW5lLWhlaWdodC1sZzogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAzMHB4O1xuJGJ0bi1oZWlnaHQtbGc6IDQ4cHg7XG5cbi8qIEZvcm1zICovXG4kaW5wdXQtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgzNiwgMTEzLCAxODUsIDAuMSk7XG4kaW5wdXQtZm9udC1zaXplOiAyOHB4O1xuJHgtc21hbGwtaW5wdXQtZm9udC1zaXplOiAkeC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTtcbiRpbnB1dC1ib3JkZXI6IG5vbmU7XG4kaW5wdXQtcmFkaXVzOiA0MHB4O1xuJGlucHV0LWJvcmRlci1mb2N1czogbm9uZTtcbiRpbnB1dC1oZWlnaHQ6IDYwcHg7XG4kaW5wdXQtcGFkZGluZzogMCAxNnB4O1xuJGlucHV0LWljb24td2lkdGg6IDIwcHg7XG4kaW5wdXQtaWNvbi1oZWlnaHQ6ICRpbnB1dC1pY29uLXdpZHRoO1xuXG4vL2NoZWNrYm94XG4kY2hlY2tib3gtd2lkdGg6IDI0cHg7XG4kY2hlY2tib3gtaGVpZ2h0OiAkY2hlY2tib3gtd2lkdGg7XG4kY2hlY2tib3gtc21hbGwtd2lkdGg6IDIwcHg7XG4kY2hlY2tib3gtc21hbGwtaGVpZ2h0OiAkY2hlY2tib3gtc21hbGwtd2lkdGg7XG5cbi8vdGV4dFxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbi8vY3JlZGl0IGNhcmRcblxuJGNyZWRpdC1jYXJkLWljb24td2lkdGg6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1oZWlnaHQ6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1yaWdodDogcmlnaHQ7XG4kY3JlZGl0LWNhcmQtaWNvbi1sZWZ0OiBsZWZ0O1xuXG4vKiBIZWFkZXIgSWNvbiAqL1xuXG4kaGVhZGVyLWljb24td2lkdGg6IDMwcHg7XG4kaGVhZGVyLWljb24taGVpZ2h0OiAzMHB4O1xuJGhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiRoZWFkZXItbG9nby1oZWlnaHQ6IDQ4cHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby1oZWlnaHQ6IDQwcHg7XG4keC1zbWFsbC1oZWFkZXItaWNvbi13aWR0aDogMjVweDtcbiRoZWFkZXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtdXBwZXJjYXNlO1xuJGhlYWRlci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8qIFNpZGViYXIgKi9cblxuJHNpZGViYXItbG9nby13aWR0aDogMjAwcHg7XG4kc2lkZWJhci1sb2dvLWhlaWdodDogMTYwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtc2lkZWJhci1pY29uLXdpZHRoOiAyNXB4O1xuJHNpZGViYXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJHNpZGViYXItbGluay1sYWJlbC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRzaWRlYmFyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC1jYXBpdGFsaXplO1xuJHNpZGViYXItbGluay1sYWJlbC1mb250LXdlaWdodDogNTAwO1xuJHNpZGViYXItaWNvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XG4vKiBwcm9maWxlIGF2YXRhciAqL1xuXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogODBweDtcbiRwcm9maWxlLWltYWdlLWhlaWdodDogJHByb2ZpbGUtaW1hZ2Utd2lkdGg7XG5cblxuLyogdGFicyAqL1xuXG4kdGFicy1iYXItYmctY29sb3I6JHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1idG4tdGV4dC1jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1zaXplOiAxNXB4O1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjoycHggc29saWQgJHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yOiRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS1ib3JkZXItY29sb3I6MnB4IHNvbGlkICRoZWFkaW5nLWNvbG9yO1xuXG5cblxuLy8vIGFwcC1jb250YWluZXItd2lkdGhcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJGNvbnRhaW5lci13aWR0aDogKFxuICAgICAgICAnbGFyZ2UnOiAxMDAlLFxuICAgICAgICAnbWVkaXVtJzogMTAwJSxcbiAgICAgICAgJ3NtYWxsJzogMTAwJSxcbiAgICAgICAgJ3gtc21hbGwnOiAxMDAlLFxuKSAhZGVmYXVsdDtcblxuLy8vIEJyZWFrcG9pbnRzIG1hcFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kbWVkaWEtYnJlYWtwb2ludHM6IChcbiAgICAgICAgJ2xhcmdlJzogMTIwMHB4LFxuICAgICAgICAnbWVkaXVtJzogOTkycHgsXG4gICAgICAgICdzbWFsbCc6IDc2OHB4LFxuICAgICAgICAneC1zbWFsbCc6IDU3NnB4LFxuICAgICAgICAneHgtc21hbGwnOiA0MTRweCxcbikgIWRlZmF1bHQ7XG5cbi8vLyBSZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkwgd2hlcmUgYWxsIGFzc2V0cyBhcmUgc2VydmVkIGZyb21cbi8vLyBAdHlwZSBTdHJpbmdcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2hlbiB1c2luZyBhIENETlxuLy8vICAgJGJhc2UtdXJsOiAnaHR0cDovL2Nkbi5leGFtcGxlLmNvbS9hc3NldHMvJztcbiRiYXNlLXVybDogJ2Fzc2V0cy8nICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3Nhc3MvY29uZmlnXCI7XG5cbi5sb2NhdGlvbi1saXN0IHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYXAtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQGluY2x1ZGUgbWVkaWEtbWQge1xuICAubG9jYXRpb24tc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5tYXAtZGl2IHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gIH1cbiAgLmxvY2F0aW9uLWxpc3Qge1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxufVxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmxvY2F0aW9uLWxpc3Qge1xuICBoZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm1hcC1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubG9jYXRpb24tc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLm1hcC1kaXYge1xuICAgIGhlaWdodDogMzB2aDtcbiAgfVxuXG4gIC5sb2NhdGlvbi1saXN0IHtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gIH1cbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgbWl4aW5zLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9mb250IHNpemVcblxuQG1peGluIGZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuQG1peGluIGNsZWFyZml4KCkge1xuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7IC8qIDEgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzO1xuICAvLyBXZWJLaXRcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi8vIFNpemluZyBzaG9ydGN1dHNcbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBGaXJlZm94IDQtMThcbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggMTkrXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6ICN7MC8wfSBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBEcm9wIHNoYWRvd3NcbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5cbi8vIEdSQURJRU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgJHN0YXJ0LXBlcmNlbnQgdG9wLCAkZW5kLXBlcmNlbnQgdG9wLCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgY29sb3Itc3RvcCgkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQpLCBjb2xvci1zdG9wKCRlbmQtY29sb3IgJGVuZC1wZXJjZW50KSk7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgJHN0YXJ0LXBlcmNlbnQsIGxlZnQgJGVuZC1wZXJjZW50LCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogIC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93blxufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkZGVnOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFN0YW5kYXJkLCBJRTEwXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGVmdCwgbGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgkc3RhcnQtY29sb3IpLCBjb2xvci1zdG9wKCRjb2xvci1zdG9wLCAkbWlkLWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICM1NTUsICRvdXRlci1jb2xvcjogIzMzMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMCwgY2VudGVyIGNlbnRlciwgNDYwLCBmcm9tKCRpbm5lci1jb2xvciksIHRvKCRvdXRlci1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCguMjUsICRjb2xvciksIGNvbG9yLXN0b3AoLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsICRjb2xvciksIGNvbG9yLXN0b3AoLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4vLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiByZXNldC1maWx0ZXIoKSB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XG59XG5cbi8vIEFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICR0ZXh0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkdGV4dC1jb2xvciwgMTAlKTtcbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiB2YXJpYW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlci1jb2xvciwgJGJhY2tncm91bmQtaG92ZXIpIHtcbiAgLS1jb2xvcjogI3skY29sb3J9O1xuICAtLWJhY2tncm91bmQ6ICN7JGJhY2tncm91bmR9O1xuICAtLWJvcmRlci1jb2xvcjogI3skYm9yZGVyLWNvbG9yfTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiN7JGJhY2tncm91bmQtaG92ZXJ9O1xuXG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy1zdGFydCwgJGJ0bi1wYWRkaW5nLWVuZCwgJGJ0bi1wYWRkaW5nLXRvcCwgJGJ0bi1wYWRkaW5nLWJvdHRvbSwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYnRuLWhlaWdodCwgJGJ0bi1taW4td2lkdGgpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiN7JGJ0bi1wYWRkaW5nLXN0YXJ0fTtcbiAgLS1wYWRkaW5nLWVuZDogI3skYnRuLXBhZGRpbmctZW5kfTtcbiAgLS1wYWRkaW5nLXRvcDogI3skYnRuLXBhZGRpbmctdG9wfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skYnRuLXBhZGRpbmctYm90dG9tfTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBoZWlnaHQ6ICRidG4taGVpZ2h0O1xuICBtaW4td2lkdGg6ICRidG4tbWluLXdpZHRoO1xufVxuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMYWJlbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICZbaHJlZl0ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMaXN0c1xuXG4vLyBVbnN0eWxlZCBrZWVwcyBsaXN0IGl0ZW1zIGJsb2NrIGxldmVsLCBqdXN0IHJlbW92ZXMgZGVmYXVsdCBicm93c2VyIHBhZGRpbmcgYW5kIGxpc3Qtc3R5bGVcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cblxuLy9tZWRpYSBicmVha3BvaW50c1xuXG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KGxhcmdlKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobWVkaXVtKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludCh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS14eHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/locations/locations.page.ts":
/*!*********************************************!*\
  !*** ./src/app/locations/locations.page.ts ***!
  \*********************************************/
/*! exports provided: LocationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsPage", function() { return LocationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var LocationsPage = /** @class */ (function () {
    function LocationsPage(storage, loader, apiService, router, location, toast, analytics, common, event_provider, platform, device, translate) {
        var _this = this;
        this.storage = storage;
        this.loader = loader;
        this.apiService = apiService;
        this.router = router;
        this.location = location;
        this.toast = toast;
        this.analytics = analytics;
        this.common = common;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.translate = translate;
        this.page_in_home_tabs = false;
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
    }
    LocationsPage.prototype.ngOnInit = function () {
        var _this = this;
        // getting theme from local storage
        this.storage.get('theme').then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.theme = res;
                this.allchurch = res;
                this.church_id = res.ch_id;
                this.getUser();
                this.getChurchLocations();
                this.getAppPages();
                return [2 /*return*/];
            });
        }); });
        this.baseURl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].image_base_url;
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
    LocationsPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    LocationsPage.prototype.getAppPages = function () {
        var _this = this;
        this.storage.get('app_pages').then(function (res) {
            if (res) {
                // getting pagename for analytics
                var page = res.find(function (x) { return x.name === 'Locations'; });
                if (page) {
                    _this.page_name = page.name;
                    _this.custom_name = page.title;
                }
                else {
                    _this.page_name = 'Locations';
                    _this.custom_name = 'Locations';
                }
            }
        });
    };
    LocationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    app_pages = res.apppages.find(function (x) { return x.name === 'Locations'; });
                    if (app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    LocationsPage.prototype.getChurchLocations = function () {
        var _this = this;
        this.loader.presentLoading().then(function () {
        });
        // fetching church locations
        setTimeout(function () {
            _this.loader.stopLoading();
        }, 1500);
        this.apiService.get_church_locations(this.church_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.status) {
                    this.chLat = res.locations[0].latitude;
                    this.chLong = res.locations[0].longitude;
                    this.churchDetails = res.locations;
                    this.loader.stopLoading();
                }
                else {
                    this.loader.stopLoading();
                }
                return [2 /*return*/];
            });
        }); }, function (err) {
            var message = err.message;
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_occured_try_again : 'Error Occured, Try Again'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
            _this.loader.stopLoading();
        });
    };
    LocationsPage.prototype.openDetail = function (id, ch_id) {
        this.router.navigate(['location-detail', {
                id: id,
                ch_id: ch_id
            }]);
    };
    LocationsPage.prototype.gotobackPage = function () {
        this.location.back();
    };
    LocationsPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_6__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.church_id,
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
    LocationsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    LocationsPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.event_provider.hidefooter(true, 'other');
    };
    LocationsPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }
    ]; };
    LocationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! raw-loader!./locations.page.html */ "./node_modules/raw-loader/index.js!./src/app/locations/locations.page.html"),
            styles: [__webpack_require__(/*! ./locations.page.scss */ "./src/app/locations/locations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_10__["AnalyticsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_14__["Device"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]])
    ], LocationsPage);
    return LocationsPage;
}());





// import {Events} from "@ionic/angular";







/***/ })

}]);
//# sourceMappingURL=locations-locations-module-es5.js.map