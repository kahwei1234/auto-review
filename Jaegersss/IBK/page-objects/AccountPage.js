const ALL_ACCOUNTS_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/aside/div/div/a[1]/p'
const SAVINGS_BUTTON = "//p[text()='Savings']"
const SAVINGS_TRANSFER_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[3]/button'
const CURRENT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/aside/div/div/a[3]/p'
const CURRENT_TRANSFER_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[3]/button'
const CURRENT_DEPOSIT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/button'
const CURRENT_INVEST_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/button'
const ACCOUNTS_PAY_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[3]/button'
const ACCOUNTS_DEPOSIT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/button'
const ACCOUNTS_INVEST_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/button'
const MORTGAGE_BUTTON = "//p[text()='Mortgage']"
const MORTGAGE_PAY_BUTTON = "//span[text()='Pay']"
const CREDITCARD_BUTTON = "//p[text()='Credit Card']"
const CREDITCARD_MOREACCOUNT_BUTTON = "//p[text()='More accounts']"
const CREDITCARD_2_BUTTON = "//p[text()='Credit Card 2']"
const CREDITCARD_DETAILS_SECTION = "//div[text()='Details']"
const CREDITCARD_LIMIT_FIELD = "//p[text()='Credit Limit']"
const CREDITCARD_ACCOUNT_NICKNAME_FIELD = "//p[text()='Account Nickname']"
const CREDITCARD_SET_PIN_BUTTON = "//p[text()='Set PIN']"
const TRANSACTION_BUTTON = "//p[text()='Transactions']"
const PERSONAL_FINANCING_BUTTON = "//p[text()='Personal Financing']"
const ACCOUNT_NICKNAME = "//p[text()='Account Nickname']"
const VIEW_ALL_BUTTON = "//span[text()='View all']"
const ASNB_BUTTON = "//p[text()='ASNB']"
const DIRECT_BONDS_BUTTON = "//p[text()='Direct Bond']"
const VEHICLE_FINANCING = "//p[text()='VEHICLE FINANCING']"
const MULTI_CURRENCY_BUTTON = "//p[text()='Multi Currency']"
const UNIT_TRUST_BUTTON = "//p[text()='Unit Trust']"

class AccountPage{

    wait_until_screen_displayed(){
        $(ALL_ACCOUNTS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SAVINGS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CURRENT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACCOUNTS_PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACCOUNTS_DEPOSIT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACCOUNTS_INVEST_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CURRENT_PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CURRENT_DEPOSIT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CURRENT_INVEST_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORTGAGE_PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SAVINGS_PAY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CREDITCARD_SET_PIN_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(VIEW_ALL_BUTTON).waitForDisplayed()
    }

    get all_accounts_button(){
        return $(ALL_ACCOUNTS_BUTTON)
    }

    get savings_button(){
        return $(SAVINGS_BUTTON)
    }

    get savings_transfer_button(){
        return $(SAVINGS_TRANSFER_BUTTON)
    }

    get current_button(){
        return $(CURRENT_BUTTON)
    }

    get current_transfer_button(){
        return $(CURRENT_TRANSFER_BUTTON)
    }

    get current_deposit_button(){
        return $(CURRENT_DEPOSIT_BUTTON)
    }

    get current_invest_button(){
        return $(CURRENT_INVEST_BUTTON)
    }

    get accounts_pay_button(){
        return $(ACCOUNTS_PAY_BUTTON)
    }

    get accounts_deposit_button(){
        return $(ACCOUNTS_DEPOSIT_BUTTON)
    }

    get accounts_invest_button(){
        return $(ACCOUNTS_INVEST_BUTTON)
    }

    get mortgage_button(){
        return $(MORTGAGE_BUTTON)
    }

    get mortgage_pay_button(){
        return $(MORTGAGE_PAY_BUTTON)
    }

    get creditcard_button(){
        return $(CREDITCARD_BUTTON)
    }

    get creditcard_moreaccount_button(){
        return $(CREDITCARD_MOREACCOUNT_BUTTON)
    }

    get creditcard_2_button(){
        return $(CREDITCARD_2_BUTTON)
    }

    get creditcard_details_section(){
        return $(CREDITCARD_DETAILS_SECTION)
    }

    get creditcard_account_nickname_field(){
        return $(CREDITCARD_ACCOUNT_NICKNAME_FIELD)
    }

    get creditcard_limit_field(){
        return $(CREDITCARD_LIMIT_FIELD)
    }

    get creditcard_set_pin_button(){
        return $(CREDITCARD_SET_PIN_BUTTON)
    }

    get transaction_button(){
        return $(TRANSACTION_BUTTON)
    }

    get personal_financing_button(){
        return $(PERSONAL_FINANCING_BUTTON)
    }

    get account_nickname(){
        return $(ACCOUNT_NICKNAME)
    }

    get view_all_button(){
        return $(VIEW_ALL_BUTTON)
    }

    get asnb_button(){
        return $(ASNB_BUTTON)
    }

    get direct_bonds_button(){
        return $(DIRECT_BONDS_BUTTON)
    }

    get vehicle_financing(){
        return $(VEHICLE_FINANCING)
    }

    get multi_currency_button(){
        return $(MULTI_CURRENCY_BUTTON)
    }

    get unit_trust_button(){
        return $(UNIT_TRUST_BUTTON)
    }

}

export default new AccountPage();