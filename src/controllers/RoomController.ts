import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import GetRoomListUseCase from '../useCases/GetRoomListUseCase'

export default class RoomController {
  public async index(request: Request, response: Response, next: NextFunction) {
    try {
      /*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Input from search rooms',
        schema: { $ref: '#/definitions/SearchRoom' }
      } */
      const { checkin, checkout } = request.body

      const getRoomsUseCase = container.resolve(GetRoomListUseCase)

      const rooms = await getRoomsUseCase.run({ checkin, checkout })

      /* #swagger.responses[200] = {
        description: 'List of rooms',
        schema: { $ref: '#/definitions/Rooms' }
      } */
      return response.status(200).json(rooms)
    } catch (err) {
      // #swagger.responses[500] = { description: 'Internal server error' }
      next(err)
    }
  }
}
