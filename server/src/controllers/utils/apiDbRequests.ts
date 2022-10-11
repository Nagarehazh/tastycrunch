import { Request, Response } from 'express';
import { Recipe } from '../../models/recipe';
import axios from 'axios';
import { Diet } from '../../models/diet';

const getDatabaseRecipes = async (_req: Request, res: Response) => {
    try {
        const dataBaseIncludeDiet = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });

        let response = await dataBaseIncludeDiet?.map((recipe: any) => {
            return {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                healthScore: recipe.healthScore,
                stepByStep: recipe.stepByStep,
                image: recipe.image,
                diets: recipe.diets.map((diet: any) => diet.name)
            }
        });

        return response;
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const getApiRecipes = async (_req: Request, res: Response) => {
    try {
        const apiCall = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process
            .env.SPOONACULAR_API_KEY}&addRecipeInformation=true&number=100`)
            .then((response: any) => {
                return response.data.results.map((recipe: any) => {
                    return {
                        id: recipe.id,
                        name: recipe.title,
                        description: recipe.summary,
                        healthScore: recipe.healthScore,
                        stepByStep: recipe.instructions,
                        image: recipe.image,
                        diets: recipe.diets
                    }
                })
            })
        return apiCall;
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const getApiRecipeByName = async (_req: Request, res: Response, name: any) => {
    if (name) {
        try {
            const apiCall = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process
                .env.SPOONACULAR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
                .then((response: any) => {
                    return response.data.results.map((recipe: any) => {
                        return {
                            id: recipe.id,
                            name: recipe.title,
                            healthScore: recipe.healthScore,
                            image: recipe.image,
                            diets: recipe.diets
                        }
                    })
                })
            return apiCall;
        } catch (error: any) {
            return res.status(500).json({ message: `Recipe with name ${name} not found` });
        }
    } 
}

const getAllDbApiRecipes = async (req: Request, res: Response) => {
    try {
        const apiRecipes = await getApiRecipes(req, res);
        const dbRecipes = await getDatabaseRecipes(req, res);
        const allRecipes = apiRecipes.concat(dbRecipes);
        return res.status(200).json(allRecipes);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const RecipeById = async (_req: Request, res: Response, id: any) => {
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
          return recipe;
        }

        const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=false`)
            .then((response) => {
                return res.status(200).json({
                    name: response.data.title,
                    description: response.data.summary,
                    healthScore: response.data.healthScore,
                    stepByStep: response.data.instructions,
                    image: response.data.image,
                    diets: response.data.diets
                })
            })
        return recipeApi;

    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}


const postRecipe = async (_req: Request, res: Response, name: any, description: any, healthScore: any, stepByStep: any, image: any, diets: any) => {
    
    try {
        const recipe = await Recipe.create({
            name,
            description,
            healthScore,
            stepByStep,
            image
        });

        const diet = await Diet.findAll({
            where: {
                name: diets
            }
        })

        await (recipe as any).addDiet(diet);

        return recipe;
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
}

export {
    getAllDbApiRecipes,
    getDatabaseRecipes,
    getApiRecipes,
    getApiRecipeByName,
    RecipeById,
    postRecipe
}