"use client";

import { createContext, useContext, ReactNode } from "react";

// Dark-only — light mode removed per user request.
// ThemeProvider kept as a context wrapper for structural compatibility.
const ThemeContext = createContext<{ theme: "dark" }>({ theme: "dark" });

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeContext.Provider value={{ theme: "dark" }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
