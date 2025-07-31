const BACK_BUTTON = '//*[@id="__next"]/div/div[3]/div[1]/div/div[1]/div/div[1]/svg'
const CANCEL_BUTTON = "//p[text()='CANCEL']"
const CANCEL_NO_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[1]/button'
const CANCEL_YES_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[2]/button'
const SUBMIT_BUTTON = "//span[text()='SUBMIT']"
const TO_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const BANK_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[2]/div/div/div/div/div[1]/p[2]'
const PAYMENT_TYPE_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[2]/div/div/div/div/div[2]/p[2]'
const AMOUNT_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const RECIPIENT_REFERENCE_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const PAYMENT_DETAILS_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[2]/div/div/div/div/div[4]/div/div/div/div/div/p[2]'
const FUTURE_DATED_PAYMENT_FIELD = "//p[text()='FUTURE DATED PAYMENT']"
const TOTAL_PAYMENT = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[5]/div/div[1]/div/p[3]'

class ViaBankAccountPaymentReviewPage{

    wait_until_screen_displayed(){
        $(CANCEL_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SUBMIT_BUTTON).getText()
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

    get cancel_no_button(){
        return $(CANCEL_NO_BUTTON)
    }

    get cancel_yes_button(){
        return $(CANCEL_YES_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get to_field(){
        return $(TO_FIELD)
    }

    get bank_field(){
        return $(BANK_FIELD)
    }

    get payment_type_field(){
        return $(PAYMENT_TYPE_FIELD)
    }

    get amount_field(){
        return $(AMOUNT_FIELD)
    }

    get recipient_reference_field(){
        return $(RECIPIENT_REFERENCE_FIELD)
    }

    get payment_details_field(){
        return $(PAYMENT_DETAILS_FIELD)
    }

    get future_dated_payment_field(){
        return $(FUTURE_DATED_PAYMENT_FIELD)
    }

    get total_payment(){
        return $(TOTAL_PAYMENT)
    }
}
export default new ViaBankAccountPaymentReviewPage()