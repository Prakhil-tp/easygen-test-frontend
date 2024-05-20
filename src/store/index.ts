import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@/store/slices/apiSlice";
import credReducer from "@/store/slices/credSlice";

const store = configureStore({
  reducer: {
    cred: credReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
