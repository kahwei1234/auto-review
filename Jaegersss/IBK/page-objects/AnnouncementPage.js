const X_BUTTON = 'div.e98cjkh0'
const CLOSE_BUTTON = 'div.e2cyul40 button.mdc-button'
const HMM_SENTENCE1 = 'div.e2cyul40 p.css-1v80djs'
const NOTHING_HERE_SENTENCE2 = 'div.e2cyul40 p.css-11lfbsm'


class AnnoucementPage{

    wait_until_screen_displayed(){
        $(CLOSE_BUTTON).waitForDisplayed()
    }

    get x_button(){
        return $(X_BUTTON)
    }

    get close_button(){
        return $(CLOSE_BUTTON)
    }

    get hmm_sentence1(){
        return $(HMM_SENTENCE1)
    }

    get nothing_here_sentence2(){
        return $(NOTHING_HERE_SENTENCE2)
    }

}

export default new AnnoucementPage();