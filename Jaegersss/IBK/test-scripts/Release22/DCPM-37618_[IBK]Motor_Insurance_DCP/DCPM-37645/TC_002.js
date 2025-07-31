import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Leave/Stay Confirmation ',async () => {
    
    it('[TC02] Get Instant Quotation Page - Verify no button for cancel confirmation message popup',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(1000);
        await MainPage.more_button.click()

        allureReporter.addStep("Click motor insurance button");
        //Wait
        await browser.pause(1000);
        await MoreFeaturesPage.motor_insurance.click()

        allureReporter.addStep("Click x button");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.x_button.click()

        allureReporter.addStep("Verify cancel title");
        //Wait
        await browser.pause(1000);
        const expected_canceltitle = "Cancel Application"
        await expect(GetInstantQuotationPage.cancel_title).toHaveText(expected_canceltitle)

        allureReporter.addStep("Verify cancel copywriting");
        const expected_cancelcopywriting = "Are you sure? Leaving this screen will cancel your application and you'll need to apply again."
        await expect(GetInstantQuotationPage.cancel_copywriting).toHaveText(expected_cancelcopywriting)

        allureReporter.addStep("Click no button");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.no_button.click()

        //Wait
        await browser.pause(3000);
     });
}); 