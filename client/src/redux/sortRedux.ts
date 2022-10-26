import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort: " ",
    },
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    }
})

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
