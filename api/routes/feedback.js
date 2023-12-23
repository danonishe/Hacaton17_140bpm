import {Router} from "express";

import {asyncRoute} from "../utils/errors.js";
import feedbackController from "../controllers/feedback.js"
import verify from '../middlewares/verify-token.js';

const router = Router();

router.route('/')
    .post(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(feedbackController.create))
    .get(asyncRoute(feedbackController.get));

router.route('/user')
    .get(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(feedbackController.getByUserId))
    .patch(asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(feedbackController.updateUser));

router.route('/:placeId')
    .get(asyncRoute(feedbackController.getByPlaceId));


export default router;
