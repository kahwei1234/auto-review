import {VALID_CREDS_3} from '../../test-data/user.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountsPage from '../../page-objects/Accounts/AccountsPage.js';
import MultiCurrencyMainPage from '../../page-objects/Accounts/MultiCurrency/MultiCurrencyMainPage.js';
import TermPlacementPage from '../../page-objects/Accounts/MultiCurrency/TermPlacement/TermPlacementPage.js';
import TermPlacementReviewPage from '../../page-objects/Accounts/MultiCurrency/TermPlacement/TermPlacementReviewPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] MCA',async () => {
    
    it('Accounts Header entry point - Term Placement',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_3
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click accounts button");
        //Wait
        await browser.pause(4000);
        await HomePage.accounts_button.click()

        allureReporter.addStep("Click multi currency button");
        //Wait
        await browser.pause(3000);
        await AccountsPage.multi_currency_button.click()

        allureReporter.addStep("Click term placement button");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyMainPage.term_placement_button.click()

        allureReporter.addStep("Click currency field");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.currency_field.click()

        allureReporter.addStep("Click first currency");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.first_currency.click()

        allureReporter.addStep("Click placement amount field");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.placement_amount_field.click()

        allureReporter.addStep("Insert currency search field");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.placement_amount.setValue('200000')

        allureReporter.addStep("Click tenure field");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.tenure_field.click()

        allureReporter.addStep("Select 1 week");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.tenure_1_week.click()

        allureReporter.addStep("Click purpose of payment field");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.purpose_of_payment_field.click()

        allureReporter.addStep("Select trade");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.purpose_trade.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(2000);
        await TermPlacementPage.next_button.click()

        allureReporter.addStep("Verify to value");
        //Wait
        await browser.pause(3000);
        const expected_tovalue = "MCA • 6-01053-0000271-1"
        await expect(TermPlacementReviewPage.to).toHaveText(expected_tovalue);

        allureReporter.addStep("Verify placement amount value");
        const expected_placementamountvalue = "USD 2000.00"
        await expect(TermPlacementReviewPage.placement_amount).toHaveText(expected_placementamountvalue);

        allureReporter.addStep("Verify tenure value");
        const expected_tenurevalue = "1 week"
        await expect(TermPlacementReviewPage.tenure).toHaveText(expected_tenurevalue);

        allureReporter.addStep("Verify interest rate value");
        const expected_interestratevalue = "4.9 % p.a"
        await expect(TermPlacementReviewPage.interest_rate).toHaveText(expected_interestratevalue);

        allureReporter.addStep("Verify accrued interest value");
        const expected_accruedinterestvalue = "USD 1.91"
        await expect(TermPlacementReviewPage.accrued_interest).toHaveText(expected_accruedinterestvalue);

        allureReporter.addStep("Verify purpose of payment value");
        const expected_purposeofpaymentvalue = "Trade"
        await expect(TermPlacementReviewPage.purpose_of_payment).toHaveText(expected_purposeofpaymentvalue);

        allureReporter.addStep("Click term and conditions checkbox");
        await TermPlacementReviewPage.tnc_checkbox.click()

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(2000);
        await TermPlacementReviewPage.submit_button.click()

        /* Oops message - Will continue after fixed*/
        
        
        //Wait
        await browser.pause(13000);
     });
}); 