const BACK_BUTTON = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div/div[1]/div/div[1]'
const HP_SCHEDULED_PAYMENT = "//p[text()='HP future dated']"
const LOAN_SCHEDULED_PAYMENT = "//p[text()='Loan future dated']"
const FIRST_SCHEDULED_PAYMENT_TITLE = "//p[text()='Credit card test1']"
const FIRST_SCHEDULED_PAYMENT_LABEL = "//p[text()='Future Dated Payment']"
const SECOND_SCHEDULED_PAYMENT_LABEL = "//p[text()='Monthly Recurring']"
const SUCCESSFUL_DELETED_MESSAGE = '//*[@id="__next"]/div/div[3]/div/div/div/div[1]/div/div[2]/h2'

class ScheduledPaymentsPage{

    wait_until_screen_displayed(){
        $(BACK_BUTTON).waitForDisplayed()
    }

    get back_button(){
        return $(BACK_BUTTON)
    }

    get hp_scheduled_payment(){
        return $(HP_SCHEDULED_PAYMENT)
    }

    get loan_scheduled_payment(){
        return $(LOAN_SCHEDULED_PAYMENT)
    }

    get first_scheduled_payment_title(){
        return $(FIRST_SCHEDULED_PAYMENT_TITLE)
    }

    get first_scheduled_payment_label(){
        return $(FIRST_SCHEDULED_PAYMENT_LABEL)
    }

    get second_scheduled_payment_label(){
        return $(SECOND_SCHEDULED_PAYMENT_LABEL)
    }

    get successful_deleted_message(){
        return $(SUCCESSFUL_DELETED_MESSAGE)
    }
}

export default new ScheduledPaymentsPage();