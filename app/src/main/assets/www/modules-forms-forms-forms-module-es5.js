(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-forms-forms-forms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/forms/dynamic-form/dynamic-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/forms/dynamic-form/dynamic-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"form-row\" *ngIf=\"question.field_type !== 'poll-field' && question.field_type !== 'quiz-field' && question.field_type !== 'survey-field' && question.field_type !== 'name-field'\" >\n  <div *ngFor=\"let list of listColumns; let i = index\">\n    <input [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.type === 'checkbox' || question.quizFieldType === 'checkbox-quiz-type' || question.postTagsFieldType === 'checkbox-posttags-type'\" type=\"checkbox\" [id]=\"list\" [name]=\"question.key\" [value]=\"question.value[i]\">\n\n    <input [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.type === 'radio' || question.quizFieldType === 'radiobtn-quiz-type'\" type=\"radio\" [id]=\"list\" [name]=\"question.key\" [value]=\"question.value[i]\">\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type == 'quiz-field' || (question.field_type === 'post_tag-field')\">{{list}}</label>\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'poll-field' && i === 0\">{{question.pollQuestion}}</label><br *ngIf=\"question.field_type === 'poll-field'\">\n    <input [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [maxlength]=\"question.maxLength\" *ngIf=\"(question.type === 'email' || question.type === 'number' || question.type === 'text' || (question.field_type === 'survey-field' && question.type === 'text')) && question.field_type != 'list-field'\" [name]=\"question.key\" [type]=\"question.type\"  class=\"form-control\" />\n    <select [id]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [name]=\"question.key\" *ngIf=\"(question.pollType === 'dropdown-poll-type' || question.quizFieldType === 'dropdown-quiz-type' || question.surveyFieldType === 'survey-quiz-type' || question.postTagsFieldType === 'dropdown-posttags-type') && i === 0\" class=\"form-control\" >\n      <option *ngFor=\"let value of question.option\" [value]=\"value\">{{value}}</option>\n\n    </select>\n    <input [type]=\"list.type\" [value]=\"list.value\" [(ngModel)]=\"list.value\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.field_type === 'list-field'\" class=\"form-control\">\n    <ion-button *ngIf=\"question.field_type === 'list-field'\" (click)=\"addListFields(question, i)\">+</ion-button>\n    <ion-button *ngIf=\"question.field_type === 'list-field' && question.listColumns.length > 1\" (click)=\"removeListFields(question, i)\">-</ion-button>\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel !== ''\">{{list.customLabel}}</span></label>\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel === ''\">{{list.label}}</span></label>\n    <input [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\" [name]=\"list.key\" [type]=\"list.inputType\" [placeholder]=\"list.placeholder\" class=\"form-control\" />\n    <input type=\"file\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [id]=\"question.key\" [name]=\"question.key\" accept=\"image/*\" *ngIf=\"(question.pollType === 'file-poll-type' || question.quizFieldType === 'file-quiz-type' || question.surveyFieldType === 'file-quiz-type') && i === 0\">\n    <input type=\"time\" [id]=\"question.key\" [name]=\"question.key\" *ngIf=\"question.type === 'time'\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" >\n    <input type=\"date\" [id]=\"question.key\" [name]=\"question.key\" *ngIf=\"question.type === 'date'\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" >\n    <!--  <br *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\">-->\n  </div>\n</div>\n<ion-row  class=\"form-row\" *ngIf=\"question.field_type === 'name-field'\">\n  <!--  <ion-row>-->\n  <ion-col size=\"6\" *ngFor=\"let list of listColumns; let i = index\" [ngClass]=\"{'hide': list.isHidden != 'true'}\">\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel !== ''\">{{list.customLabel}}</span></label>\n    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel === ''\">{{list.label}}</span></label>\n    <input  [(ngModel)]=\"list.value\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\" [name]=\"list.key\" [type]=\"list.inputType\" [placeholder]=\"list.placeholder\" class=\"form-control\" />\n  </ion-col>\n  <!--  <div class=\"col-lg-6\"  *ngFor=\"let list of listColumns; let i = index\">-->\n  <!--    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel !== ''\">{{list.customLabel}}</span></label>-->\n  <!--    <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\"><span *ngIf=\"list.customLabel === ''\">{{list.label}}</span></label>-->\n  <!--    <input style=\"width: 50% !important;\" [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\" *ngIf=\"question.field_type === 'name-field' && list.isHidden === 'true'\" [name]=\"list.key\" [type]=\"list.inputType\" [placeholder]=\"list.placeholder\" class=\"form-control\" />-->\n  <!--  </div>-->\n\n  <!--  </ion-row>-->\n</ion-row>\n<div  class=\"form-row\" *ngIf=\"question.field_type === 'poll-field'\">\n  <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'poll-field'\">{{question.pollQuestion}}</label><br>\n  <div *ngIf=\"question.pollType === 'radiobtn-poll-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"radio\" id=\"pool-radio\" name=\"pool-radio\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"pool-radio\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.pollType === 'checkbox-poll-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"checkbox\" [id]=\"box\" [name]=\"box\" [value]=\"box\" [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label [attr.for]=\"box\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.pollType === 'dropdown-poll-type'\">\n    <select [id]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [name]=\"question.key\" class=\"form-control\" >\n      <option *ngFor=\"let box of listColumns\" [value]=\"box\">{{box}}</option>\n\n    </select>\n  </div>\n</div>\n\n<div  class=\"form-row\" *ngIf=\"question.field_type === 'quiz-field'\">\n  <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'quiz-field'\">{{question.pollQuestion}}</label><br>\n  <div *ngIf=\"question.quizFieldType === 'radiobtn-quiz-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"radio\" id=\"quiz-radio\" name=\"quiz-radio\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"quiz-radio\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.quizFieldType === 'checkbox-quiz-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"checkbox\" [id]=\"box\" [name]=\"box\" [value]=\"box\" [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label [attr.for]=\"box\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.quizFieldType === 'dropdown-quiz-type'\">\n    <!-- <div *ngFor=\"let box of listColumns; let i = index\"> -->\n    <select [id]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [name]=\"question.key\" class=\"form-control\" >\n      <option *ngFor=\"let box of listColumns\" [value]=\"box\">{{box}}</option>\n\n    </select>\n  </div>\n</div>\n<div  class=\"form-row\" *ngIf=\"question.field_type === 'survey-field'\">\n  <!-- <label [attr.for]=\"question.key\" *ngIf=\"question.field_type === 'quiz-field'\">{{question.pollQuestion}}</label><br> -->\n  <div *ngIf=\"question.surveyFieldType === 'likert-survey-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"radio\" id=\"likert-survey-type\" name=\"likert-survey-type\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"likert-survey-type\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'rating-survey-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\" class=\"rating\">\n      <label>\n        <input type=\"radio\" id=\"rating-survey-type\" name=\"rating-survey-type\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" />\n        <!-- <div *ngIf=\"let box of listColumns; let  = index\"> -->\n        <span class=\"icon\">★</span>\n        <!-- </div> -->\n      </label>\n      <!-- <input type=\"radio\" id=\"rating-survey-type\" name=\"rating-survey-type\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"rating-survey-type\"> {{box}}</label><br> -->\n    </div>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'radiobtns-survey-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"radio\" id=\"radiobtns-survey-type\" name=\"radiobtns-survey-type\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"radiobtns-survey-type\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'rank-survey-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"radio\" id=\"rank-survey-type\" name=\"rank-survey-type\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label attr.for=\"rank-survey-type\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'singleline-survey-type'\">\n    <input [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [maxlength]=\"question.maxLength ? question.maxLength : 250 \" [name]=\"question.key\" [type]=\"'text'\"  class=\"form-control\" />\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'paragraph-survey-type'\">\n    <ion-textarea class=\"form-control\" inputmode=\"text\" [placeholder]=\"question.placeholder\" [maxlength]=\"question.maxLength ? question.maxLength : 500\"\n                  [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"></ion-textarea>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'checkbox-survey-type'\">\n    <div *ngFor=\"let box of listColumns; let i = index\">\n      <input type=\"checkbox\" [id]=\"box\" [name]=\"box\" [value]=\"box\" [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\">\n      &nbsp;<label [attr.for]=\"box\"> {{box}}</label><br>\n    </div>\n  </div>\n  <div *ngIf=\"question.surveyFieldType === 'dropdown-survey-type'\">\n    <!-- <div *ngFor=\"let box of listColumns; let i = index\"> -->\n    <select [id]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [name]=\"question.key\" class=\"form-control\" >\n      <option *ngFor=\"let box of listColumns\" [value]=\"box\">{{box}}</option>\n\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/forms/forms/forms.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/forms/forms/forms.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <div *ngIf=\"form_title || form_description\">\n        <h2 *ngIf=\"form_title\" style=\"margin-bottom: 15px;\">{{form_title}}</h2>\n        <label *ngIf=\"form_description && form_description_placement === 'below'\" style=\"margin: 0;\" [innerHTML]=\"form_description\"></label><br>\n      </div>\n      <div *ngIf=\"questions && questions.length\">\n        <form>\n          <ion-grid>\n            <ion-row class=\"ion-justify-content-left\">\n              <ion-col size=\"12\" *ngFor=\"let question of questions\">\n                <div *ngIf=\"question.field_type === 'section-field'\">\n                  <h4 style=\"margin-bottom: 0;\">{{question.label}}</h4>\n                  <label style=\"margin: 0;\">{{question.description}}</label><br>\n                  <hr style=\"width: 100%\">\n                </div>\n                <div style=\"margin-top: 20px\" class=\"form-row\" *ngIf=\"question.field_type !== 'hidden-field' && question.field_type !== 'captcha-field' && question.field_type !== 'post_body-field' && question.field_type != 'section-field'\">\n                  <label *ngIf=\"question.field_type !== 'html-field' && question.field_type !== 'payment-input' \" style=\"margin: 0 0;\" [ngClass]=\"{'required-field': question.isRequired == 'true'}\" [attr.for]=\"question.key\"><span [ngClass]=\"{'margin-require-field': question.isRequired == 'true'}\">{{(question.label ? question.label : question.type) ? (question.label ? question.label : question.type) : question.field_type}}</span></label>\n                  <label *ngIf=\"question.field_type === 'payment-input'\" style=\"margin: 0 0;\" [ngClass]=\"{'required-field': question.isRequired == 'true'}\" [attr.for]=\"question.key\"><span [ngClass]=\"{'margin-require-field': question.isRequired == 'true'}\">{{(question.customLabel ? question.customLabel : question.type) ? (question.customLabel ? question.customLabel : question.type) : question.field_type}}</span></label>\n\n                  \n                  <label *ngIf=\"question.description\" [attr.for]=\"question.key\" style=\"display: block; margin: 0 0 10px 0; font-size:medium;\" [innerHTML]=\"question.description ? question.description : ''\"></label>\n                  <input [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [min]=\"question.rangeMin\" [max]=\"question.rangeMax\" [maxlength]=\"question.maxLength\"\n                         *ngIf=\"(question.type === 'email' || question.type === 'number' || question.type === 'password' || question.type === 'text' || question.field_type != 'phone-field') && (question.field_type != 'html-field' && question.field_type !== 'name-field' && question.field_type != 'consent-field' && question.field_type != 'poll-field' &&  question.field_type != 'chained-field' &&  question.field_type != 'list-field' &&  question.field_type != 'section-field' &&  question.field_type != 'post_tag-field' &&  question.field_type != 'survey-field' &&  question.field_type != 'quiz-field' && question.field_type != 'checkbox-field' && question.field_type != 'radiobtn-field' && question.field_type != 'dropdown-field' && question.field_type != 'multiSelect-field' && question.field_type != 'time-field' && question.field_type != 'date-field' && question.field_type != 'address-field' && question.field_type != 'website-field' && question.field_type !== 'password-field' && question.field_type !== 'paragraph-field' && question.field_type !== 'fileupload-field' && question.field_type != 'radiobtn-field' && question.field_type != 'price-field' && question.field_type != 'readonly-field'  && question.field_type != 'payment-input')\"\n                         (input)=\"addEmail($event, question)\" [name]=\"question.key\" [placeholder]=\"question.field_type === 'email-field' ? question.email ? question.email : 'Email' : question.inputMaskValue\" [type]=\"question.type\" class=\"form-control\" (input)=\"checkMax(question)\"/>\n                  <input *ngIf=\"question.field_type === 'website-field'\" class=\"form-control\" type=\"url\" placeholder=\"https://example.com\" [name]=\"question.key\" [value]=\"question.value\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n                  <input *ngIf=\"question.field_type === 'phone-field'\" class=\"form-control\" type=\"tel\" pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{3}\" placeholder=\"(000)000-0000\" [name]=\"question.key\" [value]=\"question.value\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" min=\"1\" max=\"5\" maxlength=\"50\">\n                  <ion-textarea *ngIf=\"question.field_type === 'paragraph-field'\" class=\"form-control\" inputmode=\"text\" [maxlength]='question.maxLength !== \"\" ? question.maxLength : \"1000\"' [placeholder]=\"question.placeholder\"\n                                [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"></ion-textarea>\n                  <select class=\"form-control\" [id]=\"question.key\" [name]=\"question.key\" *ngIf=\"question.field_type === 'dropdown-field'\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n                    <option *ngFor=\"let value of question.option\" [value]=\"value\">{{value}}</option>\n\n                  </select>\n                  <div *ngIf=\"question.isEmailConfirmed === 'on' && question.field_type === 'email-field'\" [(ngModel)]=\"cnfrm_email\" [ngModelOptions]=\"{standalone: true}\">\n                    <br>\n                    <label>{{question.confirmEmail ? question.confirmEmail : 'Confirm Email'}}</label>\n                    <input type=\"email\" class=\"form-control\" [placeholder]=\"question.confirmEmail ? question.confirmEmail : 'Confirm Email'\" (input)=\"checkEmail($event, question)\" [(ngModel)]=\"question.confirm_email\" [ngModelOptions]=\"{standalone: true}\">\n                    <div class=\"error-message\" *ngIf=\"isEmailConfirm === false\">Email and Confirm email does not match</div>\n                  </div>\n                  <select class=\"form-control\" [id]=\"question.key\" [name]=\"question.key\" *ngIf=\"question.field_type === 'multiSelect-field'\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"\n                          multiple>\n\n                    <option *ngFor=\"let value of question.option\" [value]=\"value\">{{value}}</option>\n\n                  </select>\n                  <div *ngIf=\"question.field_type === 'html-field'\" [innerHTML]=\"question.content\">\n                  </div>\n                  <!-- <div *ngIf=\"question.field_type === 'payment-input' && question.displayOnly === 'true' \">\n                    <input class=\"form-control\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"  readonly/>\n                  </div> -->\n                  <div *ngIf=\"question.field_type === 'password-field'\">\n                    <input class=\"form-control\" type=\"password\" [placeholder]=\"question.passwordPlaceholder ? question.passwordPlaceholder : question.passwordSubLabel\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" [value]=\"question.value\" (input)=\"checkPasswordStrength($event, question)\">\n                    <div class=\"error-message\" *ngIf=\"question.passwordMinStrength === 'strong' && strongPassword === false\">Password has at least one lowercase letter, one uppercase letter, one digit, one special character and is at least eight characters long</div>\n                    <div class=\"error-message\" *ngIf=\"question.passwordMinStrength === 'good' && goodPassword === false\">Password has at least one lowercase letter, one uppercase letter, one digit, one special character and is at least six characters long</div>\n                    <div class=\"error-message\" *ngIf=\"question.passwordMinStrength === 'bad' && badPassword === false\">Password has at least one lowercase letter or uppercase letter, one digit or special character and is at least six characters long</div>\n                    <div class=\"error-message\" *ngIf=\"question.passwordMinStrength === 'short' && shortPassword === false\">Password has one lowercase letter or uppercase letter or digit</div><br>\n                    <!-- <div *ngIf=\"question.passwordMinStrength === 'weak' && weakPassword === false\">Password has at least one lowercase letter, one uppercase letter, one digit, one special character and is at least six characters long</div> -->\n                    <input class=\"form-control\" type=\"password\" [placeholder]=\"question.cPasswordPlaceholder ? question.cPasswordPlaceholder : question.cPasswordSubLabel\" (input)=\"checkMatchPassword($event, question)\">\n                    <div class=\"error-message\" *ngIf=\"matchPassword === false\">Password and Confirm password does not match</div>\n                  </div>\n\n                  <div *ngIf=\"question.field_type === 'checkbox-field'\">\n                    <div *ngFor=\"let box of question.option; let i = index\">\n                      <input type=\"checkbox\" [id]=\"box\" [name]=\"box\" [value]=\"question.value[i]\" [(ngModel)]=\"question.value[i]\" [ngModelOptions]=\"{standalone: true}\">\n                      <label [attr.for]=\"box\" style=\"margin-left: 10px\"> {{box}}</label><br>\n                    </div>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'consent-field'\">\n                    <input type=\"checkbox\" [id]=\"question.key\" [name]=\"question.key\" [value]=\"question.value\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n                    <label style=\"margin-left: 10px\" [attr.for]=\"question.key\" [innerHTML]=\"parseHTML(question.checkboxLabel)\"></label><br>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'radiobtn-field'\">\n                    <div *ngFor=\"let box of question.option; let i = index\">\n                      <input type=\"radio\" [id]=\"box\" [name]=\"box\" [value]=\"box\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n                      &nbsp;<label [attr.for]=\"box\"> {{box}}</label><br>\n                    </div>\n                    <div *ngIf=\"question.enableOtherChoice === 'true'\">\n                      <input type=\"radio\" id=\"other\" name=\"other\" [value]=\"'Other'\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\">\n                      &nbsp;<label attr.for=\"other\"> Other</label><br>\n                    </div>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'fileupload-field'\" >\n                    <input type=\"file\" id=\"fileinput\" [name]=\"question.key\"\n                           [accept]=\"question.fileUpload\"\n                           (change)=\"onFileChange($event, question, 0)\">\n                    <ion-button *ngIf=\"question.value.length\" (click)=\"removeFile(question, 0)\">x</ion-button>\n                    <div *ngFor=\"let file of question.value; let i = index\">\n                      <input type=\"file\" id=\"fileinput\" [name]=\"question.key\"\n                             [accept]=\"question.fileUpload\"\n                             (change)=\"onFileChange($event, question, i+1)\" *ngIf=\"(number_of_files - 1) > i\">\n\n                      <ion-button *ngIf=\"question.value.length > i+1\" (click)=\"removeFile(question, i+1)\">x</ion-button>\n                    </div>\n\n                  </div>\n                  <input type=\"time\" [id]=\"question.key\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"\n                         *ngIf=\"question.field_type === 'time-field'\" class=\"form-control\">\n                  <input [ngStyle]=\"question.datePikcerIcon === 'cstm-icon' ? ({'background-image': 'url(' + question.iconPath + ')'}) : (question.datePikcerIcon === 'cal-icon' ? {'background-image': 'url(' + date_picker_icon + ')'} : {'': ''})\" type=\"date\" [id]=\"question.key\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"\n                         *ngIf=\"question.field_type === 'date-field'\" class=\"form-control date-input\">\n                  <div *ngIf=\"question.field_type === 'product-field'\">\n                    <!-- <label [attr.for]=\"question.key\">{{question.label}}</label><br> -->\n                    <input *ngIf=\"question.postTagsFieldType === 'single-product-type'\" [maxlength]=\"question.maxLength\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"\n                           type=\"text\" class=\"form-control\" />\n                    <select [id]=\"question.key\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"\n                            *ngIf=\"question.postTagsFieldType === 'multiple-product-type'\" class=\"form-control\">\n                      <option *ngFor=\"let value of question.option\" [value]=\"value\">{{value}}</option>\n\n                    </select>\n                    <div *ngIf=\"question.postTagsFieldType === 'checkbox-product-type'\">\n                      <div *ngFor=\"let box of question.option; let i = index\">\n                        <input type=\"checkbox\" [id]=\"box\" [name]=\"question.key\" [value]=\"question.value[i]\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                        <label [attr.for]=\"box\"> {{box}}</label><br>\n                      </div>\n                    </div>\n\n                    <div *ngIf=\"question.postTagsFieldType === 'radiobtn-product-type'\">\n                      <div *ngFor=\"let box of question.option; let i = index\">\n                        <input type=\"radio\" [id]=\"box\" [name]=\"question.key\" [value]=\"question.value[i]\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                        <label [attr.for]=\"box\"> {{box}}</label><br>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'quantity-field'\">\n                    <!-- <label [attr.for]=\"question.key\">{{question.label}}</label><br> -->\n                    <input [name]=\"question.key\" type=\"text\" class=\"form-control\" />\n                  </div>\n                  <div *ngIf=\"question.field_type === 'option-field'\">\n                    <select [id]=\"question.key\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      <option *ngFor=\"let value of question.optionOption; let i = index\"\n                              [value]=\"question.optionValue[i]\">{{value +' ' + question.optionPrice[i]}} </option>\n\n                    </select>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'shipping-field'\">\n                    <select [id]=\"question.key\" [name]=\"question.key\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      <option *ngFor=\"let value of question.shippingOption; let i = index\"\n                              [value]=\"question.shippingValue[i]\">{{value +' ' + question.shippingProductPrice[i]}} </option>\n\n                    </select>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'total-field'\">\n                    <input [name]=\"question.key\" [value]=\"question.value\" type=\"number\" class=\"form-control\" [(ngModel)]=\"question.value\" [ngModelOptions]=\"{standalone: true}\"/>\n                  </div>\n                  <div size=\"12\" *ngIf=\"question.field_type === 'address-field'\">\n                    <ion-row>\n                      <ion-col size=\"12\" [sizeLg]=\"12\" *ngIf=\"question.isStreetAddress === 'on'\">\n                        <label for=\"StreetAddress\">{{question.streetAddressSub ? question.streetAddressSub : 'Street Address'}}</label><br>\n                        <input type=\"text\" id=\"StreetAddress\" name=\"StreetAddress\" [(ngModel)]=\"question.value.isStreetAddress\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                      <ion-col size=\"12\" [sizeLg]=\"12\" *ngIf=\"question.isAddressLine === 'on'\">\n                        <label for=\"StreetAddress\">{{question.addressLine2Sub ? question.addressLine2Sub : 'Address Line'}}</label><br>\n                        <input type=\"text\" id=\"isAddressLine\" name=\"isAddressLine\" [(ngModel)]=\"question.value.isAddressLine\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngIf=\"question.isCity === 'on'\">\n                        <label for=\"StreetAddress\">{{question.AddressCitySub ? question.AddressCitySub : 'City'}}</label><br>\n                        <input type=\"text\" id=\"isCity\" name=\"isCity\" [(ngModel)]=\"question.value.isCity\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngIf=\"question.isStateProvince === 'on'\">\n                        <label for=\"StreetAddress\">{{question.addressStateProvSub ? question.addressStateProvSub : 'State / Province / Region'}}</label><br>\n                        <input type=\"text\" id=\"isStateProvince\" name=\"isStateProvince\" [(ngModel)]=\"question.value.isStateProvince\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngIf=\"question.isZipCode === 'on'\">\n                        <label for=\"StreetAddress\">{{question.addressZipCodeSub ? question.addressZipCodeSub : 'ZIP / Postal Code'}}</label><br>\n                        <input type=\"text\" id=\"isZipCode\" name=\"isZipCode\" [(ngModel)]=\"question.value.isZipCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngIf=\"question.isCountry === 'on'\">\n                        <label for=\"StreetAddress\">{{question.addressCountrySub ? question.addressCountrySub : 'Country'}}</label><br>\n                        <input type=\"text\" id=\"isCountry\" name=\"isCountry\" [(ngModel)]=\"question.value.defaultCcountry\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                  <div *ngIf=\"question.field_type === 'credit-field'\">\n                    <ion-row>\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngFor=\"let question of questions\">\n                        <label for=\"creditCardNumber\">{{question.creditCardNumber}}</label> <br>\n                        <input type=\"number\" id=\"creditCardNumber\" name=\"creditCardNumber\" [(ngModel)]=\"question.cardNumber\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngFor=\"let question of questions\">\n                        <label for=\"creditCardholderName\">{{question.creditCardholderName}}</label> <br>\n                        <input type=\"text\" id=\"creditCardholderName\" name=\"creditCardholderName\" [maxlength]=\"question.maxLength\" [(ngModel)]=\"question.cardCardholderName\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngFor=\"let question of questions\">\n                        <label for=\"creditExpirationDate\">{{question.creditExpirationDate}}</label><br>\n                        <input type=\"text\" id=\"creditExpirationDate\" name=\"creditExpirationDate\" [(ngModel)]=\"question.cardExpirationDate\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                      </ion-col>\n\n                      <ion-col size=\"12\" [sizeLg]=\"6\" *ngFor=\"let question of questions\">\n                        <label for=\"city\">{{question.creditSecurityCode}}</label><br>\n                        <input type=\"text\" id=\"creditSecurityCode\" name=\"creditSecurityCode\" [(ngModel)]=\"question.cardSecurityCode\" class=\"form-control\">\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </div>\n                <app-dynamic-form [question]=\"question\"\n                                  [listColumns]=\"question.field_type === 'list-field' ?  question.listColumns :  question.field_type === 'poll-field' ? question.option :  question.field_type === 'quiz-field' ? question.quizText : question.field_type === 'post_tag-field' ? question.option : question.field_type === 'survey-field' ? question.surveyFieldType === 'likert-survey-type' ? question.likertOption : question.surveyFieldType === 'rating-survey-type' ? question.ratingOption : question.surveyFieldType === 'radiobtns-survey-type' ? question.radioOption : question.surveyFieldType === 'rank-survey-type' ? question.rankOption : question.surveyFieldType === 'checkbox-survey-type' ? question.checkboxOption : question.surveyFieldType === 'dropdown-survey-type' ? question.dropdownOption : '' :  question.field_type === 'name-field' ? question.inputs : ''\"\n                                  *ngIf=\"question.field_type === 'html-field' || question.field_type === 'poll-field' ||  question.field_type === 'chained-field' ||  question.field_type === 'list-field' ||  question.field_type === 'section-field' ||  question.field_type === 'post_tag-field' ||  question.field_type === 'survey-field' ||  question.field_type === 'quiz-field' || question.field_type === 'name-field'\">\n                </app-dynamic-form>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div class=\"form-row\" *ngIf=\"paymentForEventRegistration === '0' || paymentForEventRegistration === '' \" >\n            <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"checkPasswords || checkConfirmEmail\">\n              Register\n            </ion-button>\n          </div>\n          <div class=\"form-row\" *ngIf=\"paymentForEventRegistration !== '0' && paymentForEventRegistration !=='' \" >\n            <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"checkPasswords || checkConfirmEmail\">\n              Continue to Payment\n            </ion-button>\n          </div>\n          <!-- <div class=\"form-row\">\n            <ion-button class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"checkPasswords || checkConfirmEmail\">\n              {{'save' | translate}}\n            </ion-button>\n          </div> -->\n        </form>\n\n        <div *ngIf=\"payLoad\" class=\"form-row\">\n          <strong>Saved the following values</strong><br>{{payLoad}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/forms/common/question-control.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/forms/common/question-control.service.ts ***!
  \******************************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        if (questions) {
            questions.forEach(function (question) {
                group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](question.value || '');
            });
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
    };
    QuestionControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/app/modules/forms/dynamic-form/dynamic-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/forms/dynamic-form/dynamic-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row label {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\n.form-control, input[abbr=time] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.rating {\n  display: inline-block;\n  position: relative;\n  height: 50px;\n  line-height: 50px;\n  font-size: 50px;\n}\n\n.rating label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  cursor: pointer;\n}\n\n.rating label:last-child {\n  position: static;\n}\n\n.rating label:nth-child(1) {\n  z-index: 5;\n}\n\n.rating label:nth-child(2) {\n  z-index: 4;\n}\n\n.rating label:nth-child(3) {\n  z-index: 3;\n}\n\n.rating label:nth-child(4) {\n  z-index: 2;\n}\n\n.rating label:nth-child(5) {\n  z-index: 1;\n}\n\n.rating label input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n\n.rating label .icon {\n  float: left;\n  color: transparent;\n}\n\n.rating label:last-child .icon {\n  color: #000;\n}\n\n.rating:not(:hover) label input:checked ~ .icon,\n.rating:hover label:hover input ~ .icon {\n  color: #09f;\n}\n\n.rating label input:focus:not(:checked) ~ .icon:last-child {\n  color: #000;\n  text-shadow: 0 0 5px #09f;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL21vZHVsZXMvZm9ybXMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9mb3Jtcy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdGQUFBO0VBQUEsd0VBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7O0VBRUksV0FBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Zvcm1zL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1yb3cgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cbi5mb3JtLWNvbnRyb2wsIGlucHV0W2FiYnI9XCJ0aW1lXCJdIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmF0aW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5yYXRpbmcgbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmF0aW5nIGxhYmVsOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5yYXRpbmcgbGFiZWw6bnRoLWNoaWxkKDEpIHtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4ucmF0aW5nIGxhYmVsOm50aC1jaGlsZCgyKSB7XG4gICAgei1pbmRleDogNDtcbn1cblxuLnJhdGluZyBsYWJlbDpudGgtY2hpbGQoMykge1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5yYXRpbmcgbGFiZWw6bnRoLWNoaWxkKDQpIHtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucmF0aW5nIGxhYmVsOm50aC1jaGlsZCg1KSB7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnJhdGluZyBsYWJlbCBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5yYXRpbmcgbGFiZWwgLmljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnJhdGluZyBsYWJlbDpsYXN0LWNoaWxkIC5pY29uIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLnJhdGluZzpub3QoOmhvdmVyKSBsYWJlbCBpbnB1dDpjaGVja2VkIH4gLmljb24sXG4ucmF0aW5nOmhvdmVyIGxhYmVsOmhvdmVyIGlucHV0IH4gLmljb24ge1xuICAgIGNvbG9yOiAjMDlmO1xufVxuXG4ucmF0aW5nIGxhYmVsIGlucHV0OmZvY3VzOm5vdCg6Y2hlY2tlZCkgfiAuaWNvbjpsYXN0LWNoaWxkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMDlmO1xufVxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi5mb3JtLXJvdyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLCBpbnB1dFthYmJyPXRpbWVdIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5yYXRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ucmF0aW5nIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmF0aW5nIGxhYmVsOmxhc3QtY2hpbGQge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4ucmF0aW5nIGxhYmVsOm50aC1jaGlsZCgxKSB7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5yYXRpbmcgbGFiZWw6bnRoLWNoaWxkKDIpIHtcbiAgei1pbmRleDogNDtcbn1cblxuLnJhdGluZyBsYWJlbDpudGgtY2hpbGQoMykge1xuICB6LWluZGV4OiAzO1xufVxuXG4ucmF0aW5nIGxhYmVsOm50aC1jaGlsZCg0KSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yYXRpbmcgbGFiZWw6bnRoLWNoaWxkKDUpIHtcbiAgei1pbmRleDogMTtcbn1cblxuLnJhdGluZyBsYWJlbCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucmF0aW5nIGxhYmVsIC5pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnJhdGluZyBsYWJlbDpsYXN0LWNoaWxkIC5pY29uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5yYXRpbmc6bm90KDpob3ZlcikgbGFiZWwgaW5wdXQ6Y2hlY2tlZCB+IC5pY29uLFxuLnJhdGluZzpob3ZlciBsYWJlbDpob3ZlciBpbnB1dCB+IC5pY29uIHtcbiAgY29sb3I6ICMwOWY7XG59XG5cbi5yYXRpbmcgbGFiZWwgaW5wdXQ6Zm9jdXM6bm90KDpjaGVja2VkKSB+IC5pY29uOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzA5Zjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/forms/dynamic-form/dynamic-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/forms/dynamic-form/dynamic-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DynamicFormComponent = /** @class */ (function () {
    // get isValid() { return this.form.controls[this.question.key].valid; }
    function DynamicFormComponent() {
    }
    DynamicFormComponent.prototype.ngOnInit = function () { };
    DynamicFormComponent.prototype.addListFields = function (question, index) {
        if (question.listColumns === '') {
            question.listColumns = [{
                    type: 'text',
                    field: index,
                    value: ''
                }];
        }
        else {
            question.listColumns.push({
                type: 'text',
                field: index,
                value: ''
            });
        }
    };
    DynamicFormComponent.prototype.removeListFields = function (question, index) {
        question.listColumns.splice(1, index);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicFormComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DynamicFormComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DynamicFormComponent.prototype, "listColumns", void 0);
    DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/forms/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-form.component.scss */ "./src/app/modules/forms/dynamic-form/dynamic-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/forms/forms.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/forms/forms/forms.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.page */ "./src/app/modules/forms/forms/forms.page.ts");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.component */ "./src/app/modules/forms/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _common_question_control_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/question-control.service */ "./src/app/modules/forms/common/question-control.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var routes = [
    {
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]
    }
];
var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"], _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFormComponent"]],
            providers: [_common_question_control_service__WEBPACK_IMPORTED_MODULE_8__["QuestionControlService"]]
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/forms/forms.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/modules/forms/forms/forms.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row label {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.required-field::after {\n  content: \"*\";\n  color: red;\n  float: left;\n}\n\n.date-input {\n  box-sizing: border-box;\n  outline: 0;\n  padding: 0.75rem;\n  position: relative;\n  width: 100%;\n  background-position: 98% center;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  padding-right: 40px;\n}\n\n.date-input::-webkit-calendar-picker-indicator {\n  background: transparent;\n  bottom: 0;\n  color: transparent;\n  cursor: pointer;\n  height: auto;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.custom-inpt {\n  padding: 10px !important;\n}\n\n.error-message {\n  font-size: 12px;\n  color: red;\n}\n\n.commonBtn--dark {\n  --color: #fff;\n  --background: #302F34;\n  --border-color: #302F34;\n  --background-hover: #302F34;\n  --color-activated: #ffffff;\n  --background-activated: #302F34;\n}\n\n.margin-require-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL21vZHVsZXMvZm9ybXMvZm9ybXMvZm9ybXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Zvcm1zL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRkFBQTtFQUFBLHdFQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURPQTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLHdCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Zvcm1zL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXJvdyBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7XG4gICAgY29udGVudDogXCIqXCI7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmRhdGUtaW5wdXQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCUgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi8vaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4vL2lucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuLy8gICAgZGlzcGxheTogbm9uZTtcbi8vICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbi8vfVxuLmRhdGUtaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmN1c3RvbS1pbnB0IHsgLy8gc3R5bGUgY2xhc3MgdG8gYWRqdXN0IHRoZSBEYXRlIElucHV0IGNvbnRyb2wgZGVmYXVsdCBwYWRkaW5nIHZhbHVlXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jb21tb25CdG4tLWRhcmsge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAgIzMwMkYzNDtcbiAgICAtLWJvcmRlci1jb2xvcjogIzMwMkYzNDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzMDJGMzQ7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzMwMkYzNDtcbn1cblxuLm1hcmdpbi1yZXF1aXJlLWZpZWxke1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxufSIsIi5mb3JtLXJvdyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6IHJlZDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXRlLWlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uZGF0ZS1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmN1c3RvbS1pbnB0IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbW1vbkJ0bi0tZGFyayB7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZDogIzMwMkYzNDtcbiAgLS1ib3JkZXItY29sb3I6ICMzMDJGMzQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzMwMkYzNDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzMDJGMzQ7XG59XG5cbi5tYXJnaW4tcmVxdWlyZS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/forms/forms/forms.page.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/forms/forms/forms.page.ts ***!
  \***************************************************/
/*! exports provided: FormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var _services_word_press_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/word-press.service */ "./src/services/word-press.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_question_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/question-control.service */ "./src/app/modules/forms/common/question-control.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");













var FormsPage = /** @class */ (function () {
    function FormsPage(event_provider, wordPressSerice, loader, location, route, qcs, toast, dom, common, translate, router) {
        var _this = this;
        this.event_provider = event_provider;
        this.wordPressSerice = wordPressSerice;
        this.loader = loader;
        this.location = location;
        this.route = route;
        this.qcs = qcs;
        this.toast = toast;
        this.dom = dom;
        this.common = common;
        this.translate = translate;
        this.router = router;
        this.questions = [];
        this.payLoad = '';
        this.date_picker_icon = '../assets/img/calendar_icon_dark.png';
        this.cnfrm_email = '';
        this.paymentForEventRegistration = '';
        var interval = setInterval(function () {
            _this.translate.get('ALERTS').subscribe(function (res) {
                _this.alertMessage = res;
                console.log("alert", _this.alertMessage);
                clearInterval(interval);
            });
        }, 2000);
    }
    FormsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.event_provider.getChurchData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var app_pages;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res && !(Object.keys(res).length === 0)) {
                    this.ch_id = res.church.ch_id;
                    app_pages = res.apppages.find(function (x) { return x.name === 'Form'; });
                    if (app_pages) {
                        // asking for password
                        if (app_pages.password_protection_toggle === 'true') {
                            this.common.openPagePasswordModal(app_pages.page_protected_password, app_pages.selected_private_group);
                        }
                    }
                    this.getForm();
                }
                return [2 /*return*/];
            });
        }); });
    };
    FormsPage.prototype.onFileChange = function (event, question, index) {
        if (this.number_of_files < (question.value.length - 1)) {
            this.toast.presentToastWithOptions("You can upload maximum " + this.number_of_files + " number of files", 'Warning Message', 'warning');
            return false;
        }
        else if (this.file_size < event.target.files[0].size / 1024 / 1024) {
            this.toast.presentToastWithOptions("File size must under " + this.file_size + " MiB", 'Warning Message', 'warning');
            event.target.files[0] = [];
            return false;
        }
        else {
            this.uploadFiles(event.target.files, index, question);
        }
    };
    FormsPage.prototype.removeFile = function (question, i) {
        question.value.splice(i, 1);
    };
    FormsPage.prototype.onCheckBoxChange = function (ev, question, index) {
        question.value[index];
    };
    FormsPage.prototype.getForm = function () {
        var _this = this;
        this.number_of_quize_fields = 0;
        this.wordPressSerice.getQuestions({ ch_id: this.ch_id, id: this.slug }).subscribe(function (res) {
            _this.event_id = res.event_id;
            _this.form_id = JSON.parse(res.form).form_id;
            _this.form_title = JSON.parse(JSON.parse(res.form).display_meta).title;
            _this.form_description = JSON.parse(JSON.parse(res.form).display_meta).description;
            if (_this.form_description.includes("\n")) {
                _this.form_description = _this.form_description.replace(/\n/gi, "<br/>");
            }
            _this.form_description_placement = JSON.parse(JSON.parse(res.form).display_meta).descriptionPlacement;
            _this.questions = JSON.parse(JSON.parse(res.form).display_meta).fields;
            if (_this.questions) {
                _this.questions.forEach(function (question) {
                    if (question.field_type === 'password-field' && question.isRequired == 'true') {
                        _this.checkPasswords = true;
                    }
                    if (question.field_type === 'email-field' && question.isEmailConfirmed === 'on' && question.isRequired == 'true') {
                        _this.checkConfirmEmail = true;
                    }
                    if (question.field_type === 'html-field') {
                        if (question.content.search('<a') != -1) {
                            do {
                                var link = _this.checkLink(question.content);
                                if (link && link.length && link !== question.content) {
                                    question.content = question.content.replace(link[0], '');
                                    question.content.replace('href=' + link[0].replace('"', ''), '');
                                    var new_bypassLink = link[0];
                                    question.content = question.content.replace("<a", "<span style=\"color: blue; text-decoration: underline;\" onclick=\"openInNewBrowser('" + new_bypassLink + "', this)\" id=\"link_tag\"");
                                    question.content = question.content.replace('</a>', '</span>');
                                    question.content = question.content.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                }
                                else {
                                    question.content = question.content.replace("<a", "<span id=\"link_tag\"");
                                    question.content = question.content.replace('</a>', '</span>');
                                    question.content = question.content.replace('rel="noopener noreferrer"', 'rel="opener external author"');
                                }
                            } while (question.content.search('<a') != -1);
                        }
                        if (question.content.includes('unsafe:')) {
                            question.content = question.replaceAll('unsafe:', '');
                        }
                        question.content = _this.parseHTML(question.content);
                    }
                    if (question.field_type === 'fileupload-field') {
                        _this.file_size = parseInt(question.maxFileSize);
                        _this.number_of_files = parseInt(question.maxNumberFiles);
                        question.value = [];
                    }
                    if (question.field_type === 'list-field') {
                        _this.addListFields(question, 0);
                    }
                    if (question.field_type === 'poll-field') {
                        if (question.randomChoose === "on") {
                            question.option = _this.shuffleArray(question.option);
                        }
                        if (question.pollType === 'checkbox-poll-type') {
                            question.value = [];
                            question.option.forEach(function (element) {
                                question.value.push(false);
                            });
                        }
                    }
                    if (question.field_type === 'quiz-field') {
                        if (question.randomizeQuizOrder === "on") {
                            question.quizText = _this.shuffleArray(question.quizText);
                        }
                        _this.number_of_quize_fields = _this.number_of_quize_fields + 1;
                        if (question.quizFieldType === 'checkbox-quiz-type') {
                            question.value = [];
                            question.quizText.forEach(function (element) {
                                question.value.push(false);
                            });
                        }
                    }
                    if (question.field_type === 'survey-field') {
                        if (question.surveyFieldType === 'checkbox-survey-type') {
                            question.value = [];
                            question.checkboxOption.forEach(function (element) {
                                question.value.push(false);
                            });
                        }
                    }
                    if (question.field_type === 'address-field') {
                        question.value = {};
                        if (question.isStreetAddress === 'on') {
                            question.value['isStreetAddress'] = '';
                        }
                        if (question.question !== undefined) {
                            if (question.question.isAddressLine !== undefined && question.question.isAddressLine === 'on') {
                                question.value['isAddressLine'] = '';
                            }
                            if (question.question.isCity === 'on') {
                                question.value['isCity'] = '';
                            }
                        }
                        if (question.isStateProvince === 'on') {
                            question.value['isStateProvince'] = '';
                        }
                        if (question.isZipCode === 'on') {
                            question.value['isZipCode'] = '';
                        }
                        if (question.isCountry === 'on') {
                            question.value['defaultCcountry'] = '';
                        }
                    }
                    if (question.field_type === 'checkbox-field') {
                        question.value = [];
                        question.option.forEach(function (element) {
                            question.value.push(false);
                        });
                    }
                    if (question.field_type === 'payment-input') {
                        _this.paymentForEventRegistration = question.value[0];
                    }
                });
            }
            _this.form = _this.qcs.toFormGroup(_this.questions);
        });
    };
    FormsPage.prototype.validURL = function (str) {
        var pattern = new RegExp('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    };
    FormsPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, exit, isValid, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = [];
                exit = false;
                isValid = true;
                this.correct_quiz = 0;
                this.show_quiz_popup = false;
                this.questions.forEach(function (question, index) {
                    if (question.isRequired === 'true') {
                        if (question.field_type === 'name-field') {
                            question.inputs.forEach(function (input, index) {
                                if (input.value === '' && input.isHidden === 'true') {
                                    isValid = false;
                                }
                            });
                            if (isValid) {
                                question.value = JSON.stringify(question.inputs);
                            }
                        }
                        if (question.value instanceof Array) {
                            isValid = false;
                            question.value.forEach(function (element) {
                                if (element !== '' && ((question.field_type === 'checkbox-field' || question.pollType === 'checkbox-poll-type' || question.quizFieldType === 'checkbox-quiz-type' || question.surveyFieldType === 'checkbox-survey-type' || question.field_type === 'checkbox-field' || question.field_type === 'multiSelect-field') && element !== false)) {
                                    isValid = true;
                                }
                            });
                        }
                        else {
                            if (question.value === '') {
                                isValid = false;
                                return 0;
                            }
                        }
                    }
                    else {
                        if (question.field_type === 'name-field') {
                            question.inputs.forEach(function (input, index) {
                                if (input.value === '' && input.isHidden === 'true') {
                                    isValid = false;
                                }
                            });
                            question.value = JSON.stringify(question.inputs);
                        }
                    }
                    if (question.field_type === 'checkbox-field') {
                        if (question.value.length >= 0) {
                            question.value.forEach(function (input, index) {
                                if (question.value[index] === true) {
                                    question.value[index] = question.option[index];
                                }
                                else {
                                    question.value[index] = "";
                                }
                            });
                        }
                    }
                    if (question.field_type === 'list-field') {
                        question.value = question.listColumns;
                    }
                    if (question.field_type === 'email-field' && _this.checkConfirmEmail === true) {
                        if (question.value !== _this.cnfrm_email) {
                            _this.toast.presentToastWithOptions("Email and Confirm email does not match", 'Warning Message', 'warning');
                            exit = true;
                            _this.checkConfirmEmail = false;
                            _this.isEmailConfirm = false;
                        }
                    }
                    if (question.field_type === 'poll-field') {
                        if (question.pollType === 'checkbox-poll-type') {
                            question.option.forEach(function (element, index) {
                                if (question.value[index] === true) {
                                    question.value[index] = element;
                                }
                            });
                        }
                    }
                    if (question.field_type === 'poll-field') {
                        if (question.pollType === 'checkbox-poll-type') {
                            question.option.forEach(function (element, index) {
                                if (question.value[index] == false) {
                                    question.value.splice(index, 1);
                                }
                            });
                        }
                    }
                    if (question.field_type === 'quiz-field') {
                        if (question.quizFieldType === 'checkbox-quiz-type') {
                            question.quizText.forEach(function (element, index) {
                                if (question.value[index] === true) {
                                    question.value[index] = element;
                                }
                            });
                        }
                    }
                    if (question.field_type === 'checkbox-field') {
                        // if(question.surveyFieldType === 'checkbox-survey-type'){
                        question.option.forEach(function (element, index) {
                            if (question.value[index] === true) {
                                question.value[index] = element;
                            }
                        });
                        // }
                    }
                    if (question.field_type === 'quiz-field') {
                        if (question.quizFieldType === 'checkbox-quiz-type') {
                            question.quizText.forEach(function (element, index) {
                                if (question.value[index] == false) {
                                    question.value.splice(index, 1);
                                }
                            });
                        }
                    }
                    if (question.field_type === 'survey-field') {
                        if (question.surveyFieldType === 'checkbox-survey-type') {
                            question.checkboxOption.forEach(function (element, index) {
                                if (question.value[index] === true) {
                                    question.value[index] = element;
                                }
                            });
                        }
                    }
                    if (question.field_type === 'survey-field') {
                        if (question.surveyFieldType === 'checkbox-survey-type') {
                            question.checkboxOption.forEach(function (element, index) {
                                if (question.value[index] == false) {
                                    question.value.splice(index, 1);
                                }
                            });
                        }
                    }
                    if (question.isPasswordStrength === 'true' && question.isRequired == 'true') {
                        if (question.passwordMinStrength === 'strong') {
                            if (question.value.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')) {
                                _this.strongPassword = true;
                            }
                            else {
                                _this.toast.presentToastWithOptions("Password has at least one lowercase letter, one uppercase letter, one digit, one special character and is at least eight characters long", 'Warning Message', 'warning');
                                exit = true;
                            }
                        }
                        if (question.passwordMinStrength === 'good') {
                            if (question.value.match('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))')) {
                                _this.goodPassword = true;
                            }
                            else {
                                _this.toast.presentToastWithOptions("Password has at least one lowercase letter, one uppercase letter, one digit, one special character and is at least six characters long", 'Warning Message', 'warning');
                                exit = true;
                            }
                        }
                        if (question.passwordMinStrength === 'bad') {
                            if (question.value.match('((?=.*[a-z])(?=.*[0-9])(?=.{6,}))')) {
                                _this.badPassword = true;
                            }
                            else {
                                _this.toast.presentToastWithOptions("Password has at least one lowercase letter or uppercase letter, one digit or special character and is at least six characters long", 'Warning Message', 'warning');
                                exit = true;
                            }
                        }
                        if (question.passwordMinStrength === 'short') {
                            if (question.value.match('((?=.*[a-z])(?=.*[0-9]))')) {
                                _this.shortPassword = true;
                            }
                            else {
                                _this.toast.presentToastWithOptions("Password has one lowercase letter or uppercase letter or digit", 'Warning Message', 'warning');
                                exit = true;
                            }
                        }
                    }
                    if (question.field_type === 'quiz-field') {
                        if (question.quizFieldType !== 'checkbox-quiz-type') {
                            if (question.value === question.radiobtnChoice) {
                                _this.correct_quiz = _this.correct_quiz + 1;
                            }
                        }
                        _this.show_quiz_popup = true;
                    }
                    if (question.field_type === 'website-field') {
                        if (question.value && !_this.validURL(question.value)) {
                            _this.toast.presentToastWithOptions("Website URL not valid. Format: https://example.com", 'Warning Message', 'warning');
                            exit = true;
                        }
                    }
                    if (question.rangeMax != '' && question.value.length < parseInt(question.minRange)) {
                        _this.toast.presentToastWithOptions("Please enter " + question.minRange + " in " + question.label, 'Warning Message', 'warning');
                        exit = true;
                    }
                    if (question.field_type === 'date-field' && isValid === true) {
                        question.value = moment__WEBPACK_IMPORTED_MODULE_10__(question.value);
                        question.value = moment__WEBPACK_IMPORTED_MODULE_10__(question.value).format('MM/DD/YYYY');
                    }
                    if (isValid) {
                        if (question.field_type === 'address-field') {
                            question.value = JSON.stringify(question.value);
                        }
                        data.push({
                            name: question.id,
                            value: question.value
                        });
                    }
                });
                if (!isValid) {
                    this.toast.presentToastWithOptions(this.alertMessage.enter_all_required_fields, this.alertMessage.warning, 'warning');
                    return [2 /*return*/];
                }
                if (exit) {
                    return [2 /*return*/];
                }
                if (this.show_quiz_popup) {
                    if (this.correct_quiz < this.number_of_quize_fields) {
                        // this.toast.presentToastWithOptions("Your score in quiz is " + this.correct_quiz + "/" + this.number_of_quize_fields,'Warning Message', 'warning');
                    }
                    else {
                        // this.toast.presentToastWithOptions("Your score in quiz is " + this.correct_quiz + "/" + this.number_of_quize_fields,'Message', 'success');
                    }
                }
                body = {
                    ch_id: this.ch_id,
                    id: this.form_id,
                    data: JSON.stringify(data)
                };
                this.wordPressSerice.saveForm(body).subscribe(function (res) {
                    if (res.confirmation_type === 'redirect') {
                        window.location = res.confirmation_content;
                    }
                    else if (_this.event_id != null) {
                        if (_this.paymentForEventRegistration !== 0 && _this.paymentForEventRegistration !== '') {
                            _this.router.navigate(['event-giving-pwa/' + _this.ch_id + '/' + _this.event_id, { payment: _this.paymentForEventRegistration }]);
                            // 'event-giving-pwa/:ch_id/:event_id'
                        }
                        else {
                            _this.router.navigate(['event-giving/' + _this.event_id]);
                        }
                    }
                    else {
                        _this.toast.presentToastWithOptions((res.confirmation_content), 'Success', 'success');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    FormsPage.prototype.parseHTML = function (data) {
        return this.dom.bypassSecurityTrustHtml(data);
    };
    FormsPage.prototype.checkMax = function (question) {
        if (question.value.length > parseInt(question.rangeMax)) {
            this.toast.presentToastWithOptions("Please enter " + question.rangeMax + " in " + question.label, 'Warning Message', 'warning');
            return false;
        }
    };
    FormsPage.prototype.checkPasswordStrength = function (e, question) {
        if (question.passwordMinStrength === 'strong') {
            if (e.target.value.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')) {
                this.strongPassword = true;
            }
            else {
                this.strongPassword = false;
            }
        }
        if (question.passwordMinStrength === 'good') {
            if (e.target.value.match('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))')) {
                this.goodPassword = true;
            }
            else {
                this.goodPassword = false;
            }
        }
        if (question.passwordMinStrength === 'bad') {
            if (e.target.value.match('((?=.*[a-z])(?=.*[0-9])(?=.{6,}))')) {
                this.badPassword = true;
            }
            else {
                this.badPassword = false;
            }
        }
        if (question.passwordMinStrength === 'short') {
            if (e.target.value.match('((?=.*[a-z])(?=.*[0-9]))')) {
                this.shortPassword = true;
            }
            else {
                this.shortPassword = false;
            }
        }
        this.matchPassword = false;
        this.checkPasswords = true;
    };
    FormsPage.prototype.checkMatchPassword = function (e, question) {
        if (e.target.value != question.value) {
            this.matchPassword = false;
            this.checkPasswords = true;
        }
        else {
            this.matchPassword = true;
            this.checkPasswords = false;
        }
    };
    FormsPage.prototype.addListFields = function (question, index) {
        if (question.listColumns === '') {
            question.listColumns = [{
                    type: 'text',
                    field: index,
                    value: ''
                }];
        }
        else {
            question.listColumns.push({
                type: 'text',
                field: index,
                value: ''
            });
        }
    };
    FormsPage.prototype.addEmail = function (e, question) {
        if (question.field_type === 'email-field') {
            // this.checkConfirmEmail = true;
            // this.isEmailConfirm = false;
        }
    };
    FormsPage.prototype.checkEmail = function (e, question) {
        if (question.confirm_email === question.value) {
            this.isEmailConfirm = true;
            this.checkConfirmEmail = false;
        }
        else {
            this.isEmailConfirm = false;
        }
    };
    FormsPage.prototype.shuffleArray = function (array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    };
    FormsPage.prototype.uploadFiles = function (files, index, question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, toBase64, base64, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        toBase64 = function (file) { return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function () { return resolve(reader.result); };
                            reader.onerror = function (error) { return reject(error); };
                        }); };
                        return [4 /*yield*/, toBase64(files[0])];
                    case 1:
                        base64 = _a.sent();
                        data = {
                            file: base64
                        };
                        this.wordPressSerice.saveFiles(data).subscribe(function (res) {
                            if (res.status) {
                                question.value[index] = res.file_name[0];
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsPage.prototype.checkLink = function (code) {
        var link = code.match(/\bhttps?:\/\/\S+\b/gi);
        if (link && link.length) {
            code.replace('href=' + link[0], '');
            if (link[0].includes('css')) {
                return this.checkLink(code);
            }
            return link;
        }
        else {
            return code;
        }
    };
    FormsPage.ctorParameters = function () { return [
        { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_2__["EventProviderService"] },
        { type: _services_word_press_service__WEBPACK_IMPORTED_MODULE_3__["WordPressService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _common_question_control_service__WEBPACK_IMPORTED_MODULE_7__["QuestionControlService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    FormsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.page.html */ "./node_modules/raw-loader/index.js!./src/app/modules/forms/forms/forms.page.html"),
            styles: [__webpack_require__(/*! ./forms.page.scss */ "./src/app/modules/forms/forms/forms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_provider_service__WEBPACK_IMPORTED_MODULE_2__["EventProviderService"],
            _services_word_press_service__WEBPACK_IMPORTED_MODULE_3__["WordPressService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _common_question_control_service__WEBPACK_IMPORTED_MODULE_7__["QuestionControlService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], FormsPage);
    return FormsPage;
}());



/***/ })

}]);
//# sourceMappingURL=modules-forms-forms-forms-module-es5.js.map