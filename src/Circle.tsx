import { useState } from "react";
import styled from "styled-components"

const Container = styled.div<CircleStyleProps>`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 8px solid ${(props)=>props.borderColor};
`;


interface CircleStyleProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor:vColor, borderColor }: CircleProps) {
const [value, setValue] = useState<number>(1)
  return <Container bgColor={vColor} borderColor={borderColor || 'pink'}/>;
}

export default Circle