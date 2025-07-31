const SEARCH_BANK_FIELD = '//*[@id="downshift-1-input"]'
const BANK_VALUE = '//h2[contains(.,"Bank Transfer")]/parent::div/parent::div/parent::div/parent::div/parent::div/following-sibling::div/child::div/child::div[2]'
const X_BUTTON = '//*[@id="__next"]/div/div[1]/div[1]/div/div[3]/div/svg'

class BankTransferPage{

    wait_until_screen_displayed(){
        $(SEARCH_BANK_FIELD).waitForDisplayed()
    }

    get search_bank_field(){
        return $(SEARCH_BANK_FIELD)
    }

    get bank_value(){
        return $(BANK_VALUE)
    }

    get x_button(){
        return $(X_BUTTON)
    }

}

export default new BankTransferPage();