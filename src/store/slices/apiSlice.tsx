import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem("accessToken");
      if (!!token) {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("Content-type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: builder => ({}),
});
