import { DataType } from "sequelize-typescript";
import { sequelize } from "../database/database";

export const Recipe = sequelize.define('recipe', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
    description: {
        type: DataType.STRING,
        allowNull: false,
    },
    healthScore: {
        type: DataType.INTEGER,
    },
    stepByStep: {
        type: DataType.STRING,
    },
    image: {
        type: DataType.STRING,
    },
   
})
