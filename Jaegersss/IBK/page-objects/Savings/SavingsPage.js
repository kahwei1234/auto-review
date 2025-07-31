const SCHEDULED_PAYMENTS_BUTTON = "//p[text()='Scheduled Payments']"

class SavingsPage{

    wait_until_screen_displayed(){
        $(SCHEDULED_PAYMENTS_BUTTON).waitForDisplayed()
    }

    get scheduled_payments_button(){
        return $(SCHEDULED_PAYMENTS_BUTTON)
    }
}

export default new SavingsPage();