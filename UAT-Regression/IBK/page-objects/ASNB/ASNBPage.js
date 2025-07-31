const NEW_TOP_UP_BUTTON = "//span[text()='Top Up']"
const ADD_NEW_FAVOURITE_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div/div[2]/div/div[1]/button'
const ASN_EQUITY2_FUND = "//p[text()='ASN Equity 2']"
const ASB_FUND = "//p[text()='Amanah Saham Bumiputera']"
const UBC_FIELD = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div/div[2]/div[3]/div/div[1]/div[2]/p'
const UBB_field = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div/div[2]/div[3]/div/div[2]/div[2]/p'

class ASNBPage{

    wait_until_screen_displayed(){
        $(NEW_TOP_UP_BUTTON).waitForDisplayed()
    }

    get new_top_up_button(){
        return $(NEW_TOP_UP_BUTTON)
    }

    get add_new_favourite_button(){
        return $(ADD_NEW_FAVOURITE_BUTTON)
    }

    get asn_equity2_fund(){
        return $(ASN_EQUITY2_FUND)
    }

    get asb_fund(){
        return $(ASB_FUND)
    }

    get ubc_field(){
        return $(UBC_FIELD)
    }

    get ubb_field(){
        return $(UBB_field)
    }

}

export default new ASNBPage();