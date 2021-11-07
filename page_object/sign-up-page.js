"use strict";
class SignUpPage {

get $fullNameTxt() { return $('[name="name"]'); }
get $passwordTxt() { return $('[name="password"]'); }
get $continueBtn() { return $('[class="button js-loading-hide js-signup-button"]'); }
get $resendItToYouTxt() { return $('a=resend it to you'); }

}
module.exports = new SignUpPage();