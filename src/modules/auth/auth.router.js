import { Router } from "express";
import * as userAuth from "./Controller/auth.js";
// import asyncHandler from './Controller/auth.js';

const router = Router();


router.post('/signup', userAuth.signup)
router.get("/confirmEmail/:token",userAuth.confirmEmail)
router.get("/newConfirmEmail/:token",userAuth.newConfirmEmail)
router.post('/login', userAuth.login)

export default router