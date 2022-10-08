import { Request, Response } from "express";
import {DIETS_ARRAY} from "./types";

import { Diet } from "../models/diet";
import { Recipe } from "../models/recipe";

export const getDiets = async (_req: Request, res: Response) => {
    try {
       await Diet.findAll()
        .then((response) => {
            if (response.length > 0) {
                res.status(200).json(response);
            } else {
                Diet.bulkCreate(DIETS_ARRAY)
                .then((response) => {
                    res.status(200).json(response);
                })
            }
        })
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllRecipesByDiet = async (req: Request, res: Response) => {
    const { diet } = req.params;
    try {
        const recipes = await Recipe.findAll({
            include: {
                model: Diet,
                where: {
                    name: diet
                }
            }
        });
    

        res.status(200).json(recipes);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


