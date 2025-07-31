const TO = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const SUBMIT_BUTTON = '/html/body/div/div/div[4]/div/div/div/div[2]/button'

class TermDepositWithdrawalReviewPage{

    wait_until_screen_displayed(){
        $(TO).waitForDisplayed()
    }

    get to(){
        return $(TO)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }
    
}

export default new TermDepositWithdrawalReviewPage()