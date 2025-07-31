import {VALID_CREDS_7} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import FeedbackPage from '../../page-objects/Feedback/FeedbackPage.js';
import {pauseAndClick, pauseAndSetValue} from '../../../../util/pauseUtils.js';
import {expectToHaveTextWithLogging} from '../../../../util/expectUtils.js'
import { runStepWithScreenshot } from '../../../../util/reportUtils.js';
//const {runStepWithScreenshot} = require('../../../../util/reportUtils.js');

describe('[IBK] Feedback',async () => {
    
    it('Logout entry point - Submit feedback and verify comment',async () => {

        await runStepWithScreenshot("Maximum window", async () => {
        await browser.maximizeWindow()
        });

        await runStepWithScreenshot("Login", async () => {
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_uat2(username,password)
        });
/*
        
        //Wait
        await browser.pause(4000);
        await HomePage.download_rhb_X_button.click()
*/
        await runStepWithScreenshot("Step1 : Click logout button", async () => {
        await pauseAndClick(HomePage.logout_button, 3000);
        });
        
        await runStepWithScreenshot("Step2 : Click star 1", async () => {
        await pauseAndClick(FeedbackPage.star_1, 3000);
        });

        await runStepWithScreenshot("Step3 : Click star 2", async () => {
        await pauseAndClick(FeedbackPage.star_2);
        });

        
        await runStepWithScreenshot("Step4 : Click star 3", async () => {
        await pauseAndClick(FeedbackPage.star_3);
        });

        await runStepWithScreenshot("Step5 : Click star 4", async () => {
        await pauseAndClick(FeedbackPage.star_4);
        });

        await runStepWithScreenshot("Step6 : Click star 5", async () => {
        await pauseAndClick(FeedbackPage.star_5);
        });

        await runStepWithScreenshot("Step7 : Select describe your experience", async () => {
        await pauseAndClick(FeedbackPage.desc_navigation);
        });

        await runStepWithScreenshot("Step8 : Insert tell what you liked field", async () => {
        await pauseAndSetValue(FeedbackPage.tell_what_you_liked, 'Good');
        });

        await runStepWithScreenshot("Step9: Click submit button", async () => {
        await pauseAndClick(FeedbackPage.submit_button);
        });
        
        await runStepWithScreenshot("Step10 : Verify appreciate comment", async () => {
        const expectedText = "We appreciate your comments!";
        await expectToHaveTextWithLogging(FeedbackPage.appreciate_comment, expectedText, 1000);
        });

        //Wait
        await browser.pause(2000);
     });
}); 