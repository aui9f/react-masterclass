import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const ModalWindow = styled(motion.div)`

  background-color: #FFFFFF;
  width: 400px;
  height: 400px;
`

const vModal = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    // rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
}
function Modal(){
  const [isShow, setIsShow] = useState(false);
  const onClick=()=>setIsShow((temp)=>!temp)
  return <div>
    <button onClick={onClick}>CLICK..</button>

    <AnimatePresence>
      {isShow?
        <ModalWindow variants={vModal} initial="initial"
        animate="visible"
        exit="leaving"
        >
          <ModalWindow><p>??</p></ModalWindow>
        </ModalWindow>
      :null}
    </AnimatePresence>
    
  </div>
}

export default Modal;