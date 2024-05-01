import { Request, Response } from 'express'

export default class SearchController {
  public async index(request: Request, response: Response) {
    const { checkin, checkout } = request.body

    return response.json({ checkin, checkout })
  }
}
