import express from "express";

import { userSignup } from "../controller/user-controller";

const router = express.Router();

router.post('/signUp', userSignup);


export default router;