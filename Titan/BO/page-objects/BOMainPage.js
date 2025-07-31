const WORKFLOW_BUTTON = "//p[text()='Workflow']"
const USER_MANAGEMENT_BUTTON = "//p[text()='User Management']"
const USER_BUTTON = "//p[text()='User']"
const USER_GROUP_BUTTON = "//p[text()='User Group']"
const PROVIDE_ASSISTANCE_BUTTON = "//p[text()='Provide Assistance']"
const ACTIVITIES_BUTTON = "//p[text()='Activities']"
const ACTIVITIES_SEARCH_FIELD = '/html/body/div/div/section/div[1]/div[1]/div[3]/div/div/div'
const ACTIVITIES_SEARCH ='/html/body/div/div/section/div[1]/div[1]/div[3]/div/div/div/input'
const FIRST_CELL = '/html/body/div/div[2]/section/div[2]/div/section/table/tbody/tr'
const ACCOUNT_BUTTON = "//p[text()='Account']"
const SCHEDULE_PAYMENTS_BUTTON = "//p[text()='Scheduled Payments']"
const FAVOURITE_BUTTON = "//p[text()='Favourite']"
const DEVICE_BUTTON = "//p[text()='Device']"
const LIMIT_SETTINGS_BUTTON = "//p[text()='Limit Settings']"
const DUITNOW_BUTTON = "//p[text()='DuitNow']"
const REF_ID_BUTTON = "//p[text()='REF ID']"
const DUITNOW_REQUEST_BUTTON = "//p[text()='DuitNow Request']"
const LOG_INQUIRY_BUTTON = "//p[text()='Log Inquiry']"
const FO_AUDIT_LOG_BUTTON = "//p[text()='FO Audit Log']"
const TELEMETRY_BUTTON = "//p[text()='Telemetry']"
const BO_AUDIT_BUTTON = "//p[text()='BO Audit']"
const BILLER_MANAGEMENT = "//p[text()='Biller Management']"
const BILLER_MAINTENANCE = "//p[text()='Biller Maintenance']"
const IBK_MBK_SETUP_BUTTON = "//p[text()='IBK MBK Setup']"
const EBANNER_BUTTON = "//p[text()='e-Banner']"
const TRANSACTION_COOLING_OFF_BUTTON = "//p[text()='Transaction Cooling Off']"
const TRANSACTION_SUMMARY_BUTTON = "//p[text()='Summary']"
const TRANSACTION_DETAILS_BUTTON = "//p[text()='Details']"
const TRANSACTION_SETTINGS_BUTTON = "//p[text()='TCOP Settings']"

class BOMainPage{

    wait_until_screen_displayed(){
        $(PROVIDE_ASSISTANCE_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACTIVITIES_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACTIVITIES_SEARCH_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(FIRST_CELL).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(LOG_INQUIRY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(FO_AUDIT_LOG_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(TELEMETRY_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(BO_AUDIT_BUTTON).getText()
    }

    get workflow_button(){
        return $(WORKFLOW_BUTTON)
    }

    get user_management_button(){
        return $(USER_MANAGEMENT_BUTTON)
    }

    get user_button(){
        return $(USER_BUTTON)
    }

    get user_group_button(){
        return $(USER_GROUP_BUTTON)
    }

    get provide_assistance_button(){
        return $(PROVIDE_ASSISTANCE_BUTTON)
    }

    get activities_button(){
        return $(ACTIVITIES_BUTTON)
    }

    get activities_search_field(){
        return $(ACTIVITIES_SEARCH_FIELD)
    }

    get activities_search(){
        return $(ACTIVITIES_SEARCH)
    }

    get first_cell(){
        return $(FIRST_CELL)
    }

    get account_button(){
        return $(ACCOUNT_BUTTON)
    }

    get schedule_payments_button(){
        return $(SCHEDULE_PAYMENTS_BUTTON)
    }

    get favourite_button(){
        return $(FAVOURITE_BUTTON)
    }

    get device_button(){
        return $(DEVICE_BUTTON)
    }

    get limit_settings_button(){
        return $(LIMIT_SETTINGS_BUTTON)
    }

    get duitnow_button(){
        return $(DUITNOW_BUTTON)
    }

    get ref_id_button(){
        return $(REF_ID_BUTTON)
    }

    get duitnow_request_button(){
        return $(DUITNOW_REQUEST_BUTTON)
    }

    get log_inquiry_button(){
        return $(LOG_INQUIRY_BUTTON)
    }

    get fo_audit_log_button(){
        return $(FO_AUDIT_LOG_BUTTON)
    }

    get telemetry_button(){
        return $(TELEMETRY_BUTTON)
    }

    get bo_audti_button(){
        return $(BO_AUDIT_BUTTON)
    }

    get biller_management(){
        return $(BILLER_MANAGEMENT)
    }

    get biller_maintenance(){
        return $(BILLER_MAINTENANCE)
    }

    get ibk_mbk_setup_button(){
        return $(IBK_MBK_SETUP_BUTTON)
    }

    get ebanner_button(){
        return $(EBANNER_BUTTON)
    }

    get transaction_cooling_off_button(){
        return $(TRANSACTION_COOLING_OFF_BUTTON)
    }

    get transaction_summary_button(){
        return $(TRANSACTION_SUMMARY_BUTTON)
    }

    get transaction_details_button(){
        return $(TRANSACTION_DETAILS_BUTTON)
    }

    get transaction_settings_button(){
        return $(TRANSACTION_SETTINGS_BUTTON)
    }
}

export default new BOMainPage()