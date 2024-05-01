import { container } from 'tsyringe'
import IBrowserService from '../services/models/IBrowserService'
import BrowserService from '../services/BrowserService'

container.registerSingleton<IBrowserService>('BrowserService', BrowserService)
