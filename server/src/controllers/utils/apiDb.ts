import { Recipe } from '../../models/recipe';
import * as dotenv from "dotenv";
dotenv.config();
import axios from 'axios';
import { Diet } from '../../models/diet';
import { Op } from 'sequelize';

const key = process.env.SPOONACULAR_API_KEY;

const getDatabaseRecipes = async () => {
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
        return error.message;
    }
}

const getApiRecipes = async () => {
    try {
        const apiCall = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&addRecipeInformation=true&number=100`)
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
        return error.message;
    }
}

const getApiRecipeByName = async (name: any) => {
    try {
        const apiCall = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&addRecipeInformation=true&number=100&query=${name}`);
        const response = await apiCall.data.results.map((recipe: any) => {
            return {
                id: recipe.id,
                name: recipe.title,
                healthScore: recipe.healthScore,
                image: recipe.image,
                diets: recipe.diets
            }
        })
        return response;
    } catch (error: any) {
        return error.message;
    }
}

const getDbRecipeByName = async (name: any) => {
    try {
        const dataBaseIncludeDiet = await Recipe.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        if (dataBaseIncludeDiet.length > 0) {
            let response = await dataBaseIncludeDiet?.map((recipe: any) => {
                return {
                    id: recipe.id,
                    name: recipe.name,
                    healthScore: recipe.healthScore,
                    image: recipe.image,
                    diets: recipe.diets.map((diet: any) => diet.name)
                }
            });
            return response;
        } else {
            return [];
        }


    } catch (error: any) {
        return error.message;
    }
}

const getAllDbApiRecipesbyName = async (name: any) => {
    try {
        const apiRecipesByName = await getApiRecipeByName(name);
        const dbRecipesByName = await getDbRecipeByName(name);
        const allRecipesByName = apiRecipesByName.concat(dbRecipesByName);
        if (allRecipesByName.length > 0) {
            return allRecipesByName;
        } else {
            throw new Error('Recipe with that name not found');
        }
    } catch (error: any) {
        return error.message;
    }
}

const getAllDbApiRecipes = async () => {
    try {
        const apiRecipes = await getApiRecipes();
        const dbRecipes = await getDatabaseRecipes();
        const allRecipes = apiRecipes.concat(dbRecipes);
        return allRecipes;
    } catch (error: any) {
        return error.message;
    }
}

const RecipeById = async (id: string) => {
    try {
        if (id.length === 36) {
            const dbRecipe = await Recipe.findByPk(id, {
                include: {
                    model: Diet,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            });
            if (dbRecipe) {
                return dbRecipe;
            } else {
                return { error: 'Recipe not found' };
            }
        } else {
            const apiRecipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process
                .env.SPOONACULAR_API_KEY}&includeNutrition=false`)
                .then((response: any) => {
                    return {
                        name: response.data.title,
                        description: response.data.summary,
                        healthScore: response.data.healthScore,
                        stepByStep: response.data.instructions,
                        image: response.data.image,
                        diets: response.data.diets
                    }
                })
            return apiRecipe;
        }
    } catch (error: any) {
        return error.message;
    }
}

const postRecipe = async (name: string, description: string, healthScore: number, stepByStep: string, image: string, diets: string[]) => {

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
        return { error: error.message };
    }
}

const putRecipe = async (id: any, name: string, description: string, healthScore: number, stepByStep: string, image: string, diets: string[]) => {
    try {
        const recipe: any = await Recipe.findByPk(id);
        if (recipe) {
            await recipe.update({
                name,
                description,
                healthScore,
                stepByStep,
                image
            });

            await (recipe as any).setDiets([]);

            const diet = await Diet.findAll({
                where: {
                    name: diets
                }
            })
            await (recipe as any).addDiet(diet);
            return recipe;

        }

        return { error: 'Recipe not found' };

    } catch (error: any) {
        return { error: error.message };
    }
}

export {
    getAllDbApiRecipes,
    getAllDbApiRecipesbyName,
    RecipeById,
    postRecipe,
    putRecipe
}