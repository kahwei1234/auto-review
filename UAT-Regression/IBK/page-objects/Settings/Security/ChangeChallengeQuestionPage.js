const CHALLENGE_QUESTION_1_DROPDOWN = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[1]/div'
const QUESTION_OPTIONS_A = '//*[@id="menu-"]/div[3]/ul/li[1]'
const QUESTION_OPTIONS_B = '//*[@id="menu-"]/div[3]/ul/li[2]'
const QUESTION_OPTIONS_C = '//*[@id="menu-"]/div[3]/ul/li[3]'
const QUESTION_OPTIONS_D = '//*[@id="menu-"]/div[3]/ul/li[4]'
const QUESTION_OPTIONS_E = '//*[@id="menu-"]/div[3]/ul/li[5]'
const ANSWER_1_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]'
const ANSWER_1 = '/html/body/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div[1]/input'
const CHALLENGE_QUESTION_2_DROPDOWN = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[2]/div[1]/div'
const ANSWER_2_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]'
const ANSWER_2 = '/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/input'
const CHALLENGE_QUESTION_3_DROPDOWN = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[3]/div[1]/div'
const ANSWER_3_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[3]/div[2]/div[1]'
const ANSWER_3 = '/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/div[1]/input'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div[4]/button'
const SUCCESSFUL_MESSAGE_1 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[1]'
const SUCCESSFUL_MESSAGE_2 = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/div/div[2]/p[2]'

class ChangeChallengeQuestionPage{

    wait_until_screen_displayed(){
        $(CHALLENGE_QUESTION_1_DROPDOWN).waitForDisplayed()
    }

    get challenge_question_1_dropdown(){
        return $(CHALLENGE_QUESTION_1_DROPDOWN)
    }

    get question_options_a(){
        return $(QUESTION_OPTIONS_A)
    }

    get question_options_b(){
        return $(QUESTION_OPTIONS_B)
    }

    get question_options_c(){
        return $(QUESTION_OPTIONS_C)
    }

    get question_options_d(){
        return $(QUESTION_OPTIONS_D)
    }

    get question_options_e(){
        return $(QUESTION_OPTIONS_E)
    }

    get answer_1_field(){
        return $(ANSWER_1_FIELD)
    }

    get answer_1(){
        return $(ANSWER_1)
    }

    get challenge_question_2_dropdown(){
        return $(CHALLENGE_QUESTION_2_DROPDOWN)
    }

    get answer_2_field(){
        return $(ANSWER_2_FIELD)
    }

    get answer_2(){
        return $(ANSWER_2)
    }

    get challenge_question_3_dropdown(){
        return $(CHALLENGE_QUESTION_3_DROPDOWN)
    }

    get answer_3_field(){
        return $(ANSWER_3_FIELD)
    }

    get answer_3(){
        return $(ANSWER_3)
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

export default new ChangeChallengeQuestionPage()