import { Router } from "express";
import { RECIPES } from "../paths";
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.controllers";
const router = Router();

router.get(RECIPES, getAllRecipes);
router.get(`${RECIPES}/:id`, getRecipeById);
router.post(RECIPES, createRecipe);
router.put(`${RECIPES}/:id`, updateRecipe);
router.delete(`${RECIPES}/:id`, deleteRecipe);

export default router;
