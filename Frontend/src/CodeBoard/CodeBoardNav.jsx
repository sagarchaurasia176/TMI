import ThemeMode from "@/page/Theme/ThemeMode";
import { Button } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";
import LanguageSelectorBtn from "./LanguageSelectorBtn";

const CodeBoardNav = () => {
  return (
    <div>
      <div className=" flex shadow-sm border border-b-2 justify-center space-x-56 p-2 m-auto">
        <NavLink to="/">
          <>
            <span className=" font-bold text-2xl ">TMI</span>
          </>
        </NavLink>
        {/* <p>new</p> */}
        <Button className=" p-2 rounded-md   text-white bg-slate-900 w-16 mr-40">
        Submit
        </Button>

          {/* editor btn */}

          <LanguageSelectorBtn/>

       <ThemeMode/>
      </div>
    </div>
  );
};

export default CodeBoardNav;
