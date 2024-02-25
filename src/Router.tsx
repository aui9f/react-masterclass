import { createBrowserRouter } from "react-router-dom";
import TodoList from "./todo/TodoList";
import TrelloIndex from "./trello";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <TrelloIndex />,
  },
]);
export default Router;
