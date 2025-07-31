const VEHICLE_REGISTRATION_NUMBER_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[1]/div/div'
const VEHICLE_REGISTRATION_NUMBER_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[1]/div/div/label'
const VEHICLE_REGISTRATION_NUMBER = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[1]/div/div/div/input'
const ID_TYPE_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[2]/div/div'
const ID_TYPE_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[2]/div/label'
const ID_TYPE_MYKAD = "//p[text()='MyKAD']"
const ID_TYPE_OTHERS = "//p[text()='Others']"
const ID_NUMBER_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[3]/div/div'
const ID_NUMBER_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[3]/div/div/label'
const ID_NUMBER = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[3]/div/div/div/input'
const POSTCODE_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[4]/div/div'
const POSTCODE_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[4]/div/div/label'
const POSTCODE = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[4]/div/div/div/input'
const MARITAL_STATUS_FIELD = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[5]/div/div'
const MARITAL_STATUS_LABEL = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[5]/div/div/label'
const MARITAL_STATUS = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/div[1]/div/div[5]/div/div/div/input'
const COPYWRITING_3 = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[1]/p'
const NEXT_BUTTON = '/html/body/div/div/div/div[2]/div[3]/div/div[2]/form/div[2]/div/div/button/div/p'

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

    get postcode_field(){
        return $(POSTCODE_FIELD)
    }

    get postcode_label(){
        return $(POSTCODE_LABEL)
    }

    get postcode(){
        return $(POSTCODE)
    }

    get marital_status_field(){
        return $(MARITAL_STATUS_FIELD)
    }

    get marital_status_label(){
        return $(MARITAL_STATUS_LABEL)
    }

    get marital_status(){
        return $(MARITAL_STATUS)
    }

    get copywriting_3(){
        return $(COPYWRITING_3)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new IndividualPage();