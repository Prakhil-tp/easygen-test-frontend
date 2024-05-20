import { createSlice } from "@reduxjs/toolkit";

const getToken: any = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("accessToken");
  }
  return null;
};

const initialState: Record<string, string | any> = {
  accessToken: getToken(),
};

const credSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const token = action.payload;
      state.accessToken = token;
      localStorage.setItem("accessToken", token);
    },
    logout: state => {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setCredentials, logout } = credSlice.actions;

export default credSlice.reducer;
