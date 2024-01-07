import { useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
interface IUser {
  nameOfMyUser: string;
  testNumber: number;
}
function User() {
  const { userId } = useParams();
  const { pageData } = useState<IUser>({
    nameOfMyUser: "NAME",
    testNumber: 100,
  });

  console.log("pageData", pageData);
  // const pageData = () => {
  //   return {

  //   };
  // };

  return (
    <div>
      <h3>User: {userId}</h3>
      <Outlet context={pageData} />
    </div>
  );
}

export default User;
