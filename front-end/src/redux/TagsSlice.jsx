import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://back-end-steel-pi.vercel.app/api/"
export const tagAPI = createApi({
    reducerPath: "tagAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTags: builder.query({
            query: () => `tags`,
        }),
        getTagById: builder.query({
            query: (id) => `tags/${id}`,
        }),
        deleteTag: builder.mutation({
            query: (id) => ({
                url: `tags/${id}`,
                method: "DELETE"
            }),
        }),
        postTag: builder.mutation({
            query: (newTag) => ({
                url: `tags`,
                body: newTag,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }),
        }),
        patchTag: builder.mutation({
            query: ({ id, changes }) => ({
                url: `tags/${id}`,
                body: changes,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
            }),
        }),
    }),
})

export const { useGetTagByIdQuery, useDeleteTagMutation, usePostTagMutation, useGetTagsQuery, usePatchTagMutation } = tagAPI