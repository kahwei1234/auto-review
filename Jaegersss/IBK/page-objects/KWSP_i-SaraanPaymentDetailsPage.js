const IMPORTANT_NOTICE = "//p[text()='Important Notice']"
const IMPORTANT_NOTICE_FIRST_MESSAGE = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[1]/div[10]/div[2]/div/div[2]/p[1]'
const IMPORTANT_NOTICE_SECOND_MESSAGE = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[1]/div[10]/div[2]/div/div[2]/p[2]'
const IMPORTANT_NOTICE_THIRD_MESSAGE = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[1]/div[10]/div[2]/div/div[2]/p[3]'
const IMPORTANT_NOTICE_FOURTH_MESSAGE = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[1]/div[10]/div[2]/div/div[2]/div/p'
const SUBMITTING_MESSAGE = '//*[@id="__next"]/div/div[3]/div[2]/div/form/div[1]/div[10]/div[4]/p'
const LEARN_MORE_LINK = "//p[text()='LEARN MORE']"

class KWSP_i_SaraanPaymentDetailsPage{

    wait_until_screen_displayed(){
        $(IMPORTANT_NOTICE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(IMPORTANT_NOTICE_FIRST_MESSAGE).waitForDisplayed()
    }

    get important_notice(){
        return $(IMPORTANT_NOTICE)
    }
    get important_notice_first_message(){
        return $(IMPORTANT_NOTICE_FIRST_MESSAGE)
    }

    get important_notice_second_message(){
        return $(IMPORTANT_NOTICE_SECOND_MESSAGE)
    }

    get important_notice_third_message(){
        return $(IMPORTANT_NOTICE_THIRD_MESSAGE)
    }

    get important_notice_fourth_message(){
        return $(IMPORTANT_NOTICE_FOURTH_MESSAGE)
    }

    get submitting_message(){
        return $(SUBMITTING_MESSAGE)
    }

    get learn_more_link(){
        return $(LEARN_MORE_LINK)
    }

}

export default new KWSP_i_SaraanPaymentDetailsPage();