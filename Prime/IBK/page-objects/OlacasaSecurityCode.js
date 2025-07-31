const SECURITY_CODE = '//*[@id="mdc-dialog"]/div[1]/div/div/div[1]/div[3]/p'
const OTP_PIN_FIELD = '//*[@id="mdc-dialog"]/div[1]/div/div/div[1]/div[4]/div[1]/div[1]/div[1]'
const OTP_PIN = '/html/body/div/div/div[1]/div[3]/div[1]/div/div/div[1]/div[4]/div[1]/div[1]/div[1]/input'
const SUBMIT_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div[3]/div[2]/button[2]'

class OlacasaSecurityCode{

    wait_until_screen_displayed(){
        $(SECURITY_CODE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SECURITY_CODE).getText()
    }

    get security_code(){
        return $(SECURITY_CODE)
    }

    get otp_pin_field(){
        return $(OTP_PIN_FIELD)
    }

    get otp_pin(){
        return $(OTP_PIN)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }


}

export default new OlacasaSecurityCode()