import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todosAtom } from "../core/atom";
import { useForm } from "react-hook-form";

const Container = styled.div`
    padding: 8px;
`
const Form = styled.form`
    padding: 8px;
    border: 1px solid #ABABAB;
    border-radius: 8px;
    >div{
        display: flex;
        justify-content: flex-end;
    }
`;
const Input = styled.input`
    border: 0;
    height: 48px;
    width: 100%;
    border: 1px solid #E8E9EC;
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 4px;
`;
const Button = styled.button`
    background-color: #2C7083;
    border: 1px solid #2C7083;
    color: #FFFFFF;
    border-radius: 4px;
    height: 32px;
    padding: 0 16px;
`;
const Icon = styled.div`
    margin-left: 4px;
    width: 32px;
    height: 32px;
    background-color: #2C7083;
    border: 1px solid #2C7083;
    border-radius: 4px;
`;

interface IText{
    value: string;
}
function CreateToDo(){

    const setTodo = useSetRecoilState(todosAtom);
    const {register, handleSubmit, setValue} = useForm<IText>();

    const onSubmit = ({value}: IText) => {
        setTodo((oldTodo)=>[{id: Date.now(), text: value, category: 'TO_DO', updateAt: Date.now()}, ...oldTodo])
        setValue('value', '')
    }

    return <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('value', {required: '필수입력사항입니다.'})}placeholder="Enter a Todo form this card"/>
            <div>
                <Button>Add Todo</Button>
                <Icon></Icon>
            </div>
        </Form>
    </Container>
}
export default CreateToDo;