import {VALID_CREDS_3} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountPage from '../../page-objects/AccountPage.js';
import AllDirectBondAccountsPage from '../../page-objects/DirectBonds/AllDirectBondAccountPage/AllDirectBondAccountsPage.js'
import HoldingTab from '../../page-objects/DirectBonds/AllDirectBondAccountPage/HoldingTab.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Direct Bond',async () => {
    
    it('Accounts from header entry point - Verify holding tab',async () => {

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

        allureReporter.addStep("Scroll down");
        await browser.pause(1000);
        await browser.scroll(0, 500)

        allureReporter.addStep("Verify Holding Account percentage pill");
        await browser.pause(1000);
        const expected_positivepercentagepillvalue = await HoldingTab.first_h_positive_percentage_pill.getText();
        await expect(HoldingTab.first_h_positive_percentage_pill).toHaveText(expected_positivepercentagepillvalue);
        const expected_negativepercentagepillvalue = await HoldingTab.first_h_negative_percentage_pill.getText();
        await expect(HoldingTab.first_h_negative_percentage_pill).toHaveText(expected_negativepercentagepillvalue);

        allureReporter.addStep("Verify Holding Details");
        const expected_inficativebondsukukprice = "Indicative Bond/Sukuk Price"
        await expect(HoldingTab.first_h_indicative_bond_sukuk_price).toHaveText(expected_inficativebondsukukprice);
        const expected_holdingtotalinvestmentamount = "Total Investment Amount"
        await expect(HoldingTab.first_h_total_investment_amount).toHaveText(expected_holdingtotalinvestmentamount);

        allureReporter.addStep("Click view details button");
        await browser.pause(1000);
        await HoldingTab.first_h_view_details_button.click()

        allureReporter.addStep("Verify Bond ISIN Code Details");
        await browser.pause(1000);
        const expected_bondisincode = "Bond ISIN Code"
        await expect(HoldingTab.first_h_bond_isin_code).toHaveText(expected_bondisincode);
        const expected_bondisincodevalue = await HoldingTab.first_h_bond_isin_code_value.getText();
        await expect(HoldingTab.first_h_bond_isin_code_value).toHaveText(expected_bondisincodevalue);

        allureReporter.addStep("Verify Bond/Sukuk Risk Details");
        const expected_bondsukukriskclass = "Bond/Sukuk Risk Class"
        await expect(HoldingTab.first_h_bond_sukuk_risk_class).toHaveText(expected_bondsukukriskclass);
        const expected_bondsukukriskvalue = await HoldingTab.first_h_bond_sukuk_risk_class_value.getText();
        await expect(HoldingTab.first_h_bond_sukuk_risk_class_value).toHaveText(expected_bondsukukriskvalue);

        allureReporter.addStep("Verify Coupon/Profit Payment Frequency Details");
        const expected_couponprofitpaymentfrequency = "Coupon/Profit Payment Frequency"
        await expect(HoldingTab.first_h_coupon_profit_payment_frequency).toHaveText(expected_couponprofitpaymentfrequency);
        const expected_couponprofitpaymentfrequencyvalue = await HoldingTab.first_h_coupon_profit_payment_frequency_value.getText();
        await expect(HoldingTab.first_h_coupon_profit_payment_frequency_value).toHaveText(expected_couponprofitpaymentfrequencyvalue);
        
        allureReporter.addStep("Verify Coupon/Profit Rate Details");
        const expected_couponprofitrate = "Coupon/Profit Rate (%)"
        await expect(HoldingTab.first_h_coupon_profit_rate).toHaveText(expected_couponprofitrate);
        const expected_couponprofitratevalue = await HoldingTab.first_h_coupon_profit_rate_value.getText();
        await expect(HoldingTab.first_h_coupon_profit_rate_value).toHaveText(expected_couponprofitratevalue);
        
        allureReporter.addStep("Verify Next Callable Date/Maturity Date Details");
        const expected_nextcallabledatematuritydate = "Next Callable Date/Maturity Date"
        await expect(HoldingTab.first_h_next_callable_date_maturity_date).toHaveText(expected_nextcallabledatematuritydate);
        const expected_nextcallabledatematuritydatevalue = await HoldingTab.first_h_next_callable_date_maturity_date_value.getText();
        await expect(HoldingTab.first_h_next_callable_date_maturity_date_value).toHaveText(expected_nextcallabledatematuritydatevalue);
        
        allureReporter.addStep("Verify Coupon/Profit Date Details");
        const expected_nextcouponprofitdate = "Next Coupon/Profit Date"
        await expect(HoldingTab.first_h_next_coupon_profit_date).toHaveText(expected_nextcouponprofitdate);
        const expected_couponprofitdatevalue = await HoldingTab.first_h_next_coupon_profit_date_value.getText();
        await expect(HoldingTab.first_h_next_coupon_profit_date_value).toHaveText(expected_couponprofitdatevalue);
       
        allureReporter.addStep("Verify Total Coupon/Profit Paid Details");
        const expected_totalcouponprofitpaid = "Total Coupon/Profit Paid"
        await expect(HoldingTab.first_h_total_coupon_profit_paid).toHaveText(expected_totalcouponprofitpaid);
        const expected_totalcouponprofitpaidvalue = await HoldingTab.first_h_total_coupon_profit_paid_value.getText();
        await expect(HoldingTab.first_h_total_coupon_profit_paid_value).toHaveText(expected_totalcouponprofitpaidvalue);
        
        allureReporter.addStep("Verify Nominal Value Details");
        const expected_nominalvalue = "Nominal Value"
        await expect(HoldingTab.first_h_nominal_value).toHaveText(expected_nominalvalue);
        const expected_nominalvaluevalue = await HoldingTab.first_h_nominal_value_v.getText();
        await expect(HoldingTab.first_h_nominal_value_v).toHaveText(expected_nominalvaluevalue);

        allureReporter.addStep("Verify Accrued Interest Profit Date Details");
        const expected_accruedinterestprofit = await HoldingTab.first_h_accrued_interest_profit_as_of.getText();
        await expect(HoldingTab.first_h_accrued_interest_profit_as_of).toHaveText(expected_accruedinterestprofit);
        const expected_accruedinterestprofitvalue = await HoldingTab.first_h_accrued_interest_profit_as_of_value.getText();
        await expect(HoldingTab.first_h_accrued_interest_profit_as_of_value).toHaveText(expected_accruedinterestprofitvalue);

        await browser.pause(2000);
     });
}); 