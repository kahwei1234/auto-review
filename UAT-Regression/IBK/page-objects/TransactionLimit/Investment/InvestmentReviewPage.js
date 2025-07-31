const REVIEW_DETAILS_TITLE = '(//p[contains(.,"Review Details")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[6]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[6]/following-sibling::p'
const CHECK_DETAILS_TEXT = '//p[contains(.,"Please check your details before submitting.")]'
const MULTI_CURRENCY_ACCOUNT_TITLE = '//p[contains(.,"Multi Currency Account")]'
const ASNB_OWN_ACCOUNT_TITLE = '//p[contains(.,"ASNB Own Account")]'
const ASNB_THIRD_PARTY_ACCOUNT_TITLE = '//p[contains(.,"ASNB Third Party Account")]'
const MULTI_CURRENCY_ACCOUNT_VALUE = '//p[contains(.,"Multi Currency Account")]/following-sibling::p'
const ASNB_OWN_ACCOUNT_VALUE = '//p[contains(.,"ASNB Own Account")]/following-sibling::p'
const ASNB_THIRD_PARTY_ACCOUNT_VALUE = '//p[contains(.,"ASNB Third Party Account")]/following-sibling::p'
const SUBMIT_BUTTON = '(//span[contains(.,"SUBMIT")]/parent::span)[1]/parent::button'


class InvestmentReviewPage{

    wait_until_screen_displayed(){
        $(REVIEW_DETAILS_TITLE).getText()
    }

    get review_details_title(){
        return $(REVIEW_DETAILS_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get check_details_text(){
        return $(CHECK_DETAILS_TEXT)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get multi_currency_account_title(){
        return $(MULTI_CURRENCY_ACCOUNT_TITLE)
    }

    get asnb_own_account_title(){
        return $(ASNB_OWN_ACCOUNT_TITLE)
    }

    get asnb_third_party_account_title(){
        return $(ASNB_THIRD_PARTY_ACCOUNT_TITLE)
    }
    
    get multi_currency_account_value(){
        return $(MULTI_CURRENCY_ACCOUNT_VALUE)
    }

    get asnb_own_account_value(){
        return $(ASNB_OWN_ACCOUNT_VALUE)
    }

    get asnb_third_party_account_value(){
        return $(ASNB_THIRD_PARTY_ACCOUNT_VALUE)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new InvestmentReviewPage()