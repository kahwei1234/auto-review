import {VALID_CREDS_17} from '../../test-data/user.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import InvestPage from '../../page-objects/Invest/InvestPage.js';
import MultiCurrencyAccountPage from '../../page-objects/Invest/MultiCurrencyAccount/MultiCurrencyAccountPage.js';
import BuyPage from '../../page-objects/Invest/MultiCurrencyAccount/BuyCurrency/BuyPage.js';
import BuyReviewPage from '../../page-objects/Invest/MultiCurrencyAccount/BuyCurrency/BuyReviewPage.js';
import BuyPurchasedReviewPage from '../../page-objects/Invest/MultiCurrencyAccount/BuyCurrency/BuyPurchasedReviewPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] MCA',async () => {
    
    it('Accounts Header entry point - Buy',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_17
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click invest button");
        //Wait
        await browser.pause(4000);
        await HomePage.invest_button.click()

        allureReporter.addStep("Click multi currency account button");
        //Wait
        await browser.pause(3000);
        await InvestPage.multi_currency_account_button.click()

        allureReporter.addStep("Click search field");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyAccountPage.search_field.click()

        allureReporter.addStep("Insert search field");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyAccountPage.search_field.setValue('silver')

        allureReporter.addStep("Click first currency");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyAccountPage.first_currency.click()

        allureReporter.addStep("Select account");
        //Wait
        await browser.pause(2000);
        await MultiCurrencyAccountPage.first_invest_account.click()

        allureReporter.addStep("Click conversion amount field");
        //Wait
        await browser.pause(2000);
        await BuyPage.conversion_amount_field.click()

        allureReporter.addStep("insert conversion amount");
        //Wait
        await browser.pause(2000);
        await BuyPage.conversion_amount.setValue('12')

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(2000);
        await BuyPage.next_button.click()

        allureReporter.addStep("Verify buy value");
        //Wait
        await browser.pause(3000);
        const expected_buyvalue = "Paper Silver"
        await expect(BuyReviewPage.buy).toHaveText(expected_buyvalue);

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(2000);
        await BuyReviewPage.submit_button.click()

        /* Manually pass secure plus*/

        allureReporter.addStep("Verify purchase status");
        //Wait
        await browser.pause(3000);
        const expected_purchasestatus = "Purchase Successful"
        await expect(BuyPurchasedReviewPage.purchase_status).toHaveText(expected_purchasestatus);

        allureReporter.addStep("Verify purchase message");
        //Wait
        await browser.pause(3000);
        const expected_purchasemessage = "Yay! Your transaction is successfully made"
        await expect(BuyPurchasedReviewPage.purchase_message).toHaveText(expected_purchasemessage);
        
        //Wait
        await browser.pause(12000);
     });
}); 