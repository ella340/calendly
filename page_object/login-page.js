"use strict";

class LoginPage {

get $enterYourEmail() { return $('[name="email"]'); }
get $enterYourPassword() { return $('[name="password"]'); }
get $logInButton() { return $('[data-testid="regular-button"]'); }
get $accountInfo() { return $('[href="https://calendly.com/emailforqatesting"]'); }
get $continueButton() { return $('[class="button js-loading-hide"]'); }


}
module.exports = new LoginPage();