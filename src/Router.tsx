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
      { path: "chart", element: <Chart /> },
      { path: "price", element: <Price /> },
    ],
  },
]);

export default Router;
