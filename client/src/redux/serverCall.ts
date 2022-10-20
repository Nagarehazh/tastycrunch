import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serverCall = createApi({
    reducerPath: 'serverCall',
    // https://tastycrunch.herokuapp.com
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tastycrunch.herokuapp.com' }),
    endpoints: (builder) => ({
        getDietsTypes: builder.query<void, void>({
            query: () => '/diets',
        }),
        getAllRecipes: builder.query({
            query: (name: any) => `/recipes?name=${name}`,
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


