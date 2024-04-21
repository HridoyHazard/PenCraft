import { apiSlice } from "./apiSlice";
const ARTICLE_URL = "/api/articles";

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Article"],
    }),
    getArticles: builder.query({
      query: () => ({
        url: `${ARTICLE_URL}`,
        method: "GET",
      }),
    }),
    getArticleById: builder.query({
      query: (articleId) => ({
        url: `${ARTICLE_URL}/${articleId}`,
        method: "GET",
      }),
    }),
    getArticleByAuthorId: builder.query({
      query: (authorId) => ({
        url: `${ARTICLE_URL}/author/${authorId}`,
        method: "GET",
      }),
    }),

    updateArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLE_URL}/${data.id}/update`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Article"],
    }),
    
    deleteArticle: builder.mutation({
      query: (articleId) => ({
        url: `${ARTICLE_URL}/${articleId}/delete`,
        method: "DELETE",
      }),
      providesTags: ["Article"],
    }),
  }),
});

export const { useCreateArticleMutation, useGetArticlesQuery, useDeleteArticleMutation, useGetArticleByIdQuery , useUpdateArticleMutation, useGetArticleByAuthorIdQuery} =
  articleApiSlice;
