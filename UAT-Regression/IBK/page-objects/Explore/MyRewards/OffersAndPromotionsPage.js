const OFFERS_AND_PROMOTIONS_TITLE = "//p[text()='Offers and Promotions']"
const MY_REWARDS_LINK = "//div[text()='MY REWARDS']"


class OffersAndPromotionsPage{

    wait_until_screen_displayed(){
        $(OFFERS_AND_PROMOTIONS_TITLE).waitForDisplayed()
    }

    get offers_and_promotions_title(){
        return $(OFFERS_AND_PROMOTIONS_TITLE)
    }

    get my_rewards_link(){
        return $(MY_REWARDS_LINK)
    }

}

export default new OffersAndPromotionsPage();