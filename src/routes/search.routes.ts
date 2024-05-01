import { Router } from 'express'
import SearchController from '../controllers/SearchController'

const searchRouter = Router()
const searchController = new SearchController()

searchRouter.post('/', searchController.index)

export default searchRouter
