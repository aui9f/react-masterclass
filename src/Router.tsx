import { createBrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./coin/Chart";
import Price from "./coin/Price";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: ":coinId",
    element: <Coin />,
    children: [
      {path: 'chart', element: <Chart/>},
      {path: 'price', element: <Price/>},
    ]
  },
]);
/*
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async()=>{
      return 1000
    }, 
    children: [
      { path: "", element: <Home /> },
      { path: "forms", element: <Forms /> },
      {
        path: "user/:userId",
        element: <User />,
        loader: async()=>{
          return 1000
        }, 
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
*/
export default Router;
