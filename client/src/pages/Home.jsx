import React from "react";

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

      <div className=" flex flex-col  w-screen bg-black h-auto">
        <div>
        <h1 className= "px-2 mt-48 text-4xl text-white">Placement Season 2021-2022 at Glance </h1>
        </div>
        <div className="flex flex-wrap items-end p-3 justify-center w-screen h-[100%]">
        <div className="w-56 h-28 rounded-lg bg-white m-3">

        </div>
        <div className="w-56 h-28 rounded-lg bg-white m-3">

        </div>
        <div className="w-56 h-28 rounded-lg bg-white m-3">

        </div>
        <div className="w-56 h-28 rounded-lg bg-white m-3">

        </div>
        </div>
      </div>

    </>
  );
}
