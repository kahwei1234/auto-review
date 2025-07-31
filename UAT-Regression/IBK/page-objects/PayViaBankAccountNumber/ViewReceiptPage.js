const X_BUTTON = '//*[@id="__next"]/div/div[1]/div[1]/div/div[3]/div/div'
const VIEW_RECEIPT_TITLE = '//*[@id="__next"]/div/div[2]/div[1]/div/div[2]/div/p'
const TO_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div[1]/div/div/div/div[1]/div/div/div/div/div/p[2]'
const BANK_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div/div/div/div/div[2]/div/div/div/div/div[1]/p[2]'
const PAYMENT_TYPE_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div/div/div/div/div[2]/div/div/div/div/div[2]/p[2]'
const AMOUNT_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const RECIPIENT_REFERENCE_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const PAYMENT_DETAILS_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div/div/div/div/div[4]/div/div/div/div/div/p[2]'
const FUTURE_DATED_PAYMENT = "//p[text()='FUTURE DATED PAYMENT']"
const DOWNLOAD_BUTTON = "//p[text()='DOWNLOAD']"
const PRINT_BUTTON = "//p[text()='PRINT']"

class ViewReceiptPage{

    wait_until_screen_displayed(){
        $(VIEW_RECEIPT_TITLE).waitForDisplayed()
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get view_receipt_title(){
        return $(VIEW_RECEIPT_TITLE)
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

    get download_button(){
        return $(DOWNLOAD_BUTTON)
    }

    get print_button(){
        return $(PRINT_BUTTON)
    }
}
export default new ViewReceiptPage()