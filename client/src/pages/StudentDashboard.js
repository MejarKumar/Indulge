import NavBar from "../components/StudentDashboard/NavBar";
import SideBar from "../components/StudentDashboard/SideBar";

function StudentDashboard() {
  return (
    <div >
        <div className="w-full flex flex-row">
        <NavBar/>
        </div>
        <SideBar/>
    </div>
  );
}

export default StudentDashboard;
