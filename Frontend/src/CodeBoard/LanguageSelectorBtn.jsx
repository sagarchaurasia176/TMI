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
import { Button } from "@radix-ui/themes";

const LanguageSelectorBtn = () => {
  //entreis means which gives you the arr of the object
  const Languages = Object.keys(LanguageSupportApi);
  const [clickLngMove , setLngMove] = useState();

  // /

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
                  <NavLink to='/ResizableDemo'>
                    <Button >
                    <SelectItem value={lang} 
                  className =' flex flex-1 cursor-pointer duration-200'>
                  {lang}
                  </SelectItem>
                    </Button>
                  
                  </NavLink>

                ))}
              </SelectContent>
            </Select>
          </div>
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
