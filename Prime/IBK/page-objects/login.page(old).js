import Link from "../test-data/link";

class LoginPage extends Link {

    get textboxUsername () {
        return $('form.login-form div.mdc-text-field');
    }

    get Username () {
        return $('form.login-form div.mdc-text-field > input.mdc-text-field__input');
    }

    get textboxPassword () {
        return $('form.login-form div.ehzegna2')
    }
    get Password () {
        return $('form.login-form div.ehzegna2 > input.mdc-text-field__input');
    }

    get btnLogin () {
        return $('form.login-form button.mdc-button');
    }

    get btnFinalLogin () {
        return $('form.login-form button.mdc-button')
    }

    get btnTick () {
        return $('form.login-form div.eo1y15s0')
    }
   
    async login (username, password) {
        await this.textboxUsername.click();
        await this.Username.setValue(username);
        await this.btnLogin.click();
        await this.btnTick.click();
        await this.textboxPassword.click();
        await this.Password.setValue(password);
        await this.btnFinalLogin.click();
    }

     async expected() {
         await expect(this.forgotUsernamePassword).toEqual('FORGOT USERNAME/PASSWORD');
     }
    
    get settings () {
        return $('span[title="Settings"]')
    }

    get alert () {
        return $('div.e1nvn63x0')
    }
    get forgotUsernamePassword () {
        return $('p.css-r5khbi');
    }

    get dontHaveRHBOnlineBankingAccountYetLink () {
        return $('div.e1h03bk91 p.css-amk4g');
    }

    get registerNowLink () {
        return $('p.css-1bdjbat');
    }
    
    get haveAPendingApplicationLink () {
        return $("//p[text()='Have a pending application?']")
    }

    get trackApplicationLink () {
        return $('div.e1h03bk91 p.css-wire49')
    }

    get securityTipsLink () {
        return $("//p[text()='SECURITY TIPS']")
    }

    get announcementsLink () {
        return $("//p[text()='ANNOUNCEMENTS']")
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
