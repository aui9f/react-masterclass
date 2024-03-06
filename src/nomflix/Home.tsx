import styled from "styled-components";
import { getMovies } from "../api/MovieApi";
import { useQuery } from "react-query";
import { makeIamgePath } from "../utils/images";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



const Wrapper = styled.div`
  background: black;
  overflow-x: hidden;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px; ;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};


export default function Home(){
  const {data, isLoading} = useQuery(['movie', 'getMoviesList'], getMovies);

  // index가 있어야 다음 슬라이더로 이동 
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const togleLeaving = () => setLeaving(prev=>prev=!prev);

  const incraseIndex = () => {
    if(leaving) return;
    togleLeaving();
    setIndex((prev)=>prev+1);
  };

  //
  

  return <div>
    {isLoading?
      <Loader>Loading..</Loader>:
      <Wrapper>
        <Banner onClick={incraseIndex}
        bgPhoto={makeIamgePath(data?.results[1].poster_path||'')}>
          <Title>{data.results[1].title}</Title>
          <Overview>{data.results[1].overview}</Overview>
        </Banner>

        <Slider>
            <AnimatePresence initial={false} onExitComplete={togleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i}>{i}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>


      </Wrapper>}
  </div>
}