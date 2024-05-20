import { apiSlice } from "./apiSlice";

interface signUpPayload {
  name: string;
  email: string;
  password: string;
}

interface signInPayload {
  email: string;
  password: string;
}

export const authSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation({
      query: (payload: signUpPayload) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: payload,
      }),
    }),

    signIn: builder.mutation({
      query: (payload: signInPayload) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authSlice;
