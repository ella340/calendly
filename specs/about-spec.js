const MainPage = require("../page_object/main-page");
const AboutPage = require("../page_object/about-page");

describe('About page', () => {
    it.skip('Should be able to access about page', () => {
        //Navigate to Sign Up page
        browser.url('./');
        MainPage.$acceptCookiesBtn.waitForClickable();
        MainPage.$acceptCookiesBtn.click();
        MainPage.$footerAboutUsBtn.scrollIntoView();
        browser.debug();
        MainPage.$footerAboutUsBtn.click();
        AboutPage.$readMoreOnOurBlog.waitForDisplayed();
        AboutPage.$readMoreOnOurBlog.click();
        AboutPage.$whatsNewTitle.waitForDisplayed(); 
    });
});