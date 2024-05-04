import 'reflect-metadata'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/router'
import { errors } from 'celebrate'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger_output.json'
import 'express-async-errors'

import './container'
import { errorHandler } from './middlewares/errors'

dotenv.config()
const app = express()
app.use(express.json())

app.use('/', router)
app.use(errors())
app.use(errorHandler)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = process.env.PORT
const appBaseUrl = process.env.APP_BASE_URL
app.listen(port ?? 8080, () => {
  console.log(`Listening on port ${port}`)
  console.log(`API swagger docs available in ${appBaseUrl}:${port}/doc`)
})
