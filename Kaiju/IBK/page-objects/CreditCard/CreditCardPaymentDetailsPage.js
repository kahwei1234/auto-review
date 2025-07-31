const TO_DATA = '/html/body/div/div/div[4]/div[2]/div[2]/div/input'
const ENABLE_MONTHLY_RECURRING = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[1]/div[1]/p'
const ENABLE_MONTHLY_RECURRING_TOGGLE = '/html/body/div/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[1]/div[2]/div/div[2]'
const ENABLE_MONTHLY_RECURRING_COPYWRITING = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[2]/p'
const STATEMENT_BALANCE_CHECKBOX = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[2]/div/div[1]/div/div/div'
const MINIMUM_BALANCE_CHECKBOX = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[3]/div/div[1]/div/div/div'
const OUTSTANDING_BALANCE_CHECKBOX = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[4]/div/div[1]/div/div/div'
const OTHER_AMOUNT_CHECKBOX = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[1]/div[1]/div/div/div'
const OTHER_AMOUNT_FIELD = '/html/body/div/div/div[4]/div[2]/div[3]/div[5]/div[1]/div[2]/div/div/input'
const OTHER_AMOUNT_MESSAGE = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[2]/div'
const AVAILABLE_DAILY_LIMIT = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/p'
const PAYMENT_DATE_FIELD = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[2]/div/div'
const PAYMENT_DATE_MONTH_DROPDOWN = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div[2]/div'
const PAYMENT_DATE_MONTH_DEC = "//div[text()='December']"
const PAYMENT_DATE_DATE_31 = "//td[text()='31']"
const PAYMENT_DATE_DATE_30 = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div/table/tbody/tr[5]/td[2]'
const RECURRING_DESCRIPTION_FIELD = '/html/body/div/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[2]/div[2]/div[1]/input'
const RECURRING_DESCRIPTION_ERROR_MESSAGE = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[2]/div[2]/div[2]/p'
const RECURRING_DESCRIPTION_COPYWRITING = '//*[@id="__next"]/div/div[4]/div[2]/div[3]/div[5]/div[4]/div[2]/div[2]/div[2]/p'
const LEARN_MORE_LINK = '//*[@id="__next"]/div/div[4]/div[2]/div[4]/div[1]/div/div/div/p'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[4]/div[2]/div[5]/div/div[2]/div/div/button'
const X_BUTTON = '/html/body/div/div/div[4]/div[1]/div/div/div[3]/div/div'
const CANCEL_NO_BUTTON = '/html/body/div/div/div[3]/div[1]/div/div/div/div/div[2]/div[5]/button'
const CANCEL_YES_BUTTON = '/html/body/div/div/div[3]/div[1]/div/div/div/div/div[2]/div[4]/button'

class CreditCardPaymentDetailsPage{

    wait_until_screen_displayed(){
        $(ENABLE_MONTHLY_RECURRING).waitForDisplayed()
    }

    get to_data(){
        return $(TO_DATA)
    }

    get enable_monthly_recurring(){
        return $(ENABLE_MONTHLY_RECURRING)
    }

    get enable_monthly_recurring_toggle(){
        return $(ENABLE_MONTHLY_RECURRING_TOGGLE)
    }

    get enable_monthly_recurring_copywriting(){
        return $(ENABLE_MONTHLY_RECURRING_COPYWRITING)
    }

    get statement_balance_checkbox(){
        return $(STATEMENT_BALANCE_CHECKBOX)
    }

    get minimum_balance_checkbox(){
        return $(MINIMUM_BALANCE_CHECKBOX)
    }

    get outstanding_balance_checkbox(){
        return $(OUTSTANDING_BALANCE_CHECKBOX)
    }

    get other_amount_checkbox(){
        return $(OTHER_AMOUNT_CHECKBOX)
    }

    get other_amount_field(){
        return $(OTHER_AMOUNT_FIELD)
    }

    get other_amount_message(){
        return $(OTHER_AMOUNT_MESSAGE)
    }

    get available_daily_limit(){
        return $(AVAILABLE_DAILY_LIMIT)
    }

    get payment_date_field(){
        return $(PAYMENT_DATE_FIELD)
    }

    get payment_date_month_dropdown(){
        return $(PAYMENT_DATE_MONTH_DROPDOWN)
    }

    get payment_date_month_dec(){
        return $(PAYMENT_DATE_MONTH_DEC)
    }

    get payment_date_date_31(){
        return $(PAYMENT_DATE_DATE_31)
    }

    get payment_date_date_30(){
        return $(PAYMENT_DATE_DATE_30)
    }

    get recurring_description_field(){
        return $(RECURRING_DESCRIPTION_FIELD)
    }

    get recurring_description_error_message(){
        return $(RECURRING_DESCRIPTION_ERROR_MESSAGE)
    }

    get recurring_description_copywriting(){
        return $(RECURRING_DESCRIPTION_COPYWRITING)
    }

    get learn_more_link(){
        return $(LEARN_MORE_LINK)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get cancel_no_button(){
        return $(CANCEL_NO_BUTTON)
    }

    get cancel_yes_button(){
        return $(CANCEL_YES_BUTTON)
    }
}

export default new CreditCardPaymentDetailsPage();