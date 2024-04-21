import React from "react";
import HappyGif from "../../img/happygif.gif";
function Rated() {
  return (
    <div>
      
      <div className="m-auto grid grid-cols-2 sm:h-[70vh]  sm:grid-cols-2">
        <h1 class="mb-4 text-center sm:text-4xl font-extrabold leading-none tracking-tight text-slate-700 border-spacing-0 border-blue-400 md:text-6xl lg:text-5xl dark:text-white">
          Top-Rated Interview 
          <h2 className=" text-white">
          Preparation APP

          </h2>
        </h1>

        <div className="shadow-md p-4 md:h-[40vh] lg:h-[40vh]  sm:h-10">
          <img src={HappyGif} className="  w-3/5 rounded-lg  ml-20" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rated;
