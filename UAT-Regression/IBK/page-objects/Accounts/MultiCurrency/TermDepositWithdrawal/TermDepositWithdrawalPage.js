const FROM_FIELD = '//*[@id="downshift-1-toggle-button"]/div[1]'
const TO_FIELD = '//*[@id="downshift-2-toggle-button"]/div[1]'
const X_BUTTON = '/html/body/div/div/div[2]/div/div[1]/div[1]/div[1]/div[1]/svg'
const BACK_BUTTON = '/html/body/div/div/div[2]/div/div[1]/div[1]/div[2]/svg'
const NEXT_BUTTON = '/html/body/div/div/div[2]/div/div[6]/div/div/div/button'

class TermDepositWithdrawalPage{

    wait_until_screen_displayed(){
        $(FROM_FIELD).waitForDisplayed()
    }

    get from_field(){
        return $(FROM_FIELD)
    }

    get to_field(){
        return $(TO_FIELD)
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }
    
}

export default new TermDepositWithdrawalPage()