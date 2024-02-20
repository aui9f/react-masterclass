import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../core/atoms";

interface IHostoryData {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
function Chart() {
  const isDark = useRecoilValue(isDarkAtom);

  const { coinId } = useOutletContext<{ coinId: string }>();
  const { isLoading, error, data } = useQuery<IHostoryData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      // refetchInterval: 10000,
    }
  );

  return (
    <>
      <div>
        <p>Chart: {coinId}</p>
      </div>

      {/* Overload 1 of 2, '(props: Props | Readonly): ReactApexChart', ... 에러뜨신분은
    bria 님이 언급해 주셧는데 조금더 첨언할께요
    series data [] 가 받아야 하는 건 number 인데 저희는 data?.map() 으로 읽어올때랑 아닐때를 구분해서 받아야 하는데 읽어오면 number 이지만 못읽어오면 undefind 가 되서 문제가 되는거예요.
    그래서 저 형식이 number 로 강제해주면 해결되는 문제입니다.

    강제해주는 방법은 bria 님이 언급하신 널 병합 연산자(??) 를 사용하는 방법도 있지만. 이해가 안가시죠?.. 저도 그랬어요 -0-;;;
    코드를 보고 이해가 안가면 찜찜하잖아요?
    as 를 이용하셔도 됩니다. 저 데이터는 number 배열이다! 라고강제 하는겁니다..

    data?.map((price) => price.close) as number[]
    */}

      <div>
        {isLoading ? (
          "1"
        ) : (
          <ApexCharts
            type="line"
            series={[
              {
                name: "Close",
                data: data?.map((price) => Number(price.close)) as number[],
              },
              {
                name: "Open",
                data: data?.map((price) => Number(price.open)) as number[],
              },
            ]}
            options={{
              theme: { mode: `${isDark ? "dark" : "light"}` },
              chart: {
                height: 500,
                width: 500,
              },
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
              xaxis: {
                categories: data?.map((x) =>
                  new Date(x.time_close).toLocaleDateString()
                ),
              },
            }}
          />
        )}
      </div>
    </>
  );
}
export default Chart;
