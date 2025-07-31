const SUCCESSFUL_MESSAGE_1 = '//p[contains(.,"Yay!")]'
const SUCCESSFUL_MESSAGE_2 = '//p[contains(.,"Yay!")]/following-sibling::p'

class SuccessfulChangedMessage{

    wait_until_screen_displayed(){
        $(SUCCESSFUL_MESSAGE_1).getText()
    }

    get successful_message_1(){
        return $(SUCCESSFUL_MESSAGE_1)
    }


    get successful_message_2(){
        return $(SUCCESSFUL_MESSAGE_2)
    }

}

export default new SuccessfulChangedMessage()