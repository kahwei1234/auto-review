const ACCOUNTS_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[1]/a/span/span/span/p'
const PAY_BUTTON = '//*[@id="__next"]/div/div[1]/div[6]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[2]/a/span/span/span/p'
const PAY_BILLS_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[3]/a/span/span/span/p'
const TRANSFER_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[2]/a/span/span/span/p'
const DUITNOW_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[4]/a/span/span/span/p'
const TOP_UP_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[5]/a/span/span/span/p'
const INVEST_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[6]/a/span/span/span/p'
const EXPLORE_BUTTON = '//*[@id="__next"]/div/div[2]/div[5]/div/div[1]/div/div[2]/div[2]/div[2]/div[3]/div[7]/a/span/span/span/p'
const MORE_BUTTON = "//p[text()='More']"
const PIVOT_MORE = "//a[text()='More']"
const UNIT_TRUST = "//p[text()='UNIT TRUST']"
const UNIT_TRUST_TOTAL_MARKET_VALUE = "//p[text()='Total Market Value']"
const UNIT_TRUST_TOTAL_UNREALISED_GAIN_LOSS = "//p[text()='Total Unrealised Gain/Loss']"
const UNIT_TRUST_INVESTMENT_AMOUNT = "//p[text()='Investment Amount']"
const UNIT_TRUST_DISCLAIMER = "//p[text()='Last updated 08 September 2023 11:48 am. The amount displayed above is only for unit trust from RHB Bank.']"
const DIRECT_BOND = "//p[text()='DIRECT BOND']"
const DIRECT_BOND_INDICATIVE_MARKET_VALUE = "//p[text()='Indicative Market Value']"
const DIRECT_BOND_INDICATIVE_UNREALISED_GAIN_LOSS= "//p[text()='Indicative Unrealised Gain/Loss']"
const DIRECT_BOND_TOTAL_INVESTMENT_AMOUNT= "//p[text()='Total Investment Amount']"
const DIRECT_BOND_DISCLAIMER = "//p[text()='The amounts displayed above are for Direct Bond or Sukuk from RHB Bank only.']"
const LOGOUT_BUTTON = "//span[@title='Logout']"
const SETTINGS_BUTTON = "//span[@title='Settings']"
const INBOX_BUTTON = "//span[@title='Inbox']"
const EDIT_BUTTON = 'div.css-v9zlbm-StyledBox p.css-f0uuw9'
const MORE_ACCOUNTS_DROPDOWN = "//p[text()='MORE ACCOUNTS']"
const MORE_ALL_ACCOUNT = '//*[@id="simple-popper"]/div/div[1]/div'
const MORE_SAVINGS_ACCOUNT = '//*[@id="simple-popper"]/div/div[2]/div'
const MORE_CURRENT_ACCOUNT = '//*[@id="simple-popper"]/div/div[3]/div'
const MORE_CREDIT_CARD = '//*[@id="simple-popper"]/div/div[5]/div/p'
const MORE_ASNB_ACCOUNT = '//*[@id="simple-popper"]/div/div[5]/div/p'
const MORE_MCA_ACCOUNT = '//*[@id="simple-popper"]/div/div[4]/div/p'
const MORE_DIRECT_BOND = "//p[text()='Direct Bond']"
const MORE_UNIT_TRUST = "//p[text()='Unit Trust']"
const ACCOUNTS_PAY_BUTTON = '//*[@id="smart-card-slides"]/div/div/ul/li[1]/div/div/div/div/div/div[3]/div[2]/button'
const CREDIT_CARD_I = '//*[@id="__next"]/div/div[1]/div[6]/div/div[3]/div[2]/div[3]/div/div[2]/div[4]/div'
const NEXT_BUTTON_DASHBOARD = '//*[@id="__next"]/div/div[2]/div[5]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/button[2]'
const MCA_DISCLAIMER_DASHBOARD = '//*[@id="smart-card-slides"]/div/div/ul/li[3]/div/div/div/div/div/div[3]/div[1]/div/p'
const SAVINGS_ACCOUNT_CARD = '//*[@id="smart-card-slides"]/div/div/ul/li[1]/div/div/div/div/div/div[1]'
const CREDIT_CARD_PAY_BUTTON = "//span[text()='Pay']"
const DISCLAIMER_LINK = '//*[@id="__next"]/div/div[2]/div[5]/div/div[2]/div[2]/div[4]/div/div/div[2]/div[2]/p'
const NEW_USER_CLOSE_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div[1]/div'
const TERMS_AND_CONDITIONS = '//p[contains(.,"TERMS & CONDITIONS")]'

class MainPage{

    wait_until_screen_displayed(){
        $(ACCOUNTS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACCOUNTS_PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAY_BILLS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(DUITNOW_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(LOGOUT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORE_ALL_ACCOUNT).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORE_SAVINGS_ACCOUNT).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORE_CURRENT_ACCOUNT).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORE_CREDIT_CARD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(NEXT_BUTTON_DASHBOARD).waitForDisplayed()
    }

    get accounts_button(){
        return $(ACCOUNTS_BUTTON)
    }

    get pay_button(){
        return $(PAY_BUTTON)
    }

    get pay_bills_button(){
        return $(PAY_BILLS_BUTTON)
    }

    get transfer_button(){
        return $(TRANSFER_BUTTON)
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

    get pivot_more(){
        return $(PIVOT_MORE)
    }

    get unit_trust(){
        return $(UNIT_TRUST)
    }

    get unit_trust_total_market_value(){
        return $(UNIT_TRUST_TOTAL_MARKET_VALUE)
    }

    get unit_trust_total_unrealised_gain_loss(){
        return $(UNIT_TRUST_TOTAL_UNREALISED_GAIN_LOSS)
    }

    get unit_trust_investment_amount(){
        return $(UNIT_TRUST_INVESTMENT_AMOUNT)
    }

    get unit_trust_disclaimer(){
        return $(UNIT_TRUST_DISCLAIMER)
    }

    get direct_bond(){
        return $(DIRECT_BOND)
    }

    get direct_bond_indicative_market_value(){
        return $(DIRECT_BOND_INDICATIVE_MARKET_VALUE)
    }

    get direct_bond_indicative_unrealised_gain_loss(){
        return $(DIRECT_BOND_INDICATIVE_UNREALISED_GAIN_LOSS)
    }

    get direct_bond_total_investment_amount(){
        return $(DIRECT_BOND_TOTAL_INVESTMENT_AMOUNT)
    }

    get direct_bond_disclaimer(){
        return $(DIRECT_BOND_DISCLAIMER)
    }

    get logout_button(){
        return $(LOGOUT_BUTTON)
    }

    get settings_button(){
        return $(SETTINGS_BUTTON)
    }

    get inbox_button(){
        return $(INBOX_BUTTON)
    }

    get edit_button(){
        return $(EDIT_BUTTON)
    }

    get more_accounts_dropdown(){
        return $(MORE_ACCOUNTS_DROPDOWN)
    }

    get more_all_account(){
        return $(MORE_ALL_ACCOUNT)
    }

    get more_savings_account(){
        return $(MORE_SAVINGS_ACCOUNT)
    }

    get more_current_account(){
        return $(MORE_CURRENT_ACCOUNT)
    }

    get more_credit_card(){
        return $(MORE_CREDIT_CARD)
    }

    get more_asnb_account(){
        return $(MORE_ASNB_ACCOUNT)
    }
    
    get more_mca_account(){
        return $(MORE_MCA_ACCOUNT)
    }

    get more_direct_bond(){
        return $(MORE_DIRECT_BOND)
    }

    get more_unit_trust(){
        return $(MORE_UNIT_TRUST)
    }

    get accounts_pay_button(){
        return $(ACCOUNTS_PAY_BUTTON)
    }

    get credit_card_i(){
        return $(CREDIT_CARD_I)
    }

    get next_button_dashboard(){
        return $(NEXT_BUTTON_DASHBOARD)
    }

    get mca_disclaimer_dashboard(){
        return $(MCA_DISCLAIMER_DASHBOARD)
    }

    get savings_account_card(){
        return $(SAVINGS_ACCOUNT_CARD)
    }

    get credit_card_pay_button(){
        return $(CREDIT_CARD_PAY_BUTTON)
    }

    get disclaimer_link(){
        return $(DISCLAIMER_LINK)
    }

    get new_user_close_button(){
        return $(NEW_USER_CLOSE_BUTTON)
    }

    get terms_and_conditions(){
        return $(TERMS_AND_CONDITIONS)
    }
}

export default new MainPage();