const EFFECTIVE_START_DATE = "//span[text()='Effective Start Date']"
const START_DATE_13 = '/html/body/div[3]/div[2]/div/section/div[1]/div/div[2]/div[2]/div[3]/div[4]'
const START_TIME_130PM = '/html/body/div[3]/div[2]/div/section/section/div[2]/div/div'
const EFFECTIVE_END_DATE = "//span[text()='Effective End Date']"
const END_DATE_30 = '/html/body/div[3]/div[2]/div/section/div[1]/div/div[2]/div[2]/div[5]/div[7]'
const DATE_APPLY_BUTTON = '/html/body/div[3]/div[2]/div/section/section/section[2]/button'
const BANNER_TITLE_FIELD = '//*[@id="simple-modal-description"]/div/div[3]/div[1]/div[1]/div'
const BANNER_TITLE_DATA = '//*[@id="simple-modal-description"]/div/div[3]/div[1]/div[1]/div/input'
const EMBEDDED_URL_FIELD = '//*[@id="simple-modal-description"]/div/div[3]/div[2]/div[1]/div'
const EMBEDDED_URL_DATA = '//*[@id="simple-modal-description"]/div/div[3]/div[2]/div[1]/div/input'
const IBK_PRE_LOGIN_BANNER_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/div/div[1]/div[1]/span'
const IBK_DASHBOARD_BANNER_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/div/div[2]/div[1]/span'
const IBK_EXPLORE_BANNER_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/div/div[3]/div[1]/span'
const IBK_LOGOUT_BANNER_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/div/div[4]/div[1]/span'
const MBK_PROMO_BANNER_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/div/div[5]/div[1]/span'
const CANCEL_BUTTON = "//span[text()='Cancel']"
const CONFIRM_AND_SUBMIT_BUTTON = "//span[text()='Confirm & Submit']"

class AddBannerPage{

    wait_until_screen_displayed(){
        $(EFFECTIVE_START_DATE).waitForDisplayed()
    }

    get effective_start_date(){
        return $(EFFECTIVE_START_DATE)
    }

    get start_date_13(){
        return $(START_DATE_13)
    }

    get start_time_130pm(){
        return $(START_TIME_130PM)
    }

    get effective_end_date(){
        return $(EFFECTIVE_END_DATE)
    }

    get end_date_30(){
        return $(END_DATE_30)
    }

    get date_apply_button(){
        return $(DATE_APPLY_BUTTON)
    }

    get banner_title_field(){
        return $(BANNER_TITLE_FIELD)
    }

    get banner_title_data(){
        return $(BANNER_TITLE_DATA)
    }

    get embedded_url_field(){
        return $(EMBEDDED_URL_FIELD)
    }

    get embedded_url_data(){
        return $(EMBEDDED_URL_DATA)
    }

    get ibk_pre_login_banner_title(){
        return $(IBK_PRE_LOGIN_BANNER_TITLE)
    }

    get ibk_dashboard_banner_title(){
        return $(IBK_DASHBOARD_BANNER_TITLE)
    }

    get ibk_explore_banner_title(){
        return $(IBK_EXPLORE_BANNER_TITLE)
    }

    get ibk_logout_banner_title(){
        return $(IBK_LOGOUT_BANNER_TITLE)
    }

    get mbk_promo_banner_title(){
        return $(MBK_PROMO_BANNER_TITLE)
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

    get confirm_and_submit_button(){
        return $(CONFIRM_AND_SUBMIT_BUTTON)
    }
  
}

export default new AddBannerPage()