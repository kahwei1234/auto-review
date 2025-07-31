const GET_INSTANT_QUOTATION_TITLE = "//p[text()='Get Instant Quotation']"
const COPYWRITING_1 = '//*[@id="root"]/div/div/div[2]/div[1]/div[2]/p'
const COPYWRITING_2 = '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/p'
const INDIVIDUAL_TAB = '/html/body/div/div/div/div[2]/div[3]/div/div[1]/div/div/div/button[1]'
const BUSINESS_TAB = '/html/body/div/div/div/div[2]/div[3]/div/div[1]/div/div/div/button[2]'
const PRIVACY_NOTICE = "//p[text()='PRIVACY NOTICE']"
const X_BUTTON = '/html/body/div/div/div/div[1]/div[1]/div[2]/img'

class GetInstantQuotationPage{

    wait_until_screen_displayed(){
        $(GET_INSTANT_QUOTATION_TITLE).waitForDisplayed()
    }

    get get_instant_quotation_title(){
        return $(GET_INSTANT_QUOTATION_TITLE)
    }

    get copywriting_1(){
        return $(COPYWRITING_1)
    }

    get copywriting_2(){
        return $(COPYWRITING_2)
    }

    get individual_tab(){
        return $(INDIVIDUAL_TAB)
    }

    get business_tab(){
        return $(BUSINESS_TAB)
    }

    get privacy_notice(){
        return $(PRIVACY_NOTICE)
    }

    get x_button(){
        return $(X_BUTTON)
    }
}

export default new GetInstantQuotationPage();