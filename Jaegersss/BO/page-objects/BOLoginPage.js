import Link from "../test-data/link"

const STAFF_ID_FIELD = '//*[@id="app"]/div[2]/div[2]/div/div[1]/form/div[1]/div'
const STAFF_ID = '//*[@id="username"]'
const STAFF_PASSWORD_FIELD = '//*[@id="app"]/div[2]/div[2]/div/div[1]/form/div[2]/div'
const STAFF_PASSWORD = '//*[@id="password"]'
const LOGIN_BUTTON = '//*[@id="app"]/div[2]/div[2]/div/div[1]/form/div[3]/button'

class BOLoginPage extends Link{

    wait_until_screen_displayed(){
        $(STAFF_ID_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(STAFF_ID).getText()
    }

    wait_until_screen_displayed(){
        $(STAFF_PASSWORD_FIELD).getText()
    }

    wait_until_screen_displayed(){
        $(STAFF_PASSWORD).getText()
    }

    wait_until_screen_displayed(){
        $(LOGIN_BUTTON).getText()
    }

    get staff_id_field(){
        return $(STAFF_ID_FIELD)
    }

    get staff_id(){
        return $(STAFF_ID)
    }

    get staff_password_field(){
        return $(STAFF_PASSWORD_FIELD)
    }

    get staff_password(){
        return $(STAFF_PASSWORD)
    }

    get login_button(){
        return $(LOGIN_BUTTON)
    }

    open_bo2 () {
        return super.open_bo2('login');
    }
}

export default new BOLoginPage()