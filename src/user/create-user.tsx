import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 16px;
  font-weight: bold;
  color: #5D5D5D;
`
const Form = styled.form`
  width: 320px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.32); 
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  margin-bottom: 8px;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  background-color: #2C7083;
  color: #FFFFFF;
`

const Err = styled.p`
  font-size: 80%;
  margin-bottom: 16px;
  color: red;
  font-style: italic;
`
/**
 * react-hook-form
 * 유효성검사 : required(email)
 * 
 */

interface IForm{
  email: string
  username?: string
  pw: string
  pw2: string
  extraError?: string
}

function CreateUser(){

  const {register, watch, handleSubmit, formState: {errors}, setError} = useForm<IForm>();
  const onValid = ({email, username, pw, pw2}: IForm) => {
    if(pw!==pw2){
      setError('pw', {message: '비밀번호가 다릅니다.'});
    }
    setError("extraError", { message: "Server offline." });
    //TODO
  }

  return (<Container>
    <Form onSubmit={handleSubmit(onValid)}>
      <Title>LOGIN</Title>
      <Input type="text" {...register('email', {
        required: '이메일을 입력해주세요.',
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@google.com$/,
          message: '이메일은 구글(@google)만 가능합니다.'
        }
      })} placeholder="Email" />

      {errors?.email?.message ? <Err>{errors.email.message}</Err>:null}

      <Input type="text" {...register('username', {
        validate: {
          zzz: (value)=>value?.includes('zzz')?'No [zzz]..':true,
          aaa: (value)=>value?.includes('aaa')?'No [aaa]..':true,
        }
      })} placeholder="User Name" />
      {errors?.username?.message ? <Err>{errors.username.message}</Err>:null}

      <Input type="password" {...register('pw', {
        required: '비밀번호를 입력해주세요.',
        minLength: {
          value: 6,
          message: '6글자 이상으로 입력해주세요.'
        }
      })} placeholder="Password" />
      {errors?.pw?.message ? <Err>{errors.pw.message}</Err>:null}
      <Input type="Password" {...register('pw2')} placeholder="Password Check" />
    <Button>Login</Button>
    </Form>
  </Container>)
}
export default CreateUser;