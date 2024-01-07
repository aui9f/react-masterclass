import { useOutletContext } from "react-router-dom";
interface IpageData {
  nameOfMyUser: string;
  testNumber: number;
}
interface IFollowers {
  pageData: IpageData;
}
function Followers() {
  const { nameOfMyUser } = useOutletContext<IpageData>();
  console.log("nameOfMyUser >>>", nameOfMyUser);
  // console.log("testNumber >>>", testNumber);

  return <>followers:</>;
}

export default Followers;
