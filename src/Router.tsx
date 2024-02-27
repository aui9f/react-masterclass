import { createBrowserRouter } from "react-router-dom";
// import TodoList from "./todo/TodoList";
// import TrelloIndex from "./trello";
// import User from "./User";
// import CreateUser from "./user/create-user";
import Animations from "./animations/index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Animations />,
  },
]);
export default Router;
