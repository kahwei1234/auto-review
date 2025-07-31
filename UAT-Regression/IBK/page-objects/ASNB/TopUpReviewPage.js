const RELATIONSHIP_WITH_MEMBER_DETAIL = '//*[@id="__next"]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const REASON_DETAIL = '//*[@id="__next"]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const FUND_NAME_DETAIL = '//*[@id="__next"]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/div/div/div/div[4]/div/div/div/div/div[1]/p[2]'
const SOURCE_OF_FUND_DETAIL = '//*[@id="__next"]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/div/div/div/div[5]/div/div/div/div/div/p[2]/p'

class TopUpReviewPage{

    wait_until_screen_displayed(){
        $(RELATIONSHIPWITHMEMBER_DETAIL).waitForDisplayed()
    }

    get relationship_with_member_detail(){
        return $(RELATIONSHIP_WITH_MEMBER_DETAIL)
    }

    get reason_detail(){
        return $(REASON_DETAIL)
    }

    get fund_name_detail(){
        return $(FUND_NAME_DETAIL)
    }

    get source_of_fund_detail(){
        return $(SOURCE_OF_FUND_DETAIL)
    }

}

export default new TopUpReviewPage();