import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import IndividualPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/IndividualPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC03] Verify privacy notes for Individual tab',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_sit2(username,password)

        allureReporter.addStep("Click more button");
        //Wait
        await browser.pause(1000);
        await MainPage.more_button.click()

        allureReporter.addStep("Click motor insurance button");
        //Wait
        await browser.pause(1000);
        await MoreFeaturesPage.motor_insurance.click()

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await IndividualPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Click privacy notes link");
        //Wait
        await browser.pause(1000);
        await IndividualPage.privacy_notes_copywriting_2.click()

        allureReporter.addStep("Switch to new tab");
        //Wait
        await browser.pause(1000);
        await browser.switchWindow('https://www.rhbgroup.com/-/media/Assets/Corporate-Website/Document/Insurance-General-Information-Documents/RHBI_Privacy_Notice_2017.pdf')
        
        allureReporter.addStep("Verify URL");
        //Wait
        await browser.pause(1000);
        await browser.url('https://www.rhbgroup.com/-/media/Assets/Corporate-Website/Document/Insurance-General-Information-Documents/RHBI_Privacy_Notice_2017.pdf')
        
        //Wait
        await browser.pause(3000);
     });
}); 