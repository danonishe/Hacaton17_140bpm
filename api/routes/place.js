import { Router } from "express";

import { asyncRoute } from "../utils/errors.js";
import placeController from "../controllers/place.js"

const router = Router();

router.post('/create', asyncRoute(placeController.createPlace));

router.patch('/update/:id', asyncRoute(placeController.updatePlace));
//look how fix bug with parametr
router.get('/one/:id', asyncRoute(placeController.getPlaceById));

router.get('/all', asyncRoute(placeController.getPlaces));

router.delete('/delete/:id', asyncRoute(placeController.deletePlaceById));



export default router;
