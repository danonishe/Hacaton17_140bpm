import { Router } from "express";
import { asyncRoute } from "../utils/errors.js";

import favPlaceController from "../controllers/favPlace.js"

const router = Router();

router.post('/create', asyncRoute(favPlaceController.createFavPlace));

router.get('/all/:userId', asyncRoute(favPlaceController.getPlacesForUser));

router.get('/', asyncRoute(favPlaceController.getFavPlaceByIdAndUserId));

router.delete('/delete', asyncRoute(favPlaceController.deleteFavPlaceById));

export default router;
