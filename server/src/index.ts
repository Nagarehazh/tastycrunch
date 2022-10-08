import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sequelize } from './database/database';

import recipeRoutes from './routes/recipes.routes';
import dietRoutes from './routes/diets.routes';

import "./models/recipe";
import "./models/diet";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.json())
app.use(cookieParser())
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*"); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(recipeRoutes);
app.use(dietRoutes);



(async function start(){
    try{
        console.log('DB Connection has been established successfully.');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Unable to connect to the database:', e);
    }
}
)();

export const sequelizeConnection = async () => {
    try {
      sequelize
        .authenticate()
        .then(() => {
          console.log('Postgres connection has been established successfully.')
        })
    } catch (error) {
      console.error('Unable to connect to the database:', error)
  }
}

(async function sequelizeSync(){
    try {
      sequelize
        .sync({ force: true })
        .then(() => {
          console.log('Postgres sync has been established successfully.')
        })
    } catch (error) {
      console.error('Unable to sync to the database:', error)
  }
})();

