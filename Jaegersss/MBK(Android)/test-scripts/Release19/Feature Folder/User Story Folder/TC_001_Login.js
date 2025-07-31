import {VALID_CREDS} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';
const allureReporter = require('@wdio/allure-reporter').default

describe('Account Function',async () => {
    
    it('Login Successfully',async () => {
        
        allureReporter.addStep("Login");
        const {username,password,carddetails} = VALID_CREDS
        await LoginFlow.login(username,password,carddetails)
    });
}); 