import { Router } from 'express'
import RoomController from '../controllers/RoomController'
import { celebrate, Segments, Joi } from 'celebrate'

const searchRouter = Router()
const searchController = new RoomController()

searchRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      checkin: Joi.string().required(),
      checkout: Joi.string().required(),
    },
  }),
  searchController.index,
)

export default searchRouter
