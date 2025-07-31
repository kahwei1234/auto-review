import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import SettingsPage from '../../page-objects/Settings/SettingsPage.js';
import SecurityPage from '../../page-objects/Settings/Security/SecurityPage.js';
import ChangeChallengeQuestionPage from '../../page-objects/Settings/Security/ChangeChallengeQuestionPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Update Challenge Question',async () => {
    
    it('Settings entry point - update challenge question',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click settings button");
        //Wait
        await browser.pause(4000);
        await HomePage.settings_button.click()

        allureReporter.addStep("Click security button");
        //Wait
        await browser.pause(2000);
        await SettingsPage.security_button.click()

        allureReporter.addStep("Click change challenge question button");
        //Wait
        await browser.pause(1000);
        await SecurityPage.change_challenge_question_button.click()

        /*
        allureReporter.addStep("Click and insert answer challenge question field");
        //Wait
        await browser.pause(1000);
        await SecurityPage.answer_challenge_question_field.click()
        await SecurityPage.answer_challenge_question.setValue('rhb')

        allureReporter.addStep("Click next button");
        //Wait
        await browser.pause(1000);
        await SecurityPage.answer_challenge_question_next_button.click()
        */
       
        allureReporter.addStep("Click challenge question dropdown");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.challenge_question_1_dropdown.click()

        allureReporter.addStep("Select question");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.question_options_a.click()

        allureReporter.addStep("Click answer field");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.answer_1_field.click()

        allureReporter.addStep("Insert answer");
        //Wait
        await browser.pause(2000);
        await ChangeChallengeQuestionPage.answer_1.setValue('rhb')

        allureReporter.addStep("Click challenge question dropdown");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.challenge_question_2_dropdown.click()

        allureReporter.addStep("Select question");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.question_options_b.click()

        allureReporter.addStep("Click answer field");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.answer_2_field.click()

        allureReporter.addStep("Insert answer");
        //Wait
        await browser.pause(2000);
        await ChangeChallengeQuestionPage.answer_2.setValue('rhb')

        allureReporter.addStep("Click challenge question dropdown");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.challenge_question_3_dropdown.click()

        allureReporter.addStep("Select question");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.question_options_c.click()

        allureReporter.addStep("Click answer field");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.answer_3_field.click()

        allureReporter.addStep("Insert answer");
        //Wait
        await browser.pause(2000);
        await ChangeChallengeQuestionPage.answer_3.setValue('rhb')

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(1000);
        await ChangeChallengeQuestionPage.submit_button.click()

        allureReporter.addStep("Pass secure plus");
        //Wait
        await browser.pause(13000);

        allureReporter.addStep("Verify successful message");
        //Wait
        await browser.pause(2000);
        const expected_successfulmessage1 = "Successful."
        await expect(ChangeChallengeQuestionPage.successful_message_1).toHaveText(expected_successfulmessage1);
        const expected_successfulmessage2 = "You've successfully changed your challenge question."
        await expect(ChangeChallengeQuestionPage.successful_message_2).toHaveText(expected_successfulmessage2);

        //Wait
        await browser.pause(5000);
     });
}); 