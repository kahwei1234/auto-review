import {VALID_CREDS_25} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import UnitTrustPage from '../../../../page-objects/UnitTrust/UnitTrustPage.js';
const allureReporter = require('@wdio/allure-reporter').default


describe('[IBK] Unit Trust - verify currency code label for the (unrealised) Gain/Loss % value',async () => {
    
    it('Dashboard Card - Unit Trust',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_25
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click > button to see UT dashboard card");
        //Wait
        await browser.pause(5000);
        browser.takeScreenshot();
        await UnitTrustPage.next_button.click()
    
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()
       
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()

        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.click()
        browser.takeScreenshot();

        allureReporter.addStep("Scroll down");
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.next_button.scrollIntoView()
        browser.takeScreenshot();

        await browser.pause(1000);
        await UnitTrustPage.UTDashboard_Card.click()
        browser.takeScreenshot();

        await browser.pause(5000);
        browser.takeScreenshot();
        await UnitTrustPage.firstaccountlisting_page.click()

        allureReporter.addStep("Scroll Up");
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.third_account.scrollIntoView()
        
        await browser.pause(1000);
        await UnitTrustPage.allUT_label.scrollIntoView()

        await browser.pause(5000);
        browser.takeScreenshot();
        await UnitTrustPage.third_account.click()

        allureReporter.addStep("Scroll down to verify foreign Loss % value");
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.viewloss_percentages.scrollIntoView()
        browser.takeScreenshot();

        //Wait
        await browser.pause(5000);

        allureReporter.addStep("Click View Details");
        //Wait
        await browser.pause(1000);
        browser.takeScreenshot();
        await UnitTrustPage.view_details3.click()

        //verify Fund Risk Label
        allureReporter.addStep("Verify Fund Risk Label");
        //Wait 
        await browser.pause(1000);
        const expected_fundlabel = "Fund Risk Class"
        await expect(UnitTrustPage.risk_label3).toHaveText(expected_fundlabel);

        allureReporter.addStep("Scroll Down");
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.view_details3.scrollIntoView()
        browser.takeScreenshot();

        await browser.pause(5000);
        browser.takeScreenshot();
        await UnitTrustPage.second_account2.click()

        allureReporter.addStep("Scroll Down");
        //Wait
        await browser.pause(1000);
        await UnitTrustPage.account_holder2.scrollIntoView()
        browser.takeScreenshot();

        // verify Account Holder Name
        allureReporter.addStep("Verify account holder name ");
        //Wait
        await browser.pause(5000);
        const expected_accountholder = "Account Holder Name"
        await expect(UnitTrustPage.account_holder2).toHaveText(expected_accountholder);
 
     });
}); 