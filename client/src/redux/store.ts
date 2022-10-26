import { configureStore } from '@reduxjs/toolkit';
import { serverCall } from './serverCall';
import { searchSlice } from './searchRedux';
import { dietSlice } from './dietRedux';
import { healthScoreSlice } from './healthScoreRedux';
import { sortSlice } from './sortRedux';


export default configureStore({
    reducer: {
        [serverCall.reducerPath]: serverCall.reducer,
        search: searchSlice.reducer,
        diet: dietSlice.reducer,
        healthScore: healthScoreSlice.reducer,
        sort: sortSlice.reducer,
    }
})