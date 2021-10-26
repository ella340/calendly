const MainPage = require("../page_object/main-page");
const LoginPage = require("../page_object/login-page");

const loginEmail = 'emailforqatesting@yahoo.com';
const password = 'Passwordbla';


describe('Login', () => {
    it('Should be able to login', () => {
        browser.url('./');
        
        //Navigate to login page
        MainPage.$logInBtn.waitForDisplayed();
        MainPage.$logInBtn.click();

        //Enter email
        LoginPage.$enterYourEmail.waitForDisplayed();
        LoginPage.$enterYourEmail.setValue(loginEmail);
        LoginPage.$logInButton.click();

        //Accept cookies pop up
        MainPage.$acceptCookiesBtn.waitForClickable();
        MainPage.$acceptCookiesBtn.click();

        //Enter password and click continue
        LoginPage.$enterYourPassword.waitForClickable();
        LoginPage.$enterYourPassword.setValue(password);
        LoginPage.$continueButton.waitForDisplayed();
        LoginPage.$continueButton.click();

        //Account info is displayed
        LoginPage.$accountInfo.waitForDisplayed();


    });
});