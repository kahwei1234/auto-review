const SEARCH_FIELD = '//*[@id="app"]/div[2]/section/section/div/input'
const LEMBAGA_TABUNG_HAJI = "//td[text()='Lembaga Tabung Haji (TH)']"

class BillerMaintenanceDetailsPage{

    wait_until_screen_displayed(){
        $(SEARCH_FIELD).waitForDisplayed()
    }

    wait_until_screen_displayed(){
        $(LEMBAGA_TABUNG_HAJI).waitForDisplayed()
    }

    get search_field(){
        return $(SEARCH_FIELD)
    }

    get lembaga_tabung_haji(){
        return $(LEMBAGA_TABUNG_HAJI)
    }
  
}

export default new BillerMaintenanceDetailsPage()