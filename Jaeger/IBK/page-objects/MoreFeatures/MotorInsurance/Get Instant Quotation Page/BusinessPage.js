const VEHICLE_REGISTRATION_NUMBER_FIELD = '//label[contains(.,"Vehicle Registration Number")]/parent::div/child::div'
const VEHICLE_REGISTRATION_NUMBER_LABEL = '//label[contains(.,"Vehicle Registration Number")]'
const VEHICLE_REGISTRATION_NUMBER = '//label[contains(.,"Vehicle Registration Number")]/parent::div/child::div/child::input'
const BUSINESS_REGISTRATION_NUMBER_FIELD = '//label[contains(.,"Business Registration Number")]/parent::div/child::div'
const BUSINESS_REGISTRATION_NUMBER_LABEL = '//label[contains(.,"Business Registration Number")]'
const BUSINESS_REGISTRATION_NUMBER = '//label[contains(.,"Business Registration Number")]/parent::div/child::div/child::input'
const POSTCODE_FIELD = '//label[contains(.,"Postcode")]/following-sibling::div'
const POSTCODE_LABEL = '//label[contains(.,"Postcode")]'
const POSTCODE = '//label[contains(.,"Postcode")]/following-sibling::div/child::input'
const CONTACT_US_COPYWRITING_1 = "//p[text()='Our dedicated support team is here to address any concerns you may have.']"
const CONTACT_US_COPYWRITING_2 = "//p[text()='CONTACT US']"
const PRIVACY_NOTES_COPYWRITING_1 = "//p[text()='By clicking Next, I confirm I have read and understood the document below.']"
const PRIVACY_NOTES_COPYWRITING_2 = "//p[text()='PRIVACY NOTICE']"
const NEXT_BUTTON = '//button[contains(.,"NEXT")]'

class BusinessPage{

    wait_until_screen_displayed(){
        $(VEHICLE_REGISTRATION_NUMBER_FIELD).waitForDisplayed()
    }

    get vehicle_registration_number_field(){
        return $(VEHICLE_REGISTRATION_NUMBER_FIELD)
    }

    get vehicle_registration_number_label(){
        return $(VEHICLE_REGISTRATION_NUMBER_LABEL)
    }

    get vehicle_registration_number(){
        return $(VEHICLE_REGISTRATION_NUMBER)
    }

    get business_registration_number_field(){
        return $(BUSINESS_REGISTRATION_NUMBER_FIELD)
    }

    get business_registration_number_label(){
        return $(BUSINESS_REGISTRATION_NUMBER_LABEL)
    }

    get business_registration_number(){
        return $(BUSINESS_REGISTRATION_NUMBER)
    }

    get postcode_field(){
        return $(POSTCODE_FIELD)
    }

    get postcode_label(){
        return $(POSTCODE_LABEL)
    }

    get postcode(){
        return $(POSTCODE)
    }

    get contact_us_copywriting_1(){
        return $(CONTACT_US_COPYWRITING_1)
    }

    get contact_us_copywriting_2(){
        return $(CONTACT_US_COPYWRITING_2)
    }

    get privacy_notes_copywriting_1(){
        return $(PRIVACY_NOTES_COPYWRITING_1)
    }

    get privacy_notes_copywriting_2(){
        return $(PRIVACY_NOTES_COPYWRITING_2)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new BusinessPage();