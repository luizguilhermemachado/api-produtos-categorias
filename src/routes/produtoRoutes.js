import { Router } from "express";

import ProdutoController from "../controllers/ProdutoController.js";
import loginRequired from "../middlewares/loginRequired.js";


const router = Router()

router.get('/', loginRequired, ProdutoController.index)
router.post('/', loginRequired, ProdutoController.store)
router.get('/:id', loginRequired, ProdutoController.show)
router.put('/:id', loginRequired, ProdutoController.update)
router.delete('/:id', loginRequired, ProdutoController.delete)

export default router
