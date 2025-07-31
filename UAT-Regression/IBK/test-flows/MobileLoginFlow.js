import LoginPage from "../page-objects/LoginPage";
const allureReporter = require('@wdio/allure-reporter').default

class MobileLoginFlow {

    /*
//Login Successfull
     async login_new (username,password) {
        await browser.pause(8000);
        //Insert username 
         await LoginPage.username.setValue(username);
         //Wait
         await browser.pause(1000);
         
         //Click next button
         await LoginPage.next_button.click();
         //Wait
         await browser.pause(2000);
        //Insert password 
         await LoginPage.password.setValue(password);
         //Wait
         await browser.pause(2000);
        
         await driver.hideKeyboard('Done');
         //Wait
         await browser.pause(2000);
         //Click login button
        await LoginPage.login_button.click();
        //Wait
       await browser.pause(5000);  
       
        
    }
*/
    //Login Successfull _Prelogin -Beta6 release
    async login(instance) {
  
       //waitfor ideltimeout setting: by default 1000
        await driver.updateSettings( { "waitForIdleTimeout": 200 } ) 

        allureReporter.addStep("Click login button");
        await LoginPage.PreLogin_button.click();
        await browser.pause(500);
        await browser.takeScreenshot()
        /*
        allureReporter.addStep("Click login with password button");
        await LoginPage.login_with_password_button.click();
        await browser.pause(500);
        await browser.takeScreenshot()

        allureReporter.addStep("Insert password");
        await LoginPage.PreLogin_button_LoginPwd.setValue(password);
        await browser.pause(500);
        await browser.takeScreenshot()
        
        allureReporter.addStep("Click login button");
        await LoginPage.login_button.click();
        await browser.pause(500);
        await browser.takeScreenshot()

        await browser.pause(4000);  
        */
}
}

export default new MobileLoginFlow
