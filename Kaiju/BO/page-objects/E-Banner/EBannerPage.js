const E_BANNER_TITLE = '//*[@id="app"]/div[2]/section/div[1]/div[1]/div[2]/div[1]/div'
const IBK_MBK_SETUP_TITLE = '//*[@id="app"]/div[2]/section/div[1]/div[1]/div[1]/div'
const BANNER_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[1]/section'
const AVAILABILITY_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[2]/section'
const BANNER_TITLE_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[3]/section'
const FIRST_CURRENT_BANNER_DATA = '//*[@id="app"]/div[2]/section/div[2]/table/tbody/tr[2]/td[3]/section'
const FIRST_FUTURE_BANNER_DATA = '//*[@id="app"]/div[2]/section/div[2]/table/tbody/tr[3]/td[3]/section'
const START_DATE_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[4]/section'
const END_DATE_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[5]/section'
const CREATED_BY_TITLE = '//*[@id="app"]/div[2]/section/div[2]/table/thead/tr/th[6]/section'
const PENDING_APPROVAL_MESSAGE = "//h3[text()='A similar request is already pending approval']"

class EBannerPage{

    wait_until_screen_displayed(){
        $(E_BANNER_TITLE).waitForDisplayed()
    }

    get e_banner_title(){
        return $(E_BANNER_TITLE)
    }

    get ibk_mbk_setup_title(){
        return $(IBK_MBK_SETUP_TITLE)
    }

    get banner_title(){
        return $(BANNER_TITLE)
    }

    get availability_title(){
        return $(AVAILABILITY_TITLE)
    }


    get banner_title_title(){
        return $(BANNER_TITLE_TITLE)
    }

    get first_current_banner_data(){
        return $(FIRST_CURRENT_BANNER_DATA)
    }

    get first_future_banner_data(){
        return $(FIRST_FUTURE_BANNER_DATA)
    }

    get start_date_title(){
        return $(START_DATE_TITLE)
    }

    get end_date_title(){
        return $(END_DATE_TITLE)
    }

    get created_by_title(){
        return $(CREATED_BY_TITLE)
    }

    get pending_approval_message(){
        return $(PENDING_APPROVAL_MESSAGE)
    }
  
}

export default new EBannerPage()