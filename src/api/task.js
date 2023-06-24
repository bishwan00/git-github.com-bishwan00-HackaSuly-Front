import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/tasks${filter}`;
      },
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
