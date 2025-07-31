const MESSAGE_1 = '//*[@id="__next"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/h2[1]'
const MESSAGE_2 = '//*[@id="__next"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/p'
const MESSAGE_3 = '//*[@id="__next"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/h2[2]'
const STAR_1 = "(//*[local-name()='svg'])[4]"
const STAR_2 = "//*[local-name()='svg'][2]"
const STAR_3 = "//*[local-name()='svg'][3]"
const STAR_4 = "//*[local-name()='svg'][4]"
const STAR_5 = "//*[local-name()='svg'][5]"
const DESC_NAVIGATION = "//span[text()='Navigation']"
const DESC_INTUITIVE = "//span[text()='Intuitive']"
const DESC_FEATURES = "//span[text()='Features']"
const TELL_WHAT_YOU_LIKED = '//*[@id="component-filled"]'
const SUBMIT_BUTTON = "//span[text()='Submit']"
const APPRECIATE_COMMENT = '//*[@id="__next"]/div/div[2]/div/div[2]/div[1]/div/div/form/div/div[2]/p'

class FeedbackPage{

    wait_until_screen_displayed(){
        $(MESSAGE_1).waitForDisplayed()
    }

    get message_1(){
        return $(MESSAGE_1)
    }

    get message_2(){
        return $(MESSAGE_2)
    }

    get message_3(){
        return $(MESSAGE_3)
    }

    get star_1(){
        return $(STAR_1)
    }

    get star_2(){
        return $(STAR_2)
    }

    get star_3(){
        return $(STAR_3)
    }

    get star_4(){
        return $(STAR_4)
    }

    get star_5(){
        return $(STAR_5)
    }

    get desc_navigation(){
        return $(DESC_NAVIGATION)
    }

    get desc_intuitive(){
        return $(DESC_INTUITIVE)
    }

    get desc_features(){
        return $(DESC_FEATURES)
    }

    get tell_what_you_liked(){
        return $(TELL_WHAT_YOU_LIKED)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get appreciate_comment(){
        return $(APPRECIATE_COMMENT)
    }

}

export default new FeedbackPage();