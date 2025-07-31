import MainPage from "../page-objects/MainPage";

class LogoutFlow {

    async logout () {
         //Click logout button
         await MainPage.logout_button.click();
         //Wait
         await browser.pause(2000);
    }
}

export default new LogoutFlow