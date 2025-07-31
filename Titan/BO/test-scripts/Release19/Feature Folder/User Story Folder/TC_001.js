import {BO_VALID_CREDS_1,VALID_CREDS_11} from '../../../../../test-data/userAccount.js'
import BOLoginFlow from '../../../../../test-flows/BackOffice/BOLoginFlow.js';
import BOMainPage from '../../../../../page-objects/BackOffice/BOMainPage.js';
import ActivitiesPage from '../../../../../page-objects/BackOffice/ActivitiesPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[BO] Provide Assistance: Credit Card Payment for Own Account Payment Scheduling (Recurring): Credit Card',async () => {
    
    it('[TC01] Verify Credit card Payment - Today date : Own Account Payment: Credit card',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {staffid,staffpassword} = BO_VALID_CREDS_1
        await BOLoginFlow.BOlogin_sit2(staffid,staffpassword)

        allureReporter.addStep("Click provide assistance");
        //Wait
        await browser.pause(3000);
        await BOMainPage.provide_assistance_button.click()

        allureReporter.addStep("Click activities button");
        //Wait
        await browser.pause(1000);
        await BOMainPage.activities_button.click()

        allureReporter.addStep("Click search field");
        //Wait
        await browser.pause(1000);
        await BOMainPage.activities_search_field.click()

        allureReporter.addStep("Search user");
        const {username} = VALID_CREDS_11
        //Wait
        await browser.pause(2000);     
        await BOMainPage.activities_search.setValue(username)
        await browser.keys("\uE007");

        allureReporter.addStep("Click 1st user");
        //Wait
        await browser.pause(1000);
        await BOMainPage.first_cell.click()

        allureReporter.addStep("Click event category dropdown");
        //Wait
        await browser.pause(1000);
        await ActivitiesPage.event_category_dropdown.click()

        allureReporter.addStep("Click search button");
        //Wait
        await browser.pause(1000);     
        await ActivitiesPage.event_dropdown_search.click()

        allureReporter.addStep("Insert value to search");
        //Wait
        await browser.pause(1000);     
        await ActivitiesPage.event_dropdown_search.setValue('Credit Card Payment')

        allureReporter.addStep("Click credit card checkbox");
        //Wait
        await browser.pause(1000);
        await ActivitiesPage.credit_card_checkbox.click()

        allureReporter.addStep("Click apply button");
        //Wait
        await browser.pause(1000);
        await ActivitiesPage.apply_button.click()

        allureReporter.addStep("Verify event name");
        //Wait
        await browser.pause(1000);
        const expected_eventname = "Credit Card Payment"
        await expect(ActivitiesPage.event_value).toHaveText(expected_eventname);

        allureReporter.addStep("Verify event name");
        //Wait
        await browser.pause(1000);
        const expected_scheduletype = "Schedule Type : Immediate"
        await expect(ActivitiesPage.credit_card_payment_schedule_type).toHaveText(expected_scheduletype)
        
        allureReporter.addStep("Verify channel");
        const expected_channel = "DIB"
        await expect(ActivitiesPage.channel_value).toHaveText(expected_channel)

        allureReporter.addStep("Verify status");
        const expected_status = "Success"
        await expect(ActivitiesPage.status_value).toHaveText(expected_status)

        allureReporter.addStep("Click event name");
        //Wait
        await browser.pause(1000);
        await ActivitiesPage.event_value.click()

        allureReporter.addStep("Verify status code");
        const expected_statuscode = "10000"
        await expect(ActivitiesPage.detail_status_code).toHaveText(expected_statuscode)

        allureReporter.addStep("Verify status description");
        const expected_statusdescription = "Your payment is successfully made."
        await expect(ActivitiesPage.detail_status_description).toHaveText(expected_statusdescription)

        allureReporter.addStep("Verify status summary");
        const expected_statussummary = "Success"
        await expect(ActivitiesPage.detail_status_summary).toHaveText(expected_statussummary)

        //Wait
        await browser.pause(3000);
     });
}); 