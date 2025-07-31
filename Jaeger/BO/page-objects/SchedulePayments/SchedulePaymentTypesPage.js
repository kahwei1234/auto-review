const PAYMENT_TYPE_TITLE = "//section[text()='Payment Type']"
const NICKNAME_TITLE = "//section[text()='Nickname']"
const AMOUNT_TITLE = "//section[text()='Amount (MYR)']"
const NEXT_PAYMENT_DATE_TITLE = "//section[text()='Next Payment Date']"
const FREQUENCY_TITLE = "//section[text()='Frequency']"
const REMAINING_TITLE = "//section[text()='Remaining']"
const FIRST_PAYMENT = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/tbody/tr[1]'
const BACK_BUTTON = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/div/span'

class SchedulePaymentTypesPage{

    wait_until_screen_displayed(){
        $(PAYMENT_TYPE_TITLE).waitForDisplayed()
    }

    get payment_type_title(){
        return $(PAYMENT_TYPE_TITLE)
    }

    get nickname_title(){
        return $(NICKNAME_TITLE)
    }

    get amount_title(){
        return $(AMOUNT_TITLE)
    }

    get next_payment_date_title(){
        return $(NEXT_PAYMENT_DATE_TITLE)
    }

    get frequency_title(){
        return $(FREQUENCY_TITLE)
    }

    get remaining_title(){
        return $(REMAINING_TITLE)
    }

    get first_payment(){
        return $(FIRST_PAYMENT)
    }

    get back_button(){
        return $(BACK_BUTTON)
    }
  
}

export default new SchedulePaymentTypesPage()