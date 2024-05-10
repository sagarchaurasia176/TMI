import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeMode = () => {
  const { ThemeChanger, ThemeChange } = useContext(ThemeContext);
  return (
    <div>
      <div onClick={() => ThemeChanger(!ThemeChange)}>
        {ThemeChange ? (
          <CiDark
            className=" cursor-pointer bg-slate-200
            size-6  rounded-md duration-100 
            transition-all
            text-black"
          />
        ) : (
          <MdDarkMode
            className=" bg-slate-900 cursor-pointer duration-100 transition-all size-6 text-white rounded-md"
          />
        )}
      </div>
    </div>
  );
};

export default ThemeMode;
