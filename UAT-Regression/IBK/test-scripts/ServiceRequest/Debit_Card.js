import {VALID_CREDS_4} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import GetSupportPage from '../../page-objects/GetSupport/GetSupportPage.js';
import SubmitServiceRequestPage from '../../page-objects/GetSupport/SubmitServiceRequestPage.js';
import SubmissionSuccessfulPage from '../../page-objects/GetSupport/SubmissionSuccessfulPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Service Request',async () => {
    
    it('Get support entry point - Submit personal loan request and verify details',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_4
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click get support button");
        //Wait
        await browser.pause(2000);
        await HomePage.get_support_button.click()

        allureReporter.addStep("Click submit request button");
        //Wait
        await browser.pause(2000);
        await GetSupportPage.submit_request_button.click()

        allureReporter.addStep("Click product type dropdown");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.product_type_dropdown.click()

        allureReporter.addStep("Select personal loan");
        await SubmitServiceRequestPage.product_type_personal_loan.click()

        allureReporter.addStep("Click product category dropdown");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.product_category_dropdown.click()

        allureReporter.addStep("Select personal financing-i");
        await SubmitServiceRequestPage.product_category_personal_financing_i.click()

        allureReporter.addStep("Click service type dropdown");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.service_type_dropdown.click()

        allureReporter.addStep("Select settlement letter");
        await SubmitServiceRequestPage.service_type_settlement_letter.click()

        allureReporter.addStep("Scroll to bottom");
        await SubmitServiceRequestPage.more_information_link.scrollIntoView()

        allureReporter.addStep("Click loan account number field");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.loan_account_number.click()

        allureReporter.addStep("Insert loan account number");
        await SubmitServiceRequestPage.loan_account_number.setValue('23675809234523')

        allureReporter.addStep("Click type of personal loan field");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.type_of_personal_loan.click()

        allureReporter.addStep("Insert type of personal loan");
        await SubmitServiceRequestPage.type_of_personal_loan.setValue('test')

        allureReporter.addStep("Click settlement date field");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.settlement_date_field.click()

        allureReporter.addStep("Click settlement date");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.settlement_date.click()

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await SubmitServiceRequestPage.submit_button.click()

        allureReporter.addStep("Verify successful message");
        //Wait
        await browser.pause(1000);
        const expected_successfulmessage = "Your Service Request has been submitted successfully. For updates, you can check the status of your request."
        await expect(SubmissionSuccessfulPage.successful_message).toHaveText(expected_successfulmessage)

        allureReporter.addStep("Verify service type value");
        const expected_servicetypevalue = "Settlement Letter (Personal Loan)"
        await expect(SubmissionSuccessfulPage.service_type_value).toHaveText(expected_servicetypevalue)

        allureReporter.addStep("Verify product type value");
        const expected_producttypevalue = "Personal Loan"
        await expect(SubmissionSuccessfulPage.product_type_value).toHaveText(expected_producttypevalue)

        allureReporter.addStep("Verify product category value");
        const expected_productcategoryvalue = "Personal Financing-i"
        await expect(SubmissionSuccessfulPage.product_category_value).toHaveText(expected_productcategoryvalue)
        
        allureReporter.addStep("Verify loan account value");
        const expected_loanaccountnumbervalue = "23675809234523"
        await expect(SubmissionSuccessfulPage.loan_account_number_value).toHaveText(expected_loanaccountnumbervalue)
        
        allureReporter.addStep("Verify type of personal loan value");
        const expected_typeofpersonalloanvalue = "test"
        await expect(SubmissionSuccessfulPage.type_of_personal_loan_value).toHaveText(expected_typeofpersonalloanvalue)
        
        //Wait
        await browser.pause(2000);
     });
}); 