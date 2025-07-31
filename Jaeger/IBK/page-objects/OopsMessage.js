const CLOSE_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/footer/button'
const X_BUTTON = '//*[@id="mdc-dialog"]/div[1]/div/div[1]/div/div/div[1]/svg'

class OopsMessage{

    get close_button(){
        return $(CLOSE_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

}

export default new OopsMessage();