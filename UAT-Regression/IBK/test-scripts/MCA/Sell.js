import {VALID_CREDS_17} from '../../test-data/user.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountsPage from '../../page-objects/Accounts/AccountsPage.js';
import MultiCurrencyMainPage from '../../page-objects/Accounts/MultiCurrency/MultiCurrencyMainPage.js';
import SellPage from '../../page-objects/Accounts/MultiCurrency/Sell/SellPage.js';
import SellReviewPage from '../../page-objects/Accounts/MultiCurrency/Sell/SellReviewPage.js';
import SellPurchasedReviewPage from '../../page-objects/Accounts/MultiCurrency/Sell/SellPurchasedReviewPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] MCA',async () => {
    
    it('Accounts Header entry point - Sell',async () => {

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

        allureReporter.addStep("Click sell button");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyMainPage.sell_button.click()

        allureReporter.addStep("Click sell field");
        //Wait
        await browser.pause(2000);
        await SellPage.sell_field.click()

        allureReporter.addStep("Select first precious metal");
        //Wait
        await browser.pause(2000);
        await SellPage.first_precious_metal.click()

        allureReporter.addStep("Click amount field");
        //Wait
        await browser.pause(2000);
        await SellPage.amount_in_gm_field.click()

        allureReporter.addStep("Insert amount");
        //Wait
        await browser.pause(2000);
        await SellPage.amount_in_gm.setValue('12')

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(2000);
        await SellPage.next_button.click()

        allureReporter.addStep("Verify from value");
        const expected_fromvalue = "Multi Currency Account • 6-14129-0003963-0"
        await expect(SellReviewPage.from).toHaveText(expected_fromvalue);

        allureReporter.addStep("Verify to value");
        const expected_tovalue = "New RHB MaxSave • 1-64227-0000736-1"
        await expect(SellReviewPage.to).toHaveText(expected_tovalue);

        /* Manually pass secure plus*/
        
        allureReporter.addStep("Verify purchase status");
        //Wait
        await browser.pause(3000);
        const expected_purchasestatus = "Purchase Successful"
        await expect(SellPurchasedReviewPage.purchase_status).toHaveText(expected_purchasestatus);

        allureReporter.addStep("Verify purchase message");
        //Wait
        await browser.pause(3000);
        const expected_purchasemessage = "Yay! Your transaction is successfully made"
        await expect(SellPurchasedReviewPage.purchase_message).toHaveText(expected_purchasemessage);
        
        //Wait
        await browser.pause(13000);
     });
}); 