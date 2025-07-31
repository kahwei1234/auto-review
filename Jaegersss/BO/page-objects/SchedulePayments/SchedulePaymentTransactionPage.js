const USERNAME_FIELD = "//label[text()='Username']"
const CIS_NO_FIELD = "//label[text()='CIS No.']"
const DEBIT_ACCOUNT_TYPE_FIELD = "//label[text()='Debit Account Type']"
const DEBIT_ACCOUNT_NUMBER_FIELD = "//label[text()='Debit Account Number']"
const BENEFICIARY_ACCOUNT_NUMBER_FIELD = "//label[text()='Beneficiary Account Number']"
const BENEFICIARY_NAME_FIELD = "//label[text()='Beneficiary Name']"
const BENEFICIARY_BANK_NAME_FIELD = "//label[text()='Beneficiary Bank Name']"
const PAYMENT_TYPE_FIELD = "//label[text()='Payment Type']"
const TRANSACTION_TYPE_FIELD = "//label[text()='Transaction Type']"
const RECURRING_FREQUENCY_FIELD = "//label[text()='Recurring Frequency']"
const NUMBER_RECURRING_PAYMENT_FIELD = "//label[text()='No. of Recurring Payment']"
const NEXT_PAYMENT_DATE_FIELD = "//label[text()='Next Payment Date']"
const AMOUNT_FIELD = "//label[text()='Amount (MYR)']"
const RECIPIENT_REFERENCE_FIELD = "//label[text()='Recipient Reference']"
const REFERENCE_NUMBER_FIELD = "//label[text()='Ref. No.']"
const CANCEL_BUTTON = "//span[text()='Cancel']"
const BACK_BUTTON = '/html/body/div[2]/div[2]/div/div/div[1]/div/button/span[1]'

class SchedulePaymentTransactionPage{

    wait_until_screen_displayed(){
        $(USERNAME_FIELD).waitForDisplayed()
    }

    get username_field(){
        return $(USERNAME_FIELD)
    }

    get cis_no_field(){
        return $(CIS_NO_FIELD)
    }

    get debit_account_type_field(){
        return $(DEBIT_ACCOUNT_TYPE_FIELD)
    }

    get debit_account_number_field(){
        return $(DEBIT_ACCOUNT_NUMBER_FIELD)
    }

    get beneficiary_account_number_field(){
        return $(BENEFICIARY_ACCOUNT_NUMBER_FIELD)
    }

    get beneficiary_name_field(){
        return $(BENEFICIARY_NAME_FIELD)
    }

    get beneficiary_bank_name_field(){
        return $(BENEFICIARY_BANK_NAME_FIELD)
    }

    get payment_type_field(){
        return $(PAYMENT_TYPE_FIELD)
    }

    get transaction_type_field(){
        return $(TRANSACTION_TYPE_FIELD)
    }

    get recurring_frequency_field(){
        return $(RECURRING_FREQUENCY_FIELD)
    }

    get number_recurring_payment_field(){
        return $(NUMBER_RECURRING_PAYMENT_FIELD)
    }

    get next_payment_date_field(){
        return $(NEXT_PAYMENT_DATE_FIELD)
    }

    get amount_field(){
        return $(AMOUNT_FIELD)
    }

    get recipient_reference_field(){
        return $(RECIPIENT_REFERENCE_FIELD)
    }

    get reference_number_field(){
        return $(REFERENCE_NUMBER_FIELD)
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }
    
    get back_button(){
        return $(BACK_BUTTON)
    }

}

export default new SchedulePaymentTransactionPage()