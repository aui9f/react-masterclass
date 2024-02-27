
import styled from "styled-components";
import Animation from "./Animation";
import Variants from "./Variants";
import Drag from "./Drag";
import Gestures from "./Gestures";
//https://studiomeal.com/archives/533
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;


`;
const Container = styled.div`
width: 60%;
height: 30%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
`;
const Items = styled.div`
border: 1px solid gray;
  padding: 12px;
`;

function Animations(){
  
  return  <Wrapper>
    <Container>
      
      <Items><Animation/></Items>

      <Items><Variants/></Items>
      
      <Items><Gestures/></Items>
      
      <Items><Drag/></Items>
      </Container>
  </Wrapper>
}

export default Animations