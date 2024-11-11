import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Code,
  BarChart,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import GeminGiveOutputCard from "./GeminGiveOutputCard";

const InterviewExp = () => {
  // const { CodeEditorPromtValue } = useContext(ThemeContext);
  return (
    <div className=" bg-slate-900 w-full h-screen text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center border-b  dark:bg-gray-800">
        <div className=" flex">
          <Link className="flex items-center justify-center" to="/">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-lg font-bold">TMI</span>
          </Link>
        </div>

        <div className=" flex  justify-center items-center">
          <span className=" ml-[32rem] capitalize  text-lg font-bold text-red-400">
            Mock Interview Results
          </span>
        </div>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </Link>

          <Link
            to="/LanguageSelector"
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Interviews
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About TMI
          </Link>
        </nav>
      </header>
      <div>
        <GeminGiveOutputCard />
      </div>
    </div>
  );
};

export default InterviewExp;
