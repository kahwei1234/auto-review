import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import {Others_1} from '../../../../test-data/MotorInsurance.js'
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
import QuotationDetailsPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Quotation Details Page/QuotationDetailsPage.js'
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC05] ID Type: Others - Verify navigate to quotation details screen',async () => {

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

        allureReporter.addStep("Insert vehicle registration number");
        const {vehicleregistrationnumber} = Others_1
        await IndividualPage.vehicle_registration_number.setValue(vehicleregistrationnumber)

        allureReporter.addStep("Click ID Type dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_type_field.click()

        allureReporter.addStep("Select Others");
        await IndividualPage.id_type_others.click()

        allureReporter.addStep("Click ID number field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_number_field.click()

        allureReporter.addStep("Insert ID number");
        const {idnumber} = Others_1
        await IndividualPage.id_number.setValue(idnumber)

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.postcode_field.click()

        allureReporter.addStep("Insert postcode");
        const {postcode} = Others_1
        await IndividualPage.postcode.setValue(postcode)

        allureReporter.addStep("Click Marital Status dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.marital_status_field.click()

        allureReporter.addStep("Select single");
        await IndividualPage.marital_status_single.click()

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await IndividualPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Click birth date field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.birth_date_field.click()

        allureReporter.addStep("Click birth date year field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.birth_date_year_field.click()

        allureReporter.addStep("Scroll to 2024");
        //Wait
        await browser.pause(1000);
        await IndividualPage.birth_date_year_2024.scrollIntoView()

        allureReporter.addStep("Select 2024");
        //Wait
        await browser.pause(1000);
        await IndividualPage.birth_date_year_2024.click()

        allureReporter.addStep("Select 12");
        //Wait
        await browser.pause(1000);
        await IndividualPage.birth_date_12.click()

        allureReporter.addStep("Click nationality field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.nationality_field.click()

        allureReporter.addStep("Select malaysia");
        //Wait
        await browser.pause(1000);
        await IndividualPage.nationality_malaysia.click()

        allureReporter.addStep("Select male");
        //Wait
        await browser.pause(1000);
        await IndividualPage.gender_male_label.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await IndividualPage.next_button.click()

        allureReporter.addStep("Verify quotation details title");
        //Wait
        await browser.pause(1000);
        const expected_quotationdetailstitle = "Quotation Details"
        await expect(QuotationDetailsPage.quotation_details_title).toHaveText(expected_quotationdetailstitle)

        //Wait
        await browser.pause(3000);
     });
}); 