(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sermons-sermons-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sermons/sermons.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sermons/sermons.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header class=\"mobile-header customMobileHeader \" no-border *ngIf=\"!page_in_home_tabs\">\n    <ion-toolbar class=\"header--toolbar\">\n        <ion-buttons *ngIf=\"enable_home && (enable_home.next_page !== 'Shows')\"\n                     (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{page_name}}\n        </ion-buttons>\n        <p *ngIf=\"enable_home && (enable_home.next_page === 'Shows')\" slot=\"start\">{{page_name}}</p>\n        <ion-buttons *ngIf=\"oldDesign == true\" (click)=\"search();\" class=\"cursor-pointer common--dark commonBtn--transparent-darkOutline\"\n        slot=\"end\">\n       \n        <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!--end mobile header-->\n<ion-content (window:resize)=\"onResize($event)\">\n    <ng-container *ngIf=\"oldDesign == false\">\n    <div class=\"page-wrapper\" *ngIf=\"!recentSermons && !popularSermons && !latestSermon\">\n        <div class=\"app-container\">\n            <ion-card class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                      style=\"border-radius: 5px;\" >\n                <h4 class=\"heading4\" *ngIf=\"ch_id != '1000'\">{{'SERMONS.no_sermon_available' | translate}}</h4>\n                <h4 class=\"heading4\" *ngIf=\"ch_id == '1000'\">{{'No Teachings Available' | translate}}</h4>\n            </ion-card>\n        </div>\n    </div>\n\n    <!-- ///////////////////    hide popular sermons ///////////////////// -->\n    <!-- <div class=\"page-wrapper\" *ngIf=\"recentSermons || popularSermons || latestSermon\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <h2 class=\"heading2\" *ngIf=\"ch_id != '1000'\"> {{page_name}}</h2>\n                <h2 class=\"heading2\" *ngIf=\"ch_id == '1000'\"> {{'Teachings' | translate}}</h2>\n            </div>\n            <div class=\"mb-30\" *ngIf=\"latestSermon && (ch_id !='1125' && ch_id !='1297')\">\n                <ion-row>\n                    <ion-col [size]=\"12\">\n                        <ion-card\n                                class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big ionCard--sermon cursor-pointer ion-no-margin\"\n                                [ngStyle]=\"{'background': 'url(' + latestimage + ')  no-repeat'}\"\n                                (click)=\"getlatestsermon()\">\n                            <div class=\"ionCard--backGroundBg__body\">\n                                <div class=\"ion-text-right\">\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\"> {{'SERMONS.latest_sermon' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1577'\"> {{'SERMONS.latest_song' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1125'\"> {{'SERMONS.latest' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1000'\"> {{'Latest Teachings' | translate}}\n                                    </ion-button>\n                                </div>\n                            </div>\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"align-items-end\">\n                                        <ion-col size=\"12\">\n                                            <div style=\"margin-bottom: 5px;\">\n                                                <ion-label class=\"heading2 ionCard--backGroundBg__heading\"\n                                                           [innerHtml]=\"latestspeaker\">\n                                                </ion-label>\n                                                <ion-card-subtitle class=\"ionCard--backGroundBg__subheading\"\n                                                                   [innerHtml]=\"latesttitle\">\n                                                </ion-card-subtitle>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"ion-margin-bottom\">\n                <ion-item class=\"inputField\" lines=\"none\">\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\"\n                               class=\"inputField__area \" inputmode=\"search\" type=\"search\"\n                               placeholder=\"{{'SERMONS.search_sermon' | translate}}\"\n                               name=\"guest\"></ion-input>\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1577'\" class=\"inputField__area \"\n                               inputmode=\"search\" type=\"search\" placeholder=\"{{'SERMONS.search_song' | translate}}\"\n                               name=\"guest\"></ion-input>\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1125'\"\n                               class=\"inputField__area \" inputmode=\"search\" type=\"search\"\n                               placeholder=\"{{'SERMONS.search' | translate}}\"\n                               name=\"guest\"></ion-input>\n                               <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1000'\"\n                               class=\"inputField__area \" inputmode=\"search\"  type=\"search\"\n                               placeholder=\"{{'Search Teachings' | translate}}\"\n                               name=\"guest\"></ion-input>\n                </ion-item>\n            </div>\n            <div *ngIf=\"popularSermons && popularSermons.length > 0\" class=\"mb-30\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"8\">\n                        <h3 class=\"heading3\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577' && ch_id != '1297'\">{{'SERMONS.popular_sermons' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1297'\">{{'SERMONS.popular_series' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1577'\">{{'SERMONS.popular_songs' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1125'\">{{'SERMONS.popular' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Popular Teachings' | translate}}</h3>\n                    </ion-col>\n                    <ion-col [size]=\"4\" class=\"ion-text-right\">\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showPopularSermons\"\n                                    (click)=\"showPopularSermons = !showPopularSermons\">{{'SERMONS.see_all' | translate}}\n                        </ion-button>\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showPopularSermons\"\n                                    (click)=\"showPopularSermons = !showPopularSermons\">{{'SERMONS.see_less' | translate}}\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row>\n                        <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let item of popularSermons | filter: search_sermon; let i = index\">\n                            <div *ngIf=\"!showPopularSermons && i < 2\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(item.id_series)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"item.thumbnail && item.thumbnail !== ''\" [src]=\"item.thumbnail\">\n                                        <img *ngIf=\"item.img_series && item.img_series !== ''\" [src]=\"item.img_series\">\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"item.series ? item.series : item.title\"></ion-card-title>\n                                        <p [innerHtml]=\"item['dc:creator']\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n\n                            <div *ngIf=\"showPopularSermons\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(item.id_series)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"item.thumbnail && item.thumbnail !== ''\" [src]=\"item.thumbnail\">\n                                        <img *ngIf=\"item.img_series && item.img_series !== ''\" [src]=\"item.img_series\">\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"item.series ? item.series : item.title\"></ion-card-title>\n                                        <p [innerHtml]=\"item['dc:creator']\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                                <div *ngIf=\"i === popularSermons.length - 1\">\n                                    <ion-card *ngFor=\"let other of otherSermons\"\n                                              class=\"ionCard cursor-pointer ion-no-margin\"\n                                              (click)=\"getlatestsermon(null, other.pubDate)\">\n                                        <div class=\"ionCard__imgDiv\">\n                                            <img *ngIf=\"other.thumbnail && other.thumbnail !== ''\" [src]=\"other.thumbnail\">\n                                            <img *ngIf=\"other.img_series && other.img_series !== ''\" [src]=\"other.img_series\">\n                                        </div>\n                                        <ion-card-content class=\"ion-no-padding\">\n                                            <ion-card-title class=\"heading4\"\n                                                            [innerHtml]=\"other.title ? other.title : other.title\"></ion-card-title>\n                                            <p [innerHtml]=\"other['dc:creator']\"></p>\n                                        </ion-card-content>\n                                    </ion-card>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <div *ngIf=\"otherSermons && otherSermons.length > 0\" class=\"mb-30\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"8\">\n                        <h3 class=\"heading3\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\">{{'SERMONS.other_sermons' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1577'\">{{'SERMONS.other_songs' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1125'\">{{'SERMONS.other' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Other Teachings' | translate}}</h3>\n                    </ion-col>\n                    <ion-col [size]=\"4\" class=\"ion-text-right\">\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showOtherSermons\"\n                                    (click)=\"showOtherSermons = !showOtherSermons\"> {{'SERMONS.see_all' | translate}}\n                        </ion-button>\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showOtherSermons\"\n                                    (click)=\"showOtherSermons = !showOtherSermons\"> {{'SERMONS.see_less' | translate}}\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-grid class=\"ion-no-padding\" *ngIf=\"link_type === 'sermon'\">\n                    <ion-row>\n                        <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let other of otherSermons | filter: search_sermon; let i = index\">\n                            <div *ngIf=\"!showOtherSermons && i < 2\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(null, other.pubDate)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"other.thumbnail === ''\" src=\"../../assets/img/live_stream_bg_2.jpg\">\n                                        <img *ngIf=\"other.img_series && other.img_series !== ''\" [src]=\"other.img_series\">\n                                        <img *ngIf=\"other.img_series && other.img_series === '' && other['itunes:image']\" [src]=\"other['itunes:image']['$'].href\"/>\n                                        <img *ngIf=\"other.img_series && other.img_series === '' && !other['itunes:image']\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"other.title ? other.title : other.title\"></ion-card-title>\n                                        <p [innerHtml]=\"other['dc:creator']\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                            <div *ngIf=\"showOtherSermons\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(null, other.pubDate)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"other.thumbnail === ''\" src=\"../../assets/img/live_stream_bg_2.jpg\">\n                                        <img *ngIf=\"other.img_series && other.img_series !== ''\" [src]=\"other.img_series\">\n                                        <img *ngIf=\"other.img_series && other.img_series === '' && other['itunes:image']\" [src]=\"other['itunes:image']['$'].href\"/>\n                                        <img *ngIf=\"other.img_series && other.img_series === '' && !other['itunes:image']\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"other.title ? other.title : other.title\"></ion-card-title>\n                                        <p [innerHtml]=\"other['dc:creator']\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-grid class=\"ion-no-padding\" *ngIf=\"link_type === 'rss'\">\n                    <ion-row>\n                        <ion-col [size]=\"12\" [sizeMd]=\"6\" *ngFor=\"let other of otherSermons | filter: search_sermon; let i = index\">\n                            <div *ngIf=\"!showOtherSermons && i < 2\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(other.guid)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"other.title ? other.title : other.title\"></ion-card-title>\n                                        <p [innerHtml]=\"\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                            <div *ngIf=\"showOtherSermons\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getlatestsermon(other.guid)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                                        [innerHtml]=\"other.title ? other.title : other.title\"></ion-card-title>\n                                        <p [innerHtml]=\"\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n\n            </div>\n            <div class=\"mb-30\" *ngIf=\"recentSermons\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"9\">\n                        <h3 class=\"heading3\" *ngIf=\"ch_id !== '1000' && ch_id !== '1125' && ch_id != '1577'\">{{'SERMONS.recent_sermons' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1577'\">{{'SERMONS.recent_songs' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1125'\">{{'SERMONS.recent' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Recent Teachings' | translate}}</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col [size]=\"12\" [sizeMd]=\"4\" *ngFor=\"let item of recentSermons; let i = index\">\n                        <div *ngIf=\"i < 3\">\n                            <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                      (click)=\"getlatestsermon(item.id_series, item.pubDate)\">\n                                <ion-card-content class=\"ion-no-padding\">\n                                    <ion-item class=\"ionMedia ionMedia--big\" lines=\"none\">\n                                        <ion-thumbnail slot=\"start\" class=\"ionMedia__media ionMedia__media--big\">\n                                            <img *ngIf=\"item.img_series && item.img_series !== ''\" [src]=\"item.img_series\">\n                                            <img *ngIf=\"item.thumbnail && item.thumbnail !== ''\" [src]=\"item.thumbnail\">\n                                            <img *ngIf=\"item.img_series === '' && item['itunes:image']\" [src]=\"item['itunes:image']['$'].href\"/>\n                                            <img *ngIf=\"item.img_series === '' && !item['itunes:image']\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                        </ion-thumbnail>\n                                        <ion-label class=\"ion-text-wrap\">\n                                            <h2 class=\"ionMedia__heading\" [innerHtml]=\"item.title\"></h2>\n                                            <p class=\"ionMedia__text\" [innerHtml]=\"item['dc:creator']\"></p>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-card-content>\n                            </ion-card>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class=\"mb-30\" *ngIf=\"latestSermon && ch_id =='1125'\">\n                <ion-row>\n                    <ion-col [size]=\"12\">\n                        <ion-card\n                                class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big ionCard--sermon cursor-pointer ion-no-margin\"\n                                [ngStyle]=\"{'background': 'url(' + latestimage + ')  no-repeat'}\"\n                                (click)=\"getlatestsermon()\">\n                            <div class=\"ionCard--backGroundBg__body\">\n                                <div class=\"ion-text-right\">\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\"> {{'SERMONS.latest_sermon' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1577'\"> {{'SERMONS.latest_song' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1125'\"> {{'SERMONS.latest' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\" *ngIf=\"ch_id == '1000'\"> {{'Latest Teachings' | translate}}\n                                    </ion-button>\n                                </div>\n                            </div>\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"align-items-end\">\n                                        <ion-col size=\"12\">\n                                            <div style=\"margin-bottom: 5px;\">\n                                                <ion-label class=\"heading2 ionCard--backGroundBg__heading\"\n                                                           [innerHtml]=\"latestspeaker\">\n                                                </ion-label>\n                                                <ion-card-subtitle class=\"ionCard--backGroundBg__subheading\"\n                                                                   [innerHtml]=\"latesttitle\">\n                                                </ion-card-subtitle>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div> -->\n     <!-- ///////////////////    hide popular sermons ends ///////////////////// -->\n\n     \n    <div class=\"page-wrapper\" *ngIf=\"latest_sermon || series || sermons\">\n        <div class=\"app-container\">\n            <div class=\"ion-margin-bottom\">\n                <h2 class=\"heading2\" *ngIf=\"ch_id != '1000'\"> {{page_name}}</h2>\n                <h2 class=\"heading2\" *ngIf=\"ch_id == '1000'\"> {{'Teachings' | translate}}</h2>\n            </div>\n\n            <!-- New pwa latest sermon -->\n\n            <div class=\"mb-30\" *ngIf=\"latest_sermon\">\n                <ion-row>\n                    <ion-col [size]=\"12\">\n                        <ion-card\n                                class=\"ionCard ionCard--backGroundBg ionCard--backGroundBg--big ionCard--sermon cursor-pointer ion-no-margin\"\n                                [ngStyle]=\"{'background': 'url(' + latestimage + ')  no-repeat'}\"\n                                (click)=\"getlatestsermon(latest_sermon.id)\">\n                            <div class=\"ionCard--backGroundBg__body\">\n                                <div class=\"ion-text-right\">\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\"\n                                                *ngIf=\"ch_id != '1000' && ch_id != '1125'\"> {{'SERMONS.latest_sermon' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\"\n                                                *ngIf=\"ch_id == '1125'\"> {{'SERMONS.latest' | translate}}\n                                    </ion-button>\n                                    <ion-button class=\"commonBtn commonBtn--white commonBtn--round\"\n                                                *ngIf=\"ch_id == '1000'\"> {{'Latest Teachings' | translate}}\n                                    </ion-button>\n                                </div>\n                            </div>\n                            <div class=\"ionCard--backGroundBg__footer\">\n                                <ion-grid>\n                                    <ion-row class=\"align-items-end\">\n                                        <ion-col size=\"12\">\n                                            <div style=\"margin-bottom: 5px;\">\n                                                <ion-label class=\"heading2 ionCard--backGroundBg__heading\"\n                                                           [innerHtml]=\"latest_sermon.title\">\n                                                </ion-label>\n                                                <ion-card-subtitle class=\"ionCard--backGroundBg__subheading\">\n                                                    {{latest_sermon.wpfc_preacher}}\n                                                </ion-card-subtitle>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                        </ion-card>\n                    </ion-col>\n                </ion-row>\n                <div class=\"ion-margin-bottom\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\"\n                                   class=\"inputField__area \" inputmode=\"search\" type=\"search\"\n                                   placeholder=\"{{search_sermon_placeHolder}}\"\n                                  \n                                   name=\"guest\"></ion-input>\n                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1577'\" class=\"inputField__area \"\n                                   inputmode=\"search\" type=\"search\" placeholder=\"{{'SERMONS.search_song' | translate}}\"\n                                   name=\"guest\"></ion-input>\n                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1125'\"\n                                   class=\"inputField__area \" inputmode=\"search\" type=\"search\"\n                                   placeholder=\"{{'SERMONS.search' | translate}}\"\n                                   name=\"guest\"></ion-input>\n                                   <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1000'\"\n                                   class=\"inputField__area \" inputmode=\"search\"  type=\"search\"\n                                   placeholder=\"{{'Search Teachings' | translate}}\"\n                                   name=\"guest\"></ion-input>\n                    </ion-item>\n                </div>\n            </div>\n\n            <!-- <div class=\"ion-margin-bottom\">\n                <ion-item class=\"inputField\" lines=\"none\">\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id != '1000'\" class=\"inputField__area \"\n                               inputmode=\"search\" type=\"search\" placeholder=\"{{'SERMONS.search_sermon' | translate}}\"\n                               name=\"guest\"></ion-input>\n                    <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"search_sermon\" *ngIf=\"ch_id == '1000'\" class=\"inputField__area \"\n                               inputmode=\"search\" type=\"search\" placeholder=\"{{'Search Teachings' | translate}}\" name=\"guest\">\n                    </ion-input>\n                </ion-item>\n            </div> -->\n\n            <ng-container *ngIf=\"popular_sermon == true\">\n            <div *ngIf=\"series && series.length > 0\" class=\"mb-30\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"8\">\n                        <h3 class=\"heading3\" *ngIf=\"ch_id != '1000' && ch_id != '1577' && ch_id != '1297'\">{{'SERMONS.popular_sermons' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1297'\">{{'SERMONS.popular_series' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1577'\">{{'SERMONS.popular_songs' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Popular Teachings' | translate}}</h3>\n                    </ion-col>\n                    <ion-col [size]=\"4\" class=\"ion-text-right\">\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showSeries\"\n                                    (click)=\"showSeries = !showSeries\">{{'SERMONS.see_all' | translate}}\n                        </ion-button>\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showSeries\"\n                                    (click)=\"showSeries = !showSeries\">{{'SERMONS.see_less' | translate}}\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row>\n                        <ion-col [size]=\"12\" [sizeMd]=\"6\"\n                                 *ngFor=\"let item of series | filter: search_sermon; let i = index\">\n                            <div *ngIf=\"!showSeries && i < 2\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getSermonSeries(item.id)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img [src]=\"item.image_id ? item.image_id : '../../assets/img/live_stream_bg_2.jpg'\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                        >{{item.name}}</ion-card-title>\n                                        <p>{{item.description}}</p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n\n                            <div *ngIf=\"showSeries\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getSermonSeries(item.id)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img [src]=\"item.image_id ? item.image_id : '../../assets/img/live_stream_bg_2.jpg'\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                        >{{item.name}}</ion-card-title>\n                                        <p>{{item.description}}</p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ng-container>\n            <div *ngIf=\"sermons && sermons.length > 0\" class=\"mb-30\">\n                <ion-row class=\"ion-align-items-center\">\n                    <ion-col [size]=\"8\">\n                        <h3 class=\"heading3\" *ngIf=\"ch_id != '1000' && ch_id != '1125' && ch_id != '1577'\">{{'SERMONS.other_sermons' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1577'\">{{'SERMONS.other_songs' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1125'\">{{'SERMONS.other' | translate}}</h3>\n                        <h3 class=\"heading3\" *ngIf=\"ch_id == '1000'\">{{'Other Teachings' | translate}}</h3>\n                    </ion-col>\n                    <ion-col [size]=\"4\" class=\"ion-text-right\">\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"!showSermons\"\n                                    (click)=\"showSermons = !showSermons\"> {{'SERMONS.see_all' | translate}}\n                        </ion-button>\n                        <ion-button class=\"commonBtn commonBtn--gray commonBtn--round\" *ngIf=\"showSermons\"\n                                    (click)=\"showSermons = !showSermons\"> {{'SERMONS.see_less' | translate}}\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-grid class=\"ion-no-padding\">\n                    <ion-row>\n                        <ion-col [size]=\"12\" [sizeMd]=\"6\"\n                                 *ngFor=\"let other of sermons | filter: search_sermon; let i = index\">\n                            <div *ngIf=\"!showSermons && i < 2\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getsermonpwa(other.id)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"other.featured_media !== ''\" [src]=\"other.featured_media\">\n                                        <img *ngIf=\"other.featured_media === ''\" src=\"../../assets/img/live_stream_bg_2.jpg\">\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                        >{{other.title}}</ion-card-title>\n                                        <p [innerHtml]=\"other.sermon_description\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                            <div *ngIf=\"showSermons\">\n                                <ion-card class=\"ionCard cursor-pointer ion-no-margin\"\n                                          (click)=\"getsermonpwa(other.id)\">\n                                    <div class=\"ionCard__imgDiv\">\n                                        <img *ngIf=\"other.featured_media=== ''\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                                        <img *ngIf=\"other.featured_media!== ''\" [src]=\"other.featured_media\"/>\n                                    </div>\n                                    <ion-card-content class=\"ion-no-padding\">\n                                        <ion-card-title class=\"heading4\"\n                                        >{{other.title}}</ion-card-title>\n                                        <p [innerHtml]=\"other.sermon_description\"></p>\n                                    </ion-card-content>\n                                </ion-card>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n\n        </div>\n    </div>\n   <!-- <app-footer></app-footer> -->\n</ng-container>\n\n<ng-container *ngIf=\"oldDesign == true\">  \n    <div class=\"page-wrapper\" *ngIf=\"sermons\">\n        <div class=\"app-container\">\n          <ion-card *ngFor=\"let sermon of sermons; let i = index\" (click)=\"getsermonpwa(sermon.id, sermon.title, sermon.author)\" class=\"ionCard ionCard--chat ionCard--mobile cursor-pointer\">\n            <ion-card-content class=\"ion-no-padding\">\n              <ion-card-title class=\"heading4\">{{sermon.title}}</ion-card-title>\n              <!-- <p class=\"show-mobile\"  [innerHTML]=\"(sermon.sermon_description[0]).substring(0 , 85) + '[...]'\"></p>\n              <p class=\"hide-mobile\" [innerHTML]=\"(sermon.sermon_description[0]).substring(0 , 200) + '[...]'\"></p> -->\n              <div class=\"ionCard__footer\">\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                    <ul class=\"list-inline commentAvatars\">\n                      <li class=\"list-inline-item\">\n                        <ion-icon name=\"calendar\" size=\"small\"></ion-icon>\n                      </li>\n                      <li class=\"list-inline-item\">\n                        <!-- <ion-text>{{appService.getDateTimeFormat(sermon.created_at)}}</ion-text> -->\n                        <p [innerHtml]=\"sermon.created_at\"></p>\n                      </li>\n                    </ul>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n</ng-container>\n</ion-content>\n<!--<app-footer-mobile *ngIf=\"ch_id !== '1000'\"></app-footer-mobile>-->\n"

/***/ }),

/***/ "./src/app/sermons/sermons.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sermons/sermons.module.ts ***!
  \*******************************************/
/*! exports provided: SermonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonsPageModule", function() { return SermonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sermons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sermons.page */ "./src/app/sermons/sermons.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var routes = [
    {
        path: '',
        component: _sermons_page__WEBPACK_IMPORTED_MODULE_6__["SermonsPage"]
    }
];
var SermonsPageModule = /** @class */ (function () {
    function SermonsPageModule() {
    }
    SermonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
            ],
            declarations: [_sermons_page__WEBPACK_IMPORTED_MODULE_6__["SermonsPage"]]
        })
    ], SermonsPageModule);
    return SermonsPageModule;
}());



/***/ }),

/***/ "./src/app/sermons/sermons.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sermons/sermons.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcm1vbnMvc2VybW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sermons/sermons.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sermons/sermons.page.ts ***!
  \*****************************************/
/*! exports provided: SermonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonsPage", function() { return SermonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _common_general_search_general_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/general-search/general-search.component */ "./src/app/common/general-search/general-search.component.ts");

















var SermonsPage = /** @class */ (function () {
    function SermonsPage(route, storage, loader, sermonsService, router, apiService, location, toast, common, event_provider, platform, device, analytics, translate, menu, modalController) {
        var _this = this;
        this.route = route;
        this.storage = storage;
        this.loader = loader;
        this.sermonsService = sermonsService;
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.toast = toast;
        this.common = common;
        this.event_provider = event_provider;
        this.platform = platform;
        this.device = device;
        this.analytics = analytics;
        this.translate = translate;
        this.menu = menu;
        this.modalController = modalController;
        this.recentSermons = [];
        this.showOtherSermons = false;
        this.showPopularSermons = false;
        this.showSermons = false;
        this.showSeries = false;
        this.series = [];
        this.sermons = [];
        this.page_in_home_tabs = false;
        this.oldDesign = false;
        this.deviceType = '';
        this.popular_sermon = false;
        this.search_sermon_placeHolder = "Search for shows or show series";
        // assigning data from URL Params
        this.page_id = this.route.snapshot.paramMap.get('page_id');
        this.checkIfPageOpenedInTab();
        this.getAlertTranslation();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setData(res);
                return [2 /*return*/];
            });
        }); });
        // event subscription, runs when event fired from common service to update if HOME Page is enabled or not
        this.event_provider.isHomeEnable.subscribe(function (value) {
            _this.enable_home = value.value;
        });
        if (!this.enable_home) {
            // updating home page status from variable set in common service
            // "enable_home" variable is used to switch ON or OFF the back button on Mobile View
            // If the HOME page is disabled and THIS page is selected as first landing page, there should be no BACK button
            this.enable_home = this.common.is_home_enable;
        }
    }
    SermonsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!localStorage.getItem('is_wordpress_enable')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.sermonsService.getRecentSermons()];
                    case 1:
                        _a.recentSermons = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.getUser();
                        this.getshows(this.ch_id);
                        return [2 /*return*/];
                }
            });
        });
    };
    SermonsPage.prototype.getshows = function (ch_id) {
        var _this = this;
        if (this.oldDesign === false) {
            this.apiService.getSermonSeries(this.ch_id).subscribe(function (res) {
                if (res.latest) {
                    _this.latest_sermon = res.latest;
                    if (_this.latest_sermon.featured_media) {
                        _this.latestimage = _this.latest_sermon.featured_media;
                    }
                    else {
                        _this.latestimage = '../../assets/img/live_stream_bg_2.jpg';
                    }
                }
                _this.series = res.series;
                _this.sermons = res.sermons;
                _this.all_series = _this.series;
                _this.all_sermons = _this.sermons;
                _this.loader.stopLoading();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.apiService.getshows(this.ch_id).subscribe(function (res) {
                if (res.status) {
                    _this.sermons = res.shows;
                }
                _this.loader.stopLoading();
            }, function (err) {
                console.log(err);
            });
        }
    };
    SermonsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ngOnInit();
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var id, app_pages;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!(Object.keys(res).length === 0)) {
                    id = this.route.snapshot.paramMap.get('page_id');
                    app_pages = res.apppages.find(function (x) { return x.id === _this.page_id; });
                    if (app_pages) {
                        if (app_pages.list_view == 'true') {
                            this.oldDesign = true;
                        }
                        else {
                            this.oldDesign = false;
                        }
                    }
                    if (app_pages) {
                        this.search_sermon_placeHolder = app_pages.search_sermon_placeHolder;
                        if (app_pages.show_popular_sermons == 'true') {
                            this.popular_sermon = true;
                        }
                        else {
                            this.popular_sermon = false;
                        }
                    }
                    if (app_pages && app_pages.password_protection_toggle === 'true') {
                        this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    SermonsPage.prototype.setData = function (res) {
        var _this = this;
        this.is_wordpress_enable = false;
        if (!(Object.keys(res).length === 0)) {
            this.theme = res.church;
            this.ch_id = res.church.ch_id;
            if (res.is_wordpress_enable === '1') {
                this.is_wordpress_enable = true;
                var sermon_page = res.apppages.filter(function (x) { return x.id === _this.page_id; });
                if (sermon_page.length > 0) {
                    this.apppage_id = sermon_page[0].id;
                    this.sermons_url = sermon_page[0].url;
                    this.page_name = sermon_page[0].title;
                    this.custom_name = sermon_page[0].name;
                    var interval_1 = setInterval(function () {
                        _this.translate.get('ALERTS').subscribe(function (res) {
                            clearInterval(interval_1);
                        });
                    }, 2000);
                }
                if (sermon_page[0].list_view == "true") {
                    this.apiService.getshows(this.ch_id).subscribe(function (res) {
                        if (res.status) {
                            _this.sermons = res.shows;
                        }
                        _this.loader.stopLoading();
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    // console.log("testtttttt")
                    this.apiService.getSermonSeries(this.ch_id).subscribe(function (res) {
                        if (res.latest) {
                            _this.latest_sermon = res.latest;
                            if (_this.latest_sermon.featured_media) {
                                _this.latestimage = _this.latest_sermon.featured_media;
                            }
                            else {
                                _this.latestimage = '../../assets/img/live_stream_bg_2.jpg';
                            }
                            if (_this.latestimage !== "" && _this.latestimage !== null && _this.latestimage.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(_this.latest_sermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                var abc = _this.latestimage.split("/");
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
                                var new_link = _this.latestimage.replace(folder_name, _this.deviceType);
                                _this.latestimage = new_link;
                                _this.latest_sermon['featured_media'] = _this.latestimage;
                                //     console.log('latest image  is: ',this.latest_sermon,'new link is: ', this.latestimage);
                            }
                        }
                        _this.series = res.series;
                        _this.series.forEach(function (eachSeire) {
                            if (eachSeire.image_id !== "" && eachSeire.image_id !== null && eachSeire.image_id.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(eachSeire.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                var abc = eachSeire.image_id.split("/");
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
                                var new_link = eachSeire.image_id.replace(folder_name, _this.deviceType);
                                eachSeire['image_id'] = new_link;
                                //  console.log('background is: ',card,'new link is: ', new_link);
                            }
                        });
                        _this.sermons = res.sermons;
                        _this.sermons.forEach(function (eachSeire) {
                            // console.log('inside the sermonsss');
                            if (eachSeire.featured_media !== "" && eachSeire.featured_media !== null && eachSeire.featured_media.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(eachSeire.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                                var abc = eachSeire.featured_media.split("/");
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
                                var new_link = eachSeire.featured_media.replace(folder_name, _this.deviceType);
                                // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                                eachSeire['featured_media'] = new_link;
                            }
                        });
                        //    console.log('sermons are: ',this.sermons);
                        _this.loader.stopLoading();
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                this.is_wordpress_enable = false;
                var sermon_page = res.apppages.filter(function (x) { return x.id === _this.page_id; });
                if (sermon_page.length > 0) {
                    this.apppage_id = sermon_page[0].id;
                    this.sermons_url = sermon_page[0].url;
                    this.page_name = sermon_page[0].title;
                    this.custom_name = sermon_page[0].name;
                    this.show_popular_sermons = sermon_page[0].show_popular_sermons;
                    // getting sermons from URL
                    if (this.sermons_url.includes('.rss') || this.sermons_url.includes('-rss')) {
                        // if url is .rss feed
                        this.getRss(this.apppage_id, this.ch_id);
                    }
                    else {
                        this.getSermonsFromWordpress(this.sermons_url);
                        // get translated alert message
                    }
                    var interval_2 = setInterval(function () {
                        _this.translate.get('ALERTS').subscribe(function (res) {
                            clearInterval(interval_2);
                        });
                    }, 2000);
                }
            }
        }
        else {
            // this.event_provider.getChurchData.subscribe(async (res: any) => {})
        }
    };
    SermonsPage.prototype.checkIfPageOpenedInTab = function () {
        // chekcing if page is opened in home tabs or simple
        var current_url = new URL(window.location.href);
        var page_href = current_url.pathname;
        if (page_href.includes('home-tabs')) {
            this.page_in_home_tabs = true;
        }
        else {
            this.page_in_home_tabs = false;
        }
    };
    SermonsPage.prototype.getsermonpwa = function (id_series) {
        var _this = this;
        this.loader.presentLoading().then(function () {
            // navigating to detail page
            _this.router.navigate(['/show-detail', { id: id_series, page_id: _this.page_id }]);
            _this.loader.stopLoading();
        });
    };
    SermonsPage.prototype.getAlertTranslation = function () {
        var _this = this;
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
    };
    SermonsPage.prototype.getUser = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                _this.user = val;
            }
        });
    };
    SermonsPage.prototype.getRss = function (id, church_id) {
        var _this = this;
        this.loader.presentLoading().then(function () { });
        this.link_type = "rss";
        var self = this;
        // fetching data through service
        this.sermonsService.get_rss(id, church_id).subscribe(function (res) {
            self.allSermons = res.audio.channel.item;
            if (self.allSermons.length != 0) {
                _this.setApiData(_this.link_type);
            }
            _this.loader.stopLoading();
        });
    };
    SermonsPage.prototype.getSermonsFromWordpress = function (base_url) {
        var _this = this;
        this.link_type = "sermon";
        this.loader.presentLoading().then(function () { });
        var self = this;
        this.sermonsService.getAllSermons(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    data = res.data;
                    self.allSermons = data.item;
                    if (self.allSermons.length != 0) {
                        this.setApiData(this.link_type);
                    }
                    this.loader.stopLoading();
                }
                else {
                    this.loader.stopLoading();
                }
                return [2 /*return*/];
            });
        }); });
    };
    SermonsPage.prototype.setApiData = function (link_type) {
        var _this = this;
        var self = this;
        // SET LATEST SERMON
        self.latestSermon = self.allSermons[0];
        self.latesttitle = self.latestSermon.title;
        if (link_type === 'sermon') {
            self.latestspeaker = "";
            // self.latestspeaker = self.latestSermon['itunes:author'];
            if (self.latestSermon['itunes:image']) {
                self.latestimage = self.latestSermon['itunes:image']['$'].href;
            }
            else {
                self.latestimage = self.latestSermon.sermon_image !== '' ? self.latestSermon.sermon_image : '../../assets/img/live_stream_bg_2.jpg';
            }
            if (this.latestimage !== "" && this.latestimage !== null && this.latestimage.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.latestSermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                var abc = this.latestimage.split("/");
                var folder_name = abc[abc.length - 2];
                if (this.platform.is("mobile")) {
                    this.deviceType = 'radiobase_mobile';
                }
                else if (this.platform.is("tablet")) {
                    this.deviceType = 'radiobase_tablet';
                }
                else {
                    this.deviceType = 'logo';
                }
                var new_link = this.latestimage.replace(folder_name, this.deviceType);
                // let new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType +'/' + img_name;
                this.latestimage = new_link;
            }
            this.allSermons.splice(0, 1);
            var all = this.allSermons;
            for (var x = 0; x < all.length; x++) {
                if (all[x]['itunes:image']) {
                    all[x].img = all[x]['itunes:image']['$']['href'];
                }
                else {
                    all[x].img = all[x].img_series;
                }
            }
            var recentSermon = [];
            var _loop_1 = function (x) {
                if (this_1.allSermons.some(function (person) { return person.title === _this.recentSermons[x].title; })) {
                    recentSermon.push(this_1.recentSermons[x]);
                }
            };
            var this_1 = this;
            for (var x = 0; x < this.recentSermons.length; x++) {
                _loop_1(x);
            }
            this.sermonsService.storeRecentSermons(recentSermon);
            this.recentSermons = recentSermon;
            this.allSermons.splice(0, 1);
            self.otherSermons = all;
        }
        else if (link_type === 'rss') {
            self.latestspeaker = "";
            self.latestimage = self.latestSermon.thumbnail ? self.latestSermon.thumbnail : '../../assets/img/live_stream_bg_2.jpg';
            if (this.latestimage !== "" && this.latestimage !== null && this.latestimage.includes("s3.wasabisys.com") && Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.latestSermon.created_at, 'yyyy-MM-dd', 'en_US') >= '2023-05-29') {
                var abc = this.latestimage.split("/");
                var img_name = abc[abc.length - 1];
                if (this.platform.is("mobile")) {
                    this.deviceType = 'radiobase_mobile';
                }
                else if (this.platform.is("tablet")) {
                    this.deviceType = 'radiobase_tablet';
                }
                else {
                    this.deviceType = 'logo';
                }
                var new_link = 'https://s3.wasabisys.com/churchbase.site/' + this.deviceType + '/' + img_name;
                this.latestimage['background'] = new_link;
                //  console.log('background is: ',card,'new link is: ', new_link);
            }
            this.allSermons.splice(0, 1);
            self.otherSermons = this.allSermons;
        }
        if (this.show_popular_sermons === 'true') {
            // GET ALL UNIQUE SERIES
            var newPopularArr_1 = [];
            self.allSermons.forEach(function (item, index) {
                if (item.series) {
                    if (item.series != '') {
                        if (newPopularArr_1.findIndex(function (i) { return i.series == item.series; }) === -1) {
                            item['search_array'] = [];
                            newPopularArr_1.push(item);
                            // to save all titles of sermons the series has
                            _this.allSermons.forEach(function (item, index) {
                                newPopularArr_1.map(function (x) {
                                    if (x.series == item.series) {
                                        x.search_array.push(item.title);
                                    }
                                });
                            });
                        }
                    }
                }
            });
            self.popularSermons = newPopularArr_1;
        }
    };
    SermonsPage.prototype.getSermonSeries = function (id) {
        this.router.navigate(['/all-shows', {
                id: id,
                ch_id: this.ch_id
            }]);
    };
    SermonsPage.prototype.getlatestsermon = function (item, publishDate) {
        if (item === void 0) { item = null; }
        if (publishDate === void 0) { publishDate = null; }
        if (this.is_wordpress_enable) {
            this.router.navigate(['/show-detail', {
                    id: item,
                    page_id: this.page_id
                }]);
        }
        else {
            if (this.link_type === "rss" && item) {
                this.router.navigate(['/show-detail', { id: item, page_id: this.page_id }]);
            }
            else if (item === null && publishDate) {
                this.router.navigate(['/show-detail', { date: publishDate, page_id: this.page_id }]);
            }
            else if (publishDate) {
                this.router.navigate(['/show-detail', { idseries: item, date: publishDate, page_id: this.page_id }]);
            }
            else if (item && !publishDate) {
                this.router.navigate(['/all-shows', { id: item }]);
            }
            else {
                this.router.navigate(['/show-detail', { id: 'latest', page_id: this.page_id }]);
            }
        }
    };
    // navigating to back page
    SermonsPage.prototype.gotobackPage = function () {
        if (this.ch_id === '1000') {
            this.menu.toggle();
        }
        else {
            this.location.back();
        }
    };
    SermonsPage.prototype.setAnalytics = function () {
        var dev_id = '';
        var device = 'web';
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        var end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_10__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](end_time_analytics.diff(this.start_time_analytics)).asSeconds();
        // preparing user data
        var userId = this.user ? this.user.user.id : 'guest';
        // preparing data for analytics
        var body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme.latitude ? this.theme.latitude : "",
            longitude: this.theme.longitude ? this.theme.longitude : "",
            timespent: duration,
            module: this.custom_name,
            custom_name: this.page_name,
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
    SermonsPage.prototype.ionViewDidLeave = function () {
        this.setAnalytics();
    };
    SermonsPage.prototype.ionViewDidEnter = function () {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_10__();
        // this.event_provider.hidefooter(true, 'other');
    };
    SermonsPage.prototype.searchContent = function (event) {
        var _this = this;
        if (event.detail.value.length > 1) {
            this.apiService.searchInShow(this.theme.ch_id, 1, event.detail.value).subscribe(function (res) {
                if (res.status) {
                    _this.series = res.series;
                }
                if (res.status) {
                    _this.sermons = res.sermons;
                }
            });
        }
        else {
            this.series = this.all_series;
            this.sermons = this.all_sermons;
        }
    };
    SermonsPage.prototype.search = function () {
        this.filterModal();
    };
    SermonsPage.prototype.filterModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _common_general_search_general_search_component__WEBPACK_IMPORTED_MODULE_16__["GeneralSearchComponent"],
                            cssClass: 'BibleModal',
                            componentProps: {
                                PageId: this.page_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SermonsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_4__["SermonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"] },
        { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_13__["AnalyticsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] }
    ]; };
    SermonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sermons',
            template: __webpack_require__(/*! raw-loader!./sermons.page.html */ "./node_modules/raw-loader/index.js!./src/app/sermons/sermons.page.html"),
            styles: [__webpack_require__(/*! ./sermons.page.scss */ "./src/app/sermons/sermons.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_4__["SermonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_9__["EventProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_12__["Device"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_13__["AnalyticsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]])
    ], SermonsPage);
    return SermonsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sermons-sermons-module-es5.js.map