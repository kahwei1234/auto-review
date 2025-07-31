const OVERSEAS_TRANSFER_REVIEW_TITLE = '//p[contains(.,"Overseas Transfer Review")]'
const TO_COUNTRY_VALUE = '//p[contains(.,"To Country")]/following-sibling::p'
const CURRENCY_VALUE = '//p[contains(.,"Currency")]/following-sibling::p'
const PROMO_CODE_VALUE = '//p[contains(.,"Promo Code")]/following-sibling::p'
const SENDER_NAME_VALUE = '//p[contains(.,"Sender Name")]/following-sibling::p'
const COUNTRY_OF_BIRTH_VALUE = '//p[contains(.,"Country of Birth")]/following-sibling::p'
const SOURCE_OF_FUND_VALUE = '//p[contains(.,"Source of Fund")]/following-sibling::p'
const EMPLOYMENT_POSITION_VALUE = '//p[contains(.,"Employment Position")]/following-sibling::p'
const RELATIONSHIP_TO_RECIPIENT_VALUE = '//p[contains(.,"Relationship to Recipient")]/following-sibling::p'
const RECIPIENT_FIRST_NAME_VALUE = '//p[contains(.,"Recipient First Name")]/following-sibling::p'
const RECIPIENT_LAST_NAME_VALUE = '//p[contains(.,"Recipient Last Name")]/following-sibling::p'
const RESIDENT_OF_MALAYSIA_VALUE = '//p[contains(.,"Resident of Malaysia")]/following-sibling::p'
const ID_NUMBER_VALUE = '//p[contains(.,"ID Number")]/following-sibling::p'
const CONTACT_NUMBER_VALUE = '//p[contains(.,"Contact Number")]/following-sibling::p'
const PURPOSE_OF_PAYMENT_VALUE = '//p[contains(.,"Purpose of Payment")]/following-sibling::p'
const SUBMIT_BUTTON = '//p[contains(.,"Submit")]/parent::div/parent::button'
const CANCEL_BUTTON = '//p[contains(.,"Cancel")]/parent::div/parent::button'

class OverseasTransferReviewPage{

    wait_until_screen_displayed(){
        $(OVERSEAS_TRANSFER_REVIEW_TITLE).waitForDisplayed()
    }

    get overseas_transfer_review_title(){
        return $(OVERSEAS_TRANSFER_REVIEW_TITLE)
    }

    get to_country_value(){
        return $(TO_COUNTRY_VALUE)
    }

    get currency_value(){
        return $(CURRENCY_VALUE)
    }

    get promo_code_value(){
        return $(PROMO_CODE_VALUE)
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

    get submit_button(){
        return $(SUBMIT_BUTTON)
    }

    get cancel_button(){
        return $(CANCEL_BUTTON)
    }

}

export default new OverseasTransferReviewPage();