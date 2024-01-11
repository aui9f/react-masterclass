import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { fetchCoin, fetchTickers } from "../api";

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
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : "gray")};
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
    name: string;
  };
}

function Coin() {
  const { coinId } = useParams<{ coinId: string }>(); // 나중에왜 이렇게 작성해야하는지 확인
  const { state } = useLocation() as ILocation; // 나중에왜 이렇게 작성해야하는지 확인

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoIsLoading, data: infoData } = useQuery<IInfo>(
    ["info", coinId],
    () => fetchCoin(coinId!)
  );
  const { isLoading: tickersIsLoading, data: tickersData } = useQuery<IPrice>(
    ["price", coinId],
    () => fetchTickers(coinId!)
  );
  /**
   * 
    이렇게 coinId 뒤에 !만 넣어줬더니 정상작동했습니다
    !=> 확장 할당 어션셜로 값이 무조건 할당되어있다고 컴파일러에게 전달해 값이 없어도 변수를 사용할 수 있게 한다고 합니다.


https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string/54496418

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator



   */

  const isLoading = infoIsLoading || tickersIsLoading;
  // const [info, setInfo] = useState<IInfo>();
  // const [priceInfo, setPrice] = useState<IPrice>();

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     setInfo(infoData);
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();
  //     setPrice(priceData);
  //     setIsLoading(false);
  //   })();
  // }, [coinId]);
  //두번째 인자는 컴포넌트 시작에만 실행하고 싶을땐 [] 를 사용하며
  // [coinId] coinId가 변할때마다 실행

  return (
    <>
      <Container>
        <Header>
          <Title>
            {state?.name || (isLoading ? "Loding.." : infoData?.name)}
          </Title>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>${infoData?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Open Source:</span>
                <span>{infoData?.open_source ? "Yes" : "No"}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>Total Suply:</span>
                <span>{tickersData?.total_supply}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Max Supply:</span>
                <span>{tickersData?.max_supply}</span>
              </OverviewItem>
            </Overview>

            <Tabs>
              <Tab isActive={chartMatch !== null}>Chart</Tab>
              <Tab isActive={priceMatch !== null}>Price</Tab>
            </Tabs>

            <Outlet />
          </>
        )}
      </Container>
    </>
  );
}

export default Coin;
