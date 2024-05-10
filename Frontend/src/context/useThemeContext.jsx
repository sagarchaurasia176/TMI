import React, { createContext, useState } from 'react'
//create context 
export const ThemeContext = createContext();

const useThemeContext = () => {
    const [theme , SetTheme] = useState(false);
    //userClickbale functions apply here
    const ThemeHandler = ()=>{
            SetTheme(!theme);
    }

    //

    return (
    <div>useThemeContext</div>
  )
}

export default useThemeContext