const TERM_WITHDRAWAL_STATUS = '//*[@id="__next"]/div/div[4]/div/div[2]/div/p'
const TERM_WITHDRAWAL_MESSAGE = '//*[@id="__next"]/div/div[5]/div[2]/div/div/div/div[2]/h2'
const TO = '//*[@id="__next"]/div/div[5]/div[5]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const VIEW_DEPOSIT_ACCOUNT_BUTTON = '/html/body/div/div/div[6]/div/div[2]/div/div[2]/button'

class TermWithdrawalStatusPage{

    wait_until_screen_displayed(){
        $(TERM_WITHDRAWAL_STATUS).waitForDisplayed()
    }

    get to(){
        return $(TO)
    }

    get term_withdrawal_status(){
        return $(TERM_WITHDRAWAL_STATUS)
    }

    get term_withdrawal_message(){
        return $(TERM_WITHDRAWAL_MESSAGE)
    }

    get view_deposit_account_button(){
        return $(VIEW_DEPOSIT_ACCOUNT_BUTTON)
    }
    
}

export default new TermWithdrawalStatusPage()