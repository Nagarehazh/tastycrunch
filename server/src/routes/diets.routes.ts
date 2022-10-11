import { Router } from "express";
import { DIETS } from "../paths";
import { getDiets } from "../controllers/diets.controllers";

const router = Router();

router.get(DIETS, getDiets);

export default router;