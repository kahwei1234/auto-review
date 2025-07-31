const CALL_ACCOUNTS_TAB = "//p[text()='Call Accounts']"
const TERM_ACCOUNTS_TAB = "//p[text()='Term Accounts']"
const TERM_ACCOUNT_FIRST_ACCOUNT_WITHDRAW_BUTTON = '/html/body/div/div/div[2]/div[3]/div[3]/div/article/div/div/div[1]/div[3]/div/div[1]/div[2]/div[2]/div[1]/div/div/div/div[4]/button'
const WITHDRAW_OK_BUTTON = '/html/body/div/div/div[4]/div/div[1]/div/footer/button'
const STATEMENTS_TAB = "//p[text()='Statements']"
const TERM_PLACEMENT_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/button[1]'
const SELL_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/button[2]'
const BUY_BUTTON = '//*[@id="next-btn"]/span/span/span'
const ACCOUNT_NICKNAME_EDIT_BUTTON = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::div'
const ACCOUNT_NICKNAME_FIELD = '//label[contains(.,"Account Nickname")]/preceding-sibling::input'
const ACCOUNT_NICKNAME = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::p'
const ACCOUNT_NICKNAME_SAVE_BUTTON = '(//span[contains(.,"Save")])[1]/parent::button'

class MultiCurrencyMainPage{

    wait_until_screen_displayed(){
        $(CALL_ACCOUNTS_TAB).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(TERM_ACCOUNTS_TAB).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(STATEMENTS_TAB).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(TERM_PLACEMENT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SELL_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(BUY_BUTTON).waitForDisplayed()
    }

    get call_accounts_tab(){
        return $(CALL_ACCOUNTS_TAB)
    }

    get term_accounts_tab(){
        return $(TERM_ACCOUNTS_TAB)
    }

    get term_accounts_first_account_withdraw_button(){
        return $(TERM_ACCOUNT_FIRST_ACCOUNT_WITHDRAW_BUTTON)
    }

    get withdraw_ok_button(){
        return $(WITHDRAW_OK_BUTTON)
    }

    get statements_tab(){
        return $(STATEMENTS_TAB)
    }

    get term_placement_button(){
        return $(TERM_PLACEMENT_BUTTON)
    }

    get sell_button(){
        return $(SELL_BUTTON)
    }

    get buy_button(){
        return $(BUY_BUTTON)
    } 
    
    get account_nickname_edit_button(){
        return $(ACCOUNT_NICKNAME_EDIT_BUTTON)
    }

    get account_nickname_field(){
        return $(ACCOUNT_NICKNAME_FIELD)
    }

    get account_nickname(){
        return $(ACCOUNT_NICKNAME)
    }

    get account_nickname_save_button(){
        return $(ACCOUNT_NICKNAME_SAVE_BUTTON)
    }

}

export default new MultiCurrencyMainPage()