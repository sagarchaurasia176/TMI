import React from "react";
import HeaderVideo from "../../img/HeaderVideo.mp4";
function Nextcomponent() {
  return (
    <div>
      <div className=" grid gap-2 p-10 sm:h-[80vh]  my-0 sm:grid-cols-2">
        <div className="  min-h-44 ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
            AI-POWERED INTERVIEW <p></p>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Coach 👉 In Action.
              </span>{" "}
            </h1>
          </h1>
        </div>
        <div 
        className="shadow-md bg-white p-4 md:h-[30vh] rounded-lg ">
          <video autoPlay muted loop className="w-full" controls>
            <source src={HeaderVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Nextcomponent;
