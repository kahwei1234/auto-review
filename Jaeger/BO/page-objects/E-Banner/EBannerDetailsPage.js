const DELETE_BUTTON = "//span[text()='Delete']"
const BACK_TO_EBANNER_BUTTON = '//*[@id="app"]/div[2]/section/section/div[4]/button[2]'
const DELETE_YES_BUTTON = '/html/body/div[2]/div[2]/div[3]/button[2]'
const DELETE_NO_BUTTON = '/html/body/div[2]/div[2]/div[3]/button[1]'

class EBannerDetailsPage{

    wait_until_screen_displayed(){
        $(DELETE_BUTTON).waitForDisplayed()
    }

    get delete_button(){
        return $(DELETE_BUTTON)
    }

    get back_to_ebanner_button(){
        return $(BACK_TO_EBANNER_BUTTON)
    }

    get delete_yes_button(){
        return $(DELETE_YES_BUTTON)
    }

    get delete_no_button(){
        return $(DELETE_NO_BUTTON)
    }
  
}

export default new EBannerDetailsPage()