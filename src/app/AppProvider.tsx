"use client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import theme from "@/app/utils/theme";
import store from "@/store";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
