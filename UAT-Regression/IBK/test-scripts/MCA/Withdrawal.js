import {VALID_CREDS_17} from '../../test-data/user.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountsPage from '../../page-objects/Accounts/AccountsPage.js';
import MultiCurrencyMainPage from '../../page-objects/Accounts/MultiCurrency/MultiCurrencyMainPage.js';
import TermDepositWithdrawalPage from '../../page-objects/Accounts/MultiCurrency/TermDepositWithdrawal/TermDepositWithdrawalPage.js';
import TermDepositWithdrawalReviewPage from '../../page-objects/Accounts/MultiCurrency/TermDepositWithdrawal/TermDepositWithdrawalReviewPage.js';
import TermWithdrawalStatusPage from '../../page-objects/Accounts/MultiCurrency/TermDepositWithdrawal/TermWithdrawalStatusPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] MCA',async () => {
    
    it('Accounts Header entry point - Withdrawal',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_17
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click accounts button");
        //Wait
        await browser.pause(4000);
        await HomePage.accounts_button.click()

        allureReporter.addStep("Click multi currency button");
        //Wait
        await browser.pause(3000);
        await AccountsPage.multi_currency_button.click()

        allureReporter.addStep("Click term accounts tab");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyMainPage.term_accounts_tab.click()

        allureReporter.addStep("Click withdraw button for 1st account");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyMainPage.term_accounts_first_account_withdraw_button.click()

        allureReporter.addStep("Click ok button");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyMainPage.withdraw_ok_button.click()

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(2000);
        await TermDepositWithdrawalPage.next_button.click()

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(2000);
        await TermDepositWithdrawalReviewPage.submit_button.click()

         /* Manually pass secure plus */

        allureReporter.addStep("Verify term withdrawal status");
        //Wait
        await browser.pause(3000);
        const expected_status = "Term Withdrawal Successful"
        await expect(TermWithdrawalStatusPage.term_withdrawal_status).toHaveText(expected_status);

        allureReporter.addStep("Verify term withdrawal message");
        //Wait
        await browser.pause(3000);
        const expected_message = "Your term withdrawal is successfully done."
        await expect(TermWithdrawalStatusPage.term_withdrawal_message).toHaveText(expected_message);        
        
        //Wait
        await browser.pause(13000);
     });
}); 