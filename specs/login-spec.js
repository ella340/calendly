const MainPage = require("../page_object/main-page");
const LoginPage = require("../page_object/login-page")

const loginEmail = 'emailforqatesting@yahoo.com'
const password = 'Passwordbla'


describe('Login', () => {
    it('Should be able to login', () => {
        browser.url('./');
        MainPage.$logInBtn.waitForDisplayed();
        MainPage.$logInBtn.click();
        LoginPage.$enterYourEmail.waitForDisplayed();
        LoginPage.$enterYourEmail.setValue(loginEmail);
        LoginPage.$logInButton.click();
        MainPage.$acceptCookiesBtn.waitForClickable();
        MainPage.$acceptCookiesBtn.click();
        LoginPage.$enterYourPassword.waitForClickable();
        LoginPage.$enterYourPassword.setValue(password);
        LoginPage.$continueButton.waitForDisplayed();
        LoginPage.$continueButton.click();
        LoginPage.$accountInfo.waitForDisplayed();


    });
});