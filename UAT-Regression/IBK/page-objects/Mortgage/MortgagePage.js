const PAY_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[3]/button'
const ACCOUNT_NICKNAME_EDIT_BUTTON = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::div'
const ACCOUNT_NICKNAME_FIELD = '//label[contains(.,"Account Nickname")]/preceding-sibling::input'
const ACCOUNT_NICKNAME = '//p[contains(.,"Account Nickname")]/following-sibling::div/child::p'
const ACCOUNT_NICKNAME_SAVE_BUTTON = '(//span[contains(.,"Save")])[1]/parent::button'

class MortgagePage{

    wait_until_screen_displayed(){
        $(PAY_BUTTON).waitForDisplayed()
    }

    get pay_button(){
        return $(PAY_BUTTON)
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

export default new MortgagePage();