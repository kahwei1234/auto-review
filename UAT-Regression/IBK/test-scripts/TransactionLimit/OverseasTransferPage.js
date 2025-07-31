import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import AccountsPage from '../../page-objects/Settings/Accounts/AccountsPage.js';
import OverseasTransferPage from '../../page-objects/TransactionLimit/OverseasTransfer/OverseasTransferPage.js';
import OverseasTransferReviewPage from '../../page-objects/TransactionLimit/OverseasTransfer/OverseasTransferReviewPage.js';
import SuccessfulChangedMessage from '../../page-objects/TransactionLimit/SuccessfulChangedMessage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Transaction Limit - Overseas Transfer',async () => {
    
    it('Accounts from settings - Change overseas transfer limit',async () => {

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

        allureReporter.addStep("Click overseas transfer");
        await browser.pause(3000);
        await AccountsPage.transaction_limit_overseas_transfer.click()

        allureReporter.addStep("Verify overseas transfer title");
        await browser.pause(1000);
        const expected_overseastransfertitle = "Overseas Transfer"
        await expect(OverseasTransferPage.overseas_transfer_title).toHaveText(expected_overseastransfertitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importantnotedtitle = "Important"
        await expect(OverseasTransferPage.important_noted_title).toHaveText(expected_importantnotedtitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantnotedremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(OverseasTransferPage.important_noted_remark).toHaveText(expected_importantnotedremark);

        allureReporter.addStep("Click pay to account field");
        await browser.pause(2000);
        await OverseasTransferPage.pay_to_account_field.click()

        allureReporter.addStep("Select MYR 1000");
        await OverseasTransferPage.myr_1000.click()

        allureReporter.addStep("Click pay to cash field");
        await browser.pause(2000);
        await OverseasTransferPage.pay_to_cash_field.click()

        allureReporter.addStep("Select MYR 1000");
        await OverseasTransferPage.myr_2000.click()

        allureReporter.addStep("Click Save button");
        await browser.pause(1000);
        await OverseasTransferPage.save_button.click()

        allureReporter.addStep("Verify review details title");
        await browser.pause(1000);
        const expected_reviewdetailstitle = "Review Details"
        await expect(OverseasTransferReviewPage.review_details_title).toHaveText(expected_reviewdetailstitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importanttitle = "Important"
        await expect(OverseasTransferReviewPage.important_noted_title).toHaveText(expected_importanttitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(OverseasTransferReviewPage.important_noted_remark).toHaveText(expected_importantremark);

        allureReporter.addStep("Verify pay to account value");
        const expected_paytoaccountvalue = await OverseasTransferReviewPage.pay_to_account_value.getText();
        await expect(OverseasTransferReviewPage.pay_to_account_value).toHaveText(expected_paytoaccountvalue);

        allureReporter.addStep("Verify pay to cash value");
        const expected_paytocashvalue = await OverseasTransferReviewPage.pay_to_cash_value.getText();
        await expect(OverseasTransferReviewPage.pay_to_cash_value).toHaveText(expected_paytocashvalue);

        allureReporter.addStep("Click Submit button");
        await browser.pause(1000);
        await OverseasTransferReviewPage.submit_button.click()

        allureReporter.addStep("Verify Successful Message");
        await browser.pause(1000);
        const expected_successfulmessage1 = "Yay!"
        await expect(SuccessfulChangedMessage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully updated your transaction limit."
        await expect(SuccessfulChangedMessage.successful_message_2).toHaveText(expected_successfulmessage2);
      
        await browser.pause(2000);
     });
}); 