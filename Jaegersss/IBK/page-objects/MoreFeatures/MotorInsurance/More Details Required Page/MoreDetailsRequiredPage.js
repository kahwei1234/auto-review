const MORE_DETAILS_REQUIRED_TITLE = '//p[contains(.,"More Details Required")]'
const COPYWRITING_1 = '//p[contains(.,"More Details Required")]/following-sibling::p'
const YOUR_NAME_LABEL = '//label[contains(.,"Your Name")]'
const YOUR_NAME_FIELD = '//label[contains(.,"Your Name")]/following-sibling::div'
const YOUR_NAME = '//label[contains(.,"Your Name")]/following-sibling::div/child::input'
const CONTACT_NUMBER_LABEL = '//label[contains(.,"Contact Number")]'
const CONTACT_NUMBER_FIELD = '//label[contains(.,"Contact Number")]/following-sibling::div'
const CONTACT_NUMBER = '//label[contains(.,"Contact Number")]//following-sibling::div/child::input'
const EMAIL_LABEL = '//label[contains(.,"Email")]'
const EMAIL_FIELD = '//label[contains(.,"Email")]/following-sibling::div'
const EMAIL = '//label[contains(.,"Email")]/following-sibling::div/child::input'
const NOT_NOW_BUTTON = '//p[contains(.,"NOT NOW")]/parent::div/parent::button'
const SUBMIT_BUTTON = '//p[contains(.,"SUBMIT")]/parent::div/parent::button'
const X_BUTTON = '//p[contains(.,"More Details Required")]/parent::div/parent::div/preceding-sibling::h2/child::div/child::img'
const SUCCESSFUL_COPYWRITING_1 = '//p[contains(.,"Yay!")]'
const SUCCESSFUL_COPYWRITING_2 = '//p[contains(.,"Thank you for submitting your details. Our Customer Service Centre will attend to you shortly.")]'
const SUCCESSFUL_OKAY_GOT_IT_BUTTON = '//p[contains(.,"OKAY, GOT IT")]'
const SUCCESSFUL_X_BUTTON = '//p[contains(.,"Yay!")]/parent::div/parent::div/preceding-sibling::h2/child::div/child::img'

class MoreDetailsRequiredPage{

    wait_until_screen_displayed(){
        $(MORE_DETAILS_REQUIRED_TITLE).waitForDisplayed()
    }

    get more_details_required_title(){
        return $(MORE_DETAILS_REQUIRED_TITLE)
    }

    get copywriting_1(){
        return $(COPYWRITING_1)
    }

    get your_name_label(){
        return $(YOUR_NAME_LABEL)
    }

    get your_name_field(){
        return $(YOUR_NAME_FIELD)
    }

    get your_name(){
        return $(YOUR_NAME)
    }

    get contact_number_label(){
        return $(CONTACT_NUMBER_LABEL)
    }

    get contact_number_field(){
        return $(CONTACT_NUMBER_FIELD)
    }

    get contact_number(){
        return $(CONTACT_NUMBER)
    }

    get email_label(){
        return $(EMAIL_LABEL)
    }

    get email_field(){
        return $(EMAIL_FIELD)
    }

    get email(){
        return $(EMAIL)
    }

    get not_now_button(){
        return $(NOT_NOW_BUTTON)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get successful_copywriting_1(){
        return $(SUCCESSFUL_COPYWRITING_1)
    }

    get successful_copywriting_2(){
        return $(SUCCESSFUL_COPYWRITING_2)
    }

    get successful_okay_got_it_button(){
        return $(SUCCESSFUL_OKAY_GOT_IT_BUTTON)
    }

    get successful_x_button(){
        return $(SUCCESSFUL_X_BUTTON)
    }

}

export default new MoreDetailsRequiredPage();