import { configureStore } from '@reduxjs/toolkit';
import { serverCall } from './serverCall';
import { searchSlice } from './searchRedux';
import { dietSlice } from './dietRedux';
import { ownrecipesSlice } from './ownrecipesRedux';

export default configureStore({
    reducer: {
        [serverCall.reducerPath]: serverCall.reducer,
        search: searchSlice.reducer,
        diet: dietSlice.reducer,
        ownrecipes: ownrecipesSlice.reducer,
       
    }
})