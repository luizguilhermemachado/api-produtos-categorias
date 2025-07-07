import { Router } from "express";

import CategoriaController from "../controllers/CategoriaController.js";
import loginRequired from "../middlewares/loginRequired.js";


const router = Router()

router.get('/', loginRequired, CategoriaController.index)
router.post('/', loginRequired, CategoriaController.store)
router.get('/:id', loginRequired, CategoriaController.show)
router.put('/:id', loginRequired, CategoriaController.update)
router.delete('/:id', loginRequired, CategoriaController.delete)

export default router
