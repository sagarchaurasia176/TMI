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

  const Prompts = `analyze it and only tell me where I need to improve in step by step:${CodeEditorPromtValue}`;
  const genAI = new GoogleGenerativeAI(MODALAPI);

  const ClickToCallModal = async () => {
    const toastID = toast.loading("Loading...");
    try {
      setLoad(true);

      let model = await genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(Prompts);
      const response = result.response?.text || "";

      setModal(response);
      toast.success("Response received!");
      setLoad(false)
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
