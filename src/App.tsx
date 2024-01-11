import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Outlet context={{ isDark: true }} />
        {/* context={{ isDark: true }}  */}
        {/* <Circle bgColor="teal" />
        <Circle bgColor="skyblue" borderColor="blue"/> */}
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
