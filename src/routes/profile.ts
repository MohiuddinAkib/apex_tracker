import { Router } from 'express';
import * as profileController from '@/controllers/profile';

// Init express router
const router = Router();

router.get('/:platform/:gamerId', profileController.show);

export default router;
