const OVERSEAS_TRANSFER_SUCCESSFUL_TITLE = '//p[contains(.,"Overseas Transfer Successful")]'
const FROM_VALUE = '//p[contains(.,"From")]/following-sibling::p'
const TO_COUNTRY_VALUE = '//p[contains(.,"To Country")]/following-sibling::p'
const CURRENCY_VALUE = '(//p[contains(.,"Currency")]/following-sibling::p)[1]'
const AMOUNT_SENT_VALUE = '(//p[contains(.,"Amount Sent")]/following-sibling::p)[1]'
const AMOUNT_SENT_IN_FOREIGN_CURRENCY_VALUE = '//p[contains(.,"Amount Sent in Foreign Currency")]/following-sibling::p'
const PROMO_CODE_VALUE = '//p[contains(.,"Promo Code")]/following-sibling::p'
const CHARGES_VALUE = '//p[contains(.,"Charges")]/following-sibling::p'
const TOTAL_PAYMENT_VALUE = '//p[contains(.,"Total Payment")]/following-sibling::p'
//SENDER DETAILS
const SENDER_NAME_VALUE = '//p[contains(.,"Sender Name")]/following-sibling::p'
const COUNTRY_OF_BIRTH_VALUE = '//p[contains(.,"Country of Birth")]/following-sibling::p'
const SOURCE_OF_FUND_VALUE = '//p[contains(.,"Source of Fund")]/following-sibling::p'
const EMPLOYMENT_POSITION_VALUE = '//p[contains(.,"Employment Position")]/following-sibling::p'
const RELATIONSHIP_TO_RECIPIENT_VALUE = '//p[contains(.,"Relationship to Recipient")]/following-sibling::p'
//RECIPIENT DETAILS
const RECIPIENT_FIRST_NAME_VALUE = '//p[contains(.,"Recipient First Name")]/following-sibling::p'
const RECIPIENT_LAST_NAME_VALUE = '//p[contains(.,"Recipient Last Name")]/following-sibling::p'
const RESIDENT_OF_MALAYSIA_VALUE = '//p[contains(.,"Resident of Malaysia")]/following-sibling::p'
const ID_NUMBER_VALUE = '//p[contains(.,"ID Number")]/following-sibling::p'
const CONTACT_NUMBER_VALUE = '//p[contains(.,"Contact Number")]/following-sibling::p'
//PURPOSE OF PAYMENT
const PURPOSE_OF_PAYMENT_VALUE = '//p[contains(.,"Purpose of Payment")]/following-sibling::p'
const RETURN_TO_HOME_BUTTON = '//p[contains(.,"Return To Home")]/parent::div/parent::button'
const RECEIPT_BUTTON = '//p[contains(.,"RECEIPT")]/parent::div/parent::button'
const MAKE_NEW_PAYMENT_BUTTON = '//p[contains(.,"Make New Payment")]/parent::div/parent::button'

class OverseasTransferSuccessfulPage{

    wait_until_screen_displayed(){
        $(OVERSEAS_TRANSFER_SUCCESSFUL_TITLE).waitForDisplayed()
    }

    get overseas_transfer_successful_title(){
        return $(OVERSEAS_TRANSFER_SUCCESSFUL_TITLE)
    }

    get from_value(){
        return $(FROM_VALUE)
    }

    get to_country_value(){
        return $(TO_COUNTRY_VALUE)
    }

    get currency_value(){
        return $(CURRENCY_VALUE)
    }

    get amount_sent_value(){
        return $(AMOUNT_SENT_VALUE)
    }

    get amount_sent_in_foreign_currency_value(){
        return $(AMOUNT_SENT_IN_FOREIGN_CURRENCY_VALUE)
    }

    get promo_code_value(){
        return $(PROMO_CODE_VALUE)
    }

    get charges_value(){
        return $(CHARGES_VALUE)
    }

    get total_payment_value(){
        return $(TOTAL_PAYMENT_VALUE)
    }

    get sender_name_value(){
        return $(SENDER_NAME_VALUE)
    }

    get country_of_birth_value(){
        return $(COUNTRY_OF_BIRTH_VALUE)
    }

    get source_of_fund_value(){
        return $(SOURCE_OF_FUND_VALUE)
    }

    get employment_position_value(){
        return $(EMPLOYMENT_POSITION_VALUE)
    }

    get relationship_to_recipient_value(){
        return $(RELATIONSHIP_TO_RECIPIENT_VALUE)
    }

    get recipient_first_name_value(){
        return $(RECIPIENT_FIRST_NAME_VALUE)
    }

    get recipient_last_name_value(){
        return $(RECIPIENT_LAST_NAME_VALUE)
    }

    get resident_of_malaysia_value(){
        return $(RESIDENT_OF_MALAYSIA_VALUE)
    }

    get id_number_value(){
        return $(ID_NUMBER_VALUE)
    }

    get contact_number_value(){
        return $(CONTACT_NUMBER_VALUE)
    }

    get purpose_of_payment_value(){
        return $(PURPOSE_OF_PAYMENT_VALUE)
    }

    get return_to_home_button(){
        return $(RETURN_TO_HOME_BUTTON)
    }

    get receipt_button(){
        return $(RECEIPT_BUTTON)
    }

    get make_new_payment_button(){
        return $(MAKE_NEW_PAYMENT_BUTTON)
    }

}

export default new OverseasTransferSuccessfulPage();