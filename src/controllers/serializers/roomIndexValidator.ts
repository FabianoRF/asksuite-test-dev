import { Joi, Segments, celebrate } from 'celebrate'

export const roomIndexValidator = celebrate({
  [Segments.BODY]: {
    checkin: Joi.date().greater('now').required(),
    checkout: Joi.date().greater('now').required(),
  },
})
