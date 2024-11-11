import { ThemeContext } from "@/context/ThemeContext";
import ThemeMode from "@/page/Theme/ThemeMode";
import { Button } from "@radix-ui/themes";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SubmitCode from "./core/SubmitCode";

const CodeBoardNav = () => {
  return (
    <div>
      <div className="flex shadow-sm border border-b-2 justify-between space-x-12 p-2 m-auto">
        <div>
          <NavLink to="/">
            <span className="font-bold text-2xl">TMI</span>
          </NavLink>
        </div>

        <div className="space-x-4 flex">


          <Button className="p-2 rounded-md text-white bg-slate-900">
            Next
          </Button>

          <div>
            <SubmitCode />
          </div>
        </div>
        <ThemeMode />
      </div>
    </div>
  );
};

export default CodeBoardNav;
