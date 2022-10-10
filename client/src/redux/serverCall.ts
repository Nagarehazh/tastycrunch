import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverCall = createApi({
    reducerPath: 'serverCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getDietsTypes: builder.query<void, void>({
            query: () => '/diets',
        }),
        getAllRecipes: builder.query<void, void>({
            query: () => '/recipes/all',
        }),
        createRecipe: builder.mutation({
            query: (body) => ({
                url: '/recipes',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const {
    useGetDietsTypesQuery,
    useGetAllRecipesQuery,
    useCreateRecipeMutation,
    
} = serverCall;


