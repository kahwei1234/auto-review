import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import SecurityPage from '../../page-objects/Settings/Security/SecurityPage.js';
import ChangePasswordPage from '../../page-objects/Settings/Security/ChangePasswordPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Update password',async () => {
    
    it('Settings entry point - update password',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click settings button");
        //Wait
        await browser.pause(4000);
        await HomePage.settings_button.click()

        allureReporter.addStep("Click security button");
        //Wait
        await browser.pause(2000);
        await SettingsPage.security_button.click()

        allureReporter.addStep("Click change password button");
        //Wait
        await browser.pause(1000);
        await SecurityPage.change_password_button.click()

        allureReporter.addStep("Click password field");
        //Wait
        await browser.pause(1000);
        await ChangePasswordPage.new_password_field.click()

        allureReporter.addStep("Insert password");
        //Wait
        await browser.pause(2000);
        await ChangePasswordPage.new_password.setValue('password12#')

        allureReporter.addStep("Click confirm password field");
        //Wait
        await browser.pause(1000);
        await ChangePasswordPage.confirm_new_password_field.click()

        allureReporter.addStep("Insert confirm password");
        //Wait
        await browser.pause(2000);
        await ChangePasswordPage.confirm_new_password.setValue('password12#')

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await ChangePasswordPage.submit_button.click()

        allureReporter.addStep("Pass secure plus");
        //Wait
        await browser.pause(13000);

        allureReporter.addStep("Verify successful message");
        //Wait
        await browser.pause(2000);
        const expected_successfulmessage1 = "Successful."
        await expect(ChangePasswordPage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully changed your password."
        await expect(ChangePasswordPage.successful_message_2).toHaveText(expected_successfulmessage2);

        //Wait
        await browser.pause(5000);
     });
}); 