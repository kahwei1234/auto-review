const MY_REWARDS_TITLE = "//div[text()='My Rewards']"
const VIEW_POINTS_HISTORY_BUTTON = "//span[text()='View Points History']"

class MyRewardPage{

    wait_until_screen_displayed(){
        $(MY_REWARDS_TITLE).waitForDisplayed()
    }

    get my_rewards_title(){
        return $(MY_REWARDS_TITLE)
    }

    get view_points_history_button(){
        return $(VIEW_POINTS_HISTORY_BUTTON)
    }

}

export default new MyRewardPage();