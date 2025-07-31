const FROM = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[2]/div/div/div/div/div/p[2]'
const TO = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[3]/div/div/div/div/div/p[2]'
const CANCEL_BUTTON = '//*[@id="__next"]/div/div[4]/div/div/div/div[1]/button/span/span/span/p'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[4]/div/div/div/div[2]/button'

class SellReviewPage{

    wait_until_screen_displayed(){
        $(FROM).waitForDisplayed()
    }

    get from(){
        return $(FROM)
    }

    get to(){
        return $(TO)
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }
    
}

export default new SellReviewPage()