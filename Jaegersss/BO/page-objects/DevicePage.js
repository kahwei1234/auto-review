const SEGMENT_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[1]/section[2]'
const USERNAME_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[2]/section[2]'
const ID_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[1]/section[2]'
const USER_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[2]/section[2]'
const ID_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[4]/section[2]'
const CIS_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[5]/section[2]'
const AAOP_ID_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[6]/section[2]'
const USERNAME_STATUS_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[7]/section[2]'
const NEW_SEARCH_BUTTON = '//*[@id="app"]/div[2]/section/div[1]/div[1]/div[2]/div[2]/div/div/button'
const MODEL_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[1]/section'
const OPERATING_SYSTEM_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[2]/section'
const OPERATING_SYSTEM_VERSION_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[3]/section'
const LAST_SIGN_IN_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[4]/section'
const REGISTERED_TITLE = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/thead/tr/th[5]/section'
const FIRST_CELL = '//*[@id="app"]/div[2]/section/div[2]/div[2]/section/table/tbody/tr[1]/td[1]/section'

class DevicePage{

    wait_until_screen_displayed(){
        $(SEGMENT_VALUE).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(NEW_SEARCH_BUTTON).waitForDisplayed()
    }

    get segment_value(){
        return $(SEGMENT_VALUE)
    }

    get username_value(){
        return $(USERNAME_VALUE)
    }

    get id_type_value(){
        return $(ID_TYPE_VALUE)
    }

    get user_type_value(){
        return $(USER_TYPE_VALUE)
    }

    get id_number_value(){
        return $(ID_NUMBER_VALUE)
    }

    get cis_number_value(){
        return $(CIS_NUMBER_VALUE)
    }

    get aaop_id_value(){
        return $(AAOP_ID_VALUE)
    }

    get username_status_value(){
        return $(USERNAME_STATUS_VALUE)
    }

    get new_search_button(){
        return $(NEW_SEARCH_BUTTON)
    }

    get model_title(){
        return $(MODEL_TITLE)
    }

    get operating_system_title(){
        return $(OPERATING_SYSTEM_TITLE)
    }

    get operating_system_version_title(){
        return $(OPERATING_SYSTEM_VERSION_TITLE)
    }

    get last_sign_in_title(){
        return $(LAST_SIGN_IN_TITLE)
    }

    get registered_title(){
        return $(REGISTERED_TITLE)
    }

    get first_cell(){
        return $(FIRST_CELL)
    }
}

export default new DevicePage()