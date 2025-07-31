const DUITNOW_AUTODEBIT_TITLE = '//p[contains(.,"DuitNow AutoDebit")]'
const MERCHANT_NAME = '(//p[contains(.,"2C2P SYSTEM (MALAYSIA) SDN. BHD.")])[10]'
const STATUS = '//p[contains(.,"Pending Approval")]'


class DuitNowAutoDebitPage{

    wait_until_screen_displayed(){
        $(DUITNOW_AUTODEBIT_TITLE).getText()
    }

    get duitnow_autodebit_title(){
        return $(DUITNOW_AUTODEBIT_TITLE)
    }


    get merchant_name(){
        return $(MERCHANT_NAME)
    }

    get status(){
        return $(STATUS)
    }

}

export default new DuitNowAutoDebitPage()