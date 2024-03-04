import { createBrowserRouter } from "react-router-dom";
// import TodoList from "./todo/TodoList";
// import TrelloIndex from "./trello";
// import User from "./User";
// import CreateUser from "./user/create-user";
import Animations from "./animations/index";
import Nomfilx from "./nomflix/nomfilx-home";
import Home from "./nomflix/Home";
import TvShows from "./nomflix/tv-shows";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Nomfilx />,
    children: [{
      path: '/',
      element: <Home/>
    },{
      path: '/tv',
      element: <TvShows/>
    }]
  },
]);
export default Router;
