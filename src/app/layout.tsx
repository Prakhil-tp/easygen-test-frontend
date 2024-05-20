import { Metadata } from "next";
import AppProvider from "./AppProvider";
import "./global.scss";
import Auth from "./components/Auth";

export const metadata: Metadata = {
  title: "easygenerator-test: ",
  description: "Description goes here",
  viewport: "width=device-width, initial-scale=1",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppProvider>
          <Auth>{children}</Auth>
        </AppProvider>
      </body>
    </html>
  );
}

export default RootLayout;
