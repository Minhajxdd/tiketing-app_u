import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/users/signout',(req: Request, res: Response) => {


});

export { router as signoutRouter };