import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import recipeRoutes from './routes/recipes.routes';
import dietRoutes from './routes/diets.routes';

import "./models/recipe";
import "./models/diet";

const app = express();

app.use(cors());
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



export default app;