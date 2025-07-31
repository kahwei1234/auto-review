import DuitNowPage from '../../page-objects/DuitNow/DuitNowPage.js';
import BankTransferPage from '../../page-objects/DuitNow/BankTransferPage.js';
import ViaBankAccountPaymentDetailsPage from '../../page-objects/DuitNow/PayViaBankAccountNumber/ViaBankAccountPaymentDetailsPage.js';
import { runStepWithScreenshot } from '../../../../util/reportUtils.js';
import { pauseAndClick,pauseAndSetValue } from '../../../../util/pauseUtils.js';

class AccountNumberFlow {

    async rhb_account(accountnumber,amountinmyr,recipientreference,paymentdetails,rhb) {

            await runStepWithScreenshot("Step3 : Click Via Bank Account Number button", async () => { 
                await pauseAndClick(DuitNowPage.bank_account_number_button);
            });

            await runStepWithScreenshot("Step4 : Click search field", async () => { 
                await pauseAndClick(BankTransferPage.search_bank_field);
            }); 
            
            await runStepWithScreenshot("Step5 : Search and select bank", async () => { 
                await pauseAndSetValue(BankTransferPage.search_bank_field,rhb);
                await pauseAndClick(BankTransferPage.bank_value);
            }); 

            await runStepWithScreenshot("Step6 : Click and insert account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.account_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.account_number,accountnumber);
            });

            await ViaBankAccountPaymentDetailsPage.account_number_label.scrollIntoView()

            await runStepWithScreenshot("Step7 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });

            await runStepWithScreenshot("Step8 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await runStepWithScreenshot("Step9 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step10 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });

    }

    async nonrhb_account(accountnumber,amountinmyr,recipientreference,paymentdetails,cimb) {

            await runStepWithScreenshot("Step3 : Click Via Bank Account Number button", async () => { 
                await pauseAndClick(DuitNowPage.bank_account_number_button);
            });

            await runStepWithScreenshot("Step4 : Click search field", async () => { 
                await pauseAndClick(BankTransferPage.search_bank_field);
            }); 
            
            await runStepWithScreenshot("Step5 : Search and select bank", async () => { 
                await pauseAndSetValue(BankTransferPage.search_bank_field,cimb);
                await pauseAndClick(BankTransferPage.bank_value);
            }); 

            await browser.pause(2000);
            await ViaBankAccountPaymentDetailsPage.payment_type_dropdown.scrollIntoView()

            await runStepWithScreenshot("Step6 : Click and insert recipient account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_account_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_account_number,accountnumber);
            });

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });

            await runStepWithScreenshot("Step8 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });

            await runStepWithScreenshot("Step9 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await runStepWithScreenshot("Step10 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step10 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });

        }
}

export default new AccountNumberFlow