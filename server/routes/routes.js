import express from "express";

import { userSignup } from "../controller/user-controller.js";

const router = express.Router();

router.post('/signUp', userSignup);


export default router;