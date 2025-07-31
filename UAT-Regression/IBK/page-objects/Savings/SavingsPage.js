const SCHEDULED_PAYMENTS_BUTTON = "//p[text()='Scheduled Payments']"
const ACCOUNT_NICKNAME_EDIT_BUTTON = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::div'
const ACCOUNT_NICKNAME_FIELD = '//label[contains(.,"Account Nickname")]/preceding-sibling::input'
const ACCOUNT_NICKNAME = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::p'
const ACCOUNT_NICKNAME_SAVE_BUTTON = '(//span[contains(.,"Save")])[1]/parent::button'

class SavingsPage{

    wait_until_screen_displayed(){
        $(SCHEDULED_PAYMENTS_BUTTON).waitForDisplayed()
    }

    get scheduled_payments_button(){
        return $(SCHEDULED_PAYMENTS_BUTTON)
    }

    get account_nickname_edit_button(){
        return $(ACCOUNT_NICKNAME_EDIT_BUTTON)
    }

    get account_nickname_field(){
        return $(ACCOUNT_NICKNAME_FIELD)
    }

    get account_nickname(){
        return $(ACCOUNT_NICKNAME)
    }

    get account_nickname_save_button(){
        return $(ACCOUNT_NICKNAME_SAVE_BUTTON)
    }
}

export default new SavingsPage();