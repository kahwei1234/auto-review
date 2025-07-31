const SUBMIT_SERVICE_REQUEST_TITLE = "//p[text()='Submit Service Request']"
const PRODUCT_TYPE_DROPDOWN = '//*[@id="root"]/div/div/div[2]/form/div/div/div[1]/div/div'
const PRODUCT_TYPE_PERSONAL_LOAN = "//p[text()='Personal Loan']"
const PRODUCT_TYPE_RHB_CREDIT_CARD = "//p[text()='RHB Credit Card']"
const PRODUCT_TYPE_RHB_DEBIT_CARD = "//p[text()='RHB Debit Card']"
const PRODUCT_CATEGORY_DROPDOWN = '//*[@id="root"]/div/div/div[2]/form/div/div/div[2]/div/div'
const PRODUCT_CATEGORY_PERSONAL_FINANCING_I = "//p[text()='Personal Financing-i']"
const PRODUCT_CATEGORY_PERSONAL_FINANCING = "//p[text()='Personal Financing']"
const PRODUCT_CATEGORY_RHB_DEBIT_CARD = "//p[text()='RHB Debit Card']"
const PRODUCT_CATEGORY_RHB_DEBIT_CARD_ISLAMIC = "//p[text()='RHB Debit Card Islamic']"
const SERVICE_TYPE_DROPDOWN = '//*[@id="root"]/div/div/div[2]/form/div/div/div[3]/div/div'
const SERVICE_TYPE_SETTLEMENT_LETTER = "//p[text()='Settlement Letter (Personal Loan)']"
const SERVICE_TYPE_RELEASE_LETTER = "//p[text()='Release Letter']"
const SERVICE_TYPE_UNBLOCK_3D_SECURE_OTP = "//p[text()='Unblock 3D Secure OTP']"
const SERVICE_TYPE_CHANGE_CARD_LIMIT = "//p[text()='Change Card Limit']"
const SERVICE_TYPE_AUTO_DEBIT_OR_OVERSEAS_TRANSACTION_ACTIVATION = "//p[text()='Auto Debit or Overseas Transactions Activation']"
const LOAN_ACCOUNT_NUMBER = '//*[@id="loanAccountNumber"]'
const TYPE_OF_PERSONAL_LOAN = '//*[@id="typeOfPersonalLoan"]'
const SETTLEMENT_DATE_FIELD = '//*[@id=":r8:"]'
const SETTLEMENT_DATE =  "//p[text()='30']"
const MORE_INFORMATION_LINK = "//p[text()='MORE INFORMATION']"
const SUBMIT_BUTTON = "//p[text()='SUBMIT']"

class SubmitServiceRequestPage{

    wait_until_screen_displayed(){
        $(SUBMIT_SERVICE_REQUEST_TITLE).waitForDisplayed()
    }

    get submit_service_request_title(){
        return $(SUBMIT_SERVICE_REQUEST_TITLE)
    }

    get product_type_dropdown(){
        return $(PRODUCT_TYPE_DROPDOWN)
    }

    get product_type_personal_loan(){
        return $(PRODUCT_TYPE_PERSONAL_LOAN)
    }

    get product_type_rhb_credit_card(){
        return $(PRODUCT_TYPE_RHB_CREDIT_CARD)
    }

    get product_type_rhb_debit_card(){
        return $(PRODUCT_TYPE_RHB_DEBIT_CARD)
    }

    get product_category_dropdown(){
        return $(PRODUCT_CATEGORY_DROPDOWN)
    }

    get product_category_personal_financing_i(){
        return $(PRODUCT_CATEGORY_PERSONAL_FINANCING_I)
    }

    get product_category_personal_financing(){
        return $(PRODUCT_CATEGORY_PERSONAL_FINANCING)
    }

    get product_category_rhb_debit_card(){
        return $(PRODUCT_CATEGORY_RHB_DEBIT_CARD)
    }

    get product_category_rhb_debit_card_islamic(){
        return $(PRODUCT_CATEGORY_RHB_DEBIT_CARD_ISLAMIC)
    }

    get service_type_dropdown(){
        return $(SERVICE_TYPE_DROPDOWN)
    }

    get service_type_settlement_letter(){
        return $(SERVICE_TYPE_SETTLEMENT_LETTER)
    }

    get service_type_release_letter(){
        return $(SERVICE_TYPE_RELEASE_LETTER)
    }

    get service_type_unblock_3d_secure_otp(){
        return $(SERVICE_TYPE_UNBLOCK_3D_SECURE_OTP)
    }

    get service_type_change_card_limit(){
        return $(SERVICE_TYPE_CHANGE_CARD_LIMIT)
    }

    get service_type_auto_debit_or_overseas_transaction_activation(){
        return $(SERVICE_TYPE_AUTO_DEBIT_OR_OVERSEAS_TRANSACTION_ACTIVATION)
    }

    get loan_account_number(){
        return $(LOAN_ACCOUNT_NUMBER)
    }

    get type_of_personal_loan(){
        return $(TYPE_OF_PERSONAL_LOAN)
    }

    get settlement_date_field(){
        return $(SETTLEMENT_DATE_FIELD)
    }

    get settlement_date(){
        return $(SETTLEMENT_DATE)
    }

    get more_information_link(){
        return $(MORE_INFORMATION_LINK)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

}

export default new SubmitServiceRequestPage();