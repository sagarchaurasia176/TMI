import React, { useState } from "react";
import logo from "../img/logo.png";
import { ButtonWithIcon } from "./LoginButton";
import { NavLink } from "react-router-dom";
// import { Button } from "@radix-ui/themes";
function TopBar() {
  return (
    <>
      <nav className=" bg-gradient-to-r  from-black to-slate-700 w-full  dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8 rounded-lg   animate-pulse " alt="tmi logo" />
            <span className="self-center  text-2xl  font-medium whitespace-nowrap dark:text-white">
              TMI
            </span>
          </NavLink>

          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <ButtonWithIcon />
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
