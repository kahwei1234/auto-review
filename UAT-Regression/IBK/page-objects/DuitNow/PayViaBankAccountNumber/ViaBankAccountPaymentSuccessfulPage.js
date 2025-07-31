const SUCCESSFUL_MESSAGE = '//*[@id="__next"]/div/div[2]/div[2]/div/div[1]/div/div/div/div[2]/h2'
const X_BUTTON = '//*[@id="__next"]/div/div[2]/div[1]/div/div[3]/div/svg'
const MAKE_NEW_PAYMENT_BUTTON = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[7]/div/div[2]/div/div[2]/button'
const RETURN_TO_HOME_BUTTON = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[7]/div/div[1]/div/div/p'
const RECEIPT_BUTTON = "//p[text()='RECEIPT']"
const VIEW_RECEIPT_BUTTON = "//p[text()='View Receipt']"
const DOWNLOAD_RECEIPT_BUTTON = "//p[text()='Download Receipt']"
const PRINT_RECEIPT_BUTTON = "//p[text()='Print Receipt']"
const TO_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[1]/div/div/div/div/div/p[2]'
const BANK_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[2]/div/div/div/div/div[1]/p[2]'
const PAYMENT_TYPE_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[2]/div/div/div/div/div[2]/p[2]'
const AMOUNT_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const RECIPIENT_REFERENCE_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const PAYMENT_DETAILS_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div/div[2]/div[4]/div[1]/div/div/div/div[4]/div/div/div/div/div/p[2]'
const FUTURE_DATED_PAYMENT = "//p[text()='FUTURE DATED PAYMENT']"

class ViaBankAccountPaymentSuccessfulPage{

    wait_until_screen_displayed(){
        $(SUCCESSFUL_MESSAGE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(X_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(MAKE_NEW_PAYMENT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(RETURN_TO_HOME_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(RECEIPT_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(VIEW_RECEIPT_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(TO_FIELD).getText()
    }

    get successful_message(){
        return $(SUCCESSFUL_MESSAGE)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get make_new_payment_button(){
        return $(MAKE_NEW_PAYMENT_BUTTON)
    }

    get return_to_home_button(){
        return $(RETURN_TO_HOME_BUTTON)
    }

    get receipt_button(){
        return $(RECEIPT_BUTTON)
    }

    get view_receipt_button(){
        return $(VIEW_RECEIPT_BUTTON)
    }

    get download_receipt_button(){
        return $(DOWNLOAD_RECEIPT_BUTTON)
    }

    get print_receipt_button(){
        return $(PRINT_RECEIPT_BUTTON)
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

    get future_dated_payment(){
        return $(FUTURE_DATED_PAYMENT)
    }

}

export default new ViaBankAccountPaymentSuccessfulPage()