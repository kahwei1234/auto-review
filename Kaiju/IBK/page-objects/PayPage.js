const PAY_TITLE = '//*[@id="__next"]/div/form/div[1]/div/div[1]/div'
const INDIVIDUAL_BUTTON = '//*[@id="__next"]/div/form/div[1]/div/div[3]/div[1]/p'
const BILLER_BUTTON = '//*[@id="__next"]/div/form/div[1]/div/div[3]/div[2]/p'
const BILLER_LEMBAGA_TABUNG_HAJI = "//p[text()='Lembaga Tabung Haji (TH)']"
const SEARCH_FIELD = '/html/body/div[1]/div/form/div[1]/div/div[2]/div/div[1]/div/div[1]/input'
const DUITNOW_BUTTON = '//*[@id="__next"]/div/form/div[2]/div/div[3]/div/div/div/button'
const BILLS_BUTTON = '//*[@id="__next"]/div/form/div[2]/div/div[3]/div/div/div/div[1]/button'
const OVERSEAS_TRANSFER_BUTTON = '//*[@id="__next"]/div/form/div[2]/div/div[3]/div/div/div/div[2]/button'
const KWSP_1MI = '//*[@id="__next"]/div/form/div/div/div[4]/div/div/div/div[2]/div/div/div[2]/div/div/p'
const RECENT_ACCOUNT_AZINORARTA = "//p[text()='AZINORARTA IIBTN INIAHAL N']"
const RECENT_HIRE_PURCHASE_ACCOUNT_WVB2763 = "//p[text()='WVB2763']"
const FIRST_FAVOURITE_ACCOUNT = '//*[@id="__next"]/div/form/div[1]/div/div[4]/div/div/div/div[3]/div/div[2]/div/div'
const FIRST_PAY_TO_ACCOUNT_CREDITCARD = "//div[text()='**** **** **** 1521']"
const PAY_TO_ACCOUNT_CREDITCARD1 = "//div[text()='**** **** **** 0720']"
const VIEW_ALL_ACCOUNTS_BUTTON = "//div[text()='VIEW ALL ACCOUNTS']"

class PayPage{

    wait_until_screen_displayed(){
        $(INDIVIDUAL_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(BILLER_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SEARCH_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(DUITNOW_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(BILLS_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(OVERSEAS_TRANSFER_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(KWSP_1MI).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(RECENT_ACCOUNT_AZINORARTA).waitForDisplayed()
    }

    get pay_title(){
        return $(PAY_TITLE)
    }

    get individual_button(){
        return $(INDIVIDUAL_BUTTON)
    }

    get biller_button(){
        return $(BILLER_BUTTON)
    }

    get biller_lembaga_tabung_haji(){
        return $(BILLER_LEMBAGA_TABUNG_HAJI)
    }

    get search_field(){
        return $(SEARCH_FIELD)
    }

    get duitnow_button(){
        return $(DUITNOW_BUTTON)
    }

    get bills_button(){
        return $(BILLS_BUTTON)
    }

    get overseas_transfer_button(){
        return $(OVERSEAS_TRANSFER_BUTTON)
    }

    get kwsp_1mi(){
        return $(KWSP_1MI)
    }

    get recent_account_azinorarta(){
        return $(RECENT_ACCOUNT_AZINORARTA)
    }

    get recent_hire_purchase_account_wvb2763(){
        return $(RECENT_HIRE_PURCHASE_ACCOUNT_WVB2763)
    }

    get first_favourite_account(){
        return $(FIRST_FAVOURITE_ACCOUNT)
    }

    get first_pay_to_account_creditcard(){
        return $(FIRST_PAY_TO_ACCOUNT_CREDITCARD)
    }

    get pay_to_account_creditcard1(){
        return $(PAY_TO_ACCOUNT_CREDITCARD1)
    }

    get view_all_accounts_button(){
        return $(VIEW_ALL_ACCOUNTS_BUTTON)
    }
}

export default new PayPage();