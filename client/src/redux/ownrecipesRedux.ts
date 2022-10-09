import { createSlice } from "@reduxjs/toolkit";

export const ownrecipesSlice = createSlice({
    name: "ownrecipes",
    initialState: {
        ownrecipes: [],
        id: 1,
    },
    reducers: {
        setOwnRecipes: (state, action) => {
            state.ownrecipes = action.payload;
            state.id += 1 ;
        },


    }
});

export const { setOwnRecipes } = ownrecipesSlice.actions;

export default ownrecipesSlice.reducer;

