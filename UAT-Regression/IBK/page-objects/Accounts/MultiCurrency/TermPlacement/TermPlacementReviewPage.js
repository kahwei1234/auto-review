const TO = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[1]/div/div/div/div/div/p[2]'
const PLACEMENT_AMOUNT = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[3]/div/div/div/div/div[1]/p[2]'
const TENURE = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[3]/div/div/div/div/div[2]/p[2]'
const INTEREST_RATE = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[5]/div/div/div/div/div[1]/p[2]'
const ACCRUED_INTEREST = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[5]/div/div/div/div/div[2]/p[2]'
const PURPOSE_OF_PAYMENT = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div/div/div[6]/div/div/div/div/div/p[2]'
const TNC_CHECKBOX = '/html/body/div[1]/div/div[3]/div[4]/div/label/div'
const SUBMIT_BUTTON = '/html/body/div[1]/div/div[4]/div/div/div/div[2]/button'

class TermPlacementReviewPage{

    wait_until_screen_displayed(){
        $(TO).waitForDisplayed()
    }

    get to(){
        return $(TO)
    }

    get placement_amount(){
        return $(PLACEMENT_AMOUNT)
    }

    get tenure(){
        return $(TENURE)
    }

    get interest_rate(){
        return $(INTEREST_RATE)
    }

    get accrued_interest(){
        return $(ACCRUED_INTEREST)
    }

    get purpose_of_payment(){
        return $(PURPOSE_OF_PAYMENT)
    }

    get tnc_checkbox(){
        return $(TNC_CHECKBOX)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }
    
}

export default new TermPlacementReviewPage()