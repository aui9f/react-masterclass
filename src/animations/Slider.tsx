import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  isplay: flex;
  flex-direction: column;
`
const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 160px;
  position: relative;
`;

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 1);
  top: 100px;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const vBox = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: (isBack:boolean) => ({
      x: isBack ? 300 : -300,
      opacity: 0,
      scale: 0,
      transition: { duration: 1 }
    }),
}

function Slider(){
  const [selected, setSelected] = useState(1);
  const [isBack, setIsBack] = useState(false);
  
  const onNext = async() => {
    await setIsBack(false);
    
    setSelected(prev => (prev === 10 ? 10 : prev + 1));
  }

  const onPrev = async() => {
    await setIsBack(true);
    setSelected(prev => (prev === 1 ? 1 : prev - 1));
  }


  return <Container>
  <Wrapper>
    <AnimatePresence custom={isBack}>
    <Box  variants={vBox} 
      initial="entry" 
      animate="center" 
      exit="exit"
       key={selected}>{selected}</Box>
    </AnimatePresence>


  </Wrapper>
      
      <button onClick={onPrev}>이전(isBack: {isBack?'TRUE':'FALSE'})</button>
      <button onClick={onNext}>다음</button>
  </Container>
}

export default Slider


/**
 * Custom Property==
 * exitBeforeEnter(지원하지않음)-> mode="wait" -- exit가 완료된 이후 실행
 */