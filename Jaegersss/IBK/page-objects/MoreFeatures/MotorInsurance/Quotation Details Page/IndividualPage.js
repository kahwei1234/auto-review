const QUOTATION_DETAILS_TITLE = '//p[contains(.,"Quotation Details")]'
const COMPREHENSIVE_COVERAGE_PLAN_TITLE = '(//p[contains(.,"Comprehensive Coverage")])[2]'
const COMPREHENSIVE_COVERAGE_PLAN_COPYWRITING = '//p[contains(.,"Comprehensive Coverage")]/parent::div/parent::div/following-sibling::div/child::p'
const COMPREHENSIVE_COVERAGE_PLAN_ADD_ONS_BUTTON = '(//p[contains(.,"+ ADD-ONS")])[1]'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_TITLE = '(//p[contains(.,"Comprehensive Flood Protect")])[1]'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING = '(//p[contains(.,"Comprehensive Flood Protect")])[1]/parent::div/parent::div/following-sibling::div/child::p'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_1 = '((//p[contains(.,"Comprehensive Flood Protect")])[1]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[1]'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_2 = '((//p[contains(.,"Comprehensive Flood Protect")])[1]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[2]'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_3 = '((//p[contains(.,"Comprehensive Flood Protect")])[1]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[3]'
const COMPREHENSIVE_FLOOD_PROTECT_PLAN_ADD_ONS_BUTTON = '(//p[contains(.,"+ ADD-ONS")])[2]'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_TITLE = '//p[contains(.,"Comprehensive Flood Protect Plus")]'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING = '//p[contains(.,"Comprehensive Flood Protect Plus")]/parent::div/parent::div/following-sibling::div/child::p'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_1 = '(//p[contains(.,"Comprehensive Flood Protect Plus")]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[1]'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_2 = '(//p[contains(.,"Comprehensive Flood Protect Plus")]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[2]'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_3 = '(//p[contains(.,"Comprehensive Flood Protect Plus")]/parent::div/parent::div/following-sibling::div/child::div/child::div/child::p)[3]'
const COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_ADD_ONS_BUTTON = '(//p[contains(.,"+ ADD-ONS")])[3]'
const NEXT_BUTTON = "//p[text()='NEXT']"
const X_BUTTON = '(//p[contains(.,"Quotation Details")]/parent::div/parent::div/preceding-sibling::div/child::div)[3]/child::img'

class QuotationDetailsPage{

    wait_until_screen_displayed(){
        $(VEHICLE_REGISTRATION_NUMBER_FIELD).waitForDisplayed()
    }

    get quotation_details_title(){
        return $(QUOTATION_DETAILS_TITLE)
    }

    get comprehensive_coverage_plan_title(){
        return $(COMPREHENSIVE_COVERAGE_PLAN_TITLE)
    }

    get comprehensive_coverage_plan_copywriting(){
        return $(COMPREHENSIVE_COVERAGE_PLAN_COPYWRITING)
    }

    get comprehensive_coverage_plan_add_ons_button(){
        return $(COMPREHENSIVE_COVERAGE_PLAN_ADD_ONS_BUTTON)
    }

    get comprehensive_coverage_plan_title(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_TITLE)
    }

    get comprehensive_flood_protect_plan_copywriting(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING)
    }

    get comprehensive_flood_protect_plan_copywriting_1(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_1)
    }

    get comprehensive_flood_protect_plan_copywriting_2(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_2)
    }

    get comprehensive_flood_protect_plan_copywriting_3(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_COPYWRITING_3)
    }

    get comprehensive_flood_protect_plan_add_ons_button(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLAN_ADD_ONS_BUTTON)
    }

    get comprehensive_flood_protect_plus_plan_title(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_TITLE)
    }

    get comprehensive_flood_protect_plus_plan_copywriting(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING)
    }

    get comprehensive_flood_protect_plus_plan_copywriting_1(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_1)
    }

    get comprehensive_flood_protect_plus_plan_copywriting_2(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_2)
    }

    get comprehensive_flood_protect_plus_plan_copywriting_3(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_COPYWRITING_3)
    }

    get comprehensive_flood_protect_plus_plan_add_ons_button(){
        return $(COMPREHENSIVE_FLOOD_PROTECT_PLUS_PLAN_ADD_ONS_BUTTON)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }
}

export default new QuotationDetailsPage();