const VEHICLE_FINANCING_TITLE = '//h3[contains(.,"Vehicle Financing")]'
const TRANSACTION_BUTTON = '//p[contains(.,"Transaction")]'
const STATEMENTS_BUTTON = '//p[contains(.,"Statements")]'
const STATEMENT_1 = '//p[contains(.,"January 2026")]'
const STATEMENT_2 = '//p[contains(.,"January 2025")]'
const PAY_BUTTON = '(//span[contains(.,"Pay")])[1]/parent::button'


class VehicleFinancingPage{

    wait_until_screen_displayed(){
        $(VEHICLE_FINANCING_TITLE).waitForDisplayed()
    }

    get vehicle_financing_title(){
        return $(VEHICLE_FINANCING_TITLE)
    }

    get transaction_button(){
        return $(TRANSACTION_BUTTON)
    }

    get statements_button(){
        return $(STATEMENTS_BUTTON)
    }

    get statement_1(){
        return $(STATEMENT_1)
    }

    get statement_2(){
        return $(STATEMENT_2)
    }

    get pay_button(){
        return $(PAY_BUTTON)
    }

}

export default new VehicleFinancingPage()