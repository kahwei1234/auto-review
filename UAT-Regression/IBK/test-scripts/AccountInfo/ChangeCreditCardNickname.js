import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountsPage from '../../page-objects/Accounts/AccountsPage.js';
import CreditCardPage from '../../page-objects/CreditCard/CreditCardPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Challenge Credit Card Nickname',async () => {
    
    it('Change Credit Card Nickname',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click accounts button");
        //Wait
        await browser.pause(4000);
        await HomePage.accounts_button.click()

        allureReporter.addStep("Click credit card button");
        //Wait
        await browser.pause(1000);
        await AccountsPage.credit_card_button.click()

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await browser.scroll(0,200)

        allureReporter.addStep("Click account nickname edit button");
        //Wait
        await browser.pause(1000);
        await CreditCardPage.account_nickname_edit_button.click()

        allureReporter.addStep("Click account nickname field");
        //Wait
        await browser.pause(1000);
        await CreditCardPage.account_nickname_field.click()

        allureReporter.addStep("Backspace");
        for (let i = 0; i < 54; i++) {
            await browser.keys('Backspace');
        }

        allureReporter.addStep("Insert nickname");
        await browser.pause(1000);
        const randomSuffix = Math.floor(Math.random() * 1000);
        const newName = `TestNickName${randomSuffix}`;
        await CreditCardPage.account_nickname_field.setValue(newName);

        allureReporter.addStep("Click save button");
        //Wait
        await browser.pause(1000);
        await CreditCardPage.account_nickname_save_button.click()

        allureReporter.addStep("Verify new nickname");
        //Wait
        await browser.pause(1000);
        const expected_newnickname = await CreditCardPage.account_nickname.getText();
        await expect(CreditCardPage.account_nickname).toHaveText(expected_newnickname);
        
        //Wait
        await browser.pause(5000);
     });
}); 