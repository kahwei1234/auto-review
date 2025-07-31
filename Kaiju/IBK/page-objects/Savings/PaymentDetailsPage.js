const FROM_FIELD = "//p[text()='From']"
const TO_FIELD = "//p[text()='To']"
const TO_DETAIL = '//*[@id="__next"]/div/div[1]/div[2]/div/div/div/div/div[2]/div/div/div/div/div/p[2]'
const BANK_FIELD = "//p[text()='Bank']"
const BANK_DETAIL = '//*[@id="__next"]/div/div[2]/div[2]/div/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const PAYMENT_TYPE_FIELD = "//p[text()='Payment Type']"
const PAYMENT_TYPE_DETAIL = '//*[@id="__next"]/div/div[2]/div[2]/div/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const AMOUNT_FIELD = "//p[text()='Amount']"
const RECIPIENT_REFERENCE_FIELD = "//p[text()='Recipient Reference']"
const RECIPIENT_REFERENCE_DETAIL = '//*[@id="__next"]/div/div[2]/div[2]/div/div/div/div/div[4]/div/div/div/div/div[2]/p[2]'
const PAYMENT_DETAILS_FIELD = "//p[text()='Payment Details (Optional)']"
const PAYMENT_DETAILS_DETAIL = '//*[@id="__next"]/div/div[2]/div[2]/div/div/div/div/div[5]/div/div/div/div/div/p[2]'
const BACK_BUTTON = '//*[@id="__next"]/div/div[2]/div[1]/div[1]/div/div[1]'
const DELETE_BUTTON = "//span[text()='Delete']"
const DELETE_PAGE_TITLE = '//*[@id="mdc-dialog"]/div[1]/div/div/div[1]/div[2]/p'
const DELETE_PAGE_COPYWRITING1 = '//*[@id="mdc-dialog"]/div[1]/div/div/div[1]/div[3]/p/div/p[1]'
const DELETE_PAGE_COPYWRITING2 = '//*[@id="mdc-dialog"]/div[1]/div/div/div[1]/div[3]/p/div/p[2]'
const DELETE_YES_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div[2]/div/div[2]/button'
const DELETE_NO_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div[2]/div/div[1]/button'
const DELETE_SUCCESSFUL_MESSAGE = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/h2'

class PaymentDetailsPage{

    wait_until_screen_displayed(){
        $(FROM_FIELD).waitForDisplayed()
    }

    get from_field(){
        return $(FROM_FIELD)
    }

    get to_field(){
        return $(TO_FIELD)
    }

    get to_detail(){
        return $(TO_DETAIL)
    }

    get bank_field(){
        return $(BANK_FIELD)
    }

    get bank_detail(){
        return $(BANK_DETAIL)
    }

    get payment_type_field(){
        return $(PAYMENT_TYPE_FIELD)
    }

    get payment_type_detail(){
        return $(PAYMENT_TYPE_DETAIL)
    }

    get amount_field(){
        return $(AMOUNT_FIELD)
    }

    get recipient_reference_field(){
        return $(RECIPIENT_REFERENCE_FIELD)
    }

    get recipient_reference_detail(){
        return $(RECIPIENT_REFERENCE_DETAIL)
    }

    get payment_details_field(){
        return $(PAYMENT_DETAILS_FIELD)
    }

    get payment_details_detail(){
        return $(PAYMENT_DETAILS_DETAIL)
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get delete_button(){
        return $(DELETE_BUTTON)
    }

    get delete_page_title(){
        return $(DELETE_PAGE_TITLE)
    }

    get delete_page_copywriting1(){
        return $(DELETE_PAGE_COPYWRITING1)
    }

    get delete_page_copywriting2(){
        return $(DELETE_PAGE_COPYWRITING2)
    }

    get delete_yes_button(){
        return $(DELETE_YES_BUTTON)
    }

    get delete_no_button(){
        return $(DELETE_NO_BUTTON)
    }

    get delete_successful_message(){
        return $(DELETE_SUCCESSFUL_MESSAGE)
    }
}

export default new PaymentDetailsPage();