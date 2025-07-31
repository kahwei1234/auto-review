import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import {Business_1} from '../../../../test-data/MotorInsurance.js'
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
import BusinessPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/BusinessPage.js'
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Business) | Form',async () => {
    
    it('[TC01] More button : Verify fields',async () => {

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
        
        allureReporter.addStep("Verify copywriting");
        //Wait
        await browser.pause(1000);
        const expected_copywriting1 = "Testing Free 24/7 emergency roadside assistance with access to over 700 panel workshops nationwide."
        await expect(GetInstantQuotationPage.copywriting_1).toHaveText(expected_copywriting1)

        allureReporter.addStep("Verify copywriting");
        const expected_copywriting2 = "Free jumpstart, change of battery, tyre replacement services and more."
        await expect(GetInstantQuotationPage.copywriting_2).toHaveText(expected_copywriting2)

        allureReporter.addStep("Click business tab");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.business_tab.click()

        allureReporter.addStep("Click vehicle registration number field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.vehicle_registration_number_field.click()

        allureReporter.addStep("Insert vehicle registration number ");
        const {vehicleregistrationnumber} = Business_1
        await BusinessPage.vehicle_registration_number.setValue(vehicleregistrationnumber)

        allureReporter.addStep("Click business registration number field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.business_registration_number_field.click()

        allureReporter.addStep("Insert business registration number ");
        const {businessregistrationnumber} = Business_1
        await BusinessPage.business_registration_number.setValue(businessregistrationnumber)

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await BusinessPage.postcode_field.click()

        allureReporter.addStep("Insert postcode");
        const {postcode} = Business_1
        await BusinessPage.postcode.setValue(postcode)

        //Wait
        await browser.pause(3000);
     });
}); 