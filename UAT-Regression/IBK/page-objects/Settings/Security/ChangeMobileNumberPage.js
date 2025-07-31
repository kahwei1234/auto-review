const MOBILE_NUMBER_FILED = '//*[@id="__next"]/div/div[3]/div/div/form/div[1]/div[2]/div[1]'
const MOBILE_NUMBER = '/html/body/div/div/div[3]/div/div/form/div[1]/div[2]/div[1]/input'
const CONFIRM_MOBILE_NUMBER_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div/div[1]'
const CONFIRM_MOBILE_NUMBER = '/html/body/div/div/div[3]/div/div/form/div[2]/div/div[1]/input'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[3]/div/div/form/div[5]/div/div/div/div/button'

class ChangeMobileNumberPage{

    wait_until_screen_displayed(){
        $(MOBILE_NUMBER_FILED).waitForDisplayed()
    }

    get mobile_number_field(){
        return $(MOBILE_NUMBER_FILED)
    }

    get mobile_number(){
        return $(MOBILE_NUMBER)
    }

    get confirm_mobile_number_field(){
        return $(CONFIRM_MOBILE_NUMBER_FIELD)
    }

    get confirm_mobile_number(){
        return $(CONFIRM_MOBILE_NUMBER)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new ChangeMobileNumberPage()