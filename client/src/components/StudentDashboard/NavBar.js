import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    return (
      <div className="w-full  h-24 flex relative ">     
          <Logo/>
          <FontAwesomeIcon  icon={faUser} className="peer text-3xl absolute right-5 top-1/2 -translate-y-1/2"/>
          <ul className="hidden hover:flex peer-focus:flex peer-hover:flex flex-col bg-gray-300 text-center rounded-sm py-3 px-6  absolute right-8 top-[4rem]">
              <li className="border-b-2 border-black"><a href="/#">Profile</a></li>
              <li><a href="/#">LogOut</a></li>
          </ul>
      </div>
    );
  }
  
  export default NavBar;
  