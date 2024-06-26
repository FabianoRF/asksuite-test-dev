import puppeteer, { Browser, Page } from 'puppeteer'
import IBrowserService from './models/IBrowserService'

export default class BrowserService implements IBrowserService {
  public async getBrowser(): Promise<Browser> {
    return puppeteer.launch({
      headless: true,
    })
  }

  public async closeBrowser(browser: Browser): Promise<void> {
    if (!browser) {
      return
    }
    return browser.close()
  }

  public async newPage(browser: Browser): Promise<Page> {
    return browser.newPage()
  }
}
