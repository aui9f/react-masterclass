import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components';
import DraggableCard from "./DraggableCard";


interface IAreaProps {
  isFromThis: boolean// isDraggingFromThis: boolean;
  isOver: boolean// isDraggingOver: boolean;
}
//background-color: ${(props) => props.theme.boardColor};
const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: lightgray;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
  background-color: gray;
  flex-grow: 1;
  background-color: ${(props) => props.isOver?'red':props.isFromThis?'pink':'lightgray'};
  
`

interface IBoardProps{
  boradId: string;
  trellos: string[]
}
function Board({ boradId, trellos}: IBoardProps){
  return <Wrapper>
  <Title>{boradId}</Title>
  <Droppable droppableId={boradId}>

  {/* ref -- (레퍼런스) HTML요소를 지정하고 가져올수 있는 방법 */}
    {(providedPart, snapshot) => (
        <Area
          isOver={snapshot.isDraggingOver}
          isFromThis={Boolean(snapshot.draggingFromThisWith)}
          ref={providedPart.innerRef}
          {...providedPart.droppableProps}
          
        >
          
          {trellos.map((todo, index) => (
            <DraggableCard key={index} {...{ todo, index }} />
          ))}
          {providedPart.placeholder}
        </Area>
      )}
    </Droppable> 
  
    </Wrapper>
}
export default Board;