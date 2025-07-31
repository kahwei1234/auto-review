const PAY_BY_TITLE = '//p[contains(.,"Pay By")]'
const X_BUTTON = '(//p[contains(.,"Pay By")]/parent::div/parent::div/preceding-sibling::div/child::div)[3]/child::img'
const NEXT_BUTTON = "//p[text()='NEXT']"

class PayByPage{

    wait_until_screen_displayed(){
        $(PAY_BY_TITLE).waitForDisplayed()
    }

    get pay_by_title(){
        return $(PAY_BY_TITLE)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }
}

export default new PayByPage();