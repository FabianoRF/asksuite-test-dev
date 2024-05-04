import { Router } from 'express'
import RoomController from '../controllers/RoomController'
import { roomIndexValidator } from '../controllers/serializers/roomIndexValidator'

const roomRouter = Router()
const roomController = new RoomController()

roomRouter.post('/', roomIndexValidator, roomController.index)

export default roomRouter
