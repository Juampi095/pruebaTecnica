import express from 'express';
import authController from '../controllers/auth.controllers';

const router = express.Router();

router.post('/register', authController.register);
router.post('/signin', authController.logIn);



export default router;
