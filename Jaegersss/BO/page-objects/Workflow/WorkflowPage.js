const WORKFLOW_TITLE = '//*[@id="app"]/div[2]/section/div/div[1]/div/div[1]/div'
const FUNCTION_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr[1]/th[1]/div'
const PENDING_APPROVAL_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr[1]/th[2]/div'
const APPROVED_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr[1]/th[3]/div'
const REJECTED_TITLE = '//*[@id="app"]/div[2]/section/section/section/thead/tr[1]/th[4]/div'
const IBK_MBK_SETUP_SECTION = "//div[text()='IBK/MBK Setup']"
const E_BANNER_FIRST_APPROVED = '//*[@id="app"]/div[2]/section/section/section/tbody[5]/tr[2]/td[2]/div'

class WorkflowPage{

    wait_until_screen_displayed(){
        $(WORKFLOW_TITLE).waitForDisplayed()
    }

    get workflow_title(){
        return $(WORKFLOW_TITLE)
    }

    get function_title(){
        return $(FUNCTION_TITLE)
    }

    get pending_approval_title(){
        return $(PENDING_APPROVAL_TITLE)
    }

    get approved_title(){
        return $(APPROVED_TITLE)
    }

    get rejected_title(){
        return $(REJECTED_TITLE)
    }

    get ibk_mbk_setup_section(){
        return $(IBK_MBK_SETUP_SECTION)
    }

    get e_banner_first_approved(){
        return $(E_BANNER_FIRST_APPROVED)
    }
  
}

export default new WorkflowPage()