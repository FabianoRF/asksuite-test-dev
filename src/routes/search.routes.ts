import { Router } from 'express'
import RoomController from '../controllers/RoomController'

const searchRouter = Router()
const searchController = new RoomController()

searchRouter.post('/', searchController.index)

export default searchRouter
