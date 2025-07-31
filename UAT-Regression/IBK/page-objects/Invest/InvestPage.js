const AMANAH_SAHAM_NASIONAL_BERHAD_BUTTON = "//p[text()='Amanah Saham Nasional Berhad']"
const TERM_DEPOSIT_BUTTON = "//p[text()='Term Deposit']"
const MULTI_CURRENCY_ACCOUNT_BUTTON = "//p[text()='Multi Currency Account/-i']"

class InvestPage{

    wait_until_screen_displayed(){
        $(AMANAH_SAHAM_NASIONAL_BERHAD_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(TERM_DEPOSIT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(MULTI_CURRENCY_ACCOUNT_BUTTON).waitForDisplayed()
    }

    get amanah_saham_nasional_berhad_button(){
        return $(AMANAH_SAHAM_NASIONAL_BERHAD_BUTTON)
    }

    get term_deposit_button(){
        return $(TERM_DEPOSIT_BUTTON)
    }

    get multi_currency_account_button(){
        return $(MULTI_CURRENCY_ACCOUNT_BUTTON)
    }
}

export default new InvestPage()