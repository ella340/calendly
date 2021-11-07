const MainPage = require("../page_object/main-page");
const AboutPage = require("../page_object/about-page");


describe('About page', () => {
    it('Should be able to access about page and read more on our blog page', () => {
        //Navigate to Sign Up page
        browser.url('./');

        //Move to footer menu
        MainPage.$tryCalendlyFree.moveTo();
        MainPage.$footerAboutUsBtn.moveTo();

        //Close the cookies window that prevents selecting About Us button
        MainPage.$closeCookiesWindow.waitForDisplayed();
        MainPage.$closeCookiesWindow.click();

        //Navigate to about us page
        MainPage.$footerAboutUsBtn.click();

        //Navigate to read more on our blog page
        AboutPage.$readMoreOnOurBlog.moveTo();
        AboutPage.$readMoreOnOurBlog.waitForDisplayed();
        AboutPage.$readMoreOnOurBlog.click();
        AboutPage.$whatsNewTitle.waitForDisplayed(); 
    });
});