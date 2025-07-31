import {VALID_CREDS} from '../../test-data/userAccount.js';
import LoginFlow from '../../test-flows/LoginFlow.js';

describe('Account Function',async () => {
    
    it('Login Successfully',async () => {
        const {username,password,cardnumber} = VALID_CREDS
        await LoginFlow.login(username,password,cardnumber)
    });
}); 