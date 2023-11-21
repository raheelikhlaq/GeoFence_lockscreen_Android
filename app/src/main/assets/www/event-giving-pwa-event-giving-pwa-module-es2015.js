(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-giving-pwa-event-giving-pwa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/event-giving-pwa/event-giving-pwa.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event-giving-pwa/event-giving-pwa.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"page-wrapper\">\n    <div class=\"app-container\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col [size]=\"12\" [sizeMd]=\"12\" [sizeLg]=\"8\">\n            <ion-card class=\"ionCard ionCard--mobile contributeCard\">\n              <ion-button  (click)=\"guest ? gotoLogin() : logOut()\" routerDirection=\"root\"\n                          class=\"commonBtn commonBtn--dark commonBtn--round mb-20\"\n                          shape=\"round\" fill=\"outline\">{{guest ? ('GIVING.login_register' | translate) : ('GIVING.logout' | translate) }}\n              </ion-button>\n              <p *ngIf=\"user\"> <b>Name: </b>{{user.first_last_name}}</p>\n\n              <h2 class=\"ion-text-center heading2\">{{'EVENT_REGISTRATION.event_registration' | translate}}</h2>\n              <h5 *ngIf=\"event_detail\" class=\"ion-text-center heading5\">{{event_name}}</h5>\n              <h5 *ngIf=\"start_time && start_date && end_time && end_date\" class=\"ion-text-center heading5\">{{start_date}} to {{end_date}}, {{start_time}} to {{end_time}}</h5>\n\n\n              <!--<form #form=\"ngForm\" novalidate>-->\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <div *ngIf=\"guest\" class=\"ion-margin-bottom\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input class=\"inputField__area\" inputmode=\"text\" placeholder=\"{{'GIVING.email_placeholder' | translate}}*\"\n                                 name=\"guest\" [(ngModel)]=\"guestEmail\"></ion-input>\n                    </ion-item>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <div [formGroup]=\"form\">\n                <div formArrayName=\"amounts\"\n                     *ngFor=\"let item of form.get('amounts')['controls']; let i = index\">\n                  <section [formGroupName]=\"i\">\n                    <ion-row>\n                      <ion-col size=\"10\" class=\"ion-no-padding\">\n                        <div class=\"ion-margin-bottom\">\n                          <ion-item class=\"inputField\" lines=\"none\">\n                            <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                              <ion-icon name=\"person\"></ion-icon>\n                            </ion-buttons>\n                            <ion-label>Attendees Type</ion-label>\n                            <ion-select interface=\"action-sheet\" formControlName=\"amount\"\n                                        (ionChange)=\"setDisplayAmount(i)\"\n                                        name=\"Attendees\"\n                                        class=\"inputField__area inputField__area--select\">\n                              <ion-select-option value=\"offering\"\n                                                 *ngFor=\"let item of event_attendees\"\n                                                 [value]=\"item.cost\">{{item.name}}: ${{item.cost}}\n                              </ion-select-option>\n                            </ion-select>\n                          </ion-item>\n                          <div *ngIf=\"event_payment_obj.length > 0 && event_payment_obj[i].options.length > 0\">\n                            <ion-item *ngFor=\"let option of event_payment_obj[i].options; let ind = index\" lines=\"none\" class=\"checkBox\">\n                              <ion-label class=\"checkBox__text\">{{option.option}}</ion-label>\n                              <ion-checkbox class=\"checkBox__check\" slot=\"start\"\n                                            name=\"attendee_opt\" [checked]=\"option.checked\" [(ngModel)]=\"option.status\" formControlName=\"attendee_option\" (ionChange)=\"select_checkbox(option, i, ind)\"></ion-checkbox>\n                            </ion-item>\n                          </div>\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"2\" class=\"ion-no-padding ion-text-right\">\n                        <div class=\"ion-margin-bottom\" *ngIf=\"i === 0\">\n                          <ion-button (click)=\"addNewInputField(i)\" class=\"commonBtn--dark\">\n                            <ion-icon name=\"add\"></ion-icon>\n                          </ion-button>\n                        </div>\n                        <div class=\"ion-margin-bottom\" *ngIf=\"i != 0\">\n                          <ion-button (click)=\"removeInputField(i)\" class=\"commonBtn--dark\">\n                            <ion-icon name=\"remove\"></ion-icon>\n                          </ion-button>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </section>\n                </div>\n              </div>\n\n              <div class=\"ion-margin-bottom\">\n                <ion-item class=\"inputField\" lines=\"none\" detail=\"false\">\n                  <ion-buttons slot=\"start\" class=\"inputField__icon\">\n                    <ion-icon name=\"card\"></ion-icon>\n                  </ion-buttons>\n                  <ion-label>Source</ion-label>\n                  <ion-select interface=\"action-sheet\" [(ngModel)]=\"payment_source_dropdown\"\n                              name=\"frequency\" (ionChange)=\"changeSliderOnDropdown()\"\n                              class=\"inputField__area inputField__area--select\"\n                              style=\"padding-left: 0;\">\n                    <ion-select-option value=\"credit_card\">Credit or Debit Card</ion-select-option>\n                    <ion-select-option value=\"bank_account\" *ngIf=\"help_code_epic?.bank_type != 'eft'\">{{'GIVING.sourcetype.ach' | translate}} </ion-select-option>\n                            <ion-select-option value=\"bank_account\" *ngIf=\"help_code_epic?.bank_type === 'eft'\">{{'GIVING.sourcetype.eft' | translate}} </ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n\n              <!-- -------- CARD -------- -->\n              <ion-slides (ionSlideDidChange)=\"changeSlider()\" class=\"cardSlider\" >\n\n                <ion-slide *ngFor= \"let source of savedSources; let i = index\">\n                  <ion-card class=\"common-credit-card\" *ngIf=\"source.source_type === 'card'\">\n                    <div class=\"credit-card-icon credit-card-icon-left\">\n                      <ion-icon name=\"trash\" (click)=\"deleteSource(i)\" class=\"cursor-pointer\"></ion-icon>\n                    </div>\n\n                    <div class=\"credit-card-icon\">\n                      <img src=\"../../../assets/img/vise_icon.png\" alt=\"vise-icon\">\n                    </div>\n                    <div class=\"credit-card-body\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center credit-card-number-row\">\n                          <ion-col size=\"9\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.cardnumber_placeholder' | translate}}</p>\n                            <div class=\"card-end-number\">****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;\n                              <span\n                                      class=\"card-end-number-text\">{{source.last_digits}}</span>\n                            </div>\n                          </ion-col>\n                          <ion-col size=\"3\">\n\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div class=\"credit-card-footer\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.holdername' | translate}}</p>\n                            <span> {{source.name_holder}}</span>\n                          </ion-col>\n                          <ion-col *ngIf=\"source.exp_month && source.exp_year\" size=\"6\" class=\"ion-text-right ion-no-padding\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.expiry' | translate}}</p>\n                            <span class=\"card-exp-date\">{{source.exp_month}}/{{source.exp_year}}</span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-card>\n                  <ion-card class=\"common-credit-card\" *ngIf=\"source.source_type === 'bank'\">\n                    <div class=\"credit-card-icon\">\n                      <img src=\"../../../assets/img/bank_icon.png\" alt=\"vise-icon\">\n                    </div>\n                    <div class=\"credit-card-body\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.accountnumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\" *ngIf=\"help_code_epic?.bank_type != 'eft'\">************{{source.last_digits}}</span>\n                            <span style=\"color: #989aa2\" *ngIf=\"help_code_epic?.bank_type === 'eft'\">**{{source.last_digits}}</span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div class=\"credit-card-footer\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.holdername' | translate}}</p>\n                            <span> {{source.name_holder}}</span>\n                          </ion-col>\n                          <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\" *ngIf=\"help_code_epic?.bank_type != 'eft'\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.routingnumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\">***********</span>\n                          </ion-col>\n                          <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\" *ngIf=\"help_code_epic?.bank_type === 'eft'\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.transitNumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\"\n                                 >*****</span>\n\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-card>\n                  <!--                                        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>-->\n                </ion-slide>\n\n                <ion-slide *ngIf=\"payment_source_dropdown == 'credit_card'\">\n                  <ion-card class=\"common-credit-card\">\n                    <div class=\"credit-card-icon\">\n                      <img src=\"../../../assets/img/vise_icon.png\" alt=\"vise-icon\">\n                    </div>\n                    <div class=\"credit-card-body\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center credit-card-number-row\">\n                          <ion-col size=\"9\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.cardnumber_placeholder' | translate}}</p>\n                            <div class=\"card-end-number\">****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;\n                              <span *ngIf=\"!last4digits\"\n                                    class=\"card-end-number-text\">1234</span>\n                              <span *ngIf=\"last4digits\"\n                                    class=\"card-end-number-text\">{{last4digits}}</span>\n                            </div>\n                          </ion-col>\n                          <ion-col size=\"3\">\n\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div class=\"credit-card-footer\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.holdername' | translate}}</p>\n                            <span *ngIf=\"!first_name\"> John Doe</span>\n                            <span>{{first_name}} {{last_name}}</span>\n                          </ion-col>\n                          <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.expiry' | translate}}</p>\n                            <span *ngIf=\"!exp\" class=\"card-exp-date\">02/22</span>\n                            <span class=\"card-exp-date\">{{exp}}</span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-card>\n                  <!--                                        <ion-icon name=\"arrow-dropright-circle\"></ion-icon>-->\n                </ion-slide>\n\n                <ion-slide *ngIf=\"payment_source_dropdown == 'bank_account'\">\n                  <ion-card class=\"common-credit-card\">\n                    <div class=\"credit-card-icon\">\n                      <img src=\"../../../assets/img/bank_icon.png\" alt=\"vise-icon\">\n                    </div>\n                    <div class=\"credit-card-body\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.accountnumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\" *ngIf=\"help_code_epic?.bank_type != 'eft'\">************</span>\n                            <span style=\"color: #989aa2\" *ngIf=\"help_code_epic?.bank_type === 'eft'\">**</span>\n                            <span *ngIf=\"!last4bankDigits\">1234</span>\n                            <span *ngIf=\"last4bankDigits\">{{last4bankDigits}}</span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div class=\"credit-card-footer\">\n                      <ion-grid class=\"ion-no-padding\">\n                        <ion-row class=\"ion-align-items-center\">\n                          <ion-col size=\"6\" class=\"ion-no-padding\">\n                            <p class=\"credit-holder-name\">{{'GIVING.holdername' | translate}}</p>\n                            <span *ngIf=\"!first_name\"> John Doe</span>\n                            <span>{{first_name}} {{last_name}}</span>\n                          </ion-col>\n                          <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\" *ngIf=\"help_code_epic?.bank_type != 'eft'\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.routingnumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\"\n                                  *ngIf=\"!routingNumber\">***********</span>\n                            <span *ngIf=\"routingNumber\"\n                                  class=\"card-exp-date\">{{routingNumber}}</span>\n                          </ion-col>\n                          <ion-col size=\"6\" class=\"ion-text-right ion-no-padding\" *ngIf=\"help_code_epic?.bank_type === 'eft'\">\n                            <p class=\"credit-expiry-name\">{{'GIVING.transitNumber_placeholder' | translate}}</p>\n                            <span style=\"color: #989aa2\"\n                                  *ngIf=\"!transitNumber\">*****</span>\n                            <span *ngIf=\"transitNumber\"\n                                  class=\"card-exp-date\">{{transitNumber}}</span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-card>\n                </ion-slide>\n              </ion-slides>\n\n              <div class=\"ion-margin-bottom ion-text-center\" *ngIf=\"noPaymentMethod\">\n                <ion-label>{{'GIVING.nopaymentmethodadded_message' | translate}}</ion-label>\n              </div>\n\n              <div *ngIf=\"amount\">\n              <ion-row style=\"margin: 0 -5px;\"\n                       *ngIf=\"paymentSource === 'bank_account' || paymentSource === 'credit_card'\">\n                <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                  <ion-item class=\"inputField\" lines=\"none\">\n                    <ion-input class=\"inputField__area\" inputmode=\"text\"\n                               placeholder=\"{{'GIVING.firstname_placeholder' | translate}}*\" name=\"first_name\"\n                               [(ngModel)]=\"first_name\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                  <ion-item class=\"inputField\" lines=\"none\">\n                    <ion-input class=\"inputField__area\" inputmode=\"text\"\n                               placeholder=\"{{'GIVING.lastname_placeholder' | translate}}*\" name=\"last_name\"\n                               [(ngModel)]=\"last_name\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n\n              <div class=\"ion-margin-bottom\"\n              ngxStripeCardGroup [elementsOptions]=\"elementsOptions\" *ngIf=\"this.isPaymentMethod === 's' && paymentSource === 'credit_card'\">\n           <ion-row style=\"margin: 0 -5px;\">\n             <ion-col [size]=\"12\" [sizeLg]=\"12\">\n               <ngx-stripe-card-number containerClass=\"inputField stripe\" [options]=\"cardNumberOptions\"></ngx-stripe-card-number>\n             </ion-col>\n             <ion-col [size]=\"12\" [sizeLg]=\"6\">\n               <ngx-stripe-card-expiry  containerClass=\"inputField stripe\" [options]=\"cardExpOptions\"></ngx-stripe-card-expiry>\n             </ion-col>\n             <ion-col [size]=\"12\" [sizeLg]=\"6\">\n               <ngx-stripe-card-cvc  containerClass=\"inputField stripe\" [options]=\"cardCvcOptions\"></ngx-stripe-card-cvc>\n             </ion-col>\n           </ion-row>\n         </div>\n\n              <div class=\"ion-margin-bottom\" *ngIf=\"paymentSource === 'bank_account' \">\n                <ion-row style=\"margin: 0 -5px;\">\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <!--<ion-label>Account Type</ion-label>-->\n                      <ion-select interface=\"action-sheet\" placeholder=\"Account Type*\"\n                                  name='accountType' [(ngModel)]=\"accountType\"\n                                  class=\"inputField__area inputField__area--select\"\n                                  style=\"padding-left: 0;\">\n                        <ion-select-option value=\"checking\">{{'GIVING.personal_checking' | translate}}\n                        </ion-select-option>\n                        <ion-select-option value=\"savings\">{{'GIVING.personal_savings' | translate}}\n                        </ion-select-option>\n                        <ion-select-option value=\"business_checking\">{{'GIVING.business_checking' | translate}}\n                        </ion-select-option>\n                        <ion-select-option value=\"business_savings\">{{'GIVING.business_savings' | translate}}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"postal_code\" name=\"postal_code\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 class=\"inputField__area\" inputmode=\"text\" maxlength=\"5\"\n                                 placeholder=\"Postal Code*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngIf=\"help_code_epic.bank_type != 'eft'\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"routingNumber\" name=\"routingNumber\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 class=\"inputField__area\" inputmode=\"text\" maxlength=\"9\"\n                                 placeholder=\"{{'GIVING.routingnumber_placeholder' | translate}}*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"accountNumber\" name=\"accountNumber\"\n                                 class=\"inputField__area\" placeholder=\"{{'GIVING.accountnumber_placeholder' | translate}}*\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 [maxlength]=\"help_code_epic.bank_type == 'eft' ? '6' : '16'\" (ionChange)=\"saveLast4BankDigits()\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngIf=\"help_code_epic.bank_type == 'eft' && help_code_epic.payment_method === 'p'\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"transitNumber\" name=\"transitNumber\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 class=\"inputField__area\" inputmode=\"text\" maxlength=\"5\"\n                                 placeholder=\"{{'GIVING.transitNumber_placeholder' | translate}}*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"6\" *ngIf=\"help_code_epic.bank_type == 'eft' && help_code_epic.payment_method === 'p'\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"institutionId\" name=\"institutionId\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 class=\"inputField__area\" inputmode=\"text\" maxlength=\"3\"\n                                 placeholder=\"{{'GIVING.institutionIdnumber_placeholder' | translate}}*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class=\"ion-margin-bottom\" *ngIf=\"paymentSource === 'credit_card' && isPaymentMethod !== 's'  \">\n                <ion-row style=\"margin: 0 -5px;\">\n                  <ion-col [size]=\"12\" [sizeLg]=\"12\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input style=\"height: 50px; opacity: 0.7\" [(ngModel)]=\"cardNumber\" name=\"cardNumber\" id = \"cardNumber\"\n                                 (keypress)=\"numberOnlyValidation($event)\"\n                                 class=\"inputField__area\" inputmode=\"number\" maxlength=\"16\"\n                                 placeholder=\"{{'GIVING.cardnumber_placeholder' | translate}}*\" (ionChange)=\"saveLast4Digits()\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"4\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input style=\"height: 50px; opacity: 0.7;\" class=\"inputField__area\" inputmode=\"number\" id = \"expiryDate\"\n                                 (keypress)=\"numberOnlyValidation($event)\" maxlength=\"7\"\n                                 name=\"exp\" [(ngModel)]=\"exp\" (keyup)=\"expFormat(exp)\"\n                                 placeholder=\"Exp*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"4\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input style=\"height: 50px; opacity: 0.7\" [(ngModel)]=\"cvv\" name=\"cvv\" class=\"inputField__area\"  id = \"cvv\"\n                                 inputmode=\"number\" (keypress)=\"numberOnlyValidation($event)\"\n                                 maxlength=\"5\" placeholder=\"Cvv*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col [size]=\"12\" [sizeLg]=\"4\">\n                    <ion-item class=\"inputField\" lines=\"none\">\n                      <ion-input [(ngModel)]=\"postal_code\" name=\"postalCode\"\n                                 class=\"inputField__area\" inputmode=\"number\"\n                                 (keypress)=\"numberOnlyValidation($event)\" maxlength=\"5\"\n                                 placeholder=\"Postal Code*\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              </div>\n              <ion-row class=\"ion-align-items-center\" *ngIf=\"frequency == 'one_time'\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <div class=\"ion-margin-bottom\">\n                    <ion-item class=\"inputField\" lines=\"none\" style=\"position: relative; --inner-padding-end: 0;\">\n                      <ion-textarea class=\"inputField__area\" inputmode=\"text\" maxlength=\"200\" placeholder=\"Notes\"\n                                    name=\"guest\" [(ngModel)]=\"memo\"></ion-textarea>\n                      <span style=\"font-size: 12px; position: absolute; bottom: 0; right: 15px;\"><em>{{ memo.length }} /200</em></span>\n                    </ion-item>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-item lines=\"none\" class=\"checkBox\" *ngIf=\"!guest && wallet_id === 0\">\n                <ion-label class=\"checkBox__text\">{{'GIVING.savepayment' | translate}}.</ion-label>\n                <ion-checkbox class=\"checkBox__check\" slot=\"start\"\n                              [(ngModel)]=\"save_payment_source\"\n                              name=\"save_payment_source\"></ion-checkbox>\n              </ion-item>\n              <ion-item lines=\"none\" class=\"checkBox mb-30\">\n                <ion-label class=\"checkBox__text\">{{'GIVING.coverfees' | translate}}.\n                </ion-label>\n                <ion-checkbox class=\"checkBox__check\" slot=\"start\" [(ngModel)]=\"cover_fee\"\n                              (ionChange)=\"addCoverFee()\" name=\"cover_fee\"></ion-checkbox>\n              </ion-item>\n\n              <div class=\"ion-text-center\" style=\"min-height: 22.4px;margin-bottom: 15px;\">\n                <ion-label style=\"font-size: small\" *ngIf=\"cover_fee && cover_fee_amount && amount\">\n                  {{'GIVING.processingfee1' | translate}} ${{cover_fee_amount}} {{'GIVING.processingfee2' | translate}}\n                </ion-label>\n              </div>\n              <div>\n                <ion-button (click)=\"verifyRecaptcha()\"\n                            class=\"commonBtn commonBtn--dark commonBtn--mdblock\" expand=\"block\">\n                  <span style=\"font-weight: 500\">{{'GIVING.donate' | translate}}</span>&nbsp;<span\n                        *ngIf=\"amount\">${{button_currency}}</span><span *ngIf=\"!amount\">$0.00</span>\n                </ion-button>\n              </div>\n              <div class=\"ion-text-center\" *ngIf=\"frequencyon\">\n                <h5 class=\"heading5\">{{'GIVING.recurring_message1' | translate}} {{frequency}} {{'GIVING.recurring_message2' | translate}} {{date}}</h5>\n              </div>\n\n              <div class=\"ion-margin-bottom ion-text-center mt-40\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <ion-label style=\"font-size: small\">\n                  {{'GIVING.payment_secured_message1' | translate}}\n                  <span *ngIf=\"help_code_epic?.payment_method === 'p'\"> PaySafe </span>\n                  <span *ngIf=\"help_code_epic?.payment_method === 's'\"> Strip </span>\n                  <span *ngIf=\"help_code_epic?.payment_method === 'e'\"> Epic Pay </span>\n                    <br/>\n                  {{'GIVING.payment_secured_message2' | translate}}<br/>\n                </ion-label>\n              </div>\n\n              <!-- -------- CARD-INFO -------- -->\n              <div style=\"font-size: small\" class=\"ion-text-center\">\n                {{'GIVING.site_protected_google' | translate}}\n                <a (click)=\"openurlinbrowser('https://policies.google.com/privacy')\" style=\"cursor: pointer\">{{'GIVING.privacy_policy' | translate}}</a> {{'GIVING.and' | translate}}\n                <a (click)=\"openurlinbrowser('https://policies.google.com/terms')\" style=\"cursor: pointer\">{{'GIVING.term_service' | translate}}</a> {{'GIVING.apply' | translate}}.\n              </div>\n\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <!-- <app-footer *ngIf=\"showFooter\"></app-footer> -->\n</ion-content>\n<!-- <app-footer-mobile *ngIf=\"showFooter\"></app-footer-mobile> -->\n\n"

/***/ }),

/***/ "./src/app/event-giving-pwa/event-giving-pwa.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/event-giving-pwa/event-giving-pwa.module.ts ***!
  \*************************************************************/
/*! exports provided: EventGivingPwaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGivingPwaPageModule", function() { return EventGivingPwaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_giving_pwa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-giving-pwa.page */ "./src/app/event-giving-pwa/event-giving-pwa.page.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");











const routes = [
    {
        path: '',
        component: _event_giving_pwa_page__WEBPACK_IMPORTED_MODULE_6__["EventGivingPwaPage"]
    }
];
let EventGivingPwaPageModule = class EventGivingPwaPageModule {
};
EventGivingPwaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_9__["NgxStripeModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].stripe_key),
            _common_shared_common_module__WEBPACK_IMPORTED_MODULE_7__["SharedCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_event_giving_pwa_page__WEBPACK_IMPORTED_MODULE_6__["EventGivingPwaPage"]]
    })
], EventGivingPwaPageModule);



/***/ }),

/***/ "./src/app/event-giving-pwa/event-giving-pwa.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/event-giving-pwa/event-giving-pwa.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n/* cards */\n/* Forms */\n/* Header Icon */\n/* Sidebar */\n/* profile avatar */\n/* tabs */\n.contributeCard {\n  margin: 0 auto;\n  padding: 40px 60px 40px;\n  border-radius: 20px;\n}\n@media screen and (max-width: 992px) {\n  .contributeCard {\n    padding: 10px;\n  }\n}\n.contributeCard .heading2 {\n  margin-bottom: 40px;\n}\n.contributeCard .ion-margin-bottom {\n  margin-bottom: 25px;\n}\n.common-credit-card {\n  background: #302F34;\n  color: #ffffff;\n  font-size: 25px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  height: 300px;\n  width: 500px;\n  position: relative;\n  padding: 15px 30px;\n  border-radius: 15px;\n  margin: 0 auto 40px;\n  text-align: left;\n}\n.card-end-number {\n  color: #bdb8b8;\n}\n.card-end-number-text {\n  color: #ffffff;\n  position: relative;\n  top: -4px;\n}\n.credit-holder-name, .credit-expiry-name {\n  margin: 0;\n  font-size: 20px;\n  color: #bdb8b8;\n}\n.credit-card-icon {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  display: inline-block;\n}\n.credit-card-icon-left {\n  right: auto;\n  top: 20px;\n  left: 22px;\n  width: auto;\n  height: auto;\n  visibility: hidden;\n}\n.common-credit-card:hover .credit-card-icon-left {\n  visibility: visible;\n}\n.credit-card-icon img {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  max-width: 100%;\n  max-height: 100%;\n}\n.credit-card-footer {\n  position: absolute;\n  width: 90%;\n  bottom: 35px;\n}\n@media screen and (max-width: 576px) {\n  .common-credit-card {\n    width: 100%;\n    height: 170px;\n    font-size: 14px;\n    padding: 15px;\n  }\n\n  .credit-card-icon {\n    width: 60px;\n    height: 70px;\n  }\n\n  .credit-holder-name, .credit-expiry-name {\n    font-size: 12px;\n  }\n\n  .credit-card-footer {\n    bottom: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub3VtYW5hbmp1bS9EZXNrdG9wL3JhZGlvYmFzZS9pb25pYy9wcm9kL1VudGl0bGVkL2lvbmljX21vYmlsZS9zcmMvYXBwL2V2ZW50LWdpdmluZy1wd2EvZXZlbnQtZ2l2aW5nLXB3YS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3RkaW4iLCJzcmMvYXBwL2V2ZW50LWdpdmluZy1wd2EvZXZlbnQtZ2l2aW5nLXB3YS5wYWdlLnNjc3MiLCIvVXNlcnMvbm91bWFuYW5qdW0vRGVza3RvcC9yYWRpb2Jhc2UvaW9uaWMvcHJvZC9VbnRpdGxlZC9pb25pY19tb2JpbGUvc3JjL3Nhc3MvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxXQUFBO0FBa0ZBLFVBQUE7QUFpRkEsVUFBQTtBQThCQSxnQkFBQTtBQWFBLFlBQUE7QUFXQSxtQkFBQTtBQU1BLFNBQUE7QUNqT0E7RUFFRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tGO0FDcVFFO0VGOVFGO0lBTUksYUFBQTtFQ09GO0FBQ0Y7QURKQTtFQUNFLG1CQUFBO0FDT0Y7QURKQTtFQUNFLG1CQUFBO0FDT0Y7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDTEY7QURRQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xGO0FEUUE7RUU5QkUsV0h5SnVCO0VHeEp2QixZSHlKd0I7RUMxSHhCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ0pGO0FETUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEY7QURLQTtFQUNFLG1CQUFBO0FDRkY7QURJQTtFQUFzQixrQkFBQTtFQUFtQixZQUFBO0VBQWEsT0FBQTtFQUFRLFFBQUE7RUFBUyxNQUFBO0VBQU8sU0FBQTtFQUFVLGVBQUE7RUFBZ0IsZ0JBQUE7QUNPeEc7QURMQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNRRjtBQ3dMRTtFRnpMQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUNLRjs7RURIQTtJRWxFQSxXRm1FZ0I7SUVsRWhCLFlIeUp3QjtFRWhGeEI7O0VESEE7SUFDRSxlQUFBO0VDTUY7O0VESkE7SUFDRSxZQUFBO0VDT0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWdpdmluZy1wd2EvZXZlbnQtZ2l2aW5nLXB3YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIGFsbCBhcHBsaWNhdGlvbi13aWRlIFNhc3MgdmFyaWFibGVzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogQ29sb3JzICovXG4vL2RlZmF1bHQgcHJpbWFyeS1jb2xvciBpcyAjMzAyRjM0XG5cbiRwcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMzAyRjM0KTtcbiRzZWNvbmRhcnktY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvciwgI0FEQUNBRSk7XG4kZGVmYXVsdC1wcmltYXJ5LWNvbG9yOiAjMzAyRjM0O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGhlYWRlci1iZy1jb2xvcjogI0Q4RDhEODtcbiRoZWFkaW5nLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiRoZWFkaW5nLWNvbG9yLWxpZ2h0OiAjMzgzNzNDO1xuJGdyYXktbGlnaHQ6ICNCQUJBQkE7XG4kaGFsZi13aGl0ZTogI0YxRjFGMTtcbiRibHVlLWNvbG9yOiAjNDI2N0IyO1xuJGRhcmstZ3JheS1jb2xvcjogIzI5MjkyOTtcbiRibGFjay0ybmQ6ICMyMDIwMjA7XG4kYm90dG9tLWZvb3Rlci1iZy1jb2xvcjogIzI1MjQyNztcbiRib3R0b20tZm9vdGVyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdHJhbnNwYXJlbnQtY29sb3I6ICMwMDAwMDAwMDtcbiRmb290ZXItYmctY29sb3I6ICRkZWZhdWx0LXByaW1hcnktY29sb3I7XG4kZm9vdGVyLWhlYWRpbmctY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRtYWluLWJnLWNvbG9yOiAkd2hpdGUtY29sb3I7XG5cbiRncmF5LWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuXG4vL25ldyBwbGF5ZXIgdmFyaWFibGVzXG5cbiRwbGF5ZXItcHJpbWFyeS1jb2xvcjogdmFyKC0tcGxheWVyLXByaW1hcnktY29sb3IsICNGMkYyRjIpO1xuJHBsYXllci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBsYXllci1zZWNvbmRhcnktY29sb3IsICMyMzIzMjMpO1xuJHBsYXllci10ZXh0LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1jb2xvciwgIzExNkVGRik7XG4kcGxheWVyLXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItdGV4dC1zZWNvbmRhcnktY29sb3IsICMwMDAwMDApO1xuJHBsYXllci1idXR0b24tY29sb3I6IHZhcigtLXBsYXllci1idXR0b24tY29sb3IsICMwQTY1RkYpO1xuJHBsYXllci1idXR0b24tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wbGF5ZXItYnV0dG9uLXNlY29uZGFyeS1jb2xvciwgIzI2MzE0MSk7XG5cbiRjb2xvcnM6IChcbiAgICAgICAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxuICAgICAgICAnaGVhZGVyLWJnLWNvbG9yJzogJGhlYWRlci1iZy1jb2xvcixcbiAgICAgICAgJ2Zvb3Rlci1iZy1jb2xvcic6ICRmb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLWJnLWNvbG9yJzogJGJvdHRvbS1mb290ZXItYmctY29sb3IsXG4gICAgICAgICdib3R0b20tZm9vdGVyLXRleHQtY29sb3InOiAkYm90dG9tLWZvb3Rlci10ZXh0LWNvbG9yLFxuICAgICAgICAnZm9vdGVyLWhlYWRpbmctY29sb3InOiAkZm9vdGVyLWhlYWRpbmctY29sb3IsXG4gICAgICAgICdtYWluLWJnLWNvbG9yJzogJG1haW4tYmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yJzogJGhlYWRpbmctY29sb3IsXG4gICAgICAgICdoZWFkaW5nLWNvbG9yLWxpZ2h0JzogJGhlYWRpbmctY29sb3ItbGlnaHQsXG4gICAgICAgICdncmF5LWNvbG9yJzokZ3JheS1jb2xvcixcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAkZ3JheS1saWdodCxcbiAgICAgICAgJ2RhcmstZ3JheSc6ICRkYXJrLWdyYXktY29sb3IsXG4gICAgICAgICdoYWxmLXdoaXRlJzokaGFsZi13aGl0ZSxcbiAgICAgICAgJ2JsdWUtY29sb3InOiRibHVlLWNvbG9yLFxuICAgICAgICAnYmxhY2stMm5kJzogJGJsYWNrLTJuZCxcbiAgICAgICAgJ3RyYW5zcGFyZW50JzogJHRyYW5zcGFyZW50LWNvbG9yLFxuKTtcblxuLy8gQm9keSBmb250XG5cbiRib2R5LWZvbnQtc2l6ZTogMThweDtcbiR4LXNtYWxsLWJvZHktZm9udC1zaXplOiAxNHB4O1xuJGJvZHktZm9udC1zdHlsZTogbm9ybWFsO1xuJGJvZHktZm9udC12YXJpYW50OiBub3JtYWw7XG4kYm9keS1mb250LXdlaWdodDogNjAwO1xuJGxpbmUtaGVpZ2h0OiAxLjY7XG5cbi8vdHlwb2dyYXBoeVxuJGhlYWRpbmctb25lLXNpemU6MzZweDtcbiRoZWFkaW5nLXR3by1zaXplOiAyNHB4O1xuJGhlYWRpbmctdHdvLW1kLXNpemU6IDM2cHg7XG4kaGVhZGluZy10aHJlZS1zaXplOiAxNXB4O1xuJGhlYWRpbmctZm91ci1zaXplOjE0cHg7XG4vLyRoZWFkaW5nLWZpeC1zaXplOjtcbiRoZWFkaW5nLXNpeC1zaXplOiAxNHB4O1xuXG4kdGV4dC1sb3dlcmNhc2U6IGxvd2VyY2FzZTtcbiR0ZXh0LXVwcGVyY2FzZTogdXBwZXJjYXNlO1xuJHRleHQtY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZTtcblxuJGZvbnQtd2VpZ2h0czogKFxuICAgICAgICAnbGlnaHQnOiAzMDAsXG4gICAgICAgICdub3JtYWwnOjQwMCxcbiAgICAgICAgJ21lZGl1bSc6IDUwMCxcbiAgICAgICAgJ3NlbWlCb2xkJzogNjAwLFxuICAgICAgICAnYm9sZCc6IDcwMCxcbik7XG5cbi8qIGNhcmRzICovXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAxNXB4O1xuJGNhcmQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDM4LCAzNiwgMzUsIC4xNCk7XG5cbi8vQnV0dG9uc1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiA2MDA7XG4kYnRuLXRleHQtY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xuJGJ0bi1wYWRkaW5nLXk6IDEwcHg7XG4kYnRuLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcDogNHB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbTogNHB4O1xuJGJ0bi1mb250LXNpemU6IDE0cHg7XG4kYnRuLWxpbmUtaGVpZ2h0OiBub3JtYWw7XG4kYnRuLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4kYnRuLXRleHQtdHJhbnNmb3JtOiAkdGV4dC1sb3dlcmNhc2U7XG4kYnRuLWhlaWdodDogNDBweDtcbiRidG4tbWluLXdpZHRoOiA5MHB4O1xuXG4vL2J1dHRvbnMtd2hpdGVcbiRidG4td2hpdGUtdGV4dC1jb2xvcjogJGhlYWRpbmctY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtYm9yZGVyLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLXdoaXRlLWJhY2tncm91bmQtaG92ZXI6ICR3aGl0ZS1jb2xvcjtcblxuLy8vYnV0dG9ucy13aGl0ZS1vdXRsaW5lXG4kYnRuLXdoaXRlLW91dGxpbmUtdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi13aGl0ZS1vdXRsaW5lLWJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1ib3JkZXItY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiRidG4td2hpdGUtb3V0bGluZS1iYWNrZ3JvdW5kLWhvdmVyOiAkdHJhbnNwYXJlbnQtY29sb3I7XG5cbi8vL2dyYXlcbiRidG4tZ3JheS10ZXh0LWNvbG9yOiAkZ3JheS1jb2xvcjtcbiRidG4tZ3JheS1iYWNrZ3JvdW5kLWNvbG9yOiAkaGFsZi13aGl0ZTtcbiRidG4tZ3JheS1ib3JkZXItY29sb3I6ICRoYWxmLXdoaXRlO1xuJGJ0bi1ncmF5LWJhY2tncm91bmQtaG92ZXI6ICRoYWxmLXdoaXRlO1xuXG4vLy9kYXJrXG4kYnRuLWRhcmstdGV4dC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuJGJ0bi1kYXJrLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuJGJ0bi1kYXJrLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4kYnRuLWRhcmstYmFja2dyb3VuZC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vL2JsdWVcbiRidG4tYmx1ZS10ZXh0LWNvbG9yOiAkd2hpdGUtY29sb3I7XG4kYnRuLWJsdWUtYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtY29sb3I7XG4kYnRuLWJsdWUtYm9yZGVyLWNvbG9yOiAkYmx1ZS1jb2xvcjtcbiRidG4tYmx1ZS1iYWNrZ3JvdW5kLWhvdmVyOiAkYmx1ZS1jb2xvcjtcblxuXG4vLy90cmFuc3BhcmVudFxuJGJ0bi10cmFuc3BhcmVudC10ZXh0LWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudC1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1ob3ZlcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuXG5cbi8vL3RyYW5zcGFyZW50IGRhcmstb3V0bGluZVxuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLXRleHQtY29sb3I6ICRib3R0b20tZm9vdGVyLXRleHQtY29sb3I7XG4kYnRuLXRyYW5zcGFyZW50ZGFya091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJvcmRlci1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGRhcmtPdXRsaW5lLWJhY2tncm91bmQtaG92ZXI6ICRoZWFkaW5nLWNvbG9yO1xuXG5cbi8vL2JsYWNrIG91dGxpbmVcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtdGV4dC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWNvbG9yO1xuJGJ0bi10cmFuc3BhcmVudGJsYWNrT3V0bGluZS1ib3JkZXItY29sb3I6ICR0cmFuc3BhcmVudC1jb2xvcjtcbiRidG4tdHJhbnNwYXJlbnRibGFja091dGxpbmUtYmFja2dyb3VuZC1ob3ZlcjogJGhlYWRpbmctY29sb3I7XG5cbi8vQnV0dG9uIGxhcmdlXG4kYnRuLXBhZGRpbmctc3RhcnQtbGc6IDIwcHg7XG4kYnRuLXBhZGRpbmctZW5kLWxnOiAyMHB4O1xuJGJ0bi1wYWRkaW5nLXRvcC1sZzogNnB4O1xuJGJ0bi1wYWRkaW5nLWJvdHRvbS1sZzogNnB4O1xuJGJ0bi1mb250LXNpemUtbGc6ICRidG4tZm9udC1zaXplO1xuJGJ0bi1saW5lLWhlaWdodC1sZzogbm9ybWFsO1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAzMHB4O1xuJGJ0bi1oZWlnaHQtbGc6IDQ4cHg7XG5cbi8qIEZvcm1zICovXG4kaW5wdXQtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgzNiwgMTEzLCAxODUsIDAuMSk7XG4kaW5wdXQtZm9udC1zaXplOiAyOHB4O1xuJHgtc21hbGwtaW5wdXQtZm9udC1zaXplOiAkeC1zbWFsbC1ib2R5LWZvbnQtc2l6ZTtcbiRpbnB1dC1ib3JkZXI6IG5vbmU7XG4kaW5wdXQtcmFkaXVzOiA0MHB4O1xuJGlucHV0LWJvcmRlci1mb2N1czogbm9uZTtcbiRpbnB1dC1oZWlnaHQ6IDYwcHg7XG4kaW5wdXQtcGFkZGluZzogMCAxNnB4O1xuJGlucHV0LWljb24td2lkdGg6IDIwcHg7XG4kaW5wdXQtaWNvbi1oZWlnaHQ6ICRpbnB1dC1pY29uLXdpZHRoO1xuXG4vL2NoZWNrYm94XG4kY2hlY2tib3gtd2lkdGg6IDI0cHg7XG4kY2hlY2tib3gtaGVpZ2h0OiAkY2hlY2tib3gtd2lkdGg7XG4kY2hlY2tib3gtc21hbGwtd2lkdGg6IDIwcHg7XG4kY2hlY2tib3gtc21hbGwtaGVpZ2h0OiAkY2hlY2tib3gtc21hbGwtd2lkdGg7XG5cbi8vdGV4dFxuJHRleHQtbG93ZXJjYXNlOiBsb3dlcmNhc2U7XG4kdGV4dC11cHBlcmNhc2U6IHVwcGVyY2FzZTtcbiR0ZXh0LWNhcGl0YWxpemU6IGNhcGl0YWxpemU7XG5cbi8vY3JlZGl0IGNhcmRcblxuJGNyZWRpdC1jYXJkLWljb24td2lkdGg6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1oZWlnaHQ6IDcwcHg7XG4kY3JlZGl0LWNhcmQtaWNvbi1yaWdodDogcmlnaHQ7XG4kY3JlZGl0LWNhcmQtaWNvbi1sZWZ0OiBsZWZ0O1xuXG4vKiBIZWFkZXIgSWNvbiAqL1xuXG4kaGVhZGVyLWljb24td2lkdGg6IDMwcHg7XG4kaGVhZGVyLWljb24taGVpZ2h0OiAzMHB4O1xuJGhlYWRlci1sb2dvLXdpZHRoOiAxODBweDtcbiRoZWFkZXItbG9nby1oZWlnaHQ6IDQ4cHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby13aWR0aDogMTgwcHg7XG4keC1zbWFsbC1oZWFkZXItbG9nby1oZWlnaHQ6IDQwcHg7XG4keC1zbWFsbC1oZWFkZXItaWNvbi13aWR0aDogMjVweDtcbiRoZWFkZXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJGhlYWRlci1saW5rLWxhYmVsLXRyYW5zZm9ybTogJHRleHQtdXBwZXJjYXNlO1xuJGhlYWRlci1saW5rLWxhYmVsLWZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8qIFNpZGViYXIgKi9cblxuJHNpZGViYXItbG9nby13aWR0aDogMjAwcHg7XG4kc2lkZWJhci1sb2dvLWhlaWdodDogMTYwcHg7XG4keC1zbWFsbC1zaWRlYmFyLWxvZ28td2lkdGg6IDE4MHB4O1xuJHgtc21hbGwtc2lkZWJhci1pY29uLXdpZHRoOiAyNXB4O1xuJHNpZGViYXItbGluay1sYWJlbC1zaXplOiAxNnB4O1xuJHNpZGViYXItbGluay1sYWJlbC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiRzaWRlYmFyLWxpbmstbGFiZWwtdHJhbnNmb3JtOiAkdGV4dC1jYXBpdGFsaXplO1xuJHNpZGViYXItbGluay1sYWJlbC1mb250LXdlaWdodDogNTAwO1xuJHNpZGViYXItaWNvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XG4vKiBwcm9maWxlIGF2YXRhciAqL1xuXG4kcHJvZmlsZS1pbWFnZS13aWR0aDogODBweDtcbiRwcm9maWxlLWltYWdlLWhlaWdodDogJHByb2ZpbGUtaW1hZ2Utd2lkdGg7XG5cblxuLyogdGFicyAqL1xuXG4kdGFicy1iYXItYmctY29sb3I6JHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLXRleHQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4kdGFicy1iYXItYm9yZGVyLWNvbG9yOiAkaGVhZGluZy1jb2xvcjtcbiR0YWJzLWJhci1idG4tdGV4dC1jb2xvcjogJHRhYnMtYmFyLXRleHQtY29sb3I7XG4kdGFicy1iYXItdGV4dC1zaXplOiAxNXB4O1xuJHRhYnMtYmFyLWJvcmRlci1jb2xvcjoycHggc29saWQgJHRyYW5zcGFyZW50LWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS10ZXh0LWNvbG9yOiRoZWFkaW5nLWNvbG9yO1xuJHRhYnMtYmFyLWFjdGl2ZS1ib3JkZXItY29sb3I6MnB4IHNvbGlkICRoZWFkaW5nLWNvbG9yO1xuXG5cblxuLy8vIGFwcC1jb250YWluZXItd2lkdGhcbi8vLyBAcHJvcCB7U3RyaW5nfSBrZXlzIC0gS2V5cyBhcmUgaWRlbnRpZmllcnMgbWFwcGVkIHRvIGEgZ2l2ZW4gbGVuZ3RoXG4vLy8gQHByb3Age01hcH0gdmFsdWVzIC0gVmFsdWVzIGFyZSBhY3R1YWwgYnJlYWtwb2ludHMgZXhwcmVzc2VkIGluIHBpeGVsc1xuJGNvbnRhaW5lci13aWR0aDogKFxuICAgICAgICAnbGFyZ2UnOiAxMDAlLFxuICAgICAgICAnbWVkaXVtJzogMTAwJSxcbiAgICAgICAgJ3NtYWxsJzogMTAwJSxcbiAgICAgICAgJ3gtc21hbGwnOiAxMDAlLFxuKSAhZGVmYXVsdDtcblxuLy8vIEJyZWFrcG9pbnRzIG1hcFxuLy8vIEBwcm9wIHtTdHJpbmd9IGtleXMgLSBLZXlzIGFyZSBpZGVudGlmaWVycyBtYXBwZWQgdG8gYSBnaXZlbiBsZW5ndGhcbi8vLyBAcHJvcCB7TWFwfSB2YWx1ZXMgLSBWYWx1ZXMgYXJlIGFjdHVhbCBicmVha3BvaW50cyBleHByZXNzZWQgaW4gcGl4ZWxzXG4kbWVkaWEtYnJlYWtwb2ludHM6IChcbiAgICAgICAgJ2xhcmdlJzogMTIwMHB4LFxuICAgICAgICAnbWVkaXVtJzogOTkycHgsXG4gICAgICAgICdzbWFsbCc6IDc2OHB4LFxuICAgICAgICAneC1zbWFsbCc6IDU3NnB4LFxuICAgICAgICAneHgtc21hbGwnOiA0MTRweCxcbikgIWRlZmF1bHQ7XG5cbi8vLyBSZWxhdGl2ZSBvciBhYnNvbHV0ZSBVUkwgd2hlcmUgYWxsIGFzc2V0cyBhcmUgc2VydmVkIGZyb21cbi8vLyBAdHlwZSBTdHJpbmdcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2hlbiB1c2luZyBhIENETlxuLy8vICAgJGJhc2UtdXJsOiAnaHR0cDovL2Nkbi5leGFtcGxlLmNvbS9hc3NldHMvJztcbiRiYXNlLXVybDogJ2Fzc2V0cy8nICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3Nhc3MvY29uZmlnXCI7XG5cbi5jb250cmlidXRlQ2FyZCB7XG4gIC8vd2lkdGg6IDc0MnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDBweCA2MHB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5cbi5jb250cmlidXRlQ2FyZCAuaGVhZGluZzIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uY29udHJpYnV0ZUNhcmQgLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm5ld01ldGhvZGJ0biB7XG4gIC8vZm9udC1zaXplOiAxNnB4O1xuICAvL2ZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC8vbWluLXdpZHRoOiAyNDJweDtcbiAgLy9oZWlnaHQ6IDUwcHg7XG59XG5cblxuLmNyZWRpdC1jYXJkLXdyYXBwZXIge1xuXG59XG5cbi5jb21tb24tY3JlZGl0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjMzAyRjM0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkLWVuZC1udW1iZXIge1xuICBjb2xvcjogI2JkYjhiODtcbn1cblxuLmNhcmQtZW5kLW51bWJlci10ZXh0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xufVxuXG4uY3JlZGl0LWhvbGRlci1uYW1lLCAuY3JlZGl0LWV4cGlyeS1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYmRiOGI4O1xufVxuXG4uY3JlZGl0LWNhcmQtaWNvbiB7XG4gIEBpbmNsdWRlIHNpemUoJGNyZWRpdC1jYXJkLWljb24td2lkdGgsICRjcmVkaXQtY2FyZC1pY29uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNyZWRpdC1jYXJkLWljb24tbGVmdHtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjJweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNvbW1vbi1jcmVkaXQtY2FyZDpob3ZlciAuY3JlZGl0LWNhcmQtaWNvbi1sZWZ0e1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmNyZWRpdC1jYXJkLWljb24gaW1ne3Bvc2l0aW9uOiBhYnNvbHV0ZTttYXJnaW46IGF1dG87bGVmdDogMDtyaWdodDogMDt0b3A6IDA7Ym90dG9tOiAwO21heC13aWR0aDogMTAwJTttYXgtaGVpZ2h0OiAxMDAlO31cblxuLmNyZWRpdC1jYXJkLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgYm90dG9tOiAzNXB4O1xufVxuLmNyZWRpdC1jYXJkLW51bWJlci1yb3d7XG4gIC8vLS1pb24tZ3JpZC1jb2x1bW5zOlxufVxuXG5AaW5jbHVkZSBtZWRpYS14cyB7XG4gIC5jb21tb24tY3JlZGl0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNyZWRpdC1jYXJkLWljb24ge1xuICAgIEBpbmNsdWRlIHNpemUoNjBweCwgJGNyZWRpdC1jYXJkLWljb24taGVpZ2h0KTtcbiAgICAvL3JpZ2h0OiAzMHB4O1xuICAgIC8vdG9wOiAzMHB4O1xuICB9XG4gIC5jcmVkaXQtaG9sZGVyLW5hbWUsIC5jcmVkaXQtZXhwaXJ5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY3JlZGl0LWNhcmQtZm9vdGVyIHtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbn1cblxuIiwiLyogQ29sb3JzICovXG4vKiBjYXJkcyAqL1xuLyogRm9ybXMgKi9cbi8qIEhlYWRlciBJY29uICovXG4vKiBTaWRlYmFyICovXG4vKiBwcm9maWxlIGF2YXRhciAqL1xuLyogdGFicyAqL1xuLmNvbnRyaWJ1dGVDYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDQwcHggNjBweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRyaWJ1dGVDYXJkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5cbi5jb250cmlidXRlQ2FyZCAuaGVhZGluZzIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uY29udHJpYnV0ZUNhcmQgLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmNvbW1vbi1jcmVkaXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMzMDJGMzQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQtZW5kLW51bWJlciB7XG4gIGNvbG9yOiAjYmRiOGI4O1xufVxuXG4uY2FyZC1lbmQtbnVtYmVyLXRleHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG59XG5cbi5jcmVkaXQtaG9sZGVyLW5hbWUsIC5jcmVkaXQtZXhwaXJ5LW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNiZGI4Yjg7XG59XG5cbi5jcmVkaXQtY2FyZC1pY29uIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jcmVkaXQtY2FyZC1pY29uLWxlZnQge1xuICByaWdodDogYXV0bztcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMnB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jb21tb24tY3JlZGl0LWNhcmQ6aG92ZXIgLmNyZWRpdC1jYXJkLWljb24tbGVmdCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jcmVkaXQtY2FyZC1pY29uIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNyZWRpdC1jYXJkLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgYm90dG9tOiAzNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29tbW9uLWNyZWRpdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmNyZWRpdC1jYXJkLWljb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5jcmVkaXQtaG9sZGVyLW5hbWUsIC5jcmVkaXQtZXhwaXJ5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5jcmVkaXQtY2FyZC1mb290ZXIge1xuICAgIGJvdHRvbTogMTVweDtcbiAgfVxufSIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgYWxsIGFwcGxpY2F0aW9uLXdpZGUgU2FzcyBtaXhpbnMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vL2ZvbnQgc2l6ZVxuXG5AbWl4aW4gZm9udC1zaXplKCRmb250LXNpemUpIHtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBEZWZhdWx0XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XG4gIC8vIFdlYktpdFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4vLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLy8gU2l6aW5nIHNob3J0Y3V0c1xuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEZpcmVmb3ggNC0xOFxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gRmlyZWZveCAxOStcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVGV4dCBvdmVyZmxvd1xuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIGhpZGUtdGV4dCgpIHtcbiAgZm9udDogI3swLzB9IGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiAjezAvMH0gYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cblxuLy8gR1JBRElFTlRTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAkc3RhcnQtcGVyY2VudCB0b3AsICRlbmQtcGVyY2VudCB0b3AsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCBjb2xvci1zdG9wKCRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCksIGNvbG9yLXN0b3AoJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIEZGIDMuNitcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCAkc3RhcnQtcGVyY2VudCwgbGVmdCAkZW5kLXBlcmNlbnQsIGZyb20oJHN0YXJ0LWNvbG9yKSwgdG8oJGVuZC1jb2xvcikpOyAvLyBTYWZhcmkgNCssIENocm9tZSAyK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xKywgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMSssIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gRkYgMy42K1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTBcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsZWZ0LCBsaW5lYXIsIDAgMCwgMCAxMDAlLCBmcm9tKCRzdGFydC1jb2xvciksIGNvbG9yLXN0b3AoJGNvbG9yLXN0b3AsICRtaWQtY29sb3IpLCB0bygkZW5kLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIDEwMCUsIGZyb20oJHN0YXJ0LWNvbG9yKSwgY29sb3Itc3RvcCgkY29sb3Itc3RvcCwgJG1pZC1jb2xvciksIHRvKCRlbmQtY29sb3IpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwLCBjZW50ZXIgY2VudGVyLCA0NjAsIGZyb20oJGlubmVyLWNvbG9yKSwgdG8oJG91dGVyLWNvbG9yKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSksICRhbmdsZTogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKC4yNSwgJGNvbG9yKSwgY29sb3Itc3RvcCguMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCAkY29sb3IpLCBjb2xvci1zdG9wKC43NSwgJGNvbG9yKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG5cbi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cblxuLy8gQWxlcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG5cblxuLy8gQnV0dG9uIHZhcmlhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLWNvbG9yLCAkYmFja2dyb3VuZC1ob3Zlcikge1xuICAtLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tYmFja2dyb3VuZDogI3skYmFja2dyb3VuZH07XG4gIC0tYm9yZGVyLWNvbG9yOiAjeyRib3JkZXItY29sb3J9O1xuICAtLWJhY2tncm91bmQtaG92ZXI6I3skYmFja2dyb3VuZC1ob3Zlcn07XG5cbn1cblxuLy8gQnV0dG9uIHNpemVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXN0YXJ0LCAkYnRuLXBhZGRpbmctZW5kLCAkYnRuLXBhZGRpbmctdG9wLCAkYnRuLXBhZGRpbmctYm90dG9tLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRidG4taGVpZ2h0LCAkYnRuLW1pbi13aWR0aCkge1xuICAtLXBhZGRpbmctc3RhcnQ6I3skYnRuLXBhZGRpbmctc3RhcnR9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRidG4tcGFkZGluZy1lbmR9O1xuICAtLXBhZGRpbmctdG9wOiAjeyRidG4tcGFkZGluZy10b3B9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRidG4tcGFkZGluZy1ib3R0b219O1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGhlaWdodDogJGJ0bi1oZWlnaHQ7XG4gIG1pbi13aWR0aDogJGJ0bi1taW4td2lkdGg7XG59XG5cbi8vIFBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gID4gbGkge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG5cbi8vIExpc3RzXG5cbi8vIFVuc3R5bGVkIGtlZXBzIGxpc3QgaXRlbXMgYmxvY2sgbGV2ZWwsIGp1c3QgcmVtb3ZlcyBkZWZhdWx0IGJyb3dzZXIgcGFkZGluZyBhbmQgbGlzdC1zdHlsZVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cblxuXG4vL21lZGlhIGJyZWFrcG9pbnRzXG5cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQobGFyZ2UpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChtZWRpdW0pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogYnJlYWtwb2ludChzbWFsbCkpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBicmVha3BvaW50KHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLXh4cyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGJyZWFrcG9pbnQoeHgtc21hbGwpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/event-giving-pwa/event-giving-pwa.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/event-giving-pwa/event-giving-pwa.page.ts ***!
  \***********************************************************/
/*! exports provided: EventGivingPwaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGivingPwaPage", function() { return EventGivingPwaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_my_contribution_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/my-contribution.service */ "./src/services/my-contribution.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/loader.service */ "./src/services/loader.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast.service */ "./src/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_logo_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/logo-service.service */ "./src/services/logo-service.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/common.service */ "./src/services/common.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/events.service */ "./src/services/events.service.ts");
/* harmony import */ var _services_id_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/id.service */ "./src/services/id.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/event-provider.service */ "./src/services/event-provider.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/services/analytics.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");

























let EventGivingPwaPage = class EventGivingPwaPage {
    constructor(platform, storage, contribution, loader, toast, Auth, datePipe, _FB, currency, route, router, logoService, navCtrl, common, eventsService, idService, apiService, event_provider, analytics, device, translate, recaptchaV3Service, iab, stripeService) {
        this.platform = platform;
        this.storage = storage;
        this.contribution = contribution;
        this.loader = loader;
        this.toast = toast;
        this.Auth = Auth;
        this.datePipe = datePipe;
        this._FB = _FB;
        this.currency = currency;
        this.route = route;
        this.router = router;
        this.logoService = logoService;
        this.navCtrl = navCtrl;
        this.common = common;
        this.eventsService = eventsService;
        this.idService = idService;
        this.apiService = apiService;
        this.event_provider = event_provider;
        this.analytics = analytics;
        this.device = device;
        this.translate = translate;
        this.recaptchaV3Service = recaptchaV3Service;
        this.iab = iab;
        this.stripeService = stripeService;
        this.isPaymentMethod = "";
        this.cardNumberOptions = {
            placeholder: "Card number*",
            style: {
                base: {
                    iconColor: "#666EE8",
                    fontWeight: "500",
                    // fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#9797A6",
                    },
                },
                invalid: {
                    color: "#000",
                },
            },
        };
        this.cardExpOptions = {
            placeholder: "Exp*",
            style: {
                base: {
                    iconColor: "#666EE8",
                    fontWeight: "500",
                    // fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#9797A6",
                    },
                },
                invalid: {
                    color: "#000",
                },
            },
        };
        this.cardCvcOptions = {
            placeholder: "Cvv*",
            style: {
                base: {
                    iconColor: "#666EE8",
                    fontWeight: "500",
                    // fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#9797A6",
                    },
                },
                invalid: {
                    color: "#000",
                },
            },
        };
        this.elementsOptions = {
            locale: "en",
        };
        this.addNewBank = false;
        this.paymentSource = "credit_card";
        this.noPaymentMethod = true;
        this.frequencyon = false;
        this.count = 0;
        this.cover_fee_amount = 0.0;
        this.guest = true;
        this.currentSliderIndex = 0;
        this.memo = "";
        this.exp = "";
        this.date = "";
        this.first_name = "";
        this.last_name = "";
        this.accountType = "";
        this.postal_code = "";
        this.routingNumber = "";
        this.accountNumber = "";
        this.institutionId = "";
        this.transitNumber = "";
        this.cardNumber = "";
        this.cvv = "";
        this.save_payment_source = false;
        this.guestEmail = "";
        this.all_saved_sources = [];
        this.attendees = {
            amount: "",
            attendee: {},
            attendeeOption: "",
            attendee_option_id: "",
            options: [],
        };
        this.selected_attendee_options = [];
        this.event_payment_obj = [];
        this.page_name = "Event Giving";
        this.custom_name = "Event Giving";
        this.going_to_login = false;
        this.showFooter = true;
        this.payment_source_dropdown = "credit_card";
        // get translated alert message
        let interval = setInterval(() => {
            this.translate.get("ALERTS").subscribe((res) => {
                this.alertMessage = res;
                clearInterval(interval);
            });
        }, 2000);
        // assigning data from URL Params
        this.event_id = this.route.snapshot.paramMap.get("event_id");
        this.ch_id = this.route.snapshot.paramMap.get("ch_id");
        if (!this.ch_id) {
            this.ch_id = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].church_id;
        }
        // saving church id in ID Service
        idService.setId(this.ch_id);
        let current_url = new URL(window.location.href);
        this.page_href = current_url.pathname;
        this.frequency = this.frequency ? this.frequency : "one_time";
        if (!isNaN(Number(this.event_id))) {
            // hashing event ID
            let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
            this.event_id = md5(this.event_id);
        }
        this.displayDate = new Date();
        this.date = this.datePipe.transform(this.displayDate, "MM/dd/yyyy");
        // getting giving theme
        this.apiService
            .get_giving_design(this.ch_id)
            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res && res.status) {
                this.giving_theme = res.design;
                let theme_color = this.giving_theme.primary_color;
                let c = 0;
                // ===================== applying giving theme after 5 seconds to update page after church theme is loaded
                let interval = setInterval(() => {
                    c = c + 1;
                    if (c === 3) {
                        if (theme_color) {
                            // calling event to update color
                            this.event_provider.changecolor(theme_color); // calling event
                        }
                        if (this.giving_theme.app_style) {
                            let app_style = this.giving_theme.app_style;
                            if (app_style === "2") {
                                // in dark case
                                this.event_provider.darkmodeon(true); // calling event
                                if (this.giving_theme.dark_logo) {
                                    // calling event to update logo
                                    this.event_provider.changelogo(this.giving_theme.dark_logo); // calling event
                                }
                            }
                            else if (app_style === "1") {
                                this.event_provider.darkmodeon(false); // calling event
                                if (this.giving_theme.logo) {
                                    // calling event to update logo
                                    this.event_provider.changelogo(this.giving_theme.dark_logo); // calling event
                                }
                            }
                        }
                        clearInterval(interval);
                    }
                }, 1000);
                // =====================================================================
            }
            else {
                this.event_provider.getAppTheme.subscribe((theme) => {
                    console.log(theme);
                    if (res.design === "no design") {
                        console.log(res.design, "noooo", theme.color);
                        this.cardNumberOptions.style.base.color = theme.color
                            ? theme.color
                            : "#000";
                        this.cardExpOptions.style.base.color = theme.color
                            ? theme.color
                            : "#000";
                        this.cardCvcOptions.style.base.color = theme.color
                            ? theme.color
                            : "#000";
                        this.cardNumberOptions.style.base["::placeholder"].color =
                            theme.color ? theme.color : "yellow";
                        this.cardExpOptions.style.base["::placeholder"].color =
                            theme.color ? theme.color : "red";
                        this.cardCvcOptions.style.base["::placeholder"].color =
                            theme.color ? theme.color : "#000";
                        // this.bankOptions.style.base.color = theme.color ? theme.color : "#000";
                        this.cardNumberOptions.style.invalid.color = theme.color
                            ? theme.color
                            : "#000";
                        this.cardExpOptions.style.invalid.color = theme.color
                            ? theme.color
                            : "#000";
                        this.cardCvcOptions.style.invalid.color = theme.color
                            ? theme.color
                            : "#000";
                        // this.bankOptions.style.invalid.color = theme.color ? theme.color : "#000";
                    }
                });
            }
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.logoService.setStatus(true);
            this.event_provider.showlogo(); // calling event
            // creating form array
            this.form = this._FB.group({
                amounts: this._FB.array([this.initAmounts()]),
            });
            // getting user from local storage
            this.storage.get("user_giving").then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (val != null && val != "guest") {
                    this.guest = false;
                    //Getting Auth User
                    yield this.getAuthUser();
                }
                else {
                    // FOR GUEST
                    this.guest = true;
                }
            }));
            // Get Theme Design
            this.getDesign();
            // get giving types
            this.getGivingType();
            // getting event data
            this.getEvent();
            // firing event when user logs in
            this.event_provider.userLogin.subscribe((value) => {
                // listening event
                this.getUser();
            });
            // firing event to fetch giving design
            this.event_provider.fetchGivingDesign.subscribe((value) => {
                // getting giving theme
                this.apiService
                    .get_giving_design(this.ch_id)
                    .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res && res.status) {
                        this.giving_theme = res.design;
                        let theme_color = this.giving_theme.primary_color;
                        let c = 0;
                        // ===================== applying giving theme after 5 seconds to update page after church theme is loaded
                        let interval = setInterval(() => {
                            c = c + 1;
                            if (c === 2) {
                                if (theme_color) {
                                    // calling event to update color
                                    this.event_provider.changecolor(theme_color); // calling event
                                }
                                if (this.giving_theme.app_style) {
                                    let app_style = this.giving_theme.app_style;
                                    if (app_style === "2") {
                                        // in dark case
                                        this.event_provider.darkmodeon(true); // calling event
                                        if (this.giving_theme.dark_logo) {
                                            // calling event to update logo
                                            this.event_provider.changelogo(this.giving_theme.dark_logo); // calling event
                                        }
                                    }
                                    else if (app_style === "1") {
                                        this.event_provider.darkmodeon(false); // calling event
                                        if (this.giving_theme.logo) {
                                            // calling event to update logo
                                            this.event_provider.changelogo(this.giving_theme.dark_logo); // calling event
                                        }
                                    }
                                }
                                clearInterval(interval);
                            }
                        }, 1000);
                        // ==================================================================================
                    }
                    else {
                        this.event_provider.getAppTheme.subscribe((theme) => {
                            console.log(theme);
                            if (res.design === "no design") {
                                console.log(res.design, "noooo", theme.color);
                                this.cardNumberOptions.style.base.color = theme.color
                                    ? theme.color
                                    : "#000";
                                this.cardExpOptions.style.base.color = theme.color
                                    ? theme.color
                                    : "#000";
                                this.cardCvcOptions.style.base.color = theme.color
                                    ? theme.color
                                    : "#000";
                                this.cardNumberOptions.style.base["::placeholder"].color =
                                    theme.color ? theme.color : "yellow";
                                this.cardExpOptions.style.base["::placeholder"].color =
                                    theme.color ? theme.color : "red";
                                this.cardCvcOptions.style.base["::placeholder"].color =
                                    theme.color ? theme.color : "#000";
                                // this.bankOptions.style.base.color = theme.color ? theme.color : "#000";
                                this.cardNumberOptions.style.invalid.color = theme.color
                                    ? theme.color
                                    : "#000";
                                this.cardExpOptions.style.invalid.color = theme.color
                                    ? theme.color
                                    : "#000";
                                this.cardCvcOptions.style.invalid.color = theme.color
                                    ? theme.color
                                    : "#000";
                                // this.bankOptions.style.invalid.color = theme.color ? theme.color : "#000";
                            }
                        });
                    }
                }));
            });
            this.hideHeaderFooter();
        });
    }
    // in external safari/chrome
    openurlinbrowser(url) {
        this.iab.create(url, "_system");
    }
    verifyRecaptcha() {
        let current_url = new URL(window.location.href);
        this.recaptchaV3Service.execute("payment_eventPwa").subscribe((token) => {
            if (token) {
                this.contribution.checkCaptcha(token).subscribe((res) => {
                    if (res && res.status && res.message) {
                        let resp = JSON.parse(res.message);
                        if (resp.success === true && resp.score > 0.3) {
                            this.createPayment(false);
                        }
                        else if (resp.success === true && resp.score <= 0.3) {
                            this.clearAllFields();
                            this.toast.presentToastWithOptions("User not Verified by reCaptcha, Enter Details again!", "ReCaptcha Alert!", "warning");
                        }
                        else if (resp.success === false) {
                            this.toast.presentToastWithOptions("Site Not Verified by reCaptcha", "ReCaptcha Alert!", "warning");
                        }
                    }
                    else {
                        this.toast.presentToastWithOptions("Site Not Verified by reCaptcha!", "ReCaptcha Alert!", "warning");
                    }
                });
            }
            else {
                this.toast.presentToastWithOptions("Token not found by reCaptcha!", "ReCaptcha Alert!", "warning");
            }
        }, (error) => {
            this.createPayment(true);
        });
    }
    clearAllFields() {
        this.user = "";
        this.first_name = "";
        this.last_name = "";
        this.last4digits = "";
        this.accountType = "";
        this.postal_code = "";
        this.routingNumber = "";
        this.accountNumber = "";
        this.cardNumber = "";
        this.exp = "";
        this.cvv = "";
    }
    hideHeaderFooter() {
        // HIDE HEADER IF NOT BUILDER.CHURCHBASE
        let current_url = new URL(window.location.href);
        if (current_url.host !== "builder.churchbase.com") {
            this.showFooter = false;
            this.event_provider.hideheader("", ""); // calling event
        }
        else {
            this.event_provider.showheader(); // calling event
        }
    }
    getUser() {
        // getting user from local storage
        this.storage.get("user_giving").then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (val != null && val != "guest") {
                this.guest = false;
                //Getting Auth User
                yield this.getAuthUser();
            }
            else {
                // FOR GUEST
                this.guest = true;
            }
        }));
    }
    getEvent() {
        let ch_id = this.ch_id;
        // saving app_pages
        const body = JSON.stringify({ id: ch_id });
        // getting theme
        this.common.getTheme(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res) {
                this.common.store_app_pages(res.apppages, "Events");
                // getting events
                this.eventsService.getEventsFromChurchId(ch_id).subscribe((res) => {
                    if (res) {
                        let md5 = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
                        let all_events = res.events[0];
                        let filtered = all_events.filter((x) => md5(x.id) === this.event_id);
                        this.event_detail = filtered[0];
                        this.event_name = this.event_detail.name;
                        this.start_date = this.event_detail.start_date;
                        this.end_date = this.event_detail.end_date;
                        this.start_time = this.event_detail.start_time;
                        this.end_time = this.event_detail.end_time;
                        this.event_attendees = this.event_detail.attendee;
                        this.attendee_options = this.event_detail.options;
                    }
                }, (err) => { });
            }
        }));
    }
    getCurrency(amount) {
        if (amount) {
            let final = this.currency.transform(amount, "", "symbol-narrow", "1.2-2");
            return final.split("$").join("");
        }
    }
    initAmounts() {
        // returning object of form group
        return this._FB.group({
            amount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            giving_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            attendee_option: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    addNewInputField(index) {
        // pushing another in attendees object
        let attendees_copy = JSON.parse(JSON.stringify(this.attendees));
        this.event_payment_obj.push(attendees_copy);
        this.amounts = this.form.get("amounts");
        this.amounts.push(this.initAmounts());
    }
    removeInputField(i) {
        this.cover_fee = false;
        const control = this.form.controls.amounts;
        // subtracting amount from total
        if (this.amount) {
            this.amount = this.amount - +control.value[i].amount;
        }
        // removing index
        control.removeAt(i);
        // setting to button
        this.button_currency = this.getCurrency(this.amount);
        // removing current index from attendees object
        this.event_payment_obj.splice(i, 1);
    }
    changeSliderOnDropdown() {
        // if (this.savedSources) {
        if (this.payment_source_dropdown == "credit_card") {
            this.savedSources = [];
            this.all_saved_sources.forEach((item) => {
                if (item.source_type === "card") {
                    this.savedSources.push(item);
                }
            });
            if (this.savedSources.length === 0) {
                this.wallet_id = 0;
                this.paymentSource = "credit_card";
            }
            else {
                this.wallet_id = this.savedSources[0].id;
                this.paymentSource = "wallet";
            }
            // this.slides.slideTo(this.savedSources.length);
        }
        else {
            this.savedSources = [];
            this.all_saved_sources.forEach((item) => {
                if (item.source_type != "card") {
                    this.savedSources.push(item);
                }
            });
            if (this.savedSources.length === 0) {
                this.wallet_id = 0;
                this.paymentSource = "bank_account";
            }
            else {
                this.wallet_id = this.savedSources[0].id;
                this.paymentSource = "wallet";
            }
            // this.slides.slideTo(this.savedSources.length + 1);
        }
    }
    changeSlider() {
        if (this.savedSources) {
            this.slides.getActiveIndex().then((val) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.currentSliderIndex = val;
                if (this.currentSliderIndex >= this.savedSources.length) {
                    this.wallet_id = 0;
                }
                else {
                    this.wallet_id = this.savedSources[0].id;
                }
                this.slides.length().then((index) => {
                    if (val === index - 1) {
                        if (this.payment_source_dropdown === "credit_card") {
                            this.paymentSource = "credit_card";
                        }
                        else if (this.payment_source_dropdown === "bank_account") {
                            this.paymentSource = "bank_account";
                        }
                    }
                    else {
                        this.paymentSource = "wallet";
                    }
                });
            }));
        }
    }
    setDate() {
        if (this.displayDate) {
            this.date = this.datePipe.transform(this.displayDate, "MM/dd/yyyy");
        }
    }
    setDisplayAmount(index) {
        if (this.event_payment_obj.length === 0) {
            let attendees_copy = JSON.parse(JSON.stringify(this.attendees));
            this.event_payment_obj.push(attendees_copy);
        }
        // Emptying the previous cover fee
        this.cover_fee = false;
        this.cover_fee_amount = 0;
        const control = this.form.controls.amounts;
        let amounts = control.value;
        let last_amount = amounts[amounts.length - 1].amount;
        // saving last amount in amount
        this.event_payment_obj[index].amount = last_amount;
        // assigning attendee that matches the last amount
        let attendee = this.event_attendees.find((x) => x.cost === last_amount);
        if (attendee) {
            this.event_payment_obj[index].attendee = attendee;
            let options = this.attendee_options.filter((x) => x.attendee_id === attendee.id);
            options.map((x) => (x.checked = false));
            if (options.length > 0) {
                options.map((x) => (x.status = false));
                this.selected_attendee_options[index] = JSON.parse(JSON.stringify(options));
                this.event_payment_obj[index].options = JSON.parse(JSON.stringify(options));
            }
        }
        let total = 0;
        amounts.forEach(function (x) {
            total = total + +x.amount;
        });
        this.amount = total;
        this.button_currency = this.getCurrency(this.amount);
    }
    select_checkbox(option, index, inner_index) {
        if (this.event_payment_obj[index].options[inner_index].status) {
            this.event_payment_obj[index].options[inner_index].checked = true;
            // un-checking other checkboxes
            this.event_payment_obj[index].options.forEach(function (x) {
                if (x.id !== option.id) {
                    // x.status = false;
                    x.checked = false;
                }
            });
            // saving option and id in object
            this.event_payment_obj[index].attendeeOption = option;
            this.event_payment_obj[index].attendee_option_id = option.id;
        }
        else {
            this.event_payment_obj[index].options[inner_index].checked = false;
        }
    }
    addCoverFee() {
        let p, k, finalAmount;
        let tempAmount = this.amount;
        if (this.amount) {
            // ================ adding cover fee to total amount ======================//
            if (this.cover_fee) {
                if (this.paymentSource == "bank_account") {
                    p = parseFloat(this.help_code_epic.ep_tpl_params.var_bnk);
                    k = parseFloat(this.help_code_epic.ep_tpl_params.kte_bnk);
                }
                else if (this.paymentSource == "credit_card") {
                    p = parseFloat(this.help_code_epic.ep_tpl_params.var_cc);
                    k = parseFloat(this.help_code_epic.ep_tpl_params.kte_cc);
                }
                else if (this.paymentSource === "wallet") {
                    if (this.savedSources[this.currentSliderIndex].source_type === "card") {
                        p = parseFloat(this.help_code_epic.ep_tpl_params.var_cc);
                        k = parseFloat(this.help_code_epic.ep_tpl_params.kte_cc);
                    }
                    else if (this.savedSources[this.currentSliderIndex].source_type === "bank") {
                        p = parseFloat(this.help_code_epic.ep_tpl_params.var_bnk);
                        k = parseFloat(this.help_code_epic.ep_tpl_params.kte_bnk);
                    }
                }
                if (this.help_code_epic.payment_method === "p") {
                    tempAmount = +this.amount * p;
                    tempAmount = +tempAmount + k;
                    this.cover_fee_amount = tempAmount;
                    finalAmount = +this.amount + this.cover_fee_amount;
                }
                else {
                    if (this.amount > 624 &&
                        this.help_code_epic.payment_method == "s" &&
                        this.paymentSource == "bank_account") {
                        this.cover_fee_amount = 5;
                        finalAmount = +this.amount + this.cover_fee_amount;
                    }
                    else {
                        tempAmount = (+this.amount + k) / (1 - p);
                        this.cover_fee_amount = tempAmount - +this.amount;
                        finalAmount = +this.amount + this.cover_fee_amount;
                    }
                }
            }
            else {
                finalAmount = +this.amount - this.cover_fee_amount;
            }
            // getting amount upto 2 decimal places
            this.amount = finalAmount.toFixed(2);
            this.button_currency = this.getCurrency(this.amount);
            this.cover_fee_amount = parseFloat(this.cover_fee_amount).toFixed(2);
            // ======================================================================
        }
    }
    myFrequency(event) {
        if (this.frequency !== "one-time" && this.frequency !== "") {
            this.frequencyon = true;
        }
    }
    getAuthUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting user from local storage
            this.storage.get("user_giving").then((value) => {
                this.user = value.user;
                this.token = value.token;
                this.auth = value.auth;
                // this.getCardDetails();
            });
        });
    }
    getGivingType() {
        const body = JSON.stringify({
            churchid: this.ch_id,
        });
        // getting giving type
        this.contribution.getGivingType(body).subscribe((res) => {
            if (res.status) {
                this.givingTypes = res.funds;
            }
        });
    }
    setAmount(value, index) {
        const control = this.form.controls.amounts;
        let selected = control.at(index);
        selected.patchValue({
            amount: value,
        });
    }
    getDesign() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // getting theme from local storage
            this.theme = yield this.storage.get("theme");
            if (this.guest) {
                this.getEpicPayTemplate();
            }
        });
    }
    getCardDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = JSON.stringify({
                auth: "Bearer " + this.auth.access_token,
                id: this.user.id,
                // id: '88048',
                offset: 0,
                limit: 10,
                church_id: this.ch_id,
            });
            // getting epicpayTemplete from API in service
            this.getEpicPayTemplate();
            this.contribution.getPaymentDetails(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.sources.length != 0) {
                    this.noPaymentMethod = false;
                    this.all_saved_sources = yield res.sources;
                    this.paymentSource = "wallet";
                    this.wallet_id = this.all_saved_sources[0].id;
                    if (this.all_saved_sources[0].source_type === "card") {
                        this.payment_source_dropdown = "credit_card";
                        this.savedSources = [];
                        this.all_saved_sources.forEach((item) => {
                            if (item.source_type === "card") {
                                this.savedSources.push(item);
                            }
                        });
                    }
                    else {
                        this.payment_source_dropdown = "bank_account";
                        this.savedSources = [];
                        this.all_saved_sources.forEach((item) => {
                            if (item.source_type != "card") {
                                this.savedSources.push(item);
                            }
                        });
                    }
                }
                else {
                    this.noPaymentMethod = true;
                    this.paymentSource = "credit_card";
                    this.wallet_id = 0;
                }
            }), (err) => {
                let message = err.message;
                // Logging out and taking user to login screen if token is expired ===============================
                if (err.error.code === "access_token_expired" ||
                    err.error.code === "access_token_not_found") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.Auth.logoutUser();
                    this.event_provider.userlogout(); // calling event
                    this.event_provider.refresh_home(); // calling event
                    this.logoService.setStatus(false);
                    let login_url = "/login";
                    this.router.navigate([
                        login_url,
                        {
                            page: this.page_href,
                            color: this.giving_theme ? this.giving_theme.primary_color : "",
                            headerFooter: this.showFooter ? "internal" : "external",
                            mode: "giving",
                            app_style: this.giving_theme ? this.giving_theme.app_style : "",
                        },
                    ]);
                    // ===========================================================================================
                }
                else {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : "Error: ") +
                        " " +
                        message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
            });
        });
    }
    // GET EPIC PAY TEMPLATE
    getEpicPayTemplate() {
        const body = JSON.stringify({
            churchid: this.ch_id,
        });
        // getting epicpayTemplete from API in service
        this.contribution.getEpicPayTemplate(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.help_code_epic = res;
            this.isPaymentMethod = this.help_code_epic.payment_method;
            var self = this;
            var apiKey = "U1VULTQxMjEwNDpCLXAxLTAtNjE0MjA3YzAtMC0zMDJjMDIxNDVmZWZjZTZkYzA4MmYzNTA5MWY5YzdjNWNmZDk1MTZiYWM1YjNmYzEwMjE0NWU0OGNiMzExMDIzYWU3ZWQ4YmRkMTkyZmZhNTRmNDc2OTdkZGU2OQ==";
            var options = {
                // select the Paysafe test/sandbox environment
                environment: "LIVE",
                // set the CSS selectors to identify the payment field divs above
                // set the placeholder text to display in these fields
                fields: {
                    cardNumber: {
                        selector: "#cardNumber",
                        accessibilityLabel: "Card number*",
                        placeholder: "Card number",
                    },
                    expiryDate: {
                        selector: "#expiryDate",
                        placeholder: "Exp*",
                    },
                    cvv: {
                        selector: "#cvv",
                        placeholder: "Cvv*",
                    },
                },
            };
            // initalize the hosted iframes using the SDK setup function
            if (this.help_code_epic.payment_method === "p") {
                window.paysafe.fields.setup(apiKey, options, function (instance, error) {
                    // When the customer clicks Pay Now,
                    // call the SDK tokenize function to create
                    // a single-use payment token corresponding to the card details entered
                    // document.getElementById("payNow").addEventListener("click", function(event) {
                    self.paySafeInstance = instance;
                    // }, false);
                });
            }
        }), (err) => {
            let message = err.message;
        });
    }
    // to get only number in AMOUNT field
    numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    expFormat(val) {
        if (val.length === 2 && val[val.length - 1] !== "/") {
            this.exp = val + "/";
        }
    }
    createStripePayment(bypass_recaptcha, StripeToken) {
        // ADDITIONAL VALIDATION FOR GUEST
        if (this.guest === true && this.guestEmail === "") {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.email_required
                : "Email is required", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        // VALIDATING THE RECCURING FUNDS
        let distribution = this.form.value.amounts;
        let dist_validate;
        distribution.forEach(function (x) {
            if (x.amount === "") {
                x.giving_type = "General";
                dist_validate = false;
            }
        });
        if (dist_validate === false) {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.missing_required_fields
                : "Missing Required Fields", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        let screen, account_donor_id, email, church_id, user_data;
        screen = "events";
        church_id = this.ch_id;
        // Disable for church_id 54
        // if (church_id === '54') {
        //   this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.wrong_church : 'Wrong Church'), (this.alertMessage ? this.alertMessage.WarningMessage : 'Warning Message'), 'warning');
        //   return;
        // }
        // Preparing Data for USER
        if (this.guest === false) {
            user_data = JSON.stringify({
                email: this.user.email,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
                token: StripeToken,
            });
        }
        else {
            // preparing data for guest
            user_data = JSON.stringify({
                email: this.guestEmail,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
                token: StripeToken,
            });
        }
        // CLEARING '*' FROM CARD NUMBER
        this.cardNumber = this.cardNumber.split("*").join("");
        let payment;
        if (this.wallet_id) {
            if (this.frequency === "one_time") {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: distribution,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
            else {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: distribution,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    recurring_date: this.date,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
        }
        else {
            if (this.paymentSource === "credit_card") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: distribution,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        token: StripeToken,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: distribution,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        token: StripeToken,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
            else if (this.paymentSource === "bank_account") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: distribution,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        token: StripeToken,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: distribution,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        token: StripeToken,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
        }
        // creating events obj
        let events = this.event_detail;
        delete events.attendee;
        let attendees = [];
        let attends = this.event_attendees;
        distribution.forEach(function (x) {
            attends.forEach(function (i) {
                if (x.amount === i.cost) {
                    attendees.push(i);
                    return;
                }
            });
        });
        // removing option and id if none selected
        let event_obj_copy = JSON.parse(JSON.stringify(this.event_payment_obj));
        event_obj_copy.map((x) => {
            if (x.attendeeOption !== "") {
                if (x.attendeeOption.status === false) {
                    delete x.attendeeOption;
                    delete x.attendee_option_id;
                }
            }
            else if (x.attendeeOption === "") {
                delete x.attendeeOption;
                delete x.attendee_option_id;
            }
        });
        let event = {
            attendees: event_obj_copy,
            event: this.event_detail,
        };
        // Creating body for user
        if (this.guest === false) {
            this.body = JSON.stringify({
                auth: "Bearer " + this.auth.access_token,
                screen: screen,
                event: event,
                account_donor_id: this.user.id,
                email: this.user.email,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
                token: StripeToken,
            });
        }
        else {
            // Creating body for guest
            this.body = JSON.stringify({
                screen: screen,
                event: event,
                email: this.guestEmail,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
                token: StripeToken,
            });
        }
        this.loader.presentLoading().then(() => {
            this.contribution.makePayment(this.body, this.guest).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    this.toast.presentToastWithOptions(res.message, this.alertMessage ? this.alertMessage.Message : "Message", "success");
                    if (this.router.url.includes("kiosk")) {
                        this.logOut();
                    }
                    this.router.navigate(["/thankyou"]);
                }
                else {
                    if (res.message === "Invalid Credentials. Gateway ID: ''") {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.invalid_payment_details
                            : "Invalid Payment Details", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                    else {
                        this.toast.presentToastWithOptions(res.message, this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                }
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                // Logging out and taking user to login screen if token is expired ===============================
                if (err.error.code === "access_token_expired") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                    // ===========================================================================================
                }
                else if (err.error.http_code == 401) {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                }
                else {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : "Error: ") +
                        " " +
                        message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
                this.loader.stopLoading();
            });
        });
    }
    createPayment(bypass) {
        var bypass_recaptcha = bypass;
        this.frequency = "one_time";
        this.accountType = "general";
        if (this.isPaymentMethod === "s" && this.paymentSource === "credit_card") {
            this.stripeService
                .createToken(this.card.element, {
                name: this.first_name + " " + this.last_name,
            })
                .subscribe((result) => {
                if (result.token && result.token.id) {
                    // Use the token
                    this.createStripePayment(bypass_recaptcha, result.token.id);
                }
                else if (result.error) {
                    // Error creating the token
                    console.log(result.error.message);
                    this.toast.presentToastWithOptions(result.error.message ? result.error.message : "Stripe error", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
            });
            return;
        }
        else if (this.isPaymentMethod === "s" &&
            this.paymentSource === "bank_account") {
            const stripe = window.Stripe(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].stripe_key);
            var accountHolder = "individual";
            if (this.accountType == "business_checking" ||
                this.accountType == "business_savings") {
                accountHolder = "company";
            }
            else {
                accountHolder = "individual";
            }
            const token = stripe
                .createToken("bank_account", {
                country: "US",
                currency: "usd",
                account_holder_name: this.first_name + " " + this.last_name,
                account_holder_type: accountHolder,
                routing_number: this.routingNumber,
                account_number: this.accountNumber,
            })
                .then((token) => {
                if (token && token.token.id) {
                    // Use the token
                    this.createStripePayment(bypass_recaptcha, token.token.id);
                }
            })
                .catch((error) => {
                console.log(error);
                this.toast.presentToastWithOptions(error.message ? error.message : "Stripe error", this.alertMessage
                    ? this.alertMessage.WarningMessage
                    : "Warning Message", "warning");
            });
            return;
        }
        if (!this.wallet_id) {
            // ============= Checking if all required fields are filled or not =============================
            if (this.paymentSource === "bank_account") {
                if (this.amount === 0 ||
                    this.frequency === "" ||
                    this.date === "" ||
                    this.first_name === "" ||
                    this.last_name === "" ||
                    this.accountType === "" ||
                    this.postal_code === "" ||
                    (this.routingNumber === "" &&
                        this.help_code_epic.bank_type != "eft") ||
                    this.accountNumber === "") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.missing_required_fields_carefully
                        : "Missing Required Fields. Please complete the Form Carefully", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    return;
                }
                if (this.help_code_epic.bank_type == "eft" &&
                    this.help_code_epic.payment_method === "p") {
                    if (this.institutionId === "" || this.transitNumber === "") {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.missing_required_fields_carefully
                            : "Missing Required Fields. Please complete the Form Carefully", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                        return;
                    }
                }
            }
            else if (this.paymentSource === "credit_card") {
                if (this.amount === 0 ||
                    this.frequency === "" ||
                    this.date === "" ||
                    this.first_name === "" ||
                    this.last_name === "" ||
                    (this.cardNumber === "" &&
                        this.help_code_epic.payment_method != "p") ||
                    (this.exp === "" && this.help_code_epic.payment_method != "p") ||
                    (this.cvv === "" && this.help_code_epic.payment_method != "p") ||
                    this.postal_code === "") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.missing_required_fields_carefully
                        : "Missing Required Fields. Please complete the Form Carefully", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    return;
                }
            }
            // ==============================================================================================
        }
        if (this.paymentSource === "credit_card" &&
            this.help_code_epic.payment_method === "p") {
            let self = this;
            this.paySafeInstance.tokenize(function (instance, error, result) {
                if (error) {
                    // display the tokenization error in dialog window
                    //   alert(JSON.stringify(error));
                }
                else {
                    // write the Payment token value to the bottom of the page
                    $("#token").text("Token: " + result.token);
                    // write the Payment token value to the browser console
                    self.createPaySafeCardPayment(bypass_recaptcha, result.token);
                }
            });
            return;
        }
        // ADDITIONAL VALIDATION FOR GUEST
        if (this.guest === true && this.guestEmail === "") {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.email_required
                : "Email is required", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        // VALIDATING THE RECCURING FUNDS
        let distribution = this.form.value.amounts;
        let dist_validate;
        distribution.forEach(function (x) {
            if (x.amount === "") {
                x.giving_type = "General";
                dist_validate = false;
            }
        });
        if (dist_validate === false) {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.missing_required_fields_carefully
                : "Missing Required Fields. Please complete the Form Carefully", "Warning Message", "warning");
            return;
        }
        let screen, account_donor_id, email, church_id, user_data;
        screen = "events";
        church_id = this.ch_id;
        // Disable for church_id 54
        if (church_id === "54") {
            this.toast.presentToastWithOptions(this.alertMessage ? this.alertMessage.wrong_church : "Wrong Church", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        // Preparing Data for USER
        if (this.guest === false) {
            user_data = JSON.stringify({
                email: this.user.email,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
            });
        }
        else {
            // preparing data for guest
            user_data = JSON.stringify({
                email: this.guestEmail,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
            });
        }
        // CLEARING '*' FROM CARD NUMBER
        this.cardNumber = this.cardNumber.split("*").join("");
        // setting giving_type in distribution to GENERAL
        distribution.map((x) => {
            x.giving_type = "General";
            delete x.attendee_option;
        });
        // temporary distribution
        let dist = {
            amount: this.amount,
            giving_type: "General",
        };
        let payment;
        if (this.wallet_id) {
            if (this.frequency === "one_time") {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: dist,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
            else {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: dist,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    recurring_date: this.date,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
        }
        else {
            if (this.paymentSource === "credit_card") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
            else if (this.paymentSource === "bank_account") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
        }
        // creating events obj
        let events = this.event_detail;
        delete events.attendee;
        let attendees = [];
        let attends = this.event_attendees;
        distribution.forEach(function (x) {
            attends.forEach(function (i) {
                if (x.amount === i.cost) {
                    attendees.push(i);
                    return;
                }
            });
        });
        // removing option and id if none selected
        let event_obj_copy = JSON.parse(JSON.stringify(this.event_payment_obj));
        event_obj_copy.map((x) => {
            if (x.attendeeOption !== "") {
                if (x.attendeeOption.status === false) {
                    delete x.attendeeOption;
                    delete x.attendee_option_id;
                }
            }
            else if (x.attendeeOption === "") {
                delete x.attendeeOption;
                delete x.attendee_option_id;
            }
        });
        let event = {
            attendees: event_obj_copy,
            event: this.event_detail,
        };
        // Creating body for user
        if (this.guest === false) {
            this.body = JSON.stringify({
                auth: "Bearer " + this.auth.access_token,
                screen: screen,
                event: event,
                account_donor_id: this.user.id,
                email: this.user.email,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
            });
        }
        else {
            // Creating body for guest
            this.body = JSON.stringify({
                screen: screen,
                event: event,
                email: this.guestEmail,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
            });
        }
        this.loader.presentLoading().then(() => {
            this.contribution.makePayment(this.body, this.guest).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    this.toast.presentToastWithOptions(res.message, this.alertMessage ? this.alertMessage.Message : "Message", "success");
                    this.router.navigate(["/thankyou"]);
                }
                else {
                    if (res.message === "Invalid Credentials. Gateway ID: ''") {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.invalid_payment_details
                            : "Invalid Payment Details", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                    else {
                        this.toast.presentToastWithOptions(res.message, this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                }
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                // Logging out and taking user to login screen if token is expired ===============================
                if (err.error.code === "access_token_expired") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                    // ===========================================================================================
                }
                else if (err.error.http_code == 401) {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                }
                else {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : "Error: ") +
                        " " +
                        message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
                this.loader.stopLoading();
            });
        });
    }
    createPaySafeCardPayment(bypass_recaptcha, paySafeToken) {
        // ADDITIONAL VALIDATION FOR GUEST
        if (this.guest === true && this.guestEmail === "") {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.email_required
                : "Email is required", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        // VALIDATING THE RECCURING FUNDS
        let distribution = this.form.value.amounts;
        let dist_validate;
        distribution.forEach(function (x) {
            if (x.amount === "") {
                x.giving_type = "General";
                dist_validate = false;
            }
        });
        if (dist_validate === false) {
            this.toast.presentToastWithOptions(this.alertMessage
                ? this.alertMessage.missing_required_fields_carefully
                : "Missing Required Fields. Please complete the Form Carefully", "Warning Message", "warning");
            return;
        }
        let screen, account_donor_id, email, church_id, user_data;
        screen = "events";
        church_id = this.ch_id;
        // Disable for church_id 54
        if (church_id === "54") {
            this.toast.presentToastWithOptions(this.alertMessage ? this.alertMessage.wrong_church : "Wrong Church", this.alertMessage
                ? this.alertMessage.WarningMessage
                : "Warning Message", "warning");
            return;
        }
        // Preparing Data for USER
        if (this.guest === false) {
            user_data = JSON.stringify({
                email: this.user.email,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
                single_use_token: paySafeToken,
            });
        }
        else {
            // preparing data for guest
            user_data = JSON.stringify({
                email: this.guestEmail,
                first_name: this.first_name,
                last_name: this.last_name,
                postal_code: this.postal_code,
                single_use_token: paySafeToken,
            });
        }
        // CLEARING '*' FROM CARD NUMBER
        this.cardNumber = this.cardNumber.split("*").join("");
        // setting giving_type in distribution to GENERAL
        distribution.map((x) => {
            x.giving_type = "General";
            delete x.attendee_option;
        });
        // temporary distribution
        let dist = {
            amount: this.amount,
            giving_type: "General",
        };
        let payment;
        if (this.wallet_id) {
            if (this.frequency === "one_time") {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: dist,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
            else {
                payment = JSON.stringify({
                    type: "wallet",
                    amount: this.amount,
                    distribution: dist,
                    cover_fee: this.cover_fee,
                    recurring: this.frequency,
                    recurring_date: this.date,
                    wallet: {
                        wallet_id: this.wallet_id,
                    },
                    memo: this.memo,
                });
            }
        }
        else {
            if (this.paymentSource === "credit_card") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        credit_card: {
                            number: this.cardNumber,
                            exp: this.exp,
                            cvv: this.cvv,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
            else if (this.paymentSource === "bank_account") {
                if (this.frequency === "one_time") {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
                else {
                    payment = JSON.stringify({
                        type: this.paymentSource,
                        amount: this.amount,
                        distribution: dist,
                        cover_fee: this.cover_fee,
                        recurring: this.frequency,
                        recurring_date: this.date,
                        bank_account: {
                            account_type: this.accountType,
                            account_number: this.accountNumber,
                            routing_number: this.routingNumber,
                            transitNumber: this.transitNumber,
                            institutionId: this.institutionId,
                            bank: this.help_code_epic.bank_type,
                            save: this.save_payment_source,
                        },
                        memo: this.memo,
                    });
                }
            }
        }
        // creating events obj
        let events = this.event_detail;
        delete events.attendee;
        let attendees = [];
        let attends = this.event_attendees;
        distribution.forEach(function (x) {
            attends.forEach(function (i) {
                if (x.amount === i.cost) {
                    attendees.push(i);
                    return;
                }
            });
        });
        // removing option and id if none selected
        let event_obj_copy = JSON.parse(JSON.stringify(this.event_payment_obj));
        event_obj_copy.map((x) => {
            if (x.attendeeOption !== "") {
                if (x.attendeeOption.status === false) {
                    delete x.attendeeOption;
                    delete x.attendee_option_id;
                }
            }
            else if (x.attendeeOption === "") {
                delete x.attendeeOption;
                delete x.attendee_option_id;
            }
        });
        let event = {
            attendees: event_obj_copy,
            event: this.event_detail,
        };
        // Creating body for user
        if (this.guest === false) {
            this.body = JSON.stringify({
                auth: "Bearer " + this.auth.access_token,
                screen: screen,
                event: event,
                account_donor_id: this.user.id,
                email: this.user.email,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
            });
        }
        else {
            // Creating body for guest
            this.body = JSON.stringify({
                screen: screen,
                event: event,
                email: this.guestEmail,
                churchid: church_id,
                funds: "General",
                user_data: user_data,
                payment: payment,
                bypass: bypass_recaptcha,
            });
        }
        this.loader.presentLoading().then(() => {
            this.contribution.makePayment(this.body, this.guest).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (res.status) {
                    this.toast.presentToastWithOptions(res.message, this.alertMessage ? this.alertMessage.Message : "Message", "success");
                    this.router.navigate(["/thankyou"]);
                }
                else {
                    if (res.message === "Invalid Credentials. Gateway ID: ''") {
                        this.toast.presentToastWithOptions(this.alertMessage
                            ? this.alertMessage.invalid_payment_details
                            : "Invalid Payment Details", this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                    else {
                        this.toast.presentToastWithOptions(res.message, this.alertMessage
                            ? this.alertMessage.WarningMessage
                            : "Warning Message", "warning");
                    }
                }
                this.loader.stopLoading();
            }), (err) => {
                let message = err.message;
                // Logging out and taking user to login screen if token is expired ===============================
                if (err.error.code === "access_token_expired") {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                    // ===========================================================================================
                }
                else if (err.error.http_code == 401) {
                    this.toast.presentToastWithOptions(this.alertMessage
                        ? this.alertMessage.session_expired
                        : "Session Expired", this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                    this.Auth.logoutUserGiving();
                    this.logOutUser();
                }
                else {
                    this.toast.presentToastWithOptions((this.alertMessage ? this.alertMessage.error : "Error: ") +
                        " " +
                        message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
                this.loader.stopLoading();
            });
        });
    }
    logOutUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader.presentLoading().then(() => {
                this.Auth.logoutUser();
                this.event_provider.userlogout(); // calling event
                this.event_provider.refresh_home(); // calling event
                this.logoService.setStatus(false);
                let login_url = "/login";
                this.router.navigate([login_url]);
                this.loader.stopLoading();
            });
        });
    }
    deleteSource(i) {
        const body = JSON.stringify({
            auth: "Bearer " + this.auth.access_token,
            // source_id: 1867
            source_id: this.wallet_id,
            church_id: this.ch_id,
        });
        this.loader.presentLoading().then(() => {
            // delete user payment source
            this.contribution.removePaymentSource(body).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // this.ngOnInit();
                this.getCardDetails();
                this.savedSources.splice(i, 1);
                this.loader.stopLoading();
            }), (err) => {
                let message = err.error.message;
                if (message === "Source not found") {
                    this.toast.presentToastWithOptions(message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
                else {
                    this.toast.presentToastWithOptions(message, this.alertMessage
                        ? this.alertMessage.WarningMessage
                        : "Warning Message", "warning");
                }
                this.loader.stopLoading();
            });
        });
    }
    // to display last 4 digits of account number in card
    saveLast4Digits() {
        if (this.cardNumber.length > 12) {
            let index;
            index = this.cardNumber.length - 12;
            if (this.last4digits) {
                this.last4digits = this.cardNumber.substr(this.cardNumber.length - index);
            }
            else {
                this.last4digits = this.cardNumber.substr(this.cardNumber.length - index);
            }
        }
        else {
            this.last4digits = 0;
        }
    }
    // to display last 4 digits of account number in bank card
    saveLast4BankDigits() {
        if (this.accountNumber.length > 12 &&
            this.help_code_epic.bank_type != "eft") {
            let index;
            index = this.accountNumber.length - 12;
            if (this.last4bankDigits) {
                this.last4bankDigits = this.accountNumber.substr(this.accountNumber.length - index);
            }
            else {
                this.last4bankDigits = this.accountNumber.substr(this.accountNumber.length - index);
            }
        }
        else if (this.help_code_epic.bank_type === "eft") {
            let index;
            index = this.accountNumber.length - 2;
            if (this.last4bankDigits) {
                this.last4bankDigits = this.accountNumber.substr(this.accountNumber.length - index);
            }
            else {
                this.last4bankDigits = this.accountNumber.substr(this.accountNumber.length - index);
            }
        }
    }
    gotoLogin() {
        this.going_to_login = true;
        let login_url = "/login";
        this.router.navigate([
            login_url,
            {
                page: this.page_href,
                color: this.giving_theme ? this.giving_theme.primary_color : "",
                headerFooter: this.showFooter ? "internal" : "external",
                mode: "giving",
                app_style: this.giving_theme ? this.giving_theme.app_style : "",
            },
        ]);
    }
    logOut() {
        this.loader.presentLoading().then(() => {
            this.Auth.logoutUserGiving();
            this.ngOnInit();
            this.user = "";
            this.first_name = "";
            this.last_name = "";
            this.last4digits = "";
            this.accountType = "";
            this.postal_code = "";
            this.routingNumber = "";
            this.accountNumber = "";
            this.cardNumber = "";
            this.exp = "";
            this.cvv = "";
            this.guest = true;
            this.loader.stopLoading();
        });
    }
    setAnalytics() {
        let dev_id = "";
        let device = "app";
        // preparing device data
        dev_id = this.device.uuid;
        if (dev_id) {
            device = this.platform.platforms()[0];
        }
        // preparing duration data
        let end_time_analytics = moment__WEBPACK_IMPORTED_MODULE_18__();
        var duration = moment__WEBPACK_IMPORTED_MODULE_18__["duration"](end_time_analytics.diff(this.start_time_analytics))
            .asSeconds();
        // preparing user data
        let userId = this.user ? this.user.id : "guest";
        // preparing data for analytics
        const body = JSON.stringify({
            church_id: this.ch_id,
            latitude: this.theme ? this.theme.latitude : "",
            longitude: this.theme ? this.theme.longitude : "",
            timespent: duration,
            module: this.page_name,
            custom_name: this.custom_name,
            ip_address: "",
            device: device,
            device_id: dev_id,
            client_type: userId,
            event_type: "",
        });
        // calling function from service to update Analytics Data
        this.analytics.setAnalytics(body).subscribe((res) => { });
    }
    ionViewDidEnter() {
        // setting start time for analytics
        this.start_time_analytics = moment__WEBPACK_IMPORTED_MODULE_18__();
        // getting user from local storage
        this.storage.get("user_giving").then((val) => {
            if (val != null && val != "guest") {
                this.user = val.user;
                this.token = val.token;
                this.auth = val.auth;
                this.guest = false;
                this.getCardDetails();
            }
        });
        this.clearAllFields();
    }
    // To set logo and color to default church theme
    ionViewWillLeave() {
        this.setAnalytics();
        if (!this.going_to_login) {
            this.event_provider.setdefaultcolormode(); // calling event
            this.event_provider.defaultlogo(); // calling event
        }
        if (!this.guest) {
            this.Auth.logoutUser();
            this.event_provider.userlogout(); // calling event
            this.event_provider.refresh_home(); // calling event
            this.logoService.setStatus(false);
        }
    }
};
EventGivingPwaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_my_contribution_service__WEBPACK_IMPORTED_MODULE_6__["MyContributionService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _services_logo_service_service__WEBPACK_IMPORTED_MODULE_11__["LogoServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_13__["EventsService"] },
    { type: _services_id_service__WEBPACK_IMPORTED_MODULE_14__["IdService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
    { type: _services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__["EventProviderService"] },
    { type: _services_analytics_service__WEBPACK_IMPORTED_MODULE_20__["AnalyticsService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"] },
    { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__["ReCaptchaV3Service"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_23__["InAppBrowser"] },
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_24__["StripeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], EventGivingPwaPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_stripe__WEBPACK_IMPORTED_MODULE_24__["StripeCardNumberComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_stripe__WEBPACK_IMPORTED_MODULE_24__["StripeCardNumberComponent"])
], EventGivingPwaPage.prototype, "card", void 0);
EventGivingPwaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-event-giving-pwa",
        template: __webpack_require__(/*! raw-loader!./event-giving-pwa.page.html */ "./node_modules/raw-loader/index.js!./src/app/event-giving-pwa/event-giving-pwa.page.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
        styles: [__webpack_require__(/*! ./event-giving-pwa.page.scss */ "./src/app/event-giving-pwa/event-giving-pwa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_my_contribution_service__WEBPACK_IMPORTED_MODULE_6__["MyContributionService"],
        _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _services_logo_service_service__WEBPACK_IMPORTED_MODULE_11__["LogoServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
        _services_events_service__WEBPACK_IMPORTED_MODULE_13__["EventsService"],
        _services_id_service__WEBPACK_IMPORTED_MODULE_14__["IdService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
        _services_event_provider_service__WEBPACK_IMPORTED_MODULE_17__["EventProviderService"],
        _services_analytics_service__WEBPACK_IMPORTED_MODULE_20__["AnalyticsService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__["ReCaptchaV3Service"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_23__["InAppBrowser"],
        ngx_stripe__WEBPACK_IMPORTED_MODULE_24__["StripeService"]])
], EventGivingPwaPage);



/***/ })

}]);
//# sourceMappingURL=event-giving-pwa-event-giving-pwa-module-es2015.js.map