import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const todoState = atom<ITodo[]>({
  key: 'value',
  default: []
})


interface IForm {
  toDo: string;
}
interface ITodo{
  id: number;
  value: string;
  category: 'TODO' | 'DOING' | 'DONE'
}

function Home() {
  const [toDo, setTodo] = useRecoilState(todoState)
  // const todoList = useRecoilValue(todoState);
  // const modfn = useSetRecoilState(todoState);

  const {register, handleSubmit, formState: {errors}} = useForm<IForm>();

  const onSubmit=({toDo}: IForm)=>{
    // setTodo((oldTodo) => [{id: 1, todo, category: 'TODO'}, ...oldTodo])
    setTodo((oldTodo)=>[{id: 1, value: toDo, category: 'TODO'}, ...oldTodo])

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('toDo', {required: '필수입력사항', minLength: {value: 5, message:'5자보다 많이'}})} placeholder="write a to do" />
        <p>{errors?.toDo?.message}</p>
        <button>Add</button>
      </form>
      
    </div> 
  )
  
}
export default Home;
