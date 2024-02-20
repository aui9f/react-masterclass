import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../core/atoms";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  border: 1px solid ${(props) => props.theme.accentColor || "gray"};
  color: ${(props) => props.theme.accentColor};

  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.accentColor || "red"};
  }
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
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
const ToggleBtn = styled.button`
  background-color: pink;
  margin: 0 12px;
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
  const setMode = useSetRecoilState(isDarkAtom);
  const toggle = () => setMode((prev) => !prev);

  const { isLoading, error, data } = useQuery<ICoins[]>("allCoins", fetchCoins);
  //('쿼리고유식별자', fetcher함수)

  return (
    <Container>
      <Header>
        <Title>LIST</Title>
        <ToggleBtn onClick={toggle}>Toggle</ToggleBtn>
      </Header>
      {isLoading ? (
        <Loader>'LOADING...'</Loader>
      ) : (
        <CoinsList>
          <Coin>
            <Link to={"test"} state={{ name: `test` }}>
              <img />
              Test &rarr;
            </Link>
          </Coin>

          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`} state={{ name: coin.id }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
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
