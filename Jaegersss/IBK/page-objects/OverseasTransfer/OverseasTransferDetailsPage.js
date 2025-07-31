const PAY_TO_ACCOUNT_BUTTON = "//p[text()='Pay to Account']"
const PAY_IN_CASH_BUTTON = "//p[text()='Pay in Cash']"
const TO_COUNTRY = '//*[@id="root"]/div/div/div[2]/div/form/div/div[1]/div'
const ANTIGUABARBUDA_COUNTRY = "//p[text()='Antigua And Barbuda']"
const RECIPIENT_GETS_FIELD = '//*[@id="root"]/div/div/div[2]/div/form/div/div[3]/div/div[2]/div[1]/div/div[2]/p'
const RECIPIENT_GETS = '//*[@id="root"]/div/div/div[2]/div/form/div/div[3]/div/div[2]/div[1]/div/div[2]/input'
const CALCULATE_CONVERSION_RATE_BUTTON = "//p[text()='Calculate Conversion Rate']"

class OverseasTransferDetailsPage{

    wait_until_screen_displayed(){
        $(PAY_TO_ACCOUNT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAY_IN_CASH_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(RECIPIENT_GETS_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(CALCULATE_CONVERSION_RATE_BUTTON).waitForDisplayed()
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

    get antiguabarbuda_country(){
        return $(ANTIGUABARBUDA_COUNTRY)
    }

    get recipient_gets_field(){
        return $(RECIPIENT_GETS_FIELD)
    }

    get recipient_gets(){
        return $(RECIPIENT_GETS)
    }

    get calculate_conversion_rate_button(){
        return $(CALCULATE_CONVERSION_RATE_BUTTON)
    }

}

export default new OverseasTransferDetailsPage();