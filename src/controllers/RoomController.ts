import { Request, Response } from 'express'
import { container } from 'tsyringe'
import GetRoomListUseCase from '../useCases/GetRoomListUseCase'

export default class RoomController {
  public async index(request: Request, response: Response) {
    const { checkin, checkout } = request.body

    const getRoomsUseCase = container.resolve(GetRoomListUseCase)

    const rooms = await getRoomsUseCase.run({ checkin, checkout })

    return response.json(rooms)
  }
}
