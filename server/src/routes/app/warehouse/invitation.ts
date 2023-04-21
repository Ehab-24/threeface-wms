import { Router } from 'express';
import * as InvitationController from '../../../controllers/invitation';

const router: Router = Router();

router.get('/sent', InvitationController.readSentInvites);
router.get('/received', InvitationController.readReceivedInvites);
router.post('/', InvitationController.send);
router.patch('/', InvitationController.update);
router.delete('/', InvitationController.remove);

export default router;
