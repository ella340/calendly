"use strict";
class PricingPage {

get $startProfessionalBtn() { return $('a=Start Professional'); }
get $startEssentialsBtn() { return $('a=Start Essentials'); }
get $getStartedButton() { return $('a=Get Started'); }
get $tryForFreeBtn() { return $('a=Try for Free'); }
get $enterYourEmail() { return $('[name="email"]'); }
get $enterYourPassword() { return $('[name="password"]'); }
get $getStartedBtn() { return $('[class="button js-loading-hide"]'); }
get $billedToggle() { return $('[data-testid="toggle-options"]'); }


}
module.exports = new PricingPage();