const SUCCESSFUL_MESSAGE = '//*[@id="__next"]/div/div[1]/div[2]/div[1]/div/div/div[2]/p'
const X_BUTTON = '//*[@id="__next"]/div/div[1]/div[1]/div/div/div[3]/div/div/svg'
const MAKE_NEW_PAYMENT_BUTTON = '//*[@id="__next"]/div/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/button'
const RETURN_TO_HOME_BUTTON = '//*[@id="__next"]/div/div[1]/div[2]/div[4]/div/div[1]/div/div/p'
const RECEIPT_BUTTON = '//*[@id="__next"]/div/div[1]/div[2]/div[4]/div/div[2]/div/div[1]/div/div/div/p'

class MortgagePaymentSuccessfulPage{

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

}

export default new MortgagePaymentSuccessfulPage()