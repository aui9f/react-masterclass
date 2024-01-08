import { useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
interface IUser {
  nameOfMyUser: string;
  testNumber?: number;
}
interface ITest{
  test: number
}
function User() {
  const test = useLoaderData();
  console.log('>>test>>', test);
  const { userId } = useParams();
  const [pageData, setPageData] = useState<IUser>(
    {nameOfMyUser: "NAME",}
  );


  
  // const pageData ={
  //   // return {
  //     nameOfMyUser: "NAME",
  //     testNumber: 100,
  //   // };
  // };

  return (
    <div>
      <h3>User: {userId}</h3>
      <Outlet context={{pageData}} />
    </div>
  );
}

export default User;
