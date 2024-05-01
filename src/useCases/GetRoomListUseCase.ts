import { inject, injectable } from 'tsyringe'
import IBrowserService from '../services/models/IBrowserService'
import OutputGetRoomListUseCase from '../dtos/GetRoomListUseCase/OutputGetRoomListUseCase'
import InputGetRoomListUseCase from '../dtos/GetRoomListUseCase/InputGetRoomListUseCase'
import { Page } from 'puppeteer'

@injectable()
export default class GetRoomListUseCase {
  constructor(
    @inject('BrowserService')
    private browserService: IBrowserService,
  ) {}

  async run({
    checkin,
    checkout,
  }: InputGetRoomListUseCase): Promise<OutputGetRoomListUseCase[]> {
    console.log('GetRoomListUseCase :: START')

    // validar se possui pelo menos 3 dias de diferença entre checkIn e checkout

    const browser = await this.browserService.getBrowser()
    console.log('GetRoomListUseCase :: browser initialized')

    const url = this.getUrl(checkin, checkout)
    const page = await this.browserService.newPage(browser)
    await page.goto(url, {
      waitUntil: 'networkidle2',
    })
    await page.waitForSelector('.room-list')

    const formattedRoomsData = await this.getFormattedRoomsData(page)
    console.log(
      'GetRoomListUseCase :: formattedRoomsData :: ',
      formattedRoomsData,
    )

    await this.browserService.closeBrowser(browser)
    console.log('GetRoomListUseCase :: FINISHED ')

    return formattedRoomsData
  }

  private getUrl(checkin: string, checkout: string) {
    return `${process.env.PRATEGY_BASE_URL}/D/Reserva?checkin=${checkin}&checkout=${checkout}&cidade=&hotel=12&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&promocode=&tarifa=&mesCalendario=6%2F14%2F2022`
  }

  private async getFormattedRoomsData(page: Page) {
    return page.$$eval('.room-option-wrapper', (rooms) =>
      rooms.map((room) => {
        const name =
          room.querySelector('.room-option-title > h3')?.textContent ?? null

        const description =
          room.querySelector('.room-option-title > p')?.textContent ?? null

        const imageHtml = room.querySelector('.q-carousel__slide')
        const imageProperty = imageHtml
          ? window.getComputedStyle(imageHtml)?.backgroundImage
          : ''
        const image = imageProperty.split(/"/)[1]

        const priceInteger = room.querySelector(
          '.daily-price--total .term__highlight',
        )?.textContent
        const priceCents = room.querySelectorAll(
          '.daily-price--total .term__small',
        )
        const price = `R$ ${priceInteger}${priceCents[1]?.textContent}`

        return {
          name,
          description,
          price,
          image,
        }
      }),
    )
  }
}
