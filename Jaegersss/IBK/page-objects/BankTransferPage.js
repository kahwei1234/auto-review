const SEARCH_BANK_FIELD = '//*[@id="downshift-1-input"]'
const RHB_BANK_BUTTON = "//p[text()='RHB']"
const AMBANK_BANK_BUTTON = "//p[text()='AMBank']"
const X_BUTTON = '//*[@id="__next"]/div/div[1]/div[1]/div/div[3]/div/svg'

class BankTransferPage{

    wait_until_screen_displayed(){
        $(SEARCH_BANK_FIELD).waitForDisplayed()
    }

    get search_bank_field(){
        return $(SEARCH_BANK_FIELD)
    }

    get rhb_bank_button(){
        return $(RHB_BANK_BUTTON)
    }

    get ambank_bank_button(){
        return $(AMBANK_BANK_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

}

export default new BankTransferPage();