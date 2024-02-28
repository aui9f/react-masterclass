import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const BiggerBox =  styled(motion.div)`
  width: 100%;
  height: 200vh;
  border: 1px solid gray;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function StudyMotionsValue(){
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  const  x= useMotionValue(0);
  // useMotionValue는 state로 관리하지 않음 
  // 변경되었다고해서 렌더를 하지 않음

  const scale = useTransform(x, [-800,800],[2,0])
  const rotateZ = useTransform(x, [-800,800],[-360, 360])
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const {scrollYProgress} = useScroll();
  const scale2 = useTransform(scrollYProgress,[0,1],[1,3])

  useEffect(()=>{
    // x.on(('change')=>console.log(x.get()))
    x.on('change',()=>{
      // console.log(x.get())
    })
  }, [x]);

  return <BiggerBox ref={biggerBoxRef} style={{ background: gradient }}>
      <Box style={{x, rotateZ, scale: scale2}} dragSnapToOrigin  drag="x" />
    </BiggerBox>
}

export default StudyMotionsValue;