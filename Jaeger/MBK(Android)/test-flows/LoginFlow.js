import LoginPage from "../page-objects/LoginPage";

class LoginFlow {

    async login (username,password,carddetails) {
        //Wait
        await browser.pause(3000);
        //Click allow for location
        await LoginPage.location_button.click();
        //Wait
        await browser.pause(3000);
        //Insert allow for contact 
        await LoginPage.contact_button.click();
        //Wait
        await browser.pause(3000);
        //Click allow for phone call
        await LoginPage.phone_call_button.click();
         //Wait
         await browser.pause(3000);
         //Click allow for notification
         await LoginPage.notification_button.click();
         //Wait
         await browser.pause(3000);
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
         //Click secure word toggle
         await LoginPage.secure_word_toggle.click();
         //Wait
         await browser.pause(3000);
         //Click password field
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password_field.setValue(password);
         //Wait
         await browser.pause(3000);
         //Click login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(3000);
         //Click link current device button
         await LoginPage.link_current_device.click();
         //Wait
         await browser.pause(3000);
         //Click card number field
         await LoginPage.card_number_field.click();
         //Insert card number 
         await LoginPage.card_number_field.setValue(carddetails);
         //Wait
         await browser.pause(3000);
         await driver.hideKeyboard('Done');
         //Click card number next button
         await LoginPage.card_number_next_button.click();
         //Wait
         await browser.pause(5000);
         //Click card pin field
         await LoginPage.card_pin_field.click();
         //Insert card pin
         await driver.pressKeyCode(9);
         await driver.pressKeyCode(9);
         await driver.pressKeyCode(9);
         await driver.pressKeyCode(9);
         await driver.pressKeyCode(9);
         await driver.pressKeyCode(9);
         await browser.pause(2000);
         //Click card pin next button
         await LoginPage.card_pin_next_button.click();
         //Wait
         await browser.pause(58000);
   }

}

export default new LoginFlow