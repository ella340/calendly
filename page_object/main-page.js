"use strict";
class MainPage {

    get $getStartedBtn() { return $('[class="sc-1gujuaa-0 cTTJRv"]'); }
    get $logInBtn() { return $('[class="sc-l2chlf-0 jZRKaf"]'); }
    get $signUpBtn() { return $('[class="sc-1gujuaa-0 ivWkKl"]'); }
    get $$headerMenuBtn() { return $('[id="header-menu-item-0"]'); }
    get $emailTopTxt() { return $('[class="sc-14lw96l-0 cHzMPc"]'); }
    get $verifySignUpGMailBtn() { return $('[class="IOTsH6gplw0gNhzOtsQ7 cu9R_bgOcGxqzal2uL1c"]'); }
    get $acceptCookiesBtn() { return $('[id="onetrust-accept-btn-handler"]'); }
    get $enterAValidEmailErr() { return $('[class="sc-14lw96l-1 bhcMNV"]'); }
    get $$headeMenuOptions() { return $$('.eUPVlN .goXdgo'); }

    // Helper method to click menu options at the header
    clicklMenuOptionHeader(headerMenuBtnTxt) {
        const headerMenuBtnChoice = {};

        // Wait for at least 6 header menu options to become visible
        browser.waitUntil(() => {
            return this.$$headeMenuOptions.map((elem) => elem.isDisplayed()).length > 6;
        }, { timeout: 10000, timeoutMsg: 'Header menu options were not visible' });

        // Map all of the header menu options into an object
        this.$$headeMenuOptions.forEach(element => {
            headerMenuBtnChoice[element.getText()] = element;
        });

        // Click on menu option
        headerMenuBtnChoice[headerMenuBtnTxt].click();

    }
}
module.exports = new MainPage();