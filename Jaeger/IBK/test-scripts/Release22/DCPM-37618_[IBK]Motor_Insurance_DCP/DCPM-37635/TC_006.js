import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC06] Verify inline message',async () => {

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

        allureReporter.addStep("Click vehicle registration number field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.vehicle_registration_number_field.click()
       
        allureReporter.addStep("Click ID number field");
        await IndividualPage.id_number_field.click()

        allureReporter.addStep("Verify vehicle registration number inline message");
        //Wait
        await browser.pause(1000);
        const expected_vehicleregistrationnumberinlinemessage = "This field is required."
        await expect(IndividualPage.vehicle_registration_inline_message).toHaveText(expected_vehicleregistrationnumberinlinemessage)

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.postcode_field.click()

        allureReporter.addStep("Verify id number inline message");
        //Wait
        await browser.pause(1000);
        const expected_idnumberinlinemessage = "This field is required."
        await expect(IndividualPage.id_number_inline_message).toHaveText(expected_idnumberinlinemessage)

        allureReporter.addStep("Click ID number field");
        await IndividualPage.id_number_field.click()

        allureReporter.addStep("Verify postcode inline message");
        //Wait
        await browser.pause(1000);
        const expected_postcodeinlinemessage = "This field is required."
        await expect(IndividualPage.postcode_inline_message).toHaveText(expected_postcodeinlinemessage)

        //Wait
        await browser.pause(3000);
     });
}); 