import {VALID_CREDS_7} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
import HomePage from '../../page-objects/HomePage.js';
import AccountsPage from '../../page-objects/Accounts/AccountsPage.js';
import VehicleFinancingPage from '../../page-objects/Accounts/VehicleFinancing/VehicleFinancingPage.js';
import { pauseAndClick } from '../../../../util/pauseUtils.js';
import { runStepWithScreenshot } from '../../../../util/reportUtils.js';
import { expectToHaveTextWithLogging } from '../../../../util/expectUtils.js'  

const EXPECTED_STATEMENTS = ["January 2026", "January 2025"];

describe('[IBK] VF/HP: e-Statement',async () => {
    
    it('Savings: e-Statement - Verify statement',async () => {

        await browser.maximizeWindow()

        await runStepWithScreenshot("Step1 : Login", async () => { 
        const {username,password} = VALID_CREDS_7
        await LoginFlow.login_uat2(username,password)
        });

        await runStepWithScreenshot("Step2 : Click account button", async () => { 
        await pauseAndClick(HomePage.accounts_button);
        });

        await runStepWithScreenshot("Step3 : Click vehicle financing button", async () => { 
        await pauseAndClick(AccountsPage.vehicle_financing_button, 3000);
        });

        await runStepWithScreenshot("Step4 : Click statements button", async () => { 
        await pauseAndClick(VehicleFinancingPage.statements_button);
        });

        await runStepWithScreenshot("Step5 : Scroll down", async () => { 
            await browser.execute(() => window.scrollBy(0, 400));
        });


        await runStepWithScreenshot("Step6 : Verify statement", async () => {
            await expectToHaveTextWithLogging(VehicleFinancingPage.statement_1, EXPECTED_STATEMENTS[0], 1000);
            await expectToHaveTextWithLogging(VehicleFinancingPage.statement_2, EXPECTED_STATEMENTS[1], 1000);
        });
     });
}); 