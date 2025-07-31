const CANCEL_BUTTON = '//html/body/div[2]/div[2]/div/div/div[2]/div/div[3]/div/button'
const BACK_BUTTON = '/html/body/div[2]/div[2]/div/div/div[1]/div/button'
const MODEL_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[1]/b'
const OPERATING_SYSTEM_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[3]/b'
const OPERATING_SYSTEM_VERSION_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[5]/b'
const LAST_SIGN_IN_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[7]/b'
const REGISTERED_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[9]/b'
const DEVICE_ID_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[11]/b'
const DEVICE_NAME_TITLE = '/html/body/div[2]/div[2]/div/div/div[2]/div/h3[2]/div/div[13]/b'

class DeviceDetailsPage{

    wait_until_screen_displayed(){
        $(MODEL_TITLE).waitForDisplayed()
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

    get back_button(){
        return $(BACK_BUTTON)
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

    get device_id_title(){
        return $(DEVICE_ID_TITLE)
    }

    get device_name_title(){
        return $(DEVICE_NAME_TITLE)
    }
}

export default new DeviceDetailsPage()