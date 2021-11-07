"use strict";
class MainPage {

    get $getStartedBtn() { return $('button=Get started'); }
    get $logInBtn() { return $('span=Log In'); }
    get $signUpBtn() { return $('button=Sign Up'); }
    get $signUpBtnFrame() { return $('[data-testid="signup-popup"] [data-testid="regular-button"]'); }
    get $$headerMenuBtn() { return $('[id="header-menu-item-0"]'); }
    get $emailTopTxt() { return $('[data-testid="email-input"]'); }
    get $emailInput() { return $('[type="email"]'); }
    get $verifySignUpGMailBtn() { return $('h3=Hi testingsomething1@gmail.com!'); }
    get $closeCookiesWindow() { return $('[id="onetrust-close-btn-container"]'); }
    get $enterAValidEmailErr() { return $('span=Please enter a valid email address.'); }
    get $$headeMenuOptions() { return $$('[data-testid="header"] .sc-1i84b6l-0'); }
    get $footerAboutUsBtn() { return $('[tabindex="0"] [href="/about"]'); }
    get $tryCalendlyFree() { return $('p=Try Calendly free'); }

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