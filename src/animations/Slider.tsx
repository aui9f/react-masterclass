import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 1
    }
  }
}

function Slider(){
  const [selected, setSelected] = useState(1);
  const onNext = () => setSelected(prev=>prev===10 ? 10 : prev+1);
  const onPrev = () => {setSelected(prev=>prev===1 ? 1 : prev-1);}
  return <>
  <Wrapper>
    <AnimatePresence>
      {[1,2,3,4,5,6,7,8,9,10].map(x=>(
        selected===x?<Box variants={vBox} initial="invisible" animate="visible" exit="exit" key={x}>{x}</Box>:null
      ))}
    </AnimatePresence>


  </Wrapper>
      
      <button onClick={onPrev}>이전</button>
      <button onClick={onNext}>다음</button>
  </>
}

export default Slider