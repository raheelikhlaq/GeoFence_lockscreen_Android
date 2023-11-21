(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journey-journey-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/journey/journey.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/journey/journey.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\r\n<ion-header class=\"mobile-header customMobileHeader customMobileHeader\" no-border>\r\n    <ion-toolbar class=\"header--toolbar\">\r\n        <ion-buttons (click)=\"gotobackPage()\" class=\"cursor-pointer\" slot=\"start\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'SETTINGS.Teachings' | translate}}\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!--end mobile header-->\r\n<ion-content>\r\n    <div class=\"page-wrapper ion-justify-content-start\">\r\n        <div class=\"app-container\">\r\n\r\n            <div style=\"padding-inline: 10px;\">\r\n                <ion-row class=\"ion-align-items-center \">\r\n                    <ion-col size=\"6\">\r\n                        <h3 class=\"title\">Today's Study</h3>\r\n                    </ion-col>\r\n                    <ion-col  size=\"6\" class=\"ion-text-right\">\r\n                        <div class=\"toggle-tags\">\r\n                            <p>Auto </p>\r\n                            <p>Download</p>\r\n                        </div>\r\n                        <ion-toggle style=\"position: relative;top: 5px;\" color=\"success\" (ionChange)=\"setDownloadMode($event)\"\r\n                            [checked]=\"autoDownload\">\r\n                            Auto download\r\n                        </ion-toggle>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <div #widgetsContent class=\"dates\">\r\n                    <div  class=\"dates__item\" (click)=\"getTodayStudy(getLastWeeksDate(i));\"\r\n                        *ngFor=\"let calendar of week_days;index as i\">\r\n                        <!-- onSelectDate -->\r\n                        <!--  [class.active]=\"downloadService.studyRead(sevenDaysStudy[i])\" [class.onSelectDate]=\"getLastWeeksDate(i).getDay() == current_day\" [class.onCurrentDate]=\"getLastWeeksDate(i).getDay() == todayDate\" -->\r\n                        <div *ngIf=\"sevenDaysStudy.length == 7\" class=\"date\" [ngClass]=\"{'active' : downloadService.studyRead(sevenDaysStudy[i]), 'onSelectDate' : getLastWeeksDate(i).getDay() == current_day, 'onCurrentDate' : getLastWeeksDate(i).getDay() == todayDate} \">\r\n                            <span class=\"dateStyle\">{{getLastWeeksDate(i) | date : 'dd'}}</span><span\r\n                                class=\"dayStyle\">{{getLastWeeksDate(i) | date: 'EE'}}</span>\r\n                                <hr [class.activeDownload]=\"downloadService.downloadView({uuid:sevenDaysStudy[i].uuid})\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ion-row class=\"\">\r\n                    <ion-col size=\"12\">\r\n                        <ion-card class=\"detailCard\">\r\n                            <ion-card-header class=\"detailCard__header\">\r\n                                <img *ngIf=\"todayStudy_img\" class=\"detailCard__header--img\" alt=\"Silhouette of mountains\" src=\"{{todayStudy_img}}\" />\r\n                                <img *ngIf=\"!todayStudy_img\" class=\"detailCard__header--img\" alt=\"Silhouette of mountains\"src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                <div class=\"detailCard__header--headings\">\r\n                                    <ion-card-title class=\"title\">{{chap_id}}</ion-card-title>\r\n                                    <!-- <ion-card-subtitle class=\"subTitle\">{{organization}}</ion-card-subtitle> -->\r\n                                    <ion-card-subtitle class=\"subTitle\">Thru the Bible</ion-card-subtitle>\r\n\r\n                                    <ion-card-subtitle class=\"subTitle\">{{scheduled_date | date: 'mediumDate'}}</ion-card-subtitle>\r\n                                </div>\r\n                            </ion-card-header>\r\n                            <ion-card-content class=\"detailCard__body\">\r\n                                <div class=\"icons\">\r\n                                    <div class=\"icons__left\">\r\n                                        <ion-buttons (click)=\"shareURL({uuid:id})\">\r\n                                            <img src=\"../../assets/share-icon.svg\">\r\n                                        </ion-buttons>\r\n                                        <ng-container *ngIf=\"id\">\r\n                                            <ion-buttons *ngIf=\"!downloadService.downloadView({uuid:id})\" (click)=\"downloadService.downloadsLocalSave(todayStudy,'study' )\"  ><img src=\"../../assets/download-icon.svg\"></ion-buttons>\r\n                                            <ion-buttons *ngIf=\"downloadService.downloadView({uuid:id})\" (click)=\"downloadService.downloadsLocalSave(todayStudy,'study' )\"  ><img src=\"../../assets/img/downloadGreen.svg\"></ion-buttons>\r\n                                        </ng-container>\r\n                                        <ion-buttons (click)=\"downloadCompoent()\">\r\n                                            <img src=\"../../assets/Options-icon.svg\">\r\n                                        </ion-buttons>\r\n\r\n                                        <ng-container *ngIf=\"todayStudy\">\r\n                                            <ng-container  *ngIf=\"downloadService.studyRead(todayStudy) && (!audioService.isAudioPlayShows || service.audioData.scheduled_date != todayStudy.scheduled_date )\">\r\n                                              <p  class=\"listenTxt\">\r\n                                                <span class=\"ion-text-center checkmark-circle-center\">\r\n                                                  <ion-icon class=\"activeCheck\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                                </span>\r\n                                                <span style=\"position: relative;right: 5px;bottom: 2px; color: #eb7f00;\">\r\n                                                    Listened on {{downloadService.studyReadDate(todayStudy).date | date: 'MM/dd/yyyy'}}\r\n                                                </span>\r\n                                              </p>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"audioService.isAudioPlayShows\">\r\n                                            <div  *ngIf=\"audioService.isAudioPlayShows &&  service.audioData.scheduled_date == todayStudy.scheduled_date \"  style=\"width: 100px;\">\r\n                                                <ion-range mode=\"ios\"  #range [(ngModel)]=\"audioService.progress\" (touchend)=\"seek()\"  class=\"range range--audioPlayer\" max=\"100\"></ion-range>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        \r\n                                        <ng-container  *ngIf=\"!audioService.isAudioPlayShows || service.audioData.scheduled_date != todayStudy.scheduled_date \">\r\n                                            <div  *ngIf=\"today && studyRead(today) && progressData.completeListner == false \"  style=\"width: 100px;\">\r\n                                                <ion-range mode=\"ios\" disabled [(ngModel)]=\"progressData.progress\"  class=\"range range--audioPlayer\" max=\"100\"></ion-range>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                         \r\n                                     \r\n\r\n\r\n                                    </div>\r\n                                    <div *ngIf=\"todayStudy\" class=\"icons__right\" [class.disabledColors]=\"downloadService.studyRead(todayStudy)\" >\r\n                                        <ng-container *ngIf=\"service.audioData\">\r\n                                            <ion-buttons *ngIf=\"!audioService.isAudioPlayShows && service.audioData.scheduled_date != todayStudy.scheduled_date \" (click)=\"playTodayStudy(false)\"> <ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                                            <ion-buttons *ngIf=\"audioService.isAudioPlayShows && service.audioData.scheduled_date != todayStudy.scheduled_date \" (click)=\"playTodayStudy(false)\"> <ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                                            <ion-buttons *ngIf=\"!audioService.isAudioPlayShows && service.audioData.scheduled_date == todayStudy.scheduled_date \" (click)=\"playTodayStudy(false)\"> <ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                                            <ion-buttons  *ngIf=\"audioService.isAudioPlayShows &&  service.audioData.scheduled_date == todayStudy.scheduled_date \" (click)=\"playTodayStudy(true)\"> <ion-icon style=\"margin-left: 0px;\" name=\"pause\"></ion-icon></ion-buttons>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"!service.audioData\">\r\n                                            <ion-buttons *ngIf=\"!audioService.isAudioPlayShows\" (click)=\"playTodayStudy(false)\"> <ion-icon name=\"play\"></ion-icon></ion-buttons>\r\n                                            <ion-buttons  *ngIf=\"audioService.isAudioPlayShows\" (click)=\"playTodayStudy(true)\"> <ion-icon style=\"margin-left: 0px;\" name=\"pause\"></ion-icon></ion-buttons>\r\n                                        </ng-container>\r\n    \r\n                                    </div>\r\n                                </div>\r\n                                <p class=\"detailCard__body--text\">{{description}}</p>\r\n                                <div class=\"card-btns\">\r\n                                    <ion-button  *ngIf=\"audio_format === 'Daily' \" (click)=\"ReadTheBiblePassage(today)\" expand=\"block\" class=\"detailCard__body--btn btnSecondary\">\r\n                                        <ion-icon name=\"book\"></ion-icon>\r\n                                        Read the Bible Passage\r\n                                    </ion-button>\r\n                                    <ion-button style=\"--background: #b2b2b2;\"  disabled  class=\"detailCard__body--btn btnSecondary\" expand=\"block\">\r\n                                        <img src=\"../../assets/img/notes-outline-icon.svg\" class=\"note-icon\">\r\n                                        More Resources\r\n                                    </ion-button>\r\n                                </div>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n\r\n\r\n\r\n            <ion-row size=\"12\">\r\n                <ion-col class=\"banner__col\">\r\n                    <a class=\"download\" routerLink=\"/study-downloads\">\r\n                         <img  src=\"../../assets/download-icon.svg\"> \r\n                        <div class=\"download__title\">Downloaded Today's Studies</div>\r\n                        <ion-icon class=\"download__lastChild\" name=\"arrow-forward\"></ion-icon>\r\n                    </a>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n\r\n            <div style=\"padding-inline: 10px;\">\r\n                <!-- Switch Of -->\r\n                <ion-row class=\"app-container-custom\" *ngIf=\"!is_user_logged_in\">\r\n                    <ion-col size=\"12\">\r\n                        <h3 class=\"login-title\">Your Journey</h3>\r\n                        <div class=\"loginCard\">\r\n                            <p class=\"loginCard__description\">Take a Journey through the whole Bible on your own time\r\n                                and\r\n                                track your progress on the way.</p>\r\n                            <ion-button class=\"btnSecondary\" expand=\"block\" (click)=\"onLogin()\">Sign-in to\r\n                                Begin</ion-button>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row  *ngIf=\"is_user_logged_in && (!listenStudy || listenStudy.length == 0) \" class=\"app-container-custom-login\">\r\n                    <ion-col size=\"12\">\r\n                        <h3 class=\"login-title\">Start Your Journey</h3>\r\n                        <div class=\"loggedInCard\">\r\n                            <p class=\"loggedInCard__description\">Track your progress on the bible Bus</p>\r\n                            <ion-button class=\"btnSecondary\" expand=\"block\" (click)=\"openBibleVideos(books[0].book_id, books[0].book_name ,books[0].book_name_eng)\" >Get Started</ion-button>\r\n                        </div>\r\n                </ion-col>\r\n                </ion-row>\r\n\r\n\r\n\r\n\r\n                <!-- Switch On -->\r\n                <ion-row class=\"app-container-custom studyListJourney\" *ngIf=\"is_user_logged_in &&  (listenStudy && listenStudy.length > 0) \">\r\n                    <ng-container *ngIf=\"audioService.study_ttbAudios[audioService.index] && audioService.tt_all_audios[audioService.index].audio_format == 'Daily' \">\r\n                        <ion-col size=\"12\" >\r\n                            <h3 class=\"login-title\">Your Journey</h3>\r\n                            <ion-list class=\"\" style=\"margin-bottom: 0;\">\r\n                                <ion-item>\r\n                                    <ion-thumbnail>\r\n                                        \r\n                                        <img *ngIf=\"audioService.tt_all_audios[audioService.index].art_url\" alt=\"Silhouette of mountains\" src=\"{{audioService.tt_all_audios[audioService.index].art_url}}\"/>\r\n                                        <!-- <img *ngIf=\"audioService.image\" alt=\"Silhouette of mountains\" src=\"{{audioService.image}}\"/> -->\r\n                                        <img *ngIf=\"!audioService.tt_all_audios[audioService.index].art_url\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/thumbnail.svg\"/>\r\n                                    </ion-thumbnail>\r\n                                    <ion-label style=\"opacity: 1;\">\r\n                                        <div>{{audioService.title}}</div>\r\n                                        <span *ngIf=\"audioService.bibleBook_name\">{{audioService.bibleBook_name}}</span>\r\n                                        <span *ngIf=\"!audioService.bibleBook_name\">{{'Thru the Bible'}}</span>\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\"  [(ngModel)]=\"audioService.progress\" disbaled (touchend)=\"seek()\" #range  class=\"range range--audioPlayer\" max=\"100\"></ion-range>\r\n                                        </div>\r\n                                    </ion-label>\r\n                                    <ion-button (click)=\"audioService.togglePlayer(true);callingAgain();\" *ngIf=\"audioService.study_ttbAudios[audioService.index]\" class=\"playbtn\"> <ion-icon name=\"pause\"></ion-icon> </ion-button>\r\n                                    <!-- <ion-buttons class=\"playbtn\"> <ion-icon name=\"play\"></ion-icon> </ion-buttons> -->\r\n                                </ion-item>\r\n                            </ion-list>\r\n                        </ion-col>\r\n                    </ng-container>\r\n        \r\n                    <ng-container *ngIf=\"!audioService.study_ttbAudios[audioService.index] && (listenStudy && listenStudy.length > 0)\">\r\n                        <ng-container *ngIf=\"audioService.receiveRecentAudio().audio_format == 'Daily'\">\r\n                        <ion-col size=\"12\" >\r\n                            <h3 class=\"login-title\">Your Journey</h3>\r\n                            <ion-list class=\"\" style=\"margin-bottom: 0;\">\r\n                                <ion-item>\r\n                                    <ion-thumbnail>\r\n                                        <img  *ngIf=\"audioService.receiveRecentAudio().art_url\" src=\"{{audioService.receiveRecentAudio().art_url}}\"/>\r\n                                        <img  *ngIf=\"!audioService.receiveRecentAudio().art_url\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/thumbnail.svg\"/>\r\n                                        <!-- <img *ngIf=\"ttb_audios.length > 0 && ttb_audios[index].art_url\" alt=\"Silhouette of mountains\" src=\"{{ttb_audios[index].art_url}}\"/> -->\r\n                                        <!-- <img *ngIf=\"ttb_audios.length == 0 || !ttb_audios[index].art_url\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/thumbnail.svg\"/> -->\r\n                                    </ion-thumbnail>\r\n                                    <ion-label style=\"opacity: 1;\">\r\n                                        <div>{{audioService.receiveRecentAudio().name}}</div>\r\n                                        <!-- <div *ngIf=\"ttb_audios.length > 0\">{{ttb_audios[index].name}}</div> -->\r\n                                        <!-- <span *ngIf=\"listenStudy.length > 0 && listenStudy[listenStudy.length -1].complete_bookname\">{{listenStudy[listenStudy.length -1].complete_bookname}}</span> -->\r\n                                        <span *ngIf=\"audioService.receiveRecentAudio().complete_bookname\">{{audioService.receiveRecentAudio().complete_bookname}}</span>\r\n                                        <span *ngIf=\"!audioService.receiveRecentAudio().complete_bookname\">{{'Thru the Bible'}}</span>\r\n\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                    </ion-label>\r\n                                    \r\n                                    <ion-button (click)=\"lastListenAudioReview(audioService.receiveRecentAudio())\" class=\"playbtn\"><ion-icon name=\"play\"></ion-icon>\r\n                                    </ion-button>\r\n                                </ion-item>\r\n                            </ion-list>\r\n                        </ion-col>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ion-row>\r\n\r\n\r\n\r\n\r\n                <ion-row class=\"app-container-custom\">\r\n                    <ion-col size=\"12\">\r\n                        <div class=\"studyTabs\">\r\n                            <h3 class=\"studyTabs__title\">Explore Studies</h3>\r\n                            <p class=\"studyTabs__description\">Find other books to continue listening.</p>\r\n                            <div class=\"studyTabs__btns\">\r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                    [ngClass]=\"{'active': study_order === 'study_order'}\" size=\"small\"\r\n                                    (click)=\"changeStudyOrder('study_order')\">Study Order\r\n                                </ion-button>\r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                    [ngClass]=\"{'active': study_order === 'old_testament'}\" size=\"small\"\r\n                                    (click)=\"changeStudyOrder('old_testament')\">Old Testament\r\n                                </ion-button>\r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                    [ngClass]=\"{'active': study_order === 'new_testament'}\" size=\"small\"\r\n                                    (click)=\"changeStudyOrder('new_testament')\">New Testament\r\n                                </ion-button>\r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                [ngClass]=\"{'active': study_order === 'history_testament'}\" size=\"small\"\r\n                                (click)=\"changeStudyOrder('history_testament')\">History\r\n                                </ion-button> \r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                    [ngClass]=\"{'active': study_order === 'gospel'}\" size=\"small\"\r\n                                    (click)=\"changeStudyOrder('gospel')\">Gospel\r\n                                </ion-button>\r\n                                <ion-button class=\"commonBtn--round studyTabs__btns--button\"\r\n                                    [ngClass]=\"{'active': study_order === 'prophecy'}\" size=\"small\"\r\n                                    (click)=\"changeStudyOrder('prophecy')\">Prophecy\r\n                                </ion-button>\r\n                            </div>\r\n                        </div>\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'study_order'\">\r\n                            <ion-item *ngFor=\"let book of books\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\"  [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </ion-item>\r\n\r\n                        </ion-list>\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'old_testament'\">\r\n                            <ion-item *ngFor=\"let book of old_testament\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\"  src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ion-item>\r\n\r\n                        </ion-list>\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'new_testament'\">\r\n                            <ion-item *ngFor=\"let book of new_testament\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'history_testament'\">\r\n                            <ion-item *ngFor=\"let book of History\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'gospel'\">\r\n                            <ion-item *ngFor=\"let book of Gospels\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n\r\n                        <ion-list lines=\"none\" class=\"studyList\" *ngIf=\"study_order === 'prophecy'\">\r\n                            <ion-item *ngFor=\"let book of Prophecy\"\r\n                                (click)=\"openBibleVideos(book.book_id, book.book_name ,book.book_name_eng)\">\r\n                                <ion-thumbnail>\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge != 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"book.ttb_badge\" />\r\n                                    <img *ngIf=\"book.ttb_badge && book.ttb_badge == 'https://manage.churchbase.com/uploads/bible_book_images/TTB_Bible_Badges–Icon-Zechariah_White.png' \"  [src]=\"'https://ionicframework.com/docs/img/demos/card-media.png'\" />\r\n                                    <img *ngIf=\"!book.ttb_badge\" alt=\"Silhouette of mountains\" src=\"https://ionicframework.com/docs/img/demos/card-media.png\" />\r\n                                    <ion-icon *ngIf=\"book.no_of_teachings > 0 && book.listend_studies_count == book.no_of_teachings\" class=\"bookComplete\" name=\"checkmark-circle\" mode=\"ios\"></ion-icon>\r\n                                </ion-thumbnail>\r\n                                <div style=\"flex: 1;\">\r\n                                    <ion-label>{{book.book_name}}</ion-label>\r\n                                    <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n                                        <div style=\"width: 140px;\">\r\n                                            <ion-range mode=\"ios\" [(ngModel)]=\"book.progress\" class=\"range range--audioPlayer\" disabled max=\"100\"></ion-range>\r\n                                        </div>\r\n                                        <div class=\"description\">\r\n                                            <p *ngIf=\"book.listend_studies_count === 0\">{{ book.no_of_teachings + ' Studies'}}</p>\r\n                                            <p *ngIf=\"book.listend_studies_count != 0\">{{ book.listend_studies_count + ' of '+  book.no_of_teachings }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/journey/journey.module.ts":
/*!*******************************************!*\
  !*** ./src/app/journey/journey.module.ts ***!
  \*******************************************/
/*! exports provided: JourneyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPageModule", function() { return JourneyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _journey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journey.page */ "./src/app/journey/journey.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");









const routes = [
    {
        path: '',
        component: _journey_page__WEBPACK_IMPORTED_MODULE_6__["JourneyPage"]
    }
];
let JourneyPageModule = class JourneyPageModule {
};
JourneyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_8__["SharedCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_journey_page__WEBPACK_IMPORTED_MODULE_6__["JourneyPage"]]
    })
], JourneyPageModule);



/***/ }),

/***/ "./src/app/journey/journey.page.scss":
/*!*******************************************!*\
  !*** ./src/app/journey/journey.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.app-container {\n  padding-inline: 0;\n}\n.app-container .banner__col {\n  padding: 0;\n}\n.title {\n  font-size: 23px;\n  font-weight: 600;\n}\n.toggle-tags {\n  font-size: 11px;\n  text-align: start;\n  font-weight: 400;\n  margin-top: 3px;\n  margin-right: 8px;\n  line-height: 2px;\n  display: inline-block;\n}\n.dates {\n  display: grid;\n  gap: 6px;\n  grid-auto-flow: column;\n  overflow-x: auto;\n  grid-auto-columns: minmax(64px, auto);\n}\n.dates .date {\n  text-align: center;\n  color: #707070;\n  font-size: 14px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border-radius: 6px;\n  padding: 6px 4px;\n  cursor: pointer;\n  margin-top: 8px;\n  background: #f7fcff;\n  border: 2px solid transparent;\n}\n.dates .date.active {\n  background: #00c142 !important;\n  color: #ffffff !important;\n}\n.dates .date.onSelectDate {\n  background: #f7fcff;\n  color: #707070;\n  border: 2px solid var(--primary-color, #212121);\n}\n.dates .date.onCurrentDate {\n  background: #c1dceb99;\n  color: #707070;\n}\n.dates .date .dateStyle {\n  font-size: 22px;\n  font-weight: 500;\n}\n.dates .date .dayStyle {\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.dates ion-col {\n  --ion-grid-column-padding: 2px;\n  --ion-grid-columns: 7;\n}\n.dates::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n  background-color: transparent !important;\n}\n.sListing {\n  margin-top: 30px;\n}\n.sListing .media {\n  background: transparent;\n  padding: 14px 10px;\n  margin: 0 -10px 15px;\n}\n.sListing .media.active, .sListing .media:hover {\n  background: #ededed;\n}\n.sListing .heading3,\n.sListing p,\n.sListing .subtitle {\n  margin: 0;\n}\n.sListing .heading3 {\n  color: #000000;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: normal;\n  text-transform: capitalize;\n}\n.sListing p,\n.sListing .subtitle {\n  color: #000000;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: normal;\n}\n.sListing .subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sListing .thumb {\n  width: 65px;\n  height: 65px;\n  border-radius: 15px;\n  background-size: cover !important;\n  margin-right: 15px;\n}\n.detailCard {\n  border-radius: 16px;\n  background: rgba(17, 111, 162, 0.1);\n  margin-right: 0;\n  margin-left: 0;\n  box-shadow: none;\n  padding: 16px;\n}\n.detailCard__header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  gap: 16px;\n  padding: 0;\n}\n.detailCard__header--img {\n  width: 72px;\n  height: 72px;\n  border-radius: 16px;\n}\n.detailCard__header--headings .title {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-text, #212121);\n}\n.detailCard__header--headings .subTitle {\n  margin-top: 12px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.2;\n  color: var(--text-sub-text, #363636);\n}\n.detailCard__header--headings .subTitle:first-child {\n  margin-top: 8px;\n}\n.detailCard__header--headings .subTitle:last-child {\n  color: var(--text-text, #212121);\n  font-size: 15px;\n  font-weight: 700;\n  margin-top: 0;\n}\n.detailCard__body {\n  padding: 0;\n}\n.detailCard__body .icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n  height: 45px;\n}\n.detailCard__body .icons__left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n}\n.detailCard__body .icons__left ion-buttons {\n  cursor: pointer;\n}\n.detailCard__body .icons__left ion-icon {\n  width: 24px;\n  height: 24px;\n  color: #000;\n  margin-right: 6px;\n}\n.detailCard__body .icons__right {\n  margin-left: auto;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background-color: #dd7129;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.detailCard__body .icons__right ion-icon {\n  width: 25px;\n  height: 25px;\n  margin-left: 4px;\n  color: #ffffff;\n}\n.detailCard__body--text {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  margin-top: 12px;\n}\n.detailCard__body--btn {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.detailCard__body--btn ion-icon {\n  margin-right: 6px;\n}\n.detailCard__body .read--btn {\n  margin-bottom: 8px;\n}\n.download {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n  padding: 10px;\n  text-decoration: none;\n  cursor: pointer;\n  color: #212121;\n  background: var(--Primary-5, rgba(17, 111, 162, 0.05));\n  margin-block: 12px;\n}\n.download__title {\n  font-size: 19px;\n  font-weight: 400;\n  margin-top: 2px;\n}\n.download__lastChild {\n  margin-left: auto;\n}\n.download ion-icon {\n  width: 24px;\n  height: 24px;\n  color: #212121;\n}\n.login-title {\n  color: var(--text-text, #212121);\n  font-size: 30px;\n  font-weight: 600;\n}\n.loginCard {\n  background: url('live_stream_bg_2.jpg');\n  padding: 27px 21px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.loginCard__description {\n  font-size: 14px;\n  font-weight: 500;\n  width: 81%;\n  text-align: center;\n  margin: 0 auto;\n  color: #fff;\n  line-height: 20px;\n}\n.loginCard ion-button {\n  width: 25%;\n  margin: 0 auto;\n  margin-top: 12px;\n}\n@media screen and (max-width: 1200px) {\n  .loginCard ion-button {\n    width: 100%;\n    margin-top: 18px;\n    height: 48px;\n    font-weight: 600;\n  }\n}\n.loggedInCard {\n  background: url(\"https://i.pinimg.com/236x/e7/32/9f/e7329f1f4835afb318ebaa887e1d2948.jpg\");\n  padding: 32px 16px;\n  border-radius: 8px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.loggedInCard__description {\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  margin: 0 auto;\n  color: #fff;\n  line-height: 20px;\n  margin-right: 16px;\n}\n.loggedInCard ion-button {\n  width: 25%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .loggedInCard ion-button {\n    height: 42px;\n    font-weight: 600;\n    min-width: 130px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n}\n.studyList ion-item {\n  border-radius: 7px;\n  --ion-item-background: #f6f6f6;\n  cursor: pointer;\n  margin-bottom: 8px;\n  --padding-start: 0;\n}\n.studyList ion-item ion-label {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  cursor: pointer;\n  opacity: 1;\n  color: #212121;\n  pointer-events: all;\n  margin-top: 4px;\n}\n.studyList ion-item ion-thumbnail {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 16px;\n}\n.studyList ion-item ion-thumbnail img {\n  border-radius: 4px;\n  background: #9ec9e1;\n}\n.description {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: end;\n  padding-left: 3.5rem;\n}\n.description p {\n  color: #116fa2;\n  font-size: 12px;\n  font-weight: 300;\n  margin: 0;\n  padding-right: 6px;\n}\n.studyTabs {\n  padding-bottom: 26px;\n}\n.studyTabs__title {\n  font-size: 19px;\n  font-weight: 500;\n  color: #212121;\n  margin-bottom: 0;\n}\n.studyTabs__description {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 8px;\n  margin-bottom: 10px;\n}\n.studyTabs__btns {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: auto;\n  gap: 4px;\n}\n.studyTabs__btns--button {\n  font-size: 12px;\n  font-weight: 300;\n  height: 32px;\n  --background: #f6f6f6;\n  --background-hover: #f6f6f6;\n  --background-activated: #f6f6f6;\n  --border-radius: 36px;\n  --color: #212121;\n  --box-shadow: 0;\n}\n.studyTabs__btns .active {\n  --background: var(--colors-secondary-30, #f5d4bf);\n  --background-hover: var(--colors-secondary-30, #f5d4bf);\n}\n.studyTabs__btns::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n}\n.btnSecondary {\n  --background: #dd7129;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  --background-hover: #dd7129;\n}\n.note-icon {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: auto;\n  margin-right: 6px;\n}\n.studyListJourney ion-item {\n  border-radius: 7px;\n  --ion-item-background: #f6f6f6;\n  cursor: pointer;\n  margin-bottom: 8px;\n  --padding-start: 0;\n  --inner-border-width: 0;\n}\n.studyListJourney ion-item .playbtn {\n  margin-left: auto;\n  width: 40px;\n  height: 40px;\n  --border-radius: 50%;\n  --background: #dd7129;\n  --background-activated: #dd7129;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n.studyListJourney ion-item .playbtn ion-icon {\n  color: #fff;\n  height: 22px;\n  width: 22px;\n}\n.studyListJourney ion-item ion-label {\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 12px;\n}\n.studyListJourney ion-item ion-label span {\n  font-size: 12px;\n  font-weight: 300;\n  color: #116fa2;\n  line-height: 24px;\n}\n.studyListJourney ion-item ion-thumbnail {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 16px;\n  height: 82px;\n  width: 82px;\n}\n.studyListJourney ion-item ion-thumbnail img {\n  border-radius: 4px;\n}\n.range--audioPlayer {\n  --bar-height: 3px;\n  margin-top: 0;\n  padding: 0;\n}\n.range {\n  --bar-background: #acacac;\n  cursor: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.listenTxt {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 6px;\n}\n.listenTxt .check {\n  color: #fff !important;\n  background: #00C142 !important;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.disabledColors {\n  --background: #b2b2b2 !important;\n  background: #b2b2b2 !important;\n  background-color: #b2b2b2 !important;\n  --border-color: #b2b2b2 !important;\n  border-color: #b2b2b2 !important;\n  --background-hover: #b2b2b2 !important;\n  --background-activated: #b2b2b2 !important;\n}\n.activeCheck {\n  color: #00C142 !important;\n  height: 18px;\n  width: 18px;\n  margin: 0 2px;\n}\n.bookComplete {\n  z-index: 9999 !important;\n  position: absolute;\n  bottom: 0px;\n  left: 37px;\n  color: #00C142 !important;\n  height: 18px;\n  width: 18px;\n  margin: 0 2px;\n}\nhr {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  height: 3px;\n  border-radius: 50%;\n  background: transparent !important;\n  width: 3px;\n  color: transparent !important;\n}\n.activeDownload {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  height: 3px;\n  border-radius: 50%;\n  background: #1d75f7 !important;\n  width: 3px;\n  color: #1d75f7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2pvdXJuZXkvam91cm5leS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3RkaW4iLCJzcmMvYXBwL2pvdXJuZXkvam91cm5leS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUMvTkE7RUFDRSxpQkFBQTtBQ0lGO0FERkE7RUFDRSxVQUFBO0FDS0Y7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lGO0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNJRjtBREZBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEscUNBQUE7QUNJRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNFSjtBREFJO0VBR0UsOEJBQUE7RUFDQSx5QkFBQTtBQ0FOO0FERUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQ0FOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRE47QURJSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRk47QURNRTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRFFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtBQ0xGO0FET0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNMSjtBRE1JO0VBRUUsbUJBQUE7QUNMTjtBRFNFOzs7RUFHRSxTQUFBO0FDUEo7QURVRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDUko7QURXRTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFlFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVko7QURhRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDWEo7QURnQkE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNiRjtBRGVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDYko7QURlSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNiTjtBRGdCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDZE47QURpQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNmTjtBRGtCSTtFQUNFLGVBQUE7QUNoQk47QURtQkk7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNqQk47QURxQkU7RUFDRSxVQUFBO0FDbkJKO0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDbkJOO0FEcUJNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFFBQUE7QUNuQlI7QURvQlE7RUFDRSxlQUFBO0FDbEJWO0FEc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7QUNyQlI7QUR3Qk07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3RCUjtBRHdCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDdEJSO0FEMEJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUN4Qk47QUQyQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUN6Qk47QUQyQk07RUFDRSxpQkFBQTtBQ3pCUjtBRDZCSTtFQUNFLGtCQUFBO0FDM0JOO0FEZ0NBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUM3QkY7QUQrQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDN0JKO0FEZ0NFO0VBQ0UsaUJBQUE7QUM5Qko7QURpQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUMvQko7QURtQ0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2hDRjtBRG1DQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDaENGO0FEa0NFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2hDSjtBRG1DRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNqQ0o7QUNSRTtFRjRDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ2pDSjtBQUNGO0FEcUNBO0VBQ0UsMEZBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2xDRjtBRG9DRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQ0o7QURxQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ25DSjtBQ3hDRTtFRjhFRTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDbkNKO0FBQ0Y7QUQ2Q0E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMxQ0Y7QUQ2Q0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzFDRjtBRDZDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDMUNGO0FENkNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQzFDRjtBRDZDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEsZ0JBQUE7RUFDQSxvQkFBQTtBQzFDRjtBRDZDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUMxQ0Y7QUQ2Q0E7RUFDRSxvQkFBQTtBQzFDRjtBRDRDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzFDSjtBRDZDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUMzQ0o7QUQ4Q0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QUM1Q0o7QUQ4Q0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM1Q047QUQrQ0k7RUFDRSxpREFBQTtFQUNBLHVEQUFBO0FDN0NOO0FEaURFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUMvQ0o7QURtREE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ2hERjtBRG1EQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNoREY7QURtREE7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2hERjtBRGlERTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUMvQ0o7QURnREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM5Q047QURtREE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2hERjtBRGlERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQy9DSjtBRG1EQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNoREY7QURtREE7RUFDRSxrQkFBQTtBQ2hERjtBRGtEQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUMvQ0Y7QURpREE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQzlDRjtBRGdEQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDN0NGO0FEOENFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM1Q0o7QURtREE7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtBQ2pERjtBRG1EQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDaERGO0FEa0RBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUMvQ0Y7QURpREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQzlDRjtBRGdEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDN0NGIiwiZmlsZSI6InNyYy9hcHAvam91cm5leS9qb3VybmV5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyB2YXJpYWJsZXMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBDb2xvcnMgKi9cbi8vZGVmYXVsdCBwcmltYXJ5LWNvbG9yIGlzICMzMDJGMzRcblxuJHByaW1hcnktY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMzMDJGMzQpO1xuJHNlY29uZGFyeS1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLCAjQURBQ0FFKTtcbiRkZWZhdWx0LXByaW1hcnktY29sb3I6ICMzMDJGMzQ7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kaGVhZGVyLWJnLWNvbG9yOiAjRDhEOEQ4O1xuJGhlYWRpbmctY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGhlYWRpbmctY29sb3ItbGlnaHQ6ICMzODM3M0M7XG4kZ3JheS1saWdodDogI0JBQkFCQTtcbiRoYWxmLXdoaXRlOiAjRjFGMUYxO1xuJGJsdWUtY29sb3I6ICM0MjY3QjI7XG4kZGFyay1ncmF5LWNvbG9yOiAjMjkyOTI5O1xuJGJsYWNrLTJuZDogIzIwMjAyMDtcbiRib3R0b20tZm9vdGVyLWJnLWNvbG9yOiAjMjUyNDI3O1xuJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0cmFuc3BhcmVudC1jb2xvcjogIzAwMDAwMDAwO1xuJGZvb3Rlci1iZy1jb2xvcjogJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjtcbiRmb290ZXItaGVhZGluZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJG1haW4tYmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcblxuJGdyYXktY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG5cbi8vbmV3IHBsYXllciB2YXJpYWJsZXNcblxuJHBsYXllci1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItcHJpbWFyeS1jb2xvciwgI0YyRjJGMik7XG4kcGxheWVyLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXNlY29uZGFyeS1jb2xvciwgIzIzMjMyMyk7XG4kcGxheWVyLXRleHQtY29sb3I6IHZhcigtLXBsYXllci10ZXh0LWNvbG9yLCAjMTE2RUZGKTtcbiRwbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvciwgIzAwMDAwMCk7XG4kcGxheWVyLWJ1dHRvbi1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1jb2xvciwgIzBBNjVGRik7XG4kcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yLCAjMjYzMTQxKTtcblxuJGNvbG9yczogKFxuICAgICAgICAnd2hpdGUnOiAkd2hpdGUtY29sb3IsXG4gICAgICAgICdoZWFkZXItYmctY29sb3InOiAkaGVhZGVyLWJnLWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWJnLWNvbG9yJzogJGZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItYmctY29sb3InOiAkYm90dG9tLWZvb3Rlci1iZy1jb2xvcixcbiAgICAgICAgJ2JvdHRvbS1mb290ZXItdGV4dC1jb2xvcic6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3IsXG4gICAgICAgICdmb290ZXItaGVhZGluZy1jb2xvcic6ICRmb290ZXItaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ21haW4tYmctY29sb3InOiAkbWFpbi1iZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3InOiAkaGVhZGluZy1jb2xvcixcbiAgICAgICAgJ2hlYWRpbmctY29sb3ItbGlnaHQnOiAkaGVhZGluZy1jb2xvci1saWdodCxcbiAgICAgICAgJ2dyYXktY29sb3InOiRncmF5LWNvbG9yLFxuICAgICAgICAnZ3JheS1saWdodCc6ICRncmF5LWxpZ2h0LFxuICAgICAgICAnZGFyay1ncmF5JzogJGRhcmstZ3JheS1jb2xvcixcbiAgICAgICAgJ2hhbGYtd2hpdGUnOiRoYWxmLXdoaXRlLFxuICAgICAgICAnYmx1ZS1jb2xvcic6JGJsdWUtY29sb3IsXG4gICAgICAgICdibGFjay0ybmQnOiAkYmxhY2stMm5kLFxuICAgICAgICAndHJhbnNwYXJlbnQnOiAkdHJhbnNwYXJlbnQtY29sb3IsXG4pO1xuXG4vLyBCb2R5IGZvbnRcblxuJGJvZHktZm9udC1zaXplOiAxOHB4O1xuJHgtc21hbGwtYm9keS1mb250LXNpemU6IDE0cHg7XG4kYm9keS1mb250LXN0eWxlOiBub3JtYWw7XG4kYm9keS1mb250LXZhcmlhbnQ6IG5vcm1hbDtcbiRib2R5LWZvbnQtd2VpZ2h0OiA2MDA7XG4kbGluZS1oZWlnaHQ6IDEuNjtcblxuLy90eXBvZ3JhcGh5XG4kaGVhZGluZy1vbmUtc2l6ZTozNnB4O1xuJGhlYWRpbmctdHdvLXNpemU6IDI0cHg7XG4kaGVhZGluZy10d28tbWQtc2l6ZTogMzZweDtcbiRoZWFkaW5nLXRocmVlLXNpemU6IDE1cHg7XG4kaGVhZGluZy1mb3VyLXNpemU6MTRweDtcbi8vJGhlYWRpbmctZml4LXNpemU6O1xuJGhlYWRpbmctc2l4LXNpemU6IDE0cHg7XG5cbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4kZm9udC13ZWlnaHRzOiAoXG4gICAgICAgICdsaWdodCc6IDMwMCxcbiAgICAgICAgJ25vcm1hbCc6NDAwLFxuICAgICAgICAnbWVkaXVtJzogNTAwLFxuICAgICAgICAnc2VtaUJvbGQnOiA2MDAsXG4gICAgICAgICdib2xkJzogNzAwLFxuKTtcblxuLyogY2FyZHMgKi9cbiRjYXJkLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4kY2FyZC1ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzgsIDM2LCAzNSwgLjE0KTtcblxuLy9CdXR0b25zXG5cbiRidG4tZm9udC13ZWlnaHQ6IDYwMDtcbiRidG4tdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXBhZGRpbmcteTogMTBweDtcbiRidG4tcGFkZGluZy1zdGFydDogMjBweDtcbiRidG4tcGFkZGluZy1lbmQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wOiA0cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tOiA0cHg7XG4kYnRuLWZvbnQtc2l6ZTogMTRweDtcbiRidG4tbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1czogNDBweDtcbiRidG4tdGV4dC10cmFuc2Zvcm06ICR0ZXh0LWxvd2VyY2FzZTtcbiRidG4taGVpZ2h0OiA0MHB4O1xuJGJ0bi1taW4td2lkdGg6IDkwcHg7XG5cbi8vYnV0dG9ucy13aGl0ZVxuJGJ0bi13aGl0ZS10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYmFja2dyb3VuZC1ob3ZlcjogJHdoaXRlLWNvbG9yO1xuXG4vLy9idXR0b25zLXdoaXRlLW91dGxpbmVcbiRidG4td2hpdGUtb3V0bGluZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuLy8vZ3JheVxuJGJ0bi1ncmF5LXRleHQtY29sb3I6ICRncmF5LWNvbG9yO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJvcmRlci1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1ob3ZlcjogJGhhbGYtd2hpdGU7XG5cbi8vL2RhcmtcbiRidG4tZGFyay10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8vYmx1ZVxuJGJ0bi1ibHVlLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1ib3JkZXItY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtaG92ZXI6ICRibHVlLWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50XG4kYnRuLXRyYW5zcGFyZW50LXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnQgZGFyay1vdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtdGV4dC1jb2xvcjogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cblxuLy8vYmxhY2sgb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuLy9CdXR0b24gbGFyZ2VcbiRidG4tcGFkZGluZy1zdGFydC1sZzogMjBweDtcbiRidG4tcGFkZGluZy1lbmQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctdG9wLWxnOiA2cHg7XG4kYnRuLXBhZGRpbmctYm90dG9tLWxnOiA2cHg7XG4kYnRuLWZvbnQtc2l6ZS1sZzogJGJ0bi1mb250LXNpemU7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6IDMwcHg7XG4kYnRuLWhlaWdodC1sZzogNDhweDtcblxuLyogRm9ybXMgKi9cbiRpbnB1dC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDM2LCAxMTMsIDE4NSwgMC4xKTtcbiRpbnB1dC1mb250LXNpemU6IDI4cHg7XG4keC1zbWFsbC1pbnB1dC1mb250LXNpemU6ICR4LXNtYWxsLWJvZHktZm9udC1zaXplO1xuJGlucHV0LWJvcmRlcjogbm9uZTtcbiRpbnB1dC1yYWRpdXM6IDQwcHg7XG4kaW5wdXQtYm9yZGVyLWZvY3VzOiBub25lO1xuJGlucHV0LWhlaWdodDogNjBweDtcbiRpbnB1dC1wYWRkaW5nOiAwIDE2cHg7XG4kaW5wdXQtaWNvbi13aWR0aDogMjBweDtcbiRpbnB1dC1pY29uLWhlaWdodDogJGlucHV0LWljb24td2lkdGg7XG5cbi8vY2hlY2tib3hcbiRjaGVja2JveC13aWR0aDogMjRweDtcbiRjaGVja2JveC1oZWlnaHQ6ICRjaGVja2JveC13aWR0aDtcbiRjaGVja2JveC1zbWFsbC13aWR0aDogMjBweDtcbiRjaGVja2JveC1zbWFsbC1oZWlnaHQ6ICRjaGVja2JveC1zbWFsbC13aWR0aDtcblxuLy90ZXh0XG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuLy9jcmVkaXQgY2FyZFxuXG4kY3JlZGl0LWNhcmQtaWNvbi13aWR0aDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLWhlaWdodDogNzBweDtcbiRjcmVkaXQtY2FyZC1pY29uLXJpZ2h0OiByaWdodDtcbiRjcmVkaXQtY2FyZC1pY29uLWxlZnQ6IGxlZnQ7XG5cbi8qIEhlYWRlciBJY29uICovXG5cbiRoZWFkZXItaWNvbi13aWR0aDogMzBweDtcbiRoZWFkZXItaWNvbi1oZWlnaHQ6IDMwcHg7XG4kaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJGhlYWRlci1sb2dvLWhlaWdodDogNDhweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLWhlYWRlci1sb2dvLWhlaWdodDogNDBweDtcbiR4LXNtYWxsLWhlYWRlci1pY29uLXdpZHRoOiAyNXB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC11cHBlcmNhc2U7XG4kaGVhZGVyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDYwMDtcblxuLyogU2lkZWJhciAqL1xuXG4kc2lkZWJhci1sb2dvLXdpZHRoOiAyMDBweDtcbiRzaWRlYmFyLWxvZ28taGVpZ2h0OiAxNjBweDtcbiR4LXNtYWxsLXNpZGViYXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWljb24td2lkdGg6IDI1cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLXNpemU6IDE2cHg7XG4kc2lkZWJhci1saW5rLWxhYmVsLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHNpZGViYXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LWNhcGl0YWxpemU7XG4kc2lkZWJhci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA1MDA7XG4kc2lkZWJhci1pY29uLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbi8qIHByb2ZpbGUgYXZhdGFyICovXG5cbiRwcm9maWxlLWltYWdlLXdpZHRoOiA4MHB4O1xuJHByb2ZpbGUtaW1hZ2UtaGVpZ2h0OiAkcHJvZmlsZS1pbWFnZS13aWR0aDtcblxuXG4vKiB0YWJzICovXG5cbiR0YWJzLWJhci1iZy1jb2xvcjokdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWJ0bi10ZXh0LWNvbG9yOiAkdGFicy1iYXItdGV4dC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LXNpemU6IDE1cHg7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkdHJhbnNwYXJlbnQtY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLXRleHQtY29sb3I6JGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYWN0aXZlLWJvcmRlci1jb2xvcjoycHggc29saWQgJGhlYWRpbmctY29sb3I7XG5cblxuXG4vLy8gYXBwLWNvbnRhaW5lci13aWR0aFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kY29udGFpbmVyLXdpZHRoOiAoXG4gICAgICAgICdsYXJnZSc6IDEwMCUsXG4gICAgICAgICdtZWRpdW0nOiAxMDAlLFxuICAgICAgICAnc21hbGwnOiAxMDAlLFxuICAgICAgICAneC1zbWFsbCc6IDEwMCUsXG4pICFkZWZhdWx0O1xuXG4vLy8gQnJlYWtwb2ludHMgbWFwXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRtZWRpYS1icmVha3BvaW50czogKFxuICAgICAgICAnbGFyZ2UnOiAxMjAwcHgsXG4gICAgICAgICdtZWRpdW0nOiA5OTJweCxcbiAgICAgICAgJ3NtYWxsJzogNzY4cHgsXG4gICAgICAgICd4LXNtYWxsJzogNTc2cHgsXG4gICAgICAgICd4eC1zbWFsbCc6IDQxNHB4LFxuKSAhZGVmYXVsdDtcblxuLy8vIFJlbGF0aXZlIG9yIGFic29sdXRlIFVSTCB3aGVyZSBhbGwgYXNzZXRzIGFyZSBzZXJ2ZWQgZnJvbVxuLy8vIEB0eXBlIFN0cmluZ1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaGVuIHVzaW5nIGEgQ0ROXG4vLy8gICAkYmFzZS11cmw6ICdodHRwOi8vY2RuLmV4YW1wbGUuY29tL2Fzc2V0cy8nO1xuJGJhc2UtdXJsOiAnYXNzZXRzLycgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vc2Fzcy9jb25maWdcIjtcclxuXHJcbkBpbmNsdWRlIG1lZGlhLW1kIHtcclxufVxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDA7XHJcbn1cclxuLmFwcC1jb250YWluZXIgLmJhbm5lcl9fY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvZ2dsZS10YWdzIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmRhdGVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogNnB4O1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAvL2dyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpbGwsIG1pbm1heCg2NHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDY0cHgsIGF1dG8pO1xyXG5cclxuICAmX19pdGVtcyB7XHJcbiAgfVxyXG4gIC5kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZmNmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICBcclxuICAgICAgLy8gYmFja2dyb3VuZDogIHZhcigtLXByaW1hcnktY29sb3IsICMwMGMxNDIpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiMwMGMxNDIgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYub25TZWxlY3REYXRlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y3ZmNmZjtcclxuICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IsICAjMjEyMTIxKTtcclxuICAgIH1cclxuICAgICYub25DdXJyZW50RGF0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjMWRjZWI5OTtcclxuICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IsICAjMjEyMTIxKTtcclxuICAgIH1cclxuICAgIC5kYXRlU3R5bGUge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAuZGF5U3R5bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIGlvbi1jb2wge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMnB4O1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3O1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGVzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc0xpc3Rpbmcge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIC5tZWRpYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIG1hcmdpbjogMCAtMTBweCAxNXB4O1xyXG4gICAgJi5hY3RpdmUsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nMyxcclxuICBwLFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZzMge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIHAsXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIC50aHVtYiB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbENhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNywgMTExLCAxNjIsIDAuMSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTZweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgJi0taW1nIHtcclxuICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1oZWFkaW5ncyAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXRleHQsICMyMTIxMjEpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc3ViLXRleHQsICMzNjM2MzYpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWhlYWRpbmdzIC5zdWJUaXRsZTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1oZWFkaW5ncyAuc3ViVGl0bGU6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXRleHQsICMyMTIxMjEpO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gICAgICAmX19sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgJiBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19sZWZ0IGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNzEyOTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICZfX3JpZ2h0IGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLXRleHQge1xyXG4gICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1idG4ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVhZC0tYnRuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRvd25sb2FkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLVByaW1hcnktNSwgcmdiYSgxNywgMTExLCAxNjIsIDAuMDUpKTtcclxuICBtYXJnaW4tYmxvY2s6IDEycHg7XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG5cclxuICAmX19sYXN0Q2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC10ZXh0LCAjMjEyMTIxKTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxvZ2luQ2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9saXZlX3N0cmVhbV9iZ18yLmpwZ1wiKTtcclxuICBwYWRkaW5nOiAyN3B4IDIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogODElO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dnZWRJbkNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvZTcvMzIvOWYvZTczMjlmMWY0ODM1YWZiMzE4ZWJhYTg4N2UxZDI5NDguanBnXCIpO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWluLXdpZHRoOiAxMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0dWR5TGlzdCB7XHJcbiAgLy9AaW5jbHVkZSBtZWRpYS1tZHtcclxuICAvLyAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAvL31cclxufVxyXG5cclxuLnN0dWR5TGlzdCBpb24taXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG5cclxuLnN0dWR5TGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uc3R1ZHlMaXN0IGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zdHVkeUxpc3QgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjOWVjOWUxO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHAge1xyXG4gIGNvbG9yOiAjMTE2ZmEyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5zdHVkeVRhYnMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNnB4O1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2J0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBnYXA6IDRweDtcclxuXHJcbiAgICAmLS1idXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmNmY2ZjY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmNmY2ZjY7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMzZweDtcclxuICAgICAgLS1jb2xvcjogIzIxMjEyMTtcclxuICAgICAgLS1ib3gtc2hhZG93OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9ycy1zZWNvbmRhcnktMzAsICNmNWQ0YmYpO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWNvbG9ycy1zZWNvbmRhcnktMzAsICNmNWQ0YmYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnRuczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0blNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGQ3MTI5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZGQ3MTI5O1xyXG59XHJcblxyXG4ubm90ZS1pY29uIHtcclxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uc3R1ZHlMaXN0Sm91cm5leSBpb24taXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAucGxheWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkZDcxMjk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZGQ3MTI5O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3R1ZHlMaXN0Sm91cm5leSBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMTE2ZmEyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3R1ZHlMaXN0Sm91cm5leSBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGhlaWdodDogODJweDtcclxuICB3aWR0aDogODJweDtcclxufVxyXG5cclxuLnN0dWR5TGlzdEpvdXJuZXkgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcclxuICAtLWJhci1oZWlnaHQ6IDNweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnJhbmdlIHtcclxuICAtLWJhci1iYWNrZ3JvdW5kOiAgI2FjYWNhYztcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmxpc3RlblR4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICAuY2hlY2t7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzAwQzE0MiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4IDtcclxuICAgIHdpZHRoOiAyMHB4IDtcclxuICB9XHJcbiAgLnNwYW57XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbi5kaXNhYmxlZENvbG9yc3tcclxuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDsgXHJcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNiMmIyYjIgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2IyYjJiMiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNiMmIyYjIgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlQ2hlY2t7XHJcbiAgY29sb3I6ICMwMEMxNDIgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHggO1xyXG4gIG1hcmdpbjowIDJweDtcclxufVxyXG4uYm9va0NvbXBsZXRle1xyXG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMzdweDtcclxuICBjb2xvcjogIzAwQzE0MiAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweCA7XHJcbiAgbWFyZ2luOjAgMnB4O1xyXG59XHJcbmhye1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDNweDtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlRG93bmxvYWR7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzFkNzVmNyAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgY29sb3I6ICMxZDc1ZjcgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGUgLnN0dWR5VGFic19fYnRucyB7XHJcbiAgJi0tYnV0dG9uIHtcclxuXHJcbiAgICAmLmFjdGl2ZXtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmFwcC1jb250YWluZXIge1xuICBwYWRkaW5nLWlubGluZTogMDtcbn1cblxuLmFwcC1jb250YWluZXIgLmJhbm5lcl9fY29sIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9nZ2xlLXRhZ3Mge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBsaW5lLWhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kYXRlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNnB4O1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDY0cHgsIGF1dG8pO1xufVxuLmRhdGVzIC5kYXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDZweCA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmY2ZmO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5kYXRlcyAuZGF0ZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDBjMTQyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uZGF0ZXMgLmRhdGUub25TZWxlY3REYXRlIHtcbiAgYmFja2dyb3VuZDogI2Y3ZmNmZjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IsICMyMTIxMjEpO1xufVxuLmRhdGVzIC5kYXRlLm9uQ3VycmVudERhdGUge1xuICBiYWNrZ3JvdW5kOiAjYzFkY2ViOTk7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLmRhdGVzIC5kYXRlIC5kYXRlU3R5bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGF0ZXMgLmRhdGUgLmRheVN0eWxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRhdGVzIGlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAycHg7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNztcbn1cblxuLmRhdGVzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uc0xpc3Rpbmcge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNMaXN0aW5nIC5tZWRpYSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gIG1hcmdpbjogMCAtMTBweCAxNXB4O1xufVxuLnNMaXN0aW5nIC5tZWRpYS5hY3RpdmUsIC5zTGlzdGluZyAubWVkaWE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLnNMaXN0aW5nIC5oZWFkaW5nMyxcbi5zTGlzdGluZyBwLFxuLnNMaXN0aW5nIC5zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5zTGlzdGluZyAuaGVhZGluZzMge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uc0xpc3RpbmcgcCxcbi5zTGlzdGluZyAuc3VidGl0bGUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnNMaXN0aW5nIC5zdWJ0aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNMaXN0aW5nIC50aHVtYiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZGV0YWlsQ2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTcsIDExMSwgMTYyLCAwLjEpO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmRldGFpbENhcmRfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uZGV0YWlsQ2FyZF9faGVhZGVyLS1pbWcge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmRldGFpbENhcmRfX2hlYWRlci0taGVhZGluZ3MgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXh0LCAjMjEyMTIxKTtcbn1cbi5kZXRhaWxDYXJkX19oZWFkZXItLWhlYWRpbmdzIC5zdWJUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6IHZhcigtLXRleHQtc3ViLXRleHQsICMzNjM2MzYpO1xufVxuLmRldGFpbENhcmRfX2hlYWRlci0taGVhZGluZ3MgLnN1YlRpdGxlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRldGFpbENhcmRfX2hlYWRlci0taGVhZGluZ3MgLnN1YlRpdGxlOmxhc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXh0LCAjMjEyMTIxKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmRldGFpbENhcmRfX2JvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAuaWNvbnNfX2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fbGVmdCBpb24tYnV0dG9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fbGVmdCBpb24taWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5IC5pY29uc19fcmlnaHQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ3MTI5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRldGFpbENhcmRfX2JvZHkgLmljb25zX19yaWdodCBpb24taWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRldGFpbENhcmRfX2JvZHktLXRleHQge1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kZXRhaWxDYXJkX19ib2R5LS1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGV0YWlsQ2FyZF9fYm9keS0tYnRuIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uZGV0YWlsQ2FyZF9fYm9keSAucmVhZC0tYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZG93bmxvYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1QcmltYXJ5LTUsIHJnYmEoMTcsIDExMSwgMTYyLCAwLjA1KSk7XG4gIG1hcmdpbi1ibG9jazogMTJweDtcbn1cbi5kb3dubG9hZF9fdGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5kb3dubG9hZF9fbGFzdENoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uZG93bmxvYWQgaW9uLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzIxMjEyMTtcbn1cblxuLmxvZ2luLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtdGV4dCwgIzIxMjEyMSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxvZ2luQ2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbGl2ZV9zdHJlYW1fYmdfMi5qcGdcIik7XG4gIHBhZGRpbmc6IDI3cHggMjFweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luQ2FyZF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiA4MSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5sb2dpbkNhcmQgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5sb2dpbkNhcmQgaW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4ubG9nZ2VkSW5DYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9lNy8zMi85Zi9lNzMyOWYxZjQ4MzVhZmIzMThlYmFhODg3ZTFkMjk0OC5qcGdcIik7XG4gIHBhZGRpbmc6IDMycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2dlZEluQ2FyZF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4ubG9nZ2VkSW5DYXJkIGlvbi1idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubG9nZ2VkSW5DYXJkIGlvbi1idXR0b24ge1xuICAgIGhlaWdodDogNDJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLnN0dWR5TGlzdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4uc3R1ZHlMaXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnN0dWR5TGlzdCBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uc3R1ZHlMaXN0IGlvbi1pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjOWVjOWUxO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbn1cblxuLmRlc2NyaXB0aW9uIHAge1xuICBjb2xvcjogIzExNmZhMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnN0dWR5VGFicyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNnB4O1xufVxuLnN0dWR5VGFic19fdGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN0dWR5VGFic19fZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzIxMjEyMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3R1ZHlUYWJzX19idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZ2FwOiA0cHg7XG59XG4uc3R1ZHlUYWJzX19idG5zLS1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGhlaWdodDogMzJweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmNmY2ZjY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmNmY2ZjY7XG4gIC0tYm9yZGVyLXJhZGl1czogMzZweDtcbiAgLS1jb2xvcjogIzIxMjEyMTtcbiAgLS1ib3gtc2hhZG93OiAwO1xufVxuLnN0dWR5VGFic19fYnRucyAuYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcnMtc2Vjb25kYXJ5LTMwLCAjZjVkNGJmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1jb2xvcnMtc2Vjb25kYXJ5LTMwLCAjZjVkNGJmKTtcbn1cbi5zdHVkeVRhYnNfX2J0bnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5idG5TZWNvbmRhcnkge1xuICAtLWJhY2tncm91bmQ6ICNkZDcxMjk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2RkNzEyOTtcbn1cblxuLm5vdGUtaWNvbiB7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnN0dWR5TGlzdEpvdXJuZXkgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG4uc3R1ZHlMaXN0Sm91cm5leSBpb24taXRlbSAucGxheWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjZGQ3MTI5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZGQ3MTI5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN0dWR5TGlzdEpvdXJuZXkgaW9uLWl0ZW0gLnBsYXlidG4gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbn1cblxuLnN0dWR5TGlzdEpvdXJuZXkgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbi5zdHVkeUxpc3RKb3VybmV5IGlvbi1pdGVtIGlvbi1sYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzExNmZhMjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5zdHVkeUxpc3RKb3VybmV5IGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGhlaWdodDogODJweDtcbiAgd2lkdGg6IDgycHg7XG59XG5cbi5zdHVkeUxpc3RKb3VybmV5IGlvbi1pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucmFuZ2UtLWF1ZGlvUGxheWVyIHtcbiAgLS1iYXItaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yYW5nZSB7XG4gIC0tYmFyLWJhY2tncm91bmQ6ICNhY2FjYWM7XG4gIGN1cnNvcjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0ZW5UeHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5saXN0ZW5UeHQgLmNoZWNrIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzAwQzE0MiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uZGlzYWJsZWRDb2xvcnMge1xuICAtLWJhY2tncm91bmQ6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2IyYjJiMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjJiMmIyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiMmIyYjIgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IyYjJiMiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlQ2hlY2sge1xuICBjb2xvcjogIzAwQzE0MiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW46IDAgMnB4O1xufVxuXG4uYm9va0NvbXBsZXRlIHtcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAzN3B4O1xuICBjb2xvcjogIzAwQzE0MiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW46IDAgMnB4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB3aWR0aDogM3B4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZURvd25sb2FkIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMxZDc1ZjcgIWltcG9ydGFudDtcbiAgd2lkdGg6IDNweDtcbiAgY29sb3I6ICMxZDc1ZjcgIWltcG9ydGFudDtcbn0iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgbWl4aW5zLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy9mb250IHNpemVcblxuQG1peGluIGZvbnQtc2l6ZSgkZm9udC1zaXplKSB7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuQG1peGluIGNsZWFyZml4KCkge1xuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7IC8qIDEgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzO1xuICAvLyBXZWJLaXRcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cblxuLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi8vIFNpemluZyBzaG9ydGN1dHNcbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBGaXJlZm94IDQtMThcbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggMTkrXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAgIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6ICN7MC8wfSBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vLyBEcm9wIHNoYWRvd3NcbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5cbi8vIEdSQURJRU5UU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgJHN0YXJ0LXBlcmNlbnQgdG9wLCAkZW5kLXBlcmNlbnQgdG9wLCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgY29sb3Itc3RvcCgkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQpLCBjb2xvci1zdG9wKCRlbmQtY29sb3IgJGVuZC1wZXJjZW50KSk7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBGRiAzLjYrXG4gIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkgYW5kIGJlbG93LlxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgJHN0YXJ0LXBlcmNlbnQsIGxlZnQgJGVuZC1wZXJjZW50LCBmcm9tKCRzdGFydC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTsgLy8gU2FmYXJpIDQrLCBDaHJvbWUgMitcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogIC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93blxufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkZGVnOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFNhZmFyaSA1LjErLCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIFN0YW5kYXJkLCBJRTEwXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGVmdCwgbGluZWFyLCAwIDAsIDAgMTAwJSwgZnJvbSgkc3RhcnQtY29sb3IpLCBjb2xvci1zdG9wKCRjb2xvci1zdG9wLCAkbWlkLWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICM1NTUsICRvdXRlci1jb2xvcjogIzMzMykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMCwgY2VudGVyIGNlbnRlciwgNDYwLCBmcm9tKCRpbm5lci1jb2xvciksIHRvKCRvdXRlci1jb2xvcikpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDEwMCUsIDEwMCUgMCwgY29sb3Itc3RvcCguMjUsICRjb2xvciksIGNvbG9yLXN0b3AoLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsICRjb2xvciksIGNvbG9yLXN0b3AoLjc1LCB0cmFuc3BhcmVudCksIHRvKHRyYW5zcGFyZW50KSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4vLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiByZXNldC1maWx0ZXIoKSB7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XG59XG5cbi8vIEFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICR0ZXh0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkdGV4dC1jb2xvciwgMTAlKTtcbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiB2YXJpYW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlci1jb2xvciwgJGJhY2tncm91bmQtaG92ZXIpIHtcbiAgLS1jb2xvcjogI3skY29sb3J9O1xuICAtLWJhY2tncm91bmQ6ICN7JGJhY2tncm91bmR9O1xuICAtLWJvcmRlci1jb2xvcjogI3skYm9yZGVyLWNvbG9yfTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiN7JGJhY2tncm91bmQtaG92ZXJ9O1xuXG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy1zdGFydCwgJGJ0bi1wYWRkaW5nLWVuZCwgJGJ0bi1wYWRkaW5nLXRvcCwgJGJ0bi1wYWRkaW5nLWJvdHRvbSwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYnRuLWhlaWdodCwgJGJ0bi1taW4td2lkdGgpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiN7JGJ0bi1wYWRkaW5nLXN0YXJ0fTtcbiAgLS1wYWRkaW5nLWVuZDogI3skYnRuLXBhZGRpbmctZW5kfTtcbiAgLS1wYWRkaW5nLXRvcDogI3skYnRuLXBhZGRpbmctdG9wfTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skYnRuLXBhZGRpbmctYm90dG9tfTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBoZWlnaHQ6ICRidG4taGVpZ2h0O1xuICBtaW4td2lkdGg6ICRidG4tbWluLXdpZHRoO1xufVxuXG4vLyBQYWdpbmF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBMYWJlbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICZbaHJlZl0ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMaXN0c1xuXG4vLyBVbnN0eWxlZCBrZWVwcyBsaXN0IGl0ZW1zIGJsb2NrIGxldmVsLCBqdXN0IHJlbW92ZXMgZGVmYXVsdCBicm93c2VyIHBhZGRpbmcgYW5kIGxpc3Qtc3R5bGVcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cblxuLy9tZWRpYSBicmVha3BvaW50c1xuXG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KGxhcmdlKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobWVkaXVtKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludCh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS14eHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHh4LXNtYWxsKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/journey/journey.page.ts":
/*!*****************************************!*\
  !*** ./src/app/journey/journey.page.ts ***!
  \*****************************************/
/*! exports provided: JourneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyPage", function() { return JourneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var src_services_id_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_download_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/download.service */ "./src/services/download.service.ts");
/* harmony import */ var _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/bible-sharing/bible-sharing.component */ "./src/app/common/bible-sharing/bible-sharing.component.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_bible_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/bible.service */ "./src/services/bible.service.ts");



















let JourneyPage = class JourneyPage {
    // prosFilt:any =[{name:"Isaiah"}, {name:"Jeremiah"}, {name:"Lamentations"}, {name:"Ezekiel"}, {name:"Daniel"}]
    // historyFilt:any =[{name:"Joshua"}, {name:"Judges"}, {name:"Ruth"}, {name:"1 Samuel"}, {name:"2 Samuel"},
    // {name:"1 Kings"}, {name:"2 Kings"}, {name:"1 Chronicles"}, {name:"2 Chronicles"}, {name:"Ezra"},
    //  {name:"Nehemiah"},{name:"Esther"}];
    // gospelFilt:any =[{name:"Matthew"}, {name:"Mark"}, {name:"Luke"}, {name:"John"}]
    constructor(translate, loader, toast, apiService, route, event_provider, router, storage, location, platform, socialSharing, idSer, service, _bibleService, actionSheetController, audioService, downloadService, modalController) {
        this.translate = translate;
        this.loader = loader;
        this.toast = toast;
        this.apiService = apiService;
        this.route = route;
        this.event_provider = event_provider;
        this.router = router;
        this.storage = storage;
        this.location = location;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.idSer = idSer;
        this.service = service;
        this._bibleService = _bibleService;
        this.actionSheetController = actionSheetController;
        this.audioService = audioService;
        this.downloadService = downloadService;
        this.modalController = modalController;
        this.week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.showsArray = [];
        this.date_pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
        this.current_date = new Date();
        this.today_date = Number(this.date_pipe.transform(new Date(), 'dd'));
        this.current_month = (Number(this.date_pipe.transform(new Date(), 'MM')));
        this.current_year = (Number(this.date_pipe.transform(new Date(), 'yyyy')));
        this.current_hour = Number(this.date_pipe.transform((new Date), 'H'));
        this.current_minutes = Number(this.date_pipe.transform((new Date), 'mm'));
        this.current_day = new Date().getDay(); // 0(Sunday) to 6(Saturday).
        this.weekly_Calendar = [];
        this.current_show = [];
        this.daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
        this.todayDate = new Date().getDay();
        this.audioData = {};
        this.old_testament = [];
        this.history_testament = [];
        this.new_testament = [];
        this.study_order = 'study_order';
        this.is_user_logged_in = false;
        this.listenStudy = [];
        this.ttb_audios = [];
        this.today = {};
        this.sevenDaysStudy = [];
        this.autoDownload = true;
        this.Prophecy = [];
        this.History = [];
        this.Gospels = [];
    }
    ngOnInit() {
        if (localStorage.getItem("setAutoDownload")) {
            this.autoDownload = localStorage.getItem("setAutoDownload");
        }
    }
    setDownloadMode(event) {
        this.autoDownload = event.detail.checked;
        localStorage.setItem("setAutoDownload", event.detail.checked);
    }
    ionViewDidEnter() {
        this.church_id = this.route.snapshot.paramMap.get('data') ? this.route.snapshot.paramMap.get('data') : this.idSer.getId();
        this.getTodayStudy(new Date());
        this.getUser();
        this.storage.get('app_language').then((res) => {
            this.bible_id = res.bible_id;
            this.audio_id = res.audio_id;
            this.getCMPBooks(res.bible_id);
            if (res.bible_id) {
                this.getBibleBooks(res.bible_id);
            }
            else {
                this.getBibleBooks('78a9f6124f344018-01');
            }
        });
        this.sevenDaysStudy = [];
        const currentDate = new Date();
        const previousDates = [];
        previousDates.push(currentDate);
        for (let i = 0; i < 7; i++) {
            const previousDate = new Date(currentDate);
            previousDate.setDate(currentDate.getDate() - i);
            previousDates.push(previousDate);
            this.getTodayStudyFOrCompleted(previousDate);
        }
        this.LastStudy();
        setTimeout(() => {
            console.log(this.widgetsContent.nativeElement);
            // this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
            this.widgetsContent.nativeElement.scrollLeft += 350;
        }, 1000);
    }
    getUser() {
        this.storage.get('user').then(res => {
            if (res && res.user.id) {
                this.account_donor_id = res.user.id;
                this.is_user_logged_in = true;
            }
            else {
                this.is_user_logged_in = false;
            }
        });
    }
    getTodayStudy(scheduled_date) {
        this.current_day = scheduled_date.getDay();
        let body = JSON.stringify({
            language: localStorage.getItem('app_language') == 'en' ?
                localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language') == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language'),
            scheduled_date: this.date_pipe.transform(new Date(scheduled_date), 'yyyy-MM-dd'),
            audio_format: "Daily"
        });
        this.loader.presentLoading().then(() => {
            this.apiService.getTodayStudy(body).subscribe((res) => {
                if (res) {
                    this.todayStudy = res;
                    this.book_id = res.bible_book;
                    this.book_name = res.bible_book;
                    this.book_name_eng = res.bible_book;
                    this.organization = res.organization;
                    this.chap_id = res.name;
                    this.id = res.uuid;
                    this.audioData.title = this.chap_id;
                    this.audioData.id = this.id;
                    this.scheduled_date = res.scheduled_date;
                    this.description = res.description,
                        this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + this.id;
                    this.todayStudy_img = res.art_url;
                    this.today = res;
                    this.audio_format = res.audio_format;
                    this.cmp_book_id = res.cmp_book_id;
                    this.start_chapter = res.bible_chapter_start;
                    this.end_chapter = res.bible_chapter_end;
                    this.start_verse = res.bible_verse_start;
                    this.end_verse = res.bible_verse_end;
                    this.audio_format = res.audio_format;
                    this.getTtbLanguageAudio();
                    this.loader.stopLoading();
                    setTimeout(() => {
                        if ((this.autoDownload == true || this.autoDownload == "true") && (scheduled_date.getDay() == this.todayDate)) {
                            var res = this.downloadService.downloadView(this.today);
                            console.log(res, "caluesssss");
                            if (!res) {
                                this.downloadService.downloadsLocalSave(this.today, "study");
                            }
                        }
                    }, 2000);
                }
                else {
                    this.loader.stopLoading();
                }
            });
        });
    }
    getTtbLanguageAudio() {
        this.chapter_audio_file_loaded = true;
        this.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + this.id;
        // this.start('chapter', environment.cmp_audioLink + this.id);
        let body = JSON.stringify({
            book_id: this.id
        });
        let badge_image = this.getTeachingImagesCache(this.book_name_eng);
        // this.ttb_badge = badge_image ? badge_image.image_path : 'https://devmanage.radiobase.org/uploads/thrubible.PNG';
        this.ttb_badge = badge_image ? badge_image.image_path : 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
        this.audioData.url = this.audioUrl;
        this.audioData.image = this.ttb_badge;
    }
    getTeachingImagesCache(book_name) {
        if (localStorage.getItem('teaching_images')) {
            if (book_name !== null) {
                let images = JSON.parse(localStorage.getItem('teaching_images'));
                let found = images.find(x => x.bible_book_eng === book_name);
                return found ? found : '';
            }
        }
        else {
            this.apiService.getTeachingImages().subscribe((res) => {
                if (res && res.status) {
                    localStorage.setItem('teaching_images', JSON.stringify(res.result));
                    if (book_name !== null) {
                        let images = JSON.parse(localStorage.getItem('teaching_images'));
                        let found = images.find(x => x.bible_book_eng === book_name);
                        return found ? found : '';
                    }
                }
            });
        }
    }
    getLastWeeksDate(days) {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - (6 - days));
    }
    changeStudyOrder(order) {
        this.study_order = order;
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
                    let badge_image = this.getTeachingImagesCache(x['book_name']);
                    x['no_of_teachings'] = 0;
                    x['teachingDetail'] = {};
                    x['listend_studies_count'] = 0;
                    x['ttb_badge'] = badge_image ? badge_image.image_path : 'https://devmanage.radiobase.org/uploads/thrubible.PNG';
                    this.getTtbLanguageAudios(x);
                });
                var orderBooks = booksss.sort((a, b) => a.bookOrder - b.bookOrder);
                this.books = orderBooks;
                this.new_testament = this.books.filter(x => x['testament'] == 'N');
                this.old_testament = this.books.filter(x => x['testament'] == 'O');
                console.log(this.books);
                var listenStudy = localStorage.getItem("listenStudy") ? JSON.parse(localStorage.getItem("listenStudy")) : [];
                // this.history_testament = this.books.filter(x=> x[this.book_id] == listenStudy.forEach(element => { return element.book_id? element.book_id:""})
                //   )
                listenStudy.forEach(element => {
                    if (element.book_id) {
                        console.log(element);
                        var idx = this.books.findIndex(x => x.book_id == element.book_id);
                        console.log(idx);
                        if (idx > -1 && (this.history_testament.length == 0 || (this.history_testament.length > 0 && this.history_testament.find(x => x.book_id != element.book_id)))) {
                            var data = this.books[idx];
                            this.history_testament.push(data);
                            console.log(this.history_testament);
                        }
                    }
                });
                var prosFilt = [{ name: "Isaiah" }, { name: "Jeremiah" }, { name: "Lamentations" }, { name: "Ezekiel" }, { name: "Daniel" }];
                var historyFilt = [{ name: "Joshua" }, { name: "Judges" }, { name: "Ruth" }, { name: "1 Samuel" }, { name: "2 Samuel" },
                    { name: "1 Kings" }, { name: "2 Kings" }, { name: "1 Chronicles" }, { name: "2 Chronicles" }, { name: "Ezra" },
                    { name: "Nehemiah" }, { name: "Esther" }];
                var gospelFilt = [{ name: "Matthew" }, { name: "Mark" }, { name: "Luke" }, { name: "John" }];
                setTimeout(() => {
                    console.log(prosFilt, historyFilt, gospelFilt, "firrs");
                    this.Prophecy = this.books.filter(function (n) {
                        return prosFilt.find(x => x.name == n.name);
                    });
                    this.History = this.books.filter(function (n) {
                        return historyFilt.find(x => x.name == n.name);
                    });
                    this.Gospels = this.books.filter(function (n) {
                        return gospelFilt.find(x => x.name == n.name);
                    });
                    setTimeout(() => {
                        console.log(this.Prophecy, this.History, this.Gospels, "myfilterrrrrrr");
                    }, 2000);
                }, 3000);
            }
        });
    }
    getTtbLanguageAudios(book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let body;
            this.storage.get('app_language').then((res) => {
                if (res.bible_id) {
                    body = JSON.stringify({
                        language: res.code == 'en' ? 'en_US' : res.code == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language'),
                        bible_book: book.id,
                        audio_format: "Daily"
                    });
                    this.apiService.getTtbLanguageAudios(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (res && res.length) {
                            book.no_of_teachings = res.length;
                            book.teachingDetail = res;
                            if (this.listenStudy.length > 0) {
                                let filterData = this.listenStudy.filter(x => (x.book_id == book.book_id) && x.completeListner == true);
                                var progress = (filterData.length / book.no_of_teachings) * 100 || 0;
                                book['progress'] = progress;
                                book['listend_studies_count'] = filterData.length ? filterData.length : 0;
                            }
                        }
                    }));
                }
            });
        });
    }
    openBibleVideos(book_id, book_name, book_name_eng) {
        this.router.navigate(['ism-teachings-videos', {
                book_id: book_id,
                book_name: book_name,
                church_id: this.church_id,
                book_name_eng: book_name_eng
            }]);
    }
    onLogin() {
        var url = new URL(window.location.href);
        this.router.navigate(['/login', {
                page: "journey",
                path: url.pathname,
            }]);
    }
    gotobackPage() {
        this.location.back();
    }
    playTodayStudy(isplay) {
        if (this.audioService.audioUrl == this.audioUrl) {
            this.audioService.togglePlayer(isplay);
        }
        else {
            this.audioService.clear();
            setTimeout(() => {
                let seek = 0;
                if (this.progressData && this.progressData.listenDuration) {
                    var timeArray = this.progressData.listenDuration.split(':');
                    var minutes = parseInt(timeArray[0], 10);
                    var sec = parseInt(timeArray[1], 10);
                    var totalMinutes = minutes * 60 + sec;
                    seek = Math.floor(totalMinutes);
                }
                this.audioService.clear();
                this.audioService.fromPage = "study";
                this.service.method = "study";
                this.audioService.audioIndex = -1;
                this.service.image = this.todayStudy_img;
                this.audioData.image = this.todayStudy_img;
                this.audioService.title = this.audioData.title;
                this.audioService.isAudioPlayShows = !isplay;
                this.audioService.image = this.todayStudy_img;
                this.service.audioData = this.todayStudy;
                this.audioService.organization = this.organization;
                this.audioService.is_today_study = true;
                this.audioService.study_image = this.todayStudy_img;
                setTimeout(() => {
                    seek > 0 ? this.audioService.startAudio(this.audioUrl, seek) : this.audioService.startAudio(this.audioUrl);
                }, 400);
            }, 500);
        }
    }
    shareURL(audio) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.socialSharing.share(`Study Thru The Bible - ${audio.name} \n` + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + audio.uuid).then(data => {
                }, error => {
                });
            }
            else {
                const actionSheet = yield this.actionSheetController.create({
                    header: 'Share',
                    buttons: [
                        {
                            text: 'Copy Link',
                            role: 'destructive',
                            icon: 'link',
                            handler: () => {
                                navigator.clipboard.writeText(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + audio.uuid);
                                this.toast.presentToastWithOptions(' Copied ', '', 'success');
                            }
                        },
                        {
                            text: 'Cancel',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                            }
                        }
                    ]
                });
                yield actionSheet.present();
            }
        });
    }
    callingAgain() {
        setTimeout(() => {
            this.LastStudy();
        }, 800);
    }
    LastStudy() {
        this.listenStudy = localStorage.getItem("listenStudy") ? JSON.parse(localStorage.getItem("listenStudy")) : [];
        if (this.listenStudy && this.listenStudy.length > 0) {
            this.storage.get('app_language').then((res) => {
                if (res.bible_id) {
                    var body = JSON.stringify({
                        language: res.code == 'en' ? 'en_US' : res.code == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language'),
                        bible_book: this.listenStudy[this.listenStudy.length - 1].book_id,
                        audio_format: "Daily"
                    });
                    this.apiService.getTtbLanguageAudios(body).subscribe((res) => {
                        if (res && res.length) {
                            this.setCmpData(res);
                        }
                        // else{  
                        // this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.sorry : 'sorry'), (this.alertMessage ? this.alertMessage.no_teachings_available : 'No teachings available'), 'warning');
                        // }
                    });
                }
                else {
                    body = JSON.stringify({
                        language: 'en_US',
                        bible_book: this.book_id,
                        audio_format: "Daily"
                    });
                    this.apiService.getTtbLanguageAudios(body).subscribe((res) => {
                        if (res && res.length) {
                            this.setCmpData(res);
                        }
                    });
                }
            });
        }
    }
    setCmpData(res) {
        let ttb_audios = res;
        ttb_audios.map(x => {
            x['sort_number'] = new Date(x.created).valueOf();
        });
        ttb_audios.sort(function (a, b) {
            var textA = parseInt(a.sort_number);
            var textB = parseInt(b.sort_number);
            return textA - textB;
        });
        ttb_audios.forEach(audio => {
            audio.duraionInMints = this.intoMinutes(audio.audio_duration);
            audio.listner = false;
            audio.completeListner = false;
            audio.listenDuration = "0:0";
        });
        this.ttb_audios = ttb_audios;
        console.log(ttb_audios, "audiosssss");
        var idx = ttb_audios.findIndex(x => x.uuid == this.listenStudy[this.listenStudy.length - 1].id);
        this.index = idx > -1 ? idx : 0;
    }
    intoMinutes(second) {
        var minutes = Math.floor(second / 60);
        var seconds = Math.floor(second - minutes * 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    }
    seek() {
        if (this.audioService.isPlaying) {
            if (this.platform.is('cordova') && !this.platform.is("android")) {
                this.platform.ready().then(() => {
                    this.audioService.audiomedia.getCurrentPosition().then((position) => {
                        if (position && position >= 0) {
                            // get current playback position
                            let newValue = +this.range.value;
                            let val = this.audioService.audiomedia.getDuration() * (newValue / 100) * 1000;
                            if (val) {
                                this.audioService.audiomedia.seekTo(val);
                            }
                        }
                    });
                });
            }
            else if (this.platform.is("cordova") && this.platform.is("android")) {
                let newValue = +this.range.value;
                window.mediaplayer.current(success => {
                    console.log(success);
                    let duration = (Math.floor(success.duration)) / 1000;
                    let seekvalue = ((duration * (newValue / 100)));
                    console.log("finnal console,", newValue, (parseInt(seekvalue) * 1000).toString());
                    window.mediaplayer.seek({ seekTo: (parseInt(seekvalue) * 1000).toString() }, success => { console.log(success); }, fail => { console.log(fail); });
                }, fail => { console.log(fail); });
            }
            else {
                if (this.audioService.isPlaying) {
                    let newValue = +this.range.value;
                    let duration = this.audioService.player.duration();
                    this.audioService.player.seek(duration * (newValue / 100));
                }
            }
        }
    }
    lastListenAudio() {
        this.audioService.clear();
        setTimeout(() => {
            this.audioService.clear();
            var audioData = {};
            audioData = this.ttb_audios[this.index];
            var audio = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + this.ttb_audios[this.index].uuid;
            this.audioService.study_ttbAudios = new Array(this.ttb_audios.length).fill(false);
            this.audioService.audioIndex = this.index;
            this.audioService.study_ttbAudios[this.index] = true;
            audioData.book_id = this.listenStudy[this.listenStudy.length - 1].book_id;
            this.audioService.fromPage = 'ism-study';
            this.audioService.title = audioData.name;
            this.audioService.image = this.ttb_audios[this.index].art_url;
            this.audioService.tt_all_audios = this.ttb_audios;
            this.audioService.liveStreaming = false;
            audioData.title = audioData.name;
            audioData.image = this.ttb_audios[this.index].art_url;
            this.service.method = 'ism-study';
            this.audioService.index = this.index;
            this.audioService.audioUrl = audio;
            this.service.audioData = audioData;
            this.audioService.bibleBook_name = this.listenStudy[this.listenStudy.length - 1].complete_bookname;
            this.audioService.fromPage = 'ism-study';
            this.audioService.startAudio(audio);
        }, 500);
    }
    download() {
        if (this.is_user_logged_in) {
            const dataBody = {
                user_id: this.account_donor_id,
                file_url: this.audioUrl,
                file_type: 'audio',
                file_name: this.chap_id,
                file_description: '',
                file_thumbnail_url: this.todayStudy_img ? this.todayStudy_img : "https://devmanage.radiobase.org/uploads/thrubible.PNG"
            };
            this.downloadService.addFileToDownloads(dataBody).subscribe((res) => {
                if (res.status) {
                    var alertMessage = 'File added to downloads';
                    this.toast.presentToastWithOptions(alertMessage, '', 'Success');
                }
            });
        }
    }
    getCMPBooks(bible_id) {
        let self = this;
        let bible_id2 = bible_id;
        let code = localStorage.getItem('app_language') == 'en' ?
            localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language') == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language');
        this._bibleService.getCMPbibleBooks(bible_id2, code).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res) {
                let data = [];
                res.forEach(function (x) {
                    let chapter = '';
                    for (let i = 1; i <= x.number_of_chapters; i++) {
                        chapter += i + ",";
                        chapter.slice(0, -1);
                    }
                    x.expanded = false;
                    x.book_name = x.nameLong;
                    x.book_id = x.id;
                    x.book_order = x.bookOrder;
                    x.chapters = chapter,
                        x.lang_code = code;
                    // if(x.testament == 'N') {
                    data.push(x);
                    // }
                });
                this.cmp_books = data;
            }
            else if (!res) {
                this.toast.presentToastWithOptions('Something Went Wrong', '', 'danger');
            }
        }));
    }
    downloadCompoent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_bible_sharing_bible_sharing_component__WEBPACK_IMPORTED_MODULE_16__["BibleSharingComponent"],
                componentProps: {
                    todayStudy: JSON.stringify(this.today),
                    studyType: "study",
                },
                cssClass: 'BibleModal ForBibleSharing'
            });
            modal.onDidDismiss()
                .then((data) => {
                const user = data['data']; // Here's your selected user!
                if (user && user.data === 'passenger') {
                    this.ReadTheBiblePassage(this.today);
                }
            });
            return yield modal.present();
        });
    }
    error(e, r) {
        console.log(e, r, "this.is error");
    }
    lastListenAudioReview(getData) {
        console.log(getData);
        if (getData.name == this.audioService.title) {
            this.audioService.togglePlayer(false);
        }
        else {
            console.log("book", getData, getData.book_id ? true : getData.cmp_book_id);
            if (getData.book_id ? true : getData.cmp_book_id) {
                console.log("book", getData);
                var filter = this.books.find(x => x.book_id == (getData.book_id ? getData.book_id : getData.cmp_book_id));
                if (filter) {
                    var idx = filter.teachingDetail.findIndex(x => x.uuid == getData.uuid);
                    if (idx > -1) {
                        var audioData = {};
                        this.audioService.study_ttbAudios = new Array(filter.teachingDetail.length).fill(false);
                        this.audioService.audioIndex = idx;
                        this.audioService.study_ttbAudios[idx] = true;
                        this.audioService.tt_all_audios = filter.teachingDetail;
                        this.audioService.fromPage = 'ism-study';
                        this.audioService.title = filter.teachingDetail[idx].name;
                        this.audioService.image = filter.teachingDetail[idx].art_url;
                        this.audioService.bibleBook_name = filter.book_name;
                        // this.audioService.isAudioPlayShows = !pause;
                        audioData = getData;
                        this.audioService.liveStreaming = false;
                        audioData.title = getData.name;
                        audioData.book_id = getData.book_id;
                        audioData.image = getData.art_url;
                        this.service.method = 'ism-study';
                        this.audioService.index = idx;
                        this.audioService.audioUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + getData.uuid;
                        this.service.audioData = audioData;
                        this.audioService.startAudio(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].cmp_audioLink + getData.uuid);
                    }
                }
            }
            else {
                this.playTodayStudy(false);
            }
        }
    }
    ReadTheBiblePassage(item) {
        let item2 = this.cmp_books.find(x => x.id === item.cmp_book_id);
        console.log(item2);
        if (item2) {
            let data = {
                queryParams: {
                    chapter: JSON.stringify(this.start_chapter),
                    book: JSON.stringify(item2),
                    dam_id: this.bible_id,
                    audio_id: this.audio_id,
                    page: 'journey',
                    // sermonid:this.sermonid,
                    // page_id: this.page_id,
                    start_chapter: this.start_chapter,
                    start_verse: this.start_verse,
                    end_chapter: this.end_chapter,
                    end_verse: this.end_verse,
                    bible_id: this.bible_id
                }
            };
            this.router.navigate(['/bible-chapter'], data);
        }
    }
    studyRead(read) {
        var receeivedData = {};
        var listenData = localStorage.getItem("listenStudy") ? JSON.parse(localStorage.getItem("listenStudy")) : [];
        if (listenData) {
            var idx = listenData.findIndex(x => x.id == read.uuid);
            if (idx > -1) {
                // var idxs = this.today.u.findIndex(x=> x.uuid == );
                if (this.today.uuid == listenData[idx].id) {
                    receeivedData.listenDuration = listenData[idx].duration;
                    receeivedData.listner = true;
                    receeivedData.completeListner = listenData[idx].completeListner;
                    receeivedData.date = listenData[idx].date;
                    var timeArray = listenData[idx].duration.split(':');
                    var minutes = parseInt(timeArray[0], 10);
                    var sec = parseInt(timeArray[1], 10);
                    var totalMinutes = minutes * 60 + sec;
                    let seek = Math.floor(totalMinutes);
                    receeivedData.progress = (seek / (this.today.audio_duration ? this.today.audio_duration : 1561)) * 100 || 0;
                    this.progressData = receeivedData;
                    return true;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
    getTodayStudyFOrCompleted(scheduled_date) {
        let body = JSON.stringify({
            language: localStorage.getItem('app_language') == 'en' ?
                localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language') == 'zh_HantT' ? 'zh_Hant' : localStorage.getItem('app_language'),
            scheduled_date: this.date_pipe.transform(new Date(scheduled_date), 'yyyy-MM-dd'),
            audio_format: "Daily"
        });
        this.apiService.getTodayStudy(body).subscribe((res) => {
            this.sevenDaysStudy.push(res);
            this.sevenDaysStudy.sort((a, b) => {
                const dateA = new Date(a.scheduled_date);
                const dateB = new Date(b.scheduled_date);
                return dateA.getTime() - dateB.getTime();
            });
            if (this.sevenDaysStudy.length == 7) {
                setTimeout(() => {
                    console.log(this.widgetsContent.nativeElement);
                    // this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
                    this.widgetsContent.nativeElement.scrollLeft += 350;
                }, 1000);
            }
        });
    }
};
JourneyPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"] },
    { type: src_services_id_service__WEBPACK_IMPORTED_MODULE_12__["IdService"] },
    { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"] },
    { type: src_services_bible_service__WEBPACK_IMPORTED_MODULE_18__["BibleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"] },
    { type: src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"] },
    { type: src_services_download_service__WEBPACK_IMPORTED_MODULE_15__["DownloadService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('range', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonRange"])
], JourneyPage.prototype, "range", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('widgetsContent', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        static: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], JourneyPage.prototype, "widgetsContent", void 0);
JourneyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-journey',
        template: __webpack_require__(/*! raw-loader!./journey.page.html */ "./node_modules/raw-loader/index.js!./src/app/journey/journey.page.html"),
        styles: [__webpack_require__(/*! ./journey.page.scss */ "./src/app/journey/journey.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
        src_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], src_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        src_services_event_provider_service__WEBPACK_IMPORTED_MODULE_11__["EventProviderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_17__["SocialSharing"],
        src_services_id_service__WEBPACK_IMPORTED_MODULE_12__["IdService"],
        src_services_common_service__WEBPACK_IMPORTED_MODULE_13__["CommonService"],
        src_services_bible_service__WEBPACK_IMPORTED_MODULE_18__["BibleService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ActionSheetController"],
        src_services_audioplayer_service__WEBPACK_IMPORTED_MODULE_5__["AudioplayerService"], src_services_download_service__WEBPACK_IMPORTED_MODULE_15__["DownloadService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["ModalController"]])
], JourneyPage);



/***/ })

}]);
//# sourceMappingURL=journey-journey-module-es2015.js.map