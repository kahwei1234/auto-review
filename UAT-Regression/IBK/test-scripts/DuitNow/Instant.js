import {VALID_CREDS_3} from '../../../test-data/userAccount.js';
import LoginFlow from '../../../test-flows/LoginFlow.js';
import InstantTansferDetailsFlow from '../../test-flows/DuitNow/DetailsPage/InstantTansferFlow.js'
import InstantTansferReviewFlow from '../../test-flows/DuitNow/ReviewPage/InstantTansferFlow.js';
import InstantTansferStatusFlow from '../../test-flows/DuitNow/StatusPage/InstantTansferFlow.js';

describe('[IBK] DuitNow',async () => {
    
    it('DuitNow from header - BankAccountNumber',async () => {

        await browser.maximizeWindow()

        const {username,password} = VALID_CREDS_3
        await LoginFlow.login_uat2(username,password)

        await InstantTansferDetailsFlow.proxy_instant('passportNumber')
        await InstantTansferReviewFlow.proxy_instant('bankAccountNumber','rhbAccount')
        //await InstantTansferStatusFlow.proxy_instant('')

/*

        allureReporter.addStep("Verify to");
        //Wait
        await browser.pause(3000);
        const expected_to = "HENRY 5 • 2-14129-0033748-9"
        await expect(ViaBankAccountPaymentReviewPage.to_field).toHaveText(expected_tovalue);

        allureReporter.addStep("Verify bank");
        const expected_bank = "RHB"
        await expect(ViaBankAccountPaymentReviewPage.bank_field).toHaveText(expected_bank);

        allureReporter.addStep("Verify payment type");
        const expected_paymenttype = "Fund Transfer"
        await expect(ViaBankAccountPaymentReviewPage.payment_type_field).toHaveText(expected_paymenttype);

        allureReporter.addStep("Verify amount");
        const expected_amount = "MYR 30.00"
        await expect(ViaBankAccountPaymentReviewPage.amount_field).toHaveText(expected_amount);

        allureReporter.addStep("Verify recipient reference");
        const expected_recipientreference = "Fund transfer test2"
        await expect(ViaBankAccountPaymentReviewPage.recipient_reference_field).toHaveText(expected_recipientreference);

        allureReporter.addStep("Verify payment details");
        const expected_paymentdetails = "Fund transfer test2"
        await expect(ViaBankAccountPaymentReviewPage.payment_details_field).toHaveText(expected_paymentdetails);

        allureReporter.addStep("Click submit button");
        //Wait
        await browser.pause(2000);
        await ViaBankAccountPaymentReviewPage.submit_button.click()

        allureReporter.addStep("Verify to");
        //Wait
        await browser.pause(3000);
        const expected_tovalue = "HENRY 5 • 2-14129-0033748-9"
        await expect(ViaBankAccountPaymentSuccessfulPage.to_field).toHaveText(expected_tovalue);

        allureReporter.addStep("Verify bank");
        const expected_bankvalue = "RHB"
        await expect(ViaBankAccountPaymentSuccessfulPage.bank_field).toHaveText(expected_bankvalue);

        allureReporter.addStep("Verify payment type");
        const expected_paymenttypevalue = "Fund Transfer"
        await expect(ViaBankAccountPaymentSuccessfulPage.payment_type_field).toHaveText(expected_paymenttypevalue);

        allureReporter.addStep("Verify amount");
        const expected_amountvalue = "MYR 30.00"
        await expect(ViaBankAccountPaymentSuccessfulPage.amount_field).toHaveText(expected_amountvalue);

        allureReporter.addStep("Verify recipient reference");
        const expected_recipientreferencevalue = "Fund transfer test2"
        await expect(ViaBankAccountPaymentSuccessfulPage.recipient_reference_field).toHaveText(expected_recipientreferencevalue);

        allureReporter.addStep("Verify payment details");
        const expected_paymentdetailsvalue = "Fund transfer test2"
        await expect(ViaBankAccountPaymentSuccessfulPage.payment_details_field).toHaveText(expected_paymentdetailsvalue);
        
        allureReporter.addStep("Click receipt button");
        //Wait
        await browser.pause(2000);
        await ViaBankAccountPaymentSuccessfulPage.receipt_button.click()

        allureReporter.addStep("Click view receipt button");
        //Wait
        await browser.pause(3000);
        await ViaBankAccountPaymentSuccessfulPage.view_receipt_button.click()

        allureReporter.addStep("Verify to");
        //Wait
        await browser.pause(3000);
        const expected_receiptto = "HENRY 5 • 2-14129-0033748-9"
        await expect(ViewReceiptPage.to_field).toHaveText(expected_receiptto);

        allureReporter.addStep("Verify bank");
        const expected_receiptbank = "RHB"
        await expect(ViewReceiptPage.bank_field).toHaveText(expected_receiptbank);

        allureReporter.addStep("Verify payment type");
        const expected_receiptpaymenttype = "Fund Transfer"
        await expect(ViewReceiptPage.payment_type_field).toHaveText(expected_receiptpaymenttype);

        allureReporter.addStep("Verify amount");
        const expected_receiptamount = "MYR 30.00"
        await expect(ViewReceiptPage.amount_field).toHaveText(expected_receiptamount);

        allureReporter.addStep("Verify recipient reference");
        const expected_receiptrecipientreference = "Fund transfer test2"
        await expect(ViewReceiptPage.recipient_reference_field).toHaveText(expected_receiptrecipientreference);

        allureReporter.addStep("Verify payment details");
        const expected_receiptpaymentdetails = "Fund transfer test2"
        await expect(ViewReceiptPage.payment_details_field).toHaveText(expected_receiptpaymentdetails);
*/
        //Wait
        await browser.pause(3000);
     });
}); 