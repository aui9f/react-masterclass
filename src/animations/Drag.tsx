import { motion } from "framer-motion";
import styled from "styled-components"

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
  return <Box drag variants={boxVariants} whileDrag="drag"/>
  // drag="x" -- x축으로만 움직인다.  [x, y]
}
export default Drag