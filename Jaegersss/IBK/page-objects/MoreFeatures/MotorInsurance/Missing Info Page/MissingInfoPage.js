const BRAND_LABEL = '//label[contains(.,"Brand")]'
const BRAND_FIELD = '//label[contains(.,"Brand")]/following-sibling::div'
const MODEL_LABEL = '//label[contains(.,"Model")]'
const MODEL_FIELD = '//label[contains(.,"Model")]/following-sibling::div'
const YEAR_OF_MANUFACTURE_LABEL = '//label[contains(.,"Year of Manufacture")]'
const YEAR_OF_MANUFACTURE_FIELD = '//label[contains(.,"Year of Manufacture")]/following-sibling::div'
const VEHICLE_CAPACITY_LABEL = '//label[contains(.,"Vehicle Capacity (CC)")]'
const VEHICLE_CAPACITY_FIELD = '//label[contains(.,"Vehicle Capacity (CC)")]/following-sibling::div'
const VARIANT_SERIES_LABEL = '//label[contains(.,"Variant Series")]'
const VARIANT_SERIES_FIELD = '//label[contains(.,"Variant Series")]/following-sibling::div'
const CHASSIS_NUMBER_LABEL = '//label[contains(.,"Chassis Number")]'
const CHASSIS_NUMBER_FIELD = '//label[contains(.,"Chassis Number")]/following-sibling::div'
const CHASSIS_NUMBER = '//label[contains(.,"Chassis Number")]/following-sibling::div/child::input'
const ENGINE_NUMBER_LABEL = '//label[contains(.,"Engine Number")]'
const ENGINE_NUMBER_FIELD = '//label[contains(.,"Engine Number")]/following-sibling::div'
const ENGINE_NUMBER = '//label[contains(.,"Engine Number")]/following-sibling::div/child::input'
const SUBMIT_BUTTON = '//p[contains(.,"SUBMIT")]/parent::div/parent::button'
const X_BUTTON = '//p[contains(.,"Please enter missing info for BY5754")]/parent::div/preceding-sibling::h2/child::div/child::img'

const BRAND_PERODUA = '//p[contains(.,"PERODUA")]'
const MODEL_KANCIL = '//p[contains(.,"KANCIL")]'
const YEAR_OF_MANUFACTURE_2001 = '//p[contains(.,"2001")]'
const VEHICLE_CAPACITY_847 = '//p[contains(.,"847")]'
const VARIANT_SERIES_HATCHBACK_5 = '//p[contains(.,"850 EX--4D HATCHBACK-5 SP MANUAL")]'


const BRAND_AUDI = '//p[contains(.,"AUDI")]'
const MODEL_Q2 = '//p[contains(.,"Q2")]'
const YEAR_OF_MANUFACTURE_2017 = '//p[contains(.,"2017")]'
const VEHICLE_CAPACITY_1395 = '//p[contains(.,"1395")]'

const BRAND_HONDA = '//p[contains(.,"HONDA")]'
const MODEL_CITY = '(//p[contains(.,"CITY")])[1]'
const YEAR_OF_MANUFACTURE_2017_HONDA = '//p[contains(.,"2017")]'
const VEHICLE_CAPACITY_1496 = '(//p[contains(.,"1496")])[1]'
const VARIANT_SERIES_E_MY14 = '//p[contains(.,"E-MY14 FACELIFT-4D SEDAN-1 SP AUTOMATIC CONSTANTLY VARIABLE")]'

class MissingInfoPage{

    wait_until_screen_displayed(){
        $(BRAND_LABEL).waitForDisplayed()
    }

    get brand_label(){
        return $(BRAND_LABEL)
    }

    get brand_field(){
        return $(BRAND_FIELD)
    }

    get model_label(){
        return $(MODEL_LABEL)
    }

    get model_field(){
        return $(MODEL_FIELD)
    }

    get year_of_manufacture_label(){
        return $(YEAR_OF_MANUFACTURE_LABEL)
    }

    get year_of_manufacture_field(){
        return $(YEAR_OF_MANUFACTURE_FIELD)
    }

    get vehicle_capacity_label(){
        return $(VEHICLE_CAPACITY_LABEL)
    }

    get vehicle_capacity_field(){
        return $(VEHICLE_CAPACITY_FIELD)
    }

    get variant_series_label(){
        return $(VARIANT_SERIES_LABEL)
    }

    get variant_series_field(){
        return $(VARIANT_SERIES_FIELD)
    }

    get chassis_number_label(){
        return $(CHASSIS_NUMBER_LABEL)
    }

    get chassis_number_field(){
        return $(CHASSIS_NUMBER_FIELD)
    }

    get chassis_number(){
        return $(CHASSIS_NUMBER)
    }

    get engine_number_label(){
        return $(ENGINE_NUMBER_LABEL)
    }

    get engine_number_field(){
        return $(ENGINE_NUMBER_FIELD)
    }

    get engine_number(){
        return $(ENGINE_NUMBER)
    }

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get brand_perodua(){
        return $(BRAND_PERODUA)
    }

    get model_kancil(){
        return $(MODEL_KANCIL)
    }

    get year_of_manufacture_2001(){
        return $(YEAR_OF_MANUFACTURE_2001)
    }

    get vehicle_capacity_847(){
        return $(VEHICLE_CAPACITY_847)
    }

    get variant_series_hatchback_5(){
        return $(VARIANT_SERIES_HATCHBACK_5)
    }

    get brand_audi(){
        return $(BRAND_AUDI)
    }

    get model_q2(){
        return $(MODEL_Q2)
    }

    get year_of_manufacture_2017(){
        return $(YEAR_OF_MANUFACTURE_2017)
    }

    get vehicle_capacity_1395(){
        return $(VEHICLE_CAPACITY_1395)
    }

    get brand_honda(){
        return $(BRAND_HONDA)
    }

    get model_city(){
        return $(MODEL_CITY)
    }

    get year_of_manufacture_2017_honda(){
        return $(YEAR_OF_MANUFACTURE_2017_HONDA)
    }

    get vehicle_capacity_1496(){
        return $(VEHICLE_CAPACITY_1496)
    }

    get variant_series_e_my14(){
        return $(VARIANT_SERIES_E_MY14)
    }
}

export default new MissingInfoPage();