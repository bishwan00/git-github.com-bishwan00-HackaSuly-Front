import { api } from "./api";

export const postWithTokensApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploads: builder.mutation({
      query: (files) => {
        const formData = new FormData();
        // formData.append("images", files);

        for (let file of files) {
          formData.append("images", file);
        }

        return {
          url: "/posts/uploads",
          method: "POST",
          headers: {
            "Content-Type": undefined,
          },
          body: formData,
        };
      },
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body: body,
      }),
    }),
    updatePost: builder.mutation({
      query: (body) => {
        return {
          url: `/posts/${body.id}`,
          method: "PATCH",
          body: {
            ...body,
            id: undefined,
          },
        };
      },
    }),
  }),
});
export const {
  useGetAllPostsQuery,
  useUploadsMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postWithTokensApi;
