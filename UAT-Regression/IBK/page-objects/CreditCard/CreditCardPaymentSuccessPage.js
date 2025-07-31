const SUCCESSFUL_MESSAGE = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div/div[2]/p'
const AMOUNT = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div[4]/div/div/div/div/div[2]/div/div/div/div/div/p[2]'
const RECURRING_DESCRIPTION = '//*[@id="__next"]/div/div[2]/div[2]/div[3]/div[5]/div[2]/div/div/div/div[2]/div/div/div/div/div/p[2]'
const RETURN_TO_HOME = '//*[@id="__next"]/div/div[2]/div[2]/div[5]/div/div[1]/div/div/p'
const MAKE_NEW_PAYMENT_BUTTON = "//span[text()='MAKE NEW PAYMENT']"

class CreditCardPaymentSuccessPage{

    wait_until_screen_displayed(){
        $(SUCCESSFUL_MESSAGE).waitForDisplayed()
    }

    get successful_message(){
        return $(SUCCESSFUL_MESSAGE)
    }

    get amount(){
        return $(AMOUNT)
    }

    get recurring_description(){
        return $(RECURRING_DESCRIPTION)
    }

    get return_to_home(){
        return $(RETURN_TO_HOME)
    }

    get make_new_payment_button(){
        return $(MAKE_NEW_PAYMENT_BUTTON)
    }
    
}

export default new CreditCardPaymentSuccessPage();