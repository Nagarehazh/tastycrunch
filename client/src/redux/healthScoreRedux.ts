import { createSlice } from '@reduxjs/toolkit';

export const healthScoreSlice = createSlice({
    name: 'healthScore',
    initialState: {
        healthScore: " ",
    },
    reducers: {
        setHealthScore: (state, action) => {
            state.healthScore = action.payload;
        }
    }
})

export const { setHealthScore } = healthScoreSlice.actions;

export default healthScoreSlice.reducer;
