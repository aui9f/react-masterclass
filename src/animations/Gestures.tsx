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
  hover: {
    scale: 1.5, rotate: 90
  },
  click: {
    borderRadius: '100px', scale: 1
  }
}

function Gestures(){
  // return <Box whileHover={{scale: 1.5, rotate: 90}} whileTap={{borderRadius: '100px', scale: 1}}/>
  return <Box variants={boxVariants} whileHover="hover" whileTap="click"/>
  // ex) whileHover="hover" => whileHover={조건문?'hover': 'click'} 
}
export default Gestures