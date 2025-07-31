import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import {More_details_required_MyKad_1} from '../../../../test-data/MotorInsurance.js'
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
import MissingInfoPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Missing Info Page/MissingInfoPage.js';
import MoreDetailsRequiredPage from '../../../../page-objects/MoreFeatures/MotorInsurance/More Details Required Page/MoreDetailsRequiredPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Refer Risk ',async () => {
    
    it('[TC03] Verify successful submitted message for more details required page',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(4000);
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
        const {vehicleregistrationnumber} = More_details_required_MyKad_1
        await IndividualPage.vehicle_registration_number.setValue(vehicleregistrationnumber)

        allureReporter.addStep("Click ID Type dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_type_field.click()

        allureReporter.addStep("Select MYKad");
        await IndividualPage.id_type_mykad.click()

        allureReporter.addStep("Click ID number field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.id_number_field.click()

        allureReporter.addStep("Insert ID number");
        const {idnumber} = More_details_required_MyKad_1
        await IndividualPage.id_number.setValue(idnumber)

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.postcode_field.click()

        allureReporter.addStep("Insert postcode");
        const {postcode} = More_details_required_MyKad_1
        await IndividualPage.postcode.setValue(postcode)

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await IndividualPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Click Marital Status dropdown");
        //Wait
        await browser.pause(1000);
        await IndividualPage.marital_status_field.click()

        allureReporter.addStep("Select single");
        await IndividualPage.marital_status_single.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await IndividualPage.next_button.click()

        allureReporter.addStep("Click brand dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.brand_field.click()

        allureReporter.addStep("Select audi");
        await MissingInfoPage.brand_audi.click()

        allureReporter.addStep("Click model dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.model_field.click()

        allureReporter.addStep("Select q2");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.model_q2.click()

        allureReporter.addStep("Click year of manufacture dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.year_of_manufacture_field.click()

        allureReporter.addStep("Select 2017");
        await MissingInfoPage.year_of_manufacture_2017.click()

        allureReporter.addStep("Click vehicle capacity dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.vehicle_capacity_field.click()

        allureReporter.addStep("Select 1395");
        await MissingInfoPage.vehicle_capacity_1395.click()

        allureReporter.addStep("Verify more details required title");
        //Wait
        await browser.pause(1000);
        const expected_moredetailsrequiredtitle = "More Details Required"
        await expect(MoreDetailsRequiredPage.more_details_required_title).toHaveText(expected_moredetailsrequiredtitle)

        allureReporter.addStep("Verify more details required copywriting");
        const expected_moredetailsrequiredcopywriting = "Enter more details below for a quotation and we'll contact you soon."
        await expect(MoreDetailsRequiredPage.copywriting_1).toHaveText(expected_moredetailsrequiredcopywriting)

        allureReporter.addStep("Click your name field");
        //Wait
        await browser.pause(1000);
        await MoreDetailsRequiredPage.your_name_field.click()

        allureReporter.addStep("Insert name");
        const {yourname} = More_details_required_MyKad_1
        await MoreDetailsRequiredPage.your_name.setValue(yourname)

        allureReporter.addStep("Click contact number field");
        //Wait
        await browser.pause(1000);
        await MoreDetailsRequiredPage.contact_number_field.click()

        allureReporter.addStep("Insert contact number");
        const {contactnumber} = More_details_required_MyKad_1
        await MoreDetailsRequiredPage.contact_number.setValue(contactnumber)

        allureReporter.addStep("Click email field");
        //Wait
        await browser.pause(1000);
        await MoreDetailsRequiredPage.email_field.click()

        allureReporter.addStep("Insert email");
        const {email} = More_details_required_MyKad_1
        await MoreDetailsRequiredPage.email.setValue(email)

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await MoreDetailsRequiredPage.submit_button.click()

        allureReporter.addStep("Verify successful copywriting");
        //Wait
        await browser.pause(1000);
        const expected_successfulcopywriting1 = "Yay!"
        await expect(MoreDetailsRequiredPage.successful_copywriting_1).toHaveText(expected_successfulcopywriting1)

        allureReporter.addStep("Verify successful copywriting");
        const expected_successfulcopywriting2 = "Thank you for submitting your details. Our Customer Service Centre will attend to you shortly."
        await expect(MoreDetailsRequiredPage.successful_copywriting_2).toHaveText(expected_successfulcopywriting2)

        allureReporter.addStep("Verify successful okay got it button");
        const expected_successfulokaygotitbutton = "OKAY, GOT IT"
        await expect(MoreDetailsRequiredPage.successful_okay_got_it_button).toHaveText(expected_successfulokaygotitbutton)

        //Wait
        await browser.pause(3000);
     });
}); 