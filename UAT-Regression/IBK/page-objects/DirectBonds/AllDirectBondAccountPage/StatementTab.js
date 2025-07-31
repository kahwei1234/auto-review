const FIRST_STATEMENT = '((//p[contains(.,"Statements")]/parent::a/parent::div/following-sibling::div/child::div/child::div)[1]/child::div/child::div/child::div/child::div)[1]'
const FIRST_STATEMENT_PRINT_BUTTON = '((((//p[contains(.,"Statements")]/parent::a/parent::div/following-sibling::div/child::div/child::div)[1]/child::div/child::div/child::div/child::div)[1]/child::div)[2]/child::div/child::div)[1]'
const FIRST_STATEMENT_DOWNLOAD_BUTTON = '((((//p[contains(.,"Statements")]/parent::a/parent::div/following-sibling::div/child::div/child::div)[1]/child::div/child::div/child::div/child::div)[1]/child::div)[2]/child::div/child::div)[2]'

class StatementTab{

    wait_until_screen_displayed(){
        $(FIRST_STATEMENT).waitForDisplayed()
    }

    get first_statement(){
        return $(FIRST_STATEMENT)
    }

    get first_statement_print_button(){
        return $(FIRST_STATEMENT_PRINT_BUTTON)
    }

    get first_statement_download_button(){
        return $(FIRST_STATEMENT_DOWNLOAD_BUTTON)
    }

}

export default new StatementTab();