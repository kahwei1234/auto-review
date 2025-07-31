import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import SecurityPage from '../../page-objects/Settings/Security/SecurityPage.js';
import ChangeSecureWordPage from '../../page-objects/Settings/Security/ChangeSecureWordPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Update secure word',async () => {
    
    it('Settings entry point - update secure word',async () => {

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

        allureReporter.addStep("Click change secure word button");
        //Wait
        await browser.pause(1000);
        await SecurityPage.change_secure_word_button.click()

        allureReporter.addStep("Click secure word field");
        //Wait
        await browser.pause(1000);
        await ChangeSecureWordPage.new_secure_word_field.click()

        allureReporter.addStep("Insert secure word");
        //Wait
        await browser.pause(2000);
        await ChangeSecureWordPage.new_secure_word.setValue('password13')

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await ChangeSecureWordPage.submit_button.click()

        allureReporter.addStep("Pass secure plus");
        //Wait
        await browser.pause(13000);

        allureReporter.addStep("Verify successful message");
        //Wait
        await browser.pause(2000);
        const expected_successfulmessage1 = "Successful."
        await expect(ChangeSecureWordPage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully changed your Secure Word."
        await expect(ChangeSecureWordPage.successful_message_2).toHaveText(expected_successfulmessage2);

        //Wait
        await browser.pause(5000);
     });
}); 