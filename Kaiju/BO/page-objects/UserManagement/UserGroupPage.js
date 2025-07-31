const USER_GROUP_SEARCH_TITLE = '//*[@id="mainDiv"]/div/div[1]/div/div[1]/div'
const ROLE_DROPDOWN = '//*[@id="mainDiv"]/section[1]/section[1]/section[1]/img'
const ACCESS_LEVEL_DROPDOWN = '//*[@id="mainDiv"]/section[1]/section[1]/section[2]/img'
const USER_GROUP_E_BANNER_CHECKBOX = "//span[text()='e-Banner']"
const USER_GROUP_APPLY_BUTTON = "//span[text()='Apply']"
const CREATE_NEW_GROUP_BUTTON = '//*[@id="mainDiv"]/div/div[1]/div/div[2]/div/div/button'

class UserGroupPage{

    wait_until_screen_displayed(){
        $(USER_GROUP_SEARCH_TITLE).waitForDisplayed()
    }

    get user_group_search_title(){
        return $(USER_GROUP_SEARCH_TITLE)
    }

    get role_dropdown(){
        return $(ROLE_DROPDOWN)
    }

    get access_level_dropdown(){
        return $(ACCESS_LEVEL_DROPDOWN)
    }

    get user_group_e_banner_checkbox(){
        return $(USER_GROUP_E_BANNER_CHECKBOX)
    }


    get user_group_apply_button(){
        return $(USER_GROUP_APPLY_BUTTON)
    }

    get create_new_group_button(){
        return $(CREATE_NEW_GROUP_BUTTON)
    }

}

export default new UserGroupPage()