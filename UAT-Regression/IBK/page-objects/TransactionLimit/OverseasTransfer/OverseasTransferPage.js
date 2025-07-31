const OVERSEAS_TRANSFER_TITLE = '(//p[contains(.,"Overseas Transfer")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[8]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[8]/parent::div/following-sibling::p'
const PAY_TO_ACCOUNT_FIELD_LABEL = '//label[contains(.,"Pay to Account")]'
const PAY_TO_ACCOUNT_FIELD = '//label[contains(.,"Pay to Account")]/parent::div'
const MYR_0 = "//div[text()='MYR 0.00']"
const MYR_1000 = "//div[text()='MYR 1,000.00']"
const MYR_2000 = "//div[text()='MYR 2,000.00']"
const MYR_3000 = "//div[text()='MYR 3,000.00']"
const MYR_4000 = "//div[text()='MYR 4,000.00']"
const PAY_TO_CASH_FIELD_LABEL = '//label[contains(.,"Pay in Cash (Western Union)")]'
const PAY_TO_CASH_FIELD = '//label[contains(.,"Pay in Cash (Western Union)")]/parent::div'
const SAVE_BUTTON = '(//span[contains(.,"Save")]/parent::span)[1]/parent::button'


class OverseasTransferPage{

    wait_until_screen_displayed(){
        $(OVERSEAS_TRANSFER_TITLE).getText()
    }

    get overseas_transfer_title(){
        return $(OVERSEAS_TRANSFER_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get pay_to_account_field_label(){
        return $(PAY_TO_ACCOUNT_FIELD_LABEL)
    }

    get pay_to_account_field(){
        return $(PAY_TO_ACCOUNT_FIELD)
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

    get pay_to_cash_field_label(){
        return $(PAY_TO_CASH_FIELD_LABEL)
    }

    get pay_to_cash_field(){
        return $(PAY_TO_CASH_FIELD)
    }

    get save_button(){
        return $(SAVE_BUTTON)
    }

}

export default new OverseasTransferPage()