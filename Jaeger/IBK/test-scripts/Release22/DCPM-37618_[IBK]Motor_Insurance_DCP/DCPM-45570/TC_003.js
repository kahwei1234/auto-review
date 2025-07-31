import {VALID_CREDS_17} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Entry Point Update',async () => {
    
    it('[TC03] More button - Verify RHB insurance website link',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_17
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(1000);
        await MainPage.more_button.click()

        allureReporter.addStep("Verify motor insurance button");
        //Wait
        await browser.pause(1000);
        const expected_motorinsurancebutton = "Motor Insurance"
        await expect(MoreFeaturesPage.motor_insurance).toHaveText(expected_motorinsurancebutton)

        allureReporter.addStep("Click motor insurance button");
        //Wait
        await browser.pause(1000);
        await MoreFeaturesPage.motor_insurance.click()

        allureReporter.addStep("Verify no account message title");
        //Wait
        await browser.pause(1000);
        const expected_noaccountmessagetitle = "Oh no, we noticed that you don't have an account with us."
        await expect(MoreFeaturesPage.no_account_message_title).toHaveText(expected_noaccountmessagetitle)

        allureReporter.addStep("Verify no account copywriting 1");
        const expected_noaccountcopywriting1 = "To continue, apply for an RHB Savings/Current Account."
        await expect(MoreFeaturesPage.no_account_copywriting_1).toHaveText(expected_noaccountcopywriting1)

        allureReporter.addStep("Verify no account copywriting 2");
        const expected_noaccountcopywriting2 = "Alternatively, apply without an account via RHB Insurance's website"
        await expect(MoreFeaturesPage.no_account_copywriting_2).toHaveText(expected_noaccountcopywriting2)

        allureReporter.addStep("Verify no account rhb insurance website link");
        const expected_rhbinsurancewebsitelink = "GO TO RHB INSURANCE WEBSITE"
        await expect(MoreFeaturesPage.rhb_insurance_website_link).toHaveText(expected_rhbinsurancewebsitelink)

        allureReporter.addStep("Click rhb insurance website link");
        //Wait
        await browser.pause(1000);
        await MoreFeaturesPage.rhb_insurance_website_link.click()

        allureReporter.addStep("Verify URL");
        //Wait
        await browser.pause(1000);
        await browser.url('https://www.rhbinsurance.com.my/Car-GetQuote')
        

        //Wait
        await browser.pause(3000);
     });
}); 