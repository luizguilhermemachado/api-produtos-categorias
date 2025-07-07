import { Router } from "express";

import loginRequired from "../middlewares/loginRequired.js";
import TokenController from "../controllers/TokenController.js";

const router = Router()

router.post('/',  TokenController.store)

export default router
