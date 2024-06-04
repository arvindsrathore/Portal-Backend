import express from 'express';

import * as userController from './../controllers/userController.js';

export const router = express.Router();

router.post('/details',userController.details);
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);