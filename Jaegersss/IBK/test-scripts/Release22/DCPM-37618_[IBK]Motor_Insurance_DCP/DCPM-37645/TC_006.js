import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import {MyKad_2} from '../../../../test-data/MotorInsurance.js'
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
import MissingInfoPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Missing Info Page/MissingInfoPage.js';
import QuotationDetailsPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Quotation Details Page/IndividualPage.js'
import PolicyHolderDetailsPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Policy Holder Details Page/PolicyHolderDetailsPage.js';
import CancelPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Policy Holder Details Page/CancelPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Refer Risk ',async () => {
    
    it('[TC06] Policy Holder Details Page - Verify no button for cancel confirmation message popup',async () => {

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
        const {vehicleregistrationnumber} = MyKad_2
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
        const {idnumber} = MyKad_2
        await IndividualPage.id_number.setValue(idnumber)

        allureReporter.addStep("Click postcode field");
        //Wait
        await browser.pause(1000);
        await IndividualPage.postcode_field.click()

        allureReporter.addStep("Insert postcode");
        const {postcode} = MyKad_2
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

        allureReporter.addStep("Select perodua");
        await MissingInfoPage.brand_perodua.click()

        allureReporter.addStep("Click model dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.model_field.click()

        allureReporter.addStep("Select kancil");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.model_kancil.click()

        allureReporter.addStep("Click year of manufacture dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.year_of_manufacture_field.click()

        allureReporter.addStep("Select 2001");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.year_of_manufacture_2001.click()

        allureReporter.addStep("Click vehicle capacity dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.vehicle_capacity_field.click()

        allureReporter.addStep("Select 847");
        await MissingInfoPage.vehicle_capacity_847.click()

        allureReporter.addStep("Click variant series dropdown");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.variant_series_field.click()

        allureReporter.addStep("Select hatchback 5");
        await MissingInfoPage.variant_series_hatchback_5.click()

        allureReporter.addStep("Click chassis number field");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.chassis_number_field.click()

        allureReporter.addStep("Insert chassis number");
        const {chassisnumber} = MyKad_2
        await MissingInfoPage.chassis_number.setValue(chassisnumber)

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.engine_number_field.scrollIntoView()

        allureReporter.addStep("Click engine number field");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.engine_number_field.click()

        allureReporter.addStep("Click engine number field");
        const {enginenumber} = MyKad_2
        await MissingInfoPage.engine_number.setValue(enginenumber)

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await MissingInfoPage.submit_button.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(4000);
        await QuotationDetailsPage.next_button.click()

        allureReporter.addStep("Click x button");
        //Wait
        await browser.pause(4000);
        await PolicyHolderDetailsPage.x_button.click()

        allureReporter.addStep("Verify cancel title");
        //Wait
        await browser.pause(1000);
        const expected_canceltitle = "Cancel Application"
        await expect(CancelPage.cancel_title).toHaveText(expected_canceltitle)

        allureReporter.addStep("Verify cancel copywriting");
        const expected_cancelcopywriting = "Are you sure? Leaving this screen will cancel your application and you'll need to apply again."
        await expect(CancelPage.cancel_copywriting).toHaveText(expected_cancelcopywriting)

        allureReporter.addStep("Click no button");
        //Wait
        await browser.pause(1000);
        await CancelPage.no_button.click()

        //Wait
        await browser.pause(3000);
     });
}); 