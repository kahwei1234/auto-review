const SECURITY_CODE_FIELD = '//*[@id="txtSecCode"]'
const GET_OTP_BUTTON = '//*[@id="btnSubmit"]'
const OTP_FIELD = '//*[@id="txtOTP"]'


class OTPPage{

    wait_until_screen_displayed(){
        $(SECURITY_CODE_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(OTP_FIELD).getText()
    }

    get security_code_field(){
        return $(SECURITY_CODE_FIELD)
    }

    get get_otp_button(){
        return $(GET_OTP_BUTTON)
    }

    get otp_field(){
        return $(OTP_FIELD)
    }

}

export default new OTPPage()