import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
}

interface ILocation {
  state: {
    name: string;
  };
}

function Coin() {
  const { coinId } = useParams<{ coinId: string }>(); // 나중에왜 이렇게 작성해야하는지 확인
  const { state } = useLocation() as ILocation; // 나중에왜 이렇게 작성해야하는지 확인

  const [info, setInfo] = useState<IInfo>();
  const [price, setPrice] = useState<IPrice>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      setInfo(infoData);
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setPrice(priceData);
      console.log(Object.keys(priceData).join());
      console.log(
        Object.values(priceData)
          .map((x) => typeof x)
          .join()
      );
    })();
  }, []);

  return <div>Coin: {coinId}</div>;
}

export default Coin;
