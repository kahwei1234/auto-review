export default class Link {

    open_bo2 () {
        return browser.url(`https://172.30.79.32:8005/`)
    }

    open_bo1 () {
        return browser.url(`https://172.30.79.32:8002/`)
    }

    open_boUAT1 () {
        return browser.url(`https://172.30.79.33:8002/`)
    }

    open_boUAT2 () {
        return browser.url(`https://172.30.79.33:8005/`)
    }
}
