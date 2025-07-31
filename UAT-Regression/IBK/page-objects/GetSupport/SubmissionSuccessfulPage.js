const SUBMISSION_SUCCESSFUL_TITLE = "//p[text()='Submission Successful']"
const SUCCESSFUL_MESSAGE = '//*[@id="root"]/div/div/div[2]/div/div[1]/div/div/span'
const SERVICE_TYPE_VALUE = '//*[@id="root"]/div/div/div[2]/div/div[4]/div/p[2]'
const PRODUCT_TYPE_VALUE = '//*[@id="root"]/div/div/div[2]/div/div[5]/div/div[1]/div/div/p[2]'
const PRODUCT_CATEGORY_VALUE = '//*[@id="root"]/div/div/div[2]/div/div[5]/div/div[2]/div/div/p[2]'
const LOAN_ACCOUNT_NUMBER_VALUE = '//*[@id="root"]/div/div/div[2]/div/div[5]/div/div[3]/div/div/p[2]'
const TYPE_OF_PERSONAL_LOAN_VALUE = '//*[@id="root"]/div/div/div[2]/div/div[5]/div/div[4]/div/div/p[2]'

class SubmissionSuccessfulPage{

    wait_until_screen_displayed(){
        $(SUBMISSION_SUCCESSFUL_TITLE).waitForDisplayed()
    }

    get submission_successful_title(){
        return $(SUBMISSION_SUCCESSFUL_TITLE)
    }

    get successful_message(){
        return $(SUCCESSFUL_MESSAGE)
    }

    get service_type_value(){
        return $(SERVICE_TYPE_VALUE)
    }

    get product_type_value(){
        return $(PRODUCT_TYPE_VALUE)
    }

    get product_category_value(){
        return $(PRODUCT_CATEGORY_VALUE)
    }

    get loan_account_number_value(){
        return $(LOAN_ACCOUNT_NUMBER_VALUE)
    }

    get type_of_personal_loan_value(){
        return $(TYPE_OF_PERSONAL_LOAN_VALUE)
    }

}

export default new SubmissionSuccessfulPage();