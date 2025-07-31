const NEW_PASSWORD_FILED = '//*[@id="__next"]/div/div[2]/div[2]/div/form/div[1]/div/div[1]'
const NEW_PASSWORD = '/html/body/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/input'
const CONFIRM_NEW_PASSWORD_FILED = '//*[@id="__next"]/div/div[2]/div[2]/div/form/div[2]/div/div'
const CONFIRM_NEW_PASSWORD = '/html/body/div/div/div[2]/div[2]/div/form/div[2]/div/div/input'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[2]/div[2]/div/form/div[3]/div/div/div/div/button'
const SUCCESSFUL_MESSAGE_1 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[1]'
const SUCCESSFUL_MESSAGE_2 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[2]'

class ChangePasswordPage{

    wait_until_screen_displayed(){
        $(NEW_PASSWORD_FILED).waitForDisplayed()
    }

    get new_password_field(){
        return $(NEW_PASSWORD_FILED)
    }

    get new_password(){
        return $(NEW_PASSWORD)
    }

    get confirm_new_password_field(){
        return $(CONFIRM_NEW_PASSWORD_FILED)
    }

    get confirm_new_password(){
        return $(CONFIRM_NEW_PASSWORD)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get successful_message_1(){
        return $(SUCCESSFUL_MESSAGE_1)
    }

    get successful_message_2(){
        return $(SUCCESSFUL_MESSAGE_2)
    }

}

export default new ChangePasswordPage()