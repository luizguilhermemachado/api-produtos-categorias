import { Router } from "express";

import UserController from "./../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = Router()

router.get('/', loginRequired, UserController.index)
router.post('/', UserController.store)
router.get('/:id', loginRequired, UserController.show)
router.put('/:id', loginRequired, UserController.update)
router.delete('/:id', loginRequired, UserController.delete)

export default router
