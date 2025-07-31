const REVIEW_DETAILS_TITLE = '(//p[contains(.,"Review Details")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[6]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[6]/following-sibling::p'
const CHECK_DETAILS_TEXT = '//p[contains(.,"Please check your details before submitting.")]'
const TOP_UP_TITLE = '//p[contains(.,"Top Up")]'
const TOP_UP_VALUE = '//p[contains(.,"Top Up")]/following-sibling::p'
const SUBMIT_BUTTON = '(//span[contains(.,"SUBMIT")]/parent::span)[1]/parent::button'


class TopUpReviewPage{

    wait_until_screen_displayed(){
        $(REVIEW_DETAILS_TITLE).getText()
    }

    get review_details_title(){
        return $(REVIEW_DETAILS_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get check_details_text(){
        return $(CHECK_DETAILS_TEXT)
    }

    get top_up_title(){
        return $(TOP_UP_TITLE)
    }

    get top_up_value(){
        return $(TOP_UP_VALUE)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new TopUpReviewPage()