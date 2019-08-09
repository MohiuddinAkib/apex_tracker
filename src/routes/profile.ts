import { Router, Response, Request, NextFunction } from 'express';
import { apexDebug } from '../utils/debug';

// Init express router
const router = Router();

router.get(
  '/:platform/:gamerid',
  (req: Request, res: Response, next: NextFunction) => {
    apexDebug(req.params.platform, req.params.gamerid);
    res.send('Hello world');
  }
);

export default router;
