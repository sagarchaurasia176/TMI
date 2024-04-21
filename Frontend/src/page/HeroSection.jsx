import React from "react";
import Main from "../img/Main.jpg";
import Meet from '../img/meet.gif'
import { Button } from "@/components/ui/button";
function HeroSection() {
  return (
    <>
      <div class="flex  justify-center flex-wrap  p-4  h-[90vh] ">
        <div class=" sm:w-1/2 p-3">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              TECH MOCK
            </span>{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-slate-950  from-red-500">
              INTERVIEW
            </span>{" "} 
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            <h3>
              Land your dream job Practice interview questions and get real-time
              feedback from your private and judgment-free AI Interview Coach
            </h3>
          </p>
          <br></br>
        <Button>Try TMI For Free</Button>
        </div>

        <div class="sm:blockshadow-md sm:w-1/2">
          <img src={Meet} alt="" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
