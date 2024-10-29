"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type themeType = "light" | "dark"

type themeContextType = {
    themeMode: themeType,
    setThemeMode: Dispatch<SetStateAction<themeType>>

}

export const ThemeContext = createContext<themeContextType>({
    themeMode: "light",
    setThemeMode: () => { }
})

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [themeMode, setThemeMode] = useState<themeType>("light")

    return <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    return useContext(ThemeContext)
}