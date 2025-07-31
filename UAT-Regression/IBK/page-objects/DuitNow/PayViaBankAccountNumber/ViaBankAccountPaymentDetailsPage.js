const PAYMENT_TYPE_DROPDOWN = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[3]/div[1]/div/div'
const PAYMENT_TYPE_FIELD = '/html/body/div[1]/div/div[3]/div[2]/div/form/div[1]/div[3]/div[1]/div/div/div[1]/div'
const CREDIT_CARD_PAYMENT_BUTTON = "//div[text()='Credit Card Payment']"
const FUND_TRANSFER_BUTTON = "//div[text()='Fund Transfer']"
const HIRE_PURCHASE_BUTTON = "//div[text()='Hire Purchase']"
const LOAN_PAYMENT_BUTTON = "//div[text()='Loan Payment']"
const ACCOUNT_NUMBER_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[3]/div[2]/div[1]'
const ACCOUNT_NUMBER = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[3]/div[2]/div[1]/input'
const ACCOUNT_NUMBER_LABEL = "//label[text()='Account Number']"
const RECIPIENT_ACCOUNT_NUMBER_FIELD = '//label[contains(.,"Recipient Account Number")]/parent::div'
const RECIPIENT_ACCOUNT_NUMBER = '//label[contains(.,"Recipient Account Number")]/parent::div/child::input'
const RECIPIENT_ACCOUNT_NUMBER_LABEL = '//label[contains(.,"Recipient Account Number")]'
const RECIPIENT_RESIDENTIAL_STATUS_DROPDOWN = '//label[contains(.,"Recipient Residential Status")]/parent::div'
const RECIPIENT_RESIDENTIAL_STATUS_RESIDENT = '//label[contains(.,"Recipient Residential Status")]/parent::div/following-sibling::section/child::div[1]'
const RECIPIENT_RESIDENTIAL_STATUS_NONRESIDENT = '//label[contains(.,"Recipient Residential Status")]/parent::div/following-sibling::section/child::div[2]'
const RECIPIENT_RESIDENTIAL_STATUS_LABEL = '//label[contains(.,"Recipient Residential Status")]'
const AMOUNT_IN_MYR_FIELD = '//label[contains(.,"Amount in MYR")]/parent::div'
const AMOUNT_IN_MYR = '//label[contains(.,"Amount in MYR")]/parent::div/child::input'
const AMOUNT_IN_MYR_LABEL = '//label[contains(.,"Amount in MYR")]'
const RECIPIENT_REFERENCE_FIELD = '//label[contains(.,"Recipient Reference")]/parent::div'
const RECIPIENT_REFERENCE = '//label[contains(.,"Recipient Reference")]/parent::div/child::input'
const RECIPIENT_REFERENCE_LABEL = '//label[contains(.,"Recipient Reference")]'
const PAYMENT_DETAILS_FIELD = '//label[contains(.,"Payment Details (Optional)")]/parent::div'
const PAYMENT_DETAILS = '//label[contains(.,"Payment Details (Optional)")]/parent::div/child::input'
const PAYMENT_DETAILS_LABEL = '//label[contains(.,"Payment Details (Optional)")]'
const PAYMENT_DETAILS_DATA = '/html/body/div/div/div[5]/div[2]/div/form/div[1]/div[5]/div/div[1]/input'
const PAYMENT_DATE_FIELD = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[6]/div[1]/div/div'
const PAYMENT_DATE_30 = '//*[@id="__next"]/div/div[5]/div[2]/div/form/div[1]/div[6]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div/table/tbody/tr[5]/td[2]'
const NEXT_BUTTON = '//span[contains(.,"NEXT")]/parent::span/parent::button'
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

const BUSINESS_REGISTRATION_NUMBER_FIELD = '//label[contains(.,"Business Registration Number")]/parent::div'
const BUSINESS_REGISTRATION_NUMBER = '//label[contains(.,"Business Registration Number")]/parent::div/child::input'
const BUSINESS_REGISTRATION_NUMBER_LABEL = '//label[contains(.,"Business Registration Number")]'

const MOBILE_NUMBER_FIELD = '//label[contains(.,"Mobile Number")]/parent::div'
const MOBILE_NUMBER = '//label[contains(.,"Mobile Number")]/parent::div/child::input'
const MOBILE_NUMBER_LABEL = '//label[contains(.,"Mobile Number")]'

const NRIC_NUMBER_FIELD = '//label[contains(.,"NRIC Number")]/parent::div'
const NRIC_NUMBER = '//label[contains(.,"NRIC Number")]/parent::div/child::input'
const NRIC_NUMBER_LABEL = '//label[contains(.,"NRIC Number")]'

const ARMY_POLICE_NUMBER_FIELD = '//label[contains(.,"Army/Police Number")]/parent::div'
const ARMY_POLICE_NUMBER = '//label[contains(.,"Army/Police Number")]/parent::div/child::input'
const ARMY_POLICE_NUMBER_LABEL = '//label[contains(.,"Army/Police Number")]'

const PASSPORT_NUMBER_FIELD = '//label[contains(.,"Passport Number")]/parent::div'
const PASSPORT_NUMBER = '//label[contains(.,"Passport Number")]/parent::div/child::input'
const PASSPORT_NUMBER_LABEL = '//label[contains(.,"Passport Number")]'
const COUNTRY_DROPDOWN = '//label[contains(.,"Country")]/parent::div'
const COUNTRY_SEARCH = '//label[contains(.,"Country")]/parent::div/following-sibling::section/child::div/child::div/child::div/child::div/child::div/child::input'
const COUNTRY = '//label[contains(.,"Country")]/parent::div/following-sibling::section/child::div/child::div[2]/child::div/child::div'

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

    get recipient_account_number_field(){
        return $(RECIPIENT_ACCOUNT_NUMBER_FIELD)
    }

    get recipient_account_number(){
        return $(RECIPIENT_ACCOUNT_NUMBER)
    }

    get recipient_account_number_label(){
        return $(RECIPIENT_ACCOUNT_NUMBER_LABEL)
    }

    get recipient_residential_status_dropdown(){
        return $(RECIPIENT_RESIDENTIAL_STATUS_DROPDOWN)
    }

    get recipient_residential_status_resident(){
        return $(RECIPIENT_RESIDENTIAL_STATUS_RESIDENT)
    }

    get recipient_residential_status_nonresident(){
        return $(RECIPIENT_RESIDENTIAL_STATUS_NONRESIDENT)
    }

    get recipient_residential_status_label(){
        return $(RECIPIENT_RESIDENTIAL_STATUS_LABEL)
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

    get business_registration_number_field(){
        return $(BUSINESS_REGISTRATION_NUMBER_FIELD)
    }

    get business_registration_number(){
        return $(BUSINESS_REGISTRATION_NUMBER)
    }

    get business_registration_number_label(){
        return $(BUSINESS_REGISTRATION_NUMBER_LABEL)
    }

    get mobile_number_field(){
        return $(MOBILE_NUMBER_FIELD)
    }

    get mobile_number(){
        return $(MOBILE_NUMBER)
    }

    get mobile_number_label(){
        return $(MOBILE_NUMBER_LABEL)
    }

    get nric_number_field(){
        return $(NRIC_NUMBER_FIELD)
    }

    get nric_number(){
        return $(NRIC_NUMBER)
    }

    get nric_number_label(){
        return $(NRIC_NUMBER_LABEL)
    }

    get army_police_number_field(){
        return $(ARMY_POLICE_NUMBER_FIELD)
    }

    get army_police_number(){
        return $(ARMY_POLICE_NUMBER)
    }

    get army_police_number_label(){
        return $(ARMY_POLICE_NUMBER_LABEL)
    }

    get passport_number_field(){
        return $(PASSPORT_NUMBER_FIELD)
    }

    get passport_number(){
        return $(PASSPORT_NUMBER)
    }

    get passport_number_label(){
        return $(PASSPORT_NUMBER_LABEL)
    }

    get country_dropdown(){
        return $(COUNTRY_DROPDOWN)
    }

    get country_search(){
        return $(COUNTRY_SEARCH)
    }

    get country(){
        return $(COUNTRY)
    }

}

export default new ViaBankAccountPaymentDetailsPage()