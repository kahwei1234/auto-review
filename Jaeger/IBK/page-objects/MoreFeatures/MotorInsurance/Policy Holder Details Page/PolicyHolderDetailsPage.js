const POLICY_HOLDER_DETAILS_TITLE = '//p[contains(.,"Policy Holder Details")]'
const POLICY_HOLDER_NAME_LABEL = '//label[contains(.,"Policy Holder Name")]'
const POLICY_HOLDER_NAME_FIELD = '//label[contains(.,"Policy Holder Name")]/following-sibling::div'
const POLICY_HOLDER_NAME = '//label[contains(.,"Policy Holder Name")]/following-sibling::div/child::input'
const CONTACT_NUMBER_LABEL = '//label[contains(.,"Contact Number")]'
const CONTACT_NUMBER_FIELD = '//label[contains(.,"Contact Number")]/following-sibling::div'
const CONTACT_NUMBER = '//label[contains(.,"Contact Number")]//following-sibling::div/child::input'
const EMAIL_LABEL = '//label[contains(.,"Email")]'
const EMAIL_FIELD = '//label[contains(.,"Email")]/following-sibling::div'
const EMAIL = '//label[contains(.,"Email")]/following-sibling::div/child::input'
const MAILING_ADDRESS_LINE_1_LABEL = '//label[contains(.,"Mailing Address Line 1")]'
const MAILING_ADDRESS_LINE_1_FIELD = '//label[contains(.,"Mailing Address Line 1")]/following-sibling::div'
const MAILING_ADDRESS_LINE_1 = '//label[contains(.,"Mailing Address Line 1")]/following-sibling::div/child::input'
const MAILING_ADDRESS_LINE_2_LABEL = '//label[contains(.,"Mailing Address Line 2")]'
const MAILING_ADDRESS_LINE_2_FIELD = '//label[contains(.,"Mailing Address Line 2")]/following-sibling::div'
const MAILING_ADDRESS_LINE_2 = '//label[contains(.,"Mailing Address Line 2")]/following-sibling::div/child::input'
const POSTCODE_LABEL = '//label[contains(.,"Postcode")]'
const POSTCODE_FIELD = '//label[contains(.,"Postcode")]/following-sibling::div'
const POSTCODE = '//label[contains(.,"Postcode")]/following-sibling::div/child::input'
const STATE_LABEL = '//label[contains(.,"State")]'
const STATE_FIELD = '//label[contains(.,"State")]/following-sibling::div'
const STATE = '//label[contains(.,"State")]/following-sibling::div/child::input'
const NEXT_BUTTON = '//p[contains(.,"NEXT")]/parent::div/parent::button'
const X_BUTTON = '(//p[contains(.,"Policy Holder Details")]/parent::div/parent::div/preceding-sibling::div/child::div)[3]/child::img'

class PolicyHolderDetailsPage{

    wait_until_screen_displayed(){
        $(POLICY_HOLDER_DETAILS_TITLE).waitForDisplayed()
    }

    get policy_holder_details_title(){
        return $(POLICY_HOLDER_DETAILS_TITLE)
    }

    get policy_holder_name_label(){
        return $(POLICY_HOLDER_NAME_LABEL)
    }

    get policy_holder_name_field(){
        return $(POLICY_HOLDER_NAME_FIELD)
    }

    get policy_holder_name(){
        return $(POLICY_HOLDER_NAME)
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

    get mailing_address_line_1_label(){
        return $(MAILING_ADDRESS_LINE_1_LABEL)
    }

    get mailing_address_line_1_field(){
        return $(MAILING_ADDRESS_LINE_1_FIELD)
    }

    get mailing_address_line_1(){
        return $(MAILING_ADDRESS_LINE_1)
    }

    get mailing_address_line_2_label(){
        return $(MAILING_ADDRESS_LINE_2_LABEL)
    }

    get mailing_address_line_2_field(){
        return $(MAILING_ADDRESS_LINE_2_FIELD)
    }

    get mailing_address_line_2(){
        return $(MAILING_ADDRESS_LINE_2)
    }

    get postcode_label(){
        return $(POSTCODE_LABEL)
    }

    get postcode_field(){
        return $(POSTCODE_FIELD)
    }

    get postcode(){
        return $(POSTCODE)
    }

    get state_label(){
        return $(STATE_LABEL)
    }

    get state_field(){
        return $(STATE_FIELD)
    }

    get state(){
        return $(STATE)
    }
    
    get next_button(){
        return $(NEXT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

}

export default new PolicyHolderDetailsPage();