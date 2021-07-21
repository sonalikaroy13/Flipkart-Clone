import express from "express";

import { userSignUp, userLoginIn } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLoginIn);


router.get('/products', getProducts);


export default router;