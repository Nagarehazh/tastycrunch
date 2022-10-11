import { Request, Response } from 'express';
import { Recipe } from '../models/recipe';
import axios from 'axios';
import { Diet } from '../models/diet';

interface TypesDataBaseRecipe {
    id: string;
    name: string;
    description: string;
    healthScore: number;
    stepByStep: string;
    image: string;
    diets: string[];
}


export const getOwnRecipes = async (_req: Request, res: Response) => {
    try {

        const recipesDb = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        let response = await recipesDb?.map((recipe: any) => {
            return {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                healthScore: recipe.healthScore,
                stepByStep: recipe.stepByStep,
                image: recipe.image,
                diets: recipe.diets?.map((diet: any) => diet.name)
            }
        })

        res.status(200).json(response);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const getRecipes = async (req: Request, res: Response) => {
    const { name } = req.query;
    const spoonacularApi: any[] = [];
    const myDataBaseRecipes: TypesDataBaseRecipe[] = [];
    let allRecipes = [];

    if (name) {
        try {
            await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process
                .env.SPOONACULAR_API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
                .then((response) => {
                    response.data.results.forEach((recipe: any) => {
                        spoonacularApi.push({
                            id: recipe.id,
                            name: recipe.title,
                            description: recipe.summary,
                            healthScore: recipe.healthScore,
                            stepByStep: recipe.analyzedInstructions[0].steps[0].step,
                            image: recipe.image,
                            dishTypes: recipe.dishTypes,
                            diets: recipe.diets,
                        });
                    });
                });

            const recipesDb = await Recipe.findOne({ where: { name: name } });

            if (recipesDb) {
                myDataBaseRecipes.push({
                    id: (recipesDb as any).id,
                    name: (recipesDb as any).name,
                    description: (recipesDb as any).description,
                    healthScore: (recipesDb as any).healthScore,
                    stepByStep: (recipesDb as any).stepByStep,
                    image: (recipesDb as any).image,
                    diets: (recipesDb as any).diets?.map((diet: any) => diet.name)
                })
            }

            allRecipes = spoonacularApi.concat(myDataBaseRecipes);


            if (allRecipes.length === 0) {
                return res.status(404).json({ message: 'No recipes found' });
            }

            return res.status(200).json(allRecipes);

        } catch (error: any) {
            return res.status(404).json({ message: error.message });
        }
    } else {
        return res.status(404).send('No recipes found');

    }
}

export const getAllRecipes = async (_req: Request, res: Response) => {
    try {
        const spoonacularApi: any[] = [];
        let allRecipes = [];

        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process
            .env.SPOONACULAR_API_KEY}&addRecipeInformation=true&number=100`)
            .then((response) => {
                response.data.results.forEach((recipe: any) => {
                    spoonacularApi.push({
                        id: recipe.id,
                        name: recipe.title,
                        healthScore: recipe.healthScore,
                        image: recipe.image,
                        dishTypes: recipe.description,
                        diets: recipe.diets
                    })
                })
            })

        const recipesDb = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }

            }
        })

        let response = await recipesDb?.map((recipe: any) => {
            return {
                id: recipe.id,
                name: recipe.name,
                description: recipe.description,
                healthScore: recipe.healthScore,
                stepByStep: recipe.stepByStep,
                image: recipe.image,
                diets: recipe.diets?.map((diet: any) => diet.name)
            }
        })

        allRecipes = spoonacularApi.concat(response);
        res.status(200).json(allRecipes);


    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}


export const getRecipeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            res.status(200).json(recipe);
        }

        await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}&includeNutrition=false`)
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
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }

}



export const postRecipe = async (req: Request, res: Response) => {
    const { name, description, healthScore, stepByStep, image, diets } = req.body;
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

        res.status(200).json(recipe);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}
// const { name, description, healthScore, stepByStep, image, diets } = req.body;
// try {
//     const recipe = await Recipe.create({
//         name,
//         description,
//         healthScore,
//         stepByStep,
//         image,

//     });

//     const dbDiet = await Diet.findAll({
//         where: {
//             name: diets
//         }
//     });

//     (recipe as any).addDiet(dbDiet)
//     res.status(200).json(recipe);

// } catch (error: any) {
//     res.status(500).json({ message: error.message });
// }
// }

export const putRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, healthScore, stepByStep, image } = req.body;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            await recipe.update({
                name,
                description,
                healthScore,
                stepByStep,
                image
            });
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByPk(id);
        if (recipe) {
            await recipe.destroy();
            res.status(200).json({ message: 'Recipe deleted' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}







