import {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (darkMode){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
    },[darkMode]);

    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    return useContext(ThemeContext);
}