import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
import BusinessPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/BusinessPage.js'
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation | Form',async () => {
    
    it('[TC01] More button : Business tab - Verify fields',async () => {

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

        allureReporter.addStep("Verify vehicle registration number field");
        //Wait
        await browser.pause(1000);
        const expected_vehicleregistrationnumberlabel = "Vehicle Registration Number"
        await expect(BusinessPage.vehicle_registration_number_label).toHaveText(expected_vehicleregistrationnumberlabel)

        allureReporter.addStep("Verify business registration number field");
        //Wait
        await browser.pause(1000);
        const expected_businessregistrationnumberlabel = "Business Registration Number"
        await expect(BusinessPage.business_registration_number_label).toHaveText(expected_businessregistrationnumberlabel)

        allureReporter.addStep("Verify postcode field");
        //Wait
        await browser.pause(1000);
        const expected_postcodelabel = "Postcode"
        await expect(BusinessPage.postcode_label).toHaveText(expected_postcodelabel)

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await BusinessPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Verify contact us copywriting");
        //Wait
        await browser.pause(1000);
        const expected_contactuscopywriting1 = "Our dedicated support team is here to address any concerns you may have."
        await expect(BusinessPage.contact_us_copywriting_1).toHaveText(expected_contactuscopywriting1)

        allureReporter.addStep("Verify contact us copywriting");
        const expected_contactuscopywriting2 = "CONTACT US"
        await expect(BusinessPage.contact_us_copywriting_2).toHaveText(expected_contactuscopywriting2)

        allureReporter.addStep("Verify privacy notes copywriting");
        const expected_privacynotescopywriting1 = "By clicking Next, I confirm I have read and understood the document below."
        await expect(BusinessPage.privacy_notes_copywriting_1).toHaveText(expected_privacynotescopywriting1)

        allureReporter.addStep("Verify privacy notes copywriting");
        const expected_privacynotescopywriting2 = "PRIVACY NOTICE"
        await expect(BusinessPage.privacy_notes_copywriting_2).toHaveText(expected_privacynotescopywriting2)

        allureReporter.addStep("Verify next button");
        const expected_nextbutton = "NEXT"
        await expect(BusinessPage.next_button).toHaveText(expected_nextbutton)

        //Wait
        await browser.pause(3000);
     });
}); 