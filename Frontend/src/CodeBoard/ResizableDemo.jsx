import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import { CardWithForm } from "./CardWithForm";

export function ResizableDemo() {
  return (
    <>
      <CodeBoardNav />

      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[650px] items-center justify-center p-6">
            <span className="font-semibold">questions comming soon</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />

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
              <div className="flex h-full items-center justify-center p-1 border border-black">
              <CardWithForm/>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
