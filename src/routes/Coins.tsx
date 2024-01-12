import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { fetchCoins } from "../common/api";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {

  // const [coins, setCoins] = useState<ICoins[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setIsLoading(false);
  //   })();
  // }, []);

  const {isLoading, error, data } = useQuery<ICoins[]>('allCoins', fetchCoins);
  //('쿼리고유식별자', fetcher함수)

  return (
    <Container>
      <Header>
        <Title>LIST</Title>
      </Header>
      {isLoading ? (
        <Loader>'LOADING...'</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (<Coin key={coin.id}>
              <Link to={`${coin.id}`} state={{name: coin.id}}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>))}
          {/* {data?.slice(0, 100).((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`} state={{name: coin.id}}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))} */}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
