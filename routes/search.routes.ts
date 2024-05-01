import { Request, Response, Router } from 'express';

const searchRouter = Router();

searchRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello Asksuite World!');
});

export default searchRouter;
