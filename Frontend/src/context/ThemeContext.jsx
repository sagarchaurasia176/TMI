import React, { createContext, useEffect, useState } from "react";
import { GenerativeModel } from "@google/generative-ai";
//create context
const MODALAPI = import.meta.env.VITE_GEMINI_API;
export const ThemeContext = createContext();
//theme contexts function apply here
const ThemeContexts = ({ children }) => {
  const [CodeEditorPromtValue, setCodeEditor] = useState("");
  const [finalResponseFromModal, setModal] = useState("");
  const [theme, setTheme] = useState(false);
  //userClickbale functions apply here
  const ThemeChanger = () => {
    setTheme(!theme);
  };
  //theme conditios apply here
  const ThemeChange = theme ? "light" : "dark";
  //this is the attribute which directly move to the html doc page
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", ThemeChange);
  }, [ThemeChange]);

  const Prompts = `Analyze the time complexity of the given code and provide a **short** description in 1 sentences: also tell me the space complexity  ${CodeEditorPromtValue}`;
  const genAI = new GenerativeModel(MODALAPI);
  // PromptHandler
  const ClickToCallModal = async () => {
    try {
      setLoad(true);
      // const model = genAI.ger
      let model = genAI.getGenerativeModel({ model: "gemini-pro" });
      console.log(model)
      // const model =genAI.GenerativeModel ({ model: "gemini-pro" });
      // const model = ({ model: "gemini-pro" });
      const prompt = await Prompts;
      alert("are you sure");
      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(response);
      setModal(response);
      setLoad(false);
      // error
    } catch (er) {
      console.error(er);
      toast.error("error to analyze your code");
    }
  };

  //values passed the data here
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
