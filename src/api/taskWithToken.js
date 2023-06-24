import { api } from "./api";

export const taskWithTokensApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploadsTask: builder.mutation({
      query: (files) => {
        const formData = new FormData();
        // formData.append("images", files);

        for (let file of files) {
          formData.append("images", file);
        }

        return {
          url: "/tasks/uploads",
          method: "POST",
          headers: {
            "Content-Type": undefined,
          },
          body: formData,
        };
      },
    }),
    createTask: builder.mutation({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body: body,
      }),
    }),
    updateTask: builder.mutation({
      query: (body) => {
        return {
          url: `/tasks/${body.id}`,
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
  useUploadsTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = taskWithTokensApi;
