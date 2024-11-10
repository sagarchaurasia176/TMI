import { ThemeContext } from "@/context/ThemeContext";
import ThemeMode from "@/page/Theme/ThemeMode";
import { Button } from "@radix-ui/themes";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import LanguageSelectorBtn from "./LanguageSelectorBtn";

const CodeBoardNav = () => {
  const{ClickToCallModal} = useContext(ThemeContext)
  return (
    <div>
      <div className=" flex shadow-sm border border-b-2 justify-between space-x-12  p-2 m-auto">
        <div className=" ">
          <NavLink to="/">
            <>
              <span className=" font-bold text-2xl ">TMI</span>
            </>
          </NavLink>
        </div>

        <div className=" space-x-4">
          <Button className=" p-2 rounded-md    text-white bg-slate-900 ">
            Timer
          </Button>
          <Button className=" p-2 rounded-md   text-white bg-slate-900 ">
            Next
          </Button>
          {/* <p>new</p> */}
          <Button onClick={ClickToCallModal}
            className=" p-2 rounded-md   text-white bg-slate-900 ">
            Submit
          </Button>
        </div>

        {/* editor btn */}

        {/* <LanguageSelectorBtn/> */}

        <ThemeMode />
      </div>
    </div>
  );
};

export default CodeBoardNav;
