const TO_VALUE = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const AMOUNT_VALUE = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div/div/div/p[2]'
const PAYMENT_DETAILS_VALUE = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div/div[3]/div/div/div/div/div/p[2]'
const FUTURE_DATED_PAYMENT_TITLE = "//div[text()='FUTURE DATED PAYMENT']"
const RECURRING_PAYMENT_COPYWRITING = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[3]/div[4]'
const BACK_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[1]/div/div/div[1]/div[1]/div'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[3]/div/div/div/div[2]/button'

class CreditCardPaymentReviewPage{

    wait_until_screen_displayed(){
        $(SUBMIT_BUTTON).waitForDisplayed()
    }

    get to_value(){
        return $(TO_VALUE)
    }

    get amount_value(){
        return $(AMOUNT_VALUE)
    }

    get payment_details_value(){
        return $(PAYMENT_DETAILS_VALUE)
    }

    get future_dated_payment_title(){
        return $(FUTURE_DATED_PAYMENT_TITLE)
    }

    get recurring_payment_copywriting(){
        return $(RECURRING_PAYMENT_COPYWRITING)
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    
}

export default new CreditCardPaymentReviewPage();