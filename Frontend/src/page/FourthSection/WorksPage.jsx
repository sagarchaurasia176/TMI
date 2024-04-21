import React from "react";
import Img from "../../img/img.png";
// import InterviewAi from "../../img/interviewAi.png";
// import Interview from "../../img/interview.png";
import Dashboard from "../../img/Dashboard.png";
import code from "../../img/code.png";

function WorksPage() {
  return (
    <div>
      <h1
        class="mb-4 text-4x
      l items-center justify-center
       flex font-extrabold leading-none tracking-tight
        text-white md:text-5xl lg:text-6xl dark:text-white"
      >

        <h1
          class="mb-4 text-3xl font-extrabold text-gray-900
         dark:text-white md:text-5xl lg:text-6xl"
        >
          <span
            class="text-transparent
          bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            How Does It works
          </span>
          .
        </h1>
      </h1>

      <br></br>
      <div className=" grid sm:grid-cols-2 ">
        <div className=" p-1 cursor-pointer  transition-all  translate-x-10 anim ">
          <img className=" rounded-md  sm:w-[100vh] " src={code} alt="" />
        </div>
        <div className=" bg-black">
          <h1
            class="  animate-bounce sm:ml-12 text-2xl font-extrabold leading-none tracking-tight
        md:text-5xl space-x-4 lg:text-5xl items-center my-44 text-white dark:text-white"
          >
            Solve Questions 
            <br></br>
          </h1>
        </div>
      </div>
      <br></br>

      <div className=" grid p-10 sm:grid-cols-2 ">
        <div>
          <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight
        md:text-5xl space-x-4 lg:text-6xl text-white dark:text-white"
          >
            Track your
            <br></br>
            <span
              class="underline underline-offset-3 decoration-8 decoration-blue-400
             dark:decoration-blue-600 animate-bounce"
            >
              progress over time
            </span>
          </h1>
        </div>

        <div className=" p-2 bg-white">
          <img className=" rounded-md  sm:w-[100vh]" src={Dashboard} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
