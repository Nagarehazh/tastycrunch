import { Router } from "express";
import { RECIPES } from "../paths";
import { getAllRecipes, getRecipeById, createRecipe } from "../controllers/recipes.controllers";
const router = Router();

router.get(RECIPES, getAllRecipes);
router.get(`${RECIPES}/:id`, getRecipeById);
router.post(RECIPES, createRecipe);

export default router;
