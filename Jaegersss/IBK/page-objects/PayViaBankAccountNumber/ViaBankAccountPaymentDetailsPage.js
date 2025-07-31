const PAYMENT_TYPE_DROPDOWN = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[3]/div[1]/div/div'
const PAYMENT_TYPE_FIELD = '/html/body/div[1]/div/div[3]/div[2]/div/form/div[1]/div[3]/div[1]/div/div/div[1]/div'
const CREDIT_CARD_PAYMENT_BUTTON = "//div[text()='Credit Card Payment']"
const FUND_TRANSFER_BUTTON = "//div[text()='Fund Transfer']"
const HIRE_PURCHASE_BUTTON = "//div[text()='Hire Purchase']"
const LOAN_PAYMENT_BUTTON = "//div[text()='Loan Payment']"
const ACCOUNT_NUMBER_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[3]/div[2]/div[1]'
const ACCOUNT_NUMBER = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[3]/div[2]/div[1]/input'
const ACCOUNT_NUMBER_LABEL = "//label[text()='Account Number']"
const AMOUNT_IN_MYR_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[4]/div[1]/div[1]'
const AMOUNT_IN_MYR = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[4]/div[1]/div[1]/input'
const AMOUNT_IN_MYR_LABEL = "//label[text()='Amount in MYR']"
const RECIPIENT_REFERENCE_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[4]/div[2]/div[1]'
const RECIPIENT_REFERENCE = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[4]/div[2]/div[1]/input'
const RECIPIENT_REFERENCE_LABEL = "//label[text()='Recipient Reference']"
const RECIPIENT_REFERENCE_DATA = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[4]/div[2]/div[1]/input'
const PAYMENT_DETAILS_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[5]/div/div[1]'
const PAYMENT_DETAILS = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[5]/div/div[1]/input'
const PAYMENT_DETAILS_LABEL = "//label[text()='Payment Details (Optional)']"
const PAYMENT_DETAILS_DATA = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[5]/div/div[1]/input'
const PAYMENT_DATE_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[6]/div[1]/div/div'
const PAYMENT_DATE_30 = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[6]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div/table/tbody/tr[5]/td[2]'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[2]/div/div[2]/div/div/button'
const TERMS_AND_CONDITIONS = "//p[text()='TERMS & CONDITIONS']"
const ACCOUNT_NUMBER_ERROR_MESSAGE = '/html/body/div[1]/div/div[5]/div[2]/div/form/div[1]/div[3]/div[2]/div[2]/p'
const X_BUTTON = '//*[@id="__next"]/div/div[5]/div[1]/div/div[3]/div'
const CANCEL_PAYMENT_YES_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[2]/button'
const CANCEL_PAYMENT_NO_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[3]/div[1]/button'
const ADD_TO_FAV_TOGGLE = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[9]/div[2]/div[2]/div/div/div[2]'
const ADD_TO_QUICK_LINKS_TOGGLE = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[9]/div[4]/div[2]/div/div/div[2]'
const ENABLE_MONTHLY_RECURRING_TOGGLE = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[7]/div/div[1]/div[2]/div/div[2]'
const RECURRING_DESCRIPTION_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[7]/div/div[2]/div[2]/div[1]'
const RECURRING_DESCRIPTION = '/html/body/div[1]/div/div[5]/div[2]/div/form/div[1]/div[7]/div/div[2]/div[2]/div[1]/input'



class ViaBankAccountPaymentDetailsPage{

    wait_until_screen_displayed(){
        $(ACCOUNT_NUMBER_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(NEXT_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(RECURRING_DESCRIPTION_FIELD).getText()
    }

    get payment_type_dropdown(){
        return $(PAYMENT_TYPE_DROPDOWN)
    }

    get credit_card_payment_button(){
        return $(CREDIT_CARD_PAYMENT_BUTTON)
    }

    get fund_transfer_button(){
        return $(FUND_TRANSFER_BUTTON)
    }

    get hire_purchase_button(){
        return $(HIRE_PURCHASE_BUTTON)
    }

    get loan_payment_button(){
        return $(LOAN_PAYMENT_BUTTON)
    }

    get payment_type_field(){
        return $(PAYMENT_TYPE_FIELD)
    }
    
    get account_number_field(){
        return $(ACCOUNT_NUMBER_FIELD)
    }

    get account_number(){
        return $(ACCOUNT_NUMBER)
    }

    get account_number_label(){
        return $(ACCOUNT_NUMBER_LABEL)
    }

    get amount_in_myr_field(){
        return $(AMOUNT_IN_MYR_FIELD)
    }

    get amount_in_myr(){
        return $(AMOUNT_IN_MYR)
    }

    get amount_in_myr_label(){
        return $(AMOUNT_IN_MYR_LABEL)
    }

    get recipient_reference_field(){
        return $(RECIPIENT_REFERENCE_FIELD)
    }

    get recipient_reference(){
        return $(RECIPIENT_REFERENCE)
    }

    get recipient_reference_label(){
        return $(RECIPIENT_REFERENCE_LABEL)
    }

    get recipient_reference_data(){
        return $(RECIPIENT_REFERENCE_DATA)
    }

    get payment_details_field(){
        return $(PAYMENT_DETAILS_FIELD)
    }

    get payment_details(){
        return $(PAYMENT_DETAILS)
    }

    get payment_details_label(){
        return $(PAYMENT_DETAILS_LABEL)
    }

    get payment_details_data(){
        return $(PAYMENT_DETAILS_DATA)
    }

    get payment_date_field(){
        return $(PAYMENT_DATE_FIELD)
    }

    get payment_date_30(){
        return $(PAYMENT_DATE_30)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get terms_and_conditions(){
        return $(TERMS_AND_CONDITIONS)
    }

    get account_number_error_message(){
        return $(ACCOUNT_NUMBER_ERROR_MESSAGE)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get cancel_payment_yes_button(){
        return $(CANCEL_PAYMENT_YES_BUTTON)
    }

    get cancel_payment_no_button(){
        return $(CANCEL_PAYMENT_NO_BUTTON)
    }

    get add_to_fav_toggle(){
        return $(ADD_TO_FAV_TOGGLE)
    }

    get add_to_quick_links_toggle(){
        return $(ADD_TO_QUICK_LINKS_TOGGLE)
    }

    get enable_monthly_recurring_toggle(){
        return $(ENABLE_MONTHLY_RECURRING_TOGGLE)
    }

    get recurring_description_field(){
        return $(RECURRING_DESCRIPTION_FIELD)
    }

    get recurring_description(){
        return $(RECURRING_DESCRIPTION)
    }

}

export default new ViaBankAccountPaymentDetailsPage()