import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import CodeEditor from "./CodeEditor";

export function ResizableDemo() {
  return (
    <>
      {/* navbar components */}
      <CodeBoardNav />

      {/* code resizable components */}
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[650px]  w-full border border-slate-950 border-x-4 border-y-4  duration-100 "
      >
        {/* Question parts */}
        <ResizablePanel defaultSize={75}>
          <div className="flex h-[500px] items-center justify-center">
            <span className="font-semibold  text-white ">
              Question Part (Don't do anything here) 👉 just write code in right
              section
              {/* Sidebar */}
            </span>
          </div>
        </ResizablePanel>

        {/* code editor parts */}

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-[650px] w-auto  items-center justify-center">
            {/* code editor components are */}
            <CodeEditor />

            {/* <span className="font-semibold text-white">code editor</span> */}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
