const MainPage = require("../page_object/main-page");

const { expect } = require("chai");

const email = 'testingsomething1@gmail.com';
const notAnEmail = 'testingsomething1';


describe('Main Page -Sign Up', () => {
    it("Should be able to sign up with gmail account", () => {
        // Input gmail account
        browser.url('./')
        MainPage.$acceptCookiesBtn.waitForClickable();
        MainPage.$acceptCookiesBtn.click();
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable();
        MainPage.$emailTopTxt.setValue(email);
        MainPage.$signUpBtn.click();

        //Verify the option to sign up with Gmail
        MainPage.$verifySignUpGMailBtn.waitForDisplayed();
    });

    it("Should not be able to sign up without email", () => {
        browser.url('./')
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable();
        MainPage.$emailTopTxt.setValue(notAnEmail);
        MainPage.$signUpBtn.click();
        MainPage.$enterAValidEmailErr.waitForDisplayed();
    });

    it("Should be able to choose enterprise menu option", () => {
        browser.url('./')
        MainPage.clicklMenuOptionHeader('Enterprise');
        expect(browser.getUrl()).to.include('for-enterprise');
    });
});
