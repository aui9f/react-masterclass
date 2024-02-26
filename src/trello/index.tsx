import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TrelloAtom } from "../core/trello";
import Board from "./Board";


const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

interface IboardData{
  droppableId: string
  index: number
}

function TrelloIndex() {
  const [trellos, setTrello] = useRecoilState(TrelloAtom);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if(!destination) return;

    //같은 보드에서 움직였을 경우
    if(source.droppableId === destination.droppableId){
      
      setTrello(board=>{
        const copyData = [...board[source.droppableId]];
        copyData.splice(source.index, 1);
        copyData.splice(destination?.index || 0, 0, draggableId);
        return {...board, [source.droppableId]: copyData,}
      })
    }else{
      const changeBoard = [];
      setTrello(allBoard=>{
        const sourceBoard = [...allBoard[source.droppableId]];
        sourceBoard.splice(source.index,1);
        const destinationBoard = [...allBoard[destination.droppableId]];
        
        destinationBoard.splice(destination.index, 0, draggableId);
        console.log(destinationBoard)

        return {...allBoard, [source.droppableId]: sourceBoard, [destination.droppableId]:destinationBoard}
      })

    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
        
        <Boards>
          {Object.keys(trellos).map(boardId=>
            <Board key={boardId} boradId={boardId} trellos={trellos[boardId]} />
            // trellos={trellos[boardId]}
          )} 
      </Boards>
          
        </Wrapper>
      </DragDropContext>
    </div>
  );
}

export default TrelloIndex;
