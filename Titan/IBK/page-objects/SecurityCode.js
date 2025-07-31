const SECURITY_CODE = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[1]/div[3]/div[2]/p'
const OTP_PIN_FIELD = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[1]/div[3]/div[5]/div[1]/div'
const OTP_PIN = '/html/body/div[1]/div/div[3]/div[1]/div/div/div/div[1]/div[3]/div[5]/div[1]/div/input'
const SUBMIT_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[3]/div[2]/button[2]'
const REQUEST_OTP = "//p[text()='REQUEST OTP']"

class SecurityCode{

    wait_until_screen_displayed(){
        $(SECURITY_CODE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SECURITY_CODE).getText()
    }

    wait_until_screen_displayed(){
        $(REQUEST_OTP).getText()
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

    get request_otp(){
        return $(REQUEST_OTP)
    }


}

export default new SecurityCode()