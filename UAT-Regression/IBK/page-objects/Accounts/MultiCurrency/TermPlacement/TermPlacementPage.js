const FROM_FIELD = '//*[@id="downshift-1-toggle-button"]/div[1]'
const TO_FIELD = '//*[@id="downshift-2-toggle-button"]/div[1]'
const FIRST_TO_ACCOUNT = '//*[@id="downshift-2-menu"]/div/div/div/div[1]/div[1]'
const CURRENCY_FIELD = '//*[@id="downshift-4-toggle-button"]/div[1]'
const CURRENCY_SEARCH_FIELD = '/html/body/div[1]/div/div[2]/div[2]/div[3]/div/div/section/div/div[1]/div/div[1]/input'
const FIRST_CURRENCY = '/html/body/div[1]/div/div[2]/div[2]/div[3]/div/div/section/div/div[3]/div/div/div/div/div[1]/div[1]'
const PLACEMENT_AMOUNT_FIELD = '//*[@id="__next"]/div/div[2]/div[2]/div[4]/div[1]/div'
const PLACEMENT_AMOUNT = '/html/body/div[1]/div/div[2]/div[2]/div[4]/div[1]/div/input'
const TENURE_FIELD = '/html/body/div[1]/div/div[2]/div[2]/div[5]/div/div/div[1]'
const TENURE_1_WEEK = "//div[text()='1 week']"
const TENURE_2_WEEKS = "//div[text()='2 weeks']"
const TENURE_3_WEEKS = "//div[text()='3 weeks']"
const TENURE_1_MONTH = "//div[text()='1 month']"
const TENURE_3_MONTHS = "//div[text()='3 months']"
const PURPOSE_OF_PAYMENT_FIELD = '/html/body/div[1]/div/div[2]/div[2]/div[6]/div/div/div[1]'
const PURPOSE_TRADE = "//div[text()='Trade']"
const PURPOSE_EDUCATION = "//div[text()='Education']"
const PURPOSE_EMPLOYMENT_ABROAD = "//div[text()='Employment Abroad']"
const PURPOSE_TRANSFER_BETWEEN_FAMILY_MEMBER = "//div[text()='Transfer between family member']"
const PURPOSE_INVESTMENT = "//div[text()='Investment']"
const NEXT_BUTTON = '/html/body/div[1]/div/div[2]/div[2]/div[8]/div/div/div/div/button'

class TermPlacementPage{

    wait_until_screen_displayed(){
        $(FROM_FIELD).waitForDisplayed()
    }

    get from_field(){
        return $(FROM_FIELD)
    }

    get to_field(){
        return $(TO_FIELD)
    }

    get first_to_account(){
        return $(FIRST_TO_ACCOUNT)
    }

    get currency_field(){
        return $(CURRENCY_FIELD)
    }

    get currency_search_field(){
        return $(CURRENCY_SEARCH_FIELD)
    }

    get placement_amount_field(){
        return $(PLACEMENT_AMOUNT_FIELD)
    }

    get placement_amount(){
        return $(PLACEMENT_AMOUNT)
    }

    get first_currency(){
        return $(FIRST_CURRENCY)
    }

    get tenure_field(){
        return $(TENURE_FIELD)
    }

    get tenure_1_week(){
        return $(TENURE_1_WEEK)
    }

    get tenure_2_weeks(){
        return $(TENURE_2_WEEKS)
    }

    get tenure_3_weeks(){
        return $(TENURE_3_WEEKS)
    }

    get tenure_1_month(){
        return $(TENURE_1_MONTH)
    }

    get tenure_3_months(){
        return $(TENURE_3_MONTHS)
    }

    get purpose_of_payment_field(){
        return $(PURPOSE_OF_PAYMENT_FIELD)
    }

    get purpose_trade(){
        return $(PURPOSE_TRADE)
    }

    get purpose_education(){
        return $(PURPOSE_EDUCATION)
    }

    get purpose_employment_abroad(){
        return $(PURPOSE_EMPLOYMENT_ABROAD)
    }

    get purpose_transfer_between_family_member(){
        return $(PURPOSE_TRANSFER_BETWEEN_FAMILY_MEMBER)
    }

    get purpose_investment(){
        return $(PURPOSE_INVESTMENT)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }
    
}

export default new TermPlacementPage()