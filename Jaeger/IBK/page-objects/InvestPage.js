const AMANAH_SAHAM_NASIONAL_BERHAD = "//p[text()='Amanah Saham Nasional Berhad']"
const TERM_DEPOSIT = "//p[text()='Term Deposit']"
const MULTI_CURRENCY_ACCOUNT = "//p[text()='Multi Currency Account']"

class InvestPage{

    wait_until_screen_displayed(){
        $(AMANAH_SAHAM_NASIONAL_BERHAD).waitForDisplayed()
    }

    get amanah_saham_nasional_berhad(){
        return $(AMANAH_SAHAM_NASIONAL_BERHAD)
    }

    get term_deposit(){
        return $(TERM_DEPOSIT)
    }

    get multi_currency_account(){
        return $(MULTI_CURRENCY_ACCOUNT)
    }

}

export default new InvestPage();