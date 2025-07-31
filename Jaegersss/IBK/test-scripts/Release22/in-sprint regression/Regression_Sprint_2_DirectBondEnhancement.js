import {VALID_CREDS_26} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import AccountPage from '../../../../page-objects/AccountPage.js';
import AllDirectBondAccountsPage from '../../../../page-objects/DirectBonds/AllDirectBondAccountsPage.js';
import DirectBondPage from '../../../../page-objects/DirectBonds/DirectBondPage.js';

const allureReporter = require('@wdio/allure-reporter').default

describe('In-Sprint Regression - Direct Bond Enhancement',async () => {
    
    it('Direct Bond - Regression for In-Sprint 1',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Step 1: Login to IBK with correct credential");
        const {username,password} = VALID_CREDS_26
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Step 2: Click arrow to find Direct Bond card");
        //Wait
        await browser.pause(3000);
        await browser.takeScreenshot();
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()
        await MainPage.arrow_more.click()

        allureReporter.addStep("Step 3: Verify the unrealised gain or loss amount and percentage pill currency code on dashboard card");
        //Wait
        await browser.pause(3000);
        await browser.takeScreenshot();
        await MainPage.direct_bond_unrealised_gain_loss_percentage_currency.isDisplayed()

        allureReporter.addStep("Step 4: Click Account button on header");
        //Wait
        await browser.pause(3000);
        await MainPage.accounts_button.click()

        allureReporter.addStep("Step 5: Click on Direct Bond from submenu");
        //Wait
        await browser.pause(5000);
        await AccountPage.direct_bond_button.click()
        await browser.pause(5000);

        allureReporter.addStep("Step 6: Verify the unrealised gain or loss amount and percentage pill local currency code is displayed for direct bond account");
        //Wait
        await browser.pause(3000);
        await browser.takeScreenshot();
        await browser.pause(3000);
        await AllDirectBondAccountsPage.all_direct_unrealised_gain_loss_percentage_local_currency.isDisplayed()
        await browser.pause(5000);

        allureReporter.addStep("Step 7: Scoll down");
        //Wait
        await browser.pause(5000);
        await AllDirectBondAccountsPage.detail_account_nickname.scrollIntoView()

        allureReporter.addStep("Step 8: Verify the unrealised gain or loss amount and percentage pill local currency code is displayed for holding account");
        //Wait
        await browser.pause(3000);
        await AllDirectBondAccountsPage.unrealised_gan_loss_percentage_local_currency_ha1.isDisplayed()

         //Take screenshot
         await browser.takeScreenshot();
         await browser.pause(3000);
         
        allureReporter.addStep("Step 9: Verify the unrealised gain or loss amount and percentage pill foreign currency code is displayed for holding account");
        //Wait
        await browser.pause(3000);
        await AllDirectBondAccountsPage.unrealised_gan_loss_percentage_foreign_currency_ha1.isDisplayed()
        
        allureReporter.addStep("Step 10: Click on View Details button on first holding direct bond account");
        //Wait
        await browser.pause(2000);
        await AllDirectBondAccountsPage.view_details_button.click()

        allureReporter.addStep("Step 11: Verify Bond/Sukuk Risk Class field");
        //Wait
        await browser.pause(2000);
        await AllDirectBondAccountsPage.bond_sukuk_risk_class.isDisplayed()

        //Take screenshot
        await browser.takeScreenshot();
        await browser.pause(3000);

        allureReporter.addStep("Step 12: Verify Accued Interest/Profit field");
        //Wait
        await browser.pause(3000);
        await AllDirectBondAccountsPage.accrued_interest_profit_as_of_date.isDisplayed()

        allureReporter.addStep("Step 13: Click Home button on header");
        //Wait
        await browser.pause(3000);
        await AllDirectBondAccountsPage.home_button.click()

        allureReporter.addStep("Step 14: Click More Account dropdown button and select Direct Bond");
        //Wait
        await browser.pause(3000);
        await MainPage.more_accounts_dropdown.click()
        await browser.pause(3000);
        await browser.takeScreenshot();
        await browser.pause(3000);
        await MainPage.more_direct_bond.click()

        allureReporter.addStep("Step 15: Verify the unrealised loss amount and percentage pill currency code");
        //Wait
        await browser.pause(3000);
        await browser.takeScreenshot();
        await browser.pause(3000);
        await DirectBondPage.unrealised_gan_loss_percentage_currency.isDisplayed()

        allureReporter.addStep("Step 16: Click third account");
        //Wait
        await browser.pause(3000);
        await browser.takeScreenshot();
        await browser.pause(3000);
        await DirectBondPage.db_account_3.click()

        allureReporter.addStep("Step 17: Scoll down");
        //Wait
        await browser.pause(5000);
        await AllDirectBondAccountsPage.holdings_button.scrollIntoView()

        //Take screenshot
        await browser.takeScreenshot();
        await browser.pause(3000);

        allureReporter.addStep("Step 18: Verify Account Holder name");
        //Wait
        await browser.pause(3000);
        await AllDirectBondAccountsPage.detail_account_holder_name.isDisplayed() 

        //Wait
        await browser.pause(3000);
     });
}); 