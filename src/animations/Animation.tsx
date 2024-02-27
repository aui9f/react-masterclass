import { motion } from "framer-motion";
import styled from "styled-components"

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {scale:0},
  end: {
    scale: 1, 
    rotate: 180,
    transition: {
      type: 'spring', bounce: 20, damping: 20
    }
  }
}

function Animation(){


  return <><Box variants={myVars} initial="start" animate="end" /></>
}
export default Animation