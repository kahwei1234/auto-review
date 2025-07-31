import {VALID_CREDS_6} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import OffersAndPromotionsPage from '../../page-objects/Explore/MyRewards/OffersAndPromotionsPage.js';
import MyRewardPage from '../../page-objects/Explore/MyRewards/MyRewardPage.js';
import MyRewardDashboardPage from '../../page-objects/Explore/MyRewards/MyRewardDashboardPage.js';
import ExploreRewardsPage from '../../page-objects/Explore/MyRewards/ExploreRewardsPage.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Reward and Redemption',async () => {
    
    it('Explore button[My Rewards] from header entry point - Click redeem now button',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_6
        await LoginFlow.login_uat2(username,password)

        allureReporter.addStep("Click explore button");
        //Wait
        await browser.pause(4000);
        await HomePage.explore_button.click()

        allureReporter.addStep("Click my rewards link");
        //Wait
        await browser.pause(1000);
        await OffersAndPromotionsPage.my_rewards_link.click()

        allureReporter.addStep("Click view points history button");
        //Wait
        await browser.pause(1000);
        await MyRewardPage.view_points_history_button.click()

        allureReporter.addStep("Click redeem now button");
        //Wait
        await browser.pause(1000);
        await MyRewardDashboardPage.redeem_now_button.click()
        
        allureReporter.addStep("Verify explore rewards page title");
        //Wait
        await browser.pause(1000);
        const expected_explorerewardstitle = "Explore Rewards"
        await expect(ExploreRewardsPage.explore_rewards_title).toHaveText(expected_explorerewardstitle)

        //Wait
        await browser.pause(2000);
     });
}); 