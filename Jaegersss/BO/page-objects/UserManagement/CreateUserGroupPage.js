const CREATE_NEW_USER_GROUP_TITLE = '//*[@id="modal-title"]'
const USER_GROUP_FIELD = '//*[@id="simple-modal-description"]/section/div/div/div/div/input'
const USER_ROLE_DROPDOWN = '//*[@id="simple-modal-description"]/section/section/div/div/div'
const USER_ROLE_CHECKER = '//*[@id="menu-"]/div[2]/ul/li[1]'
const USER_ROLE_MAKER = '//*[@id="menu-"]/div[2]/ul/li[2]'
const USER_ROLE_INQUIRER = '//*[@id="menu-"]/div[2]/ul/li[3]'
const ACCESS_LEVEL_DROPDOWN = '//*[@id="simple-modal-description"]/section/section/section/section/section/section/img'
const ACCESS_LEVEL_SEARCH = '/html/body/div[3]/div[2]/div/section/section/div/input'
const CREATE_NEW_E_BANNER_CHECKBOX = "//span[text()='e-Banner']"
const CREATE_NEW_APPLY_BUTTON = "//span[text()='Apply']"
const REMOVE_ALL_SECTION_BUTTON = '//*[@id="simple-modal-description"]/section/section/section/section[2]/section/section[2]'
const CREATE_NEW_CANCEL_BUTTON = "//span[text()='Cancel']"
const CREATE_NEW_CONFIRM_AND_SUBMIT_BUTTON = "//span[text()='Confirm and Submit']"

class CreateUserGroupPage{

    wait_until_screen_displayed(){
        $(CREATE_NEW_USER_GROUP_TITLE).waitForDisplayed()
    }

    get create_new_user_group_title(){
        return $(CREATE_NEW_USER_GROUP_TITLE)
    }

    get user_group_field(){
        return $(USER_GROUP_FIELD)
    }

    get user_role_dropdown(){
        return $(USER_ROLE_DROPDOWN)
    }

    get user_role_checker(){
        return $(USER_ROLE_CHECKER)
    }


    get user_role_maker(){
        return $(USER_ROLE_MAKER)
    }

    get user_role_inquirer(){
        return $(USER_ROLE_INQUIRER)
    }

    get access_level_dropdown(){
        return $(ACCESS_LEVEL_DROPDOWN)
    }


    get access_level_search(){
        return $(ACCESS_LEVEL_SEARCH)
    }


    get create_new_e_banner_checkbox(){
        return $(CREATE_NEW_E_BANNER_CHECKBOX)
    }

    get create_new_apply_button(){
        return $(CREATE_NEW_APPLY_BUTTON)
    }

    get remove_all_section_button(){
        return $(REMOVE_ALL_SECTION_BUTTON)
    }

    get create_new_cancel_button(){
        return $(CREATE_NEW_CANCEL_BUTTON)
    }

    get create_new_confirm_and_submit_button(){
        return $(CREATE_NEW_CONFIRM_AND_SUBMIT_BUTTON)
    }

}

export default new CreateUserGroupPage()