const ALL_UNIT_TITLE_HEADER = "//p[text()='All Unit Trust Accounts']"
const ALL_UNIT_TOTAL_MARKET_VALUE = "//p[text()='Total Market Value']"
const ALL_UNIT_TOTAL_UNREALISED_GAIN_LOSS = "//p[text()='Total Unrealised Gain/Loss']"
const ALL_UNIT_INVESTMENT_AMOUNT = "//p[text()='Investment Amount']"
const FUND_BUTTON = "//p[text()='Funds']"
const STATEMENT_BUTTON = "//p[text()='Statements']"
const ADVICE_BUTTON = "//p[text()='Advices']"
const DETAIL_ACCOUNT_NICKNAME = "//p[text()='Account Nickname']"
const DETAIL_ACCOUNT_OWNERSHIP = "//p[text()='Account Ownership']"
const DETAIL_ACCOUNT_TYPE = "//p[text()='Account Type']"
const DETAIL_ACCOUNT_HOLDER_NAME = "//p[text()='Account Holder Name']"
const DETAIL_SIGNING_CONDITIONS = "//p[text()='Signing Conditions']"
const DETAIL_ACCOUNT_STATUS = "//p[text()='Account Status']"
const DETAIL_LAST_PERFORMED_TRANSACTION_DATE = "//p[text()='Last Performed Transaction Date']"
const FIRST_STATEMENT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div/div/div/div/div[1]/div[1]/p'
const STATEMENT_DOWNLOAD_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[1]'
const STATEMENT_PRINT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div[2]'
const STATEMENT_EMPTY_MESSAGE_1 = "//p[text()='Hmm...']"
const STATEMENT_EMPTY_MESSAGE_2 = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div/p'
const STATEMENT_VIEW_ALL_BUTTON = "//span[text()='View all']"
const FIRST_ADVICE = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div[1]/div/div/div/div[1]'
const FIRST_ADVICE_DATE = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div[1]/div/div/div/div[1]/div[2]/p'
const FIRST_ADVICE_DOWNLOAD = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div[1]/div/div/div/div[1]/div[2]/div[1]'
const FIRST_ADVICE_PRINT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div[1]/div/div/div/div[1]/div[2]/div[2]'
const ADVICE_EMPTY_MESSAGE_1 = "//p[text()='Hmm...']"
const ADVICE_EMPTY_MESSAGE_2 = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[4]/div[1]/div[2]/div/div/p'
const ADVICES_VIEW_ALL_BUTTON = "//span[text()='View all']"

class AllUnitTrustAccountsPage{

    wait_until_screen_displayed(){
        $(ALL_UNIT_TITLE_HEADER).waitForDisplayed()
    }

    get all_unit_title_header(){
        return $(ALL_UNIT_TITLE_HEADER)
    }

    get all_unit_total_market_value(){
        return $(ALL_UNIT_TOTAL_MARKET_VALUE)
    }

    get all_unit_total_unrealised_gain_loss(){
        return $(ALL_UNIT_TOTAL_UNREALISED_GAIN_LOSS)
    }

    get all_unit_investment_amount(){
        return $(ALL_UNIT_INVESTMENT_AMOUNT)
    }

    get fund_button(){
        return $(FUND_BUTTON)
    }

    get statement_button(){
        return $(STATEMENT_BUTTON)
    }

    get advice_button(){
        return $(ADVICE_BUTTON)
    }

    get detail_account_nickname(){
        return $(DETAIL_ACCOUNT_NICKNAME)
    }

    get detail_account_ownership(){
        return $(DETAIL_ACCOUNT_OWNERSHIP)
    }

    get detail_account_type(){
        return $(DETAIL_ACCOUNT_TYPE)
    }

    get detail_account_holder_name(){
        return $(DETAIL_ACCOUNT_HOLDER_NAME)
    }

    get detail_signing_conditions(){
        return $(DETAIL_SIGNING_CONDITIONS)
    }

    get detail_account_status(){
        return $(DETAIL_ACCOUNT_STATUS)
    }

    get detail_last_performed_transaction_date(){
        return $(DETAIL_LAST_PERFORMED_TRANSACTION_DATE)
    }

    get first_statement(){
        return $(FIRST_STATEMENT)
    }

    get statement_download_button(){
        return $(STATEMENT_DOWNLOAD_BUTTON)
    }

    get statement_print_button(){
        return $(STATEMENT_PRINT_BUTTON)
    }

    get statement_empty_message_1(){
        return $(STATEMENT_EMPTY_MESSAGE_1)
    }

    get statement_empty_message_2(){
        return $(STATEMENT_EMPTY_MESSAGE_2)
    }

    get statement_view_all_button(){
        return $(STATEMENT_VIEW_ALL_BUTTON)
    }

    get first_advice(){
        return $(FIRST_ADVICE)
    }

    get first_advice_download(){
        return $(FIRST_ADVICE_DOWNLOAD)
    }

    get first_advice_print(){
        return $(FIRST_ADVICE_PRINT)
    }

    get advice_empty_message_1(){
        return $(ADVICE_EMPTY_MESSAGE_1)
    }

    get advice_empty_message_2(){
        return $(ADVICE_EMPTY_MESSAGE_2)
    }

    get first_advice_date(){
        return $(FIRST_ADVICE_DATE)
    }

    get advices_view_all_button(){
        return $(ADVICES_VIEW_ALL_BUTTON)
    }


}

export default new AllUnitTrustAccountsPage();