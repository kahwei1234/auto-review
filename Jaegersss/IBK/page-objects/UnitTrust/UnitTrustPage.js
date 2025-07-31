const TITLE_HEADER = "//p[text()='Unit Trust']"
const TOTAL_MARKET_VALUE = "//p[text()='Total Market Value']"
const TOTAL_UNREALISED_GAIN_LOSS = "//p[text()='Total Unrealised Gain/Loss']"
const INVESTMENT_AMOUNT = "//p[text()='Investment Amount']"
const ALL_UNIT_TRUST_ACCOUNTS = "//p[text()='All Unit Trust Accounts']" 
const FIRST_ACCOUNT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[2]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]'
const SECOND_ACCOUNT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]'

class UnitTrustPage{

    wait_until_screen_displayed(){
        $(TITLE_HEADER).waitForDisplayed()
    }

    get title_header(){
        return $(TITLE_HEADER)
    }

    get total_market_value(){
        return $(TOTAL_MARKET_VALUE)
    }

    get total_unrealised_gain_loss(){
        return $(TOTAL_UNREALISED_GAIN_LOSS)
    }

    get investment_amount(){
        return $(INVESTMENT_AMOUNT)
    }

    get all_unit_trust_accounts(){
        return $(ALL_UNIT_TRUST_ACCOUNTS)
    }

    get first_account(){
        return $(FIRST_ACCOUNT)
    }

    get second_account(){
        return $(SECOND_ACCOUNT)
    }
}

export default new UnitTrustPage();