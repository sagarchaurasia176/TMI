import React from "react";
import Meet from "../img/meet.gif";
import { Button } from "@/components/ui/button";
import Footer from "./Footer/Footer";
import WorksPage from "./FourthSection/WorksPage";
import Nextcomponent from "./NextWebSection/Nextcomponent";
import Rated from "./ThirdWebSection/Rated";
import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";



function HeroSection() {
  return (
    <>
    <TopBar/>
      <div class="flex bg-black  justify-center flex-wrap  p-4  h-[90vh] ">
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
          {/* login to the next web */}
          <NavLink to="/ResizableDemo">
            <Button>Try TMI For Free</Button>
          </NavLink>
        </div>

        <div class="sm:blockshadow-md sm:w-1/2">
          <img src={Meet} alt="" />
        </div>
      </div>
      <Nextcomponent />
      <WorksPage />
      <Rated />
      <Footer />
    </>
  );
}

export default HeroSection;
