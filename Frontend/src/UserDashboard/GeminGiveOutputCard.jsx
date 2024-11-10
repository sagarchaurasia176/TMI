import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeContext } from "@/context/ThemeContext";
const GeminGiveOutputCard = () => {
  const { finalResponseFromModal } = useContext(ThemeContext);
  return (
    // left bar
    <div className=" flex flex-row ">
      <div className=" text-white bg-white  p-12 h-[92vh]"></div>

      {/* card op */}
      <div className=" block p-12">
        <Card>
          <CardHeader className="space-y-0">
            <CardTitle className="text-lg   text-center font-medium"></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 block  backdrop-blur-0">
              <div className=" text-white">
                <ul className=" block ">
                  <li className>{finalResponseFromModal}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeminGiveOutputCard;
