const ACCOUNTS_BUTTON = '(//p[contains(.,"Accounts")])[1]'
const TRANSFER_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[2]/a/span/span/span/p'
const PAY_BILLS_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[3]/a/span/span/span/p'
const DUITNOW_BUTTON = '//p[contains(.,"DuitNow")]'
const TOP_UP_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[5]/a/span/span/span/p'
const INVEST_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[6]/a/span/span/span/p'
const EXPLORE_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[7]/a/span/span/span/p'
const MORE_BUTTON = '//p[contains(.,"More")]'
const GET_SUPPORT_BUTTON = "//div[text()='GET SUPPORT']"
const SETTINGS_BUTTON = "//div[text()='SETTINGS']"
const INBOX_BUTTON = "//div[text()='INBOX']"
const LOGOUT_BUTTON = "//div[text()='LOGOUT']"
const MORE_ACCOUNTS_DROPDOWN = "//p[text()='MORE ACCOUNTS']"
const MORE_ALL_ACCOUNTS = '//*[@id="simple-popper"]/div/div[1]/div'
const MORE_SAVINGS_ACCOUNT = "//p[text()='Savings Account']"
const MORE_CURRENT_ACCOUNT = "//p[text()='Current Account']"
const MORE_TERM_DEPOSIT = "//p[text()='Term Deposit']"
const MORE_MCA_ACCOUNT = "//p[text()='Multi Currency']"
const MORE_CREDIT_CARD = "//p[text()='Credit Card']"
const MORE_MORTGAGE = "//p[text()='Mortgage']"
const MORE_UNIT_TRUST = "//p[text()='Unit Trust']"
const MORE_ASNB_ACCOUNT = "//p[text()='ASNB']"
const MORE_DIRECT_BOND = "//p[text()='Direct Bond']"
const PREVIOUS_CARD_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/button[1]'
const NEXT_CARD_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/button[2]'
const DOWNLOAD_RHB_X_BUTTON = '//p[contains(.,"Download RHB Mobile Banking")]/parent::div/parent::div/parent::div/preceding-sibling::div'


class HomePage{

    wait_until_screen_displayed(){
        $(ACCOUNTS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(TRANSFER_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAY_BILLS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(DUITNOW_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(TOP_UP_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(INVEST_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(EXPLORE_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORE_BUTTON).waitForDisplayed()
    }

    get accounts_button(){
        return $(ACCOUNTS_BUTTON)
    }

    get transfer_button(){
        return $(TRANSFER_BUTTON)
    }

    get pay_bills_button(){
        return $(PAY_BILLS_BUTTON)
    }

    get duitnow_button(){
        return $(DUITNOW_BUTTON)
    }

    get top_up_button(){
        return $(TOP_UP_BUTTON)
    }

    get invest_button(){
        return $(INVEST_BUTTON)
    }

    get explore_button(){
        return $(EXPLORE_BUTTON)
    }

    get more_button(){
        return $(MORE_BUTTON)
    }

    get get_support_button(){
        return $(GET_SUPPORT_BUTTON)
    }

    get settings_button(){
        return $(SETTINGS_BUTTON)
    }

    get inbox_button(){
        return $(INBOX_BUTTON)
    }

    get logout_button(){
        return $(LOGOUT_BUTTON)
    }

    get more_accounts_dropdown(){
        return $(MORE_ACCOUNTS_DROPDOWN)
    }

    get more_all_accounts(){
        return $(MORE_ALL_ACCOUNTS)
    }

    get more_savings_account(){
        return $(MORE_SAVINGS_ACCOUNT)
    }

    get more_current_account(){
        return $(MORE_CURRENT_ACCOUNT)
    }

    get more_term_deposit(){
        return $(MORE_TERM_DEPOSIT)
    }

    get more_mca_account(){
        return $(MORE_MCA_ACCOUNT)
    }

    get more_credit_Card(){
        return $(MORE_CREDIT_CARD)
    }

    get more_mortgage(){
        return $(MORE_MORTGAGE)
    }

    get more_unit_trust(){
        return $(MORE_UNIT_TRUST)
    }

    get more_asnb_account(){
        return $(MORE_ASNB_ACCOUNT)
    }

    get more_direct_bond(){
        return $(MORE_DIRECT_BOND)
    }

    get previous_card_button(){
        return $(PREVIOUS_CARD_BUTTON)
    }

    get next_card_button(){
        return $(NEXT_CARD_BUTTON)
    }

    get download_rhb_X_button(){
        return $(DOWNLOAD_RHB_X_BUTTON)
    }

}

export default new HomePage()