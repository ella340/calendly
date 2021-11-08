const MainPage = require("../page_object/main-page");

const { expect } = require("chai");
const MailosaurClient = require('mailosaur');
const mailosaur = new MailosaurClient('token');
const serverId = 'd0cganis';
const serverDomain = serverId + '.mailosaur.net';

const maybeEmail = 'testingsomething1@gmail.com';
const notAnEmail = 'testingsomething1';


describe('Main Page -Sign Up', () => {
    it("Should be able to sign up with gmail account", () => {
        // Input gmail account
        browser.url('./')
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable();
        MainPage.$emailInput.setValue(maybeEmail);
        MainPage.$signUpBtn.click();

        //Verify the option to sign up with Gmail
        MainPage.$verifySignUpGMailBtn.waitForDisplayed();
    });

    it("Should not be able to sign up without email", () => {
        //Input text 
        browser.url('./')
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable();
        MainPage.$emailInput.setValue(notAnEmail);
        MainPage.$signUpBtn.click();

        //Verify error message 
        MainPage.$enterAValidEmailErr.waitForDisplayed();
    });

    it("Should be able to choose individuals menu option", () => {
        browser.url('./')
        MainPage.clicklMenuOptionHeader('Individuals');
        expect(browser.getUrl()).to.include('for-individuals');
    });

    it("Should be able to choose teams menu option", () => {
        browser.url('./')
        MainPage.clicklMenuOptionHeader('Teams');
        expect(browser.getUrl()).to.include('for-teams');
    });

    it("Should be able to choose enterprise menu option", () => {
        browser.url('./')
        MainPage.clicklMenuOptionHeader('Enterprise');
        expect(browser.getUrl()).to.include('for-enterprise');
    });

    it("Should be able to choose products -> integrations menu option", () => {
        browser.url('./')
        MainPage.$productBtn.moveTo();
        MainPage.$integrationsBtn.waitForClickable();
        MainPage.$integrationsBtn.click();
        expect(browser.getUrl()).to.include('integration');
    });

    it("Should be able to choose pricing menu option", () => {
        browser.url('./')
        MainPage.clicklMenuOptionHeader('Pricing');
        expect(browser.getUrl()).to.include('pricing');
    });

    it("Should be able to choose resources -> partner with us menu option", () => {
        browser.url('./')
        MainPage.$resourcesBtn.moveTo();
        MainPage.$partnerWithUsBtn.waitForClickable();
        MainPage.$partnerWithUsBtn.click();
        expect(browser.getUrl()).to.include('partners');
    });
});
