import { motion } from "framer-motion";
import styled from "styled-components"

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: rgba(222,222,222,.2);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
width: 32px;
height: 32px;
border-radius: 100%;
background-color: #FFFFFF;
place-self: center;
`

const boxVariants = {
  start: {
    scale: 0,
    opacity: 0,
    
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring', bounce: 20, damping: 20,
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}
const CircleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
}
function Variants(){
  return <Box variants={boxVariants} initial="start" animate="end">
    <Circle variants={CircleVariants}/>
    <Circle variants={CircleVariants}/>
    <Circle variants={CircleVariants}/>
    <Circle variants={CircleVariants}/>

    </Box>
}
export default Variants