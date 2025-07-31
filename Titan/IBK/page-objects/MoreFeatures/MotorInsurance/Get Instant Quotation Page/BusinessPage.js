const VEHICLE_REGISTRATION_NUMBER_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[1]/div/div'
const VEHICLE_REGISTRATION_NUMBER_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[1]/div/div/label'
const VEHICLE_REGISTRATION_NUMBER = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[1]/div/div/div/input'
const BUSINESS_REGISTRATION_NUMBER_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[2]/div/div'
const BUSINESS_REGISTRATION_NUMBER_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[2]/div/div/label'
const BUSINESS_REGISTRATION_NUMBER = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[2]/div/div/div/input'
const POSTCODE_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[3]/div/div'
const POSTCODE_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[3]/div/div/label'
const POSTCODE = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/div[1]/div/div[3]/div/div/div/input'
const COPYWRITING_3 = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[1]/p'
const NEXT_BUTTON = '/html/body/div/div/div/div[2]/div[3]/div/div[3]/form/div[2]/div/div/button/div/p'

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

    get copywriting_3(){
        return $(COPYWRITING_3)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new BusinessPage();