import {VALID_CREDS_7} from '../../../../test-data/userAccount.js';
import LoginFlow from '../../../../test-flows/LoginFlow.js';
import MainPage from '../../../../page-objects/MainPage.js';
import MoreFeaturesPage from '../../../../page-objects/MoreFeatures/MoreFeaturesPage.js';
import GetInstantQuotationPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/GetInstantQuotationPage.js';
import BusinessPage from '../../../../page-objects/MoreFeatures/MotorInsurance/Get Instant Quotation Page/BusinessPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK - Motor Insurance] Get Instant Quotation (Individual) | Form',async () => {
    
    it('[TC01] More button - Verify copywritings, privacy notes link and contact us link ',async () => {

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

        allureReporter.addStep("Click business tab");
        //Wait
        await browser.pause(1000);
        await GetInstantQuotationPage.business_tab.click()

        allureReporter.addStep("Scroll to bottom");
        //Wait
        await browser.pause(1000);
        await BusinessPage.privacy_notes_copywriting_2.scrollIntoView()

        allureReporter.addStep("Verify contact us copywriting");
        //Wait
        await browser.pause(1000);
        const expected_contactuscopywriting = "Our dedicated support team is here to address any concerns you may have."
        await expect(BusinessPage.contact_us_copywriting_1).toHaveText(expected_contactuscopywriting)

        allureReporter.addStep("Verify privacy notes copywriting");
        const expected_privacynotescopywriting = "By clicking Next, I confirm I have read and understood the document below."
        await expect(BusinessPage.privacy_notes_copywriting_1).toHaveText(expected_privacynotescopywriting)

        allureReporter.addStep("Click privacy notes link");
        //Wait
        await browser.pause(1000);
        await BusinessPage.privacy_notes_copywriting_2.click()

        allureReporter.addStep("Switch to new tab");
        //Wait
        await browser.pause(1000);
        await browser.switchWindow('https://www.rhbgroup.com/-/media/Assets/Corporate-Website/Document/Insurance-General-Information-Documents/RHBI_Privacy_Notice_2017.pdf')
        
        allureReporter.addStep("Verify URL");
        //Wait
        await browser.pause(1000);
        await browser.url('https://www.rhbgroup.com/-/media/Assets/Corporate-Website/Document/Insurance-General-Information-Documents/RHBI_Privacy_Notice_2017.pdf')
        
        allureReporter.addStep("Switch back to motor insurance tab");
        //Wait
        await browser.pause(1000);
        await browser.switchWindow('https://172.30.79.32:8004/motorInsurance')

        allureReporter.addStep("Click contact us link");
        //Wait
        await browser.pause(1000);
        await BusinessPage.contact_us_copywriting_2.click()

        allureReporter.addStep("Switch to new tab");
        //Wait
        await browser.pause(1000);
        await browser.switchWindow('https://www.rhbinsurance.com.my/contact-us')
        
        allureReporter.addStep("Verify URL");
        //Wait
        await browser.pause(1000);
        await browser.url('https://www.rhbinsurance.com.my/contact-us')
        
        //Wait
        await browser.pause(3000);
     });
}); 