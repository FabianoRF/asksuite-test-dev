import { Browser, Page } from 'puppeteer'

type IBrowserService = {
  getBrowser(): Promise<Browser>
  closeBrowser(browser: Browser): Promise<void>
  newPage(browser: Browser): Promise<Page>
}
export default IBrowserService
