import { auth } from "../../../middleware/authentication.js";
import * as userController from "./controller/user.js";

import { Router } from "express";

const router = new Router();

router.get('/',auth, userController.getUsers)


export default router;


