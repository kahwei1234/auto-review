const CHANGE_MOBILE_NUMBER_BUTTON = "//p[text()='CHANGE MOBILE NUMBER']"
const CHANGE_SECURE_WORD_BUTTON = "//p[text()='CHANGE SECURE WORD']"
const CHANGE_CHALLENGE_QUESTION_BUTTON = "//p[text()='CHANGE CHALLENGE QUESTIONS']"
const CHANGE_PASSWORD_BUTTON = "//p[text()='CHANGE PASSWORD']"
const ANSWER_CHALLENGE_QUESTION_FIELD = '((//h4[contains(.,"Answer Challenge Question")]/parent::div/parent::div/following-sibling::div/child::form/child::div)[1]/child::div)[3]'
const ANSWER_CHALLENGE_QUESTION = '((//h4[contains(.,"Answer Challenge Question")]/parent::div/parent::div/following-sibling::div/child::form/child::div)[1]/child::div)[3]/child::input'
const ANSWER_CHALLENGE_QUESTION_NEXT_BUTTON = '(//span[contains(.,"Next")]/parent::span)[1]/parent::button'

class SecurityPage{

    wait_until_screen_displayed(){
        $(CHANGE_MOBILE_NUMBER_BUTTON).waitForDisplayed()
    }

    get change_mobile_number_button(){
        return $(CHANGE_MOBILE_NUMBER_BUTTON)
    }

    get change_secure_word_button(){
        return $(CHANGE_SECURE_WORD_BUTTON)
    }

    get change_challenge_question_button(){
        return $(CHANGE_CHALLENGE_QUESTION_BUTTON)
    }

    get change_password_button(){
        return $(CHANGE_PASSWORD_BUTTON)
    }

    get answer_challenge_question_field(){
        return $(ANSWER_CHALLENGE_QUESTION_FIELD)
    }

    get answer_challenge_question(){
        return $(ANSWER_CHALLENGE_QUESTION)
    }

    get answer_challenge_question_next_button(){
        return $(ANSWER_CHALLENGE_QUESTION_NEXT_BUTTON)
    }

}

export default new SecurityPage()