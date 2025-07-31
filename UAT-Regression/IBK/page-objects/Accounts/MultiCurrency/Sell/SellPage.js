const SELL_FIELD = '//*[@id="downshift-15-toggle-button"]/div[1]'
const FIRST_PRECIOUS_METAL = '//*[@id="downshift-15-menu"]/div/div[2]/div/div/div/div/div[1]/div[1]'
const AMOUNT_IN_GM_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[5]/div[1]/div[1]/div/div[2]'
const AMOUNT_IN_GM = '/html/body/div[1]/div/div[2]/div[2]/div[5]/div[1]/div[1]/div/div[2]/input'
const NEXT_BUTTON = '/html/body/div[1]/div/div[2]/div[2]/div[7]/div/div/div/div/button'

class SellPage{

    wait_until_screen_displayed(){
        $(SELL_FIELD).waitForDisplayed()
    }

    get sell_field(){
        return $(SELL_FIELD)
    }

    get first_precious_metal(){
        return $(FIRST_PRECIOUS_METAL)
    }

    get amount_in_gm_field(){
        return $(AMOUNT_IN_GM_FIELD)
    }

    get amount_in_gm(){
        return $(AMOUNT_IN_GM)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }
    
}

export default new SellPage()