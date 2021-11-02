const MainPage = require("../page_object/main-page")
const PricingPage = require("../page_object/pricing-page")
const SignUpPage = require("../page_object/sign-up-page")

const faker = require("faker");

const serverId = 'd0cganis';
const serverDomain = serverId + '.mailosaur.net';
const testEmail = (faker.random.word()) +'@' + serverDomain;

describe('Pricing page', () => {

    it('Should be able to sign up for a free account', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        // Choose the free plan
        PricingPage.$getStartedButton.moveTo();
        PricingPage.$getStartedButton.waitForClickable();
        PricingPage.$getStartedButton.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Essentials plan billed annualy', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        // Choose the Essentials plan
        PricingPage.$startEssentialsBtn.moveTo();
        PricingPage.$startEssentialsBtn.waitForClickable();
        PricingPage.$startEssentialsBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Professional plan billed annualy', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        // Choose the professional plan
        PricingPage.$startProfessionalBtn.moveTo();
        PricingPage.$startProfessionalBtn.waitForClickable();
        PricingPage.$startProfessionalBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Teams plan billed annualy', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        // Choose the Teams plan
        PricingPage.$tryForFreeBtn.moveTo();
        PricingPage.$tryForFreeBtn.waitForClickable();
        PricingPage.$tryForFreeBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Professional plan billed monthly', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        //Toggle bill monthly button
        PricingPage.$billedToggle.waitForClickable();
        PricingPage.$billedToggle.click();

        // Choose the Essentials plan
        PricingPage.$startProfessionalBtn.waitForClickable();
        PricingPage.$startProfessionalBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Essentials plan billed monthly', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        //Toggle bill monthly button
        PricingPage.$billedToggle.waitForClickable();
        PricingPage.$billedToggle.click();

        // Choose the Essentials plan
        PricingPage.$startEssentialsBtn.waitForClickable();
        PricingPage.$startEssentialsBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });

    it('Should be able to sign up for Teams plan billed monthly', () => {
        // Navigate to Pricing page
        browser.url('./');
        MainPage.clicklMenuOptionHeader('Pricing');

        //Toggle bill monthly button
        PricingPage.$billedToggle.waitForClickable();
        PricingPage.$billedToggle.click();

        // Choose the Essentials plan
        PricingPage.$tryForFreeBtn.waitForClickable();
        PricingPage.$tryForFreeBtn.click();

        // Enter your email
        PricingPage.$enterYourEmail.waitForClickable();
        PricingPage.$enterYourEmail.setValue(testEmail);
        PricingPage.$getStartedBtn.click();

        // Fill out information
        SignUpPage.$fullNameTxt.waitForDisplayed();
        SignUpPage.$fullNameTxt.setValue(faker.name.firstName());
        SignUpPage.$passwordTxt.setValue(faker.internet.password());
        SignUpPage.$continueBtn.click();

        // Verify that email was sent
        SignUpPage.$resendItToYouTxt.waitForDisplayed();
    });
});