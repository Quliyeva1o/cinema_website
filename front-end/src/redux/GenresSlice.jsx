import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://back-end-steel-pi.vercel.app/api/"
export const genreAPI = createApi({
    reducerPath: "genreAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => `genres`,
        }),
        getGenreById: builder.query({
            query: (id) => `genres/${id}`,
        }),
        deleteGenre: builder.mutation({
            query: (id) => ({
                url: `genres/${id}`,
                method: "DELETE"
            }),
        }),
        postGenre: builder.mutation({
            query: (newGenre) => ({
                url: `genres`,
                body: newGenre,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }),
        }),
        patchGenre: builder.mutation({
            query: ({ id, changes }) => ({
                url: `genres/${id}`,
                body: changes,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
            }),
        }),
    }),
})

export const { useGetGenreByIdQuery, useDeleteGenreMutation, usePostGenreMutation, useGetGenresQuery, usePatchGenreMutation } = genreAPI