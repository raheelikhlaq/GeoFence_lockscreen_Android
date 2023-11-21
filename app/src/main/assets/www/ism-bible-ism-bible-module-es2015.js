(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ism-bible-ism-bible-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ism-bible/ism-bible.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ism-bible/ism-bible.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"ion-padding\" style=\"margin-bottom: 5rem;\">\n        <div class=\"ion-text-center\">\n            <ion-spinner align=\"center\" *ngIf=\"!books_loaded\" name=\"bubbles\"></ion-spinner>\n        </div>      \n        <ion-list lines=\"none\" class=\"location-list\">\n            <ion-item *ngFor=\"let book of books\" class=\"link-item\" detail (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\" >\n                <ion-label class=\"ion-text-wrap\">\n                    <h3 class=\"ionMedia__heading\">{{book.book_name}}</h3>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ism-bible/ism-bible.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ism-bible/ism-bible.module.ts ***!
  \***********************************************/
/*! exports provided: IsmBiblePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmBiblePageModule", function() { return IsmBiblePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ism_bible_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ism-bible.page */ "./src/app/ism-bible/ism-bible.page.ts");







const routes = [
    {
        path: '',
        component: _ism_bible_page__WEBPACK_IMPORTED_MODULE_6__["IsmBiblePage"]
    }
];
let IsmBiblePageModule = class IsmBiblePageModule {
};
IsmBiblePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ism_bible_page__WEBPACK_IMPORTED_MODULE_6__["IsmBiblePage"]]
    })
], IsmBiblePageModule);



/***/ }),

/***/ "./src/app/ism-bible/ism-bible.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ism-bible/ism-bible.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzbS1iaWJsZS9pc20tYmlibGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ism-bible/ism-bible.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ism-bible/ism-bible.page.ts ***!
  \*********************************************/
/*! exports provided: IsmBiblePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsmBiblePage", function() { return IsmBiblePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");









let IsmBiblePage = class IsmBiblePage {
    constructor(router, apiService, loader, route, event_provider, storage, audioService, idSer) {
        this.router = router;
        this.apiService = apiService;
        this.loader = loader;
        this.route = route;
        this.event_provider = event_provider;
        this.storage = storage;
        this.audioService = audioService;
        this.idSer = idSer;
        this.books = [];
        this.books_loaded = false;
    }
    ngOnInit() {
        this.church_id = this.route.snapshot.paramMap.get('data') ? this.route.snapshot.paramMap.get('data') : this.idSer.getId();
    }
    ionViewDidEnter() {
        // this.event_provider.hidefooter(true, 'other');
        this.storage.get('app_language').then((res) => {
            if (res.bible_id) {
                this.getBibleBooks(res.bible_id);
            }
            else {
                this.getBibleBooks('78a9f6124f344018-01');
            }
        });
        // this.event_provider.hidefooter(true, '');
    }
    ionViewDidLeave() {
        // this.audioService.setLiveSteam();
    }
    getBibleBooks(bible_id) {
        this.apiService.getLanguageBooksListTeachings(bible_id).subscribe((res) => {
            // if (res){
            //   this.books_loaded = true;
            //   this.books = res.result;
            // }
            if (res) {
                this.books_loaded = true;
                let booksss = res;
                booksss.map(x => {
                    x['book_name'] = x.name;
                    x['book_id'] = x.id;
                });
                this.books = booksss;
            }
        });
        // if(this.church_id === 1000) {
        //   this.apiService.getIsmBibleBooks().subscribe( (res: any) => {
        //     if (res && res.status === true){
        //       this.books_loaded = true;
        //       this.books = res.result;
        //     }
        //   })
        // } else if(this.church_id != 1000) {
        //   this.apiService.getLanguageBooksListTeachings().subscribe( (res: any) => {
        //     if (res && res.status === true){
        //       this.books_loaded = true;
        //       this.books = res.result;
        //     }
        //   })
        // }
    }
    openBibleVideos(book_id, book_name, book_name_eng) {
        this.router.navigate(['ism-teachings-videos', {
                book_id: book_id,
                book_name: book_name,
                church_id: this.church_id,
                book_name_eng: book_name_eng
            }]);
    }
};
IsmBiblePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__["AudioplayerService"] },
    { type: src_services_id_service__WEBPACK_IMPORTED_MODULE_6__["IdService"] }
];
IsmBiblePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ism-bible',
        template: __webpack_require__(/*! raw-loader!./ism-bible.page.html */ "./node_modules/raw-loader/index.js!./src/app/ism-bible/ism-bible.page.html"),
        styles: [__webpack_require__(/*! ./ism-bible.page.scss */ "./src/app/ism-bible/ism-bible.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_5__["EventProviderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_4__["AudioplayerService"],
        src_services_id_service__WEBPACK_IMPORTED_MODULE_6__["IdService"]])
], IsmBiblePage);



/***/ })

}]);
//# sourceMappingURL=ism-bible-ism-bible-module-es2015.js.map