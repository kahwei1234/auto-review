const MONTHLY_PAYMENT_CHECKBOX = '//*[@id="__next"]/div/div[3]/div[2]/div[3]/div/div[2]/div/div[1]/div/div[1]/div/div/div'
const OVERDUE_AMOUNT_CHECKBOX = '//*[@id="__next"]/div/div[3]/div[2]/div[3]/div/div[2]/div/div[2]/div/div[1]/div/div/div'
const OTHER_AMOUNT_CHECKBOX = '//*[@id="__next"]/div/div[3]/div[2]/div[3]/div/div[2]/div/div[3]/div/div[1]/div/div/div'
const OTHER_AMOUNT_FIELD = '//*[@id="__next"]/div/div[3]/div[2]/div[3]/div/div[2]/div/div[3]/div/div[2]/div/div'
const OTHER_AMOUNT = '/html/body/div/div/div[3]/div[2]/div[3]/div/div[2]/div/div[3]/div/div[2]/div/div/input'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[3]/div[2]/div[5]/div/div[2]/div/div/button'




class MortgagePaymentDetailsPage{

    wait_until_screen_displayed(){
        $(MONTHLY_PAYMENT_CHECKBOX).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(OVERDUE_AMOUNT_CHECKBOX).getText()
    }

    wait_until_screen_displayed(){
        $(OTHER_AMOUNT_CHECKBOX).getText()
    }

    wait_until_screen_displayed(){
        $(OTHER_AMOUNT_FIELD).getText()
    }

    wait_until_screen_displayed(){
        $(OTHER_AMOUNT).getText()
    }

    wait_until_screen_displayed(){
        $(NEXT_BUTTON).getText()
    }

    get monthly_payment_checkbox(){
        return $(MONTHLY_PAYMENT_CHECKBOX)
    }

    get overdue_amount_checkbox(){
        return $(OVERDUE_AMOUNT_CHECKBOX)
    }

    get other_amount_checkbox(){
        return $(OTHER_AMOUNT_CHECKBOX)
    }

    get other_amount_field(){
        return $(OTHER_AMOUNT_FIELD)
    }

    get other_amount(){
        return $(OTHER_AMOUNT)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new MortgagePaymentDetailsPage()