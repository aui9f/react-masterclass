import { useEffect, useState } from "react";
import { Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: gray;
  padding: 20px;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 28px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
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

//<{ isActive: boolean }>
// color: ${(props) =>
// props.isActive ? props.theme.accentColor : props.theme.textColor};
const Tab = styled.span<{isActive: boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor: 'gray'};
  a {
    display: block;
  }
`;


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
    name: string
  };
}

function Coin() {
  const [isLoading, setIsLoading] = useState(true);
  const { coinId } = useParams<{ coinId: string }>(); // 나중에왜 이렇게 작성해야하는지 확인
  const { state } = useLocation() as ILocation; // 나중에왜 이렇게 작성해야하는지 확인


  const [info, setInfo] = useState<IInfo>();
  const [priceInfo, setPrice] = useState<IPrice>();

  const priceMatch = useMatch('/:coinId/price')
  const chartMatch = useMatch('/:coinId/chart');

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
      setIsLoading(false);
    })();
  }, [coinId]);
  //두번째 인자는 컴포넌트 시작에만 실행하고 싶을땐 [] 를 사용하며
  // [coinId] coinId가 변할때마다 실행


  return <>
    <Container>
      <Header>
        <Title>{state?.name || (isLoading?'Loding..':info?.name)}</Title>
      </Header>
      { isLoading ?( 
        <Loader>Loading...</Loader>
      ):(
        <>
           <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          
          <Tabs>
            <Tab isActive={chartMatch!==null}>Chart</Tab>
            <Tab isActive={priceMatch!==null}>Price</Tab>
          </Tabs>

          <Outlet/>
        </>
      )}
    </Container>
  
  </>;
}

export default Coin;
