import { ITodo } from "./atoms";

function Todo({text, category}:ITodo){
    const onClick = (btnCategory:ITodo['category'])=>{
        console.log(btnCategory);

    }
    return (
        <li>
            <p>{text}</p>
            {category !== 'DOING' && <button onClick={()=>onClick('DOING')}>Doing</button>}
            {category !== 'TODO' && <button onClick={()=>onClick('TODO')}>To Do</button>}
            {category !== 'DONE' && <button onClick={()=>onClick('DONE')}>Done</button>}
        </li>
        
    )
}

export default Todo;