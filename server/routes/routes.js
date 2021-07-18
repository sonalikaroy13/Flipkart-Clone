import express from "express";

import { userSignUp, userLoginIn } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLoginIn);


export default router;