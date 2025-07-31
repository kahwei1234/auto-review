const SEGMENT_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[1]/section[2]'
const USERNAME_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[2]/section[2]'
const ID_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[1]/section[2]'
const USER_TYPE_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[3]/div[2]/section[2]'
const ID_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[4]/section[2]'
const CIS_NUMBER_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[5]/section[2]'
const AAOP_ID_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[6]/section[2]'
const USERNAME_STATUS_VALUE = '//*[@id="app"]/div[2]/section/div[2]/div[1]/section/div/div/section/section/section[3]/div[7]/section[2]'
const NEW_SEARCH_BUTTON = '//*[@id="app"]/div[2]/section/div[1]/div[1]/div[2]/div[2]/div/div/button'

class FavouritePage{

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
}

export default new FavouritePage()