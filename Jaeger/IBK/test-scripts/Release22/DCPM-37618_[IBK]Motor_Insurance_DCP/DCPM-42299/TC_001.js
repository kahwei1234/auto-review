import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Back Office Feature Toggle for Motor Insurance',async () => {
    
    it('[TC01] Motor Insurance: Turn OFF - Verify motore insurance button',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(1000);
        await MainPage.more_button.click()

        //Wait
        await browser.pause(3000);
     });
}); 