import React from "react";
import { Draggable } from "react-beautiful-dnd";

import styled from "styled-components";

//${(props) => props.theme.cardColor};
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: #ffffff;
`;

interface IDraggableProps {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableProps) {
  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(provided) => (
        <Card ref={provided.innerRef} {...provided.draggableProps}>
          <span {...provided.dragHandleProps}>💎 </span>
          {todo} Card
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraggableCard);
//React.memo -- prop가 변하지 않는다면 리렌더링 하지말라
