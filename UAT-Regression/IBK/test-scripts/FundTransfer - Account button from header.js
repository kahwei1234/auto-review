import {VALID_CREDS_3} from '../test-data/user.js';
import LoginFlow from '../test-flows/LoginFlow.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('[IBK] Fund Transfer',async () => {
    
    it('Accounts Header entry point - Submit transaction for Fund Transfer',async () => {

        allureReporter.addStep("Maximize Window");
        await browser.maximizeWindow()

        allureReporter.addStep("Login");
        const {username,password} = VALID_CREDS_3
        await LoginFlow.login_sit2(username,password)

        //Wait
        await browser.pause(3000);
     });
}); 