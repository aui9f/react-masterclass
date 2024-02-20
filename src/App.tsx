import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/reset";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet context={{ isDark: false }} />

      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
