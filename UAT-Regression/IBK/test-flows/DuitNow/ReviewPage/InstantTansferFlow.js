import { runStepWithScreenshot } from '../../../../../util/reportUtils.js';
import { pauseAndClick,pauseAndSetValue } from '../../../../../util/pauseUtils.js';
import { expectToHaveTextWithLogging } from '../../../../../util/expectUtils.js';
import {FUND_TRANSFER_2} from '../../../test-data/PayViaBankAccountNumber.js';
import { BANK_NAME } from '../../../test-data/bank.js';

import ViaBankAccountPaymentReviewPage from '../../../page-objects/DuitNow/PayViaBankAccountNumber/ViaBankAccountPaymentReviewPage.js';


class InstantTansferReviewFlow {

    async proxy_instant(proxy, accountNumber) {

        await runStepWithScreenshot("Step2 : Click DuitNow button", async () => { 
            await pauseAndClick(HomePage.duitnow_button);
        });

         if (proxy == 'bankAccountNumber') {

            if 
            (accountNumber == 'rhbAccount'){

                const {accountnumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2
                const {rhb} = BANK_NAME

                await AccountNumberFlow.rhb_account(accountnumber,amountinmyr,recipientreference,paymentdetails,rhb)
            }
            else if 
                (accountNumber == 'nonRHBAccount'){

                    const {accountnumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2
                    const {cimb} = BANK_NAME

                    await AccountNumberFlow.nonrhb_account(accountnumber,amountinmyr,recipientreference,paymentdetails,cimb)

            }
    }
        else if (proxy == 'businessRegistrationNumber') {

            const {accountnumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2

            await runStepWithScreenshot("Step2 : Click Via Business Registration Number button", async () => { 
                await pauseAndClick(DuitNowPage.business_registration_number_button);
            });

            await runStepWithScreenshot("Step3 : Click and insert business registration number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.business_registration_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.business_registration_number,accountnumber);
            });

            await runStepWithScreenshot("Step4 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });
            
            await runStepWithScreenshot("Step5 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await ViaBankAccountPaymentDetailsPage.business_registration_number_label.scrollIntoView()

            await runStepWithScreenshot("Step6 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });
            
            await runStepWithScreenshot("Step8 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });
    }
        else if (proxy == 'mobileNumber') {

            const {mobilenumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2

             await runStepWithScreenshot("Step2 : Click Via Mobile Number button", async () => { 
                await pauseAndClick(DuitNowPage.mobile_number_button);
            });

            await runStepWithScreenshot("Step3 : Click and insert mobile number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.mobile_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.mobile_number,mobilenumber);
            });

            await runStepWithScreenshot("Step4 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });
            
            await runStepWithScreenshot("Step5 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await ViaBankAccountPaymentDetailsPage.mobile_number_label.scrollIntoView()

            await runStepWithScreenshot("Step6 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });
            
            await runStepWithScreenshot("Step8 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });
    }
        else if (proxy == 'nricNumber') {

            const {nricnumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2

             await runStepWithScreenshot("Step2 : Click Via NRIC Number button", async () => { 
                await pauseAndClick(DuitNowPage.nric_number_buttton);
            });

            await runStepWithScreenshot("Step3 : Click and insert nric number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.nric_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.nric_number,nricnumber);
            });

            await runStepWithScreenshot("Step4 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });
            
            await runStepWithScreenshot("Step5 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await ViaBankAccountPaymentDetailsPage.nric_number_label.scrollIntoView()

            await runStepWithScreenshot("Step6 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });
            
            await runStepWithScreenshot("Step8 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });
    }
        else if (proxy == 'armyPoliceNumber') {

            const {armynumber,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2

             await runStepWithScreenshot("Step2 : Click Via Army/Police Number button", async () => { 
                await pauseAndClick(DuitNowPage.army_police_number_button);
            });

            await runStepWithScreenshot("Step3 : Click and insert army / police number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.army_police_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.army_police_number,armynumber);
            });

            await runStepWithScreenshot("Step4 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });
            
            await runStepWithScreenshot("Step5 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await ViaBankAccountPaymentDetailsPage.army_police_number_label.scrollIntoView()

            await runStepWithScreenshot("Step6 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });
            
            await runStepWithScreenshot("Step8 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });
    }
        else if (proxy == 'passportNumber') {

            const {country,passport,amountinmyr,recipientreference,paymentdetails} = FUND_TRANSFER_2

             await runStepWithScreenshot("Step2 : Click Via Passport Number button", async () => { 
                await pauseAndClick(DuitNowPage.passport_number_button);
            });

            await runStepWithScreenshot("Step3 : Click, search and select country", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.country_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.country_search);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.country_search,country);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.country);
            });

            await runStepWithScreenshot("Step4 : Click and insert passport number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.passport_number_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.passport_number,passport);
            });

            await runStepWithScreenshot("Step5 : Click and insert amount in MYR", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.amount_in_myr_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.amount_in_myr,amountinmyr);
            });
            
            await runStepWithScreenshot("Step6 : Click recipient reference field", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_reference_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.recipient_reference,recipientreference);
            });

            await runStepWithScreenshot("Step7 : Click and insert payment details", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.payment_details_field);
                await pauseAndSetValue(ViaBankAccountPaymentDetailsPage.payment_details,paymentdetails);
            });

             await ViaBankAccountPaymentDetailsPage.passport_number_label.scrollIntoView()

            await runStepWithScreenshot("Step7 : Click and select recipient residential status account number", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_dropdown);
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.recipient_residential_status_resident);
            });
            
            await runStepWithScreenshot("Step8 : Click next button", async () => { 
                await pauseAndClick(ViaBankAccountPaymentDetailsPage.next_button);
            });
    }
}}

export default new InstantTansferReviewFlow