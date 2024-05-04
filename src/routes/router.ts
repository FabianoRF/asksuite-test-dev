import { Router } from 'express'
import roomRouter from './room.routes'

const router = Router()

router.use('/search', roomRouter)

export default router
