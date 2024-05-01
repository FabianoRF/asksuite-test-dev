import { Request, Response } from 'express'
import { container } from 'tsyringe'
import GetRoomListUseCase from '../useCases/GetRoomListUseCase'

export default class SearchController {
  public async index(request: Request, response: Response) {
    const { checkin, checkout } = request.body

    const getRoomsUseCase = container.resolve(GetRoomListUseCase)

    const result = await getRoomsUseCase.run()

    console.log('Result ', result)

    return response.json({ checkin, checkout })
  }
}
