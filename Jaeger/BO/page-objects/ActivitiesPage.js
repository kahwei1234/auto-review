const SEGMENT_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[1]/section[2]'
const USERNAME_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[2]/section[2]'
const ID_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[1]/section[2]'
const USER_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[2]/section[2]'
const ID_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[4]/section[2]'
const CIS_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[5]/section[2]'
const AAOP_ID_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[6]/section[2]'
const USERNAME_STATUS_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[7]/section[2]'
const NEW_SEARCH_BUTTON = '//*[@id="app"]/div[2]/section/div[1]/div[1]/div[2]/div[2]/div/div/button'
const EVENT_CATEGORY_DROPDOWN = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/div[2]/section/section[2]/img'
const EVENT_DROPDOWN_SEARCH = '/html/body/div[2]/div[2]/div/section/section/div/div[1]/input'
const PROFILE_MANAGEMENT_CHECKBOX = "//span[text()='Profile Management']"
const CREDIT_CARD_CHECKBOX = "//span[text()='Credit Card Payment']"
const MANAGE_FAVOURITE_CHECKBOX = "//span[text()='Manage Favourites']"
const PRIVACY_SETTING_CHECKBOX = "//span[text()='Privacy Setting']"
const DUITNOW_CHECKBOX = "//span[text()='DuitNow']"
const FUND_TRANSFER_CHECKBOX = "//span[text()='Fund Transfer']"
const BILL_PAYMENT_CHECKBOX = "//span[text()='Bill Payment']"
const TOP_UP_CHECKBOX = "//span[text()='Top Up']"
const SECURE_PLUS_CHECKBOX = "//span[text()='Secure Plus']"
const AAOP_CHECKBOX = "//span[text()='AAoP']"
const OTHERS_CHECKBOX = "//span[text()='Others']"
const CASHXCESS_CHECKBOX = "//span[text()='CashXcess']"
const THIRD_PARTY_SERVICES_CHECKBOX = "//span[text()='Third Party Services']"
const MANAGE_SCHEDULE_PAYMENT_CHECKBOX = "//span[text()='Manage Schedule Payment']"
const CHANNEL_DROPDOWN = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/div[2]/section/section[3]/img'
const CHANNEL_DMB_CHECKBOX = "//span[text()='DMB']"
const CHANNEL_DIB_CHECKBOX = "//span[text()='DIB']"
const DELETE_PAYMENT_SCHEDULE_INTRABANK_CHECKBOX = '/html/body/div[2]/div[2]/div/section/section/div/div[16]/div[2]/div[7]/label/span[1]/span[1]/input'
const DELETE_PAYMENT_SCHEDULE_INTRABANK = "//span[text()='Delete Payment Schedule - Intrabank']"
const APPLY_BUTTON = '//*[@id="category"]/span[1]'
const EVENT_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[1]/section'
const EVENT_STATUS = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[4]/section'
const DESCRIPTION_AMOUNT_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[2]/section/span[2]'
const DESCRIPTION_SCHEDULE_TYPE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[2]/section/span[5]'
const DESCRIPTION_SCHEDULE_TYPE_REUCRRING = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[2]/section/span[4]'
const CREDIT_CARD_PAYMENT_SCHEDULE_TYPE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[2]/section/span[5]'
const ADD_PAYMENT_SCHEDULE_INTRABANK_SCHEDULE_TYPE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[2]/section/span[5]'
const CHANNEL_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[3]/section'
const STATUS_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/section/div[2]/div[4]/section'
const DETAIL_USERNAME = '//*[@id="simple-modal-description"]/table/tbody/tr[1]/td[2]'
const DETAIL_STATUS_CODE = '//*[@id="simple-modal-description"]/table/tbody/tr[4]/td[2]'
const DETAIL_STATUS_DESCRIPTION = '//*[@id="simple-modal-description"]/table/tbody/tr[5]/td[2]'
const DETAIL_STATUS_SUMMARY = '//*[@id="simple-modal-description"]/table/tbody/tr[6]/td[2]'
const DETAIL_TRANSACTION_TYPE = '//*[@id="simple-modal-description"]/table/tbody/tr[18]/td[2]'

class ActivitiesPage{

    wait_until_screen_displayed(){
        $(SEGMENT_VALUE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(NEW_SEARCH_BUTTON).waitForDisplayed()
    }

    get segment_value(){
        return $(SEGMENT_VALUE)
    }

    get username_value(){
        return $(USERNAME_VALUE)
    }

    get id_type_value(){
        return $(ID_TYPE_VALUE)
    }

    get user_type_value(){
        return $(USER_TYPE_VALUE)
    }

    get id_number_value(){
        return $(ID_NUMBER_VALUE)
    }

    get cis_number_value(){
        return $(CIS_NUMBER_VALUE)
    }

    get aaop_id_value(){
        return $(AAOP_ID_VALUE)
    }

    get username_status_value(){
        return $(USERNAME_STATUS_VALUE)
    }

    get new_search_button(){
        return $(NEW_SEARCH_BUTTON)
    }

    get event_category_dropdown(){
        return $(EVENT_CATEGORY_DROPDOWN)
    }

    get event_dropdown_search(){
        return $(EVENT_DROPDOWN_SEARCH)
    }

    get channel_dropdown(){
        return $(CHANNEL_DROPDOWN)
    }

    get profile_management_checkbox(){
        return $(PROFILE_MANAGEMENT_CHECKBOX)
    }
    
    get credit_card_checkbox(){
        return $(CREDIT_CARD_CHECKBOX)
    }

    get manage_favourite_checkbox(){
        return $(MANAGE_FAVOURITE_CHECKBOX)
    }

    get privacy_setting_checkbox(){
        return $(PRIVACY_SETTING_CHECKBOX)
    }

    get duitnow_checkbox(){
        return $(DUITNOW_CHECKBOX)
    }

    get fund_transfer_checkbox(){
        return $(FUND_TRANSFER_CHECKBOX)
    }

    get bill_payment_checkbox(){
        return $(BILL_PAYMENT_CHECKBOX)
    }

    get top_up_checkbox(){
        return $(TOP_UP_CHECKBOX)
    }

    get secure_plus_checkbox(){
        return $(SECURE_PLUS_CHECKBOX)
    }

    get aaop_checkbox(){
        return $(AAOP_CHECKBOX)
    }

    get others_checkbox(){
        return $(OTHERS_CHECKBOX)
    }

    get cashxcess_checkbox(){
        return $(CASHXCESS_CHECKBOX)
    }

    get third_party_services_checkbox(){
        return $(THIRD_PARTY_SERVICES_CHECKBOX)
    }

    get manage_schedule_payment_checkbox(){
        return $(MANAGE_SCHEDULE_PAYMENT_CHECKBOX)
    }

    get delete_payment_schedule_intrabank_checkbox(){
        return $(DELETE_PAYMENT_SCHEDULE_INTRABANK_CHECKBOX)
    }

    get delete_payment_schedule_intrabank(){
        return $(DELETE_PAYMENT_SCHEDULE_INTRABANK)
    }

    get channel_dmb_checkbox(){
        return $(CHANNEL_DMB_CHECKBOX)
    }

    get channel_dib_checkbox(){
        return $(CHANNEL_DIB_CHECKBOX)
    }

    get apply_button(){
        return $(APPLY_BUTTON)
    }

    get event_value(){
        return $(EVENT_VALUE)
    }

    get event_status(){
        return $(EVENT_STATUS)
    }

    get description_amount_value(){
        return $(DESCRIPTION_AMOUNT_VALUE)
    }

    get description_schedule_type(){
        return $(DESCRIPTION_SCHEDULE_TYPE)
    }

    get description_schedule_type_recurring(){
        return $(DESCRIPTION_SCHEDULE_TYPE_REUCRRING)
    }

    get credit_card_payment_schedule_type(){
        return $(CREDIT_CARD_PAYMENT_SCHEDULE_TYPE)
    }

    get add_payment_schedule_intrabank_schedule_type(){
        return $(ADD_PAYMENT_SCHEDULE_INTRABANK_SCHEDULE_TYPE)
    }

    get channel_value(){
        return $(CHANNEL_VALUE)
    }

    get status_value(){
        return $(STATUS_VALUE)
    }

    get detail_username(){
        return $(DETAIL_USERNAME)
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

    get detail_transaction_type(){
        return $(DETAIL_TRANSACTION_TYPE)
    }
}

export default new ActivitiesPage()