import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Back Office Feature Toggle for Motor Insurance',async () => {
    
    it('[TC02] Motor Insurance: Turn ON - Verify motore insurance button',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(1000);
        await MainPage.more_button.click()

        allureReporter.addStep("Verify motor insurance button");
        //Wait
        await browser.pause(1000);
        const expected_motorinsurancebutton = "Motor Insurance"
        await expect(MoreFeaturesPage.motor_insurance).toHaveText(expected_motorinsurancebutton)

        //Wait
        await browser.pause(3000);
     });
}); 