import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Circle from "./Circle";
import Forms from "./Forms";
import Router from "./Router";
function App() {
  

  return (
    <div>
      <Outlet context={{ isDark: false }} />
      {/* <Circle bgColor="teal" />
    <Circle bgColor="skyblue" borderColor="blue"/> */}
    </div>
  );
}

export default App;
