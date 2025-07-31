const EVENT_DROPDOWN = '//*[@id="app"]/div[2]/section/section[1]/section[1]/section[1]/img'
const STATUS_DROPDOWN = '//*[@id="app"]/div[2]/section/section[1]/section[1]/section[4]/img'
const BILL_PAYMENT = '/html/body/div[2]/div[2]/div/section/section/div/div[6]'
const FUND_TRANSFER = '/html/body/div[2]/div[2]/div/section/section/div/div[5]'
const BILL_PAYMENT_MORTGAGE = '/html/body/div[2]/div[2]/div/section/section/div/div[6]/div/div[5]/label/span[2]'
const BILL_PAYMENT_PERSONAL_FINANCE = '/html/body/div[2]/div[2]/div/section/section/div/div[6]/div/div[7]/label/span[2]'
const BILL_PAYMENT_ASB = '/html/body/div[2]/div[2]/div/section/section/div/div[6]/div/div[1]/label/span[2]'
const BILL_PAYMENT_HIRE_PURCHASE = '/html/body/div[2]/div[2]/div/section/section/div/div[6]/div/div[2]/label/span[2]'
const ADD_PAYMENT_SCHEDULE_INTRABANK = '/html/body/div[2]/div[2]/div/section/section/div/div[15]/div/div[3]/label/span[2]'
const DELETE_PAYMENT_SCHEDULE_INTRABANK = '/html/body/div[2]/div[2]/div/section/section/div/div[15]/div/div[7]/label/span[1]/span[1]/input'
const APPLY_BUTTON = '//*[@id="event"]/span[1]'
const STATUS_APPLY_BUTTON = '//*[@id="status"]/span[1]'
const SUCCESSFUL_BUTTON = '/html/body/div[2]/div[2]/div/section/div/div[1]/label/span[1]/span[1]/input'
const FAILED_BUTTON = '/html/body/div[2]/div[2]/div/section/div/div[2]/label/span[1]/span[1]/input'
const EVENT_NAME = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/th/section'
const EVENT_USERNAME = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[2]/section'
const EVENT_DIV = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[3]/section'
const EVENT_STATUS = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[4]/section'
const EVENT_AMOUNT = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[1]/section/section/span[2]'
const EVENT_SCHEDULE_TYPE = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[1]/section/section/span[5]'
const EVENT_SCHEDULE_TYPE_RECURRING = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr/td[1]/section/section/span[4]'
const DETAIL_USERNAME = '//*[@id="simple-modal-description"]/table/tbody/tr[1]/td[2]'
const DETAIL_CIS_NO = '//*[@id="simple-modal-description"]/table/tbody/tr[2]/td[2]'
const DETAIL_STATUS_CODE = '//*[@id="simple-modal-description"]/table/tbody/tr[4]/td[2]'
const DETAIL_STATUS_DESCRIPTION = '//*[@id="simple-modal-description"]/table/tbody/tr[5]/td[2]'
const DETAIL_STATUS_SUMMARY = '//*[@id="simple-modal-description"]/table/tbody/tr[6]/td[2]'
const DETAIL_CHANNEL = '//*[@id="simple-modal-description"]/table/tbody/tr[7]/td[2]'
const DETAIL_STATUS = '//*[@id="simple-modal-description"]/table/tbody/tr[12]/td[2]'
const DETAIL_PRODUCT_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[18]/td[2]'
const ASB_DETAIL_PRODUCT_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[17]/td[2]'
const DETAIL_AMOUNT = '//*[@id="simple-modal-description"]/table/tbody/tr[20]/td[2]'
const ASB_DETAIL_SCHEDULE_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[20]/td[2]'
const MORTGAGE_DETAIL_SCHEDULE_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[21]/td[2]'
const DETAIL_CANCEL_BUTTON = '/html/body/div[2]/div[2]/div/div/div[2]/div/div[2]/div/button'
const DETAIL_BACK_BUTTON = '/html/body/div[2]/div[2]/div/div/div[1]/div/button/span[1]/p'
const DETAIL_REF_NO = "//label[text()='Ref No']"
const DETAIL_TRANSACTION_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[18]/td[2]'
const FIRST_TRANSACTION = '//*[@id="app"]/div[2]/section/section[6]/table/tbody[1]/tr'

class FOAuditLogPage{

    wait_until_screen_displayed(){
        $(EVENT_DROPDOWN).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(BILL_PAYMENT).getText()
    }

    wait_until_screen_displayed(){
        $(FUND_TRANSFER).getText()
    }

    wait_until_screen_displayed(){
        $(BILL_PAYMENT_MORTGAGE).getText()
    }

    wait_until_screen_displayed(){
        $(BILL_PAYMENT_PERSONAL_FINANCE).getText()
    }

    wait_until_screen_displayed(){
        $(BILL_PAYMENT_ASB).getText()
    }

    wait_until_screen_displayed(){
        $(APPLY_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(EVENT_NAME).getText()
    }

    wait_until_screen_displayed(){
        $(DETAIL_USERNAME).getText()
    }

    get event_dropdown(){
        return $(EVENT_DROPDOWN)
    }

    get status_dropdown(){
        return $(STATUS_DROPDOWN)
    }

    get bill_payment(){
        return $(BILL_PAYMENT)
    }

    get fund_transfer(){
        return $(FUND_TRANSFER)
    }

    get bill_payment_mortgage(){
        return $(BILL_PAYMENT_MORTGAGE)
    }

    get bill_payment_personal_finance(){
        return $(BILL_PAYMENT_PERSONAL_FINANCE)
    }

    get bill_payment_asb(){
        return $(BILL_PAYMENT_ASB)
    }

    get delete_payment_schedule_intrabank(){
        return $(DELETE_PAYMENT_SCHEDULE_INTRABANK)
    }

    get bill_payment_hire_purchase(){
        return $(BILL_PAYMENT_HIRE_PURCHASE)
    }

    get add_payment_schedule_purchase(){
        return $(ADD_PAYMENT_SCHEDULE_INTRABANK)
    }

    get apply_button(){
        return $(APPLY_BUTTON)
    }

    get status_apply_button(){
        return $(STATUS_APPLY_BUTTON)
    }

    get successful_button(){
        return $(SUCCESSFUL_BUTTON)
    }

    get failed_button(){
        return $(FAILED_BUTTON)
    }

    get event_name(){
        return $(EVENT_NAME)
    }

    get event_username(){
        return $(EVENT_USERNAME)
    }

    get event_div(){
        return $(EVENT_DIV)
    }

    get event_status(){
        return $(EVENT_STATUS)
    }

    get event_amount(){
        return $(EVENT_AMOUNT)
    }

    get event_schedule_type(){
        return $(EVENT_SCHEDULE_TYPE)
    }

    get event_schedule_type_recurring(){
        return $(EVENT_SCHEDULE_TYPE_RECURRING)
    }

    get detail_username(){
        return $(DETAIL_USERNAME)
    }

    get detail_cis_no(){
        return $(DETAIL_CIS_NO)
    }

    get detail_status_code(){
        return $(DETAIL_STATUS_CODE)
    }

    get detail_status_description(){
        return $(DETAIL_STATUS_DESCRIPTION)
    }

    get detail_status_summary(){
        return $(DETAIL_STATUS_SUMMARY)
    }

    get detail_channel(){
        return $(DETAIL_CHANNEL)
    }

    get detail_status(){
        return $(DETAIL_STATUS)
    }

    get detail_product_type(){
        return $(DETAIL_PRODUCT_TYPE)
    }

    get asb_detail_product_type(){
        return $(ASB_DETAIL_PRODUCT_TYPE)
    }

    get mortgage_detail_product_type(){
        return $(MORTGAGE_DETAIL_SCHEDULE_TYPE)
    }

    get detail_amount(){
        return $(DETAIL_AMOUNT)
    }

    get asb_detail_schedule_type(){
        return $(ASB_DETAIL_SCHEDULE_TYPE)
    }

    get detail_cancel_button(){
        return $(DETAIL_CANCEL_BUTTON)
    }

    get detail_back_button(){
        return $(DETAIL_BACK_BUTTON)
    }

    get detail_ref_no(){
        return $(DETAIL_REF_NO)
    }

    get detail_transaction_type(){
        return $(DETAIL_TRANSACTION_TYPE)
    }

    get first_transaction(){
        return $(FIRST_TRANSACTION )
    }
}

export default new FOAuditLogPage()