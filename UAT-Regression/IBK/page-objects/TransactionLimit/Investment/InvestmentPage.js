const INVESTMENT_TITLE = '(//p[contains(.,"Investment")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[8]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[8]/parent::div/following-sibling::p'
const MULTI_CURRENCY_ACCOUNT_FIELD_LABEL = '//label[contains(.,"Multi Currency Account")]'
const MULTI_CURRENCY_ACCOUNT_FIELD = '//label[contains(.,"Multi Currency Account")]/parent::div'
const MYR_0 = "//div[text()='MYR 0.00']"
const MYR_1000 = "//div[text()='MYR 1,000.00']"
const MYR_2000 = "//div[text()='MYR 2,000.00']"
const MYR_3000 = "//div[text()='MYR 3,000.00']"
const MYR_4000 = "//div[text()='MYR 4,000.00']"
const ASNB_OWN_ACCOUNT_FIELD_LABEL = '//label[contains(.,"ASNB Own Account")]'
const ASNB_OWN_ACCOUNT_FIELD = '//label[contains(.,"ASNB Own Account")]/parent::div'
const ASNB_THIRD_PARTY_ACCOUNT_FIELD_LABEL = '//label[contains(.,"ASNB Third Party Account")]'
const ASNB_THIRD_PARTY_ACCOUNT_FIELD = '//label[contains(.,"ASNB Third Party Account")]/parent::div'
const SAVE_BUTTON = '(//span[contains(.,"Save")]/parent::span)[1]/parent::button'


class InvestmentPage{

    wait_until_screen_displayed(){
        $(INVESTMENT_TITLE).getText()
    }

    get investment_title(){
        return $(INVESTMENT_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get multi_currency_account_field_label(){
        return $(MULTI_CURRENCY_ACCOUNT_FIELD_LABEL)
    }

    get multi_currency_account_field(){
        return $(MULTI_CURRENCY_ACCOUNT_FIELD)
    }

    get myr_0(){
        return $(MYR_0)
    }

    get myr_1000(){
        return $(MYR_1000)
    }

    get myr_2000(){
        return $(MYR_2000)
    }

    get myr_3000(){
        return $(MYR_3000)
    }

    get myr_4000(){
        return $(MYR_4000)
    }

    get asnb_own_account_field_label(){
        return $(ASNB_OWN_ACCOUNT_FIELD_LABEL)
    }

    get asnb_own_account_field(){
        return $(ASNB_OWN_ACCOUNT_FIELD)
    }

    get asnb_third_party_account_field_label(){
        return $(ASNB_THIRD_PARTY_ACCOUNT_FIELD_LABEL)
    }

    get asnb_third_party_account_field(){
        return $(ASNB_THIRD_PARTY_ACCOUNT_FIELD)
    }

    get save_button(){
        return $(SAVE_BUTTON)
    }

}

export default new InvestmentPage()