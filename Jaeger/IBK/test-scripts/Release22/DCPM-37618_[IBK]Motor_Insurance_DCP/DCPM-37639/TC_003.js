import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
import BusinessPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/BusinessPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC03] More button - Verify insert invalid value, next button is disable',async () => {

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

        allureReporter.addStep("Click business tab");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.business_tab.click()

        allureReporter.addStep("Click vehicle registration number field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.vehicle_registration_number_field.click()

        allureReporter.addStep("Click business registration number field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.business_registration_number_field.click()

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.postcode_field.click()

        allureReporter.addStep("Click business registration number field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.business_registration_number_field.click()

        allureReporter.addStep("Verify next button");
        //Wait
        await browser.pause(1000);
        await expect(BusinessPage.next_button).toHaveAttr('disabled')

        allureReporter.addStep("Click x button");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.x_button.click()

        allureReporter.addStep("Click yes button");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.yes_button.click()

        //Wait
        await browser.pause(3000);
     });
}); 