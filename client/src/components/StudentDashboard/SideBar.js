import SideBarElement from "./SideBarElement";

function SideBar() {
    return (
      <div className="w-56 bg-blue-500 h-[calc(100vh-6rem)] flex flex-col content-center justify-around ">     
          <SideBarElement>Dashboard</SideBarElement>
          <SideBarElement>All Companies</SideBarElement>
          <SideBarElement>My Profile</SideBarElement>
          <SideBarElement>My Profile</SideBarElement>
      </div>
    );
  }
  
  export default SideBar;
  