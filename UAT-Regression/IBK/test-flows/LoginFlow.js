import LoginPage from "../page-objects/LoginPage";
import {pauseAndClick, pauseAndSetValue} from '../../../util/pauseUtils';
import { runStepWithScreenshot } from '../../../util/reportUtils.js';

class LoginFlow {

    async login (username,password) {
        //Go to the URL
        await LoginPage.open_sit5();
        await pauseAndClick(LoginPage.username_field);
        await pauseAndSetValue(LoginPage.username, username);
        await pauseAndClick(LoginPage.login_button);
        await pauseAndClick(LoginPage.tick_button);
        await pauseAndClick(LoginPage.password_field);
        await pauseAndSetValue(LoginPage.password, password);
        await pauseAndClick(LoginPage.password_login_button);
         //Wait
         await browser.pause(5000);
    }

    async login_uat2 (username,password) {
        await runStepWithScreenshot("Step1 : Login", async () => {          
            await LoginPage.open_UAT2();
/*await browser.url('https://172.30.79.34:8008/my/login');

        // Handle "Your connection is not private" modal if it appears
        try {
            const advancedBtn = await $('#details-button');
            if (await advancedBtn.isDisplayed()) {
                await advancedBtn.click();
                const proceedLink = await $('#proceed-link');
                await proceedLink.click();
                console.log('Bypassed SSL warning modal');
            }
        } catch (e) {
            console.log('SSL modal not displayed, proceeding...');
        }
 const mainContent = await $('#main-content'); // Change to an actual element on your page
    await mainContent.waitForDisplayed({ timeout: 10000 });

    // Add your assertions here
    expect(await browser.getTitle()).toContain('Expected Page Title');
*/
        await pauseAndClick(LoginPage.username_field, 2000);
        await pauseAndSetValue(LoginPage.username, username);
       // await pauseAndClick(LoginPage.announcements_x_button, 2000);
        await pauseAndClick(LoginPage.login_button);
        await pauseAndClick(LoginPage.tick_button);
        await pauseAndClick(LoginPage.password_field);
        await pauseAndSetValue(LoginPage.password, password);
        await pauseAndClick(LoginPage.password_login_button);
         //Wait
         await browser.pause(5000);
         });
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
         await LoginPage.password_login_button.click();
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
         await LoginPage.password_login_button.click();
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
         await LoginPage.password_login_button.click();
         //Wait
         await browser.pause(5000);
    }
}

export default new LoginFlow