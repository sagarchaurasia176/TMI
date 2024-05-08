import { Button } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";

const CodeBoardNav = () => {
  return (
    <div>
      <div className=" bg-slate-600 flex justify-around p-2 m-auto text-black">
        <NavLink to="/">
          <>
            <span className=" text-white font-medium  ">TMI</span>
          </>
        </NavLink>
        <Button className=" p-1 rounded-md  text-slate-950  bg-slate-300 ml-40">
          Submit
        </Button>
        <Button className=" p-1 rounded-md  text-slate-950  bg-slate-300 mr-40">
          Run
        </Button>
        <p>currently working on</p>
      </div>
    </div>
  );
};

export default CodeBoardNav;
