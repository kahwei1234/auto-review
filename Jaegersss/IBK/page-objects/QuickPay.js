const KWSP1M_QUICKPAY = '//*[@id="__next"]/div/div[1]/div[6]/div/div[2]/div[2]/div[1]/div[3]/div/div/div[2]/div/ul/div/li[1]'


class QuickPay{

    get kwsp1m_quickpay(){
        return $(KWSP1M_QUICKPAY)
    }

}

export default new QuickPay();