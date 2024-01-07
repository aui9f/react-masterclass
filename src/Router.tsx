import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Followers from "./Followers";
import Forms from "./Forms";
import Home from "./Home";
import User from "./User";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "forms", element: <Forms /> },
      {
        path: "user/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
  },
]);
export default Router;
