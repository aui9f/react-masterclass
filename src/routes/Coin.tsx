import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "../coin/Chart";
import Price from "../coin/Price";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    // props.isActive ? props.theme.accentColor : props.theme.textColor};
    props.$isActive ? "red" : "gray"};
  a {
    display: block;
  }
`;

interface RouteParams {
  coinId: string;
  // [key: string]: string;
}
// interface RouteState {
//   name: string;
//   [key: string]: string;
// }

interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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
interface ICoinPrice {
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
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [isLoading, setIsLoading] = useState(true);
  // const { coinId } = useParams<RouteParams>();
  const { coinId } = useParams<{ coinId: string }>();
  // const { state } = useLocation().state as RouteState;
  const { state } = useLocation();

  const [coinData, setCoinData] = useState<ICoinData>();
  const [coinPrice, setCoinPrive] = useState<ICoinPrice>();

  const isPriceActive = useMatch("/:coinId/price");
  const isChartActive = useMatch("/:coinId/chart");
  console.log("isChartActive", isPriceActive !== null);
  async function getCoinData(id: string) {
    try {
      return await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      ).json();
    } catch (error) {
      return {};
    }
  }
  async function getCoinPrice(id: string) {
    try {
      return await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      ).json();
    } catch (error) {
      return {};
    }
  }

  useEffect(() => {
    (async () => {
      if (coinId) {
        const [data, price] = await Promise.all([
          getCoinData(coinId || ""),
          getCoinPrice(coinId || ""),
        ]);
        setCoinData(data);
        setCoinPrive(price);
        setIsLoading(false);
      }
    })();
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
        <Title>
          {state?.name ? state.name : isLoading ? "Loading..." : coinData?.name}
        </Title>
      </Header>

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coinData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${coinData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{coinData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{coinData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{coinPrice?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{coinPrice?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab $isActive={isChartActive !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={isPriceActive !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet context={{ coinId }} />
        </>
      )}
    </Container>
  );
}
export default Coin;
