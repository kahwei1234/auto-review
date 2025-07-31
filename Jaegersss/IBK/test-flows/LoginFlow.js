import LoginPage from "../page-objects/LoginPage";

class LoginFlow {

    async login (username,password) {
        //Go to the URL
        await LoginPage.open_sit5();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(2000);
         //Click the tick button
         await LoginPage.tick_button.click();
         //Click the password textbox
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password.setValue(password);
         //Click the login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(5000);
    }

    async verify_text_login (username, password) {
        //Go to the URL
        await LoginPage.open_sit5();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(2000);
        //Verify text
        const expected_confirm_this_is_your_secure_word = "Confi1rm this is your Secure Word?"
        await expect(LoginPage.confirm_this_your_secure_word).toHaveText(expected_confirm_this_is_your_secure_word);
         //Wait
         await browser.pause(2000);
         //Click the tick button
         await LoginPage.tick_button.click();
         //Click the password textbox
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password.setValue(password);
         //Verify the link
         const expected_forgot_password = "FORGOT PASSWORD"
         await expect(LoginPage.forgot_password).toHaveText(expected_forgot_password);
         //Click the login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(2000);
    }

    async verify_text () {
        //Verify the text
        const expected_forgot_username_password = "FORGOT USERNAME/PASSWORD"
        await expect(LoginPage.forgot_username_password).toHaveText(expected_forgot_username_password);
        const expected_dont_have_rhb_online_banking_account_yet = "Don’t have RHB online banking account yet?"
        await expect(LoginPage.dont_have_rhb_online_banking_account_yet_link).toHaveText(expected_dont_have_rhb_online_banking_account_yet);
        const expected_register_now = "REGISTER NOW"
        await expect(LoginPage.register_now).toHaveText(expected_register_now);
        const expected_have_a_pending_application = "Have a pending application?"
        await expect(LoginPage.have_a_pending_application).toHaveText(expected_have_a_pending_application);
        const expected_track_application = "TRACK APPLICATION"
        await expect(LoginPage.track_application).toHaveText(expected_track_application);
    }

    async login_sit2 (username,password) {
        //Go to the URL
        await LoginPage.open_sit2();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(2000);
         //Click the tick button
         await LoginPage.tick_button.click();
         //Click the password textbox
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password.setValue(password);
         //Click the login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(5000);
    }

    async login_sit2_newuser (username,password) {
        //Go to the URL
        await LoginPage.open_sit2();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Click the login button
        await LoginPage.login_button.click();
        //Click the password textbox
        await LoginPage.password_field.click();
        //Insert password
        await LoginPage.password.setValue(password);
        //Click the login button
        await LoginPage.new_user_login_button.click();
        //Wait
        await browser.pause(5000);
    }

    async login_sit1 (username,password) {
        //Go to the URL
        await LoginPage.open_sit1();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(2000);
         //Click the tick button
         await LoginPage.tick_button.click();
         //Click the password textbox
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password.setValue(password);
         //Click the login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(5000);
    }

    async login_sit4 (username,password) {
        //Go to the URL
        await LoginPage.open_sit4();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Wait
        await browser.pause(2000);
         //Click the tick button
         await LoginPage.tick_button.click();
         //Click the password textbox
         await LoginPage.password_field.click();
         //Insert password
         await LoginPage.password.setValue(password);
         //Click the login button
         await LoginPage.login_button.click();
         //Wait
         await browser.pause(5000);
    }
}

export default new LoginFlow