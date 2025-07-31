const ALL_ACCOUNTS_BUTTON = "//p[text()='All Accounts']"
const SAVINGS_BUTTON = "//p[text()='Savings']"
const CURRENT_BUTTON = "//p[text()='Current']"
const TERM_DEPOSIT_BUTTON = "//p[text()='Term Deposit']"
const MULTI_CURRENCY_BUTTON = "//p[text()='Multi Currency']"
const CREDIT_CARD_BUTTON = "//p[text()='Credit Card']"
const MORTGAGE_BUTTON = "//p[text()='Mortgage']"
const UNIT_TRUST_BUTTON = "//p[text()='Unit Trust']"
const ASNB_BUTTON = "//p[text()='ASNB']"
const VEHICLE_FINANCING_BUTTON = '//p[contains(.,"Vehicle Financing")]'


class AccountsPage{

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
        $(TERM_DEPOSIT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MULTI_CURRENCY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CREDIT_CARD_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MORTGAGE_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(UNIT_TRUST_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ASNB_BUTTON).waitForDisplayed()
    }

    get all_accounts_button(){
        return $(ALL_ACCOUNTS_BUTTON)
    }

    get savings_button(){
        return $(SAVINGS_BUTTON)
    }

    get current_button(){
        return $(CURRENT_BUTTON)
    }

    get term_deposit_button(){
        return $(TERM_DEPOSIT_BUTTON)
    }

    get multi_currency_button(){
        return $(MULTI_CURRENCY_BUTTON)
    }

    get credit_card_button(){
        return $(CREDIT_CARD_BUTTON)
    }

    get mortgage_button(){
        return $(MORTGAGE_BUTTON)
    }

    get unit_trust_button(){
        return $(UNIT_TRUST_BUTTON)
    }

    get asnb_button(){
        return $(ASNB_BUTTON)
    }

    get vehicle_financing_button(){
        return $(VEHICLE_FINANCING_BUTTON)
    }

}

export default new AccountsPage()