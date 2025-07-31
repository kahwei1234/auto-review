import {VALID_CREDS_4} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import GetSupportPage from '../../page-objects/GetSupport/GetSupportPage.js';
import ContactRHBCustomerServicePage from '../../page-objects/SwitchWindow/ContactRHBCustomerServicePage.js';
import FeedbackPage from '../../page-objects/Feedback/FeedbackPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Service Request',async () => {
    
    it('Get support entry point - Verify details',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_4
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click get support button");
        //Wait
        await browser.pause(2000);
        await HomePage.get_support_button.click()

        allureReporter.addStep("Scroll to feedback button");
        //Wait
        await browser.pause(2000);
        await GetSupportPage.submit_feedback_button.scrollIntoView()

        allureReporter.addStep("Click submit feedback bottom");
        //Wait
        await browser.pause(2000);
        await GetSupportPage.submit_feedback_button.click()

        allureReporter.addStep("Click proceed bottom");
        //Wait
        await browser.pause(2000);
        await GetSupportPage.proceed_button.click()

        allureReporter.addStep("Switch to contact RHB customer service window");
        //Wait
        await browser.pause(2000);
        await browser.switchWindow('https://www.rhbgroup.com/personal/banking-methods/contact-us/index.html')

        allureReporter.addStep("Click instant apply button");
        //Wait
        await browser.pause(2000);
        await ContactRHBCustomerServicePage.instant_apply_button.click()

        allureReporter.addStep("Switch back to parent window");
        //Wait
        await browser.pause(2000);
        await browser.switchWindow('https://172.30.79.34:8008/my/feedback')

        allureReporter.addStep("Verify message 1");
        //Wait
        await browser.pause(2000);
        const expected_message1 = "See you soon!"
        await expect(FeedbackPage.message_1).toHaveText(expected_message1)

        allureReporter.addStep("Verify message 2");
        const expected_message2 = "Your feedback helps us to serve you better. Tell us what you think!"
        await expect(FeedbackPage.message_2).toHaveText(expected_message2)

        allureReporter.addStep("Verify message 3");
        const expected_message3 = "HOW DID WE DO?"
        await expect(FeedbackPage.message_3).toHaveText(expected_message3)
        
        //Wait
        await browser.pause(2000);
     });
}); 