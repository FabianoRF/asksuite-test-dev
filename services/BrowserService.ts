import puppeteer, { Browser } from 'puppeteer'
import IBrowserService from './models/IBrowserService'

export default class BrowserService implements IBrowserService {
  public async getBrowser(): Promise<Browser> {
    return puppeteer.launch({})
  }

  public async closeBrowser(browser: Browser): Promise<void> {
    if (!browser) {
      return
    }
    return browser.close()
  }
}
