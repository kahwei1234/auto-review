const RELATIONSHIP_TO_RECIPIENT = '//label[contains(.,"Relationship to Recipient")]/following-sibling::div'
const RELATIONSHIP_DONOR_RECEIVER_OF_CHARITABLE_FUNDS = '//p[contains(.,"Donor/Receiver of Charitable Funds")]'
const RELATIONSHIP_EMPLOYEE_EMPLOYER = '//p[contains(.,"Employee/Employer")]'
const RELATIONSHIP_FAMILY = '//p[contains(.,"Family")]'
const RELATIONSHIP_FRIEND = '//p[contains(.,"Friend")]'
const RELATIONSHIP_PURCHASER_SELLER = '//p[contains(.,"Purchaser/Seller")]'
const RELATIONSHIP_TRADE_BUSINESS_PARTNER = '//p[contains(.,"Trade/Business Partner")]'
const SOURCE_OF_FUND = '//label[contains(.,"Source of Fund")]/following-sibling::div'
const SOURCE_SALARY_INCOME = '//p[contains(.,"Salary/Income")]'
const SOURCE_SAVINGS = '//p[contains(.,"Savings")]'
const SOURCE_BORROWED_FUNDS_LOAN = '//p[contains(.,"Borrowed Funds/Loan")]'
const SOURCE_PENSION_GOVERNMENT_WELFARE = '//p[contains(.,"Pension/Government/Welfare")]'
const SOURCE_INHERITANCE = '//p[contains(.,"Inheritance")]'
const SOURCE_CHARITABLE_DONATIONS = '//p[contains(.,"Charitable Donations")]'
const SOURCE_GIFT = '//p[contains(.,"Gift")]'
const EMPLOYMENT_POSITION = '//label[contains(.,"Employment Position")]/following-sibling::div'
const EMPLOYMENT_ENTRY_LEVEL = '//p[contains(.,"Entry Level")]'
const EMPLOYMENT_MID_LEVEL_SUPERVISORY_MANAGEMENT = '//p[contains(.,"Mid Level/Supervisory/Management")]'
const EMPLOYMENT_SENIOR_LEVEL_EXECUTIVE = '//p[contains(.,"Senior Level/Executive")]'
const EMPLOYMENT_OWNER = '//p[contains(.,"Owner")]'
const RECIPIENT_FIRST_NAME_FIELD = '//label[contains(.,"Recipient First Name")]/following-sibling::div'
const RECIPIENT_FIRST_NAME = '//label[contains(.,"Recipient First Name")]/following-sibling::div/child::input'
const RECIPIENT_LAST_NAME_FIELD = '//label[contains(.,"Recipient Last Name")]/following-sibling::div'
const RECIPIENT_LAST_NAME = '//label[contains(.,"Recipient Last Name")]/following-sibling::div/child::input'
const RESIDENT_OF_MALAYSIA = '//label[contains(.,"Resident of Malaysia")]/following-sibling::div'
const RESIDENT_YES = '//p[contains(.,"Yes")]'
const RESIDENT_NO = '//p[contains(.,"No")]'
const ID_NUMBER_FIELD = '//label[contains(.,"ID Number")]/following-sibling::div'
const ID_NUMBER = '//label[contains(.,"ID Number")]/following-sibling::div/child::input'
const MOBILE_NUMBER_FIELD = '//label[contains(.,"Mobile Number")]/following-sibling::div'
const MOBILE_NUMBER = '//label[contains(.,"Mobile Number")]/following-sibling::div/child::input'
const PURPOSE_OF_PAYMENT = '//label[contains(.,"Purpose of Payment")]/following-sibling::div'
const PURPOSE_CHARITY_AID_PAYMENT = '//p[contains(.,"Charity/Aid Payment")]'
const PURPOSE_EDUCATION_SCHOOL_FEE = '//p[contains(.,"Education/School Fee")]'
const PURPOSE_EMERGENCY_MEDICAL_AID = '//p[contains(.,"Emergency/Medical Aid")]'
const PURPOSE_EMPLOYEE_PAYROLL_EMPLOYEE_EXPENSE = '//p[contains(.,"Employee Payroll/Employee Expense")]'
const PURPOSE_FAMILY_SUPPORT_LIVING_EXPENSES = '//p[contains(.,"Family Support/Living Expenses")]'
const PURPOSE_GIFT = '//p[contains(.,"Gift")]'
const PURPOSE_GOODS_SERVICES_PAYMENT = '//p[contains(.,"Goods & Services Payment")]'
const PURPOSE_RENT_MORTGAGE = '//p[contains(.,"Rent/Mortgage")]'
const PURPOSE_SAVINGS_INVESTMENTS = '//p[contains(.,"Saving/Investments")]'
const PURPOSE_TRAVEL_EXPENSES = '//p[contains(.,"Travel Expenses")]'
const ADD_MY_WESTERN_UNION_CARD_DETAILS_TOGGLE = '//p[contains(.,"Add My Western Union Card Details (Optional)")]/parent::div/following-sibling::span'
const AGREE_TO_ALL_THE_DECLARATION_CHECKBOX = '//p[contains(.,"I hereby agree to all the declarations above.")]/preceding-sibling::span'
const NEXT_BUTTON = '//p[contains(.,"Next")]/parent::div/parent::button'

class PayInCashPage{

    wait_until_screen_displayed(){
        $(RELATIONSHIP_RECIPIENT_TO).waitForDisplayed()
    }

    get relationship_to_recipient(){
        return $(RELATIONSHIP_TO_RECIPIENT)
    }

    get relationship_donor_receiver_of_charitable_funds(){
        return $(RELATIONSHIP_DONOR_RECEIVER_OF_CHARITABLE_FUNDS)
    }

    get relationship_employee_employer(){
        return $(RELATIONSHIP_EMPLOYEE_EMPLOYER)
    }

    get relationship_family(){
        return $(RELATIONSHIP_FAMILY)
    }

    get relationship_friend(){
        return $(RELATIONSHIP_FRIEND)
    }

    get relationship_purchaser_seller(){
        return $(RELATIONSHIP_PURCHASER_SELLER)
    }

    get relationship_trade_business_partner(){
        return $(RELATIONSHIP_TRADE_BUSINESS_PARTNER)
    }

    get source_of_fund(){
        return $(SOURCE_OF_FUND)
    }

    get source_salary_income(){
        return $(SOURCE_SALARY_INCOME)
    }

    get source_savings(){
        return $(SOURCE_SAVINGS)
    }

    get source_BORROWED_FUNDS_LOAN(){
        return $(SOURCE_BORROWED_FUNDS_LOAN)
    }

    get source_pension_government_welfare(){
        return $(SOURCE_PENSION_GOVERNMENT_WELFARE)
    }

    get source_inheritance(){
        return $(SOURCE_INHERITANCE)
    }

    get source_charitable_donations(){
        return $(SOURCE_CHARITABLE_DONATIONS)
    }

    get source_gift(){
        return $(SOURCE_GIFT)
    }

    get employment_position(){
        return $(EMPLOYMENT_POSITION)
    }

    get employment_entry_level(){
        return $(EMPLOYMENT_ENTRY_LEVEL)
    }

    get employment_mid_level_supervisory_management(){
        return $(EMPLOYMENT_MID_LEVEL_SUPERVISORY_MANAGEMENT)
    }

    get employment_senior_level_executive(){
        return $(EMPLOYMENT_SENIOR_LEVEL_EXECUTIVE)
    }

    get employment_owner(){
        return $(EMPLOYMENT_OWNER)
    }

    get recipient_first_name_field(){
        return $(RECIPIENT_FIRST_NAME_FIELD)
    }

    get recipient_first_name(){
        return $(RECIPIENT_FIRST_NAME)
    }

    get recipient_last_name_field(){
        return $(RECIPIENT_LAST_NAME_FIELD)
    }

    get recipient_last_name(){
        return $(RECIPIENT_LAST_NAME)
    }

    get resident_of_malaysia(){
        return $(RESIDENT_OF_MALAYSIA)
    }

    get resident_yes(){
        return $(RESIDENT_YES)
    }

    get resident_no(){
        return $(RESIDENT_NO)
    }

    get id_number_field(){
        return $(ID_NUMBER_FIELD)
    }

    get id_number(){
        return $(ID_NUMBER)
    }

    get mobile_number_field(){
        return $(MOBILE_NUMBER_FIELD)
    }

    get mobile_number(){
        return $(MOBILE_NUMBER)
    }

    get purpose_of_payment(){
        return $(PURPOSE_OF_PAYMENT)
    }

    get purpose_charity_aid_payment(){
        return $(PURPOSE_CHARITY_AID_PAYMENT)
    }

    get purpose_education_school_fee(){
        return $(PURPOSE_EDUCATION_SCHOOL_FEE)
    }

    get purpose_emergency_medical_aid(){
        return $(PURPOSE_EMERGENCY_MEDICAL_AID)
    }

    get purpose_employee_payroll_employee_expense(){
        return $(PURPOSE_EMPLOYEE_PAYROLL_EMPLOYEE_EXPENSE)
    }

    get purpose_family_support_living_expenses(){
        return $(PURPOSE_FAMILY_SUPPORT_LIVING_EXPENSES)
    }

    get purpose_gift(){
        return $(PURPOSE_GIFT)
    }

    get purpose_goods_services_payment(){
        return $(PURPOSE_GOODS_SERVICES_PAYMENT)
    }

    get purpose_rent_mortgage(){
        return $(PURPOSE_RENT_MORTGAGE)
    }

    get purpose_savings_investments(){
        return $(PURPOSE_SAVINGS_INVESTMENTS)
    }

    get purpose_travel_expenses(){
        return $(PURPOSE_TRAVEL_EXPENSES)
    }

    get add_my_western_union_card_details_toggle(){
        return $(ADD_MY_WESTERN_UNION_CARD_DETAILS_TOGGLE)
    }

    get agree_to_all_the_declaration_checkbox(){
        return $(AGREE_TO_ALL_THE_DECLARATION_CHECKBOX)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

}

export default new PayInCashPage();