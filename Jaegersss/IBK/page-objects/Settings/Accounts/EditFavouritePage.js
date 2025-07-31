const PAYMENT_DETAILS_BANK_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[6]/div/p[1]'
const PAYMENT_DETAILS_BANK = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[6]/div/p[2]'
const PAYMENT_DETAILS_RECIPIENT_ACCOUNT_NUMBER_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[7]/div/p[1]'
const PAYMENT_DETAILS_RECIPIENT_ACCOUNT_NUMBER = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[7]/div/p[2]'
const PAYMENT_DETAILS_PAYMENT_TYPE_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[8]/div/p[1]'
const PAYMENT_DETAILS_PAYMENT_TYPE = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[8]/div/p[2]'
const PAYMENT_DETAILS_RECIPIENT_REFERENCE_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[11]/div/div[1]'
const PAYMENT_DETAILS_RECIPIENT_REFERENCE = '/html/body/div/div/div[3]/div/div/form/div[2]/div[11]/div/div[1]/input'
const ADD_TO_QUICK_LINK_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[12]/div[1]/p[1]'
const ADD_TO_QUICK_LINK_DESC = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[12]/div[1]/p[2]'
const ENABLE_QUICK_PAY_FIELD = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[13]/div[1]/p[1]'
const ENABLE_QUICK_PAY_DESC1 = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[13]/div[1]/p[2]'
const ENABLE_QUICK_PAY_DESC2 = '//*[@id="__next"]/div/div[3]/div/div/form/div[2]/div[13]/div[1]/p[3]'
const EDIT_SAVE_BUTTON = "//span[text()='Save']"

class EditFavouritePage{

    wait_until_screen_displayed(){
        $(PAYMENT_DETAILS_BANK_FIELD).getText()
    }

    wait_until_screen_displayed(){
        $(EDIT_SAVE_BUTTON).getText()
    }

    get payment_details_bank_field(){
        return $(PAYMENT_DETAILS_BANK_FIELD)
    }

    get payment_details_bank(){
        return $(PAYMENT_DETAILS_BANK)
    }


    get payment_details_recipient_account_number_field(){
        return $(PAYMENT_DETAILS_RECIPIENT_ACCOUNT_NUMBER_FIELD)
    }

    get payment_details_recipient_account_number(){
        return $(PAYMENT_DETAILS_RECIPIENT_ACCOUNT_NUMBER)
    }

    get payment_details_payment_type_field(){
        return $(PAYMENT_DETAILS_PAYMENT_TYPE_FIELD)
    }

    get payment_details_payment_type(){
        return $(PAYMENT_DETAILS_PAYMENT_TYPE)
    }

    get payment_details_recipient_reference_field(){
        return $(PAYMENT_DETAILS_RECIPIENT_REFERENCE_FIELD)
    }

    get payment_details_recipient_reference(){
        return $(PAYMENT_DETAILS_RECIPIENT_REFERENCE)
    }

    get add_to_quick_link_field(){
        return $(ADD_TO_QUICK_LINK_FIELD)
    }

    get add_to_quick_link_desc(){
        return $(ADD_TO_QUICK_LINK_DESC)
    }

    get enable_quick_pay_field(){
        return $(ENABLE_QUICK_PAY_FIELD)
    }

    get enable_quick_pay_desc1(){
        return $(ENABLE_QUICK_PAY_DESC1)
    }

    get enable_quick_pay_desc2(){
        return $(ENABLE_QUICK_PAY_DESC2)
    }

    get edit_save_button(){
        return $(EDIT_SAVE_BUTTON)
    }

}

export default new EditFavouritePage()