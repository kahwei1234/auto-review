import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import AccountsPage from '../../page-objects/Settings/Accounts/AccountsPage.js';
import PaymentPage from '../../page-objects/TransactionLimit/Payment/PaymentPage.js';
import PaymentReviewPage from '../../page-objects/TransactionLimit/Payment/PaymentReviewPage.js';
import SuccessfulChangedMessage from '../../page-objects/TransactionLimit/SuccessfulChangedMessage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Transaction Limit - Payment',async () => {
    
    it('Accounts from settings - Change payment limit',async () => {

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
        await browser.scroll(0, 300)

        allureReporter.addStep("Click payment");
        await browser.pause(3000);
        await AccountsPage.transaction_limit_payment.click()

        allureReporter.addStep("Verify payment title");
        await browser.pause(1000);
        const expected_paymenttitle = "Payment"
        await expect(PaymentPage.payment_title).toHaveText(expected_paymenttitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importantnotedtitle = "Important"
        await expect(PaymentPage.important_noted_title).toHaveText(expected_importantnotedtitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantnotedremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(PaymentPage.important_noted_remark).toHaveText(expected_importantnotedremark);

        allureReporter.addStep("Click own account field");
        await browser.pause(2000);
        await PaymentPage.own_account_field.click()

        allureReporter.addStep("Select MYR 1000");
        await browser.pause(2000);
        await PaymentPage.myr_1000.click()

        allureReporter.addStep("Click other billers field");
        await browser.pause(2000);
        await PaymentPage.other_billers_field.click()

        allureReporter.addStep("Select MYR 1000");
        await browser.pause(2000);
        await PaymentPage.myr_2000.click()

        allureReporter.addStep("Click jompay field");
        await browser.pause(2000);
        await PaymentPage.jompay_field.click()

        allureReporter.addStep("Select MYR 1000");
        await browser.pause(2000);
        await PaymentPage.myr_3000.click()

        allureReporter.addStep("Click Save button");
        await browser.pause(1000);
        await PaymentPage.save_button.click()

        allureReporter.addStep("Verify review details title");
        await browser.pause(1000);
        const expected_reviewdetailstitle = "Review Details"
        await expect(PaymentReviewPage.review_details_title).toHaveText(expected_reviewdetailstitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importanttitle = "Important"
        await expect(PaymentReviewPage.important_noted_title).toHaveText(expected_importanttitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(PaymentReviewPage.important_noted_remark).toHaveText(expected_importantremark);

        allureReporter.addStep("Verify own account value");
        const expected_ownaccountvalue = await PaymentReviewPage.own_account_value.getText();
        await expect(PaymentReviewPage.own_account_value).toHaveText(expected_ownaccountvalue);

        allureReporter.addStep("Verify other billers value");
        const expected_otherbillersvalue = await PaymentReviewPage.other_billers_value.getText();
        await expect(PaymentReviewPage.other_billers_value).toHaveText(expected_otherbillersvalue);

        allureReporter.addStep("Verify jompay value");
        const expected_jompayvalue = await PaymentReviewPage.jompay_value.getText();
        await expect(PaymentReviewPage.jompay_value).toHaveText(expected_jompayvalue);

        allureReporter.addStep("Click Submit button");
        await browser.pause(1000);
        await PaymentReviewPage.submit_button.click()

        await browser.pause(7000);

        allureReporter.addStep("Verify Successful Message");
        await browser.pause(1000);
        const expected_successfulmessage1 = "Yay!"
        await expect(SuccessfulChangedMessage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully updated your transaction limit."
        await expect(SuccessfulChangedMessage.successful_message_2).toHaveText(expected_successfulmessage2);
        
        await browser.pause(2000);
     });
}); 