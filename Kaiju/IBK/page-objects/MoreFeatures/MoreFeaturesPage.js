const DUITNOW_TRANSFER = "//p[text()='DuitNow Transfer']"
const DUITNOW_TRANSFER_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div/div[1]/div/div/div[2]/p[2]'
const DUITNOW_AUTO_DEBIT = "//p[text()='DuitNow AutoDebit']"
const DUITNOW_AUTO_DEBIT_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/p[2]'
const PAY_BILLS = "//p[text()='Pay Bills']"
const PAY_BILLS_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div/div[3]/div/div/div[2]/p[2]'
const TOP_UP = "//p[text()='Top Up']"
const TOP_UP_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div/div[4]/div/div/div[2]/p[2]'
const OVERSEAS_TRANSFER = "//p[text()='Overseas Transfer']"
const OVERSEAS_TRANSFER_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[1]/div/div/div[5]/div/div/div[2]/p[2]'
const OPEN_ACCOUNT = "//p[text()='Open Account']"
const OPEN_ACCOUNT_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[3]/div/div/div[1]/div/div/div[2]/p[2]'
const BE_REWARDED = "//p[text()='Be Rewarded']"
const BE_REWARDED_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[3]/div/div/div[2]/div/div/div[2]/p[2]'
const MOTOR_INSURANCE = "//p[text()='Motor Insurance']"
const MOTOR_INSURANCE_DESCRIPTION = '//*[@id="mdc-dialog"]/div[1]/div/div/div/div[2]/div[1]/div[3]/div/div/div[3]/div/div/div[2]/p[2]'
const MOTOR_INSURANCE_WITHOUTCC_MESSAGE_TITLE = '/html/body/div/div/div[4]/div/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/div[3]/p'
const MOTOR_INSURANCE_WITHOUTCC_MESSAGE_DESC = '/html/body/div/div/div[4]/div/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/div[4]/p'
const MOTOR_INSURANCE_WITHOUTCC_CLOSE_BUTTON = '/html/body/div/div/div[4]/div/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div/div/button'
const MOTOR_INSURANCE_WITHOUTCC_X_BUTTON = '/html/body/div/div/div[4]/div/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/div[1]'

class MoreFeaturesPage{

    wait_until_screen_displayed(){
        $(DUITNOW_TRANSFER).waitForDisplayed()
    }

    get duitnow_transfer(){
        return $(DUITNOW_TRANSFER)
    }

    get duitnow_transfer_description(){
        return $(DUITNOW_TRANSFER_DESCRIPTION)
    }

    get duitnow_auto_debit(){
        return $(DUITNOW_AUTO_DEBIT)
    }

    get duitnow_auto_debit_description(){
        return $(DUITNOW_AUTO_DEBIT_DESCRIPTION)
    }

    get pay_bills(){
        return $(PAY_BILLS)
    }

    get pay_bills_description(){
        return $(PAY_BILLS_DESCRIPTION)
    }

    get top_up(){
        return $(TOP_UP)
    }

    get top_up_description(){
        return $(TOP_UP_DESCRIPTION)
    }

    get overseas_transfer(){
        return $(OVERSEAS_TRANSFER)
    }

    get overseas_transfer_description(){
        return $(OVERSEAS_TRANSFER_DESCRIPTION)
    }

    get open_account(){
        return $(OPEN_ACCOUNT)
    }

    get open_account_description(){
        return $(OPEN_ACCOUNT_DESCRIPTION)
    }

    get be_rewarded(){
        return $(BE_REWARDED)
    }

    get be_rewarded_description(){
        return $(BE_REWARDED_DESCRIPTION)
    }

    get motor_insurance(){
        return $(MOTOR_INSURANCE)
    }

    get motor_insurance_description(){
        return $(MOTOR_INSURANCE_DESCRIPTION)
    }

    get motor_insurance_withoutcc_message_title(){
        return $(MOTOR_INSURANCE_WITHOUTCC_MESSAGE_TITLE)
    }

    get motor_insurance_withoutcc_message_desc(){
        return $(MOTOR_INSURANCE_WITHOUTCC_MESSAGE_DESC)
    }

    get motor_insurance_withoutcc_close_button(){
        return $(MOTOR_INSURANCE_WITHOUTCC_CLOSE_BUTTON)
    }

    get motor_insurance_withoutcc_x_button(){
        return $(MOTOR_INSURANCE_WITHOUTCC_X_BUTTON)
    }

}

export default new MoreFeaturesPage();