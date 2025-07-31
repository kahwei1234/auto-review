const PAY_TO_ACCOUNT_BUTTON = '//p[contains(.,"Pay to Account")]'
const PAY_IN_CASH_BUTTON = '//p[contains(.,"Pay in Cash")]'
const TO_COUNTRY = '//label[contains(.,"To Country")]/following-sibling::div'
const SEARCH_COUNTRY = "//input[@placeholder='Search Country']"
const FIRST_COUNTRY = "//input[@placeholder='Search Country']/parent::div/parent::div/parent::li/following-sibling::li"
const FROM_FIELD = '//label[contains(.,"From")]/following-sibling::div'
const FIRST_FROM_ACCOUNT = '//p[contains(.,"New Savings 2")]'
const ENTER_YOUR_PROMO_CODE_FIELD = "//input[@placeholder='Enter Your Promo Code']"
const RECIPIENT_GETS_DROPDOWN_BUTTON = "//p[text()='RECIPIENT GETS']/following-sibling::div/child::button"
const RECIPIENT_GETS_FIELD_WITH_OPTIONS = "//p[text()='RECIPIENT GETS']/parent::div/child::div/child::div"
const RECIPIENT_GETS_FIELD_WITHOUT_OPTIONS = "//p[text()='RECIPIENT GETS']/parent::div/child::div/child::div[2]"
const RECIPIENT_GETS = '//input[@value="0.00"]'
const CALCULATE_CONVERSION_RATE_BUTTON = "//p[text()='Calculate']/parent::div/parent::button"
const NEXT_BUTTON = '//p[contains(.,"Next")]/parent::div/parent::button'

class OverseasTransferDetailsPage{

    wait_until_screen_displayed(){
        $(PAY_TO_ACCOUNT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAY_IN_CASH_BUTTON).waitForDisplayed()
    }

    get pay_to_account_button(){
        return $(PAY_TO_ACCOUNT_BUTTON)
    }

    get pay_in_cash_button(){
        return $(PAY_IN_CASH_BUTTON)
    }

    get to_country(){
        return $(TO_COUNTRY)
    }

    get search_country(){
        return $(SEARCH_COUNTRY)
    }

    get first_country(){
        return $(FIRST_COUNTRY)
    }

    get from_field(){
        return $(FROM_FIELD)
    }

    get first_from_account(){
        return $(FIRST_FROM_ACCOUNT)
    }

    get enter_your_promo_code_field(){
        return $(ENTER_YOUR_PROMO_CODE_FIELD)
    }

    get recipient_gets_dropdown_button(){
        return $(RECIPIENT_GETS_DROPDOWN_BUTTON)
    }

    get recipient_gets_field_with_options(){
        return $(RECIPIENT_GETS_FIELD_WITH_OPTIONS)
    }

    get recipient_gets_field_without_options(){
        return $(RECIPIENT_GETS_FIELD_WITHOUT_OPTIONS)
    }

    get recipient_gets(){
        return $(RECIPIENT_GETS)
    }

    get calculate_conversion_rate_button(){
        return $(CALCULATE_CONVERSION_RATE_BUTTON)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new OverseasTransferDetailsPage();