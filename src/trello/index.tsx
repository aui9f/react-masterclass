import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TrelloAtom } from "../core/trello";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;

  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  background-color: lightgray;
  padding: 12px;
`;
//${(props) => props.theme.boardColor};
const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;

  border-radius: 5px;
  min-height: 200px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
function TrelloIndex() {
  const [trellos, setTrello] = useRecoilState(TrelloAtom);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    // source 움직이는 기준
    // destination 가야할곳
    setTrello((oldTodo) => {
      const toDosCopy = [...oldTodo];

      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index || 0, 0, draggableId);
      console.log("toDosCopy", toDosCopy);
      return [...toDosCopy];
    });
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Title>Board</Title>
            <Droppable droppableId="partA">
              {(providedPart) => (
                <Board
                  ref={providedPart.innerRef}
                  {...providedPart.droppableProps}
                >
                  {trellos.map((todo, index) => (
                    <DraggableCard key={index} {...{ todo, index }} />
                  ))}
                  {/* <Draggable draggableId="cardA" index={0}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <span {...provided.dragHandleProps}>💎</span>A Card
                      </Card>
                    )}
                  </Draggable>

                  <Draggable draggableId="cardB" index={1}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        B Card
                      </Card>
                    )}
                  </Draggable>

                  <Draggable draggableId="cardC" index={2}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        C Card
                      </Card>
                    )}
                  </Draggable> */}
                  {providedPart.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </div>
  );
}

export default TrelloIndex;
