const BANK_ACCOUNT_NUMBER_BUTTON = "//p[text()='via Bank Account Number']"
const MOBILE_NUMBER_BUTTON = "//p[text()='via Mobile Number']"
const NRIC_NUMBER_BUTTON = "//p[text()='via NRIC Number']"
const ARMY_POLICE_NUMBER_BUTTON = "//p[text()='via Army/Police Number']"
const PASSPORT_NUMBER_BUTTON = "//p[text()='via Passport Number']"
const BUSINESS_REGISTRATION_NUMBER_BUTTON = "//p[text()='via Business Registration Number']"
const BACK_TO_PAY_PAGE_BUTTON = '//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[1]/div[1]/div[1]/svg'

class DuitNowPage{

    wait_until_screen_displayed(){
        $(BANK_ACCOUNT_NUMBER_BUTTON).waitForDisplayed()
    }

    get bank_account_number_button(){
        return $(BANK_ACCOUNT_NUMBER_BUTTON)
    }

    get mobile_number_button(){
        return $(MOBILE_NUMBER_BUTTON)
    }

    get nric_number_buttton(){
        return $(NRIC_NUMBER_BUTTON)
    }

    get army_police_number_button(){
        return $(ARMY_POLICE_NUMBER_BUTTON)
    }

    get passport_number_button(){
        return $(PASSPORT_NUMBER_BUTTON)
    }

    get business_registration_number_button(){
        return $(BUSINESS_REGISTRATION_NUMBER_BUTTON)
    }

    get back_to_pay_page_button(){
        return $(BACK_TO_PAY_PAGE_BUTTON)
    }

    get mortgage_pay_button(){
        return $(MORTGAGE_PAY_BUTTON)
    }

}

export default new DuitNowPage();