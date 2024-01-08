import { useOutletContext } from "react-router-dom";
interface IpageData {
  nameOfMyUser: string;
  testNumber: number;
}
interface IFollowers {
  pageData: IpageData;
}
function Followers() {
  const { pageData } = useOutletContext<IFollowers>();
  console.log("pageData >>>", pageData);
  

  return <>followers:</>;
}

export default Followers;
