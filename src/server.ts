import 'reflect-metadata'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/router'
import { errors } from 'celebrate'
import 'express-async-errors'

import './container'
import { errorHandler } from './middlewares/errors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(errors())

const port = process.env.PORT

app.use('/', router)
app.use(errorHandler)

app.listen(port ?? 8080, () => {
  console.log(`Listening on port ${port}`)
})
