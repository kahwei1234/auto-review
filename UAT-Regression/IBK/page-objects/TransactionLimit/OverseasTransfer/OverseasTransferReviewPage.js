const REVIEW_DETAILS_TITLE = '(//p[contains(.,"Review Details")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[6]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[6]/following-sibling::p'
const CHECK_DETAILS_TEXT = '//p[contains(.,"Please check your details before submitting.")]'
const PAY_TO_ACCOUNT_TITLE = '//p[contains(.,"Pay to Account")]'
const PAY_TO_CASH_TITLE = '//p[contains(.,"Pay in Cash (Western Union)")]'
const PAY_TO_ACCOUNT_VALUE = '//p[contains(.,"Pay to Account")]/following-sibling::p'
const PAY_TO_CASH_VALUE = '//p[contains(.,"Pay in Cash (Western Union)")]/following-sibling::p'
const SUBMIT_BUTTON = '(//span[contains(.,"SUBMIT")]/parent::span)[1]/parent::button'


class OverseasTransferReviewPage{

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

    get pay_to_account_title(){
        return $(PAY_TO_ACCOUNT_TITLE)
    }

    get pay_to_cash_title(){
        return $(PAY_TO_CASH_TITLE)
    }
    
    get pay_to_account_value(){
        return $(PAY_TO_ACCOUNT_VALUE)
    }

    get pay_to_cash_value(){
        return $(PAY_TO_CASH_VALUE)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new OverseasTransferReviewPage()