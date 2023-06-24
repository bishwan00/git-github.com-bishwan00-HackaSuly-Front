import { api } from "./api";
export const taskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/tasks${filter}`;
      },
      providesTags: ["Task"],
    }),
  }),
});

export const { useGetAllTasksQuery } = taskApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
