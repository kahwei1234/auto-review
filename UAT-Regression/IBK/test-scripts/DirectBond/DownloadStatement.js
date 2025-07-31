import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountPage from '../../page-objects/AccountPage.js';
import AllDirectBondAccountsPage from '../../page-objects/DirectBonds/AllDirectBondAccountPage/AllDirectBondAccountsPage.js';
import StatementTab from '../../page-objects/DirectBonds/AllDirectBondAccountPage/StatementTab.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Direct Bond',async () => {
    
    it('Accounts from header entry point - Download statement',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_3
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click accounts button");
        await browser.pause(4000);
        await HomePage.accounts_button.click()

        allureReporter.addStep("Click direct bond button");
        await browser.pause(3000);
        await AccountPage.direct_bonds_button.click()

        allureReporter.addStep("Verify page title");
        await browser.pause(1000);
        const expected_directbondtitle = "All Direct Bond/Sukuk Accounts"
        await expect(AllDirectBondAccountsPage.all_direct_title_header).toHaveText(expected_directbondtitle);

        allureReporter.addStep("Verify Indicative Market Value");
        const expected_indicativemarketvalue = "Indicative Market Value"
        await expect(AllDirectBondAccountsPage.all_direct_indicative_market_value).toHaveText(expected_indicativemarketvalue);

        allureReporter.addStep("Verify Indicative Unrealised Gain/Loss");
        const expected_indicativeunrealisedgainloss = "Indicative Unrealised Gain/Loss"
        await expect(AllDirectBondAccountsPage.all_direct_indicative_unrealised_gain_loss).toHaveText(expected_indicativeunrealisedgainloss);

        allureReporter.addStep("Verify Total Investment Amount");
        const expected_totalinvestmentamount = "Total Investment Amount"
        await expect(AllDirectBondAccountsPage.all_direct_total_investment_amount).toHaveText(expected_totalinvestmentamount);

        allureReporter.addStep("Click 2nd tab account");
        await browser.pause(2000);
        await AllDirectBondAccountsPage.second_tab_account.click()

        allureReporter.addStep("Click statement tab");
        await browser.pause(2000);
        await AllDirectBondAccountsPage.statements_button.click()

        allureReporter.addStep("Scroll down");
        await browser.pause(1000);
        await browser.scroll(0, 300)

        allureReporter.addStep("Hover first statement");
        await browser.pause(1000);
        await StatementTab.first_statement.moveTo()

        allureReporter.addStep("Click download button");
        await browser.pause(1000);
        await StatementTab.first_statement_download_button.click()

        await browser.pause(2000);
     });
}); 