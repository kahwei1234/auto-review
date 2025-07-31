const TOP_UP_TITLE = '(//p[contains(.,"Top Up")])[1]'
const IMPORTANT_NOTED_TITLE = '(//div[contains(.,"Important")])[8]'
const IMPORTANT_NOTED_REMARK = '(//div[contains(.,"Important")])[8]/parent::div/following-sibling::p'
const TOP_UP_FIELD_LABEL = '//label[contains(.,"Top Up")]'
const TOP_UP_FIELD = '//label[contains(.,"Top Up")]/parent::div'
const TOP_UP_MYR_0 = "//div[text()='MYR 0.00']"
const TOP_UP_MYR_100 = "//div[text()='MYR 100.00']"
const TOP_UP_MYR_200 = "//div[text()='MYR 200.00']"
const TOP_UP_MYR_300 = "//div[text()='MYR 300.00']"
const TOP_UP_MYR_400 = "//div[text()='MYR 400.00']"
const TOP_UP_MYR_500 = "//div[text()='MYR 500.00']"
const SAVE_BUTTON = '(//span[contains(.,"Save")]/parent::span)[1]/parent::button'


class TopUpPage{

    wait_until_screen_displayed(){
        $(TOP_UP_TITLE).getText()
    }

    get top_up_title(){
        return $(TOP_UP_TITLE)
    }


    get important_noted_title(){
        return $(IMPORTANT_NOTED_TITLE)
    }

    get important_noted_remark(){
        return $(IMPORTANT_NOTED_REMARK)
    }

    get top_up_field_label(){
        return $(TOP_UP_FIELD_LABEL)
    }

    get top_up_field(){
        return $(TOP_UP_FIELD)
    }

    get top_up_myr_0(){
        return $(TOP_UP_MYR_0)
    }

    get top_up_myr_100(){
        return $(TOP_UP_MYR_100)
    }

    get top_up_myr_200(){
        return $(TOP_UP_MYR_200)
    }

    get top_up_myr_300(){
        return $(TOP_UP_MYR_300)
    }

    get top_up_myr_400(){
        return $(TOP_UP_MYR_400)
    }

    get top_up_myr_500(){
        return $(TOP_UP_MYR_500)
    }

    get save_button(){
        return $(SAVE_BUTTON)
    }

}

export default new TopUpPage()