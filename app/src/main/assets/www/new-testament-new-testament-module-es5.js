(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-testament-new-testament-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/new-testament/new-testament.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-testament/new-testament.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-card *ngIf=\"books && books.length > 0\" class=\"ionCard ionCard--mobile\">\n        <ion-card-content class=\"ion-no-padding\">\n          <div *ngFor=\"let item of books;index as i\" (click)=\"expandItem(item)\">\n            <div class=\"accordionHeader\" [class.collapsed]=\"item.expanded\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"10\">\n                  <ion-card-title class=\"heading4 accordionHeader__heading\">{{item?.book_name}}</ion-card-title>\n                </ion-col>\n                <ion-col size=\"2\" class=\"ion-text-right\">\n                  <ion-icon name=\"arrow-dropright\" class=\"accordionHeader__icon accordionHeader__icon--right\"></ion-icon>\n                  <ion-icon name=\"arrow-dropdown\" class=\"accordionHeader__icon accordionHeader__icon--down\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"accordionBody\" style=\"padding-bottom: 0;\">\n              <app-expandable [expanded]=\"item.expanded\">\n                <div routerLink=\"/bible-chapter\" routerDirection=\"root\">\n                  <ul class=\"list-inline bibleVerses\" *ngIf=\"chapters\">\n                    <li class=\"list-inline-item bibleVerses__count\" *ngFor=\"let chapter of chapters\" (click)=\"selectVerse(chapter, item)\" [class.active]=\"chapter.selected\">\n                      {{chapter?.id}}\n                    </li>\n                  </ul>\n                </div>\n              </app-expandable>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\" books && books.length === 0\" class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                style=\"border-radius: 5px;\" >\n        <h4 class=\"heading4\">{{'BIBLE.no_bible' | translate}}</h4>\n      </ion-card>\n    </div>\n  </div>\n<!--  <app-footer *ngIf=\"ch_id != '1000'\"></app-footer>-->\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"ch_id != '1000'\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/new-testament/new-testament.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/new-testament/new-testament.module.ts ***!
  \*******************************************************/
/*! exports provided: NewTestamentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTestamentPageModule", function() { return NewTestamentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_testament_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-testament.page */ "./src/app/new-testament/new-testament.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _new_testament_page__WEBPACK_IMPORTED_MODULE_6__["NewTestamentPage"]
    }
];
var NewTestamentPageModule = /** @class */ (function () {
    function NewTestamentPageModule() {
    }
    NewTestamentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_testament_page__WEBPACK_IMPORTED_MODULE_6__["NewTestamentPage"]]
        })
    ], NewTestamentPageModule);
    return NewTestamentPageModule;
}());



/***/ }),

/***/ "./src/app/new-testament/new-testament.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/new-testament/new-testament.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy10ZXN0YW1lbnQvbmV3LXRlc3RhbWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/new-testament/new-testament.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-testament/new-testament.page.ts ***!
  \*****************************************************/
/*! exports provided: NewTestamentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTestamentPage", function() { return NewTestamentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");











var NewTestamentPage = /** @class */ (function () {
    function NewTestamentPage(_bibleService, loader, toast, router, storage, event_provider, route, translate, common, audioService) {
        var _this = this;
        this._bibleService = _bibleService;
        this.loader = loader;
        this.toast = toast;
        this.router = router;
        this.storage = storage;
        this.event_provider = event_provider;
        this.route = route;
        this.translate = translate;
        this.common = common;
        this.audioService = audioService;
        this.selectedChapter = {
            dam_id: '',
            book_id: '',
            book_name: '',
            book_order: '',
            number_of_chapters: '',
            chapters: '',
            expanded: ''
        };
        this.selected_version = 'WEB';
        // selected_language: any = 'EN1';
        this.selected_language = { language_family_code: 'ENG', language_family_name: 'English', selection_type: 'default' };
        this.selected_volume = { dam_id: 'EN1WEB', volume_name: 'WEB - Winfred Henson', version_code: 'WEB' };
        this.chapters = [];
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        this.event_provider.updateNewTest.subscribe(function (value) {
            _this.bible_id = value.value;
            // getting books
            // this.getBooks( this.dam_id);
            _this.getCMPBooks(_this.bible_id);
        });
    }
    NewTestamentPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var b, bible_obj;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.params_book_id = this.route.snapshot.paramMap.get('book_id');
                this.params_chap_id = this.route.snapshot.paramMap.get('chapter_id');
                this.params_book_id = this._bibleService.book_id;
                this.params_chap_id = this._bibleService.chapter_id;
                this.storage.get('app_language').then(function (res) {
                    _this.langCode = res.code;
                    console.log('response from local storge on ngoninit: ', res);
                    if (res.bible_id) {
                        _this.audio_id = res.audio_id;
                        _this.bible_id = res.bible_id;
                        //  var lastWord = this.dam_id.charAt(this.dam_id.length-1);
                        //  lastWord != 'N' ? this.dam_id =  this.dam_id + 'N' : ''; 
                        // getting books of selected volume
                        _this.getCMPBooks(_this.bible_id);
                    }
                    else {
                        _this.toast.presentToastWithOptions('No Bible exist', 'Something Went Wrong', 'danger');
                    }
                });
                b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
                if (b) {
                    if (b.language) {
                        this.selected_language = b.language;
                    }
                    if (b.volume) {
                        this.selected_volume = b.volume;
                    }
                }
                bible_obj = {
                    language: this.selected_language,
                    volume: this.selected_volume
                };
                localStorage.setItem("bible", JSON.stringify(bible_obj));
                // getting lang and version from local storage
                this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (!(Object.keys(res).length === 0)) {
                            this.ch_id = res.church.ch_id;
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // ngOnInit() {
    //     this.params_book_id = this.route.snapshot.paramMap.get('book_id');
    //     this.params_chap_id = this.route.snapshot.paramMap.get('chapter_id');
    //     this.params_book_id = this._bibleService.book_id;
    //     this.params_chap_id = this._bibleService.chapter_id;
    //     this.storage.get('app_language').then((res) => {
    //         this.langCode = res.code;
    //         if(localStorage.getItem('app_language') == 'ml') {
    //             if(res.bible_id) {
    //                 if (!this.books) {
    //                     this.dam_id = 'ba912c69-de7e-45a3-92bc-d33c47f6fa56';
    //                     // getting books of selected volume
    //                     this.getCMPBooks(this.dam_id);
    //                 }
    //             } else {
    //                 if (!this.books) {
    //                     this.dam_id = 'ENGESHN';
    //                     // getting books of selected volume
    //                     this.getBooks(this.dam_id);
    //                 }
    //             }
    //         } else {
    //             if(res.dam_id) {
    //                 if (!this.books) {
    //                     this.dam_id = res.dam_id;
    //                     var lastWord = this.dam_id.charAt(this.dam_id.length-1);
    //                     lastWord != 'N' ? this.dam_id =  this.dam_id + 'N' : ''; 
    //                     // getting books of selected volume
    //                     this.getBooks(this.dam_id);
    //                 }
    //             } else {
    //                 if (!this.books) {
    //                     this.dam_id = 'ENGESHN';
    //                     // getting books of selected volume
    //                     this.getBooks(this.dam_id);
    //                 }
    //             }
    //         }
    //     })
    //     let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
    //     if (b) {
    //         if (b.language) {
    //             this.selected_language = b.language;
    //         }
    //         if (b.volume) {
    //             this.selected_volume = b.volume;
    //         }
    //     }
    //     let bible_obj = {
    //         language: this.selected_language,
    //         volume: this.selected_volume
    //     };
    //     localStorage.setItem("bible", JSON.stringify(bible_obj));
    //     // getting lang and version from local storage
    //     this.event_provider.getChurchData.subscribe(async (res: any) => {
    //         if (!(Object.keys(res).length === 0)) {
    //             this.ch_id = res.church.ch_id;
    //         }
    //     });
    // }
    // called when verse is selected
    // set data and navigate to chapter
    NewTestamentPage.prototype.selectVerse = function (item, book) {
        if (item) {
            this.chapters.map(function (x) {
                if (x.id !== item.id) {
                    x.selected = false;
                }
                else {
                    x.selected = true;
                }
                return x;
            });
            var selectedBook = this.books.find(function (s) { return s.book_id === book.book_id; });
            // setting data to take to chapter page
            var data = {
                queryParams: {
                    chapter: JSON.stringify(item),
                    book: JSON.stringify(selectedBook),
                    dam_id: this.bible_id,
                    audio_id: this.audio_id,
                    page: 'N'
                }
            };
            this._bibleService.page = {
                chapter: JSON.stringify(item),
                book: JSON.stringify(selectedBook),
                dam_id: this.bible_id,
                audio_id: this.audio_id,
                page: 'N'
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    };
    NewTestamentPage.prototype.expandItem = function (item) {
        if (item && item.book_id !== this.selectedChapter.book_id) {
            this.selectedChapter = item;
            // Getting the chapters
            var data = item.chapters.split(',');
            var finalData_1 = [];
            data.forEach(function (e) {
                if (e != '') {
                    var chapter = {
                        id: e,
                        selected: false
                    };
                    finalData_1.push(chapter);
                }
            });
            this.chapters = finalData_1;
            //Expanding Toggle
            this.books.map(function (x) {
                if (x.book_id !== item.book_id) {
                    x.expanded = false;
                }
                else {
                    x.expanded = true;
                }
                return x;
            });
        }
    };
    // getBooks( curr_dam_id ) {
    //     let self = this;
    //     let dam_id = curr_dam_id + 'N';
    //         this._bibleService.getbibleBooks(dam_id).subscribe(async (res: any) => {
    //             if (res) {
    //                 let data: any = [];
    //                 res.forEach(function (x) {
    //                     x.expanded = false;
    //                     data.push(x);
    //                 });
    //                 this.books = data;
    //                 // setting if data in params
    //                 if (this.params_book_id && this.params_chap_id) {
    //                     //Geting the chapters
    //                     let item = this.books.find(x => x.book_id === this.params_book_id);
    //                     if (item) {
    //                     let data = item.chapters.split(',');
    //                     let finalData: any = [];
    //                     data.forEach(function (e) {
    //                         let chapter = {
    //                             id: e,
    //                             selected: false
    //                         };
    //                         finalData.push(chapter);
    //                     });
    //                     this.chapters = finalData;
    //                     this.chapters.map(function (x) {
    //                         if (x.id !== self.params_chap_id) {
    //                             x.selected = false;
    //                         } else {
    //                             x.selected = true;
    //                         }
    //                         return x;
    //                     });
    //                     //Expanding Toggle
    //                     this.books.map(function (x) {
    //                         if (x.book_id !== self.params_book_id) {
    //                             x.expanded = false;
    //                         } else {
    //                             x.expanded = true;
    //                         }
    //                         return x;
    //                     });
    //                 }
    //             }
    //                 //get & Map Text Book DAM ID
    //                 this.getBooksText( dam_id );
    //             } else if (!res) {
    //                 this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //             }
    //         });
    // }
    NewTestamentPage.prototype.getCMPBooks = function (curr_dam_id) {
        var _this = this;
        // console.log(curr_dam_id , this.langCode)
        var self = this;
        var dam_id = curr_dam_id;
        var lang_code = this.langCode;
        this._bibleService.getCMPbibleBooks(dam_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data_1, item, data_2, finalData_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    data_1 = [];
                    res.forEach(function (x) {
                        var chapter = '';
                        for (var i = 1; i <= x.number_of_chapters; i++) {
                            chapter += i + ",";
                            chapter.slice(0, -1);
                        }
                        x.expanded = false;
                        x.book_name = x.name;
                        x.book_id = x.id;
                        x.book_order = x.bookOrder;
                        x.chapters = chapter,
                            x.lang_code = lang_code;
                        if (x.testament == 'N') {
                            data_1.push(x);
                        }
                    });
                    this.books = data_1;
                    // setting if data in params
                    console.log(this.params_book_id, this.params_chap_id);
                    if (this.params_book_id && this.params_chap_id) {
                        item = this.books.find(function (x) { return x.book_id === _this.params_book_id; });
                        console.log(item);
                        if (item) {
                            data_2 = item.chapters.split(',');
                            finalData_2 = [];
                            data_2.forEach(function (e) {
                                if (e != '') {
                                    var chapter = {
                                        id: e,
                                        selected: false
                                    };
                                    finalData_2.push(chapter);
                                }
                            });
                            this.chapters = finalData_2;
                            console.log(this.chapters);
                            this.chapters.map(function (x) {
                                if (x.id !== self.params_chap_id) {
                                    x.selected = false;
                                }
                                else {
                                    x.selected = true;
                                }
                                return x;
                            });
                            //Expanding Toggle
                            this.books.map(function (x) {
                                if (x.book_id !== self.params_book_id) {
                                    x.expanded = false;
                                }
                                else {
                                    x.expanded = true;
                                }
                                return x;
                            });
                        }
                    }
                    //get & Map Text Book DAM ID
                    this.getCMPBooksText(dam_id);
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                return [2 /*return*/];
            });
        }); });
    };
    // getting text
    NewTestamentPage.prototype.getCMPBooksText = function (cur_dam_id) {
        var _this = this;
        var dam_id = cur_dam_id;
        // this.loader.presentLoading().then(() => {
        this._bibleService.getCMPbibleBooksText(dam_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var newBooksData_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    newBooksData_1 = [];
                    this.books.forEach(function (x) {
                        var bookText = res.find(function (z) { return z.book_id === x.book_id; });
                        if (bookText) {
                            x.text_dam_id = bookText.dam_id;
                        }
                        newBooksData_1.push(x);
                    });
                    this.books = newBooksData_1;
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                return [2 /*return*/];
            });
        }); });
        // });
    };
    // getBooksText( cur_dam_id ) {
    //     let dam_id = cur_dam_id + '2ET';
    //     // this.loader.presentLoading().then(() => {
    //         this._bibleService.getbibleBooksText(dam_id).subscribe(async (res: any) => {
    //             if (res) {
    //                 let newBooksData: any = [];
    //                 this.books.forEach(function(x) {
    //                     let bookText = res.find(z => z.book_id === x.book_id);
    //                     if (bookText) {
    //                         x.text_dam_id = bookText.dam_id;
    //                     }
    //                     newBooksData.push(x);
    //                 });
    //                 this.books = newBooksData;
    //             } else if (!res) {
    //                 this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //             }
    //             // this.loader.stopLoading();
    //         });
    //     // });
    // }
    NewTestamentPage.prototype.ionViewWillEnter = function () {
        // this.event_provider.hidefooter(false, 'new');
        // if(this.audioService.isAudioPlay == "Play"){
        //     this.audioService.togglePlayer(true)
        //     }  
        // this.common.biblePageEnable = false;
        // this.event_provider.playingFlags("Pause");
        // this.common.oldSong = ''
    };
    NewTestamentPage.prototype.ionViewDidLeave = function () {
        // this.event_provider.hidefooter(true, 'new');
    };
    NewTestamentPage.ctorParameters = function () { return [
        { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_3__["BibleService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
        { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__["AudioplayerService"] }
    ]; };
    NewTestamentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-testament',
            template: __webpack_require__(/*! raw-loader!./new-testament.page.html */ "./node_modules/raw-loader/index.js!./src/app/new-testament/new-testament.page.html"),
            styles: [__webpack_require__(/*! ./new-testament.page.scss */ "./src/app/new-testament/new-testament.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bible_service__WEBPACK_IMPORTED_MODULE_3__["BibleService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_7__["EventProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_10__["AudioplayerService"]])
    ], NewTestamentPage);
    return NewTestamentPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-testament-new-testament-module-es5.js.map