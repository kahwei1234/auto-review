const PAY_BUTTON = '//*[@id="__next"]/div/div[2]/div[3]/div[2]/div[2]/div/div/div[2]/div/div[3]/button'

class CreditCardPage{

    wait_until_screen_displayed(){
        $(PAY_BUTTON).waitForDisplayed()
    }

    get pay_button(){
        return $(PAY_BUTTON)
    }
}

export default new CreditCardPage();