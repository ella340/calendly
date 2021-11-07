const MainPage = require("../page_object/main-page");
const AboutPage = require("../page_object/about-page");


describe('About page', () => {
    it('Should be able to access about page', () => {
        //Navigate to Sign Up page
        browser.url('./');
        // $('[data-testid="outlined-button"]').waitForDisplayed();
        // $('[data-testid="outlined-button"]').moveTo();
        // $('p=Try Calendly free').waitForDisplayed();
        $('p=Try Calendly free').moveTo();
        $('[tabindex="0"] [href="/about"]').moveTo()
        browser.debug()
        $('[tabindex="0"] [href="/about"]').click()
        browser.debug()
        $('span=About').waitForDisplayed();
        $('span=About').moveTo();
        MainPage.$footerAboutUsBtn.click();
        AboutPage.$readMoreOnOurBlog.waitForDisplayed();
        AboutPage.$readMoreOnOurBlog.click();
        AboutPage.$whatsNewTitle.waitForDisplayed(); 
    });
});