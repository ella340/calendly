const MainPage = require("../page_object/main-page");
const SignUpPage = require('../page_object/sign-up-page')

const { expect } = require("chai");
const faker = require("faker");

const emailDomain = '@test.net';
const testEmail = (faker.random.word()) + emailDomain;

describe('Sign up page by using the sign up option under Easy Scheduling ahead text', () => {
    it('Registartion process', () => {
        browser.url('./')
        
        //Navigate to Sign Up page
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable(); 
        MainPage.$emailInput.setValue(testEmail)
        MainPage.$signUpBtnFrame.click();

        //Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        //Confirmation page
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
        
    });

    it.only('Registartion process by using the get started button', () => {
        browser.url('./')
        
        //Navigate to Sign Up page
        MainPage.$closeCookiesWindow.waitForClickable();
        MainPage.$closeCookiesWindow.click();
        MainPage.$getStartedBtn.waitForDisplayed(); 
        MainPage.$getStartedBtn.click();
        MainPage.$emailInput.setValue(testEmail)
        //browser.debug();
        MainPage.$signUpBtnFrame.waitForClickable();
        MainPage.$signUpBtn.click();

        //Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        //Confirmation page
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
        
    });
});