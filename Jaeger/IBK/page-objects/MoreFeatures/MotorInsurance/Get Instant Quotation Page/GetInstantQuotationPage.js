const GET_INSTANT_QUOTATION_TITLE = "//p[text()='Get Instant Quotation']"
const COPYWRITING_1 = '//p[contains(.,"Testing Free 24/7 emergency roadside assistance with access to over 700 panel workshops nationwide.")]'
const COPYWRITING_2 = '//p[contains(.,"Free jumpstart, change of battery, tyre replacement services and more.")]'
const INDIVIDUAL_TAB = '//button[contains(.,"Individual")]'
const BUSINESS_TAB = '//button[contains(.,"Business")]'
const X_BUTTON = '(//p[contains(.,"Get Instant Quotation")]/parent::div/parent::div/preceding-sibling::div/child::div/child::img)[2]'
const CANCEL_TITLE = '//p[contains(.,"Cancel Application")]'
const CANCEL_COPYWRITING = '//p[contains(.,"Cancel Application")]/following-sibling::p'
const YES_BUTTON = '//p[contains(.,"YES")]'
const NO_BUTTON = '(//p[contains(.,"NO")])[2]'


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

    get cancel_title(){
        return $(CANCEL_TITLE)
    }

    get cancel_copywriting(){
        return $(CANCEL_COPYWRITING)
    }

    get yes_button(){
        return $(YES_BUTTON)
    }

    get no_button(){
        return $(NO_BUTTON)
    }
}

export default new GetInstantQuotationPage();