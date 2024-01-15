
import { useRecoilValue } from "recoil";
import CreateToDo from "./todo/CreateToDo";
import {toDoState} from './todo/atoms'
import Todo from "./todo/Todo";


function Home() {
  const toDos = useRecoilValue(toDoState);
  
  return (
    <div>
      <p>T O D O L S I T</p>
      <hr />
      <CreateToDo/>
      <ul>

        {toDos.map(x=><Todo key={x.id} {...x}/>)}
        
      </ul>
      
    </div> 
  )
  
}
export default Home;
