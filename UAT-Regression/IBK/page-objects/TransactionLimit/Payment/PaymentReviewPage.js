const REVIEW_DETAILS_TITLE = '(//p[contains(.,"Review Details")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[6]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[6]/following-sibling::p'
const CHECK_DETAILS_TEXT = '//p[contains(.,"Please check your details before submitting.")]'
const OWN_ACCOUNT_TITLE = '//p[contains(.,"Own Account")]'
const OTHER_BILLERS_TITLE = '//p[contains(.,"Other Billers ")]'
const JOMPAY_TITLE = '//p[contains(.,"JomPAY")]'
const OWN_ACCOUNT_VALUE = '//p[contains(.,"Own Account")]/following-sibling::p'
const OTHER_BILLERS_VALUE = '//p[contains(.,"Other Billers")]/following-sibling::p'
const JOMPAY_VALUE = '//p[contains(.,"JomPAY")]/following-sibling::p'
const SUBMIT_BUTTON = '(//span[contains(.,"SUBMIT")]/parent::span)[1]/parent::button'


class PaymentReviewPage{

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

    get own_account_title(){
        return $(OWN_ACCOUNT_TITLE)
    }

    get own_account_value(){
        return $(OWN_ACCOUNT_VALUE)
    }
    
    get other_billers_title(){
        return $(OTHER_BILLERS_TITLE)
    }

    get other_billers_value(){
        return $(OTHER_BILLERS_VALUE)
    }

    get jompay_title(){
        return $(JOMPAY_TITLE)
    }

    get jompay_value(){
        return $(JOMPAY_VALUE)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new PaymentReviewPage()