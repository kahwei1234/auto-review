const LOCATION_ALLOW_ONCE_BUTTON = '//XCUIElementTypeButton[@name="Allow Once"]'
const NOTIFICATIONS_ALLOW_BUTTON = '//XCUIElementTypeButton[@name="Allow"]'
const USERNAME_FIELD = '//XCUIElementTypeTextField[@name="tbxEntry"]'
const NEXT_BUTTON = '//XCUIElementTypeImage[@name="imgLoginAction"]'
const SECURE_WORD_TOGGLE = '//XCUIElementTypeOther[@name="flxIndicator"]'
const PASSWORD_FIELD = '//XCUIElementTypeSecureTextField[@name="tbxEntry"]'
const LOGIN_BUTTON = '//XCUIElementTypeImage[@name="imgLogin"]'
const LINK_CURRENT_DEVICE = '//*[contains(@name, "LINK CURRENT DEVICE")]'
const CARD_NUMBER_FIELD = '//XCUIElementTypeTextField[@name="tbxEntry"]'
const CARD_DETAILS_REQUIRED_COPYWRITING = '//*[contains(@name, "lblForSecurity")]'
const CARD_NUMBER_NEXT_BUTTON = '//*[contains(@label, "NEXT")]'
const CARD_PIN_FIELD = '//XCUIElementTypeOther[@name="CompositeInput"]'
const CARD_PIN_1 = '//XCUIElementTypeSecureTextField[@name="tbxEntry1"]'
const CARD_PIN_NEXT_BUTTON = '//*[contains(@label, "NEXT")]'

class LoginPage{

    wait_until_screen_displayed(){
        $(USERNAME_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SECURE_WORD_TOGGLE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(LOCATION_ALLOW_ONCE_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(NOTIFICATIONS_ALLOW_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(LINK_CURRENT_DEVICE).waitForDisplayed()
    }

    get location_allow_once_button(){
        return $(LOCATION_ALLOW_ONCE_BUTTON)
    }

    get notifications_allow_button(){
        return $(NOTIFICATIONS_ALLOW_BUTTON)
    } 


    get username_field(){
        return $(USERNAME_FIELD)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    } 

    get secure_word_toggle(){
        return $(SECURE_WORD_TOGGLE)
    }

    get password_field(){
        return $(PASSWORD_FIELD)
    }

    get login_button(){
        return $(LOGIN_BUTTON)
    }

    get link_current_device(){
        return $(LINK_CURRENT_DEVICE)
    }

    get card_number_field(){
        return $(CARD_NUMBER_FIELD)
    }

    get card_details_required_copywriting(){
        return $(CARD_DETAILS_REQUIRED_COPYWRITING)
    }

    get card_number_next_button(){
        return $(CARD_NUMBER_NEXT_BUTTON)
    }

    get card_pin_field(){
        return $(CARD_PIN_FIELD)
    }

    get card_pin_1(){
        return $(CARD_PIN_1)
    }

    get card_pin_next_button(){
        return $(CARD_PIN_NEXT_BUTTON)
    }
}

export default new LoginPage()