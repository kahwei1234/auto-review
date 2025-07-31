const RHB_SMART_ACCOUNT = "//p[text()='RHB Smart Account']"
const RHB_SMART_ACCOUNT_I = "//p[text()='RHB Smart Account-i']"
const RHB_MAXSAVE = "//p[text()='RHB MaxSave']"
const RHB_SAVING_ACCOUNT_I = "//p[text()='RHB Savings Account-i']"

class DepositAccountPage{

    wait_until_screen_displayed(){
        $(RHB_SMART_ACCOUNT).waitForDisplayed()
    }

    get rhb_smart_account(){
        return $(RHB_SMART_ACCOUNT)
    }

    get rhb_smart_account_i(){
        return $(RHB_SMART_ACCOUNT_I)
    }

    get rhb_maxsave(){
        return $(RHB_MAXSAVE)
    }

    get rhb_saving_account_i(){
        return $(RHB_SAVING_ACCOUNT_I)
    }

   
}

export default new DepositAccountPage();