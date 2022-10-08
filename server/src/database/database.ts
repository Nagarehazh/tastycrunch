import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
dotenv.config();

const dbname = process.env.DB_NAME
const secret_key = process.env.SECRET_KEY

export const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:${secret_key}@localhost:5432/${dbname}`, {
    dialect: 'postgres',
    native: false,
    ...(process.env.NODE_ENV === 'production' && {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    })

})

sequelize.addModels([__dirname + "/models"]);






