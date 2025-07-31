import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Entry Point',async () => {
    
    it('[TC05] More button - Verify get instant quotation title',async () => {

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

        allureReporter.addStep("Verify get instant quotation title");
        //Wait
        await browser.pause(1000);
        const expected_getinstantquotationtitle = "Get Instant Quotation"
        await expect(GetInstantQuotationPage.get_instant_quotation_title).toHaveText(expected_getinstantquotationtitle)

        //Wait
        await browser.pause(3000);
     });
}); 