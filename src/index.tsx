import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={darkTheme}>
        <App />
        <RouterProvider router={Router} />
      </ThemeProvider>
      
      <ReactQueryDevtools initialIsOpen={true}/>
    
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
