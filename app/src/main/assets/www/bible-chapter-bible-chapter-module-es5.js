(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bible-chapter-bible-chapter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bible-chapter/bible-chapter.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bible-chapter/bible-chapter.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mobile header-->\n<ion-header *ngIf=\"theme\" class=\"mobile-header customMobileHeader \" no-border>\n   <ion-toolbar class=\"header&#45;&#45;toolbar\">\n    <ion-buttons class=\"cursor-pointer\" slot=\"start\"  *ngIf=\"(selected_page === 'N'|| selected_page === 'O'  ||selected_page === 'sermon-detail' ||selected_page === 'today-study-card' || selected_page === 'journey' || selected_page === 'study-download-detail') && loaded  \"  (click)=\"goBackToShowDetail()\" style=\"padding-left: 5px; position: absolute;\">\n        <ion-icon name=\"arrow-back\"></ion-icon>&nbsp;{{'BIBLE.Back' | translate}}\n    </ion-buttons>\n    <ion-skeleton-text *ngIf=\"(selected_page === 'sermon-detail' ||selected_page === 'today-study-card' || selected_page === 'journey' || selected_page === 'study-download-detail')  && !loaded \"  [animated]=\"true\" style=\"width: 5%;\"></ion-skeleton-text>\n    <ion-buttons  class=\"cursor-pointer\" style=\"\" >\n        <ion-skeleton-text  *ngIf=\"book && chapter && !loaded\" [animated]=\"true\" style=\"width: 30%; margin: 0 auto;\"></ion-skeleton-text>\n        <ul class=\"list-inline\" style=\"margin: 0 auto;\"  *ngIf=\"book && chapter && loaded\">\n            <li class=\"list-inline-item\" *ngIf=\"selected_page !== 'sermon-detail' && selected_page !== 'today-study-card' && selected_page !== 'journey' && selected_page !== 'study-download-detail'  \" (click)=\"gotobackPage()\" >\n                <ion-text class=\"bible-info\">{{book?.book_name}} {{chapter?.id ? chapter?.id : chapter.chapter_id}}</ion-text>\n            </li>\n            <li class=\"list-inline-item\" *ngIf=\"selected_page === 'sermon-detail' ||selected_page === 'today-study-card' || selected_page === 'journey' ||  selected_page === 'study-download-detail' \" (click)=\"gotobackPage()\"  style=\"cursor: pointer;\">\n                <ion-text class=\"bible-info\" *ngIf=\"book.name !== 'The Song of Solomon'\" >{{book.name}} {{start_chapter}}:{{start_verse}}-{{end_chapter}}:{{end_verse}}</ion-text>\n                <ion-text class=\"bible-info\" *ngIf=\"book.name == 'The Song of Solomon'\" >{{book.book_name_eng}} {{start_chapter}}:{{start_verse}}-{{end_chapter}}:{{end_verse}}</ion-text>\n            </li>\n        </ul>\n    </ion-buttons>\n\n\n    <ion-buttons slot=\"end\" style=\"margin-right: 30px;\">\n        <ion-skeleton-text class=\"play-info\"  *ngIf=\"book && chapter  && audioUrl && !loaded\" [animated]=\"true\" style=\"width: 15px;\"></ion-skeleton-text>\n        <ul   *ngIf=\"book && chapter && loaded && audioUrl\">\n            <li class=\"play-info\"  *ngIf=\"!audioService.bible_playing[audioUrl]\" (click)=\"playbible(false, audioUrl,'bible')\" style=\"text-align: center;align-items: center; list-style-type: none;\" >\n                <ion-icon style=\"padding-left: 2px;\" *ngIf=\"loaded\" name=\"play\"></ion-icon>\n            </li>\n             <li class=\"play-info\"  *ngIf=\"audioService.bible_playing[audioUrl]\" (click)=\"playbible(true, audioUrl, 'bible')\" style=\"text-align: center;align-items: center; list-style-type: none;\" >\n                <ion-icon *ngIf=\"loaded\" name=\"pause\"></ion-icon>\n            </li>\n        </ul>\n    </ion-buttons>\n\n   </ion-toolbar>\n</ion-header>\n\n<!--end mobile header-->\n<ion-content class=\"SwipeContent\" *ngIf=\"mobileView\" [scrollEvents]=\"true\" \n(ionScroll)=\"handleScroll($any($event))\"\n             appSwipe\n             (pinchIn)=\"zoomingIn($event)\"\n             (pinchOut)=\"zoomingOut($event)\"\n             (pinchRelease)=\"pinchEnd()\"\n             (swipeLeft)=\"playPrevVerse()\"\n             (swipeUp)=\"scrollingUp()\"\n             (swipeDown)=\"scrollingDown()\"\n             (swipeRight)=\"playNextVerse()\">\n    <div class=\"main\">\n        <div class=\"bookWrapper\" [style.display]=\"!displayScene ? 'none' : 'flex'\"\n             [style.left.px]=\"rightPosition\"\n             style=\"position: relative; z-index : 1;transition: all 0.5s cubic-bezier(0.89, -0.24, 1, 1) 0s;\">\n            <div class=\"scene \">\n                <div [style.font-size.px]=\"fontSize\" style=\"transition: 0.5s;\"class=\"chapterContent\" id=\"verses_content\" (scroll)=\"scrolled($event)\" *ngIf=\"!textChange && loaded\">\n                    <ul #content class=\"chapterContent__ul \">\n                        <li [class]=\"((theme ) ? list_class_ism : list_class) + selected[i] \"\n                            *ngFor=\"let row of verses; let i = index\"\n                            (click)=\"getTeachings(row, i)\">\n                            <sup class=\"count\">{{row.verseNumber}}</sup>\n                            {{row?.verse_text}}\n                        </li>\n                    </ul>\n                    <ion-card *ngIf=\" verses && verses.length === 0\"\n                              class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                              style=\"border-radius: 5px;\">\n                        <h4 class=\"heading4\">{{'BIBLE.no_verse' | translate}}</h4>\n                    </ion-card>\n                    <div (click)=\"gotoCopyrightPage(content_copyright)\" *ngIf=\"text_copyright && theme.ch_id === '1265'\" class=\"copyright-div ion-text-center\" style=\"position: center\">\n                        <p [innerHTML]=\"text_copyright.slice(0, 150)\">Copyright</p>\n                    </div>\n                </div>\n                <div [style.font-size.px]=\"fontSize\" style=\"transition: 0.5s;\"class=\"chapterContent\" id=\"verses_content\" (scroll)=\"scrolled($event)\" *ngIf=\"!textChange && !loaded\">\n                    <ul #content class=\"chapterContent__ul \">\n                        <li [class]=\"((theme ) ? list_class_ism : list_class) + selected[i] \"\n                            *ngFor=\"let row of verses; let i = index\"\n                            (click)=\"getTeachings(row, i)\">\n                            <ion-skeleton-text [animated]=\"true\" style=\"width: 100%;\"></ion-skeleton-text>\n                        </li>\n                    </ul>\n                  \n                </div>\n\n            </div>\n        </div>\n        <!-- <div class=\"bookWrapper next common--dark\" *ngIf=\"nextChapterSavedVerses.length > 0\"\n            style=\"z-index:2;\"\n             [style.left.px]=\"leftPosition\"\n             [style.opacity]=\"opacity\"\n             [style.display]=\"!display ? 'none' : 'block'\">\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item\" (click)=\"gotobackPage()\" *ngIf=\"book && chapter\">\n                    <ion-text class=\"bible-info\">{{book?.book_name}} {{chapter?.id ? chapter?.id : chapter.chapter_id\n                        }}\n                    </ion-text>\n                </li>\n            </ul>\n\n            <div class=\"sceneNext\">\n                    <div (click)=\"gotoCopyrightPage(content_copyright)\" *ngIf=\"text_copyright && theme.ch_id === '1265' && !bookAnimate\"\n                         class=\"copyright-div ion-text-center\" style=\"position: center\">\n                        <p [innerHTML]=\"text_copyright.slice(0, 150)\">Copyright</p>\n                    </div>\n                </div>\n            </div>\n\n        </div> -->\n       \n       \n        <!-- <div class=\"bookWrapper back common--dark\" *ngIf=\"prevChapterSavedVerses.length > 0\"\n             [style.display]=\"!displayPrevious ? 'none' : 'flex'\">\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item\" (click)=\"gotobackPage()\" *ngIf=\"book && chapter\">\n                    <ion-text class=\"bible-info\">{{book?.book_name}} {{chapter?.id ? chapter?.id : chapter.chapter_id\n                        }}\n                    </ion-text>\n                </li> -->\n                <!-- <li (click)=\"gotobackPage()\" *ngIf=\"current_language\" class=\"list-inline-item\">\n                    <ion-text class=\"bible-info\">{{current_language.language_family_name }}\n                        - {{current_volume.version_code}}\n                    </ion-text>\n                </li> -->\n            <!-- </ul>\n            <div class=\"sceneBack\">\n                <div [style.font-size.px]=\"fontSize\"\n                     class=\"chapterContent\" id=\"verses_content\" (scroll)=\"scrolled()\">\n                    <ul #content class=\"chapterContent__ul \">\n                        <li [class]=\"((theme ) ? list_class_ism : list_class) + selected[i] \"\n                            *ngFor=\"let row of prevChapterSavedVerses; let i = index\"\n                            (click)=\"getTeachings(row, i)\">\n                            <sup class=\"count\">{{row.verseNumber}}</sup>\n                            {{row?.verse_text | slice:0:25}}\n                        </li>\n                    </ul>\n                    <ion-card *ngIf=\" verses && verses.length === 0\"\n                              class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                              style=\"border-radius: 5px;\">\n                        <h4 class=\"heading4\">{{'BIBLE.no_verse' | translate}}</h4>\n                    </ion-card>\n                    <div (click)=\"gotoCopyrightPage(content_copyright)\"  *ngIf=\"text_copyright && theme.ch_id === '1265' && !bookAnimate\" class=\"copyright-div ion-text-center\" style=\"position: center\">\n                        <p [innerHTML]=\"text_copyright.slice(0, 150)\">Copyright</p>\n                    </div>                    \n                </div>\n\n            </div>\n        </div> -->\n    </div>\n</ion-content>\n\n\n<ion-content *ngIf=\"!mobileView\"\n             scroll-events=\"true\">\n    <div class=\"page-wrapper\">\n        <div class=\"app-container\">\n            <ul class=\"list-inline hide-mobile\">\n\n                <li class=\"list-inline-item\" (click)=\"gotobackPage()\" *ngIf=\"book && chapter\">\n                    <ion-text class=\"bible-info\">{{book?.book_name}} {{chapter?.id ? chapter?.id : chapter.chapter_id\n                        }}\n                        <!-- :{{book?.book_order}} -->\n                    </ion-text>\n                </li>\n                <!-- <li (click)=\"gotobackPage()\" *ngIf=\"current_language\" class=\"list-inline-item\">\n                    <ion-text class=\"bible-info\">{{current_language.language_family_name }}\n                        - {{current_volume.version_code}}\n                    </ion-text>\n                </li> -->\n            </ul>\n            <div class=\"chapterContent\" id=\"verses_content\" (scroll)=\"scrolled()\">\n                <ul #content class=\"chapterContent__ul\">\n                    <li [class]=\"((theme ) ? list_class_ism : list_class) + selected[i] \"\n                        *ngFor=\"let row of verses; let i = index\"\n                        (click)=\"getTeachings(row, i)\">\n                        <sup class=\"count\">{{row.verseNumber}}</sup>\n                        {{row?.verse_text}}\n                    </li>\n                </ul>\n                <ion-card *ngIf=\" verses && verses.length === 0\"\n                          class=\"ionCard ion-text-center ion-margin-bottom ionCard--mobile\"\n                          style=\"border-radius: 5px;\">\n                    <h4 class=\"heading4\">{{'BIBLE.no_verse' | translate}}</h4>\n                </ion-card>\n                <div (click)=\"gotoCopyrightPage(content_copyright)\" *ngIf=\"text_copyright && theme.ch_id === '1265'\" class=\"copyright-div ion-text-center\" style=\"position: center\">\n                    <p [innerHTML]=\"text_copyright.slice(0, 150)\">Copyright</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n\n<ion-footer class=\"bible-footer\" *ngIf=\"!hideHeaderFooter\"  style=\"transition: all 0.5s ease-out 0s;\">\n    <div class=\"app-container\">\n        <ion-toolbar class=\"bible-footer__toolbar\">\n            <ion-grid *ngIf=\"share\">\n                <div class=\"ion-text-center\">\n                    <ion-icon *ngIf=\"share\" (click)=\"close_tab()\" slot=\"icon-only\" name=\"arrow-down\"\n                              class=\"bible-footer__Icon\"></ion-icon>\n                </div>\n                <ion-row>\n                    <ion-col size=\"12\" size-sm=\"8\" class=\"ion-text-left\">\n                        <!--                        (click)=\"discover_tab = true; discuss_tab = false;\"-->\n                        <ion-button (click)=\"focus_tab = true; discuss_tab = false; discover_tab = false; togglePlayer('teachings', true);\"\n                                    class=\"bible-tabs\"\n                                    [ngClass]=\"focus_tab ? 'active' : ''\">{{'BIBLE.focus' | translate}}</ion-button>\n                        <!-- <ion-button *ngIf=\"theme.ch_id !=='1265'\" (click)=\"focus_tab = false; discuss_tab = true; discover_tab = false;\"\n                                    class=\"bible-tabs\"\n                                    [ngClass]=\"discuss_tab ? 'active' : ''\">{{'BIBLE.discuss' | translate}}</ion-button> -->\n                        <ion-button *ngIf=\"ism_teachings.length > 0\"\n                                    (click)=\"focus_tab = false; discuss_tab = false; discover_tab = true; togglePlayer('chapter', true);\"\n                                    class=\"bible-tabs\"\n                                    [ngClass]=\"discover_tab ? 'active' : ''\">{{'BIBLE.teachings' | translate}}</ion-button>\n                        <!--                        (click)=\"discover_tab = false; discuss_tab = true;\"-->\n                    </ion-col>\n                    <ion-col size=\"12\" size-sm=\"4\" class=\"ion-text-right  bible-toolbar-actions-btn\">\n                        <ion-button class=\"commonBtn--transparent-darkOutline commonBtn--fullRound commonBtn--small\"\n                                    (click)=\"openModal()\">\n                            <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n                        </ion-button>\n                        <ion-button (click)=\"highlightVerse()\"\n                                    class=\"commonBtn--transparent-darkOutline commonBtn--fullRound commonBtn--small\">\n                            <ion-icon slot=\"icon-only\" name=\"brush\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div *ngIf=\"share && !discuss_tab && !discover_tab\" class=\"focus-div ion-text-left\"\n                 style=\"height: 153.2px;\">\n                <div class=\"bible-footer__content focus\">\n                    <p *ngIf=\"teaching_tab\">{{'BIBLE.teachings' | translate}}</p>\n                    <p *ngIf=\"selected_verse\">{{selected_verse}}</p>\n                    <div *ngIf=\"teaching_tab\">\n                        <!--                            <ion-card class=\"ionCard ionCard&#45;&#45;noPadding ionCard&#45;&#45;mobile ion-no-margin\">-->\n                        <!--                                <video *ngIf=\"teaching_video && teaching_video != ''\" width=\"100%\" height=\"100%\"-->\n                        <!--                                       controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\">-->\n                        <!--                                    <source [src]=\"teaching_video\"-->\n                        <!--                                            type=\"video/mp4\">-->\n                        <!--                                </video>-->\n                        <!--                            </ion-card>-->\n                        <p *ngIf=\"teaching_desc && teaching_desc != ''\">{{teaching_desc}}</p>\n                    </div>\n                </div>\n            </div>\n            <!--            chapter audio-->\n            <!-- <div *ngIf=\"!teaching_tab && !discuss_tab && !discover_tab && !hideAudioPlayer \">\n                <div class=\"audioPlayer\" *ngIf=\"audioUrl\">\n                    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text class=\"audioPlayer__text\">{{current_duration ? current_duration : '0:00'}}\n                            </ion-text>\n                        </ion-col>\n                        <ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">\n                            <ion-range class=\"range range--audioPlayer\" #range [(ngModel)]=\"progress\" max=\"100\"\n                                       (touchend)=\"seek('chapter')\"\n                                       (mouseup)=\"seek('chapter')\"></ion-range>\n                        </ion-col>\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text\n                                    class=\"audioPlayer__text\">{{current_total_duration ? current_total_duration :\n                                '0:00'}}\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"backward('chapter')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">\n                            <ion-button (click)=\"playPrevVerse()\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-backward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('chapter',false)\"\n                                        *ngIf=\"!isPlaying\">\n                                <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\" *ngIf=\"showLoader\">\n                                <ion-spinner align=\"center\" name=\"bubbles\"></ion-spinner>\n                                </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('chapter',true)\"\n                                        *ngIf=\"isPlaying && !showLoader\">\n                                <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n                            </ion-button>\n                            <ion-button (click)=\"playNextVerse()\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-forward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"forward('chapter')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                    \n                    <div   *ngIf=\"audio_copyright && theme.ch_id === '1265'\" class=\"audio-copyright-div ion-text-center\" style=\"position: center\">\n                        <div  [innerHTML]=\"audio_copyright.slice(0, 70)\"></div>\n                    </div>\n                </div>\n\n                <h4 *ngIf=\"!audioUrl\" class=\"heading4 ion-text-center\">{{'BIBLE.no_audio' | translate}}</h4>\n            </div> -->\n\n            <!--            teaching audio-->\n            <div *ngIf=\"teaching_tab && !discuss_tab && !discover_tab\">\n                <div class=\"audioPlayer\"\n                     *ngIf=\"!discuss_tab && teaching_tab && teaching_audio && teaching_audio != ''\">\n                    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text class=\"audioPlayer__text\">{{current_duration_teaching ?\n                                current_duration_teaching\n                                : '0:00'}}\n                            </ion-text>\n                        </ion-col>\n                        <ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">\n                            <ion-range class=\"range range--audioPlayer\" #range_teachings\n                                       [(ngModel)]=\"progress_teachings\" max=\"100\"\n                                       (touchend)=\"seek('teachings')\"\n                                       (mouseup)=\"seek('teachings')\"></ion-range>\n                        </ion-col>\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text\n                                    class=\"audioPlayer__text\">{{current_total_duration_teaching ?\n                                current_total_duration_teaching : '0:00'}}\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"backward('teachings')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">\n                            <ion-button class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-backward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('teachings', false)\"\n                                        *ngIf=\"!isPlaying_teachings\">\n                                <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('teachings',true)\"\n                                        *ngIf=\"isPlaying_teachings\">\n                                <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-forward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                        <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"forward('teachings')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                    <div    *ngIf=\"audio_copyright && theme.ch_id === '1265' \" class=\"audio-copyright-div ion-text-center\" style=\"position: center\">\n                        <div [innerHTML]=\"audio_copyright.slice(0, 70)\"></div>\n                      </div>\n                </div>\n                <h4 *ngIf=\"!teaching_audio\" class=\"heading4\">{{'BIBLE.no_audio' | translate}}</h4>\n            </div>\n            \n            <div *ngIf=\"discuss_tab && ch_id !=='1265'\" class=\"discuss-div\" style=\"height: 250px;\">\n                <div class=\"bible-footer__content discuss\">\n                    <ion-list class=\"chatbox--body\" lines=\"none\">\n                        <ion-item class=\"ionMedia\" *ngFor=\"let message of current_verse_messages\"\n                                  [ngClass]=\"current_user && (current_user.id === message.account_donor_id) ? 'ionMedia__media--left' : 'ionMedia__media--right'\">\n                            <div class=\"ionMedia__media\">\n                                <ion-avatar slot=\"start\">\n                                    <img src=\"../../assets/img/user_icon.png\">\n                                </ion-avatar>\n                            </div>\n                            <ion-label class=\"ion-text-wrap\">\n                                <p *ngIf=\"current_user\" class=\"ionMedia__text\">\n                                    <b>{{ message.account_donor_id === current_user.id ? 'Me:' : message.first_last_name }}</b>\n                                </p>\n                                <p *ngIf=\"!current_user\" class=\"ionMedia__text\">\n                                    <b>{{message.first_last_name }}</b></p>\n                                <p class=\"ionMedia__text ionMedia__text--left ionMedia__text--darkBg\">{{message.message_text}}</p>\n                                <p class=\"ionMedia__text\">{{appService.getDateTimeFormat(message.created_at)}}</p>\n                            </ion-label>\n                        </ion-item>\n\n                        <p class=\"ion-text-center\" style=\"color: grey;\" *ngIf=\"current_verse_messages.length === 0\">\n                            <small>{{'BIBLE.no_conversation' | translate}}\n                            </small>\n                        </p>\n\n\n                    </ion-list>\n\n                </div>\n                <div class=\"chatbox--footer\">\n                    <ion-item class=\"inputField inputField--gray inputField--chatBox\" lines=\"none\"\n                              style=\"--inner-padding-end: 0;\">\n                        <ion-input autocapitalize=\"sentences\" [(ngModel)]=\"message\" class=\"inputField__area\" inputmode=\"text\"\n                                   placeholder=\"{{'BIBLE.contribute' | translate}}...\"></ion-input>\n                        <ion-button (click)=\"save_message()\" class=\"commonBtn--transparent text-gray\">\n                            <ion-icon class=\"text-gray\" name=\"send\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </div>\n            </div>\n\n            <!--            DISCOVER TAB-->\n            <!-- <div *ngIf=\"discover_tab\" class=\"discover-div\" style=\"height: 250px;\">\n                <div class=\"bible-footer__content discover\">\n                    <div *ngFor=\"let teaching of ism_teachings\">\n                    <p *ngIf=\"teaching.ism_teaching_verse && teaching.ism_teaching_verse != ''\">{{teaching.ism_teaching_verse}}</p>\n                    <p *ngIf=\"teaching.ism_teaching_title && teaching.ism_teaching_title != ''\">{{teaching.ism_teaching_title}}</p>\n                    <div *ngIf=\"discover_tab\">\n                        <ion-card class=\"ionCard ionCard--noPadding ionCard--mobile ion-no-margin\"\n                                  style=\"margin-bottom: 0\">\n                            <img *ngIf=\"teaching.ism_teaching_video == ''\" src=\"../../assets/img/live_stream_bg_2.jpg\"/>\n                            <iframe *ngIf=\"teaching.ism_teaching_video !== ''\" class=\"embed-responsive-item\" width=\"100%\"\n                                    height=\"100%\"\n                                    [src]=\"teaching.ism_teaching_video\"\n                                    frameborder=\"0\" allowfullscreen=\"\"></iframe>\n                        </ion-card>\n                    </div>\n                        <br>\n                </div>\n                </div>\n            </div> -->\n\n            <div *ngIf=\"discover_tab && ttb_teaching_data\" class=\"discover-div\" style=\"height: 250px;\">\n\n                <h3 class=\"heading4\" style=\"margin-top: 0;\">{{ttb_teaching_data.name ? ttb_teaching_data.name : 'Title N/A'}}</h3>\n                <div class=\"ion-text-center\">\n                    <img [src]=\"ttb_bible_badge\" width=\"145\" alt=\"\">\n                </div>\n\n\n                <div class=\"audioPlayer\" *ngIf=\"teaching_audio\">\n                    <!-- <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text class=\"audioPlayer__text\">{{current_duration_teaching ? current_duration_teaching : '0:00'}}\n                            </ion-text>\n                        </ion-col>\n                        <ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">\n                            <ion-range class=\"range range--audioPlayer\" #range_teachings [(ngModel)]=\"progress_teachings\" max=\"100\"\n                                       (touchend)=\"seek('teachings')\"\n                                       (mouseup)=\"seek('teachings')\"></ion-range>\n                        </ion-col>\n                        <ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">\n                            <ion-text *ngIf=\"!isPlaying_teachings || audioPlay\"\n                                      class=\"audioPlayer__text\">{{current_total_duration_teaching ? current_total_duration_teaching :\n                                '0:00'}}\n                            </ion-text>\n                            <ion-spinner *ngIf=\"isPlaying_teachings && !audioPlay\" style=\"position: relative;top: 6px;\" align=\"center\" name=\"dots\"></ion-spinner>\n\n                        </ion-col>\n                    </ion-row> -->\n                    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n                        <!-- <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"backward('teachings')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col> -->\n                        <ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">\n                            <!-- <ion-button (click)=\"playPrevVerse()\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-backward\" size=\"small\"></ion-icon>\n                            </ion-button> -->\n\n\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                            (click)=\"playbible(false, teaching_audio, 'study')\"\n                            *ngIf=\"!audioService.bible_playing[teaching_audio]\">\n                                <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                            (click)=\"playbible(true, teaching_audio, 'study')\"\n                            *ngIf=\"audioService.bible_playing[teaching_audio]\">\n                                <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n                            </ion-button>\n\n\n\n                            <!-- <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('teachings',false)\"\n                                        *ngIf=\"!isPlaying_teachings\">\n                                <ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>\n                            </ion-button>\n                            <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\"\n                                        (click)=\"togglePlayer('teachings',true)\"\n                                        *ngIf=\"isPlaying_teachings && audioPlay\">\n                                <ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>\n                            </ion-button> -->\n                            <!-- <ion-button class=\"commonBtn--dark commonBtn--fullRound commonBtn--small\" *ngIf=\"isPlaying_teachings && !audioPlay\">\n                                <ion-spinner align=\"center\" name=\"bubbles\"></ion-spinner>\n                            </ion-button>\n                            <ion-button (click)=\"playNextVerse()\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"skip-forward\" size=\"small\"></ion-icon>\n                            </ion-button> -->\n                        </ion-col>\n                        <!-- <ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">\n                            <ion-button (click)=\"forward('teachings')\"\n                                        class=\"commonBtn--transparent commonBtn--small\">\n                                <ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>\n                            </ion-button>\n                        </ion-col> -->\n                    </ion-row>\n                </div>\n            </div>\n\n\n            <!--<div class=\"ion-text-center\">-->\n            <!--<ion-icon *ngIf=\"share\" (click)=\"close_tab()\" slot=\"icon-only\" name=\"arrow-down\"-->\n            <!--class=\"bible-footer__Icon\"></ion-icon>-->\n            <!--</div>-->\n            <!--<div *ngIf=\"share\" class=\"bible-footer__upperSection\">-->\n            <!--<h3 *ngIf=\"teaching_tab\" class=\"heading3 ion-text-center\">Teachings</h3>-->\n            <!--<ul class=\"list-inline ion-text-center\" style=\"margin: 0 0 15px;\">-->\n            <!--<li class=\"list-inline-item\">-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;transparent-darkOutline commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;small\"-->\n            <!--(click)=\"openModal()\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</li>-->\n            <!--<li class=\"list-inline-item\">-->\n            <!--<ion-button (click)=\"gotoChat()\"-->\n            <!--class=\"commonBtn&#45;&#45;transparent-darkOutline commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</li>-->\n            <!--<li class=\"list-inline-item\">-->\n            <!--<ion-button (click)=\"highlightVerse()\"-->\n            <!--class=\"commonBtn&#45;&#45;transparent-darkOutline commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"brush\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</li>-->\n            <!--<li *ngIf=\"!teaching_tab\" class=\"list-inline-item\" style=\"vertical-align: middle;\">-->\n            <!--<h3 class=\"heading3\" style=\"margin: 8px 0 0;\">{{book?.book_name}}-->\n            <!--{{chapter?.id}}:{{selected_verse_id}}</h3>-->\n            <!--</li>-->\n            <!--<li *ngIf=\"teaching_icon\" class=\"list-inline-item\" style=\"vertical-align: middle;\"-->\n            <!--(click)=\"teaching_tab = true; togglePlayer('chapter', true)\">-->\n            <!--<h4 class=\"heading3\" style=\"margin: 8px 0 0;\">Discover</h4>-->\n            <!--</li>-->\n            <!--</ul>-->\n            <!--<p *ngIf=\"selected_verse\">{{selected_verse}}</p>-->\n            <!--<div class=\"bible-footer__content\">-->\n            <!--<div *ngIf=\"teaching_tab\">-->\n            <!--<ion-card class=\"ionCard ionCard&#45;&#45;noPadding ionCard&#45;&#45;mobile ion-no-margin\">-->\n            <!--<video *ngIf=\"teaching_video && teaching_video != ''\" width=\"100%\" height=\"100%\"-->\n            <!--controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\">-->\n            <!--<source [src]=\"teaching_video\"-->\n            <!--type=\"video/mp4\">-->\n            <!--</video>-->\n            <!--</ion-card>-->\n            <!--<p *ngIf=\"teaching_desc && teaching_desc != ''\">{{teaching_desc}}</p>-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--</div>-->\n\n            <!--&lt;!&ndash;            chapter audio&ndash;&gt;-->\n            <!--<div *ngIf=\"!teaching_tab\">-->\n            <!--<div class=\"audioPlayer\" *ngIf=\"audioUrl\">-->\n            <!--<ion-row class=\"ion-justify-content-center ion-align-items-center\">-->\n            <!--<ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">-->\n            <!--<ion-text class=\"audioPlayer__text\">{{current_duration ? current_duration : '0:0'}}-->\n            <!--</ion-text>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">-->\n            <!--<ion-range class=\"range range&#45;&#45;audioPlayer\" #range [(ngModel)]=\"progress\" max=\"100\"-->\n            <!--(touchend)=\"seek('chapter')\"-->\n            <!--(mouseup)=\"seek('chapter')\"></ion-range>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">-->\n            <!--<ion-text-->\n            <!--class=\"audioPlayer__text\">{{current_total_duration ? current_total_duration :-->\n            <!--'0:0'}}-->\n            <!--</ion-text>-->\n            <!--</ion-col>-->\n            <!--</ion-row>-->\n            <!--<ion-row class=\"ion-justify-content-center ion-align-items-center\">-->\n            <!--<ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">-->\n            <!--<ion-button (click)=\"backward('chapter')\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">-->\n            <!--<ion-button (click)=\"playPrevVerse()\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"skip-backward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;dark commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;md\"-->\n            <!--(click)=\"togglePlayer('chapter',false)\"-->\n            <!--*ngIf=\"!isPlaying\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;dark commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;md\"-->\n            <!--(click)=\"togglePlayer('chapter',true)\"-->\n            <!--*ngIf=\"isPlaying\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button (click)=\"playNextVerse()\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"skip-forward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">-->\n            <!--<ion-button (click)=\"forward('chapter')\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--</ion-row>-->\n            <!--</div>-->\n\n            <!--<h4 *ngIf=\"!audioUrl\" class=\"heading4\">No Audio Available</h4>-->\n            <!--</div>-->\n\n            <!--&lt;!&ndash;            teaching audio&ndash;&gt;-->\n            <!--<div *ngIf=\"teaching_tab\">-->\n\n            <!--<div class=\"audioPlayer\" *ngIf=\"teaching_tab && teaching_audio && teaching_audio != ''\">-->\n            <!--<ion-row class=\"ion-justify-content-center ion-align-items-center\">-->\n            <!--<ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">-->\n            <!--<ion-text class=\"audioPlayer__text\">{{current_duration_teaching ? current_duration_teaching-->\n            <!--: '0:0'}}-->\n            <!--</ion-text>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"8\" sizeLg=\"10\" class=\"ion-text-center\">-->\n            <!--<ion-range class=\"range range&#45;&#45;audioPlayer\" #range_teachings-->\n            <!--[(ngModel)]=\"progress_teachings\" max=\"100\"-->\n            <!--(touchend)=\"seek('teachings')\"-->\n            <!--(mouseup)=\"seek('teachings')\"></ion-range>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"2\" sizeLg=\"auto\" class=\"ion-text-center\">-->\n            <!--<ion-text-->\n            <!--class=\"audioPlayer__text\">{{current_total_duration_teaching ?-->\n            <!--current_total_duration_teaching : '0:0'}}-->\n            <!--</ion-text>-->\n            <!--</ion-col>-->\n            <!--</ion-row>-->\n            <!--<ion-row class=\"ion-justify-content-center ion-align-items-center\">-->\n            <!--<ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">-->\n            <!--<ion-button (click)=\"backward('teachings')\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"rewind\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"8\" sizeLg=\"6\" class=\"ion-text-center\">-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"skip-backward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;dark commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;md\"-->\n            <!--(click)=\"togglePlayer('teachings', false)\"-->\n            <!--*ngIf=\"!isPlaying_teachings\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"play\" style=\"padding-left: 4px;\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;dark commonBtn&#45;&#45;fullRound commonBtn&#45;&#45;md\"-->\n            <!--(click)=\"togglePlayer('teachings',true)\"-->\n            <!--*ngIf=\"isPlaying_teachings\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"pause\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--<ion-button class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"skip-forward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--<ion-col size=\"2\" sizeLg=\"3\" class=\"ion-text-center\">-->\n            <!--<ion-button (click)=\"forward('teachings')\" class=\"commonBtn&#45;&#45;transparent commonBtn&#45;&#45;small\">-->\n            <!--<ion-icon slot=\"icon-only\" name=\"fastforward\" size=\"small\"></ion-icon>-->\n            <!--</ion-button>-->\n            <!--</ion-col>-->\n            <!--</ion-row>-->\n            <!--</div>-->\n            <!--<h4 *ngIf=\"!teaching_audio\" class=\"heading4\">No Audio Available</h4>-->\n            <!--</div>-->\n        </ion-toolbar>\n    </div>\n</ion-footer>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var AppService = /** @class */ (function () {
    function AppService() {
    }
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
    AppService.prototype.getGroupsTimeFormat = function (date) {
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
    };
    AppService.prototype.getTimeFormat = function (time) {
        if (localStorage.getItem('timeFormat') == '12') {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('hh:mm A');
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).format('HH:mm');
        }
    };
    AppService.prototype.getDateFormat = function (date) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
        if (dateFormat.includes('dd')) {
            dateFormat = dateFormat.replace('dd', 'DD');
        }
        if (dateFormat.includes('yyyy')) {
            dateFormat = dateFormat.replace('yyyy', 'YYYY');
        }
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(dateFormat);
    };
    AppService.prototype.getDateTimeFormat = function (dateAndTime) {
        var dateFormat = localStorage.getItem('dateFormat').split(' ')[0];
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
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/bible-chapter/bible-chapter.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/bible-chapter/bible-chapter.module.ts ***!
  \*******************************************************/
/*! exports provided: BibleChapterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleChapterPageModule", function() { return BibleChapterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bible_chapter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bible-chapter.page */ "./src/app/bible-chapter/bible-chapter.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _common_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/swipe/swipe.module */ "./src/app/common/swipe/swipe.module.ts");












var routes = [
    {
        path: '',
        component: _bible_chapter_page__WEBPACK_IMPORTED_MODULE_6__["BibleChapterPage"]
    }
];
var BibleChapterPageModule = /** @class */ (function () {
    function BibleChapterPageModule() {
    }
    BibleChapterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
                // BibleChapterTabsRouterModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
                _common_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_11__["SwipeModule"]
            ],
            declarations: [_bible_chapter_page__WEBPACK_IMPORTED_MODULE_6__["BibleChapterPage"]],
            providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]]
        })
    ], BibleChapterPageModule);
    return BibleChapterPageModule;
}());



/***/ }),

/***/ "./src/app/bible-chapter/bible-chapter.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/bible-chapter/bible-chapter.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.SwipeContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: auto;\n}\n.bookWrapper {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n  padding: 15px;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  margin: 15px 15px 30px;\n  border-radius: 15px;\n  width: 92%;\n  height: 100%;\n  inset: 0;\n  -webkit-transition: all 0.5s ease-out 0s;\n  transition: all 0.5s ease-out 0s;\n}\n.bookWrapper.back {\n  background: #ffffff;\n}\n.bookWrapper.next, .bookWrapper.back {\n  -webkit-transition: all 0.5s ease-out 0s;\n  transition: all 0.5s ease-out 0s;\n  background: #ffffff;\n}\n.bookChange {\n  -webkit-animation: rotation 15s;\n          animation: rotation 15s;\n}\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateY(359deg);\n            transform: rotateY(359deg);\n  }\n}\n@keyframes rotation {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateY(359deg);\n            transform: rotateY(359deg);\n  }\n}\n.book {\n  position: relative;\n}\n.page {\n  cursor: pointer;\n  color: black;\n}\n.page.active {\n  z-index: 1;\n}\n.page.flipped {\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n}\n.page.flipped:last-of-type {\n  z-index: 1;\n}\n.elementToFadeInAndOut {\n  -webkit-animation: fadeinout 10s linear forwards;\n          animation: fadeinout 10s linear forwards;\n}\n.audio-copyright-div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 40px;\n  overflow: hidden;\n}\n.audio-copyright-div ::ng-deep p {\n  padding: 0;\n  text-align: center;\n  color: #64707A !important;\n  font-size: x-small;\n  margin: 0;\n}\n@-webkit-keyframes fadeinout {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeinout {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.flip-card {\n  background-color: transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.flip-card-inner {\n  -webkit-transition: -webkit-transform 2s;\n  transition: -webkit-transform 2s;\n  transition: transform 2s;\n  transition: transform 2s, -webkit-transform 2s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n.mtac {\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n}\n.mtdac {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.flip-card-front, .flip-card-back {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.flip-card-back {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n@-webkit-keyframes slideRight {\n  100% {\n    left: 0;\n  }\n}\n@keyframes slideRight {\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes slideLeft {\n  100% {\n    right: 0;\n  }\n}\n@keyframes slideLeft {\n  100% {\n    right: 0;\n  }\n}\n.chapterContent {\n  font-weight: 400;\n  position: relative;\n}\n.chapterContent__ul {\n  padding-left: 0;\n  list-style: none;\n  line-height: 30px;\n  color: #64707A;\n  font-weight: 300;\n  counter-reset: section;\n  margin-top: 0;\n}\n.chapterContent__li {\n  padding: 6px 10px;\n}\n.chapterContent__li:hover, .chapterContent__li.selected {\n  background: #faebd7;\n}\n.chapterContent__li .count {\n  font-weight: normal;\n  font-size: 12px;\n}\n.chapterContent__liIsm {\n  padding: 6px 1px;\n  display: inline;\n}\n.chapterContent__liIsm.selected {\n  background: var(--primary-color, #302F34);\n  color: #d3d3d3;\n}\n.chapterContent__liIsm .count {\n  font-weight: normal;\n  font-size: 12px;\n}\n.bible-chatbox {\n  overflow-y: auto;\n  min-height: 70px;\n  max-height: 100px;\n}\n.bible-footer {\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n  text-align: center;\n  padding: 12px 10px 4px;\n}\n.bible-footer__toolbar {\n  --border-width: 0 !important;\n  --background: transparent;\n}\n.bible-footer__upperSection {\n  padding-bottom: 2px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 8px;\n}\n.bible-footer__row {\n  --ion-grid-columns: 12;\n}\n.bible-footer__content {\n  text-align: left;\n  font-weight: 400;\n  max-height: 50vh;\n  overflow-y: auto;\n}\n@media screen and (max-width: 992px) {\n  .bible-footer__content {\n    max-height: 150px;\n    height: 150px;\n  }\n  .bible-footer__content.discover {\n    max-height: 220px;\n    height: 220px;\n  }\n  .bible-footer__content.discuss {\n    max-height: 190px;\n    height: 190px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .bible-footer {\n    display: block;\n  }\n}\n.bible-footer__content p {\n  margin: 0 4px;\n  color: var(--primary-color, #302F34);\n}\n.bible-footer:before {\n  content: none !important;\n}\n.audioPlayer:before {\n  content: none !important;\n}\n.audioPlayer__text {\n  color: #BABABA;\n  font-size: 14px;\n}\n.audioPlayer .commonBtn--dark {\n  --background: #302F34;\n  --border-color: #302F34;\n  --background-hover: #302F34;\n  --color-activated: #ffffff;\n  --background-activated: #302F34;\n}\n.audioPlayer .commonBtn--transparent {\n  --color: #302F34;\n  --color-activated: #302F34;\n}\n.bible-info {\n  color: black;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px;\n  padding: 4px 10px;\n  margin-bottom: 0;\n}\n.bible-tabs {\n  font-weight: 600;\n  font-size: 15px;\n  --color: black;\n  --color-activated: black;\n  --color-focused: black;\n  --color-hover: black;\n  border-bottom: 2px solid #00000000;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-color: transparent;\n  --box-shadow: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin-right: 15px;\n}\n.bible-tabs:hover, .bible-tabs:focus, .bible-tabs:active, .bible-tabs.active {\n  border-bottom-color: black;\n}\n@media screen and (max-width: 768px) {\n  .bible-toolbar-actions-btn {\n    position: absolute;\n    top: -5px;\n    width: 100px !important;\n    right: 0;\n    padding: 0;\n  }\n}\n.copyright-div {\n  margin: 30px;\n}\n.copyright-div p {\n  padding: 0px;\n  text-align: center;\n  color: #64707A;\n  font-size: x-small;\n}\n.chapterContent__ul.page {\n  display: none;\n}\n.chapterContent__ul.page.active {\n  display: block;\n}\n.commonBtn--transparent-darkOutline {\n  --color: var(--primary-color, #302F34);\n}\n.heading4 {\n  font-size: 14px;\n  color: black;\n}\n.play-info {\n  color: black;\n  border: 1px solid #E3E3E3;\n  border-radius: 50px;\n  padding: 4px;\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 35px;\n  width: 35px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2JpYmxlLWNoYXB0ZXIvYmlibGUtY2hhcHRlci5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3RkaW4iLCJzcmMvYXBwL2JpYmxlLWNoYXB0ZXIvYmlibGUtY2hhcHRlci5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUNqT0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSxZQUFBO0FDS0Y7QURGQTtFQUNFLGtCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0FDSUY7QURHQTtFQUdFLG1CQUFBO0FDRkY7QURJQTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxtQkFBQTtBQ0RGO0FEOEJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQzNCRjtBRDhCQTtFQUNFO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQzNCRjtFRDZCQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUMzQkY7QUFDRjtBRHFCQTtFQUNFO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQzNCRjtFRDZCQTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUMzQkY7QUFDRjtBRCtCQTtFQUNFLGtCQUFBO0FDN0JGO0FEbUNBO0VBQ0UsZUFBQTtFQUVBLFlBQUE7QUNqQ0Y7QURpRUE7RUFDRSxVQUFBO0FDOURGO0FEaUVBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBQzlERjtBRGlFQTtFQUNFLFVBQUE7QUM5REY7QURrRUE7RUFDRSxnREFBQTtVQUFBLHdDQUFBO0FDL0RGO0FEa0VBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUMvREY7QURrRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQy9ERjtBRG9FQTtFQUNBO0lBQUssVUFBQTtFQ2hFSDtFRGlFRjtJQUFPLFVBQUE7RUM5REw7QUFDRjtBRDJEQTtFQUNBO0lBQUssVUFBQTtFQ2hFSDtFRGlFRjtJQUFPLFVBQUE7RUM5REw7QUFDRjtBRGlFQTtFQUNFLDZCQUFBO0VBR0EsMkJBQUE7VUFBQSxtQkFBQTtBQ2pFRjtBRG9FQTtFQUtFLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSx3QkFBQTtFQUFBLDhDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ3JFRjtBRHlFQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUN0RUY7QUR3RUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDckVGO0FENEVBO0VBSUUsbUNBQUE7RUFDQSwyQkFBQTtBQzVFRjtBRG9GQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFHQSxrQ0FBQTtVQUFBLDBCQUFBO0FDbkZGO0FEb0hBO0VBQ0U7SUFBTyxPQUFBO0VDaEhQO0FBQ0Y7QURrSEE7RUFDRTtJQUFPLE9BQUE7RUMvR1A7QUFDRjtBRGlIQTtFQUNFO0lBQU8sUUFBQTtFQzlHUDtBQUNGO0FEZ0hBO0VBQ0U7SUFBTyxRQUFBO0VDN0dQO0FBQ0Y7QUQ4R0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDNUdGO0FEcUhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNuSEo7QURzSEU7RUFDRSxpQkFBQTtBQ3BISjtBRHFISTtFQUNFLG1CQUFBO0FDbkhOO0FEcUhJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDbkhOO0FENEhFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDMUhKO0FEMkhJO0VBQ0UseUNEblNVO0VDb1NWLGNBQUE7QUN6SE47QURzSUk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNwSU47QUQySUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN4SUY7QUQySUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFDQSxzQkFBQTtBQ3pJRjtBRDBJRTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUN4SUo7QUQwSUU7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUN4SUo7QUQwSUU7RUFDRSxzQkFBQTtBQ3hJSjtBRDBJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDeElKO0FDMkRFO0VGeUVBO0lBT0ksaUJBQUE7SUFDQSxhQUFBO0VDdklKO0VEd0lJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDdElOO0VEd0lJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDdElOO0FBQ0Y7QUM2Q0U7RUZ1REY7SUFzQ0ksY0FBQTtFQ3RJRjtBQUNGO0FEd0lBO0VBQ0UsYUFBQTtFQUNBLG9DRDNXYztBRXNPaEI7QUR3SUE7RUFDRSx3QkFBQTtBQ3JJRjtBRHdJQTtFQUNFLHdCQUFBO0FDcklGO0FEeUlFO0VBQ0UsY0RqWFM7RUNrWFQsZUFBQTtBQ3RJSjtBRHdJRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUN0SUo7QUR3SUU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FDdElKO0FEMElBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDdklGO0FEMElBO0VBQ0UsZ0JBQUE7RUFDQSxlRGhMbUI7RUNxTG5CLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0R4THFCO0VDeUxyQix5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzNJRjtBRDhJQTtFQUtFLDBCQUFBO0FDL0lGO0FDZEU7RUZnS0E7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDOUlGO0FBQ0Y7QURpSkE7RUFDQSxZQUFBO0FDL0lBO0FEa0pBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0lGO0FEaUpBO0VBQ0UsYUFBQTtBQzlJRjtBRGdKQTtFQUNFLGNBQUE7QUM3SUY7QUQrSUE7RUFDRSxzQ0FBQTtBQzVJRjtBRCtJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDNUlGO0FEK0lBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUM1SUYiLCJmaWxlIjoic3JjL2FwcC9iaWJsZS1jaGFwdGVyL2JpYmxlLWNoYXB0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgZmlsZSBjb250YWlucyBhbGwgYXBwbGljYXRpb24td2lkZSBTYXNzIHZhcmlhYmxlcy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIENvbG9ycyAqL1xuLy9kZWZhdWx0IHByaW1hcnktY29sb3IgaXMgIzMwMkYzNFxuXG4kcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IsICNBREFDQUUpO1xuJGRlZmF1bHQtcHJpbWFyeS1jb2xvcjogIzMwMkYzNDtcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRoZWFkZXItYmctY29sb3I6ICNEOEQ4RDg7XG4kaGVhZGluZy1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kaGVhZGluZy1jb2xvci1saWdodDogIzM4MzczQztcbiRncmF5LWxpZ2h0OiAjQkFCQUJBO1xuJGhhbGYtd2hpdGU6ICNGMUYxRjE7XG4kYmx1ZS1jb2xvcjogIzQyNjdCMjtcbiRkYXJrLWdyYXktY29sb3I6ICMyOTI5Mjk7XG4kYmxhY2stMm5kOiAjMjAyMDIwO1xuJGJvdHRvbS1mb290ZXItYmctY29sb3I6ICMyNTI0Mjc7XG4kYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRyYW5zcGFyZW50LWNvbG9yOiAjMDAwMDAwMDA7XG4kZm9vdGVyLWJnLWNvbG9yOiAkZGVmYXVsdC1wcmltYXJ5LWNvbG9yO1xuJGZvb3Rlci1oZWFkaW5nLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kbWFpbi1iZy1jb2xvcjogJHdoaXRlLWNvbG9yO1xuXG4kZ3JheS1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuLy9uZXcgcGxheWVyIHZhcmlhYmxlc1xuXG4kcGxheWVyLXByaW1hcnktY29sb3I6IHZhcigtLXBsYXllci1wcmltYXJ5LWNvbG9yLCAjRjJGMkYyKTtcbiRwbGF5ZXItc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItc2Vjb25kYXJ5LWNvbG9yLCAjMjMyMzIzKTtcbiRwbGF5ZXItdGV4dC1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtY29sb3IsICMxMTZFRkYpO1xuJHBsYXllci10ZXh0LXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yLCAjMDAwMDAwKTtcbiRwbGF5ZXItYnV0dG9uLWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLWNvbG9yLCAjMEE2NUZGKTtcbiRwbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGxheWVyLWJ1dHRvbi1zZWNvbmRhcnktY29sb3IsICMyNjMxNDEpO1xuXG4kY29sb3JzOiAoXG4gICAgICAgICd3aGl0ZSc6ICR3aGl0ZS1jb2xvcixcbiAgICAgICAgJ2hlYWRlci1iZy1jb2xvcic6ICRoZWFkZXItYmctY29sb3IsXG4gICAgICAgICdmb290ZXItYmctY29sb3InOiAkZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci1iZy1jb2xvcic6ICRib3R0b20tZm9vdGVyLWJnLWNvbG9yLFxuICAgICAgICAnYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yJzogJGJvdHRvbS1mb290ZXItdGV4dC1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1oZWFkaW5nLWNvbG9yJzogJGZvb3Rlci1oZWFkaW5nLWNvbG9yLFxuICAgICAgICAnbWFpbi1iZy1jb2xvcic6ICRtYWluLWJnLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvcic6ICRoZWFkaW5nLWNvbG9yLFxuICAgICAgICAnaGVhZGluZy1jb2xvci1saWdodCc6ICRoZWFkaW5nLWNvbG9yLWxpZ2h0LFxuICAgICAgICAnZ3JheS1jb2xvcic6JGdyYXktY29sb3IsXG4gICAgICAgICdncmF5LWxpZ2h0JzogJGdyYXktbGlnaHQsXG4gICAgICAgICdkYXJrLWdyYXknOiAkZGFyay1ncmF5LWNvbG9yLFxuICAgICAgICAnaGFsZi13aGl0ZSc6JGhhbGYtd2hpdGUsXG4gICAgICAgICdibHVlLWNvbG9yJzokYmx1ZS1jb2xvcixcbiAgICAgICAgJ2JsYWNrLTJuZCc6ICRibGFjay0ybmQsXG4gICAgICAgICd0cmFuc3BhcmVudCc6ICR0cmFuc3BhcmVudC1jb2xvcixcbik7XG5cbi8vIEJvZHkgZm9udFxuXG4kYm9keS1mb250LXNpemU6IDE4cHg7XG4keC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTogMTRweDtcbiRib2R5LWZvbnQtc3R5bGU6IG5vcm1hbDtcbiRib2R5LWZvbnQtdmFyaWFudDogbm9ybWFsO1xuJGJvZHktZm9udC13ZWlnaHQ6IDYwMDtcbiRsaW5lLWhlaWdodDogMS42O1xuXG4vL3R5cG9ncmFwaHlcbiRoZWFkaW5nLW9uZS1zaXplOjM2cHg7XG4kaGVhZGluZy10d28tc2l6ZTogMjRweDtcbiRoZWFkaW5nLXR3by1tZC1zaXplOiAzNnB4O1xuJGhlYWRpbmctdGhyZWUtc2l6ZTogMTVweDtcbiRoZWFkaW5nLWZvdXItc2l6ZToxNHB4O1xuLy8kaGVhZGluZy1maXgtc2l6ZTo7XG4kaGVhZGluZy1zaXgtc2l6ZTogMTRweDtcblxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbiRmb250LXdlaWdodHM6IChcbiAgICAgICAgJ2xpZ2h0JzogMzAwLFxuICAgICAgICAnbm9ybWFsJzo0MDAsXG4gICAgICAgICdtZWRpdW0nOiA1MDAsXG4gICAgICAgICdzZW1pQm9sZCc6IDYwMCxcbiAgICAgICAgJ2JvbGQnOiA3MDAsXG4pO1xuXG4vKiBjYXJkcyAqL1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMTVweDtcbiRjYXJkLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAuMTQpO1xuXG4vL0J1dHRvbnNcblxuJGJ0bi1mb250LXdlaWdodDogNjAwO1xuJGJ0bi10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tcGFkZGluZy15OiAxMHB4O1xuJGJ0bi1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZDogMjBweDtcbiRidG4tcGFkZGluZy10b3A6IDRweDtcbiRidG4tcGFkZGluZy1ib3R0b206IDRweDtcbiRidG4tZm9udC1zaXplOiAxNHB4O1xuJGJ0bi1saW5lLWhlaWdodDogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzOiA0MHB4O1xuJGJ0bi10ZXh0LXRyYW5zZm9ybTogJHRleHQtbG93ZXJjYXNlO1xuJGJ0bi1oZWlnaHQ6IDQwcHg7XG4kYnRuLW1pbi13aWR0aDogOTBweDtcblxuLy9idXR0b25zLXdoaXRlXG4kYnRuLXdoaXRlLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkd2hpdGUtY29sb3I7XG5cbi8vL2J1dHRvbnMtd2hpdGUtb3V0bGluZVxuJGJ0bi13aGl0ZS1vdXRsaW5lLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLW91dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG4vLy9ncmF5XG4kYnRuLWdyYXktdGV4dC1jb2xvcjogJGdyYXktY29sb3I7XG4kYnRuLWdyYXktYmFja2dyb3VuZC1jb2xvcjogJGhhbGYtd2hpdGU7XG4kYnRuLWdyYXktYm9yZGVyLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGFsZi13aGl0ZTtcblxuLy8vZGFya1xuJGJ0bi1kYXJrLXRleHQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4tZGFyay1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRidG4tZGFyay1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLy9ibHVlXG4kYnRuLWJsdWUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1ibHVlLWJhY2tncm91bmQtY29sb3I6ICRibHVlLWNvbG9yO1xuJGJ0bi1ibHVlLWJvcmRlci1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1ob3ZlcjogJGJsdWUtY29sb3I7XG5cblxuLy8vdHJhbnNwYXJlbnRcbiRidG4tdHJhbnNwYXJlbnQtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50LWJhY2tncm91bmQtaG92ZXI6ICR0cmFuc3BhcmVudC1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudCBkYXJrLW91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS10ZXh0LWNvbG9yOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRkYXJrT3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkaGVhZGluZy1jb2xvcjtcblxuXG4vLy9ibGFjayBvdXRsaW5lXG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYm9yZGVyLWNvbG9yOiAkdHJhbnNwYXJlbnQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50YmxhY2tPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG4vL0J1dHRvbiBsYXJnZVxuJGJ0bi1wYWRkaW5nLXN0YXJ0LWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLWVuZC1sZzogMjBweDtcbiRidG4tcGFkZGluZy10b3AtbGc6IDZweDtcbiRidG4tcGFkZGluZy1ib3R0b20tbGc6IDZweDtcbiRidG4tZm9udC1zaXplLWxnOiAkYnRuLWZvbnQtc2l6ZTtcbiRidG4tbGluZS1oZWlnaHQtbGc6IG5vcm1hbDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMzBweDtcbiRidG4taGVpZ2h0LWxnOiA0OHB4O1xuXG4vKiBGb3JtcyAqL1xuJGlucHV0LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYmEoMzYsIDExMywgMTg1LCAwLjEpO1xuJGlucHV0LWZvbnQtc2l6ZTogMjhweDtcbiR4LXNtYWxsLWlucHV0LWZvbnQtc2l6ZTogJHgtc21hbGwtYm9keS1mb250LXNpemU7XG4kaW5wdXQtYm9yZGVyOiBub25lO1xuJGlucHV0LXJhZGl1czogNDBweDtcbiRpbnB1dC1ib3JkZXItZm9jdXM6IG5vbmU7XG4kaW5wdXQtaGVpZ2h0OiA2MHB4O1xuJGlucHV0LXBhZGRpbmc6IDAgMTZweDtcbiRpbnB1dC1pY29uLXdpZHRoOiAyMHB4O1xuJGlucHV0LWljb24taGVpZ2h0OiAkaW5wdXQtaWNvbi13aWR0aDtcblxuLy9jaGVja2JveFxuJGNoZWNrYm94LXdpZHRoOiAyNHB4O1xuJGNoZWNrYm94LWhlaWdodDogJGNoZWNrYm94LXdpZHRoO1xuJGNoZWNrYm94LXNtYWxsLXdpZHRoOiAyMHB4O1xuJGNoZWNrYm94LXNtYWxsLWhlaWdodDogJGNoZWNrYm94LXNtYWxsLXdpZHRoO1xuXG4vL3RleHRcbiR0ZXh0LWxvd2VyY2FzZTogbG93ZXJjYXNlO1xuJHRleHQtdXBwZXJjYXNlOiB1cHBlcmNhc2U7XG4kdGV4dC1jYXBpdGFsaXplOiBjYXBpdGFsaXplO1xuXG4vL2NyZWRpdCBjYXJkXG5cbiRjcmVkaXQtY2FyZC1pY29uLXdpZHRoOiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0OiA3MHB4O1xuJGNyZWRpdC1jYXJkLWljb24tcmlnaHQ6IHJpZ2h0O1xuJGNyZWRpdC1jYXJkLWljb24tbGVmdDogbGVmdDtcblxuLyogSGVhZGVyIEljb24gKi9cblxuJGhlYWRlci1pY29uLXdpZHRoOiAzMHB4O1xuJGhlYWRlci1pY29uLWhlaWdodDogMzBweDtcbiRoZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4kaGVhZGVyLWxvZ28taGVpZ2h0OiA0OHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtaGVhZGVyLWxvZ28taGVpZ2h0OiA0MHB4O1xuJHgtc21hbGwtaGVhZGVyLWljb24td2lkdGg6IDI1cHg7XG4kaGVhZGVyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRoZWFkZXItbGluay1sYWJlbC10cmFuc2Zvcm06ICR0ZXh0LXVwcGVyY2FzZTtcbiRoZWFkZXItbGluay1sYWJlbC1mb250LXdlaWdodDogNjAwO1xuXG4vKiBTaWRlYmFyICovXG5cbiRzaWRlYmFyLWxvZ28td2lkdGg6IDIwMHB4O1xuJHNpZGViYXItbG9nby1oZWlnaHQ6IDE2MHB4O1xuJHgtc21hbGwtc2lkZWJhci1sb2dvLXdpZHRoOiAxODBweDtcbiR4LXNtYWxsLXNpZGViYXItaWNvbi13aWR0aDogMjVweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtc2l6ZTogMTZweDtcbiRzaWRlYmFyLWxpbmstbGFiZWwtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kc2lkZWJhci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtY2FwaXRhbGl6ZTtcbiRzaWRlYmFyLWxpbmstbGFiZWwtZm9udC13ZWlnaHQ6IDUwMDtcbiRzaWRlYmFyLWljb24tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cblxuJHByb2ZpbGUtaW1hZ2Utd2lkdGg6IDgwcHg7XG4kcHJvZmlsZS1pbWFnZS1oZWlnaHQ6ICRwcm9maWxlLWltYWdlLXdpZHRoO1xuXG5cbi8qIHRhYnMgKi9cblxuJHRhYnMtYmFyLWJnLWNvbG9yOiR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci10ZXh0LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kdGFicy1iYXItYnRuLXRleHQtY29sb3I6ICR0YWJzLWJhci10ZXh0LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtc2l6ZTogMTVweDtcbiR0YWJzLWJhci1ib3JkZXItY29sb3I6MnB4IHNvbGlkICR0cmFuc3BhcmVudC1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjokaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1hY3RpdmUtYm9yZGVyLWNvbG9yOjJweCBzb2xpZCAkaGVhZGluZy1jb2xvcjtcblxuXG5cbi8vLyBhcHAtY29udGFpbmVyLXdpZHRoXG4vLy8gQHByb3Age1N0cmluZ30ga2V5cyAtIEtleXMgYXJlIGlkZW50aWZpZXJzIG1hcHBlZCB0byBhIGdpdmVuIGxlbmd0aFxuLy8vIEBwcm9wIHtNYXB9IHZhbHVlcyAtIFZhbHVlcyBhcmUgYWN0dWFsIGJyZWFrcG9pbnRzIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiRjb250YWluZXItd2lkdGg6IChcbiAgICAgICAgJ2xhcmdlJzogMTAwJSxcbiAgICAgICAgJ21lZGl1bSc6IDEwMCUsXG4gICAgICAgICdzbWFsbCc6IDEwMCUsXG4gICAgICAgICd4LXNtYWxsJzogMTAwJSxcbikgIWRlZmF1bHQ7XG5cbi8vLyBCcmVha3BvaW50cyBtYXBcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJG1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgICdsYXJnZSc6IDEyMDBweCxcbiAgICAgICAgJ21lZGl1bSc6IDk5MnB4LFxuICAgICAgICAnc21hbGwnOiA3NjhweCxcbiAgICAgICAgJ3gtc21hbGwnOiA1NzZweCxcbiAgICAgICAgJ3h4LXNtYWxsJzogNDE0cHgsXG4pICFkZWZhdWx0O1xuXG4vLy8gUmVsYXRpdmUgb3IgYWJzb2x1dGUgVVJMIHdoZXJlIGFsbCBhc3NldHMgYXJlIHNlcnZlZCBmcm9tXG4vLy8gQHR5cGUgU3RyaW5nXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdoZW4gdXNpbmcgYSBDRE5cbi8vLyAgICRiYXNlLXVybDogJ2h0dHA6Ly9jZG4uZXhhbXBsZS5jb20vYXNzZXRzLyc7XG4kYmFzZS11cmw6ICdhc3NldHMvJyAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCIuLi8uLi9zYXNzL2NvbmZpZ1wiO1xuXG4uU3dpcGVDb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvL21pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGF1dG87XG5cbn1cbi5ib29rV3JhcHBlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxNXB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDkyJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpbnNldDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gLy8gYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5ib29rV3JhcHBlci5uZXh0e1xuICAvL2JhY2tncm91bmQ6IHllbGxvdztcbiAgLy9ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG59XG4uYm9va1dyYXBwZXIuYmFja3tcbiAgLy9iYWNrZ3JvdW5kOiBibGFjaztcbiAgLy9ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uYm9va1dyYXBwZXIubmV4dCwgLmJvb2tXcmFwcGVyLmJhY2t7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvL2JveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cbi5tYWluIHtcbiAgLy9kaXNwbGF5OiBmbGV4O1xufVxuLnNjZW5lIHtcbiAgLy93aWR0aDogOTAlO1xuICAvL2hlaWdodDogODV2aDtcbiAgLy9tYXJnaW46IDAgMCAwIDIwcHg7XG4gIC8vcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLy96LWluZGV4OiAxMTE7XG59XG4uc2NlbmVOZXh0IHtcbiAgLy93aWR0aDogOTAlO1xuICAvL2hlaWdodDogODV2aDtcbiAgLy9tYXJnaW46IDAgMCAwIDIwcHg7XG4gIC8vcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLy9ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIC8vei1pbmRleDogMjIyO1xufVxuLnNjZW5lQmFjayB7XG4gIC8vd2lkdGg6IDkwJTtcbiAgLy9oZWlnaHQ6IDg1dmg7XG4gIC8vbWFyZ2luOiAwIDAgMCAyMHB4O1xuICAvL3BlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIC8vYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xufVxuXG4uYm9va0NoYW5nZSB7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMTVzIDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogIHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogIHJvdGF0ZVkoMzU5ZGVnKTtcbiAgfVxufVxuXG5cbi5ib29rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3dpZHRoOiAxMDAlO1xuICAvL2hlaWdodDogMTAwJTtcbiAgLy90cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4ucGFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgLy93aWR0aDogMTAwJTtcbiAgLy9oZWlnaHQ6IDEwMCU7XG4gIC8vdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm07XG4gIC8vdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy90cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbn1cblxuLmZyb250LFxuLmJhY2sge1xuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy93aWR0aDogMTAwJTtcbiAgLy9oZWlnaHQ6IDEwMCU7XG4gIC8vcGFkZGluZzogMTVweDtcbiAgLy9wYWRkaW5nOiAxMCUgNSUgNSU7XG4gIC8vYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLy9iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8vYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAvL3BhZGRpbmc6IDE1cHg7XG4gIC8vYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIDAuMTQpO1xuICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDIwNXB4KTtcbiAgLy9vdmVyZmxvdy15OiBhdXRvO1xuICBAaW5jbHVkZSBtZWRpYS1tZHtcbiAgICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDM1cHgpO1xuICB9XG59XG5cbi5iYWNrIHtcbiAgLy90cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLnBhZ2UuYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbn1cblxuLnBhZ2UuZmxpcHBlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbn1cblxuLnBhZ2UuZmxpcHBlZDpsYXN0LW9mLXR5cGUge1xuICB6LWluZGV4OiAxO1xufVxuXG5cbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xuICBhbmltYXRpb246IGZhZGVpbm91dCAxMHMgbGluZWFyIGZvcndhcmRzO1xuICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG4uYXVkaW8tY29weXJpZ2h0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hdWRpby1jb3B5cmlnaHQtZGl2IDo6bmctZGVlcCBwe1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjQ3MDdBICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG5cblxuQGtleWZyYW1lcyBmYWRlaW5vdXQge1xuMCUgeyBvcGFjaXR5OiAwOyB9XG4xMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5cbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLy8gd2lkdGg6IDMwMHB4O1xuICAvLyBoZWlnaHQ6IDMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy8gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4ubXRhYyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbn1cbi5tdGRhYyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLy8gLmZsaXBBY3RpdmV7XG4vLyAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbi8vIH1cbiBcblxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgLy8gY29sb3I6IGJsYWNrO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xuICAvLyBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG5cblxuXG4vLy5zd2lwZVJpZ2h0LCAuc3dpcGVMZWZ0IHtcbi8vICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybTtcbi8vICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuLy8gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuLy9cbi8vICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4vLyAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuLy8gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuLy9cbi8vICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4vLyAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuLy99XG4vLy5zd2lwZVJpZ2h0e1xuLy8gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbi8vICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDFweCk7XG4vLyAgbGVmdDogLTEwMCU7XG4vLyAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlUmlnaHQgMC41cyBmb3J3YXJkcztcbi8vICBhbmltYXRpb246IHNsaWRlUmlnaHQgMC41cyBmb3J3YXJkcztcbi8vXG4vL31cbi8vLnN3aXBlTGVmdHtcbi8vICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4vLyAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooMXB4KTtcbi8vICByaWdodDogLTEwMCU7XG4vLyAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlTGVmdCAwLjVzIGZvcndhcmRzO1xuLy8gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZm9yd2FyZHM7XG4vL31cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMTAwJSB7IGxlZnQ6IDA7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDEwMCUgeyByaWdodDogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDEwMCUgeyByaWdodDogMDsgfVxufVxuLmNoYXB0ZXJDb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL2JvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC8vcGFkZGluZzogMTVweDtcbiAgLy9ib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMzgsIDM2LCAzNSwgMC4xNCk7XG4gIC8vaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjA1cHgpO1xuICAvLyBvdmVyZmxvdy15OiBhdXRvO1xuICBAaW5jbHVkZSBtZWRpYS1tZHtcbiAgICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgfVxuICAmX191bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICM2NDcwN0E7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb3VudGVyLXJlc2V0OiBzZWN0aW9uO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICBcbiAgfVxuICAmX19saSB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgJjpob3ZlciwgJi5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFlYmQ3O1xuICAgIH1cbiAgICAmIC5jb3VudCB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAvLyAmOmJlZm9yZSB7XG4gICAgLy8gICBjb3VudGVyLWluY3JlbWVudDogc2VjdGlvbjtcbiAgICAvLyAgIGNvbnRlbnQ6IGNvdW50ZXJzKHNlY3Rpb24sIFwiLlwiKSBcIiBcIjtcbiAgICAvLyAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAvLyB9XG4gIH1cblxuICAmX19saUlzbSB7XG4gICAgcGFkZGluZzogNnB4IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvciA7XG4gICAgICBjb2xvcjogI2QzZDNkMztcbiAgICB9XG4gICAgLy8gJjpiZWZvcmUge1xuICAgIC8vICAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG4gICAgLy8gICBjb250ZW50OiBjb3VudGVycyhzZWN0aW9uLCBcIi5cIikgXCIgXCI7XG4gICAgLy8gICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgLy8gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIC8vICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vICAgdG9wOiAtNHB4O1xuICAgIC8vIH1cblxuXG4gICAgJiAuY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cblxufVxuXG5cbi5iaWJsZS1jaGF0Ym94e1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJpYmxlLWZvb3RlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuIC8vIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgzOCwgMzYsIDM1LCAwLjE0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDEwcHggNHB4O1xuICAmX190b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJl9fdXBwZXJTZWN0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gICZfX3JvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMjtcbiAgfVxuICAmX19jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xuICAgICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgJi5kaXNjb3ZlcntcbiAgICAgICAgbWF4LWhlaWdodDogMjIwcHg7XG4gICAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICB9XG4gICAgICAmLmRpc2N1c3N7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAaW5jbHVkZSBtZWRpYS1tZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5iaWJsZS1mb290ZXJfX2NvbnRlbnQgcHtcbiAgbWFyZ2luOjAgNHB4O1xuICBjb2xvcjogJHByaW1hcnktY29sb3IgO1xufVxuXG4uYmlibGUtZm9vdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvUGxheWVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmF1ZGlvUGxheWVyIHtcbiAgJl9fdGV4dCB7XG4gICAgY29sb3I6ICRncmF5LWxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29tbW9uQnRuLS1kYXJrIHtcbiAgICAtLWJhY2tncm91bmQ6ICN7JGRlZmF1bHQtcHJpbWFyeS1jb2xvcn07XG4gICAgLS1ib3JkZXItY29sb3I6ICN7JGRlZmF1bHQtcHJpbWFyeS1jb2xvcn07XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjeyRkZWZhdWx0LXByaW1hcnktY29sb3J9O1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICN7JGRlZmF1bHQtcHJpbWFyeS1jb2xvcn07XG4gIH1cbiAgLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQge1xuICAgIC0tY29sb3I6ICN7JGRlZmF1bHQtcHJpbWFyeS1jb2xvcn07XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICN7JGRlZmF1bHQtcHJpbWFyeS1jb2xvcn07XG4gIH1cbn1cblxuLmJpYmxlLWluZm8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFM0UzRTM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5iaWJsZS10YWJzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAkdGFicy1iYXItdGV4dC1zaXplO1xuICAvLyAtLWNvbG9yOiAjeyRwcmltYXJ5LWNvbG9yfTtcbiAgLy8gLS1jb2xvci1hY3RpdmF0ZWQ6ICN7JHByaW1hcnktY29sb3J9O1xuICAvLyAtLWNvbG9yLWZvY3VzZWQ6ICN7JHByaW1hcnktY29sb3J9O1xuICAvLyAtLWNvbG9yLWhvdmVyOiAjeyRwcmltYXJ5LWNvbG9yfTtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiBibGFjaztcbiAgLS1jb2xvci1mb2N1c2VkOiBibGFjaztcbiAgLS1jb2xvci1ob3ZlcjogYmxhY2s7XG4gIGJvcmRlci1ib3R0b206ICR0YWJzLWJhci1ib3JkZXItY29sb3I7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbi1yaWdodDoxNXB4O1xufVxuXG4uYmlibGUtdGFiczpob3ZlciwgLmJpYmxlLXRhYnM6Zm9jdXMsIC5iaWJsZS10YWJzOmFjdGl2ZSwgLmJpYmxlLXRhYnMuYWN0aXZlIHtcbiAgLy9jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4gIC8vLS1jb2xvci1zZWxlY3RlZDogJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAvLy0tY29sb3ItZm9jdXNlZDogJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAvLy0tY29sb3ItaG92ZXI6ICR0YWJzLWJhci1hY3RpdmUtdGV4dC1jb2xvcjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG59XG5AaW5jbHVkZSBtZWRpYS1zbSB7XG4gIC5iaWJsZS10b29sYmFyLWFjdGlvbnMtYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uY29weXJpZ2h0LWRpdiB7XG5tYXJnaW46IDMwcHg7XG59XG5cbi5jb3B5cmlnaHQtZGl2IHB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY0NzA3QTtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuLmNoYXB0ZXJDb250ZW50X191bC5wYWdle1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoYXB0ZXJDb250ZW50X191bC5wYWdlLmFjdGl2ZXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29tbW9uQnRuLS10cmFuc3BhcmVudC1kYXJrT3V0bGluZXtcbiAgLS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzMwMkYzNCk7XG59XG5cbi5oZWFkaW5nNHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wbGF5LWluZm8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFM0UzRTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufSIsIi8qIENvbG9ycyAqL1xuLyogY2FyZHMgKi9cbi8qIEZvcm1zICovXG4vKiBIZWFkZXIgSWNvbiAqL1xuLyogU2lkZWJhciAqL1xuLyogcHJvZmlsZSBhdmF0YXIgKi9cbi8qIHRhYnMgKi9cbi5Td2lwZUNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib29rV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW46IDE1cHggMTVweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogOTIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGluc2V0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbn1cblxuLmJvb2tXcmFwcGVyLmJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYm9va1dyYXBwZXIubmV4dCwgLmJvb2tXcmFwcGVyLmJhY2sge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmJvb2tDaGFuZ2Uge1xuICBhbmltYXRpb246IHJvdGF0aW9uIDE1cztcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM1OWRlZyk7XG4gIH1cbn1cbi5ib29rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGFnZS5hY3RpdmUge1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGFnZS5mbGlwcGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4ucGFnZS5mbGlwcGVkOmxhc3Qtb2YtdHlwZSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5lbGVtZW50VG9GYWRlSW5BbmRPdXQge1xuICBhbmltYXRpb246IGZhZGVpbm91dCAxMHMgbGluZWFyIGZvcndhcmRzO1xufVxuXG4uYXVkaW8tY29weXJpZ2h0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hdWRpby1jb3B5cmlnaHQtZGl2IDo6bmctZGVlcCBwIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY0NzA3QSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIG1hcmdpbjogMDtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW5vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5tdGFjIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4ubXRkYWMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDEwMCUge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XG4gIDEwMCUge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uY2hhcHRlckNvbnRlbnQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcHRlckNvbnRlbnRfX3VsIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM2NDcwN0E7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvdW50ZXItcmVzZXQ6IHNlY3Rpb247XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY2hhcHRlckNvbnRlbnRfX2xpIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59XG4uY2hhcHRlckNvbnRlbnRfX2xpOmhvdmVyLCAuY2hhcHRlckNvbnRlbnRfX2xpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2ZhZWJkNztcbn1cbi5jaGFwdGVyQ29udGVudF9fbGkgLmNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNoYXB0ZXJDb250ZW50X19saUlzbSB7XG4gIHBhZGRpbmc6IDZweCAxcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jaGFwdGVyQ29udGVudF9fbGlJc20uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiAgY29sb3I6ICNkM2QzZDM7XG59XG4uY2hhcHRlckNvbnRlbnRfX2xpSXNtIC5jb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJpYmxlLWNoYXRib3gge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJpYmxlLWZvb3RlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMTBweCA0cHg7XG59XG4uYmlibGUtZm9vdGVyX190b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5iaWJsZS1mb290ZXJfX3VwcGVyU2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5iaWJsZS1mb290ZXJfX3JvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMTI7XG59XG4uYmlibGUtZm9vdGVyX19jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5iaWJsZS1mb290ZXJfX2NvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLmJpYmxlLWZvb3Rlcl9fY29udGVudC5kaXNjb3ZlciB7XG4gICAgbWF4LWhlaWdodDogMjIwcHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgfVxuICAuYmlibGUtZm9vdGVyX19jb250ZW50LmRpc2N1c3Mge1xuICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5iaWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5iaWJsZS1mb290ZXJfX2NvbnRlbnQgcCB7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbn1cblxuLmJpYmxlLWZvb3RlcjpiZWZvcmUge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpb1BsYXllcjpiZWZvcmUge1xuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hdWRpb1BsYXllcl9fdGV4dCB7XG4gIGNvbG9yOiAjQkFCQUJBO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXVkaW9QbGF5ZXIgLmNvbW1vbkJ0bi0tZGFyayB7XG4gIC0tYmFja2dyb3VuZDogIzMwMkYzNDtcbiAgLS1ib3JkZXItY29sb3I6ICMzMDJGMzQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzMwMkYzNDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzMDJGMzQ7XG59XG4uYXVkaW9QbGF5ZXIgLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQge1xuICAtLWNvbG9yOiAjMzAyRjM0O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzMwMkYzNDtcbn1cblxuLmJpYmxlLWluZm8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFM0UzRTM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5iaWJsZS10YWJzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IGJsYWNrO1xuICAtLWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuICAtLWNvbG9yLWhvdmVyOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAwMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmlibGUtdGFiczpob3ZlciwgLmJpYmxlLXRhYnM6Zm9jdXMsIC5iaWJsZS10YWJzOmFjdGl2ZSwgLmJpYmxlLXRhYnMuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iaWJsZS10b29sYmFyLWFjdGlvbnMtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNXB4O1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5jb3B5cmlnaHQtZGl2IHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4uY29weXJpZ2h0LWRpdiBwIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjQ3MDdBO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi5jaGFwdGVyQ29udGVudF9fdWwucGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGFwdGVyQ29udGVudF9fdWwucGFnZS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbW1vbkJ0bi0tdHJhbnNwYXJlbnQtZGFya091dGxpbmUge1xuICAtLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbn1cblxuLmhlYWRpbmc0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wbGF5LWluZm8ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFM0UzRTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bible-chapter/bible-chapter.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/bible-chapter/bible-chapter.page.ts ***!
  \*****************************************************/
/*! exports provided: BibleChapterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleChapterPage", function() { return BibleChapterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bible_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bible.service */ "./src/services/bible.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_sermon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sermon.service */ "./src/services/sermon.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/chat.service */ "./src/services/chat.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var src_services_common_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/audioplayer.service */ "./src/services/audioplayer.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");























;
var BibleChapterPage = /** @class */ (function () {
    function BibleChapterPage(location, router, route, _bibleService, appService, loader, toast, storage, sermonsService, alertController, chatService, 
    // private socket: Socket,
    event_provider, translate, apiService, dom, platform, socialSharing, common, audioService, el, zone, analyticsFirebase) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.route = route;
        this._bibleService = _bibleService;
        this.appService = appService;
        this.loader = loader;
        this.toast = toast;
        this.storage = storage;
        this.sermonsService = sermonsService;
        this.alertController = alertController;
        this.chatService = chatService;
        this.event_provider = event_provider;
        this.translate = translate;
        this.apiService = apiService;
        this.dom = dom;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.common = common;
        this.audioService = audioService;
        this.el = el;
        this.zone = zone;
        this.analyticsFirebase = analyticsFirebase;
        this.rootPath = '';
        this.audioUrl = '';
        this.verses = [];
        this.share = false;
        this.teaching_tab = false;
        this.teaching_icon = false;
        this.audioPlay = false;
        this.list_class = "chapterContent__li ";
        this.list_class_ism = "chapterContent__liIsm ";
        this.selected = [];
        this.highlighted_verses = [];
        // audio Player
        this.player = null;
        this.teaching_player = null;
        this.isPlaying = false;
        this.progress = 0;
        this.progress_teachings = 0;
        this.isPlaying_teachings = false;
        this.current_language = { language_family_code: 'ENG', language_family_name: 'English', selection_type: 'default' };
        this.current_volume = { dam_id: 'EN1WEB', volume_name: 'WEB - Winfred Henson', version_code: 'WEB' };
        this.discover_tab = false;
        this.show_discover_tab = false;
        this.discuss_tab = false;
        this.focus_tab = true;
        this.active_class = 'bible-tabs active';
        this.non_active_class = 'bible-tabs';
        this.current_verse_messages = [];
        this.message = '';
        this.page_loaded = false;
        this.hide_on_scroll = false;
        this.modal_is_on = false;
        this.modal_is_displaying = false;
        this.copyright_info = "";
        this.ism_teachings = [];
        this.ttb_bible_badge = '';
        this.teachings_audio_first_load = true;
        this.is_teaching_playing = false;
        this.display = true;
        this.displayPrevious = false;
        this.displayScene = true;
        this.leftPosition = 1000;
        this.rightPosition = 0;
        this.endPosition = 0;
        this.startingPosition = 0;
        this.opacity = 1;
        this.nextChapterSavedVerses = [];
        this.prevChapterSavedVerses = [];
        this.functionCalled = false;
        this.bookAnimate = false;
        this.textChange = false;
        this.showBookName = false;
        this.mobileView = false;
        this.allVerse = [];
        this.firstChapter = false;
        this.hideHeaderFooter = true;
        this.hideAudioPlayer = false;
        this.fontSize = 14;
        this.zoomed = false;
        this.is_loading = false;
        this.chapter_audio_first_load = true;
        this.chapter_audio_file_loaded = false;
        this.teachings_audio_file_loaded = false;
        this.display_media_player_loader = false;
        this.display_media_player_loader_teachings = false;
        this.previous_chapter_current_duration = '';
        this.previous_chapter_progress = 0;
        this.previous_teaching_current_duration = '';
        this.previous_teaching_progress = 0;
        this.triggerLeft = false;
        this.triggerRight = false;
        this.read_analytics_fired = false;
        this.selected_language = { language_family_code: 'ENG', language_family_name: 'English', selection_type: 'default' };
        this.selected_volume = { dam_id: 'EN1WEB', volume_name: 'WEB - Winfred Henson', version_code: 'WEB' };
        this.is_cordova = false;
        this.volumes = [];
        this.allChapters = [];
        this.language_families = [
            {
                language_family_code: 'ENG',
                language_family_name: 'English'
            },
            {
                language_family_code: 'CHN',
                language_family_name: '中文'
            },
            {
                language_family_code: 'SPN',
                language_family_name: 'Español'
            },
            {
                language_family_code: 'HND',
                language_family_name: 'हिंदी'
            },
            {
                language_family_code: 'FRN',
                language_family_name: 'FranÃ§ais'
            },
            {
                language_family_code: 'ARA',
                language_family_name: 'العربية'
            },
            {
                language_family_code: 'BNG',
                language_family_name: 'Bengali'
            },
            {
                language_family_code: 'RUS',
                language_family_name: 'Русский'
            },
            {
                language_family_code: 'POR',
                language_family_name: 'Português'
            },
            {
                language_family_code: 'IND',
                language_family_name: 'Indonesian'
            }
        ];
        this.chapterAudioLoaded = false;
        this.chapterAudioListenTime = 0;
        this.teachingsAudioLoaded = false;
        this.teachingsAudioListenTime = 0;
        this.langCode = 'en';
        this.loaded = false;
        this.platform.pause.subscribe(function (res) {
            // console.log('platform_pause' , res)
        });
        // this.event_provider.hidebibleheaderfooter.subscribe((res) => {
        //     this.hideHeaderFooter = res;
        // })
        // var currentPage = 0;
        // $('.book')
        //     .on('click', '.active', nextPage)
        //     .on('click', '.flipped', prevPage);
        //
        // $('.book').hammer().on("swipeleft", nextPage);
        // $('.book').hammer().on("swiperight", prevPage);
        // function prevPage() {
        //     $('.flipped')
        //         .last()
        //         .removeClass('flipped')
        //         .addClass('active')
        //         .siblings('.page')
        //         .removeClass('active');
        // }
        //
        // function nextPage() {
        //     $('.active')
        //         .removeClass('active')
        //         .addClass('flipped')
        //         .next('.page')
        //         .addClass('active')
        //         .siblings();
        // }
        // get translated alert message
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // this.chapter = {id: "1", selected: true};
        // this.book = {dam_id: "EN1WEBO", book_id: "Gen", book_name: "Genesis", book_order: "1", number_of_chapters: "50", text_dam_id: "EN1WEBO2ET", chapters: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50"};
        // this.dam_id = "EN1WEBO";
        // this.selected_page = 0;
        // // to get audio location
        // this.getAudioLocation();
        var current_url = new URL(window.location.href);
        this.app_url = current_url.pathname;
        if (localStorage.getItem('bible')) {
            var b = JSON.parse(localStorage.getItem('bible'));
            if (b.language) {
                this.current_language = b.language;
                this.selected_language = b.language;
            }
            if (b.volume) {
                this.current_volume = b.volume;
                this.selected_volume = b.volume;
            }
        }
        var bible_obj = {
            language: this.selected_language,
            volume: this.selected_volume
        };
        // storing in local storage
        localStorage.setItem("bible", JSON.stringify(bible_obj));
        this.set_dam_id_lang();
        // })
    }
    BibleChapterPage.prototype.zoomingIn = function (event) {
        this.event_provider.hideBibleHeaderFooter(false);
        if (this.fontSize < 22) {
            this.fontSize = this.fontSize + 0.5;
            this.storage.set('BibleFontSize', this.fontSize);
            this.zoomed = true;
        }
    };
    BibleChapterPage.prototype.zoomingOut = function (event) {
        this.event_provider.hideBibleHeaderFooter(false);
        if (this.fontSize > 15) {
            this.fontSize = this.fontSize - 0.5;
            this.storage.set('BibleFontSize', this.fontSize);
            this.zoomed = false;
        }
    };
    BibleChapterPage.prototype.pinchEnd = function () {
        //console.log("called")
        this.event_provider.hideBibleHeaderFooter(false);
    };
    BibleChapterPage.prototype.doubleTap = function () {
        if (this.zoomed) {
            this.fontSize = 14;
            this.zoomed = false;
        }
        else if (!this.zoomed) {
            this.fontSize = 22;
            this.zoomed = true;
        }
    };
    BibleChapterPage.prototype.scrollingUp = function () {
        //  console.log(document.getElementById('verses_content').scrollTop)
        // this.event_provider.hideBibleHeaderFooter(false);
    };
    BibleChapterPage.prototype.scrollingDown = function () {
        // console.log(document.getElementById('verses_content').scrollTop)
        // this.event_provider.hideBibleHeaderFooter(true);
    };
    // handleScroll(event) {
    //     if (event.detail.deltaY > 0) {
    //         this.event_provider.hideBibleHeaderFooter(true);
    //     } else if (event.detail.deltaY < 0) {
    //         this.event_provider.hideBibleHeaderFooter(false);
    //     }
    // }
    BibleChapterPage.prototype.handleScroll = function (event) {
        if (!this.share) {
            // let scrollDownPos = event.detail.currentY > 1500 ? 500 : 50; // when scroll comes near to bottom of screen
            // let scrollUpPos = event.detail.currentY > 1500 ? -100 : -50;  // when scroll comes near to bottom of screen
            if (event.detail.currentY == 0) { // on top of screen
                // this.event_provider.hideBibleHeaderFooter(false);
            }
            if (event.detail.deltaY > 100) {
                //   this.event_provider.hideBibleHeaderFooter(true);
            }
            else if (event.detail.deltaY < -100) {
                //   this.event_provider.hideBibleHeaderFooter(false);
            }
        }
    };
    // ======= On leaving page, pausing player if its is ON ================
    //
    BibleChapterPage.prototype.ionViewWillEnter = function () {
        if (!this.platform.is('cordova')) {
            this.mobileView = true;
        }
        else {
            this.mobileView = true;
        }
        var interval = setInterval(function () {
            // this.loader.stopLoading();
            clearInterval(interval);
        }, 1000);
    };
    BibleChapterPage.prototype.showTranslation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Translation',
                            message: this.current_language.language_family_name + ', ' + this.current_volume.volume_name,
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ==================== STARTING the audio player ==================================================================
    // start(type, track) {
    //     console.log(track)
    //     let self = this;
    //     this.audioPlay = false;
    //     if (type === "chapter") {
    //         if (this.player) {
    //             this.player.stop();
    //         }
    //         this.player = new Howl({
    //             src: [track],
    //             html5: true,
    //             onplay: () => {
    //                 this.isPlaying = true;
    //                 this.audioPlay = true;
    //                 this.updateProgress("chapter");
    //             },
    //             onend: () => {
    //             }
    //         });
    //         this.player.once('load', function () {
    //             //self.current_sound_id = self.player.play();
    //             self.current_total_duration = self.intoMinutes(self.player.duration(self.current_sound_id));
    //             self.player.stop(self.current_sound_id);
    //             self.isPlaying = false;
    //             if (self.player) {
    //                 self.player.stop();
    //             }
    //         });
    //     } else if (type === "teachings") {
    //         if (this.teaching_player) {
    //             this.teaching_player.stop();
    //         }
    //         this.teaching_player = new Howl({
    //             src: [track],
    //             html5: true,
    //             onplay: () => {
    //                 this.isPlaying_teachings = true;
    //                 this.audioPlay = true;
    //                 this.updateProgress("teachings");
    //             },
    //             onend: () => {
    //             }
    //         });
    //         this.teaching_player.once('load', function () {
    //             // self.current_sound_id_teaching = self.teaching_player.play();
    //             self.current_total_duration_teaching = self.intoMinutes(self.teaching_player.duration(self.current_sound_id_teaching));
    //             // self.teaching_player.stop(self.current_sound_id_teaching);
    //             self.isPlaying_teachings = false;
    //         });
    //     }
    // }
    // start(type, track) {
    //     let self = this;
    //     track = track ? track.replaceAll(/ /g, '%20') : '';
    //     if (type === "chapter") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.chapterMediaAudio = this.media.create(track);
    //           this.chapter_audio_file_loaded = true;
    //           this.chapter_audio_first_load = true;
    //           this.chapterMediaAudio.onStatusUpdate.subscribe(status => {
    //             console.log("STATUS IS: ", status)
    //             if (status === 1){
    //               if (this.chapter_audio_first_load) {
    //                 this.display_media_player_loader = true;
    //                 // let interval = setInterval(() => {
    //                 //   console.log("NOW at status 2 after 2 seconds Total DURATION is: ", this.chapterMediaAudio.getDuration());
    //                 //   if (this.chapterMediaAudio.getDuration() > 0) {
    //                 //     this.current_total_duration = this.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
    //                 //     this.chapter_audio_first_load = false;
    //                 //     this.display_media_player_loader = false;
    //                 //     clearInterval(interval);
    //                 //   }
    //                 // }, 2000)
    //               }
    //               // else if (!this.chapter_audio_first_load && this.platform.is('cordova')){
    //               //   this.chapterMediaAudio.play();
    //               //   this.chapterMediaAudio.setVolume(0.0);
    //               //   this.chapterMediaAudio.seekTo(this.previous_chapter_progress * 1000);
    //               //   this.chapterMediaAudio.pause();
    //               //   this.chapterMediaAudio.setVolume(1.0);
    //               // }
    //             } else {
    //               // this.display_media_player_loader = false;
    //             }
    //             if (status === 2){
    //                 if(this.chapter_audio_first_load) {
    //                     this.createAnalytics('onFirstPlay' , track);
    //                     this.countStart();
    //                 }
    //                 this.chapterAudioLoaded = true;
    //             //   if (this.chapter_audio_first_load) {
    //                 this.display_media_player_loader = true;
    //                 this.audioPlay = false;
    //                 let interval = setInterval(() => {
    //                   console.log("NOW at status 2 after 2 seconds Total DURATION is: ", this.chapterMediaAudio.getDuration());
    //                   if (this.chapterMediaAudio.getDuration() > 0) {
    //                     this.zone.run( () => {
    //                     this.current_total_duration = this.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
    //                     this.chapter_audio_first_load = false;
    //                     this.display_media_player_loader = false;
    //                     this.audioPlay = true;
    //                     })
    //                     clearInterval(interval);
    //                   }
    //                 }, 2000)
    //             //   }
    //               if (!this.router.url.includes('bible-chapter')){
    //                 this.chapterMediaAudio.stop();
    //               }
    //               if (this.previous_chapter_current_duration && this.previous_chapter_progress && !this.is_teaching_playing && this.platform.is('cordova')){
    //               }
    //               // if (this.chapter_audio_first_load){
    //               //   this.chapterMediaAudio.pause();
    //               //   this.chapterMediaAudio.setVolume(1);
    //               // }
    //               console.log("NOW at status 2 Total DURATION is: ", this.chapterMediaAudio.getDuration());
    //               // let interval = setInterval(() => {
    //               //   console.log("NOW at status 2 after 5 seconds Total DURATION is: ", this.chapterMediaAudio.getDuration());
    //               //   self.current_total_duration = self.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
    //               //
    //               //
    //               // }, 5000)
    //               // self.current_total_duration = self.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
    //               // console.log("media.duration returns: ", this.chapterMediaAudio.getDuration());
    //             }
    //             if (status === 3){
    //               console.log("WHen status 3, total dur is: ", this.chapterMediaAudio.getDuration());
    //               this.chapterAudioLoaded = false;
    //               // self.current_total_duration = self.intoMinutesTotalDuration(this.chapterMediaAudio.getDuration());
    //             }
    //           }); // fires when file status changes
    //           this.isPlaying = false;
    //           console.log("TOTAL DURATION IS: ", self.current_total_duration);
    //           this.updateProgress("chapter");
    //           this.chapterMediaAudio.onError.subscribe(error => console.log('Error!', error));
    //         })
    //       } else {
    //         if (this.player) {
    //           this.player.stop();
    //         }
    //         this.player = new Howl({
    //           src: [track],
    //           html5: true,
    //           format: ['wav', 'mp3', 'WAV', 'mp4', 'dolby', 'm4a'],
    //           onplay: () => {
    //             this.isPlaying = true;
    //             this.updateProgress("chapter");
    //           },
    //           onend: () => {
    //           }
    //         });
    //         self.display_media_player_loader = true;
    //         this.player.once('load', function () {
    //           console.log("LOADED");
    //           //self.current_sound_id = self.player.play();
    //           let interval = setInterval(() => {
    //             console.log("NOW at status 2 after 2 seconds Total DURATION is: ", self.player.duration(self.current_sound_id));
    //             if (self.player.duration(self.current_sound_id) > 0) {
    //               self.current_total_duration = self.intoMinutesTotalDuration(self.player.duration(self.current_sound_id));
    //               self.display_media_player_loader = false;
    //               clearInterval(interval);
    //             }
    //           }, 2000)
    //           // self.current_total_duration = self.intoMinutesTotalDuration(self.player.duration(self.current_sound_id));
    //           self.player.stop(self.current_sound_id);
    //           self.isPlaying = false;
    //           if (self.player) {
    //             self.player.stop();
    //           }
    //         });
    //       }
    //     } else if (type === "teachings") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.teachingsMediaAudio = this.media.create(track);
    //           this.teachingsMediaAudio.onStatusUpdate.subscribe(status => {
    //             console.log("teaching STATUS IS: ", status)
    //             if (status === 1){
    //               if (this.teachings_audio_first_load) {
    //                 this.display_media_player_loader_teachings = true;
    //               }
    //             }
    //             if (status === 2){
    //               console.log("teaching NOW at status 2 Total DURATION is: ", this.teachingsMediaAudio.getDuration());
    //               if(this.teachings_audio_first_load) {
    //                 this.createAnalytics('study' , track);
    //                 this.countStartTeachings();
    //               }
    //               this.teachingsAudioLoaded = true;
    //             //   if (this.teachings_audio_first_load) {
    //                 this.display_media_player_loader_teachings = true;
    //                 this.audioPlay = false;
    //                 let interval = setInterval(() => {
    //                   console.log("teaching NOW at status 2 after 2 seconds Total DURATION is: ", this.teachingsMediaAudio.getDuration());
    //                   if (this.teachingsMediaAudio.getDuration() > 0) {
    //                     this.current_total_duration_teaching = this.intoMinutesTotalDuration(this.teachingsMediaAudio.getDuration());
    //                     console.log("INSIDE TOTAL DUTAION TEACHING VARIABLE: ", this.current_total_duration_teaching);
    //                     this.teachings_audio_first_load = false;
    //                     this.display_media_player_loader_teachings = false;
    //                     this.isPlaying_teachings = true;
    //                     this.audioPlay = true;
    //                     clearInterval(interval);
    //                   }
    //                 }, 2000)
    //             //   }
    //               if (!this.router.url.includes('bible-chapter')){
    //                 this.teachingsMediaAudio.stop();
    //               }
    //             }
    //             if (status === 3){
    //                 this.teachingsAudioLoaded = false;
    //               console.log("teaching WHen status 3, total dur is: ", this.teachingsMediaAudio.getDuration());
    //             }
    //           }); // fires when file status changes
    //           // this.teachingsMediaAudio.onSuccess.subscribe(() => {
    //           //   self.current_total_duration_teaching = self.intoMinutesTotalDuration(this.teachingsMediaAudio.getDuration());
    //             this.updateProgress("teachings");
    //           //   self.isPlaying_teachings = false;
    //           //
    //           // });
    //           this.teachingsMediaAudio.onError.subscribe(error => console.log('Teaching Error!', error));
    //         })
    //       } else {
    //         if (this.teaching_player) {
    //           this.teaching_player.stop();
    //         }
    //         this.teaching_player = new Howl({
    //           src: [track],
    //           html5: true,
    //           format: ['wav', 'mp3', 'WAV', 'mp4', 'dolby', 'm4a'],
    //           onplay: () => {
    //             this.isPlaying_teachings = true;
    //             this.updateProgress("teachings");
    //           },
    //           onend: () => {
    //           }
    //         });
    //         self.display_media_player_loader_teachings = true;
    //         this.teaching_player.once('load', function () {
    //           // self.current_sound_id_teaching = self.teaching_player.play();
    //           let interval = setInterval(() => {
    //             console.log("NOW at status 2 after 2 seconds Total DURATION is: ", self.player.duration(self.current_sound_id));
    //             if (self.teaching_player.duration(self.current_sound_id_teaching) > 0) {
    //               self.current_total_duration_teaching = self.intoMinutesTotalDuration(self.teaching_player.duration(self.current_sound_id_teaching));
    //               self.display_media_player_loader_teachings = false;
    //               clearInterval(interval);
    //             }
    //           }, 2000)
    //           // self.current_total_duration_teaching = self.intoMinutesTotalDuration(self.teaching_player.duration(self.current_sound_id_teaching));
    //           self.teaching_player.stop(self.current_sound_id_teaching);
    //           self.isPlaying_teachings = false;
    //         });
    //       }
    //     }
    //   }
    //  =================================================================================================================
    BibleChapterPage.prototype.intoMinutes = function (second) {
        // returns rounded off minutes and seconds
        var minutes = Math.floor(second / 60) || 0;
        var seconds = Math.floor(second - minutes * 60) || 0;
        var min;
        var sec;
        if (minutes < 10) {
            min = minutes;
        }
        else {
            min = minutes.toFixed(0);
        }
        if (seconds < 10) {
            sec = '0' + seconds;
        }
        else {
            sec = seconds;
        }
        return min + ':' + sec;
    };
    BibleChapterPage.prototype.intoMinutesTotalDuration = function (second) {
        var minutes = Math.floor(second / 60);
        var seconds = Math.floor(second - minutes * 60);
        var sec;
        sec = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + sec;
    };
    // play and pause audio
    // play and pause audio
    //   togglePlayer(type, pause) {
    //     if (type === "chapter" ) {
    //       // this.chapter_audio_first_load = false;
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.isPlaying = !pause;
    //           if (pause){
    //               if(this.chapterMediaAudio){
    //                 //   this.chapterMediaAudio.pause();
    //                   this.musicControls.updateIsPlaying(false);
    //               }
    //           } else {
    //             // this.stopAudioForTtb();
    //             if (this.teachingsMediaAudio){
    //             //   this.teachingsMediaAudio.pause();
    //               this.isPlaying_teachings = false;
    //               this.isPlaying_teachings = false;
    //             }
    //             setTimeout(() => {
    //                 // this.chapterMediaAudio.play({ playAudioWhenScreenIsLocked : true });
    //                 // this.musicControls.updateIsPlaying(true);
    //                 this.isPlaying_teachings = false;
    //                 this.createLockScreenPlayer();
    //             }, 4000);
    //           }
    //         })
    //       } else {
    //         this.isPlaying = !pause;
    //         if (this.player) {
    //           if (pause) {
    //             this.player.pause(this.current_sound_id);
    //             this.musicControls.updateIsPlaying(false);
    //           } else {
    //             this.stopAudioForTtb();
    //             this.current_sound_id =  this.player.play();
    //             this.isPlaying_teachings = false;
    //             this.createLockScreenPlayer();
    //           }
    //         }
    //       }
    //     } else if (type === "teachings") {
    //       // this.teachings_audio_first_load = false;
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.isPlaying_teachings = !pause;
    //           if (pause) {
    //             this.teachingsMediaAudio.pause();
    //             this.musicControls.updateIsPlaying(false);
    //           } else {
    //             this.teachingsMediaAudio.play({ playAudioWhenScreenIsLocked : true });
    //             this.createLockScreenPlayer();
    //             this.isPlaying_teachings = true;
    //           }
    //         })
    //       } else {
    //         if (this.teaching_player) {
    //           this.isPlaying_teachings = !pause;
    //           if (pause) {
    //             this.teaching_player.pause(this.current_sound_id_teaching);
    //             this.musicControls.updateIsPlaying(false);
    //           } else {
    //             this.current_sound_id_teaching = this.teaching_player.play();
    //             this.createLockScreenPlayer();
    //             this.isPlaying_teachings = true;
    //           }
    //         }
    //       }
    //     }
    //   }
    // togglePlayer(type, pause) {
    //     if (type === "chapter") {
    //         this.isPlaying = !pause;
    //         if (this.player) {
    //             if (pause) {
    //                 this.player.pause(this.current_sound_id);
    //             } else {
    //                 this.current_sound_id = this.player.play();
    //             }
    //         }
    //     } else if (type === "teachings") {
    //         if (this.teaching_player) {
    //             this.isPlaying_teachings = !pause;
    //             if (pause) {
    //                 this.teaching_player.pause(this.current_sound_id_teaching);
    //             } else {
    //                 this.current_sound_id_teaching = this.teaching_player.play();
    //             }
    //         }
    //     }
    // }
    // moving the audio forward or backward
    // seek(type) {
    //     if (type === "chapter") {
    //         let newValue = +this.range.value;
    //         let duration = this.player.duration();
    //         this.player.seek(duration * (newValue / 100));
    //     } else if (type === "teachings") {
    //         let newValue = +this.range_teachings.value;
    //         let duration = this.teaching_player.duration();
    //         this.teaching_player.seek(duration * (newValue / 100));
    //     }
    // }
    // seek(type) {
    //     if (type === "chapter") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.chapterMediaAudio.getCurrentPosition().then((position) => {
    //             if(position && position >= 0) {
    //               // get current playback position
    //               let newValue = +this.range.value;
    //               let val = this.chapterMediaAudio.getDuration() * (newValue / 100) * 1000;
    //               if (val) {
    //                 this.chapterMediaAudio.seekTo(val);
    //               }
    //             }
    //           })
    //         })
    //       } else {
    //         let newValue = +this.range.value;
    //         let duration = this.player.duration();
    //         this.player.seek(duration * (newValue / 100));
    //       }
    //     } else if (type === "teachings") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.teachingsMediaAudio.getCurrentPosition().then((position) => {
    //             if(position && position >= 0) {
    //               let newValue = +this.range_teachings.value;
    //               let val = this.teachingsMediaAudio.getDuration() * (newValue / 100) * 1000;
    //               if (val) {
    //                 this.teachingsMediaAudio.seekTo(val);
    //               }
    //             }
    //         })
    //         })
    //       } else {
    //         let newValue = +this.range_teachings.value;
    //         let duration = this.teaching_player.duration();
    //         this.teaching_player.seek(duration * (newValue / 100));
    //       }
    //     }
    //   }
    //   updateProgress(type) {
    //     if (type === "chapter") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.chapterMediaAudio.getCurrentPosition().then((position) => {
    //             this.zone.run( () => {
    //             if (position >= 0){
    //               let seek = Math.floor(position);
    //               this.current_duration = seek > 1 ? this.intoMinutes(seek) : '';
    //               this.previous_chapter_current_duration = this.current_duration;
    //               // this.current_duration = this.intoMinutes(seek);
    //               this.progress = (seek / this.chapterMediaAudio.getDuration()) * 100 || 0;
    //               this.previous_chapter_progress = this.progress;
    //             } else {
    //               this.current_duration = '';
    //               this.progress = 0;
    //               // this.current_duration = this.previous_chapter_current_duration;
    //               // this.progress = this.previous_teaching_progress;
    //             }
    //             });
    //             setTimeout(() => {
    //                 this.updateProgress("chapter");
    //             }, 1000)
    //           });
    //         })
    //       } else {
    //         let seek = Math.floor(this.player.seek());
    //         this.current_duration = this.intoMinutes(seek);
    //         this.progress = (seek / this.player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //           this.updateProgress("chapter");
    //         }, 1000)
    //       }
    //     } else if (type === "teachings") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           this.teachingsMediaAudio.getCurrentPosition().then((position) => {
    //             if (position >= 0){
    //               let seek = Math.floor(position);
    //               this.current_duration_teaching = this.intoMinutes(seek);
    //               this.progress_teachings = (seek / this.teachingsMediaAudio.getDuration()) * 100 || 0;
    //               this.previous_teaching_current_duration = this.current_duration_teaching;
    //               this.previous_teaching_progress = this.progress_teachings;
    //             } else {
    //               this.current_duration_teaching = '';
    //               this.progress_teachings = 0;
    //               // this.current_duration_teaching = this.previous_teaching_current_duration;
    //               // this.progress_teachings = this.previous_teaching_progress;
    //             }
    //             setTimeout(() => {
    //               this.updateProgress("teachings");
    //             }, 1000)
    //           });
    //         })
    //       } else {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.current_duration_teaching = this.intoMinutes(seek);
    //         this.progress_teachings = (seek / this.teaching_player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //           this.updateProgress("teachings");
    //         }, 1000)
    //       }
    //     }
    //   }
    // update the progress bar for audio
    // updateProgress(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         this.current_duration = this.intoMinutes(seek);
    //         this.progress = (seek / this.player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //             this.updateProgress("chapter");
    //         }, 1000)
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.current_duration_teaching = this.intoMinutes(seek);
    //         this.progress_teachings = (seek / this.teaching_player.duration()) * 100 || 0;
    //         setTimeout(() => {
    //             this.updateProgress("teachings");
    //         }, 1000)
    //     }
    // }
    // forward audio by 10 seconds
    // forward(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         this.player.seek(seek + 10);
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.teaching_player.seek(seek + 10);
    //     }
    // }
    // // backward audio by 10 seconds
    // backward(type) {
    //     if (type === "chapter") {
    //         let seek = Math.floor(this.player.seek());
    //         let duration = 10;
    //         if (seek <= 10) {
    //             duration = seek
    //         }
    //         this.player.seek(seek - duration);
    //     } else if (type === "teachings") {
    //         let seek = Math.floor(this.teaching_player.seek());
    //         this.teaching_player.seek(seek - 10);
    //     }
    // }
    // forward audio by 10 seconds
    //       forward(type) {
    //         if (type === "chapter") {
    //           if (this.platform.is('cordova')){
    //             this.platform.ready().then( () => {
    //               // get current playback position
    //               this.chapterMediaAudio.getCurrentPosition().then((position) => {
    //                 console.log("POSITION: ", position);
    //                 let seek = Math.floor(position);
    //                 seek = seek * 1000;
    //                 console.log("SEEK: ", seek);
    //                 this.chapterMediaAudio.seekTo(seek + 10000);
    //               });
    //             })
    //           } else {
    //             let seek = Math.floor(this.player.seek());
    //             this.player.seek(seek + 10);
    //           }
    //         } else if (type === "teachings") {
    //           if (this.platform.is('cordova')){
    //             this.platform.ready().then( () => {
    //               // get current playback position
    //               this.teachingsMediaAudio.getCurrentPosition().then((position) => {
    //                 let seek = Math.floor(position);
    //                 seek = seek * 1000;
    //                 this.teachingsMediaAudio.seekTo(seek + 10000);
    //               });
    //             })
    //           } else {
    //             let seek = Math.floor(this.teaching_player.seek());
    //             this.teaching_player.seek(seek + 10);
    //           }
    //         }
    //       }
    //   // backward audio by 10 seconds
    //   backward(type) {
    //     if (type === "chapter") {
    //       if (this.platform.is('cordova')){
    //         this.platform.ready().then( () => {
    //           // get current playback position
    //           this.chapterMediaAudio.getCurrentPosition().then((position) => {
    //             let seek = Math.floor(position);
    //             seek = seek * 1000;
    //             this.chapterMediaAudio.seekTo(seek - 10000);
    //           });
    //         })
    //       } else {
    //         let seek = Math.floor(this.player.seek());
    //         let duration = 10;
    //         if (seek <= 10){
    //           duration = seek
    //         }
    //         this.player.seek(seek - duration);
    //       }
    //     } else if (type === "teachings") {
    //       if (type === "chapter") {
    //         if (this.platform.is('cordova')){
    //           this.platform.ready().then( () => {
    //             // get current playback position
    //             this.teachingsMediaAudio.getCurrentPosition().then((position) => {
    //               let seek = Math.floor(position);
    //               seek = seek * 1000;
    //               this.teachingsMediaAudio.seekTo(seek - 10000);
    //             });
    //           })
    //         } else {
    //           let seek = Math.floor(this.teaching_player.seek());
    //           this.teaching_player.seek(seek - 10);
    //         }
    //       }
    //     }
    //   }
    // move audio progress bar to some specific verse
    BibleChapterPage.prototype.gotoVerse = function (value) {
        // let seek = Math.floor(value);
        // this.player.seek(seek);
    };
    BibleChapterPage.prototype.countStart = function () {
        var _this = this;
        if (this.isPlaying && this.chapterAudioLoaded) {
            this.chapterAudioListenTime = this.chapterAudioListenTime + 1;
            // console.log("chapter biblke audio == ", this.chapterAudioListenTime)
            if (this.chapterAudioListenTime == 60) {
                this.createAnalytics("durationOfPlay");
                this.chapterAudioListenTime = 0;
            }
        }
        this.counterId = setTimeout(function () {
            _this.countStart();
        }, 1000);
    };
    BibleChapterPage.prototype.countStartTeachings = function () {
        var _this = this;
        if (this.isPlaying_teachings && this.teachingsAudioLoaded) {
            this.teachingsAudioListenTime = this.teachingsAudioListenTime + 1;
            if (this.teachingsAudioListenTime == 60) {
                this.createAnalytics("studyDurationOfPlay");
                this.teachingsAudioListenTime = 0;
            }
        }
        this.teachingCounterId = setTimeout(function () {
            _this.countStartTeachings();
        }, 1000);
    };
    // to play next verse
    BibleChapterPage.prototype.playNextVerse = function () {
        var _this = this;
        if (this.selected_page !== 'sermon-detail') {
            this.read_analytics_fired = false;
            if (this.chapterAudioListenTime > 0) {
                this.createAnalytics('durationOfPlay');
                clearTimeout(this.counterId);
                this.chapterAudioListenTime = 0;
            }
            if (this.teachingsAudioListenTime > 0) {
                this.createAnalytics('studyDurationOfPlay');
                clearTimeout(this.teachingCounterId);
                this.teachingsAudioListenTime = 0;
            }
            this.scrollToTop(); // to scroll view from 1st verse
            if (this.platform.is('cordova')) {
                this.platform.ready().then(function () {
                    _this.chapterMediaAudio.pause();
                });
            }
            this.loader.presentLoading().then(function (loader) {
                _this.is_loading = true;
                var interval = setInterval(function () {
                    _this.loader.stopLoading();
                    _this.is_loading = false;
                    clearInterval(interval);
                }, 2000);
            });
            if (this.mobileView) {
                this.is_loading = true;
                this.leftPosition = 0;
                this.functionCalled = false;
                setTimeout(function () {
                    var obj = _this;
                    if (obj.selected_audio < parseInt(obj.book.number_of_chapters)) {
                        obj.selected_audio = parseInt(obj.chapter.id) + 1;
                        obj.chapter.id = (obj.selected_audio).toString();
                        // obj.rootPath = obj.audioChapters[obj.selected_audio].protocol + '://' + obj.audioChapters[obj.selected_audio].server + obj.audioChapters[obj.selected_audio].root_path;
                        obj.getAudio();
                        obj.close_tab();
                        obj.selected = [];
                        // this.animationPage('next');
                        // setTimeout(() => {
                        _this.display = false;
                        _this.leftPosition = 1000;
                        // }, 100);
                        // if (obj.selected_verse && obj.selected_verse !== "") {
                        //     let index = obj.current_verse_index + 1;
                        //     obj.close_tab();
                        //     // obj.getTeachings(obj.verses[index], index);
                        //     obj.share = true;
                        //     obj.selected_verse = obj.verses[index].verse_text;
                        //     obj.selected_verse_id = obj.verses[index].verse_id;
                        //     obj.selected_verse_obj = obj.verses[index];
                        // }
                        // setting data to take to chapter page
                        var data = {
                            queryParams: {
                                chapter: JSON.stringify(obj.chapter),
                                book: JSON.stringify(obj.book),
                                dam_id: obj.dam_id,
                                page: obj.selected_page,
                                audio_id: _this.bible_chapter_audio_id,
                                // allChapters : JSON.stringify(obj.allChapters),
                                from: 'header',
                            }
                        };
                        obj.router.navigate(['/bible-chapter'], data);
                        _this.loaded = false;
                    }
                    else {
                        _this.loaded = false;
                        _this.display = false;
                        _this.leftPosition = 1000;
                        var required_book_order = parseInt(obj.book.book_order) + 1;
                        _this.setCMPBiblePageNo('next', required_book_order);
                        //  this.setBiblePageNo('next', required_book_order)
                    }
                }, 500);
            }
            else {
                if (this.selected_audio < parseInt(this.book.number_of_chapters)) {
                    this.selected_audio = parseInt(this.chapter.id) + 1;
                    this.chapter.id = (this.selected_audio).toString();
                    // this.rootPath = this.audioChapters[this.selected_audio].protocol + '://' + this.audioChapters[this.selected_audio].server + this.audioChapters[this.selected_audio].root_path;
                    this.getAudio();
                    this.close_tab();
                    this.selected = [];
                    // if (this.selected_verse && this.selected_verse !== "") {
                    //     let index = this.current_verse_index + 1;
                    //     this.close_tab();
                    //     // this.getTeachings(this.verses[index], index);
                    //     this.share = true;
                    //     this.selected_verse = this.verses[index].verse_text;
                    //     this.selected_verse_id = this.verses[index].verse_id;
                    //     this.selected_verse_obj = this.verses[index];
                    // }
                    // setting data to take to chapter page
                    var data = {
                        queryParams: {
                            chapter: JSON.stringify(this.chapter),
                            book: JSON.stringify(this.book),
                            dam_id: this.dam_id,
                            page: this.selected_page,
                            from: 'header',
                            audio_id: this.bible_chapter_audio_id
                        }
                    };
                    this.router.navigate(['/bible-chapter'], data);
                    this.loaded = false;
                }
                else {
                    this.loaded = false;
                    var required_book_order = parseInt(this.book.book_order) + 1;
                    //  this.setBiblePageNo('next', required_book_order);
                    this.setCMPBiblePageNo('next', required_book_order);
                }
            }
        }
        // this.triggerRight = true;
        // this.close_tab();
    };
    // https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
    // to play previous verse
    BibleChapterPage.prototype.playPrevVerse = function () {
        var _this = this;
        if (this.selected_page !== 'sermon-detail') {
            this.read_analytics_fired = false;
            if (this.chapterAudioListenTime > 0) {
                this.createAnalytics('durationOfPlay');
                clearTimeout(this.counterId);
                this.chapterAudioListenTime = 0;
            }
            if (this.teachingsAudioListenTime > 0) {
                this.createAnalytics('studyDurationOfPlay');
                clearTimeout(this.teachingCounterId);
                this.teachingsAudioListenTime = 0;
            }
            this.scrollToTop(); // to scroll view from 1st verse
            this.loader.presentLoading().then(function (loader) {
                _this.is_loading = true;
                if (_this.platform.is('cordova')) {
                    _this.platform.ready().then(function () {
                        _this.chapterMediaAudio.pause();
                    });
                }
                var interval = setInterval(function () {
                    _this.loader.stopLoading();
                    _this.is_loading = false;
                    clearInterval(interval);
                }, 2000);
            });
            if (this.mobileView) {
                this.is_loading = true;
                if (!this.firstChapter) {
                    this.displayPrevious = true;
                    this.rightPosition = 1000;
                }
                setTimeout(function () {
                    _this.functionCalled = false;
                    var obj = _this;
                    var currentPage = 0;
                    if (obj.selected_audio > 1) {
                        _this.displayScene = false;
                        obj.selected_audio = parseInt(obj.chapter.id) - 1;
                        obj.chapter.id = (obj.selected_audio).toString();
                        // obj.rootPath = obj.audioChapters[obj.selected_audio].protocol + '://' + obj.audioChapters[obj.selected_audio].server + obj.audioChapters[obj.selected_audio].root_path;
                        obj.getAudio();
                        obj.close_tab();
                        obj.selected = [];
                        // obj.animationPage('back');
                        setTimeout(function () {
                            _this.rightPosition = 0;
                            // this.displayScene = true;
                            // this.displayPrevious = false;
                        }, 500);
                        setTimeout(function () {
                            _this.displayScene = true;
                            _this.displayPrevious = false;
                        }, 800);
                        // if (!obj.page_loaded) {
                        //     if (obj.selected_verse && obj.selected_verse !== "") {
                        //         let index = obj.current_verse_index;
                        //         obj.getTeachings(obj.verses[index], index);
                        //         obj.share = true;
                        //         obj.selected_verse = obj.verses[index].verse_text;
                        //         obj.selected_verse_id = obj.verses[index].verse_id;
                        //         obj.selected_verse_obj = obj.verses[index];
                        //     }
                        // }
                        // setting data to take to chapter page
                        var data = {
                            queryParams: {
                                chapter: JSON.stringify(obj.chapter),
                                book: JSON.stringify(obj.book),
                                dam_id: obj.dam_id,
                                page: obj.selected_page,
                                // allChapters : JSON.stringify(obj.allChapters),
                                from: 'header',
                                audio_id: _this.bible_chapter_audio_id
                            }
                        };
                        // console.log("if audio moveeeee")
                        obj.router.navigate(['/bible-chapter'], data);
                        _this.loaded = false;
                    }
                    else {
                        _this.loaded = false;
                        _this.rightPosition = 0;
                        _this.displayScene = true;
                        _this.displayPrevious = false;
                        var required_book_order = parseInt(obj.book.book_order);
                        // if(localStorage.getItem('app_language') == 'ml') {
                        _this.setCMPBiblePageNo('prev', required_book_order);
                        // } else {
                        //     this.setBiblePageNo('prev', required_book_order)
                        // }   
                    }
                }, 500);
            }
            else {
                if (this.selected_audio > 1) {
                    this.selected_audio = parseInt(this.chapter.id) - 1;
                    this.chapter.id = (this.selected_audio).toString();
                    // this.rootPath = this.audioChapters[this.selected_audio].protocol + '://' + this.audioChapters[this.selected_audio].server + this.audioChapters[this.selected_audio].root_path;
                    this.getAudio();
                    this.close_tab();
                    this.selected = [];
                    // if (!this.page_loaded) {
                    //     if (this.selected_verse && this.selected_verse !== "") {
                    //         let index = this.current_verse_index;
                    //         this.getTeachings(this.verses[index], index);
                    //         this.share = true;
                    //         this.selected_verse = this.verses[index].verse_text;
                    //         this.selected_verse_id = this.verses[index].verse_id;
                    //         this.selected_verse_obj = this.verses[index];
                    //     }
                    // }
                    // setting data to take to chapter page
                    var data = {
                        queryParams: {
                            chapter: JSON.stringify(this.chapter),
                            book: JSON.stringify(this.book),
                            dam_id: this.dam_id,
                            page: this.selected_page,
                            from: 'header',
                            audio_id: this.bible_chapter_audio_id
                        }
                    };
                    this.router.navigate(['/bible-chapter'], data);
                    this.loaded = false;
                }
                else {
                    this.loaded = false;
                    var required_book_order = parseInt(this.book.book_order) - 1;
                    // this.setBiblePageNo('prev', required_book_order);
                    this.setCMPBiblePageNo('prev', required_book_order);
                }
            }
        }
        // obj.triggerLeft = true;
    };
    BibleChapterPage.prototype.getCopyrightInfo = function (dam_id) {
        // this._bibleService.getCopyrightInfo(dam_id).subscribe((res: any) => {
        //     if (res && res.length) {
        //         if (res[0].mark) {
        //             this.copyright_info = res[0].mark;
        //         }
        //     } else {
        //         let audio_dam_id = dam_id.replace('2ET', '2DA');
        //         this._bibleService.getCopyrightInfo(audio_dam_id).subscribe((res: any) => {
        //             if (res && res.length) {
        //                 if (res[0].mark) {
        //                     this.copyright_info = res[0].mark;
        //                 }
        //             }
        //         });
        //     }
        // });
        var _this = this;
        // fotere text for copy write
        this._bibleService.copyrightTextes(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].church_id).subscribe(function (res) {
            //console.log(res,":get result")
            if (res.status) {
                _this.audio_copyright = res.data.audio_copyright;
                _this.text_copyright = res.data.text_copyright;
                _this.content_copyright = res.data.content_copyright;
            }
        });
    };
    BibleChapterPage.prototype.setBiblePageNo = function (type, book_order) {
        var _this = this;
        var obj = this;
        this._bibleService.getCMPbibleBooks(this.dam_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var book, chapter, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    if (res && res.length > 0) {
                        book = res.find(function (x) { return parseInt(x.bookOrder) === parseInt(book_order); });
                        if (book) {
                            chapter = {
                                id: (type === 'prev' ? parseInt(book.number_of_chapters) : 1),
                                selected: true
                            };
                            data = {
                                queryParams: {
                                    chapter: (type === 'languageChange') ? JSON.stringify(this.chapter) : JSON.stringify(chapter),
                                    book: JSON.stringify(book),
                                    dam_id: this.dam_id,
                                    page: this.dam_id[6],
                                    allChapters: obj.book.chapters,
                                    from: 'header',
                                }
                            };
                            console.log(data, "dataaaaaa");
                            this.router.navigate(['/bible-chapter'], data);
                            // this.ngOnInit();
                        }
                    }
                    else {
                        this.router.navigate(['/bible/new-testament']);
                    }
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                return [2 /*return*/];
            });
        }); });
    };
    BibleChapterPage.prototype.setCMPBiblePageNo = function (type, book_order) {
        var _this = this;
        var obj = this;
        var lang_code = this.langCode;
        this._bibleService.getCMPbibleBooks(this.dam_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data_1, book, chapter, data_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.loader.stopLoading();
                if (res) {
                    if (res && res.length > 0) {
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
                            console.log(obj.selected_page);
                            if (x.testament == obj.selected_page) {
                                data_1.push(x);
                            }
                        });
                        book = data_1.find(function (x) { return parseInt(x.book_order) === parseInt(book_order); });
                        if (book) {
                            chapter = {
                                id: (type === 'prev' ? parseInt(book.number_of_chapters) : 1),
                                selected: true
                            };
                            data_2 = {
                                queryParams: {
                                    chapter: (type === 'languageChange') ? JSON.stringify(this.chapter) : JSON.stringify(chapter),
                                    book: JSON.stringify(book),
                                    dam_id: this.dam_id,
                                    page: obj.selected_page,
                                    allChapters: this.book.chapters,
                                    from: 'header',
                                    audio_id: this.bible_chapter_audio_id
                                }
                            };
                            this.router.navigate(['/bible-chapter'], data_2);
                            this.ngOnInit();
                        }
                    }
                    else {
                        this.router.navigate(['/bible/new-testament']);
                    }
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                return [2 /*return*/];
            });
        }); });
    };
    BibleChapterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getParams();
        // this.event_provider.hidefooter(false, 'bible');
        // if(this.audioService.isAudioPlay == "Play"){
        //     this.audioService.togglePlayer(true);
        // }
        this.event_provider.settranslationsicon(true);
        this.event_provider.showbiblechapterontop(true);
        this.storage.get('BibleFontSize').then(function (res) {
            if (res) {
                _this.fontSize = res;
            }
            else {
                _this.fontSize = 14;
            }
        });
        // debugger;
        var interval = setInterval(function () {
            // this.ngOnInit();
            if (_this.selected_page === 'N') {
                if (_this.from && _this.from === 'header') {
                }
                else {
                    _this.location.back();
                }
            }
            _this.event_provider.settranslationsicon(true);
            clearInterval(interval);
        }, 1000);
        this.translate_event = this.event_provider.openModalTranslation.subscribe(function (value) {
            if (!_this.modal_is_on) {
                _this.modal_is_on = true;
                // this.modalController.getTop().then((val) => {
                //     if (!val) {
                //         this.openTranslationsModal();
                //     }
                // });
            }
        });
    };
    BibleChapterPage.prototype.scrolled = function (event) {
        if (this.theme) {
            // this.hide_on_scroll = true;
            this.close_tab();
        }
    };
    BibleChapterPage.prototype.getParams = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if ((Object.keys(params).length === 0)) {
                params = _this._bibleService.page;
            }
            console.log(params);
            if (params && params.chapter && params.book) {
                _this.chapter = JSON.parse(params.chapter);
                _this.book = JSON.parse(params.book);
                _this.dam_id = params.dam_id;
                _this.bible_chapter_audio_id = params.audio_id;
                _this.page_id = params.page_id;
                _this.sermon_id = params.sermonid;
                _this.page = params.page;
                _this.start_chapter = params.start_chapter,
                    _this.start_verse = params.start_verse,
                    _this.end_chapter = params.end_chapter,
                    _this.end_verse = params.end_verse,
                    _this.bible_id = params.bible_id,
                    // console.log('chapter audio id is: ',this.bible_chapter_audio_id);
                    console.log(params.page);
                _this.selected_page = params.page;
                _this.type = params.type;
                _this.from = params.from;
                _this.allChapters = params.allChapters ? params.allChapters : _this.book.chapters;
                _this.langCode = localStorage.getItem('app_language');
                _this.storage.get('app_language').then(function (res) {
                    // console.log('app language data is: ', res);
                    _this.langCode = res.code;
                    _this.copright_info_damn_id = res.dam_id;
                });
                console.log(_this.allChapters);
                var data = _this.allChapters.split(',');
                //   let finalData: any = [];
                //   data.forEach(function (e) {
                //       let chapter = {
                //           id: e,
                //           selected: false
                //       };
                //       finalData.push(chapter);
                //   });
                //   this.allChapters = finalData;
                //   this.allChapters.forEach((e, i) => {
                //       if (this.chapter.id == i + 1) {
                //           this.activeChapter = i + 1;
                //       }
                //   })
                console.log(params);
                if (params.data) {
                    _this.search_data = JSON.parse(params.data);
                }
                // saving headerdata in storage
                var headerdata = {
                    book: _this.book,
                    chapter: _this.chapter,
                    dam_id: _this.dam_id,
                };
                _this.storage.set("bibleheaderdata", headerdata);
                // setting data on header buttons
                _this.event_provider.setbibleheaderdata(_this.book, _this.chapter, _this.dam_id);
                // getting chapters text
                _this.getChapterText();
                // to get audio location
                _this.getAudioLocation();
                var last_read = {
                    chapter: _this.chapter,
                    book: _this.book,
                    dam_id: _this.dam_id,
                    selected_page: _this.selected_page,
                    type: _this.type
                };
                localStorage.setItem('bible_last_read', JSON.stringify(last_read));
            }
            else if (_this.selected_page !== 'N' && _this.selected_page !== 'O') {
                // getting lang
                var l = localStorage.getItem('app_language');
                if (l) {
                    var lang = l;
                    var resp = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
                    if (resp && resp.language && !resp.language.selection_type) {
                        var bible_lang = resp.language.language_family_code;
                        _this.select_book_ism(bible_lang, true);
                    }
                    else {
                        if (lang == 'Spanish') {
                            _this.select_book_ism("SPN", false);
                        }
                        else {
                            _this.select_book_ism("ENG", false);
                        }
                    }
                }
                else {
                    var resp = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
                    if (resp && resp.language && !resp.language.selection_type) {
                        var bible_lang = resp.language.language_family_code;
                        _this.select_book_ism(bible_lang, true);
                    }
                    else {
                        _this.select_book_ism("ENG", false);
                    }
                }
                // this.chapter = {id: "1", selected: true};
                // this.book = {dam_id: "EN1WEBO", book_id: "Gen", book_name: "Genesis", book_order: "1", number_of_chapters: "50", text_dam_id: "EN1WEBO2ET", chapters: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50"};
                // this.dam_id = "EN1WEBO";
                // this.selected_page = 0;
            }
        });
    };
    // https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
    BibleChapterPage.prototype.ngOnInit = function () {
        // console.log("MY DEVICE LANGUAGE", navigator.language);
        // assigning data received from URL
        this.page_loaded = true;
        // getting chapters text
        // this.getChapterText();
        // getting verses which user has highlighted
        this.getUserVerses();
        this.getLang_Version();
        // current language
        var b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
        if (b) {
            if (b.language) {
                this.current_language = b.language;
            }
            if (b.volume) {
                this.current_volume = b.volume;
            }
        }
        this.getTheme();
    };
    // async openTranslationsModal() {
    //     const modal = await this.modalController.create({
    //         component: BibleTranslationsComponent,
    //         cssClass: 'BibleModal',
    //         componentProps: {
    //             filtered_volumes: this.filtered_volumes,
    //             selected_lang: this.selected_language,
    //             selected_vol: this.selected_volume,
    //             all_langs: this.allLangs
    //         }
    //     });
    //     modal.onDidDismiss().then((res: any) => {
    //         // getting bible status from local storage
    //         this.event_provider.updatebiblelanguage();
    //         let b = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
    //         if (b) {
    //             if (b.language) {
    //                 this.selected_language = b.language;
    //             }
    //             if (b.volume) {
    //                 this.selected_volume = b.volume;
    //             }
    //         }
    //         if (res.data && res.data.selected_dam_id) {
    //             let bible_obj = {
    //                 language: res.data.selected_lang,
    //                 volume: res.data.selected_vol
    //             };
    //             // storing in local storage
    //             localStorage.setItem("bible", JSON.stringify(bible_obj));
    //             this.set_dam_id_lang();
    //             this.setBibleByLanguage(res.data.selected_dam_id);
    //         }
    //         // });
    //         // this.ngOnInit();
    //         this.modal_is_on = false;
    //     });
    //     return await modal.present();
    // }
    BibleChapterPage.prototype.setBibleByLanguage = function (dam_id) {
        var prev_dam_id_page_type = this.dam_id[6];
        var new_dam_id = dam_id + prev_dam_id_page_type;
        this.dam_id = new_dam_id;
        this.setBiblePageNo('languageChange', this.book.book_order);
    };
    BibleChapterPage.prototype.set_dam_id_lang = function () {
        // getting Volumes from API through Service
        // this._bibleService.getVolumes(this.selected_language.language_family_code).subscribe(res => {
        //     if (res) {
        //         this.volumes = res;
        //         let filtered_volumes: any = [];
        //         // ======   filtering volumes according to DAM Id ====================
        //         if (this.volumes && this.volumes.length > 0) {
        //             let current_obj = this.volumes[0];
        //             let current_dam_id = this.volumes[0].dam_id;
        //             current_dam_id = current_dam_id.substring(0, 6);
        //             current_obj.dam_id = current_dam_id;
        //             filtered_volumes.push(current_obj);
        //             for (let i = 0; i < this.volumes.length; i++) {
        //                 if (this.volumes[i].dam_id.includes(current_dam_id)) {
        //                 } else {
        //                     current_dam_id = this.volumes[i].dam_id.substring(0, 6);
        //                     current_obj = this.volumes[i];
        //                     current_obj.dam_id = current_dam_id;
        //                     filtered_volumes.push(current_obj);
        //                 }
        //             }
        //             this.filtered_volumes = filtered_volumes;
        //             // alert to select volume
        //             let res = localStorage.getItem('bible') ? JSON.parse(localStorage.getItem('bible')) : '';
        //             if (res && res.language) {
        //                 if (res.language.language_family_code !== this.selected_language.language_family_code) {
        //                     this.selectvolumealert();
        //                 }
        //             }
        //         } else {
        //             this.filtered_volumes = [];
        //             this.novolumealert();
        //         }
        //         // ============================================================
        //     }
        //     let bible_obj = {
        //         language: this.selected_language,
        //         volume: this.selected_volume
        //     };
        //     localStorage.setItem("bible", JSON.stringify(bible_obj));
        // });
    };
    BibleChapterPage.prototype.getLang_Version = function () {
        var _this = this;
        this.storage.get('bible_languages').then(function (langs) {
            if (langs) {
                _this.allLangs = langs;
                _this.language_families = _this.language_families.concat(langs);
            }
            else {
                // getting volumelanguagefamily from API through Service
                // this._bibleService.volumelanguagefamily().subscribe((res: any) => {
                //     if (res) {
                //         this.allLangs = res;
                //         // concatinating created language families with the one received
                //         this.language_families = this.language_families.concat(res);
                //         this.storage.set('bible_languages', res);
                //     }
                // });
            }
        });
    };
    BibleChapterPage.prototype.novolumealert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Translation',
                            message: 'No Volume for this Language',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BibleChapterPage.prototype.selectvolumealert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Translation',
                            message: 'Select volume to translate',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BibleChapterPage.prototype.set_dam_id_version = function () {
        var bible_obj = {
            language: this.selected_language,
            volume: this.selected_volume
        };
        localStorage.setItem("bible", JSON.stringify(bible_obj));
        // firing event
        this.event_provider.updateoldtest(bible_obj); // calling event
        this.event_provider.updatenewtest(bible_obj.volume.dam_id); // calling event
        // storing bible lang and volume in storage
    };
    BibleChapterPage.prototype.select_book_ism = function (lang_code, selection_type) {
        // this.loader.presentLoading().then( () => {
        // getting Volumes from API through Service
        // this._bibleService.getVolumes(lang_code).subscribe(res => {
        //     if (res) {
        //         let volumes: any = [];
        //         let selected_vol_dam_id;
        //         let selected_vol;
        //         volumes = res;
        //         if (lang_code == 'ENG') {
        //             volumes = volumes.filter(x => x.version_code == 'ESV');
        //         }
        //         if (volumes && volumes.length === 1) {
        //             selected_vol_dam_id = volumes[0].dam_id.substring(0, 6);
        //             selected_vol = volumes[0];
        //         } else if (volumes && volumes.length > 1) {
        //             selected_vol_dam_id = volumes[1].dam_id.substring(0, 6);
        //             selected_vol = volumes[1];
        //         }
        //         if (selected_vol_dam_id) {
        //             this._bibleService.getCMPbibleBooks(selected_vol_dam_id).subscribe((books_resp: any) => {
        //                 if (books_resp) {
        //                     let selected_book = books_resp[0];
        //                     this.storage.get('bibleheaderdata').then(resp => {
        //                         if (resp) {
        //                             this.chapter = resp.chapter;
        //                             this.book = resp.book;
        //                             this.dam_id = resp.dam_id;
        //                             this.selected_page = 0;
        //                             // setting data on header buttons
        //                             this.event_provider.setbibleheaderdata(this.book, this.chapter, this.dam_id);
        //                             selected_vol.dam_id = selected_vol.dam_id.substring(0, 6);
        //                             this.getLangsandSaveLang(lang_code, selected_vol, selection_type);
        //                             // getting chapters text
        //                             this.getChapterText('select ism if');
        //                             // to get audio location
        //                             this.getAudioLocation();
        //                             // this.loader.stopLoading();
        //                         } else {
        //                             this.chapter = { id: "1", selected: true };
        //                             this.book = selected_book;
        //                             this.dam_id = selected_vol_dam_id + 'O';
        //                             this.selected_page = 0;
        //                             // saving headerdata in storage
        //                             var headerdata = {
        //                                 book: this.book,
        //                                 chapter: this.chapter,
        //                                 dam_id: this.dam_id,
        //                             };
        //                             this.storage.set("bibleheaderdata", headerdata);
        //                             // setting data on header buttons
        //                             this.event_provider.setbibleheaderdata(this.book, this.chapter, this.dam_id);
        //                             selected_vol.dam_id = selected_vol.dam_id.substring(0, 6);
        //                             this.getLangsandSaveLang(lang_code, selected_vol, selection_type);
        //                             // getting chapters text
        //                             this.getChapterText('select ism else');
        //                             // to get audio location
        //                             this.getAudioLocation();
        //                             // this.loader.stopLoading();
        //                         }
        //                     });
        //                 }
        //             })
        //         }
        //         // ============================================================
        //     }
        //     //     let bible_obj = {
        //     //         language: this.selected_language,
        //     //         volume: this.selected_volume
        //     //     };
        //     //     // storing bible lang and volume in storage
        //     //     this.storage.set('bible', bible_obj).then(() => {
        //     //     })
        // });
        // })
    };
    BibleChapterPage.prototype.getLangsandSaveLang = function (lang_code, vol, selection_type) {
        this.storage.get('bible_languages').then(function (langs) {
            if (langs) {
                var language_families = langs;
                var current_language_family = language_families.find(function (x) { return x.language_family_code === lang_code; });
                if (current_language_family) {
                    if (selection_type === false) {
                        // if lang is set from bible page
                        current_language_family.selection_type = 'default';
                    }
                    var bible_obj = {
                        language: current_language_family,
                        volume: vol
                    };
                    // storing bible lang and volume in storage
                    localStorage.setItem("bible", JSON.stringify(bible_obj));
                }
            }
            else {
                // getting volumelanguagefamily from API through Service
                // this._bibleService.volumelanguagefamily().subscribe((res: any) => {
                //     if (res) {
                //         // concatinating created language families with the one received
                //         let language_families = res;
                //         let current_language_family = language_families.find(x => x.language_family_code === lang_code);
                //         if (current_language_family) {
                //             if (selection_type === false) {
                //                 // if lang is set from bible page
                //                 current_language_family.selection_type = 'default';
                //             }
                //             let bible_obj = {
                //                 language: current_language_family,
                //                 volume: vol
                //             };
                //             // storing bible lang and volume in storage
                //             localStorage.setItem("bible", JSON.stringify(bible_obj));
                //         }
                //         this.storage.set('bible_languages', res);
                //     }
                // });
            }
        });
    };
    // set_dam_id_version() {
    //     let bible_obj = {
    //         language: this.selected_language,
    //         volume: this.selected_volume
    //     };
    //     // storing bible lang and volume in storage
    //     this.storage.set('bible', bible_obj).then(() => {
    //         // firing event
    //         this.event_provider.updateoldtest( bible_obj );               // calling event
    //         this.event_provider.updatenewtest( bible_obj.volume.dam_id );               // calling event
    //     })
    // }
    BibleChapterPage.prototype.saveLastReading = function () {
        var current_url = new URL(window.location.href);
        var complete_path = current_url.href;
        var body = JSON.stringify({
            auth: 'Bearer ' + this.token,
            church_id: this.theme.ch_id,
            path: complete_path,
            account_donor_id: this.current_user.id,
        });
        this._bibleService.saveLastOff(body).subscribe(function (res) {
        });
    };
    BibleChapterPage.prototype.getUserVerses = function () {
        var _this = this;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                var donor_id = val.user.id;
                _this.ch_id = val.user.id_church;
                // getting saved verses from API through Service
                _this._bibleService.getVerses(donor_id, _this.ch_id).subscribe(function (res) {
                    if (res.status) {
                        _this.highlighted_verses = res.verses;
                    }
                });
            }
        });
    };
    // opening modal to share
    BibleChapterPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var share_data_1, share_data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // ======= pausing player if its is ON ================
                if (this.player) {
                    // this.togglePlayer("chapter", true);
                }
                if (this.teaching_player) {
                    // this.togglePlayer("teachings", true);
                }
                // ====================================================
                if (this.platform.is('cordova')) {
                    this.is_cordova = true;
                }
                if (this.is_cordova) {
                    share_data_1 = '"' + this.selected_verse + '" ' + this.book.book_name + ' ' + this.chapter.id + ':' + this.selected_verse_id;
                    this.socialSharing.share(share_data_1).then(function (data) {
                    }, function (error) {
                        console.log("Error: ", error);
                    });
                }
                else {
                    share_data = ' ' + this.selected_verse + ' ' + this.book.book_name + ' ' + this.chapter.id + ':' + this.selected_verse_id;
                    this.selected_verse = share_data;
                    if (this.teaching_icon) {
                        this.selected_verse = this.selected_verse + ',  Teaching Link: ' + this.teaching_video ? this.teaching_video : this.teaching_audio;
                    }
                    this.socialSharing.share(this.selected_verse).then(function (res) {
                    }, function (err) {
                    });
                    // const modal = await this.modalController.create({
                    //     component: SharingModalComponent,
                    //     backdropDismiss: true,
                    //     cssClass: 'BibleModal',
                    //     componentProps: {
                    //         selected_verse: this.selected_verse,
                    //         selected_verse_id: this.selected_verse_id,
                    //         selected_chapter_id: this.chapter.id,
                    //         selected_book_name: this.book.book_name,
                    //         ch_id: this.theme.ch_id,
                    //         have_teaching: this.teaching_icon,
                    //         teaching_link: this.teaching_video ? this.teaching_video : this.teaching_audio
                    //     }
                    // });
                    // return await modal.present();
                }
                return [2 /*return*/];
            });
        });
    };
    BibleChapterPage.prototype.getAudio = function (from) {
        var _this = this;
        if (this.type === "search") {
            var dam_id = this.search_data.dam_id.replace("ET", "DA");
            // getting chapter audio from API through Service
            this._bibleService.getBookChapterAudio(dam_id, this.search_data.book_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res) {
                        this.chapterAudio = res.find(function (x) { return x.chapter_id === _this.search_data.chapter_id; });
                        if (from != 'oninit getAudio') {
                            this.getChapterText('get audio if');
                        }
                        if (this.chapterAudio && this.chapterAudio.url) {
                            this.audioUrl = this.chapterAudio.url;
                            // this.start('chapter', this.audioUrl);
                        }
                        else {
                            this.audioUrl = '';
                        }
                    }
                    else if (!res) {
                        this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            // if(localStorage.getItem('app_language') == 'ml') {
            var dam_id = this.dam_id;
            this._bibleService.getBookChapterAudio(dam_id, this.book.book_id, this.bible_chapter_audio_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res) {
                        if (from != 'oninit getAudio') {
                            this.getChapterText('get audio else');
                        }
                        console.log(this.chapter);
                        this.chapterAudio = res.find(function (x) { return parseInt(x.number) === parseInt(_this.chapter.id); });
                        if (this.chapterAudio && this.chapterAudio.url) {
                            this.audioUrl = this.chapterAudio.url;
                            // this.start('chapter', this.audioUrl);
                        }
                        else {
                            this.audioUrl = '';
                        }
                    }
                    else if (!res) {
                        this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                    }
                    return [2 /*return*/];
                });
            }); });
            // } else {
            //     let dam_id = 
            // this.dam_id + '2DA';
            // this._bibleService.getBookChapterAudio(dam_id, this.book.book_id).subscribe(async (res: any) => {
            //     if (res) {
            //         if(from != 'oninit getAudio')  {
            //             this.getChapterText('get audio else');
            //         }
            //         this.chapterAudio = res.find(x => parseInt(x.chapter_id) === parseInt(this.chapter.id));
            //         if (this.chapterAudio && this.rootPath) {
            //             this.audioUrl = this.rootPath + '/' + this.chapterAudio.path;
            //             this.start('chapter', this.audioUrl);
            //         } else {
            //             this.audioUrl = '';
            //         }
            //     } else if (!res) {
            //         this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
            //     }
            // });
            // }
        }
    };
    BibleChapterPage.prototype.getAudioLocation = function (from) {
        this.selected_audio = parseInt(this.chapter.id);
        this.getAudio();
        // getting audio location from API through Service
        // this._bibleService.getAudioLocation().subscribe(async (res: any) => {
        //     if (res) {
        //         this.rootPath = res[0].protocol + '://' + res[0].server + res[0].root_path;
        //         this.selected_audio = parseInt(this.chapter.id);
        //         this.audioChapters = res;
        //         this.getAudio('oninit getAudio');
        //     } else if (!res) {
        //         this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
        //     }
        // })
    };
    BibleChapterPage.prototype.scrollToTop = function () {
        document.getElementById('verses_content').scrollTop = 0;
    };
    BibleChapterPage.prototype.createAnalytics = function (metricType, trackUrl) {
        console.log(this.audioUrl);
        var analyticsObject = {
            title: this.book.book_name + ' ' + this.chapter.id,
            testament: this.testament_type == 'N' ? 'New Testament' : 'Old Testament',
            book_name: this.book.book_name,
            translation: this.dam_id,
            app_section: 'Bible Section',
            media_format: metricType == 'bible-chapter-read' ? 'Text' : 'Audio',
            track_url: metricType == 'study' || metricType == 'studyDurationOfPlay'
                ? 'https://teachings-cdn.thruthebible.io/' + this.teaching_audio : this.audioUrl,
            duration: this.chapterAudioListenTime > 0 || this.teachingsAudioListenTime > 0 ?
                (metricType == 'study' || metricType == 'studyDurationOfPlay'
                    ? this.teachingsAudioListenTime : this.chapterAudioListenTime) : undefined
        };
        console.log(analyticsObject);
        if (metricType == 'onFirstPlay') {
            delete analyticsObject.duration;
            console.log("trigger", "bible_chapter_audio_start", JSON.stringify(analyticsObject));
            this.analyticsFirebase.logEvent('bible_chapter_audio_start', analyticsObject);
        }
        else if (metricType == 'durationOfPlay') {
            console.log("trigger", "bible_chapter_audio_duration", JSON.stringify(analyticsObject));
            this.analyticsFirebase.logEvent('bible_chapter_audio_duration', analyticsObject);
        }
        else if (metricType == 'bible-chapter-read') {
            console.log("trigger", "bible_chapter_read", JSON.stringify(analyticsObject));
            delete analyticsObject.duration;
            delete analyticsObject.track_url;
            console.log(analyticsObject, "11111");
            this.analyticsFirebase.logEvent('bible_chapter_read', analyticsObject);
        }
        else if (metricType == 'study') {
            delete analyticsObject.duration;
            console.log("trigger", "study_program_start", JSON.stringify(analyticsObject));
            this.analyticsFirebase.logEvent('study_program_start', analyticsObject);
        }
        else if (metricType == 'studyDurationOfPlay') {
            console.log("trigger", "study_program_duration", JSON.stringify(analyticsObject));
            this.analyticsFirebase.logEvent('study_program_duration', analyticsObject);
        }
    };
    BibleChapterPage.prototype.getChapterText = function (from) {
        var _this = this;
        //  console.log('way2');
        var bible_id = this.bible_id;
        var data = {
            bible_id: bible_id,
            book_id: this.book.id,
            start_chapter: this.start_chapter,
            start_verse: this.start_verse,
            end_chapter: this.end_chapter,
            end_verse: this.end_verse
        };
        if (!this.read_analytics_fired) {
            this.createAnalytics('bible-chapter-read');
            this.read_analytics_fired = true;
        }
        // this.event_provider.hideBibleHeaderFooter(false);
        if (this.mobileView) {
            //    console.log('way777777');
            if (this.type === "search") {
                // console.log('way10 outside the mobileeeee');
                // getting chapter text from API through Service
                this._bibleService.getChapterText(this.search_data.dam_id, this.search_data.book_id, this.search_data.chapter_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (res) {
                            this.verses = res;
                            this.scrollToTop(); // to scroll view from 1st verse
                        }
                        else if (!res) {
                            this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                //   console.log('way88');
                if (this.page === 'sermon-detail' || this.page === 'today-study-card' || this.page === 'journey' || this.page === "study-download-detail") {
                    //  let dam_id = this.dam_id;
                    // getting chapter text from API through Service
                    if (this.nextChapterSavedVerses.length > 0) {
                        if (this.nextChapterSavedVerses[0].chapter_id == this.activeChapter) {
                            this.verses = this.nextChapterSavedVerses;
                        }
                    }
                    if (this.prevChapterSavedVerses.length > 0) {
                        if (this.prevChapterSavedVerses[0].chapter_id == this.activeChapter) {
                            this.verses = this.nextChapterSavedVerses;
                        }
                    }
                    //  console.log('way9 data for veses is: ', data);
                    this._bibleService.getStartandEndVersewithChapter(data).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var i, j;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (res.length > 0) {
                                this.verses = res;
                                setTimeout(function () {
                                    _this.loaded = true;
                                }, 2000);
                                this.scrollToTop();
                                for (i = 0; i < this.verses.length; i++) {
                                    this.verses[i].verse_text = this.verses[i].content;
                                    for (j = 0; j < this.highlighted_verses.length; j++) {
                                        if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                            this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                            this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                            this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                            this.selected[i] = 'selected';
                                        }
                                    }
                                    //   if (!this.functionCalled) {
                                    //       this.getCMPNextChapterText();
                                    //       this.getCMPpreviousChapterText();
                                    //       this.functionCalled = true;
                                    //   }
                                }
                                //  console.log('verses are: ', this.verses);     
                            }
                            else {
                                this.verses.length = 0;
                                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.NoBibleExist : 'No bible exist'), 'danger');
                            }
                            return [2 /*return*/];
                        });
                    }); }, function (error) {
                        _this.verses.length = 0;
                        _this.toast.presentToastWithOptions('sorry', (_this.alertMessage ? _this.alertMessage.NoBibleExist : 'No bible exist'), 'warning');
                    });
                }
                else {
                    //  console.log('here inside the mobile view elseeee');
                    // if(localStorage.getItem('app_language') == 'ml') {
                    var dam_id = this.dam_id;
                    // getting chapter text from API through Service
                    if (this.nextChapterSavedVerses.length > 0) {
                        if (this.nextChapterSavedVerses[0].chapter_id == this.activeChapter) {
                            this.verses = this.nextChapterSavedVerses;
                        }
                    }
                    if (this.prevChapterSavedVerses.length > 0) {
                        if (this.prevChapterSavedVerses[0].chapter_id == this.activeChapter) {
                            this.verses = this.nextChapterSavedVerses;
                        }
                    }
                    this._bibleService.getChapterText(dam_id, this.book.book_id, this.book.book_id + '.' + this.chapter.id, 'ml').subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var i, j;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (res) {
                                this.verses = res;
                                setTimeout(function () {
                                    _this.loaded = true;
                                }, 2000);
                                this.scrollToTop(); // to scroll view from 1st verse
                                // ====================== assigning the selected verse=============
                                for (i = 0; i < this.verses.length; i++) {
                                    this.verses[i].verse_text = this.verses[i].content;
                                    for (j = 0; j < this.highlighted_verses.length; j++) {
                                        if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                            this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                            this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                            this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                            this.selected[i] = 'selected';
                                        }
                                    }
                                    if (!this.functionCalled) {
                                        this.getCMPNextChapterText();
                                        this.getCMPpreviousChapterText();
                                        this.functionCalled = true;
                                    }
                                }
                                // ================================================================
                            }
                            else if (!res) {
                                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                if (this.theme) {
                    this.getCopyrightInfo(this.langCode);
                }
                // }
                //  else {
                //     let dam_id = this.dam_id + '2ET';
                //     // getting chapter text from API through Service
                //     if (this.nextChapterSavedVerses.length > 0) {
                //         if (this.nextChapterSavedVerses[0].chapter_id == this.activeChapter) {
                //             this.verses = this.nextChapterSavedVerses
                //         }
                //     }
                //     if (this.prevChapterSavedVerses.length > 0) {
                //         if (this.prevChapterSavedVerses[0].chapter_id == this.activeChapter) {
                //             this.verses = this.nextChapterSavedVerses
                //         }
                //     }
                //     if (!this.functionCalled) {
                //     this.getNextChapterText();
                //     this.getpreviousChapterText();
                // }
                //     this._bibleService.getChapterText(dam_id, this.book.book_id, this.chapter.id).subscribe(async (res: any) => {
                //         if (res) {
                //             this.verses = res;
                //             this.scrollToTop();   // to scroll view from 1st verse
                //             // ====================== assigning the selected verse=============
                //             for (let i = 0; i < this.verses.length; i++) {
                //                 for (let j = 0; j < this.highlighted_verses.length; j++) {
                //                     if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                //                         this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                //                         this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                //                         this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                //                         this.selected[i] = 'selected';
                //                     }
                //                 }
                //             }
                //             // ================================================================
                //         } else if (!res) {
                //             this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                //         }
                //     })
                //     if (this.theme) {
                //         this.getCopyrightInfo(dam_id);
                //     }
                // }
            }
        }
        else {
            if (this.type === "search") {
                // getting chapter text from API through Service
                this._bibleService.getChapterText(this.search_data.dam_id, this.search_data.book_id, this.search_data.chapter_id).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (res) {
                            this.verses = res;
                            setTimeout(function () {
                                _this.loaded = true;
                            }, 2000);
                            this.scrollToTop(); // to scroll view from 1st verse
                        }
                        else if (!res) {
                            this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                //  console.log('way3 outside the mobile view');
                if (this.page === 'sermon-detail' || this.page === 'today-study-card' || this.page === 'journey' || this.page === "study-download-detail") {
                    this._bibleService.getStartandEndVersewithChapter(data).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var i, j;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            if (res.length > 0) {
                                this.verses = res;
                                setTimeout(function () {
                                    _this.loaded = true;
                                }, 2000);
                                this.scrollToTop();
                                for (i = 0; i < this.verses.length; i++) {
                                    this.verses[i].verse_text = this.verses[i].content;
                                    for (j = 0; j < this.highlighted_verses.length; j++) {
                                        if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                            this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                            this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                            this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                            this.selected[i] = 'selected';
                                        }
                                    }
                                }
                            }
                            else {
                                this.verses.length = 0;
                                this.toast.presentToastWithOptions('sorry', (this.alertMessage ? this.alertMessage.NoBibleExist : 'No bible exist'), 'warning');
                            }
                            return [2 /*return*/];
                        });
                    }); }, function (error) {
                        _this.verses.length = 0;
                        _this.toast.presentToastWithOptions('sorry', (_this.alertMessage ? _this.alertMessage.NoBibleExist : 'No bible exist'), 'warning');
                    });
                }
                else {
                    var dam_id = this.dam_id;
                    // getting chapter text from API through Service
                    this._bibleService.getChapterText(dam_id, this.book.book_id, this.book.book_id + '.' + this.chapter.id, this.book.lang_code).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var i, j;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            //    console.log('way5 response is: ', res);
                            if (res) {
                                this.verses = res;
                                setTimeout(function () {
                                    _this.loaded = true;
                                }, 2000);
                                this.scrollToTop(); // to scroll view from 1st verse
                                // ====================== assigning the selected verse=============
                                for (i = 0; i < this.verses.length; i++) {
                                    this.verses[i].verse_text = this.verses[i].content;
                                    for (j = 0; j < this.highlighted_verses.length; j++) {
                                        if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                            this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                            this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                            this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                            this.selected[i] = 'selected';
                                        }
                                    }
                                }
                                //   console.log('way6 verses are: ', this.verses);
                                // ================================================================
                            }
                            else if (!res) {
                                this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                if (this.theme) {
                    this.getCopyrightInfo(this.langCode);
                }
            }
        }
    };
    // getNextChapterText() {
    //         let dam_id = this.dam_id ;
    //         // getting chapter text from API through Service
    //         let chap_id = Number(this.chapter.id) + 1;
    //         // this.allChapters.forEach((elem) => {
    //         // })
    //         this._bibleService.getChapterText(dam_id, this.book.book_id, chap_id.toString()).subscribe(async (res: any) => {
    //             if (res) {
    //                 this.nextChapterSavedVerses = res;
    //                 this.display = true;
    //                 this.functionCalled = true;
    //                 this.scrollToTop();   // to scroll view from 1st verse
    //                 // ====================== assigning the selected verse=============
    //                 for (let i = 0; i < this.verses.length; i++) {
    //                     for (let j = 0; j < this.highlighted_verses.length; j++) {
    //                         if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
    //                             this.highlighted_verses[j].book_order === this.verses[i].book_order &&
    //                             this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
    //                             this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
    //                             this.selected[i] = 'selected';
    //                         }
    //                     }
    //                     this.triggerLeft = false;
    //                     this.triggerRight = false;
    //                 }
    //                 // ================================================================
    //             } else if (!res) {
    //                 this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //             }
    //         })
    // }
    BibleChapterPage.prototype.getCMPNextChapterText = function () {
        var _this = this;
        var dam_id = this.dam_id;
        // getting chapter text from API through Service
        var chap_id = Number(this.chapter.id) + 1;
        // this.allChapters.forEach((elem) => {
        // })
        this._bibleService.getChapterText(dam_id, this.book.book_id, this.book.book_id + '.' + chap_id, this.book.lang_code).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var i, j;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res) {
                    this.nextChapterSavedVerses = res;
                    setTimeout(function () {
                        _this.loaded = true;
                    }, 2000);
                    // console.log(this.nextChapterSavedVerses)
                    this.display = true;
                    this.functionCalled = true;
                    this.scrollToTop(); // to scroll view from 1st verse
                    // ====================== assigning the selected verse=============
                    for (i = 0; i < this.nextChapterSavedVerses.length; i++) {
                        this.nextChapterSavedVerses[i].verse_text = this.nextChapterSavedVerses[i].content;
                        for (j = 0; j < this.highlighted_verses.length; j++) {
                            if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                this.selected[i] = 'selected';
                            }
                        }
                        this.triggerLeft = false;
                        this.triggerRight = false;
                    }
                    // ================================================================
                }
                else if (!res) {
                    this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                }
                return [2 /*return*/];
            });
        }); });
    };
    // getpreviousChapterText() {
    //         let dam_id = this.dam_id + '2ET';
    //         // getting chapter text from API through Service
    //         let chap_id = Number(this.chapter.id) - 1;
    //         if(chap_id > 0) {
    //             this.firstChapter = false;
    //             this._bibleService.getChapterText(dam_id, this.book.book_id, chap_id.toString()).subscribe(async (res: any) => {
    //                 if (res) {
    //                     // this.loader.stopLoading();
    //                     this.prevChapterSavedVerses = res;
    //                     this.scrollToTop();   // to scroll view from 1st verse
    //                     // ====================== assigning the selected verse=============
    //                     for (let i = 0; i < this.verses.length; i++) {
    //                         for (let j = 0; j < this.highlighted_verses.length; j++) {
    //                             if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
    //                                 this.highlighted_verses[j].book_order === this.verses[i].book_order &&
    //                                 this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
    //                                 this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
    //                                 this.selected[i] = 'selected';
    //                             }
    //                         }
    //                         this.triggerLeft = false;
    //                         this.triggerRight = false;
    //                     }
    //                     // ================================================================
    //                 } else if (!res) {
    //                     this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
    //                 }
    //             })
    //         } else {
    //             this.firstChapter = true;
    //         }
    // }
    BibleChapterPage.prototype.getCMPpreviousChapterText = function () {
        var _this = this;
        var dam_id = this.dam_id;
        // getting chapter text from API through Service
        var chap_id = Number(this.chapter.id) - 1;
        if (chap_id > 0) {
            this.firstChapter = false;
            this._bibleService.getChapterText(dam_id, this.book.book_id, this.book.book_id + '.' + chap_id, this.langCode).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var i, j;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    if (res) {
                        // this.loader.stopLoading();
                        this.prevChapterSavedVerses = res;
                        setTimeout(function () {
                            _this.loaded = true;
                        }, 2000);
                        this.scrollToTop(); // to scroll view from 1st verse
                        // ====================== assigning the selected verse=============
                        for (i = 0; i < this.prevChapterSavedVerses.length; i++) {
                            this.prevChapterSavedVerses[i].verse_text = this.prevChapterSavedVerses[i].content;
                            for (j = 0; j < this.highlighted_verses.length; j++) {
                                if (this.highlighted_verses[j].book_id === this.verses[i].book_id &&
                                    this.highlighted_verses[j].book_order === this.verses[i].book_order &&
                                    this.highlighted_verses[j].chap_id === this.verses[i].chapter_id &&
                                    this.highlighted_verses[j].verse_id === this.verses[i].verse_id) {
                                    this.selected[i] = 'selected';
                                }
                            }
                            this.triggerLeft = false;
                            this.triggerRight = false;
                        }
                        // ================================================================
                    }
                    else if (!res) {
                        this.toast.presentToastWithOptions(res.message, (this.alertMessage ? this.alertMessage.SomeThingWrong : 'Something Went Wrong'), 'danger');
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        else {
            this.firstChapter = true;
        }
    };
    BibleChapterPage.prototype.goBackToShowDetail = function () {
        // this.event_provider.hidefooter(true, 'other');
        if (this.selected_page == 'sermon-detail') {
            if (this.page_id !== '' && this.page_id != null) {
                this.router.navigate(['/show-detail', { page_id: this.page_id, id: this.sermon_id }]);
            }
            else {
                this.location.back();
            }
        }
        else if (this.selected_page == 'today-study-card') {
            this.router.navigate(['/today-study-card']);
        }
        else if (this.selected_page === 'journey') {
            this.router.navigate(['/journey']);
        }
        else if (this.selected_page === "study-download-detail") {
            this.location.back();
        }
        else if (this.selected_page == 'O') {
            this._bibleService.book_id = this.book.book_id;
            this._bibleService.chapter_id = this.chapter.id;
            this.router.navigate(['/bible/old-testament']);
        }
        else if (this.selected_page == 'N') {
            this._bibleService.book_id = this.book.book_id;
            this._bibleService.chapter_id = this.chapter.id;
            this.router.navigate(['/bible/new-testament']);
        }
    };
    BibleChapterPage.prototype.gotobackPage = function () {
        var _this = this;
        // this.event_provider.hidefooter(true, 'other');
        if (this.theme) {
            //zb changes
            // if (this.dam_id.charAt(6) == 'O') {
            //     this.router.navigate(['/bible/old-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
            // } else if (this.dam_id.charAt(6) == 'N') {
            //     this.router.navigate(['/bible/new-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
            // }
            if (this.selected_page == 'O') {
                this._bibleService.book_id = this.book.book_id;
                this._bibleService.chapter_id = this.chapter.id;
                this.router.navigate(['/bible/old-testament']);
            }
            else if (this.selected_page == 'N') {
                this._bibleService.book_id = this.book.book_id;
                this._bibleService.chapter_id = this.chapter.id;
                this.router.navigate(['/bible/new-testament']);
            }
            else {
                if (this.book.testament === 'O') {
                    this._bibleService.book_id = this.book.book_id;
                    this._bibleService.chapter_id = this.start_chapter;
                    this.router.navigate(['/bible/old-testament']);
                }
                else if (this.book.testament === 'N') {
                    this._bibleService.book_id = this.book.book_id;
                    this._bibleService.chapter_id = this.start_chapter;
                    this.router.navigate(['/bible/new-testament']);
                }
                var interval_1 = setInterval(function () {
                    // this.event_provider.hidefooter(false, 'new');
                    _this.common.biblePageEnable = false;
                    clearInterval(interval_1);
                }, 50);
            }
        }
        // else {
        //     let interval = setInterval(() => {
        //         this.event_provider.hidefooter(false, 'new');
        //         this.common.biblePageEnable = false;
        //         clearInterval(interval);
        //     }, 50);
        //     this.location.back();
        // }
    };
    // gotobackPage(book) {
    //     this.event_provider.hidefooter(true, 'other');
    //     if (this.theme) {
    //         if(localStorage.getItem('app_language') == 'ml') {
    //             console.log(this.selected_page , book)
    //             if (book == 'O') {
    //                 this.router.navigate(['/bible/old-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
    //             } else if (book == 'N') {
    //                 this.router.navigate(['/bible/new-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
    //             }
    //         } else {
    //             if (this.dam_id.charAt(6) == 'O') {
    //                 this.router.navigate(['/bible/old-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
    //             } else if (this.dam_id.charAt(6) == 'N') {
    //                 this.router.navigate(['/bible/new-testament', { book_id: this.book.book_id, chapter_id: this.chapter.id }]);
    //             } 
    //         }
    //     } else {
    //         let interval = setInterval(() => {
    //             this.event_provider.hidefooter(false, 'new');
    //             this.common.biblePageEnable = false;
    //             clearInterval(interval);
    //         }, 50);
    //         this.location.back();
    //     }
    // }
    // gotobackPage() {
    //     if (this.bibleButtonDamId.charAt(6) == 'O'){
    //         this.router.navigate(['/bible/old-testament', { book_id: this.bibleButtonBook.book_id, chapter_id: this.bibleButtonChapter.id}]);
    //     } else if (this.bibleButtonDamId.charAt(6) == 'N'){
    //         this.router.navigate(['/bible/new-testament', { book_id: this.bibleButtonBook.book_id, chapter_id: this.bibleButtonChapter.id}]);
    //     }
    //
    //     // this.location.back();
    // }
    BibleChapterPage.prototype.gotoChat = function () {
        // ======= pausing player if its is ON ================
        if (this.player) {
            // this.togglePlayer("chapter", true);
        }
        if (this.teaching_player) {
            // this.togglePlayer("teachings", true);
        }
        // ====================================================
        // =================== take verse to chat ======================
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.app_url + this.router.url;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        if (this.theme.ch_id === '1265') {
            this.router.navigate(['/chat']);
        }
        else {
            this.router.navigate(['/home-tabs/chat']);
        }
        // =============================================================
        this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.link_copied_to_clipboard : 'Link Copied to Clipboard'), (this.alertMessage ? this.alertMessage.LinkCopied : 'Link Copied'), 'success');
    };
    BibleChapterPage.prototype.getTheme = function () {
        var _this = this;
        this.storage.get('theme').then(function (res) {
            if (res) {
                _this.theme = res;
                _this.getUser();
            }
        });
    };
    BibleChapterPage.prototype.getUser = function () {
        var _this = this;
        this.storage.get('user').then(function (res) {
            if (res != null && res != 'guest') {
                _this.current_user = res.user;
                _this.token = res.auth.access_token;
                _this.saveLastReading();
                // this.socketInitialization(this.current_user);
            }
        });
    };
    // socketInitialization(user) {
    //     this.socket.connect();
    //     // let room = this.conversation.unique_id;
    //     let name = user.first_last_name;
    //
    //     // emmitted to set socket
    //     this.socket.emit('set-socket', name);
    //
    //
    //     // emmited to set name
    //     this.socket.emit('set-name', name);
    //
    //
    //     this.socket.fromEvent('message').subscribe((message: any) => {
    //         this.socket.emit('receive-message');
    //     });
    //
    //     this.socket.fromEvent('group').subscribe(room => {
    //     });
    //
    //     this.socket.fromEvent('joined').subscribe(room => {
    //     });
    //
    // }
    // saving and sending message
    BibleChapterPage.prototype.save_message = function () {
        var _this = this;
        if (!this.current_user) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.LoginFirst : 'Login First'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), "warning");
            return;
        }
        // message field validation
        if (!this.message) {
            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.type_message_first : 'Type Message first'), (this.alertMessage ? this.alertMessage.missing_required_fields : 'Missing Required Fields'), "warning");
            return;
        }
        // sending progress is ON
        var body = JSON.stringify({
            auth: 'Bearer ' + this.token,
            church_id: this.theme.ch_id,
            version: this.current_volume.volume_name,
            book_id: this.selected_verse_obj.book_id,
            chapter_id: this.selected_verse_obj.chapter_id,
            verse_id: this.selected_verse_obj.verse_id,
            message_text: this.message,
            account_donor_id: this.current_user.id,
        });
        this.chatService.savebiblemessage(body).subscribe(function (res) {
            // emitting event to socket
            //this.socket.emit('send-message', {text: this.message});
            _this.message = '';
            _this.loadMessages(_this.selected_verse_obj);
            return true;
        }, function (err) {
            _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.error_sending_message : 'Error sending message!'), (_this.alertMessage ? _this.alertMessage.error : 'ERROR'), "warning");
            return;
        });
    };
    BibleChapterPage.prototype.loadMessages = function (verse) {
        var _this = this;
        var body = JSON.stringify({
            church_id: this.theme.ch_id,
            version: this.current_volume.volume_name,
            book_id: verse.book_id,
            chapter_id: verse.chapter_id,
            verse_id: verse.verse_id,
        });
        this.chatService.get_bible_messages(body).subscribe(function (res) {
            if (res) {
                _this.current_verse_messages = res.message;
            }
            // emitting event to socket
            // this.socket.emit('send-message', {text: this.message});
            // this.load_messages();
            return true;
        });
    };
    BibleChapterPage.prototype.check = function () {
    };
    BibleChapterPage.prototype.checkIfVerseHighlighted = function (verse) {
        for (var j = 0; j < this.highlighted_verses.length; j++) {
            if (this.highlighted_verses[j].book_id === verse.book_id &&
                this.highlighted_verses[j].book_order === verse.book_order &&
                this.highlighted_verses[j].chap_id === verse.chapter_id &&
                this.highlighted_verses[j].verse_id === verse.verse_id) {
                return true;
            }
        }
    };
    //     getTeachings(verse, i) {
    //         // if (this.hide_on_scroll === true){
    //         //     this.hide_on_scroll = false;
    //         // } else {
    //         //     this.hide_on_scroll = false;
    //         this.share = true;
    //             this.focus_tab = true;
    //             this.selected_verse = verse.verse_text;
    //             this.selected_verse_id = verse.verse_id;
    //             this.selected_verse_obj = verse;
    // // load messages
    //             this.loadMessages(verse);
    //             if (this.selected[i] !== 'selected') {
    //                 this.selected = []; // to dis-select verses
    //                 this.selected[i] = "selected";
    //                 this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //             } else {
    //                 if(!this.checkIfVerseHighlighted(verse)){
    //                     this.selected[i] = '';
    //                     this.close_tab();
    //                   } else {
    //                     this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //                   }
    //             }
    //             this.current_verse_index = i;
    //             let dam_id = this.dam_id + '2DA';
    //             // getting selected verse time from API through Service
    //             this._bibleService.getVerseTime(dam_id, verse.book_id, verse.chapter_id, verse.verse_id).subscribe((res: any) => {
    //                 if (res[0]) {
    //                     // move audio to selected verse
    //                     this.gotoVerse(res[0].verse_start);
    //                 }
    //             });
    //             this.teaching_icon = false;
    //             this.teaching_video = "";
    //             this.teaching_audio = "";
    //             this.teaching_desc = "";
    //             this.teaching_tab = false;
    //             this.ism_teaching_video = '';
    //             this.ism_teaching_verse = '';
    //             this.ism_teaching_title = '';
    //             this.discover_tab = false;
    //             // getting app pages from local storage
    //             this.storage.get("app_pages").then(res => {
    //                 if (res) {
    //                     let app_pages = res.find(x => x.name === 'Sermons');
    //                     if (app_pages){
    //                         let sermon_url = app_pages.url;
    //                         if (sermon_url){
    //                             // fetching sermons to get teachings for verses
    //                             this.getSermonsFromWordpress(sermon_url, verse);
    //                         }
    //                     }
    //                 }
    //             });
    //             // getting teaching for the verse for ISM
    //             if (this.theme.ch_id === '1265'){
    //                 this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id);
    //             }
    //         // }
    //     }
    // getTeachings(verse, i) {
    //     // if (this.hide_on_scroll === true){
    //     //     this.hide_on_scroll = false;
    //     // } else {
    //     //     this.hide_on_scroll = false;
    //     // this.is_selected_verse_highlighted = this.checkIfVerseHighlighted(verse) === true;
    //     // this.stopAudioForTtb();
    //     this.share = true;
    //     this.focus_tab = true;
    //     this.selected_verse = verse.verse_text;
    //     this.selected_verse_id = verse.verse_id;
    //     this.selected_verse_obj = verse;
    //     // this.selected_verse_index = i;
    // // load messages
    //     if (this.selected[i] !== 'selected') {
    //       this.selected = []; // to dis-select verses
    //       this.selected[i] = "selected";
    //       this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //     } else {
    //       if(!this.checkIfVerseHighlighted(verse)){
    //         this.selected[i] = '';
    //         this.close_tab();
    //       } else {
    //         this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //       }
    //     }
    // }
    //     getTeachings(verse, i) {
    //         // if (this.hide_on_scroll === true){
    //         //     this.hide_on_scroll = false;
    //         // } else {
    //         //     this.hide_on_scroll = false;
    //         this.share = true;
    //             this.focus_tab = true;
    //             this.selected_verse = verse.verse_text;
    //             this.selected_verse_id = verse.verse_id;
    //             this.selected_verse_obj = verse;
    // // load messages
    //             this.loadMessages(verse);
    //             if (this.selected[i] !== 'selected') {
    //                 this.selected = []; // to dis-select verses
    //                 this.selected[i] = "selected";
    //                 this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //             } else {
    //                 if(!this.checkIfVerseHighlighted(verse)){
    //                     this.selected[i] = '';
    //                     this.close_tab();
    //                   } else {
    //                     this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id, verse.book_name_eng);
    //                   }
    //             }
    //             this.current_verse_index = i;
    //             let dam_id = this.dam_id + '2DA';
    //             // getting selected verse time from API through Service
    //             this._bibleService.getVerseTime(dam_id, verse.book_id, verse.chapter_id, verse.verse_id).subscribe((res: any) => {
    //                 if (res[0]) {
    //                     // move audio to selected verse
    //                     this.gotoVerse(res[0].verse_start);
    //                 }
    //             });
    //             this.teaching_icon = false;
    //             this.teaching_video = "";
    //             this.teaching_audio = "";
    //             this.teaching_desc = "";
    //             this.teaching_tab = false;
    //             this.ism_teaching_video = '';
    //             this.ism_teaching_verse = '';
    //             this.ism_teaching_title = '';
    //             this.discover_tab = false;
    //             // getting app pages from local storage
    //             this.storage.get("app_pages").then(res => {
    //                 if (res) {
    //                     let app_pages = res.find(x => x.name === 'Sermons');
    //                     if (app_pages){
    //                         let sermon_url = app_pages.url;
    //                         if (sermon_url){
    //                             // fetching sermons to get teachings for verses
    //                             this.getSermonsFromWordpress(sermon_url, verse);
    //                         }
    //                     }
    //                 }
    //             });
    //             // getting teaching for the verse for ISM
    //             if (this.theme.ch_id === '1265'){
    //                 this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id);
    //             }
    //         // }
    //     }
    BibleChapterPage.prototype.getTeachings = function (verse, i) {
        // if (this.hide_on_scroll === true){
        //     this.hide_on_scroll = false;
        // } else {
        //     this.hide_on_scroll = false;
        // this.is_selected_verse_highlighted = this.checkIfVerseHighlighted(verse) === true;
        // this.stopAudioForTtb();
        this.hideAudioPlayer = true;
        if (this.hideHeaderFooter) {
            this.hideHeaderFooter ? this.hideHeaderFooter = false : this.hideHeaderFooter = true;
            // this.event_provider.hideBibleHeaderFooter(this.hideHeaderFooter);
        }
        this.share = true;
        this.focus_tab = true;
        this.selected_verse = verse.verse_text;
        this.selected_verse_id = verse.verse_id;
        this.selected_verse_obj = verse;
        // this.selected_verse_index = i;
        // load messages
        if (this.selected[i] !== 'selected') {
            // if(this.teachingsAudioListenTime > 0) {
            //     this.createAnalytics('studyDurationOfPlay');
            //     clearTimeout(this.teachingCounterId);
            //     this.teachingsAudioListenTime = 0;    
            // }
            this.selected = []; // to dis-select verses
            this.selected[i] = "selected";
            this.event_provider.hidefooter(false, 'teachings');
            // if(localStorage.getItem('app_language') == 'ml') {
            this.getTeachingVideo(verse.bookId, verse.chapterId.split(".")[1], verse.id.split(".")[2], this.book.book_name_eng);
            // } else {
            //     this.getTeachingVideo(verse.book_id, verse.chapter_id, verse.verse_id, verse.book_name);
            // }   
        }
        else {
            if (!this.checkIfVerseHighlighted(verse)) {
                this.selected[i] = '';
                this.close_tab();
            }
            else {
                // if(localStorage.getItem('app_language') == 'ml') {
                this.getTeachingVideo(verse.bookId, verse.chapterId.split(".")[1], verse.id.split(".")[2], this.book.book_name_eng);
                // } else {
                //     this.getTeachingVideo(verse.book_id, verse.chapter_id, verse.verse_id, verse.book_name);
                // }  
            }
        }
        this.current_verse_index = i;
        var dam_id = this.dam_id + '2DA';
        // getting selected verse time from API through Service
        // this._bibleService.getVerseTime(dam_id, verse.book_id, verse.chapter_id, verse.verse_id).subscribe((res: any) => {
        //   if (res[0]) {
        //     // move audio to selected verse
        //     this.gotoVerse(res[0].verse_start);
        //   }
        // });
        this.ism_teaching_video = '';
        this.ism_teaching_verse = '';
        this.ism_teaching_title = '';
        this.discover_tab = false;
        // getting teaching for the verse for ISM
        //   this.getTeachingVideo(verse.book_name, verse.chapter_id, verse.verse_id);
        // }
    };
    BibleChapterPage.prototype.getTeachingVideo = function (book_name, chap_id, verse_id, book_name_eng) {
        var _this = this;
        console.log(book_name, chap_id, verse_id, book_name_eng);
        this.ism_teachings = [];
        if (book_name && verse_id && chap_id) {
            var body = JSON.stringify({
                language: localStorage.getItem('app_language') == 'en' ?
                    localStorage.getItem('app_language') + '_US' : localStorage.getItem('app_language'),
                bible_book: this.book.book_id,
                chapter: chap_id,
                verse: verse_id,
                audio_format: 'Daily',
            });
            //   let badge_image = this.getTeachingImagesCache(book_name_eng);
            //   console.log(badge_image)
            this._bibleService.getBibleTtbTeachingAudio(body).subscribe(function (res) {
                if (res) {
                    // this.stopAudioForTtb();
                    _this.ism_teachings = res;
                    //   this.verseTitle = res.result[0].name; 
                    _this.current_duration_teaching = 0;
                    _this.current_total_duration_teaching = 0;
                    _this.progress_teachings = 0;
                    // this.range_teachings.value = 0;
                    _this.ttb_teaching_data = _this.ism_teachings.length ? _this.ism_teachings[0] : '';
                    _this.teaching_audio = _this.ttb_teaching_data ? src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].cmp_audioLink + _this.ttb_teaching_data.uuid : '';
                    //   this.ttb_bible_badge = this.ttb_teaching_data && badge_image ? badge_image.bible_badge_image : '../../assets/img/thrubible.PNG';
                    if (localStorage.getItem('teaching_images')) {
                        if (book_name_eng !== null) {
                            var images = JSON.parse(localStorage.getItem('teaching_images'));
                            var found = images.find(function (x) { return x.bible_book_eng === book_name_eng; });
                            _this.ttb_bible_badge = _this.ttb_teaching_data && found ? found.bible_badge_image : '../../assets/img/thrubible.PNG';
                        }
                    }
                    else {
                        _this.apiService.getTeachingImages().subscribe(function (res) {
                            if (res && res.status) {
                                localStorage.setItem('teaching_images', JSON.stringify(res.result));
                                if (book_name_eng !== null) {
                                    var images = JSON.parse(localStorage.getItem('teaching_images'));
                                    var found = images.find(function (x) { return x.bible_book_eng === book_name_eng; });
                                    _this.ttb_bible_badge = _this.ttb_teaching_data && found ? found.bible_badge_image : '../../assets/img/thrubible.PNG';
                                }
                            }
                        });
                    }
                    _this.teachings_audio_first_load = true;
                    // this.start('teachings', this.teaching_audio)
                    if (!_this.platform.is('ios')) {
                        // this.start('teachings', this.teaching_audio);
                    }
                    // ================ displaying teaching icon if teaching is found =====================
                    _this.show_discover_tab = true;
                    // this.ism_teachings.map( teaching => {
                    //   if (teaching != ''){
                    //     if(teaching.vimeo_video_link){
                    //       if (teaching.vimeo_video_link.includes('vimeo.com')){
                    //         let vid_id = teaching.vimeo_video_link.match(/\d+/)[0];
                    //         let url = "https://player.vimeo.com/video/" + vid_id ;
                    //         teaching['video_url'] = this.dom.bypassSecurityTrustResourceUrl(url);
                    //         teaching.not_vimeo = false;
                    //       } else {
                    //         teaching['video_url'] = this.dom.bypassSecurityTrustResourceUrl(teaching.vimeo_video_link);
                    //         teaching.not_vimeo = true;
                    //       }
                    //     } else {
                    //       teaching['video_url'] = teaching.original_app_video_address ? this.dom.bypassSecurityTrustResourceUrl(teaching.original_app_video_address) : '';
                    //       teaching.not_vimeo = true;
                    //     }
                    //     teaching['ism_teaching_video'] = teaching.video_url;
                    //     teaching['ism_teaching_title'] = teaching.video_title;
                    //     teaching['ism_teaching_verse'] = teaching.book_name + ' ' + teaching.chapter_id + ':' + teaching.verse;
                    //   }
                    // });
                }
            });
        }
    };
    // stopAudioForTtb() {
    //     // this.event_provider.stopAudioPlayer(-1);
    //     if (this.platform.is('cordova')) {
    //         this.platform.ready().then(() => {
    //             if (this.teachingsMediaAudio) {
    //                 // this.togglePlayer('teachings', true);
    //                 this.teachingsMediaAudio.pause();
    //                 this.isPlaying_teachings = false;
    //                 this.isPlaying_teachings = false;
    //             }
    //         })
    //     } else {
    //         if (this.teaching_player) {
    //             // this.togglePlayer("teachings", true);
    //         }
    //     }
    //     // this.musicControls.destroy(); //  destroy media player from notifications/lock screen
    // }
    // getTeachingVideo(book_name, chap_id, verse_id){
    //         if ( book_name && verse_id && chap_id){
    //             let body = JSON.stringify({
    //                 book_name: book_name,
    //                 chap_id: chap_id,
    //                 verse_id: verse_id,
    //                 page_type: 'bible'
    //             });
    //             this.apiService.getBibleVideo(body).subscribe((res: any) => {
    //                 if (res && res.status === true){
    //                     this.ism_teachings = res.result;
    //                     // ================ displaying teaching icon if teaching is found =====================
    //                     this.show_discover_tab = true;
    //                     this.ism_teachings.map( teaching => {
    //                         if (teaching != ''){
    //                             if(teaching.vimeo_video_link){
    //                                 if (teaching.vimeo_video_link.includes('vimeo.com')){
    //                                     let vid_id = teaching.vimeo_video_link.match(/\d+/)[0];
    //                                     let url = "https://player.vimeo.com/video/" + vid_id ;
    //                                     teaching['video_url'] = this.dom.bypassSecurityTrustResourceUrl(url);
    //                                     teaching.not_vimeo = false;
    //                                 } else {
    //                                     teaching['video_url'] = this.dom.bypassSecurityTrustResourceUrl(teaching.vimeo_video_link);
    //                                     teaching.not_vimeo = true;
    //                                 }
    //                             } else {
    //                                 teaching['video_url'] = teaching.original_app_video_address ? this.dom.bypassSecurityTrustResourceUrl(teaching.original_app_video_address) : '';
    //                                 teaching.not_vimeo = true;
    //                             }
    //                             teaching['ism_teaching_video'] = teaching.video_url;
    //                             teaching['ism_teaching_title'] = teaching.video_title;
    //                             teaching['ism_teaching_verse'] = teaching.book_name + ' ' + teaching.chapter_id + ':' + teaching.verse;
    //                         }
    //                     });
    //                 }
    //             })
    //         }
    // }
    BibleChapterPage.prototype.getSermonsFromWordpress = function (base_url, verse) {
        var _this = this;
        var chap = verse.chapter_id;
        var book = verse.book_name;
        var current_verse = verse.verse_id;
        var search_book = book + ' ' + chap + ':' + current_verse;
        var self = this;
        var allSermons;
        // getting sermons from API through service
        this.sermonsService.getAllSermons(base_url).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data, sermon, filter_sermon;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = res.data;
                allSermons = data.item;
                if (allSermons.length != 0) {
                    sermon = void 0;
                    filter_sermon = allSermons.filter(function (x) {
                        for (var i = 0; i < x.series.length; i++) {
                            if ((x.series[i].includes('teaching') || x.series[i].includes('Teaching')) && (x.hasOwnProperty('bible') && (x.bible[i].includes(search_book) || x.bible[i].includes(search_book.toLowerCase())))) {
                                return x;
                            }
                        }
                    });
                    // =====================================================================================
                    if (filter_sermon.length > 0) {
                        sermon = filter_sermon[0];
                    }
                    if (sermon) {
                        this.teaching_tab = true;
                        // ================ displaying teaching icon if teaching is found =====================
                        this.teaching_icon = true;
                        this.teaching_video = sermon.video_link;
                        this.teaching_audio = sermon.audio_link;
                        // this.start('teachings', this.teaching_audio);
                        this.teaching_desc = sermon.description;
                        // ===================================================================================
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    BibleChapterPage.prototype.highlightVerse = function () {
        var _this = this;
        // ======= pausing player if its is ON ================
        if (this.player) {
            // this.togglePlayer("chapter", true);
        }
        if (this.teaching_player) {
            // this.togglePlayer("teachings", true);
        }
        // ==================================================
        var donor_id;
        // getting user from local storage
        this.storage.get('user').then(function (val) {
            if (val != null && val != 'guest') {
                donor_id = val.user.id;
                _this.ch_id = val.user.id_church;
                var body = JSON.stringify({
                    ch_id: _this.ch_id,
                    donor_id: donor_id,
                    book_order: _this.selected_verse_obj.book_order,
                    chap_id: _this.selected_verse_obj.chapter_id,
                    book_id: _this.selected_verse_obj.book_id,
                    verse_id: _this.selected_verse_obj.verse_id
                });
                //  === saving highlighted verse from API through Service ======================================
                _this._bibleService.saveVerse(body).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        if (res.status) {
                            this.getUserVerses();
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.VerseHighlighted : 'Verse Highlighted!'), (this.alertMessage ? this.alertMessage.Success : 'Success'), "success");
                            return [2 /*return*/];
                        }
                        else {
                            this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.VerseAlreadyHighlighted : 'Verse Already Highlighted'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), "warning");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                _this.toast.presentToastWithOptions((_this.alertMessage ? _this.alertMessage.LoginToHighlight : 'Login to Highlight Verse'), (_this.alertMessage ? _this.alertMessage.WarningMessage : 'Warning Message'), "warning");
                return;
            }
            // =================================================================================================
        });
    };
    BibleChapterPage.prototype.close_tab = function () {
        this.selected = '';
        this.hideHeaderFooter = true;
        this.event_provider.hidefooter(true, '');
        this.hideAudioPlayer = false;
        this.share = false;
        this.selected_verse = '';
        this.selected_verse_id = '';
        this.teaching_tab = false;
        this.selected_verse_obj = "";
        this.discuss_tab = false;
        this.discover_tab = false;
        this.teaching_icon = false;
        this.teaching_video = "";
        this.teaching_audio = "";
        this.teaching_desc = "";
        // if(this.teachingsAudioListenTime > 0) {
        //     this.createAnalytics('studyDurationOfPlay');
        //     clearTimeout(this.teachingCounterId);
        //     this.teachingsAudioListenTime = 0;    
        // }
        // this.togglePlayer("teachings", true);
    };
    // ======= when page left, pausing player if its is ON ================
    BibleChapterPage.prototype.ionViewDidLeave = function () {
        this.close_tab();
        // if(this.chapterMediaAudio) {
        //     this.togglePlayer("chapter", true);
        //     if(this.chapterAudioListenTime > 0) {
        //         this.createAnalytics('durationOfPlay');
        //         clearTimeout(this.counterId);
        //         this.chapterAudioListenTime = 0;    
        //     }
        // } 
        // if(this.teachingsMediaAudio) {
        //     this.togglePlayer("teachings", true);
        //     if(this.teachingsAudioListenTime > 0) {
        //         this.createAnalytics('studyDurationOfPlay');
        //         clearTimeout(this.teachingCounterId);
        //         this.teachingsAudioListenTime = 0;    
        //     }
        // }
        // if (this.player) {
        //     this.togglePlayer("chapter", true);
        // }
        // if (this.teaching_player) {
        //     this.togglePlayer("teachings", true);
        // }
        this.event_provider.settranslationsicon(false);
        this.event_provider.showbiblechapterontop(false);
        this.translate_event.unsubscribe();
    };
    BibleChapterPage.prototype.ionViewWillLeave = function () {
        this.close_tab();
        // this.event_provider.hidefooter(true, 'bible');
        // this.event_provider.hideBibleHeaderFooter(false);
        // this.audioService.setLiveSteam();
    };
    // createLockScreenPlayer(){
    //     let self = this;
    //     this.musicControls.create({
    //       track       :'RadioBas',        // optional, default : ''
    //     //   cover       : environment.main_logo,      // optional, default : nothing
    //       artist: this.new_book_name ? this.new_book_name : 'Audio',
    //       // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
    //       //           or a remote url ('http://...', 'https://...', 'ftp://...')
    //       isPlaying   : true,                         // optional, default : true
    //       dismissable : true,                         // optional, default : false
    //       // hide previous/next/close buttons:
    //       hasClose  : true,       // show close button, optional, default: false
    // // iOS only, optional
    //       duration : 0, // optional, default: 0
    //       // elapsed : 10, // optional, default: 0
    //       // hasSkipForward : true,  // show skip forward button, optional, default: false
    //       // hasSkipBackward : true, // show skip backward button, optional, default: false
    //       skipForwardInterval: 10, // display number for skip forward, optional, default: 0
    //       skipBackwardInterval: 10, // display number for skip backward, optional, default: 0
    //       hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional
    //       // Android only, optional
    //       // text displayed in the status bar when the notification (and the ticker) are updated, optional
    //       // ticker    : 'Now playing "Time is Running Out"',
    //       // All icons default to their built-in android equivalents
    //       playIcon: 'media_play',
    //       pauseIcon: 'media_pause',
    //       // prevIcon: 'media_prev',
    //       // nextIcon: 'media_next',
    //       closeIcon: 'media_close',
    //       notificationIcon: 'notification'
    //     }).catch(
    //         (error) => {
    //           console.log('createMusicControls.error',error);
    //         }
    //     ).then(
    //             (value) => {
    //               this.is_lockscreen_player_on = true;
    //               this.musicControls.subscribe().subscribe(action => {
    //                 // function events(action) {
    //                 const message = JSON.parse(action).message;
    //                 switch(message) {
    //                   case 'music-controls-pause':
    //                     if (!this.is_teaching_playing){
    //                     //   self.togglePlayer('chapter', true);
    //                     }
    //                     if (this.is_teaching_playing){
    //                     //   self.togglePlayer('teachings', true);
    //                     }
    //                     break;
    //                   case 'music-controls-play':
    //                     if (!this.is_teaching_playing){
    //                       if (this.current_total_duration){
    //                         // self.togglePlayer('chapter', false);
    //                       }
    //                     }
    //                     if (this.is_teaching_playing){
    //                     //   self.togglePlayer('teachings', false);
    //                     }
    //                     break;
    //                   case 'music-controls-next':
    //                     if (!this.is_teaching_playing){
    //                       // this.forward('chapter');
    //                       // self.togglePlayer('chapter', true);
    //                       this.forward('chapter');
    //                       // this.playNextVerse();
    //                     }
    //                     if (this.is_teaching_playing){
    //                       this.forward('teachings');
    //                     }
    //                     break;
    //                   case 'music-controls-previous':
    //                     if (!this.is_teaching_playing){
    //                       // this.backward('chapter');
    //                       // self.togglePlayer('chapter', true);
    //                       // this.playPrevVerse();
    //                       this.backward('chapter');
    //                     }
    //                     if (this.is_teaching_playing){
    //                       this.backward('teachings');
    //                     }
    //                     break;
    //                   case 'music-controls-destroy':
    //                     if (!this.is_teaching_playing){
    //                     //   self.togglePlayer('chapter', true);
    //                     }
    //                     if (this.is_teaching_playing){
    //                     //   self.togglePlayer('teachings', true);
    //                     }
    //                     break;
    //                     // External controls (iOS only)
    //                   case 'music-controls-toggle-play-pause' :
    //                     if (this.is_teaching_playing){   // teaching
    //                       if (this.isPlaying_teachings){
    //                         // this.togglePlayer("teachings", true);
    //                       } else {
    //                         // this.togglePlayer("teachings", false);
    //                       }
    //                     } else {                     //  chapter
    //                       if (this.isPlaying){
    //                         // this.togglePlayer("chapter", true);
    //                       } else {
    //                         // this.togglePlayer("chapter", false);
    //                       }
    //                     }
    //                     // Do something
    //                     break;
    //                   case 'music-controls-seek-to':
    //                     const seekToInSeconds = JSON.parse(action).position;
    //                     self.musicControls.updateElapsed({
    //                       elapsed: seekToInSeconds,
    //                       isPlaying: true
    //                     });
    //                     // Do something
    //                     break;
    //                   case 'music-controls-skip-forward':
    //                     if (!this.is_teaching_playing){
    //                       this.forward('chapter');
    //                     }
    //                     if (this.is_teaching_playing){
    //                       this.forward('teachings');
    //                     }
    //                     break;
    //                   case 'music-controls-skip-backward':
    //                     if (!this.is_teaching_playing){
    //                       this.backward('chapter');
    //                     }
    //                     if (this.is_teaching_playing){
    //                       this.backward('teachings');
    //                     }
    //                     break;
    //                     // Headset events (Android only)
    //                     // All media button events are listed below
    //                   case 'music-controls-media-button' :
    //                     // Do something
    //                     break;
    //                   case 'music-controls-headset-unplugged':
    //                     // Do something
    //                     break;
    //                   case 'music-controls-headset-plugged':
    //                     // Do something
    //                     break;
    //                   default:
    //                     break;
    //                 }
    //                 // }
    //               });
    //               this.musicControls.listen(); // activates the observable above
    //               this.musicControls.updateIsPlaying(true);
    //             }
    //         );
    //   }
    BibleChapterPage.prototype.gotoCopyrightPage = function (text) {
        this.router.navigate(["privacy-detail", { data: text }]);
    };
    BibleChapterPage.prototype.playbible = function (isplay, audioUrl2, from) {
        var _this = this;
        if (from === 'bible') {
            if (this.audioService.audioUrl == audioUrl2) {
                this.audioService.togglePlayer(isplay);
            }
            else {
                this.audioService.clear();
                setTimeout(function () {
                    _this.audioService.clear();
                    _this.audioService.image = _this.ttb_bible_badge;
                    _this.audioService.audioUrl = audioUrl2;
                    _this.chapterAudio.image = _this.ttb_bible_badge;
                    _this.chapterAudio.title = _this.book.book_name_eng + ' ' + _this.chapterAudio.number;
                    _this.common.audioData = _this.chapterAudio;
                    _this.audioService.title = _this.book.book_name_eng + ' ' + _this.chapterAudio.number;
                    _this.common.method = "bible";
                    _this.audioService.fromPage = 'bible';
                    _this.audioService.liveStreaming = false;
                    _this.audioService.title = _this.book.book_name_eng + ' ' + _this.chapterAudio.number;
                    _this.audioService.bible_playing[audioUrl2] = true;
                    //   this.audioService.fromPage = "study";
                    _this.audioService.bible_index = audioUrl2;
                    _this.audioService.startAudio(audioUrl2);
                }, 500);
            }
        }
        else if (from === 'study') {
            if (this.audioService.audioUrl == audioUrl2) {
                this.audioService.togglePlayer(isplay);
            }
            else {
                this.audioService.clear();
                setTimeout(function () {
                    _this.audioService.clear();
                    _this.audioService.image = _this.ttb_bible_badge;
                    _this.audioService.audioUrl = audioUrl2;
                    //   this.chapterAudio.image = this.ttb_bible_badge;
                    //   this.chapterAudio.title =this.ttb_teaching_data.name;
                    // this.common.audioData = this.chapterAudio;
                    _this.audioService.title = _this.ttb_teaching_data.name;
                    _this.common.method = "bible";
                    _this.audioService.fromPage = 'bible';
                    _this.audioService.liveStreaming = false;
                    _this.audioService.bible_playing[audioUrl2] = true;
                    _this.audioService.bible_index = audioUrl2;
                    _this.audioService.startAudio(audioUrl2);
                }, 500);
            }
        }
    };
    BibleChapterPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_bible_service__WEBPACK_IMPORTED_MODULE_5__["BibleService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: _services_sermon_service__WEBPACK_IMPORTED_MODULE_9__["SermonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] },
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__["SocialSharing"] },
        { type: src_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"] },
        { type: _services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__["AudioplayerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_20__["FirebaseX"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"])
    ], BibleChapterPage.prototype, "range", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range_teachings', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"])
    ], BibleChapterPage.prototype, "range_teachings", void 0);
    BibleChapterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bible-chapter',
            template: __webpack_require__(/*! raw-loader!./bible-chapter.page.html */ "./node_modules/raw-loader/index.js!./src/app/bible-chapter/bible-chapter.page.html"),
            styles: [__webpack_require__(/*! ./bible-chapter.page.scss */ "./src/app/bible-chapter/bible-chapter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_bible_service__WEBPACK_IMPORTED_MODULE_5__["BibleService"],
            _app_service__WEBPACK_IMPORTED_MODULE_14__["AppService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _services_sermon_service__WEBPACK_IMPORTED_MODULE_9__["SermonService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"],
            _services_event_provider_service__WEBPACK_IMPORTED_MODULE_12__["EventProviderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_16__["SocialSharing"],
            src_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"],
            _services_audioplayer_service__WEBPACK_IMPORTED_MODULE_18__["AudioplayerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_20__["FirebaseX"]])
    ], BibleChapterPage);
    return BibleChapterPage;
}());



/***/ }),

/***/ "./src/app/common/swipe/swipe.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/common/swipe/swipe.directive.ts ***!
  \*************************************************/
/*! exports provided: SwipeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeDirective", function() { return SwipeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwipeDirective = /** @class */ (function () {
    function SwipeDirective(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        /** x position at touchstart */
        this.xDown = null;
        /** y position at touchstart */
        this.yDown = null;
        /** Timestamp at touchstart */
        this.time = 0;
        this.isScaler = false;
        this.swipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.swipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.swipeUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.swipeDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pinchIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pinchOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pinchRelease = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SwipeDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        /** Listen for touchstart event on element directive is attached to */
        this.renderer.listen(this.elRef.nativeElement, 'touchstart', function (event) {
            _this.touchPos = event.changedTouches[0].clientY;
            _this.handleTouchStart(event);
            if (event.touches.length == 2) {
                _this.startDifference = Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
                if (_this.startDifference) {
                    _this.pinchStart();
                }
            }
        });
        /** Listen for touchend event on element directive is attached to */
        this.renderer.listen(this.elRef.nativeElement, 'touchend', function (event) {
            _this.handleTouchMove(event);
            if (_this.isScaler) {
                setTimeout(function () {
                    _this.pinchEnd();
                }, 500);
            }
        });
        var i;
        this.renderer.listen(this.elRef.nativeElement, 'touchmove', function (event) {
            var touch = event.touches[0] || event.changedTouches[0];
            var xUp = touch.pageX;
            var yUp = touch.pageY;
            var xDiff = _this.xDown - xUp;
            var yDiff = _this.yDown - yUp;
            // console.log('x Differnece',Math.abs(xDiff))
            // console.log('y Difference' , Math.abs(yDiff))
            var timeDiff = event.timeStamp - _this.time;
            console.log(_this.isScaler);
            if (!_this.isScaler) {
                if (timeDiff > 120) {
                    var newTouchPos = event.changedTouches[0].clientY;
                    if (_this.touchPos < newTouchPos) {
                        _this.touchPos = newTouchPos;
                        _this.scrollUp.emit('up');
                    }
                    if (_this.touchPos > newTouchPos) {
                        _this.touchPos = newTouchPos;
                        _this.scrollDown.emit('down');
                    }
                }
            }
        });
    };
    SwipeDirective.prototype.pinchEnd = function () {
        var _this = this;
        setTimeout(function () {
            _this.isScaler = false;
            _this.pinchRelease.emit();
        }, 800);
    };
    SwipeDirective.prototype.pinchStart = function () {
        var _this = this;
        this.isScaler = true;
        if (this.isScaler) {
            this.renderer.listen(this.elRef.nativeElement, 'touchmove', function (event) {
                var dist = Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
                if (_this.startDifference < dist) {
                    _this.startDifference = dist;
                    var fontSize = _this.startDifference / _this.startDifference;
                    _this.pinchIn.emit(fontSize);
                }
                else if (_this.startDifference > dist) {
                    _this.startDifference = dist;
                    var fontSize = _this.startDifference / _this.startDifference;
                    _this.pinchOut.emit(fontSize);
                }
            });
        }
    };
    SwipeDirective.prototype.handleTouchStart = function (event) {
        this.xDown = event.touches[0].pageX;
        this.yDown = event.touches[0].pageY;
        this.time = event.timeStamp;
    };
    SwipeDirective.prototype.handleTouchMove = function (event) {
        if (!this.xDown || !this.yDown) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        var xUp = touch.pageX;
        var yUp = touch.pageY;
        var xDiff = this.xDown - xUp;
        var yDiff = this.yDown - yUp;
        var timeDiff = event.timeStamp - this.time;
        // simulate a swipe -> less than 500 ms and more than 60 px
        if (timeDiff < 500) {
            // touch movement lasted less than 500 ms
            if (Math.abs(xDiff) > 60 && Math.abs(yDiff) < 100) {
                // delta x is at least 60 pixels
                if (xDiff > 0) {
                    this.swipeRight.emit(event);
                }
                else {
                    this.swipeLeft.emit(event);
                }
            }
            if (Math.abs(yDiff) > 60) {
                // delta y is at least 60 pixels
                if (yDiff > 0) {
                    this.swipeDown.emit(event);
                }
                else {
                    this.swipeUp.emit(event);
                }
            }
        }
        // Reset values.
        this.xDown = null;
        this.yDown = null;
    };
    SwipeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "swipeLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "swipeRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "swipeUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "swipeDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "scrollUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "scrollDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "pinchIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "pinchOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwipeDirective.prototype, "pinchRelease", void 0);
    SwipeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSwipe]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SwipeDirective);
    return SwipeDirective;
}());



/***/ }),

/***/ "./src/app/common/swipe/swipe.module.ts":
/*!**********************************************!*\
  !*** ./src/app/common/swipe/swipe.module.ts ***!
  \**********************************************/
/*! exports provided: SwipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeModule", function() { return SwipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swipe_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swipe.directive */ "./src/app/common/swipe/swipe.directive.ts");




var SwipeModule = /** @class */ (function () {
    function SwipeModule() {
    }
    SwipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_swipe_directive__WEBPACK_IMPORTED_MODULE_3__["SwipeDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_swipe_directive__WEBPACK_IMPORTED_MODULE_3__["SwipeDirective"]]
        })
    ], SwipeModule);
    return SwipeModule;
}());



/***/ })

}]);
//# sourceMappingURL=bible-chapter-bible-chapter-module-es5.js.map