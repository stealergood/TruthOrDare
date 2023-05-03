import express from 'express';
import { GetTruth, PostTruth, DeleteTruth, ResetTruth } from '../controller/truth.js';
import { GetDare, PostDare, DeleteDare, ResetDare } from '../controller/dare.js';

const router = express.Router();

router.get('/truth', GetTruth);
router.post('/truth', PostTruth);
router.delete('/truth', DeleteTruth);
router.delete('/truth-reset', ResetTruth);


router.get('/dare', GetDare);
router.post('/dare', PostDare);
router.delete('/dare', DeleteDare);
router.delete('/dare-reset', ResetDare);

export default router