import express from 'express';

import * as exploreController from './../controllers/exploreController.js';
export const router = express.Router();

router.get('/getCompanies',exploreController.getCompanies);
router.get('/details/:company',exploreController.getdetails);
router.get('/reviewdetails/:reviewId',exploreController.getpost);
router.get('/getInternships',exploreController.getInternships);
router.get('/getFTE',exploreController.getFTE);