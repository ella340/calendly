"use strict";
class AboutPage {

get $readMoreOnOurBlog() { return $('span=Read more on our blog'); }
get $whatsNewTitle() { return $('div=Recruiting'); }

}
module.exports = new AboutPage();