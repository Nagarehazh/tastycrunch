import { Request, Response } from "express";
import {DIETS_ARRAY} from "./types";

import { Diet } from "../models/diet";


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




