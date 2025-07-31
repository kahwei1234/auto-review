const FUNCTION_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[1]/div'
const BANNER_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[2]/div'
const TITLE_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[3]/div'
const STATUS_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[4]/div'
const ACTION_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[5]/div'
const MAKER_NAME_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[6]/div'
const LAST_UPDATED_DATE_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr/th[7]/div'
const FIRST_PENDING_REQUEST = '//*[@id="app"]/div[2]/section/section/section/tbody/tr/td[3]/span'

class WorkflowEBannerPage{

    wait_until_screen_displayed(){
        $(FUNCTION_TITLE).waitForDisplayed()
    }

    get function_title(){
        return $(FUNCTION_TITLE)
    }

    get banner_title(){
        return $(BANNER_TITLE)
    }

    get title_title(){
        return $(TITLE_TITLE)
    }

    get status_title(){
        return $(STATUS_TITLE)
    }

    get action_title(){
        return $(ACTION_TITLE)
    }

    get maker_name_title(){
        return $(MAKER_NAME_TITLE)
    }

    get last_updated_date_title(){
        return $(LAST_UPDATED_DATE_TITLE)
    }

    get first_pending_request(){
        return $(FIRST_PENDING_REQUEST)
    }
  
}

export default new WorkflowEBannerPage()