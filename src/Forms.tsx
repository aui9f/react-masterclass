import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    background-color: ${(props)=>props.theme.bgColor};
`

function Forms () {
    const [value, setValue] = useState('');
    
    const onChange = (event: React.FormEvent<HTMLInputElement>) =>{
        setValue(event.currentTarget.value);
    }

    const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('ID: ', value)
    }
    
    return <Container>
        <form onSubmit={onsubmit}> 
            <input type="text" value={value} placeholder="ID" onChange={onChange}/>
            <input type="submit" value="Log in" />
        </form>
    </Container>
}
export default Forms;