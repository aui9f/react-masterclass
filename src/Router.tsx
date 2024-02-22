import { createBrowserRouter } from "react-router-dom";
import CreateUser from "./todo/create-user";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <CreateUser />,
  },
 
]);
export default Router;
