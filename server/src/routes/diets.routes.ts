import { Router } from "express";
import { DIETS } from "../paths";
import { getDiets, getAllRecipesByDiet } from "../controllers/diets.controllers";

const router = Router();

router.get(DIETS, getDiets);
router.get(`${DIETS}/:diet`, getAllRecipesByDiet);


export default router;