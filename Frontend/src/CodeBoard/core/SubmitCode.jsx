import React, { useContext } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { background, styled } from "@chakra-ui/react";
import { ThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const SubmitCode = () => {
  const { ClickToCallModal} = useContext(ThemeContext);
  return (
    <div>
      <Dialog>
        {/* this is dialogue */}
        <DialogTrigger asChild>
          <Button style={{ background: "red" }}>Submit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thanks to submit</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className=" flex justify-center items-center">
              <span className=" animate-pulse">
                we'll verify you're code kindly take rest
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <button onClick={ClickToCallModal} className=" bg-slate-100 rounded-md  p-3  ">
            <Link to='/InterviewExp'>
              Move to Next
            </Link>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmitCode;
