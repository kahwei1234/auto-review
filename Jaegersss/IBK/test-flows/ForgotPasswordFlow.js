import LoginPage from "../page-objects/LoginPage";
import ForgotPassword from "../page-objects/ForgotPassword";

class ForgotPasswordFlow {

    async forgotpassword (username,card) {
        //Go to the URL
        await LoginPage.open();
        //Click the username textbox
        await LoginPage.username_field.click();
        //Insert username
        await LoginPage.username.setValue(username);
        //Wait
        await browser.pause(2000);
        //Click the login button
        await LoginPage.login_button.click();
        //Click the tick button
        await LoginPage.tick_button.click();
        //Click the Forgot Password link
        await LoginPage.forgot_password.click();
        //Wait forgot password modal display
        await ForgotPassword.forgot_password_modal.waitForDisplayed();
        //Click x button
        await ForgotPassword.x_button.click();
        //Click the Forgot Password link
        await LoginPage.forgot_password.click();
        //Wait
        await browser.pause(2000);
        //Wait forgot password modal display
        await ForgotPassword.forgot_password_modal.waitForDisplayed();
        //Verify the sentence1
        const expected_sentence1 = "Forgot Login Details?"
        await expect(ForgotPassword.forgot_login_details_sentence1).toHaveText(expected_sentence1);
        //Verify the sentence2
        const expected_sentence2 = "No worries, just key in your Card or Loan Account number to retrieve your login details."
        await expect(ForgotPassword.no_worries_sentence2).toHaveText(expected_sentence2);
        //Click card number/loan account number 
        await ForgotPassword.card_loan_account_number_field.click();
        //Insert card number
        await ForgotPassword.card_loan_account_number.setValue(card);
        //Wait
        await browser.pause(2000);
    }
}

export default new ForgotPasswordFlow