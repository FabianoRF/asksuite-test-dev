import { Browser } from 'puppeteer'

type IBrowserService = {
  getBrowser(): Promise<Browser>
  closeBrowser(browser: Browser): Promise<void>
}
export default IBrowserService
