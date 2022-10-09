import { Router } from "express";
import { RECIPES } from "../paths";
import { getRecipes, getAllRecipes, getRecipeById, postRecipe, putRecipe, deleteRecipe, getOwnRecipes } from "../controllers/recipes.controllers";

const router = Router();

router.get(RECIPES, getRecipes);
router.get(`${RECIPES}/all`, getAllRecipes);
router.get(`${RECIPES}/myrecipes`, getOwnRecipes);
router.get(`${RECIPES}/:id`, getRecipeById);
router.post(RECIPES, postRecipe);
router.put(`${RECIPES}/:id`, putRecipe);
router.delete(`${RECIPES}/:id`, deleteRecipe);


export default router;
