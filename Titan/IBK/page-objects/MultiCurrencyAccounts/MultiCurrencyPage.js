const MCA_DISCLAIMER = '//*[@id="__next"]/div/div[1]/div[3]/div[2]/div[2]/article/div/div/div[1]/div[3]/div/div[1]/div[2]/div/div[2]/p'

class MultiCurrencyPage{

    wait_until_screen_displayed(){
        $(MCA_DISCLAIMER).waitForDisplayed()
    }

    get mca_disclaimer(){
        return $(MCA_DISCLAIMER)
    }
}

export default new MultiCurrencyPage();