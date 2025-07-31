const PAYMENT_NICKNAME_FIELD = '//*[@id="__next"]/div/div[4]/div[2]/div/form/div[1]/div[5]/div[1]/div[1]'
const NUMBER_ACCOUNT_FIELD = '/html/body/div[1]/div/div[5]/div[2]/div/form/div[1]/div[5]/div[2]/div[1]/input'
const NUMBER_ACCOUNT_ERROR_MESSAGE = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[5]/div[2]/div[2]/p'
const IC_NUMBER_FIELD = '//*[@id="__next"]/div/div[4]/div[2]/div/form/div[1]/div[6]/div[1]/div[1]'
const PURPOSE_FIELD = '//*[@id="__next"]/div/div[4]/div[2]/div/form/div[1]/div[6]/div[2]/div[1]'
const AMOUNT_IN_MYR_FIELD = '//*[@id="__next"]/div/div[4]/div[2]/div/form/div[1]/div[7]/div/div[1]'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[4]/div[2]/div/form/div[2]/div/div[2]/div/div/button'
const X_BUTTON = '//*[@id="__next"]/div/div[5]/div[1]/div/div[3]/div'
const CANCEL_PAYMENT_NO_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[1]/button'
const CANCEL_PAYMENT_YES_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[2]/button'

class LTHPaymentDetailsPage{

    wait_until_screen_displayed(){
        $(PAYMENT_NICKNAME_FIELD).waitForDisplayed()
    }

    get payment_nickname_field(){
        return $(PAYMENT_NICKNAME_FIELD)
    }

    get number_account_field(){
        return $(NUMBER_ACCOUNT_FIELD)
    }

    get number_account_error_message(){
        return $(NUMBER_ACCOUNT_ERROR_MESSAGE)
    }

    get ic_number_field(){
        return $(IC_NUMBER_FIELD)
    }

    get purpose_field(){
        return $(PURPOSE_FIELD)
    }

    get amount_in_myr_field(){
        return $(AMOUNT_IN_MYR_FIELD)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get cancel_payment_no_button(){
        return $(CANCEL_PAYMENT_NO_BUTTON)
    }

    get cancel_payment_yes_button(){
        return $(CANCEL_PAYMENT_YES_BUTTON)
    }

}

export default new LTHPaymentDetailsPage()