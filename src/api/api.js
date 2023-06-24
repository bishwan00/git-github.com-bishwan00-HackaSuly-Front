import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");

      if (token !== null || token !== "undefined") {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: () => ({}),
});
