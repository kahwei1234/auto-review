import {VALID_CREDS_6} from '../../test-data/userAccount.js';
//Remember to change the Bank, if you want to test specific bank
import {BARBADOS_BANK,PAY_IN_CASH_DETAILS} from '../../test-data/WesternUnionAccounts.js'
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import MoreFeaturesPage from '../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import OverseasTransferDetailsPage from '../../page-objects/OverseasTransfer/OverseasTransferDetailsPage.js';
import PayInCashPage from '../../page-objects/OverseasTransfer/PayInCashPage.js';
import OverseasTransferReviewPage from '../../page-objects/OverseasTransfer/OverseasTransferReviewPage.js';
import OverseasTransferSuccessfulPage from '../../page-objects/OverseasTransfer/OverseasTransferSuccessfulPage.js';
const allureReporter = require('@wdio/allure-reporter').default

//Remember to change the Bank, if you want to test specific bank
const {country,currency,promocode,recipientgets,countrycode} = BARBADOS_BANK
const {recipientfirstname,recipientlastname,idnumber,mobilenumber} = PAY_IN_CASH_DETAILS

describe('[IBK] Western Union',async () => {
    
    it(' Pay in Cash - Verify Status, data, and receipt',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(3000);
        await HomePage.more_button.click()

        allureReporter.addStep("Click overseas transfer button");
        //Wait
        await browser.pause(1000);
        await MoreFeaturesPage.overseas_transfer.click()

        allureReporter.addStep("Click pay to account button");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.pay_to_account_button.click()

        allureReporter.addStep("Click pay in cash button");
        await OverseasTransferDetailsPage.pay_in_cash_button.click()

        allureReporter.addStep("Click to country field");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.to_country.click()

        allureReporter.addStep("Search country");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.search_country.setValue(country)

        allureReporter.addStep("Select country");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.first_country.click()

        allureReporter.addStep("Click from field country");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.from_field.click()

        allureReporter.addStep("Select account");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.first_from_account.click()

        allureReporter.addStep("Scroll to bottom");
        await OverseasTransferDetailsPage.calculate_conversion_rate_button.scrollIntoView()

        allureReporter.addStep("Click enter your promo code field");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.enter_your_promo_code_field.click()

        allureReporter.addStep("Insert promo code");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.enter_your_promo_code_field.setValue(promocode)

        allureReporter.addStep("Click recipient gets field");
        //Wait
        await browser.pause(1000);
        if(await OverseasTransferDetailsPage.recipient_gets_dropdown_button.isDisplayed()){
           await OverseasTransferDetailsPage.recipient_gets_field_with_options.click()
        }else{
           await OverseasTransferDetailsPage.recipient_gets_field_without_options.click()
        }
        
        allureReporter.addStep("Insert recipient gets");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.recipient_gets.setValue(recipientgets)

        allureReporter.addStep("Click calculate button");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.calculate_conversion_rate_button.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await OverseasTransferDetailsPage.next_button.click()

        allureReporter.addStep("Click relationship to recipient");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.relationship_to_recipient.click()

        allureReporter.addStep("Select option for relationship to recipient");
        await PayInCashPage.relationship_employee_employer.click()

        allureReporter.addStep("Click source of fund");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.source_of_fund.click()

        allureReporter.addStep("Select option for source of fund");
        await PayInCashPage.source_gift.click()

        allureReporter.addStep("Click employment position");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.employment_position.click()

        allureReporter.addStep("Select option for employment position");
        await PayInCashPage.employment_entry_level.click()

        allureReporter.addStep("Click recipient first name field");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.recipient_first_name_field.click()

        allureReporter.addStep("Insert recipient first name");
        await PayInCashPage.recipient_first_name.setValue(recipientfirstname)

        allureReporter.addStep("Click recipient last name field");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.recipient_last_name_field.click()

        allureReporter.addStep("Insert recipient last name");
        await PayInCashPage.recipient_last_name.setValue(recipientlastname)

        allureReporter.addStep("Scroll down");
        //Scroll to bottom
        await browser.pause(1000);
        await browser.scroll(0, 300)

        allureReporter.addStep("Click resident of malaysia");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.resident_of_malaysia.click()

        allureReporter.addStep("Select yes");
        await PayInCashPage.resident_yes.click()

        allureReporter.addStep("Click id number field");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.id_number_field.click()

        allureReporter.addStep("Insert id number");
        await PayInCashPage.id_number.setValue(idnumber)

        allureReporter.addStep("Click mobile number field");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.mobile_number_field.click()

        allureReporter.addStep("Insert mobile number");
        await PayInCashPage.mobile_number.setValue(mobilenumber)

        allureReporter.addStep("Click purpose of payment");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.purpose_of_payment.click()

        allureReporter.addStep("Select option for purpose of payment");
        await PayInCashPage.purpose_emergency_medical_aid.click()

        allureReporter.addStep("Scroll to bottom purpose of payment");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.agree_to_all_the_declaration_checkbox.scrollIntoView()

        allureReporter.addStep("Tick the checkbox");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.agree_to_all_the_declaration_checkbox.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await PayInCashPage.next_button.click()

        allureReporter.addStep("Verify overseas transfer review page");
        //Wait
        await browser.pause(1000);
        await expect(OverseasTransferReviewPage.to_country_value).toHaveText(country);
        await expect(OverseasTransferReviewPage.currency_value).toHaveText(currency);
        await expect(OverseasTransferReviewPage.promo_code_value).toHaveText(promocode);

        allureReporter.addStep("Scroll down");
        //Scroll to bottom
        await browser.pause(1000);
        await browser.scroll(0, 300)

        allureReporter.addStep("Verify sender details");
        //Wait
        await browser.pause(1000);
        const expected_sendername = "ZURA IZLITA BINTI RAZAK"
        await expect(OverseasTransferReviewPage.sender_name_value).toHaveText(expected_sendername);
        const expected_countryofbirth = "Malaysia"
        await expect(OverseasTransferReviewPage.country_of_birth_value).toHaveText(expected_countryofbirth);
        const expected_sourceoffund = "Gift"
        await expect(OverseasTransferReviewPage.source_of_fund_value).toHaveText(expected_sourceoffund);
        const expected_employmentposition = "Entry Level"
        await expect(OverseasTransferReviewPage.employment_position_value).toHaveText(expected_employmentposition);
        const expected_relationshipofrecipient = "Employee/Employer"
        await expect(OverseasTransferReviewPage.relationship_to_recipient_value).toHaveText(expected_relationshipofrecipient);

        allureReporter.addStep("Scroll down");
        //Scroll to bottom
        await browser.pause(1000);
        await browser.scroll(0, 400)

        allureReporter.addStep("Verify recipient details");
        //Wait
        await browser.pause(1000);
        await expect(OverseasTransferReviewPage.recipient_first_name_value).toHaveText(recipientfirstname);
        await expect(OverseasTransferReviewPage.recipient_last_name_value).toHaveText(recipientlastname);
        const expected_residentofmalaysia = "Yes"
        await expect(OverseasTransferReviewPage.resident_of_malaysia_value).toHaveText(expected_residentofmalaysia);
        await expect(OverseasTransferReviewPage.id_number_value).toHaveText(idnumber);
        await expect(OverseasTransferReviewPage.contact_number_value).toHaveText(countrycode + mobilenumber);

        allureReporter.addStep("Verify purpose of payment value");
        const expected_purposeofpayment = "Emergency/Medical Aid"
        await expect(OverseasTransferReviewPage.purpose_of_payment_value).toHaveText(expected_purposeofpayment);

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await OverseasTransferReviewPage.submit_button.click()

        allureReporter.addStep("Wait secure plus");
        //Wait
        await browser.pause(7000);

        allureReporter.addStep("Verify first accrued interest profit as of");
        //Wait
        await browser.pause(1000);
        const expected_accruedinterestprofit = await HoldingTab.first_h_accrued_interest_profit_as_of.getText();
        await expect(HoldingTab.first_h_accrued_interest_profit_as_of).toHaveText(expected_accruedinterestprofit);
        

        //Wait
        await browser.pause(3000);
     });
}); 