import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components"

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const BiggerBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants ={
  drag: {
    backgroundColor: 'rgb(255,0,0)',
    //red 는 string이라 바로 색이 변화하지만,  rgb(255,0,0) 는 서서히 바뀜
    borderRadius: '100%',
    scale: .6,
    transition: {
      duration: 10
    }
  }
}
function Drag(){
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  
  return <BiggerBox ref={biggerBoxRef}>
    <Box drag dragConstraints={biggerBoxRef} variants={boxVariants} whileDrag="drag"/>
    {/* dragElastic={0.5} - 숫자가 1일 수록 Box위에 마우스가 동일하게 움직임*/}
    {/* dragSnapToOrigin -- 가운데정렬
     */}
  </BiggerBox>
  // drag="x" -- x축으로만 움직인다.  [x, y]
}
export default Drag