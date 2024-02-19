import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
// import { QueryClient } from "react-query";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
