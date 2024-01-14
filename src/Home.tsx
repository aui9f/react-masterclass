import { useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  input, button{
    margin-bottom: 8px;
    padding: 8px;
  }
`
interface IFormInput {
  todo: string
  deadline: number
  email?: string
  extraErr?: string
}

function Home() {
    const {register, watch, formState: {errors}, setError, handleSubmit} = useForm<IFormInput>({
      defaultValues: {
        email: '@naver.com'
      }
    });
    // handleSubmit--validation 담당
    const onValid = (data: IFormInput) =>{
      
      console.log(data)
      //비밀번호가 있다면
      /**
       * if(data.pw !== data.pw2){
       *  setError('pw', {message: '비밀번호가 다릅니다'},  { shouldFocus: true })
       * }
       */
      setError('extraErr', {
        message: 'Server offline (Error)',

      })
    }
    console.log("errors", errors)
    
  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...register('todo', {required: '필수입력사항입니다.', minLength: {
              value: 5,
              message: "Your password is too short.",
            },
            })} placeholder="TODO" />
        <p>{errors?.email?.message}</p>
        
        
        {/* 
          validate는 하나의 함수 또는 여러 함수가 있는 객체가 될수 있음 
          하나의 함수 --- validate: (value) => (value>10) ? '10보다 크면 안됩니다.': true

        */}


        <input type="number" {...register('deadline', {
              validate: {
               maxNum:  (value) => (value>10) ? '10보다 크면 안됩니다.': true,
               minNum: (value ) => value<3 ? '3보다 작으면 안됩니다.': true,
              }
            }
          )} 
          placeholder="Deadline" />

        <p>{errors?.deadline?.message}</p>

        <input {...register('email', {pattern: {
          value: /^[A-Za-z0-9._%+-]+@naver.com$/,
          message: 'only Naver Email'
        }})} />
        <p>{errors?.email?.message}</p>

        {/* {...register('todo')} --> register함수가 반환하는 객체를 가져다가 input에 props로 전달 */}
        <button type="submit">ADD</button>
        <p>{errors?.extraErr?.message}</p>
      </Form>
      {/* <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange}/>
        <button>Add</button>
      </form> */}
    </div>
  );
}
export default Home;
