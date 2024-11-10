import React, { useState } from "react";
import { LanguageSupportApi } from "./Language";
import HeaderVideo from "../../src/img/HeaderVideo.mp4";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink } from "react-router-dom";

const LanguageSelectorBtn = () => {
  //entreis means which gives you the arr of the object
  const Languages = Object.keys(LanguageSupportApi);

  return (
    <>
      <div
        className=" grid sm:grid-cols-4 gap-1 h-screen
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      text-black w-[100%]"
      >
        <div className=" sm:col-span-2 ">
          <div className=" p-8 my-40 ml-4 h-14 rounded-md  bg-slate-900">
            <Select>
              <SelectTrigger className="  outline ml-20 cursor-pointer w-2/3">
                <SelectValue placeholder="Choose Language   " />
              </SelectTrigger>

              <SelectContent>
                {Languages.map((lang, ver) => (

                  <div key={ver}>
                      <SelectItem
                        value={lang}
                        className=" flex flex-1 cursor-pointer duration-200"
                      >
                        {lang}
                      </SelectItem>
                  </div>
                ))}

              </SelectContent>
            </Select>
            <br />
            <div className=" flex justify-center  items-center">
              <button className=" bg-white p-3 rounded-3xl">
                Choose Language
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <div className=" m-auto flex justify-center ">
            <NavLink to='/ResizableDemo'>

          <button className=" p-2 bg-red-100  rounded-2xl m-auto">Click Next</button>
            </NavLink>

          </div>
=======
          <br />
>>>>>>> 4fb34ddeeea996ada46a6f28ddc33392c42a67fb
        </div>

        {/* next header parts apply theere */}
        <div className=" sm:col-span-2  ">
          <div className="  rounded-lg  p-5  bg-white my-24 ">
            <video src={HeaderVideo} autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <Box>
    //     <Menu>
    //       <MenuButton
    //         className=" bg-white text-black p-2 rounded-md"
    //         as={Button}
    //       >
    //         Languages
    //       </MenuButton>
    //       <MenuList>
    //         {Languages.map((lang, ver) => (
    //           <MenuItem key={lang}>
    //             {Languages}
    //             &nbsp;
    //             {/* text desing */}
    //             <Text as="span" color="gray.600" fontSize="sm">
    //               {ver}
    //             </Text>
    //           </MenuItem>
    //         ))}
    //       </MenuList>
    //     </Menu>
    //   </Box>
    // </div>
  );
};

export default LanguageSelectorBtn;
