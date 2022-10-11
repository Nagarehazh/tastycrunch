import { Request, Response } from 'express';
import {
    getAllDbApiRecipes,
    // getDatabaseRecipes,
    // getApiRecipes,
    getApiRecipeByName,
    RecipeById,
    postRecipe
} from './utils/apiDbRequests';

const getAllRecipes = async (req: Request, res: Response) => {

    const { name } = req.query;
    try {
        if (name) {
            const recipesByName = await getApiRecipeByName(name);

            if (recipesByName.length) {
                return res.status(200).json(recipesByName);
            } else {
                return res.status(404).json({ message: 'Recipe not found' });
            }



        } else {
            const recipes = await getAllDbApiRecipes();
            return res.status(200).json(recipes);
        }




    } catch (error: any) {
        return res.status(500).json({ message: error.message });
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
        return res.status(200).json(recipe);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}


export {
    getAllRecipes,
    getRecipeById,
    createRecipe
}


