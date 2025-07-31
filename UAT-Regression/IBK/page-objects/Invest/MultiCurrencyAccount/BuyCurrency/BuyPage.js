const CONVERSION_AMOUNT_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[5]/div[1]/div[1]/div/div[2]'
const CONVERSION_AMOUNT = '/html/body/div/div/div[2]/div[2]/div[5]/div[1]/div[1]/div/div[2]/input'
const NEXT_BUTTON = '/html/body/div/div/div[2]/div[2]/div[7]/div/div/div/div/button'

class BuyPage{

    wait_until_screen_displayed(){
        $(CONVERSION_AMOUNT_FIELD).waitForDisplayed()
    }

    get conversion_amount_field(){
        return $(CONVERSION_AMOUNT_FIELD)
    }

    get conversion_amount(){
        return $(CONVERSION_AMOUNT)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }
    
}

export default new BuyPage()