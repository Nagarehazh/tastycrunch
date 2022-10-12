import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverCall = createApi({
    reducerPath: 'serverCall',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getDietsTypes: builder.query<void, void>({
            query: () => '/diets',
        }),
        getAllRecipes: builder.query({
            query: (name) => `/recipes?name=${name}`,
        }),
        getRecipeById: builder.query({
            query: (id: any) => `/recipes/${id}`,
        }),
        createRecipe: builder.mutation({
            query: (body) => ({
                url: '/recipes',
                method: 'POST',
                body,
            }),
        }),
        updateRecipe: builder.mutation({
            query: (body) => ({
                url: `/recipes/${body.id}`,
                method: 'PUT',
                body,
            }),
        }),
        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/recipes/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetDietsTypesQuery,
    useGetAllRecipesQuery,
    useCreateRecipeMutation,
    useGetRecipeByIdQuery,
    useUpdateRecipeMutation,
    useDeleteRecipeMutation,
} = serverCall;


