
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./todo/CreateToDo";
import {ITodo, toDoState, todoSelector, categoryState, categorySelector, Categories} from './todo/atoms'
import Todo from "./todo/Todo";


function Home() {
  const toDos = useRecoilValue(toDoState);
  const [todo, doing, done] = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState)
  const selectCategoryList = useRecoilValue(categorySelector);
  console.log("selectCategoryList", selectCategoryList)
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const selected = event.currentTarget.value as any; // 확인후변경
    console.log("selected", selected)
    setCategory(selected);
  }
  
  return (
    <div>
      <p>T O D O L S I T</p>
      <hr />
      <CreateToDo/>

      <select value={category} onChange={onChange}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>

      <ul>
        {selectCategoryList?.map(x=><Todo key={x.id} {...x}/>)}
      </ul>
      <hr />

      <p>TODO: {todo.length}</p>
      <p>DOING: {doing.length}</p>
      <p>DONE: {done.length}</p>
      
    </div> 
  )
  
}
export default Home;
