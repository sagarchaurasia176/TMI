import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import LanguageSelectorBtn from "./LanguageSelectorBtn";
import CodeEditor from "./CodeEditor";

export function ResizableDemo() {
  return ( 
    <>
      <CodeBoardNav />
      {/* resizable demos */}
      <ResizablePanelGroup
      direction="horizontal"
      className=""
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[100vh] items-center justify-center p-6">
          <span className="font-semibold">Questions</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
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
            <CodeEditor/>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>

<<<<<<< HEAD
    
=======
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={15}>
              <div className="flex h-[10px]  items-center justify-center p-6">
                <span className="font-semibold">webrtc comming soon .</span>
                <img
                  className="   w-12  rounded-lg"
                  src=" https://cdn.dribbble.com/users/2302913/screenshots/14269824/media/455d819724aa0ace4dab2ce7830f26d3.jpg"
                  alt=""
                />
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <CodeEditor/>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
>>>>>>> 4fb34ddeeea996ada46a6f28ddc33392c42a67fb
    </>
  );
}
