const BILLER_INFORMATION = "//div[text()='BILLER INFORMATION']"
const PAYMENT_COLLECTION_INFORMATION = "//div[text()='PAYMENT COLLECTION INFORMATION']"
const SETTLEMENT_INFORMATION = "//div[text()='SETTLEMENT INFORMATION']"
const OTHER_INFORMATION = "//div[text()='OTHER INFORMATION']"

class BillerDetailsPage{

    wait_until_screen_displayed(){
        $(BILLER_INFORMATION).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(PAYMENT_COLLECTION_INFORMATION).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(SETTLEMENT_INFORMATION).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(OTHER_INFORMATION).waitForDisplayed()
    }

    get biller_information(){
        return $(BILLER_INFORMATION)
    }

    get payment_collection_information(){
        return $(PAYMENT_COLLECTION_INFORMATION)
    }

    get settlement_information(){
        return $(SETTLEMENT_INFORMATION)
    }

    get other_information(){
        return $(OTHER_INFORMATION)
    }
  
}

export default new BillerDetailsPage()