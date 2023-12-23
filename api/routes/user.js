import { Router } from "express";

import { asyncRoute } from "../utils/errors.js";
import userController from "../controllers/user.js"
import verify from '../middlewares/verify-token.js';

const router = Router();

router.route('/addFavTypes')
    .patch(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(userController.addFavTypes));

router.route('/getSuggestedPlaces')
    .get(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(userController.getSuggestedPlaces));

router.route('/addPhoto')
    .patch(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(userController.addPhoto));

export default router;
