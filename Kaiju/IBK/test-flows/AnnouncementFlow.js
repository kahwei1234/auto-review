import LoginPage from "../page-objects/LoginPage";
import AnnouncementPage from "../page-objects/AnnouncementPage"


class AnnouncementFlow {

    async announcements() {
        //Go to the URL
        await LoginPage.open();
        //Click the annoucements link
        await LoginPage.announcements.click();
        //Wait
        await browser.pause(2000);
        //Verify the sentence1
        const expected_sentence1 = "Hmm..."
        await expect(AnnouncementPage.hmm_sentence1).toHaveText(expected_sentence1);
        //Verify the sentence2
        const expected_sentence2 = "Nothing here. Check back later for new announcements."
        await expect(AnnouncementPage.nothing_here_sentence2).toHaveText(expected_sentence2);
        //Click the x button
        await AnnouncementPage.x_button.click();
        ///Click the annoucements link
        await LoginPage.announcements.click();
        //Wait
        await browser.pause(2000);
        //Click the close button
        await AnnouncementPage.close_button.click();
        //Wait
        await browser.pause(2000);
    }
}

export default new AnnouncementFlow