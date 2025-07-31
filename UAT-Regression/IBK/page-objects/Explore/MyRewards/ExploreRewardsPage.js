const EXPLORE_REWARDS_TITLE = "//p[text()='Explore Rewards']"

class ExploreRewardsPage{

    wait_until_screen_displayed(){
        $(EXPLORE_REWARDS_TITLE).waitForDisplayed()
    }

    get explore_rewards_title(){
        return $(EXPLORE_REWARDS_TITLE)
    }

}

export default new ExploreRewardsPage();