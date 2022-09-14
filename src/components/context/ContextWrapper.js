import React, { useState, useEffect } from 'react';
import { GlobalContext , themes } from './GlobalContext';

export default function ContextWrapper(props) {
  const [theme, setTheme] = useState("");


  useEffect(() => {
    switch (theme) {
      case "white-bg":
        // document.body.classList.add('white-bg');
        
        document.documentElement.style.setProperty('--dark-primary', '#F0F8FF');
        document.documentElement.style.setProperty('--dark-secondary', '#fe6c9e');
        document.documentElement.style.setProperty('--white', 'black');
        break; 
      case "":
        document.documentElement.style.setProperty('--dark-primary', '#03012C');
        document.documentElement.style.setProperty('--dark-secondary', '#EA638C');
        document.documentElement.style.setProperty('--white', 'white');
      default:
        document.documentElement.style.setProperty('--dark-primary', '#03012C');
        document.documentElement.style.setProperty('--dark-secondary', '#EA638C');
        document.documentElement.style.setProperty('--white', 'white');
        break;
    }
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme,setTheme }}>
      {props.children}
    </GlobalContext.Provider>
  );
}