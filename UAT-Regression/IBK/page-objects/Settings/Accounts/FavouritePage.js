const FAV_SEARCH_FIELD = '/html/body/div[1]/div/div[2]/div[3]/div[3]/div/div/form/div[1]/div[3]/div/div[1]/div/div[1]/input'
const DUITNOW_BUTTON = "//span[text()='DuitNow']"
const BILLS_BUTTON = "//span[text()='Bills']"
const TOP_UP_SERVICES_BUTTON = "//span[text()='Top Up Services']"
const FAV_SEARCH = '//*[@id="downshift-1-input"]'
const FAV_ACCOUNT = '//*[@id="__next"]/div/div[2]/div[3]/div[3]/div/div/form/div[1]/div[4]/div[2]/div/div/div[1]'
const FAV_ACCOUNT_EDIT_BUTTON = "//span[text()='EDIT']"
const FAV_ACCOUNT_PAY_BUTTON = "//span[text()='PAY']"
const FAV_PAYMENT_TYPE = '//*[@id="__next"]/div/div[3]/div[6]/div/p[2]'
const FAV_RECIPIENT_REFERENCE = '//*[@id="__next"]/div/div[4]/div[8]/div/p[2]'


class FavouritePage{

    wait_until_screen_displayed(){
        $(FAV_ACCOUNT).getText()
    }

    wait_until_screen_displayed(){
        $(FAV_ACCOUNT_EDIT_BUTTON).getText()
    }

    get duitnow_button(){
        return $(DUITNOW_BUTTON)
    }


    get bills_button(){
        return $(BILLS_BUTTON)
    }

    get top_up_services_button(){
        return $(TOP_UP_SERVICES_BUTTON)
    }

    get fav_search_field(){
        return $(FAV_SEARCH_FIELD)
    }

    get fav_search(){
        return $(FAV_SEARCH)
    }

    get fav_account(){
        return $(FAV_ACCOUNT)
    }

    get fav_account_edit_button(){
        return $(FAV_ACCOUNT_EDIT_BUTTON)
    }

    get fav_account_pay_button(){
        return $(FAV_ACCOUNT_PAY_BUTTON)
    }

    get fav_payment_type(){
        return $(FAV_PAYMENT_TYPE)
    }

    get fav_recipient_reference(){
        return $(FAV_RECIPIENT_REFERENCE)
    }

}

export default new FavouritePage()