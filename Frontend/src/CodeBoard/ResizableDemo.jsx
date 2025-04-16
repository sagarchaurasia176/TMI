import { useState, useEffect, useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeBoardNav from "./CodeBoardNav";
import CodeEditor from "./CodeEditor";
import { dsaQuestions } from "../apis/Questions";

const VOICE_AGENT_BACKEND_URL = "http://localhost:5000/api/voice-agent";

export function ResizableDemo() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [conversation, setConversation] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  // Timer logic
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

  const startTimer = () => setIsRunning(true);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) =>
      prev + 1 < dsaQuestions.length ? prev + 1 : 0
    );
  };

  const startVoiceAgent = async () => {
    if (isListening || isProcessing) return;
    
    setIsListening(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm'
      });
      mediaRecorderRef.current = mediaRecorder;
      audioChunks.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        setIsProcessing(true);
        try {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
          const formData = new FormData();
          formData.append("audio", audioBlob, "recording.webm");

          const response = await fetch(VOICE_AGENT_BACKEND_URL, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setConversation(prev => [
            ...prev,
            { type: 'user', content: data.transcription },
            { type: 'assistant', content: data.response }
          ]);

          if (data.audioUrl) {
            const audio = new Audio(data.audioUrl);
            await audio.play().catch(e => console.error("Audio play error:", e));
          }
        } catch (err) {
          console.error("Error processing audio:", err);
          setConversation(prev => [
            ...prev,
            { type: 'error', content: "Error processing audio. Please try again." }
          ]);
        } finally {
          setIsProcessing(false);
          setIsListening(false);
          stream.getTracks().forEach(track => track.stop());
        }
      };

      mediaRecorder.start();
      
      // Stop recording after 5 seconds of silence or manual stop
      setTimeout(() => {
        if (mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
        }
      }, 5000);

    } catch (err) {
      console.error("Error accessing microphone:", err);
      setConversation(prev => [
        ...prev,
        { type: 'error', content: "Microphone access denied. Please check permissions." }
      ]);
      setIsListening(false);
    }
  };

  const stopVoiceAgent = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <>
      <CodeBoardNav />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div className="h-[100vh] p-6 overflow-y-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-lg font-semibold">
                Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </div>
              {!isRunning && (
                <button
                  onClick={startTimer}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Start
                </button>
              )}
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Next Question
              </button>
              <button
                onClick={isListening ? stopVoiceAgent : startVoiceAgent}
                disabled={isProcessing}
                className={`px-4 py-2 rounded text-white ${
                  isListening 
                    ? "bg-red-500 hover:bg-red-600" 
                    : isProcessing
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                {isProcessing 
                  ? "Processing..." 
                  : isListening 
                    ? "Stop Listening" 
                    : "Talk to AI 🤖"}
              </button>
            </div>

            <div className="p-4 rounded-lg shadow-md mb-4 bg-white dark:bg-gray-800">
              <h2 className="text-lg font-bold mb-2">
                {dsaQuestions[currentQuestionIndex]?.question}
              </h2>
              <p className="mb-2">
                <strong>Description:</strong>{" "}
                {dsaQuestions[currentQuestionIndex]?.description}
              </p>
              <p>
                <strong>Example:</strong>{" "}
                {dsaQuestions[currentQuestionIndex]?.example}
              </p>
            </div>

            <div className="mt-4 space-y-4">
              <h3 className="font-semibold">Conversation:</h3>
              {conversation.length === 0 && (
                <p className="text-gray-500">No conversation yet. Click "Talk to AI" to start.</p>
              )}
              {conversation.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg ${
                    item.type === 'user' 
                      ? 'bg-blue-100 dark:bg-blue-900 ml-auto max-w-[80%]'
                      : item.type === 'assistant'
                        ? 'bg-gray-100 dark:bg-gray-700 mr-auto max-w-[80%]'
                        : 'bg-red-100 dark:bg-red-900'
                  }`}
                >
                  <p className="font-medium">
                    {item.type === 'user' ? 'You:' : item.type === 'assistant' ? 'AI:' : 'Error:'}
                  </p>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex flex-col gap-4 h-full items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  🎤 Click "Talk to AI" to speak. The agent will respond via audio.
                </p>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-300'
                  }`}></div>
                  <span>{isListening ? "Listening..." : "Mic status"}</span>
                </div>
                {isProcessing && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>Processing your request...</span>
                  </div>
                )}
              </div>
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-gray-800">
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