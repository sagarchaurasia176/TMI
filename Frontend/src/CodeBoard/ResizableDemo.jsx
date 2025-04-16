import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
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
  const [isSpeaking, setIsSpeaking] = useState(false); // Simulated Whisper result

  const videoRef = useRef(null);
  const webcamRef = useRef(null);

  // Countdown Timer Logic
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

  // Simulate Whisper detecting speech every 5s for demo (replace with actual API)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpeaking((prev) => !prev);
    }, 5000); // Toggle every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Control video playback based on speech
  useEffect(() => {
    if (!videoRef.current) return;

    if (isSpeaking) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isSpeaking]);

  // Restart video when it ends
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isSpeaking) videoRef.current.play();
    }
  };

  return (
    <>
      <CodeBoardNav />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div className="h-[100vh] p-6">
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
              <div className="flex flex-col gap-4 h-full items-center justify-center p-4">
                <Webcam
                  audio={true}
                  ref={webcamRef}
                  width={320}
                  height={240}
                  className="rounded shadow-md"
                />
                <video
                  ref={videoRef}
                  src="/sample.mp4"
                  width="320"
                  height="240"
                  onEnded={handleVideoEnded}
                  className="rounded shadow-md"
                  controls={false}
                  muted
                />
                <p className="text-sm text-gray-500">
                  {isSpeaking ? "🎙️ Speaking detected" : "⏸️ Silent - Paused"}
                </p>
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
