const CANCEL_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[3]/div/div/div/div[1]/button'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[3]/div/div/div/div[2]/button'

class MortgagePaymentReviewPage{

    wait_until_screen_displayed(){
        $(CANCEL_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SUBMIT_BUTTON).waitForDisplayed()
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new MortgagePaymentReviewPage()