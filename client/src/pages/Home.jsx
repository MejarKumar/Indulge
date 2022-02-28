import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowDown,
  faCopyright,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import HeaderMenu from "../components/home/HeaderMenu";
export default function Home() {
  return (
    <>
      <div className="flex flex-row w-12/12">
        <div className="flex flex-row w-6/12 container p-6">
          <div className="bg-black w-3/12 px-5 mx-4">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col container items-start">
            <h2 className="font-bold text-blue-900 text-3xl ">
              Career Development Centre
            </h2>
            <p className="font-semibold">Indian Institute of Technology</p>
            <p className="font-semibold">(Indian School of Mines) Dhanbad </p>
          </div>
        </div>

        <div className="flex flex-row w-6/12 container p-6">
          <div className="bg-black w-3000000/12 px-5 mx-4">
            <img src="" alt="" />
          </div>
          <div className="flex w-6/12 items-start ">
            <p className="font-semibold ">
              Police Line Road , Main Campus IIT(ISM) near Rani Bandh, Hirapur,
              Sardar Patel Nagar, Dhanbad, Jharkhand, 826004
            </p>
          </div>
        </div>
      </div>


    <HeaderMenu />





      <div className=" flex flex-col  w-screen bg-black h-auto">
        <div>
          <h1 className="px-2 mt-48 text-4xl text-white">
            Placement Season 2021-2022 at Glance{" "}
          </h1>
        </div>
        <div className="flex flex-wrap items-end p-3 justify-center w-12/12 h-[100%]">
          <div className="w-56 h-28 rounded-lg bg-white m-3"></div>
          <div className="w-56 h-28 rounded-lg bg-white m-3"></div>
          <div className="w-56 h-28 rounded-lg bg-white m-3"></div>
          <div className="w-56 h-28 rounded-lg bg-white m-3"></div>
        </div>
      </div>

      <div className="container p-2 flex justify-center items-center  ">
        <p className="border-2 rounded-lg bg-red-600 text-slate-100 p-2 ">
          Download Placement Brochure{" "}
          <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleDown} />
        </p>
      </div>

      <div className="container px-32  flex flex-row justify-around   ">
        <div className="container mx-2 border-2  rounded-lg  bg-blue-900">
          <div className="container pl-16 py-4">
            <h2 className="border-l-4 border-red-600 text-white font-semibold px-5 text-xl ">
              Message from Director
            </h2>
          </div>
          <div className="container flex flex-row">
            <div className="container flex items-center justify-center">
              <img
                className="w-3/5 "
                src="https://th.bing.com/th/id/OIP.YicYNho-iBJZORWl7BVG1gHaJh?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className="container text-white text-left px-4 my-4">
              <p className="font-semibold my-2">Prof. Rajiv Shekhar</p>
              <p className="font-light">
                <span>Dear Recruiter(s)</span> <br />
                It gives me immense pleasure to take this opportunity to invite
                you to the program at Indian Institute of Technology(Indian
                School of Mines), Dhanbad The time has come again for us to
                exhibit our best minds to the world.Together.......
              </p>
              <div className="container flex justify-end  my-3 ">
              <p className=" border-2 rounded-sm w-fit p-1 text-sm cursor-pointer bg-white text-black ">Read More... </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-2 border-2 rounded-lg bg-blue-900">
          <div className="container pl-16 py-4 ">
            <h2 className="border-l-4 border-red-600 text-white font-semibold px-5 text-xl ">
              Message from PIC
            </h2>
          </div>
          <div className="container flex flex-row">
            <div className="container flex items-center justify-center">
              <img
                className="w-3/5 "
                src="https://th.bing.com/th/id/OIP.YicYNho-iBJZORWl7BVG1gHaJh?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className="container text-white text-left px-4 my-4">
              <p className="font-semibold my-2">Prof. Rajiv Shekhar</p>
              <p className="font-light">
                <span>Dear Recruiter(s)</span> <br />
                It gives me immense pleasure to take this opportunity to invite
                you to the program at Indian Institute of Technology(Indian
                School of Mines), Dhanbad The time has come again for us to
                exhibit our best minds to the world.Together.......
              </p>
              <div className="container flex justify-end  my-3 ">
              <p className=" border-2 rounded-sm w-fit p-1 text-sm cursor-pointer bg-white text-black ">Read More... </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* footer */}
      <div className={styles.container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.address}>
          <p className="px-10 my-3 text-left ">
            Police Line Road , Main Campus IIT(ISM) near Rani Bandh, Hirapur,
            Sardar Patel Nagar, Dhanbad, Jharkhand, 826004
          </p>
        </div>
        <div className={styles.social_links}>
          <div className="flex flex-row  justify-around ">
            <div>
              <Link to="/login">
                <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              </Link>
            </div>
            <div>
              <Link to="/login">
                <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
              </Link>
            </div>
            <div>
              <Link to="/login">
                <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
              </Link>
            </div>
            <div>
              <Link to="/login">
                <FontAwesomeIcon className="text-3xl" icon={faTwitter} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.useful_links}>
          <h1 className="text-xl font-semibold text-left my-3 ">
            Useful Links
          </h1>
        </div>
        <div className={styles.useful_links_link}>
          <ul className="text-left">
            <li>
              {" "}
              <Link to="/login">Departments</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Administration</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Placement Policies</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Know Dhanbad</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Know About Dhanbad</Link>
            </li>
          </ul>
        </div>
        <div className={styles.direct_links}>
          <h1 className="text-xl font-semibold text-left my-3 ">
            Direct Links
          </h1>
        </div>
        <div className={styles.direct_links_link}>
          <ul className="text-left">
            <li>
              {" "}
              <Link to="/login">IIT(ISM) Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Recruitment Portal</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Recruitment Process</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Alumni Affairs Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Past Recruiters</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className="container py-4 my-4 px-4">
            <div className="border-2 rounded-lg w-fit my-4 border-gray-900">
              <p className="p-2">Contact Us</p>
            </div>
            <div className="container flex flex-row justify-start items-center my-3">
              <FontAwesomeIcon icon={faPhone} />
              <p className="px-4">7512409732</p>
            </div>
            <div className="container flex flex-row justify-start items-center my-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="px-4">cdc@gmail.com</p>
            </div>
            <div className="container flex flex-row text-left justify-between my-3">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <p>
              <FontAwesomeIcon icon={faCopyright} /> 2022 | Indian Institute of
              Technology (Indian School of Mines), Dhanbad
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
