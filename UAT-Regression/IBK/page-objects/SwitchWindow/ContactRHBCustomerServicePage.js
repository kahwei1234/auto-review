const INSTANT_APPLY_BUTTON = "//span[text()='Instant Apply']"

class ContactRHBCustomerServicePage{

    wait_until_screen_displayed(){
        $(INSTANT_APPLY_BUTTON).waitForDisplayed()
    }

    get instant_apply_button(){
        return $(INSTANT_APPLY_BUTTON)
    }
   
}

export default new ContactRHBCustomerServicePage();