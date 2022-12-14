import { Request, Response } from 'express';
import {
    getAllDbApiRecipes,
    getAllDbApiRecipesbyName,
    RecipeById,
    postRecipe,
    putRecipe
} from './utils/apiDb';

const getAllRecipes = async (req: Request, res: Response) => {

    const { name } = req.query;
    try {
        if (name) {
            const recipesByName = await getAllDbApiRecipesbyName(name);

           
            if (recipesByName.length) {
               res.status(200).json(recipesByName);
            } 

        } else {
            const recipes = await getAllDbApiRecipes();
            res.status(200).json(recipes);
        }
          


    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const getRecipeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        if (typeof id === "string") {
           const recipe = await RecipeById(id);
              if (recipe) {
                res.status(200).json(recipe);
            } 
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

const createRecipe = async (req: Request, res: Response) => {
    const { name, description, healthScore, stepByStep, image, diets } = req.body;
    try {
        const recipe = await postRecipe(name, description, healthScore, stepByStep, image, diets);
      
        if (recipe) {
          res.status(200).json(recipe);
        }
    
    } catch (error: any) {
         res.status(500).json({ message: error.message });
    }
}


const updateRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, healthScore, stepByStep, image, diets } = req.body;
    try {
        const recipe = await putRecipe(id, name, description, healthScore, stepByStep, image, diets);
        if (recipe) {
            return res.status(200).json(recipe);
        } else {
            return res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const recipe = await RecipeById(id);
        if (recipe) {
            await recipe.destroy();
            return res.status(200).json({ message: 'Recipe deleted' });
        } else {
            return res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}


