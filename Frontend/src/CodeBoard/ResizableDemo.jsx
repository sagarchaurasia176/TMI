import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import CodeEditor from "./CodeEditor";
import { dsaQuestions } from "../apis/Questions"; 

export function ResizableDemo() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 1) {
      handleNextQuestion();
      setTimeLeft(10 * 60); 
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => 
      prevIndex + 1 < dsaQuestions.length ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <CodeBoardNav />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div className="h-[100vh] p-6">
            {/* Timer display at the top left */}
            <div className="text-lg font-semibold mb-4">
              Time left: {timeLeft} seconds
              {!isRunning && (
                <button
                  onClick={startTimer}
                  className="ml-4 bg-green-500 text-white px-4 py-2 rounded ml-5"
                >
                  Start
                </button>
              )}
              
              <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-5"
              >
              Next Question
            </button>
            </div>

            <div className="p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">
                {dsaQuestions[currentQuestionIndex]?.question}
              </h2>
              <p className="mb-2">
                <strong>Description:</strong> {dsaQuestions[currentQuestionIndex]?.description}
              </p>
              <p>
                <strong>Example:</strong> {dsaQuestions[currentQuestionIndex]?.example}
              </p>
            </div>


          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">

              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">

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
