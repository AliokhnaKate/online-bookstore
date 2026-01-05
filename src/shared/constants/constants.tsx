import React from "react";

//создание контекста
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

//создание контекста с дефолтными значениями
export const ThemeContext=React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});