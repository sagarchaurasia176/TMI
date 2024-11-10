import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import LanguageSelectorBtn from "./LanguageSelectorBtn";
import CodeEditor from "./CodeEditor";

// resizeable demo
export function ResizableDemo() {
  return (
    <>
      <CodeBoardNav />
      {/* resizable demos */}
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[100vh] items-center justify-center p-6">
            <span className="font-semibold">Questions</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        {/* panel */}
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">webrtc</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-1">
                <CodeEditor />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default ResizableDemo;
