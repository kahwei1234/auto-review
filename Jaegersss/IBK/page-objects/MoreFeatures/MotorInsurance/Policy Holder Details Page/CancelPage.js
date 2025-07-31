const CANCEL_TITLE = '//p[contains(.,"Cancel Application")]'
const CANCEL_COPYWRITING = '//p[contains(.,"Cancel Application")]/following-sibling::p'
const YES_BUTTON = '//p[contains(.,"YES")]'
const NO_BUTTON = '//p[contains(.,"NO")]'

class CancelPage{

    wait_until_screen_displayed(){
        $(CANCEL_TITLE).waitForDisplayed()
    }

    get cancel_title(){
        return $(CANCEL_TITLE)
    }

    get cancel_copywriting(){
        return $(CANCEL_COPYWRITING)
    }

    get yes_button(){
        return $(YES_BUTTON)
    }

    get no_button(){
        return $(NO_BUTTON)
    }

}

export default new CancelPage();