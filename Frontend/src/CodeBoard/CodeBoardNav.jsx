import ThemeMode from "@/page/Theme/ThemeMode";
import { Button } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";

const CodeBoardNav = () => {
  return (
    <div>
      <div className=" flex justify-between p-2 m-auto">
        <NavLink to="/">
          <>
            <span className=" font-bold text-2xl ">TMI</span>
          </>
        </NavLink>
       
        <Button className=" p-2 rounded-md   text-white bg-slate-900 w-16 mr-40">
        Submit
        </Button>
       <ThemeMode/>
      </div>
    </div>
  );
};

export default CodeBoardNav;
