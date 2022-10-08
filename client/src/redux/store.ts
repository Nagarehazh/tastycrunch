import { configureStore } from '@reduxjs/toolkit';
import { serverCall } from './serverCall';
import { searchSlice } from './searchRedux';

export default configureStore({
    reducer: {
        [serverCall.reducerPath]: serverCall.reducer,
        search: searchSlice.reducer,

    }
})