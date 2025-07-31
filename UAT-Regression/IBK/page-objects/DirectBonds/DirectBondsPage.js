const TITLE_HEADER = '(//p[contains(.,"Direct Bond")])[2]'
const INDICATIVE_MARKET_VALUE = '//p[contains(.,"Indicative Market Value")]'
const INDICATIVE_MARKET_VALUE_V_1 = '((//p[contains(.,"Indicative Market Value")]/following-sibling::div)[1]/child::div/child::p)[1]'
const INDICATIVE_MARKET_VALUE_V_2 = '((//p[contains(.,"Indicative Market Value")]/following-sibling::div)[1]/child::div/child::p)[2]'
const INDICATIVE_UNREALISED_GAIN_LOSS = '//p[contains(.,"Indicative Unrealised Gain/Loss")]'
const INDICATIVE_UNREALISED_GAIN_LOSS_VALUE = '(//p[contains(.,"Indicative Unrealised Gain/Loss")]/parent::div/following-sibling::div)[1]/child::p'
const TOTAL_INVESTMENT_AMOUNT = '//p[contains(.,"Total Investment Amount")]'
const TOTAL_INVESTMENT_AMOUNT_VALUE = '//p[contains(.,"Total Investment Amount")]/parent::div/following-sibling::div/child::p'
const ALL_DIRECT_BONDS_ACCOUNTS = '//p[contains(.,"All Direct Bond/Sukuk Accounts")]'
const FIRST_ACCOUNT = '(//p[contains(.,"All Direct Bond/Sukuk Accounts")]/parent::div/following-sibling::div/child::div/child::div/child::div)[1]'

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

    get indicative_market_value_v_1(){
        return $(INDICATIVE_MARKET_VALUE_V_1)
    }

    get indicative_market_value_v_2(){
        return $(INDICATIVE_MARKET_VALUE_V_2)
    }

    get indicative_unrealised_gain_loss(){
        return $(INDICATIVE_UNREALISED_GAIN_LOSS)
    }

    get indicative_unrealised_gain_loss_value(){
        return $(INDICATIVE_UNREALISED_GAIN_LOSS_VALUE)
    }

    get total_investment_amount(){
        return $(TOTAL_INVESTMENT_AMOUNT)
    }

    get total_investment_amount_value(){
        return $(TOTAL_INVESTMENT_AMOUNT_VALUE)
    }

    get all_direct_bonds_accounts(){
        return $(ALL_DIRECT_BONDS_ACCOUNTS)
    }

    get first_account(){
        return $(FIRST_ACCOUNT)
    }
}

export default new DirectBondsPage();