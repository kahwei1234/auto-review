import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import MoreFeaturesPage from '../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import DuitNowAutoDebitPage from '../../page-objects/Settings/DuitNowAutoDebit/DuitNowAutoDebitPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Auto Debit',async () => {
    
    it('Auto Debit - Verify Pending Status',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(4000);
        await HomePage.more_button.click()

        allureReporter.addStep("Click duitnow auto debit");
        //Wait
        await browser.pause(3000);
        await MoreFeaturesPage.duitnow_auto_debit.click()

        allureReporter.addStep("Scroll");
        //Wait
        await browser.pause(4000);

        allureReporter.addStep("Verify pending status");
        //Wait
        await browser.pause(2000);
        await browser.takeScreenshot();
        const expected_merchantname = "2C2P SYSTEM (MALAYSIA) SDN. BHD."
        await expect(DuitNowAutoDebitPage.merchant_name).toHaveText(expected_merchantname);
        const expected_status = "Pending Approval"
        await expect(DuitNowAutoDebitPage.status).toHaveText(expected_status);

        allureReporter.addStep("Click merchant name");
        //Wait
        await browser.pause(3000);
        await DuitNowAutoDebitPage.merchant_name.click()

        //Wait
        await browser.pause(3000);
     });
}); 