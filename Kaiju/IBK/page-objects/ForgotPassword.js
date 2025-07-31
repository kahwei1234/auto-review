const FORGOT_PASSWORD_MODAL = 'div.mdc-dialog--open div.mdc-dialog__container div.mdc-dialog__surface'
const X_BUTTON = 'div.e1g8p52p2'
const CARD_LOAN_ACCOUNT_NUMBER_FIELD = 'div.mdc-dialog--open div.mdc-dialog__container div.mdc-dialog__surface div.mdc-text-field'
const CARD_LOAN_ACCOUNT_NUMBER = 'div.mdc-dialog--open div.mdc-dialog__container div.mdc-dialog__surface div.mdc-text-field input.mdc-text-field__input'
const NEXT_BUTTON = 'div.mdc-dialog--open div.mdc-dialog__container div.mdc-dialog__surface div.e1d8l7bt0 button.mdc-ripple-upgraded'
const FORGOT_LOGIN_DETAILS_SENTENCE1 = 'div.e1g8p52p3 h4.ey9wtc0'
const NO_WORRIES_SENTENCE2 = 'div.css-1cwl24f-StyledBox p.css-a5ww0b'


class ForgotPassword{

    get forgot_password_modal(){
        return $(FORGOT_PASSWORD_MODAL)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get card_loan_account_number_field(){
        return $(CARD_LOAN_ACCOUNT_NUMBER_FIELD)
    }

    get card_loan_account_number(){
        return $(CARD_LOAN_ACCOUNT_NUMBER)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get forgot_login_details_sentence1(){
        return $(FORGOT_LOGIN_DETAILS_SENTENCE1)
    }

    get no_worries_sentence2(){
        return $(NO_WORRIES_SENTENCE2)
    }

}

export default new ForgotPassword();