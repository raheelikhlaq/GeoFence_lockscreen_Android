(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alpha-scroll-alpha-scroll-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/alpha-scroll/alpha-scroll.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alpha-scroll/alpha-scroll.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>alpha-scroll</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ul class=\"alphabets\">\n  <li><a href=\"#\">A</a></li>\n  <li><a href=\"#\">B</a></li>\n  <li><a href=\"#\">C</a></li>\n  <li><a href=\"#\">D</a></li>\n  <li><a href=\"#\">E</a></li>\n  <li><a href=\"#\">F</a></li>\n  <li><a href=\"#\">G</a></li>\n  <li><a href=\"#\">I</a></li>\n  <li><a href=\"#\">J</a></li>\n  <li><a href=\"#\">K</a></li>\n  <li><a href=\"#\">L</a></li>\n  <li><a href=\"#\">M</a></li>\n  <li><a href=\"#\">N</a></li>\n  <li><a href=\"#\">O</a></li>\n  <li><a href=\"#\">P</a></li>\n  <li><a href=\"#\">Q</a></li>\n  <li><a href=\"#\">R</a></li>\n  <li><a href=\"#\">S</a></li>\n  <li><a href=\"#\">T</a></li>\n  <li><a href=\"#\">U</a></li>\n  <li><a href=\"#\">V</a></li>\n  <li><a href=\"#\">W</a></li>\n  <li><a href=\"#\">X</a></li>\n  <li><a href=\"#\">Y</a></li>\n  <li><a href=\"#\">Z</a></li>\n</ul>\n<ion-content>\n\n  <ion-list>\n    <div id=\"sectionA\" class=\"\">\n      <ion-list-header color=\"light\">\n        <ion-label>A</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Pokémon Yellow</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mega Man X</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>The Legend of Zelda</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pac-Man</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Super Mario World</ion-label>\n      </ion-item>\n    </div>\n    <ion-list-header color=\"light\">\n      <ion-label>B</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>BPac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>BSuper Mario World</ion-label>\n    </ion-item>\n    <ion-list-header color=\"light\">\n      <ion-label>C</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>CPac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>CSuper Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n  <audio controls>\n    <source src=\"horse.ogg\" type=\"audio/ogg\">\n    <source src=\"horse.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/alpha-scroll/alpha-scroll.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/alpha-scroll/alpha-scroll.module.ts ***!
  \*****************************************************/
/*! exports provided: AlphaScrollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaScrollPageModule", function() { return AlphaScrollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alpha_scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alpha-scroll.page */ "./src/app/alpha-scroll/alpha-scroll.page.ts");







const routes = [
    {
        path: '',
        component: _alpha_scroll_page__WEBPACK_IMPORTED_MODULE_6__["AlphaScrollPage"]
    }
];
let AlphaScrollPageModule = class AlphaScrollPageModule {
};
AlphaScrollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_alpha_scroll_page__WEBPACK_IMPORTED_MODULE_6__["AlphaScrollPage"]]
    })
], AlphaScrollPageModule);



/***/ }),

/***/ "./src/app/alpha-scroll/alpha-scroll.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/alpha-scroll/alpha-scroll.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alphabets {\n  position: fixed;\n  top: 56px;\n  right: 0;\n  height: 100vh;\n  z-index: 11;\n  width: 30px;\n  background: #ffffff;\n  padding: 4px 10px;\n  line-height: normal;\n  list-style: none;\n  text-decoration: none;\n  font-size: 15px;\n  text-transform: capitalize;\n  margin: 0;\n  text-align: center;\n}\n\n.alphabets a {\n  text-decoration: none;\n}\n\n.alphabets a:hover, .alphabets a:focus,\n.alphabets a.active, .alphabets a:active {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2FscGhhLXNjcm9sbC9hbHBoYS1zY3JvbGwucGFnZS5zY3NzIiwic3JjL2FwcC9hbHBoYS1zY3JvbGwvYWxwaGEtc2Nyb2xsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQUE7O0VBR0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYWxwaGEtc2Nyb2xsL2FscGhhLXNjcm9sbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxwaGFiZXRze1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxwaGFiZXRzIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5hbHBoYWJldHMgYTpob3ZlciwgLmFscGhhYmV0cyBhOmZvY3VzLFxuLmFscGhhYmV0cyBhLmFjdGl2ZSwgLmFscGhhYmV0cyBhOmFjdGl2ZVxue1xuICBjb2xvcjogIzAwMDAwMDtcbn0iLCIuYWxwaGFiZXRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxwaGFiZXRzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbHBoYWJldHMgYTpob3ZlciwgLmFscGhhYmV0cyBhOmZvY3VzLFxuLmFscGhhYmV0cyBhLmFjdGl2ZSwgLmFscGhhYmV0cyBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/alpha-scroll/alpha-scroll.page.ts":
/*!***************************************************!*\
  !*** ./src/app/alpha-scroll/alpha-scroll.page.ts ***!
  \***************************************************/
/*! exports provided: AlphaScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaScrollPage", function() { return AlphaScrollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlphaScrollPage = class AlphaScrollPage {
    ngOnInit() {
    }
};
AlphaScrollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alpha-scroll',
        template: __webpack_require__(/*! raw-loader!./alpha-scroll.page.html */ "./node_modules/raw-loader/index.js!./src/app/alpha-scroll/alpha-scroll.page.html"),
        styles: [__webpack_require__(/*! ./alpha-scroll.page.scss */ "./src/app/alpha-scroll/alpha-scroll.page.scss")]
    })
], AlphaScrollPage);



/***/ })

}]);
//# sourceMappingURL=alpha-scroll-alpha-scroll-module-es2015.js.map