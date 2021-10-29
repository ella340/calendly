const MainPage = require("../page_object/main-page");
const SignUpPage = require('../page_object/sign-up-page')

const { expect } = require("chai");
const faker = require("faker");
const MailosaurClient = require('mailosaur');

const mailosaur = new MailosaurClient('token');
const serverId = 'd0cganis';
const serverDomain = serverId + '.mailosaur.net';
const testEmail = (faker.random.word()) +'@' + serverDomain;

describe('Sign up page', () => {
    it('Registartion process', () => {
        browser.url('./')
        
        //Navigate to Sign Up page
        //MainPage.$acceptCookiesBtn.waitForClickable();
        //MainPage.$acceptCookiesBtn.click();
        MainPage.$emailTopTxt.moveTo();
        MainPage.$emailTopTxt.waitForClickable();
        MainPage.$emailTopTxt.setValue(testEmail)
        MainPage.$signUpBtn.click();

        //Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        //Confirmation page
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
        
        //const email = mailosaur.messages.get(serverId, {
            //sentTo: testEmail
    });

    expect(email.subject).toBe('Please confirm your Calendly email address');
});