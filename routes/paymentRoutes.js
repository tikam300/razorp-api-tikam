import express from 'express'
import { checkout, paymentVarification } from '../controllers/paymentController.js';

const router = express.Router();

router.route('/checkout').post(checkout);

router.route('/paymentverification').post(paymentVarification);

export default router;