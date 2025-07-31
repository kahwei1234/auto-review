const TOTAL_BILLER = '//*[@id="app"]/div[2]/section/div[4]/div/div/div[1]/div/a'

class BillerMaintenanceMainPage{

    wait_until_screen_displayed(){
        $(TOTAL_BILLER).waitForDisplayed()
    }

    get total_biller(){
        return $(TOTAL_BILLER)
    }
  
}

export default new BillerMaintenanceMainPage()