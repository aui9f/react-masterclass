import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loading = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
export default function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await (
          await fetch("https://api.coinpaprika.com/v1/coins")
        ).json();
        setCoins(response.slice(0, 100));
      } catch (error) {
        setCoins([
          {
            id: "btc-bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            rank: 1,
            is_new: false,
            is_active: true,
            type: "coin",
          },
          {
            id: "eth-ethereum",
            name: "Ethereum",
            symbol: "ETH",
            rank: 2,
            is_new: false,
            is_active: true,
            type: "coin",
          },
          {
            id: "hex-hex",
            name: "HEX",
            symbol: "HEX",
            rank: 3,
            is_new: false,
            is_active: true,
            type: "token",
          },
        ]);
      } finally {
        setIsLoding(false);
      }
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>코인 리스트</Title>
      </Header>

      <CoinsList>
        {isLoading ? <Loading>Loading..</Loading> : null}
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Img
              src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
            />
            <Link to={`/${coin.id}`} state={{ ...coin }}>
              {coin.name}
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
