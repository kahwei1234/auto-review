const TO = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const BUY = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[2]/div/div/div/div/div[1]/p[2]'
const PRICE_PER_GRAM_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[2]/div/div/div/div/div[2]/p[1]'
const AMOUNT_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[3]/div/div/div/div/div/p[1]'
const SUBMIT_BUTTON = '//*[@id="__next"]/div/div[4]/div/div/div/div[2]/button'

class BuyReviewPage{

    wait_until_screen_displayed(){
        $(TO).waitForDisplayed()
    }

    get to(){
        return $(TO)
    }

    get buy(){
        return $(BUY)
    }

    get price_per_gram_field(){
        return $(PRICE_PER_GRAM_FIELD)
    }

    get amount_field(){
        return $(AMOUNT_FIELD)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }
    
}

export default new BuyReviewPage()