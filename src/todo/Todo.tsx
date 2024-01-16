import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "./atoms";

function Todo({id, text, category}:ITodo){
    const setCategory = useSetRecoilState(toDoState);

    const onClick = (id:ITodo['id'], btnCategory:ITodo['category'])=>{
        setCategory(oldList => {
            // const checkedIndex = oldList.findIndex(x=>x.id===id);
            
            // oldList[checkedIndex] = {id, text, category: btnCategory};
            return oldList.map(x=>{
                if(x.id === id){
                    x =  {id, text, category: btnCategory};;
                }
                return x;
            })
        })
        
    }
    return (
        <li>
            <p>{text}</p>
            {/* 새익명함수를 선언해서 인자를 넘겨준다. */}
            {category !== Categories.TODO && <button onClick={()=>onClick(id, Categories.TODO)}>TODO</button>}
            {category !== Categories.DOING && <button onClick={()=>onClick(id, Categories.DOING)}>DOING</button>} 
            {category !== Categories.DONE && <button onClick={()=>onClick(id, Categories.DONE)}>DONE</button>} 
        </li>

        /**
         * const onClick=(event: React.MouseEvent<HTMLBUttonElement>)=>{
         *  event.currentTarget.name
         * }
         * <button name="DONE" onClick={onClick}>DONE</button>
         */
        
    )
}

export default Todo;