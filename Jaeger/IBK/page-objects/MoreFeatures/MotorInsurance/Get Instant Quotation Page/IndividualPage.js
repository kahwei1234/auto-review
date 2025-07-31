const VEHICLE_REGISTRATION_NUMBER_FIELD = '//label[contains(.,"Vehicle Registration Number")]/parent::div/child::div'
const VEHICLE_REGISTRATION_NUMBER_LABEL = '//label[contains(.,"Vehicle Registration Number")]'
const VEHICLE_REGISTRATION_NUMBER = '//label[contains(.,"Vehicle Registration Number")]/parent::div/child::div/child::input'
const VEHICLE_REGISTRATION_INLINE_MESSAGE = '//label[contains(.,"Vehicle Registration Number")]/following-sibling::p'
const ID_TYPE_FIELD = '//label[contains(.,"ID Type")]/following-sibling::div'
const ID_TYPE_LABEL = '//label[contains(.,"ID Type")]'
const ID_TYPE_MYKAD = '//p[contains(.,"MyKad")]'
const ID_TYPE_OTHERS = '//p[contains(.,"Others")]'
const ID_NUMBER_FIELD = '//label[contains(.,"ID Number")]/following-sibling::div'
const ID_NUMBER_LABEL = '//label[contains(.,"ID Number")]'
const ID_NUMBER = '//label[contains(.,"ID Number")]/following-sibling::div/child::input'
const ID_NUMBER_INLINE_MESSAGE = '//label[contains(.,"ID Number")]/following-sibling::p'
const POSTCODE_FIELD = '//label[contains(.,"Postcode")]/following-sibling::div'
const POSTCODE_LABEL = '//label[contains(.,"Postcode")]'
const POSTCODE = '//label[contains(.,"Postcode")]/following-sibling::div/child::input'
const POSTCODE_INLINE_MESSAGE = '//label[contains(.,"Postcode")]/following-sibling::p'
const MARITAL_STATUS_FIELD = '//label[contains(.,"Marital Status")]/following-sibling::div'
const MARITAL_STATUS_LABEL = '//label[contains(.,"Marital Status")]'
const MARITAL_STATUS_SINGLE = '//p[contains(.,"Single")]'
const MARITAL_STATUS_MARRIED = '//p[contains(.,"Married")]'
const MARITAL_STATUS_WIDOWED = '//p[contains(.,"Widowed")]'
const MARITAL_STATUS_SEPERATE_DIVORCED = '//p[contains(.,"Separated/Divorced")]'
const MARITAL_STATUS_OTHER = '//p[contains(.,"Others")]'
const BIRTH_DATE_LABEL = '//label[contains(.,"Birth Date")]'
const BIRTH_DATE_FIELD = '//label[contains(.,"Birth Date")]/following-sibling::div'
const BIRTH_DATE_YEAR_FIELD = '//label[contains(.,"Year")]/following-sibling::div'
const BIRTH_DATE_YEAR_2024 = '//p[contains(.,"2024")]'
const BIRTH_DATE_12 = '//p[contains(.,"12")]'
const NATIONALITY_LABEL = '//label[contains(.,"Nationality")]'
const NATIONALITY_FIELD = '//label[contains(.,"Nationality")]/following-sibling::div'
const NATIONALITY_MALAYSIA = '//p[contains(.,"Malaysia")]'
const GENDER_LABEL = '//p[contains(.,"Gender")]'
const GENDER_MALE_LABEL = '//p[contains(.,"Male")]' 
const GENDER_RADIO_BUTTON_MALE = '//p[contains(.,"Male")]/parent::span/preceding-sibling::span'
const GENDER_FEMALE_LABEL = '//p[contains(.,"Female")]' 
const GENDER_RADIO_BUTTON_FEMALE = '//p[contains(.,"Female")]/parent::span/preceding-sibling::span'
const CONTACT_US_COPYWRITING_1 = "//p[text()='Our dedicated support team is here to address any concerns you may have.']"
const CONTACT_US_COPYWRITING_2 = "//p[text()='CONTACT US']"
const PRIVACY_NOTES_COPYWRITING_1 = "//p[text()='By clicking Next, I confirm I have read and understood the document below.']"
const PRIVACY_NOTES_COPYWRITING_2 = "//p[text()='PRIVACY NOTICE']"
const NEXT_BUTTON = '//button[contains(.,"NEXT")]'

class IndividualPage{

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

    get vehicle_registration_inline_message(){
        return $(VEHICLE_REGISTRATION_INLINE_MESSAGE)
    }

    get id_type_field(){
        return $(ID_TYPE_FIELD)
    }

    get id_type_label(){
        return $(ID_TYPE_LABEL)
    }

    get id_type_mykad(){
        return $(ID_TYPE_MYKAD)
    }

    get id_type_others(){
        return $(ID_TYPE_OTHERS)
    }

    get id_number_field(){
        return $(ID_NUMBER_FIELD)
    }

    get id_number_label(){
        return $(ID_NUMBER_LABEL)
    }

    get id_number(){
        return $(ID_NUMBER)
    }

    get id_number_inline_message(){
        return $(ID_NUMBER_INLINE_MESSAGE)
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

    get postcode_inline_message(){
        return $(POSTCODE_INLINE_MESSAGE)
    }

    get marital_status_field(){
        return $(MARITAL_STATUS_FIELD)
    }

    get marital_status_label(){
        return $(MARITAL_STATUS_LABEL)
    }

    get marital_status_single(){
        return $(MARITAL_STATUS_SINGLE)
    }

    get marital_status_married(){
        return $(MARITAL_STATUS_MARRIED)
    }

    get marital_status_widowed(){
        return $(MARITAL_STATUS_WIDOWED)
    }

    get marital_status_seperate_divorced(){
        return $(MARITAL_STATUS_SEPERATE_DIVORCED)
    }

    get marital_status_other(){
        return $(MARITAL_STATUS_OTHER)
    }

    get birth_date_label(){
        return $(BIRTH_DATE_LABEL)
    }

    get birth_date_field(){
        return $(BIRTH_DATE_FIELD)
    }

    get birth_date_year_field(){
        return $(BIRTH_DATE_YEAR_FIELD)
    }

    get birth_date_year_2024(){
        return $(BIRTH_DATE_YEAR_2024)
    }

    get birth_date_12(){
        return $(BIRTH_DATE_12)
    }

    get nationality_label(){
        return $(NATIONALITY_LABEL)
    }

    get nationality_field(){
        return $(NATIONALITY_FIELD)
    }

    get nationality_malaysia(){
        return $(NATIONALITY_MALAYSIA)
    }

    get gender_label(){
        return $(GENDER_LABEL)
    }

    get gender_male_label(){
        return $(GENDER_MALE_LABEL)
    }

    get gender_radio_button_male(){
        return $(GENDER_RADIO_BUTTON_MALE)
    }

    get gender_female_label(){
        return $(GENDER_FEMALE_LABEL)
    }

    get gender_radio_button_female(){
        return $(GENDER_RADIO_BUTTON_FEMALE)
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

export default new IndividualPage();