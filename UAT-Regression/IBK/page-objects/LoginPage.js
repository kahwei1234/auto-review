import Link from "../test-data/link";

const USERNAME_FIELD = 'form.login-form div.mdc-text-field'
const USERNAME = 'form.login-form div.mdc-text-field > input.mdc-text-field__input'
const LOGIN_BUTTON = '(//span[contains(.,"LOGIN")])[9]/parent::span/parent::span'
const NEW_USER_LOGIN_BUTTON = '//*[@id="__next"]/div/div[3]/div[1]/div[2]/div/div/form/div[2]/div/div/div/div/div[4]/button[2]/span/span/span'
const CONFIRM_THIS_IS_YOUR_SECURE_WORD = 'form.login-form div.css-1qqjiit-StyledBox'
const FORGOT_USERNAME_PASSWORD = 'p.css-r5khbi'
const TICK_BUTTON = 'form.login-form div.eo1y15s0 svg'
const X_BUTTON = 'form.login-form div.css-1qih793-StyledBox-StyledFlex'
const PASSWORD_FIELD = 'form.login-form div.ehzegna2'
const PASSWORD = 'form.login-form div.ehzegna2 > input.mdc-text-field__input'
const PASSWORD_LOGIN_BUTTON = '(//span[contains(.,"LOGIN")])[7]'
const FORGOT_PASSWORD = 'form.login-form div.css-1bdtp85-StyledBox-StyledFlex p.css-q7k4qj'
const DONT_HAVE_RHB_ONLINE_BANKING_ACCOUNT_YET_LINK = 'div.e1h03bk91 p.css-amk4g'
const REGISTER_NOW = 'p.css-1bdjbat'
const HAVE_A_PENDING_APPLICATION = "//p[text()='Have a pending application?']"
const TRACK_APPLICATION = 'div.e1h03bk91 p.css-wire49'
const SECURITY_TIPS = "//p[text()='SECURITY TIPS']"
const ANNOUNCEMENTS = "//p[text()='ANNOUNCEMENTS']"
const ANNOUNCEMENTS_X_BUTTON = '//p[contains(.,"Announcements")]/parent::div/preceding-sibling::div'
const DEPOSIT_ACCOUNT= "//p[text()='Deposit Account']"
const PRELOGIN_BUTTON = '//android.widget.TextView[@text="Register Now"]'

class LoginPage extends Link{

    wait_until_screen_displayed(){
        $(USERNAME_FIELD).waitForDisplayed()
    }

    get username_field(){
        return $(USERNAME_FIELD)
    }

    get username(){
        return $(USERNAME)
    }

    get password_field(){
        return $(PASSWORD_FIELD)
    }

    get password(){
        return $(PASSWORD)
    }

    get password_login_button(){
        return $(PASSWORD_LOGIN_BUTTON)
    }

    get forgot_password(){
        return $(FORGOT_PASSWORD)
    }

    get login_button(){
        return $(LOGIN_BUTTON)
    } 

    get new_user_login_button(){
        return $(NEW_USER_LOGIN_BUTTON)
    } 

    get confirm_this_your_secure_word(){
        return $(CONFIRM_THIS_IS_YOUR_SECURE_WORD)
    }

    get forgot_username_password(){
        return $(FORGOT_USERNAME_PASSWORD)
    }

    get tick_button(){
        return $(TICK_BUTTON)
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get dont_have_rhb_online_banking_account_yet_link(){
        return $(DONT_HAVE_RHB_ONLINE_BANKING_ACCOUNT_YET_LINK)
    }

    get have_a_pending_application(){
        return $(HAVE_A_PENDING_APPLICATION)
    }

    get register_now(){
        return $(REGISTER_NOW)
    }

    get track_application(){
        return $(TRACK_APPLICATION)
    }

    get security_tips(){
        return $(SECURITY_TIPS)
    }

    get announcements(){
        return $(ANNOUNCEMENTS)
    }

    get announcements_x_button(){
        return $(ANNOUNCEMENTS_X_BUTTON)
    }

    get apply_rhb_account(){
        return $(APPLY_RHB_ACCOUNT)
    }

    get deposit_account(){
        return $(DEPOSIT_ACCOUNT)
    }

    get login_with_password_button(){
        return $(LOGIN_WITH_PASSWORD_BUTTON)
    }
    
    get PreLogin_button(){
        return $(PRELOGIN_BUTTON)
    }

    get pre_login_button(){
        return $(PRE_LOGIN_BUTTON)
    }


    open_sit5 () {
        return super.open_sit5('login');
    }

    open_sit2 () {
        return super.open_sit2('login');
    }

    open_sit1 () {
        return super.open_sit1('login');
    }

    open_sit4 () {
        return super.open_sit4('login');
    }

}

export default new LoginPage()