import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/posts${filter}`;
      },
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useUploadsMutation,
  useCreatePostMutation,
} = postApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
