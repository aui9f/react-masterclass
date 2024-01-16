import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {ITodo, categoryState, toDoState} from './atoms'
interface IForm {
    value: string
}

function CreateToDo(){
    const setTodos = useSetRecoilState<ITodo[]>(toDoState);
    const category = useRecoilValue(categoryState);

    const {register, handleSubmit, setValue} = useForm<IForm>();
    
    const handleValid = ({value}:IForm)=>{
        setTodos(oldTodo=>[{id: Date.now(), text: value, category},...oldTodo]);
        setValue('value', '');
    }

    return<form onSubmit={handleSubmit(handleValid)}>
        <input {...register('value', {required: '필수입력사항입니다.'})} placeholder="해야할일"/>
        <button type="submit">ADD</button>
    </form>
}
export default CreateToDo;