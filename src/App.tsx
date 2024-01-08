import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/reset";
function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet context={{ isDark: false }} />
      {/* <Circle bgColor="teal" />
    <Circle bgColor="skyblue" borderColor="blue"/> */}
    </>
  );
}

export default App;
