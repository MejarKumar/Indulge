import { NavLink } from "react-router-dom";
import SideBarElement from "./SideBarElement";

function SideBar() {
    return (
      <div className="w-56 bg-blue-500 h-[calc(100vh-6rem)] flex flex-col  "> 
      <div className="flex flex-col  h-full">    
          <SideBarElement><NavLink to="/studentdashboard">Dashboard</NavLink></SideBarElement>
          <SideBarElement><NavLink to='/studentdashboard/allCompanies'>All Companies</NavLink></SideBarElement>
          <SideBarElement><NavLink to='/studentdashboard/profile'>My Profile</NavLink></SideBarElement>
      </div>
      </div>
    );
  }
  
  export default SideBar;
  