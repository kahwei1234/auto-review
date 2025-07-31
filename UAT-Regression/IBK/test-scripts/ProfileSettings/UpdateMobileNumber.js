import {VALID_CREDS_2} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import SecurityPage from '../../page-objects/Settings/Security/SecurityPage.js';
import ChangeMobileNumberPage from '../../page-objects/Settings/Security/ChangeMobileNumberPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Update mobile number',async () => {
    
    it('Settings entry point - update mobile number',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_2
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click settings button");
        //Wait
        await browser.pause(4000);
        await HomePage.settings_button.click()

        allureReporter.addStep("Click security button");
        //Wait
        await browser.pause(2000);
        await SettingsPage.security_button.click()

        allureReporter.addStep("Click change mobile number button");
        //Wait
        await browser.pause(1000);
        await SecurityPage.change_mobile_number_button.click()

        allureReporter.addStep("Click mobile number field");
        //Wait
        await browser.pause(1000);
        await ChangeMobileNumberPage.mobile_number_field.click()

        allureReporter.addStep("Insert mobile number");
        //Wait
        await browser.pause(2000);
        await ChangeMobileNumberPage.mobile_number.setValue('60124567890')

        allureReporter.addStep("Click confirm mobile number field");
        //Wait
        await browser.pause(1000);
        await ChangeMobileNumberPage.confirm_mobile_number_field.click()

        allureReporter.addStep("Insert confirm mobile number");
        //Wait
        await browser.pause(2000);
        await ChangeMobileNumberPage.confirm_mobile_number.setValue('60124567890')

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await ChangeMobileNumberPage.next_button.click()
/*
        allureReporter.addStep("Verify purchase message");
        //Wait
        await browser.pause(3000);
        const expected_purchasemessage = "Yay! Your transaction is successfully made"
        await expect(BuyPurchasedReviewPage.purchase_message).toHaveText(expected_purchasemessage);
        */
        //Wait
        await browser.pause(5000);
     });
}); 