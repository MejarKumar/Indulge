import { Outlet } from "react-router-dom";
import NavBar from "../components/StudentDashboard/NavBar";
import SideBar from "../components/StudentDashboard/SideBar";
function StudentDashboard() {
  return (
    <div >
        <div className="w-full flex flex-row">
        <NavBar/>
        </div>
        <div className="flex">
          <SideBar/>
          <Outlet/>
          
 
        </div>
    </div>
  );
}

export default StudentDashboard;
