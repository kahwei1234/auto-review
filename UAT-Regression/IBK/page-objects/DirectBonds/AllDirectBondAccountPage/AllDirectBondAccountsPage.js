const FIRST_TAB_ACCOUNT = '((//p[contains(.,"All Direct Bond/Sukuk Accounts")]/following-sibling::div)[1]/child::div/child::div)[1]'
const SECOND_TAB_ACCOUNT = '((//p[contains(.,"All Direct Bond/Sukuk Accounts")]/following-sibling::div)[1]/child::div/child::div)[2]'
const ALL_DIRECT_TITLE_HEADER = '//p[contains(.,"All Direct Bond/Sukuk Accounts")]'
const ALL_DIRECT_INDICATIVE_MARKET_VALUE = '//p[contains(.,"Indicative Market Value")]'
const ALL_DIRECT_INDICATIVE_UNREALISED_GAIN_LOSS = '//p[contains(.,"Indicative Unrealised Gain/Loss")]'
const ALL_DIRECT_TOTAL_INVESTMENT_AMOUNT = '//p[contains(.,"Total Investment Amount")]'
const HOLDINGS_BUTTON = '//p[contains(.,"Holdings")]'
const STATEMENTS_BUTTON = '//p[contains(.,"Statements")]'
const ADVICES_BUTTON = '//p[contains(.,"Advices")]'
const DETAIL_ACCOUNT_NICKNAME = '//p[contains(.,"Account Nickname")]'
const DETAIL_ACCOUNT_HOLDER_NAME = '//p[contains(.,"Account Holder Name")]'
const DETAIL_SIGNING_CONDITION = '//p[contains(.,"Signing Condition")]'
const DETAIL_ACCOUNT_STATUS = '//p[contains(.,"Account Status")]'
const DETAIL_LAST_PERFORMED_TRANSACTION_DATE = '//p[contains(.,"Last Performed Transaction Date")]'
const BACK_BUTTON = '(//p[contains(.,"Direct Bond")])[2]'

class AllDirectBondAccountsPage{

    wait_until_screen_displayed(){
        $(ALL_DIRECT_TITLE_HEADER).waitForDisplayed()
    }

    get first_tab_account(){
        return $(FIRST_TAB_ACCOUNT)
    }

    get second_tab_account(){
        return $(SECOND_TAB_ACCOUNT)
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