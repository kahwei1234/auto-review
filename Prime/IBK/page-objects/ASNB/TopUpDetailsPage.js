const MEMBERSHIP_NUMBER_FIELD = '//*[@id="__next"]/div/div[2]/div/div/form/div[1]/div[3]/div[1]'
const MEMBERSHIP_NUMBER = '/html/body/div/div/div[2]/div/div/form/div[1]/div[3]/div[1]/input'
const MEMBERS_ID_TYPE_DROPDOWN_FIELD = '/html/body/div[1]/div/div[2]/div/div/form/div[1]/div[4]/div/div'
const NEW_IC_NUMBER = "//div[text()='New IC Number']"
const OLD_IC_NUMBER = "//div[text()='Old IC Number']"
const MEMBERS_ID_NUMBER_FIELD = '//*[@id="__next"]/div/div[2]/div/div/form/div[1]/div[5]/div[1]'
const MEMBERS_ID_NUMBER = '/html/body/div[1]/div/div[2]/div/div/form/div[1]/div[5]/div[1]/input'
const NEXT_BUTTON = '//*[@id="__next"]/div/div[2]/div/div/form/div[2]/div/div/div/div/button'
const RELATIONSHIP_WITH_MEMBER_DROPDOWN_FIELD = '/html/body/div[1]/div/div[1]/div/form/div[2]/div/div[4]/div[1]/div/div'
const SIBLINGS = "//div[text()='Siblings']"
const PARENTS_GRANDPARENTS = "//div[text()='Parents/Grandparents']"
const REASON_DROPDOWN_FIELD = '/html/body/div[1]/div/div[1]/div/form/div[2]/div/div[4]/div[2]/div/div'
const SAVINGS = "//div[text()='Savings']"
const INVESTMENTS = "//div[text()='Investments']"
const FUND_NAME_DROPDOWN_FIELD = '/html/body/div[1]/div/div[1]/div/form/div[2]/div/div[3]/div/div'
const AMANAH_SAHAM_BUMIPUTERA = "//div[text()='Amanah Saham Bumiputera (ASB)']"
const AMANAH_SAHAM_BUMIPUTERA2 = "//div[text()='Amanah Saham Bumiputera 2 (ASB 2)']"
const ASN_SARA_1 = "//div[text()='ASN Sara (Mixed Asset Conservative) 1 (ASN Sara 1)']"
const ASM_2_WAWASAN = "//div[text()='Amanah Saham Malaysia 2 - Wawasan (ASM 2 Wawasan)']"
const AMOUNT_IN_MYR_FIELD = '//*[@id="__next"]/div/div[1]/div/form/div[2]/div/div[4]/div[1]'
const AMOUNT_IN_MYR = '/html/body/div[1]/div/div[1]/div/form/div[2]/div/div[4]/div[1]/input'
const NEXT_BUTTON_2 = '//*[@id="__next"]/div/div[1]/div/form/div[4]/div/div/div/div/button'
const SOURCE_OF_FUND_DROPDOWN_FIELD = '/html/body/div[1]/div/div[1]/div/form/div[1]/div[2]/div/div/div/div'
const SALARY = "//div[text()='Salary']"

class TopUpDetailsPage{

    wait_until_screen_displayed(){
        $(MEMBERSHIP_NUMBER_FIELD).waitForDisplayed()
    }

    get membership_number_field(){
        return $(MEMBERSHIP_NUMBER_FIELD)
    }

    get membership_number(){
        return $(MEMBERSHIP_NUMBER)
    }

    get members_id_type_dropdown_field(){
        return $(MEMBERS_ID_TYPE_DROPDOWN_FIELD)
    }

    get new_ic_number(){
        return $(NEW_IC_NUMBER)
    }

    get old_ic_number(){
        return $(OLD_IC_NUMBER)
    }

    get members_id_number_field(){
        return $(MEMBERS_ID_NUMBER_FIELD)
    }

    get members_id_number(){
        return $(MEMBERS_ID_NUMBER)
    }

    get next_button(){
        return $(NEXT_BUTTON)
    }

    get relationship_with_member_dropdown_field(){
        return $(RELATIONSHIP_WITH_MEMBER_DROPDOWN_FIELD)
    }

    get parents_grandparents(){
        return $(PARENTS_GRANDPARENTS)
    }

    get siblings(){
        return $(SIBLINGS)
    }

    get reason_dropdown_field(){
        return $(REASON_DROPDOWN_FIELD)
    }

    get savings(){
        return $(SAVINGS)
    }

    get investments(){
        return $(INVESTMENTS)
    }

    get fund_name_dropdown_field(){
        return $(FUND_NAME_DROPDOWN_FIELD)
    }

    get amanah_saham_bumiputera(){
        return $(AMANAH_SAHAM_BUMIPUTERA)
    }

    get amanah_saham_bumiputera2(){
        return $(AMANAH_SAHAM_BUMIPUTERA2)
    }

    get asn_sara_1(){
        return $(ASN_SARA_1)
    }

    get asm_2_wawasan(){
        return $(ASM_2_WAWASAN)
    }

    get amount_in_myr_field(){
        return $(AMOUNT_IN_MYR_FIELD)
    }

    get amount_in_myr(){
        return $(AMOUNT_IN_MYR)
    }

    get next_button_2(){
        return $(NEXT_BUTTON_2)
    }

    get source_of_fund_dropdown_field(){
        return $(SOURCE_OF_FUND_DROPDOWN_FIELD)
    }

    get salary(){
        return $(SALARY)
    }

}

export default new TopUpDetailsPage();