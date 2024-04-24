import express from 'express';
import { Truth, GetTruth, PostTruth, DeleteTruth, ResetTruth } from '../controller/truth.js';
import { Dare, GetDare, PostDare, DeleteDare, ResetDare } from '../controller/dare.js';

const router = express.Router();

router.get('/truth', Truth)
router.get('/get-truth', GetTruth);
router.post('/add-truth', PostTruth);
router.delete('/delete-truth', DeleteTruth);
router.delete('/reset-truth', ResetTruth);

router.get('/dare', Dare);
router.get('/get-dare', GetDare);
router.post('/add-dare', PostDare);
router.delete('/delete-dare', DeleteDare);
router.delete('/reset-dare', ResetDare);

export default router