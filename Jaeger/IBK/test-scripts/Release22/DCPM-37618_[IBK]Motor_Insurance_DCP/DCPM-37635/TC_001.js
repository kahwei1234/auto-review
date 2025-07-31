import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC01] ID Type: MyKAD - Verify fields for Individual tab',async () => {

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

        allureReporter.addStep("Verify vehicle registration number field");
        //Wait
        await browser.pause(1000);
        const expected_vehicleregistrationnumberfield = "Vehicle Registration Number"
        await expect(IndividualPage.vehicle_registration_number_label).toHaveText(expected_vehicleregistrationnumberfield)

        allureReporter.addStep("Verify ID Type field");
        //Wait
        await browser.pause(1000);
        const expected_idtypefield = "ID Type"
        await expect(IndividualPage.id_type_label).toHaveText(expected_idtypefield)

        allureReporter.addStep("Click ID Type dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_type_field.click()

        allureReporter.addStep("Verify ID Type MYKAD");
        //Wait
        await browser.pause(1000);
        const expected_idtypemykad = "MyKad"
        await expect(IndividualPage.id_type_mykad).toHaveText(expected_idtypemykad)


        allureReporter.addStep("Verify ID Type Others");
        const expected_idtypeother = "Others"
        await expect(IndividualPage.id_type_others).toHaveText(expected_idtypeother)

        allureReporter.addStep("Click MYKad");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_type_mykad.click()

        allureReporter.addStep("Verify ID number field");
        //Wait
        await browser.pause(1000);
        const expected_idnumberfield = "ID Number"
        await expect(IndividualPage.id_number_label).toHaveText(expected_idnumberfield)

        allureReporter.addStep("Verify postcode field");
        const expected_postcodefield = "Postcode"
        await expect(IndividualPage.postcode_label).toHaveText(expected_postcodefield)

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await IndividualPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Verify mairtal status field");
        //Wait
        await browser.pause(1000);
        const expected_maritalstatusfield = "Marital Status"
        await expect(IndividualPage.marital_status_label).toHaveText(expected_maritalstatusfield)

        allureReporter.addStep("Click Marital Status dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.marital_status_field.click()

        allureReporter.addStep("Verify marital status single");
        //Wait
        await browser.pause(1000);
        const expected_maritalstatussingle = "Single"
        await expect(IndividualPage.marital_status_single).toHaveText(expected_maritalstatussingle)

        allureReporter.addStep("Verify marital status married");
        const expected_maritalstatusmarried = "Married"
        await expect(IndividualPage.marital_status_married).toHaveText(expected_maritalstatusmarried)

        allureReporter.addStep("Verify marital status widowed");
        const expected_maritalstatuswidowed = "Widowed"
        await expect(IndividualPage.marital_status_widowed).toHaveText(expected_maritalstatuswidowed)

        allureReporter.addStep("Verify marital status separate or divorced");
        const expected_maritalstatusseperatedivorced = "Separated/Divorced"
        await expect(IndividualPage.marital_status_seperate_divorced).toHaveText(expected_maritalstatusseperatedivorced)

        allureReporter.addStep("Verify marital status others");
        const expected_maritalstatusothers = "Others"
        await expect(IndividualPage.marital_status_other).toHaveText(expected_maritalstatusothers)

        allureReporter.addStep("Select single");
        //Wait
        await browser.pause(1000);
        await IndividualPage.marital_status_single.click()

        allureReporter.addStep("Verify contact us copywriting");
        //Wait
        await browser.pause(1000);
        const expected_contactuscopywriting1 = "Our dedicated support team is here to address any concerns you may have."
        await expect(IndividualPage.contact_us_copywriting_1).toHaveText(expected_contactuscopywriting1)

        allureReporter.addStep("Verify contact us copywriting");
        const expected_contactuscopywriting2 = "CONTACT US"
        await expect(IndividualPage.contact_us_copywriting_2).toHaveText(expected_contactuscopywriting2)

        allureReporter.addStep("Verify privacy notes copywriting");
        const expected_privacynotescopywriting1 = "By clicking Next, I confirm I have read and understood the document below."
        await expect(IndividualPage.privacy_notes_copywriting_1).toHaveText(expected_privacynotescopywriting1)

        allureReporter.addStep("Verify privacy notes copywriting");
        const expected_privacynotescopywriting2 = "PRIVACY NOTICE"
        await expect(IndividualPage.privacy_notes_copywriting_2).toHaveText(expected_privacynotescopywriting2)

        allureReporter.addStep("Verify next button");
        const expected_nextbutton = "NEXT"
        await expect(IndividualPage.next_button).toHaveText(expected_nextbutton)

        //Wait
        await browser.pause(3000);
     });
}); 