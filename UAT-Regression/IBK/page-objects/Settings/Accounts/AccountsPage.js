const VIEW_AND_MANAGE_DEFAULT_ACCOUNT_BUTTON = "//p[text()='VIEW & MANAGE DEFAULT ACCOUNT']"
const VIEW_AND_MANAGE_FAVOURITE_BUTTON = "//p[text()='VIEW & MANAGE FAVOURITES']"
const VIEW_AND_MANAGE_AUTO_DEBIT_BUTTON = "//p[text()='VIEW & MANAGE AUTO DEBIT']"
const TRANSACTION_LIMIT_PAYMENT = '(//p[contains(.,"Payment")])[1]'
const TRANSACTION_LIMIT_TOP_UP = '//p[contains(.,"Top Up")]'
const TRANSACTION_LIMIT_OVERSEAS_TRANSFER = '//p[contains(.,"Overseas Transfer")]'
const TRANSACTION_LIMIT_INVESTMENT = '//p[contains(.,"Investment")]'
const SCHEDULED_PAYMENTS_LABEL = "//p[text()='Credit card test1']"
const ADD_SCHEDULED_PAYMENTS_LINK = "//p[text()='ADD SCHEDULED PAYMENT']"
const ADD_SCHEDULED_PAYMENTS_EMPTY_MESSAGE = "//p[text()='Hmm... You don’t seem to have any Scheduled Payments. Add Scheduled Payments now to manage your payments easily.']"
const VIEW_OTHER_SCHEDULED_PAYMENTS = "//p[text()='VIEW OTHER SCHEDULED PAYMENTS']"
const DUITNOW_AUTODEBIT_TITLE = "//p[text()='DuitNow AutoDebit']"
const PAYMENT_DETAILS_PAY_BUTTON = "//span[text()='Pay']"
const PAYMENT_DETAILS_EDIT_BUTTON = "//span[text()='EDIT']"

class AccountsPage{

    wait_until_screen_displayed(){
        $(VIEW_AND_MANAGE_DEFAULT_ACCOUNT_BUTTON).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(VIEW_AND_MANAGE_FAVOURITE_BUTTON).getText()
    }

    wait_until_screen_displayed(){
        $(VIEW_AND_MANAGE_AUTO_DEBIT_BUTTON).getText()
    }

    get view_and_manage_default_account_button(){
        return $(VIEW_AND_MANAGE_DEFAULT_ACCOUNT_BUTTON)
    }


    get view_and_manage_favourite_button(){
        return $(VIEW_AND_MANAGE_FAVOURITE_BUTTON)
    }

    get view_and_manage_auto_debit_button(){
        return $(VIEW_AND_MANAGE_AUTO_DEBIT_BUTTON)
    }

    get transaction_limit_payment(){
        return $(TRANSACTION_LIMIT_PAYMENT)
    }

    get transaction_limit_top_up(){
        return $(TRANSACTION_LIMIT_TOP_UP)
    }

    get transaction_limit_overseas_transfer(){
        return $(TRANSACTION_LIMIT_OVERSEAS_TRANSFER)
    }

    get transaction_limit_investment(){
        return $(TRANSACTION_LIMIT_INVESTMENT)
    }

    get scheduled_payments_label(){
        return $(SCHEDULED_PAYMENTS_LABEL)
    }

    get add_scheduled_payments_link(){
        return $(ADD_SCHEDULED_PAYMENTS_LINK)
    }

    get add_scheduled_payments_empty_message(){
        return $(ADD_SCHEDULED_PAYMENTS_EMPTY_MESSAGE)
    }

    get view_other_scheduled_payments(){
        return $(VIEW_OTHER_SCHEDULED_PAYMENTS)
    }

    get duitnow_autodebit_title(){
        return $(DUITNOW_AUTODEBIT_TITLE)
    }

    get payment_details_pay_button(){
        return $(PAYMENT_DETAILS_PAY_BUTTON)
    }

    get payment_details_edit_button(){
        return $(PAYMENT_DETAILS_EDIT_BUTTON)
    }

}

export default new AccountsPage()