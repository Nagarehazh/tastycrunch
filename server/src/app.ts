import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { sequelize } from './database/database';
import recipeRoutes from './routes/recipes.routes';
import dietRoutes from './routes/diets.routes';


import "./models/recipe";
import "./models/diet";

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use((_req, res, next) => {
  // https://tastycrunch.netlify.app
  res.header('Access-Control-Allow-Origin', "*"); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(recipeRoutes);
app.use(dietRoutes);

(async function sequelizeSync(){
  try {
    sequelize
      .sync()
      .then(() => {
        console.log('Postgres sync has been established successfully.')
      })
  } catch (error) {
    console.error('Unable to sync to the database:', error)
}
})();

export default app;