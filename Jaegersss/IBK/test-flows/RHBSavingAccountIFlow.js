import LoginPage from "../page-objects/LoginPage";
import DepositAccountPage from "../page-objects/DepositAccountPage";
import RHBSavingAccountIPage from "../page-objects/RHBSavingAccountIPage";


class RHBSavingAccountIFlow {

    async direct_to_rhb_saving_account_i(name,mobilenumber) {
        //Go to the URL
        await LoginPage.open();
        //Scroll to deposit Account
        await browser.scroll(0, 600)
        //Wait
        await browser.pause(1000);
        //Click the deposit account
        await LoginPage.deposit_account.click();
        //Wait
        await browser.pause(1000);
        //Click the rhb saving account i 
        await DepositAccountPage.rhb_saving_account_i.click();
        //Wait
        await browser.pause(1000);
        //Scroll to deposit Account
        await browser.scroll(0, 400)
        //Wait
        await browser.pause(1000);
        //Click the login button
        await RHBSavingAccountIPage.apply_button.click();
        //Wait
        await browser.pause(1000);
        //Click the login button
        await RHBSavingAccountIPage.start_application_button.click();
        //Wait
        await browser.pause(1000);
        //Click the fullname field 
        await RHBSavingAccountIPage.fullname_field.click();
        //Wait
        await browser.pause(1000);
        //Insert fullname
        await RHBSavingAccountIPage.fullname.setValue(name);
        //Wait
        await browser.pause(1000);
        //Click the next button 
        await RHBSavingAccountIPage.next_button_fullname.click();
        //Wait
        await browser.pause(1000);
        //Click the mobile number field 
        await RHBSavingAccountIPage.mobile_number_field.click();
        //Wait
        await browser.pause(1000);
        //Insert
        await RHBSavingAccountIPage.mobile_number.setValue(mobilenumber);
        //Wait
        await browser.pause(1000);
        //Click the next button 
        await RHBSavingAccountIPage.next_button_mobile_number.click();
        //Wait
        await browser.pause(1000);
    }


    async apply_rhb_saving_account_i(emailaddress,nric,username,password,confirmpassword,secureword,addressline1,addressline2,addressline3,city,postcode,companyname,workaddressline1,workaddressline2,workaddressline3,workcity,workpostcode,mothermaidenname) {
        //Click the email address field
        await RHBSavingAccountIPage.email_address_field.click();
        await RHBSavingAccountIPage.email_address.setValue(emailaddress);
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.pdpa_privacy_notice_checkbox.click();
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.email_address_next_button.click();
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.nric_button.click();
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.nric_field.click();
        await RHBSavingAccountIPage.nric.setValue(nric);
        //Wait
        await browser.pause(2000);
        await RHBSavingAccountIPage.nric_next_button.click();
        //Wait
        await browser.pause(2000);
        await RHBSavingAccountIPage.dob_next_button.click()
        //Wait
        await browser.pause(2000);
        await RHBSavingAccountIPage.nationality_next_button.click()
        //Wait
        await browser.pause(2000);
        await RHBSavingAccountIPage.username_field.click()
        await RHBSavingAccountIPage.username.setValue(username)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.password_field.click()
        await RHBSavingAccountIPage.password.setValue(password)
        //Wait
        await browser.pause(1000);
        //Scroll to deposit Account
        await browser.scroll(0, 900)
        await RHBSavingAccountIPage.confirm_password_field.click()
        await RHBSavingAccountIPage.confirm_password.setValue(confirmpassword)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.secure_word_field.click()
        await RHBSavingAccountIPage.secure_word.setValue(secureword)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.username_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.gender_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.race_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.marital_status_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.pr_no_status_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.address_line_1_field.click()
        await RHBSavingAccountIPage.address_line_1.setValue(addressline1)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.address_line_2_field.click()
        await RHBSavingAccountIPage.address_line_2.setValue(addressline2)
        //Scroll to deposit Account
        await browser.scroll(0, 900)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.address_line_3_field.click()
        await RHBSavingAccountIPage.address_line_3.setValue(addressline3)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.city_field.click()
        await RHBSavingAccountIPage.city.setValue(city)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.state_field.click()
        await RHBSavingAccountIPage.state.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.postcode_field.click()
        await RHBSavingAccountIPage.postcode.setValue(postcode)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.address_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.purpose_of_opening_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.purpose_of_opening.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.purpose_of_opening_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_wealth_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_wealth.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_wealth_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_fund_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_fund.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.source_of_fund_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.employment_status_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.employment_status.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.employment_status_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.occupation_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.occupation.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.sector_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.sector.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.nature_of_business_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.nature_of_business.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.occupation_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.company_name_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.company_name.setValue(companyname)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.company_name_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_address_1_field.click()
        await RHBSavingAccountIPage.work_address_1.setValue(workaddressline1)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_address_2_field.click()
        await RHBSavingAccountIPage.work_address_2.setValue(workaddressline2)
        //Scroll to deposit Account
        await browser.scroll(0, 900)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_address_3_field.click()
        await RHBSavingAccountIPage.work_address_3.setValue(workaddressline3)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_city_field.click()
        await RHBSavingAccountIPage.work_city.setValue(workcity)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_state_field.click()
        await RHBSavingAccountIPage.work_state.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_postcode_field.click()
        await RHBSavingAccountIPage.work_postcode.setValue(workpostcode)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.work_address_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.amount_in_myr_field.click()
        await RHBSavingAccountIPage.amount_in_myr.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.amount_in_myr_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.branch_state_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.branch_state.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.branch_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.branch.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.branch_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.lets_continue_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.debit_card_delivered_checkbox.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.name_on_debit_card_next_button.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.mother_maiden_name_field.click()
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.mother_maiden_name.setValue(mothermaidenname)
        //Wait
        await browser.pause(1000);
        await RHBSavingAccountIPage.mother_maiden_name_next_button.click()
    }
}

export default new RHBSavingAccountIFlow