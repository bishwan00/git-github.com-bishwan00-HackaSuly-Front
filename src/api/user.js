import { api } from "./api";

// Define a service using a base URL and expected endpoints
export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/users${filter}`;
      },
      providesTags: ["User"],
    }),
    getAllUsersWinner: builder.query({
      query: (condition) => {
        const filter = createFilterQueryString(condition);
        return `/users/getWinner${filter}`;
      },
      providesTags: ["User"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetAllUsersWinnerQuery } = userApi;

// Helper function to create the filter query string
const createFilterQueryString = (condition) => {
  const filters = Object.entries(condition)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return filters ? `?${filters}` : "";
};
