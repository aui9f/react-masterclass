import { createBrowserRouter } from "react-router-dom";
import TodoList from "./todo/TodoList";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList/>,
  },
 
]);
export default Router;
