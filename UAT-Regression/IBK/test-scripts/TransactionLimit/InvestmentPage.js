import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import AccountsPage from '../../page-objects/Settings/Accounts/AccountsPage.js';
import InvestmentPage from '../../page-objects/TransactionLimit/Investment/InvestmentPage.js';
import InvestmentReviewPage from '../../page-objects/TransactionLimit/Investment/InvestmentReviewPage.js';
import SuccessfulChangedMessage from '../../page-objects/TransactionLimit/SuccessfulChangedMessage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Transaction Limit - Investment',async () => {
    
    it('Accounts from settings - Change investment limit',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_3
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click settings button");
        await browser.pause(4000);
        await HomePage.settings_button.click()

        allureReporter.addStep("Click accounts");
        await browser.pause(4000);
        await SettingsPage.accounts_button.click()

        allureReporter.addStep("Scroll down");
        await browser.pause(1000);
        await browser.scroll(0, 400)

        allureReporter.addStep("Click investment");
        await browser.pause(3000);
        await AccountsPage.transaction_limit_investment.click()

        allureReporter.addStep("Verify investment title");
        await browser.pause(1000);
        const expected_investmenttitle = "Investment"
        await expect(InvestmentPage.investment_title).toHaveText(expected_investmenttitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importantnotedtitle = "Important"
        await expect(InvestmentPage.important_noted_title).toHaveText(expected_importantnotedtitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantnotedremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(InvestmentPage.important_noted_remark).toHaveText(expected_importantnotedremark);

        allureReporter.addStep("Click multi currency account field");
        await browser.pause(2000);
        await InvestmentPage.multi_currency_account_field.click()

        allureReporter.addStep("Select MYR 1000");
        await InvestmentPage.myr_1000.click()

        allureReporter.addStep("Click ASNB own account field");
        await browser.pause(2000);
        await InvestmentPage.asnb_own_account_field.click()

        allureReporter.addStep("Select MYR 1000");
        await InvestmentPage.myr_2000.click()

        allureReporter.addStep("Click ASNB third party account field");
        await browser.pause(2000);
        await InvestmentPage.asnb_third_party_account_field.click()

        allureReporter.addStep("Select MYR 1000");
        await InvestmentPage.myr_3000.click()

        allureReporter.addStep("Click Save button");
        await browser.pause(1000);
        await InvestmentPage.save_button.click()

        allureReporter.addStep("Verify review details title");
        await browser.pause(1000);
        const expected_reviewdetailstitle = "Review Details"
        await expect(InvestmentReviewPage.review_details_title).toHaveText(expected_reviewdetailstitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importanttitle = "Important"
        await expect(InvestmentReviewPage.important_noted_title).toHaveText(expected_importanttitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(InvestmentReviewPage.important_noted_remark).toHaveText(expected_importantremark);

        allureReporter.addStep("Verify multi currency account value");
        const expected_multicurrencyaccountvalue = await InvestmentReviewPage.multi_currency_account_value.getText();
        await expect(InvestmentReviewPage.multi_currency_account_value).toHaveText(expected_multicurrencyaccountvalue);

        allureReporter.addStep("Verify ASNB own account value");
        const expected_asnbownaccountvalue = await InvestmentReviewPage.asnb_own_account_value.getText();
        await expect(InvestmentReviewPage.asnb_own_account_value).toHaveText(expected_asnbownaccountvalue);

        allureReporter.addStep("Verify ASNB third party account value");
        const expected_asnbthirdpartyaccountvalue = await InvestmentReviewPage.asnb_third_party_account_value.getText();
        await expect(InvestmentReviewPage.asnb_third_party_account_value).toHaveText(expected_asnbthirdpartyaccountvalue);

        allureReporter.addStep("Click Submit button");
        await browser.pause(1000);
        await InvestmentReviewPage.submit_button.click()

        allureReporter.addStep("Verify Successful Message");
        await browser.pause(1000);
        const expected_successfulmessage1 = "Yay!"
        await expect(SuccessfulChangedMessage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully updated your transaction limit."
        await expect(SuccessfulChangedMessage.successful_message_2).toHaveText(expected_successfulmessage2);
      
        await browser.pause(2000);
     });
}); 