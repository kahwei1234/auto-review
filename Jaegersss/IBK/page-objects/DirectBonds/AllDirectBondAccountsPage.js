const ALL_DIRECT_TITLE_HEADER = "//p[text()='All Direct Bond/Sukuk Accounts']"
const ALL_DIRECT_INDICATIVE_MARKET_VALUE = "//p[text()='Indicative Market Value']"
const ALL_DIRECT_INDICATIVE_UNREALISED_GAIN_LOSS = "//p[text()='Indicative Unrealised Gain/Loss']"
const ALL_DIRECT_TOTAL_INVESTMENT_AMOUNT = "//p[text()='Total Investment Amount']"
const HOLDINGS_BUTTON = "//p[text()='Holdings']"
const STATEMENTS_BUTTON = "//p[text()='Statements']"
const ADVICES_BUTTON = "//p[text()='Advices']"
const DETAIL_ACCOUNT_NICKNAME = "//p[text()='Account Nickname']"
const DETAIL_ACCOUNT_HOLDER_NAME = "//p[text()='Account Holder Name']"
const DETAIL_SIGNING_CONDITION = "//p[text()='Signing Condition']"
const DETAIL_ACCOUNT_STATUS = "//p[text()='Account Status']"
const DETAIL_LAST_PERFORMED_TRANSACTION_DATE = "//p[text()='Last Performed Transaction Date']"
const BACK_BUTTON = '/html/body/div/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[1]'

class AllDirectBondAccountsPage{

    wait_until_screen_displayed(){
        $(ALL_DIRECT_TITLE_HEADER).waitForDisplayed()
    }

    get all_direct_title_header(){
        return $(ALL_DIRECT_TITLE_HEADER)
    }

    get all_direct_indicative_market_value(){
        return $(ALL_DIRECT_INDICATIVE_MARKET_VALUE)
    }

    get all_direct_indicative_unrealised_gain_loss(){
        return $(ALL_DIRECT_INDICATIVE_UNREALISED_GAIN_LOSS)
    }

    get all_direct_total_investment_amount(){
        return $(ALL_DIRECT_TOTAL_INVESTMENT_AMOUNT)
    }

    get holdings_button(){
        return $(HOLDINGS_BUTTON)
    }

    get statements_button(){
        return $(STATEMENTS_BUTTON)
    }

    get advices_button(){
        return $(ADVICES_BUTTON)
    }

    get detail_account_nickname(){
        return $(DETAIL_ACCOUNT_NICKNAME)
    }

    get detail_account_holder_name(){
        return $(DETAIL_ACCOUNT_HOLDER_NAME)
    }

    get detail_signing_condition(){
        return $(DETAIL_SIGNING_CONDITION)
    }

    get detail_account_status(){
        return $(DETAIL_ACCOUNT_STATUS)
    }

    get detail_last_performed_transaction_date(){
        return $(DETAIL_LAST_PERFORMED_TRANSACTION_DATE)
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

}

export default new AllDirectBondAccountsPage();