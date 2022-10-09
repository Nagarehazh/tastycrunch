import { createSlice } from '@reduxjs/toolkit';

export const dietSlice = createSlice({
    name: 'diet',
    initialState: {
        diets: " ",
    },
    reducers: {
        setDiet: (state, action) => {
            state.diets = action.payload;
        }
    }
})

export const { setDiet } = dietSlice.actions;

export default dietSlice.reducer;