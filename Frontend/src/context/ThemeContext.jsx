import React, { createContext, useEffect, useState } from "react";
//create context
export const ThemeContext = createContext();
//theme contexts function apply here
const ThemeContexts = ({ children }) => {
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

  //values passed the data here
  const values = {
    ThemeChanger,
    ThemeChange,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContexts;
