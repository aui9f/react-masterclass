import styled from "styled-components"
import Todo from "./Todo"
import CreateToDo from "./CreateToDo"
import { useRecoilState, useRecoilValue } from "recoil"
import { Categories, categoryState, selectedList } from "../core/atom"
import { ReactElement } from "react"


const Container = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
`
const List = styled.ul`
  flex: 1;
  padding: 8px;
  overflow: auto;
`
const AddButton = styled.div``
const Header = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.32);
  background-color: rgba(222,222,222,.3);
  margin-bottom: 8px;
`
const Title = styled.h1`
  font-family: 'establishRoomNo703OTF';
  flex: 1;
  // font-weight: bold;
`
const Filter = styled.div`
  display: flex;
`;
const Icon = styled.div`
  background-color: ${props=>props.color};
  margin-right: 4px;
  padding: 8px;
  border-radius: 4px;
  opacity: 0.2;
  cursor: pointer;
  &.active{
    opacity: 1;
  }
  &:hover{
    opacity: .8;
  }
  p{
    color: #FFFFFF;
    font-size: 75%;
  }
`;
function TodoList(){

  const getTodo = useRecoilValue(selectedList);
  
  const [getCategorys, setCategorys] = useRecoilState(categoryState)
  
  const changeCategory = (category: Categories) => {
    setCategorys(category)
  }

  return <Container>
    <Header>
      <Title>해 야 할 일</Title>
      <Filter>
      <Icon color="#444444" 
        onClick={()=>{changeCategory(Categories.ALL)}}
        className={getCategorys===Categories.ALL ?'active':''}
      ><p>ALL</p></Icon>
      <Icon color="#c0392b" 
        className={getCategorys===Categories.TO_DO ?'active':''}
        onClick={()=>{changeCategory(Categories.TO_DO)}}><p>TODO</p></Icon>
      <Icon color="#e67e22" 
        className={getCategorys===Categories.DOING ?'active':''}
        onClick={()=>{changeCategory(Categories.DOING)}}><p>DOING</p></Icon>
      <Icon color="#27ae60" 
        className={getCategorys===Categories.DONE ?'active':''}
        onClick={()=>{changeCategory(Categories.DONE)}}><p>DONE</p></Icon>
      </Filter>
    </Header>
    <List>
      {getTodo.map(todo=><Todo key={todo.id} {...todo}></Todo>)}
    </List>
    <AddButton></AddButton>
    <CreateToDo/>
  </Container>
}

export default TodoList