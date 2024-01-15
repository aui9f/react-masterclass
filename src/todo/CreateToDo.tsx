import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import {ITodo, toDoState} from './atoms'
interface IForm {
    value: string
}

function CreateToDo(){
    const setTodos = useSetRecoilState<ITodo[]>(toDoState);

    const {register, handleSubmit, setValue} = useForm<IForm>();
    
    const handleValid = ({value}:IForm)=>{
        setTodos(oldTodo=>[{id: Date.now(), text: value, category: 'TODO'},...oldTodo]);
        setValue('value', '');
    }

    return<form onSubmit={handleSubmit(handleValid)}>
        <input {...register('value', {required: '필수입력사항입니다.', minLength: {
            value: 5, message: '5글자 이상 입력'
        }})} placeholder="해야할일"/>
        <button type="submit">ADD</button>
    </form>
}
export default CreateToDo;