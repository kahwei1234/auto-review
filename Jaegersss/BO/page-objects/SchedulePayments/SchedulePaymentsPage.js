const PAYMENT_TYPE_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[1]/section'
const PAYMENT_TYPE_OWN_RHB_ACCOUNT = "//section[text()='OWN RHB ACCOUNT']"
const PAYMENT_TYPE_CREDIT_CARD = "//section[text()='Credit Card']"
const FUTURE_DATED_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[2]/section'
const RECURRING_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[3]/section'
const RECURRING_DATA = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/tbody/tr[2]/td[3]/section'
const FUTURE_DATED_DATA = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/tbody/tr[5]/td[2]/section'

class SchedulePaymentsPage{

    wait_until_screen_displayed(){
        $(PAYMENT_TYPE_TITLE).waitForDisplayed()
    }

    get payment_type_title(){
        return $(PAYMENT_TYPE_TITLE)
    }

    get payment_type_own_rhb_account(){
        return $(PAYMENT_TYPE_OWN_RHB_ACCOUNT)
    }

    get payment_type_credit_card(){
        return $(PAYMENT_TYPE_CREDIT_CARD)
    }

    get future_dated_title(){
        return $(FUTURE_DATED_TITLE)
    }

    get recurring_title(){
        return $(RECURRING_TITLE)
    }

    get recurring_data(){
        return $(RECURRING_DATA)
    }


    get future_dated_data(){
        return $(FUTURE_DATED_DATA)
    }
  
}

export default new SchedulePaymentsPage()