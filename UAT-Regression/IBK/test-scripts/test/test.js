import MobileLoginFlow from "../../test-flows/MobileLoginFlow";
import LoginPage from "../../page-objects/LoginPage";

describe('WEB & MOBILE: Login Users', () => {
    it('should login with valid credentials on web', async () => {
      await chrome1.url(`https://172.30.79.34:8008/my/login`);
     });
     
     it('should login with valid credentials on mobile', async () => {
      await mobile1.LoginPage.PreLogin_button.click();
     });
 });