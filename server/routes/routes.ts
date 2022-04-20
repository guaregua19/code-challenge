import express from 'express';
import { transferFunds } from '../controller/TransactionController';

const router = express.Router();

router.get('/', transferFunds)

export default router;