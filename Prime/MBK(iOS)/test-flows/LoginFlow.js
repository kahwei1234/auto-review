import LoginPage from "../page-objects/LoginPage";

class LoginFlow {

    async login (username,password,cardnumber) {
        //Wait
        await browser.pause(6000);
        await LoginPage.location_allow_once_button.click()
        //Wait
        await browser.pause(4000);
        //await LoginPage.notifications_allow_button.click()
        //Wait
        await browser.pause(9000);
        //Click username field
        await LoginPage.username_field.click();
        //Insert username 
        await LoginPage.username_field.setValue(username);
        //Wait
        await browser.pause(3000);
        //Click next button
        await LoginPage.next_button.click();
        //Wait
        await browser.pause(3000);
        //Toggle on secure word
        await LoginPage.secure_word_toggle.click();
        //Wait
        await browser.pause(3000);
        //Click password field
        await LoginPage.password_field.click();
        //Wait
        await browser.pause(3000);
        //Insert password 
        await LoginPage.password_field.setValue(password);
        //Wait
        await browser.pause(3000);
        //Click login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(3000);
        //Click login button
        await LoginPage.link_current_device.click();
        //Wait
        await browser.pause(3000);
        //Click login button
        await LoginPage.card_number_field.click();
        await LoginPage.card_number_field.setValue(cardnumber)
        //Wait
        await browser.pause(3000);
        await LoginPage.card_details_required_copywriting.click();
        //Wait
        await browser.pause(3000);
        //Click login button
        await LoginPage.card_number_next_button.click();
        //Wait
        await browser.pause(18000);
        //Click login button
        await LoginPage.card_pin_field.click();
        //Wait
        await browser.pause(28000);
        //Wait
        await browser.pause(3000);
        //Insert card pin
        await LoginPage.card_pin_1.sendKeys("2");
        //Wait
        await browser.pause(5000);
        //Click login button
        await LoginPage.card_pin_next_button.click();
        //Wait
        await browser.pause(28000);
    }
}

export default new LoginFlow