/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Browser, Page } from 'puppeteer'
import IBrowserService from '../../services/models/IBrowserService'

export const pageDataMock = [
  {
    name: 'Room',
    description: 'Room description',
    price: 'R$ 123,90',
    image: 'www.image.com',
  },
]

export default class FakeBrowserService implements IBrowserService {
  public async getBrowser(): Promise<Browser> {
    return {} as Browser
  }

  public async closeBrowser(browser: Browser): Promise<void> {
    return Promise.resolve()
  }

  public async newPage(browser: Browser): Promise<Page> {
    const mockPage = {
      goto(url: string) {
        return Promise.resolve()
      },
      $$eval(selector: string, pageFunction: any) {
        return Promise.resolve(pageDataMock)
      },
    } as unknown as Page
    return Promise.resolve(mockPage)
  }
}
