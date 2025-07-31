const MY_REWARDS_DASHBOARD_TITLE = "//p[text()='My Rewards Dashboard']"
const REDEEM_NOW_BUTTON = "//span[text()='Redeem Now']"

class MyRewardDashboardPage{

    wait_until_screen_displayed(){
        $(MY_REWARDS_DASHBOARD_TITLE).waitForDisplayed()
    }

    get my_rewards_dashboard_title(){
        return $(MY_REWARDS_DASHBOARD_TITLE)
    }

    get redeem_now_button(){
        return $(REDEEM_NOW_BUTTON)
    }

}

export default new MyRewardDashboardPage();