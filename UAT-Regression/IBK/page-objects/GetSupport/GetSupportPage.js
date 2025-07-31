const GET_REQUEST_TITLE = "//p[text()='Get Support']"
const SUBMIT_REQUEST_BUTTON = "//span[text()='Submit Request']"
const SUBMIT_FEEDBACK_BUTTON = "//span[text()='Submit Feedback']"
const PROCEED_BUTTON = "//span[text()='PROCEED']"

class GetSupportPage{

    wait_until_screen_displayed(){
        $(GET_REQUEST_TITLE).waitForDisplayed()
    }

    get get_request_title(){
        return $(GET_REQUEST_TITLE)
    }

    get submit_request_button(){
        return $(SUBMIT_REQUEST_BUTTON)
    }

    get submit_feedback_button(){
        return $(SUBMIT_FEEDBACK_BUTTON)
    }

    get proceed_button(){
        return $(PROCEED_BUTTON)
    }


}

export default new GetSupportPage();