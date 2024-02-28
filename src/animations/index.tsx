
import styled from "styled-components";
import Animation from "./Animation";
import Variants from "./Variants";
import Drag from "./Drag";
import Gestures from "./Gestures";
import StudyMotionsValue from "./StudyMotionsValue";
import SvgPath from "./SvgPath";
import Modal from "./Modal";
import Slider from "./Slider";
//https://studiomeal.com/archives/533
const SliderWrapper=styled.div`
  width: 100vw;
  height: 300px;
  background-color: rgba(222,222,222,1);
  padding: 12px;

`
const Wrapper = styled.div`
  height: 300px;
  width: 300px;;
`;
const Container = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
`;
const Items = styled.div`
border: 1px solid gray;
  padding: 12px;
`;

function Animations(){
  
  return  <div>
    <SliderWrapper>
    <p>슬라이더</p>
    <Slider/>
    </SliderWrapper>

    <Wrapper>
      <p>기본</p>
    <Container>
      
      <Items><Animation/></Items>

      <Items><Variants/></Items>
      
      <Items><Gestures/></Items>
      
      <Items><Drag/></Items>
      <Items><SvgPath/></Items>
      </Container>
  </Wrapper>
  <hr />
  <div>
    <p>모달</p>
    <Modal/>
  </div>
  <hr />
  <div>
  <p>스크롤하면 안에 있는 div 변경</p>
    <StudyMotionsValue/>
  </div>
  <hr />
  </div>
}

export default Animations