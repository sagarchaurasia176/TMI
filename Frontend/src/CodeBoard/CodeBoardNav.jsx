import { Button } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";

const CodeBoardNav = () => {
  return (
    <div>
      <div className=" flex justify-between p-2 m-auto text-black">
        <NavLink to="/">
          <>
            <span className=" text-white font-medium    ">TMI</span>
          </>
        </NavLink>
       
        <Button className=" p-2 rounded-md  text-white  bg-slate-900 w-16 mr-40">
        Submit
        </Button>
       
      </div>
    </div>
  );
};

export default CodeBoardNav;
