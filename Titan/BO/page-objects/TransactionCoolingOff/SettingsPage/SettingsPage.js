const TRANSACTION_COOLING_OFF_PERIOD_DROPDOWN = '//*[@id="app"]/div[2]/section/section/table/tbody/tr/td[2]/div/div/div'
const UPDATE_BUTTON = "//span[text()='Update']"

class SettingsPage{

    wait_until_screen_displayed(){
        $(TRANSACTION_COOLING_OFF_PERIOD_DROPDOWN).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(UPDATE_BUTTON).waitForDisplayed()
    }

    get transaction_cooling_off_period_dropdown(){
        return $(TRANSACTION_COOLING_OFF_PERIOD_DROPDOWN)
    }

    get update_button(){
        return $(UPDATE_BUTTON)
    }
}

export default new SettingsPage()