const FIRST_H_POSITIVE_PERCENTAGE_PILL = '((((//p[contains(.,"Indicative Bond/Sukuk Price")])[1]/parent::div/parent::div/parent::div/parent::div/preceding-sibling::div/child::div)[2]/child::div)[2]/child::div)[1]/child::div/child::p'
const FIRST_H_NEGATIVE_PERCENTAGE_PILL = '((((//p[contains(.,"Indicative Bond/Sukuk Price")])[1]/parent::div/parent::div/parent::div/parent::div/preceding-sibling::div/child::div)[2]/child::div)[2]/child::div)[2]/child::div/child::p'
const FIRST_H_INDICATIVE_BOND_SUKUK_PRICE = '(//p[contains(.,"Indicative Bond/Sukuk Price")])[1]'
const FIRST_H_TOTAL_INVESTMENT_AMOUNT = '(//p[contains(.,"Total Investment Amount")])[2]'
const FIRST_H_VIEW_DETAILS_BUTTON = '(//p[contains(.,"VIEW DETAILS")])[1]'
const FIRST_H_BOND_ISIN_CODE = '(//p[contains(.,"Bond ISIN Code")])[1]'
const FIRST_H_BOND_ISIN_CODE_VALUE = '(//p[contains(.,"Bond ISIN Code")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_BOND_SUKUK_RISK_CLASS = '(//p[contains(.,"Bond/Sukuk Risk Class")])[1]'
const FIRST_H_BOND_SUKUK_RISK_CLASS_VALUE = '(//p[contains(.,"Bond/Sukuk Risk Class")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_COUPON_PROFIT_PAYMENT_FREQUENCY = '(//p[contains(.,"Coupon/Profit Payment Frequency")])[1]'
const FIRST_H_COUPON_PROFIT_PAYMENT_FREQUENCY_VALUE = '(//p[contains(.,"Coupon/Profit Payment Frequency")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_COUPON_PROFIT_RATE = '(//p[contains(.,"Coupon/Profit Rate (%)")])[1]'
const FIRST_H_COUPON_PROFIT_RATE_VALUE = '(//p[contains(.,"Coupon/Profit Rate (%)")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_NEXT_CALLABLE_DATE_MATURITY_DATE = '(//p[contains(.,"Next Callable Date/Maturity Date")])[1]'
const FIRST_H_NEXT_CALLABLE_DATE_MATURITY_DATE_VALUE = '(//p[contains(.,"Next Callable Date/Maturity Date")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_NEXT_COUPON_PROFIT_DATE = '(//p[contains(.,"Next Coupon/Profit Date")])[1]'
const FIRST_H_NEXT_COUPON_PROFIT_DATE_VALUE = '(//p[contains(.,"Next Coupon/Profit Date")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_TOTAL_COUPON_PROFIT_PAID = '(//p[contains(.,"Total Coupon/Profit Paid")])[1]'
const FIRST_H_TOTAL_COUPON_PROFIT_PAID_VALUE = '(//p[contains(.,"Total Coupon/Profit Paid")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_NOMINAL_VALUE = '(//p[contains(.,"Nominal Value")])[1]'
const FIRST_H_NOMINAL_VALUE_V = '(//p[contains(.,"Nominal Value")])[1]/parent::div/following-sibling::div/child::p'
const FIRST_H_ACCRUED_INTEREST_PROFIT_AS_OF = '((//p[contains(.,"Total Coupon/Profit Paid")])[1]/parent::div/parent::div/parent::div/following-sibling::div/child::div/child::div)[1]/child::p'
const FIRST_H_ACCRUED_INTEREST_PROFIT_AS_OF_VALUE = '((//p[contains(.,"Total Coupon/Profit Paid")])[1]/parent::div/parent::div/parent::div/following-sibling::div/child::div/child::div)[1]/child::p/parent::div/following-sibling::div/child::p'


class HoldingTab{

    wait_until_screen_displayed(){
        $(FIRST_H_INDICATIVE_BOND_SUKUK_PRICE).waitForDisplayed()
    }

    get first_h_positive_percentage_pill(){
        return $(FIRST_H_POSITIVE_PERCENTAGE_PILL)
    }

    get first_h_negative_percentage_pill(){
        return $(FIRST_H_NEGATIVE_PERCENTAGE_PILL)
    }

    get first_h_indicative_bond_sukuk_price(){
        return $(FIRST_H_INDICATIVE_BOND_SUKUK_PRICE)
    }

    get first_h_total_investment_amount(){
        return $(FIRST_H_TOTAL_INVESTMENT_AMOUNT)
    }

    get first_h_view_details_button(){
        return $(FIRST_H_VIEW_DETAILS_BUTTON)
    }

    get first_h_bond_isin_code(){
        return $(FIRST_H_BOND_ISIN_CODE)
    }

    get first_h_bond_isin_code_value(){
        return $(FIRST_H_BOND_ISIN_CODE_VALUE)
    }

    get first_h_bond_sukuk_risk_class(){
        return $(FIRST_H_BOND_SUKUK_RISK_CLASS)
    }

    get first_h_bond_sukuk_risk_class_value(){
        return $(FIRST_H_BOND_SUKUK_RISK_CLASS_VALUE)
    }

    get first_h_coupon_profit_payment_frequency(){
        return $(FIRST_H_COUPON_PROFIT_PAYMENT_FREQUENCY)
    }

    get first_h_coupon_profit_payment_frequency_value(){
        return $(FIRST_H_COUPON_PROFIT_PAYMENT_FREQUENCY_VALUE)
    }

    get first_h_coupon_profit_rate(){
        return $(FIRST_H_COUPON_PROFIT_RATE)
    }

    get first_h_coupon_profit_rate_value(){
        return $(FIRST_H_COUPON_PROFIT_RATE_VALUE)
    }

    get first_h_next_callable_date_maturity_date(){
        return $(FIRST_H_NEXT_CALLABLE_DATE_MATURITY_DATE)
    }

    get first_h_next_callable_date_maturity_date_value(){
        return $(FIRST_H_NEXT_CALLABLE_DATE_MATURITY_DATE_VALUE)
    }

    get first_h_next_coupon_profit_date(){
        return $(FIRST_H_NEXT_COUPON_PROFIT_DATE)
    }

    get first_h_next_coupon_profit_date_value(){
        return $(FIRST_H_NEXT_COUPON_PROFIT_DATE_VALUE)
    }

    get first_h_total_coupon_profit_paid(){
        return $(FIRST_H_TOTAL_COUPON_PROFIT_PAID)
    }

    get first_h_total_coupon_profit_paid_value(){
        return $(FIRST_H_TOTAL_COUPON_PROFIT_PAID_VALUE)
    }

    get first_h_nominal_value(){
        return $(FIRST_H_NOMINAL_VALUE)
    }

    get first_h_nominal_value_v(){
        return $(FIRST_H_NOMINAL_VALUE_V)
    }

    get first_h_accrued_interest_profit_as_of(){
        return $(FIRST_H_ACCRUED_INTEREST_PROFIT_AS_OF)
    }

    get first_h_accrued_interest_profit_as_of_value(){
        return $(FIRST_H_ACCRUED_INTEREST_PROFIT_AS_OF_VALUE)
    }

}

export default new HoldingTab();