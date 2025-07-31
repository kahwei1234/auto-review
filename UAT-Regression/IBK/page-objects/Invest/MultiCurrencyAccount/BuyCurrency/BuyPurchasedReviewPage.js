const PURCHASE_STATUS = '//*[@id="__next"]/div/div[4]/div/div[2]/div/p'
const PURCHASE_MESSAGE = '//*[@id="__next"]/div/div[5]/div[2]/div/div/div/div[2]/h2'
const TO = '//*[@id="__next"]/div/div[5]/div[6]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const BUY = '//*[@id="__next"]/div/div[5]/div[6]/div/div/div/div/div[2]/div/div/div/div/div[1]/p[2]'
const PRICE_PER_GRAM_FIELD = '//*[@id="__next"]/div/div[5]/div[6]/div/div/div/div/div[2]/div/div/div/div/div[2]/p[1]'
const AMOUNT_FIELD = '//*[@id="__next"]/div/div[5]/div[6]/div/div/div/div/div[3]/div/div/div/div/div/p[1]'
const TRY_AGAIN_BUTTON = "//span[text()='TRY AGAIN']"

class BuyPurchasedReviewPage{

    wait_until_screen_displayed(){
        $(PURCHASE_STATUS).waitForDisplayed()
    }

    get purchase_status(){
        return $(PURCHASE_STATUS)
    }

    get purchase_message(){
        return $(PURCHASE_MESSAGE)
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

    get try_again_button(){
        return $(TRY_AGAIN_BUTTON)
    }
    
}

export default new BuyPurchasedReviewPage()