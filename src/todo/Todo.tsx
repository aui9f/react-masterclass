import styled from "styled-components";

import { Categories, ITodo, todosAtom } from "../core/atom";
import { useRecoilState, useSetRecoilState } from "recoil";
const Li = styled.li`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.32);
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #E8E9EC;
    &:last-child{
        margin-bottom: 0;
    }
`;
const Header = styled.div`
    margin-bottom: 8px;
    display: flex;
    font-size: 75%;
    align-items: center;
`;

const HeaderText = styled.p`
    flex: 1;
    color:  ${({color}) => {
        let result='#c0392b';
        switch (color) {
            case 'DOING': result='#e67e22'; break;
            case 'DONE': result='#27ae60'; break;
        }
        return result;
    }};
`

const SelectBox = styled.select`
    width: 88px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid #E8E9EC;
`;
const Status = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    margin-right: 4px;
    background-color: ${({color}) => {
        let result='#c0392b';
        switch (color) {
            case 'DOING': result='#e67e22'; break;
            case 'DONE': result='#27ae60'; break;
        }
        return result;
    }}
`

function Todo({id, text, category, updateAt}:ITodo){
    const setToDos = useSetRecoilState<ITodo[]>(todosAtom);
    
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {
            currentTarget: {value}
        } = event;
        
        setToDos((oldTodo)=>{
            const selectedIndex = oldTodo.findIndex(todo=>todo.id===id)

            return [
                ...oldTodo.slice(0, selectedIndex), 
                {id, text, category: value as Categories, updateAt: Date.now()}, 
                ...oldTodo.slice(selectedIndex+1)
            ];
        })
        
        console.log(id, value)
    }
    return <Li>
        <Header>
            <Status color={category}></Status>
            <HeaderText color={category}>{category.replace(/_/gi, ' ')}</HeaderText>
            <SelectBox onChange={onChange}>
                <option value="TO_DO">TO DO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </SelectBox>
        </Header>
        <p>{text}</p>
    </Li>
}
export default Todo;