const TITLE_HEADER = "//p[text()='Direct Bond']"
const INDICATIVE_MARKET_VALUE = "//p[text()='Indicative Market Value']"
const INDICATIVE_UNREALISED_GAIN_LOSS = "//p[text()='Indicative Unrealised Gain/Loss']"
const TOTAL_INVESTMENT_AMOUNT = "//p[text()='Total Investment Amount']"
const ALL_DIRECT_BONDS_ACCOUNTS = "//p[text()='All Direct Bond/Sukuk Accounts']" 
const FIRST_ACCOUNT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[2]/div[2]/div[2]/div/div/div[1]/div[1]/div[2]/div[1]'

class DirectBondsPage{

    wait_until_screen_displayed(){
        $(TITLE_HEADER).waitForDisplayed()
    }

    get title_header(){
        return $(TITLE_HEADER)
    }

    get indicative_market_value(){
        return $(INDICATIVE_MARKET_VALUE)
    }

    get indicative_unrealised_gain_loss(){
        return $(INDICATIVE_UNREALISED_GAIN_LOSS)
    }

    get total_investment_amount(){
        return $(TOTAL_INVESTMENT_AMOUNT)
    }

    get all_direct_bonds_accounts(){
        return $(ALL_DIRECT_BONDS_ACCOUNTS)
    }

    get first_account(){
        return $(FIRST_ACCOUNT)
    }
}

export default new DirectBondsPage();