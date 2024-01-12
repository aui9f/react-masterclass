import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/reset";
import { darkTheme, lightTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./common/atoms";
function App() {
  // const [isDark, setIsDark] = useState(false);
  // const toggleMode = ()=>setIsDark(current=>!current);
  const isDark = useRecoilValue(isDarkAtom)
  return (
    <>
      <ThemeProvider theme={isDark?darkTheme:lightTheme}>
        <GlobalStyles />
        <RouterProvider router={Router} />
        {/* <button type="button" onClick={toggleMode}>Toggle Mode</button> */}
        <><Outlet /></>
        {/* <Circle bgColor="teal" />
        <Circle bgColor="skyblue" borderColor="blue"/> */}
        <ReactQueryDevtools initialIsOpen={true}/>
      </ThemeProvider>
    </>
  );
}

export default App;
