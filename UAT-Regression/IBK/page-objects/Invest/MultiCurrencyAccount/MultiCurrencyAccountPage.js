const BUY_CURRENCY_PRECIOUS_METAL_CHECKBOX = '//*[@id="__next"]/div/div[2]/div[2]/div/div[3]/div[1]/div/div/div'
const TERM_PLACEMENT_CHECKBOX = '//*[@id="__next"]/div/div[2]/div[2]/div/div[3]/div[2]/div/div/div'
const SEARCH_FIELD = '/html/body/div[1]/div/div[2]/div[2]/div/div[4]/div/div[1]/div/div[1]/div/div[1]/input'
const FIRST_CURRENCY = '//*[@id="__next"]/div/div[2]/div[2]/div/div[4]/div/div[2]/div/div/div/div/div[2]/div/div[1]'
const FIRST_INVEST_ACCOUNT = '//*[@id="__next"]/div/div[2]/div[2]/div[2]/div/div/div/div/div[2]/div/div[1]'

class MultiCurrencyAccountPage{

    wait_until_screen_displayed(){
        $(BUY_CURRENCY_PRECIOUS_METAL_CHECKBOX).waitForDisplayed()
    }

    get buy_currency_precious_metal_checkbox(){
        return $(BUY_CURRENCY_PRECIOUS_METAL_CHECKBOX)
    }

    get term_placement_checkbox(){
        return $(TERM_PLACEMENT_CHECKBOX)
    }

    get search_field(){
        return $(SEARCH_FIELD)
    }

    get first_currency(){
        return $(FIRST_CURRENCY)
    }

    get first_invest_account(){
        return $(FIRST_INVEST_ACCOUNT)
    }
    
}

export default new MultiCurrencyAccountPage()