import puppeteer, { Browser } from 'puppeteer'

export default class BrowserService {
  static getBrowser() {
    return puppeteer.launch({})
  }

  static closeBrowser(browser: Browser) {
    if (!browser) {
      return
    }
    return browser.close()
  }
}
