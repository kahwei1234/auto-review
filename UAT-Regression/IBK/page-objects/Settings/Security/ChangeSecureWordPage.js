const NEW_SECURE_WORD_FILED = '//*[@id="__next"]/div/div[2]/div[2]/div/form/div[1]/div/div[1]'
const NEW_SECURE_WORD = '/html/body/div/div/div[2]/div[2]/div/form/div[1]/div/div[1]/input'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[2]/div[2]/div/form/div[2]/div/div/div/div/button'
const SUCCESSFUL_MESSAGE_1 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[1]'
const SUCCESSFUL_MESSAGE_2 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[2]'

class ChangeSecureWordPage{

    wait_until_screen_displayed(){
        $(NEW_SECURE_WORD_FILED).waitForDisplayed()
    }

    get new_secure_word_field(){
        return $(NEW_SECURE_WORD_FILED)
    }

    get new_secure_word(){
        return $(NEW_SECURE_WORD)
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

export default new ChangeSecureWordPage()