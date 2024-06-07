import express from 'express';

import * as postController from './../controllers/postController.js';
export const router = express.Router();

router.post('/',postController.post);