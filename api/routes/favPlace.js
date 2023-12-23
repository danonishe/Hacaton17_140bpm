import { Router } from "express";
import { asyncRoute } from "../utils/errors.js";

import favPlaceController from "../controllers/favPlace.js"
import verify  from "../middlewares/verify-token.js";

const router = Router();

router.post('/create/:placeId',asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(favPlaceController.createFavPlace));

router.get('/all', asyncRoute(verify.general),asyncRoute(verify.user), asyncRoute(favPlaceController.getPlacesForUser));

router.get('/one/:placeId', asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(favPlaceController.getFavPlaceByIdAndUserId));

router.delete('/delete/:placeId',asyncRoute(verify.general), asyncRoute(verify.user), asyncRoute(favPlaceController.deleteFavPlaceById));

export default router;
