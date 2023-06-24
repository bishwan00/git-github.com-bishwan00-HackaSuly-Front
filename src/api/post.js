import { api } from "./api";

// Define a service using a base URL and expected endpoints
export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/posts${filter}`;
      },
      providesTags: ["Post"],
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
