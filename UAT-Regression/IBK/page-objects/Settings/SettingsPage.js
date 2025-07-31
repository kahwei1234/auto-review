const PROFILE_BUTTON = "//p[text()='Profile']"
const ACCOUNTS_BUTTON = "//p[text()='Accounts']"
const PERSONALISATION_BUTTON = "//p[text()='Personalisation']"
const SECURITY_BUTTON = "//p[text()='Security']"
const FAQ_BUTTON = "//p[text()='FAQ']"
const CONTACT_RHB_BUTTON = "//p[text()='Contact RHB']"
const TERMS_AND_CONDITIONS_BUTTON = "//p[text()='TERMS & CONDITIONS']"

class SettingsPage{

    wait_until_screen_displayed(){
        $(PROFILE_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(ACCOUNTS_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(PERSONALISATION_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(SECURITY_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(FAQ_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(CONTACT_RHB_BUTTON).getText()
    }

    get profile_button(){
        return $(PROFILE_BUTTON)
    }

    get accounts_button(){
        return $(ACCOUNTS_BUTTON)
    }

    get personalisation_button(){
        return $(PERSONALISATION_BUTTON)
    }

    get security_button(){
        return $(SECURITY_BUTTON)
    }

    get faq_button(){
        return $(FAQ_BUTTON)
    }


    get contact_rhb_button(){
        return $(CONTACT_RHB_BUTTON)
    }

    get terms_and_conditions_button(){
        return $(TERMS_AND_CONDITIONS_BUTTON)
    }


}

export default new SettingsPage()