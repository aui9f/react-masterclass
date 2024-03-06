import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const Page = styled.div`
  height: 150vh;
  >div{
    margin-top: 65px;
  }
`
export default function Nomfilx(){

  return <div>
    <Header/>
    <Page><Outlet/></Page>
  </div>
}