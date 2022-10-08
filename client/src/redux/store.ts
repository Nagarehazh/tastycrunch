import { configureStore } from '@reduxjs/toolkit';
import { serverCall } from './serverCall';


export default configureStore({
    reducer: {
        [serverCall.reducerPath]: serverCall.reducer,

    }
})