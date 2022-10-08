import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/database";
import { Recipe } from "./recipe";

export const Diet = sequelize.define('diet', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
})


Recipe.belongsToMany(Diet, { through: 'recipe_diet' });
Diet.belongsToMany(Recipe, { through: 'recipe_diet' });