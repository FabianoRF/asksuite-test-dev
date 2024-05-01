import { inject, injectable } from 'tsyringe'
import IBrowserService from '../services/models/IBrowserService'

@injectable()
export default class GetRoomListUseCase {
  constructor(
    @inject('BrowserService')
    private browserService: IBrowserService,
  ) {}

  async run() {
    console.log('GetRoomListUseCase :: START')

    const browser = await this.browserService.getBrowser()
    console.log('GetRoomListUseCase :: browser ', browser)

    await this.browserService.closeBrowser(browser)
    console.log('GetRoomListUseCase :: FINISHED ', browser)
  }
}
