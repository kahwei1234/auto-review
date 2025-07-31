const PAYMENT_TITLE = '(//p[contains(.,"Payment")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[8]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[8]/parent::div/following-sibling::p'
const OWN_ACCOUNT_FIELD_LABEL = '//label[contains(.,"Own Account")]'
const OWN_ACCOUNT_FIELD = '//label[contains(.,"Own Account")]/parent::div'
const MYR_0 = "//div[text()='MYR 0.00']"
const MYR_1000 = "//div[text()='MYR 1,000.00']"
const MYR_2000 = "//div[text()='MYR 2,000.00']"
const MYR_3000 = "//div[text()='MYR 3,000.00']"
const MYR_4000 = "//div[text()='MYR 4,000.00']"
const OTHER_BILLERS_FIELD_LABEL = '//label[contains(.,"Other Billers")]'
const OTHER_BILLERS_FIELD = '//label[contains(.,"Other Billers")]/parent::div'
const JOMPAY_FIELD_LABEL = '//label[contains(.,"JomPAY")]'
const JOMPAY_FIELD = '//label[contains(.,"JomPAY")]/parent::div'
const SAVE_BUTTON = '(//span[contains(.,"Save")]/parent::span)[1]/parent::button'


class PaymentPage{

    wait_until_screen_displayed(){
        $(PAYMENT_TITLE).getText()
    }

    get payment_title(){
        return $(PAYMENT_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get own_account_field_label(){
        return $(OWN_ACCOUNT_FIELD_LABEL)
    }

    get own_account_field(){
        return $(OWN_ACCOUNT_FIELD)
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

    get other_billers_field_label(){
        return $(OTHER_BILLERS_FIELD_LABEL)
    }

    get other_billers_field(){
        return $(OTHER_BILLERS_FIELD)
    }

    get jompay_field_label(){
        return $(JOMPAY_FIELD_LABEL)
    }

    get jompay_field(){
        return $(JOMPAY_FIELD)
    }

    get save_button(){
        return $(SAVE_BUTTON)
    }

}

export default new PaymentPage()