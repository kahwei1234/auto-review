const PAYMENT_REVIEW_TITLE = '//p[contains(.,"Payment Review")]'
const X_BUTTON = '(//p[contains(.,"Payment Review")]/parent::div/parent::div/preceding-sibling::div/child::div)[3]/child::img'
const SUBMIT_BUTTON = '//p[contains(.,"Submit")]/parent::div/parent::button'

class PaymentReviewPage{

    wait_until_screen_displayed(){
        $(PAYMENT_REVIEW_TITLE).waitForDisplayed()
    }

    get payment_review_title(){
        return $(PAYMENT_REVIEW_TITLE)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }
}

export default new PaymentReviewPage();