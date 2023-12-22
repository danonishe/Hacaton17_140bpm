import { Router } from "express";

import authController from "../controllers/auth.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.post('/login', asyncRoute(authController.login));

router.post('/register', asyncRoute(authController.register));

router.route('/login')
    .post(asyncRoute(authController.login))
    .get(asyncRoute(authController.get))


export default router;