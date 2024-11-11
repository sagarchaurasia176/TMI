import React, { createContext, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";

const MODALAPI = import.meta.env.VITE_GEMINI_API;
export const ThemeContext = createContext();

const ThemeContexts = ({ children }) => {
  const [CodeEditorPromtValue, setCodeEditor] = useState("");
  const [finalResponseFromModal, setModal] = useState("");
  const [theme, setTheme] = useState(false);
  const [load, setLoad] = useState(false);

  const ThemeChanger = () => {
    setTheme(!theme);
  };
  const ThemeChange = theme ? "light" : "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", ThemeChange);
  }, [ThemeChange]);

  const Prompts = `
  Please review the following code and provide a concise report with clear, actionable points:
  - Correctness: Is the code correct? State 'Yes' or 'No' and give a brief reason if needed.
  - Improvements: Suggest up to 2 key improvements.
  - Complexity: Time and space complexity in a brief format (e.g., O(n)).
  - Best Practices: One relevant best practice or tip.
  - Overall Verdict: A quick summary in one line (e.g., "Efficient but could handle edge cases better").

  Code to analyze:
  ${CodeEditorPromtValue}
`;

  const genAI = new GoogleGenerativeAI(MODALAPI);

  const ClickToCallModal = async () => {
    const toastID = toast.loading("Loading...");
    try {
      setLoad(true);

      let model = await genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(Prompts);
      let response = result.response?.text || "";


      if (typeof response === "string") {
        response = response.replace(/(\*\*|\*|_)(.*?)\1/g, "$2"); 
        response = response.replace(/\n/g, "<br />");
      }

      setModal(response);
      toast.success("Response received!");
      setLoad(false);
    } catch (error) {
      console.error("Error fetching response:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoad(false);
      toast.dismiss(toastID);
    }
  };

  const values = {
    ThemeChanger,
    ThemeChange,
    CodeEditorPromtValue,
    setCodeEditor,
    finalResponseFromModal,
    ClickToCallModal,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContexts;
