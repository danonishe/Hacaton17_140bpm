import { Router } from "express";
import verify from '../middlewares/verify-token.js';
import authController from "../controllers/auth.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.post('/login', asyncRoute(authController.login));
router.post('/register', asyncRoute(authController.register));

router.route('/self').get(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(authController.self));

export default router;