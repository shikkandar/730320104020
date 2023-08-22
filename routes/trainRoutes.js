import express from 'express';
import authenticate from '../controllers/train.js';
const router = express.Router();

router.get('/register', authenticate.registerUser);
router.get('/auth', authenticate.authenticateUser);
router.post('/register', authenticate.registerUser);
router.post('/auth', authenticate.authenticateUser);
router.get('/trains', authenticate.showAllTrains);
router.get('/trains/:id', authenticate.showOneTrain);


export default router;