const BACK_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[1]/button'
const FIRST_STATEMENT = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[2]/div/div/div/div[1]/div[1]'
const VIEW_ALL_DOWNLOAD_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[2]/div/div/div/div[1]/div[2]/div/div[1]'
const VIEW_ALL_PRINT_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[2]/div/div/div/div[1]/div[2]/div/div[2]'
const BACK_TO_TOP_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[3]/div'
const VIEW_ALL_FOOTER = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[3]'

class ViewAllStatementPage{

    wait_until_screen_displayed(){
        $(BACK_BUTTON).waitForDisplayed()
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get first_statement(){
        return $(FIRST_STATEMENT)
    }

    get view_all_download_button(){
        return $(VIEW_ALL_DOWNLOAD_BUTTON)
    }

    get view_all_print_button(){
        return $(VIEW_ALL_PRINT_BUTTON)
    }

    get back_to_top_button(){
        return $(BACK_TO_TOP_BUTTON)
    }

    get view_all_footer(){
        return $(VIEW_ALL_FOOTER)
    }
    
}

export default new ViewAllStatementPage();