import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import AccountsPage from '../../page-objects/Settings/Accounts/AccountsPage.js';
import TopUpPage from '../../page-objects/TransactionLimit/TopUp/TopUpPage.js'
import TopUpReviewPage from '../../page-objects/TransactionLimit/TopUp/TopUpReviewPage.js'
import SuccessfulChangedMessage from '../../page-objects/TransactionLimit/SuccessfulChangedMessage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Transaction Limit - Top Up',async () => {
    
    it('Accounts from settings - Change top up limit',async () => {

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

        allureReporter.addStep("Click top up");
        await browser.pause(3000);
        await AccountsPage.transaction_limit_top_up.click()

        allureReporter.addStep("Verify top up title");
        await browser.pause(1000);
        const expected_topuptitle = "Top Up"
        await expect(TopUpPage.top_up_title).toHaveText(expected_topuptitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importantnotedtitle = "Important"
        await expect(TopUpPage.important_noted_title).toHaveText(expected_importantnotedtitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantnotedremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(TopUpPage.important_noted_remark).toHaveText(expected_importantnotedremark);

        allureReporter.addStep("Click top up field");
        await browser.pause(2000);
        await TopUpPage.top_up_field.click()

        allureReporter.addStep("Select MYR 100");
        await browser.pause(2000);
        await TopUpPage.top_up_myr_400.click()

        allureReporter.addStep("Click Save button");
        await browser.pause(1000);
        await TopUpPage.save_button.click()

        allureReporter.addStep("Verify review details title");
        await browser.pause(1000);
        const expected_reviewdetailstitle = "Review Details"
        await expect(TopUpReviewPage.review_details_title).toHaveText(expected_reviewdetailstitle);

        allureReporter.addStep("Verify Important Noted Title");
        const expected_importanttitle = "Important"
        await expect(TopUpReviewPage.important_noted_title).toHaveText(expected_importanttitle);

        allureReporter.addStep("Verify Important Noted Remark");
        const expected_importantremark = "For security reasons, any increases made for transaction limit will be updated after the 0 hours cooling-off period but decreases for transaction limit will be updated immediately."
        await expect(TopUpReviewPage.important_noted_remark).toHaveText(expected_importantremark);

        allureReporter.addStep("Verify top up value");
        const expected_topupvalue = await TopUpReviewPage.top_up_value.getText();
        await expect(TopUpReviewPage.top_up_value).toHaveText(expected_topupvalue);

        allureReporter.addStep("Click Submit button");
        await browser.pause(1000);
        await TopUpReviewPage.submit_button.click()

        allureReporter.addStep("Verify Successful Message");
        await browser.pause(1000);
        const expected_successfulmessage1 = "Yay!"
        await expect(SuccessfulChangedMessage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully updated your transaction limit."
        await expect(SuccessfulChangedMessage.successful_message_2).toHaveText(expected_successfulmessage2);

        await browser.pause(2000);
     });
}); 